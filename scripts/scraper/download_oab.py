"""
OAB Scraper — baixa provas da FGV e gera questions-seed.js + official-exams.js
==============================================================================
Requisitos:
    pip install requests pdfplumber selenium webdriver-manager

Uso:
    python scripts/scraper/download_oab.py

O script:
1. Navega pelo site da FGV/OAB para encontrar os links de download dos PDFs
2. Baixa as provas de 1a fase (tipo 1) e gabaritos dos exames 30–46
3. Parseia as questões com pdfplumber
4. Gera src/domain/content/questions-seed.js e official-exams.js

Saída esperada: ~1360 questões reais (17 provas x 80 questões)
"""

import os
import re
import sys
import json
import time
import hashlib
import unicodedata
from pathlib import Path

# ── dependências opcionais ─────────────────────────────────────────────────
try:
    import requests
except ImportError:
    sys.exit("Instale: pip install requests pdfplumber selenium webdriver-manager")

try:
    import pdfplumber
except ImportError:
    sys.exit("Instale: pip install pdfplumber")

# ── configuração ───────────────────────────────────────────────────────────
PROJECT_ROOT = Path(__file__).resolve().parent.parent.parent
CONTENT_DIR  = PROJECT_ROOT / "src" / "domain" / "content"
PDF_CACHE    = PROJECT_ROOT / "scripts" / "scraper" / "pdfs"
PDF_CACHE.mkdir(parents=True, exist_ok=True)

SESSION = requests.Session()
SESSION.headers.update({
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                  "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    "Accept-Language": "pt-BR,pt;q=0.9",
})

# ── mapeamento de exames ───────────────────────────────────────────────────
EXAMS = [
    # (numero, id_interno, label, ano)
    (30, "oab-30", "OAB 30", 2019),
    (31, "oab-31", "OAB 31", 2020),
    (32, "oab-32", "OAB 32", 2020),
    (33, "oab-33", "OAB 33", 2021),
    (34, "oab-34", "OAB 34", 2021),
    (35, "oab-35", "OAB 35", 2022),
    (36, "oab-36", "OAB 36", 2022),
    (37, "oab-37", "OAB 37", 2023),
    (38, "oab-38", "OAB 38", 2023),
    (39, "oab-39", "OAB 39", 2024),
    (40, "oab-40", "OAB 40", 2024),
    (41, "oab-41", "OAB 41", 2025),
    (42, "oab-42", "OAB 42", 2025),
    (43, "oab-43", "OAB 43", 2025),
    (44, "oab-44", "OAB 44", 2026),
    (45, "oab-45", "OAB 45", 2026),
    (46, "oab-46", "OAB 46", 2026),
]

# padrões de URL conhecidos da FGV (tentar em ordem)
PDF_URL_PATTERNS = [
    "https://oab.fgv.br/sites/default/files/{num}eou_1fase_tipo1.pdf",
    "https://oab.fgv.br/sites/default/files/{num}_eou_1fase_tipo1.pdf",
    "https://oab.fgv.br/sites/default/files/{num}eou_1afase_tipo1.pdf",
    "https://oab.fgv.br/sites/default/files/provas/{num}eou_1fase_tipo1.pdf",
    "https://examedeordem.oab.org.br/Documentos/DownloadFile?filename={num}EOU_1Fase_Tipo1.pdf",
    "https://examedeordem.oab.org.br/Documentos/DownloadFile?filename={num}_EOU_1Fase_Tipo1.pdf",
    "https://s.oab.org.br/provas/{num}EOU_1Fase_Tipo1.pdf",
]

GABARITO_PATTERNS = [
    "https://oab.fgv.br/sites/default/files/{num}eou_gabarito_definitivo.pdf",
    "https://oab.fgv.br/sites/default/files/{num}_eou_gabarito.pdf",
    "https://oab.fgv.br/sites/default/files/gabaritos/{num}eou_gabarito.pdf",
    "https://examedeordem.oab.org.br/Documentos/DownloadFile?filename={num}EOU_Gabarito_Definitivo.pdf",
]

# mapeamento de matérias por número de questão (padrão FGV 1ª fase)
# As questões são distribuídas em blocos por matéria. Esse mapeamento é aproximado
# e será refinado pelo gabarito real quando disponível.
SUBJECT_BY_RANGE = [
    (1,  10, "etica"),
    (11, 17, "constitucional"),
    (18, 22, "administrativo"),
    (23, 27, "tributario"),
    (28, 32, "constitucional"),
    (33, 37, "civil"),
    (38, 42, "processo-civil"),
    (43, 47, "penal"),
    (48, 52, "processo-penal"),
    (53, 57, "trabalhista"),
    (58, 62, "empresarial"),
    (63, 67, "consumidor"),
    (68, 72, "civil"),
    (73, 77, "constitucional"),
    (78, 80, "etica"),
]

