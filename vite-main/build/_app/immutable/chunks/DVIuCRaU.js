import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { t as template_effect, p as push, g as getContext, f as first_child, b as get, h as derived_safe_equal, u as untrack, e as sibling, i as deep_read_state, c as child, r as reset, a as pop, s as set, m as mutable_source, n as createEventDispatcher, o as onMount, l as legacy_pre_effect, j as legacy_pre_effect_reset, k as tick, q as next } from "./BxIY6ir7.js";
import { s as set_text, e as event } from "./cBADewWV.js";
import { e as each, i as index } from "./7_HZMPNF.js";
import { i as if_block } from "./BoSuMvtf.js";
import { b as from_svg, a as append, f as from_html, c as comment, t as text } from "./CAbo1QWi.js";
import { s as slot } from "./CZEGIGsR.js";
import { a as set_attribute, s as set_class, c as clsx, r as remove_input_defaults } from "./kXiCYuyj.js";
import { b as bind_value } from "./DVLuwGai.js";
import { b as bind_this } from "./D16JuV5t.js";
import { i as init } from "./ByqEASoO.js";
import { p as prop } from "./BRmGPDvq.js";
import { a as store_get, s as setup_stores } from "./BvQ5O7-v.js";
import "./C2A39Ney.js";
import { M as Menu, a as Menu_trigger, b as Menu_content, c as Menu_item } from "./DQmZL-p0.js";
import { i as copyToClipboard, m as marked, A as sanitizeResponseContent, z as splitStream } from "./Bh-hrM1w.js";
import { F as Fuse } from "./AFl3itOE.js";
import { d as dayjs2, r as relativeTime } from "./OO7lCI-F.js";
import "./CAzIiltw.js";
import { S as Spinner } from "./CtnI4RVL.js";
import { f as flyAndScale } from "./BuLNlPfL.js";
import "./h-B6Md2q.js";
import { g as getOllamaVersion, u as unloadModel, d as deleteModel, p as pullModel } from "./d72FSnuN.js";
import { b as settings, u as user, a as models, c as config, m as mobile, M as MODEL_DOWNLOAD_POOL } from "./2Yg1sHDo.js";
import { t as toast } from "./BccDN__m.js";
import { g as getModels } from "./DtDmpg9G.js";
import { C as ChevronDown } from "./CUFupyOK.js";
import { S as Search } from "./2ixn6gs3.js";
import { T as Tooltip } from "./BHXWufQb.js";
import { k as key } from "./CmeGWm0r.js";
import { a as WEBUI_API_BASE_URL } from "./DQ9UxF7k.js";
import { C as Check } from "./BH2Jmq_7.js";
import { L as Link } from "./EZxqw5-p.js";
import { E as Eye } from "./D6dKHJXN.js";
import { E as EyeSlash } from "./B0PhibVT.js";
import { E as EllipsisHorizontal } from "./BC-suBaL.js";
var root$2 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"></path></svg>`);
function ArrowUpTray($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$2();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root_5$1 = from_html(`<!> <div class="flex items-center"><!></div>`, 1);
var root_10$2 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_4$1 = from_html(`<!> <!>`, 1);
var root_1$2 = from_html(`<!> <!>`, 1);
function ModelItemMenu($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let model = prop($$props, "model", 8);
  let pinModelHandler = prop($$props, "pinModelHandler", 8, () => {
  });
  let copyLinkHandler = prop($$props, "copyLinkHandler", 8, () => {
  });
  let onClose = prop($$props, "onClose", 8, () => {
  });
  init();
  Menu($$anchor, {
    closeFocus: false,
    onOpenChange: (state) => {
      if (state === false) {
        onClose()();
      }
    },
    typeahead: false,
    get open() {
      return show();
    },
    set open($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$2();
      var node = first_child(fragment_1);
      Menu_trigger(node, {
        children: ($$anchor3, $$slotProps2) => {
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("More"))));
            let $1 = derived_safe_equal(() => ($settings(), untrack(() => {
              var _a;
              return ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "" : "group-hover/item:opacity-100 opacity-0";
            })));
            Tooltip($$anchor3, {
              get content() {
                return get($0);
              },
              get className() {
                return get($1);
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_3 = comment();
                var node_1 = first_child(fragment_3);
                slot(node_1, $$props, "default", {}, null);
                append($$anchor4, fragment_3);
              },
              $$slots: { default: true }
            });
          }
        },
        $$slots: { default: true }
      });
      var node_2 = sibling(node, 2);
      Menu_content(node_2, {
        strategy: "fixed",
        class: "w-full max-w-[180px] text-sm rounded-2xl p-1 z-[9999999] bg-white dark:bg-gray-850 dark:text-white shadow-lg border border-gray-100  dark:border-gray-800",
        sideOffset: -2,
        side: "bottom",
        align: "end",
        get transition() {
          return flyAndScale;
        },
        children: ($$anchor3, $$slotProps2) => {
          var fragment_4 = root_4$1();
          var node_3 = first_child(fragment_4);
          {
            let $0 = derived_safe_equal(() => ($settings(), deep_read_state(model()), untrack(() => {
              var _a, _b;
              return (((_a = $settings()) == null ? void 0 : _a.pinnedModels) ?? []).includes((_b = model()) == null ? void 0 : _b.id);
            })));
            Menu_item(node_3, {
              type: "button",
              get "aria-pressed"() {
                return get($0);
              },
              class: "flex rounded-xl py-1.5 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition items-center gap-2",
              $$events: {
                click: (e) => {
                  var _a;
                  e.stopPropagation();
                  e.preventDefault();
                  pinModelHandler()((_a = model()) == null ? void 0 : _a.id);
                  show(false);
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_5 = root_5$1();
                var node_4 = first_child(fragment_5);
                {
                  var consequent = ($$anchor5) => {
                    EyeSlash($$anchor5, {});
                  };
                  var alternate = ($$anchor5) => {
                    Eye($$anchor5, {});
                  };
                  if_block(node_4, ($$render) => {
                    if ($settings(), deep_read_state(model()), untrack(() => {
                      var _a, _b;
                      return (((_a = $settings()) == null ? void 0 : _a.pinnedModels) ?? []).includes((_b = model()) == null ? void 0 : _b.id);
                    })) $$render(consequent);
                    else $$render(alternate, false);
                  });
                }
                var div = sibling(node_4, 2);
                var node_5 = child(div);
                {
                  var consequent_1 = ($$anchor5) => {
                    var text$1 = text();
                    template_effect(($02) => set_text(text$1, $02), [
                      () => ($i18n(), untrack(() => $i18n().t("Hide from Sidebar")))
                    ]);
                    append($$anchor5, text$1);
                  };
                  var alternate_1 = ($$anchor5) => {
                    var text_1 = text();
                    template_effect(($02) => set_text(text_1, $02), [
                      () => ($i18n(), untrack(() => $i18n().t("Keep in Sidebar")))
                    ]);
                    append($$anchor5, text_1);
                  };
                  if_block(node_5, ($$render) => {
                    if ($settings(), deep_read_state(model()), untrack(() => {
                      var _a, _b;
                      return (((_a = $settings()) == null ? void 0 : _a.pinnedModels) ?? []).includes((_b = model()) == null ? void 0 : _b.id);
                    })) $$render(consequent_1);
                    else $$render(alternate_1, false);
                  });
                }
                reset(div);
                append($$anchor4, fragment_5);
              },
              $$slots: { default: true }
            });
          }
          var node_6 = sibling(node_3, 2);
          Menu_item(node_6, {
            type: "button",
            class: "flex rounded-xl py-1.5 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition items-center gap-2",
            $$events: {
              click: (e) => {
                e.stopPropagation();
                e.preventDefault();
                copyLinkHandler()();
                show(false);
              }
            },
            children: ($$anchor4, $$slotProps3) => {
              var fragment_10 = root_10$2();
              var node_7 = first_child(fragment_10);
              Link(node_7, {});
              var div_1 = sibling(node_7, 2);
              var text_2 = child(div_1, true);
              reset(div_1);
              template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Copy Link")))]);
              append($$anchor4, fragment_10);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_4);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root$1 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 12 L8 7 H21 V17 H8 L4 12 Z" stroke="currentColor" fill="none"></path><circle cx="10" cy="12" r="0.75" fill="currentColor" stroke="currentColor"></circle></svg>`);
function Tag($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.8");
  var svg = root$1();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root_1$1 = from_html(`<img alt="Model" class="rounded-full size-5 flex items-center"/>`);
var root_2$1 = from_html(`<div class="line-clamp-1"> </div>`);
var root_5 = from_html(`<span class=" text-xs font-medium text-gray-600 dark:text-gray-400 line-clamp-1"> </span>`);
var root_4 = from_html(`<div class="flex items-center translate-y-[0.5px]"><!></div>`);
var root_7$1 = from_html(`<div class=" flex items-center"><span class="relative flex size-2"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span> <span class="relative inline-flex rounded-full size-2 bg-green-500"></span></span></div>`);
var root_6$1 = from_html(`<div class="flex items-center translate-y-[0.5px] px-0.5"><!></div>`);
var root_3 = from_html(`<!> <!>`, 1);
var root_10$1 = from_html(`<div class="translate-y-[1px]"><!></div>`);
var root_13 = from_html(`<div class=" text-xs font-medium rounded-sm uppercase text-white"> </div>`);
var root_11$1 = from_html(`<div slot="tooltip"></div>`);
var root_15 = from_html(`<div class="translate-y-[1px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-3"><path fill-rule="evenodd" d="M2 2.75A.75.75 0 0 1 2.75 2C8.963 2 14 7.037 14 13.25a.75.75 0 0 1-1.5 0c0-5.385-4.365-9.75-9.75-9.75A.75.75 0 0 1 2 2.75Zm0 4.5a.75.75 0 0 1 .75-.75 6.75 6.75 0 0 1 6.75 6.75.75.75 0 0 1-1.5 0C8 10.35 5.65 8 2.75 8A.75.75 0 0 1 2 7.25ZM3.5 11a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" clip-rule="evenodd"></path></svg></div>`);
var root_18$1 = from_html(`<div class="translate-y-[1px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-3"><path fill-rule="evenodd" d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z" clip-rule="evenodd"></path></svg></div>`);
var root_20$1 = from_html(`<div class=" translate-y-[1px]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path></svg></div>`);
var root_22 = from_html(`<button class="flex"><!></button>`);
var root_23 = from_html(`<button class="flex"><!></button>`);
var root_24 = from_html(`<div><!></div>`);
var root = from_html(`<button aria-roledescription="model-item"><div class="flex flex-col flex-1 gap-1.5"><div class="flex items-center gap-2"><div class="flex items-center min-w-fit"><!></div> <div class="flex items-center"><!></div> <div class=" shrink-0 flex items-center gap-2"><!> <!> <!> <!></div></div></div> <div class="ml-auto pl-2 pr-1 flex items-center gap-1.5 shrink-0"><!> <!> <!></div></button>`);
function ModelItem($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let selectedModelIdx = prop($$props, "selectedModelIdx", 24, () => -1);
  let item = prop($$props, "item", 24, () => ({}));
  let index$1 = prop($$props, "index", 24, () => -1);
  let value = prop($$props, "value", 8, "");
  let unloadModelHandler = prop($$props, "unloadModelHandler", 8, () => {
  });
  let pinModelHandler = prop($$props, "pinModelHandler", 8, () => {
  });
  let onClick = prop($$props, "onClick", 8, () => {
  });
  const copyLinkHandler = async (model) => {
    const baseUrl = window.location.origin;
    const res = await copyToClipboard(`${baseUrl}/?model=${encodeURIComponent(model.id)}`);
    if (res) {
      toast.success($i18n().t("Copied link to clipboard"));
    } else {
      toast.error($i18n().t("Failed to copy link"));
    }
  };
  let showMenu = mutable_source(false);
  init();
  var button = root();
  var div = child(button);
  var div_1 = child(div);
  var div_2 = child(div_1);
  var node = child(div_2);
  {
    let $0 = derived_safe_equal(() => ($user(), deep_read_state(item()), untrack(() => {
      var _a, _b;
      return ((_a = $user()) == null ? void 0 : _a.role) === "admin" ? ((_b = item()) == null ? void 0 : _b.value) ?? "" : "";
    })));
    Tooltip(node, {
      get content() {
        return get($0);
      },
      placement: "top-start",
      children: ($$anchor2, $$slotProps) => {
        var img = root_1$1();
        template_effect(() => set_attribute(img, "src", (deep_read_state(WEBUI_API_BASE_URL), deep_read_state(item()), $i18n(), untrack(() => `${WEBUI_API_BASE_URL}/models/model/profile/image?id=${item().model.id}&lang=${$i18n().language}`))));
        append($$anchor2, img);
      },
      $$slots: { default: true }
    });
  }
  reset(div_2);
  var div_3 = sibling(div_2, 2);
  var node_1 = child(div_3);
  {
    let $0 = derived_safe_equal(() => (deep_read_state(item()), untrack(() => `${item().label} (${item().value})`)));
    Tooltip(node_1, {
      get content() {
        return get($0);
      },
      placement: "top-start",
      children: ($$anchor2, $$slotProps) => {
        var div_4 = root_2$1();
        var text2 = child(div_4, true);
        reset(div_4);
        template_effect(() => set_text(text2, (deep_read_state(item()), untrack(() => item().label))));
        append($$anchor2, div_4);
      },
      $$slots: { default: true }
    });
  }
  reset(div_3);
  var div_5 = sibling(div_3, 2);
  var node_2 = child(div_5);
  {
    var consequent_2 = ($$anchor2) => {
      var fragment = root_3();
      var node_3 = first_child(fragment);
      {
        var consequent = ($$anchor3) => {
          var div_6 = root_4();
          var node_4 = child(div_6);
          {
            let $0 = derived_safe_equal(() => (deep_read_state(item()), untrack(() => {
              var _a, _b, _c, _d, _e, _f;
              return `${((_b = (_a = item().model.ollama) == null ? void 0 : _a.details) == null ? void 0 : _b.quantization_level) ? ((_d = (_c = item().model.ollama) == null ? void 0 : _c.details) == null ? void 0 : _d.quantization_level) + " " : ""}${((_e = item().model.ollama) == null ? void 0 : _e.size) ? `(${(((_f = item().model.ollama) == null ? void 0 : _f.size) / 1024 ** 3).toFixed(1)}GB)` : ""}`;
            })));
            Tooltip(node_4, {
              get content() {
                return get($0);
              },
              className: "self-end",
              children: ($$anchor4, $$slotProps) => {
                var span = root_5();
                var text_1 = child(span, true);
                reset(span);
                template_effect(() => set_text(text_1, (deep_read_state(item()), untrack(() => {
                  var _a, _b;
                  return ((_b = (_a = item().model.ollama) == null ? void 0 : _a.details) == null ? void 0 : _b.parameter_size) ?? "";
                }))));
                append($$anchor4, span);
              },
              $$slots: { default: true }
            });
          }
          reset(div_6);
          append($$anchor3, div_6);
        };
        if_block(node_3, ($$render) => {
          if (deep_read_state(item()), untrack(() => {
            var _a, _b;
            return (((_b = (_a = item().model.ollama) == null ? void 0 : _a.details) == null ? void 0 : _b.parameter_size) ?? "") !== "";
          })) $$render(consequent);
        });
      }
      var node_5 = sibling(node_3, 2);
      {
        var consequent_1 = ($$anchor3) => {
          var div_7 = root_6$1();
          var node_6 = child(div_7);
          {
            let $0 = derived_safe_equal(() => ($i18n(), deep_read_state(dayjs2), deep_read_state(item()), untrack(() => {
              var _a;
              return `${$i18n().t("Unloads {{FROM_NOW}}", {
                FROM_NOW: dayjs2(((_a = item().model.ollama) == null ? void 0 : _a.expires_at) * 1e3).fromNow()
              })}`;
            })));
            Tooltip(node_6, {
              get content() {
                return get($0);
              },
              className: "self-end",
              children: ($$anchor4, $$slotProps) => {
                var div_8 = root_7$1();
                append($$anchor4, div_8);
              },
              $$slots: { default: true }
            });
          }
          reset(div_7);
          append($$anchor3, div_7);
        };
        if_block(node_5, ($$render) => {
          if (deep_read_state(item()), untrack(() => {
            var _a, _b;
            return ((_a = item().model.ollama) == null ? void 0 : _a.expires_at) && new Date(((_b = item().model.ollama) == null ? void 0 : _b.expires_at) * 1e3) > /* @__PURE__ */ new Date();
          })) $$render(consequent_1);
        });
      }
      append($$anchor2, fragment);
    };
    if_block(node_2, ($$render) => {
      if (deep_read_state(item()), untrack(() => item().model.owned_by === "ollama")) $$render(consequent_2);
    });
  }
  var node_7 = sibling(node_2, 2);
  {
    var consequent_3 = ($$anchor2) => {
      var fragment_1 = comment();
      var node_8 = first_child(fragment_1);
      key(node_8, () => (deep_read_state(item()), untrack(() => item().model.id)), ($$anchor3) => {
        Tooltip($$anchor3, {
          get elementId() {
            return `tags-${(deep_read_state(item()), untrack(() => item().model.id)) ?? ""}`;
          },
          children: ($$anchor4, $$slotProps) => {
            var div_9 = root_10$1();
            var node_9 = child(div_9);
            Tag(node_9, {});
            reset(div_9);
            append($$anchor4, div_9);
          },
          $$slots: {
            default: true,
            tooltip: ($$anchor4, $$slotProps) => {
              var div_10 = root_11$1();
              each(
                div_10,
                5,
                () => (deep_read_state(item()), untrack(() => {
                  var _a;
                  return (_a = item().model) == null ? void 0 : _a.tags.sort((a, b) => a.name.localeCompare(b.name));
                })),
                index,
                ($$anchor5, tag) => {
                  Tooltip($$anchor5, {
                    get content() {
                      return get(tag), untrack(() => get(tag).name);
                    },
                    className: "flex-shrink-0",
                    children: ($$anchor6, $$slotProps2) => {
                      var div_11 = root_13();
                      var text_2 = child(div_11, true);
                      reset(div_11);
                      template_effect(() => set_text(text_2, (get(tag), untrack(() => get(tag).name))));
                      append($$anchor6, div_11);
                    },
                    $$slots: { default: true }
                  });
                }
              );
              reset(div_10);
              template_effect(() => set_attribute(div_10, "id", `tags-${(deep_read_state(item()), untrack(() => item().model.id)) ?? ""}`));
              append($$anchor4, div_10);
            }
          }
        });
      });
      append($$anchor2, fragment_1);
    };
    if_block(node_7, ($$render) => {
      if (deep_read_state(item()), untrack(() => {
        var _a, _b;
        return (((_b = (_a = item()) == null ? void 0 : _a.model) == null ? void 0 : _b.tags) ?? []).length > 0;
      })) $$render(consequent_3);
    });
  }
  var node_10 = sibling(node_7, 2);
  {
    var consequent_4 = ($$anchor2) => {
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => `${$i18n().t("Direct")}`)));
        Tooltip($$anchor2, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps) => {
            var div_12 = root_15();
            append($$anchor3, div_12);
          },
          $$slots: { default: true }
        });
      }
    };
    var alternate = ($$anchor2) => {
      var fragment_5 = comment();
      var node_11 = first_child(fragment_5);
      {
        var consequent_5 = ($$anchor3) => {
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => `${$i18n().t("External")}`)));
            Tooltip($$anchor3, {
              get content() {
                return get($0);
              },
              children: ($$anchor4, $$slotProps) => {
                var div_13 = root_18$1();
                append($$anchor4, div_13);
              },
              $$slots: { default: true }
            });
          }
        };
        if_block(
          node_11,
          ($$render) => {
            if (deep_read_state(item()), untrack(() => item().model.connection_type === "external")) $$render(consequent_5);
          },
          true
        );
      }
      append($$anchor2, fragment_5);
    };
    if_block(node_10, ($$render) => {
      if (deep_read_state(item()), untrack(() => {
        var _a;
        return (_a = item().model) == null ? void 0 : _a.direct;
      })) $$render(consequent_4);
      else $$render(alternate, false);
    });
  }
  var node_12 = sibling(node_10, 2);
  {
    var consequent_6 = ($$anchor2) => {
      {
        let $0 = derived_safe_equal(() => (deep_read_state(marked), deep_read_state(sanitizeResponseContent), deep_read_state(item()), untrack(() => {
          var _a, _b, _c;
          return `${marked.parse(sanitizeResponseContent((_c = (_b = (_a = item().model) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.description).replaceAll("\n", "<br>"))}`;
        })));
        Tooltip($$anchor2, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps) => {
            var div_14 = root_20$1();
            append($$anchor3, div_14);
          },
          $$slots: { default: true }
        });
      }
    };
    if_block(node_12, ($$render) => {
      if (deep_read_state(item()), untrack(() => {
        var _a, _b, _c;
        return (_c = (_b = (_a = item().model) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.description;
      })) $$render(consequent_6);
    });
  }
  reset(div_5);
  reset(div_1);
  reset(div);
  var div_15 = sibling(div, 2);
  var node_13 = child(div_15);
  {
    var consequent_7 = ($$anchor2) => {
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => `${$i18n().t("Eject")}`)));
        Tooltip($$anchor2, {
          get content() {
            return get($0);
          },
          className: "flex-shrink-0 group-hover/item:opacity-100 opacity-0 ",
          children: ($$anchor3, $$slotProps) => {
            var button_1 = root_22();
            var node_14 = child(button_1);
            ArrowUpTray(node_14, { className: "size-3" });
            reset(button_1);
            event("click", button_1, (e) => {
              e.preventDefault();
              e.stopPropagation();
              unloadModelHandler()(item().value);
            });
            append($$anchor3, button_1);
          },
          $$slots: { default: true }
        });
      }
    };
    if_block(node_13, ($$render) => {
      if ($user(), deep_read_state(item()), untrack(() => {
        var _a, _b, _c;
        return ((_a = $user()) == null ? void 0 : _a.role) === "admin" && item().model.owned_by === "ollama" && ((_b = item().model.ollama) == null ? void 0 : _b.expires_at) && new Date(((_c = item().model.ollama) == null ? void 0 : _c.expires_at) * 1e3) > /* @__PURE__ */ new Date();
      })) $$render(consequent_7);
    });
  }
  var node_15 = sibling(node_13, 2);
  ModelItemMenu(node_15, {
    get model() {
      return deep_read_state(item()), untrack(() => item().model);
    },
    get pinModelHandler() {
      return pinModelHandler();
    },
    copyLinkHandler: () => {
      copyLinkHandler(item().model);
    },
    get show() {
      return get(showMenu);
    },
    set show($$value) {
      set(showMenu, $$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var button_2 = root_23();
      var node_16 = child(button_2);
      EllipsisHorizontal(node_16, {});
      reset(button_2);
      template_effect(($0) => set_attribute(button_2, "aria-label", $0), [
        () => ($i18n(), untrack(() => `${$i18n().t("More Options")}`))
      ]);
      event("click", button_2, (e) => {
        e.preventDefault();
        e.stopPropagation();
        set(showMenu, !get(showMenu));
      });
      append($$anchor2, button_2);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  var node_17 = sibling(node_15, 2);
  {
    var consequent_8 = ($$anchor2) => {
      var div_16 = root_24();
      var node_18 = child(div_16);
      Check(node_18, { className: "size-3" });
      reset(div_16);
      append($$anchor2, div_16);
    };
    if_block(node_17, ($$render) => {
      if (deep_read_state(value()), deep_read_state(item()), untrack(() => value() === item().value)) $$render(consequent_8);
    });
  }
  reset(div_15);
  reset(button);
  template_effect(() => {
    set_attribute(button, "aria-label", (deep_read_state(item()), untrack(() => item().label)));
    set_class(button, 1, `flex group/item w-full text-left font-medium line-clamp-1 select-none items-center rounded-button py-2 pl-3 pr-1.5 text-sm text-gray-700 dark:text-gray-100 outline-hidden transition-all duration-75 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl cursor-pointer data-highlighted:bg-muted ${index$1() === selectedModelIdx() ? "bg-gray-100 dark:bg-gray-800 group-hover:bg-transparent" : ""}`);
    set_attribute(button, "data-arrow-selected", index$1() === selectedModelIdx());
    set_attribute(button, "data-value", (deep_read_state(item()), untrack(() => item().value)));
  });
  event("click", button, () => {
    onClick()();
  });
  append($$anchor, button);
  pop();
  $$cleanup();
}
var root_2 = from_html(`<div><!> <!></div>`);
var root_7 = from_html(`<div class="flex items-center gap-2.5 px-4.5 mt-3.5 mb-1.5"><!> <input id="model-search-input" class="w-full text-sm bg-transparent outline-hidden" autocomplete="off"/></div>`);
var root_9 = from_html(`<button> </button>`);
var root_10 = from_html(`<button> </button>`);
var root_11 = from_html(`<button> </button>`);
var root_12 = from_html(`<button> </button>`);
var root_14 = from_html(`<button> </button>`);
var root_8 = from_html(`<div class=" flex w-full bg-white dark:bg-gray-850 overflow-x-auto scrollbar-none font-[450] mb-0.5"><div class="flex gap-1 w-fit text-center text-sm rounded-full bg-transparent px-1.5 whitespace-nowrap"><!> <!> <!> <!> <!></div></div>`);
var root_16 = from_html(`<div><div class="block px-3 py-2 text-sm text-gray-700 dark:text-gray-100"> </div></div>`);
var root_18 = from_html(`<button class="flex w-full font-medium line-clamp-1 select-none items-center rounded-button py-2 pl-3 pr-1.5 text-sm text-gray-700 dark:text-gray-100 outline-hidden transition-all duration-75 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl cursor-pointer data-highlighted:bg-muted"><div class=" truncate"> </div></button>`);
var root_20 = from_html(`<div class="-mt-1 h-fit text-[0.7rem] dark:text-gray-500 line-clamp-1"> </div>`);
var root_21 = from_html(`<button class="text-gray-800 dark:text-gray-100"><svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"></path></svg></button>`);
var root_19 = from_html(`<div class="flex w-full justify-between font-medium select-none rounded-button py-2 pl-3 pr-1.5 text-sm text-gray-700 dark:text-gray-100 outline-hidden transition-all duration-75 rounded-xl cursor-pointer data-highlighted:bg-muted"><div class="flex"><div class="mr-2.5 translate-y-0.5"><!></div> <div class="flex flex-col self-start"><div class="flex gap-1"><div class="line-clamp-1"> </div> <div class="shrink-0"> </div></div> <!></div></div> <div class="mr-2 ml-1 translate-y-0.5"><!></div></div>`);
var root_6 = from_html(`<!> <div class="px-2"><!></div> <div class="px-2.5 max-h-64 overflow-y-auto group relative"><!> <!> <!></div> <div class="mb-2.5"></div> <div class="hidden w-[42rem]"></div> <div class="hidden w-[32rem]"></div>`, 1);
var root_1 = from_html(`<!> <!>`, 1);
function Selector($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $MODEL_DOWNLOAD_POOL = () => store_get(MODEL_DOWNLOAD_POOL, "$MODEL_DOWNLOAD_POOL", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $mobile = () => store_get(mobile, "$mobile", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const filteredItems = mutable_source();
  dayjs2.extend(relativeTime);
  const i18n = getContext("i18n");
  createEventDispatcher();
  let id = prop($$props, "id", 8, "");
  let value = prop($$props, "value", 12, "");
  let placeholder = prop($$props, "placeholder", 24, () => $i18n().t("Select a model"));
  let searchEnabled = prop($$props, "searchEnabled", 8, true);
  let searchPlaceholder = prop($$props, "searchPlaceholder", 24, () => $i18n().t("Search a model"));
  let items = prop($$props, "items", 24, () => []);
  let className = prop($$props, "className", 8, "w-[32rem]");
  let triggerClassName = prop($$props, "triggerClassName", 8, "text-lg");
  let pinModelHandler = prop($$props, "pinModelHandler", 8, () => {
  });
  let tagsContainerElement = mutable_source();
  let show = mutable_source(false);
  let tags = mutable_source([]);
  let selectedModel = mutable_source("");
  let searchValue = mutable_source("");
  let selectedTag = mutable_source("");
  let selectedConnectionType = mutable_source("");
  let ollamaVersion = mutable_source(null);
  let selectedModelIdx = mutable_source(0);
  const fuse = new Fuse(
    items().map((item) => {
      var _a, _b, _c, _d, _e;
      const _item = {
        ...item,
        modelName: (_a = item.model) == null ? void 0 : _a.name,
        tags: (((_b = item.model) == null ? void 0 : _b.tags) ?? []).map((tag) => tag.name).join(" "),
        desc: (_e = (_d = (_c = item.model) == null ? void 0 : _c.info) == null ? void 0 : _d.meta) == null ? void 0 : _e.description
      };
      return _item;
    }),
    { keys: ["value", "tags", "modelName"], threshold: 0.4 }
  );
  const updateFuse = () => {
    if (fuse) {
      fuse.setCollection(items().map((item) => {
        var _a, _b, _c, _d, _e;
        const _item = {
          ...item,
          modelName: (_a = item.model) == null ? void 0 : _a.name,
          tags: (((_b = item.model) == null ? void 0 : _b.tags) ?? []).map((tag) => tag.name).join(" "),
          desc: (_e = (_d = (_c = item.model) == null ? void 0 : _c.info) == null ? void 0 : _d.meta) == null ? void 0 : _e.description
        };
        return _item;
      }));
    }
  };
  const resetView = async () => {
    await tick();
    const selectedInFiltered = get(filteredItems).findIndex((item2) => item2.value === value());
    if (selectedInFiltered >= 0) {
      set(selectedModelIdx, selectedInFiltered);
    } else {
      set(selectedModelIdx, 0);
    }
    await tick();
    const item = document.querySelector(`[data-arrow-selected="true"]`);
    item == null ? void 0 : item.scrollIntoView({ block: "center", inline: "nearest", behavior: "instant" });
  };
  const pullModelHandler = async () => {
    var _a, _b, _c;
    const sanitizedModelTag = get(searchValue).trim().replace(/^ollama\s+(run|pull)\s+/, "");
    console.log($MODEL_DOWNLOAD_POOL());
    if ($MODEL_DOWNLOAD_POOL()[sanitizedModelTag]) {
      toast.error($i18n().t(`Model '{{modelTag}}' is already in queue for downloading.`, { modelTag: sanitizedModelTag }));
      return;
    }
    if (Object.keys($MODEL_DOWNLOAD_POOL()).length === 3) {
      toast.error($i18n().t("Maximum of 3 models can be downloaded simultaneously. Please try again later."));
      return;
    }
    const [res, controller] = await pullModel(localStorage.token, sanitizedModelTag, "0").catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      const reader = res.body.pipeThrough(new TextDecoderStream()).pipeThrough(splitStream("\n")).getReader();
      MODEL_DOWNLOAD_POOL.set({
        ...$MODEL_DOWNLOAD_POOL(),
        [sanitizedModelTag]: {
          ...$MODEL_DOWNLOAD_POOL()[sanitizedModelTag],
          abortController: controller,
          reader,
          done: false
        }
      });
      while (true) {
        try {
          const { value: value2, done } = await reader.read();
          if (done) break;
          let lines = value2.split("\n");
          for (const line of lines) {
            if (line !== "") {
              let data = JSON.parse(line);
              console.log(data);
              if (data.error) {
                throw data.error;
              }
              if (data.detail) {
                throw data.detail;
              }
              if (data.status) {
                if (data.digest) {
                  let downloadProgress = 0;
                  if (data.completed) {
                    downloadProgress = Math.round(data.completed / data.total * 1e3) / 10;
                  } else {
                    downloadProgress = 100;
                  }
                  MODEL_DOWNLOAD_POOL.set({
                    ...$MODEL_DOWNLOAD_POOL(),
                    [sanitizedModelTag]: {
                      ...$MODEL_DOWNLOAD_POOL()[sanitizedModelTag],
                      pullProgress: downloadProgress,
                      digest: data.digest
                    }
                  });
                } else {
                  toast.success(data.status);
                  MODEL_DOWNLOAD_POOL.set({
                    ...$MODEL_DOWNLOAD_POOL(),
                    [sanitizedModelTag]: {
                      ...$MODEL_DOWNLOAD_POOL()[sanitizedModelTag],
                      done: data.status === "success"
                    }
                  });
                }
              }
            }
          }
        } catch (error) {
          console.log(error);
          if (typeof error !== "string") {
            error = error.message;
          }
          toast.error(`${error}`);
          break;
        }
      }
      if ($MODEL_DOWNLOAD_POOL()[sanitizedModelTag].done) {
        toast.success($i18n().t(`Model '{{modelName}}' has been successfully downloaded.`, { modelName: sanitizedModelTag }));
        models.set(await getModels(localStorage.token, ((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_direct_connections) && (((_c = $settings()) == null ? void 0 : _c.directConnections) ?? null)));
      } else {
        toast.error($i18n().t("Download canceled"));
      }
      delete $MODEL_DOWNLOAD_POOL()[sanitizedModelTag];
      MODEL_DOWNLOAD_POOL.set({ ...$MODEL_DOWNLOAD_POOL() });
    }
  };
  const setOllamaVersion = async () => {
    set(ollamaVersion, await getOllamaVersion(localStorage.token).catch((error) => false));
  };
  onMount(async () => {
    if (items()) {
      set(tags, items().filter((item) => {
        var _a, _b, _c;
        return !(((_c = (_b = (_a = item.model) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.hidden) ?? false);
      }).flatMap((item) => {
        var _a;
        return ((_a = item.model) == null ? void 0 : _a.tags) ?? [];
      }).map((tag) => tag.name.toLowerCase()));
      set(tags, Array.from(new Set(get(tags))).sort((a, b) => a.localeCompare(b)));
    }
  });
  const cancelModelPullHandler = async (model) => {
    const { reader, abortController } = $MODEL_DOWNLOAD_POOL()[model];
    if (abortController) {
      abortController.abort();
    }
    if (reader) {
      await reader.cancel();
      delete $MODEL_DOWNLOAD_POOL()[model];
      MODEL_DOWNLOAD_POOL.set({ ...$MODEL_DOWNLOAD_POOL() });
      await deleteModel(localStorage.token, model);
      toast.success($i18n().t("{{model}} download has been canceled", { model }));
    }
  };
  const unloadModelHandler = async (model) => {
    var _a, _b, _c;
    const res = await unloadModel(localStorage.token, model).catch((error) => {
      toast.error($i18n().t("Error unloading model: {{error}}", { error }));
    });
    if (res) {
      toast.success($i18n().t("Model unloaded successfully"));
      models.set(await getModels(localStorage.token, ((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_direct_connections) && (((_c = $settings()) == null ? void 0 : _c.directConnections) ?? null)));
    }
  };
  legacy_pre_effect(() => (deep_read_state(items()), deep_read_state(value())), () => {
    set(selectedModel, items().find((item) => item.value === value()) ?? "");
  });
  legacy_pre_effect(() => deep_read_state(items()), () => {
    if (items()) {
      updateFuse();
    }
  });
  legacy_pre_effect(
    () => (get(searchValue), get(selectedTag), get(selectedConnectionType), deep_read_state(items())),
    () => {
      set(filteredItems, (get(searchValue) ? fuse.search(get(searchValue)).map((e) => {
        return e.item;
      }).filter((item) => {
        var _a;
        if (get(selectedTag) === "") {
          return true;
        }
        return (((_a = item.model) == null ? void 0 : _a.tags) ?? []).map((tag) => tag.name.toLowerCase()).includes(get(selectedTag).toLowerCase());
      }).filter((item) => {
        var _a, _b, _c;
        if (get(selectedConnectionType) === "") {
          return true;
        } else if (get(selectedConnectionType) === "local") {
          return ((_a = item.model) == null ? void 0 : _a.connection_type) === "local";
        } else if (get(selectedConnectionType) === "external") {
          return ((_b = item.model) == null ? void 0 : _b.connection_type) === "external";
        } else if (get(selectedConnectionType) === "direct") {
          return (_c = item.model) == null ? void 0 : _c.direct;
        }
      }) : items().filter((item) => {
        var _a;
        if (get(selectedTag) === "") {
          return true;
        }
        return (((_a = item.model) == null ? void 0 : _a.tags) ?? []).map((tag) => tag.name.toLowerCase()).includes(get(selectedTag).toLowerCase());
      }).filter((item) => {
        var _a, _b, _c;
        if (get(selectedConnectionType) === "") {
          return true;
        } else if (get(selectedConnectionType) === "local") {
          return ((_a = item.model) == null ? void 0 : _a.connection_type) === "local";
        } else if (get(selectedConnectionType) === "external") {
          return ((_b = item.model) == null ? void 0 : _b.connection_type) === "external";
        } else if (get(selectedConnectionType) === "direct") {
          return (_c = item.model) == null ? void 0 : _c.direct;
        }
      })).filter((item) => {
        var _a, _b, _c;
        return !(((_c = (_b = (_a = item.model) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.hidden) ?? false);
      }));
    }
  );
  legacy_pre_effect(() => (get(selectedTag), get(selectedConnectionType)), () => {
    if (get(selectedTag) || get(selectedConnectionType)) {
      resetView();
    } else {
      resetView();
    }
  });
  legacy_pre_effect(() => get(show), () => {
    if (get(show)) {
      setOllamaVersion();
    }
  });
  legacy_pre_effect_reset();
  init();
  Menu($$anchor, {
    onOpenChange: async () => {
      set(searchValue, "");
      window.setTimeout(() => {
        var _a;
        return (_a = document.getElementById("model-search-input")) == null ? void 0 : _a.focus();
      }, 0);
      resetView();
    },
    closeFocus: false,
    get open() {
      return get(show);
    },
    set open($$value) {
      set(show, $$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1();
      var node = first_child(fragment_1);
      {
        let $0 = derived_safe_equal(() => ($settings(), untrack(() => {
          var _a;
          return ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "" : "outline-hidden focus:outline-hidden";
        })));
        Menu_trigger(node, {
          get class() {
            return `relative w-full ${get($0) ?? ""}`;
          },
          get "aria-label"() {
            return placeholder();
          },
          get id() {
            return `model-selector-${id() ?? ""}-button`;
          },
          children: ($$anchor3, $$slotProps2) => {
            var div = root_2();
            var node_1 = child(div);
            {
              var consequent = ($$anchor4) => {
                var text$1 = text();
                template_effect(() => set_text(text$1, (get(selectedModel), untrack(() => get(selectedModel).label))));
                append($$anchor4, text$1);
              };
              var alternate = ($$anchor4) => {
                var text_1 = text();
                template_effect(() => set_text(text_1, placeholder()));
                append($$anchor4, text_1);
              };
              if_block(node_1, ($$render) => {
                if (get(selectedModel)) $$render(consequent);
                else $$render(alternate, false);
              });
            }
            var node_2 = sibling(node_1, 2);
            ChevronDown(node_2, { className: " self-center ml-2 size-3", strokeWidth: "2.5" });
            reset(div);
            template_effect(() => set_class(div, 1, `flex w-full text-left px-0.5 bg-transparent truncate ${triggerClassName() ?? ""} justify-between ${($settings(), untrack(() => {
              var _a;
              return ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "dark:placeholder-gray-100 placeholder-gray-800" : "placeholder-gray-400";
            })) ?? ""}`));
            event("mouseenter", div, async () => {
              var _a, _b, _c;
              models.set(await getModels(localStorage.token, ((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_direct_connections) && (((_c = $settings()) == null ? void 0 : _c.directConnections) ?? null)));
            });
            append($$anchor3, div);
          },
          $$slots: { default: true }
        });
      }
      var node_3 = sibling(node, 2);
      {
        let $0 = derived_safe_equal(() => $mobile() ? `w-full` : `${className()}`);
        let $1 = derived_safe_equal(() => $mobile() ? "bottom" : "bottom-start");
        Menu_content(node_3, {
          get class() {
            return ` z-40 ${get($0) ?? ""} max-w-[calc(100vw-1rem)] justify-start rounded-2xl  bg-white dark:bg-gray-850 dark:text-white shadow-lg  outline-hidden`;
          },
          get transition() {
            return flyAndScale;
          },
          get side() {
            return get($1);
          },
          sideOffset: 2,
          alignOffset: -1,
          children: ($$anchor3, $$slotProps2) => {
            var fragment_4 = comment();
            var node_4 = first_child(fragment_4);
            slot(node_4, $$props, "default", {}, ($$anchor4) => {
              var fragment_5 = root_6();
              var node_5 = first_child(fragment_5);
              {
                var consequent_1 = ($$anchor5) => {
                  var div_1 = root_7();
                  var node_6 = child(div_1);
                  Search(node_6, { className: "size-4", strokeWidth: "2.5" });
                  var input = sibling(node_6, 2);
                  remove_input_defaults(input);
                  reset(div_1);
                  template_effect(
                    ($02) => {
                      set_attribute(input, "placeholder", searchPlaceholder());
                      set_attribute(input, "aria-label", $02);
                    },
                    [
                      () => ($i18n(), untrack(() => $i18n().t("Search In Models")))
                    ]
                  );
                  bind_value(input, () => get(searchValue), ($$value) => set(searchValue, $$value));
                  event("keydown", input, (e) => {
                    if (e.code === "Enter" && get(filteredItems).length > 0) {
                      value(get(filteredItems)[get(selectedModelIdx)].value);
                      set(show, false);
                      return;
                    } else if (e.code === "ArrowDown") {
                      e.stopPropagation();
                      set(selectedModelIdx, Math.min(get(selectedModelIdx) + 1, get(filteredItems).length - 1));
                    } else if (e.code === "ArrowUp") {
                      e.stopPropagation();
                      set(selectedModelIdx, Math.max(get(selectedModelIdx) - 1, 0));
                    } else {
                      set(selectedModelIdx, 0);
                    }
                    const item = document.querySelector(`[data-arrow-selected="true"]`);
                    item == null ? void 0 : item.scrollIntoView({ block: "center", inline: "nearest", behavior: "instant" });
                  });
                  append($$anchor5, div_1);
                };
                if_block(node_5, ($$render) => {
                  if (searchEnabled()) $$render(consequent_1);
                });
              }
              var div_2 = sibling(node_5, 2);
              var node_7 = child(div_2);
              {
                var consequent_6 = ($$anchor5) => {
                  var div_3 = root_8();
                  var div_4 = child(div_3);
                  var node_8 = child(div_4);
                  {
                    var consequent_2 = ($$anchor6) => {
                      var button = root_9();
                      var text_2 = child(button, true);
                      reset(button);
                      template_effect(
                        ($02) => {
                          set_class(button, 1, `min-w-fit outline-none px-1.5 py-0.5 ${get(selectedTag) === "" && get(selectedConnectionType) === "" ? "" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"} transition capitalize`);
                          set_attribute(button, "aria-pressed", get(selectedTag) === "" && get(selectedConnectionType) === "");
                          set_text(text_2, $02);
                        },
                        [() => ($i18n(), untrack(() => $i18n().t("All")))]
                      );
                      event("click", button, () => {
                        set(selectedConnectionType, "");
                        set(selectedTag, "");
                      });
                      append($$anchor6, button);
                    };
                    if_block(node_8, ($$render) => {
                      if (deep_read_state(items()), get(tags), untrack(() => items().find((item) => {
                        var _a;
                        return ((_a = item.model) == null ? void 0 : _a.connection_type) === "local";
                      }) || items().find((item) => {
                        var _a;
                        return ((_a = item.model) == null ? void 0 : _a.connection_type) === "external";
                      }) || items().find((item) => {
                        var _a;
                        return (_a = item.model) == null ? void 0 : _a.direct;
                      }) || get(tags).length > 0)) $$render(consequent_2);
                    });
                  }
                  var node_9 = sibling(node_8, 2);
                  {
                    var consequent_3 = ($$anchor6) => {
                      var button_1 = root_10();
                      var text_3 = child(button_1, true);
                      reset(button_1);
                      template_effect(
                        ($02) => {
                          set_class(button_1, 1, `min-w-fit outline-none px-1.5 py-0.5 ${get(selectedConnectionType) === "local" ? "" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"} transition capitalize`);
                          set_attribute(button_1, "aria-pressed", get(selectedConnectionType) === "local");
                          set_text(text_3, $02);
                        },
                        [() => ($i18n(), untrack(() => $i18n().t("Local")))]
                      );
                      event("click", button_1, () => {
                        set(selectedTag, "");
                        set(selectedConnectionType, "local");
                      });
                      append($$anchor6, button_1);
                    };
                    if_block(node_9, ($$render) => {
                      if (deep_read_state(items()), untrack(() => items().find((item) => {
                        var _a;
                        return ((_a = item.model) == null ? void 0 : _a.connection_type) === "local";
                      }))) $$render(consequent_3);
                    });
                  }
                  var node_10 = sibling(node_9, 2);
                  {
                    var consequent_4 = ($$anchor6) => {
                      var button_2 = root_11();
                      var text_4 = child(button_2, true);
                      reset(button_2);
                      template_effect(
                        ($02) => {
                          set_class(button_2, 1, `min-w-fit outline-none px-1.5 py-0.5 ${get(selectedConnectionType) === "external" ? "" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"} transition capitalize`);
                          set_attribute(button_2, "aria-pressed", get(selectedConnectionType) === "external");
                          set_text(text_4, $02);
                        },
                        [() => ($i18n(), untrack(() => $i18n().t("External")))]
                      );
                      event("click", button_2, () => {
                        set(selectedTag, "");
                        set(selectedConnectionType, "external");
                      });
                      append($$anchor6, button_2);
                    };
                    if_block(node_10, ($$render) => {
                      if (deep_read_state(items()), untrack(() => items().find((item) => {
                        var _a;
                        return ((_a = item.model) == null ? void 0 : _a.connection_type) === "external";
                      }))) $$render(consequent_4);
                    });
                  }
                  var node_11 = sibling(node_10, 2);
                  {
                    var consequent_5 = ($$anchor6) => {
                      var button_3 = root_12();
                      var text_5 = child(button_3, true);
                      reset(button_3);
                      template_effect(
                        ($02) => {
                          set_class(button_3, 1, `min-w-fit outline-none px-1.5 py-0.5 ${get(selectedConnectionType) === "direct" ? "" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"} transition capitalize`);
                          set_attribute(button_3, "aria-pressed", get(selectedConnectionType) === "direct");
                          set_text(text_5, $02);
                        },
                        [() => ($i18n(), untrack(() => $i18n().t("Direct")))]
                      );
                      event("click", button_3, () => {
                        set(selectedTag, "");
                        set(selectedConnectionType, "direct");
                      });
                      append($$anchor6, button_3);
                    };
                    if_block(node_11, ($$render) => {
                      if (deep_read_state(items()), untrack(() => items().find((item) => {
                        var _a;
                        return (_a = item.model) == null ? void 0 : _a.direct;
                      }))) $$render(consequent_5);
                    });
                  }
                  var node_12 = sibling(node_11, 2);
                  each(node_12, 1, () => get(tags), index, ($$anchor6, tag) => {
                    Tooltip($$anchor6, {
                      get content() {
                        return get(tag);
                      },
                      children: ($$anchor7, $$slotProps3) => {
                        var button_4 = root_14();
                        var text_6 = child(button_4, true);
                        reset(button_4);
                        template_effect(
                          ($02) => {
                            set_class(button_4, 1, `min-w-fit outline-none px-1.5 py-0.5 ${get(selectedTag) === get(tag) ? "" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"} transition capitalize`);
                            set_attribute(button_4, "aria-pressed", get(selectedTag) === get(tag));
                            set_text(text_6, $02);
                          },
                          [
                            () => (get(tag), untrack(() => get(tag).length > 16 ? `${get(tag).slice(0, 16)}...` : get(tag)))
                          ]
                        );
                        event("click", button_4, () => {
                          set(selectedConnectionType, "");
                          set(selectedTag, get(tag));
                        });
                        append($$anchor7, button_4);
                      },
                      $$slots: { default: true }
                    });
                  });
                  reset(div_4);
                  bind_this(div_4, ($$value) => set(tagsContainerElement, $$value), () => get(tagsContainerElement));
                  reset(div_3);
                  event("wheel", div_3, (e) => {
                    if (e.deltaY !== 0) {
                      e.preventDefault();
                      e.currentTarget.scrollLeft += e.deltaY;
                    }
                  });
                  append($$anchor5, div_3);
                };
                if_block(node_7, ($$render) => {
                  if (get(tags), deep_read_state(items()), untrack(() => get(tags) && items().filter((item) => {
                    var _a, _b, _c;
                    return !(((_c = (_b = (_a = item.model) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.hidden) ?? false);
                  }).length > 0)) $$render(consequent_6);
                });
              }
              reset(div_2);
              var div_5 = sibling(div_2, 2);
              var node_13 = child(div_5);
              each(
                node_13,
                1,
                () => get(filteredItems),
                index,
                ($$anchor5, item, index2) => {
                  ModelItem($$anchor5, {
                    get selectedModelIdx() {
                      return get(selectedModelIdx);
                    },
                    get item() {
                      return get(item);
                    },
                    index: index2,
                    get value() {
                      return value();
                    },
                    get pinModelHandler() {
                      return pinModelHandler();
                    },
                    unloadModelHandler,
                    onClick: () => {
                      value(get(item).value);
                      set(selectedModelIdx, index2);
                      set(show, false);
                    }
                  });
                },
                ($$anchor5) => {
                  var div_6 = root_16();
                  var div_7 = child(div_6);
                  var text_7 = child(div_7, true);
                  reset(div_7);
                  reset(div_6);
                  template_effect(($02) => set_text(text_7, $02), [
                    () => ($i18n(), untrack(() => $i18n().t("No results found")))
                  ]);
                  append($$anchor5, div_6);
                }
              );
              var node_14 = sibling(node_13, 2);
              {
                var consequent_7 = ($$anchor5) => {
                  {
                    let $02 = derived_safe_equal(() => ($i18n(), get(searchValue), untrack(() => $i18n().t(`Pull "{{searchValue}}" from Ollama.com`, { searchValue: get(searchValue) }))));
                    Tooltip($$anchor5, {
                      get content() {
                        return get($02);
                      },
                      placement: "top-start",
                      children: ($$anchor6, $$slotProps3) => {
                        var button_5 = root_18();
                        var div_8 = child(button_5);
                        var text_8 = child(div_8, true);
                        reset(div_8);
                        reset(button_5);
                        template_effect(($03) => set_text(text_8, $03), [
                          () => ($i18n(), get(searchValue), untrack(() => $i18n().t(`Pull "{{searchValue}}" from Ollama.com`, { searchValue: get(searchValue) })))
                        ]);
                        event("click", button_5, () => {
                          pullModelHandler();
                        });
                        append($$anchor6, button_5);
                      },
                      $$slots: { default: true }
                    });
                  }
                };
                if_block(node_14, ($$render) => {
                  if (get(searchValue), $MODEL_DOWNLOAD_POOL(), get(ollamaVersion), $user(), untrack(() => {
                    var _a;
                    return !(get(searchValue).trim() in $MODEL_DOWNLOAD_POOL()) && get(searchValue) && get(ollamaVersion) && ((_a = $user()) == null ? void 0 : _a.role) === "admin";
                  })) $$render(consequent_7);
                });
              }
              var node_15 = sibling(node_14, 2);
              each(
                node_15,
                1,
                () => ($MODEL_DOWNLOAD_POOL(), untrack(() => Object.keys($MODEL_DOWNLOAD_POOL()))),
                index,
                ($$anchor5, model) => {
                  var div_9 = root_19();
                  var div_10 = child(div_9);
                  var div_11 = child(div_10);
                  var node_16 = child(div_11);
                  Spinner(node_16, {});
                  reset(div_11);
                  var div_12 = sibling(div_11, 2);
                  var div_13 = child(div_12);
                  var div_14 = child(div_13);
                  var text_9 = child(div_14);
                  reset(div_14);
                  var div_15 = sibling(div_14, 2);
                  var text_10 = child(div_15, true);
                  reset(div_15);
                  reset(div_13);
                  var node_17 = sibling(div_13, 2);
                  {
                    var consequent_8 = ($$anchor6) => {
                      var div_16 = root_20();
                      var text_11 = child(div_16, true);
                      reset(div_16);
                      template_effect(() => set_text(text_11, ($MODEL_DOWNLOAD_POOL(), get(model), untrack(() => $MODEL_DOWNLOAD_POOL()[get(model)].digest))));
                      append($$anchor6, div_16);
                    };
                    if_block(node_17, ($$render) => {
                      if ($MODEL_DOWNLOAD_POOL(), get(model), untrack(() => "digest" in $MODEL_DOWNLOAD_POOL()[get(model)] && $MODEL_DOWNLOAD_POOL()[get(model)].digest)) $$render(consequent_8);
                    });
                  }
                  reset(div_12);
                  reset(div_10);
                  var div_17 = sibling(div_10, 2);
                  var node_18 = child(div_17);
                  {
                    let $02 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Cancel"))));
                    Tooltip(node_18, {
                      get content() {
                        return get($02);
                      },
                      children: ($$anchor6, $$slotProps3) => {
                        var button_6 = root_21();
                        event("click", button_6, () => {
                          cancelModelPullHandler(get(model));
                        });
                        append($$anchor6, button_6);
                      },
                      $$slots: { default: true }
                    });
                  }
                  reset(div_17);
                  reset(div_9);
                  template_effect(() => {
                    set_text(text_9, `Downloading "${get(model) ?? ""}"`);
                    set_text(text_10, ($MODEL_DOWNLOAD_POOL(), get(model), untrack(() => "pullProgress" in $MODEL_DOWNLOAD_POOL()[get(model)] ? `(${$MODEL_DOWNLOAD_POOL()[get(model)].pullProgress}%)` : "")));
                  });
                  append($$anchor5, div_9);
                }
              );
              reset(div_5);
              next(6);
              append($$anchor4, fragment_5);
            });
            append($$anchor3, fragment_4);
          },
          $$slots: { default: true }
        });
      }
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
export {
  Selector as S
};
