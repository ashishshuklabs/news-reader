interface Source {
  name: string; //Filter criteria
}
export interface ArticleData {
  author: string;
  description: string; //summary
  title: string; //headline
  url: string; //link to the article -> attach to title
  source: Source;
}
export interface NewsData {
  status: string;
  articles: ArticleData[];
}
/**
 * Filter articles based on article source. Returns partial match.
 */
export const getFilteredArticles = (
  source: NewsData,
  filterText: string
): ArticleData[] => {
  return source.articles.filter((a) =>
    a.source.name.toLowerCase().includes(filterText.toLowerCase())
  );
};
