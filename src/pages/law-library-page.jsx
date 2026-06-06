import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { LawAiPanel } from "../components/law-ai-panel";
import { getLawArticlesBySearch } from "../domain/selectors";
import { useStudy } from "../state/study-context";

export function LawLibraryPage() {
  const {
    generateArticleAiPack,
    getArticleAiPack,
    getArticleAnnotation,
    repository,
    saveArticleNote
  } = useStudy();
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const selectedArticleId = searchParams.get("artigo");
  const [codeId, setCodeId] = useState("all");

  const articles = useMemo(
    () => getLawArticlesBySearch(repository, search, codeId),
    [codeId, repository, search]
  );

  const selectedArticle =
    repository.indexes.lawArticleById[selectedArticleId] ?? articles[0] ?? repository.lawArticles[0];
  const articleAnnotation = getArticleAnnotation(selectedArticle?.id);
  const articleAiPack = getArticleAiPack(selectedArticle?.id);

  return (
    <div className="grid gap-5 xl:grid-cols-[0.8fr_1.2fr]">
      <section className="glass-panel rounded-[2rem] p-5">
        <div className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Lei seca</div>
        <h1 className="mt-3 text-3xl font-semibold text-[var(--text)]">Biblioteca normativa</h1>
        <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
          Estrutura pronta para codigos, capitulos e artigos com abertura direta a partir das
          questoes.
        </p>

        <div className="mt-5 grid gap-3">
          <label className="block">
            <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Codigo</span>
            <select
              value={codeId}
              onChange={(event) => setCodeId(event.target.value)}
              className="w-full rounded-2xl border border-[var(--panel-border)] bg-white/5 px-4 py-3 text-sm text-[var(--text)] outline-none"
            >
              <option value="all" className="bg-slate-900 text-white">
                Todos
              </option>
              {repository.lawCodes.map((code) => (
                <option key={code.id} value={code.id} className="bg-slate-900 text-white">
                  {code.shortTitle}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Busca textual</span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="domicilio, boa-fe, art. 300..."
              className="w-full rounded-2xl border border-[var(--panel-border)] bg-white/5 px-4 py-3 text-sm text-[var(--text)] outline-none"
            />
          </label>
        </div>

        <div className="mt-5 space-y-3">
          {articles.map((article) => (
            <a
              key={article.id}
              href={`?artigo=${article.id}`}
              className={`block rounded-[1.4rem] p-4 transition ${
                selectedArticle?.id === article.id ? "bg-[var(--text)] text-[var(--bg)]" : "soft-panel"
              }`}
            >
              <div className="text-xs uppercase tracking-[0.18em] opacity-70">{article.articleNumber}</div>
              <div className="mt-2 text-sm font-semibold">{article.title}</div>
            </a>
          ))}
        </div>
      </section>

      <div className="grid gap-5">
      <section className="glass-panel rounded-[2rem] p-6">
        {selectedArticle ? (
          <>
            <div className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
              {repository.indexes.lawCodeById[selectedArticle.codeId]?.shortTitle}
            </div>
            <h2 className="mt-3 text-4xl font-semibold text-[var(--text)]">{selectedArticle.articleNumber}</h2>
            <div className="mt-2 text-lg text-[var(--muted)]">{selectedArticle.title}</div>
            <div className="mt-6 rounded-[1.8rem] border border-[var(--panel-border)] bg-white/5 p-5 text-base leading-8 text-[var(--text)]">
              {selectedArticle.text}
            </div>

            <div className="mt-6">
              <div className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">Capitulo</div>
              <div className="mt-2 text-sm text-[var(--text)]">
                {repository.lawChapters.find((chapter) => chapter.id === selectedArticle.chapterId)?.title}
              </div>
            </div>

            <div className="mt-6">
              <div className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">Palavras-chave</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {selectedArticle.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full border border-[var(--panel-border)] px-3 py-2 text-sm text-[var(--text)]"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </>
        ) : null}
      </section>
      {selectedArticle ? (
        <LawAiPanel
          articleAnnotation={articleAnnotation}
          aiPack={articleAiPack}
          onGenerateAiPack={() => generateArticleAiPack(selectedArticle.id)}
          onNoteChange={(note) => saveArticleNote(selectedArticle.id, note)}
        />
      ) : null}
      </div>
    </div>
  );
}
