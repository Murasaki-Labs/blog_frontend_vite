const API_BASE = "https://blog.jlpt-dojo.org/api";

export async function fetchArticles(): Promise<
  { slug: string; title: string }[]
> {
  const res = await fetch(`${API_BASE}/articles`);
  return await res.json();
}

export async function fetchArticleHTML(slug: string): Promise<string> {
  const res = await fetch(`${API_BASE}/articles/${slug}`);
  return await res.text(); // assuming article is HTML
}
