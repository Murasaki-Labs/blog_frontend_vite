export function navigate(path: string) {
  history.pushState({}, "", path);
  window.dispatchEvent(new Event("popstate"));
}

export function onRouteChange(callback: () => void) {
  window.addEventListener("popstate", callback);
}
