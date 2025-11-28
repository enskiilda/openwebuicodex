import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { t as template_effect, p as push, n as createEventDispatcher, c as child, b as get, h as derived_safe_equal, r as reset, u as untrack, i as deep_read_state, a as pop, g as getContext, f as first_child, e as sibling, s as set, m as mutable_source, o as onMount, ay as onDestroy, l as legacy_pre_effect, j as legacy_pre_effect_reset, aF as mutate, aG as remove_textarea_child } from "../chunks/BxIY6ir7.js";
import { s as set_text, e as event } from "../chunks/cBADewWV.js";
import { i as if_block } from "../chunks/BoSuMvtf.js";
import { k as key } from "../chunks/CmeGWm0r.js";
import { b as from_svg, a as append, f as from_html, c as comment } from "../chunks/CAbo1QWi.js";
import { a as set_attribute, s as set_class, c as clsx, r as remove_input_defaults } from "../chunks/kXiCYuyj.js";
import { b as bind_value, a as bind_files } from "../chunks/DVLuwGai.js";
import { i as init } from "../chunks/ByqEASoO.js";
import { a as store_get, s as setup_stores } from "../chunks/BvQ5O7-v.js";
import { F as Fuse } from "../chunks/AFl3itOE.js";
import { t as toast } from "../chunks/BccDN__m.js";
import { g as goto } from "../chunks/h-B6Md2q.js";
import { p as page } from "../chunks/CrvggIeO.js";
import { c as config, b as settings, k as knowledge, u as user } from "../chunks/2Yg1sHDo.js";
import { F as FileItem, u as uploadFile, g as getFileById, a as updateFileDataContentById } from "../chunks/P5gA3V2-.js";
import { r as resetKnowledgeById, e as addFileToKnowledgeById, b as getKnowledgeById, u as updateKnowledgeById, g as getKnowledgeBases, f as removeFileFromKnowledgeById, h as updateFileFromKnowledgeById } from "../chunks/C_BzFfir.js";
import { x as v4, D as blobToFile } from "../chunks/Bh-hrM1w.js";
import { S as Spinner } from "../chunks/CtnI4RVL.js";
import { e as each, i as index } from "../chunks/7_HZMPNF.js";
import { p as prop } from "../chunks/BRmGPDvq.js";
import "../chunks/C2A39Ney.js";
import { b as Menu_content, c as Menu_item } from "../chunks/DQmZL-p0.js";
import { f as flyAndScale } from "../chunks/BuLNlPfL.js";
import { D as Dropdown } from "../chunks/NbBmD2S8.js";
import { T as Tooltip } from "../chunks/BHXWufQb.js";
import { F as FolderOpen } from "../chunks/D8r4M5hU.js";
import { p as preventDefault } from "../chunks/CGgk3ROl.js";
import "../chunks/OO7lCI-F.js";
import { M as Modal } from "../chunks/DF6V1elH.js";
import { R as RichTextInput, V as VoiceRecording } from "../chunks/DmcjPXfa.js";
import { X as XMark } from "../chunks/CUUSX84-.js";
import { M as MicSolid } from "../chunks/CC71IhnP.js";
import { C as ConfirmDialog } from "../chunks/DhVOSDv1.js";
import "../chunks/bQFTtKkZ.js";
import { D as Drawer } from "../chunks/CfhMM1S2.js";
import { C as ChevronLeft } from "../chunks/cSMfCVGw.js";
import { L as LockClosed } from "../chunks/CK7-DaSl.js";
import { A as AccessControlModal } from "../chunks/CRvJEYxG.js";
import { S as Search } from "../chunks/2ixn6gs3.js";
import { F as FilesOverlay } from "../chunks/CQWizoxB.js";
var root$4 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>`);
function ArrowUpCircle($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$4();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root_1$2 = from_html(`<div class="mt-1 px-2"><!></div>`);
var root$3 = from_html(`<div class=" max-h-full flex flex-col w-full"></div>`);
function Files($$anchor, $$props) {
  push($$props, false);
  const dispatch = createEventDispatcher();
  let selectedFileId = prop($$props, "selectedFileId", 8, null);
  let files = prop($$props, "files", 24, () => []);
  let small = prop($$props, "small", 8, false);
  init();
  var div = root$3();
  each(div, 5, files, index, ($$anchor2, file) => {
    var div_1 = root_1$2();
    var node = child(div_1);
    {
      let $0 = derived_safe_equal(() => (deep_read_state(selectedFileId()), get(file), untrack(() => selectedFileId() === get(file).id ? " bg-gray-50 dark:bg-gray-850" : "bg-transparent")));
      let $1 = derived_safe_equal(() => (get(file), untrack(() => {
        var _a, _b, _c;
        return ((_a = get(file)) == null ? void 0 : _a.name) ?? ((_c = (_b = get(file)) == null ? void 0 : _b.meta) == null ? void 0 : _c.name);
      })));
      let $2 = derived_safe_equal(() => (get(file), untrack(() => {
        var _a, _b, _c;
        return ((_a = get(file)) == null ? void 0 : _a.size) ?? ((_c = (_b = get(file)) == null ? void 0 : _b.meta) == null ? void 0 : _c.size) ?? "";
      })));
      let $3 = derived_safe_equal(() => (get(file), untrack(() => get(file).status === "uploading")));
      FileItem(node, {
        className: "w-full",
        get colorClassName() {
          return `${get($0) ?? ""} hover:bg-gray-50 dark:hover:bg-gray-850 transition`;
        },
        get small() {
          return small();
        },
        get item() {
          return get(file);
        },
        get name() {
          return get($1);
        },
        type: "file",
        get size() {
          return get($2);
        },
        get loading() {
          return get($3);
        },
        dismissible: true,
        $$events: {
          click: () => {
            if (get(file).status === "uploading") {
              return;
            }
            dispatch("click", get(file).id);
          },
          dismiss: () => {
            if (get(file).status === "uploading") {
              return;
            }
            dispatch("delete", get(file).id);
          }
        }
      });
    }
    reset(div_1);
    append($$anchor2, div_1);
  });
  reset(div);
  append($$anchor, div);
  pop();
}
var root$2 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"></path></svg>`);
function BarsArrowUp($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$2();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root$1 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"></path></svg>`);
function ArrowPath($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$1();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root_2$2 = from_html(`<button class=" p-1.5 rounded-xl hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 transition font-medium text-sm flex items-center space-x-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"></path></svg></button>`);
var root_5$2 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_6$1 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_8 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_9 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_4$1 = from_html(`<!> <!> <!> <!>`, 1);
var root_3$1 = from_html(`<div slot="content"><!></div>`);
function AddContentMenu($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const dispatch = createEventDispatcher();
  const i18n = getContext("i18n");
  let onClose = prop($$props, "onClose", 8, () => {
  });
  let show = mutable_source(false);
  init();
  Dropdown($$anchor, {
    align: "end",
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
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Add Content"))));
        Tooltip($$anchor2, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps2) => {
            var button = root_2$2();
            event("click", button, (e) => {
              e.stopPropagation();
              set(show, true);
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
        var node = child(div);
        Menu_content(node, {
          class: "w-full max-w-44 rounded-xl p-1 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-sm",
          sideOffset: 4,
          side: "bottom",
          align: "end",
          get transition() {
            return flyAndScale;
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_2 = root_4$1();
            var node_1 = first_child(fragment_2);
            Menu_item(node_1, {
              class: "flex  gap-2  items-center px-3 py-2 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md",
              $$events: {
                click: () => {
                  dispatch("upload", { type: "files" });
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_3 = root_5$2();
                var node_2 = first_child(fragment_3);
                ArrowUpCircle(node_2, { strokeWidth: "2" });
                var div_1 = sibling(node_2, 2);
                var text = child(div_1, true);
                reset(div_1);
                template_effect(($0) => set_text(text, $0), [() => ($i18n(), untrack(() => $i18n().t("Upload files")))]);
                append($$anchor4, fragment_3);
              },
              $$slots: { default: true }
            });
            var node_3 = sibling(node_1, 2);
            Menu_item(node_3, {
              class: "flex  gap-2  items-center px-3 py-2 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md",
              $$events: {
                click: () => {
                  dispatch("upload", { type: "directory" });
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_4 = root_6$1();
                var node_4 = first_child(fragment_4);
                FolderOpen(node_4, { strokeWidth: "2" });
                var div_2 = sibling(node_4, 2);
                var text_1 = child(div_2, true);
                reset(div_2);
                template_effect(($0) => set_text(text_1, $0), [
                  () => ($i18n(), untrack(() => $i18n().t("Upload directory")))
                ]);
                append($$anchor4, fragment_4);
              },
              $$slots: { default: true }
            });
            var node_5 = sibling(node_3, 2);
            {
              let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("This option will delete all existing files in the collection and replace them with newly uploaded files."))));
              Tooltip(node_5, {
                get content() {
                  return get($0);
                },
                className: "w-full",
                children: ($$anchor4, $$slotProps3) => {
                  Menu_item($$anchor4, {
                    class: "flex  gap-2  items-center px-3 py-2 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md",
                    $$events: {
                      click: () => {
                        dispatch("sync", { type: "directory" });
                      }
                    },
                    children: ($$anchor5, $$slotProps4) => {
                      var fragment_6 = root_8();
                      var node_6 = first_child(fragment_6);
                      ArrowPath(node_6, { strokeWidth: "2" });
                      var div_3 = sibling(node_6, 2);
                      var text_2 = child(div_3, true);
                      reset(div_3);
                      template_effect(($02) => set_text(text_2, $02), [
                        () => ($i18n(), untrack(() => $i18n().t("Sync directory")))
                      ]);
                      append($$anchor5, fragment_6);
                    },
                    $$slots: { default: true }
                  });
                },
                $$slots: { default: true }
              });
            }
            var node_7 = sibling(node_5, 2);
            Menu_item(node_7, {
              class: "flex  gap-2  items-center px-3 py-2 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md",
              $$events: {
                click: () => {
                  dispatch("upload", { type: "text" });
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_7 = root_9();
                var node_8 = first_child(fragment_7);
                BarsArrowUp(node_8, { strokeWidth: "2" });
                var div_4 = sibling(node_8, 2);
                var text_3 = child(div_4, true);
                reset(div_4);
                template_effect(($0) => set_text(text_3, $0), [
                  () => ($i18n(), untrack(() => $i18n().t("Add text content")))
                ]);
                append($$anchor4, fragment_7);
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
var root_2$1 = from_html(`<div class=" max-w-full w-full"><!></div>`);
var root_4 = from_html(`<button class=" p-2 bg-gray-50 text-gray-700 dark:bg-gray-700 dark:text-white transition rounded-full" type="button"><!></button>`);
var root_5$1 = from_html(`<button class=" px-3.5 py-2 bg-black text-white dark:bg-white dark:text-black transition rounded-full" type="submit"> </button>`);
var root_1$1 = from_html(`<div class="absolute top-0 right-0 p-5"><button class="self-center dark:text-white" type="button"><!></button></div> <div class="flex flex-col md:flex-row w-full h-full md:space-x-4 dark:text-gray-200"><form class="flex flex-col w-full h-full"><div class=" flex-1 w-full h-full flex justify-center overflow-auto px-5 py-4"><div class=" max-w-3xl py-2 md:py-10 w-full flex flex-col gap-2"><div class="shrink-0 w-full flex justify-between items-center"><div class="w-full"><input class="w-full text-3xl font-medium bg-transparent outline-hidden svelte-1bctwft" type="text" required/></div></div> <div class=" flex-1 w-full h-full"><!></div></div></div> <div class="flex flex-row items-center justify-end text-sm font-medium shrink-0 mt-1 p-4 gap-1.5"><div><!></div> <div class=" shrink-0"><!></div></div></form></div>`, 1);
function AddTextContentModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  const dispatch = createEventDispatcher();
  let show = prop($$props, "show", 12, false);
  let name = mutable_source($i18n().t("Untitled"));
  let content = mutable_source("");
  let voiceInput = mutable_source(false);
  init();
  Modal($$anchor, {
    size: "full",
    containerClassName: "",
    className: "h-full bg-white dark:bg-gray-900",
    get show() {
      return show();
    },
    set show($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$1();
      var div = first_child(fragment_1);
      var button = child(div);
      var node = child(button);
      XMark(node, { className: "size-3.5" });
      reset(button);
      reset(div);
      var div_1 = sibling(div, 2);
      var form = child(div_1);
      var div_2 = child(form);
      var div_3 = child(div_2);
      var div_4 = child(div_3);
      var div_5 = child(div_4);
      var input = child(div_5);
      remove_input_defaults(input);
      reset(div_5);
      reset(div_4);
      var div_6 = sibling(div_4, 2);
      var node_1 = child(div_6);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Write something..."))));
        RichTextInput(node_1, {
          get placeholder() {
            return get($0);
          },
          preserveBreaks: true,
          get value() {
            return get(content);
          },
          set value($$value) {
            set(content, $$value);
          },
          $$legacy: true
        });
      }
      reset(div_6);
      reset(div_3);
      reset(div_2);
      var div_7 = sibling(div_2, 2);
      var div_8 = child(div_7);
      var node_2 = child(div_8);
      {
        var consequent = ($$anchor3) => {
          var div_9 = root_2$1();
          var node_3 = child(div_9);
          VoiceRecording(node_3, {
            className: "p-1",
            onCancel: () => {
              set(voiceInput, false);
            },
            onConfirm: (data) => {
              const { text, filename } = data;
              set(content, `${get(content)}${text} `);
              set(voiceInput, false);
            },
            get recording() {
              return get(voiceInput);
            },
            set recording($$value) {
              set(voiceInput, $$value);
            },
            $$legacy: true
          });
          reset(div_9);
          append($$anchor3, div_9);
        };
        var alternate = ($$anchor3) => {
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Voice Input"))));
            Tooltip($$anchor3, {
              get content() {
                return get($0);
              },
              children: ($$anchor4, $$slotProps2) => {
                var button_1 = root_4();
                var node_4 = child(button_1);
                MicSolid(node_4, { className: "size-5" });
                reset(button_1);
                event("click", button_1, async () => {
                  try {
                    let stream = await navigator.mediaDevices.getUserMedia({ audio: true }).catch(function(err) {
                      toast.error($i18n().t(`Permission denied when accessing microphone: {{error}}`, { error: err }));
                      return null;
                    });
                    if (stream) {
                      set(voiceInput, true);
                      const tracks = stream.getTracks();
                      tracks.forEach((track) => track.stop());
                    }
                    stream = null;
                  } catch {
                    toast.error($i18n().t("Permission denied when accessing microphone"));
                  }
                });
                append($$anchor4, button_1);
              },
              $$slots: { default: true }
            });
          }
        };
        if_block(node_2, ($$render) => {
          if (get(voiceInput)) $$render(consequent);
          else $$render(alternate, false);
        });
      }
      reset(div_8);
      var div_10 = sibling(div_8, 2);
      var node_5 = child(div_10);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Save"))));
        Tooltip(node_5, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps2) => {
            var button_2 = root_5$1();
            var text_1 = child(button_2, true);
            reset(button_2);
            template_effect(($02) => set_text(text_1, $02), [() => ($i18n(), untrack(() => $i18n().t("Save")))]);
            append($$anchor3, button_2);
          },
          $$slots: { default: true }
        });
      }
      reset(div_10);
      reset(div_7);
      reset(form);
      reset(div_1);
      template_effect(($0) => set_attribute(input, "placeholder", $0), [() => ($i18n(), untrack(() => $i18n().t("Title")))]);
      event("click", button, () => {
        show(false);
      });
      bind_value(input, () => get(name), ($$value) => set(name, $$value));
      event("submit", form, preventDefault(() => {
        if (get(name).trim() === "" || get(content).trim() === "") {
          toast.error($i18n().t("Please fill in all fields."));
          set(name, get(name).trim());
          set(content, get(content).trim());
          return;
        }
        dispatch("submit", { name: get(name), content: get(content) });
        show(false);
        set(name, "");
        set(content, "");
      }));
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root_5 = from_html(`<div class="ml-2 self-center"><!></div>`);
var root_6 = from_html(`<textarea class="w-full h-full outline-none resize-none"></textarea>`);
var root_3 = from_html(`<div class=" flex flex-col w-full"><div class="shrink-0 mb-2 flex items-center"><!> <div class=" flex-1 text-xl font-medium"><a class="hover:text-gray-500 dark:hover:text-gray-100 hover:underline grow line-clamp-1" target="_blank"> </a></div> <div><button class="self-center w-fit text-sm py-1 px-2.5 dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"> <!></button></div></div> <div class=" flex-1 w-full h-full max-h-full text-sm bg-transparent outline-hidden overflow-y-auto scrollbar-hidden"><!></div></div>`);
var root_7 = from_html(`<div class="h-full flex w-full"><div class="m-auto text-xs text-center text-gray-200 dark:text-gray-700"> </div></div>`);
var root_2 = from_html(`<div class="flex-1 flex justify-start w-full h-full max-h-full"><!></div>`);
var root_11 = from_html(`<div class="ml-2 self-center"><!></div>`);
var root_12 = from_html(`<textarea class="w-full h-full outline-none resize-none"></textarea>`);
var root_10 = from_html(`<div class="flex flex-col justify-start h-full max-h-full p-2"><div class=" flex flex-col w-full h-full max-h-full"><div class="shrink-0 mt-1 mb-2 flex items-center"><div class="mr-2"><button class="w-full text-left text-sm p-1.5 rounded-lg dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-gray-850"><!></button></div> <div class=" flex-1 text-xl line-clamp-1"> </div> <div><button class="self-center w-fit text-sm py-1 px-2.5 dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"> <!></button></div></div> <div class=" flex-1 w-full h-full max-h-full py-2.5 px-3.5 rounded-lg text-sm bg-transparent overflow-y-auto scrollbar-hidden"><!></div></div></div>`);
var root_13 = from_html(`<div class=" flex overflow-y-auto h-full w-full scrollbar-hidden text-xs"><!></div>`);
var root_14 = from_html(`<div class="my-3 flex flex-col justify-center text-center text-gray-500 text-xs"><div> </div></div>`);
var root_1 = from_html(`<!> <div class="w-full mb-2.5"><div class=" flex w-full"><div class="flex-1"><div class="flex items-center justify-between w-full px-0.5 mb-1"><div class="w-full"><input type="text" class="text-left w-full font-medium text-2xl font-primary bg-transparent outline-hidden"/></div> <div class="self-center shrink-0"><button class="bg-gray-50 hover:bg-gray-100 text-black dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-white transition px-2 py-1 rounded-full flex gap-1 items-center" type="button"><!> <div class="text-sm font-medium shrink-0"> </div></button></div></div> <div class="flex w-full px-1"><input type="text" class="text-left text-xs w-full text-gray-500 bg-transparent outline-hidden"/></div></div></div></div> <div class="flex flex-row flex-1 h-full max-h-full pb-2.5 gap-3"><!> <div><div class=" flex flex-col w-full space-x-2 rounded-lg h-full"><div class="w-full h-full flex flex-col"><div class=" px-3"><div class="flex mb-0.5"><div class=" self-center ml-1 mr-3"><!></div> <input class=" w-full text-sm pr-4 py-1 rounded-r-xl outline-hidden bg-transparent"/> <div><!></div></div></div> <!></div></div></div></div>`, 1);
var root = from_html(`<!> <!> <!> <input id="files-input" type="file" multiple hidden=""/> <div class="flex flex-col w-full h-full translate-y-1" id="collection-container"><!></div>`, 1);
function KnowledgeBase($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $page = () => store_get(page, "$page", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let largeScreen = mutable_source(true);
  let id = mutable_source(null);
  let knowledge$1 = mutable_source(null);
  let query = mutable_source("");
  let showAddTextContentModal = mutable_source(false);
  let showSyncConfirmModal = mutable_source(false);
  let showAccessControlModal = mutable_source(false);
  let inputFiles = mutable_source(null);
  let filteredItems = mutable_source([]);
  let selectedFile = mutable_source(null);
  let selectedFileId = mutable_source(null);
  let selectedFileContent = mutable_source("");
  let fileContentCache = /* @__PURE__ */ new Map();
  let fuse = mutable_source(null);
  let debounceTimeout = null;
  let mediaQuery;
  let dragged = mutable_source(false);
  let isSaving = mutable_source(false);
  const createFileFromText = (name, content) => {
    const blob = new Blob([content], { type: "text/plain" });
    const file = blobToFile(blob, `${name}.txt`);
    console.log(file);
    return file;
  };
  const uploadFileHandler = async (file) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
    console.log(file);
    const tempItemId = v4();
    const fileItem = {
      type: "file",
      file: "",
      id: null,
      url: "",
      name: file.name,
      size: file.size,
      status: "uploading",
      error: "",
      itemId: tempItemId
    };
    if (fileItem.size == 0) {
      toast.error($i18n().t("You cannot upload an empty file."));
      return null;
    }
    if ((((_b = (_a = $config()) == null ? void 0 : _a.file) == null ? void 0 : _b.max_size) ?? null) !== null && file.size > (((_d = (_c = $config()) == null ? void 0 : _c.file) == null ? void 0 : _d.max_size) ?? 0) * 1024 * 1024) {
      console.log("File exceeds max size limit:", {
        fileSize: file.size,
        maxSize: (((_f = (_e = $config()) == null ? void 0 : _e.file) == null ? void 0 : _f.max_size) ?? 0) * 1024 * 1024
      });
      toast.error($i18n().t(`File size should not exceed {{maxSize}} MB.`, { maxSize: (_h = (_g = $config()) == null ? void 0 : _g.file) == null ? void 0 : _h.max_size }));
      return;
    }
    mutate(knowledge$1, get(knowledge$1).files = [...get(knowledge$1).files ?? [], fileItem]);
    try {
      let metadata = null;
      if ((file.type.startsWith("audio/") || file.type.startsWith("video/")) && ((_k = (_j = (_i = $settings()) == null ? void 0 : _i.audio) == null ? void 0 : _j.stt) == null ? void 0 : _k.language)) {
        metadata = { language: (_n = (_m = (_l = $settings()) == null ? void 0 : _l.audio) == null ? void 0 : _m.stt) == null ? void 0 : _n.language };
      }
      const uploadedFile = await uploadFile(localStorage.token, file, metadata).catch((e) => {
        toast.error(`${e}`);
        return null;
      });
      if (uploadedFile) {
        console.log(uploadedFile);
        mutate(knowledge$1, get(knowledge$1).files = get(knowledge$1).files.map((item) => {
          if (item.itemId === tempItemId) {
            item.id = uploadedFile.id;
          }
          delete item.itemId;
          return item;
        }));
        if (uploadedFile.error) {
          console.warn("File upload warning:", uploadedFile.error);
          toast.warning(uploadedFile.error);
          mutate(knowledge$1, get(knowledge$1).files = get(knowledge$1).files.filter((file2) => file2.id !== uploadedFile.id));
        } else {
          await addFileHandler(uploadedFile.id);
        }
      } else {
        toast.error($i18n().t("Failed to upload file."));
      }
    } catch (e) {
      toast.error(`${e}`);
    }
  };
  const uploadDirectoryHandler = async () => {
    const isFileSystemAccessSupported = "showDirectoryPicker" in window;
    try {
      if (isFileSystemAccessSupported) {
        await handleModernBrowserUpload();
      } else {
        await handleFirefoxUpload();
      }
    } catch (error) {
      handleUploadError(error);
    }
  };
  const hasHiddenFolder = (path) => {
    return path.split("/").some((part) => part.startsWith("."));
  };
  const handleModernBrowserUpload = async () => {
    const dirHandle = await window.showDirectoryPicker();
    let totalFiles = 0;
    let uploadedFiles = 0;
    const updateProgress = () => {
      const percentage = uploadedFiles / totalFiles * 100;
      toast.info($i18n().t("Upload Progress: {{uploadedFiles}}/{{totalFiles}} ({{percentage}}%)", { uploadedFiles, totalFiles, percentage: percentage.toFixed(2) }));
    };
    async function countFiles(dirHandle2) {
      for await (const entry of dirHandle2.values()) {
        if (entry.name.startsWith(".")) continue;
        if (entry.kind === "file") {
          totalFiles++;
        } else if (entry.kind === "directory") {
          if (!entry.name.startsWith(".")) {
            await countFiles(entry);
          }
        }
      }
    }
    async function processDirectory(dirHandle2, path = "") {
      for await (const entry of dirHandle2.values()) {
        if (entry.name.startsWith(".")) continue;
        const entryPath = path ? `${path}/${entry.name}` : entry.name;
        if (hasHiddenFolder(entryPath)) continue;
        if (entry.kind === "file") {
          const file = await entry.getFile();
          const fileWithPath = new File([file], entryPath, { type: file.type });
          await uploadFileHandler(fileWithPath);
          uploadedFiles++;
          updateProgress();
        } else if (entry.kind === "directory") {
          if (!entry.name.startsWith(".")) {
            await processDirectory(entry, entryPath);
          }
        }
      }
    }
    await countFiles(dirHandle);
    updateProgress();
    if (totalFiles > 0) {
      await processDirectory(dirHandle);
    } else {
      console.log("No files to upload.");
    }
  };
  const handleFirefoxUpload = async () => {
    return new Promise((resolve, reject) => {
      const input = document.createElement("input");
      input.type = "file";
      input.webkitdirectory = true;
      input.directory = true;
      input.multiple = true;
      input.style.display = "none";
      document.body.appendChild(input);
      input.onchange = async () => {
        try {
          const files = Array.from(input.files).filter((file) => !hasHiddenFolder(file.webkitRelativePath));
          let totalFiles = files.length;
          let uploadedFiles = 0;
          const updateProgress = () => {
            const percentage = uploadedFiles / totalFiles * 100;
            toast.info($i18n().t("Upload Progress: {{uploadedFiles}}/{{totalFiles}} ({{percentage}}%)", { uploadedFiles, totalFiles, percentage: percentage.toFixed(2) }));
          };
          updateProgress();
          for (const file of files) {
            if (!file.name.startsWith(".")) {
              const relativePath = file.webkitRelativePath || file.name;
              const fileWithPath = new File([file], relativePath, { type: file.type });
              await uploadFileHandler(fileWithPath);
              uploadedFiles++;
              updateProgress();
            }
          }
          document.body.removeChild(input);
          resolve();
        } catch (error) {
          reject(error);
        }
      };
      input.onerror = (error) => {
        document.body.removeChild(input);
        reject(error);
      };
      input.click();
    });
  };
  const handleUploadError = (error) => {
    if (error.name === "AbortError") {
      toast.info($i18n().t("Directory selection was cancelled"));
    } else {
      toast.error($i18n().t("Error accessing directory"));
      console.error("Directory access error:", error);
    }
  };
  const syncDirectoryHandler = async () => {
    var _a;
    if ((((_a = get(knowledge$1)) == null ? void 0 : _a.files) ?? []).length > 0) {
      const res = await resetKnowledgeById(localStorage.token, get(id)).catch((e) => {
        toast.error(`${e}`);
      });
      if (res) {
        set(knowledge$1, res);
        toast.success($i18n().t("Knowledge reset successfully."));
        uploadDirectoryHandler();
      }
    } else {
      uploadDirectoryHandler();
    }
  };
  const addFileHandler = async (fileId) => {
    const updatedKnowledge = await addFileToKnowledgeById(localStorage.token, get(id), fileId).catch((e) => {
      toast.error(`${e}`);
      return null;
    });
    if (updatedKnowledge) {
      set(knowledge$1, updatedKnowledge);
      toast.success($i18n().t("File added successfully."));
    } else {
      toast.error($i18n().t("Failed to add file."));
      mutate(knowledge$1, get(knowledge$1).files = get(knowledge$1).files.filter((file) => file.id !== fileId));
    }
  };
  const deleteFileHandler = async (fileId) => {
    try {
      console.log("Starting file deletion process for:", fileId);
      const updatedKnowledge = await removeFileFromKnowledgeById(localStorage.token, get(id), fileId);
      console.log("Knowledge base updated:", updatedKnowledge);
      if (updatedKnowledge) {
        set(knowledge$1, updatedKnowledge);
        toast.success($i18n().t("File removed successfully."));
      }
    } catch (e) {
      console.error("Error in deleteFileHandler:", e);
      toast.error(`${e}`);
    }
  };
  const updateFileContentHandler = async () => {
    if (get(isSaving)) {
      console.log("Save operation already in progress, skipping...");
      return;
    }
    set(isSaving, true);
    try {
      const fileId = get(selectedFile).id;
      const content = get(selectedFileContent);
      fileContentCache.delete(fileId);
      const res = await updateFileDataContentById(localStorage.token, fileId, content).catch((e) => {
        toast.error(`${e}`);
      });
      const updatedKnowledge = await updateFileFromKnowledgeById(localStorage.token, get(id), fileId).catch((e) => {
        toast.error(`${e}`);
      });
      if (res && updatedKnowledge) {
        set(knowledge$1, updatedKnowledge);
        toast.success($i18n().t("File content updated successfully."));
      }
    } finally {
      set(isSaving, false);
    }
  };
  const changeDebounceHandler = () => {
    console.log("debounce");
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
    debounceTimeout = setTimeout(
      async () => {
        if (get(knowledge$1).name.trim() === "" || get(knowledge$1).description.trim() === "") {
          toast.error($i18n().t("Please fill in all fields."));
          return;
        }
        const res = await updateKnowledgeById(localStorage.token, get(id), {
          ...get(knowledge$1),
          name: get(knowledge$1).name,
          description: get(knowledge$1).description,
          access_control: get(knowledge$1).access_control
        }).catch((e) => {
          toast.error(`${e}`);
        });
        if (res) {
          toast.success($i18n().t("Knowledge updated successfully"));
          knowledge.set(await getKnowledgeBases(localStorage.token));
        }
      },
      1e3
    );
  };
  const handleMediaQuery = async (e) => {
    if (e.matches) {
      set(largeScreen, true);
    } else {
      set(largeScreen, false);
    }
  };
  const fileSelectHandler = async (file) => {
    try {
      set(selectedFile, file);
      if (fileContentCache.has(file.id)) {
        set(selectedFileContent, fileContentCache.get(file.id));
        return;
      }
      const response = await getFileById(localStorage.token, file.id);
      if (response) {
        set(selectedFileContent, response.data.content);
        fileContentCache.set(file.id, response.data.content);
      } else {
        toast.error($i18n().t("No content found in file."));
      }
    } catch (e) {
      toast.error($i18n().t("Failed to load file content."));
    }
  };
  const onDragOver = (e) => {
    var _a, _b;
    e.preventDefault();
    if ((_b = (_a = e.dataTransfer) == null ? void 0 : _a.types) == null ? void 0 : _b.includes("Files")) {
      set(dragged, true);
    } else {
      set(dragged, false);
    }
  };
  const onDragLeave = () => {
    set(dragged, false);
  };
  const onDrop = async (e) => {
    var _a, _b, _c, _d;
    e.preventDefault();
    set(dragged, false);
    const handleUploadingFileFolder = (items) => {
      for (const item of items) {
        if (item.isFile) {
          item.file((file) => {
            uploadFileHandler(file);
          });
          continue;
        }
        const wkentry = item.webkitGetAsEntry();
        const isDirectory = wkentry.isDirectory;
        if (isDirectory) {
          wkentry.createReader().readEntries(
            (entries) => {
              handleUploadingFileFolder(entries);
            },
            (error) => {
              console.error("Error reading directory entries:", error);
            }
          );
        } else {
          toast.info($i18n().t("Uploading file..."));
          uploadFileHandler(item.getAsFile());
          toast.success($i18n().t("File uploaded!"));
        }
      }
    };
    if ((_b = (_a = e.dataTransfer) == null ? void 0 : _a.types) == null ? void 0 : _b.includes("Files")) {
      if ((_c = e.dataTransfer) == null ? void 0 : _c.files) {
        const inputItems = (_d = e.dataTransfer) == null ? void 0 : _d.items;
        if (inputItems && inputItems.length > 0) {
          handleUploadingFileFolder(inputItems);
        } else {
          toast.error($i18n().t(`File not found.`));
        }
      }
    }
  };
  onMount(async () => {
    mediaQuery = window.matchMedia("(min-width: 1024px)");
    mediaQuery.addEventListener("change", handleMediaQuery);
    handleMediaQuery(mediaQuery);
    const container = document.getElementById("collection-container");
    !get(largeScreen) ? 100 : Math.floor(300 / container.clientWidth * 100);
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const width = entry.contentRect.width;
        const percentage = 300 / width * 100;
        !get(largeScreen) ? 100 : Math.floor(percentage);
      }
    });
    resizeObserver.observe(container);
    set(id, $page().params.id);
    const res = await getKnowledgeById(localStorage.token, get(id)).catch((e) => {
      toast.error(`${e}`);
      return null;
    });
    if (res) {
      set(knowledge$1, res);
    } else {
      goto("/workspace/knowledge");
    }
    const dropZone = document.querySelector("body");
    dropZone == null ? void 0 : dropZone.addEventListener("dragover", onDragOver);
    dropZone == null ? void 0 : dropZone.addEventListener("drop", onDrop);
    dropZone == null ? void 0 : dropZone.addEventListener("dragleave", onDragLeave);
  });
  onDestroy(() => {
    mediaQuery == null ? void 0 : mediaQuery.removeEventListener("change", handleMediaQuery);
    const dropZone = document.querySelector("body");
    dropZone == null ? void 0 : dropZone.removeEventListener("dragover", onDragOver);
    dropZone == null ? void 0 : dropZone.removeEventListener("drop", onDrop);
    dropZone == null ? void 0 : dropZone.removeEventListener("dragleave", onDragLeave);
  });
  const decodeString = (str) => {
    try {
      return decodeURIComponent(str);
    } catch (e) {
      return str;
    }
  };
  legacy_pre_effect(() => (get(knowledge$1), Fuse), () => {
    if (get(knowledge$1) && get(knowledge$1).files) {
      set(fuse, new Fuse(get(knowledge$1).files, { keys: ["meta.name", "meta.description"] }));
    }
  });
  legacy_pre_effect(() => (get(fuse), get(query), get(knowledge$1)), () => {
    var _a;
    if (get(fuse)) {
      set(filteredItems, get(query) ? get(fuse).search(get(query)).map((e) => {
        return e.item;
      }) : ((_a = get(knowledge$1)) == null ? void 0 : _a.files) ?? []);
    }
  });
  legacy_pre_effect(() => (get(selectedFileId), get(knowledge$1)), () => {
    var _a;
    if (get(selectedFileId)) {
      const file = (((_a = get(knowledge$1)) == null ? void 0 : _a.files) ?? []).find((file2) => file2.id === get(selectedFileId));
      if (file) {
        fileSelectHandler(file);
      } else {
        set(selectedFile, null);
      }
    } else {
      set(selectedFile, null);
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root();
  var node = first_child(fragment);
  FilesOverlay(node, {
    get show() {
      return get(dragged);
    }
  });
  var node_1 = sibling(node, 2);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("This will reset the knowledge base and sync all files. Do you wish to continue?"))));
    ConfirmDialog(node_1, {
      get message() {
        return get($0);
      },
      get show() {
        return get(showSyncConfirmModal);
      },
      set show($$value) {
        set(showSyncConfirmModal, $$value);
      },
      $$events: {
        confirm: () => {
          syncDirectoryHandler();
        }
      },
      $$legacy: true
    });
  }
  var node_2 = sibling(node_1, 2);
  AddTextContentModal(node_2, {
    get show() {
      return get(showAddTextContentModal);
    },
    set show($$value) {
      set(showAddTextContentModal, $$value);
    },
    $$events: {
      submit: (e) => {
        const file = createFileFromText(e.detail.name, e.detail.content);
        uploadFileHandler(file);
      }
    },
    $$legacy: true
  });
  var input_1 = sibling(node_2, 2);
  var div = sibling(input_1, 2);
  var node_3 = child(div);
  {
    var consequent_7 = ($$anchor2) => {
      var fragment_1 = root_1();
      var node_4 = first_child(fragment_1);
      {
        let $0 = derived_safe_equal(() => ($user(), untrack(() => {
          var _a, _b, _c, _d;
          return ((_c = (_b = (_a = $user()) == null ? void 0 : _a.permissions) == null ? void 0 : _b.sharing) == null ? void 0 : _c.knowledge) || ((_d = $user()) == null ? void 0 : _d.role) === "admin";
        })));
        let $1 = derived_safe_equal(() => ($user(), untrack(() => {
          var _a, _b, _c, _d;
          return ((_c = (_b = (_a = $user()) == null ? void 0 : _a.permissions) == null ? void 0 : _b.sharing) == null ? void 0 : _c.public_knowledge) || ((_d = $user()) == null ? void 0 : _d.role) === "admin";
        })));
        AccessControlModal(node_4, {
          get share() {
            return get($0);
          },
          get sharePu() {
            return get($1);
          },
          onChange: () => {
            changeDebounceHandler();
          },
          accessRoles: ["read", "write"],
          get show() {
            return get(showAccessControlModal);
          },
          set show($$value) {
            set(showAccessControlModal, $$value);
          },
          get accessControl() {
            return get(knowledge$1).access_control;
          },
          set accessControl($$value) {
            mutate(knowledge$1, get(knowledge$1).access_control = $$value);
          },
          $$legacy: true
        });
      }
      var div_1 = sibling(node_4, 2);
      var div_2 = child(div_1);
      var div_3 = child(div_2);
      var div_4 = child(div_3);
      var div_5 = child(div_4);
      var input_2 = child(div_5);
      remove_input_defaults(input_2);
      reset(div_5);
      var div_6 = sibling(div_5, 2);
      var button = child(div_6);
      var node_5 = child(button);
      LockClosed(node_5, { strokeWidth: "2.5", className: "size-3.5" });
      var div_7 = sibling(node_5, 2);
      var text = child(div_7, true);
      reset(div_7);
      reset(button);
      reset(div_6);
      reset(div_4);
      var div_8 = sibling(div_4, 2);
      var input_3 = child(div_8);
      remove_input_defaults(input_3);
      reset(div_8);
      reset(div_3);
      reset(div_2);
      reset(div_1);
      var div_9 = sibling(div_1, 2);
      var node_6 = child(div_9);
      {
        var consequent_3 = ($$anchor3) => {
          var div_10 = root_2();
          var node_7 = child(div_10);
          {
            var consequent_2 = ($$anchor4) => {
              var div_11 = root_3();
              var div_12 = child(div_11);
              var node_8 = child(div_12);
              {
                if_block(node_8, ($$render) => {
                });
              }
              var div_14 = sibling(node_8, 2);
              var a = child(div_14);
              var text_1 = child(a, true);
              reset(a);
              reset(div_14);
              var div_15 = sibling(div_14, 2);
              var button_2 = child(div_15);
              var text_2 = child(button_2);
              var node_10 = sibling(text_2);
              {
                var consequent_1 = ($$anchor5) => {
                  var div_16 = root_5();
                  var node_11 = child(div_16);
                  Spinner(node_11, {});
                  reset(div_16);
                  append($$anchor5, div_16);
                };
                if_block(node_10, ($$render) => {
                  if (get(isSaving)) $$render(consequent_1);
                });
              }
              reset(button_2);
              reset(div_15);
              reset(div_12);
              var div_17 = sibling(div_12, 2);
              var node_12 = child(div_17);
              key(node_12, () => (get(selectedFile), untrack(() => get(selectedFile).id)), ($$anchor5) => {
                var textarea = root_6();
                remove_textarea_child(textarea);
                template_effect(($0) => set_attribute(textarea, "placeholder", $0), [
                  () => ($i18n(), untrack(() => $i18n().t("Add content here")))
                ]);
                bind_value(textarea, () => get(selectedFileContent), ($$value) => set(selectedFileContent, $$value));
                append($$anchor5, textarea);
              });
              reset(div_17);
              reset(div_11);
              template_effect(
                ($0, $1) => {
                  set_attribute(a, "href", (get(selectedFile), untrack(() => get(selectedFile).id ? `/api/v1/files/${get(selectedFile).id}/content` : "#")));
                  set_text(text_1, $0);
                  button_2.disabled = get(isSaving);
                  set_text(text_2, `${$1 ?? ""} `);
                },
                [
                  () => (get(selectedFile), untrack(() => {
                    var _a, _b;
                    return decodeString((_b = (_a = get(selectedFile)) == null ? void 0 : _a.meta) == null ? void 0 : _b.name);
                  })),
                  () => ($i18n(), untrack(() => $i18n().t("Save")))
                ]
              );
              event("click", button_2, () => {
                updateFileContentHandler();
              });
              append($$anchor4, div_11);
            };
            var alternate = ($$anchor4) => {
              var div_18 = root_7();
              var div_19 = child(div_18);
              var text_3 = child(div_19, true);
              reset(div_19);
              reset(div_18);
              template_effect(($0) => set_text(text_3, $0), [
                () => ($i18n(), untrack(() => $i18n().t("Drag and drop a file to upload or select a file to view")))
              ]);
              append($$anchor4, div_18);
            };
            if_block(node_7, ($$render) => {
              if (get(selectedFile)) $$render(consequent_2);
              else $$render(alternate, false);
            });
          }
          reset(div_10);
          append($$anchor3, div_10);
        };
        var alternate_1 = ($$anchor3) => {
          var fragment_2 = comment();
          var node_13 = first_child(fragment_2);
          {
            var consequent_5 = ($$anchor4) => {
              {
                let $0 = derived_safe_equal(() => get(selectedFileId) !== null);
                Drawer($$anchor4, {
                  className: "h-full",
                  get show() {
                    return get($0);
                  },
                  onClose: () => {
                    set(selectedFileId, null);
                  },
                  children: ($$anchor5, $$slotProps) => {
                    var div_20 = root_10();
                    var div_21 = child(div_20);
                    var div_22 = child(div_21);
                    var div_23 = child(div_22);
                    var button_3 = child(div_23);
                    var node_14 = child(button_3);
                    ChevronLeft(node_14, { strokeWidth: "2.5" });
                    reset(button_3);
                    reset(div_23);
                    var div_24 = sibling(div_23, 2);
                    var text_4 = child(div_24, true);
                    reset(div_24);
                    var div_25 = sibling(div_24, 2);
                    var button_4 = child(div_25);
                    var text_5 = child(button_4);
                    var node_15 = sibling(text_5);
                    {
                      var consequent_4 = ($$anchor6) => {
                        var div_26 = root_11();
                        var node_16 = child(div_26);
                        Spinner(node_16, {});
                        reset(div_26);
                        append($$anchor6, div_26);
                      };
                      if_block(node_15, ($$render) => {
                        if (get(isSaving)) $$render(consequent_4);
                      });
                    }
                    reset(button_4);
                    reset(div_25);
                    reset(div_22);
                    var div_27 = sibling(div_22, 2);
                    var node_17 = child(div_27);
                    key(node_17, () => (get(selectedFile), untrack(() => get(selectedFile).id)), ($$anchor6) => {
                      var textarea_1 = root_12();
                      remove_textarea_child(textarea_1);
                      template_effect(($02) => set_attribute(textarea_1, "placeholder", $02), [
                        () => ($i18n(), untrack(() => $i18n().t("Add content here")))
                      ]);
                      bind_value(textarea_1, () => get(selectedFileContent), ($$value) => set(selectedFileContent, $$value));
                      append($$anchor6, textarea_1);
                    });
                    reset(div_27);
                    reset(div_21);
                    reset(div_20);
                    template_effect(
                      ($02) => {
                        set_text(text_4, (get(selectedFile), untrack(() => {
                          var _a, _b;
                          return (_b = (_a = get(selectedFile)) == null ? void 0 : _a.meta) == null ? void 0 : _b.name;
                        })));
                        button_4.disabled = get(isSaving);
                        set_text(text_5, `${$02 ?? ""} `);
                      },
                      [() => ($i18n(), untrack(() => $i18n().t("Save")))]
                    );
                    event("click", button_3, () => {
                      set(selectedFileId, null);
                    });
                    event("click", button_4, () => {
                      updateFileContentHandler();
                    });
                    append($$anchor5, div_20);
                  },
                  $$slots: { default: true }
                });
              }
            };
            if_block(
              node_13,
              ($$render) => {
                if (!get(largeScreen) && get(selectedFileId) !== null) $$render(consequent_5);
              },
              true
            );
          }
          append($$anchor3, fragment_2);
        };
        if_block(node_6, ($$render) => {
          if (get(largeScreen)) $$render(consequent_3);
          else $$render(alternate_1, false);
        });
      }
      var div_28 = sibling(node_6, 2);
      var div_29 = child(div_28);
      var div_30 = child(div_29);
      var div_31 = child(div_30);
      var div_32 = child(div_31);
      var div_33 = child(div_32);
      var node_18 = child(div_33);
      Search(node_18, {});
      reset(div_33);
      var input_4 = sibling(div_33, 2);
      remove_input_defaults(input_4);
      var div_34 = sibling(input_4, 2);
      var node_19 = child(div_34);
      AddContentMenu(node_19, {
        $$events: {
          upload: (e) => {
            if (e.detail.type === "directory") {
              uploadDirectoryHandler();
            } else if (e.detail.type === "text") {
              set(showAddTextContentModal, true);
            } else {
              document.getElementById("files-input").click();
            }
          },
          sync: (e) => {
            set(showSyncConfirmModal, true);
          }
        }
      });
      reset(div_34);
      reset(div_32);
      reset(div_31);
      var node_20 = sibling(div_31, 2);
      {
        var consequent_6 = ($$anchor3) => {
          var div_35 = root_13();
          var node_21 = child(div_35);
          Files(node_21, {
            small: true,
            get files() {
              return get(filteredItems);
            },
            get selectedFileId() {
              return get(selectedFileId);
            },
            $$events: {
              click: (e) => {
                set(selectedFileId, get(selectedFileId) === e.detail ? null : e.detail);
              },
              delete: (e) => {
                console.log(e.detail);
                set(selectedFileId, null);
                deleteFileHandler(e.detail);
              }
            }
          });
          reset(div_35);
          append($$anchor3, div_35);
        };
        var alternate_2 = ($$anchor3) => {
          var div_36 = root_14();
          var div_37 = child(div_36);
          var text_6 = child(div_37, true);
          reset(div_37);
          reset(div_36);
          template_effect(($0) => set_text(text_6, $0), [
            () => ($i18n(), untrack(() => $i18n().t("No content found")))
          ]);
          append($$anchor3, div_36);
        };
        if_block(node_20, ($$render) => {
          if (get(filteredItems), untrack(() => get(filteredItems).length > 0)) $$render(consequent_6);
          else $$render(alternate_2, false);
        });
      }
      reset(div_30);
      reset(div_29);
      reset(div_28);
      reset(div_9);
      template_effect(
        ($0, $1, $2, $3) => {
          set_attribute(input_2, "placeholder", $0);
          set_text(text, $1);
          set_attribute(input_3, "placeholder", $2);
          set_class(div_28, 1, `${get(largeScreen) ? "shrink-0 w-72 max-w-72" : "flex-1"}
			flex
			py-2
			rounded-2xl
			border
			border-gray-50
			h-full
			dark:border-gray-850`);
          set_attribute(input_4, "placeholder", $3);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Knowledge Name"))),
          () => ($i18n(), untrack(() => $i18n().t("Access"))),
          () => ($i18n(), untrack(() => $i18n().t("Knowledge Description"))),
          () => ($i18n(), get(knowledge$1), untrack(() => {
            var _a, _b;
            return `${$i18n().t("Search Collection")}${(((_a = get(knowledge$1)) == null ? void 0 : _a.files) ?? []).length ? ` (${(((_b = get(knowledge$1)) == null ? void 0 : _b.files) ?? []).length})` : ""}`;
          }))
        ]
      );
      bind_value(input_2, () => get(knowledge$1).name, ($$value) => mutate(knowledge$1, get(knowledge$1).name = $$value));
      event("input", input_2, () => {
        changeDebounceHandler();
      });
      event("click", button, () => {
        set(showAccessControlModal, true);
      });
      bind_value(input_3, () => get(knowledge$1).description, ($$value) => mutate(knowledge$1, get(knowledge$1).description = $$value));
      event("input", input_3, () => {
        changeDebounceHandler();
      });
      bind_value(input_4, () => get(query), ($$value) => set(query, $$value));
      event("focus", input_4, () => {
        set(selectedFileId, null);
      });
      append($$anchor2, fragment_1);
    };
    var alternate_3 = ($$anchor2) => {
      Spinner($$anchor2, { className: "size-5" });
    };
    if_block(node_3, ($$render) => {
      if (get(id) && get(knowledge$1)) $$render(consequent_7);
      else $$render(alternate_3, false);
    });
  }
  reset(div);
  bind_files(input_1, () => get(inputFiles), ($$value) => set(inputFiles, $$value));
  event("change", input_1, async () => {
    if (get(inputFiles) && get(inputFiles).length > 0) {
      for (const file of get(inputFiles)) {
        await uploadFileHandler(file);
      }
      set(inputFiles, null);
      const fileInputElement = document.getElementById("files-input");
      if (fileInputElement) {
        fileInputElement.value = "";
      }
    } else {
      toast.error($i18n().t(`File not found.`));
    }
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
function _page($$anchor) {
  KnowledgeBase($$anchor, {});
}
export {
  _page as component
};
