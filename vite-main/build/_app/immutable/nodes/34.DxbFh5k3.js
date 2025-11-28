import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, g as getContext, c as child, f as first_child, e as sibling, r as reset, t as template_effect, u as untrack, i as deep_read_state, s as set, b as get, m as mutable_source, h as derived_safe_equal, a as pop, o as onMount, l as legacy_pre_effect, j as legacy_pre_effect_reset, d as deferred_template_effect, $ as $document, k as tick, aE as invalidate_inner_signals } from "../chunks/BxIY6ir7.js";
import { f as from_html, a as append, b as from_svg, t as text, c as comment } from "../chunks/CAbo1QWi.js";
import { i as if_block } from "../chunks/BoSuMvtf.js";
import { i as init } from "../chunks/ByqEASoO.js";
import { a as store_get, s as setup_stores } from "../chunks/BvQ5O7-v.js";
import { u as user, c as config, W as WEBUI_NAME, a as models, b as settings } from "../chunks/2Yg1sHDo.js";
import { g as getModels } from "../chunks/DtDmpg9G.js";
import { s as set_text, e as event } from "../chunks/cBADewWV.js";
import { e as each } from "../chunks/7_HZMPNF.js";
import { h as head } from "../chunks/Cb8chUSZ.js";
import { r as remove_input_defaults, a as set_attribute, s as set_class } from "../chunks/kXiCYuyj.js";
import { a as bind_files, b as bind_value } from "../chunks/DVLuwGai.js";
import { b as bind_this } from "../chunks/D16JuV5t.js";
import { j as capitalizeFirstLetter, m as marked, i as copyToClipboard } from "../chunks/Bh-hrM1w.js";
import { t as toast } from "../chunks/BccDN__m.js";
import "../chunks/xMOMEvTi.js";
import { f as fileSaver } from "../chunks/DRcZXQDn.js";
import { g as goto } from "../chunks/h-B6Md2q.js";
import { a as WEBUI_API_BASE_URL } from "../chunks/DQ9UxF7k.js";
import { a as getModelItems, b as getModelTags, u as updateModelById, c as createNewModel, d as deleteModelById, t as toggleModelById } from "../chunks/BGM--f6E.js";
import { g as getGroups } from "../chunks/D8Q8X2hm.js";
import { E as EllipsisHorizontal } from "../chunks/BC-suBaL.js";
import { s as slot } from "../chunks/CZEGIGsR.js";
import { p as prop } from "../chunks/BRmGPDvq.js";
import "../chunks/C2A39Ney.js";
import { b as Menu_content, c as Menu_item } from "../chunks/DQmZL-p0.js";
import { f as flyAndScale } from "../chunks/BuLNlPfL.js";
import { D as Dropdown } from "../chunks/NbBmD2S8.js";
import { G as GarbageBin } from "../chunks/C_eYBUEf.js";
import { P as Pencil } from "../chunks/wRvEFTSI.js";
import { T as Tooltip } from "../chunks/BHXWufQb.js";
import { S as Share } from "../chunks/BK4529jj.js";
import { D as DocumentDuplicate } from "../chunks/D4EXptqs.js";
import { D as Download } from "../chunks/Dm1xcaSj.js";
import { L as Link } from "../chunks/EZxqw5-p.js";
import { C as ConfirmDialog } from "../chunks/DhVOSDv1.js";
import { S as Search } from "../chunks/2ixn6gs3.js";
import { P as Plus } from "../chunks/F9_n4pHG.js";
import { C as ChevronRight } from "../chunks/CS8GUXml.js";
import { S as Switch_1 } from "../chunks/CakJ276w.js";
import { S as Spinner } from "../chunks/CtnI4RVL.js";
import { X as XMark } from "../chunks/CUUSX84-.js";
import { E as EyeSlash } from "../chunks/B0PhibVT.js";
import { E as Eye } from "../chunks/D6dKHJXN.js";
import { V as ViewSelector } from "../chunks/ConyMNx9.js";
import { T as TagSelector } from "../chunks/Bif2ss0f.js";
import { P as Pagination_1 } from "../chunks/DCRGSDLC.js";
var root_2$1 = from_html(`<button><!></button>`);
var root_5$1 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_7$1 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"></path></svg>`);
var root_8$1 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg>`);
var root_6 = from_html(`<!> <div class="flex items-center"><!></div>`, 1);
var root_11$1 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_12 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_14$1 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_16$1 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_17 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_4$1 = from_html(`<!> <!> <!> <hr class="border-gray-50 dark:border-gray-800 my-1"/> <!> <!> <!> <hr class="border-gray-50 dark:border-gray-800 my-1"/> <!>`, 1);
var root_3$1 = from_html(`<div slot="content"><!></div>`);
function ModelMenu($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $currentUser = () => store_get(user, "$currentUser", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  prop($$props, "user", 8);
  let model = prop($$props, "model", 8);
  let editHandler = prop($$props, "editHandler", 8);
  let shareHandler = prop($$props, "shareHandler", 8);
  let cloneHandler = prop($$props, "cloneHandler", 8);
  let exportHandler = prop($$props, "exportHandler", 8);
  let copyLinkHandler = prop($$props, "copyLinkHandler", 8);
  let hideHandler = prop($$props, "hideHandler", 8);
  let deleteHandler = prop($$props, "deleteHandler", 8);
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
            var button = root_2$1();
            var node = child(button);
            slot(node, $$props, "default", {}, null);
            reset(button);
            event("click", button, (e) => {
              e.stopPropagation();
              set(show, !get(show));
            });
            append($$anchor3, button);
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
          class: "w-full max-w-[170px] rounded-2xl p-1 border border-gray-100  dark:border-gray-800 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg",
          sideOffset: -2,
          side: "bottom",
          align: "start",
          get transition() {
            return flyAndScale;
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_2 = root_4$1();
            var node_2 = first_child(fragment_2);
            Menu_item(node_2, {
              class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
              $$events: {
                click: () => {
                  editHandler()();
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_3 = root_5$1();
                var node_3 = first_child(fragment_3);
                Pencil(node_3, {});
                var div_1 = sibling(node_3, 2);
                var text2 = child(div_1, true);
                reset(div_1);
                template_effect(($0) => set_text(text2, $0), [() => ($i18n(), untrack(() => $i18n().t("Edit")))]);
                append($$anchor4, fragment_3);
              },
              $$slots: { default: true }
            });
            var node_4 = sibling(node_2, 2);
            Menu_item(node_4, {
              class: "flex  gap-2  items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
              $$events: {
                click: () => {
                  hideHandler()();
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_4 = root_6();
                var node_5 = first_child(fragment_4);
                {
                  var consequent = ($$anchor5) => {
                    var svg = root_7$1();
                    append($$anchor5, svg);
                  };
                  var alternate = ($$anchor5) => {
                    var svg_1 = root_8$1();
                    append($$anchor5, svg_1);
                  };
                  if_block(node_5, ($$render) => {
                    if (deep_read_state(model()), untrack(() => {
                      var _a, _b;
                      return ((_b = (_a = model()) == null ? void 0 : _a.meta) == null ? void 0 : _b.hidden) ?? false;
                    })) $$render(consequent);
                    else $$render(alternate, false);
                  });
                }
                var div_2 = sibling(node_5, 2);
                var node_6 = child(div_2);
                {
                  var consequent_1 = ($$anchor5) => {
                    var text_1 = text();
                    template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("Show Model")))]);
                    append($$anchor5, text_1);
                  };
                  var alternate_1 = ($$anchor5) => {
                    var text_2 = text();
                    template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Hide Model")))]);
                    append($$anchor5, text_2);
                  };
                  if_block(node_6, ($$render) => {
                    if (deep_read_state(model()), untrack(() => {
                      var _a, _b;
                      return ((_b = (_a = model()) == null ? void 0 : _a.meta) == null ? void 0 : _b.hidden) ?? false;
                    })) $$render(consequent_1);
                    else $$render(alternate_1, false);
                  });
                }
                reset(div_2);
                append($$anchor4, fragment_4);
              },
              $$slots: { default: true }
            });
            var node_7 = sibling(node_4, 2);
            Menu_item(node_7, {
              class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
              $$events: {
                click: () => {
                  cloneHandler()();
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_7 = root_11$1();
                var node_8 = first_child(fragment_7);
                DocumentDuplicate(node_8, {});
                var div_3 = sibling(node_8, 2);
                var text_3 = child(div_3, true);
                reset(div_3);
                template_effect(($0) => set_text(text_3, $0), [() => ($i18n(), untrack(() => $i18n().t("Clone")))]);
                append($$anchor4, fragment_7);
              },
              $$slots: { default: true }
            });
            var node_9 = sibling(node_7, 4);
            Menu_item(node_9, {
              class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
              $$events: {
                click: () => {
                  copyLinkHandler()();
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_8 = root_12();
                var node_10 = first_child(fragment_8);
                Link(node_10, {});
                var div_4 = sibling(node_10, 2);
                var text_4 = child(div_4, true);
                reset(div_4);
                template_effect(($0) => set_text(text_4, $0), [() => ($i18n(), untrack(() => $i18n().t("Copy Link")))]);
                append($$anchor4, fragment_8);
              },
              $$slots: { default: true }
            });
            var node_11 = sibling(node_9, 2);
            {
              var consequent_2 = ($$anchor4) => {
                Menu_item($$anchor4, {
                  class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
                  $$events: {
                    click: () => {
                      exportHandler()();
                    }
                  },
                  children: ($$anchor5, $$slotProps3) => {
                    var fragment_10 = root_14$1();
                    var node_12 = first_child(fragment_10);
                    Download(node_12, {});
                    var div_5 = sibling(node_12, 2);
                    var text_5 = child(div_5, true);
                    reset(div_5);
                    template_effect(($0) => set_text(text_5, $0), [() => ($i18n(), untrack(() => $i18n().t("Export")))]);
                    append($$anchor5, fragment_10);
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_11, ($$render) => {
                if ($currentUser(), untrack(() => {
                  var _a, _b, _c, _d;
                  return ((_a = $currentUser()) == null ? void 0 : _a.role) === "admin" || ((_d = (_c = (_b = $currentUser()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.workspace) == null ? void 0 : _d.models_export);
                })) $$render(consequent_2);
              });
            }
            var node_13 = sibling(node_11, 2);
            {
              var consequent_3 = ($$anchor4) => {
                Menu_item($$anchor4, {
                  class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800  rounded-xl",
                  $$events: {
                    click: () => {
                      shareHandler()();
                    }
                  },
                  children: ($$anchor5, $$slotProps3) => {
                    var fragment_12 = root_16$1();
                    var node_14 = first_child(fragment_12);
                    Share(node_14, {});
                    var div_6 = sibling(node_14, 2);
                    var text_6 = child(div_6, true);
                    reset(div_6);
                    template_effect(($0) => set_text(text_6, $0), [() => ($i18n(), untrack(() => $i18n().t("Share")))]);
                    append($$anchor5, fragment_12);
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_13, ($$render) => {
                if ($config(), untrack(() => {
                  var _a;
                  return (_a = $config()) == null ? void 0 : _a.features.enable_community_sharing;
                })) $$render(consequent_3);
              });
            }
            var node_15 = sibling(node_13, 4);
            Menu_item(node_15, {
              class: "flex  gap-2  items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
              $$events: {
                click: () => {
                  deleteHandler()();
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_13 = root_17();
                var node_16 = first_child(fragment_13);
                GarbageBin(node_16, {});
                var div_7 = sibling(node_16, 2);
                var text_7 = child(div_7, true);
                reset(div_7);
                template_effect(($0) => set_text(text_7, $0), [() => ($i18n(), untrack(() => $i18n().t("Delete")))]);
                append($$anchor4, fragment_13);
              },
              $$slots: { default: true }
            });
            append($$anchor3, fragment_2);
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
var root_3 = from_html(`<button class="flex text-xs items-center space-x-1 px-3 py-1.5 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-gray-200 transition"><div class=" self-center font-medium line-clamp-1"> </div></button>`);
var root_4 = from_html(`<button class="flex text-xs items-center space-x-1 px-3 py-1.5 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-gray-200 transition"><div class=" self-center font-medium line-clamp-1"> </div></button>`);
var root_5 = from_html(`<div class="self-center pl-1.5 translate-y-[0.5px] rounded-l-xl bg-transparent"><button class="p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition"><!></button></div>`);
var root_9 = from_html(`<a class=" font-medium line-clamp-1 hover:underline capitalize"> </a>`);
var root_11 = from_html(`<button class="self-center w-fit text-sm p-1.5 dark:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl" type="button"><!></button>`);
var root_14 = from_html(`<button class="self-center w-fit text-sm p-1.5 dark:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl" type="button"><!></button>`);
var root_10 = from_html(`<!> <!>`, 1);
var root_16 = from_html(`<div class="self-center w-fit p-1 text-sm dark:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl"><!></div>`);
var root_18 = from_html(`<div class="shrink-0 text-gray-500 text-xs"> </div>`);
var root_19 = from_html(`<div class="flex gap-1 text-xs overflow-hidden"><div class="line-clamp-1"><!></div></div>`);
var root_8 = from_html(`<div class="  flex cursor-pointer dark:hover:bg-gray-850/50 hover:bg-gray-50 transition rounded-2xl w-full p-2.5"><div class="flex group/item gap-3.5 w-full"><div class="self-center pl-0.5"><div class="flex bg-white rounded-2xl"><div><img alt="modelfile profile" class=" rounded-2xl size-12 object-cover"/></div></div></div> <div class=" shrink-0 flex w-full min-w-0 flex-1 pr-1 self-center"><div class="flex h-full w-full flex-1 flex-col justify-start self-center group"><div class="flex-1 w-full"><div class="flex items-center justify-between w-full"><!> <div class=" flex items-center gap-1"><div><div class="flex justify-between items-center w-full"><div></div> <div class="flex flex-row gap-0.5 items-center"><!></div></div></div> <button><!></button></div></div> <div class=" flex gap-1 pr-2 -mt-1 items-center"><!> <div>·</div> <!></div></div></div></div></div></div>`);
var root_7 = from_html(`<div class=" px-3 my-2 gap-1 lg:gap-2 grid lg:grid-cols-2" id="model-list"></div> <!>`, 1);
var root_23 = from_html(`<div class=" w-full h-full flex flex-col justify-center items-center my-16 mb-24"><div class="max-w-md text-center"><div class=" text-3xl mb-3">😕</div> <div class=" text-lg font-medium mb-1"> </div> <div class=" text-gray-500 text-center text-xs"> </div></div></div>`);
var root_24 = from_html(`<div class=" my-16"><div class=" text-xl font-medium mb-1 line-clamp-1"> </div> <a class=" flex cursor-pointer items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-850 w-full mb-2 px-3.5 py-1.5 rounded-xl transition" href="https://openwebui.com/models" target="_blank"><div class=" self-center"><div class=" font-medium line-clamp-1"> </div> <div class=" text-sm line-clamp-1"> </div></div> <div><div><!></div></div></a></div>`);
var root_2 = from_html(`<!> <div class="flex flex-col gap-1 px-1 mt-1.5 mb-3"><input id="models-import-input" type="file" accept=".json" hidden=""/> <div class="flex justify-between items-center"><div class="flex items-center md:self-center text-xl font-medium px-0.5 gap-2 shrink-0"><div> </div> <div class="text-lg font-medium text-gray-500 dark:text-gray-500"> </div></div> <div class="flex w-full justify-end gap-1.5"><!> <!> <a class=" px-2 py-1.5 rounded-xl bg-black text-white dark:bg-white dark:text-black transition font-medium text-sm flex items-center" href="/workspace/models/create"><!> <div class=" hidden md:block md:ml-1 text-xs"> </div></a></div></div></div> <div class="py-2 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-850"><div class="px-3.5 flex flex-1 items-center w-full space-x-2 py-0.5 pb-2"><div class="flex flex-1 items-center"><div class=" self-center ml-1 mr-3"><!></div> <input class=" w-full text-sm py-1 rounded-r-xl outline-hidden bg-transparent"/> <!></div></div> <div class="px-3 flex w-full bg-transparent overflow-x-auto scrollbar-none"><div class="flex gap-0.5 w-fit text-center text-sm rounded-full bg-transparent px-0.5 whitespace-nowrap"><!> <!></div></div> <!></div> <!>`, 1);
var root_25 = from_html(`<div class="w-full h-full flex justify-center items-center"><!></div>`);
function Models($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $WEBUI_NAME = () => store_get(WEBUI_NAME, "$WEBUI_NAME", $$stores);
  const $_models = () => store_get(models, "$_models", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const { saveAs } = fileSaver;
  const i18n = getContext("i18n");
  let shiftKey = mutable_source(false);
  let importFiles = mutable_source();
  let modelsImportInputElement = mutable_source();
  let tagsContainerElement = mutable_source();
  let loaded = mutable_source(false);
  let showModelDeleteConfirm = mutable_source(false);
  let selectedModel = mutable_source(null);
  let groupIds = mutable_source([]);
  let tags = mutable_source([]);
  let selectedTag = mutable_source("");
  let query = mutable_source("");
  let viewOption = mutable_source("");
  let page = mutable_source(1);
  let models$1 = mutable_source(null);
  let total = mutable_source(null);
  const getModelList = async () => {
    try {
      const res = await getModelItems(localStorage.token, get(query), get(viewOption), get(selectedTag), null, null, get(page)).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (res) {
        set(models$1, res.items);
        set(total, res.total);
        set(tags, await getModelTags(localStorage.token).catch((error) => {
          toast.error(`${error}`);
          return [];
        }));
      }
    } catch (err) {
      console.error(err);
    }
  };
  const deleteModelHandler = async (model) => {
    var _a, _b, _c;
    const res = await deleteModelById(localStorage.token, model.id).catch((e) => {
      toast.error(`${e}`);
      return null;
    });
    if (res) {
      toast.success($i18n().t(`Deleted {{name}}`, { name: model.id }));
      set(page, 1);
      getModelList();
    }
    await models.set(await getModels(localStorage.token, ((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_direct_connections) && (((_c = $settings()) == null ? void 0 : _c.directConnections) ?? null)));
  };
  const cloneModelHandler = async (model) => {
    sessionStorage.model = JSON.stringify({
      ...model,
      id: `${model.id}-clone`,
      name: `${model.name} (Clone)`
    });
    goto("/workspace/models/create");
  };
  const shareModelHandler = async (model) => {
    toast.success($i18n().t("Redirecting you to Open WebUI Community"));
    const url = "https://openwebui.com";
    const tab = await window.open(`${url}/models/create`, "_blank");
    const messageHandler = (event2) => {
      if (event2.origin !== url) return;
      if (event2.data === "loaded") {
        tab.postMessage(JSON.stringify(model), "*");
        window.removeEventListener("message", messageHandler);
      }
    };
    window.addEventListener("message", messageHandler, false);
  };
  const hideModelHandler = async (model) => {
    var _a, _b, _c, _d;
    model.meta = { ...model.meta, hidden: !(((_a = model == null ? void 0 : model.meta) == null ? void 0 : _a.hidden) ?? false) };
    console.log(model);
    const res = await updateModelById(localStorage.token, model.id, model);
    if (res) {
      toast.success($i18n().t(`Model {{name}} is now {{status}}`, {
        name: model.id,
        status: model.meta.hidden ? "hidden" : "visible"
      }));
      set(page, 1);
      getModelList();
    }
    await models.set(await getModels(localStorage.token, ((_c = (_b = $config()) == null ? void 0 : _b.features) == null ? void 0 : _c.enable_direct_connections) && (((_d = $settings()) == null ? void 0 : _d.directConnections) ?? null)));
  };
  const copyLinkHandler = async (model) => {
    const baseUrl = window.location.origin;
    const res = await copyToClipboard(`${baseUrl}/?model=${encodeURIComponent(model.id)}`);
    if (res) {
      toast.success($i18n().t("Copied link to clipboard"));
    } else {
      toast.error($i18n().t("Failed to copy link"));
    }
  };
  const downloadModels = async (models2) => {
    let blob = new Blob([JSON.stringify(models2)], { type: "application/json" });
    saveAs(blob, `models-export-${Date.now()}.json`);
  };
  const exportModelHandler = async (model) => {
    let blob = new Blob([JSON.stringify([model])], { type: "application/json" });
    saveAs(blob, `${model.id}-${Date.now()}.json`);
  };
  onMount(async () => {
    set(viewOption, localStorage.workspaceViewOption ?? "");
    set(page, 1);
    await getModelList();
    let groups = await getGroups(localStorage.token);
    set(groupIds, groups.map((group) => group.id));
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
    () => (get(page), get(query), get(selectedTag), get(viewOption)),
    () => {
      if (get(page) !== void 0 && get(query) !== void 0 && get(selectedTag) !== void 0 && get(viewOption) !== void 0) {
        getModelList();
      }
    }
  );
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  head("91cwg4", ($$anchor2) => {
    deferred_template_effect(
      ($0) => {
        $document.title = `
		${$0 ?? ""} • ${$WEBUI_NAME() ?? ""}
	`;
      },
      [() => ($i18n(), untrack(() => $i18n().t("Models")))]
    );
  });
  var node = first_child(fragment);
  {
    var consequent_10 = ($$anchor2) => {
      var fragment_1 = root_2();
      var node_1 = first_child(fragment_1);
      ConfirmDialog(node_1, {
        get show() {
          return get(showModelDeleteConfirm);
        },
        set show($$value) {
          set(showModelDeleteConfirm, $$value);
        },
        $$events: {
          confirm: () => {
            deleteModelHandler(get(selectedModel));
          }
        },
        $$legacy: true
      });
      var div = sibling(node_1, 2);
      var input = child(div);
      bind_this(input, ($$value) => set(modelsImportInputElement, $$value), () => get(modelsImportInputElement));
      var div_1 = sibling(input, 2);
      var div_2 = child(div_1);
      var div_3 = child(div_2);
      var text$1 = child(div_3, true);
      reset(div_3);
      var div_4 = sibling(div_3, 2);
      var text_1 = child(div_4, true);
      reset(div_4);
      reset(div_2);
      var div_5 = sibling(div_2, 2);
      var node_2 = child(div_5);
      {
        var consequent = ($$anchor3) => {
          var button = root_3();
          var div_6 = child(button);
          var text_2 = child(div_6, true);
          reset(div_6);
          reset(button);
          template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Import")))]);
          event("click", button, () => {
            get(modelsImportInputElement).click();
          });
          append($$anchor3, button);
        };
        if_block(node_2, ($$render) => {
          if ($user(), untrack(() => {
            var _a, _b, _c, _d;
            return ((_a = $user()) == null ? void 0 : _a.role) === "admin" || ((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.workspace) == null ? void 0 : _d.models_import);
          })) $$render(consequent);
        });
      }
      var node_3 = sibling(node_2, 2);
      {
        var consequent_1 = ($$anchor3) => {
          var button_1 = root_4();
          var div_7 = child(button_1);
          var text_3 = child(div_7, true);
          reset(div_7);
          reset(button_1);
          template_effect(($0) => set_text(text_3, $0), [() => ($i18n(), untrack(() => $i18n().t("Export")))]);
          event("click", button_1, async () => {
            downloadModels(get(models$1));
          });
          append($$anchor3, button_1);
        };
        if_block(node_3, ($$render) => {
          if (get(total), $user(), untrack(() => {
            var _a, _b, _c, _d;
            return get(total) && (((_a = $user()) == null ? void 0 : _a.role) === "admin" || ((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.workspace) == null ? void 0 : _d.models_export));
          })) $$render(consequent_1);
        });
      }
      var a = sibling(node_3, 2);
      var node_4 = child(a);
      Plus(node_4, { className: "size-3", strokeWidth: "2.5" });
      var div_8 = sibling(node_4, 2);
      var text_4 = child(div_8, true);
      reset(div_8);
      reset(a);
      reset(div_5);
      reset(div_1);
      reset(div);
      var div_9 = sibling(div, 2);
      var div_10 = child(div_9);
      var div_11 = child(div_10);
      var div_12 = child(div_11);
      var node_5 = child(div_12);
      Search(node_5, { className: "size-3.5" });
      reset(div_12);
      var input_1 = sibling(div_12, 2);
      remove_input_defaults(input_1);
      var node_6 = sibling(input_1, 2);
      {
        var consequent_2 = ($$anchor3) => {
          var div_13 = root_5();
          var button_2 = child(div_13);
          var node_7 = child(button_2);
          XMark(node_7, { className: "size-3", strokeWidth: "2" });
          reset(button_2);
          reset(div_13);
          event("click", button_2, () => {
            set(query, "");
          });
          append($$anchor3, div_13);
        };
        if_block(node_6, ($$render) => {
          if (get(query)) $$render(consequent_2);
        });
      }
      reset(div_11);
      reset(div_10);
      var div_14 = sibling(div_10, 2);
      var div_15 = child(div_14);
      var node_8 = child(div_15);
      ViewSelector(node_8, {
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
      var node_9 = sibling(node_8, 2);
      {
        var consequent_3 = ($$anchor3) => {
          {
            let $0 = derived_safe_equal(() => (get(tags), untrack(() => get(tags).map((tag) => {
              return { value: tag, label: tag };
            }))));
            TagSelector($$anchor3, {
              get items() {
                return get($0);
              },
              get value() {
                return get(selectedTag);
              },
              set value($$value) {
                set(selectedTag, $$value);
              },
              $$legacy: true
            });
          }
        };
        if_block(node_9, ($$render) => {
          if (get(tags), untrack(() => (get(tags) ?? []).length > 0)) $$render(consequent_3);
        });
      }
      reset(div_15);
      bind_this(div_15, ($$value) => set(tagsContainerElement, $$value), () => get(tagsContainerElement));
      reset(div_14);
      var node_10 = sibling(div_14, 2);
      {
        var consequent_8 = ($$anchor3) => {
          var fragment_3 = root_7();
          var div_16 = first_child(fragment_3);
          each(div_16, 5, () => get(models$1), (model) => model.id, ($$anchor4, model, $$index) => {
            var div_17 = root_8();
            var div_18 = child(div_17);
            var div_19 = child(div_18);
            var div_20 = child(div_19);
            var div_21 = child(div_20);
            var img = child(div_21);
            reset(div_21);
            reset(div_20);
            reset(div_19);
            var div_22 = sibling(div_19, 2);
            var div_23 = child(div_22);
            var div_24 = child(div_23);
            var div_25 = child(div_24);
            var node_11 = child(div_25);
            Tooltip(node_11, {
              get content() {
                return get(model), untrack(() => get(model).name);
              },
              className: " w-fit",
              placement: "top-start",
              children: ($$anchor5, $$slotProps) => {
                var a_1 = root_9();
                var text_5 = child(a_1, true);
                reset(a_1);
                template_effect(
                  ($0) => {
                    set_attribute(a_1, "href", $0);
                    set_text(text_5, (get(model), untrack(() => get(model).name)));
                  },
                  [
                    () => (get(model), untrack(() => `/?models=${encodeURIComponent(get(model).id)}`))
                  ]
                );
                append($$anchor5, a_1);
              },
              $$slots: { default: true }
            });
            var div_26 = sibling(node_11, 2);
            var div_27 = child(div_26);
            var div_28 = child(div_27);
            var div_29 = sibling(child(div_28), 2);
            var node_12 = child(div_29);
            {
              var consequent_5 = ($$anchor5) => {
                var fragment_4 = root_10();
                var node_13 = first_child(fragment_4);
                {
                  let $0 = derived_safe_equal(() => (get(model), $i18n(), untrack(() => {
                    var _a, _b;
                    return ((_b = (_a = get(model)) == null ? void 0 : _a.meta) == null ? void 0 : _b.hidden) ? $i18n().t("Show") : $i18n().t("Hide");
                  })));
                  Tooltip(node_13, {
                    get content() {
                      return get($0);
                    },
                    children: ($$anchor6, $$slotProps) => {
                      var button_3 = root_11();
                      var node_14 = child(button_3);
                      {
                        var consequent_4 = ($$anchor7) => {
                          EyeSlash($$anchor7, {});
                        };
                        var alternate = ($$anchor7) => {
                          Eye($$anchor7, {});
                        };
                        if_block(node_14, ($$render) => {
                          if (get(model), untrack(() => {
                            var _a, _b;
                            return (_b = (_a = get(model)) == null ? void 0 : _a.meta) == null ? void 0 : _b.hidden;
                          })) $$render(consequent_4);
                          else $$render(alternate, false);
                        });
                      }
                      reset(button_3);
                      event("click", button_3, (e) => {
                        e.stopPropagation();
                        hideModelHandler(get(model));
                      });
                      append($$anchor6, button_3);
                    },
                    $$slots: { default: true }
                  });
                }
                var node_15 = sibling(node_13, 2);
                {
                  let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete"))));
                  Tooltip(node_15, {
                    get content() {
                      return get($0);
                    },
                    children: ($$anchor6, $$slotProps) => {
                      var button_4 = root_14();
                      var node_16 = child(button_4);
                      GarbageBin(node_16, {});
                      reset(button_4);
                      event("click", button_4, (e) => {
                        e.stopPropagation();
                        deleteModelHandler(get(model));
                      });
                      append($$anchor6, button_4);
                    },
                    $$slots: { default: true }
                  });
                }
                append($$anchor5, fragment_4);
              };
              var alternate_1 = ($$anchor5) => {
                ModelMenu($$anchor5, {
                  get user() {
                    return $user();
                  },
                  get model() {
                    return get(model);
                  },
                  editHandler: () => {
                    goto(`/workspace/models/edit?id=${encodeURIComponent(get(model).id)}`);
                  },
                  shareHandler: () => {
                    shareModelHandler(get(model));
                  },
                  cloneHandler: () => {
                    cloneModelHandler(get(model));
                  },
                  exportHandler: () => {
                    exportModelHandler(get(model));
                  },
                  hideHandler: () => {
                    hideModelHandler(get(model));
                  },
                  copyLinkHandler: () => {
                    copyLinkHandler(get(model));
                  },
                  deleteHandler: () => {
                    set(selectedModel, get(model));
                    set(showModelDeleteConfirm, true);
                  },
                  onClose: () => {
                  },
                  children: ($$anchor6, $$slotProps) => {
                    var div_30 = root_16();
                    var node_17 = child(div_30);
                    EllipsisHorizontal(node_17, { className: "size-5" });
                    reset(div_30);
                    append($$anchor6, div_30);
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_12, ($$render) => {
                if (get(shiftKey)) $$render(consequent_5);
                else $$render(alternate_1, false);
              });
            }
            reset(div_29);
            reset(div_28);
            reset(div_27);
            var button_5 = sibling(div_27, 2);
            var node_18 = child(button_5);
            {
              let $0 = derived_safe_equal(() => (get(model), $i18n(), untrack(() => get(model).is_active ? $i18n().t("Enabled") : $i18n().t("Disabled"))));
              Tooltip(node_18, {
                get content() {
                  return get($0);
                },
                children: ($$anchor5, $$slotProps) => {
                  Switch_1($$anchor5, {
                    get state() {
                      return get(model).is_active;
                    },
                    set state($$value) {
                      get(model).is_active = $$value, invalidate_inner_signals(() => get(models$1));
                    },
                    $$events: {
                      change: async () => {
                        var _a, _b, _c;
                        toggleModelById(localStorage.token, get(model).id);
                        models.set(await getModels(localStorage.token, ((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_direct_connections) && (((_c = $settings()) == null ? void 0 : _c.directConnections) ?? null)));
                      }
                    },
                    $$legacy: true
                  });
                },
                $$slots: { default: true }
              });
            }
            reset(button_5);
            reset(div_26);
            reset(div_25);
            var div_31 = sibling(div_25, 2);
            var node_19 = child(div_31);
            {
              let $0 = derived_safe_equal(() => (get(model), $i18n(), untrack(() => {
                var _a, _b;
                return ((_b = (_a = get(model)) == null ? void 0 : _a.user) == null ? void 0 : _b.email) ?? $i18n().t("Deleted User");
              })));
              Tooltip(node_19, {
                get content() {
                  return get($0);
                },
                className: "flex shrink-0",
                placement: "top-start",
                children: ($$anchor5, $$slotProps) => {
                  var div_32 = root_18();
                  var text_6 = child(div_32, true);
                  reset(div_32);
                  template_effect(($02) => set_text(text_6, $02), [
                    () => ($i18n(), deep_read_state(capitalizeFirstLetter), get(model), untrack(() => {
                      var _a, _b, _c, _d;
                      return $i18n().t("By {{name}}", {
                        name: capitalizeFirstLetter(((_b = (_a = get(model)) == null ? void 0 : _a.user) == null ? void 0 : _b.name) ?? ((_d = (_c = get(model)) == null ? void 0 : _c.user) == null ? void 0 : _d.email) ?? $i18n().t("Deleted User"))
                      });
                    }))
                  ]);
                  append($$anchor5, div_32);
                },
                $$slots: { default: true }
              });
            }
            var node_20 = sibling(node_19, 4);
            {
              let $0 = derived_safe_equal(() => (deep_read_state(marked), get(model), untrack(() => {
                var _a, _b;
                return marked.parse(((_b = (_a = get(model)) == null ? void 0 : _a.meta) == null ? void 0 : _b.description) ?? get(model).id);
              })));
              Tooltip(node_20, {
                get content() {
                  return get($0);
                },
                className: " w-fit text-left",
                placement: "top-start",
                children: ($$anchor5, $$slotProps) => {
                  var div_33 = root_19();
                  var div_34 = child(div_33);
                  var node_21 = child(div_34);
                  {
                    var consequent_6 = ($$anchor6) => {
                      var text_7 = text();
                      template_effect(() => set_text(text_7, (get(model), untrack(() => {
                        var _a, _b;
                        return (_b = (_a = get(model)) == null ? void 0 : _a.meta) == null ? void 0 : _b.description;
                      }))));
                      append($$anchor6, text_7);
                    };
                    var alternate_2 = ($$anchor6) => {
                      var text_8 = text();
                      template_effect(() => set_text(text_8, (get(model), untrack(() => get(model).id))));
                      append($$anchor6, text_8);
                    };
                    if_block(node_21, ($$render) => {
                      if (get(model), untrack(() => {
                        var _a, _b;
                        return (((_b = (_a = get(model)) == null ? void 0 : _a.meta) == null ? void 0 : _b.description) ?? "").trim();
                      })) $$render(consequent_6);
                      else $$render(alternate_2, false);
                    });
                  }
                  reset(div_34);
                  reset(div_33);
                  append($$anchor5, div_33);
                },
                $$slots: { default: true }
              });
            }
            reset(div_31);
            reset(div_24);
            reset(div_23);
            reset(div_22);
            reset(div_18);
            reset(div_17);
            template_effect(() => {
              set_attribute(div_17, "id", `model-item-${(get(model), untrack(() => get(model).id)) ?? ""}`);
              set_class(div_21, 1, `${(get(model), untrack(() => get(model).is_active ? "" : "opacity-50 dark:opacity-50")) ?? ""} bg-transparent rounded-2xl`);
              set_attribute(img, "src", (deep_read_state(WEBUI_API_BASE_URL), get(model), $i18n(), untrack(() => `${WEBUI_API_BASE_URL}/models/model/profile/image?id=${get(model).id}&lang=${$i18n().language}`)));
              set_class(div_27, 1, `flex justify-end w-full ${(get(model), untrack(() => get(model).is_active ? "" : "text-gray-500")) ?? ""}`);
            });
            event("click", button_5, (e) => {
              e.stopPropagation();
            });
            event("click", div_17, () => {
              var _a, _b;
              if (((_a = $user()) == null ? void 0 : _a.role) === "admin" || get(model).user_id === ((_b = $user()) == null ? void 0 : _b.id) || get(model).access_control.write.group_ids.some((wg) => get(groupIds).includes(wg))) {
                goto(`/workspace/models/edit?id=${encodeURIComponent(get(model).id)}`);
              }
            });
            append($$anchor4, div_17);
          });
          reset(div_16);
          var node_22 = sibling(div_16, 2);
          {
            var consequent_7 = ($$anchor4) => {
              Pagination_1($$anchor4, {
                get count() {
                  return get(total);
                },
                perPage: 30,
                get page() {
                  return get(page);
                },
                set page($$value) {
                  set(page, $$value);
                },
                $$legacy: true
              });
            };
            if_block(node_22, ($$render) => {
              if (get(total) > 30) $$render(consequent_7);
            });
          }
          append($$anchor3, fragment_3);
        };
        var alternate_3 = ($$anchor3) => {
          var div_35 = root_23();
          var div_36 = child(div_35);
          var div_37 = sibling(child(div_36), 2);
          var text_9 = child(div_37, true);
          reset(div_37);
          var div_38 = sibling(div_37, 2);
          var text_10 = child(div_38, true);
          reset(div_38);
          reset(div_36);
          reset(div_35);
          template_effect(
            ($0, $1) => {
              set_text(text_9, $0);
              set_text(text_10, $1);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("No models found"))),
              () => ($i18n(), untrack(() => $i18n().t("Try adjusting your search or filter to find what you are looking for.")))
            ]
          );
          append($$anchor3, div_35);
        };
        if_block(node_10, ($$render) => {
          if (get(models$1), untrack(() => (get(models$1) ?? []).length !== 0)) $$render(consequent_8);
          else $$render(alternate_3, false);
        });
      }
      reset(div_9);
      var node_23 = sibling(div_9, 2);
      {
        var consequent_9 = ($$anchor3) => {
          var div_39 = root_24();
          var div_40 = child(div_39);
          var text_11 = child(div_40, true);
          reset(div_40);
          var a_2 = sibling(div_40, 2);
          var div_41 = child(a_2);
          var div_42 = child(div_41);
          var text_12 = child(div_42, true);
          reset(div_42);
          var div_43 = sibling(div_42, 2);
          var text_13 = child(div_43, true);
          reset(div_43);
          reset(div_41);
          var div_44 = sibling(div_41, 2);
          var div_45 = child(div_44);
          var node_24 = child(div_45);
          ChevronRight(node_24, {});
          reset(div_45);
          reset(div_44);
          reset(a_2);
          reset(div_39);
          template_effect(
            ($0, $1, $2) => {
              set_text(text_11, $0);
              set_text(text_12, $1);
              set_text(text_13, $2);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Made by Open WebUI Community"))),
              () => ($i18n(), untrack(() => $i18n().t("Discover a model"))),
              () => ($i18n(), untrack(() => $i18n().t("Discover, download, and explore model presets")))
            ]
          );
          append($$anchor3, div_39);
        };
        if_block(node_23, ($$render) => {
          if ($config(), untrack(() => {
            var _a;
            return (_a = $config()) == null ? void 0 : _a.features.enable_community_sharing;
          })) $$render(consequent_9);
        });
      }
      template_effect(
        ($0, $1, $2) => {
          set_text(text$1, $0);
          set_text(text_1, get(total));
          set_text(text_4, $1);
          set_attribute(input_1, "placeholder", $2);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Models"))),
          () => ($i18n(), untrack(() => $i18n().t("New Model"))),
          () => ($i18n(), untrack(() => $i18n().t("Search Models")))
        ]
      );
      bind_files(input, () => get(importFiles), ($$value) => set(importFiles, $$value));
      event("change", input, () => {
        console.log(get(importFiles));
        let reader = new FileReader();
        reader.onload = async (event2) => {
          var _a, _b, _c;
          let savedModels = [];
          try {
            savedModels = JSON.parse(event2.target.result);
            console.log(savedModels);
          } catch (e) {
            toast.error($i18n().t("Invalid JSON file"));
            return;
          }
          for (const model of savedModels) {
            if ((model == null ? void 0 : model.info) ?? false) {
              if ($_models().find((m) => m.id === model.id)) {
                await updateModelById(localStorage.token, model.id, model.info).catch((error) => {
                  toast.error(`${error}`);
                  return null;
                });
              } else {
                await createNewModel(localStorage.token, model.info).catch((error) => {
                  toast.error(`${error}`);
                  return null;
                });
              }
            } else {
              if ((model == null ? void 0 : model.id) && (model == null ? void 0 : model.name)) {
                await createNewModel(localStorage.token, model).catch((error) => {
                  toast.error(`${error}`);
                  return null;
                });
              }
            }
          }
          await models.set(await getModels(localStorage.token, ((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_direct_connections) && (((_c = $settings()) == null ? void 0 : _c.directConnections) ?? null)));
          set(page, 1);
          getModelList();
        };
        reader.readAsText(get(importFiles)[0]);
      });
      bind_value(input_1, () => get(query), ($$value) => set(query, $$value));
      event("wheel", div_14, (e) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          e.currentTarget.scrollLeft += e.deltaY;
        }
      });
      append($$anchor2, fragment_1);
    };
    var alternate_4 = ($$anchor2) => {
      var div_46 = root_25();
      var node_25 = child(div_46);
      Spinner(node_25, { className: "size-5" });
      reset(div_46);
      append($$anchor2, div_46);
    };
    if_block(node, ($$render) => {
      if (get(loaded)) $$render(consequent_10);
      else $$render(alternate_4, false);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
function _page($$anchor, $$props) {
  push($$props, false);
  const $config = () => store_get(config, "$config", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $models = () => store_get(models, "$models", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  onMount(async () => {
    await Promise.all([
      (async () => {
        var _a, _b, _c;
        models.set(await getModels(localStorage.token, ((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_direct_connections) && (((_c = $settings()) == null ? void 0 : _c.directConnections) ?? null)));
      })()
    ]);
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      Models($$anchor2, {});
    };
    if_block(node, ($$render) => {
      if ($models() !== null) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _page as component
};
