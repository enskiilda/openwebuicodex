import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, n as createEventDispatcher, g as getContext, c as child, f as first_child, e as sibling, r as reset, t as template_effect, u as untrack, s as set, m as mutable_source, b as get, h as derived_safe_equal, a as pop, o as onMount, l as legacy_pre_effect, j as legacy_pre_effect_reset, d as deferred_template_effect, $ as $document, k as tick, q as next, i as deep_read_state } from "../chunks/BxIY6ir7.js";
import { s as set_text, e as event } from "../chunks/cBADewWV.js";
import { e as each, i as index } from "../chunks/7_HZMPNF.js";
import { i as if_block } from "../chunks/BoSuMvtf.js";
import { f as from_html, a as append, c as comment, t as text } from "../chunks/CAbo1QWi.js";
import { h as head } from "../chunks/Cb8chUSZ.js";
import { r as remove_input_defaults, a as set_attribute } from "../chunks/kXiCYuyj.js";
import { b as bind_value } from "../chunks/DVLuwGai.js";
import { b as bind_this } from "../chunks/D16JuV5t.js";
import { i as init } from "../chunks/ByqEASoO.js";
import { a as store_get, s as setup_stores } from "../chunks/BvQ5O7-v.js";
import { F as Fuse } from "../chunks/AFl3itOE.js";
import { d as dayjs2, r as relativeTime } from "../chunks/OO7lCI-F.js";
import { t as toast } from "../chunks/BccDN__m.js";
import { W as WEBUI_NAME, u as user, k as knowledge } from "../chunks/2Yg1sHDo.js";
import { a as getKnowledgeBaseList, d as deleteKnowledgeById, g as getKnowledgeBases } from "../chunks/C_BzFfir.js";
import { g as goto } from "../chunks/h-B6Md2q.js";
import { j as capitalizeFirstLetter } from "../chunks/Bh-hrM1w.js";
import { C as ConfirmDialog } from "../chunks/DhVOSDv1.js";
import { s as slot } from "../chunks/CZEGIGsR.js";
import { p as prop } from "../chunks/BRmGPDvq.js";
import "../chunks/C2A39Ney.js";
import { b as Menu_content, c as Menu_item } from "../chunks/DQmZL-p0.js";
import { f as flyAndScale } from "../chunks/BuLNlPfL.js";
import { D as Dropdown } from "../chunks/NbBmD2S8.js";
import { G as GarbageBin } from "../chunks/C_eYBUEf.js";
import { T as Tooltip } from "../chunks/BHXWufQb.js";
import { E as EllipsisHorizontal } from "../chunks/BC-suBaL.js";
import { B as Badge } from "../chunks/DGk_635a.js";
import { S as Search } from "../chunks/2ixn6gs3.js";
import { P as Plus } from "../chunks/F9_n4pHG.js";
import { S as Spinner } from "../chunks/CtnI4RVL.js";
import { X as XMark } from "../chunks/CUUSX84-.js";
import { V as ViewSelector } from "../chunks/ConyMNx9.js";
var root_3$1 = from_html(`<button class="self-center w-fit text-sm p-1.5 dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl" type="button"><!></button>`);
var root_6$1 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_4$1 = from_html(`<div slot="content"><!></div>`);
function ItemMenu($$anchor, $$props) {
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
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("More"))));
        Tooltip($$anchor2, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_2 = comment();
            var node = first_child(fragment_2);
            slot(node, $$props, "default", {}, ($$anchor4) => {
              var button = root_3$1();
              var node_1 = child(button);
              EllipsisHorizontal(node_1, { className: "size-5" });
              reset(button);
              event("click", button, (e) => {
                e.stopPropagation();
                set(show, true);
              });
              append($$anchor4, button);
            });
            append($$anchor3, fragment_2);
          },
          $$slots: { default: true }
        });
      }
    },
    $$slots: {
      default: true,
      content: ($$anchor2, $$slotProps) => {
        var div = root_4$1();
        var node_2 = child(div);
        Menu_content(node_2, {
          class: "w-full max-w-[170px] rounded-2xl px-1 py-1 border border-gray-100  dark:border-gray-800 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg",
          side: "bottom",
          align: "end",
          get transition() {
            return flyAndScale;
          },
          children: ($$anchor3, $$slotProps2) => {
            Menu_item($$anchor3, {
              class: "flex  gap-2  items-center px-3 py-1.5 text-sm   cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
              $$events: {
                click: () => {
                  dispatch("delete");
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_4 = root_6$1();
                var node_3 = first_child(fragment_4);
                GarbageBin(node_3, {});
                var div_1 = sibling(node_3, 2);
                var text2 = child(div_1, true);
                reset(div_1);
                template_effect(($0) => set_text(text2, $0), [() => ($i18n(), untrack(() => $i18n().t("Delete")))]);
                append($$anchor4, fragment_4);
              },
              $$slots: { default: true }
            });
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
var root_3 = from_html(`<div class="self-center pl-1.5 translate-y-[0.5px] rounded-l-xl bg-transparent"><button class="p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition"><!></button></div>`);
var root_6 = from_html(`<button class=" flex space-x-4 cursor-pointer text-left w-full px-3 py-2.5 dark:hover:bg-gray-850/50 hover:bg-gray-50 transition rounded-2xl"><div class=" w-full"><div class=" self-center flex-1"><div class="flex items-center justify-between -my-1"><div class=" flex gap-2 items-center"><div><!></div> <div class=" text-xs text-gray-500 line-clamp-1"> </div></div> <div class="flex items-center gap-2"><div class=" flex self-center"><!></div></div></div> <div class=" flex items-center gap-1 justify-between px-1.5"><div class=" flex items-center gap-2"><div class=" text-sm font-medium line-clamp-1 capitalize"> </div></div> <div><div class="text-xs text-gray-500"><!></div></div></div></div></div></button>`);
var root_4 = from_html(`<div class=" my-2 px-3 grid grid-cols-1 lg:grid-cols-2 gap-2"></div>`);
var root_10 = from_html(`<div class=" w-full h-full flex flex-col justify-center items-center my-16 mb-24"><div class="max-w-md text-center"><div class=" text-3xl mb-3">😕</div> <div class=" text-lg font-medium mb-1"> </div> <div class=" text-gray-500 text-center text-xs"> </div></div></div>`);
var root_2 = from_html(`<!> <div class="flex flex-col gap-1 px-1 mt-1.5 mb-3"><div class="flex justify-between items-center"><div class="flex items-center md:self-center text-xl font-medium px-0.5 gap-2 shrink-0"><div> </div> <div class="text-lg font-medium text-gray-500 dark:text-gray-500"> </div></div> <div class="flex w-full justify-end gap-1.5"><a class=" px-2 py-1.5 rounded-xl bg-black text-white dark:bg-white dark:text-black transition font-medium text-sm flex items-center" href="/workspace/knowledge/create"><!> <div class=" hidden md:block md:ml-1 text-xs"> </div></a></div></div></div> <div class="py-2 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-850"><div class=" flex w-full space-x-2 py-0.5 px-3.5 pb-2"><div class="flex flex-1"><div class=" self-center ml-1 mr-3"><!></div> <input class=" w-full text-sm py-1 rounded-r-xl outline-hidden bg-transparent"/> <!></div></div> <div class="px-3 flex w-full bg-transparent overflow-x-auto scrollbar-none -mx-1"><div class="flex gap-0.5 w-fit text-center text-sm rounded-full bg-transparent px-1.5 whitespace-nowrap"><!></div></div> <!></div> <div class=" text-gray-500 text-xs m-2"> </div>`, 1);
var root_11 = from_html(`<div class="w-full h-full flex justify-center items-center"><!></div>`);
function Knowledge($$anchor, $$props) {
  push($$props, false);
  const $user = () => store_get(user, "$user", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $WEBUI_NAME = () => store_get(WEBUI_NAME, "$WEBUI_NAME", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  dayjs2.extend(relativeTime);
  const i18n = getContext("i18n");
  let loaded = mutable_source(false);
  let query = mutable_source("");
  let selectedItem = mutable_source(null);
  let showDeleteConfirm = mutable_source(false);
  let tagsContainerElement = mutable_source();
  let viewOption = mutable_source("");
  let fuse = mutable_source(null);
  let knowledgeBases = mutable_source([]);
  let items = [];
  let filteredItems = mutable_source([]);
  const setFuse = async () => {
    items = get(knowledgeBases).filter((item) => {
      var _a, _b;
      return get(viewOption) === "" || get(viewOption) === "created" && item.user_id === ((_a = $user()) == null ? void 0 : _a.id) || get(viewOption) === "shared" && item.user_id !== ((_b = $user()) == null ? void 0 : _b.id);
    });
    set(fuse, new Fuse(items, {
      keys: [
        "name",
        "description",
        "user.name",
        // Ensures Fuse looks into item.user.name
        "user.email"
        // Ensures Fuse looks into item.user.email
      ],
      threshold: 0.3
    }));
    await tick();
    setFilteredItems();
  };
  const setFilteredItems = () => {
    set(filteredItems, get(query) ? get(fuse).search(get(query)).map((result) => result.item) : items);
  };
  const deleteHandler = async (item) => {
    const res = await deleteKnowledgeById(localStorage.token, item.id).catch((e) => {
      toast.error(`${e}`);
    });
    if (res) {
      set(knowledgeBases, await getKnowledgeBaseList(localStorage.token));
      knowledge.set(await getKnowledgeBases(localStorage.token));
      toast.success($i18n().t("Knowledge deleted successfully."));
    }
  };
  onMount(async () => {
    set(viewOption, (localStorage == null ? void 0 : localStorage.workspaceViewOption) || "");
    set(knowledgeBases, await getKnowledgeBaseList(localStorage.token));
    set(loaded, true);
  });
  legacy_pre_effect(() => (get(knowledgeBases), get(viewOption)), () => {
    if (get(knowledgeBases).length > 0 && get(viewOption) !== void 0) {
      setFuse();
    } else {
      set(
        fuse,
        null
        // Reset fuse if knowledgeBases is empty
      );
    }
  });
  legacy_pre_effect(() => (get(query), get(fuse)), () => {
    if (get(query) !== void 0 && get(fuse)) {
      setFilteredItems();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  head("ovc1wm", ($$anchor2) => {
    deferred_template_effect(
      ($0) => {
        $document.title = `
		${$0 ?? ""} • ${$WEBUI_NAME() ?? ""}
	`;
      },
      [() => ($i18n(), untrack(() => $i18n().t("Knowledge")))]
    );
  });
  var node = first_child(fragment);
  {
    var consequent_3 = ($$anchor2) => {
      var fragment_1 = root_2();
      var node_1 = first_child(fragment_1);
      ConfirmDialog(node_1, {
        get show() {
          return get(showDeleteConfirm);
        },
        set show($$value) {
          set(showDeleteConfirm, $$value);
        },
        $$events: {
          confirm: () => {
            deleteHandler(get(selectedItem));
          }
        },
        $$legacy: true
      });
      var div = sibling(node_1, 2);
      var div_1 = child(div);
      var div_2 = child(div_1);
      var div_3 = child(div_2);
      var text$1 = child(div_3, true);
      reset(div_3);
      var div_4 = sibling(div_3, 2);
      var text_1 = child(div_4, true);
      reset(div_4);
      reset(div_2);
      var div_5 = sibling(div_2, 2);
      var a = child(div_5);
      var node_2 = child(a);
      Plus(node_2, { className: "size-3", strokeWidth: "2.5" });
      var div_6 = sibling(node_2, 2);
      var text_2 = child(div_6, true);
      reset(div_6);
      reset(a);
      reset(div_5);
      reset(div_1);
      reset(div);
      var div_7 = sibling(div, 2);
      var div_8 = child(div_7);
      var div_9 = child(div_8);
      var div_10 = child(div_9);
      var node_3 = child(div_10);
      Search(node_3, { className: "size-3.5" });
      reset(div_10);
      var input = sibling(div_10, 2);
      remove_input_defaults(input);
      var node_4 = sibling(input, 2);
      {
        var consequent = ($$anchor3) => {
          var div_11 = root_3();
          var button = child(div_11);
          var node_5 = child(button);
          XMark(node_5, { className: "size-3", strokeWidth: "2" });
          reset(button);
          reset(div_11);
          event("click", button, () => {
            set(query, "");
          });
          append($$anchor3, div_11);
        };
        if_block(node_4, ($$render) => {
          if (get(query)) $$render(consequent);
        });
      }
      reset(div_9);
      reset(div_8);
      var div_12 = sibling(div_8, 2);
      var div_13 = child(div_12);
      var node_6 = child(div_13);
      ViewSelector(node_6, {
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
      reset(div_13);
      bind_this(div_13, ($$value) => set(tagsContainerElement, $$value), () => get(tagsContainerElement));
      reset(div_12);
      var node_7 = sibling(div_12, 2);
      {
        var consequent_2 = ($$anchor3) => {
          var div_14 = root_4();
          each(div_14, 5, () => get(filteredItems), index, ($$anchor4, item) => {
            {
              let $0 = derived_safe_equal(() => (get(item), untrack(() => {
                var _a;
                return ((_a = get(item)) == null ? void 0 : _a.description) ?? get(item).name;
              })));
              Tooltip($$anchor4, {
                get content() {
                  return get($0);
                },
                children: ($$anchor5, $$slotProps) => {
                  var button_1 = root_6();
                  var div_15 = child(button_1);
                  var div_16 = child(div_15);
                  var div_17 = child(div_16);
                  var div_18 = child(div_17);
                  var div_19 = child(div_18);
                  var node_8 = child(div_19);
                  {
                    var consequent_1 = ($$anchor6) => {
                      {
                        let $02 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Document"))));
                        Badge($$anchor6, {
                          type: "muted",
                          get content() {
                            return get($02);
                          }
                        });
                      }
                    };
                    var alternate = ($$anchor6) => {
                      {
                        let $02 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Collection"))));
                        Badge($$anchor6, {
                          type: "success",
                          get content() {
                            return get($02);
                          }
                        });
                      }
                    };
                    if_block(node_8, ($$render) => {
                      if (get(item), untrack(() => {
                        var _a, _b;
                        return (_b = (_a = get(item)) == null ? void 0 : _a.meta) == null ? void 0 : _b.document;
                      })) $$render(consequent_1);
                      else $$render(alternate, false);
                    });
                  }
                  reset(div_19);
                  var div_20 = sibling(div_19, 2);
                  var text_3 = child(div_20);
                  reset(div_20);
                  reset(div_18);
                  var div_21 = sibling(div_18, 2);
                  var div_22 = child(div_21);
                  var node_9 = child(div_22);
                  ItemMenu(node_9, {
                    $$events: {
                      delete: () => {
                        set(selectedItem, get(item));
                        set(showDeleteConfirm, true);
                      }
                    }
                  });
                  reset(div_22);
                  reset(div_21);
                  reset(div_17);
                  var div_23 = sibling(div_17, 2);
                  var div_24 = child(div_23);
                  var div_25 = child(div_24);
                  var text_4 = child(div_25, true);
                  reset(div_25);
                  reset(div_24);
                  var div_26 = sibling(div_24, 2);
                  var div_27 = child(div_26);
                  var node_10 = child(div_27);
                  {
                    let $02 = derived_safe_equal(() => (get(item), $i18n(), untrack(() => {
                      var _a, _b;
                      return ((_b = (_a = get(item)) == null ? void 0 : _a.user) == null ? void 0 : _b.email) ?? $i18n().t("Deleted User");
                    })));
                    Tooltip(node_10, {
                      get content() {
                        return get($02);
                      },
                      className: "flex shrink-0",
                      placement: "top-start",
                      children: ($$anchor6, $$slotProps2) => {
                        next();
                        var text_5 = text();
                        template_effect(($03) => set_text(text_5, $03), [
                          () => ($i18n(), deep_read_state(capitalizeFirstLetter), get(item), untrack(() => {
                            var _a, _b, _c, _d;
                            return $i18n().t("By {{name}}", {
                              name: capitalizeFirstLetter(((_b = (_a = get(item)) == null ? void 0 : _a.user) == null ? void 0 : _b.name) ?? ((_d = (_c = get(item)) == null ? void 0 : _c.user) == null ? void 0 : _d.email) ?? $i18n().t("Deleted User"))
                            });
                          }))
                        ]);
                        append($$anchor6, text_5);
                      },
                      $$slots: { default: true }
                    });
                  }
                  reset(div_27);
                  reset(div_26);
                  reset(div_23);
                  reset(div_16);
                  reset(div_15);
                  reset(button_1);
                  template_effect(
                    ($02, $1) => {
                      set_text(text_3, `${$02 ?? ""}
												${$1 ?? ""}`);
                      set_text(text_4, (get(item), untrack(() => get(item).name)));
                    },
                    [
                      () => ($i18n(), untrack(() => $i18n().t("Updated"))),
                      () => (deep_read_state(dayjs2), get(item), untrack(() => dayjs2(get(item).updated_at * 1e3).fromNow()))
                    ]
                  );
                  event("click", button_1, () => {
                    var _a, _b;
                    if ((_b = (_a = get(item)) == null ? void 0 : _a.meta) == null ? void 0 : _b.document) {
                      toast.error($i18n().t("Only collections can be edited, create a new knowledge base to edit/add documents."));
                    } else {
                      goto(`/workspace/knowledge/${get(item).id}`);
                    }
                  });
                  append($$anchor5, button_1);
                },
                $$slots: { default: true }
              });
            }
          });
          reset(div_14);
          append($$anchor3, div_14);
        };
        var alternate_1 = ($$anchor3) => {
          var div_28 = root_10();
          var div_29 = child(div_28);
          var div_30 = sibling(child(div_29), 2);
          var text_6 = child(div_30, true);
          reset(div_30);
          var div_31 = sibling(div_30, 2);
          var text_7 = child(div_31, true);
          reset(div_31);
          reset(div_29);
          reset(div_28);
          template_effect(
            ($0, $1) => {
              set_text(text_6, $0);
              set_text(text_7, $1);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("No knowledge found"))),
              () => ($i18n(), untrack(() => $i18n().t("Try adjusting your search or filter to find what you are looking for.")))
            ]
          );
          append($$anchor3, div_28);
        };
        if_block(node_7, ($$render) => {
          if (get(filteredItems), untrack(() => (get(filteredItems) ?? []).length !== 0)) $$render(consequent_2);
          else $$render(alternate_1, false);
        });
      }
      reset(div_7);
      var div_32 = sibling(div_7, 2);
      var text_8 = child(div_32);
      reset(div_32);
      template_effect(
        ($0, $1, $2, $3) => {
          set_text(text$1, $0);
          set_text(text_1, (get(filteredItems), untrack(() => get(filteredItems).length)));
          set_text(text_2, $1);
          set_attribute(input, "placeholder", $2);
          set_text(text_8, `ⓘ ${$3 ?? ""}`);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Knowledge"))),
          () => ($i18n(), untrack(() => $i18n().t("New Knowledge"))),
          () => ($i18n(), untrack(() => $i18n().t("Search Knowledge"))),
          () => ($i18n(), untrack(() => $i18n().t("Use '#' in the prompt input to load and include your knowledge.")))
        ]
      );
      bind_value(input, () => get(query), ($$value) => set(query, $$value));
      event("wheel", div_12, (e) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          e.currentTarget.scrollLeft += e.deltaY;
        }
      });
      append($$anchor2, fragment_1);
    };
    var alternate_2 = ($$anchor2) => {
      var div_33 = root_11();
      var node_11 = child(div_33);
      Spinner(node_11, { className: "size-5" });
      reset(div_33);
      append($$anchor2, div_33);
    };
    if_block(node, ($$render) => {
      if (get(loaded)) $$render(consequent_3);
      else $$render(alternate_2, false);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
function _page($$anchor) {
  Knowledge($$anchor, {});
}
export {
  _page as component
};
