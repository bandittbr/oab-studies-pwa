import { z } from "zod";
import { normalizeText, slugify, uniqueBy } from "./shared";

const articleSchema = z.object({
  id: z.string().optional(),
  articleNumber: z.string().min(1),
  title: z.string().default(""),
  text: z.string().min(1),
  keywords: z.array(z.string()).default([])
});

const sectionSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1),
  articles: z.array(articleSchema).min(1)
});

const chapterSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1),
  sections: z.array(sectionSchema).default([]),
  articles: z.array(articleSchema).default([])
});

const titleSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1),
  chapters: z.array(chapterSchema).default([]),
  articles: z.array(articleSchema).default([])
});

const bookSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1),
  titles: z.array(titleSchema).default([]),
  articles: z.array(articleSchema).default([])
});

const codeSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1),
  shortTitle: z.string().min(1),
  description: z.string().default(""),
  books: z.array(bookSchema).default([]),
  titles: z.array(titleSchema).default([]),
  chapters: z.array(chapterSchema).default([]),
  articles: z.array(articleSchema).default([])
});

const lawImportSchema = z.object({
  packId: z.string().optional(),
  packName: z.string().default("Pacote de lei seca"),
  version: z.string().default("1.0.0"),
  codes: z.array(codeSchema).min(1)
});

function createChapterRecord(codeId, parentId, level, order, title) {
  return {
    id: `${codeId}-${level}-${slugify(title)}-${order}`,
    codeId,
    parentId,
    level,
    title,
    order
  };
}

function normalizeArticle(article, codeId, chapterId) {
  return {
    id: article.id ?? `${codeId}-${slugify(article.articleNumber)}`,
    codeId,
    chapterId,
    articleNumber: normalizeText(article.articleNumber),
    title: normalizeText(article.title),
    text: normalizeText(article.text),
    keywords: article.keywords.map((keyword) => normalizeText(keyword)).filter(Boolean)
  };
}

export function parseLawImportPayload(rawPayload) {
  const parsed = lawImportSchema.parse(rawPayload);
  const lawCodes = [];
  const lawChapters = [];
  const lawArticles = [];

  parsed.codes.forEach((code, codeIndex) => {
    const codeId = code.id ?? `${slugify(code.shortTitle)}-${codeIndex + 1}`;
    lawCodes.push({
      id: codeId,
      title: normalizeText(code.title),
      shortTitle: normalizeText(code.shortTitle),
      description: normalizeText(code.description)
    });

    code.articles.forEach((article) => {
      lawArticles.push(normalizeArticle(article, codeId, null));
    });

    code.chapters.forEach((chapter, chapterIndex) => {
      const chapterRecord = createChapterRecord(codeId, null, "chapter", chapterIndex + 1, chapter.title);
      lawChapters.push(chapterRecord);
      chapter.articles.forEach((article) => {
        lawArticles.push(normalizeArticle(article, codeId, chapterRecord.id));
      });
      chapter.sections.forEach((section, sectionIndex) => {
        const sectionRecord = createChapterRecord(
          codeId,
          chapterRecord.id,
          "section",
          sectionIndex + 1,
          section.title
        );
        lawChapters.push(sectionRecord);
        section.articles.forEach((article) => {
          lawArticles.push(normalizeArticle(article, codeId, sectionRecord.id));
        });
      });
    });

    code.titles.forEach((title, titleIndex) => {
      const titleRecord = createChapterRecord(codeId, null, "title", titleIndex + 1, title.title);
      lawChapters.push(titleRecord);
      title.articles.forEach((article) => {
        lawArticles.push(normalizeArticle(article, codeId, titleRecord.id));
      });
      title.chapters.forEach((chapter, chapterIndex) => {
        const chapterRecord = createChapterRecord(
          codeId,
          titleRecord.id,
          "chapter",
          chapterIndex + 1,
          chapter.title
        );
        lawChapters.push(chapterRecord);
        chapter.articles.forEach((article) => {
          lawArticles.push(normalizeArticle(article, codeId, chapterRecord.id));
        });
        chapter.sections.forEach((section, sectionIndex) => {
          const sectionRecord = createChapterRecord(
            codeId,
            chapterRecord.id,
            "section",
            sectionIndex + 1,
            section.title
          );
          lawChapters.push(sectionRecord);
          section.articles.forEach((article) => {
            lawArticles.push(normalizeArticle(article, codeId, sectionRecord.id));
          });
        });
      });
    });

    code.books.forEach((book, bookIndex) => {
      const bookRecord = createChapterRecord(codeId, null, "book", bookIndex + 1, book.title);
      lawChapters.push(bookRecord);
      book.articles.forEach((article) => {
        lawArticles.push(normalizeArticle(article, codeId, bookRecord.id));
      });
      book.titles.forEach((title, titleIndex) => {
        const titleRecord = createChapterRecord(codeId, bookRecord.id, "title", titleIndex + 1, title.title);
        lawChapters.push(titleRecord);
        title.articles.forEach((article) => {
          lawArticles.push(normalizeArticle(article, codeId, titleRecord.id));
        });
        title.chapters.forEach((chapter, chapterIndex) => {
          const chapterRecord = createChapterRecord(
            codeId,
            titleRecord.id,
            "chapter",
            chapterIndex + 1,
            chapter.title
          );
          lawChapters.push(chapterRecord);
          chapter.articles.forEach((article) => {
            lawArticles.push(normalizeArticle(article, codeId, chapterRecord.id));
          });
          chapter.sections.forEach((section, sectionIndex) => {
            const sectionRecord = createChapterRecord(
              codeId,
              chapterRecord.id,
              "section",
              sectionIndex + 1,
              section.title
            );
            lawChapters.push(sectionRecord);
            section.articles.forEach((article) => {
              lawArticles.push(normalizeArticle(article, codeId, sectionRecord.id));
            });
          });
        });
      });
    });
  });

  return {
    packId: parsed.packId ?? `law-pack-${slugify(parsed.packName)}`,
    type: "laws",
    version: parsed.version,
    packName: parsed.packName,
    content: {
      lawCodes: uniqueBy(lawCodes, (item) => item.id),
      lawChapters: uniqueBy(lawChapters, (item) => item.id),
      lawArticles: uniqueBy(lawArticles, (item) => item.id)
    }
  };
}
