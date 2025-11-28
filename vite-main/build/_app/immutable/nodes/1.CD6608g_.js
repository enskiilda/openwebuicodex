import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, t as template_effect, a as pop, c as child, r as reset } from "../chunks/BxIY6ir7.js";
import { s as set_text } from "../chunks/cBADewWV.js";
import { f as from_html, a as append } from "../chunks/CAbo1QWi.js";
import { i as init } from "../chunks/ByqEASoO.js";
import { s as setup_stores, a as store_get } from "../chunks/BvQ5O7-v.js";
import { p as page } from "../chunks/CrvggIeO.js";
var root = from_html(`<div class=" bg-white dark:bg-gray-800 min-h-screen"><div class=" flex h-full"><div class="m-auto my-10 dark:text-gray-300 text-3xl font-medium"> </div></div></div>`);
function _error($$anchor, $$props) {
  push($$props, false);
  const $page = () => store_get(page, "$page", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  init();
  var div = root();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var text = child(div_2);
  reset(div_2);
  reset(div_1);
  reset(div);
  template_effect(() => {
    var _a;
    return set_text(text, `${$page().status ?? ""}: ${((_a = $page().error) == null ? void 0 : _a.message) ?? ""}`);
  });
  append($$anchor, div);
  pop();
  $$cleanup();
}
export {
  _error as component
};
