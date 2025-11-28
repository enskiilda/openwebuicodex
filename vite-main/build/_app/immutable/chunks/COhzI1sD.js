import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, g as getContext, l as legacy_pre_effect, i as deep_read_state, j as legacy_pre_effect_reset, c as child, r as reset, e as sibling, b as get, m as mutable_source, u as untrack, q as next, t as template_effect, a as pop, s as set, aG as remove_textarea_child, aE as invalidate_inner_signals, o as onMount, aF as mutate, h as derived_safe_equal, f as first_child, k as tick } from "./BxIY6ir7.js";
import { s as set_text, e as event } from "./cBADewWV.js";
import { e as each, i as index } from "./7_HZMPNF.js";
import { i as if_block } from "./BoSuMvtf.js";
import { f as from_html, a as append, c as comment, t as text } from "./CAbo1QWi.js";
import { r as remove_input_defaults, a as set_attribute, s as set_class, d as bind_select_value, e as set_value } from "./kXiCYuyj.js";
import { b as bind_value, a as bind_files } from "./DVLuwGai.js";
import { b as bind_this } from "./D16JuV5t.js";
import { p as preventDefault } from "./CGgk3ROl.js";
import { i as init } from "./ByqEASoO.js";
import { p as prop } from "./BRmGPDvq.js";
import { a as store_get, s as setup_stores } from "./BvQ5O7-v.js";
import { t as toast } from "./BccDN__m.js";
import { t as tools, f as functions, k as knowledge, a as models, u as user } from "./2Yg1sHDo.js";
import { b as WEBUI_BASE_URL } from "./DQ9UxF7k.js";
import { g as getTools } from "./DloK8TH_.js";
import { g as getFunctions } from "./CZmOTAge.js";
import { g as getKnowledgeBases } from "./C_BzFfir.js";
import { K as Knowledge, A as AdvancedParams } from "./Ap_nRVJv.js";
import { T as Tags } from "./BXKRkMSz.js";
import { C as Checkbox } from "./BfX_BY5_.js";
import { T as Tooltip } from "./BHXWufQb.js";
import { m as marked } from "./Bh-hrM1w.js";
import { T as Textarea } from "./B-P1fI-w.js";
import { A as AccessControl } from "./CFsG9iJ9.js";
import { S as Spinner } from "./CtnI4RVL.js";
import { F as FileSaver_minExports } from "./DRcZXQDn.js";
var root_2$5 = from_html(`<div class=" flex border rounded-3xl border-gray-100 dark:border-gray-800 dark:bg-gray-850 py-1.5"><div class="flex flex-col flex-1 pl-1"><div class="py-1 gap-1"><input class="px-3 text-sm font-medium w-full bg-transparent outline-hidden"/> <input class="px-3 text-xs w-full bg-transparent outline-hidden text-gray-600 dark:text-gray-400"/></div> <hr class="border-gray-50 dark:border-gray-850 my-0.5"/> <textarea class="px-3 py-1.5 text-xs w-full bg-transparent outline-hidden resize-none" rows="4"></textarea></div> <div><button class="p-3" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg></button></div></div>`);
var root_1$7 = from_html(`<div class="grid lg:grid-cols-2 flex-col gap-2"></div>`);
var root_3$2 = from_html(`<div class="text-xs text-center w-full py-2"> </div>`);
var root_4$1 = from_html(`<button class="flex text-xs items-center space-x-1 px-3 py-1.5 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 transition" type="button"><div class=" self-center mr-2 font-medium line-clamp-1"> </div> <div class=" self-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-3.5 h-3.5"><path fill-rule="evenodd" d="M4 2a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 4 14h8a1.5 1.5 0 0 0 1.5-1.5V6.621a1.5 1.5 0 0 0-.44-1.06L9.94 2.439A1.5 1.5 0 0 0 8.878 2H4Zm4 3.5a.75.75 0 0 1 .75.75v2.69l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l.72.72V6.25A.75.75 0 0 1 8 5.5Z" clip-rule="evenodd"></path></svg></div></button>`);
var root$4 = from_html(`<div class=" space-y-3"><div class="flex w-full justify-between mb-2"><div class=" self-center text-xs"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path></svg></button></div> <!> <div class="flex items-center justify-end space-x-2 mt-2"><input id="prompt-suggestions-import-input" type="file" accept=".json" hidden=""/> <button class="flex text-xs items-center space-x-1 px-3 py-1.5 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 transition" type="button"><div class=" self-center mr-2 font-medium line-clamp-1"> </div> <div class=" self-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-3.5 h-3.5"><path fill-rule="evenodd" d="M4 2a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 4 14h8a1.5 1.5 0 0 0 1.5-1.5V6.621a1.5 1.5 0 0 0-.44-1.06L9.94 2.439A1.5 1.5 0 0 0 8.878 2H4Zm4 9.5a.75.75 0 0 1-.75-.75V8.06l-.72.72a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72v2.69a.75.75 0 0 1-.75.75Z" clip-rule="evenodd"></path></svg></div></button> <!></div></div>`);
function PromptSuggestions($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let promptSuggestions = prop($$props, "promptSuggestions", 28, () => []);
  let _promptSuggestions = mutable_source([]);
  const setPromptSuggestions = () => {
    set(_promptSuggestions, promptSuggestions().map((s) => {
      if (typeof s.title === "string") {
        s.title = [s.title, ""];
      } else if (!Array.isArray(s.title)) {
        s.title = ["", ""];
      }
      return s;
    }));
  };
  legacy_pre_effect(() => deep_read_state(promptSuggestions()), () => {
    if (promptSuggestions()) {
      setPromptSuggestions();
    }
  });
  legacy_pre_effect_reset();
  init();
  var div = root$4();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var text2 = child(div_2, true);
  reset(div_2);
  var button = sibling(div_2, 2);
  reset(div_1);
  var node = sibling(div_1, 2);
  {
    var consequent = ($$anchor2) => {
      var div_3 = root_1$7();
      each(div_3, 5, () => get(_promptSuggestions), index, ($$anchor3, prompt, promptIdx) => {
        var div_4 = root_2$5();
        var div_5 = child(div_4);
        var div_6 = child(div_5);
        var input_1 = child(div_6);
        remove_input_defaults(input_1);
        var input_2 = sibling(input_1, 2);
        remove_input_defaults(input_2);
        reset(div_6);
        var textarea = sibling(div_6, 4);
        remove_textarea_child(textarea);
        reset(div_5);
        var div_7 = sibling(div_5, 2);
        var button_1 = child(div_7);
        reset(div_7);
        reset(div_4);
        template_effect(
          ($0, $1, $2) => {
            set_attribute(input_1, "placeholder", $0);
            set_attribute(input_2, "placeholder", $1);
            set_attribute(textarea, "placeholder", $2);
          },
          [
            () => ($i18n(), untrack(() => $i18n().t("Title (e.g. Tell me a fun fact)"))),
            () => ($i18n(), untrack(() => $i18n().t("Subtitle (e.g. about the Roman Empire)"))),
            () => ($i18n(), untrack(() => $i18n().t("Prompt (e.g. Tell me a fun fact about the Roman Empire)")))
          ]
        );
        bind_value(input_1, () => get(prompt).title[0], ($$value) => (get(prompt).title[0] = $$value, invalidate_inner_signals(() => get(_promptSuggestions))));
        bind_value(input_2, () => get(prompt).title[1], ($$value) => (get(prompt).title[1] = $$value, invalidate_inner_signals(() => get(_promptSuggestions))));
        bind_value(textarea, () => get(prompt).content, ($$value) => (get(prompt).content = $$value, invalidate_inner_signals(() => get(_promptSuggestions))));
        event("click", button_1, () => {
          promptSuggestions().splice(promptIdx, 1);
          promptSuggestions(promptSuggestions());
        });
        append($$anchor3, div_4);
      });
      reset(div_3);
      append($$anchor2, div_3);
    };
    var alternate = ($$anchor2) => {
      var div_8 = root_3$2();
      var text_1 = child(div_8, true);
      reset(div_8);
      template_effect(($0) => set_text(text_1, $0), [
        () => ($i18n(), untrack(() => $i18n().t("No suggestion prompts")))
      ]);
      append($$anchor2, div_8);
    };
    if_block(node, ($$render) => {
      if (get(_promptSuggestions), untrack(() => get(_promptSuggestions).length > 0)) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  var div_9 = sibling(node, 2);
  var input_3 = child(div_9);
  var button_2 = sibling(input_3, 2);
  var div_10 = child(button_2);
  var text_2 = child(div_10, true);
  reset(div_10);
  next(2);
  reset(button_2);
  var node_1 = sibling(button_2, 2);
  {
    var consequent_1 = ($$anchor2) => {
      var button_3 = root_4$1();
      var div_11 = child(button_3);
      var text_3 = child(div_11);
      reset(div_11);
      next(2);
      reset(button_3);
      template_effect(
        ($0) => set_text(text_3, `${$0 ?? ""} (${(deep_read_state(promptSuggestions()), untrack(() => promptSuggestions().length)) ?? ""})`),
        [
          () => ($i18n(), untrack(() => $i18n().t("Export Prompt Suggestions")))
        ]
      );
      event("click", button_3, async () => {
        let blob = new Blob([JSON.stringify(promptSuggestions())], { type: "application/json" });
        FileSaver_minExports.saveAs(blob, `prompt-suggestions-export-${Date.now()}.json`);
      });
      append($$anchor2, button_3);
    };
    if_block(node_1, ($$render) => {
      if (deep_read_state(promptSuggestions()), untrack(() => promptSuggestions().length)) $$render(consequent_1);
    });
  }
  reset(div_9);
  reset(div);
  template_effect(
    ($0, $1) => {
      set_text(text2, $0);
      set_text(text_2, $1);
    },
    [
      () => ($i18n(), untrack(() => $i18n().t("Default Prompt Suggestions"))),
      () => ($i18n(), untrack(() => $i18n().t("Import Prompt Suggestions")))
    ]
  );
  event("click", button, () => {
    if (promptSuggestions().length === 0 || promptSuggestions().at(-1).content !== "") {
      promptSuggestions([...promptSuggestions(), { content: "", title: ["", ""] }]);
    }
  });
  event("change", input_3, (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) {
      return;
    }
    console.log(files);
    let reader = new FileReader();
    reader.onload = async (event2) => {
      try {
        let suggestions = JSON.parse(event2.target.result);
        suggestions = suggestions.map((s) => {
          if (typeof s.title === "string") {
            s.title = [s.title, ""];
          } else if (!Array.isArray(s.title)) {
            s.title = ["", ""];
          }
          return s;
        });
        promptSuggestions([...promptSuggestions(), ...suggestions]);
      } catch (error) {
        toast.error($i18n().t("Invalid JSON file"));
        return;
      }
    };
    reader.readAsText(files[0]);
    e.target.value = "";
  });
  event("click", button_2, () => {
    const input = document.getElementById("prompt-suggestions-import-input");
    if (input) {
      input.click();
    }
  });
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root_3$1 = from_html(`<div class=" py-0.5 text-sm w-full capitalize font-medium"> </div>`);
var root_2$4 = from_html(`<div class=" flex items-center gap-2 mr-3"><div class="self-center flex items-center"><!></div> <!></div>`);
var root_1$6 = from_html(`<div class=" flex items-center mt-2 flex-wrap"></div>`);
var root$3 = from_html(`<div><div class="flex w-full justify-between mb-1"><div class=" self-center text-sm font-medium"> </div></div> <div class=" text-xs dark:text-gray-500"> </div> <div class="flex flex-col"><!></div></div>`);
function ToolsSelector($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let tools2 = prop($$props, "tools", 24, () => []);
  let _tools = mutable_source({});
  let selectedToolIds = prop($$props, "selectedToolIds", 28, () => []);
  const i18n = getContext("i18n");
  onMount(() => {
    set(_tools, tools2().reduce(
      (acc, tool) => {
        acc[tool.id] = { ...tool, selected: selectedToolIds().includes(tool.id) };
        return acc;
      },
      {}
    ));
  });
  init();
  var div = root$3();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var text2 = child(div_2, true);
  reset(div_2);
  reset(div_1);
  var div_3 = sibling(div_1, 2);
  var text_1 = child(div_3, true);
  reset(div_3);
  var div_4 = sibling(div_3, 2);
  var node = child(div_4);
  {
    var consequent = ($$anchor2) => {
      var div_5 = root_1$6();
      each(div_5, 5, () => (get(_tools), untrack(() => Object.keys(get(_tools)))), index, ($$anchor3, tool) => {
        var div_6 = root_2$4();
        var div_7 = child(div_6);
        var node_1 = child(div_7);
        {
          let $0 = derived_safe_equal(() => (get(_tools), get(tool), untrack(() => get(_tools)[get(tool)].selected ? "checked" : "unchecked")));
          Checkbox(node_1, {
            get state() {
              return get($0);
            },
            $$events: {
              change: (e) => {
                mutate(_tools, get(_tools)[get(tool)].selected = e.detail === "checked");
                selectedToolIds(Object.keys(get(_tools)).filter((t) => get(_tools)[t].selected));
              }
            }
          });
        }
        reset(div_7);
        var node_2 = sibling(div_7, 2);
        {
          let $0 = derived_safe_equal(() => (get(_tools), get(tool), untrack(() => {
            var _a, _b;
            return ((_b = (_a = get(_tools)[get(tool)]) == null ? void 0 : _a.meta) == null ? void 0 : _b.description) ?? get(_tools)[get(tool)].id;
          })));
          Tooltip(node_2, {
            get content() {
              return get($0);
            },
            children: ($$anchor4, $$slotProps) => {
              var div_8 = root_3$1();
              var text_2 = child(div_8, true);
              reset(div_8);
              template_effect(() => set_text(text_2, (get(_tools), get(tool), untrack(() => get(_tools)[get(tool)].name))));
              append($$anchor4, div_8);
            },
            $$slots: { default: true }
          });
        }
        reset(div_6);
        append($$anchor3, div_6);
      });
      reset(div_5);
      append($$anchor2, div_5);
    };
    if_block(node, ($$render) => {
      if (deep_read_state(tools2()), untrack(() => tools2().length > 0)) $$render(consequent);
    });
  }
  reset(div_4);
  reset(div);
  template_effect(
    ($0, $1) => {
      set_text(text2, $0);
      set_text(text_1, $1);
    },
    [
      () => ($i18n(), untrack(() => $i18n().t("Tools"))),
      () => ($i18n(), untrack(() => $i18n().t('To select toolkits here, add them to the "Tools" workspace first.')))
    ]
  );
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root_2$3 = from_html(`<div class=" flex items-center gap-2 mr-3"><div class="self-center flex items-center"><!></div> <div class=" py-0.5 text-sm w-full capitalize font-medium"><!></div></div>`);
var root_1$5 = from_html(`<div><div class="flex w-full justify-between mb-1"><div class=" self-center text-sm font-medium"> </div></div> <div class="flex flex-col"><div class=" flex items-center flex-wrap"></div></div></div>`);
function FiltersSelector($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let filters = prop($$props, "filters", 24, () => []);
  let selectedFilterIds = prop($$props, "selectedFilterIds", 28, () => []);
  let _filters = mutable_source({});
  onMount(() => {
    set(_filters, filters().reduce(
      (acc, filter) => {
        acc[filter.id] = { ...filter, selected: selectedFilterIds().includes(filter.id) };
        return acc;
      },
      {}
    ));
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var div = root_1$5();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var text$1 = child(div_2, true);
      reset(div_2);
      reset(div_1);
      var div_3 = sibling(div_1, 2);
      var div_4 = child(div_3);
      each(
        div_4,
        5,
        () => (get(_filters), untrack(() => Object.keys(get(_filters)))),
        index,
        ($$anchor3, filter) => {
          var div_5 = root_2$3();
          var div_6 = child(div_5);
          var node_1 = child(div_6);
          {
            let $0 = derived_safe_equal(() => (get(_filters), get(filter), untrack(() => get(_filters)[get(filter)].is_global ? "checked" : get(_filters)[get(filter)].selected ? "checked" : "unchecked")));
            Checkbox(node_1, {
              get state() {
                return get($0);
              },
              get disabled() {
                return get(_filters), get(filter), untrack(() => get(_filters)[get(filter)].is_global);
              },
              $$events: {
                change: (e) => {
                  if (!get(_filters)[get(filter)].is_global) {
                    mutate(_filters, get(_filters)[get(filter)].selected = e.detail === "checked");
                    selectedFilterIds(Object.keys(get(_filters)).filter((t) => get(_filters)[t].selected));
                  }
                }
              }
            });
          }
          reset(div_6);
          var div_7 = sibling(div_6, 2);
          var node_2 = child(div_7);
          Tooltip(node_2, {
            get content() {
              return get(_filters), get(filter), untrack(() => get(_filters)[get(filter)].meta.description);
            },
            children: ($$anchor4, $$slotProps) => {
              next();
              var text_1 = text();
              template_effect(() => set_text(text_1, (get(_filters), get(filter), untrack(() => get(_filters)[get(filter)].name))));
              append($$anchor4, text_1);
            },
            $$slots: { default: true }
          });
          reset(div_7);
          reset(div_5);
          append($$anchor3, div_5);
        }
      );
      reset(div_4);
      reset(div_3);
      reset(div);
      template_effect(($0) => set_text(text$1, $0), [() => ($i18n(), untrack(() => $i18n().t("Filters")))]);
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (deep_read_state(filters()), untrack(() => filters().length > 0)) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_2$2 = from_html(`<div class=" flex items-center gap-2 mr-3"><div class="self-center flex items-center"><!></div> <div class=" py-0.5 text-sm w-full capitalize font-medium"><!></div></div>`);
var root_1$4 = from_html(`<div><div class="flex w-full justify-between mb-1"><div class=" self-center text-sm font-medium"> </div></div> <div class="flex flex-col"><div class=" flex items-center flex-wrap"></div></div></div>`);
function ActionsSelector($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let actions = prop($$props, "actions", 24, () => []);
  let selectedActionIds = prop($$props, "selectedActionIds", 28, () => []);
  let _actions = mutable_source({});
  onMount(() => {
    set(_actions, actions().reduce(
      (acc, action) => {
        acc[action.id] = { ...action, selected: selectedActionIds().includes(action.id) };
        return acc;
      },
      {}
    ));
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var div = root_1$4();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var text$1 = child(div_2, true);
      reset(div_2);
      reset(div_1);
      var div_3 = sibling(div_1, 2);
      var div_4 = child(div_3);
      each(
        div_4,
        5,
        () => (get(_actions), untrack(() => Object.keys(get(_actions)))),
        index,
        ($$anchor3, action) => {
          var div_5 = root_2$2();
          var div_6 = child(div_5);
          var node_1 = child(div_6);
          {
            let $0 = derived_safe_equal(() => (get(_actions), get(action), untrack(() => get(_actions)[get(action)].is_global ? "checked" : get(_actions)[get(action)].selected ? "checked" : "unchecked")));
            Checkbox(node_1, {
              get state() {
                return get($0);
              },
              get disabled() {
                return get(_actions), get(action), untrack(() => get(_actions)[get(action)].is_global);
              },
              $$events: {
                change: (e) => {
                  if (!get(_actions)[get(action)].is_global) {
                    mutate(_actions, get(_actions)[get(action)].selected = e.detail === "checked");
                    selectedActionIds(Object.keys(get(_actions)).filter((t) => get(_actions)[t].selected));
                  }
                }
              }
            });
          }
          reset(div_6);
          var div_7 = sibling(div_6, 2);
          var node_2 = child(div_7);
          Tooltip(node_2, {
            get content() {
              return get(_actions), get(action), untrack(() => get(_actions)[get(action)].meta.description);
            },
            children: ($$anchor4, $$slotProps) => {
              next();
              var text_1 = text();
              template_effect(() => set_text(text_1, (get(_actions), get(action), untrack(() => get(_actions)[get(action)].name))));
              append($$anchor4, text_1);
            },
            $$slots: { default: true }
          });
          reset(div_7);
          reset(div_5);
          append($$anchor3, div_5);
        }
      );
      reset(div_4);
      reset(div_3);
      reset(div);
      template_effect(($0) => set_text(text$1, $0), [() => ($i18n(), untrack(() => $i18n().t("Actions")))]);
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (deep_read_state(actions()), untrack(() => actions().length > 0)) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_1$3 = from_html(`<div class=" flex items-center gap-2 mr-3"><!> <div class=" py-0.5 text-sm capitalize"><!></div></div>`);
var root$2 = from_html(`<div><div class="flex w-full justify-between mb-1"><div class=" self-center text-sm font-medium"> </div></div> <div class="flex items-center mt-2 flex-wrap"></div></div>`);
function Capabilities($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  const capabilityLabels = {
    vision: {
      label: $i18n().t("Vision"),
      description: $i18n().t("Model accepts image inputs")
    },
    file_upload: {
      label: $i18n().t("File Upload"),
      description: $i18n().t("Model accepts file inputs")
    },
    web_search: {
      label: $i18n().t("Web Search"),
      description: $i18n().t("Model can search the web for information")
    },
    image_generation: {
      label: $i18n().t("Image Generation"),
      description: $i18n().t("Model can generate images based on text prompts")
    },
    code_interpreter: {
      label: $i18n().t("Code Interpreter"),
      description: $i18n().t("Model can execute code and perform calculations")
    },
    usage: {
      label: $i18n().t("Usage"),
      description: $i18n().t("Sends `stream_options: { include_usage: true }` in the request.\nSupported providers will return token usage information in the response when set.")
    },
    citations: {
      label: $i18n().t("Citations"),
      description: $i18n().t("Displays citations in the response")
    },
    status_updates: {
      label: $i18n().t("Status Updates"),
      description: $i18n().t("Displays status updates (e.g., web search progress) in the response")
    }
  };
  let capabilities = prop($$props, "capabilities", 28, () => ({}));
  init();
  var div = root$2();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var text$1 = child(div_2, true);
  reset(div_2);
  reset(div_1);
  var div_3 = sibling(div_1, 2);
  each(div_3, 5, () => untrack(() => Object.keys(capabilityLabels)), index, ($$anchor2, capability) => {
    var div_4 = root_1$3();
    var node = child(div_4);
    {
      let $0 = derived_safe_equal(() => (deep_read_state(capabilities()), get(capability), untrack(() => capabilities()[get(capability)] ? "checked" : "unchecked")));
      Checkbox(node, {
        get state() {
          return get($0);
        },
        $$events: {
          change: (e) => {
            capabilities(capabilities()[get(capability)] = e.detail === "checked", true);
          }
        }
      });
    }
    var div_5 = sibling(node, 2);
    var node_1 = child(div_5);
    {
      let $0 = derived_safe_equal(() => (deep_read_state(marked), get(capability), untrack(() => marked.parse(capabilityLabels[get(capability)].description))));
      Tooltip(node_1, {
        get content() {
          return get($0);
        },
        children: ($$anchor3, $$slotProps) => {
          next();
          var text_1 = text();
          template_effect(($02) => set_text(text_1, $02), [
            () => ($i18n(), get(capability), untrack(() => $i18n().t(capabilityLabels[get(capability)].label)))
          ]);
          append($$anchor3, text_1);
        },
        $$slots: { default: true }
      });
    }
    reset(div_5);
    reset(div_4);
    append($$anchor2, div_4);
  });
  reset(div_3);
  reset(div);
  template_effect(($0) => set_text(text$1, $0), [() => ($i18n(), untrack(() => $i18n().t("Capabilities")))]);
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root_2$1 = from_html(`<div class=" flex items-center gap-2 mr-3"><div class="self-center flex items-center"><!></div> <div class=" py-0.5 text-sm w-full capitalize font-medium"><!></div></div>`);
var root_1$2 = from_html(`<div class=" flex items-center flex-wrap"></div>`);
var root$1 = from_html(`<div><div class="flex w-full justify-between mb-1"><div class=" self-center text-sm font-medium"> </div></div> <div class="flex flex-col"><!></div></div>`);
function DefaultFiltersSelector($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let filters = prop($$props, "filters", 24, () => []);
  let selectedFilterIds = prop($$props, "selectedFilterIds", 28, () => []);
  let _filters = mutable_source({});
  onMount(() => {
    set(_filters, filters().reduce(
      (acc, filter) => {
        acc[filter.id] = { ...filter, selected: selectedFilterIds().includes(filter.id) };
        return acc;
      },
      {}
    ));
  });
  init();
  var div = root$1();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var text$1 = child(div_2, true);
  reset(div_2);
  reset(div_1);
  var div_3 = sibling(div_1, 2);
  var node = child(div_3);
  {
    var consequent = ($$anchor2) => {
      var div_4 = root_1$2();
      each(
        div_4,
        5,
        () => (get(_filters), untrack(() => Object.keys(get(_filters)))),
        index,
        ($$anchor3, filter) => {
          var div_5 = root_2$1();
          var div_6 = child(div_5);
          var node_1 = child(div_6);
          {
            let $0 = derived_safe_equal(() => (get(_filters), get(filter), untrack(() => get(_filters)[get(filter)].selected ? "checked" : "unchecked")));
            Checkbox(node_1, {
              get state() {
                return get($0);
              },
              $$events: {
                change: (e) => {
                  mutate(_filters, get(_filters)[get(filter)].selected = e.detail === "checked");
                  selectedFilterIds(Object.keys(get(_filters)).filter((t) => get(_filters)[t].selected));
                }
              }
            });
          }
          reset(div_6);
          var div_7 = sibling(div_6, 2);
          var node_2 = child(div_7);
          Tooltip(node_2, {
            get content() {
              return get(_filters), get(filter), untrack(() => get(_filters)[get(filter)].meta.description);
            },
            children: ($$anchor4, $$slotProps) => {
              next();
              var text_1 = text();
              template_effect(() => set_text(text_1, (get(_filters), get(filter), untrack(() => get(_filters)[get(filter)].name))));
              append($$anchor4, text_1);
            },
            $$slots: { default: true }
          });
          reset(div_7);
          reset(div_5);
          append($$anchor3, div_5);
        }
      );
      reset(div_4);
      append($$anchor2, div_4);
    };
    if_block(node, ($$render) => {
      if (deep_read_state(filters()), untrack(() => filters().length > 0)) $$render(consequent);
    });
  }
  reset(div_3);
  reset(div);
  template_effect(($0) => set_text(text$1, $0), [
    () => ($i18n(), untrack(() => $i18n().t("Default Filters")))
  ]);
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root_1$1 = from_html(`<div class=" flex items-center gap-2 mr-3"><!> <div class=" py-0.5 text-sm capitalize"><!></div></div>`);
var root = from_html(`<div><div class="flex w-full justify-between mb-1"><div class=" self-center text-sm font-medium"> </div></div> <div class="flex items-center mt-2 flex-wrap"></div></div>`);
function DefaultFeatures($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  const featureLabels = {
    web_search: {
      label: $i18n().t("Web Search"),
      description: $i18n().t("Model can search the web for information")
    },
    image_generation: {
      label: $i18n().t("Image Generation"),
      description: $i18n().t("Model can generate images based on text prompts")
    },
    code_interpreter: {
      label: $i18n().t("Code Interpreter"),
      description: $i18n().t("Model can execute code and perform calculations")
    }
  };
  let availableFeatures = prop($$props, "availableFeatures", 24, () => ["web_search", "image_generation", "code_interpreter"]);
  let featureIds = prop($$props, "featureIds", 28, () => []);
  init();
  var div = root();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var text$1 = child(div_2, true);
  reset(div_2);
  reset(div_1);
  var div_3 = sibling(div_1, 2);
  each(div_3, 5, availableFeatures, index, ($$anchor2, feature) => {
    var div_4 = root_1$1();
    var node = child(div_4);
    {
      let $0 = derived_safe_equal(() => (deep_read_state(featureIds()), get(feature), untrack(() => featureIds().includes(get(feature)) ? "checked" : "unchecked")));
      Checkbox(node, {
        get state() {
          return get($0);
        },
        $$events: {
          change: (e) => {
            if (e.detail === "checked") {
              featureIds([...featureIds(), get(feature)]);
            } else {
              featureIds(featureIds().filter((id) => id !== get(feature)));
            }
          }
        }
      });
    }
    var div_5 = sibling(node, 2);
    var node_1 = child(div_5);
    {
      let $0 = derived_safe_equal(() => (deep_read_state(marked), get(feature), untrack(() => marked.parse(featureLabels[get(feature)].description))));
      Tooltip(node_1, {
        get content() {
          return get($0);
        },
        children: ($$anchor3, $$slotProps) => {
          next();
          var text_1 = text();
          template_effect(($02) => set_text(text_1, $02), [
            () => ($i18n(), get(feature), untrack(() => $i18n().t(featureLabels[get(feature)].label)))
          ]);
          append($$anchor3, text_1);
        },
        $$slots: { default: true }
      });
    }
    reset(div_5);
    reset(div_4);
    append($$anchor2, div_4);
  });
  reset(div_3);
  reset(div);
  template_effect(($0) => set_text(text$1, $0), [
    () => ($i18n(), untrack(() => $i18n().t("Default Features")))
  ]);
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root_2 = from_html(`<button class="flex space-x-1"><div class=" self-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4"><path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd"></path></svg></div> <div class=" self-center text-sm font-medium"> </div></button>`);
var root_4 = from_html(`<img alt="model profile" class="rounded-xl size-72 md:size-60 object-cover shrink-0"/>`);
var root_5 = from_html(`<img alt="model profile" class=" rounded-xl size-72 md:size-60 object-cover shrink-0"/>`);
var root_7 = from_html(`<option class=" text-gray-900"> </option>`);
var root_6 = from_html(`<div class="my-1"><div class=" text-sm font-medium mb-1"> </div> <div><select class="text-sm w-full bg-transparent outline-hidden" required><option class=" text-gray-900"> </option><!></select></div></div>`);
var root_8 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_9 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_11 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_12 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_13 = from_html(`<div class="my-2"><!></div>`);
var root_14 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_15 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_18 = from_html(`<div class="my-2"><!></div>`);
var root_20 = from_html(`<div class="my-2"><!></div>`);
var root_21 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_22 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_23 = from_html(`<div><textarea class="text-sm w-full bg-transparent outline-hidden resize-none" rows="10" disabled readonly=""></textarea></div>`);
var root_26 = from_html(`<div class="ml-1.5 self-center"><!></div>`);
var root_3 = from_html(`<form class="flex flex-col md:flex-row w-full gap-3 md:gap-6"><div class="self-center md:self-start flex justify-center my-2 shrink-0"><div class="self-center"><button type="button"><!> <div class="absolute bottom-0 right-0 z-10"><div class="m-1.5"><div class="shadow-xl p-1 rounded-full border-2 border-white bg-gray-800 text-white group-hover:bg-gray-600 transition dark:border-black dark:bg-white dark:group-hover:bg-gray-200 dark:text-black"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-5"><path fill-rule="evenodd" d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm10.5 5.707a.5.5 0 0 0-.146-.353l-1-1a.5.5 0 0 0-.708 0L9.354 9.646a.5.5 0 0 1-.708 0L6.354 7.354a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0-.146.353V12a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V9.707ZM12 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" clip-rule="evenodd"></path></svg></div></div></div> <div class="absolute top-0 bottom-0 left-0 right-0 bg-white dark:bg-black rounded-lg opacity-0 group-hover:opacity-20 transition"></div></button> <div class="flex w-full mt-1 justify-end"><button class="px-2 py-1 text-gray-500 rounded-lg text-xs" type="button"> </button></div></div></div> <div class="w-full"><div class="mt-2 my-2 flex flex-col"><div class="flex-1"><div><input class="text-3xl font-medium w-full bg-transparent outline-hidden" required/></div></div> <div class="flex-1"><div><input class="text-xs w-full bg-transparent text-gray-500 outline-hidden" required/></div></div></div> <!> <div class="my-1"><div class="mb-1 flex w-full justify-between items-center"><div class=" self-center text-sm font-medium"> </div> <button class="p-1 text-xs flex rounded-sm transition" type="button"><!></button></div> <!></div> <div class=" mt-2 my-1"><div><!></div></div> <div class="my-2"><div class="px-4 py-3 bg-gray-50 dark:bg-gray-950 rounded-3xl"><!></div></div> <hr class=" border-gray-100 dark:border-gray-850 my-1.5"/> <div class="my-2"><div class="flex w-full justify-between"><div class=" self-center text-sm font-medium"> </div></div> <div class="mt-2"><div class="my-1"><div class=" text-xs font-medium mb-2"> </div> <div><!></div></div> <div class="flex w-full justify-between"><div class=" self-center text-xs font-medium"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition" type="button"><!></button></div> <!></div></div> <hr class=" border-gray-100 dark:border-gray-850 my-2"/> <div class="my-2"><div class="flex w-full justify-between items-center"><div class="flex w-full justify-between items-center"><div class=" self-center text-sm font-medium"> </div> <button class="p-1 text-xs flex rounded-sm transition" type="button"><!></button></div></div> <!></div> <hr class=" border-gray-100 dark:border-gray-850 my-1.5"/> <div class="my-2"><!></div> <div class="my-2"><!></div> <div class="my-2"><!></div> <!> <div class="my-2"><!></div> <div class="my-2"><!></div> <!> <div class="my-2 text-gray-300 dark:text-gray-700"><div class="flex w-full justify-between mb-2"><div class=" self-center text-sm font-medium"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition" type="button"><!></button></div> <!></div> <div class="my-2 flex justify-end pb-20"><button type="submit"><div class=" self-center font-medium"><!></div> <!></button></div></div></form>`);
var root_1 = from_html(`<!> <div class="w-full max-h-full flex justify-center"><input type="file" hidden="" accept="image/*"/> <!></div>`, 1);
function ModelEditor($$anchor, $$props) {
  push($$props, false);
  const $models = () => store_get(models, "$models", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const $tools = () => store_get(tools, "$tools", $$stores);
  const $functions = () => store_get(functions, "$functions", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let onSubmit = prop($$props, "onSubmit", 8);
  let onBack = prop($$props, "onBack", 8, null);
  let model = prop($$props, "model", 12, null);
  let edit = prop($$props, "edit", 8, false);
  let preset = prop($$props, "preset", 8, true);
  let loading = mutable_source(false);
  let filesInputElement = mutable_source();
  let inputFiles = mutable_source();
  let showAdvanced = mutable_source(false);
  let showPreview = mutable_source(false);
  let loaded = mutable_source(false);
  let id = mutable_source("");
  let name = mutable_source("");
  let enableDescription = mutable_source(true);
  let system = mutable_source("");
  let info = mutable_source({
    id: "",
    base_model_id: null,
    name: "",
    meta: {
      profile_image_url: `${WEBUI_BASE_URL}/static/favicon.png`,
      description: "",
      suggestion_prompts: null,
      tags: []
    },
    params: { system: "" }
  });
  let params = mutable_source({ system: "" });
  let knowledge$1 = mutable_source([]);
  let toolIds = mutable_source([]);
  let filterIds = mutable_source([]);
  let defaultFilterIds = mutable_source([]);
  let capabilities = mutable_source({
    vision: true,
    file_upload: true,
    web_search: true,
    image_generation: true,
    code_interpreter: true,
    citations: true,
    status_updates: true,
    usage: void 0
  });
  let defaultFeatureIds = mutable_source([]);
  let actionIds = mutable_source([]);
  let accessControl = mutable_source({});
  const addUsage = (base_model_id) => {
    var _a, _b;
    const baseModel = $models().find((m) => m.id === base_model_id);
    if (baseModel) {
      if (baseModel.owned_by === "openai") {
        mutate(capabilities, get(capabilities).usage = ((_b = (_a = baseModel == null ? void 0 : baseModel.meta) == null ? void 0 : _a.capabilities) == null ? void 0 : _b.usage) ?? false);
      } else {
        delete get(capabilities).usage;
      }
      set(capabilities, get(capabilities));
    }
  };
  const submitHandler = async () => {
    set(loading, true);
    mutate(info, get(info).id = get(id));
    mutate(info, get(info).name = get(name));
    if (get(id) === "") {
      toast.error($i18n().t("Model ID is required."));
      set(loading, false);
      return;
    }
    if (get(name) === "") {
      toast.error($i18n().t("Model Name is required."));
      set(loading, false);
      return;
    }
    if (get(knowledge$1).some((item) => item.status === "uploading")) {
      toast.error($i18n().t("Please wait until all files are uploaded."));
      set(loading, false);
      return;
    }
    mutate(info, get(info).params = { ...get(info).params, ...get(params) });
    mutate(info, get(info).access_control = get(accessControl));
    mutate(info, get(info).meta.capabilities = get(capabilities));
    if (get(enableDescription)) {
      mutate(info, get(info).meta.description = get(info).meta.description.trim() === "" ? null : get(info).meta.description);
    } else {
      mutate(info, get(info).meta.description = null);
    }
    if (get(knowledge$1).length > 0) {
      mutate(info, get(info).meta.knowledge = get(knowledge$1));
    } else {
      if (get(info).meta.knowledge) {
        delete get(info).meta.knowledge;
      }
    }
    if (get(toolIds).length > 0) {
      mutate(info, get(info).meta.toolIds = get(toolIds));
    } else {
      if (get(info).meta.toolIds) {
        delete get(info).meta.toolIds;
      }
    }
    if (get(filterIds).length > 0) {
      mutate(info, get(info).meta.filterIds = get(filterIds));
    } else {
      if (get(info).meta.filterIds) {
        delete get(info).meta.filterIds;
      }
    }
    if (get(defaultFilterIds).length > 0) {
      mutate(info, get(info).meta.defaultFilterIds = get(defaultFilterIds));
    } else {
      if (get(info).meta.defaultFilterIds) {
        delete get(info).meta.defaultFilterIds;
      }
    }
    if (get(actionIds).length > 0) {
      mutate(info, get(info).meta.actionIds = get(actionIds));
    } else {
      if (get(info).meta.actionIds) {
        delete get(info).meta.actionIds;
      }
    }
    if (get(defaultFeatureIds).length > 0) {
      mutate(info, get(info).meta.defaultFeatureIds = get(defaultFeatureIds));
    } else {
      if (get(info).meta.defaultFeatureIds) {
        delete get(info).meta.defaultFeatureIds;
      }
    }
    mutate(info, get(info).params.system = get(system).trim() === "" ? null : get(system));
    mutate(info, get(info).params.stop = get(params).stop ? get(params).stop.split(",").filter((s) => s.trim()) : null);
    Object.keys(get(info).params).forEach((key) => {
      if (get(info).params[key] === "" || get(info).params[key] === null) {
        delete get(info).params[key];
      }
    });
    await onSubmit()(get(info));
    set(loading, false);
  };
  onMount(async () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v;
    await tools.set(await getTools(localStorage.token));
    await functions.set(await getFunctions(localStorage.token));
    await knowledge.set([...await getKnowledgeBases(localStorage.token)]);
    const workspaceContainer = document.getElementById("workspace-container");
    if (workspaceContainer) {
      workspaceContainer.scrollTop = 0;
    }
    if (model()) {
      set(name, model().name);
      await tick();
      set(id, model().id);
      set(enableDescription, ((_b = (_a = model()) == null ? void 0 : _a.meta) == null ? void 0 : _b.description) !== null);
      if (model().base_model_id) {
        const base_model = $models().filter((m) => !(m == null ? void 0 : m.preset) && !((m == null ? void 0 : m.arena) ?? false)).find((m) => [model().base_model_id, `${model().base_model_id}:latest`].includes(m.id));
        console.log("base_model", base_model);
        if (base_model) {
          model(model().base_model_id = base_model.id, true);
        } else {
          model(model().base_model_id = null, true);
        }
      }
      set(system, ((_d = (_c = model()) == null ? void 0 : _c.params) == null ? void 0 : _d.system) ?? "");
      set(params, { ...get(params), ...(_e = model()) == null ? void 0 : _e.params });
      mutate(params, get(params).stop = ((_f = get(params)) == null ? void 0 : _f.stop) ? (typeof get(params).stop === "string" ? get(params).stop.split(",") : ((_g = get(params)) == null ? void 0 : _g.stop) ?? []).join(",") : null);
      set(knowledge$1, (((_i = (_h = model()) == null ? void 0 : _h.meta) == null ? void 0 : _i.knowledge) ?? []).map((item) => {
        if ((item == null ? void 0 : item.collection_name) && (item == null ? void 0 : item.type) !== "file") {
          return { id: item.collection_name, name: item.name, legacy: true };
        } else if (item == null ? void 0 : item.collection_names) {
          return {
            name: item.name,
            type: "collection",
            collection_names: item.collection_names,
            legacy: true
          };
        } else {
          return item;
        }
      }));
      set(toolIds, ((_k = (_j = model()) == null ? void 0 : _j.meta) == null ? void 0 : _k.toolIds) ?? []);
      set(filterIds, ((_m = (_l = model()) == null ? void 0 : _l.meta) == null ? void 0 : _m.filterIds) ?? []);
      set(defaultFilterIds, ((_o = (_n = model()) == null ? void 0 : _n.meta) == null ? void 0 : _o.defaultFilterIds) ?? []);
      set(actionIds, ((_q = (_p = model()) == null ? void 0 : _p.meta) == null ? void 0 : _q.actionIds) ?? []);
      set(capabilities, { ...get(capabilities), ...((_s = (_r = model()) == null ? void 0 : _r.meta) == null ? void 0 : _s.capabilities) ?? {} });
      set(defaultFeatureIds, ((_u = (_t = model()) == null ? void 0 : _t.meta) == null ? void 0 : _u.defaultFeatureIds) ?? []);
      if ("access_control" in model()) {
        set(accessControl, model().access_control);
      } else {
        set(accessControl, {});
      }
      console.log((_v = model()) == null ? void 0 : _v.access_control);
      console.log(get(accessControl));
      set(info, {
        ...get(info),
        ...JSON.parse(JSON.stringify(model() ? model() : { id: model().id, name: model().name }))
      });
      console.log(model());
    }
    set(loaded, true);
  });
  legacy_pre_effect(() => (deep_read_state(edit()), get(name)), () => {
    if (!edit()) {
      if (get(name)) {
        set(id, get(name).replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "").toLowerCase());
      }
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_18 = ($$anchor2) => {
      var fragment_1 = root_1();
      var node_1 = first_child(fragment_1);
      {
        var consequent = ($$anchor3) => {
          var button = root_2();
          var div = sibling(child(button), 2);
          var text2 = child(div, true);
          reset(div);
          reset(button);
          template_effect(($0) => set_text(text2, $0), [() => ($i18n(), untrack(() => $i18n().t("Back")))]);
          event("click", button, () => {
            onBack()();
          });
          append($$anchor3, button);
        };
        if_block(node_1, ($$render) => {
          if (onBack()) $$render(consequent);
        });
      }
      var div_1 = sibling(node_1, 2);
      var input = child(div_1);
      bind_this(input, ($$value) => set(filesInputElement, $$value), () => get(filesInputElement));
      var node_2 = sibling(input, 2);
      {
        var consequent_17 = ($$anchor3) => {
          var form = root_3();
          var div_2 = child(form);
          var div_3 = child(div_2);
          var button_1 = child(div_3);
          var node_3 = child(button_1);
          {
            var consequent_1 = ($$anchor4) => {
              var img_1 = root_4();
              template_effect(() => set_attribute(img_1, "src", (get(info), untrack(() => get(info).meta.profile_image_url))));
              append($$anchor4, img_1);
            };
            var alternate = ($$anchor4) => {
              var img_2 = root_5();
              template_effect(() => set_attribute(img_2, "src", `${WEBUI_BASE_URL}/static/favicon.png`));
              append($$anchor4, img_2);
            };
            if_block(node_3, ($$render) => {
              if (get(info), untrack(() => get(info).meta.profile_image_url)) $$render(consequent_1);
              else $$render(alternate, false);
            });
          }
          next(4);
          reset(button_1);
          var div_4 = sibling(button_1, 2);
          var button_2 = child(div_4);
          var text_1 = child(button_2, true);
          reset(button_2);
          reset(div_4);
          reset(div_3);
          reset(div_2);
          var div_5 = sibling(div_2, 2);
          var div_6 = child(div_5);
          var div_7 = child(div_6);
          var div_8 = child(div_7);
          var input_1 = child(div_8);
          remove_input_defaults(input_1);
          reset(div_8);
          reset(div_7);
          var div_9 = sibling(div_7, 2);
          var div_10 = child(div_9);
          var input_2 = child(div_10);
          remove_input_defaults(input_2);
          reset(div_10);
          reset(div_9);
          reset(div_6);
          var node_4 = sibling(div_6, 2);
          {
            var consequent_2 = ($$anchor4) => {
              var div_11 = root_6();
              var div_12 = child(div_11);
              var text_2 = child(div_12, true);
              reset(div_12);
              var div_13 = sibling(div_12, 2);
              var select = child(div_13);
              template_effect(() => {
                get(info);
                invalidate_inner_signals(() => {
                  $i18n();
                  $models();
                  model();
                });
              });
              var option = child(select);
              var text_3 = child(option, true);
              reset(option);
              option.value = (option.__value = null) ?? "";
              var node_5 = sibling(option);
              each(
                node_5,
                1,
                () => ($models(), deep_read_state(model()), untrack(() => $models().filter((m) => (model() ? m.id !== model().id : true) && !(m == null ? void 0 : m.preset) && (m == null ? void 0 : m.owned_by) !== "arena" && !((m == null ? void 0 : m.direct) ?? false)))),
                index,
                ($$anchor5, model2, $$index, $$array) => {
                  var option_1 = root_7();
                  var text_4 = child(option_1, true);
                  reset(option_1);
                  var option_1_value = {};
                  template_effect(() => {
                    set_text(text_4, (get(model2), untrack(() => get(model2).name)));
                    if (option_1_value !== (option_1_value = (get(model2), untrack(() => get(model2).id)))) {
                      option_1.value = (option_1.__value = (get(model2), untrack(() => get(model2).id))) ?? "";
                    }
                  });
                  append($$anchor5, option_1);
                }
              );
              reset(select);
              reset(div_13);
              reset(div_11);
              template_effect(
                ($0, $1, $2) => {
                  set_text(text_2, $0);
                  set_attribute(select, "placeholder", $1);
                  set_text(text_3, $2);
                },
                [
                  () => ($i18n(), untrack(() => $i18n().t("Base Model (From)"))),
                  () => ($i18n(), untrack(() => $i18n().t("Select a base model (e.g. llama3, gpt-4o)"))),
                  () => ($i18n(), untrack(() => $i18n().t("Select a base model")))
                ]
              );
              bind_select_value(select, () => get(info).base_model_id, ($$value) => mutate(info, get(info).base_model_id = $$value));
              event("change", select, (e) => {
                addUsage(e.target.value);
              });
              append($$anchor4, div_11);
            };
            if_block(node_4, ($$render) => {
              if (preset()) $$render(consequent_2);
            });
          }
          var div_14 = sibling(node_4, 2);
          var div_15 = child(div_14);
          var div_16 = child(div_15);
          var text_5 = child(div_16, true);
          reset(div_16);
          var button_3 = sibling(div_16, 2);
          var node_6 = child(button_3);
          {
            var consequent_3 = ($$anchor4) => {
              var span = root_8();
              var text_6 = child(span, true);
              reset(span);
              template_effect(($0) => set_text(text_6, $0), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
              append($$anchor4, span);
            };
            var alternate_1 = ($$anchor4) => {
              var span_1 = root_9();
              var text_7 = child(span_1, true);
              reset(span_1);
              template_effect(($0) => set_text(text_7, $0), [() => ($i18n(), untrack(() => $i18n().t("Custom")))]);
              append($$anchor4, span_1);
            };
            if_block(node_6, ($$render) => {
              if (!get(enableDescription)) $$render(consequent_3);
              else $$render(alternate_1, false);
            });
          }
          reset(button_3);
          reset(div_15);
          var node_7 = sibling(div_15, 2);
          {
            var consequent_4 = ($$anchor4) => {
              {
                let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Add a short description about what this model does"))));
                Textarea($$anchor4, {
                  className: " text-sm w-full bg-transparent outline-hidden resize-none overflow-y-hidden ",
                  get placeholder() {
                    return get($0);
                  },
                  get value() {
                    return get(info).meta.description;
                  },
                  set value($$value) {
                    mutate(info, get(info).meta.description = $$value);
                  },
                  $$legacy: true
                });
              }
            };
            if_block(node_7, ($$render) => {
              if (get(enableDescription)) $$render(consequent_4);
            });
          }
          reset(div_14);
          var div_17 = sibling(div_14, 2);
          var div_18 = child(div_17);
          var node_8 = child(div_18);
          {
            let $0 = derived_safe_equal(() => (get(info), untrack(() => {
              var _a, _b;
              return ((_b = (_a = get(info)) == null ? void 0 : _a.meta) == null ? void 0 : _b.tags) ?? [];
            })));
            Tags(node_8, {
              get tags() {
                return get($0);
              },
              $$events: {
                delete: (e) => {
                  const tagName = e.detail;
                  mutate(info, get(info).meta.tags = get(info).meta.tags.filter((tag) => tag.name !== tagName));
                },
                add: (e) => {
                  var _a, _b;
                  const tagName = e.detail;
                  if (!(((_b = (_a = get(info)) == null ? void 0 : _a.meta) == null ? void 0 : _b.tags) ?? null)) {
                    mutate(info, get(info).meta.tags = [{ name: tagName }]);
                  } else {
                    mutate(info, get(info).meta.tags = [...get(info).meta.tags, { name: tagName }]);
                  }
                }
              }
            });
          }
          reset(div_18);
          reset(div_17);
          var div_19 = sibling(div_17, 2);
          var div_20 = child(div_19);
          var node_9 = child(div_20);
          {
            let $0 = derived_safe_equal(() => ($user(), untrack(() => {
              var _a, _b, _c, _d;
              return ((_c = (_b = (_a = $user()) == null ? void 0 : _a.permissions) == null ? void 0 : _b.sharing) == null ? void 0 : _c.models) || ((_d = $user()) == null ? void 0 : _d.role) === "admin";
            })));
            let $1 = derived_safe_equal(() => ($user(), untrack(() => {
              var _a, _b, _c, _d;
              return ((_c = (_b = (_a = $user()) == null ? void 0 : _a.permissions) == null ? void 0 : _b.sharing) == null ? void 0 : _c.public_models) || ((_d = $user()) == null ? void 0 : _d.role) === "admin";
            })));
            AccessControl(node_9, {
              accessRoles: ["read", "write"],
              get share() {
                return get($0);
              },
              get sharePublic() {
                return get($1);
              },
              get accessControl() {
                return get(accessControl);
              },
              set accessControl($$value) {
                set(accessControl, $$value);
              },
              $$legacy: true
            });
          }
          reset(div_20);
          reset(div_19);
          var div_21 = sibling(div_19, 4);
          var div_22 = child(div_21);
          var div_23 = child(div_22);
          var text_8 = child(div_23, true);
          reset(div_23);
          reset(div_22);
          var div_24 = sibling(div_22, 2);
          var div_25 = child(div_24);
          var div_26 = child(div_25);
          var text_9 = child(div_26, true);
          reset(div_26);
          var div_27 = sibling(div_26, 2);
          var node_10 = child(div_27);
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Write your model system prompt content here\ne.g.) You are Mario from Super Mario Bros, acting as an assistant."))));
            Textarea(node_10, {
              className: " text-sm w-full bg-transparent outline-hidden resize-none overflow-y-hidden ",
              get placeholder() {
                return get($0);
              },
              rows: 4,
              get value() {
                return get(system);
              },
              set value($$value) {
                set(system, $$value);
              },
              $$legacy: true
            });
          }
          reset(div_27);
          reset(div_25);
          var div_28 = sibling(div_25, 2);
          var div_29 = child(div_28);
          var text_10 = child(div_29, true);
          reset(div_29);
          var button_4 = sibling(div_29, 2);
          var node_11 = child(button_4);
          {
            var consequent_5 = ($$anchor4) => {
              var span_2 = root_11();
              var text_11 = child(span_2, true);
              reset(span_2);
              template_effect(($0) => set_text(text_11, $0), [() => ($i18n(), untrack(() => $i18n().t("Hide")))]);
              append($$anchor4, span_2);
            };
            var alternate_2 = ($$anchor4) => {
              var span_3 = root_12();
              var text_12 = child(span_3, true);
              reset(span_3);
              template_effect(($0) => set_text(text_12, $0), [() => ($i18n(), untrack(() => $i18n().t("Show")))]);
              append($$anchor4, span_3);
            };
            if_block(node_11, ($$render) => {
              if (get(showAdvanced)) $$render(consequent_5);
              else $$render(alternate_2, false);
            });
          }
          reset(button_4);
          reset(div_28);
          var node_12 = sibling(div_28, 2);
          {
            var consequent_6 = ($$anchor4) => {
              var div_30 = root_13();
              var node_13 = child(div_30);
              AdvancedParams(node_13, {
                admin: true,
                custom: true,
                get params() {
                  return get(params);
                },
                set params($$value) {
                  set(params, $$value);
                },
                $$legacy: true
              });
              reset(div_30);
              append($$anchor4, div_30);
            };
            if_block(node_12, ($$render) => {
              if (get(showAdvanced)) $$render(consequent_6);
            });
          }
          reset(div_24);
          reset(div_21);
          var div_31 = sibling(div_21, 4);
          var div_32 = child(div_31);
          var div_33 = child(div_32);
          var div_34 = child(div_33);
          var text_13 = child(div_34, true);
          reset(div_34);
          var button_5 = sibling(div_34, 2);
          var node_14 = child(button_5);
          {
            var consequent_7 = ($$anchor4) => {
              var span_4 = root_14();
              var text_14 = child(span_4, true);
              reset(span_4);
              template_effect(($0) => set_text(text_14, $0), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
              append($$anchor4, span_4);
            };
            var alternate_3 = ($$anchor4) => {
              var span_5 = root_15();
              var text_15 = child(span_5, true);
              reset(span_5);
              template_effect(($0) => set_text(text_15, $0), [() => ($i18n(), untrack(() => $i18n().t("Custom")))]);
              append($$anchor4, span_5);
            };
            if_block(node_14, ($$render) => {
              if (get(info), untrack(() => {
                var _a, _b;
                return (((_b = (_a = get(info)) == null ? void 0 : _a.meta) == null ? void 0 : _b.suggestion_prompts) ?? null) === null;
              })) $$render(consequent_7);
              else $$render(alternate_3, false);
            });
          }
          reset(button_5);
          reset(div_33);
          reset(div_32);
          var node_15 = sibling(div_32, 2);
          {
            var consequent_8 = ($$anchor4) => {
              PromptSuggestions($$anchor4, {
                get promptSuggestions() {
                  return get(info).meta.suggestion_prompts;
                },
                set promptSuggestions($$value) {
                  mutate(info, get(info).meta.suggestion_prompts = $$value);
                },
                $$legacy: true
              });
            };
            if_block(node_15, ($$render) => {
              if (get(info), untrack(() => {
                var _a, _b;
                return (_b = (_a = get(info)) == null ? void 0 : _a.meta) == null ? void 0 : _b.suggestion_prompts;
              })) $$render(consequent_8);
            });
          }
          reset(div_31);
          var div_35 = sibling(div_31, 4);
          var node_16 = child(div_35);
          Knowledge(node_16, {
            get selectedItems() {
              return get(knowledge$1);
            },
            set selectedItems($$value) {
              set(knowledge$1, $$value);
            },
            $$legacy: true
          });
          reset(div_35);
          var div_36 = sibling(div_35, 2);
          var node_17 = child(div_36);
          ToolsSelector(node_17, {
            get tools() {
              return $tools();
            },
            get selectedToolIds() {
              return get(toolIds);
            },
            set selectedToolIds($$value) {
              set(toolIds, $$value);
            },
            $$legacy: true
          });
          reset(div_36);
          var div_37 = sibling(div_36, 2);
          var node_18 = child(div_37);
          {
            let $0 = derived_safe_equal(() => ($functions(), untrack(() => $functions().filter((func) => func.type === "filter"))));
            FiltersSelector(node_18, {
              get filters() {
                return get($0);
              },
              get selectedFilterIds() {
                return get(filterIds);
              },
              set selectedFilterIds($$value) {
                set(filterIds, $$value);
              },
              $$legacy: true
            });
          }
          reset(div_37);
          var node_19 = sibling(div_37, 2);
          {
            var consequent_10 = ($$anchor4) => {
              const toggleableFilters = derived_safe_equal(() => ($functions(), get(filterIds), untrack(() => $functions().filter((func) => {
                var _a;
                return func.type === "filter" && (get(filterIds).includes(func.id) || (func == null ? void 0 : func.is_global)) && ((_a = func == null ? void 0 : func.meta) == null ? void 0 : _a.toggle);
              }))));
              var fragment_4 = comment();
              var node_20 = first_child(fragment_4);
              {
                var consequent_9 = ($$anchor5) => {
                  var div_38 = root_18();
                  var node_21 = child(div_38);
                  DefaultFiltersSelector(node_21, {
                    get filters() {
                      return get(toggleableFilters);
                    },
                    get selectedFilterIds() {
                      return get(defaultFilterIds);
                    },
                    set selectedFilterIds($$value) {
                      set(defaultFilterIds, $$value);
                    },
                    $$legacy: true
                  });
                  reset(div_38);
                  append($$anchor5, div_38);
                };
                if_block(node_20, ($$render) => {
                  if (deep_read_state(get(toggleableFilters)), untrack(() => get(toggleableFilters).length > 0)) $$render(consequent_9);
                });
              }
              append($$anchor4, fragment_4);
            };
            if_block(node_19, ($$render) => {
              if (get(filterIds), untrack(() => get(filterIds).length > 0)) $$render(consequent_10);
            });
          }
          var div_39 = sibling(node_19, 2);
          var node_22 = child(div_39);
          {
            let $0 = derived_safe_equal(() => ($functions(), untrack(() => $functions().filter((func) => func.type === "action"))));
            ActionsSelector(node_22, {
              get actions() {
                return get($0);
              },
              get selectedActionIds() {
                return get(actionIds);
              },
              set selectedActionIds($$value) {
                set(actionIds, $$value);
              },
              $$legacy: true
            });
          }
          reset(div_39);
          var div_40 = sibling(div_39, 2);
          var node_23 = child(div_40);
          Capabilities(node_23, {
            get capabilities() {
              return get(capabilities);
            },
            set capabilities($$value) {
              set(capabilities, $$value);
            },
            $$legacy: true
          });
          reset(div_40);
          var node_24 = sibling(div_40, 2);
          {
            var consequent_12 = ($$anchor4) => {
              const availableFeatures = derived_safe_equal(() => (get(capabilities), untrack(() => Object.entries(get(capabilities)).filter(([key, value]) => value && ["web_search", "code_interpreter", "image_generation"].includes(key)).map(([key, value]) => key))));
              var fragment_5 = comment();
              var node_25 = first_child(fragment_5);
              {
                var consequent_11 = ($$anchor5) => {
                  var div_41 = root_20();
                  var node_26 = child(div_41);
                  DefaultFeatures(node_26, {
                    get availableFeatures() {
                      return get(availableFeatures);
                    },
                    get featureIds() {
                      return get(defaultFeatureIds);
                    },
                    set featureIds($$value) {
                      set(defaultFeatureIds, $$value);
                    },
                    $$legacy: true
                  });
                  reset(div_41);
                  append($$anchor5, div_41);
                };
                if_block(node_25, ($$render) => {
                  if (deep_read_state(get(availableFeatures)), untrack(() => get(availableFeatures).length > 0)) $$render(consequent_11);
                });
              }
              append($$anchor4, fragment_5);
            };
            if_block(node_24, ($$render) => {
              if (get(capabilities), untrack(() => Object.keys(get(capabilities)).filter((key) => get(capabilities)[key]).length > 0)) $$render(consequent_12);
            });
          }
          var div_42 = sibling(node_24, 2);
          var div_43 = child(div_42);
          var div_44 = child(div_43);
          var text_16 = child(div_44, true);
          reset(div_44);
          var button_6 = sibling(div_44, 2);
          var node_27 = child(button_6);
          {
            var consequent_13 = ($$anchor4) => {
              var span_6 = root_21();
              var text_17 = child(span_6, true);
              reset(span_6);
              template_effect(($0) => set_text(text_17, $0), [() => ($i18n(), untrack(() => $i18n().t("Hide")))]);
              append($$anchor4, span_6);
            };
            var alternate_4 = ($$anchor4) => {
              var span_7 = root_22();
              var text_18 = child(span_7, true);
              reset(span_7);
              template_effect(($0) => set_text(text_18, $0), [() => ($i18n(), untrack(() => $i18n().t("Show")))]);
              append($$anchor4, span_7);
            };
            if_block(node_27, ($$render) => {
              if (get(showPreview)) $$render(consequent_13);
              else $$render(alternate_4, false);
            });
          }
          reset(button_6);
          reset(div_43);
          var node_28 = sibling(div_43, 2);
          {
            var consequent_14 = ($$anchor4) => {
              var div_45 = root_23();
              var textarea = child(div_45);
              remove_textarea_child(textarea);
              reset(div_45);
              template_effect(($0) => set_value(textarea, $0), [
                () => (get(info), untrack(() => JSON.stringify(get(info), null, 2)))
              ]);
              append($$anchor4, div_45);
            };
            if_block(node_28, ($$render) => {
              if (get(showPreview)) $$render(consequent_14);
            });
          }
          reset(div_42);
          var div_46 = sibling(div_42, 2);
          var button_7 = child(div_46);
          var div_47 = child(button_7);
          var node_29 = child(div_47);
          {
            var consequent_15 = ($$anchor4) => {
              var text_19 = text();
              template_effect(($0) => set_text(text_19, $0), [() => ($i18n(), untrack(() => $i18n().t("Save & Update")))]);
              append($$anchor4, text_19);
            };
            var alternate_5 = ($$anchor4) => {
              var text_20 = text();
              template_effect(($0) => set_text(text_20, $0), [() => ($i18n(), untrack(() => $i18n().t("Save & Create")))]);
              append($$anchor4, text_20);
            };
            if_block(node_29, ($$render) => {
              if (edit()) $$render(consequent_15);
              else $$render(alternate_5, false);
            });
          }
          reset(div_47);
          var node_30 = sibling(div_47, 2);
          {
            var consequent_16 = ($$anchor4) => {
              var div_48 = root_26();
              var node_31 = child(div_48);
              Spinner(node_31, {});
              reset(div_48);
              append($$anchor4, div_48);
            };
            if_block(node_30, ($$render) => {
              if (get(loading)) $$render(consequent_16);
            });
          }
          reset(button_7);
          reset(div_46);
          reset(div_5);
          reset(form);
          template_effect(
            ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) => {
              set_class(button_1, 1, `rounded-xl flex shrink-0 items-center ${(get(info), deep_read_state(WEBUI_BASE_URL), untrack(() => get(info).meta.profile_image_url !== `${WEBUI_BASE_URL}/static/favicon.png` ? "bg-transparent" : "bg-white")) ?? ""} shadow-xl group relative`);
              set_text(text_1, $0);
              set_attribute(input_1, "placeholder", $1);
              set_attribute(input_2, "placeholder", $2);
              input_2.disabled = edit();
              set_text(text_5, $3);
              set_attribute(button_3, "aria-pressed", get(enableDescription) ? "true" : "false");
              set_attribute(button_3, "aria-label", $4);
              set_text(text_8, $5);
              set_text(text_9, $6);
              set_text(text_10, $7);
              set_text(text_13, $8);
              set_text(text_16, $9);
              set_class(button_7, 1, ` text-sm px-3 py-2 transition rounded-lg ${get(loading) ? " cursor-not-allowed bg-black hover:bg-gray-900 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-black" : "bg-black hover:bg-gray-900 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-black"} flex w-full justify-center`);
              button_7.disabled = get(loading);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Reset Image"))),
              () => ($i18n(), untrack(() => $i18n().t("Model Name"))),
              () => ($i18n(), untrack(() => $i18n().t("Model ID"))),
              () => ($i18n(), untrack(() => $i18n().t("Description"))),
              () => (get(enableDescription), $i18n(), untrack(() => get(enableDescription) ? $i18n().t("Custom description enabled") : $i18n().t("Default description enabled"))),
              () => ($i18n(), untrack(() => $i18n().t("Model Params"))),
              () => ($i18n(), untrack(() => $i18n().t("System Prompt"))),
              () => ($i18n(), untrack(() => $i18n().t("Advanced Params"))),
              () => ($i18n(), untrack(() => $i18n().t("Prompts"))),
              () => ($i18n(), untrack(() => $i18n().t("JSON Preview")))
            ]
          );
          event("click", button_1, () => {
            get(filesInputElement).click();
          });
          event("click", button_2, () => {
            mutate(info, get(info).meta.profile_image_url = `${WEBUI_BASE_URL}/static/favicon.png`);
          });
          bind_value(input_1, () => get(name), ($$value) => set(name, $$value));
          bind_value(input_2, () => get(id), ($$value) => set(id, $$value));
          event("click", button_3, () => {
            set(enableDescription, !get(enableDescription));
          });
          event("click", button_4, () => {
            set(showAdvanced, !get(showAdvanced));
          });
          event("click", button_5, () => {
            var _a, _b;
            if ((((_b = (_a = get(info)) == null ? void 0 : _a.meta) == null ? void 0 : _b.suggestion_prompts) ?? null) === null) {
              mutate(info, get(info).meta.suggestion_prompts = [{ content: "", title: ["", ""] }]);
            } else {
              mutate(info, get(info).meta.suggestion_prompts = null);
            }
          });
          event("click", button_6, () => {
            set(showPreview, !get(showPreview));
          });
          event("submit", form, preventDefault(() => {
            submitHandler();
          }));
          append($$anchor3, form);
        };
        if_block(node_2, ($$render) => {
          if (!edit() || edit() && model()) $$render(consequent_17);
        });
      }
      reset(div_1);
      bind_files(input, () => get(inputFiles), ($$value) => set(inputFiles, $$value));
      event("change", input, () => {
        let reader = new FileReader();
        reader.onload = (event2) => {
          let originalImageUrl = `${event2.target.result}`;
          const img = new Image();
          img.src = originalImageUrl;
          img.onload = function() {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            const aspectRatio = img.width / img.height;
            let newWidth, newHeight;
            if (aspectRatio > 1) {
              newWidth = 250 * aspectRatio;
              newHeight = 250;
            } else {
              newWidth = 250;
              newHeight = 250 / aspectRatio;
            }
            canvas.width = 250;
            canvas.height = 250;
            const offsetX = (250 - newWidth) / 2;
            const offsetY = (250 - newHeight) / 2;
            ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);
            const compressedSrc = canvas.toDataURL();
            mutate(info, get(info).meta.profile_image_url = compressedSrc);
            set(inputFiles, null);
            mutate(filesInputElement, get(filesInputElement).value = "");
          };
        };
        if (get(inputFiles) && get(inputFiles).length > 0 && [
          "image/gif",
          "image/webp",
          "image/jpeg",
          "image/png",
          "image/svg+xml"
        ].includes(get(inputFiles)[0]["type"])) {
          reader.readAsDataURL(get(inputFiles)[0]);
        } else {
          console.log(`Unsupported File Type '${get(inputFiles)[0]["type"]}'.`);
          set(inputFiles, null);
        }
      });
      append($$anchor2, fragment_1);
    };
    if_block(node, ($$render) => {
      if (get(loaded)) $$render(consequent_18);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  ModelEditor as M,
  PromptSuggestions as P
};
