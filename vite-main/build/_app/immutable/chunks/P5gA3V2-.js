import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { t as template_effect, p as push, g as getContext, o as onMount, s as set, m as mutable_source, l as legacy_pre_effect, i as deep_read_state, j as legacy_pre_effect_reset, c as child, r as reset, e as sibling, u as untrack, b as get, f as first_child, q as next, h as derived_safe_equal, a as pop, k as tick, n as createEventDispatcher } from "./BxIY6ir7.js";
import { s as set_text, e as event } from "./cBADewWV.js";
import { i as if_block } from "./BoSuMvtf.js";
import { b as from_svg, a as append, f as from_html, t as text, c as comment } from "./CAbo1QWi.js";
import { a as set_attribute, s as set_class, c as clsx } from "./kXiCYuyj.js";
import { p as preventDefault, s as stopPropagation } from "./CGgk3ROl.js";
import { i as init } from "./ByqEASoO.js";
import { p as prop } from "./BRmGPDvq.js";
import { a as store_get, s as setup_stores } from "./BvQ5O7-v.js";
import { z as splitStream, B as formatFileSize, C as getLineCount } from "./Bh-hrM1w.js";
import { e as each, i as index } from "./7_HZMPNF.js";
import { a as WEBUI_API_BASE_URL } from "./DQ9UxF7k.js";
import { b as getKnowledgeById } from "./C_BzFfir.js";
import { M as Modal } from "./DF6V1elH.js";
import { X as XMark } from "./CUUSX84-.js";
import { S as Switch_1 } from "./CakJ276w.js";
import { T as Tooltip } from "./BHXWufQb.js";
import { d as dayjs2 } from "./OO7lCI-F.js";
import { S as Spinner } from "./CtnI4RVL.js";
import { b as settings } from "./2Yg1sHDo.js";
var root$5 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"></path></svg>`);
function Folder($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$5();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root$4 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"></path></svg>`);
function ChatBubble($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$4();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
const uploadFile = async (token, file, metadata) => {
  const data = new FormData();
  data.append("file", file);
  if (metadata) {
    data.append("metadata", JSON.stringify(metadata));
  }
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/files/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      authorization: `Bearer ${token}`
    },
    body: data
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err.detail || err.message;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  if (res) {
    const status = await getFileProcessStatus(token, res.id);
    if (status && status.ok) {
      const reader = status.body.pipeThrough(new TextDecoderStream()).pipeThrough(splitStream("\n")).getReader();
      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          break;
        }
        try {
          let lines = value.split("\n");
          for (const line of lines) {
            if (line !== "") {
              console.log(line);
              if (line === "data: [DONE]") {
                console.log(line);
              } else {
                let data2 = JSON.parse(line.replace(/^data: /, ""));
                console.log(data2);
                if (data2 == null ? void 0 : data2.error) {
                  console.error(data2.error);
                  res.error = data2.error;
                }
                if (res == null ? void 0 : res.data) {
                  res.data = data2;
                }
              }
            }
          }
        } catch (error2) {
          console.log(error2);
        }
      }
    }
  }
  if (error) {
    throw error;
  }
  return res;
};
const getFileProcessStatus = async (token, id) => {
  const queryParams = new URLSearchParams();
  queryParams.append("stream", "true");
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/files/${id}/process/status?${queryParams}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      authorization: `Bearer ${token}`
    }
  }).catch((err) => {
    error = err.detail;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getFileById = async (token, id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/files/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err.detail;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const updateFileDataContentById = async (token, id, content) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/files/${id}/data/content/update`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      content
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err.detail;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const deleteAllFiles = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/files/all`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err.detail;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
var root_3$1 = from_html(`<div class="capitalize shrink-0"> </div> •`, 1);
var root_4 = from_html(`<div class="line-clamp-1"> </div> •`, 1);
var root_5$1 = from_html(`<div class="capitalize shrink-0"> </div>`);
var root_2$1 = from_html(`<!> <!> <!>`, 1);
var root_6 = from_html(`<div class="capitalize shrink-0"> </div> •`, 1);
var root_7 = from_html(`<div class="capitalize shrink-0"> </div> <div class="flex items-center gap-1 shrink-0"> </div>`, 1);
var root_8 = from_html(`<div class="capitalize shrink-0"> </div>`);
var root_10 = from_html(`<div class="flex items-center gap-1.5 text-xs"><!> <!></div>`);
var root_9 = from_html(`<div class=" self-end"><!></div>`);
var root_15 = from_html(`<div class="flex items-center gap-2 mb-2"><div class="flex-shrink-0 text-xs"> </div></div>`);
var root_14 = from_html(`<div></div>`);
var root_18 = from_html(`<iframe class="w-full h-[70vh] border-0 rounded-lg"></iframe>`);
var root_19 = from_html(`<div class="max-h-96 overflow-scroll scrollbar-hidden text-xs whitespace-pre-wrap"> </div>`);
var root_17$1 = from_html(`<div class="flex mb-2.5 scrollbar-none overflow-x-auto w-full border-b border-gray-50 dark:border-gray-850 text-center text-sm font-medium bg-transparent dark:text-gray-200"><button type="button"> </button> <button type="button"> </button></div> <!>`, 1);
var root_21 = from_html(`<audio class="w-full border-0 rounded-lg mb-2" controls playsinline=""></audio>`);
var root_22 = from_html(`<div class="max-h-96 overflow-scroll scrollbar-hidden text-xs whitespace-pre-wrap"> </div>`);
var root_20 = from_html(`<!> <!>`, 1);
var root_23 = from_html(`<div class="flex items-center justify-center py-6"><!></div>`);
var root_1 = from_html(`<div class="font-primary px-4.5 py-3.5 w-full flex flex-col justify-center dark:text-gray-400"><div class=" pb-2"><div class="flex items-start justify-between"><div><div class=" font-medium text-lg dark:text-gray-100"><a href="#" class="hover:underline line-clamp-1"> </a></div></div> <div><button><!></button></div></div> <div><div class="flex flex-col items-center md:flex-row gap-1 justify-between w-full"><div class=" flex flex-wrap text-xs gap-1 text-gray-500"><!> <!> <!> <!></div> <!></div></div></div> <div class="max-h-[75vh] overflow-auto"><!></div></div>`);
function FileItemModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const isPDF = mutable_source();
  const i18n = getContext("i18n");
  let item = prop($$props, "item", 12);
  let show = prop($$props, "show", 12, false);
  let edit = prop($$props, "edit", 8, false);
  let enableFullContent = mutable_source(false);
  let isAudio = mutable_source(false);
  let loading = mutable_source(false);
  let selectedTab = mutable_source("");
  const loadContent = async () => {
    var _a, _b;
    if (((_a = item()) == null ? void 0 : _a.type) === "collection") {
      set(loading, true);
      const knowledge = await getKnowledgeById(localStorage.token, item().id).catch((e) => {
        console.error("Error fetching knowledge base:", e);
        return null;
      });
      if (knowledge) {
        item(item().files = knowledge.files || [], true);
      }
      set(loading, false);
    } else if (((_b = item()) == null ? void 0 : _b.type) === "file") {
      set(loading, true);
      const file = await getFileById(localStorage.token, item().id).catch((e) => {
        console.error("Error fetching file:", e);
        return null;
      });
      if (file) {
        item(item().file = file || {}, true);
      }
      set(loading, false);
    }
    await tick();
  };
  onMount(() => {
    var _a;
    console.log(item());
    if (((_a = item()) == null ? void 0 : _a.context) === "full") {
      set(enableFullContent, true);
    }
  });
  legacy_pre_effect(() => deep_read_state(item()), () => {
    var _a, _b, _c, _d;
    set(isPDF, ((_b = (_a = item()) == null ? void 0 : _a.meta) == null ? void 0 : _b.content_type) === "application/pdf" || ((_c = item()) == null ? void 0 : _c.name) && ((_d = item()) == null ? void 0 : _d.name.toLowerCase().endsWith(".pdf")));
  });
  legacy_pre_effect(() => deep_read_state(item()), () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    set(isAudio, (((_b = (_a = item()) == null ? void 0 : _a.meta) == null ? void 0 : _b.content_type) ?? "").startsWith("audio/") || ((_c = item()) == null ? void 0 : _c.name) && ((_d = item()) == null ? void 0 : _d.name.toLowerCase().endsWith(".mp3")) || ((_e = item()) == null ? void 0 : _e.name) && ((_f = item()) == null ? void 0 : _f.name.toLowerCase().endsWith(".wav")) || ((_g = item()) == null ? void 0 : _g.name) && ((_h = item()) == null ? void 0 : _h.name.toLowerCase().endsWith(".ogg")) || ((_i = item()) == null ? void 0 : _i.name) && ((_j = item()) == null ? void 0 : _j.name.toLowerCase().endsWith(".m4a")) || ((_k = item()) == null ? void 0 : _k.name) && ((_l = item()) == null ? void 0 : _l.name.toLowerCase().endsWith(".webm")));
  });
  legacy_pre_effect(() => deep_read_state(show()), () => {
    if (show()) {
      loadContent();
    }
  });
  legacy_pre_effect_reset();
  init();
  Modal($$anchor, {
    size: "lg",
    get show() {
      return show();
    },
    set show($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var div = root_1();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var div_3 = child(div_2);
      var div_4 = child(div_3);
      var a = child(div_4);
      var text$1 = child(a, true);
      reset(a);
      reset(div_4);
      reset(div_3);
      var div_5 = sibling(div_3, 2);
      var button = child(div_5);
      var node = child(button);
      XMark(node, {});
      reset(button);
      reset(div_5);
      reset(div_2);
      var div_6 = sibling(div_2, 2);
      var div_7 = child(div_6);
      var div_8 = child(div_7);
      var node_1 = child(div_8);
      {
        var consequent_3 = ($$anchor3) => {
          var fragment_1 = root_2$1();
          var node_2 = first_child(fragment_1);
          {
            var consequent = ($$anchor4) => {
              var fragment_2 = root_3$1();
              var div_9 = first_child(fragment_2);
              var text_1 = child(div_9, true);
              reset(div_9);
              next();
              template_effect(() => set_text(text_1, (deep_read_state(item()), untrack(() => item().type))));
              append($$anchor4, fragment_2);
            };
            if_block(node_2, ($$render) => {
              if (deep_read_state(item()), untrack(() => {
                var _a;
                return (_a = item()) == null ? void 0 : _a.type;
              })) $$render(consequent);
            });
          }
          var node_3 = sibling(node_2, 2);
          {
            var consequent_1 = ($$anchor4) => {
              var fragment_3 = root_4();
              var div_10 = first_child(fragment_3);
              var text_2 = child(div_10, true);
              reset(div_10);
              next();
              template_effect(() => set_text(text_2, (deep_read_state(item()), untrack(() => item().description))));
              append($$anchor4, fragment_3);
            };
            if_block(node_3, ($$render) => {
              if (deep_read_state(item()), untrack(() => {
                var _a;
                return (_a = item()) == null ? void 0 : _a.description;
              })) $$render(consequent_1);
            });
          }
          var node_4 = sibling(node_3, 2);
          {
            var consequent_2 = ($$anchor4) => {
              var div_11 = root_5$1();
              var text_3 = child(div_11, true);
              reset(div_11);
              template_effect(($0) => set_text(text_3, $0), [
                () => (deep_read_state(dayjs2), deep_read_state(item()), untrack(() => dayjs2(item().created_at * 1e3).format("LL")))
              ]);
              append($$anchor4, div_11);
            };
            if_block(node_4, ($$render) => {
              if (deep_read_state(item()), untrack(() => {
                var _a;
                return (_a = item()) == null ? void 0 : _a.created_at;
              })) $$render(consequent_2);
            });
          }
          append($$anchor3, fragment_1);
        };
        if_block(node_1, ($$render) => {
          if (deep_read_state(item()), untrack(() => {
            var _a;
            return ((_a = item()) == null ? void 0 : _a.type) === "collection";
          })) $$render(consequent_3);
        });
      }
      var node_5 = sibling(node_1, 2);
      {
        var consequent_4 = ($$anchor3) => {
          var fragment_4 = root_6();
          var div_12 = first_child(fragment_4);
          var text_4 = child(div_12, true);
          reset(div_12);
          next();
          template_effect(($0) => set_text(text_4, $0), [
            () => (deep_read_state(formatFileSize), deep_read_state(item()), untrack(() => formatFileSize(item().size)))
          ]);
          append($$anchor3, fragment_4);
        };
        if_block(node_5, ($$render) => {
          if (deep_read_state(item()), untrack(() => item().size)) $$render(consequent_4);
        });
      }
      var node_6 = sibling(node_5, 2);
      {
        var consequent_5 = ($$anchor3) => {
          var fragment_5 = root_7();
          var div_13 = first_child(fragment_5);
          var text_5 = child(div_13, true);
          reset(div_13);
          var div_14 = sibling(div_13, 2);
          var text_6 = child(div_14);
          reset(div_14);
          template_effect(
            ($0, $1) => {
              set_text(text_5, $0);
              set_text(text_6, `• ${$1 ?? ""}`);
            },
            [
              () => ($i18n(), deep_read_state(getLineCount), deep_read_state(item()), untrack(() => {
                var _a, _b, _c;
                return $i18n().t("{{COUNT}} extracted lines", { COUNT: getLineCount(((_c = (_b = (_a = item()) == null ? void 0 : _a.file) == null ? void 0 : _b.data) == null ? void 0 : _c.content) ?? "") });
              })),
              () => ($i18n(), untrack(() => $i18n().t("Formatting may be inconsistent from source.")))
            ]
          );
          append($$anchor3, fragment_5);
        };
        if_block(node_6, ($$render) => {
          if (deep_read_state(item()), untrack(() => {
            var _a, _b, _c;
            return (_c = (_b = (_a = item()) == null ? void 0 : _a.file) == null ? void 0 : _b.data) == null ? void 0 : _c.content;
          })) $$render(consequent_5);
        });
      }
      var node_7 = sibling(node_6, 2);
      {
        var consequent_6 = ($$anchor3) => {
          var div_15 = root_8();
          var text_7 = child(div_15, true);
          reset(div_15);
          template_effect(($0) => set_text(text_7, $0), [
            () => ($i18n(), untrack(() => $i18n().t("Knowledge Base")))
          ]);
          append($$anchor3, div_15);
        };
        if_block(node_7, ($$render) => {
          if (deep_read_state(item()), untrack(() => {
            var _a;
            return (_a = item()) == null ? void 0 : _a.knowledge;
          })) $$render(consequent_6);
        });
      }
      reset(div_8);
      var node_8 = sibling(div_8, 2);
      {
        var consequent_8 = ($$anchor3) => {
          var div_16 = root_9();
          var node_9 = child(div_16);
          {
            let $0 = derived_safe_equal(() => (get(enableFullContent), $i18n(), untrack(() => get(enableFullContent) ? $i18n().t("Inject the entire content as context for comprehensive processing, this is recommended for complex queries.") : $i18n().t("Default to segmented retrieval for focused and relevant content extraction, this is recommended for most cases."))));
            Tooltip(node_9, {
              get content() {
                return get($0);
              },
              children: ($$anchor4, $$slotProps2) => {
                var div_17 = root_10();
                var node_10 = child(div_17);
                {
                  var consequent_7 = ($$anchor5) => {
                    var text_8 = text();
                    template_effect(($02) => set_text(text_8, $02), [
                      () => ($i18n(), untrack(() => $i18n().t("Using Entire Document")))
                    ]);
                    append($$anchor5, text_8);
                  };
                  var alternate = ($$anchor5) => {
                    var text_9 = text();
                    template_effect(($02) => set_text(text_9, $02), [
                      () => ($i18n(), untrack(() => $i18n().t("Using Focused Retrieval")))
                    ]);
                    append($$anchor5, text_9);
                  };
                  if_block(node_10, ($$render) => {
                    if (get(enableFullContent)) $$render(consequent_7);
                    else $$render(alternate, false);
                  });
                }
                var node_11 = sibling(node_10, 2);
                Switch_1(node_11, {
                  get state() {
                    return get(enableFullContent);
                  },
                  set state($$value) {
                    set(enableFullContent, $$value);
                  },
                  $$events: {
                    change: (e) => {
                      item(item().context = e.detail ? "full" : void 0, true);
                    }
                  },
                  $$legacy: true
                });
                reset(div_17);
                append($$anchor4, div_17);
              },
              $$slots: { default: true }
            });
          }
          reset(div_16);
          append($$anchor3, div_16);
        };
        if_block(node_8, ($$render) => {
          if (edit()) $$render(consequent_8);
        });
      }
      reset(div_7);
      reset(div_6);
      reset(div_1);
      var div_18 = sibling(div_1, 2);
      var node_12 = child(div_18);
      {
        var consequent_14 = ($$anchor3) => {
          var fragment_8 = comment();
          var node_13 = first_child(fragment_8);
          {
            var consequent_9 = ($$anchor4) => {
              var div_19 = root_14();
              each(div_19, 5, () => (deep_read_state(item()), untrack(() => {
                var _a;
                return (_a = item()) == null ? void 0 : _a.files;
              })), index, ($$anchor5, file) => {
                var div_20 = root_15();
                var div_21 = child(div_20);
                var text_10 = child(div_21, true);
                reset(div_21);
                reset(div_20);
                template_effect(() => set_text(text_10, (get(file), untrack(() => {
                  var _a, _b;
                  return (_b = (_a = get(file)) == null ? void 0 : _a.meta) == null ? void 0 : _b.name;
                }))));
                append($$anchor5, div_20);
              });
              reset(div_19);
              append($$anchor4, div_19);
            };
            var alternate_3 = ($$anchor4) => {
              var fragment_9 = comment();
              var node_14 = first_child(fragment_9);
              {
                var consequent_11 = ($$anchor5) => {
                  var fragment_10 = root_17$1();
                  var div_22 = first_child(fragment_10);
                  var button_1 = child(div_22);
                  var text_11 = child(button_1, true);
                  reset(button_1);
                  var button_2 = sibling(button_1, 2);
                  var text_12 = child(button_2, true);
                  reset(button_2);
                  reset(div_22);
                  var node_15 = sibling(div_22, 2);
                  {
                    var consequent_10 = ($$anchor6) => {
                      var iframe = root_18();
                      template_effect(() => {
                        set_attribute(iframe, "title", (deep_read_state(item()), untrack(() => {
                          var _a;
                          return (_a = item()) == null ? void 0 : _a.name;
                        })));
                        set_attribute(iframe, "src", (deep_read_state(WEBUI_API_BASE_URL), deep_read_state(item()), untrack(() => `${WEBUI_API_BASE_URL}/files/${item().id}/content`)));
                      });
                      append($$anchor6, iframe);
                    };
                    var alternate_1 = ($$anchor6) => {
                      var div_23 = root_19();
                      var text_13 = child(div_23, true);
                      reset(div_23);
                      template_effect(($0) => set_text(text_13, $0), [
                        () => (deep_read_state(item()), untrack(() => {
                          var _a, _b, _c;
                          return (((_c = (_b = (_a = item()) == null ? void 0 : _a.file) == null ? void 0 : _b.data) == null ? void 0 : _c.content) ?? "").trim() || "No content";
                        }))
                      ]);
                      append($$anchor6, div_23);
                    };
                    if_block(node_15, ($$render) => {
                      if (get(selectedTab) === "preview") $$render(consequent_10);
                      else $$render(alternate_1, false);
                    });
                  }
                  template_effect(
                    ($0, $1) => {
                      set_class(button_1, 1, `min-w-fit py-1.5 px-4 border-b ${get(selectedTab) === "" ? " " : " border-transparent text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"} transition`);
                      set_text(text_11, $0);
                      set_class(button_2, 1, `min-w-fit py-1.5 px-4 border-b ${get(selectedTab) === "preview" ? " " : " border-transparent text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"} transition`);
                      set_text(text_12, $1);
                    },
                    [
                      () => ($i18n(), untrack(() => $i18n().t("Content"))),
                      () => ($i18n(), untrack(() => $i18n().t("Preview")))
                    ]
                  );
                  event("click", button_1, () => {
                    set(selectedTab, "");
                  });
                  event("click", button_2, () => {
                    set(selectedTab, "preview");
                  });
                  append($$anchor5, fragment_10);
                };
                var alternate_2 = ($$anchor5) => {
                  var fragment_11 = root_20();
                  var node_16 = first_child(fragment_11);
                  {
                    var consequent_12 = ($$anchor6) => {
                      var audio = root_21();
                      template_effect(() => set_attribute(audio, "src", (deep_read_state(WEBUI_API_BASE_URL), deep_read_state(item()), untrack(() => `${WEBUI_API_BASE_URL}/files/${item().id}/content`))));
                      append($$anchor6, audio);
                    };
                    if_block(node_16, ($$render) => {
                      if (get(isAudio)) $$render(consequent_12);
                    });
                  }
                  var node_17 = sibling(node_16, 2);
                  {
                    var consequent_13 = ($$anchor6) => {
                      var div_24 = root_22();
                      var text_14 = child(div_24, true);
                      reset(div_24);
                      template_effect(($0) => set_text(text_14, $0), [
                        () => (deep_read_state(item()), untrack(() => {
                          var _a, _b, _c;
                          return (((_c = (_b = (_a = item()) == null ? void 0 : _a.file) == null ? void 0 : _b.data) == null ? void 0 : _c.content) ?? "").trim() || "No content";
                        }))
                      ]);
                      append($$anchor6, div_24);
                    };
                    if_block(node_17, ($$render) => {
                      if (deep_read_state(item()), untrack(() => {
                        var _a, _b;
                        return (_b = (_a = item()) == null ? void 0 : _a.file) == null ? void 0 : _b.data;
                      })) $$render(consequent_13);
                    });
                  }
                  append($$anchor5, fragment_11);
                };
                if_block(
                  node_14,
                  ($$render) => {
                    if (get(isPDF)) $$render(consequent_11);
                    else $$render(alternate_2, false);
                  },
                  true
                );
              }
              append($$anchor4, fragment_9);
            };
            if_block(node_13, ($$render) => {
              if (deep_read_state(item()), untrack(() => {
                var _a;
                return ((_a = item()) == null ? void 0 : _a.type) === "collection";
              })) $$render(consequent_9);
              else $$render(alternate_3, false);
            });
          }
          append($$anchor3, fragment_8);
        };
        var alternate_4 = ($$anchor3) => {
          var div_25 = root_23();
          var node_18 = child(div_25);
          Spinner(node_18, { className: "size-5" });
          reset(div_25);
          append($$anchor3, div_25);
        };
        if_block(node_12, ($$render) => {
          if (!get(loading)) $$render(consequent_14);
          else $$render(alternate_4, false);
        });
      }
      reset(div_18);
      reset(div);
      template_effect(() => set_text(text$1, (deep_read_state(item()), untrack(() => {
        var _a;
        return ((_a = item()) == null ? void 0 : _a.name) ?? "File";
      }))));
      event("click", a, preventDefault(() => {
        if (!get(isPDF) && item().url) {
          window.open(item().type === "file" ? `${item().url}/content` : `${item().url}`, "_blank");
        }
      }));
      event("click", button, () => {
        show(false);
      });
      append($$anchor2, div);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root$3 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 21.4V2.6C4 2.26863 4.26863 2 4.6 2H16.2515C16.4106 2 16.5632 2.06321 16.6757 2.17574L19.8243 5.32426C19.9368 5.43679 20 5.5894 20 5.74853V21.4C20 21.7314 19.7314 22 19.4 22H4.6C4.26863 22 4 21.7314 4 21.4Z" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 10L16 10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 18L16 18" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 14L12 14" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 2V5.4C16 5.73137 16.2686 6 16.6 6H20" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
function DocumentPage($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$3();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root$2 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 12V18C5 18 5 21 12 21C19 21 19 18 19 18V12"></path><path d="M5 6V12C5 12 5 15 12 15C19 15 19 12 19 12V6"></path><path d="M12 3C19 3 19 6 19 6C19 6 19 9 12 9C5 9 5 6 5 6C5 6 5 3 12 3Z"></path></svg>`);
function Database($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$2();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root$1 = from_svg(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M20 12V5.74853C20 5.5894 19.9368 5.43679 19.8243 5.32426L16.6757 2.17574C16.5632 2.06321 16.4106 2 16.2515 2H4.6C4.26863 2 4 2.26863 4 2.6V21.4C4 21.7314 4.26863 22 4.6 22H11" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 10H16M8 6H12M8 14H11" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.9541 16.9394L18.9541 15.9394C19.392 15.5015 20.102 15.5015 20.5399 15.9394V15.9394C20.9778 16.3773 20.9778 17.0873 20.5399 17.5252L19.5399 18.5252M17.9541 16.9394L14.963 19.9305C14.8131 20.0804 14.7147 20.2741 14.6821 20.4835L14.4394 22.0399L15.9957 21.7973C16.2052 21.7646 16.3988 21.6662 16.5487 21.5163L19.5399 18.5252M17.9541 16.9394L19.5399 18.5252" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 2V5.4C16 5.73137 16.2686 6 16.6 6H20" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
function PageEdit($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-4 h-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$1();
  template_effect(() => {
    set_class(svg, 0, clsx(className()));
    set_attribute(svg, "stroke-width", strokeWidth());
  });
  append($$anchor, svg);
}
var root_3 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class=" size-4.5"><path fill-rule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z" clip-rule="evenodd"></path><path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z"></path></svg>`);
var root_2 = from_html(`<div class="size-10 shrink-0 flex justify-center items-center bg-black/20 dark:bg-white/10 text-white rounded-xl"><!></div>`);
var root_5 = from_html(`<div class="pl-1.5"><!></div>`);
var root_25 = from_html(`<span class=" capitalize line-clamp-1"> </span>`);
var root_26 = from_html(`<span class="capitalize"> </span>`);
var root_17 = from_html(`<div class="flex flex-col justify-center -space-y-0.5 px-2.5 w-full"><div class=" dark:text-gray-100 text-sm font-medium line-clamp-1 mb-1"> </div> <div><!> <!></div></div>`);
var root_29 = from_html(`<div class="text-gray-500 text-xs capitalize shrink-0"> </div>`);
var root_30 = from_html(`<div class="text-gray-500 text-xs capitalize shrink-0"> </div>`);
var root_28 = from_html(`<div class="flex flex-col justify-center -space-y-0.5 px-1 w-full"><div class=" dark:text-gray-100 text-sm flex justify-between items-center"><div class="font-medium line-clamp-1 flex-1 pr-1"> </div> <!></div></div>`);
var root_31 = from_html(`<div class=" absolute -top-1 -right-1"><button type="button"><!></button></div>`);
var root = from_html(`<!> <button type="button"><!> <!> <!></button>`, 1);
function FileItem($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  const dispatch = createEventDispatcher();
  let className = prop($$props, "className", 8, "w-60");
  let colorClassName = prop($$props, "colorClassName", 8, "bg-white dark:bg-gray-850 border border-gray-50 dark:border-gray-800");
  let url = prop($$props, "url", 8, null);
  let dismissible = prop($$props, "dismissible", 8, false);
  let modal = prop($$props, "modal", 8, false);
  let loading = prop($$props, "loading", 8, false);
  let item = prop($$props, "item", 12, null);
  let edit = prop($$props, "edit", 8, false);
  let small = prop($$props, "small", 8, false);
  let name = prop($$props, "name", 8);
  let type = prop($$props, "type", 8);
  let size = prop($$props, "size", 8);
  let showModal = mutable_source(false);
  const decodeString = (str) => {
    try {
      return decodeURIComponent(str);
    } catch (e) {
      return str;
    }
  };
  init();
  var fragment = root();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      FileItemModal($$anchor2, {
        get edit() {
          return edit();
        },
        get show() {
          return get(showModal);
        },
        set show($$value) {
          set(showModal, $$value);
        },
        get item() {
          return item();
        },
        set item($$value) {
          item($$value);
        },
        $$legacy: true
      });
    };
    if_block(node, ($$render) => {
      if (item()) $$render(consequent);
    });
  }
  var button = sibling(node, 2);
  var node_1 = child(button);
  {
    var consequent_2 = ($$anchor2) => {
      var div = root_2();
      var node_2 = child(div);
      {
        var consequent_1 = ($$anchor3) => {
          var svg = root_3();
          append($$anchor3, svg);
        };
        var alternate = ($$anchor3) => {
          Spinner($$anchor3, {});
        };
        if_block(node_2, ($$render) => {
          if (!loading()) $$render(consequent_1);
          else $$render(alternate, false);
        });
      }
      reset(div);
      append($$anchor2, div);
    };
    var alternate_6 = ($$anchor2) => {
      var div_1 = root_5();
      var node_3 = child(div_1);
      {
        var consequent_7 = ($$anchor3) => {
          {
            let $0 = derived_safe_equal(() => (deep_read_state(type()), $i18n(), untrack(() => type() === "collection" ? $i18n().t("Collection") : type() === "note" ? $i18n().t("Note") : type() === "chat" ? $i18n().t("Chat") : type() === "file" ? $i18n().t("File") : $i18n().t("Document"))));
            Tooltip($$anchor3, {
              get content() {
                return get($0);
              },
              placement: "top",
              children: ($$anchor4, $$slotProps) => {
                var fragment_4 = comment();
                var node_4 = first_child(fragment_4);
                {
                  var consequent_3 = ($$anchor5) => {
                    Database($$anchor5, {});
                  };
                  var alternate_4 = ($$anchor5) => {
                    var fragment_6 = comment();
                    var node_5 = first_child(fragment_6);
                    {
                      var consequent_4 = ($$anchor6) => {
                        PageEdit($$anchor6, {});
                      };
                      var alternate_3 = ($$anchor6) => {
                        var fragment_8 = comment();
                        var node_6 = first_child(fragment_8);
                        {
                          var consequent_5 = ($$anchor7) => {
                            ChatBubble($$anchor7, {});
                          };
                          var alternate_2 = ($$anchor7) => {
                            var fragment_10 = comment();
                            var node_7 = first_child(fragment_10);
                            {
                              var consequent_6 = ($$anchor8) => {
                                Folder($$anchor8, {});
                              };
                              var alternate_1 = ($$anchor8) => {
                                DocumentPage($$anchor8, {});
                              };
                              if_block(
                                node_7,
                                ($$render) => {
                                  if (type() === "folder") $$render(consequent_6);
                                  else $$render(alternate_1, false);
                                },
                                true
                              );
                            }
                            append($$anchor7, fragment_10);
                          };
                          if_block(
                            node_6,
                            ($$render) => {
                              if (type() === "chat") $$render(consequent_5);
                              else $$render(alternate_2, false);
                            },
                            true
                          );
                        }
                        append($$anchor6, fragment_8);
                      };
                      if_block(
                        node_5,
                        ($$render) => {
                          if (type() === "note") $$render(consequent_4);
                          else $$render(alternate_3, false);
                        },
                        true
                      );
                    }
                    append($$anchor5, fragment_6);
                  };
                  if_block(node_4, ($$render) => {
                    if (type() === "collection") $$render(consequent_3);
                    else $$render(alternate_4, false);
                  });
                }
                append($$anchor4, fragment_4);
              },
              $$slots: { default: true }
            });
          }
        };
        var alternate_5 = ($$anchor3) => {
          Spinner($$anchor3, {});
        };
        if_block(node_3, ($$render) => {
          if (!loading()) $$render(consequent_7);
          else $$render(alternate_5, false);
        });
      }
      reset(div_1);
      append($$anchor2, div_1);
    };
    if_block(node_1, ($$render) => {
      if (!small()) $$render(consequent_2);
      else $$render(alternate_6, false);
    });
  }
  var node_8 = sibling(node_1, 2);
  {
    var consequent_13 = ($$anchor2) => {
      var div_2 = root_17();
      var div_3 = child(div_2);
      var text$1 = child(div_3, true);
      reset(div_3);
      var div_4 = sibling(div_3, 2);
      var node_9 = child(div_4);
      {
        var consequent_8 = ($$anchor3) => {
          var text_1 = text();
          template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("File")))]);
          append($$anchor3, text_1);
        };
        var alternate_10 = ($$anchor3) => {
          var fragment_15 = comment();
          var node_10 = first_child(fragment_15);
          {
            var consequent_9 = ($$anchor4) => {
              var text_2 = text();
              template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Note")))]);
              append($$anchor4, text_2);
            };
            var alternate_9 = ($$anchor4) => {
              var fragment_17 = comment();
              var node_11 = first_child(fragment_17);
              {
                var consequent_10 = ($$anchor5) => {
                  var text_3 = text();
                  template_effect(($0) => set_text(text_3, $0), [() => ($i18n(), untrack(() => $i18n().t("Document")))]);
                  append($$anchor5, text_3);
                };
                var alternate_8 = ($$anchor5) => {
                  var fragment_19 = comment();
                  var node_12 = first_child(fragment_19);
                  {
                    var consequent_11 = ($$anchor6) => {
                      var text_4 = text();
                      template_effect(($0) => set_text(text_4, $0), [() => ($i18n(), untrack(() => $i18n().t("Collection")))]);
                      append($$anchor6, text_4);
                    };
                    var alternate_7 = ($$anchor6) => {
                      var span = root_25();
                      var text_5 = child(span, true);
                      reset(span);
                      template_effect(() => set_text(text_5, type()));
                      append($$anchor6, span);
                    };
                    if_block(
                      node_12,
                      ($$render) => {
                        if (type() === "collection") $$render(consequent_11);
                        else $$render(alternate_7, false);
                      },
                      true
                    );
                  }
                  append($$anchor5, fragment_19);
                };
                if_block(
                  node_11,
                  ($$render) => {
                    if (type() === "doc") $$render(consequent_10);
                    else $$render(alternate_8, false);
                  },
                  true
                );
              }
              append($$anchor4, fragment_17);
            };
            if_block(
              node_10,
              ($$render) => {
                if (type() === "note") $$render(consequent_9);
                else $$render(alternate_9, false);
              },
              true
            );
          }
          append($$anchor3, fragment_15);
        };
        if_block(node_9, ($$render) => {
          if (type() === "file") $$render(consequent_8);
          else $$render(alternate_10, false);
        });
      }
      var node_13 = sibling(node_9, 2);
      {
        var consequent_12 = ($$anchor3) => {
          var span_1 = root_26();
          var text_6 = child(span_1, true);
          reset(span_1);
          template_effect(($0) => set_text(text_6, $0), [
            () => (deep_read_state(formatFileSize), deep_read_state(size()), untrack(() => formatFileSize(size())))
          ]);
          append($$anchor3, span_1);
        };
        if_block(node_13, ($$render) => {
          if (size()) $$render(consequent_12);
        });
      }
      reset(div_4);
      reset(div_2);
      template_effect(
        ($0) => {
          set_text(text$1, $0);
          set_class(div_4, 1, ` flex justify-between text-xs line-clamp-1 ${($settings(), untrack(() => {
            var _a;
            return ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500";
          })) ?? ""}`);
        },
        [
          () => (deep_read_state(name()), untrack(() => decodeString(name())))
        ]
      );
      append($$anchor2, div_2);
    };
    var alternate_12 = ($$anchor2) => {
      {
        let $0 = derived_safe_equal(() => (deep_read_state(name()), untrack(() => decodeString(name()))));
        Tooltip($$anchor2, {
          get content() {
            return get($0);
          },
          className: "flex flex-col w-full",
          placement: "top-start",
          children: ($$anchor3, $$slotProps) => {
            var div_5 = root_28();
            var div_6 = child(div_5);
            var div_7 = child(div_6);
            var text_7 = child(div_7, true);
            reset(div_7);
            var node_14 = sibling(div_7, 2);
            {
              var consequent_14 = ($$anchor4) => {
                var div_8 = root_29();
                var text_8 = child(div_8, true);
                reset(div_8);
                template_effect(($02) => set_text(text_8, $02), [
                  () => (deep_read_state(formatFileSize), deep_read_state(size()), untrack(() => formatFileSize(size())))
                ]);
                append($$anchor4, div_8);
              };
              var alternate_11 = ($$anchor4) => {
                var div_9 = root_30();
                var text_9 = child(div_9, true);
                reset(div_9);
                template_effect(() => set_text(text_9, type()));
                append($$anchor4, div_9);
              };
              if_block(node_14, ($$render) => {
                if (size()) $$render(consequent_14);
                else $$render(alternate_11, false);
              });
            }
            reset(div_6);
            reset(div_5);
            template_effect(($02) => set_text(text_7, $02), [
              () => (deep_read_state(name()), untrack(() => decodeString(name())))
            ]);
            append($$anchor3, div_5);
          },
          $$slots: { default: true }
        });
      }
    };
    if_block(node_8, ($$render) => {
      if (!small()) $$render(consequent_13);
      else $$render(alternate_12, false);
    });
  }
  var node_15 = sibling(node_8, 2);
  {
    var consequent_15 = ($$anchor2) => {
      var div_10 = root_31();
      var button_1 = child(div_10);
      var node_16 = child(button_1);
      XMark(node_16, { className: "size-4" });
      reset(button_1);
      reset(div_10);
      template_effect(
        ($0) => {
          set_attribute(button_1, "aria-label", $0);
          set_class(button_1, 1, ` bg-white text-black border border-gray-50 rounded-full ${($settings(), untrack(() => {
            var _a;
            return ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "" : "outline-hidden focus:outline-hidden group-hover:visible invisible transition";
          })) ?? ""}`);
        },
        [() => ($i18n(), untrack(() => $i18n().t("Remove File")))]
      );
      event("click", button_1, stopPropagation(() => {
        dispatch("dismiss");
      }));
      append($$anchor2, div_10);
    };
    if_block(node_15, ($$render) => {
      if (dismissible()) $$render(consequent_15);
    });
  }
  reset(button);
  template_effect(() => set_class(button, 1, `relative group p-1.5 ${className() ?? ""} flex items-center gap-1 ${colorClassName() ?? ""} ${small() ? "rounded-xl p-2" : "rounded-2xl"} text-left`));
  event("click", button, async () => {
    var _a, _b, _c, _d;
    if (((_c = (_b = (_a = item()) == null ? void 0 : _a.file) == null ? void 0 : _b.data) == null ? void 0 : _c.content) || ((_d = item()) == null ? void 0 : _d.type) === "file" || modal()) {
      set(showModal, !get(showModal));
    } else {
      if (url()) {
        if (type() === "file") {
          window.open(`${url()}/content`, "_blank").focus();
        } else {
          window.open(`${url()}`, "_blank").focus();
        }
      }
    }
    dispatch("click");
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  ChatBubble as C,
  Database as D,
  FileItem as F,
  PageEdit as P,
  updateFileDataContentById as a,
  Folder as b,
  DocumentPage as c,
  deleteAllFiles as d,
  getFileById as g,
  uploadFile as u
};
