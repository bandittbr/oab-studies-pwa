function normalize(value) {
  return String(value ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function autoLinkArticles(question, lawArticles, limit = 5) {
  const source = normalize(
    [
      question.statement,
      question.explanation,
      question.support,
      question.theme ?? "",
      ...(question.tags ?? [])
    ].join(" ")
  );

  const ranked = lawArticles
    .map((article) => {
      const haystack = normalize(
        [article.articleNumber, article.title, article.text, ...(article.keywords ?? [])].join(" ")
      );
      let score = 0;

      if (source.includes(normalize(article.articleNumber))) {
        score += 8;
      }

      (article.keywords ?? []).forEach((keyword) => {
        const normalizedKeyword = normalize(keyword);
        if (normalizedKeyword && source.includes(normalizedKeyword)) {
          score += 3;
        }
      });

      if (question.support && haystack.includes(normalize(question.support))) {
        score += 6;
      }

      return {
        articleId: article.id,
        score
      };
    })
    .filter((item) => item.score > 0)
    .sort((left, right) => right.score - left.score)
    .slice(0, limit);

  return ranked.map((item) => item.articleId);
}
