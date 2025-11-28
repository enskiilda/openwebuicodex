import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { c as child, r as reset, t as template_effect, u as untrack, i as deep_read_state } from "./BxIY6ir7.js";
import { s as set_text } from "./cBADewWV.js";
import { f as from_html, a as append } from "./CAbo1QWi.js";
import { s as set_class } from "./kXiCYuyj.js";
import { p as prop } from "./BRmGPDvq.js";
var root = from_html(`<div> </div>`);
function Badge($$anchor, $$props) {
  let type = prop($$props, "type", 8, "info");
  let content = prop($$props, "content", 8, "");
  const classNames = {
    info: "bg-blue-500/20 text-blue-700 dark:text-blue-200 ",
    success: "bg-green-500/20 text-green-700 dark:text-green-200",
    warning: "bg-yellow-500/20 text-yellow-700 dark:text-yellow-200",
    error: "bg-red-500/20 text-red-700 dark:text-red-200",
    muted: "bg-gray-500/20 text-gray-700 dark:text-gray-200"
  };
  var div = root();
  var text = child(div, true);
  reset(div);
  template_effect(() => {
    set_class(div, 1, ` text-xs font-semibold ${(deep_read_state(type()), untrack(() => classNames[type()] ?? classNames["info"])) ?? ""}  w-fit px-2 rounded-sm uppercase line-clamp-1 mr-0.5`);
    set_text(text, content());
  });
  append($$anchor, div);
}
export {
  Badge as B
};
