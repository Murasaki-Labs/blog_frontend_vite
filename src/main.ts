import "./style.scss";
import { renderHome } from "./pages/Home";
import { renderArticle } from "./pages/Article";
import { onRouteChange, navigate } from "./router";

const app = document.querySelector<HTMLDivElement>("#app")!;

function matchRoute(path: string) {
  const articleMatch = path.match(/^\/article\/(.+)$/);
  if (articleMatch) return { page: "article", slug: articleMatch[1] };
  return { page: "home" };
}

async function render() {
  const { page, slug } = matchRoute(location.pathname);

  if (page === "article" && slug) {
    app.innerHTML = await renderArticle(slug);
  } else {
    app.innerHTML = await renderHome();
  }

  document.querySelectorAll("[data-link]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href")!;
      navigate(href);
    });
  });
}

onRouteChange(render);
window.addEventListener("DOMContentLoaded", render);
