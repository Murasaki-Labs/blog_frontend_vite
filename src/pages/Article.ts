import { fetchArticleHTML } from "../api";

export async function renderArticle(slug: string): Promise<string> {
  const html = await fetchArticleHTML(slug);
  return `<div class="p-4 prose">${html}</div>`;
}
