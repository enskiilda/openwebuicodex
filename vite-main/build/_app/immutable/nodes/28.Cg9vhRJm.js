import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, g as getContext, o as onMount, t as template_effect, b as get, a as pop, e as sibling, c as child, s as set, m as mutable_source, h as derived_safe_equal, r as reset, aG as remove_textarea_child } from "../chunks/BxIY6ir7.js";
import { s as set_text, e as event } from "../chunks/cBADewWV.js";
import { i as if_block } from "../chunks/BoSuMvtf.js";
import { f as from_html, a as append } from "../chunks/CAbo1QWi.js";
import { a as set_attribute } from "../chunks/kXiCYuyj.js";
import { b as bind_value } from "../chunks/DVLuwGai.js";
import { b as bind_this } from "../chunks/D16JuV5t.js";
import { i as init } from "../chunks/ByqEASoO.js";
import { s as setup_stores, a as store_get } from "../chunks/BvQ5O7-v.js";
import "../chunks/BccDN__m.js";
import { g as goto } from "../chunks/h-B6Md2q.js";
import { b as WEBUI_BASE_URL } from "../chunks/DQ9UxF7k.js";
import { u as user, b as settings, c as config, a as models } from "../chunks/2Yg1sHDo.js";
import { c as chatCompletion } from "../chunks/Bm2W_wlw.js";
import { z as splitStream } from "../chunks/Bh-hrM1w.js";
import { S as Selector } from "../chunks/DVIuCRaU.js";
var root_1 = from_html(`<button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full"> </button>`);
var root_2 = from_html(`<button class="px-3 py-1.5 text-sm font-medium bg-gray-300 text-black transition rounded-full"> </button>`);
var root = from_html(`<div class=" flex flex-col justify-between w-full overflow-y-auto h-full"><div class="mx-auto w-full md:px-0 h-full"><div class=" flex flex-col h-full px-4"><div class="flex flex-col justify-between mb-1 gap-1"><div class="flex flex-col gap-1 w-full"><div class="flex w-full"><div class="overflow-hidden w-full"><div class="max-w-full"><!></div></div></div></div></div> <div class=" pt-0.5 pb-2.5 flex flex-col justify-between w-full flex-auto overflow-auto h-0" id="messages-container"><div class=" h-full w-full flex flex-col"><div class="flex-1"><textarea id="text-completion-textarea" class="w-full h-full p-3 bg-transparent border border-gray-100 dark:border-gray-850 outline-hidden resize-none rounded-lg text-sm"></textarea></div></div></div> <div class="pb-3 flex justify-end"><!></div></div></div></div>`);
function Completions($$anchor, $$props) {
  push($$props, false);
  const $models = () => store_get(models, "$models", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let text = mutable_source("");
  let selectedModelId = mutable_source("");
  let loading = mutable_source(false);
  let stopResponseFlag = false;
  let textCompletionAreaElement = mutable_source();
  const scrollToBottom = () => {
    const element = get(textCompletionAreaElement);
    if (element) {
      element.scrollTop = element == null ? void 0 : element.scrollHeight;
    }
  };
  const stopResponse = () => {
    stopResponseFlag = true;
    console.log("stopResponse");
  };
  const textCompletionHandler = async () => {
    const model = $models().find((model2) => model2.id === get(selectedModelId));
    const [res, controller] = await chatCompletion(
      localStorage.token,
      {
        model: model.id,
        stream: true,
        messages: [{ role: "assistant", content: get(text) }]
      },
      `${WEBUI_BASE_URL}/api`
    );
    if (res && res.ok) {
      const reader = res.body.pipeThrough(new TextDecoderStream()).pipeThrough(splitStream("\n")).getReader();
      while (true) {
        const { value, done } = await reader.read();
        if (done || stopResponseFlag) {
          if (stopResponseFlag) {
            controller.abort("User: Stop Response");
          }
          break;
        }
        try {
          let lines = value.split("\n");
          for (const line of lines) {
            if (line !== "") {
              if (line.includes("[DONE]")) {
                console.log("done");
              } else {
                let data = JSON.parse(line.replace(/^data: /, ""));
                console.log(data);
                set(text, get(text) + (data.choices[0].delta.content ?? ""));
              }
            }
          }
        } catch (error) {
          console.log(error);
        }
        scrollToBottom();
      }
    }
  };
  const submitHandler = async () => {
    if (get(selectedModelId)) {
      set(loading, true);
      await textCompletionHandler();
      set(loading, false);
      stopResponseFlag = false;
    }
  };
  onMount(async () => {
    var _a, _b, _c, _d, _e;
    if (((_a = $user()) == null ? void 0 : _a.role) !== "admin") {
      await goto("/");
    }
    if ((_b = $settings()) == null ? void 0 : _b.models) {
      set(selectedModelId, (_c = $settings()) == null ? void 0 : _c.models[0]);
    } else if ((_d = $config()) == null ? void 0 : _d.default_models) {
      set(selectedModelId, (_e = $config()) == null ? void 0 : _e.default_models.split(",")[0]);
    } else {
      set(selectedModelId, "");
    }
  });
  init();
  var div = root();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var div_3 = child(div_2);
  var div_4 = child(div_3);
  var div_5 = child(div_4);
  var div_6 = child(div_5);
  var div_7 = child(div_6);
  var node = child(div_7);
  {
    let $0 = derived_safe_equal(() => $i18n().t("Select a model"));
    let $1 = derived_safe_equal(() => $models().map((model) => ({ value: model.id, label: model.name, model })));
    Selector(node, {
      get placeholder() {
        return get($0);
      },
      get items() {
        return get($1);
      },
      get value() {
        return get(selectedModelId);
      },
      set value($$value) {
        set(selectedModelId, $$value);
      },
      $$legacy: true
    });
  }
  reset(div_7);
  reset(div_6);
  reset(div_5);
  reset(div_4);
  reset(div_3);
  var div_8 = sibling(div_3, 2);
  var div_9 = child(div_8);
  var div_10 = child(div_9);
  var textarea = child(div_10);
  remove_textarea_child(textarea);
  bind_this(textarea, ($$value) => set(textCompletionAreaElement, $$value), () => get(textCompletionAreaElement));
  reset(div_10);
  reset(div_9);
  reset(div_8);
  var div_11 = sibling(div_8, 2);
  var node_1 = child(div_11);
  {
    var consequent = ($$anchor2) => {
      var button = root_1();
      var text_1 = child(button, true);
      reset(button);
      template_effect(($0) => set_text(text_1, $0), [() => $i18n().t("Run")]);
      event("click", button, () => {
        submitHandler();
      });
      append($$anchor2, button);
    };
    var alternate = ($$anchor2) => {
      var button_1 = root_2();
      var text_2 = child(button_1, true);
      reset(button_1);
      template_effect(($0) => set_text(text_2, $0), [() => $i18n().t("Cancel")]);
      event("click", button_1, () => {
        stopResponse();
      });
      append($$anchor2, button_1);
    };
    if_block(node_1, ($$render) => {
      if (!get(loading)) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  reset(div_11);
  reset(div_2);
  reset(div_1);
  reset(div);
  template_effect(($0) => set_attribute(textarea, "placeholder", $0), [() => $i18n().t("You're a helpful assistant.")]);
  bind_value(textarea, () => get(text), ($$value) => set(text, $$value));
  append($$anchor, div);
  pop();
  $$cleanup();
}
function _page($$anchor) {
  Completions($$anchor, {});
}
export {
  _page as component
};
