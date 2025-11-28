import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, g as getContext, c as child, f as first_child, u as untrack, e as sibling, r as reset, t as template_effect, b as get, h as derived_safe_equal, s as set, m as mutable_source, a as pop, o as onMount, l as legacy_pre_effect, j as legacy_pre_effect_reset, d as deferred_template_effect, $ as $document, q as next, k as tick, aF as mutate, i as deep_read_state } from "../chunks/BxIY6ir7.js";
import { s as set_text, e as event } from "../chunks/cBADewWV.js";
import { e as each, i as index } from "../chunks/7_HZMPNF.js";
import { i as if_block } from "../chunks/BoSuMvtf.js";
import { f as from_html, a as append, c as comment } from "../chunks/CAbo1QWi.js";
import { h as head } from "../chunks/Cb8chUSZ.js";
import { r as remove_input_defaults, a as set_attribute } from "../chunks/kXiCYuyj.js";
import { a as bind_files, b as bind_value } from "../chunks/DVLuwGai.js";
import { b as bind_this } from "../chunks/D16JuV5t.js";
import { i as init } from "../chunks/ByqEASoO.js";
import { a as store_get, s as setup_stores } from "../chunks/BvQ5O7-v.js";
import { t as toast } from "../chunks/BccDN__m.js";
import { f as fileSaver } from "../chunks/DRcZXQDn.js";
import { g as goto } from "../chunks/h-B6Md2q.js";
import { c as config, u as user, p as prompts, W as WEBUI_NAME } from "../chunks/2Yg1sHDo.js";
import { b as getPromptList, g as getPrompts, c as createNewPrompt, d as deletePromptByCommand } from "../chunks/BukVi0LS.js";
import { j as capitalizeFirstLetter, s as slugify } from "../chunks/Bh-hrM1w.js";
import { s as slot } from "../chunks/CZEGIGsR.js";
import { p as prop } from "../chunks/BRmGPDvq.js";
import "../chunks/C2A39Ney.js";
import { b as Menu_content, c as Menu_item } from "../chunks/DQmZL-p0.js";
import { f as flyAndScale } from "../chunks/BuLNlPfL.js";
import { D as Dropdown } from "../chunks/NbBmD2S8.js";
import { G as GarbageBin } from "../chunks/C_eYBUEf.js";
import { T as Tooltip } from "../chunks/BHXWufQb.js";
import { S as Share } from "../chunks/BK4529jj.js";
import { D as DocumentDuplicate } from "../chunks/D4EXptqs.js";
import { D as Download } from "../chunks/Dm1xcaSj.js";
import { E as EllipsisHorizontal } from "../chunks/BC-suBaL.js";
import { C as ConfirmDialog } from "../chunks/DhVOSDv1.js";
import { S as Search } from "../chunks/2ixn6gs3.js";
import { P as Plus } from "../chunks/F9_n4pHG.js";
import { C as ChevronRight } from "../chunks/CS8GUXml.js";
import { S as Spinner } from "../chunks/CtnI4RVL.js";
import { X as XMark } from "../chunks/CUUSX84-.js";
import { V as ViewSelector } from "../chunks/ConyMNx9.js";
var root_6$1 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_7$1 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_9$1 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_10 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_4$1 = from_html(`<!> <!> <!> <hr class="border-gray-50 dark:border-gray-850 my-1"/> <!>`, 1);
var root_3$1 = from_html(`<div slot="content"><!></div>`);
function PromptMenu($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let shareHandler = prop($$props, "shareHandler", 8);
  let cloneHandler = prop($$props, "cloneHandler", 8);
  let exportHandler = prop($$props, "exportHandler", 8);
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
          class: "w-full max-w-[170px] rounded-2xl p-1 border border-gray-100  dark:border-gray-800 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg",
          sideOffset: -2,
          side: "bottom",
          align: "start",
          get transition() {
            return flyAndScale;
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_3 = root_4$1();
            var node_2 = first_child(fragment_3);
            {
              var consequent = ($$anchor4) => {
                Menu_item($$anchor4, {
                  class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800  rounded-xl",
                  $$events: {
                    click: () => {
                      shareHandler()();
                    }
                  },
                  children: ($$anchor5, $$slotProps3) => {
                    var fragment_5 = root_6$1();
                    var node_3 = first_child(fragment_5);
                    Share(node_3, {});
                    var div_1 = sibling(node_3, 2);
                    var text = child(div_1, true);
                    reset(div_1);
                    template_effect(($0) => set_text(text, $0), [() => ($i18n(), untrack(() => $i18n().t("Share")))]);
                    append($$anchor5, fragment_5);
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_2, ($$render) => {
                if ($config(), untrack(() => $config().features.enable_community_sharing)) $$render(consequent);
              });
            }
            var node_4 = sibling(node_2, 2);
            Menu_item(node_4, {
              class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
              $$events: {
                click: () => {
                  cloneHandler()();
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_6 = root_7$1();
                var node_5 = first_child(fragment_6);
                DocumentDuplicate(node_5, {});
                var div_2 = sibling(node_5, 2);
                var text_1 = child(div_2, true);
                reset(div_2);
                template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("Clone")))]);
                append($$anchor4, fragment_6);
              },
              $$slots: { default: true }
            });
            var node_6 = sibling(node_4, 2);
            {
              var consequent_1 = ($$anchor4) => {
                Menu_item($$anchor4, {
                  class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
                  $$events: {
                    click: () => {
                      exportHandler()();
                    }
                  },
                  children: ($$anchor5, $$slotProps3) => {
                    var fragment_8 = root_9$1();
                    var node_7 = first_child(fragment_8);
                    Download(node_7, {});
                    var div_3 = sibling(node_7, 2);
                    var text_2 = child(div_3, true);
                    reset(div_3);
                    template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Export")))]);
                    append($$anchor5, fragment_8);
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_6, ($$render) => {
                if ($user(), untrack(() => {
                  var _a, _b, _c, _d;
                  return ((_a = $user()) == null ? void 0 : _a.role) === "admin" || ((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.workspace) == null ? void 0 : _d.prompts_export);
                })) $$render(consequent_1);
              });
            }
            var node_8 = sibling(node_6, 4);
            Menu_item(node_8, {
              class: "flex  gap-2  items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
              $$events: {
                click: () => {
                  deleteHandler()();
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_9 = root_10();
                var node_9 = first_child(fragment_9);
                GarbageBin(node_9, {});
                var div_4 = sibling(node_9, 2);
                var text_3 = child(div_4, true);
                reset(div_4);
                template_effect(($0) => set_text(text_3, $0), [() => ($i18n(), untrack(() => $i18n().t("Delete")))]);
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
var root_3 = from_html(`<div class=" text-sm text-gray-500 truncate"> <span class="  font-medium"> </span>.</div>`);
var root_4 = from_html(`<button class="flex text-xs items-center space-x-1 px-3 py-1.5 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-gray-200 transition"><div class=" self-center font-medium line-clamp-1"> </div></button>`);
var root_5 = from_html(`<button class="flex text-xs items-center space-x-1 px-3 py-1.5 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-gray-200 transition"><div class=" self-center font-medium line-clamp-1"> </div></button>`);
var root_6 = from_html(`<div class="self-center pl-1.5 translate-y-[0.5px] rounded-l-xl bg-transparent"><button class="p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition"><!></button></div>`);
var root_9 = from_html(`<div class="shrink-0 text-gray-500"> </div>`);
var root_11 = from_html(`<button class="self-center w-fit text-sm px-2 py-2 dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl" type="button"><!></button>`);
var root_13 = from_html(`<button class="self-center w-fit text-sm p-1.5 dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl" type="button"><!></button>`);
var root_8 = from_html(`<a class=" flex space-x-4 cursor-pointer text-left w-full px-3 py-2.5 dark:hover:bg-gray-850/50 hover:bg-gray-50 transition rounded-2xl"><div class=" flex flex-col flex-1 space-x-4 cursor-pointer w-full pl-1"><div class=" flex-1 flex items-center gap-2 self-start"><div class=" font-medium line-clamp-1 capitalize"> </div> <div class=" text-xs overflow-hidden text-ellipsis line-clamp-1 text-gray-500"> </div></div> <div class=" text-xs"><!></div></div> <div class="flex flex-row gap-0.5 self-center"><!></div></a>`);
var root_7 = from_html(`<div class="gap-2 grid my-2 px-3 lg:grid-cols-2"></div>`);
var root_14 = from_html(`<div class=" w-full h-full flex flex-col justify-center items-center my-16 mb-24"><div class="max-w-md text-center"><div class=" text-3xl mb-3">😕</div> <div class=" text-lg font-medium mb-1"> </div> <div class=" text-gray-500 text-center text-xs"> </div></div></div>`);
var root_15 = from_html(`<div class=" my-16"><div class=" text-xl font-medium mb-1 line-clamp-1"> </div> <a class=" flex cursor-pointer items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-850 w-full mb-2 px-3.5 py-1.5 rounded-xl transition" href="https://openwebui.com/prompts" target="_blank"><div class=" self-center"><div class=" font-medium line-clamp-1"> </div> <div class=" text-sm line-clamp-1"> </div></div> <div><div><!></div></div></a></div>`);
var root_2 = from_html(`<!> <div class="flex flex-col gap-1 px-1 mt-1.5 mb-3"><input id="prompts-import-input" type="file" accept=".json" hidden=""/> <div class="flex justify-between items-center"><div class="flex items-center md:self-center text-xl font-medium px-0.5 gap-2 shrink-0"><div> </div> <div class="text-lg font-medium text-gray-500 dark:text-gray-500"> </div></div> <div class="flex w-full justify-end gap-1.5"><!> <!> <a class=" px-2 py-1.5 rounded-xl bg-black text-white dark:bg-white dark:text-black transition font-medium text-sm flex items-center" href="/workspace/prompts/create"><!> <div class=" hidden md:block md:ml-1 text-xs"> </div></a></div></div></div> <div class="py-2 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-850"><div class=" flex w-full space-x-2 py-0.5 px-3.5 pb-2"><div class="flex flex-1"><div class=" self-center ml-1 mr-3"><!></div> <input class=" w-full text-sm pr-4 py-1 rounded-r-xl outline-hidden bg-transparent"/> <!></div></div> <div class="px-3 flex w-full bg-transparent overflow-x-auto scrollbar-none -mx-1"><div class="flex gap-0.5 w-fit text-center text-sm rounded-full bg-transparent px-1.5 whitespace-nowrap"><!></div></div> <!></div> <!>`, 1);
var root_16 = from_html(`<div class="w-full h-full flex justify-center items-center"><!></div>`);
function Prompts($$anchor, $$props) {
  push($$props, false);
  const $user = () => store_get(user, "$user", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $WEBUI_NAME = () => store_get(WEBUI_NAME, "$WEBUI_NAME", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const { saveAs } = fileSaver;
  let shiftKey = mutable_source(false);
  const i18n = getContext("i18n");
  let promptsImportInputElement = mutable_source();
  let loaded = mutable_source(false);
  let importFiles = mutable_source(null);
  let query = mutable_source("");
  let prompts$1 = mutable_source([]);
  let showDeleteConfirm = mutable_source(false);
  let deletePrompt = mutable_source(null);
  let tagsContainerElement = mutable_source();
  let viewOption = mutable_source("");
  let filteredItems = mutable_source([]);
  const setFilteredItems = () => {
    set(filteredItems, get(prompts$1).filter((p) => {
      var _a, _b, _c, _d;
      if (get(query) === "" && get(viewOption) === "") return true;
      const lowerQuery = get(query).toLowerCase();
      return ((p.title || "").toLowerCase().includes(lowerQuery) || (p.command || "").toLowerCase().includes(lowerQuery) || (((_a = p.user) == null ? void 0 : _a.name) || "").toLowerCase().includes(lowerQuery) || (((_b = p.user) == null ? void 0 : _b.email) || "").toLowerCase().includes(lowerQuery)) && (get(viewOption) === "" || get(viewOption) === "created" && p.user_id === ((_c = $user()) == null ? void 0 : _c.id) || get(viewOption) === "shared" && p.user_id !== ((_d = $user()) == null ? void 0 : _d.id));
    }));
  };
  const shareHandler = async (prompt) => {
    toast.success($i18n().t("Redirecting you to Open WebUI Community"));
    const url = "https://openwebui.com";
    const tab = await window.open(`${url}/prompts/create`, "_blank");
    window.addEventListener(
      "message",
      (event2) => {
        if (event2.origin !== url) return;
        if (event2.data === "loaded") {
          tab.postMessage(JSON.stringify(prompt), "*");
        }
      },
      false
    );
  };
  const cloneHandler = async (prompt) => {
    const clonedPrompt = { ...prompt };
    clonedPrompt.title = `${clonedPrompt.title} (Clone)`;
    const baseCommand = clonedPrompt.command.startsWith("/") ? clonedPrompt.command.substring(1) : clonedPrompt.command;
    clonedPrompt.command = slugify(`${baseCommand} clone`);
    sessionStorage.prompt = JSON.stringify(clonedPrompt);
    goto("/workspace/prompts/create");
  };
  const exportHandler = async (prompt) => {
    let blob = new Blob([JSON.stringify([prompt])], { type: "application/json" });
    saveAs(blob, `prompt-export-${Date.now()}.json`);
  };
  const deleteHandler = async (prompt) => {
    const command = prompt.command;
    const res = await deletePromptByCommand(localStorage.token, command).catch((err) => {
      toast.error(err);
      return null;
    });
    if (res) {
      toast.success($i18n().t(`Deleted {{name}}`, { name: command }));
    }
    await init$1();
  };
  const init$1 = async () => {
    set(prompts$1, await getPromptList(localStorage.token));
    await prompts.set(await getPrompts(localStorage.token));
  };
  onMount(async () => {
    set(viewOption, (localStorage == null ? void 0 : localStorage.workspaceViewOption) || "");
    await init$1();
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
    window.addEventListener("blur", onBlur);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("blur", onBlur);
    };
  });
  legacy_pre_effect(() => (get(prompts$1), get(query), get(viewOption)), () => {
    if (get(prompts$1) && get(query) !== void 0 && get(viewOption) !== void 0) {
      setFilteredItems();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  head("1jqd4z5", ($$anchor2) => {
    deferred_template_effect(
      ($0) => {
        $document.title = `
		${$0 ?? ""} • ${$WEBUI_NAME() ?? ""}
	`;
      },
      [() => ($i18n(), untrack(() => $i18n().t("Prompts")))]
    );
  });
  var node = first_child(fragment);
  {
    var consequent_6 = ($$anchor2) => {
      var fragment_1 = root_2();
      var node_1 = first_child(fragment_1);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete prompt?"))));
        ConfirmDialog(node_1, {
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
              deleteHandler(get(deletePrompt));
            }
          },
          children: ($$anchor3, $$slotProps) => {
            var div = root_3();
            var text = child(div);
            var span = sibling(text);
            var text_1 = child(span, true);
            reset(span);
            next();
            reset(div);
            template_effect(
              ($02) => {
                set_text(text, `${$02 ?? ""} `);
                set_text(text_1, (get(deletePrompt), untrack(() => get(deletePrompt).command)));
              },
              [
                () => ($i18n(), untrack(() => $i18n().t("This will delete")))
              ]
            );
            append($$anchor3, div);
          },
          $$slots: { default: true },
          $$legacy: true
        });
      }
      var div_1 = sibling(node_1, 2);
      var input = child(div_1);
      bind_this(input, ($$value) => set(promptsImportInputElement, $$value), () => get(promptsImportInputElement));
      var div_2 = sibling(input, 2);
      var div_3 = child(div_2);
      var div_4 = child(div_3);
      var text_2 = child(div_4, true);
      reset(div_4);
      var div_5 = sibling(div_4, 2);
      var text_3 = child(div_5, true);
      reset(div_5);
      reset(div_3);
      var div_6 = sibling(div_3, 2);
      var node_2 = child(div_6);
      {
        var consequent = ($$anchor3) => {
          var button = root_4();
          var div_7 = child(button);
          var text_4 = child(div_7, true);
          reset(div_7);
          reset(button);
          template_effect(($0) => set_text(text_4, $0), [() => ($i18n(), untrack(() => $i18n().t("Import")))]);
          event("click", button, () => {
            get(promptsImportInputElement).click();
          });
          append($$anchor3, button);
        };
        if_block(node_2, ($$render) => {
          if ($user(), untrack(() => {
            var _a, _b, _c, _d;
            return ((_a = $user()) == null ? void 0 : _a.role) === "admin" || ((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.workspace) == null ? void 0 : _d.prompts_import);
          })) $$render(consequent);
        });
      }
      var node_3 = sibling(node_2, 2);
      {
        var consequent_1 = ($$anchor3) => {
          var button_1 = root_5();
          var div_8 = child(button_1);
          var text_5 = child(div_8, true);
          reset(div_8);
          reset(button_1);
          template_effect(($0) => set_text(text_5, $0), [() => ($i18n(), untrack(() => $i18n().t("Export")))]);
          event("click", button_1, async () => {
            let blob = new Blob([JSON.stringify(get(prompts$1))], { type: "application/json" });
            saveAs(blob, `prompts-export-${Date.now()}.json`);
          });
          append($$anchor3, button_1);
        };
        if_block(node_3, ($$render) => {
          if (get(prompts$1), $user(), untrack(() => {
            var _a, _b, _c, _d;
            return get(prompts$1).length && (((_a = $user()) == null ? void 0 : _a.role) === "admin" || ((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.workspace) == null ? void 0 : _d.prompts_export));
          })) $$render(consequent_1);
        });
      }
      var a = sibling(node_3, 2);
      var node_4 = child(a);
      Plus(node_4, { className: "size-3", strokeWidth: "2.5" });
      var div_9 = sibling(node_4, 2);
      var text_6 = child(div_9, true);
      reset(div_9);
      reset(a);
      reset(div_6);
      reset(div_2);
      reset(div_1);
      var div_10 = sibling(div_1, 2);
      var div_11 = child(div_10);
      var div_12 = child(div_11);
      var div_13 = child(div_12);
      var node_5 = child(div_13);
      Search(node_5, { className: "size-3.5" });
      reset(div_13);
      var input_1 = sibling(div_13, 2);
      remove_input_defaults(input_1);
      var node_6 = sibling(input_1, 2);
      {
        var consequent_2 = ($$anchor3) => {
          var div_14 = root_6();
          var button_2 = child(div_14);
          var node_7 = child(button_2);
          XMark(node_7, { className: "size-3", strokeWidth: "2" });
          reset(button_2);
          reset(div_14);
          event("click", button_2, () => {
            set(query, "");
          });
          append($$anchor3, div_14);
        };
        if_block(node_6, ($$render) => {
          if (get(query)) $$render(consequent_2);
        });
      }
      reset(div_12);
      reset(div_11);
      var div_15 = sibling(div_11, 2);
      var div_16 = child(div_15);
      var node_8 = child(div_16);
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
      reset(div_16);
      bind_this(div_16, ($$value) => set(tagsContainerElement, $$value), () => get(tagsContainerElement));
      reset(div_15);
      var node_9 = sibling(div_15, 2);
      {
        var consequent_4 = ($$anchor3) => {
          var div_17 = root_7();
          each(div_17, 5, () => get(filteredItems), index, ($$anchor4, prompt) => {
            var a_1 = root_8();
            var div_18 = child(a_1);
            var div_19 = child(div_18);
            var div_20 = child(div_19);
            var text_7 = child(div_20, true);
            reset(div_20);
            var div_21 = sibling(div_20, 2);
            var text_8 = child(div_21, true);
            reset(div_21);
            reset(div_19);
            var div_22 = sibling(div_19, 2);
            var node_10 = child(div_22);
            {
              let $0 = derived_safe_equal(() => (get(prompt), $i18n(), untrack(() => {
                var _a, _b;
                return ((_b = (_a = get(prompt)) == null ? void 0 : _a.user) == null ? void 0 : _b.email) ?? $i18n().t("Deleted User");
              })));
              Tooltip(node_10, {
                get content() {
                  return get($0);
                },
                className: "flex shrink-0",
                placement: "top-start",
                children: ($$anchor5, $$slotProps) => {
                  var div_23 = root_9();
                  var text_9 = child(div_23, true);
                  reset(div_23);
                  template_effect(($02) => set_text(text_9, $02), [
                    () => ($i18n(), deep_read_state(capitalizeFirstLetter), get(prompt), untrack(() => {
                      var _a, _b, _c, _d;
                      return $i18n().t("By {{name}}", {
                        name: capitalizeFirstLetter(((_b = (_a = get(prompt)) == null ? void 0 : _a.user) == null ? void 0 : _b.name) ?? ((_d = (_c = get(prompt)) == null ? void 0 : _c.user) == null ? void 0 : _d.email) ?? $i18n().t("Deleted User"))
                      });
                    }))
                  ]);
                  append($$anchor5, div_23);
                },
                $$slots: { default: true }
              });
            }
            reset(div_22);
            reset(div_18);
            var div_24 = sibling(div_18, 2);
            var node_11 = child(div_24);
            {
              var consequent_3 = ($$anchor5) => {
                {
                  let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete"))));
                  Tooltip($$anchor5, {
                    get content() {
                      return get($0);
                    },
                    children: ($$anchor6, $$slotProps) => {
                      var button_3 = root_11();
                      var node_12 = child(button_3);
                      GarbageBin(node_12, {});
                      reset(button_3);
                      event("click", button_3, () => {
                        deleteHandler(get(prompt));
                      });
                      append($$anchor6, button_3);
                    },
                    $$slots: { default: true }
                  });
                }
              };
              var alternate = ($$anchor5) => {
                PromptMenu($$anchor5, {
                  shareHandler: () => {
                    shareHandler(get(prompt));
                  },
                  cloneHandler: () => {
                    cloneHandler(get(prompt));
                  },
                  exportHandler: () => {
                    exportHandler(get(prompt));
                  },
                  deleteHandler: async () => {
                    set(deletePrompt, get(prompt));
                    set(showDeleteConfirm, true);
                  },
                  onClose: () => {
                  },
                  children: ($$anchor6, $$slotProps) => {
                    var button_4 = root_13();
                    var node_13 = child(button_4);
                    EllipsisHorizontal(node_13, { className: "size-5" });
                    reset(button_4);
                    append($$anchor6, button_4);
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_11, ($$render) => {
                if (get(shiftKey)) $$render(consequent_3);
                else $$render(alternate, false);
              });
            }
            reset(div_24);
            reset(a_1);
            template_effect(
              ($0) => {
                set_attribute(a_1, "href", $0);
                set_text(text_7, (get(prompt), untrack(() => get(prompt).title)));
                set_text(text_8, (get(prompt), untrack(() => get(prompt).command)));
              },
              [
                () => (get(prompt), untrack(() => `/workspace/prompts/edit?command=${encodeURIComponent(get(prompt).command)}`))
              ]
            );
            append($$anchor4, a_1);
          });
          reset(div_17);
          append($$anchor3, div_17);
        };
        var alternate_1 = ($$anchor3) => {
          var div_25 = root_14();
          var div_26 = child(div_25);
          var div_27 = sibling(child(div_26), 2);
          var text_10 = child(div_27, true);
          reset(div_27);
          var div_28 = sibling(div_27, 2);
          var text_11 = child(div_28, true);
          reset(div_28);
          reset(div_26);
          reset(div_25);
          template_effect(
            ($0, $1) => {
              set_text(text_10, $0);
              set_text(text_11, $1);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("No prompts found"))),
              () => ($i18n(), untrack(() => $i18n().t("Try adjusting your search or filter to find what you are looking for.")))
            ]
          );
          append($$anchor3, div_25);
        };
        if_block(node_9, ($$render) => {
          if (get(filteredItems), untrack(() => (get(filteredItems) ?? []).length !== 0)) $$render(consequent_4);
          else $$render(alternate_1, false);
        });
      }
      reset(div_10);
      var node_14 = sibling(div_10, 2);
      {
        var consequent_5 = ($$anchor3) => {
          var div_29 = root_15();
          var div_30 = child(div_29);
          var text_12 = child(div_30, true);
          reset(div_30);
          var a_2 = sibling(div_30, 2);
          var div_31 = child(a_2);
          var div_32 = child(div_31);
          var text_13 = child(div_32, true);
          reset(div_32);
          var div_33 = sibling(div_32, 2);
          var text_14 = child(div_33, true);
          reset(div_33);
          reset(div_31);
          var div_34 = sibling(div_31, 2);
          var div_35 = child(div_34);
          var node_15 = child(div_35);
          ChevronRight(node_15, {});
          reset(div_35);
          reset(div_34);
          reset(a_2);
          reset(div_29);
          template_effect(
            ($0, $1, $2) => {
              set_text(text_12, $0);
              set_text(text_13, $1);
              set_text(text_14, $2);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Made by Open WebUI Community"))),
              () => ($i18n(), untrack(() => $i18n().t("Discover a prompt"))),
              () => ($i18n(), untrack(() => $i18n().t("Discover, download, and explore custom prompts")))
            ]
          );
          append($$anchor3, div_29);
        };
        if_block(node_14, ($$render) => {
          if ($config(), untrack(() => {
            var _a;
            return (_a = $config()) == null ? void 0 : _a.features.enable_community_sharing;
          })) $$render(consequent_5);
        });
      }
      template_effect(
        ($0, $1, $2) => {
          set_text(text_2, $0);
          set_text(text_3, (get(filteredItems), untrack(() => get(filteredItems).length)));
          set_text(text_6, $1);
          set_attribute(input_1, "placeholder", $2);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Prompts"))),
          () => ($i18n(), untrack(() => $i18n().t("New Prompt"))),
          () => ($i18n(), untrack(() => $i18n().t("Search Prompts")))
        ]
      );
      bind_files(input, () => get(importFiles), ($$value) => set(importFiles, $$value));
      event("change", input, () => {
        console.log(get(importFiles));
        const reader = new FileReader();
        reader.onload = async (event2) => {
          const savedPrompts = JSON.parse(event2.target.result);
          console.log(savedPrompts);
          for (const prompt of savedPrompts) {
            await createNewPrompt(localStorage.token, {
              command: prompt.command.charAt(0) === "/" ? prompt.command.slice(1) : prompt.command,
              title: prompt.title,
              content: prompt.content
            }).catch((error) => {
              toast.error(`${error}`);
              return null;
            });
          }
          set(prompts$1, await getPromptList(localStorage.token));
          await prompts.set(await getPrompts(localStorage.token));
          set(importFiles, []);
          mutate(promptsImportInputElement, get(promptsImportInputElement).value = "");
        };
        reader.readAsText(get(importFiles)[0]);
      });
      bind_value(input_1, () => get(query), ($$value) => set(query, $$value));
      event("wheel", div_15, (e) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          e.currentTarget.scrollLeft += e.deltaY;
        }
      });
      append($$anchor2, fragment_1);
    };
    var alternate_2 = ($$anchor2) => {
      var div_36 = root_16();
      var node_16 = child(div_36);
      Spinner(node_16, { className: "size-5" });
      reset(div_36);
      append($$anchor2, div_36);
    };
    if_block(node, ($$render) => {
      if (get(loaded)) $$render(consequent_6);
      else $$render(alternate_2, false);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
function _page($$anchor) {
  Prompts($$anchor, {});
}
export {
  _page as component
};
