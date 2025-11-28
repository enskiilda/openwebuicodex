import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, g as getContext, n as createEventDispatcher, o as onMount, s as set, m as mutable_source, b as get, l as legacy_pre_effect, j as legacy_pre_effect_reset, c as child, f as first_child, r as reset, e as sibling, u as untrack, t as template_effect, a as pop, i as deep_read_state, aF as mutate, h as derived_safe_equal } from "./BxIY6ir7.js";
import { s as set_text, e as event } from "./cBADewWV.js";
import { e as each, i as index } from "./7_HZMPNF.js";
import { i as if_block } from "./BoSuMvtf.js";
import { f as from_html, a as append, c as comment } from "./CAbo1QWi.js";
import { s as slot } from "./CZEGIGsR.js";
import { b as bind_value, a as bind_files } from "./DVLuwGai.js";
import { b as bind_this } from "./D16JuV5t.js";
import { i as init } from "./ByqEASoO.js";
import { p as prop } from "./BRmGPDvq.js";
import { a as store_get, s as setup_stores } from "./BvQ5O7-v.js";
import { k as knowledge, c as config, u as user, b as settings } from "./2Yg1sHDo.js";
import { r as remove_input_defaults, a as set_attribute, e as set_value } from "./kXiCYuyj.js";
import { F as Fuse } from "./AFl3itOE.js";
import "./C2A39Ney.js";
import { b as Menu_content, c as Menu_item } from "./DQmZL-p0.js";
import { f as flyAndScale } from "./BuLNlPfL.js";
import { D as Dropdown } from "./NbBmD2S8.js";
import { S as Search } from "./2ixn6gs3.js";
import { a as getNoteList } from "./BInTu4eC.js";
import { d as dayjs2 } from "./OO7lCI-F.js";
import { F as FileItem, u as uploadFile } from "./P5gA3V2-.js";
import { g as getKnowledgeBases } from "./C_BzFfir.js";
import { t as toast } from "./BccDN__m.js";
import { a as WEBUI_API_BASE_URL } from "./DQ9UxF7k.js";
import { x as v4 } from "./Bh-hrM1w.js";
import { S as Switch_1 } from "./CakJ276w.js";
import { T as Textarea } from "./B-P1fI-w.js";
import { T as Tooltip } from "./BHXWufQb.js";
import { P as Plus } from "./F9_n4pHG.js";
var root_4$2 = from_html(`<div class="text-center text-xs text-gray-500 dark:text-gray-400 py-4"> </div>`);
var root_8$1 = from_html(`<div class="bg-gray-500/20 text-gray-700 dark:text-gray-200 rounded-sm uppercase text-xs font-semibold px-1 shrink-0">Legacy</div>`);
var root_10$1 = from_html(`<div class="bg-gray-500/20 text-gray-700 dark:text-gray-200 rounded-sm uppercase text-xs font-semibold px-1 shrink-0">Document</div>`);
var root_12$1 = from_html(`<div class="bg-gray-500/20 text-gray-700 dark:text-gray-200 rounded-sm uppercase text-xs font-semibold px-1 shrink-0">File</div>`);
var root_14$1 = from_html(`<div class="bg-blue-500/20 text-blue-700 dark:text-blue-200 rounded-sm uppercase text-xs font-semibold px-1 shrink-0">Note</div>`);
var root_15$1 = from_html(`<div class="bg-green-500/20 text-green-700 dark:text-green-200 rounded-sm uppercase text-xs font-semibold px-1 shrink-0">Collection</div>`);
var root_7$1 = from_html(`<div><div class=" font-medium text-black dark:text-gray-100 flex items-center gap-1"><!> <div class="line-clamp-1"> </div></div> <div class=" text-xs text-gray-600 dark:text-gray-100 line-clamp-1"> </div></div>`);
var root_3 = from_html(`<div class=" flex w-full space-x-2 py-0.5 px-2 pb-2"><div class="flex flex-1"><div class=" self-center ml-1 mr-3"><!></div> <input class=" w-full text-sm pr-4 py-1 rounded-r-xl outline-hidden bg-transparent"/></div></div> <div class="max-h-56 overflow-y-scroll"><!></div>`, 1);
var root_2$2 = from_html(`<div slot="content"><!></div>`);
function Selector($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  const dispatch = createEventDispatcher();
  let onClose = prop($$props, "onClose", 8, () => {
  });
  let knowledgeItems = prop($$props, "knowledgeItems", 24, () => []);
  let query = mutable_source("");
  let items = mutable_source([]);
  let filteredItems = mutable_source([]);
  let fuse = mutable_source(null);
  const decodeString = (str) => {
    try {
      return decodeURIComponent(str);
    } catch (e) {
      return str;
    }
  };
  onMount(async () => {
    let notes = await getNoteList(localStorage.token).catch(() => {
      return [];
    });
    notes = notes.map((note) => {
      return {
        ...note,
        type: "note",
        name: note.title,
        description: dayjs2(note.updated_at / 1e6).fromNow()
      };
    });
    let legacy_documents = knowledgeItems().filter((item) => {
      var _a;
      return (_a = item == null ? void 0 : item.meta) == null ? void 0 : _a.document;
    }).map((item) => ({ ...item, type: "file" }));
    let legacy_collections = legacy_documents.length > 0 ? [
      {
        name: "All Documents",
        legacy: true,
        type: "collection",
        description: "Deprecated (legacy collection), please create a new knowledge base.",
        title: $i18n().t("All Documents"),
        collection_names: legacy_documents.map((item) => item.id)
      },
      ...legacy_documents.reduce(
        (a, item) => {
          var _a;
          return [
            .../* @__PURE__ */ new Set([...a, ...(((_a = item == null ? void 0 : item.meta) == null ? void 0 : _a.tags) ?? []).map((tag) => tag.name)])
          ];
        },
        []
      ).map((tag) => ({
        name: tag,
        legacy: true,
        type: "collection",
        description: "Deprecated (legacy collection), please create a new knowledge base.",
        collection_names: legacy_documents.filter((item) => {
          var _a;
          return (((_a = item == null ? void 0 : item.meta) == null ? void 0 : _a.tags) ?? []).map((tag2) => tag2.name).includes(tag);
        }).map((item) => item.id)
      }))
    ] : [];
    let collections = knowledgeItems().filter((item) => {
      var _a;
      return !((_a = item == null ? void 0 : item.meta) == null ? void 0 : _a.document);
    }).map((item) => ({ ...item, type: "collection" }));
    knowledgeItems().length > 0 ? [
      ...knowledgeItems().reduce(
        (a, item) => {
          return [
            .../* @__PURE__ */ new Set([
              ...a,
              ...((item == null ? void 0 : item.files) ?? []).map((file) => ({
                ...file,
                collection: { name: item.name, description: item.description }
                // DO NOT REMOVE, USED IN FILE DESCRIPTION/ATTACHMENT
              }))
            ])
          ];
        },
        []
      ).map((file) => {
        var _a, _b, _c;
        return {
          ...file,
          name: (_a = file == null ? void 0 : file.meta) == null ? void 0 : _a.name,
          description: `${(_b = file == null ? void 0 : file.collection) == null ? void 0 : _b.name} - ${(_c = file == null ? void 0 : file.collection) == null ? void 0 : _c.description}`,
          type: "file"
        };
      })
    ] : [];
    set(items, [...notes, ...collections, ...legacy_collections].map((item) => {
      var _a, _b;
      return {
        ...item,
        ...(item == null ? void 0 : item.legacy) || ((_a = item == null ? void 0 : item.meta) == null ? void 0 : _a.legacy) || ((_b = item == null ? void 0 : item.meta) == null ? void 0 : _b.document) ? { legacy: true } : {}
      };
    }));
    set(fuse, new Fuse(get(items), { keys: ["name", "description"] }));
  });
  legacy_pre_effect(() => (get(fuse), get(query), get(items)), () => {
    if (get(fuse)) {
      set(filteredItems, get(query) ? get(fuse).search(get(query)).map((e) => {
        return e.item;
      }) : get(items));
    }
  });
  legacy_pre_effect_reset();
  init();
  Dropdown($$anchor, {
    $$events: {
      change: (
        // DO NOT REMOVE, USED IN FILE DESCRIPTION/ATTACHMENT
        (e) => {
          if (e.detail === false) {
            onClose()();
            set(query, "");
          }
        }
      )
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      slot(node, $$props, "default", {}, null);
      append($$anchor2, fragment_1);
    },
    $$slots: {
      default: true,
      content: ($$anchor2, $$slotProps) => {
        var div = root_2$2();
        var node_1 = child(div);
        Menu_content(node_1, {
          class: "w-full max-w-96 rounded-xl p-1 border border-gray-100  dark:border-gray-800 z-[99999999] bg-white dark:bg-gray-850 dark:text-white shadow-lg",
          sideOffset: 8,
          side: "bottom",
          align: "start",
          get transition() {
            return flyAndScale;
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_2 = root_3();
            var div_1 = first_child(fragment_2);
            var div_2 = child(div_1);
            var div_3 = child(div_2);
            var node_2 = child(div_3);
            Search(node_2, {});
            reset(div_3);
            var input = sibling(div_3, 2);
            remove_input_defaults(input);
            reset(div_2);
            reset(div_1);
            var div_4 = sibling(div_1, 2);
            var node_3 = child(div_4);
            {
              var consequent = ($$anchor4) => {
                var div_5 = root_4$2();
                var text = child(div_5, true);
                reset(div_5);
                template_effect(($0) => set_text(text, $0), [
                  () => ($i18n(), untrack(() => $i18n().t("No knowledge found")))
                ]);
                append($$anchor4, div_5);
              };
              var alternate_4 = ($$anchor4) => {
                var fragment_3 = comment();
                var node_4 = first_child(fragment_3);
                each(node_4, 1, () => get(filteredItems), index, ($$anchor5, item) => {
                  Menu_item($$anchor5, {
                    class: "flex gap-2.5 items-center px-3 py-2 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md",
                    $$events: {
                      click: () => {
                        dispatch("select", get(item));
                      }
                    },
                    children: ($$anchor6, $$slotProps3) => {
                      var div_6 = root_7$1();
                      var div_7 = child(div_6);
                      var node_5 = child(div_7);
                      {
                        var consequent_1 = ($$anchor7) => {
                          var div_8 = root_8$1();
                          append($$anchor7, div_8);
                        };
                        var alternate_3 = ($$anchor7) => {
                          var fragment_5 = comment();
                          var node_6 = first_child(fragment_5);
                          {
                            var consequent_2 = ($$anchor8) => {
                              var div_9 = root_10$1();
                              append($$anchor8, div_9);
                            };
                            var alternate_2 = ($$anchor8) => {
                              var fragment_6 = comment();
                              var node_7 = first_child(fragment_6);
                              {
                                var consequent_3 = ($$anchor9) => {
                                  var div_10 = root_12$1();
                                  append($$anchor9, div_10);
                                };
                                var alternate_1 = ($$anchor9) => {
                                  var fragment_7 = comment();
                                  var node_8 = first_child(fragment_7);
                                  {
                                    var consequent_4 = ($$anchor10) => {
                                      var div_11 = root_14$1();
                                      append($$anchor10, div_11);
                                    };
                                    var alternate = ($$anchor10) => {
                                      var div_12 = root_15$1();
                                      append($$anchor10, div_12);
                                    };
                                    if_block(
                                      node_8,
                                      ($$render) => {
                                        if (get(item), untrack(() => {
                                          var _a;
                                          return ((_a = get(item)) == null ? void 0 : _a.type) === "note";
                                        })) $$render(consequent_4);
                                        else $$render(alternate, false);
                                      },
                                      true
                                    );
                                  }
                                  append($$anchor9, fragment_7);
                                };
                                if_block(
                                  node_7,
                                  ($$render) => {
                                    if (get(item), untrack(() => {
                                      var _a;
                                      return ((_a = get(item)) == null ? void 0 : _a.type) === "file";
                                    })) $$render(consequent_3);
                                    else $$render(alternate_1, false);
                                  },
                                  true
                                );
                              }
                              append($$anchor8, fragment_6);
                            };
                            if_block(
                              node_6,
                              ($$render) => {
                                if (get(item), untrack(() => {
                                  var _a, _b;
                                  return (_b = (_a = get(item)) == null ? void 0 : _a.meta) == null ? void 0 : _b.document;
                                })) $$render(consequent_2);
                                else $$render(alternate_2, false);
                              },
                              true
                            );
                          }
                          append($$anchor7, fragment_5);
                        };
                        if_block(node_5, ($$render) => {
                          if (get(item), untrack(() => get(item).legacy)) $$render(consequent_1);
                          else $$render(alternate_3, false);
                        });
                      }
                      var div_13 = sibling(node_5, 2);
                      var text_1 = child(div_13, true);
                      reset(div_13);
                      reset(div_7);
                      var div_14 = sibling(div_7, 2);
                      var text_2 = child(div_14, true);
                      reset(div_14);
                      reset(div_6);
                      template_effect(
                        ($0) => {
                          set_text(text_1, $0);
                          set_text(text_2, (get(item), untrack(() => {
                            var _a;
                            return (_a = get(item)) == null ? void 0 : _a.description;
                          })));
                        },
                        [
                          () => (get(item), untrack(() => {
                            var _a;
                            return decodeString((_a = get(item)) == null ? void 0 : _a.name);
                          }))
                        ]
                      );
                      append($$anchor6, div_6);
                    },
                    $$slots: { default: true }
                  });
                });
                append($$anchor4, fragment_3);
              };
              if_block(node_3, ($$render) => {
                if (get(filteredItems), untrack(() => get(filteredItems).length === 0)) $$render(consequent);
                else $$render(alternate_4, false);
              });
            }
            reset(div_4);
            template_effect(($0) => set_attribute(input, "placeholder", $0), [
              () => ($i18n(), untrack(() => $i18n().t("Search Knowledge")))
            ]);
            bind_value(input, () => get(query), ($$value) => set(query, $$value));
            append($$anchor3, fragment_2);
          },
          $$slots: { default: true }
        });
        reset(div);
        append($$anchor2, div);
      }
    }
  });
  pop();
  $$cleanup();
}
var root_1$1 = from_html(`<div class="mb-2"><div class="flex w-full justify-between mb-1"><div class=" self-center text-sm font-medium"> </div></div> <div class=" text-xs dark:text-gray-500"> </div></div>`);
var root_2$1 = from_html(`<div class=" flex flex-wrap items-center gap-2 mb-2.5"></div>`);
var root_5$1 = from_html(`<div class=" px-3.5 py-1.5 font-medium hover:bg-black/5 dark:hover:bg-white/5 outline outline-1 outline-gray-100 dark:outline-gray-850 rounded-3xl"> </div>`);
var root_6$1 = from_html(`<button class=" px-3.5 py-1.5 font-medium hover:bg-black/5 dark:hover:bg-white/5 outline outline-1 outline-gray-100 dark:outline-gray-850 rounded-3xl" type="button"> </button>`);
var root_4$1 = from_html(`<div class="flex flex-wrap flex-row text-sm gap-1"><!> <!></div>`);
var root$1 = from_html(`<input type="file" hidden="" multiple/> <div><!> <div class="flex flex-col"><!> <!></div></div>`, 1);
function Knowledge($$anchor, $$props) {
  push($$props, false);
  const $user = () => store_get(user, "$user", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $knowledge = () => store_get(knowledge, "$knowledge", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let selectedItems = prop($$props, "selectedItems", 28, () => []);
  const i18n = getContext("i18n");
  let loaded = mutable_source(false);
  let filesInputElement = mutable_source(null);
  let inputFiles = mutable_source(null);
  const uploadFileHandler = async (file, fullContext = false) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    if (((_a = $user()) == null ? void 0 : _a.role) !== "admin" && !(((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.chat) == null ? void 0 : _d.file_upload) ?? true)) {
      toast.error($i18n().t("You do not have permission to upload files."));
      return null;
    }
    const tempItemId = v4();
    const fileItem = {
      type: "file",
      file: "",
      id: null,
      url: "",
      name: file.name,
      collection_name: "",
      status: "uploading",
      size: file.size,
      error: "",
      itemId: tempItemId,
      ...fullContext ? { context: "full" } : {}
    };
    if (fileItem.size == 0) {
      toast.error($i18n().t("You cannot upload an empty file."));
      return null;
    }
    selectedItems([...selectedItems(), fileItem]);
    try {
      let metadata = null;
      if ((file.type.startsWith("audio/") || file.type.startsWith("video/")) && ((_g = (_f = (_e = $settings()) == null ? void 0 : _e.audio) == null ? void 0 : _f.stt) == null ? void 0 : _g.language)) {
        metadata = { language: (_j = (_i = (_h = $settings()) == null ? void 0 : _h.audio) == null ? void 0 : _i.stt) == null ? void 0 : _j.language };
      }
      const uploadedFile = await uploadFile(localStorage.token, file, metadata);
      if (uploadedFile) {
        console.log("File upload completed:", {
          id: uploadedFile.id,
          name: fileItem.name,
          collection: (_k = uploadedFile == null ? void 0 : uploadedFile.meta) == null ? void 0 : _k.collection_name
        });
        if (uploadedFile.error) {
          console.warn("File upload warning:", uploadedFile.error);
          toast.warning(uploadedFile.error);
        }
        fileItem.status = "uploaded";
        fileItem.file = uploadedFile;
        fileItem.id = uploadedFile.id;
        fileItem.collection_name = ((_l = uploadedFile == null ? void 0 : uploadedFile.meta) == null ? void 0 : _l.collection_name) || (uploadedFile == null ? void 0 : uploadedFile.collection_name);
        fileItem.url = `${WEBUI_API_BASE_URL}/files/${uploadedFile.id}`;
        selectedItems(selectedItems());
      } else {
        selectedItems(selectedItems().filter((item) => (item == null ? void 0 : item.itemId) !== tempItemId));
      }
    } catch (e) {
      toast.error(`${e}`);
      selectedItems(selectedItems().filter((item) => (item == null ? void 0 : item.itemId) !== tempItemId));
    }
  };
  const inputFilesHandler = async (inputFiles2) => {
    console.log("Input files handler called with:", inputFiles2);
    inputFiles2.forEach(async (file) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      console.log("Processing file:", {
        name: file.name,
        type: file.type,
        size: file.size,
        extension: file.name.split(".").at(-1)
      });
      if ((((_b = (_a = $config()) == null ? void 0 : _a.file) == null ? void 0 : _b.max_size) ?? null) !== null && file.size > (((_d = (_c = $config()) == null ? void 0 : _c.file) == null ? void 0 : _d.max_size) ?? 0) * 1024 * 1024) {
        console.log("File exceeds max size limit:", {
          fileSize: file.size,
          maxSize: (((_f = (_e = $config()) == null ? void 0 : _e.file) == null ? void 0 : _f.max_size) ?? 0) * 1024 * 1024
        });
        toast.error($i18n().t(`File size should not exceed {{maxSize}} MB.`, { maxSize: (_h = (_g = $config()) == null ? void 0 : _g.file) == null ? void 0 : _h.max_size }));
        return;
      }
      if (!file["type"].startsWith("image/")) {
        uploadFileHandler(file);
      } else {
        toast.error($i18n().t(`Unsupported file type.`));
      }
    });
  };
  onMount(async () => {
    if (!$knowledge()) {
      knowledge.set(await getKnowledgeBases(localStorage.token));
    }
    set(loaded, true);
  });
  init();
  var fragment = root$1();
  var input = first_child(fragment);
  bind_this(input, ($$value) => set(filesInputElement, $$value), () => get(filesInputElement));
  var div = sibling(input, 2);
  var node = child(div);
  slot(node, $$props, "label", {}, ($$anchor2) => {
    var div_1 = root_1$1();
    var div_2 = child(div_1);
    var div_3 = child(div_2);
    var text = child(div_3, true);
    reset(div_3);
    reset(div_2);
    var div_4 = sibling(div_2, 2);
    var text_1 = child(div_4, true);
    reset(div_4);
    reset(div_1);
    template_effect(
      ($0, $1) => {
        set_text(text, $0);
        set_text(text_1, $1);
      },
      [
        () => ($i18n(), untrack(() => $i18n().t("Knowledge"))),
        () => ($i18n(), untrack(() => $i18n().t('To attach knowledge base here, add them to the "Knowledge" workspace first.')))
      ]
    );
    append($$anchor2, div_1);
  });
  var div_5 = sibling(node, 2);
  var node_1 = child(div_5);
  {
    var consequent = ($$anchor2) => {
      var div_6 = root_2$1();
      each(div_6, 5, selectedItems, index, ($$anchor3, file, fileIdx) => {
        {
          let $0 = derived_safe_equal(() => (get(file), untrack(() => get(file).status === "uploading")));
          let $1 = derived_safe_equal(() => (get(file), untrack(() => {
            var _a, _b;
            return ((_a = get(file)) == null ? void 0 : _a.legacy) ? `Legacy${get(file).type ? ` ${get(file).type}` : ""}` : ((_b = get(file)) == null ? void 0 : _b.type) ?? "collection";
          })));
          FileItem($$anchor3, {
            get file() {
              return get(file);
            },
            get item() {
              return get(file);
            },
            get name() {
              return get(file), untrack(() => get(file).name);
            },
            modal: true,
            edit: true,
            get loading() {
              return get($0);
            },
            get type() {
              return get($1);
            },
            dismissible: true,
            $$events: {
              dismiss: (e) => {
                selectedItems(selectedItems().filter((_, idx) => idx !== fileIdx));
              }
            }
          });
        }
      });
      reset(div_6);
      append($$anchor2, div_6);
    };
    if_block(node_1, ($$render) => {
      if (deep_read_state(selectedItems()), untrack(() => {
        var _a;
        return ((_a = selectedItems()) == null ? void 0 : _a.length) > 0;
      })) $$render(consequent);
    });
  }
  var node_2 = sibling(node_1, 2);
  {
    var consequent_2 = ($$anchor2) => {
      var div_7 = root_4$1();
      var node_3 = child(div_7);
      {
        let $0 = derived_safe_equal(() => $knowledge() || []);
        Selector(node_3, {
          get knowledgeItems() {
            return get($0);
          },
          $$events: {
            select: (e) => {
              const item = e.detail;
              if (!selectedItems().find((k) => k.id === item.id)) {
                selectedItems([...selectedItems(), { ...item }]);
              }
            }
          },
          children: ($$anchor3, $$slotProps) => {
            var div_8 = root_5$1();
            var text_2 = child(div_8, true);
            reset(div_8);
            template_effect(($02) => set_text(text_2, $02), [
              () => ($i18n(), untrack(() => $i18n().t("Select Knowledge")))
            ]);
            append($$anchor3, div_8);
          },
          $$slots: { default: true }
        });
      }
      var node_4 = sibling(node_3, 2);
      {
        var consequent_1 = ($$anchor3) => {
          var button = root_6$1();
          var text_3 = child(button, true);
          reset(button);
          template_effect(($0) => set_text(text_3, $0), [() => ($i18n(), untrack(() => $i18n().t("Upload Files")))]);
          event("click", button, () => {
            get(filesInputElement).click();
          });
          append($$anchor3, button);
        };
        if_block(node_4, ($$render) => {
          if ($user(), untrack(() => {
            var _a, _b, _c, _d;
            return ((_a = $user()) == null ? void 0 : _a.role) === "admin" || ((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.chat) == null ? void 0 : _d.file_upload);
          })) $$render(consequent_1);
        });
      }
      reset(div_7);
      append($$anchor2, div_7);
    };
    if_block(node_2, ($$render) => {
      if (get(loaded)) $$render(consequent_2);
    });
  }
  reset(div_5);
  reset(div);
  bind_files(input, () => get(inputFiles), ($$value) => set(inputFiles, $$value));
  event("change", input, async () => {
    if (get(inputFiles) && get(inputFiles).length > 0) {
      const _inputFiles = Array.from(get(inputFiles));
      inputFilesHandler(_inputFiles);
    } else {
      toast.error($i18n().t(`File not found.`));
    }
    mutate(filesInputElement, get(filesInputElement).value = "");
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_2 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_4 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_5 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_1 = from_html(`<div class=" py-0.5 flex w-full justify-between"><div class=" self-center text-xs font-medium"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition" type="button"><!></button></div>`);
var root_8 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_9 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_7 = from_html(`<div class="flex w-full justify-between"><div class=" self-center text-xs font-medium"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>`);
var root_10 = from_html(`<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="1" max="128" step="1" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="1" step="any"/></div></div>`);
var root_6 = from_html(`<div><!> <!></div>`);
var root_12 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_13 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_11 = from_html(`<div class=" py-0.5 flex w-full justify-between"><div class=" self-center text-xs font-medium"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition" type="button"><!></button></div>`);
var root_15 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_17 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_19 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_20 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_14 = from_html(`<div class="flex w-full justify-between"><div class=" self-center text-xs font-medium"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>`);
var root_21 = from_html(`<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input class="text-sm w-full bg-transparent outline-hidden outline-none" type="text" autocomplete="off"/></div> <div class=" flex-1"><input class="text-sm w-full bg-transparent outline-hidden outline-none" type="text" autocomplete="off"/></div></div>`);
var root_23 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_24 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_22 = from_html(`<div class="flex w-full justify-between"><div class=" self-center text-xs font-medium"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>`);
var root_25 = from_html(`<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input class="text-sm w-full bg-transparent outline-hidden outline-none" type="number" autocomplete="off" min="0"/></div></div>`);
var root_27 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_28 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_26 = from_html(`<div class="flex w-full justify-between"><div class=" self-center text-xs font-medium"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>`);
var root_29 = from_html(`<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input class="text-sm w-full bg-transparent outline-hidden outline-none" type="text" autocomplete="off"/></div></div>`);
var root_31 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_32 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_30 = from_html(`<div class="flex w-full justify-between"><div class=" self-center text-xs font-medium"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>`);
var root_33 = from_html(`<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="0" max="2" step="0.05" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="0" max="2" step="any"/></div></div>`);
var root_35 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_36 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_34 = from_html(`<div class="flex w-full justify-between"><div class=" self-center text-xs font-medium"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>`);
var root_37 = from_html(`<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input class="text-sm w-full bg-transparent outline-hidden outline-none" type="text" autocomplete="off"/></div></div>`);
var root_39 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_40 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_38 = from_html(`<div class="flex w-full justify-between"><div class=" self-center text-xs font-medium"></div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>`);
var root_41 = from_html(`<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input class="text-sm w-full bg-transparent outline-hidden outline-none" type="text" autocomplete="off"/></div></div>`);
var root_43 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_44 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_42 = from_html(`<div class="flex w-full justify-between"><div class=" self-center text-xs font-medium"></div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>`);
var root_45 = from_html(`<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="-2" max="131072" step="1" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="-2" step="1"/></div></div>`);
var root_47 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_48 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_46 = from_html(`<div class="flex w-full justify-between"><div class=" self-center text-xs font-medium"></div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>`);
var root_49 = from_html(`<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="0" max="1000" step="0.5" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="0" max="100" step="any"/></div></div>`);
var root_51 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_52 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_50 = from_html(`<div class="flex w-full justify-between"><div class=" self-center text-xs font-medium"></div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>`);
var root_53 = from_html(`<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="0" max="1" step="0.05" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="0" max="1" step="any"/></div></div>`);
var root_55 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_56 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_54 = from_html(`<div class="flex w-full justify-between"><div class=" self-center text-xs font-medium"></div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>`);
var root_57 = from_html(`<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="0" max="1" step="0.05" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="0" max="1" step="any"/></div></div>`);
var root_59 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_60 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_58 = from_html(`<div class="flex w-full justify-between"><div class=" self-center text-xs font-medium"></div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>`);
var root_61 = from_html(`<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="-2" max="2" step="0.05" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="-2" max="2" step="any"/></div></div>`);
var root_63 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_64 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_62 = from_html(`<div class="flex w-full justify-between"><div class=" self-center text-xs font-medium"></div> <button class="p-1 px-3 text-xs flex rounded transition flex-shrink-0 outline-none" type="button"><!></button></div>`);
var root_65 = from_html(`<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="-2" max="2" step="0.05" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="-2" max="2" step="any"/></div></div>`);
var root_67 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_68 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_66 = from_html(`<div class="flex w-full justify-between"><div class=" self-center text-xs font-medium"></div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>`);
var root_69 = from_html(`<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="0" max="2" step="1" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="0" max="2" step="1"/></div></div>`);
var root_71 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_72 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_70 = from_html(`<div class="flex w-full justify-between"><div class=" self-center text-xs font-medium"></div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>`);
var root_73 = from_html(`<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="0" max="1" step="0.05" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="0" max="1" step="any"/></div></div>`);
var root_75 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_76 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_74 = from_html(`<div class="flex w-full justify-between"><div class=" self-center text-xs font-medium"></div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>`);
var root_77 = from_html(`<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="0" max="10" step="0.5" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="0" max="10" step="any"/></div></div>`);
var root_79 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_80 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_78 = from_html(`<div class="flex w-full justify-between"><div class=" self-center text-xs font-medium"></div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>`);
var root_81 = from_html(`<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="-1" max="128" step="1" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="-1" max="128" step="1"/></div></div>`);
var root_83 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_84 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_82 = from_html(`<div class="flex w-full justify-between"><div class=" self-center text-xs font-medium"></div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>`);
var root_85 = from_html(`<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="0" max="2" step="0.05" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="0" max="2" step="any"/></div></div>`);
var root_87 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_88 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_86 = from_html(`<div class="flex w-full justify-between"><div class=" self-center text-xs font-medium"></div> <button class="p-1 px-3 text-xs flex rounded transition flex-shrink-0 outline-none" type="button"><!></button></div>`);
var root_89 = from_html(`<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="-2" max="2" step="0.05" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="-2" max="2" step="any"/></div></div>`);
var root_92 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_93 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_91 = from_html(`<div class="flex w-full justify-between"><div class=" self-center text-xs font-medium"></div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>`);
var root_94 = from_html(`<div class="flex justify-between items-center mt-1"><div class="text-xs text-gray-500"> </div> <div class=" pr-2"><!></div></div>`);
var root_96 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_97 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_95 = from_html(`<div class="flex w-full justify-between"><div class=" self-center text-xs font-medium"></div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>`);
var root_98 = from_html(`<div class="flex justify-between items-center mt-1"><div class="text-xs text-gray-500"> </div> <div class=" pr-2"><!></div></div>`);
var root_90 = from_html(`<div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div>`, 1);
var root_100 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_102 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_103 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_99 = from_html(`<div class=" py-0.5 flex w-full justify-between"><div class=" self-center text-xs font-medium"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition" type="button"><!></button></div>`);
var root_105 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_106 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_104 = from_html(`<div class=" py-0.5 flex w-full justify-between"><div class=" self-center text-xs font-medium"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition" type="button"><!></button></div>`);
var root_107 = from_html(`<div class="flex mt-0.5 space-x-2"><!></div>`);
var root_109 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_110 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_108 = from_html(`<div class="flex w-full justify-between"><div class=" self-center text-xs font-medium"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>`);
var root_111 = from_html(`<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="-1" max="10240000" step="1" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="-1" step="1"/></div></div>`);
var root_113 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_114 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_112 = from_html(`<div class="flex w-full justify-between"><div class=" self-center text-xs font-medium"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>`);
var root_115 = from_html(`<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="-1" max="10240000" step="1" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="-1" step="1"/></div></div>`);
var root_117 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_118 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_116 = from_html(`<div class="flex w-full justify-between"><div class=" self-center text-xs font-medium"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>`);
var root_119 = from_html(`<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="256" max="8192" step="256" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="256" step="256"/></div></div>`);
var root_122 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_123 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_121 = from_html(`<div class="flex w-full justify-between"><div class=" self-center text-xs font-medium"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>`);
var root_124 = from_html(`<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="1" max="256" step="1" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="1" max="256" step="1"/></div></div>`);
var root_126 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_127 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_125 = from_html(`<div class="flex w-full justify-between"><div class=" self-center text-xs font-medium"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"><!></button></div>`);
var root_128 = from_html(`<div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input id="steps-range" type="range" min="0" max="256" step="1" class="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/></div> <div><input type="number" class=" bg-transparent text-center w-14" min="0" max="256" step="1"/></div></div>`);
var root_130 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_131 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_129 = from_html(`<div class=" py-0.5 flex w-full justify-between"><div class=" self-center text-xs font-medium"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition" type="button"><!></button></div>`);
var root_132 = from_html(`<div class="flex mt-0.5 space-x-2"><input class="w-full text-sm bg-transparent outline-hidden" type="text"/></div>`);
var root_134 = from_html(`<div class=" py-0.5 w-full justify-between mb-1"><div class="flex w-full justify-between"><div class=" self-center text-xs font-medium"><input type="text" class=" text-xs w-full bg-transparent outline-none"/></div> <button class="p-1 px-3 text-xs flex rounded-sm transition shrink-0 outline-hidden" type="button"> </button></div> <div class="flex mt-0.5 space-x-2"><div class=" flex-1"><input type="text" class="text-sm w-full bg-transparent outline-hidden outline-none"/></div></div></div>`);
var root_133 = from_html(`<div class="flex flex-col justify-center"><!> <button class=" flex gap-2 items-center w-full text-center justify-center mt-1 mb-5" type="button"><div><!></div> <div> </div></button></div>`);
var root_120 = from_html(`<div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <!>`, 1);
var root = from_html(`<div class=" space-y-1 text-xs pb-safe-bottom"><div><!></div> <!> <div><!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <!> <div class=" py-0.5 w-full justify-between"><!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <div class=" py-0.5 w-full justify-between"><!> <!></div> <!></div>`);
function AdvancedParams($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let onChange = prop($$props, "onChange", 8, () => {
  });
  let admin = prop($$props, "admin", 8, false);
  let custom = prop($$props, "custom", 8, false);
  const defaultParams = {
    // Advanced
    stream_response: null,
    // Set stream responses for this model individually
    stream_delta_chunk_size: null,
    // Set the chunk size for streaming responses
    function_calling: null,
    reasoning_tags: null,
    seed: null,
    stop: null,
    temperature: null,
    reasoning_effort: null,
    logit_bias: null,
    max_tokens: null,
    top_k: null,
    top_p: null,
    min_p: null,
    frequency_penalty: null,
    presence_penalty: null,
    mirostat: null,
    mirostat_eta: null,
    mirostat_tau: null,
    repeat_last_n: null,
    tfs_z: null,
    repeat_penalty: null,
    use_mmap: null,
    use_mlock: null,
    think: null,
    format: null,
    keep_alive: null,
    num_keep: null,
    num_ctx: null,
    num_batch: null,
    num_thread: null,
    num_gpu: null
  };
  let params = prop($$props, "params", 12, defaultParams);
  legacy_pre_effect(() => (deep_read_state(params()), deep_read_state(onChange())), () => {
    if (params()) {
      onChange()(params());
    }
  });
  legacy_pre_effect_reset();
  init();
  var div = root();
  var div_1 = child(div);
  var node = child(div_1);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("When enabled, the model will respond to each chat message in real-time, generating a response as soon as the user sends a message. This mode is useful for live chat applications, but may impact performance on slower hardware."))));
    Tooltip(node, {
      get content() {
        return get($0);
      },
      placement: "top-start",
      className: "inline-tooltip",
      children: ($$anchor2, $$slotProps) => {
        var div_2 = root_1();
        var div_3 = child(div_2);
        var text = child(div_3, true);
        reset(div_3);
        var button = sibling(div_3, 2);
        var node_1 = child(button);
        {
          var consequent = ($$anchor3) => {
            var span = root_2();
            var text_1 = child(span, true);
            reset(span);
            template_effect(($02) => set_text(text_1, $02), [() => ($i18n(), untrack(() => $i18n().t("On")))]);
            append($$anchor3, span);
          };
          var alternate_1 = ($$anchor3) => {
            var fragment = comment();
            var node_2 = first_child(fragment);
            {
              var consequent_1 = ($$anchor4) => {
                var span_1 = root_4();
                var text_2 = child(span_1, true);
                reset(span_1);
                template_effect(($02) => set_text(text_2, $02), [() => ($i18n(), untrack(() => $i18n().t("Off")))]);
                append($$anchor4, span_1);
              };
              var alternate = ($$anchor4) => {
                var span_2 = root_5();
                var text_3 = child(span_2, true);
                reset(span_2);
                template_effect(($02) => set_text(text_3, $02), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
                append($$anchor4, span_2);
              };
              if_block(
                node_2,
                ($$render) => {
                  if (deep_read_state(params()), untrack(() => params().stream_response === false)) $$render(consequent_1);
                  else $$render(alternate, false);
                },
                true
              );
            }
            append($$anchor3, fragment);
          };
          if_block(node_1, ($$render) => {
            if (deep_read_state(params()), untrack(() => params().stream_response === true)) $$render(consequent);
            else $$render(alternate_1, false);
          });
        }
        reset(button);
        reset(div_2);
        template_effect(($02) => set_text(text, $02), [
          () => ($i18n(), untrack(() => $i18n().t("Stream Chat Response")))
        ]);
        event("click", button, () => {
          var _a;
          params(params().stream_response = (((_a = params()) == null ? void 0 : _a.stream_response) ?? null) === null ? true : params().stream_response ? false : null, true);
        });
        append($$anchor2, div_2);
      },
      $$slots: { default: true }
    });
  }
  reset(div_1);
  var node_3 = sibling(div_1, 2);
  {
    var consequent_4 = ($$anchor2) => {
      var div_4 = root_6();
      var node_4 = child(div_4);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("The stream delta chunk size for the model. Increasing the chunk size will make the model respond with larger pieces of text at once."))));
        Tooltip(node_4, {
          get content() {
            return get($0);
          },
          placement: "top-start",
          className: "inline-tooltip",
          children: ($$anchor3, $$slotProps) => {
            var div_5 = root_7();
            var div_6 = child(div_5);
            var text_4 = child(div_6, true);
            reset(div_6);
            var button_1 = sibling(div_6, 2);
            var node_5 = child(button_1);
            {
              var consequent_2 = ($$anchor4) => {
                var span_3 = root_8();
                var text_5 = child(span_3, true);
                reset(span_3);
                template_effect(($02) => set_text(text_5, $02), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
                append($$anchor4, span_3);
              };
              var alternate_2 = ($$anchor4) => {
                var span_4 = root_9();
                var text_6 = child(span_4, true);
                reset(span_4);
                template_effect(($02) => set_text(text_6, $02), [() => ($i18n(), untrack(() => $i18n().t("Custom")))]);
                append($$anchor4, span_4);
              };
              if_block(node_5, ($$render) => {
                if (deep_read_state(params()), untrack(() => {
                  var _a;
                  return (((_a = params()) == null ? void 0 : _a.stream_delta_chunk_size) ?? null) === null;
                })) $$render(consequent_2);
                else $$render(alternate_2, false);
              });
            }
            reset(button_1);
            reset(div_5);
            template_effect(($02) => set_text(text_4, $02), [
              () => ($i18n(), untrack(() => $i18n().t("Stream Delta Chunk Size")))
            ]);
            event("click", button_1, () => {
              var _a;
              params(params().stream_delta_chunk_size = (((_a = params()) == null ? void 0 : _a.stream_delta_chunk_size) ?? null) === null ? 1 : null, true);
            });
            append($$anchor3, div_5);
          },
          $$slots: { default: true }
        });
      }
      var node_6 = sibling(node_4, 2);
      {
        var consequent_3 = ($$anchor3) => {
          var div_7 = root_10();
          var div_8 = child(div_7);
          var input = child(div_8);
          remove_input_defaults(input);
          reset(div_8);
          var div_9 = sibling(div_8, 2);
          var input_1 = child(div_9);
          remove_input_defaults(input_1);
          reset(div_9);
          reset(div_7);
          bind_value(input, () => params().stream_delta_chunk_size, ($$value) => params(params().stream_delta_chunk_size = $$value, true));
          bind_value(input_1, () => params().stream_delta_chunk_size, ($$value) => params(params().stream_delta_chunk_size = $$value, true));
          append($$anchor3, div_7);
        };
        if_block(node_6, ($$render) => {
          if (deep_read_state(params()), untrack(() => {
            var _a;
            return (((_a = params()) == null ? void 0 : _a.stream_delta_chunk_size) ?? null) !== null;
          })) $$render(consequent_3);
        });
      }
      reset(div_4);
      append($$anchor2, div_4);
    };
    if_block(node_3, ($$render) => {
      if (admin()) $$render(consequent_4);
    });
  }
  var div_10 = sibling(node_3, 2);
  var node_7 = child(div_10);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Default mode works with a wider range of models by calling tools once before execution. Native mode leverages the model's built-in tool-calling capabilities, but requires the model to inherently support this feature."))));
    Tooltip(node_7, {
      get content() {
        return get($0);
      },
      placement: "top-start",
      className: "inline-tooltip",
      children: ($$anchor2, $$slotProps) => {
        var div_11 = root_11();
        var div_12 = child(div_11);
        var text_7 = child(div_12, true);
        reset(div_12);
        var button_2 = sibling(div_12, 2);
        var node_8 = child(button_2);
        {
          var consequent_5 = ($$anchor3) => {
            var span_5 = root_12();
            var text_8 = child(span_5, true);
            reset(span_5);
            template_effect(($02) => set_text(text_8, $02), [() => ($i18n(), untrack(() => $i18n().t("Native")))]);
            append($$anchor3, span_5);
          };
          var alternate_3 = ($$anchor3) => {
            var span_6 = root_13();
            var text_9 = child(span_6, true);
            reset(span_6);
            template_effect(($02) => set_text(text_9, $02), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
            append($$anchor3, span_6);
          };
          if_block(node_8, ($$render) => {
            if (deep_read_state(params()), untrack(() => params().function_calling === "native")) $$render(consequent_5);
            else $$render(alternate_3, false);
          });
        }
        reset(button_2);
        reset(div_11);
        template_effect(($02) => set_text(text_7, $02), [
          () => ($i18n(), untrack(() => $i18n().t("Function Calling")))
        ]);
        event("click", button_2, () => {
          var _a;
          params(params().function_calling = (((_a = params()) == null ? void 0 : _a.function_calling) ?? null) === null ? "native" : null, true);
        });
        append($$anchor2, div_11);
      },
      $$slots: { default: true }
    });
  }
  reset(div_10);
  var div_13 = sibling(div_10, 2);
  var node_9 = child(div_13);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t('Enable, disable, or customize the reasoning tags used by the model. "Enabled" uses default tags, "Disabled" turns off reasoning tags, and "Custom" lets you specify your own start and end tags.'))));
    Tooltip(node_9, {
      get content() {
        return get($0);
      },
      placement: "top-start",
      className: "inline-tooltip",
      children: ($$anchor2, $$slotProps) => {
        var div_14 = root_14();
        var div_15 = child(div_14);
        var text_10 = child(div_15, true);
        reset(div_15);
        var button_3 = sibling(div_15, 2);
        var node_10 = child(button_3);
        {
          var consequent_6 = ($$anchor3) => {
            var span_7 = root_15();
            var text_11 = child(span_7, true);
            reset(span_7);
            template_effect(($02) => set_text(text_11, $02), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
            append($$anchor3, span_7);
          };
          var alternate_6 = ($$anchor3) => {
            var fragment_1 = comment();
            var node_11 = first_child(fragment_1);
            {
              var consequent_7 = ($$anchor4) => {
                var span_8 = root_17();
                var text_12 = child(span_8, true);
                reset(span_8);
                template_effect(($02) => set_text(text_12, $02), [() => ($i18n(), untrack(() => $i18n().t("Enabled")))]);
                append($$anchor4, span_8);
              };
              var alternate_5 = ($$anchor4) => {
                var fragment_2 = comment();
                var node_12 = first_child(fragment_2);
                {
                  var consequent_8 = ($$anchor5) => {
                    var span_9 = root_19();
                    var text_13 = child(span_9, true);
                    reset(span_9);
                    template_effect(($02) => set_text(text_13, $02), [() => ($i18n(), untrack(() => $i18n().t("Disabled")))]);
                    append($$anchor5, span_9);
                  };
                  var alternate_4 = ($$anchor5) => {
                    var span_10 = root_20();
                    var text_14 = child(span_10, true);
                    reset(span_10);
                    template_effect(($02) => set_text(text_14, $02), [() => ($i18n(), untrack(() => $i18n().t("Custom")))]);
                    append($$anchor5, span_10);
                  };
                  if_block(
                    node_12,
                    ($$render) => {
                      if (deep_read_state(params()), untrack(() => {
                        var _a;
                        return (((_a = params()) == null ? void 0 : _a.reasoning_tags) ?? null) === false;
                      })) $$render(consequent_8);
                      else $$render(alternate_4, false);
                    },
                    true
                  );
                }
                append($$anchor4, fragment_2);
              };
              if_block(
                node_11,
                ($$render) => {
                  if (deep_read_state(params()), untrack(() => {
                    var _a;
                    return (((_a = params()) == null ? void 0 : _a.reasoning_tags) ?? null) === true;
                  })) $$render(consequent_7);
                  else $$render(alternate_5, false);
                },
                true
              );
            }
            append($$anchor3, fragment_1);
          };
          if_block(node_10, ($$render) => {
            if (deep_read_state(params()), untrack(() => {
              var _a;
              return (((_a = params()) == null ? void 0 : _a.reasoning_tags) ?? null) === null;
            })) $$render(consequent_6);
            else $$render(alternate_6, false);
          });
        }
        reset(button_3);
        reset(div_14);
        template_effect(($02) => set_text(text_10, $02), [
          () => ($i18n(), untrack(() => $i18n().t("Reasoning Tags")))
        ]);
        event("click", button_3, () => {
          var _a, _b, _c;
          if ((((_a = params()) == null ? void 0 : _a.reasoning_tags) ?? null) === null) {
            params(params().reasoning_tags = ["", ""], true);
          } else if ((((_b = params()) == null ? void 0 : _b.reasoning_tags) ?? []).length === 2) {
            params(params().reasoning_tags = true, true);
          } else if ((((_c = params()) == null ? void 0 : _c.reasoning_tags) ?? null) !== false) {
            params(params().reasoning_tags = false, true);
          } else {
            params(params().reasoning_tags = null, true);
          }
        });
        append($$anchor2, div_14);
      },
      $$slots: { default: true }
    });
  }
  var node_13 = sibling(node_9, 2);
  {
    var consequent_9 = ($$anchor2) => {
      var div_16 = root_21();
      var div_17 = child(div_16);
      var input_2 = child(div_17);
      remove_input_defaults(input_2);
      reset(div_17);
      var div_18 = sibling(div_17, 2);
      var input_3 = child(div_18);
      remove_input_defaults(input_3);
      reset(div_18);
      reset(div_16);
      template_effect(
        ($0, $1) => {
          set_attribute(input_2, "placeholder", $0);
          set_attribute(input_3, "placeholder", $1);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Start Tag"))),
          () => ($i18n(), untrack(() => $i18n().t("End Tag")))
        ]
      );
      bind_value(input_2, () => params().reasoning_tags[0], ($$value) => params(params().reasoning_tags[0] = $$value, true));
      bind_value(input_3, () => params().reasoning_tags[1], ($$value) => params(params().reasoning_tags[1] = $$value, true));
      append($$anchor2, div_16);
    };
    if_block(node_13, ($$render) => {
      if (deep_read_state(params()), untrack(() => {
        var _a, _b;
        return ![true, false, null].includes(((_a = params()) == null ? void 0 : _a.reasoning_tags) ?? null) && (((_b = params()) == null ? void 0 : _b.reasoning_tags) ?? []).length === 2;
      })) $$render(consequent_9);
    });
  }
  reset(div_13);
  var div_19 = sibling(div_13, 2);
  var node_14 = child(div_19);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Sets the random number seed to use for generation. Setting this to a specific number will make the model generate the same text for the same prompt."))));
    Tooltip(node_14, {
      get content() {
        return get($0);
      },
      placement: "top-start",
      className: "inline-tooltip",
      children: ($$anchor2, $$slotProps) => {
        var div_20 = root_22();
        var div_21 = child(div_20);
        var text_15 = child(div_21, true);
        reset(div_21);
        var button_4 = sibling(div_21, 2);
        var node_15 = child(button_4);
        {
          var consequent_10 = ($$anchor3) => {
            var span_11 = root_23();
            var text_16 = child(span_11, true);
            reset(span_11);
            template_effect(($02) => set_text(text_16, $02), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
            append($$anchor3, span_11);
          };
          var alternate_7 = ($$anchor3) => {
            var span_12 = root_24();
            var text_17 = child(span_12, true);
            reset(span_12);
            template_effect(($02) => set_text(text_17, $02), [() => ($i18n(), untrack(() => $i18n().t("Custom")))]);
            append($$anchor3, span_12);
          };
          if_block(node_15, ($$render) => {
            if (deep_read_state(params()), untrack(() => {
              var _a;
              return (((_a = params()) == null ? void 0 : _a.seed) ?? null) === null;
            })) $$render(consequent_10);
            else $$render(alternate_7, false);
          });
        }
        reset(button_4);
        reset(div_20);
        template_effect(($02) => set_text(text_15, $02), [() => ($i18n(), untrack(() => $i18n().t("Seed")))]);
        event("click", button_4, () => {
          var _a;
          params(params().seed = (((_a = params()) == null ? void 0 : _a.seed) ?? null) === null ? 0 : null, true);
        });
        append($$anchor2, div_20);
      },
      $$slots: { default: true }
    });
  }
  var node_16 = sibling(node_14, 2);
  {
    var consequent_11 = ($$anchor2) => {
      var div_22 = root_25();
      var div_23 = child(div_22);
      var input_4 = child(div_23);
      remove_input_defaults(input_4);
      reset(div_23);
      reset(div_22);
      template_effect(($0) => set_attribute(input_4, "placeholder", $0), [() => ($i18n(), untrack(() => $i18n().t("Enter Seed")))]);
      bind_value(input_4, () => params().seed, ($$value) => params(params().seed = $$value, true));
      append($$anchor2, div_22);
    };
    if_block(node_16, ($$render) => {
      if (deep_read_state(params()), untrack(() => {
        var _a;
        return (((_a = params()) == null ? void 0 : _a.seed) ?? null) !== null;
      })) $$render(consequent_11);
    });
  }
  reset(div_19);
  var div_24 = sibling(div_19, 2);
  var node_17 = child(div_24);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Sets the stop sequences to use. When this pattern is encountered, the LLM will stop generating text and return. Multiple stop patterns may be set by specifying multiple separate stop parameters in a modelfile."))));
    Tooltip(node_17, {
      get content() {
        return get($0);
      },
      placement: "top-start",
      className: "inline-tooltip",
      children: ($$anchor2, $$slotProps) => {
        var div_25 = root_26();
        var div_26 = child(div_25);
        var text_18 = child(div_26, true);
        reset(div_26);
        var button_5 = sibling(div_26, 2);
        var node_18 = child(button_5);
        {
          var consequent_12 = ($$anchor3) => {
            var span_13 = root_27();
            var text_19 = child(span_13, true);
            reset(span_13);
            template_effect(($02) => set_text(text_19, $02), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
            append($$anchor3, span_13);
          };
          var alternate_8 = ($$anchor3) => {
            var span_14 = root_28();
            var text_20 = child(span_14, true);
            reset(span_14);
            template_effect(($02) => set_text(text_20, $02), [() => ($i18n(), untrack(() => $i18n().t("Custom")))]);
            append($$anchor3, span_14);
          };
          if_block(node_18, ($$render) => {
            if (deep_read_state(params()), untrack(() => {
              var _a;
              return (((_a = params()) == null ? void 0 : _a.stop) ?? null) === null;
            })) $$render(consequent_12);
            else $$render(alternate_8, false);
          });
        }
        reset(button_5);
        reset(div_25);
        template_effect(($02) => set_text(text_18, $02), [() => ($i18n(), untrack(() => $i18n().t("Stop Sequence")))]);
        event("click", button_5, () => {
          var _a;
          params(params().stop = (((_a = params()) == null ? void 0 : _a.stop) ?? null) === null ? "" : null, true);
        });
        append($$anchor2, div_25);
      },
      $$slots: { default: true }
    });
  }
  var node_19 = sibling(node_17, 2);
  {
    var consequent_13 = ($$anchor2) => {
      var div_27 = root_29();
      var div_28 = child(div_27);
      var input_5 = child(div_28);
      remove_input_defaults(input_5);
      reset(div_28);
      reset(div_27);
      template_effect(($0) => set_attribute(input_5, "placeholder", $0), [
        () => ($i18n(), untrack(() => $i18n().t("Enter stop sequence")))
      ]);
      bind_value(input_5, () => params().stop, ($$value) => params(params().stop = $$value, true));
      append($$anchor2, div_27);
    };
    if_block(node_19, ($$render) => {
      if (deep_read_state(params()), untrack(() => {
        var _a;
        return (((_a = params()) == null ? void 0 : _a.stop) ?? null) !== null;
      })) $$render(consequent_13);
    });
  }
  reset(div_24);
  var div_29 = sibling(div_24, 2);
  var node_20 = child(div_29);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("The temperature of the model. Increasing the temperature will make the model answer more creatively."))));
    Tooltip(node_20, {
      get content() {
        return get($0);
      },
      placement: "top-start",
      className: "inline-tooltip",
      children: ($$anchor2, $$slotProps) => {
        var div_30 = root_30();
        var div_31 = child(div_30);
        var text_21 = child(div_31, true);
        reset(div_31);
        var button_6 = sibling(div_31, 2);
        var node_21 = child(button_6);
        {
          var consequent_14 = ($$anchor3) => {
            var span_15 = root_31();
            var text_22 = child(span_15, true);
            reset(span_15);
            template_effect(($02) => set_text(text_22, $02), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
            append($$anchor3, span_15);
          };
          var alternate_9 = ($$anchor3) => {
            var span_16 = root_32();
            var text_23 = child(span_16, true);
            reset(span_16);
            template_effect(($02) => set_text(text_23, $02), [() => ($i18n(), untrack(() => $i18n().t("Custom")))]);
            append($$anchor3, span_16);
          };
          if_block(node_21, ($$render) => {
            if (deep_read_state(params()), untrack(() => {
              var _a;
              return (((_a = params()) == null ? void 0 : _a.temperature) ?? null) === null;
            })) $$render(consequent_14);
            else $$render(alternate_9, false);
          });
        }
        reset(button_6);
        reset(div_30);
        template_effect(($02) => set_text(text_21, $02), [() => ($i18n(), untrack(() => $i18n().t("Temperature")))]);
        event("click", button_6, () => {
          var _a;
          params(params().temperature = (((_a = params()) == null ? void 0 : _a.temperature) ?? null) === null ? 0.8 : null, true);
        });
        append($$anchor2, div_30);
      },
      $$slots: { default: true }
    });
  }
  var node_22 = sibling(node_20, 2);
  {
    var consequent_15 = ($$anchor2) => {
      var div_32 = root_33();
      var div_33 = child(div_32);
      var input_6 = child(div_33);
      remove_input_defaults(input_6);
      reset(div_33);
      var div_34 = sibling(div_33, 2);
      var input_7 = child(div_34);
      remove_input_defaults(input_7);
      reset(div_34);
      reset(div_32);
      bind_value(input_6, () => params().temperature, ($$value) => params(params().temperature = $$value, true));
      bind_value(input_7, () => params().temperature, ($$value) => params(params().temperature = $$value, true));
      append($$anchor2, div_32);
    };
    if_block(node_22, ($$render) => {
      if (deep_read_state(params()), untrack(() => {
        var _a;
        return (((_a = params()) == null ? void 0 : _a.temperature) ?? null) !== null;
      })) $$render(consequent_15);
    });
  }
  reset(div_29);
  var div_35 = sibling(div_29, 2);
  var node_23 = child(div_35);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Constrains effort on reasoning for reasoning models. Only applicable to reasoning models from specific providers that support reasoning effort."))));
    Tooltip(node_23, {
      get content() {
        return get($0);
      },
      placement: "top-start",
      className: "inline-tooltip",
      children: ($$anchor2, $$slotProps) => {
        var div_36 = root_34();
        var div_37 = child(div_36);
        var text_24 = child(div_37, true);
        reset(div_37);
        var button_7 = sibling(div_37, 2);
        var node_24 = child(button_7);
        {
          var consequent_16 = ($$anchor3) => {
            var span_17 = root_35();
            var text_25 = child(span_17, true);
            reset(span_17);
            template_effect(($02) => set_text(text_25, $02), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
            append($$anchor3, span_17);
          };
          var alternate_10 = ($$anchor3) => {
            var span_18 = root_36();
            var text_26 = child(span_18, true);
            reset(span_18);
            template_effect(($02) => set_text(text_26, $02), [() => ($i18n(), untrack(() => $i18n().t("Custom")))]);
            append($$anchor3, span_18);
          };
          if_block(node_24, ($$render) => {
            if (deep_read_state(params()), untrack(() => {
              var _a;
              return (((_a = params()) == null ? void 0 : _a.reasoning_effort) ?? null) === null;
            })) $$render(consequent_16);
            else $$render(alternate_10, false);
          });
        }
        reset(button_7);
        reset(div_36);
        template_effect(($02) => set_text(text_24, $02), [
          () => ($i18n(), untrack(() => $i18n().t("Reasoning Effort")))
        ]);
        event("click", button_7, () => {
          var _a;
          params(params().reasoning_effort = (((_a = params()) == null ? void 0 : _a.reasoning_effort) ?? null) === null ? "medium" : null, true);
        });
        append($$anchor2, div_36);
      },
      $$slots: { default: true }
    });
  }
  var node_25 = sibling(node_23, 2);
  {
    var consequent_17 = ($$anchor2) => {
      var div_38 = root_37();
      var div_39 = child(div_38);
      var input_8 = child(div_39);
      remove_input_defaults(input_8);
      reset(div_39);
      reset(div_38);
      template_effect(($0) => set_attribute(input_8, "placeholder", $0), [
        () => ($i18n(), untrack(() => $i18n().t("Enter reasoning effort")))
      ]);
      bind_value(input_8, () => params().reasoning_effort, ($$value) => params(params().reasoning_effort = $$value, true));
      append($$anchor2, div_38);
    };
    if_block(node_25, ($$render) => {
      if (deep_read_state(params()), untrack(() => {
        var _a;
        return (((_a = params()) == null ? void 0 : _a.reasoning_effort) ?? null) !== null;
      })) $$render(consequent_17);
    });
  }
  reset(div_35);
  var div_40 = sibling(div_35, 2);
  var node_26 = child(div_40);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Boosting or penalizing specific tokens for constrained responses. Bias values will be clamped between -100 and 100 (inclusive). (Default: none)"))));
    Tooltip(node_26, {
      get content() {
        return get($0);
      },
      placement: "top-start",
      className: "inline-tooltip",
      children: ($$anchor2, $$slotProps) => {
        var div_41 = root_38();
        var div_42 = child(div_41);
        div_42.textContent = "logit_bias";
        var button_8 = sibling(div_42, 2);
        var node_27 = child(button_8);
        {
          var consequent_18 = ($$anchor3) => {
            var span_19 = root_39();
            var text_27 = child(span_19, true);
            reset(span_19);
            template_effect(($02) => set_text(text_27, $02), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
            append($$anchor3, span_19);
          };
          var alternate_11 = ($$anchor3) => {
            var span_20 = root_40();
            var text_28 = child(span_20, true);
            reset(span_20);
            template_effect(($02) => set_text(text_28, $02), [() => ($i18n(), untrack(() => $i18n().t("Custom")))]);
            append($$anchor3, span_20);
          };
          if_block(node_27, ($$render) => {
            if (deep_read_state(params()), untrack(() => {
              var _a;
              return (((_a = params()) == null ? void 0 : _a.logit_bias) ?? null) === null;
            })) $$render(consequent_18);
            else $$render(alternate_11, false);
          });
        }
        reset(button_8);
        reset(div_41);
        event("click", button_8, () => {
          var _a;
          params(params().logit_bias = (((_a = params()) == null ? void 0 : _a.logit_bias) ?? null) === null ? "" : null, true);
        });
        append($$anchor2, div_41);
      },
      $$slots: { default: true }
    });
  }
  var node_28 = sibling(node_26, 2);
  {
    var consequent_19 = ($$anchor2) => {
      var div_43 = root_41();
      var div_44 = child(div_43);
      var input_9 = child(div_44);
      remove_input_defaults(input_9);
      reset(div_44);
      reset(div_43);
      template_effect(($0) => set_attribute(input_9, "placeholder", $0), [
        () => ($i18n(), untrack(() => $i18n().t('Enter comma-separated "token:bias_value" pairs (example: 5432:100, 413:-100)')))
      ]);
      bind_value(input_9, () => params().logit_bias, ($$value) => params(params().logit_bias = $$value, true));
      append($$anchor2, div_43);
    };
    if_block(node_28, ($$render) => {
      if (deep_read_state(params()), untrack(() => {
        var _a;
        return (((_a = params()) == null ? void 0 : _a.logit_bias) ?? null) !== null;
      })) $$render(consequent_19);
    });
  }
  reset(div_40);
  var div_45 = sibling(div_40, 2);
  var node_29 = child(div_45);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("This option sets the maximum number of tokens the model can generate in its response. Increasing this limit allows the model to provide longer answers, but it may also increase the likelihood of unhelpful or irrelevant content being generated."))));
    Tooltip(node_29, {
      get content() {
        return get($0);
      },
      placement: "top-start",
      className: "inline-tooltip",
      children: ($$anchor2, $$slotProps) => {
        var div_46 = root_42();
        var div_47 = child(div_46);
        div_47.textContent = "max_tokens";
        var button_9 = sibling(div_47, 2);
        var node_30 = child(button_9);
        {
          var consequent_20 = ($$anchor3) => {
            var span_21 = root_43();
            var text_29 = child(span_21, true);
            reset(span_21);
            template_effect(($02) => set_text(text_29, $02), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
            append($$anchor3, span_21);
          };
          var alternate_12 = ($$anchor3) => {
            var span_22 = root_44();
            var text_30 = child(span_22, true);
            reset(span_22);
            template_effect(($02) => set_text(text_30, $02), [() => ($i18n(), untrack(() => $i18n().t("Custom")))]);
            append($$anchor3, span_22);
          };
          if_block(node_30, ($$render) => {
            if (deep_read_state(params()), untrack(() => {
              var _a;
              return (((_a = params()) == null ? void 0 : _a.max_tokens) ?? null) === null;
            })) $$render(consequent_20);
            else $$render(alternate_12, false);
          });
        }
        reset(button_9);
        reset(div_46);
        event("click", button_9, () => {
          var _a;
          params(params().max_tokens = (((_a = params()) == null ? void 0 : _a.max_tokens) ?? null) === null ? 128 : null, true);
        });
        append($$anchor2, div_46);
      },
      $$slots: { default: true }
    });
  }
  var node_31 = sibling(node_29, 2);
  {
    var consequent_21 = ($$anchor2) => {
      var div_48 = root_45();
      var div_49 = child(div_48);
      var input_10 = child(div_49);
      remove_input_defaults(input_10);
      reset(div_49);
      var div_50 = sibling(div_49, 2);
      var input_11 = child(div_50);
      remove_input_defaults(input_11);
      reset(div_50);
      reset(div_48);
      bind_value(input_10, () => params().max_tokens, ($$value) => params(params().max_tokens = $$value, true));
      bind_value(input_11, () => params().max_tokens, ($$value) => params(params().max_tokens = $$value, true));
      append($$anchor2, div_48);
    };
    if_block(node_31, ($$render) => {
      if (deep_read_state(params()), untrack(() => {
        var _a;
        return (((_a = params()) == null ? void 0 : _a.max_tokens) ?? null) !== null;
      })) $$render(consequent_21);
    });
  }
  reset(div_45);
  var div_51 = sibling(div_45, 2);
  var node_32 = child(div_51);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Reduces the probability of generating nonsense. A higher value (e.g. 100) will give more diverse answers, while a lower value (e.g. 10) will be more conservative."))));
    Tooltip(node_32, {
      get content() {
        return get($0);
      },
      placement: "top-start",
      className: "inline-tooltip",
      children: ($$anchor2, $$slotProps) => {
        var div_52 = root_46();
        var div_53 = child(div_52);
        div_53.textContent = "top_k";
        var button_10 = sibling(div_53, 2);
        var node_33 = child(button_10);
        {
          var consequent_22 = ($$anchor3) => {
            var span_23 = root_47();
            var text_31 = child(span_23, true);
            reset(span_23);
            template_effect(($02) => set_text(text_31, $02), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
            append($$anchor3, span_23);
          };
          var alternate_13 = ($$anchor3) => {
            var span_24 = root_48();
            var text_32 = child(span_24, true);
            reset(span_24);
            template_effect(($02) => set_text(text_32, $02), [() => ($i18n(), untrack(() => $i18n().t("Custom")))]);
            append($$anchor3, span_24);
          };
          if_block(node_33, ($$render) => {
            if (deep_read_state(params()), untrack(() => {
              var _a;
              return (((_a = params()) == null ? void 0 : _a.top_k) ?? null) === null;
            })) $$render(consequent_22);
            else $$render(alternate_13, false);
          });
        }
        reset(button_10);
        reset(div_52);
        event("click", button_10, () => {
          var _a;
          params(params().top_k = (((_a = params()) == null ? void 0 : _a.top_k) ?? null) === null ? 40 : null, true);
        });
        append($$anchor2, div_52);
      },
      $$slots: { default: true }
    });
  }
  var node_34 = sibling(node_32, 2);
  {
    var consequent_23 = ($$anchor2) => {
      var div_54 = root_49();
      var div_55 = child(div_54);
      var input_12 = child(div_55);
      remove_input_defaults(input_12);
      reset(div_55);
      var div_56 = sibling(div_55, 2);
      var input_13 = child(div_56);
      remove_input_defaults(input_13);
      reset(div_56);
      reset(div_54);
      bind_value(input_12, () => params().top_k, ($$value) => params(params().top_k = $$value, true));
      bind_value(input_13, () => params().top_k, ($$value) => params(params().top_k = $$value, true));
      append($$anchor2, div_54);
    };
    if_block(node_34, ($$render) => {
      if (deep_read_state(params()), untrack(() => {
        var _a;
        return (((_a = params()) == null ? void 0 : _a.top_k) ?? null) !== null;
      })) $$render(consequent_23);
    });
  }
  reset(div_51);
  var div_57 = sibling(div_51, 2);
  var node_35 = child(div_57);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Works together with top-k. A higher value (e.g., 0.95) will lead to more diverse text, while a lower value (e.g., 0.5) will generate more focused and conservative text."))));
    Tooltip(node_35, {
      get content() {
        return get($0);
      },
      placement: "top-start",
      className: "inline-tooltip",
      children: ($$anchor2, $$slotProps) => {
        var div_58 = root_50();
        var div_59 = child(div_58);
        div_59.textContent = "top_p";
        var button_11 = sibling(div_59, 2);
        var node_36 = child(button_11);
        {
          var consequent_24 = ($$anchor3) => {
            var span_25 = root_51();
            var text_33 = child(span_25, true);
            reset(span_25);
            template_effect(($02) => set_text(text_33, $02), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
            append($$anchor3, span_25);
          };
          var alternate_14 = ($$anchor3) => {
            var span_26 = root_52();
            var text_34 = child(span_26, true);
            reset(span_26);
            template_effect(($02) => set_text(text_34, $02), [() => ($i18n(), untrack(() => $i18n().t("Custom")))]);
            append($$anchor3, span_26);
          };
          if_block(node_36, ($$render) => {
            if (deep_read_state(params()), untrack(() => {
              var _a;
              return (((_a = params()) == null ? void 0 : _a.top_p) ?? null) === null;
            })) $$render(consequent_24);
            else $$render(alternate_14, false);
          });
        }
        reset(button_11);
        reset(div_58);
        event("click", button_11, () => {
          var _a;
          params(params().top_p = (((_a = params()) == null ? void 0 : _a.top_p) ?? null) === null ? 0.9 : null, true);
        });
        append($$anchor2, div_58);
      },
      $$slots: { default: true }
    });
  }
  var node_37 = sibling(node_35, 2);
  {
    var consequent_25 = ($$anchor2) => {
      var div_60 = root_53();
      var div_61 = child(div_60);
      var input_14 = child(div_61);
      remove_input_defaults(input_14);
      reset(div_61);
      var div_62 = sibling(div_61, 2);
      var input_15 = child(div_62);
      remove_input_defaults(input_15);
      reset(div_62);
      reset(div_60);
      bind_value(input_14, () => params().top_p, ($$value) => params(params().top_p = $$value, true));
      bind_value(input_15, () => params().top_p, ($$value) => params(params().top_p = $$value, true));
      append($$anchor2, div_60);
    };
    if_block(node_37, ($$render) => {
      if (deep_read_state(params()), untrack(() => {
        var _a;
        return (((_a = params()) == null ? void 0 : _a.top_p) ?? null) !== null;
      })) $$render(consequent_25);
    });
  }
  reset(div_57);
  var div_63 = sibling(div_57, 2);
  var node_38 = child(div_63);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Alternative to the top_p, and aims to ensure a balance of quality and variety. The parameter p represents the minimum probability for a token to be considered, relative to the probability of the most likely token. For example, with p=0.05 and the most likely token having a probability of 0.9, logits with a value less than 0.045 are filtered out."))));
    Tooltip(node_38, {
      get content() {
        return get($0);
      },
      placement: "top-start",
      className: "inline-tooltip",
      children: ($$anchor2, $$slotProps) => {
        var div_64 = root_54();
        var div_65 = child(div_64);
        div_65.textContent = "min_p";
        var button_12 = sibling(div_65, 2);
        var node_39 = child(button_12);
        {
          var consequent_26 = ($$anchor3) => {
            var span_27 = root_55();
            var text_35 = child(span_27, true);
            reset(span_27);
            template_effect(($02) => set_text(text_35, $02), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
            append($$anchor3, span_27);
          };
          var alternate_15 = ($$anchor3) => {
            var span_28 = root_56();
            var text_36 = child(span_28, true);
            reset(span_28);
            template_effect(($02) => set_text(text_36, $02), [() => ($i18n(), untrack(() => $i18n().t("Custom")))]);
            append($$anchor3, span_28);
          };
          if_block(node_39, ($$render) => {
            if (deep_read_state(params()), untrack(() => {
              var _a;
              return (((_a = params()) == null ? void 0 : _a.min_p) ?? null) === null;
            })) $$render(consequent_26);
            else $$render(alternate_15, false);
          });
        }
        reset(button_12);
        reset(div_64);
        event("click", button_12, () => {
          var _a;
          params(params().min_p = (((_a = params()) == null ? void 0 : _a.min_p) ?? null) === null ? 0 : null, true);
        });
        append($$anchor2, div_64);
      },
      $$slots: { default: true }
    });
  }
  var node_40 = sibling(node_38, 2);
  {
    var consequent_27 = ($$anchor2) => {
      var div_66 = root_57();
      var div_67 = child(div_66);
      var input_16 = child(div_67);
      remove_input_defaults(input_16);
      reset(div_67);
      var div_68 = sibling(div_67, 2);
      var input_17 = child(div_68);
      remove_input_defaults(input_17);
      reset(div_68);
      reset(div_66);
      bind_value(input_16, () => params().min_p, ($$value) => params(params().min_p = $$value, true));
      bind_value(input_17, () => params().min_p, ($$value) => params(params().min_p = $$value, true));
      append($$anchor2, div_66);
    };
    if_block(node_40, ($$render) => {
      if (deep_read_state(params()), untrack(() => {
        var _a;
        return (((_a = params()) == null ? void 0 : _a.min_p) ?? null) !== null;
      })) $$render(consequent_27);
    });
  }
  reset(div_63);
  var div_69 = sibling(div_63, 2);
  var node_41 = child(div_69);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Sets a scaling bias against tokens to penalize repetitions, based on how many times they have appeared. A higher value (e.g., 1.5) will penalize repetitions more strongly, while a lower value (e.g., 0.9) will be more lenient. At 0, it is disabled."))));
    Tooltip(node_41, {
      get content() {
        return get($0);
      },
      placement: "top-start",
      className: "inline-tooltip",
      children: ($$anchor2, $$slotProps) => {
        var div_70 = root_58();
        var div_71 = child(div_70);
        div_71.textContent = "frequency_penalty";
        var button_13 = sibling(div_71, 2);
        var node_42 = child(button_13);
        {
          var consequent_28 = ($$anchor3) => {
            var span_29 = root_59();
            var text_37 = child(span_29, true);
            reset(span_29);
            template_effect(($02) => set_text(text_37, $02), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
            append($$anchor3, span_29);
          };
          var alternate_16 = ($$anchor3) => {
            var span_30 = root_60();
            var text_38 = child(span_30, true);
            reset(span_30);
            template_effect(($02) => set_text(text_38, $02), [() => ($i18n(), untrack(() => $i18n().t("Custom")))]);
            append($$anchor3, span_30);
          };
          if_block(node_42, ($$render) => {
            if (deep_read_state(params()), untrack(() => {
              var _a;
              return (((_a = params()) == null ? void 0 : _a.frequency_penalty) ?? null) === null;
            })) $$render(consequent_28);
            else $$render(alternate_16, false);
          });
        }
        reset(button_13);
        reset(div_70);
        event("click", button_13, () => {
          var _a;
          params(params().frequency_penalty = (((_a = params()) == null ? void 0 : _a.frequency_penalty) ?? null) === null ? 1.1 : null, true);
        });
        append($$anchor2, div_70);
      },
      $$slots: { default: true }
    });
  }
  var node_43 = sibling(node_41, 2);
  {
    var consequent_29 = ($$anchor2) => {
      var div_72 = root_61();
      var div_73 = child(div_72);
      var input_18 = child(div_73);
      remove_input_defaults(input_18);
      reset(div_73);
      var div_74 = sibling(div_73, 2);
      var input_19 = child(div_74);
      remove_input_defaults(input_19);
      reset(div_74);
      reset(div_72);
      bind_value(input_18, () => params().frequency_penalty, ($$value) => params(params().frequency_penalty = $$value, true));
      bind_value(input_19, () => params().frequency_penalty, ($$value) => params(params().frequency_penalty = $$value, true));
      append($$anchor2, div_72);
    };
    if_block(node_43, ($$render) => {
      if (deep_read_state(params()), untrack(() => {
        var _a;
        return (((_a = params()) == null ? void 0 : _a.frequency_penalty) ?? null) !== null;
      })) $$render(consequent_29);
    });
  }
  reset(div_69);
  var div_75 = sibling(div_69, 2);
  var node_44 = child(div_75);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Sets a flat bias against tokens that have appeared at least once. A higher value (e.g., 1.5) will penalize repetitions more strongly, while a lower value (e.g., 0.9) will be more lenient. At 0, it is disabled."))));
    Tooltip(node_44, {
      get content() {
        return get($0);
      },
      placement: "top-start",
      className: "inline-tooltip",
      children: ($$anchor2, $$slotProps) => {
        var div_76 = root_62();
        var div_77 = child(div_76);
        div_77.textContent = "presence_penalty";
        var button_14 = sibling(div_77, 2);
        var node_45 = child(button_14);
        {
          var consequent_30 = ($$anchor3) => {
            var span_31 = root_63();
            var text_39 = child(span_31, true);
            reset(span_31);
            template_effect(($02) => set_text(text_39, $02), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
            append($$anchor3, span_31);
          };
          var alternate_17 = ($$anchor3) => {
            var span_32 = root_64();
            var text_40 = child(span_32, true);
            reset(span_32);
            template_effect(($02) => set_text(text_40, $02), [() => ($i18n(), untrack(() => $i18n().t("Custom")))]);
            append($$anchor3, span_32);
          };
          if_block(node_45, ($$render) => {
            if (deep_read_state(params()), untrack(() => {
              var _a;
              return (((_a = params()) == null ? void 0 : _a.presence_penalty) ?? null) === null;
            })) $$render(consequent_30);
            else $$render(alternate_17, false);
          });
        }
        reset(button_14);
        reset(div_76);
        event("click", button_14, () => {
          var _a;
          params(params().presence_penalty = (((_a = params()) == null ? void 0 : _a.presence_penalty) ?? null) === null ? 0 : null, true);
        });
        append($$anchor2, div_76);
      },
      $$slots: { default: true }
    });
  }
  var node_46 = sibling(node_44, 2);
  {
    var consequent_31 = ($$anchor2) => {
      var div_78 = root_65();
      var div_79 = child(div_78);
      var input_20 = child(div_79);
      remove_input_defaults(input_20);
      reset(div_79);
      var div_80 = sibling(div_79, 2);
      var input_21 = child(div_80);
      remove_input_defaults(input_21);
      reset(div_80);
      reset(div_78);
      bind_value(input_20, () => params().presence_penalty, ($$value) => params(params().presence_penalty = $$value, true));
      bind_value(input_21, () => params().presence_penalty, ($$value) => params(params().presence_penalty = $$value, true));
      append($$anchor2, div_78);
    };
    if_block(node_46, ($$render) => {
      if (deep_read_state(params()), untrack(() => {
        var _a;
        return (((_a = params()) == null ? void 0 : _a.presence_penalty) ?? null) !== null;
      })) $$render(consequent_31);
    });
  }
  reset(div_75);
  var div_81 = sibling(div_75, 2);
  var node_47 = child(div_81);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Enable Mirostat sampling for controlling perplexity."))));
    Tooltip(node_47, {
      get content() {
        return get($0);
      },
      placement: "top-start",
      className: "inline-tooltip",
      children: ($$anchor2, $$slotProps) => {
        var div_82 = root_66();
        var div_83 = child(div_82);
        div_83.textContent = "mirostat";
        var button_15 = sibling(div_83, 2);
        var node_48 = child(button_15);
        {
          var consequent_32 = ($$anchor3) => {
            var span_33 = root_67();
            var text_41 = child(span_33, true);
            reset(span_33);
            template_effect(($02) => set_text(text_41, $02), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
            append($$anchor3, span_33);
          };
          var alternate_18 = ($$anchor3) => {
            var span_34 = root_68();
            var text_42 = child(span_34, true);
            reset(span_34);
            template_effect(($02) => set_text(text_42, $02), [() => ($i18n(), untrack(() => $i18n().t("Custom")))]);
            append($$anchor3, span_34);
          };
          if_block(node_48, ($$render) => {
            if (deep_read_state(params()), untrack(() => {
              var _a;
              return (((_a = params()) == null ? void 0 : _a.mirostat) ?? null) === null;
            })) $$render(consequent_32);
            else $$render(alternate_18, false);
          });
        }
        reset(button_15);
        reset(div_82);
        event("click", button_15, () => {
          var _a;
          params(params().mirostat = (((_a = params()) == null ? void 0 : _a.mirostat) ?? null) === null ? 0 : null, true);
        });
        append($$anchor2, div_82);
      },
      $$slots: { default: true }
    });
  }
  var node_49 = sibling(node_47, 2);
  {
    var consequent_33 = ($$anchor2) => {
      var div_84 = root_69();
      var div_85 = child(div_84);
      var input_22 = child(div_85);
      remove_input_defaults(input_22);
      reset(div_85);
      var div_86 = sibling(div_85, 2);
      var input_23 = child(div_86);
      remove_input_defaults(input_23);
      reset(div_86);
      reset(div_84);
      bind_value(input_22, () => params().mirostat, ($$value) => params(params().mirostat = $$value, true));
      bind_value(input_23, () => params().mirostat, ($$value) => params(params().mirostat = $$value, true));
      append($$anchor2, div_84);
    };
    if_block(node_49, ($$render) => {
      if (deep_read_state(params()), untrack(() => {
        var _a;
        return (((_a = params()) == null ? void 0 : _a.mirostat) ?? null) !== null;
      })) $$render(consequent_33);
    });
  }
  reset(div_81);
  var div_87 = sibling(div_81, 2);
  var node_50 = child(div_87);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Influences how quickly the algorithm responds to feedback from the generated text. A lower learning rate will result in slower adjustments, while a higher learning rate will make the algorithm more responsive."))));
    Tooltip(node_50, {
      get content() {
        return get($0);
      },
      placement: "top-start",
      className: "inline-tooltip",
      children: ($$anchor2, $$slotProps) => {
        var div_88 = root_70();
        var div_89 = child(div_88);
        div_89.textContent = "mirostat_eta";
        var button_16 = sibling(div_89, 2);
        var node_51 = child(button_16);
        {
          var consequent_34 = ($$anchor3) => {
            var span_35 = root_71();
            var text_43 = child(span_35, true);
            reset(span_35);
            template_effect(($02) => set_text(text_43, $02), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
            append($$anchor3, span_35);
          };
          var alternate_19 = ($$anchor3) => {
            var span_36 = root_72();
            var text_44 = child(span_36, true);
            reset(span_36);
            template_effect(($02) => set_text(text_44, $02), [() => ($i18n(), untrack(() => $i18n().t("Custom")))]);
            append($$anchor3, span_36);
          };
          if_block(node_51, ($$render) => {
            if (deep_read_state(params()), untrack(() => {
              var _a;
              return (((_a = params()) == null ? void 0 : _a.mirostat_eta) ?? null) === null;
            })) $$render(consequent_34);
            else $$render(alternate_19, false);
          });
        }
        reset(button_16);
        reset(div_88);
        event("click", button_16, () => {
          var _a;
          params(params().mirostat_eta = (((_a = params()) == null ? void 0 : _a.mirostat_eta) ?? null) === null ? 0.1 : null, true);
        });
        append($$anchor2, div_88);
      },
      $$slots: { default: true }
    });
  }
  var node_52 = sibling(node_50, 2);
  {
    var consequent_35 = ($$anchor2) => {
      var div_90 = root_73();
      var div_91 = child(div_90);
      var input_24 = child(div_91);
      remove_input_defaults(input_24);
      reset(div_91);
      var div_92 = sibling(div_91, 2);
      var input_25 = child(div_92);
      remove_input_defaults(input_25);
      reset(div_92);
      reset(div_90);
      bind_value(input_24, () => params().mirostat_eta, ($$value) => params(params().mirostat_eta = $$value, true));
      bind_value(input_25, () => params().mirostat_eta, ($$value) => params(params().mirostat_eta = $$value, true));
      append($$anchor2, div_90);
    };
    if_block(node_52, ($$render) => {
      if (deep_read_state(params()), untrack(() => {
        var _a;
        return (((_a = params()) == null ? void 0 : _a.mirostat_eta) ?? null) !== null;
      })) $$render(consequent_35);
    });
  }
  reset(div_87);
  var div_93 = sibling(div_87, 2);
  var node_53 = child(div_93);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Controls the balance between coherence and diversity of the output. A lower value will result in more focused and coherent text."))));
    Tooltip(node_53, {
      get content() {
        return get($0);
      },
      placement: "top-start",
      className: "inline-tooltip",
      children: ($$anchor2, $$slotProps) => {
        var div_94 = root_74();
        var div_95 = child(div_94);
        div_95.textContent = "mirostat_tau";
        var button_17 = sibling(div_95, 2);
        var node_54 = child(button_17);
        {
          var consequent_36 = ($$anchor3) => {
            var span_37 = root_75();
            var text_45 = child(span_37, true);
            reset(span_37);
            template_effect(($02) => set_text(text_45, $02), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
            append($$anchor3, span_37);
          };
          var alternate_20 = ($$anchor3) => {
            var span_38 = root_76();
            var text_46 = child(span_38, true);
            reset(span_38);
            template_effect(($02) => set_text(text_46, $02), [() => ($i18n(), untrack(() => $i18n().t("Custom")))]);
            append($$anchor3, span_38);
          };
          if_block(node_54, ($$render) => {
            if (deep_read_state(params()), untrack(() => {
              var _a;
              return (((_a = params()) == null ? void 0 : _a.mirostat_tau) ?? null) === null;
            })) $$render(consequent_36);
            else $$render(alternate_20, false);
          });
        }
        reset(button_17);
        reset(div_94);
        event("click", button_17, () => {
          var _a;
          params(params().mirostat_tau = (((_a = params()) == null ? void 0 : _a.mirostat_tau) ?? null) === null ? 5 : null, true);
        });
        append($$anchor2, div_94);
      },
      $$slots: { default: true }
    });
  }
  var node_55 = sibling(node_53, 2);
  {
    var consequent_37 = ($$anchor2) => {
      var div_96 = root_77();
      var div_97 = child(div_96);
      var input_26 = child(div_97);
      remove_input_defaults(input_26);
      reset(div_97);
      var div_98 = sibling(div_97, 2);
      var input_27 = child(div_98);
      remove_input_defaults(input_27);
      reset(div_98);
      reset(div_96);
      bind_value(input_26, () => params().mirostat_tau, ($$value) => params(params().mirostat_tau = $$value, true));
      bind_value(input_27, () => params().mirostat_tau, ($$value) => params(params().mirostat_tau = $$value, true));
      append($$anchor2, div_96);
    };
    if_block(node_55, ($$render) => {
      if (deep_read_state(params()), untrack(() => {
        var _a;
        return (((_a = params()) == null ? void 0 : _a.mirostat_tau) ?? null) !== null;
      })) $$render(consequent_37);
    });
  }
  reset(div_93);
  var div_99 = sibling(div_93, 2);
  var node_56 = child(div_99);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Sets how far back for the model to look back to prevent repetition."))));
    Tooltip(node_56, {
      get content() {
        return get($0);
      },
      placement: "top-start",
      className: "inline-tooltip",
      children: ($$anchor2, $$slotProps) => {
        var div_100 = root_78();
        var div_101 = child(div_100);
        div_101.textContent = "repeat_last_n";
        var button_18 = sibling(div_101, 2);
        var node_57 = child(button_18);
        {
          var consequent_38 = ($$anchor3) => {
            var span_39 = root_79();
            var text_47 = child(span_39, true);
            reset(span_39);
            template_effect(($02) => set_text(text_47, $02), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
            append($$anchor3, span_39);
          };
          var alternate_21 = ($$anchor3) => {
            var span_40 = root_80();
            var text_48 = child(span_40, true);
            reset(span_40);
            template_effect(($02) => set_text(text_48, $02), [() => ($i18n(), untrack(() => $i18n().t("Custom")))]);
            append($$anchor3, span_40);
          };
          if_block(node_57, ($$render) => {
            if (deep_read_state(params()), untrack(() => {
              var _a;
              return (((_a = params()) == null ? void 0 : _a.repeat_last_n) ?? null) === null;
            })) $$render(consequent_38);
            else $$render(alternate_21, false);
          });
        }
        reset(button_18);
        reset(div_100);
        event("click", button_18, () => {
          var _a;
          params(params().repeat_last_n = (((_a = params()) == null ? void 0 : _a.repeat_last_n) ?? null) === null ? 64 : null, true);
        });
        append($$anchor2, div_100);
      },
      $$slots: { default: true }
    });
  }
  var node_58 = sibling(node_56, 2);
  {
    var consequent_39 = ($$anchor2) => {
      var div_102 = root_81();
      var div_103 = child(div_102);
      var input_28 = child(div_103);
      remove_input_defaults(input_28);
      reset(div_103);
      var div_104 = sibling(div_103, 2);
      var input_29 = child(div_104);
      remove_input_defaults(input_29);
      reset(div_104);
      reset(div_102);
      bind_value(input_28, () => params().repeat_last_n, ($$value) => params(params().repeat_last_n = $$value, true));
      bind_value(input_29, () => params().repeat_last_n, ($$value) => params(params().repeat_last_n = $$value, true));
      append($$anchor2, div_102);
    };
    if_block(node_58, ($$render) => {
      if (deep_read_state(params()), untrack(() => {
        var _a;
        return (((_a = params()) == null ? void 0 : _a.repeat_last_n) ?? null) !== null;
      })) $$render(consequent_39);
    });
  }
  reset(div_99);
  var div_105 = sibling(div_99, 2);
  var node_59 = child(div_105);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Tail free sampling is used to reduce the impact of less probable tokens from the output. A higher value (e.g., 2.0) will reduce the impact more, while a value of 1.0 disables this setting."))));
    Tooltip(node_59, {
      get content() {
        return get($0);
      },
      placement: "top-start",
      className: "inline-tooltip",
      children: ($$anchor2, $$slotProps) => {
        var div_106 = root_82();
        var div_107 = child(div_106);
        div_107.textContent = "tfs_z";
        var button_19 = sibling(div_107, 2);
        var node_60 = child(button_19);
        {
          var consequent_40 = ($$anchor3) => {
            var span_41 = root_83();
            var text_49 = child(span_41, true);
            reset(span_41);
            template_effect(($02) => set_text(text_49, $02), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
            append($$anchor3, span_41);
          };
          var alternate_22 = ($$anchor3) => {
            var span_42 = root_84();
            var text_50 = child(span_42, true);
            reset(span_42);
            template_effect(($02) => set_text(text_50, $02), [() => ($i18n(), untrack(() => $i18n().t("Custom")))]);
            append($$anchor3, span_42);
          };
          if_block(node_60, ($$render) => {
            if (deep_read_state(params()), untrack(() => {
              var _a;
              return (((_a = params()) == null ? void 0 : _a.tfs_z) ?? null) === null;
            })) $$render(consequent_40);
            else $$render(alternate_22, false);
          });
        }
        reset(button_19);
        reset(div_106);
        event("click", button_19, () => {
          var _a;
          params(params().tfs_z = (((_a = params()) == null ? void 0 : _a.tfs_z) ?? null) === null ? 1 : null, true);
        });
        append($$anchor2, div_106);
      },
      $$slots: { default: true }
    });
  }
  var node_61 = sibling(node_59, 2);
  {
    var consequent_41 = ($$anchor2) => {
      var div_108 = root_85();
      var div_109 = child(div_108);
      var input_30 = child(div_109);
      remove_input_defaults(input_30);
      reset(div_109);
      var div_110 = sibling(div_109, 2);
      var input_31 = child(div_110);
      remove_input_defaults(input_31);
      reset(div_110);
      reset(div_108);
      bind_value(input_30, () => params().tfs_z, ($$value) => params(params().tfs_z = $$value, true));
      bind_value(input_31, () => params().tfs_z, ($$value) => params(params().tfs_z = $$value, true));
      append($$anchor2, div_108);
    };
    if_block(node_61, ($$render) => {
      if (deep_read_state(params()), untrack(() => {
        var _a;
        return (((_a = params()) == null ? void 0 : _a.tfs_z) ?? null) !== null;
      })) $$render(consequent_41);
    });
  }
  reset(div_105);
  var div_111 = sibling(div_105, 2);
  var node_62 = child(div_111);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Control the repetition of token sequences in the generated text. A higher value (e.g., 1.5) will penalize repetitions more strongly, while a lower value (e.g., 1.1) will be more lenient. At 1, it is disabled."))));
    Tooltip(node_62, {
      get content() {
        return get($0);
      },
      placement: "top-start",
      className: "inline-tooltip",
      children: ($$anchor2, $$slotProps) => {
        var div_112 = root_86();
        var div_113 = child(div_112);
        div_113.textContent = "repeat_penalty";
        var button_20 = sibling(div_113, 2);
        var node_63 = child(button_20);
        {
          var consequent_42 = ($$anchor3) => {
            var span_43 = root_87();
            var text_51 = child(span_43, true);
            reset(span_43);
            template_effect(($02) => set_text(text_51, $02), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
            append($$anchor3, span_43);
          };
          var alternate_23 = ($$anchor3) => {
            var span_44 = root_88();
            var text_52 = child(span_44, true);
            reset(span_44);
            template_effect(($02) => set_text(text_52, $02), [() => ($i18n(), untrack(() => $i18n().t("Custom")))]);
            append($$anchor3, span_44);
          };
          if_block(node_63, ($$render) => {
            if (deep_read_state(params()), untrack(() => {
              var _a;
              return (((_a = params()) == null ? void 0 : _a.repeat_penalty) ?? null) === null;
            })) $$render(consequent_42);
            else $$render(alternate_23, false);
          });
        }
        reset(button_20);
        reset(div_112);
        event("click", button_20, () => {
          var _a;
          params(params().repeat_penalty = (((_a = params()) == null ? void 0 : _a.repeat_penalty) ?? null) === null ? 1.1 : null, true);
        });
        append($$anchor2, div_112);
      },
      $$slots: { default: true }
    });
  }
  var node_64 = sibling(node_62, 2);
  {
    var consequent_43 = ($$anchor2) => {
      var div_114 = root_89();
      var div_115 = child(div_114);
      var input_32 = child(div_115);
      remove_input_defaults(input_32);
      reset(div_115);
      var div_116 = sibling(div_115, 2);
      var input_33 = child(div_116);
      remove_input_defaults(input_33);
      reset(div_116);
      reset(div_114);
      bind_value(input_32, () => params().repeat_penalty, ($$value) => params(params().repeat_penalty = $$value, true));
      bind_value(input_33, () => params().repeat_penalty, ($$value) => params(params().repeat_penalty = $$value, true));
      append($$anchor2, div_114);
    };
    if_block(node_64, ($$render) => {
      if (deep_read_state(params()), untrack(() => {
        var _a;
        return (((_a = params()) == null ? void 0 : _a.repeat_penalty) ?? null) !== null;
      })) $$render(consequent_43);
    });
  }
  reset(div_111);
  var node_65 = sibling(div_111, 2);
  {
    var consequent_48 = ($$anchor2) => {
      var fragment_3 = root_90();
      var div_117 = first_child(fragment_3);
      var node_66 = child(div_117);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Enable Memory Mapping (mmap) to load model data. This option allows the system to use disk storage as an extension of RAM by treating disk files as if they were in RAM. This can improve model performance by allowing for faster data access. However, it may not work correctly with all systems and can consume a significant amount of disk space."))));
        Tooltip(node_66, {
          get content() {
            return get($0);
          },
          placement: "top-start",
          className: "inline-tooltip",
          children: ($$anchor3, $$slotProps) => {
            var div_118 = root_91();
            var div_119 = child(div_118);
            div_119.textContent = "use_mmap";
            var button_21 = sibling(div_119, 2);
            var node_67 = child(button_21);
            {
              var consequent_44 = ($$anchor4) => {
                var span_45 = root_92();
                var text_53 = child(span_45, true);
                reset(span_45);
                template_effect(($02) => set_text(text_53, $02), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
                append($$anchor4, span_45);
              };
              var alternate_24 = ($$anchor4) => {
                var span_46 = root_93();
                var text_54 = child(span_46, true);
                reset(span_46);
                template_effect(($02) => set_text(text_54, $02), [() => ($i18n(), untrack(() => $i18n().t("Custom")))]);
                append($$anchor4, span_46);
              };
              if_block(node_67, ($$render) => {
                if (deep_read_state(params()), untrack(() => {
                  var _a;
                  return (((_a = params()) == null ? void 0 : _a.use_mmap) ?? null) === null;
                })) $$render(consequent_44);
                else $$render(alternate_24, false);
              });
            }
            reset(button_21);
            reset(div_118);
            event("click", button_21, () => {
              var _a;
              params(params().use_mmap = (((_a = params()) == null ? void 0 : _a.use_mmap) ?? null) === null ? true : null, true);
            });
            append($$anchor3, div_118);
          },
          $$slots: { default: true }
        });
      }
      var node_68 = sibling(node_66, 2);
      {
        var consequent_45 = ($$anchor3) => {
          var div_120 = root_94();
          var div_121 = child(div_120);
          var text_55 = child(div_121, true);
          reset(div_121);
          var div_122 = sibling(div_121, 2);
          var node_69 = child(div_122);
          Switch_1(node_69, {
            get state() {
              return params().use_mmap;
            },
            set state($$value) {
              params(params().use_mmap = $$value, true);
            },
            $$legacy: true
          });
          reset(div_122);
          reset(div_120);
          template_effect(($0) => set_text(text_55, $0), [
            () => (deep_read_state(params()), $i18n(), untrack(() => params().use_mmap ? $i18n().t("Enabled") : $i18n().t("Disabled")))
          ]);
          append($$anchor3, div_120);
        };
        if_block(node_68, ($$render) => {
          if (deep_read_state(params()), untrack(() => {
            var _a;
            return (((_a = params()) == null ? void 0 : _a.use_mmap) ?? null) !== null;
          })) $$render(consequent_45);
        });
      }
      reset(div_117);
      var div_123 = sibling(div_117, 2);
      var node_70 = child(div_123);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Enable Memory Locking (mlock) to prevent model data from being swapped out of RAM. This option locks the model's working set of pages into RAM, ensuring that they will not be swapped out to disk. This can help maintain performance by avoiding page faults and ensuring fast data access."))));
        Tooltip(node_70, {
          get content() {
            return get($0);
          },
          placement: "top-start",
          className: "inline-tooltip",
          children: ($$anchor3, $$slotProps) => {
            var div_124 = root_95();
            var div_125 = child(div_124);
            div_125.textContent = "use_mlock";
            var button_22 = sibling(div_125, 2);
            var node_71 = child(button_22);
            {
              var consequent_46 = ($$anchor4) => {
                var span_47 = root_96();
                var text_56 = child(span_47, true);
                reset(span_47);
                template_effect(($02) => set_text(text_56, $02), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
                append($$anchor4, span_47);
              };
              var alternate_25 = ($$anchor4) => {
                var span_48 = root_97();
                var text_57 = child(span_48, true);
                reset(span_48);
                template_effect(($02) => set_text(text_57, $02), [() => ($i18n(), untrack(() => $i18n().t("Custom")))]);
                append($$anchor4, span_48);
              };
              if_block(node_71, ($$render) => {
                if (deep_read_state(params()), untrack(() => {
                  var _a;
                  return (((_a = params()) == null ? void 0 : _a.use_mlock) ?? null) === null;
                })) $$render(consequent_46);
                else $$render(alternate_25, false);
              });
            }
            reset(button_22);
            reset(div_124);
            event("click", button_22, () => {
              var _a;
              params(params().use_mlock = (((_a = params()) == null ? void 0 : _a.use_mlock) ?? null) === null ? true : null, true);
            });
            append($$anchor3, div_124);
          },
          $$slots: { default: true }
        });
      }
      var node_72 = sibling(node_70, 2);
      {
        var consequent_47 = ($$anchor3) => {
          var div_126 = root_98();
          var div_127 = child(div_126);
          var text_58 = child(div_127, true);
          reset(div_127);
          var div_128 = sibling(div_127, 2);
          var node_73 = child(div_128);
          Switch_1(node_73, {
            get state() {
              return params().use_mlock;
            },
            set state($$value) {
              params(params().use_mlock = $$value, true);
            },
            $$legacy: true
          });
          reset(div_128);
          reset(div_126);
          template_effect(($0) => set_text(text_58, $0), [
            () => (deep_read_state(params()), $i18n(), untrack(() => params().use_mlock ? $i18n().t("Enabled") : $i18n().t("Disabled")))
          ]);
          append($$anchor3, div_126);
        };
        if_block(node_72, ($$render) => {
          if (deep_read_state(params()), untrack(() => {
            var _a;
            return (((_a = params()) == null ? void 0 : _a.use_mlock) ?? null) !== null;
          })) $$render(consequent_47);
        });
      }
      reset(div_123);
      append($$anchor2, fragment_3);
    };
    if_block(node_65, ($$render) => {
      if (admin()) $$render(consequent_48);
    });
  }
  var div_129 = sibling(node_65, 2);
  var node_74 = child(div_129);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("This option enables or disables the use of the reasoning feature in Ollama, which allows the model to think before generating a response. When enabled, the model can take a moment to process the conversation context and generate a more thoughtful response."))));
    Tooltip(node_74, {
      get content() {
        return get($0);
      },
      placement: "top-start",
      className: "inline-tooltip",
      children: ($$anchor2, $$slotProps) => {
        var div_130 = root_99();
        var div_131 = child(div_130);
        var text_59 = child(div_131);
        reset(div_131);
        var button_23 = sibling(div_131, 2);
        var node_75 = child(button_23);
        {
          var consequent_49 = ($$anchor3) => {
            var span_49 = root_100();
            var text_60 = child(span_49, true);
            reset(span_49);
            template_effect(($02) => set_text(text_60, $02), [() => ($i18n(), untrack(() => $i18n().t("On")))]);
            append($$anchor3, span_49);
          };
          var alternate_27 = ($$anchor3) => {
            var fragment_4 = comment();
            var node_76 = first_child(fragment_4);
            {
              var consequent_50 = ($$anchor4) => {
                var span_50 = root_102();
                var text_61 = child(span_50, true);
                reset(span_50);
                template_effect(($02) => set_text(text_61, $02), [() => ($i18n(), untrack(() => $i18n().t("Off")))]);
                append($$anchor4, span_50);
              };
              var alternate_26 = ($$anchor4) => {
                var span_51 = root_103();
                var text_62 = child(span_51, true);
                reset(span_51);
                template_effect(($02) => set_text(text_62, $02), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
                append($$anchor4, span_51);
              };
              if_block(
                node_76,
                ($$render) => {
                  if (deep_read_state(params()), untrack(() => params().think === false)) $$render(consequent_50);
                  else $$render(alternate_26, false);
                },
                true
              );
            }
            append($$anchor3, fragment_4);
          };
          if_block(node_75, ($$render) => {
            if (deep_read_state(params()), untrack(() => params().think === true)) $$render(consequent_49);
            else $$render(alternate_27, false);
          });
        }
        reset(button_23);
        reset(div_130);
        template_effect(($02) => set_text(text_59, `think (${$02 ?? ""})`), [() => ($i18n(), untrack(() => $i18n().t("Ollama")))]);
        event("click", button_23, () => {
          var _a;
          params(params().think = (((_a = params()) == null ? void 0 : _a.think) ?? null) === null ? true : params().think ? false : null, true);
        });
        append($$anchor2, div_130);
      },
      $$slots: { default: true }
    });
  }
  reset(div_129);
  var div_132 = sibling(div_129, 2);
  var node_77 = child(div_132);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("The format to return a response in. Format can be json or a JSON schema."))));
    Tooltip(node_77, {
      get content() {
        return get($0);
      },
      placement: "top-start",
      className: "inline-tooltip",
      children: ($$anchor2, $$slotProps) => {
        var div_133 = root_104();
        var div_134 = child(div_133);
        var text_63 = child(div_134);
        reset(div_134);
        var button_24 = sibling(div_134, 2);
        var node_78 = child(button_24);
        {
          var consequent_51 = ($$anchor3) => {
            var span_52 = root_105();
            var text_64 = child(span_52, true);
            reset(span_52);
            template_effect(($02) => set_text(text_64, $02), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
            append($$anchor3, span_52);
          };
          var alternate_28 = ($$anchor3) => {
            var span_53 = root_106();
            var text_65 = child(span_53, true);
            reset(span_53);
            template_effect(($02) => set_text(text_65, $02), [() => ($i18n(), untrack(() => $i18n().t("JSON")))]);
            append($$anchor3, span_53);
          };
          if_block(node_78, ($$render) => {
            if (deep_read_state(params()), untrack(() => {
              var _a;
              return (((_a = params()) == null ? void 0 : _a.format) ?? null) === null;
            })) $$render(consequent_51);
            else $$render(alternate_28, false);
          });
        }
        reset(button_24);
        reset(div_133);
        template_effect(($02) => set_text(text_63, `format (${$02 ?? ""})`), [() => ($i18n(), untrack(() => $i18n().t("Ollama")))]);
        event("click", button_24, () => {
          var _a;
          params(params().format = (((_a = params()) == null ? void 0 : _a.format) ?? null) === null ? "json" : null, true);
        });
        append($$anchor2, div_133);
      },
      $$slots: { default: true }
    });
  }
  var node_79 = sibling(node_77, 2);
  {
    var consequent_52 = ($$anchor2) => {
      var div_135 = root_107();
      var node_80 = child(div_135);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t('e.g. "json" or a JSON schema'))));
        Textarea(node_80, {
          className: "w-full  text-sm bg-transparent outline-hidden",
          get placeholder() {
            return get($0);
          },
          get value() {
            return params().format;
          },
          set value($$value) {
            params(params().format = $$value, true);
          },
          $$legacy: true
        });
      }
      reset(div_135);
      append($$anchor2, div_135);
    };
    if_block(node_79, ($$render) => {
      if (deep_read_state(params()), untrack(() => {
        var _a;
        return (((_a = params()) == null ? void 0 : _a.format) ?? null) !== null;
      })) $$render(consequent_52);
    });
  }
  reset(div_132);
  var div_136 = sibling(div_132, 2);
  var node_81 = child(div_136);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("This option controls how many tokens are preserved when refreshing the context. For example, if set to 2, the last 2 tokens of the conversation context will be retained. Preserving context can help maintain the continuity of a conversation, but it may reduce the ability to respond to new topics."))));
    Tooltip(node_81, {
      get content() {
        return get($0);
      },
      placement: "top-start",
      className: "inline-tooltip",
      children: ($$anchor2, $$slotProps) => {
        var div_137 = root_108();
        var div_138 = child(div_137);
        var text_66 = child(div_138);
        reset(div_138);
        var button_25 = sibling(div_138, 2);
        var node_82 = child(button_25);
        {
          var consequent_53 = ($$anchor3) => {
            var span_54 = root_109();
            var text_67 = child(span_54, true);
            reset(span_54);
            template_effect(($02) => set_text(text_67, $02), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
            append($$anchor3, span_54);
          };
          var alternate_29 = ($$anchor3) => {
            var span_55 = root_110();
            var text_68 = child(span_55, true);
            reset(span_55);
            template_effect(($02) => set_text(text_68, $02), [() => ($i18n(), untrack(() => $i18n().t("Custom")))]);
            append($$anchor3, span_55);
          };
          if_block(node_82, ($$render) => {
            if (deep_read_state(params()), untrack(() => {
              var _a;
              return (((_a = params()) == null ? void 0 : _a.num_keep) ?? null) === null;
            })) $$render(consequent_53);
            else $$render(alternate_29, false);
          });
        }
        reset(button_25);
        reset(div_137);
        template_effect(($02) => set_text(text_66, `num_keep (${$02 ?? ""})`), [() => ($i18n(), untrack(() => $i18n().t("Ollama")))]);
        event("click", button_25, () => {
          var _a;
          params(params().num_keep = (((_a = params()) == null ? void 0 : _a.num_keep) ?? null) === null ? 24 : null, true);
        });
        append($$anchor2, div_137);
      },
      $$slots: { default: true }
    });
  }
  var node_83 = sibling(node_81, 2);
  {
    var consequent_54 = ($$anchor2) => {
      var div_139 = root_111();
      var div_140 = child(div_139);
      var input_34 = child(div_140);
      remove_input_defaults(input_34);
      reset(div_140);
      var div_141 = sibling(div_140, 2);
      var input_35 = child(div_141);
      remove_input_defaults(input_35);
      reset(div_141);
      reset(div_139);
      bind_value(input_34, () => params().num_keep, ($$value) => params(params().num_keep = $$value, true));
      bind_value(input_35, () => params().num_keep, ($$value) => params(params().num_keep = $$value, true));
      append($$anchor2, div_139);
    };
    if_block(node_83, ($$render) => {
      if (deep_read_state(params()), untrack(() => {
        var _a;
        return (((_a = params()) == null ? void 0 : _a.num_keep) ?? null) !== null;
      })) $$render(consequent_54);
    });
  }
  reset(div_136);
  var div_142 = sibling(div_136, 2);
  var node_84 = child(div_142);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Sets the size of the context window used to generate the next token."))));
    Tooltip(node_84, {
      get content() {
        return get($0);
      },
      placement: "top-start",
      className: "inline-tooltip",
      children: ($$anchor2, $$slotProps) => {
        var div_143 = root_112();
        var div_144 = child(div_143);
        var text_69 = child(div_144);
        reset(div_144);
        var button_26 = sibling(div_144, 2);
        var node_85 = child(button_26);
        {
          var consequent_55 = ($$anchor3) => {
            var span_56 = root_113();
            var text_70 = child(span_56, true);
            reset(span_56);
            template_effect(($02) => set_text(text_70, $02), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
            append($$anchor3, span_56);
          };
          var alternate_30 = ($$anchor3) => {
            var span_57 = root_114();
            var text_71 = child(span_57, true);
            reset(span_57);
            template_effect(($02) => set_text(text_71, $02), [() => ($i18n(), untrack(() => $i18n().t("Custom")))]);
            append($$anchor3, span_57);
          };
          if_block(node_85, ($$render) => {
            if (deep_read_state(params()), untrack(() => {
              var _a;
              return (((_a = params()) == null ? void 0 : _a.num_ctx) ?? null) === null;
            })) $$render(consequent_55);
            else $$render(alternate_30, false);
          });
        }
        reset(button_26);
        reset(div_143);
        template_effect(($02) => set_text(text_69, `num_ctx (${$02 ?? ""})`), [() => ($i18n(), untrack(() => $i18n().t("Ollama")))]);
        event("click", button_26, () => {
          var _a;
          params(params().num_ctx = (((_a = params()) == null ? void 0 : _a.num_ctx) ?? null) === null ? 2048 : null, true);
        });
        append($$anchor2, div_143);
      },
      $$slots: { default: true }
    });
  }
  var node_86 = sibling(node_84, 2);
  {
    var consequent_56 = ($$anchor2) => {
      var div_145 = root_115();
      var div_146 = child(div_145);
      var input_36 = child(div_146);
      remove_input_defaults(input_36);
      reset(div_146);
      var div_147 = sibling(div_146, 2);
      var input_37 = child(div_147);
      remove_input_defaults(input_37);
      reset(div_147);
      reset(div_145);
      bind_value(input_36, () => params().num_ctx, ($$value) => params(params().num_ctx = $$value, true));
      bind_value(input_37, () => params().num_ctx, ($$value) => params(params().num_ctx = $$value, true));
      append($$anchor2, div_145);
    };
    if_block(node_86, ($$render) => {
      if (deep_read_state(params()), untrack(() => {
        var _a;
        return (((_a = params()) == null ? void 0 : _a.num_ctx) ?? null) !== null;
      })) $$render(consequent_56);
    });
  }
  reset(div_142);
  var div_148 = sibling(div_142, 2);
  var node_87 = child(div_148);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("The batch size determines how many text requests are processed together at once. A higher batch size can increase the performance and speed of the model, but it also requires more memory."))));
    Tooltip(node_87, {
      get content() {
        return get($0);
      },
      placement: "top-start",
      className: "inline-tooltip",
      children: ($$anchor2, $$slotProps) => {
        var div_149 = root_116();
        var div_150 = child(div_149);
        var text_72 = child(div_150);
        reset(div_150);
        var button_27 = sibling(div_150, 2);
        var node_88 = child(button_27);
        {
          var consequent_57 = ($$anchor3) => {
            var span_58 = root_117();
            var text_73 = child(span_58, true);
            reset(span_58);
            template_effect(($02) => set_text(text_73, $02), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
            append($$anchor3, span_58);
          };
          var alternate_31 = ($$anchor3) => {
            var span_59 = root_118();
            var text_74 = child(span_59, true);
            reset(span_59);
            template_effect(($02) => set_text(text_74, $02), [() => ($i18n(), untrack(() => $i18n().t("Custom")))]);
            append($$anchor3, span_59);
          };
          if_block(node_88, ($$render) => {
            if (deep_read_state(params()), untrack(() => {
              var _a;
              return (((_a = params()) == null ? void 0 : _a.num_batch) ?? null) === null;
            })) $$render(consequent_57);
            else $$render(alternate_31, false);
          });
        }
        reset(button_27);
        reset(div_149);
        template_effect(($02) => set_text(text_72, `num_batch (${$02 ?? ""})`), [() => ($i18n(), untrack(() => $i18n().t("Ollama")))]);
        event("click", button_27, () => {
          var _a;
          params(params().num_batch = (((_a = params()) == null ? void 0 : _a.num_batch) ?? null) === null ? 512 : null, true);
        });
        append($$anchor2, div_149);
      },
      $$slots: { default: true }
    });
  }
  var node_89 = sibling(node_87, 2);
  {
    var consequent_58 = ($$anchor2) => {
      var div_151 = root_119();
      var div_152 = child(div_151);
      var input_38 = child(div_152);
      remove_input_defaults(input_38);
      reset(div_152);
      var div_153 = sibling(div_152, 2);
      var input_39 = child(div_153);
      remove_input_defaults(input_39);
      reset(div_153);
      reset(div_151);
      bind_value(input_38, () => params().num_batch, ($$value) => params(params().num_batch = $$value, true));
      bind_value(input_39, () => params().num_batch, ($$value) => params(params().num_batch = $$value, true));
      append($$anchor2, div_151);
    };
    if_block(node_89, ($$render) => {
      if (deep_read_state(params()), untrack(() => {
        var _a;
        return (((_a = params()) == null ? void 0 : _a.num_batch) ?? null) !== null;
      })) $$render(consequent_58);
    });
  }
  reset(div_148);
  var node_90 = sibling(div_148, 2);
  {
    var consequent_66 = ($$anchor2) => {
      var fragment_5 = root_120();
      var div_154 = first_child(fragment_5);
      var node_91 = child(div_154);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Set the number of worker threads used for computation. This option controls how many threads are used to process incoming requests concurrently. Increasing this value can improve performance under high concurrency workloads but may also consume more CPU resources."))));
        Tooltip(node_91, {
          get content() {
            return get($0);
          },
          placement: "top-start",
          className: "inline-tooltip",
          children: ($$anchor3, $$slotProps) => {
            var div_155 = root_121();
            var div_156 = child(div_155);
            var text_75 = child(div_156);
            reset(div_156);
            var button_28 = sibling(div_156, 2);
            var node_92 = child(button_28);
            {
              var consequent_59 = ($$anchor4) => {
                var span_60 = root_122();
                var text_76 = child(span_60, true);
                reset(span_60);
                template_effect(($02) => set_text(text_76, $02), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
                append($$anchor4, span_60);
              };
              var alternate_32 = ($$anchor4) => {
                var span_61 = root_123();
                var text_77 = child(span_61, true);
                reset(span_61);
                template_effect(($02) => set_text(text_77, $02), [() => ($i18n(), untrack(() => $i18n().t("Custom")))]);
                append($$anchor4, span_61);
              };
              if_block(node_92, ($$render) => {
                if (deep_read_state(params()), untrack(() => {
                  var _a;
                  return (((_a = params()) == null ? void 0 : _a.num_thread) ?? null) === null;
                })) $$render(consequent_59);
                else $$render(alternate_32, false);
              });
            }
            reset(button_28);
            reset(div_155);
            template_effect(($02) => set_text(text_75, `num_thread (${$02 ?? ""})`), [() => ($i18n(), untrack(() => $i18n().t("Ollama")))]);
            event("click", button_28, () => {
              var _a;
              params(params().num_thread = (((_a = params()) == null ? void 0 : _a.num_thread) ?? null) === null ? 2 : null, true);
            });
            append($$anchor3, div_155);
          },
          $$slots: { default: true }
        });
      }
      var node_93 = sibling(node_91, 2);
      {
        var consequent_60 = ($$anchor3) => {
          var div_157 = root_124();
          var div_158 = child(div_157);
          var input_40 = child(div_158);
          remove_input_defaults(input_40);
          reset(div_158);
          var div_159 = sibling(div_158, 2);
          var input_41 = child(div_159);
          remove_input_defaults(input_41);
          reset(div_159);
          reset(div_157);
          bind_value(input_40, () => params().num_thread, ($$value) => params(params().num_thread = $$value, true));
          bind_value(input_41, () => params().num_thread, ($$value) => params(params().num_thread = $$value, true));
          append($$anchor3, div_157);
        };
        if_block(node_93, ($$render) => {
          if (deep_read_state(params()), untrack(() => {
            var _a;
            return (((_a = params()) == null ? void 0 : _a.num_thread) ?? null) !== null;
          })) $$render(consequent_60);
        });
      }
      reset(div_154);
      var div_160 = sibling(div_154, 2);
      var node_94 = child(div_160);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Set the number of layers, which will be off-loaded to GPU. Increasing this value can significantly improve performance for models that are optimized for GPU acceleration but may also consume more power and GPU resources."))));
        Tooltip(node_94, {
          get content() {
            return get($0);
          },
          placement: "top-start",
          className: "inline-tooltip",
          children: ($$anchor3, $$slotProps) => {
            var div_161 = root_125();
            var div_162 = child(div_161);
            var text_78 = child(div_162);
            reset(div_162);
            var button_29 = sibling(div_162, 2);
            var node_95 = child(button_29);
            {
              var consequent_61 = ($$anchor4) => {
                var span_62 = root_126();
                var text_79 = child(span_62, true);
                reset(span_62);
                template_effect(($02) => set_text(text_79, $02), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
                append($$anchor4, span_62);
              };
              var alternate_33 = ($$anchor4) => {
                var span_63 = root_127();
                var text_80 = child(span_63, true);
                reset(span_63);
                template_effect(($02) => set_text(text_80, $02), [() => ($i18n(), untrack(() => $i18n().t("Custom")))]);
                append($$anchor4, span_63);
              };
              if_block(node_95, ($$render) => {
                if (deep_read_state(params()), untrack(() => {
                  var _a;
                  return (((_a = params()) == null ? void 0 : _a.num_gpu) ?? null) === null;
                })) $$render(consequent_61);
                else $$render(alternate_33, false);
              });
            }
            reset(button_29);
            reset(div_161);
            template_effect(($02) => set_text(text_78, `num_gpu (${$02 ?? ""})`), [() => ($i18n(), untrack(() => $i18n().t("Ollama")))]);
            event("click", button_29, () => {
              var _a;
              params(params().num_gpu = (((_a = params()) == null ? void 0 : _a.num_gpu) ?? null) === null ? 0 : null, true);
            });
            append($$anchor3, div_161);
          },
          $$slots: { default: true }
        });
      }
      var node_96 = sibling(node_94, 2);
      {
        var consequent_62 = ($$anchor3) => {
          var div_163 = root_128();
          var div_164 = child(div_163);
          var input_42 = child(div_164);
          remove_input_defaults(input_42);
          reset(div_164);
          var div_165 = sibling(div_164, 2);
          var input_43 = child(div_165);
          remove_input_defaults(input_43);
          reset(div_165);
          reset(div_163);
          bind_value(input_42, () => params().num_gpu, ($$value) => params(params().num_gpu = $$value, true));
          bind_value(input_43, () => params().num_gpu, ($$value) => params(params().num_gpu = $$value, true));
          append($$anchor3, div_163);
        };
        if_block(node_96, ($$render) => {
          if (deep_read_state(params()), untrack(() => {
            var _a;
            return (((_a = params()) == null ? void 0 : _a.num_gpu) ?? null) !== null;
          })) $$render(consequent_62);
        });
      }
      reset(div_160);
      var div_166 = sibling(div_160, 2);
      var node_97 = child(div_166);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("This option controls how long the model will stay loaded into memory following the request (default: 5m)"))));
        Tooltip(node_97, {
          get content() {
            return get($0);
          },
          placement: "top-start",
          className: "inline-tooltip",
          children: ($$anchor3, $$slotProps) => {
            var div_167 = root_129();
            var div_168 = child(div_167);
            var text_81 = child(div_168);
            reset(div_168);
            var button_30 = sibling(div_168, 2);
            var node_98 = child(button_30);
            {
              var consequent_63 = ($$anchor4) => {
                var span_64 = root_130();
                var text_82 = child(span_64, true);
                reset(span_64);
                template_effect(($02) => set_text(text_82, $02), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
                append($$anchor4, span_64);
              };
              var alternate_34 = ($$anchor4) => {
                var span_65 = root_131();
                var text_83 = child(span_65, true);
                reset(span_65);
                template_effect(($02) => set_text(text_83, $02), [() => ($i18n(), untrack(() => $i18n().t("Custom")))]);
                append($$anchor4, span_65);
              };
              if_block(node_98, ($$render) => {
                if (deep_read_state(params()), untrack(() => {
                  var _a;
                  return (((_a = params()) == null ? void 0 : _a.keep_alive) ?? null) === null;
                })) $$render(consequent_63);
                else $$render(alternate_34, false);
              });
            }
            reset(button_30);
            reset(div_167);
            template_effect(($02) => set_text(text_81, `keep_alive (${$02 ?? ""})`), [() => ($i18n(), untrack(() => $i18n().t("Ollama")))]);
            event("click", button_30, () => {
              var _a;
              params(params().keep_alive = (((_a = params()) == null ? void 0 : _a.keep_alive) ?? null) === null ? "5m" : null, true);
            });
            append($$anchor3, div_167);
          },
          $$slots: { default: true }
        });
      }
      var node_99 = sibling(node_97, 2);
      {
        var consequent_64 = ($$anchor3) => {
          var div_169 = root_132();
          var input_44 = child(div_169);
          remove_input_defaults(input_44);
          reset(div_169);
          template_effect(($0) => set_attribute(input_44, "placeholder", $0), [
            () => ($i18n(), untrack(() => $i18n().t("e.g. '30s','10m'. Valid time units are 's', 'm', 'h'.")))
          ]);
          bind_value(input_44, () => params().keep_alive, ($$value) => params(params().keep_alive = $$value, true));
          append($$anchor3, div_169);
        };
        if_block(node_99, ($$render) => {
          if (deep_read_state(params()), untrack(() => {
            var _a;
            return (((_a = params()) == null ? void 0 : _a.keep_alive) ?? null) !== null;
          })) $$render(consequent_64);
        });
      }
      reset(div_166);
      var node_100 = sibling(div_166, 2);
      {
        var consequent_65 = ($$anchor3) => {
          var div_170 = root_133();
          var node_101 = child(div_170);
          each(
            node_101,
            1,
            () => (deep_read_state(params()), untrack(() => {
              var _a;
              return Object.keys(((_a = params()) == null ? void 0 : _a.custom_params) ?? {});
            })),
            index,
            ($$anchor4, key) => {
              var div_171 = root_134();
              var div_172 = child(div_171);
              var div_173 = child(div_172);
              var input_45 = child(div_173);
              remove_input_defaults(input_45);
              reset(div_173);
              var button_31 = sibling(div_173, 2);
              var text_84 = child(button_31, true);
              reset(button_31);
              reset(div_172);
              var div_174 = sibling(div_172, 2);
              var div_175 = child(div_174);
              var input_46 = child(div_175);
              remove_input_defaults(input_46);
              reset(div_175);
              reset(div_174);
              reset(div_171);
              template_effect(
                ($0, $1, $2) => {
                  set_attribute(input_45, "placeholder", $0);
                  set_value(input_45, get(key));
                  set_text(text_84, $1);
                  set_attribute(input_46, "placeholder", $2);
                },
                [
                  () => ($i18n(), untrack(() => $i18n().t("Custom Parameter Name"))),
                  () => ($i18n(), untrack(() => $i18n().t("Remove"))),
                  () => ($i18n(), untrack(() => $i18n().t("Custom Parameter Value")))
                ]
              );
              event("change", input_45, (e) => {
                const newKey = e.target.value.trim();
                if (newKey && newKey !== get(key)) {
                  params(params().custom_params[newKey] = params().custom_params[get(key)], true);
                  delete params().custom_params[get(key)];
                  params({ ...params(), custom_params: { ...params().custom_params } });
                }
              });
              event("click", button_31, () => {
                delete params().custom_params[get(key)];
                params({ ...params(), custom_params: { ...params().custom_params } });
              });
              bind_value(input_46, () => params().custom_params[get(key)], ($$value) => params(params().custom_params[get(key)] = $$value, true));
              append($$anchor4, div_171);
            }
          );
          var button_32 = sibling(node_101, 2);
          var div_176 = child(button_32);
          var node_102 = child(div_176);
          Plus(node_102, {});
          reset(div_176);
          var div_177 = sibling(div_176, 2);
          var text_85 = child(div_177, true);
          reset(div_177);
          reset(button_32);
          reset(div_170);
          template_effect(($0) => set_text(text_85, $0), [
            () => ($i18n(), untrack(() => $i18n().t("Add Custom Parameter")))
          ]);
          event("click", button_32, () => {
            var _a;
            params(params().custom_params = (((_a = params()) == null ? void 0 : _a.custom_params) ?? {}) || {}, true);
            params(params().custom_params["custom_param_name"] = "custom_param_value", true);
          });
          append($$anchor3, div_170);
        };
        if_block(node_100, ($$render) => {
          if (custom() && admin()) $$render(consequent_65);
        });
      }
      append($$anchor2, fragment_5);
    };
    if_block(node_90, ($$render) => {
      if (admin()) $$render(consequent_66);
    });
  }
  reset(div);
  append($$anchor, div);
  pop();
  $$cleanup();
}
export {
  AdvancedParams as A,
  Knowledge as K
};
