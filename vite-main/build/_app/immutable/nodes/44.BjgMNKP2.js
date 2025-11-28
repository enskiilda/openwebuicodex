import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, g as getContext, o as onMount, f as first_child, a as pop, s as set, m as mutable_source, b as get, c as child, r as reset, e as sibling, t as template_effect } from "../chunks/BxIY6ir7.js";
import { s as set_text, e as event } from "../chunks/cBADewWV.js";
import { i as if_block } from "../chunks/BoSuMvtf.js";
import { c as comment, a as append, f as from_html } from "../chunks/CAbo1QWi.js";
import { i as init } from "../chunks/ByqEASoO.js";
import { s as setup_stores, a as store_get } from "../chunks/BvQ5O7-v.js";
import { g as goto } from "../chunks/h-B6Md2q.js";
import { c as config, W as WEBUI_NAME } from "../chunks/2Yg1sHDo.js";
var root_1 = from_html(`<div class="absolute w-full h-full flex z-50"><div class="absolute rounded-xl w-full h-full backdrop-blur-sm flex justify-center"><div class="m-auto pb-44 flex flex-col justify-center"><div class="max-w-md"><div class="text-center text-2xl font-medium z-50"> </div> <div class=" mt-4 text-center text-sm w-full"> <br class=" "/> <br class=" "/> <a class=" font-medium underline" href="https://github.com/open-webui/open-webui#how-to-install-" target="_blank"> </a> <a class=" font-medium underline" href="https://discord.gg/5rJgQTnV4s" target="_blank"> </a></div> <div class=" mt-6 mx-auto relative group w-fit"><button class="relative z-20 flex px-5 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition font-medium text-sm text-black"> </button></div></div></div></div></div>`);
function _page($$anchor, $$props) {
  push($$props, false);
  const $config = () => store_get(config, "$config", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $WEBUI_NAME = () => store_get(WEBUI_NAME, "$WEBUI_NAME", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let loaded = mutable_source(false);
  onMount(async () => {
    if ($config()) {
      await goto("/");
    }
    set(loaded, true);
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var div = root_1();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var div_3 = child(div_2);
      var div_4 = child(div_3);
      var text = child(div_4, true);
      reset(div_4);
      var div_5 = sibling(div_4, 2);
      var text_1 = child(div_5);
      var a = sibling(text_1, 5);
      var text_2 = child(a, true);
      reset(a);
      var text_3 = sibling(a);
      var a_1 = sibling(text_3);
      var text_4 = child(a_1, true);
      reset(a_1);
      reset(div_5);
      var div_6 = sibling(div_5, 2);
      var button = child(div_6);
      var text_5 = child(button, true);
      reset(button);
      reset(div_6);
      reset(div_3);
      reset(div_2);
      reset(div_1);
      reset(div);
      template_effect(
        ($0, $1, $2, $3, $4, $5) => {
          set_text(text, $0);
          set_text(text_1, `${$1 ?? ""} `);
          set_text(text_2, $2);
          set_text(text_3, ` ${$3 ?? ""} `);
          set_text(text_4, $4);
          set_text(text_5, $5);
        },
        [
          () => $i18n().t("{{webUIName}} Backend Required", { webUIName: $WEBUI_NAME() }),
          () => $i18n().t("Oops! You're using an unsupported method (frontend only). Please serve the WebUI from the backend."),
          () => $i18n().t("See readme.md for instructions"),
          () => $i18n().t("or"),
          () => $i18n().t("join our Discord for help."),
          () => $i18n().t("Check Again")
        ]
      );
      event("click", button, () => {
        location.href = "/";
      });
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (get(loaded)) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _page as component
};