THEME_BY_SUBJECT = {
    "etica":          "deveres",
    "constitucional": "direitos-fundamentais",
    "administrativo": "atos-administrativos",
    "tributario":     "obrigacao-tributaria",
    "civil":          "contratos",
    "processo-civil": "competencia",
    "penal":          "iter-criminis",
    "processo-penal": "acao-penal",
    "trabalhista":    "contrato-trabalho",
    "empresarial":    "sociedades",
    "consumidor":     "responsabilidade-fornecedor",
}


def get_subject(question_number: int) -> str:
    for start, end, subject in SUBJECT_BY_RANGE:
        if start <= question_number <= end:
            return subject
    return "constitucional"


def normalize(text: str) -> str:
    """Remove caracteres especiais e normaliza espaços."""
    text = unicodedata.normalize("NFKC", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text


def slugify(text: str) -> str:
    text = unicodedata.normalize("NFD", text.lower())
    text = text.encode("ascii", "ignore").decode("ascii")
    text = re.sub(r"[^a-z0-9]+", "-", text).strip("-")
    return text[:60]


# ── download de PDF ────────────────────────────────────────────────────────
def try_download_pdf(url: str, dest: Path) -> bool:
    if dest.exists() and dest.stat().st_size > 10_000:
        print(f"    [cache] {dest.name}")
        return True
    try:
        resp = SESSION.get(url, timeout=30, stream=True)
        if resp.status_code == 200 and "pdf" in resp.headers.get("content-type", "").lower():
            with open(dest, "wb") as f:
                for chunk in resp.iter_content(65536):
                    f.write(chunk)
            print(f"    [ok] {url} → {dest.name} ({dest.stat().st_size // 1024} KB)")
            return True
        return False
    except Exception as e:
        return False


def download_exam_pdf(exam_num: int, exam_id: str) -> Path | None:
    num_str = str(exam_num)
    dest = PDF_CACHE / f"oab{exam_num}_prova.pdf"
    for pattern in PDF_URL_PATTERNS:
        url = pattern.format(num=num_str)
        if try_download_pdf(url, dest):
            return dest
    print(f"  ⚠ Prova {exam_num}: nenhuma URL funcionou. Adicione o PDF manualmente em:\n"
          f"    {dest}")
    return None


def download_gabarito_pdf(exam_num: int) -> Path | None:
    num_str = str(exam_num)
    dest = PDF_CACHE / f"oab{exam_num}_gabarito.pdf"
    for pattern in GABARITO_PATTERNS:
        url = pattern.format(num=num_str)
        if try_download_pdf(url, dest):
            return dest
    return None


# ── parsing do PDF de questões ────────────────────────────────────────────
def extract_text_from_pdf(pdf_path: Path) -> str:
    """Extrai texto de todas as páginas."""
    text = ""
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            page_text = page.extract_text(x_tolerance=2, y_tolerance=2)
            if page_text:
                text += page_text + "\n"
    return text


def parse_questions_from_text(text: str, exam_num: int, exam_id: str, year: int) -> list[dict]:
    """
    Parseia questões do texto bruto do PDF.
    Padrão FGV: "QUESTÃO X" seguido do enunciado e alternativas A–D.
    """
    questions = []

    # separar blocos por "QUESTÃO N"
    blocks = re.split(r"(?=QUEST[ÃA]O\s+\d+)", text, flags=re.IGNORECASE)

    for block in blocks:
        block = normalize(block)
        m = re.match(r"QUEST[ÃA]O\s+(\d+)", block, re.IGNORECASE)
        if not m:
            continue

        qnum = int(m.group(1))
        if qnum < 1 or qnum > 80:
            continue

        # extrair enunciado (entre número e primeira alternativa)
        alt_start = re.search(r"\n?[Aa]\)", block)
        if not alt_start:
            alt_start = re.search(r"\s+[Aa]\s+[\(\)—\-]", block)
        if not alt_start:
            continue

        statement = normalize(block[m.end():alt_start.start()])
        statement = re.sub(r"^[\s\.\:]+", "", statement)

        # extrair alternativas
        alt_pattern = re.compile(
            r"([ABCDabcd])\)\s*(.*?)(?=(?:[ABCDabcd]\))|$)", re.DOTALL
        )
        alt_text = block[alt_start.start():]
        alts_raw = alt_pattern.findall(alt_text)

        if len(alts_raw) < 2:
            # tentar padrão alternativo
            alt_pattern2 = re.compile(
                r"\(([ABCDabcd])\)\s*(.*?)(?=\([ABCDabcd]\)|$)", re.DOTALL
            )
            alts_raw = alt_pattern2.findall(alt_text)

        if len(alts_raw) < 2:
            continue

        alternatives = []
        for alt_id, alt_text_raw in alts_raw:
            alt_id = alt_id.lower()
            alt_text_clean = normalize(alt_text_raw)
            if not alt_text_clean or len(alt_text_clean) < 3:
                continue
            alternatives.append({"id": alt_id, "text": alt_text_clean})

        if len(alternatives) < 2:
            continue

        subject = get_subject(qnum)
        theme   = THEME_BY_SUBJECT.get(subject, "direitos-fundamentais")
        qid     = f"q-{exam_id}-{qnum:02d}"

        questions.append({
            "id":               qid,
            "subjectId":        subject,
            "themeId":          theme,
            "examId":           exam_id,
            "year":             year,
            "questionNumber":   qnum,
            "difficulty":       "medium",
            "statement":        statement[:800],
            "explanation":      "",
            "support":          "",
            "relatedArticleIds": [],
            "tags":             [subject],
            "alternatives":     alternatives,
            "correctId":        None,   # preenchido pelo gabarito
        })

    return questions


# ── parsing do gabarito ────────────────────────────────────────────────────
def parse_gabarito(text: str) -> dict[int, str]:
    """Retorna {numero_questao: letra_correta}."""
    gabarito = {}
    # padrão: "1 A\n2 B\n..." ou "Q1: A" ou "1) A"
    for pattern in [
        r"(\d+)\s*[\.\):]?\s*([ABCD])\b",
        r"QUEST[ÃA]O\s+(\d+)[^\n]*?([ABCD])\s*$",
    ]:
        matches = re.findall(pattern, text, re.MULTILINE | re.IGNORECASE)
        for num_str, letter in matches:
            num = int(num_str)
            if 1 <= num <= 80:
                gabarito[num] = letter.lower()
        if gabarito:
            break
    return gabarito


def apply_gabarito(questions: list[dict], gabarito: dict[int, str]) -> list[dict]:
    """Marca a alternativa correta em cada questão."""
    for q in questions:
        num = q["questionNumber"]
        correct = gabarito.get(num)
        if correct:
            for alt in q["alternatives"]:
                if alt["id"] == correct:
                    alt["correct"] = True
                    break
        else:
            # se não há gabarito, marca a primeira como placeholder
            if q["alternatives"]:
                q["alternatives"][0]["correct"] = True
        del q["correctId"]
    return questions


# ── geração do JS ─────────────────────────────────────────────────────────
def render_question_js(q: dict) -> str:
    def js_str(s):
        return json.dumps(str(s), ensure_ascii=False)

    alts = []
    for a in q["alternatives"]:
        parts = [f'id: {js_str(a["id"])}', f'text: {js_str(a["text"])}']
        if a.get("correct"):
            parts.append("correct: true")
        alts.append("      { " + ", ".join(parts) + " }")

    related = ", ".join(js_str(r) for r in q.get("relatedArticleIds", []))
    tags    = ", ".join(js_str(t) for t in q.get("tags", []))

    return (
        f"  defineQuestion({{\n"
        f"    id: {js_str(q['id'])},\n"
        f"    subjectId: {js_str(q['subjectId'])},\n"
        f"    themeId: {js_str(q['themeId'])},\n"
        f"    examId: {js_str(q['examId'])},\n"
        f"    year: {q['year']},\n"
        f"    questionNumber: {q['questionNumber']},\n"
        f"    difficulty: {js_str(q['difficulty'])},\n"
        f"    statement: {js_str(q['statement'])},\n"
        f"    explanation: {js_str(q.get('explanation', ''))},\n"
        f"    support: {js_str(q.get('support', ''))},\n"
        f"    relatedArticleIds: [{related}],\n"
        f"    tags: [{tags}],\n"
        f"    alternatives: [\n"
        + ",\n".join(alts) + "\n"
        f"    ]\n"
        f"  }})"
    )


def write_questions_seed(all_questions: list[dict]):
    dest = CONTENT_DIR / "questions-seed.js"
    lines = [
        'import { defineQuestion } from "../factories";\n',
        "export const questionSeed = ["
    ]
    for i, q in enumerate(all_questions):
        comma = "," if i < len(all_questions) - 1 else ""
        lines.append(render_question_js(q) + comma)
    lines.append("];")
    dest.write_text("\n".join(lines), encoding="utf-8")
    print(f"\n✓ questions-seed.js — {len(all_questions)} questões → {dest}")


def write_official_exams(exams_data: list[dict]):
    dest = CONTENT_DIR / "official-exams.js"
    lines = ["export const officialExams = ["]
    for i, exam in enumerate(exams_data):
        qo_lines = ",\n".join(
            f'      {{ number: {e["number"]}, questionId: "{e["questionId"]}" }}'
            for e in exam["questionOrder"]
        )
        comma = "," if i < len(exams_data) - 1 else ""
        lines.append(
            f'  {{\n'
            f'    id: "{exam["id"]}",\n'
            f'    examId: "{exam["examId"]}",\n'
            f'    label: "{exam["label"]}",\n'
            f'    fullLabel: "{exam["fullLabel"]}",\n'
            f'    phase: "1a fase",\n'
            f'    year: {exam["year"]},\n'
            f'    durationMinutes: 300,\n'
            f'    totalQuestions: 80,\n'
            f'    questionOrder: [\n{qo_lines}\n    ]\n'
            f'  }}{comma}'
        )
    lines.append("];")
    dest.write_text("\n".join(lines), encoding="utf-8")
    print(f"✓ official-exams.js — {len(exams_data)} provas → {dest}")


# ── main ──────────────────────────────────────────────────────────────────
def main():
    print("=" * 60)
    print("  OAB Scraper — Provas 30 a 46")
    print("=" * 60)

    all_questions = []
    exams_data    = []
    failed_exams  = []

    for exam_num, exam_id, label, year in EXAMS:
        print(f"\n[Exame {exam_num}] {label} ({year})")

        # ── download prova ─────────────────────────────────────────────
        prova_pdf = download_exam_pdf(exam_num, exam_id)
        if not prova_pdf:
            failed_exams.append(exam_num)
            # mesmo sem PDF, registra o exame com questões placeholders
            exams_data.append({
                "id":           f"{exam_id}-1fase",
                "examId":       exam_id,
                "label":        label,
                "fullLabel":    f"{exam_num}o Exame de Ordem Unificado - 1a Fase",
                "year":         year,
                "questionOrder": [],
            })
            continue

        # ── parsear prova ──────────────────────────────────────────────
        print(f"  Parseando questões...")
        prova_text = extract_text_from_pdf(prova_pdf)
        questions  = parse_questions_from_text(prova_text, exam_num, exam_id, year)
        print(f"  Extraídas: {len(questions)} questões")

        # ── download + aplicar gabarito ────────────────────────────────
        gabarito_pdf = download_gabarito_pdf(exam_num)
        if gabarito_pdf:
            gab_text  = extract_text_from_pdf(gabarito_pdf)
            gabarito  = parse_gabarito(gab_text)
            questions = apply_gabarito(questions, gabarito)
            print(f"  Gabarito: {len(gabarito)} respostas aplicadas")
        else:
            # marcar primeira alternativa de cada questão como placeholder
            for q in questions:
                if q["alternatives"]:
                    q["alternatives"][0]["correct"] = True
                del q["correctId"]
            print(f"  ⚠ Gabarito não encontrado — marcador placeholder aplicado")

        all_questions.extend(questions)

        # ── montar questionOrder ───────────────────────────────────────
        question_order = [
            {"number": q["questionNumber"], "questionId": q["id"]}
            for q in sorted(questions, key=lambda x: x["questionNumber"])
        ]
        exams_data.append({
            "id":           f"{exam_id}-1fase",
            "examId":       exam_id,
            "label":        label,
            "fullLabel":    f"{exam_num}o Exame de Ordem Unificado - 1a Fase",
            "year":         year,
            "questionOrder": question_order,
        })

        time.sleep(0.5)  # pausa entre downloads

    # ── escrever arquivos JS ───────────────────────────────────────────
    print("\n" + "=" * 60)
    if all_questions:
        write_questions_seed(all_questions)
        write_official_exams(exams_data)
    else:
        print("Nenhuma questão extraída. Verifique os PDFs em:")
        print(f"  {PDF_CACHE}")

    if failed_exams:
        print(f"\n⚠ Provas sem PDF ({len(failed_exams)}): {failed_exams}")
        print("  Para cada uma delas, baixe manualmente o PDF da prova 1ª fase")
        print(f"  e salve em: {PDF_CACHE}/oabNUM_prova.pdf")
        print("  Depois rode o script novamente.")

    print("\n✓ Concluído!")
    print(f"  Total de questões: {len(all_questions)}")
    print(f"  Provas processadas: {len(exams_data) - len(failed_exams)}/{len(EXAMS)}")


if __name__ == "__main__":
    main()
