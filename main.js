import { marked } from "https://esm.sh/marked";

const content = await fetch("/vision.md").then((d) => {
  if (!d.ok) {
    throw d;
  }
  return d.text();
});

const htmlContent = marked(content);
globalThis.content.innerHTML = htmlContent;
