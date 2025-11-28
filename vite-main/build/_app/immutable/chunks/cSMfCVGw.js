import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { t as template_effect } from "./BxIY6ir7.js";
import { b as from_svg, a as append } from "./CAbo1QWi.js";
import { a as set_attribute, s as set_class, c as clsx } from "./kXiCYuyj.js";
import { p as prop } from "./BRmGPDvq.js";
var root = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>`);
function ChevronLeft($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-4 h-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
export {
  ChevronLeft as C
};
