import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { t as template_effect } from "./BxIY6ir7.js";
import { b as from_svg, a as append } from "./CAbo1QWi.js";
import { a as set_attribute, s as set_class, c as clsx } from "./kXiCYuyj.js";
import { p as prop } from "./BRmGPDvq.js";
var root = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="5" ry="5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="none"></rect><path d="M9.5 21V3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
function Sidebar($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-5");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
export {
  Sidebar as S
};
