import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { c as child, r as reset, p as push, t as template_effect, u as untrack, i as deep_read_state, a as pop } from "./BxIY6ir7.js";
import { f as from_html, a as append } from "./CAbo1QWi.js";
import { s as slot } from "./CZEGIGsR.js";
import { a as set_attribute, s as set_class } from "./kXiCYuyj.js";
import { i as init } from "./ByqEASoO.js";
import { p as prop } from "./BRmGPDvq.js";
import { b as WEBUI_BASE_URL } from "./DQ9UxF7k.js";
var root$1 = from_html(`<div class=" self-center font-semibold line-clamp-1 flex gap-1 items-center"><!></div>`);
function Name($$anchor, $$props) {
  var div = root$1();
  var node = child(div);
  slot(node, $$props, "default", {}, null);
  reset(div);
  append($$anchor, div);
}
var root = from_html(`<img aria-hidden="true" alt="profile" draggable="false"/>`);
function ProfileImage($$anchor, $$props) {
  push($$props, false);
  let className = prop($$props, "className", 8, "size-8");
  let src = prop($$props, "src", 24, () => `${WEBUI_BASE_URL}/static/favicon.png`);
  init();
  var img = root();
  template_effect(
    ($0) => {
      set_attribute(img, "src", $0);
      set_class(img, 1, ` ${className() ?? ""} object-cover rounded-full`);
    },
    [
      () => (deep_read_state(src()), deep_read_state(WEBUI_BASE_URL), untrack(() => src() === "" ? `${WEBUI_BASE_URL}/static/favicon.png` : src().startsWith(WEBUI_BASE_URL) || src().startsWith("https://www.gravatar.com/avatar/") || src().startsWith("data:") || src().startsWith("/") ? src() : `${WEBUI_BASE_URL}/user.png`))
    ]
  );
  append($$anchor, img);
  pop();
}
export {
  Name as N,
  ProfileImage as P
};
