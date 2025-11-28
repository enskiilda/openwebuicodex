import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, g as getContext, o as onMount, f as first_child, a as pop, d as deferred_template_effect, s as set, m as mutable_source, $ as $document, b as get, c as child, e as sibling, r as reset, t as template_effect, h as derived_safe_equal } from "../chunks/BxIY6ir7.js";
import { s as set_text, e as event } from "../chunks/cBADewWV.js";
import { i as if_block } from "../chunks/BoSuMvtf.js";
import { c as comment, a as append, f as from_html } from "../chunks/CAbo1QWi.js";
import { s as slot } from "../chunks/CZEGIGsR.js";
import { h as head } from "../chunks/Cb8chUSZ.js";
import { s as set_class } from "../chunks/kXiCYuyj.js";
import { i as init } from "../chunks/ByqEASoO.js";
import { s as setup_stores, a as store_get } from "../chunks/BvQ5O7-v.js";
import { g as goto } from "../chunks/h-B6Md2q.js";
import { u as user, W as WEBUI_NAME, m as mobile, s as showSidebar } from "../chunks/2Yg1sHDo.js";
import { p as page } from "../chunks/CrvggIeO.js";
import { T as Tooltip } from "../chunks/BHXWufQb.js";
import { S as Sidebar } from "../chunks/CIfNu5Bq.js";
var root_4 = from_html(`<button id="sidebar-toggle-button" class=" cursor-pointer flex rounded-lg hover:bg-gray-100 dark:hover:bg-gray-850 transition cursor-"><div class=" self-center p-1.5"><!></div></button>`);
var root_3 = from_html(`<div><!></div>`);
var root_2 = from_html(`<div><nav class="   px-2.5 pt-1.5 backdrop-blur-xl drag-region"><div class=" flex items-center gap-1"><!> <div class=" flex w-full"><div class="flex gap-1 scrollbar-none overflow-x-auto w-fit text-center text-sm font-medium rounded-full bg-transparent pt-1"><a href="/admin"> </a> <a href="/admin/evaluations"> </a> <a href="/admin/functions"> </a> <a href="/admin/settings"> </a></div></div></div></nav> <div class="  pb-1 flex-1 max-h-full overflow-y-auto"><!></div></div>`);
function _layout($$anchor, $$props) {
  push($$props, false);
  const $user = () => store_get(user, "$user", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $WEBUI_NAME = () => store_get(WEBUI_NAME, "$WEBUI_NAME", $$stores);
  const $showSidebar = () => store_get(showSidebar, "$showSidebar", $$stores);
  const $mobile = () => store_get(mobile, "$mobile", $$stores);
  const $page = () => store_get(page, "$page", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let loaded = mutable_source(false);
  onMount(async () => {
    var _a;
    if (((_a = $user()) == null ? void 0 : _a.role) !== "admin") {
      await goto("/");
    }
    set(loaded, true);
  });
  init();
  var fragment = comment();
  head("1ig8eow", ($$anchor2) => {
    deferred_template_effect(
      ($0) => {
        $document.title = `
		${$0 ?? ""} • ${$WEBUI_NAME() ?? ""}
	`;
      },
      [() => $i18n().t("Admin Panel")]
    );
  });
  var node = first_child(fragment);
  {
    var consequent_1 = ($$anchor2) => {
      var div = root_2();
      var nav = child(div);
      var div_1 = child(nav);
      var node_1 = child(div_1);
      {
        var consequent = ($$anchor3) => {
          var div_2 = root_3();
          var node_2 = child(div_2);
          {
            let $0 = derived_safe_equal(() => $showSidebar() ? $i18n().t("Close Sidebar") : $i18n().t("Open Sidebar"));
            Tooltip(node_2, {
              get content() {
                return get($0);
              },
              interactive: true,
              children: ($$anchor4, $$slotProps) => {
                var button = root_4();
                var div_3 = child(button);
                var node_3 = child(div_3);
                Sidebar(node_3, {});
                reset(div_3);
                reset(button);
                event("click", button, () => {
                  showSidebar.set(!$showSidebar());
                });
                append($$anchor4, button);
              },
              $$slots: { default: true }
            });
          }
          reset(div_2);
          template_effect(() => set_class(div_2, 1, `${$showSidebar() ? "md:hidden" : ""} flex flex-none items-center self-end`));
          append($$anchor3, div_2);
        };
        if_block(node_1, ($$render) => {
          if ($mobile()) $$render(consequent);
        });
      }
      var div_4 = sibling(node_1, 2);
      var div_5 = child(div_4);
      var a = child(div_5);
      var text = child(a, true);
      reset(a);
      var a_1 = sibling(a, 2);
      var text_1 = child(a_1, true);
      reset(a_1);
      var a_2 = sibling(a_1, 2);
      var text_2 = child(a_2, true);
      reset(a_2);
      var a_3 = sibling(a_2, 2);
      var text_3 = child(a_3, true);
      reset(a_3);
      reset(div_5);
      reset(div_4);
      reset(div_1);
      reset(nav);
      var div_6 = sibling(nav, 2);
      var node_4 = child(div_6);
      slot(node_4, $$props, "default", {}, null);
      reset(div_6);
      reset(div);
      template_effect(
        ($0, $1, $2, $3, $4, $5, $6, $7) => {
          set_class(div, 1, ` flex flex-col h-screen max-h-[100dvh] flex-1 transition-width duration-200 ease-in-out ${$showSidebar() ? "md:max-w-[calc(100%-260px)]" : " md:max-w-[calc(100%-49px)]"}  w-full max-w-full`);
          set_class(a, 1, `min-w-fit p-1.5 ${$0 ?? ""} transition`);
          set_text(text, $1);
          set_class(a_1, 1, `min-w-fit p-1.5 ${$2 ?? ""} transition`);
          set_text(text_1, $3);
          set_class(a_2, 1, `min-w-fit p-1.5 ${$4 ?? ""} transition`);
          set_text(text_2, $5);
          set_class(a_3, 1, `min-w-fit p-1.5 ${$6 ?? ""} transition`);
          set_text(text_3, $7);
        },
        [
          () => $page().url.pathname.includes("/admin/users") ? "" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white",
          () => $i18n().t("Users"),
          () => $page().url.pathname.includes("/admin/evaluations") ? "" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white",
          () => $i18n().t("Evaluations"),
          () => $page().url.pathname.includes("/admin/functions") ? "" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white",
          () => $i18n().t("Functions"),
          () => $page().url.pathname.includes("/admin/settings") ? "" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white",
          () => $i18n().t("Settings")
        ]
      );
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (get(loaded)) $$render(consequent_1);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _layout as component
};
