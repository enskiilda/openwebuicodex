import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, f as first_child, i as deep_read_state, u as untrack, a as pop, t as template_effect, c as child, r as reset } from "./BxIY6ir7.js";
import { s as set_text } from "./cBADewWV.js";
import { c as comment, a as append, f as from_html } from "./CAbo1QWi.js";
import { i as if_block } from "./BoSuMvtf.js";
import { a as set_attribute, s as set_class, c as clsx } from "./kXiCYuyj.js";
import { i as init } from "./ByqEASoO.js";
import { p as prop } from "./BRmGPDvq.js";
import { a as store_get, s as setup_stores } from "./BvQ5O7-v.js";
import { b as WEBUI_BASE_URL } from "./DQ9UxF7k.js";
import { d as shortCodesToEmojis } from "./2Yg1sHDo.js";
var root_1 = from_html(`<img loading="lazy"/>`);
var root_2 = from_html(`<div> </div>`);
function Emoji($$anchor, $$props) {
  push($$props, false);
  const $shortCodesToEmojis = () => store_get(shortCodesToEmojis, "$shortCodesToEmojis", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let shortCode = prop($$props, "shortCode", 8);
  let className = prop($$props, "className", 8, "size-4");
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var img = root_1();
      template_effect(
        ($0) => {
          set_attribute(img, "src", `${WEBUI_BASE_URL}/assets/emojis/${$0 ?? ""}.svg`);
          set_attribute(img, "alt", shortCode());
          set_class(img, 1, clsx(className()));
        },
        [
          () => ($shortCodesToEmojis(), deep_read_state(shortCode()), untrack(() => $shortCodesToEmojis()[shortCode()].toLowerCase()))
        ]
      );
      append($$anchor2, img);
    };
    var alternate = ($$anchor2) => {
      var div = root_2();
      var text = child(div, true);
      reset(div);
      template_effect(() => set_text(text, shortCode()));
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if ($shortCodesToEmojis(), deep_read_state(shortCode()), untrack(() => $shortCodesToEmojis()[shortCode()])) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  Emoji as E
};
