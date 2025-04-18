import { fetchArticles } from "../api";

export async function renderHome(): Promise<string> {
  const articles = await fetchArticles();

  return `
    <div class="p-4">
      <h1 class="text-2xl font-bold mb-4">My Blog</h1>
      <ul class="space-y-2">
        ${articles
          .map(
            (article) => `
          <li>
            <a href="/article/${article.slug}" data-link class="text-blue-600 hover:underline">
              ${article.title}
            </a>
          </li>
        `
          )
          .join("")}
      </ul>
    </div>
  `;
}
