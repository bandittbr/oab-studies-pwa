export function filtersFromSearchParams(searchParams, fallbackFilters) {
  return {
    subjectId: searchParams.get("subjectId") ?? fallbackFilters.subjectId,
    themeId: searchParams.get("themeId") ?? fallbackFilters.themeId,
    examId: searchParams.get("examId") ?? fallbackFilters.examId,
    year: searchParams.get("year") ?? fallbackFilters.year,
    difficulty: searchParams.get("difficulty") ?? fallbackFilters.difficulty,
    onlyWrong: searchParams.get("onlyWrong") === "true" ? true : fallbackFilters.onlyWrong,
    onlyFavorites:
      searchParams.get("onlyFavorites") === "true" ? true : fallbackFilters.onlyFavorites,
    search: searchParams.get("search") ?? fallbackFilters.search
  };
}

export function filtersToSearchParams(filters) {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value === "all" || value === "" || value === false || value === null || value === undefined) {
      return;
    }

    params.set(key, String(value));
  });
  return params.toString();
}
