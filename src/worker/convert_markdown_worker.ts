import * as marked from "marked";
import * as sanitizaHtml from "sanitize-html";

const worker: Worker = self as any;

worker.addEventListener("message", (event) => {
  const text = event.data;
  const html = sanitizaHtml(marked(text), {
    allowedTags: [...sanitizaHtml.defaults.allowedTags, "h1", "h2"],
  });
  worker.postMessage({ html });
});
