import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { t as template_effect } from "./BxIY6ir7.js";
import { b as from_svg, a as append } from "./CAbo1QWi.js";
import { a as set_attribute, s as set_class, c as clsx } from "./kXiCYuyj.js";
import { p as prop } from "./BRmGPDvq.js";
var root = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path></svg>`);
function Heart($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
export {
  Heart as H
};
