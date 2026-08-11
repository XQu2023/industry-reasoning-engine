import { createRoot, type Root } from "react-dom/client";
import { JournalLayout } from "./JournalLayout";
import type { JournalBrief } from "./types";

type NavigateFn = (path: string, options?: { replace?: boolean }) => void;

let reactRoot: Root | null = null;

function bindJournalNavigation(container: HTMLElement, navigate: NavigateFn) {
  container.querySelectorAll("a[href]").forEach((anchor) => {
    const href = anchor.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("http")) return;
    anchor.addEventListener("click", (event) => {
      if (
        event.defaultPrevented
        || event.button !== 0
        || event.metaKey
        || event.ctrlKey
        || event.shiftKey
        || event.altKey
      ) {
        return;
      }
      event.preventDefault();
      navigate(href);
    });
  });
}

export function unmountJournalApp() {
  if (!reactRoot) return;
  reactRoot.unmount();
  reactRoot = null;
}

export function mountJournalApp(
  container: HTMLElement,
  brief: JournalBrief,
  navigate: NavigateFn,
) {
  document.documentElement.lang = brief.locale === "zh" ? "zh-CN" : "en";
  document.title = `FORESIGHT — ${brief.hero.title}`;

  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "description");
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", brief.hero.summary);

  if (reactRoot) {
    reactRoot.unmount();
    reactRoot = null;
  }
  container.innerHTML = "";
  reactRoot = createRoot(container);
  reactRoot.render(<JournalLayout brief={brief} />);
  // Bind after paint so anchors exist in the DOM.
  queueMicrotask(() => bindJournalNavigation(container, navigate));
  window.scrollTo(0, 0);
}
