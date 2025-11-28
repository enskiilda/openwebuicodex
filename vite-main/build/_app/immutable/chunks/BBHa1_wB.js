import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, g as getContext, f as first_child, e as sibling, c as child, r as reset, t as template_effect, u as untrack, a as pop } from "./BxIY6ir7.js";
import { s as set_text } from "./cBADewWV.js";
import { f as from_html, c as comment, a as append } from "./CAbo1QWi.js";
import { i as if_block } from "./BoSuMvtf.js";
import { s as slot } from "./CZEGIGsR.js";
import { i as init } from "./ByqEASoO.js";
import { p as prop } from "./BRmGPDvq.js";
import { a as store_get, s as setup_stores } from "./BvQ5O7-v.js";
import "./C2A39Ney.js";
import { M as Menu_sub, a as Menu_sub_trigger, b as Menu_sub_content } from "./DIObiElu.js";
import { M as Menu, a as Menu_trigger, b as Menu_content, c as Menu_item } from "./DQmZL-p0.js";
import { f as flyAndScale } from "./BuLNlPfL.js";
import { f as fade } from "./BNZI2i79.js";
import "./2Yg1sHDo.js";
import "./bQFTtKkZ.js";
import { D as Download } from "./Dm1xcaSj.js";
import { G as GarbageBin } from "./C_eYBUEf.js";
import { D as DocumentDuplicate } from "./D4EXptqs.js";
import { S as Share } from "./BK4529jj.js";
import { L as Link } from "./EZxqw5-p.js";
var root_6 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_8 = from_html(`<div class="flex items-center line-clamp-1"> </div>`);
var root_9 = from_html(`<div class="flex items-center line-clamp-1"> </div>`);
var root_10 = from_html(`<div class="flex items-center line-clamp-1"> </div>`);
var root_7 = from_html(`<!> <!> <!>`, 1);
var root_5 = from_html(`<!> <!>`, 1);
var root_13 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_16 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_18 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_14 = from_html(`<!> <!>`, 1);
var root_12 = from_html(`<!> <!>`, 1);
var root_19 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_4 = from_html(`<!> <!> <!>`, 1);
var root_1 = from_html(`<!> <!>`, 1);
function NoteMenu($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let className = prop($$props, "className", 8, "max-w-[180px]");
  let onDownload = prop($$props, "onDownload", 8, (type) => {
  });
  let onDelete = prop($$props, "onDelete", 8, () => {
  });
  let onCopyLink = prop($$props, "onCopyLink", 8, null);
  let onCopyToClipboard = prop($$props, "onCopyToClipboard", 8, null);
  let onChange = prop($$props, "onChange", 8, () => {
  });
  init();
  Menu($$anchor, {
    onOpenChange: (state) => {
      onChange()(state);
    },
    get open() {
      return show();
    },
    set open($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1();
      var node = first_child(fragment_1);
      Menu_trigger(node, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = comment();
          var node_1 = first_child(fragment_2);
          slot(node_1, $$props, "default", {}, null);
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      var node_2 = sibling(node, 2);
      slot(node_2, $$props, "content", {}, ($$anchor3) => {
        Menu_content($$anchor3, {
          get class() {
            return `w-full ${className() ?? ""} text-sm rounded-2xl px-1 py-1 border border-gray-100  dark:border-gray-800  z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg`;
          },
          sideOffset: 6,
          side: "bottom",
          align: "end",
          transition: (e) => fade(e, { duration: 100 }),
          children: ($$anchor4, $$slotProps2) => {
            var fragment_4 = root_4();
            var node_3 = first_child(fragment_4);
            Menu_sub(node_3, {
              children: ($$anchor5, $$slotProps3) => {
                var fragment_5 = root_5();
                var node_4 = first_child(fragment_5);
                Menu_sub_trigger(node_4, {
                  class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
                  children: ($$anchor6, $$slotProps4) => {
                    var fragment_6 = root_6();
                    var node_5 = first_child(fragment_6);
                    Download(node_5, { strokeWidth: "2" });
                    var div = sibling(node_5, 2);
                    var text = child(div, true);
                    reset(div);
                    template_effect(($0) => set_text(text, $0), [() => ($i18n(), untrack(() => $i18n().t("Download")))]);
                    append($$anchor6, fragment_6);
                  },
                  $$slots: { default: true }
                });
                var node_6 = sibling(node_4, 2);
                Menu_sub_content(node_6, {
                  class: "w-full rounded-xl p-1 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg",
                  get transition() {
                    return flyAndScale;
                  },
                  sideOffset: 8,
                  align: "end",
                  children: ($$anchor6, $$slotProps4) => {
                    var fragment_7 = root_7();
                    var node_7 = first_child(fragment_7);
                    Menu_item(node_7, {
                      class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
                      $$events: {
                        click: () => {
                          onDownload()("txt");
                        }
                      },
                      children: ($$anchor7, $$slotProps5) => {
                        var div_1 = root_8();
                        var text_1 = child(div_1, true);
                        reset(div_1);
                        template_effect(($0) => set_text(text_1, $0), [
                          () => ($i18n(), untrack(() => $i18n().t("Plain text (.txt)")))
                        ]);
                        append($$anchor7, div_1);
                      },
                      $$slots: { default: true }
                    });
                    var node_8 = sibling(node_7, 2);
                    Menu_item(node_8, {
                      class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
                      $$events: {
                        click: () => {
                          onDownload()("md");
                        }
                      },
                      children: ($$anchor7, $$slotProps5) => {
                        var div_2 = root_9();
                        var text_2 = child(div_2, true);
                        reset(div_2);
                        template_effect(($0) => set_text(text_2, $0), [
                          () => ($i18n(), untrack(() => $i18n().t("Plain text (.md)")))
                        ]);
                        append($$anchor7, div_2);
                      },
                      $$slots: { default: true }
                    });
                    var node_9 = sibling(node_8, 2);
                    Menu_item(node_9, {
                      class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
                      $$events: {
                        click: () => {
                          onDownload()("pdf");
                        }
                      },
                      children: ($$anchor7, $$slotProps5) => {
                        var div_3 = root_10();
                        var text_3 = child(div_3, true);
                        reset(div_3);
                        template_effect(($0) => set_text(text_3, $0), [
                          () => ($i18n(), untrack(() => $i18n().t("PDF document (.pdf)")))
                        ]);
                        append($$anchor7, div_3);
                      },
                      $$slots: { default: true }
                    });
                    append($$anchor6, fragment_7);
                  },
                  $$slots: { default: true }
                });
                append($$anchor5, fragment_5);
              },
              $$slots: { default: true }
            });
            var node_10 = sibling(node_3, 2);
            {
              var consequent_2 = ($$anchor5) => {
                Menu_sub($$anchor5, {
                  children: ($$anchor6, $$slotProps3) => {
                    var fragment_9 = root_12();
                    var node_11 = first_child(fragment_9);
                    Menu_sub_trigger(node_11, {
                      class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
                      children: ($$anchor7, $$slotProps4) => {
                        var fragment_10 = root_13();
                        var node_12 = first_child(fragment_10);
                        Share(node_12, { strokeWidth: "2" });
                        var div_4 = sibling(node_12, 2);
                        var text_4 = child(div_4, true);
                        reset(div_4);
                        template_effect(($0) => set_text(text_4, $0), [() => ($i18n(), untrack(() => $i18n().t("Share")))]);
                        append($$anchor7, fragment_10);
                      },
                      $$slots: { default: true }
                    });
                    var node_13 = sibling(node_11, 2);
                    Menu_sub_content(node_13, {
                      class: "w-full rounded-xl p-1 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg",
                      get transition() {
                        return flyAndScale;
                      },
                      sideOffset: 8,
                      align: "end",
                      children: ($$anchor7, $$slotProps4) => {
                        var fragment_11 = root_14();
                        var node_14 = first_child(fragment_11);
                        {
                          var consequent = ($$anchor8) => {
                            Menu_item($$anchor8, {
                              class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
                              $$events: {
                                click: () => {
                                  onCopyLink()();
                                }
                              },
                              children: ($$anchor9, $$slotProps5) => {
                                var fragment_13 = root_16();
                                var node_15 = first_child(fragment_13);
                                Link(node_15, {});
                                var div_5 = sibling(node_15, 2);
                                var text_5 = child(div_5, true);
                                reset(div_5);
                                template_effect(($0) => set_text(text_5, $0), [() => ($i18n(), untrack(() => $i18n().t("Copy link")))]);
                                append($$anchor9, fragment_13);
                              },
                              $$slots: { default: true }
                            });
                          };
                          if_block(node_14, ($$render) => {
                            if (onCopyLink()) $$render(consequent);
                          });
                        }
                        var node_16 = sibling(node_14, 2);
                        {
                          var consequent_1 = ($$anchor8) => {
                            Menu_item($$anchor8, {
                              class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
                              $$events: {
                                click: () => {
                                  onCopyToClipboard()();
                                }
                              },
                              children: ($$anchor9, $$slotProps5) => {
                                var fragment_15 = root_18();
                                var node_17 = first_child(fragment_15);
                                DocumentDuplicate(node_17, { strokeWidth: "2" });
                                var div_6 = sibling(node_17, 2);
                                var text_6 = child(div_6, true);
                                reset(div_6);
                                template_effect(($0) => set_text(text_6, $0), [
                                  () => ($i18n(), untrack(() => $i18n().t("Copy to clipboard")))
                                ]);
                                append($$anchor9, fragment_15);
                              },
                              $$slots: { default: true }
                            });
                          };
                          if_block(node_16, ($$render) => {
                            if (onCopyToClipboard()) $$render(consequent_1);
                          });
                        }
                        append($$anchor7, fragment_11);
                      },
                      $$slots: { default: true }
                    });
                    append($$anchor6, fragment_9);
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_10, ($$render) => {
                if (onCopyLink() || onCopyToClipboard()) $$render(consequent_2);
              });
            }
            var node_18 = sibling(node_10, 2);
            Menu_item(node_18, {
              class: "flex  gap-2  items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
              $$events: {
                click: () => {
                  onDelete()();
                }
              },
              children: ($$anchor5, $$slotProps3) => {
                var fragment_16 = root_19();
                var node_19 = first_child(fragment_16);
                GarbageBin(node_19, {});
                var div_7 = sibling(node_19, 2);
                var text_7 = child(div_7, true);
                reset(div_7);
                template_effect(($0) => set_text(text_7, $0), [() => ($i18n(), untrack(() => $i18n().t("Delete")))]);
                append($$anchor5, fragment_16);
              },
              $$slots: { default: true }
            });
            append($$anchor4, fragment_4);
          },
          $$slots: { default: true }
        });
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
export {
  NoteMenu as N
};
