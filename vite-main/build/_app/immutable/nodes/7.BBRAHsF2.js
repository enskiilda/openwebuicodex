import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, g as getContext, o as onMount, f as first_child, a as pop, d as deferred_template_effect, s as set, m as mutable_source, $ as $document, b as get, c as child, e as sibling, r as reset, t as template_effect, h as derived_safe_equal } from "../chunks/BxIY6ir7.js";
import { e as event, s as set_text } from "../chunks/cBADewWV.js";
import { i as if_block } from "../chunks/BoSuMvtf.js";
import { c as comment, a as append, f as from_html } from "../chunks/CAbo1QWi.js";
import { s as slot } from "../chunks/CZEGIGsR.js";
import { h as head } from "../chunks/Cb8chUSZ.js";
import { s as set_class } from "../chunks/kXiCYuyj.js";
import { i as init } from "../chunks/ByqEASoO.js";
import { s as setup_stores, a as store_get } from "../chunks/BvQ5O7-v.js";
import { u as user, W as WEBUI_NAME, m as mobile, s as showSidebar } from "../chunks/2Yg1sHDo.js";
import { p as page } from "../chunks/CrvggIeO.js";
import { g as goto } from "../chunks/h-B6Md2q.js";
import { T as Tooltip } from "../chunks/BHXWufQb.js";
import { S as Sidebar } from "../chunks/CIfNu5Bq.js";
var root_4 = from_html(`<button id="sidebar-toggle-button" class=" cursor-pointer flex rounded-lg hover:bg-gray-100 dark:hover:bg-gray-850 transition cursor-"><div class=" self-center p-1.5"><!></div></button>`);
var root_3 = from_html(`<div><!></div>`);
var root_5 = from_html(`<a href="/workspace/models"> </a>`);
var root_6 = from_html(`<a href="/workspace/knowledge"> </a>`);
var root_7 = from_html(`<a href="/workspace/prompts"> </a>`);
var root_8 = from_html(`<a href="/workspace/tools"> </a>`);
var root_2 = from_html(`<div><nav class="   px-2.5 pt-1.5 backdrop-blur-xl drag-region"><div class=" flex items-center gap-1"><!> <div><div class="flex gap-1 scrollbar-none overflow-x-auto w-fit text-center text-sm font-medium rounded-full bg-transparent py-1 touch-auto pointer-events-auto"><!> <!> <!> <!></div></div></div></nav> <div class="  pb-1 px-3 md:px-[18px] flex-1 max-h-full overflow-y-auto" id="workspace-container"><!></div></div>`);
function _layout($$anchor, $$props) {
  push($$props, false);
  const $user = () => store_get(user, "$user", $$stores);
  const $page = () => store_get(page, "$page", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $WEBUI_NAME = () => store_get(WEBUI_NAME, "$WEBUI_NAME", $$stores);
  const $showSidebar = () => store_get(showSidebar, "$showSidebar", $$stores);
  const $mobile = () => store_get(mobile, "$mobile", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let loaded = mutable_source(false);
  onMount(async () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
    if (((_a = $user()) == null ? void 0 : _a.role) !== "admin") {
      if ($page().url.pathname.includes("/models") && !((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.workspace) == null ? void 0 : _d.models)) {
        goto("/");
      } else if ($page().url.pathname.includes("/knowledge") && !((_g = (_f = (_e = $user()) == null ? void 0 : _e.permissions) == null ? void 0 : _f.workspace) == null ? void 0 : _g.knowledge)) {
        goto("/");
      } else if ($page().url.pathname.includes("/prompts") && !((_j = (_i = (_h = $user()) == null ? void 0 : _h.permissions) == null ? void 0 : _i.workspace) == null ? void 0 : _j.prompts)) {
        goto("/");
      } else if ($page().url.pathname.includes("/tools") && !((_m = (_l = (_k = $user()) == null ? void 0 : _k.permissions) == null ? void 0 : _l.workspace) == null ? void 0 : _m.tools)) {
        goto("/");
      }
    }
    set(loaded, true);
  });
  init();
  var fragment = comment();
  head("q5mosy", ($$anchor2) => {
    deferred_template_effect(
      ($0) => {
        $document.title = `
		${$0 ?? ""} • ${$WEBUI_NAME() ?? ""}
	`;
      },
      [() => $i18n().t("Workspace")]
    );
  });
  var node = first_child(fragment);
  {
    var consequent_5 = ($$anchor2) => {
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
          template_effect(() => set_class(div_2, 1, `${$showSidebar() ? "md:hidden" : ""} self-center flex flex-none items-center`));
          append($$anchor3, div_2);
        };
        if_block(node_1, ($$render) => {
          if ($mobile()) $$render(consequent);
        });
      }
      var div_4 = sibling(node_1, 2);
      var div_5 = child(div_4);
      var node_4 = child(div_5);
      {
        var consequent_1 = ($$anchor3) => {
          var a = root_5();
          var text = child(a, true);
          reset(a);
          template_effect(
            ($0, $1) => {
              set_class(a, 1, `min-w-fit p-1.5 ${$0 ?? ""} transition`);
              set_text(text, $1);
            },
            [
              () => $page().url.pathname.includes("/workspace/models") ? "" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white",
              () => $i18n().t("Models")
            ]
          );
          append($$anchor3, a);
        };
        if_block(node_4, ($$render) => {
          var _a, _b, _c, _d;
          if (((_a = $user()) == null ? void 0 : _a.role) === "admin" || ((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.workspace) == null ? void 0 : _d.models)) $$render(consequent_1);
        });
      }
      var node_5 = sibling(node_4, 2);
      {
        var consequent_2 = ($$anchor3) => {
          var a_1 = root_6();
          var text_1 = child(a_1, true);
          reset(a_1);
          template_effect(
            ($0, $1) => {
              set_class(a_1, 1, `min-w-fit p-1.5 ${$0 ?? ""} transition`);
              set_text(text_1, $1);
            },
            [
              () => $page().url.pathname.includes("/workspace/knowledge") ? "" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white",
              () => $i18n().t("Knowledge")
            ]
          );
          append($$anchor3, a_1);
        };
        if_block(node_5, ($$render) => {
          var _a, _b, _c, _d;
          if (((_a = $user()) == null ? void 0 : _a.role) === "admin" || ((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.workspace) == null ? void 0 : _d.knowledge)) $$render(consequent_2);
        });
      }
      var node_6 = sibling(node_5, 2);
      {
        var consequent_3 = ($$anchor3) => {
          var a_2 = root_7();
          var text_2 = child(a_2, true);
          reset(a_2);
          template_effect(
            ($0, $1) => {
              set_class(a_2, 1, `min-w-fit p-1.5 ${$0 ?? ""} transition`);
              set_text(text_2, $1);
            },
            [
              () => $page().url.pathname.includes("/workspace/prompts") ? "" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white",
              () => $i18n().t("Prompts")
            ]
          );
          append($$anchor3, a_2);
        };
        if_block(node_6, ($$render) => {
          var _a, _b, _c, _d;
          if (((_a = $user()) == null ? void 0 : _a.role) === "admin" || ((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.workspace) == null ? void 0 : _d.prompts)) $$render(consequent_3);
        });
      }
      var node_7 = sibling(node_6, 2);
      {
        var consequent_4 = ($$anchor3) => {
          var a_3 = root_8();
          var text_3 = child(a_3, true);
          reset(a_3);
          template_effect(
            ($0, $1) => {
              set_class(a_3, 1, `min-w-fit p-1.5 ${$0 ?? ""} transition`);
              set_text(text_3, $1);
            },
            [
              () => $page().url.pathname.includes("/workspace/tools") ? "" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white",
              () => $i18n().t("Tools")
            ]
          );
          append($$anchor3, a_3);
        };
        if_block(node_7, ($$render) => {
          var _a, _b, _c, _d;
          if (((_a = $user()) == null ? void 0 : _a.role) === "admin" || ((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.workspace) == null ? void 0 : _d.tools)) $$render(consequent_4);
        });
      }
      reset(div_5);
      reset(div_4);
      reset(div_1);
      reset(nav);
      var div_6 = sibling(nav, 2);
      var node_8 = child(div_6);
      slot(node_8, $$props, "default", {}, null);
      reset(div_6);
      reset(div);
      template_effect(() => set_class(div, 1, ` relative flex flex-col w-full h-screen max-h-[100dvh] transition-width duration-200 ease-in-out ${$showSidebar() ? "md:max-w-[calc(100%-260px)]" : ""} max-w-full`));
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (get(loaded)) $$render(consequent_5);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _layout as component
};
