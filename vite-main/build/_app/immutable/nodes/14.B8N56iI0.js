import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, g as getContext, c as child, f as first_child, i as deep_read_state, u as untrack, e as sibling, r as reset, t as template_effect, q as next, b as get, h as derived_safe_equal, s as set, m as mutable_source, a as pop, o as onMount, k as tick, l as legacy_pre_effect, j as legacy_pre_effect_reset, d as deferred_template_effect, $ as $document, aE as invalidate_inner_signals } from "../chunks/BxIY6ir7.js";
import { f as from_html, a as append, c as comment, t as text } from "../chunks/CAbo1QWi.js";
import { i as if_block } from "../chunks/BoSuMvtf.js";
import { i as init } from "../chunks/ByqEASoO.js";
import { a as store_get, s as setup_stores } from "../chunks/BvQ5O7-v.js";
import { W as WEBUI_NAME, a as models, u as user, c as config, f as functions, b as settings } from "../chunks/2Yg1sHDo.js";
import { j as getFunctionList, l as loadFunctionByUrl, c as createNewFunction, g as getFunctions, k as deleteFunctionById, t as toggleFunctionById, m as toggleGlobalById, a as getFunctionById, n as exportFunctions } from "../chunks/CZmOTAge.js";
import { s as set_text, e as event } from "../chunks/cBADewWV.js";
import { e as each } from "../chunks/7_HZMPNF.js";
import { h as head } from "../chunks/Cb8chUSZ.js";
import { r as remove_input_defaults, a as set_attribute } from "../chunks/kXiCYuyj.js";
import { a as bind_files, b as bind_value } from "../chunks/DVLuwGai.js";
import { b as bind_this } from "../chunks/D16JuV5t.js";
import { t as toast } from "../chunks/BccDN__m.js";
import { f as fileSaver } from "../chunks/DRcZXQDn.js";
import { g as goto } from "../chunks/h-B6Md2q.js";
import { T as Tooltip } from "../chunks/BHXWufQb.js";
import { C as ConfirmDialog } from "../chunks/DhVOSDv1.js";
import { g as getModels } from "../chunks/DtDmpg9G.js";
import { s as slot } from "../chunks/CZEGIGsR.js";
import { p as prop } from "../chunks/BRmGPDvq.js";
import "../chunks/C2A39Ney.js";
import { b as Menu_content, c as Menu_item } from "../chunks/DQmZL-p0.js";
import { f as flyAndScale } from "../chunks/BuLNlPfL.js";
import { D as Dropdown } from "../chunks/NbBmD2S8.js";
import { G as GarbageBin } from "../chunks/C_eYBUEf.js";
import { S as Share } from "../chunks/BK4529jj.js";
import { D as DocumentDuplicate } from "../chunks/D4EXptqs.js";
import { D as Download } from "../chunks/Dm1xcaSj.js";
import { S as Switch_1 } from "../chunks/CakJ276w.js";
import { G as GlobeAlt } from "../chunks/C7Mz867p.js";
import { E as EllipsisHorizontal } from "../chunks/BC-suBaL.js";
import { V as ValvesModal } from "../chunks/DDLm17_q.js";
import { I as ImportModal, M as ManifestModal } from "../chunks/BZtefZQf.js";
import { H as Heart } from "../chunks/1ZyFFfaT.js";
import { S as Search } from "../chunks/2ixn6gs3.js";
import { P as Plus } from "../chunks/F9_n4pHG.js";
import { C as ChevronRight } from "../chunks/CS8GUXml.js";
import { X as XMark } from "../chunks/CUUSX84-.js";
import { P as Pencil } from "../chunks/wRvEFTSI.js";
import { L as Link } from "../chunks/EZxqw5-p.js";
import { V as ViewSelector } from "../chunks/ConyMNx9.js";
import { T as TagSelector } from "../chunks/Bif2ss0f.js";
import { j as capitalizeFirstLetter } from "../chunks/Bh-hrM1w.js";
import { S as Spinner } from "../chunks/CtnI4RVL.js";
var root_5$1 = from_html(`<div class="flex gap-2 justify-between items-center px-3 py-1.5 text-sm font-medium cursor-pointerrounded-md"><div class="flex gap-2 items-center"><!> <div class="flex items-center"> </div></div> <div><!></div></div> <hr class="border-gray-50 dark:border-gray-850 my-1"/>`, 1);
var root_6$1 = from_html(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path></svg> <div class="flex items-center"> </div>`, 1);
var root_7$1 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_8$1 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_9$1 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_10$1 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_4$2 = from_html(`<!> <!> <!> <!> <!> <hr class="border-gray-50 dark:border-gray-850 my-1"/> <!>`, 1);
var root_3$2 = from_html(`<div slot="content"><!></div>`);
function FunctionMenu($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let func = prop($$props, "func", 12);
  let editHandler = prop($$props, "editHandler", 8);
  let shareHandler = prop($$props, "shareHandler", 8);
  let cloneHandler = prop($$props, "cloneHandler", 8);
  let exportHandler = prop($$props, "exportHandler", 8);
  let deleteHandler = prop($$props, "deleteHandler", 8);
  let toggleGlobalHandler = prop($$props, "toggleGlobalHandler", 8);
  let onClose = prop($$props, "onClose", 8);
  let show = mutable_source(false);
  init();
  Dropdown($$anchor, {
    get show() {
      return get(show);
    },
    set show($$value) {
      set(show, $$value);
    },
    $$events: {
      change: (e) => {
        if (e.detail === false) {
          onClose()();
        }
      }
    },
    children: ($$anchor2, $$slotProps) => {
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("More"))));
        Tooltip($$anchor2, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_2 = comment();
            var node = first_child(fragment_2);
            slot(node, $$props, "default", {}, null);
            append($$anchor3, fragment_2);
          },
          $$slots: { default: true }
        });
      }
    },
    $$slots: {
      default: true,
      content: ($$anchor2, $$slotProps) => {
        var div = root_3$2();
        var node_1 = child(div);
        Menu_content(node_1, {
          class: "w-full max-w-[180px] rounded-xl p-1 border border-gray-100  dark:border-gray-800 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-sm",
          sideOffset: -2,
          side: "bottom",
          align: "start",
          get transition() {
            return flyAndScale;
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_3 = root_4$2();
            var node_2 = first_child(fragment_3);
            {
              var consequent = ($$anchor4) => {
                var fragment_4 = root_5$1();
                var div_1 = first_child(fragment_4);
                var div_2 = child(div_1);
                var node_3 = child(div_2);
                GlobeAlt(node_3, {});
                var div_3 = sibling(node_3, 2);
                var text2 = child(div_3, true);
                reset(div_3);
                reset(div_2);
                var div_4 = sibling(div_2, 2);
                var node_4 = child(div_4);
                Switch_1(node_4, {
                  get state() {
                    return func().is_global;
                  },
                  set state($$value) {
                    func(func().is_global = $$value, true);
                  },
                  $$events: {
                    change(...$$args) {
                      var _a;
                      (_a = toggleGlobalHandler()) == null ? void 0 : _a.apply(this, $$args);
                    }
                  },
                  $$legacy: true
                });
                reset(div_4);
                reset(div_1);
                next(2);
                template_effect(($0) => set_text(text2, $0), [() => ($i18n(), untrack(() => $i18n().t("Global")))]);
                append($$anchor4, fragment_4);
              };
              if_block(node_2, ($$render) => {
                if (deep_read_state(func()), untrack(() => ["filter", "action"].includes(func().type))) $$render(consequent);
              });
            }
            var node_5 = sibling(node_2, 2);
            Menu_item(node_5, {
              class: "flex gap-2 items-center px-3 py-1.5 text-sm  font-medium cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800  rounded-md",
              $$events: {
                click: () => {
                  editHandler()();
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_5 = root_6$1();
                var div_5 = sibling(first_child(fragment_5), 2);
                var text_1 = child(div_5, true);
                reset(div_5);
                template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("Edit")))]);
                append($$anchor4, fragment_5);
              },
              $$slots: { default: true }
            });
            var node_6 = sibling(node_5, 2);
            Menu_item(node_6, {
              class: "flex gap-2 items-center px-3 py-1.5 text-sm  font-medium cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800  rounded-md",
              $$events: {
                click: () => {
                  shareHandler()();
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_6 = root_7$1();
                var node_7 = first_child(fragment_6);
                Share(node_7, {});
                var div_6 = sibling(node_7, 2);
                var text_2 = child(div_6, true);
                reset(div_6);
                template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Share")))]);
                append($$anchor4, fragment_6);
              },
              $$slots: { default: true }
            });
            var node_8 = sibling(node_6, 2);
            Menu_item(node_8, {
              class: "flex gap-2 items-center px-3 py-1.5 text-sm  font-medium cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md",
              $$events: {
                click: () => {
                  cloneHandler()();
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_7 = root_8$1();
                var node_9 = first_child(fragment_7);
                DocumentDuplicate(node_9, {});
                var div_7 = sibling(node_9, 2);
                var text_3 = child(div_7, true);
                reset(div_7);
                template_effect(($0) => set_text(text_3, $0), [() => ($i18n(), untrack(() => $i18n().t("Clone")))]);
                append($$anchor4, fragment_7);
              },
              $$slots: { default: true }
            });
            var node_10 = sibling(node_8, 2);
            Menu_item(node_10, {
              class: "flex gap-2 items-center px-3 py-1.5 text-sm  font-medium cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md",
              $$events: {
                click: () => {
                  exportHandler()();
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_8 = root_9$1();
                var node_11 = first_child(fragment_8);
                Download(node_11, {});
                var div_8 = sibling(node_11, 2);
                var text_4 = child(div_8, true);
                reset(div_8);
                template_effect(($0) => set_text(text_4, $0), [() => ($i18n(), untrack(() => $i18n().t("Export")))]);
                append($$anchor4, fragment_8);
              },
              $$slots: { default: true }
            });
            var node_12 = sibling(node_10, 4);
            Menu_item(node_12, {
              class: "flex  gap-2  items-center px-3 py-1.5 text-sm  font-medium cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md",
              $$events: {
                click: () => {
                  deleteHandler()();
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_9 = root_10$1();
                var node_13 = first_child(fragment_9);
                GarbageBin(node_13, { strokeWidth: "2" });
                var div_9 = sibling(node_13, 2);
                var text_5 = child(div_9, true);
                reset(div_9);
                template_effect(($0) => set_text(text_5, $0), [() => ($i18n(), untrack(() => $i18n().t("Delete")))]);
                append($$anchor4, fragment_9);
              },
              $$slots: { default: true }
            });
            append($$anchor3, fragment_3);
          },
          $$slots: { default: true }
        });
        reset(div);
        append($$anchor2, div);
      }
    },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root_4$1 = from_html(`<button class="flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><div class=" self-center mr-2"><!></div> <div class=" self-center truncate"> </div></button> <button class="flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl w-full"><div class=" self-center mr-2"><!></div> <div class=" self-center truncate"> </div></button>`, 1);
var root_3$1 = from_html(`<div slot="content"><!></div>`);
function AddFunctionMenu($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let createHandler = prop($$props, "createHandler", 8);
  let importFromLinkHandler = prop($$props, "importFromLinkHandler", 8);
  let onClose = prop($$props, "onClose", 8, () => {
  });
  let show = mutable_source(false);
  init();
  Dropdown($$anchor, {
    get show() {
      return get(show);
    },
    set show($$value) {
      set(show, $$value);
    },
    $$events: {
      change: (e) => {
        if (e.detail === false) {
          onClose()();
        }
      }
    },
    children: ($$anchor2, $$slotProps) => {
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Create"))));
        Tooltip($$anchor2, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_2 = comment();
            var node = first_child(fragment_2);
            slot(node, $$props, "default", {}, null);
            append($$anchor3, fragment_2);
          },
          $$slots: { default: true }
        });
      }
    },
    $$slots: {
      default: true,
      content: ($$anchor2, $$slotProps) => {
        var div = root_3$1();
        var node_1 = child(div);
        Menu_content(node_1, {
          class: "w-full max-w-[190px] rounded-2xl px-1 py-1 border border-gray-100  dark:border-gray-800 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg",
          sideOffset: 6,
          side: "bottom",
          align: "start",
          get transition() {
            return flyAndScale;
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_3 = root_4$1();
            var button = first_child(fragment_3);
            var div_1 = child(button);
            var node_2 = child(div_1);
            Pencil(node_2, {});
            reset(div_1);
            var div_2 = sibling(div_1, 2);
            var text2 = child(div_2, true);
            reset(div_2);
            reset(button);
            var button_1 = sibling(button, 2);
            var div_3 = child(button_1);
            var node_3 = child(div_3);
            Link(node_3, {});
            reset(div_3);
            var div_4 = sibling(div_3, 2);
            var text_1 = child(div_4, true);
            reset(div_4);
            reset(button_1);
            template_effect(
              ($0, $1) => {
                set_text(text2, $0);
                set_text(text_1, $1);
              },
              [
                () => ($i18n(), untrack(() => $i18n().t("New Function"))),
                () => ($i18n(), untrack(() => $i18n().t("Import From Link")))
              ]
            );
            event("click", button, async () => {
              createHandler()();
              set(show, false);
            });
            event("click", button_1, async () => {
              importFromLinkHandler()();
              set(show, false);
            });
            append($$anchor3, fragment_3);
          },
          $$slots: { default: true }
        });
        reset(div);
        append($$anchor2, div);
      }
    },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root_4 = from_html(`<button class="flex text-xs items-center space-x-1 px-3 py-1.5 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-gray-200 transition"><div class=" self-center font-medium line-clamp-1"> </div></button>`);
var root_3 = from_html(`<button class="flex text-xs items-center space-x-1 px-3 py-1.5 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-gray-200 transition"><div class=" self-center font-medium line-clamp-1"> </div></button> <!>`, 1);
var root_5 = from_html(`<div class=" px-2 py-1.5 rounded-xl bg-black text-white dark:bg-white dark:text-black transition font-medium text-sm flex items-center"><!> <div class=" hidden md:block md:ml-1 text-xs"> </div></div>`);
var root_6 = from_html(`<div class="self-center pl-1.5 translate-y-[0.5px] rounded-l-xl bg-transparent"><button class="p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition"><!></button></div>`);
var root_10 = from_html(`<div class=" text-gray-500 text-xs font-medium shrink-0"> </div>`);
var root_9 = from_html(`<div class=" flex items-center gap-1.5"><div class=" text-xs font-semibold px-1 rounded-sm uppercase line-clamp-1 bg-gray-500/20 text-gray-700 dark:text-gray-200"> </div> <div class="line-clamp-1 text-sm"> </div> <!></div>`);
var root_13 = from_html(`<button class="self-center w-fit text-sm px-2 py-2 dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl" type="button"><!></button>`);
var root_16 = from_html(`<button class="self-center w-fit text-sm px-2 py-2 dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl" type="button"><!></button>`);
var root_17 = from_html(`<button class="self-center w-fit text-sm px-2 py-2 dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl" type="button"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg></button>`);
var root_18 = from_html(`<button class="self-center w-fit text-sm p-1.5 dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl" type="button"><!></button>`);
var root_14 = from_html(`<!> <!> <!>`, 1);
var root_8 = from_html(`<div class=" flex space-x-4 cursor-pointer w-full px-2 py-2 dark:hover:bg-white/5 hover:bg-black/5 rounded-xl"><a class=" flex flex-1 space-x-3.5 cursor-pointer w-full"><div class="flex items-center text-left"><div class=" flex-1 self-center pl-1"><!> <div class="flex gap-1.5 px-1"><div class="text-xs text-gray-500 shrink-0"><!></div> <div class=" text-xs overflow-hidden text-ellipsis line-clamp-1"> </div></div></div></div></a> <div class="flex flex-row gap-0.5 self-center"><!> <div class=" self-center mx-1"><!></div></div></div>`);
var root_7 = from_html(`<div class="px-3 my-2 gap-1 lg:gap-2 grid lg:grid-cols-2"></div>`);
var root_20 = from_html(`<div class=" w-full h-full flex flex-col justify-center items-center my-16 mb-24"><div class="max-w-md text-center"><div class=" text-3xl mb-3">😕</div> <div class=" text-lg font-medium mb-1"> </div> <div class=" text-gray-500 text-center text-xs"> </div></div></div>`);
var root_21 = from_html(`<div class=" my-16"><div class=" text-xl font-medium mb-1 line-clamp-1"> </div> <a class=" flex cursor-pointer items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-850 w-full mb-2 px-3.5 py-1.5 rounded-xl transition" href="https://openwebui.com/functions" target="_blank"><div class=" self-center"><div class=" font-semibold line-clamp-1"> </div> <div class=" text-sm line-clamp-1"> </div></div> <div><div><!></div></div></a></div>`);
var root_22 = from_html(`<div class=" text-sm text-gray-500 truncate"> <span class="  font-semibold"> </span>.</div>`);
var root_23 = from_html(`<div class="text-sm text-gray-500"><div class=" bg-yellow-500/20 text-yellow-700 dark:text-yellow-200 rounded-lg px-4 py-3"><div> </div> <ul class=" mt-1 list-disc pl-4 text-xs"><li> </li> <li> </li></ul></div> <div class="my-3"> </div></div>`);
var root_2 = from_html(`<div class="px-4.5 w-full"><div class="flex flex-col gap-1 px-1 mt-2.5 mb-2"><div class="flex justify-between items-center mb-1 w-full"><input id="documents-import-input" type="file" accept=".json" hidden=""/> <div class="flex justify-between items-center w-full"><div class="flex items-center md:self-center text-xl font-medium px-0.5 gap-2 shrink-0"><div> </div> <div class="text-lg font-medium text-gray-500 dark:text-gray-500"> </div></div> <div class="flex w-full justify-end gap-1.5"><!> <!></div></div></div></div> <div class="py-2 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-850"><div class="px-3.5 flex flex-1 items-center w-full space-x-2 py-0.5 pb-2"><div class="flex flex-1"><div class=" self-center ml-1 mr-3"><!></div> <input class=" w-full text-sm pr-4 py-1 rounded-r-xl outline-hidden bg-transparent"/> <!></div></div> <div class="px-3 flex w-full bg-transparent overflow-x-auto scrollbar-none"><div class="flex gap-0.5 w-fit text-center text-sm rounded-full bg-transparent px-0.5 whitespace-nowrap"><!> <!></div></div> <!></div> <!></div> <!> <!> <!> <!>`, 1);
var root_24 = from_html(`<div class="w-full h-full flex justify-center items-center"><!></div>`);
var root = from_html(`<!> <!>`, 1);
function Functions($$anchor, $$props) {
  push($$props, false);
  const $user = () => store_get(user, "$user", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $WEBUI_NAME = () => store_get(WEBUI_NAME, "$WEBUI_NAME", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const { saveAs } = fileSaver;
  const i18n = getContext("i18n");
  let shiftKey = mutable_source(false);
  let functionsImportInputElement = mutable_source();
  let importFiles = mutable_source();
  let tagsContainerElement = mutable_source();
  let viewOption = mutable_source("");
  let query = mutable_source("");
  let selectedType = mutable_source("");
  let showImportModal = mutable_source(false);
  let showConfirm = mutable_source(false);
  let showManifestModal = mutable_source(false);
  let showValvesModal = mutable_source(false);
  let selectedFunction = mutable_source(null);
  let showDeleteConfirm = mutable_source(false);
  let loaded = mutable_source(false);
  let functions$1 = mutable_source(null);
  let filteredItems = mutable_source([]);
  const setFilteredItems = () => {
    set(filteredItems, get(functions$1).filter((f) => {
      var _a, _b;
      return (get(selectedType) !== "" ? f.type === get(selectedType) : true) && (get(query) === "" || f.name.toLowerCase().includes(get(query).toLowerCase()) || f.id.toLowerCase().includes(get(query).toLowerCase())) && (get(viewOption) === "" || get(viewOption) === "created" && f.user_id === ((_a = $user()) == null ? void 0 : _a.id) || get(viewOption) === "shared" && f.user_id !== ((_b = $user()) == null ? void 0 : _b.id));
    }).sort((a, b) => a.type.localeCompare(b.type) || a.name.localeCompare(b.name)));
  };
  const shareHandler = async (func) => {
    const item = await getFunctionById(localStorage.token, func.id).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    toast.success($i18n().t("Redirecting you to Open WebUI Community"));
    const url = "https://openwebui.com";
    const tab = await window.open(`${url}/functions/create`, "_blank");
    const messageHandler = (event2) => {
      if (event2.origin !== url) return;
      if (event2.data === "loaded") {
        tab.postMessage(JSON.stringify(item), "*");
        window.removeEventListener("message", messageHandler);
      }
    };
    window.addEventListener("message", messageHandler, false);
    console.log(item);
  };
  const cloneHandler = async (func) => {
    const _function = await getFunctionById(localStorage.token, func.id).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (_function) {
      sessionStorage.function = JSON.stringify({
        ..._function,
        id: `${_function.id}_clone`,
        name: `${_function.name} (${$i18n().t("Clone")})`
      });
      goto("/admin/functions/create");
    }
  };
  const exportHandler = async (func) => {
    const _function = await getFunctionById(localStorage.token, func.id).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (_function) {
      let blob = new Blob([JSON.stringify([_function])], { type: "application/json" });
      saveAs(blob, `function-${_function.id}-export-${Date.now()}.json`);
    }
  };
  const deleteHandler = async (func) => {
    var _a, _b, _c;
    const res = await deleteFunctionById(localStorage.token, func.id).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      toast.success($i18n().t("Function deleted successfully"));
      set(functions$1, get(functions$1).filter((f) => f.id !== func.id));
      functions.set(await getFunctions(localStorage.token));
      models.set(await getModels(localStorage.token, ((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_direct_connections) && (((_c = $settings()) == null ? void 0 : _c.directConnections) ?? null), false, true));
    }
  };
  const toggleGlobalHandler = async (func) => {
    var _a, _b, _c;
    const res = await toggleGlobalById(localStorage.token, func.id).catch((error) => {
      toast.error(`${error}`);
    });
    if (res) {
      if (func.is_global) {
        func.type === "filter" ? toast.success($i18n().t("Filter is now globally enabled")) : toast.success($i18n().t("Function is now globally enabled"));
      } else {
        func.type === "filter" ? toast.success($i18n().t("Filter is now globally disabled")) : toast.success($i18n().t("Function is now globally disabled"));
      }
      functions.set(await getFunctions(localStorage.token));
      models.set(await getModels(localStorage.token, ((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_direct_connections) && (((_c = $settings()) == null ? void 0 : _c.directConnections) ?? null), false, true));
    }
  };
  onMount(async () => {
    set(viewOption, (localStorage == null ? void 0 : localStorage.workspaceViewOption) || "");
    set(functions$1, await getFunctionList(localStorage.token).catch((error) => {
      toast.error(`${error}`);
      return [];
    }));
    await tick();
    set(loaded, true);
    const onKeyDown = (event2) => {
      if (event2.key === "Shift") {
        set(shiftKey, true);
      }
    };
    const onKeyUp = (event2) => {
      if (event2.key === "Shift") {
        set(shiftKey, false);
      }
    };
    const onBlur = () => {
      set(shiftKey, false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("blur-sm", onBlur);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("blur-sm", onBlur);
    };
  });
  legacy_pre_effect(
    () => (get(functions$1), get(query), get(selectedType), get(viewOption)),
    () => {
      if (get(functions$1) && get(query) !== void 0 && get(selectedType) !== void 0 && get(viewOption) !== void 0) {
        setFilteredItems();
      }
    }
  );
  legacy_pre_effect_reset();
  init();
  var fragment = root();
  head("1hdw0md", ($$anchor2) => {
    deferred_template_effect(
      ($0) => {
        $document.title = `
		${$0 ?? ""} • ${$WEBUI_NAME() ?? ""}
	`;
      },
      [() => ($i18n(), untrack(() => $i18n().t("Functions")))]
    );
  });
  var node = first_child(fragment);
  ImportModal(node, {
    loadUrlHandler: async (url) => {
      return await loadFunctionByUrl(localStorage.token, url);
    },
    onImport: (func) => {
      sessionStorage.function = JSON.stringify({ ...func });
      goto("/admin/functions/create");
    },
    get show() {
      return get(showImportModal);
    },
    set show($$value) {
      set(showImportModal, $$value);
    },
    $$legacy: true
  });
  var node_1 = sibling(node, 2);
  {
    var consequent_8 = ($$anchor2) => {
      var fragment_1 = root_2();
      var div = first_child(fragment_1);
      var div_1 = child(div);
      var div_2 = child(div_1);
      var input = child(div_2);
      bind_this(input, ($$value) => set(functionsImportInputElement, $$value), () => get(functionsImportInputElement));
      var div_3 = sibling(input, 2);
      var div_4 = child(div_3);
      var div_5 = child(div_4);
      var text$1 = child(div_5, true);
      reset(div_5);
      var div_6 = sibling(div_5, 2);
      var text_1 = child(div_6, true);
      reset(div_6);
      reset(div_4);
      var div_7 = sibling(div_4, 2);
      var node_2 = child(div_7);
      {
        var consequent_1 = ($$anchor3) => {
          var fragment_2 = root_3();
          var button = first_child(fragment_2);
          var div_8 = child(button);
          var text_2 = child(div_8, true);
          reset(div_8);
          reset(button);
          var node_3 = sibling(button, 2);
          {
            var consequent = ($$anchor4) => {
              var button_1 = root_4();
              var div_9 = child(button_1);
              var text_3 = child(div_9, true);
              reset(div_9);
              reset(button_1);
              template_effect(($0) => set_text(text_3, $0), [() => ($i18n(), untrack(() => $i18n().t("Export")))]);
              event("click", button_1, async () => {
                const _functions = await exportFunctions(localStorage.token).catch((error) => {
                  toast.error(`${error}`);
                  return null;
                });
                if (_functions) {
                  let blob = new Blob([JSON.stringify(_functions)], { type: "application/json" });
                  saveAs(blob, `functions-export-${Date.now()}.json`);
                }
              });
              append($$anchor4, button_1);
            };
            if_block(node_3, ($$render) => {
              if (get(functions$1), untrack(() => get(functions$1).length)) $$render(consequent);
            });
          }
          template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Import")))]);
          event("click", button, () => {
            get(functionsImportInputElement).click();
          });
          append($$anchor3, fragment_2);
        };
        if_block(node_2, ($$render) => {
          if ($user(), untrack(() => {
            var _a;
            return ((_a = $user()) == null ? void 0 : _a.role) === "admin";
          })) $$render(consequent_1);
        });
      }
      var node_4 = sibling(node_2, 2);
      AddFunctionMenu(node_4, {
        createHandler: () => {
          goto("/admin/functions/create");
        },
        importFromLinkHandler: () => {
          set(showImportModal, true);
        },
        children: ($$anchor3, $$slotProps) => {
          var div_10 = root_5();
          var node_5 = child(div_10);
          Plus(node_5, { className: "size-3", strokeWidth: "2.5" });
          var div_11 = sibling(node_5, 2);
          var text_4 = child(div_11, true);
          reset(div_11);
          reset(div_10);
          template_effect(($0) => set_text(text_4, $0), [() => ($i18n(), untrack(() => $i18n().t("New Function")))]);
          append($$anchor3, div_10);
        },
        $$slots: { default: true }
      });
      reset(div_7);
      reset(div_3);
      reset(div_2);
      reset(div_1);
      var div_12 = sibling(div_1, 2);
      var div_13 = child(div_12);
      var div_14 = child(div_13);
      var div_15 = child(div_14);
      var node_6 = child(div_15);
      Search(node_6, { className: "size-3.5" });
      reset(div_15);
      var input_1 = sibling(div_15, 2);
      remove_input_defaults(input_1);
      var node_7 = sibling(input_1, 2);
      {
        var consequent_2 = ($$anchor3) => {
          var div_16 = root_6();
          var button_2 = child(div_16);
          var node_8 = child(button_2);
          XMark(node_8, { className: "size-3", strokeWidth: "2" });
          reset(button_2);
          reset(div_16);
          event("click", button_2, () => {
            set(query, "");
          });
          append($$anchor3, div_16);
        };
        if_block(node_7, ($$render) => {
          if (get(query)) $$render(consequent_2);
        });
      }
      reset(div_14);
      reset(div_13);
      var div_17 = sibling(div_13, 2);
      var div_18 = child(div_17);
      var node_9 = child(div_18);
      ViewSelector(node_9, {
        onChange: async (value) => {
          localStorage.workspaceViewOption = value;
          await tick();
        },
        get value() {
          return get(viewOption);
        },
        set value($$value) {
          set(viewOption, $$value);
        },
        $$legacy: true
      });
      var node_10 = sibling(node_9, 2);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => [
          { value: "pipe", label: $i18n().t("Pipe") },
          { value: "filter", label: $i18n().t("Filter") },
          { value: "action", label: $i18n().t("Action") }
        ])));
        TagSelector(node_10, {
          get items() {
            return get($0);
          },
          get value() {
            return get(selectedType);
          },
          set value($$value) {
            set(selectedType, $$value);
          },
          $$legacy: true
        });
      }
      reset(div_18);
      bind_this(div_18, ($$value) => set(tagsContainerElement, $$value), () => get(tagsContainerElement));
      reset(div_17);
      var node_11 = sibling(div_17, 2);
      {
        var consequent_6 = ($$anchor3) => {
          var div_19 = root_7();
          each(div_19, 5, () => get(filteredItems), (func) => func.id, ($$anchor4, func, $$index) => {
            var div_20 = root_8();
            var a_1 = child(div_20);
            var div_21 = child(a_1);
            var div_22 = child(div_21);
            var node_12 = child(div_22);
            Tooltip(node_12, {
              get content() {
                return get(func), untrack(() => get(func).id);
              },
              placement: "top-start",
              children: ($$anchor5, $$slotProps) => {
                var div_23 = root_9();
                var div_24 = child(div_23);
                var text_5 = child(div_24, true);
                reset(div_24);
                var div_25 = sibling(div_24, 2);
                var text_6 = child(div_25, true);
                reset(div_25);
                var node_13 = sibling(div_25, 2);
                {
                  var consequent_3 = ($$anchor6) => {
                    var div_26 = root_10();
                    var text_7 = child(div_26);
                    reset(div_26);
                    template_effect(() => set_text(text_7, `v${(get(func), untrack(() => {
                      var _a, _b, _c;
                      return ((_c = (_b = (_a = get(func)) == null ? void 0 : _a.meta) == null ? void 0 : _b.manifest) == null ? void 0 : _c.version) ?? "";
                    })) ?? ""}`));
                    append($$anchor6, div_26);
                  };
                  if_block(node_13, ($$render) => {
                    if (get(func), untrack(() => {
                      var _a, _b, _c;
                      return (_c = (_b = (_a = get(func)) == null ? void 0 : _a.meta) == null ? void 0 : _b.manifest) == null ? void 0 : _c.version;
                    })) $$render(consequent_3);
                  });
                }
                reset(div_23);
                template_effect(() => {
                  set_text(text_5, (get(func), untrack(() => get(func).type)));
                  set_text(text_6, (get(func), untrack(() => get(func).name)));
                });
                append($$anchor5, div_23);
              },
              $$slots: { default: true }
            });
            var div_27 = sibling(node_12, 2);
            var div_28 = child(div_27);
            var node_14 = child(div_28);
            {
              let $0 = derived_safe_equal(() => (get(func), $i18n(), untrack(() => {
                var _a, _b;
                return ((_b = (_a = get(func)) == null ? void 0 : _a.user) == null ? void 0 : _b.email) ?? $i18n().t("Deleted User");
              })));
              Tooltip(node_14, {
                get content() {
                  return get($0);
                },
                className: "flex shrink-0",
                placement: "top-start",
                children: ($$anchor5, $$slotProps) => {
                  next();
                  var text_8 = text();
                  template_effect(($02) => set_text(text_8, $02), [
                    () => ($i18n(), deep_read_state(capitalizeFirstLetter), get(func), untrack(() => {
                      var _a, _b, _c, _d;
                      return $i18n().t("By {{name}}", {
                        name: capitalizeFirstLetter(((_b = (_a = get(func)) == null ? void 0 : _a.user) == null ? void 0 : _b.name) ?? ((_d = (_c = get(func)) == null ? void 0 : _c.user) == null ? void 0 : _d.email) ?? $i18n().t("Deleted User"))
                      });
                    }))
                  ]);
                  append($$anchor5, text_8);
                },
                $$slots: { default: true }
              });
            }
            reset(div_28);
            var div_29 = sibling(div_28, 2);
            var text_9 = child(div_29, true);
            reset(div_29);
            reset(div_27);
            reset(div_22);
            reset(div_21);
            reset(a_1);
            var div_30 = sibling(a_1, 2);
            var node_15 = child(div_30);
            {
              var consequent_4 = ($$anchor5) => {
                {
                  let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete"))));
                  Tooltip($$anchor5, {
                    get content() {
                      return get($0);
                    },
                    children: ($$anchor6, $$slotProps) => {
                      var button_3 = root_13();
                      var node_16 = child(button_3);
                      GarbageBin(node_16, {});
                      reset(button_3);
                      event("click", button_3, () => {
                        deleteHandler(get(func));
                      });
                      append($$anchor6, button_3);
                    },
                    $$slots: { default: true }
                  });
                }
              };
              var alternate = ($$anchor5) => {
                var fragment_5 = root_14();
                var node_17 = first_child(fragment_5);
                {
                  var consequent_5 = ($$anchor6) => {
                    {
                      let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Support"))));
                      Tooltip($$anchor6, {
                        get content() {
                          return get($0);
                        },
                        children: ($$anchor7, $$slotProps) => {
                          var button_4 = root_16();
                          var node_18 = child(button_4);
                          Heart(node_18, {});
                          reset(button_4);
                          event("click", button_4, () => {
                            set(selectedFunction, get(func));
                            set(showManifestModal, true);
                          });
                          append($$anchor7, button_4);
                        },
                        $$slots: { default: true }
                      });
                    }
                  };
                  if_block(node_17, ($$render) => {
                    if (get(func), untrack(() => {
                      var _a, _b, _c;
                      return ((_c = (_b = (_a = get(func)) == null ? void 0 : _a.meta) == null ? void 0 : _b.manifest) == null ? void 0 : _c.funding_url) ?? false;
                    })) $$render(consequent_5);
                  });
                }
                var node_19 = sibling(node_17, 2);
                {
                  let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Valves"))));
                  Tooltip(node_19, {
                    get content() {
                      return get($0);
                    },
                    children: ($$anchor6, $$slotProps) => {
                      var button_5 = root_17();
                      event("click", button_5, () => {
                        set(selectedFunction, get(func));
                        set(showValvesModal, true);
                      });
                      append($$anchor6, button_5);
                    },
                    $$slots: { default: true }
                  });
                }
                var node_20 = sibling(node_19, 2);
                FunctionMenu(node_20, {
                  get func() {
                    return get(func);
                  },
                  editHandler: () => {
                    goto(`/admin/functions/edit?id=${encodeURIComponent(get(func).id)}`);
                  },
                  shareHandler: () => {
                    shareHandler(get(func));
                  },
                  cloneHandler: () => {
                    cloneHandler(get(func));
                  },
                  exportHandler: () => {
                    exportHandler(get(func));
                  },
                  deleteHandler: async () => {
                    set(selectedFunction, get(func));
                    set(showDeleteConfirm, true);
                  },
                  toggleGlobalHandler: () => {
                    if (["filter", "action"].includes(get(func).type)) {
                      toggleGlobalHandler(get(func));
                    }
                  },
                  onClose: () => {
                  },
                  children: ($$anchor6, $$slotProps) => {
                    var button_6 = root_18();
                    var node_21 = child(button_6);
                    EllipsisHorizontal(node_21, { className: "size-5" });
                    reset(button_6);
                    append($$anchor6, button_6);
                  },
                  $$slots: { default: true }
                });
                append($$anchor5, fragment_5);
              };
              if_block(node_15, ($$render) => {
                if (get(shiftKey)) $$render(consequent_4);
                else $$render(alternate, false);
              });
            }
            var div_31 = sibling(node_15, 2);
            var node_22 = child(div_31);
            {
              let $0 = derived_safe_equal(() => (get(func), $i18n(), untrack(() => get(func).is_active ? $i18n().t("Enabled") : $i18n().t("Disabled"))));
              Tooltip(node_22, {
                get content() {
                  return get($0);
                },
                children: ($$anchor5, $$slotProps) => {
                  Switch_1($$anchor5, {
                    get state() {
                      return get(func).is_active;
                    },
                    set state($$value) {
                      get(func).is_active = $$value, invalidate_inner_signals(() => get(filteredItems));
                    },
                    $$events: {
                      change: async (e) => {
                        var _a, _b, _c;
                        toggleFunctionById(localStorage.token, get(func).id);
                        models.set(await getModels(localStorage.token, ((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_direct_connections) && (((_c = $settings()) == null ? void 0 : _c.directConnections) ?? null), false, true));
                      }
                    },
                    $$legacy: true
                  });
                },
                $$slots: { default: true }
              });
            }
            reset(div_31);
            reset(div_30);
            reset(div_20);
            template_effect(
              ($0) => {
                set_attribute(a_1, "href", $0);
                set_text(text_9, (get(func), untrack(() => get(func).meta.description)));
              },
              [
                () => (get(func), untrack(() => `/admin/functions/edit?id=${encodeURIComponent(get(func).id)}`))
              ]
            );
            append($$anchor4, div_20);
          });
          reset(div_19);
          append($$anchor3, div_19);
        };
        var alternate_1 = ($$anchor3) => {
          var div_32 = root_20();
          var div_33 = child(div_32);
          var div_34 = sibling(child(div_33), 2);
          var text_10 = child(div_34, true);
          reset(div_34);
          var div_35 = sibling(div_34, 2);
          var text_11 = child(div_35, true);
          reset(div_35);
          reset(div_33);
          reset(div_32);
          template_effect(
            ($0, $1) => {
              set_text(text_10, $0);
              set_text(text_11, $1);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("No functions found"))),
              () => ($i18n(), untrack(() => $i18n().t("Try adjusting your search or filter to find what you are looking for.")))
            ]
          );
          append($$anchor3, div_32);
        };
        if_block(node_11, ($$render) => {
          if (get(filteredItems), untrack(() => (get(filteredItems) ?? []).length !== 0)) $$render(consequent_6);
          else $$render(alternate_1, false);
        });
      }
      reset(div_12);
      var node_23 = sibling(div_12, 2);
      {
        var consequent_7 = ($$anchor3) => {
          var div_36 = root_21();
          var div_37 = child(div_36);
          var text_12 = child(div_37, true);
          reset(div_37);
          var a_2 = sibling(div_37, 2);
          var div_38 = child(a_2);
          var div_39 = child(div_38);
          var text_13 = child(div_39, true);
          reset(div_39);
          var div_40 = sibling(div_39, 2);
          var text_14 = child(div_40, true);
          reset(div_40);
          reset(div_38);
          var div_41 = sibling(div_38, 2);
          var div_42 = child(div_41);
          var node_24 = child(div_42);
          ChevronRight(node_24, {});
          reset(div_42);
          reset(div_41);
          reset(a_2);
          reset(div_36);
          template_effect(
            ($0, $1, $2) => {
              set_text(text_12, $0);
              set_text(text_13, $1);
              set_text(text_14, $2);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Made by Open WebUI Community"))),
              () => ($i18n(), untrack(() => $i18n().t("Discover a function"))),
              () => ($i18n(), untrack(() => $i18n().t("Discover, download, and explore custom functions")))
            ]
          );
          append($$anchor3, div_36);
        };
        if_block(node_23, ($$render) => {
          if ($config(), untrack(() => {
            var _a;
            return (_a = $config()) == null ? void 0 : _a.features.enable_community_sharing;
          })) $$render(consequent_7);
        });
      }
      reset(div);
      var node_25 = sibling(div, 2);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete function?"))));
        ConfirmDialog(node_25, {
          get title() {
            return get($0);
          },
          get show() {
            return get(showDeleteConfirm);
          },
          set show($$value) {
            set(showDeleteConfirm, $$value);
          },
          $$events: {
            confirm: () => {
              deleteHandler(get(selectedFunction));
            }
          },
          children: ($$anchor3, $$slotProps) => {
            var div_43 = root_22();
            var text_15 = child(div_43);
            var span = sibling(text_15);
            var text_16 = child(span, true);
            reset(span);
            next();
            reset(div_43);
            template_effect(
              ($02) => {
                set_text(text_15, `${$02 ?? ""} `);
                set_text(text_16, (get(selectedFunction), untrack(() => get(selectedFunction).name)));
              },
              [
                () => ($i18n(), untrack(() => $i18n().t("This will delete")))
              ]
            );
            append($$anchor3, div_43);
          },
          $$slots: { default: true },
          $$legacy: true
        });
      }
      var node_26 = sibling(node_25, 2);
      {
        let $0 = derived_safe_equal(() => (get(selectedFunction), untrack(() => {
          var _a, _b;
          return ((_b = (_a = get(selectedFunction)) == null ? void 0 : _a.meta) == null ? void 0 : _b.manifest) ?? {};
        })));
        ManifestModal(node_26, {
          get manifest() {
            return get($0);
          },
          get show() {
            return get(showManifestModal);
          },
          set show($$value) {
            set(showManifestModal, $$value);
          },
          $$legacy: true
        });
      }
      var node_27 = sibling(node_26, 2);
      {
        let $0 = derived_safe_equal(() => (get(selectedFunction), untrack(() => {
          var _a;
          return ((_a = get(selectedFunction)) == null ? void 0 : _a.id) ?? null;
        })));
        ValvesModal(node_27, {
          type: "function",
          get id() {
            return get($0);
          },
          get show() {
            return get(showValvesModal);
          },
          set show($$value) {
            set(showValvesModal, $$value);
          },
          $$events: {
            save: async () => {
              var _a, _b, _c;
              await tick();
              models.set(await getModels(localStorage.token, ((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_direct_connections) && (((_c = $settings()) == null ? void 0 : _c.directConnections) ?? null), false, true));
            }
          },
          $$legacy: true
        });
      }
      var node_28 = sibling(node_27, 2);
      ConfirmDialog(node_28, {
        get show() {
          return get(showConfirm);
        },
        set show($$value) {
          set(showConfirm, $$value);
        },
        $$events: {
          confirm: () => {
            const reader = new FileReader();
            reader.onload = async (event2) => {
              var _a, _b, _c;
              const _functions = JSON.parse(event2.target.result);
              console.log(_functions);
              for (let func of _functions) {
                if ("function" in func) {
                  func = func.function;
                }
                await createNewFunction(localStorage.token, func).catch((error) => {
                  toast.error(`${error}`);
                  return null;
                });
              }
              toast.success($i18n().t("Functions imported successfully"));
              get(functions$1).set(await getFunctions(localStorage.token));
              models.set(await getModels(localStorage.token, ((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_direct_connections) && (((_c = $settings()) == null ? void 0 : _c.directConnections) ?? null), false, true));
            };
            reader.readAsText(get(importFiles)[0]);
          }
        },
        children: ($$anchor3, $$slotProps) => {
          var div_44 = root_23();
          var div_45 = child(div_44);
          var div_46 = child(div_45);
          var text_17 = child(div_46, true);
          reset(div_46);
          var ul = sibling(div_46, 2);
          var li = child(ul);
          var text_18 = child(li, true);
          reset(li);
          var li_1 = sibling(li, 2);
          var text_19 = child(li_1, true);
          reset(li_1);
          reset(ul);
          reset(div_45);
          var div_47 = sibling(div_45, 2);
          var text_20 = child(div_47, true);
          reset(div_47);
          reset(div_44);
          template_effect(
            ($0, $1, $2, $3) => {
              set_text(text_17, $0);
              set_text(text_18, $1);
              set_text(text_19, $2);
              set_text(text_20, $3);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Please carefully review the following warnings:"))),
              () => ($i18n(), untrack(() => $i18n().t("Functions allow arbitrary code execution."))),
              () => ($i18n(), untrack(() => $i18n().t("Do not install functions from sources you do not fully trust."))),
              () => ($i18n(), untrack(() => $i18n().t("I acknowledge that I have read and I understand the implications of my action. I am aware of the risks associated with executing arbitrary code and I have verified the trustworthiness of the source.")))
            ]
          );
          append($$anchor3, div_44);
        },
        $$slots: { default: true },
        $$legacy: true
      });
      template_effect(
        ($0, $1) => {
          set_text(text$1, $0);
          set_text(text_1, (get(filteredItems), untrack(() => get(filteredItems).length)));
          set_attribute(input_1, "placeholder", $1);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Functions"))),
          () => ($i18n(), untrack(() => $i18n().t("Search Functions")))
        ]
      );
      bind_files(input, () => get(importFiles), ($$value) => set(importFiles, $$value));
      event("change", input, () => {
        console.log(get(importFiles));
        set(showConfirm, true);
      });
      bind_value(input_1, () => get(query), ($$value) => set(query, $$value));
      event("wheel", div_17, (e) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          e.currentTarget.scrollLeft += e.deltaY;
        }
      });
      append($$anchor2, fragment_1);
    };
    var alternate_2 = ($$anchor2) => {
      var div_48 = root_24();
      var node_29 = child(div_48);
      Spinner(node_29, { className: "size-5" });
      reset(div_48);
      append($$anchor2, div_48);
    };
    if_block(node_1, ($$render) => {
      if (get(loaded)) $$render(consequent_8);
      else $$render(alternate_2, false);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
function _page($$anchor, $$props) {
  push($$props, false);
  const $functions = () => store_get(functions, "$functions", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  onMount(async () => {
    await Promise.all([
      (async () => {
        functions.set(await getFunctions(localStorage.token));
      })()
    ]);
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      Functions($$anchor2, {});
    };
    if_block(node, ($$render) => {
      if ($functions() !== null) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _page as component
};
