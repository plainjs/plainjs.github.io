import { marked } from "https://esm.sh/marked";

const content = await fetch("/vision.md").then((d) => {
  if (!d.ok) {
    throw d;
  }
  return d.text();
});

const htmlContent = marked(content);
globalThis.content.innerHTML = htmlContent;

const mainContainer = document.getElementById(
  "main-container",
);

const leftHighlighter = mainContainer.querySelector(
  ".higlighter_item__right",
);
const rightHighlighter = mainContainer.querySelector(
  ".higlighter_item__left",
);

leftHighlighter.style.height = window.innerHeight + "px";
rightHighlighter.style.height = window.innerHeight + "px";
