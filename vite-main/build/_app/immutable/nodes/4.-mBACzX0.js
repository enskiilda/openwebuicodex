import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, g as getContext, o as onMount, t as template_effect, a as pop, d as deferred_template_effect, c as child, $ as $document, e as sibling, r as reset, b as get, h as derived_safe_equal } from "../chunks/BxIY6ir7.js";
import { s as set_text, e as event } from "../chunks/cBADewWV.js";
import { i as if_block } from "../chunks/BoSuMvtf.js";
import { f as from_html, a as append } from "../chunks/CAbo1QWi.js";
import { s as slot } from "../chunks/CZEGIGsR.js";
import { h as head } from "../chunks/Cb8chUSZ.js";
import { s as set_class } from "../chunks/kXiCYuyj.js";
import { i as init } from "../chunks/ByqEASoO.js";
import { s as setup_stores, a as store_get } from "../chunks/BvQ5O7-v.js";
import { s as showSidebar, W as WEBUI_NAME, m as mobile } from "../chunks/2Yg1sHDo.js";
import { p as page } from "../chunks/CrvggIeO.js";
import { T as Tooltip } from "../chunks/BHXWufQb.js";
import { S as Sidebar } from "../chunks/CIfNu5Bq.js";
var root_3 = from_html(`<button id="sidebar-toggle-button" class=" cursor-pointer flex rounded-lg hover:bg-gray-100 dark:hover:bg-gray-850 transition cursor-"><div class=" self-center p-1.5"><!></div></button>`);
var root_2 = from_html(`<div><!></div>`);
var root = from_html(`<div><nav class="   px-2.5 pt-1.5 backdrop-blur-xl w-full drag-region"><div class=" flex items-center"><!> <div class=" flex w-full"><div class="flex gap-1 scrollbar-none overflow-x-auto w-fit text-center text-sm font-medium rounded-full bg-transparent pt-1"><a href="/playground/notes"> </a> <a href="/playground/completions"> </a></div></div></div></nav> <div class=" flex-1 max-h-full overflow-y-auto"><!></div></div>`);
function _layout($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $WEBUI_NAME = () => store_get(WEBUI_NAME, "$WEBUI_NAME", $$stores);
  const $showSidebar = () => store_get(showSidebar, "$showSidebar", $$stores);
  const $mobile = () => store_get(mobile, "$mobile", $$stores);
  const $page = () => store_get(page, "$page", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  onMount(async () => {
  });
  init();
  var div = root();
  head("147j1we", ($$anchor2) => {
    deferred_template_effect(
      ($0) => {
        $document.title = `
		${$0 ?? ""} • ${$WEBUI_NAME() ?? ""}
	`;
      },
      [() => $i18n().t("Home")]
    );
  });
  var nav = child(div);
  var div_1 = child(nav);
  var node = child(div_1);
  {
    var consequent = ($$anchor2) => {
      var div_2 = root_2();
      var node_1 = child(div_2);
      {
        let $0 = derived_safe_equal(() => $showSidebar() ? $i18n().t("Close Sidebar") : $i18n().t("Open Sidebar"));
        Tooltip(node_1, {
          get content() {
            return get($0);
          },
          interactive: true,
          children: ($$anchor3, $$slotProps) => {
            var button = root_3();
            var div_3 = child(button);
            var node_2 = child(div_3);
            Sidebar(node_2, {});
            reset(div_3);
            reset(button);
            event("click", button, () => {
              showSidebar.set(!$showSidebar());
            });
            append($$anchor3, button);
          },
          $$slots: { default: true }
        });
      }
      reset(div_2);
      template_effect(() => set_class(div_2, 1, `${$showSidebar() ? "md:hidden" : ""} flex flex-none items-center self-end mt-1.5`));
      append($$anchor2, div_2);
    };
    if_block(node, ($$render) => {
      if ($mobile()) $$render(consequent);
    });
  }
  var div_4 = sibling(node, 2);
  var div_5 = child(div_4);
  var a = child(div_5);
  var text = child(a, true);
  reset(a);
  var a_1 = sibling(a, 2);
  var text_1 = child(a_1, true);
  reset(a_1);
  reset(div_5);
  reset(div_4);
  reset(div_1);
  reset(nav);
  var div_6 = sibling(nav, 2);
  var node_3 = child(div_6);
  slot(node_3, $$props, "default", {}, null);
  reset(div_6);
  reset(div);
  template_effect(
    ($0, $1, $2, $3) => {
      set_class(div, 1, ` flex flex-col w-full h-screen max-h-[100dvh] transition-width duration-200 ease-in-out ${$showSidebar() ? "md:max-w-[calc(100%-260px)]" : ""} max-w-full`);
      set_class(a, 1, `min-w-fit p-1.5 ${$0 ?? ""} transition`);
      set_text(text, $1);
      set_class(a_1, 1, `min-w-fit p-1.5 ${$2 ?? ""} transition`);
      set_text(text_1, $3);
    },
    [
      () => $page().url.pathname.includes("/home/notes") ? "" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white",
      () => $i18n().t("Notes"),
      () => $page().url.pathname.includes("/playground/calendar") ? "" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white",
      () => $i18n().t("Calendar")
    ]
  );
  append($$anchor, div);
  pop();
  $$cleanup();
}
export {
  _layout as component
};
