import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, g as getContext, ay as onDestroy, o as onMount, s as set, m as mutable_source, l as legacy_pre_effect, b as get, j as legacy_pre_effect_reset, d as deferred_template_effect, u as untrack, $ as $document, f as first_child, e as sibling, c as child, r as reset, a as pop, q as next, t as template_effect, h as derived_safe_equal, i as deep_read_state } from "../chunks/BxIY6ir7.js";
import { s as set_text, e as event } from "../chunks/cBADewWV.js";
import { i as if_block } from "../chunks/BoSuMvtf.js";
import { f as from_html, a as append, t as text, c as comment } from "../chunks/CAbo1QWi.js";
import { r as remove_input_defaults, a as set_attribute, s as set_class } from "../chunks/kXiCYuyj.js";
import { i as init } from "../chunks/ByqEASoO.js";
import { a as store_get, s as setup_stores } from "../chunks/BvQ5O7-v.js";
import { d as dayjs2, r as relativeTime } from "../chunks/OO7lCI-F.js";
import "../chunks/CAzIiltw.js";
import { W as WEBUI_NAME, m as mobile, u as user, s as showSidebar, g as showArchivedChats } from "../chunks/2Yg1sHDo.js";
import { g as goto } from "../chunks/h-B6Md2q.js";
import { p as page } from "../chunks/CrvggIeO.js";
import { c as createNoteHandler, d as downloadPdf } from "../chunks/CYkpo2Xm.js";
import { U as UserMenu } from "../chunks/B4U2oVkx.js";
import { e as each, i as index } from "../chunks/7_HZMPNF.js";
import { h as head } from "../chunks/Cb8chUSZ.js";
import { b as bind_value } from "../chunks/DVLuwGai.js";
import { g as getTimeRange, m as marked, i as copyToClipboard, j as capitalizeFirstLetter } from "../chunks/Bh-hrM1w.js";
import { t as toast } from "../chunks/BccDN__m.js";
import { f as fileSaver } from "../chunks/DRcZXQDn.js";
import { F as Fuse } from "../chunks/AFl3itOE.js";
import { d as duration } from "../chunks/DWskpcWN.js";
import { g as getNotes, c as createNewNote, d as deleteNoteById } from "../chunks/BInTu4eC.js";
import { E as EllipsisHorizontal } from "../chunks/BC-suBaL.js";
import { C as ConfirmDialog } from "../chunks/DhVOSDv1.js";
import { S as Search } from "../chunks/2ixn6gs3.js";
import { P as Plus } from "../chunks/F9_n4pHG.js";
import { S as Spinner } from "../chunks/CtnI4RVL.js";
import { T as Tooltip } from "../chunks/BHXWufQb.js";
import { N as NoteMenu } from "../chunks/BBHa1_wB.js";
import { F as FilesOverlay } from "../chunks/CQWizoxB.js";
import { X as XMark } from "../chunks/CUUSX84-.js";
import { S as Sidebar } from "../chunks/CIfNu5Bq.js";
import { a as WEBUI_API_BASE_URL } from "../chunks/DQ9UxF7k.js";
var root_3$1 = from_html(`<div class=" text-sm text-gray-500 truncate"> <span class="  font-semibold"> </span>.</div>`);
var root_4 = from_html(`<div class="self-center pl-1.5 translate-y-[0.5px] rounded-l-xl bg-transparent"><button class="p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition"><!></button></div>`);
var root_8 = from_html(`<button class="self-center w-fit text-sm p-1 dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl" type="button"><!></button>`);
var root_11 = from_html(`<div class="shrink-0 text-gray-500"> </div>`);
var root_7 = from_html(`<div class=" flex space-x-4 cursor-pointer w-full px-4.5 py-4 border border-gray-50 dark:border-gray-850 bg-transparent dark:hover:bg-gray-850 hover:bg-white rounded-2xl transition"><div class=" flex flex-1 space-x-4 cursor-pointer w-full"><a class="w-full -translate-y-0.5 flex flex-col justify-between"><div class="flex-1"><div class="  flex items-center gap-2 self-center mb-1 justify-between"><div class=" font-semibold line-clamp-1 capitalize"> </div> <div><!></div></div> <div class=" text-xs text-gray-500 dark:text-gray-500 mb-3 line-clamp-3 min-h-10"><!></div></div> <div class=" text-xs px-0.5 w-full flex justify-between items-center"><div> </div> <!></div></a></div></div>`);
var root_6 = from_html(`<div class="w-full text-xs text-gray-500 dark:text-gray-500 font-medium pb-2.5"> </div> <div class="mb-5 gap-2.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"></div>`, 1);
var root_5$1 = from_html(`<div class="pb-10"></div>`);
var root_12 = from_html(`<div class="w-full h-full flex flex-col items-center justify-center"><div class="pb-20 text-center"><div class=" text-xl font-medium text-gray-400 dark:text-gray-600"> </div> <div class="mt-1 text-sm text-gray-300 dark:text-gray-700"> </div></div></div>`);
var root_13 = from_html(`<button class="cursor-pointer p-2.5 flex rounded-full border border-gray-50 bg-white dark:border-none dark:bg-gray-850 hover:bg-gray-50 dark:hover:bg-gray-800 transition shadow-xl" type="button"><!></button>`);
var root_2$1 = from_html(`<!> <div class="flex flex-col gap-1 px-3.5"><div class=" flex flex-1 items-center w-full space-x-2"><div class="flex flex-1 items-center"><div class=" self-center ml-1 mr-3"><!></div> <input class=" w-full text-sm py-1 rounded-r-xl outline-hidden bg-transparent"/> <!></div></div></div> <div class="px-4.5 @container h-full pt-2"><!></div> <div class="absolute bottom-0 left-0 right-0 p-5 max-w-full flex justify-end"><div class="flex gap-0.5 justify-end w-full"><!></div></div>`, 1);
var root_14 = from_html(`<div class="w-full h-full flex justify-center items-center"><!></div>`);
var root = from_html(`<!> <div id="notes-container" class="w-full min-h-full h-full"><!></div>`, 1);
function Notes($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $WEBUI_NAME = () => store_get(WEBUI_NAME, "$WEBUI_NAME", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const { saveAs } = fileSaver;
  dayjs2.extend(duration);
  dayjs2.extend(relativeTime);
  async function loadLocale(locales) {
    for (const locale of locales) {
      try {
        dayjs2.locale(locale);
        break;
      } catch (error) {
        console.error(`Could not load locale '${locale}':`, error);
      }
    }
  }
  const i18n = getContext("i18n");
  let loaded = mutable_source(false);
  let query = mutable_source("");
  let noteItems = mutable_source([]);
  let fuse = mutable_source(null);
  let selectedNote = mutable_source(null);
  let notes = mutable_source({});
  let showDeleteConfirm = mutable_source(false);
  const groupNotes = (res) => {
    console.log(res);
    if (!Array.isArray(res)) {
      return {};
    }
    const grouped = {};
    for (const note of res) {
      const timeRange = getTimeRange(note.updated_at / 1e9);
      if (!grouped[timeRange]) {
        grouped[timeRange] = [];
      }
      grouped[timeRange].push({ ...note, timeRange });
    }
    return grouped;
  };
  const init$1 = async () => {
    set(noteItems, await getNotes(localStorage.token, true));
    set(fuse, new Fuse(get(noteItems), { keys: ["title"] }));
  };
  const downloadHandler = async (type) => {
    if (type === "txt") {
      const blob = new Blob([get(selectedNote).data.content.md], { type: "text/plain" });
      saveAs(blob, `${get(selectedNote).title}.txt`);
    } else if (type === "md") {
      const blob = new Blob([get(selectedNote).data.content.md], { type: "text/markdown" });
      saveAs(blob, `${get(selectedNote).title}.md`);
    } else if (type === "pdf") {
      try {
        await downloadPdf(get(selectedNote));
      } catch (error) {
        toast.error(`${error}`);
      }
    }
  };
  const deleteNoteHandler = async (id) => {
    const res = await deleteNoteById(localStorage.token, id).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      init$1();
    }
  };
  const inputFilesHandler = async (inputFiles) => {
    for (const file of inputFiles) {
      if (file.type !== "text/markdown") {
        toast.error($i18n().t("Only markdown files are allowed"));
        return;
      }
      const reader = new FileReader();
      reader.onload = async (event2) => {
        const content = event2.target.result;
        let name = file.name.replace(/\.md$/, "");
        if (typeof content !== "string") {
          toast.error($i18n().t("Invalid file content"));
          return;
        }
        const res = await createNewNote(localStorage.token, {
          title: name,
          data: {
            content: { json: null, html: marked.parse(content ?? ""), md: content }
          },
          meta: null,
          access_control: {}
        }).catch((error) => {
          toast.error(`${error}`);
          return null;
        });
        if (res) {
          init$1();
        }
      };
      reader.readAsText(file);
    }
  };
  let dragged = mutable_source(false);
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
    var _a, _b;
    e.preventDefault();
    console.log(e);
    if ((_a = e.dataTransfer) == null ? void 0 : _a.files) {
      const inputFiles = Array.from((_b = e.dataTransfer) == null ? void 0 : _b.files);
      if (inputFiles && inputFiles.length > 0) {
        console.log(inputFiles);
        inputFilesHandler(inputFiles);
      }
    }
    set(dragged, false);
  };
  onDestroy(() => {
    console.log("destroy");
    const dropzoneElement = document.getElementById("notes-container");
    if (dropzoneElement) {
      dropzoneElement == null ? void 0 : dropzoneElement.removeEventListener("dragover", onDragOver);
      dropzoneElement == null ? void 0 : dropzoneElement.removeEventListener("drop", onDrop);
      dropzoneElement == null ? void 0 : dropzoneElement.removeEventListener("dragleave", onDragLeave);
    }
  });
  onMount(async () => {
    await init$1();
    set(loaded, true);
    const dropzoneElement = document.getElementById("notes-container");
    dropzoneElement == null ? void 0 : dropzoneElement.addEventListener("dragover", onDragOver);
    dropzoneElement == null ? void 0 : dropzoneElement.addEventListener("drop", onDrop);
    dropzoneElement == null ? void 0 : dropzoneElement.addEventListener("dragleave", onDragLeave);
  });
  legacy_pre_effect(() => $i18n(), () => {
    loadLocale($i18n().languages);
  });
  legacy_pre_effect(() => (get(fuse), get(query), get(noteItems)), () => {
    if (get(fuse)) {
      set(notes, groupNotes(get(query) ? get(fuse).search(get(query)).map((e) => {
        return e.item;
      }) : get(noteItems)));
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root();
  head("1lmd4qv", ($$anchor2) => {
    deferred_template_effect(
      ($0) => {
        $document.title = `
		${$0 ?? ""} • ${$WEBUI_NAME() ?? ""}
	`;
      },
      [() => ($i18n(), untrack(() => $i18n().t("Notes")))]
    );
  });
  var node = first_child(fragment);
  FilesOverlay(node, {
    get show() {
      return get(dragged);
    }
  });
  var div = sibling(node, 2);
  var node_1 = child(div);
  {
    var consequent_3 = ($$anchor2) => {
      var fragment_1 = root_2$1();
      var node_2 = first_child(fragment_1);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete note?"))));
        ConfirmDialog(node_2, {
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
              deleteNoteHandler(get(selectedNote).id);
              set(showDeleteConfirm, false);
            }
          },
          children: ($$anchor3, $$slotProps) => {
            var div_1 = root_3$1();
            var text2 = child(div_1);
            var span = sibling(text2);
            var text_1 = child(span, true);
            reset(span);
            next();
            reset(div_1);
            template_effect(
              ($02) => {
                set_text(text2, `${$02 ?? ""} `);
                set_text(text_1, (get(selectedNote), untrack(() => get(selectedNote).title)));
              },
              [
                () => ($i18n(), untrack(() => $i18n().t("This will delete")))
              ]
            );
            append($$anchor3, div_1);
          },
          $$slots: { default: true },
          $$legacy: true
        });
      }
      var div_2 = sibling(node_2, 2);
      var div_3 = child(div_2);
      var div_4 = child(div_3);
      var div_5 = child(div_4);
      var node_3 = child(div_5);
      Search(node_3, { className: "size-3.5" });
      reset(div_5);
      var input = sibling(div_5, 2);
      remove_input_defaults(input);
      var node_4 = sibling(input, 2);
      {
        var consequent = ($$anchor3) => {
          var div_6 = root_4();
          var button = child(div_6);
          var node_5 = child(button);
          XMark(node_5, { className: "size-3", strokeWidth: "2" });
          reset(button);
          reset(div_6);
          event("click", button, () => {
            set(query, "");
          });
          append($$anchor3, div_6);
        };
        if_block(node_4, ($$render) => {
          if (get(query)) $$render(consequent);
        });
      }
      reset(div_4);
      reset(div_3);
      reset(div_2);
      var div_7 = sibling(div_2, 2);
      var node_6 = child(div_7);
      {
        var consequent_2 = ($$anchor3) => {
          var div_8 = root_5$1();
          each(div_8, 5, () => (get(notes), untrack(() => Object.keys(get(notes)))), index, ($$anchor4, timeRange) => {
            var fragment_2 = root_6();
            var div_9 = first_child(fragment_2);
            var text_2 = child(div_9, true);
            reset(div_9);
            var div_10 = sibling(div_9, 2);
            each(
              div_10,
              7,
              () => (get(notes), get(timeRange), untrack(() => get(notes)[get(timeRange)])),
              (note) => note.id,
              ($$anchor5, note) => {
                var div_11 = root_7();
                var div_12 = child(div_11);
                var a = child(div_12);
                var div_13 = child(a);
                var div_14 = child(div_13);
                var div_15 = child(div_14);
                var text_3 = child(div_15, true);
                reset(div_15);
                var div_16 = sibling(div_15, 2);
                var node_7 = child(div_16);
                NoteMenu(node_7, {
                  onDownload: (type) => {
                    set(selectedNote, get(note));
                    downloadHandler(type);
                  },
                  onCopyLink: async () => {
                    const baseUrl = window.location.origin;
                    const res = await copyToClipboard(`${baseUrl}/notes/${get(note).id}`);
                    if (res) {
                      toast.success($i18n().t("Copied link to clipboard"));
                    } else {
                      toast.error($i18n().t("Failed to copy link"));
                    }
                  },
                  onDelete: () => {
                    set(selectedNote, get(note));
                    set(showDeleteConfirm, true);
                  },
                  children: ($$anchor6, $$slotProps) => {
                    var button_1 = root_8();
                    var node_8 = child(button_1);
                    EllipsisHorizontal(node_8, { className: "size-5" });
                    reset(button_1);
                    append($$anchor6, button_1);
                  },
                  $$slots: { default: true }
                });
                reset(div_16);
                reset(div_14);
                var div_17 = sibling(div_14, 2);
                var node_9 = child(div_17);
                {
                  var consequent_1 = ($$anchor6) => {
                    var text_4 = text();
                    template_effect(() => set_text(text_4, (get(note), untrack(() => {
                      var _a, _b;
                      return (_b = (_a = get(note).data) == null ? void 0 : _a.content) == null ? void 0 : _b.md;
                    }))));
                    append($$anchor6, text_4);
                  };
                  var alternate = ($$anchor6) => {
                    var text_5 = text();
                    template_effect(($0) => set_text(text_5, $0), [() => ($i18n(), untrack(() => $i18n().t("No content")))]);
                    append($$anchor6, text_5);
                  };
                  if_block(node_9, ($$render) => {
                    if (get(note), untrack(() => {
                      var _a, _b;
                      return (_b = (_a = get(note).data) == null ? void 0 : _a.content) == null ? void 0 : _b.md;
                    })) $$render(consequent_1);
                    else $$render(alternate, false);
                  });
                }
                reset(div_17);
                reset(div_13);
                var div_18 = sibling(div_13, 2);
                var div_19 = child(div_18);
                var text_6 = child(div_19, true);
                reset(div_19);
                var node_10 = sibling(div_19, 2);
                {
                  let $0 = derived_safe_equal(() => (get(note), $i18n(), untrack(() => {
                    var _a, _b;
                    return ((_b = (_a = get(note)) == null ? void 0 : _a.user) == null ? void 0 : _b.email) ?? $i18n().t("Deleted User");
                  })));
                  Tooltip(node_10, {
                    get content() {
                      return get($0);
                    },
                    className: "flex shrink-0",
                    placement: "top-start",
                    children: ($$anchor6, $$slotProps) => {
                      var div_20 = root_11();
                      var text_7 = child(div_20, true);
                      reset(div_20);
                      template_effect(($02) => set_text(text_7, $02), [
                        () => ($i18n(), deep_read_state(capitalizeFirstLetter), get(note), untrack(() => {
                          var _a, _b, _c, _d;
                          return $i18n().t("By {{name}}", {
                            name: capitalizeFirstLetter(((_b = (_a = get(note)) == null ? void 0 : _a.user) == null ? void 0 : _b.name) ?? ((_d = (_c = get(note)) == null ? void 0 : _c.user) == null ? void 0 : _d.email) ?? $i18n().t("Deleted User"))
                          });
                        }))
                      ]);
                      append($$anchor6, div_20);
                    },
                    $$slots: { default: true }
                  });
                }
                reset(div_18);
                reset(a);
                reset(div_12);
                reset(div_11);
                template_effect(
                  ($0) => {
                    set_attribute(a, "href", (get(note), untrack(() => `/notes/${get(note).id}`)));
                    set_text(text_3, (get(note), untrack(() => get(note).title)));
                    set_text(text_6, $0);
                  },
                  [
                    () => (deep_read_state(dayjs2), get(note), untrack(() => dayjs2(get(note).updated_at / 1e6).fromNow()))
                  ]
                );
                append($$anchor5, div_11);
              }
            );
            reset(div_10);
            template_effect(($0) => set_text(text_2, $0), [
              () => ($i18n(), get(timeRange), untrack(() => $i18n().t(get(timeRange))))
            ]);
            append($$anchor4, fragment_2);
          });
          reset(div_8);
          append($$anchor3, div_8);
        };
        var alternate_1 = ($$anchor3) => {
          var div_21 = root_12();
          var div_22 = child(div_21);
          var div_23 = child(div_22);
          var text_8 = child(div_23, true);
          reset(div_23);
          var div_24 = sibling(div_23, 2);
          var text_9 = child(div_24, true);
          reset(div_24);
          reset(div_22);
          reset(div_21);
          template_effect(
            ($0, $1) => {
              set_text(text_8, $0);
              set_text(text_9, $1);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("No Notes"))),
              () => ($i18n(), untrack(() => $i18n().t("Create your first note by clicking on the plus button below.")))
            ]
          );
          append($$anchor3, div_21);
        };
        if_block(node_6, ($$render) => {
          if (get(notes), untrack(() => Object.keys(get(notes)).length > 0)) $$render(consequent_2);
          else $$render(alternate_1, false);
        });
      }
      reset(div_7);
      var div_25 = sibling(div_7, 2);
      var div_26 = child(div_25);
      var node_11 = child(div_26);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Create Note"))));
        Tooltip(node_11, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps) => {
            var button_2 = root_13();
            var node_12 = child(button_2);
            Plus(node_12, { className: "size-4.5", strokeWidth: "2.5" });
            reset(button_2);
            event("click", button_2, async () => {
              const res = await createNoteHandler(dayjs2().format("YYYY-MM-DD"));
              if (res) {
                goto(`/notes/${res.id}`);
              }
            });
            append($$anchor3, button_2);
          },
          $$slots: { default: true }
        });
      }
      reset(div_26);
      reset(div_25);
      template_effect(($0) => set_attribute(input, "placeholder", $0), [() => ($i18n(), untrack(() => $i18n().t("Search Notes")))]);
      bind_value(input, () => get(query), ($$value) => set(query, $$value));
      append($$anchor2, fragment_1);
    };
    var alternate_2 = ($$anchor2) => {
      var div_27 = root_14();
      var node_13 = child(div_27);
      Spinner(node_13, { className: "size-5" });
      reset(div_27);
      append($$anchor2, div_27);
    };
    if_block(node_1, ($$render) => {
      if (get(loaded)) $$render(consequent_3);
      else $$render(alternate_2, false);
    });
  }
  reset(div);
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_3 = from_html(`<button id="sidebar-toggle-button" class=" cursor-pointer flex rounded-lg hover:bg-gray-100 dark:hover:bg-gray-850 transition cursor-"><div class=" self-center p-1.5"><!></div></button>`);
var root_2 = from_html(`<div><!></div>`);
var root_5 = from_html(`<button class="select-none flex rounded-xl p-1.5 w-full hover:bg-gray-50 dark:hover:bg-gray-850 transition" aria-label="User Menu"><div class=" self-center"><img class="size-6 object-cover rounded-full" alt="User profile" draggable="false"/></div></button>`);
var root_1 = from_html(`<div><nav class="   px-2 pt-1.5 backdrop-blur-xl w-full drag-region"><div class=" flex items-center"><!> <div class="ml-2 py-0.5 self-center flex items-center justify-between w-full"><div><div class="flex gap-1 scrollbar-none overflow-x-auto w-fit text-center text-sm font-medium bg-transparent py-1 touch-auto pointer-events-auto"><a class="min-w-fit transition" href="/notes"> </a></div></div> <div class=" self-center flex items-center gap-1"><!></div></div></div></nav> <div class=" pb-1 flex-1 max-h-full overflow-y-auto @container"><!></div></div>`);
function _page($$anchor, $$props) {
  push($$props, false);
  const $page = () => store_get(page, "$page", $$stores);
  const $showSidebar = () => store_get(showSidebar, "$showSidebar", $$stores);
  const $mobile = () => store_get(mobile, "$mobile", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let loaded = mutable_source(false);
  onMount(async () => {
    if ($page().url.searchParams.get("content") !== null || $page().url.searchParams.get("title") !== null) {
      const title = $page().url.searchParams.get("title") ?? dayjs2().format("YYYY-MM-DD");
      const content = $page().url.searchParams.get("content") ?? "";
      const res = await createNoteHandler(title, content);
      if (res) {
        goto(`/notes/${res.id}`);
      }
      return;
    }
    set(loaded, true);
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_2 = ($$anchor2) => {
      var div = root_1();
      var nav = child(div);
      var div_1 = child(nav);
      var node_1 = child(div_1);
      {
        var consequent = ($$anchor3) => {
          var div_2 = root_2();
          var node_2 = child(div_2);
          {
            let $0 = derived_safe_equal(() => $showSidebar() ? $i18n().t("Close Sidebar") : $i18n().t("Open Sidebar"));
            Tooltip(node_2, {
              get content() {
                return get($0);
              },
              interactive: true,
              children: ($$anchor4, $$slotProps) => {
                var button = root_3();
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
          template_effect(() => set_class(div_2, 1, `${$showSidebar() ? "md:hidden" : ""} flex flex-none items-center`));
          append($$anchor3, div_2);
        };
        if_block(node_1, ($$render) => {
          if ($mobile()) $$render(consequent);
        });
      }
      var div_4 = sibling(node_1, 2);
      var div_5 = child(div_4);
      var div_6 = child(div_5);
      var a = child(div_6);
      var text2 = child(a, true);
      reset(a);
      reset(div_6);
      reset(div_5);
      var div_7 = sibling(div_5, 2);
      var node_4 = child(div_7);
      {
        var consequent_1 = ($$anchor3) => {
          {
            let $0 = derived_safe_equal(() => {
              var _a;
              return (_a = $user()) == null ? void 0 : _a.role;
            });
            UserMenu($$anchor3, {
              className: "max-w-[240px]",
              get role() {
                return get($0);
              },
              help: true,
              $$events: {
                show: (e) => {
                  if (e.detail === "archived-chat") {
                    showArchivedChats.set(true);
                  }
                }
              },
              children: ($$anchor4, $$slotProps) => {
                var button_1 = root_5();
                var div_8 = child(button_1);
                var img = child(div_8);
                reset(div_8);
                reset(button_1);
                template_effect(() => {
                  var _a;
                  return set_attribute(img, "src", `${WEBUI_API_BASE_URL}/users/${(_a = $user()) == null ? void 0 : _a.id}/profile/image`);
                });
                append($$anchor4, button_1);
              },
              $$slots: { default: true }
            });
          }
        };
        if_block(node_4, ($$render) => {
          if ($user() !== void 0 && $user() !== null) $$render(consequent_1);
        });
      }
      reset(div_7);
      reset(div_4);
      reset(div_1);
      reset(nav);
      var div_9 = sibling(nav, 2);
      var node_5 = child(div_9);
      Notes(node_5, {});
      reset(div_9);
      reset(div);
      template_effect(
        ($0) => {
          set_class(div, 1, ` flex flex-col w-full h-screen max-h-[100dvh] transition-width duration-200 ease-in-out ${$showSidebar() ? "md:max-w-[calc(100%-260px)]" : ""} max-w-full`);
          set_text(text2, $0);
        },
        [() => $i18n().t("Notes")]
      );
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (get(loaded)) $$render(consequent_2);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _page as component
};
