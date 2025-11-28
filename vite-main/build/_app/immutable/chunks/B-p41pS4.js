import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { e as sibling, c as child, r as reset, t as template_effect } from "./BxIY6ir7.js";
import { f as from_html, a as append } from "./CAbo1QWi.js";
import { s as set_class } from "./kXiCYuyj.js";
import { p as prop } from "./BRmGPDvq.js";
var root = from_html(`<span><span class="absolute inline-flex h-full w-full animate-pulse rounded-full bg-gray-700 dark:bg-gray-200 opacity-75 svelte-pwh38d"></span> <span></span></span>`);
function Skeleton($$anchor, $$props) {
  let size = prop($$props, "size", 8, "md");
  var span = root();
  var span_1 = sibling(child(span), 2);
  reset(span);
  template_effect(() => {
    set_class(
      span,
      1,
      `relative flex ${size() === "md" ? "size-3 my-2" : size() === "xs" ? "size-1.5 my-1" : "size-2 my-1"} mx-1`,
      "svelte-pwh38d"
    );
    set_class(span_1, 1, `relative inline-flex ${size() === "md" ? "size-3" : size() === "xs" ? "size-1.5" : "size-2"} rounded-full bg-black dark:bg-white animate-size`, "svelte-pwh38d");
  });
  append($$anchor, span);
}
export {
  Skeleton as S
};
