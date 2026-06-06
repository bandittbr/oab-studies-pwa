# Como importar as questões reais OAB 30–46

## Opção 1 — Automático (tenta baixar da FGV diretamente)

```bash
cd C:\CODEDX\apps\oab-studies-pwa

# instalar dependências (uma vez só)
pip install requests pdfplumber

# rodar o scraper
python scripts/scraper/download_oab.py
```

O script tenta baixar os PDFs automaticamente. Se funcionar, ele gera
`src/domain/content/questions-seed.js` e `official-exams.js` com as
questões reais e roda `npm run build` em seguida.

---

## Opção 2 — Manual (se os downloads automáticos falharem)

### Passo 1 — Baixar os PDFs

Acesse: https://examedeordem.oab.org.br/EditaisProvas?NumeroExame=0

Para cada exame (30 a 46), baixe:
- A prova da 1ª fase (Tipo 1 — caderno azul/padrão)
- O gabarito definitivo

Salve os arquivos na pasta `scripts/scraper/pdfs/` com este padrão:
```
oab30_prova.pdf
oab30_gabarito.pdf
oab31_prova.pdf
oab31_gabarito.pdf
...
oab46_prova.pdf
oab46_gabarito.pdf
```

### Passo 2 — Rodar o parser

```bash
pip install pdfplumber
python scripts/scraper/download_oab.py
```

O script detecta automaticamente os PDFs já baixados (não baixa de novo).

### Passo 3 — Rebuild do app

```bash
npm run build
npm run dev
```

---

## Links diretos (FGV)

| Exame | Ano  | Página FGV                              |
|-------|------|-----------------------------------------|
| 30    | 2019 | https://oab.fgv.br/home.aspx?key=633   |
| 31    | 2019 | https://oab.fgv.br/home.aspx?key=634   |
| 32    | 2020 | https://oab.fgv.br/home.aspx?key=635   |
| 33    | 2020 | https://oab.fgv.br/home.aspx?key=636   |
| 34    | 2021 | https://oab.fgv.br/home.aspx?key=637   |
| 35    | 2021 | https://oab.fgv.br/home.aspx?key=638   |
| 36    | 2022 | https://oab.fgv.br/home.aspx?key=639   |
| 37    | 2022 | https://oab.fgv.br/home.aspx?key=640   |
| 38    | 2023 | https://oab.fgv.br/home.aspx?key=641   |
| 39    | 2023 | https://oab.fgv.br/home.aspx?key=642   |
| 40    | 2024 | https://oab.fgv.br/home.aspx?key=643   |
| 41    | 2024 | https://oab.fgv.br/home.aspx?key=644   |
| 42    | 2025 | https://oab.fgv.br/home.aspx?key=645   |
| 43    | 2025 | https://oab.fgv.br/home.aspx?key=646   |
| 44    | 2025 | https://oab.fgv.br/home.aspx?key=647   |
| 45    | 2025 | https://oab.fgv.br/home.aspx?key=648   |
| 46    | 2026 | https://oab.fgv.br/home.aspx?key=649   |

Em cada página, selecione sua seccional e baixe a prova da 1ª fase.

---

## O que o script faz

1. **Download automático**: tenta ~6 padrões de URL conhecidos da FGV
2. **Parsing com pdfplumber**: extrai enunciados e alternativas A–D
3. **Gabarito**: aplica as respostas corretas de cada questão
4. **Geração de JS**: sobrescreve `questions-seed.js` e `official-exams.js`
   com as ~1360 questões reais

## Limitações conhecidas

- Questões com imagens/tabelas embutidas no PDF podem ter texto incompleto
- O mapeamento de matéria por número de questão é aproximado
  (a FGV não publica uma chave de distribuição oficial)
- Se uma questão foi anulada, o gabarito não terá gabarito para aquele número
