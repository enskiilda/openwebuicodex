import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, g as getContext, o as onMount, aF as mutate, b as get, m as mutable_source, c as child, r as reset, e as sibling, aG as remove_textarea_child, s as set, t as template_effect, u as untrack, i as deep_read_state, a as pop, l as legacy_pre_effect, j as legacy_pre_effect_reset, aE as invalidate_inner_signals, k as tick, f as first_child } from "../chunks/BxIY6ir7.js";
import { s as set_text, e as event } from "../chunks/cBADewWV.js";
import { e as each, i as index } from "../chunks/7_HZMPNF.js";
import { i as if_block } from "../chunks/BoSuMvtf.js";
import { f as from_html, a as append, t as text } from "../chunks/CAbo1QWi.js";
import { a as set_attribute, d as bind_select_value, s as set_class } from "../chunks/kXiCYuyj.js";
import { b as bind_value } from "../chunks/DVLuwGai.js";
import { b as bind_this } from "../chunks/D16JuV5t.js";
import { i as init } from "../chunks/ByqEASoO.js";
import { a as store_get, s as setup_stores } from "../chunks/BvQ5O7-v.js";
import { t as toast } from "../chunks/BccDN__m.js";
import { g as goto } from "../chunks/h-B6Md2q.js";
import { b as WEBUI_BASE_URL } from "../chunks/DQ9UxF7k.js";
import { b as settings, u as user, c as config, a as models } from "../chunks/2Yg1sHDo.js";
import { c as chatCompletion } from "../chunks/Bm2W_wlw.js";
import { z as splitStream } from "../chunks/Bh-hrM1w.js";
import { C as Collapsible } from "../chunks/BgD15ug2.js";
import { p as prop } from "../chunks/BRmGPDvq.js";
import { C as ChevronUp } from "../chunks/DTpd_r3Z.js";
import { P as Pencil } from "../chunks/wRvEFTSI.js";
var root$2 = from_html(`<div class="flex gap-2 group"><div class="flex items-start pt-1"><div class="px-2 py-1 text-sm font-semibold uppercase min-w-[6rem] text-left rounded-lg transition"> </div></div> <div class="flex-1"><textarea class="w-full bg-transparent outline-hidden rounded-lg p-2 text-sm resize-none overflow-hidden" rows="1"></textarea></div> <div class=" pt-1"><button class=" group-hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300 transition"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg></button></div></div>`);
function Message($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let message = prop($$props, "message", 12);
  let idx = prop($$props, "idx", 8);
  let onDelete = prop($$props, "onDelete", 8);
  let textAreaElement = mutable_source();
  onMount(() => {
    mutate(textAreaElement, get(textAreaElement).style.height = "");
    mutate(textAreaElement, get(textAreaElement).style.height = get(textAreaElement).scrollHeight + "px");
  });
  init();
  var div = root$2();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var text2 = child(div_2, true);
  reset(div_2);
  reset(div_1);
  var div_3 = sibling(div_1, 2);
  var textarea = child(div_3);
  remove_textarea_child(textarea);
  bind_this(textarea, ($$value) => set(textAreaElement, $$value), () => get(textAreaElement));
  reset(div_3);
  var div_4 = sibling(div_3, 2);
  var button = child(div_4);
  reset(div_4);
  reset(div);
  template_effect(
    ($0, $1) => {
      set_text(text2, $0);
      set_attribute(textarea, "id", `${(deep_read_state(message()), untrack(() => message().role)) ?? ""}-${idx() ?? ""}-textarea`);
      set_attribute(textarea, "placeholder", $1);
    },
    [
      () => ($i18n(), deep_read_state(message()), untrack(() => $i18n().t(message().role))),
      () => ($i18n(), deep_read_state(message()), untrack(() => $i18n().t(`Enter {{role}} message here`, {
        role: message().role === "user" ? $i18n().t("a user") : $i18n().t("an assistant")
      })))
    ]
  );
  event("input", textarea, (e) => {
    mutate(textAreaElement, get(textAreaElement).style.height = "");
    mutate(textAreaElement, get(textAreaElement).style.height = get(textAreaElement).scrollHeight + "px");
  });
  event("focus", textarea, (e) => {
    mutate(textAreaElement, get(textAreaElement).style.height = "");
    mutate(textAreaElement, get(textAreaElement).style.height = get(textAreaElement).scrollHeight + "px");
  });
  bind_value(textarea, () => message().content, ($$value) => message(message().content = $$value, true));
  event("click", button, () => {
    onDelete()();
  });
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root$1 = from_html(`<div class="py-3 space-y-3"></div>`);
function Messages($$anchor, $$props) {
  push($$props, false);
  getContext("i18n");
  let messages = prop($$props, "messages", 28, () => []);
  init();
  var div = root$1();
  each(div, 5, messages, index, ($$anchor2, message, idx) => {
    Message($$anchor2, {
      get message() {
        return get(message);
      },
      idx,
      onDelete: () => {
        messages(messages().filter((message2, messageIdx) => messageIdx !== idx));
      }
    });
  });
  reset(div);
  append($$anchor, div);
  pop();
}
var root_2 = from_html(`<div class=" flex-1 text-gray-500 line-clamp-1"> </div>`);
var root_1 = from_html(`<div class="flex gap-2 justify-between items-center"><div class=" shrink-0 font-medium ml-1.5"> </div> <!> <div class="shrink-0"><button class="p-1.5 bg-transparent hover:bg-white/5 transition rounded-lg"><!></button></div></div>`);
var root_5 = from_html(`<div slot="content"><div class="pt-1 px-1.5"><textarea class="w-full h-full bg-transparent resize-none outline-hidden text-sm" rows="4"></textarea></div></div>`);
var root_8 = from_html(`<option class="bg-gray-50 dark:bg-gray-700"> </option>`);
var root_9 = from_html(`<button class="px-3.5 py-1.5 text-sm font-medium disabled:bg-gray-50 dark:disabled:hover:bg-gray-850 disabled:cursor-not-allowed bg-gray-50 hover:bg-gray-100 text-gray-900 dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-gray-200 transition rounded-lg"> </button> <button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-lg"> </button>`, 1);
var root_10 = from_html(`<button class="px-3 py-1.5 text-sm font-medium bg-gray-300 text-black transition rounded-lg"> </button>`);
var root = from_html(`<div class=" flex flex-col justify-between w-full overflow-y-auto h-full"><div class="mx-auto w-full md:px-0 h-full relative"><div class=" flex flex-col h-full px-3.5"><div class="flex w-full items-start gap-1.5"><!></div> <div class=" pb-2.5 flex flex-col justify-between w-full flex-auto overflow-auto h-0" id="messages-container"><div class=" h-full w-full flex flex-col"><div class="flex-1 p-1"><!></div></div></div> <div class="pb-3"><div class="border border-gray-100 dark:border-gray-850 w-full px-3 py-2.5 rounded-xl"><div class="py-0.5"><textarea class=" w-full h-full bg-transparent resize-none outline-hidden text-sm" rows="2"></textarea></div> <div class="flex justify-between flex-col sm:flex-row items-start sm:items-center gap-2 mt-2"><div class="shrink-0"><button type="button"><!></button></div> <div class="flex items-center justify-between gap-2 w-full sm:w-auto"><div class="flex-1"><select class=" bg-transparent border border-gray-100 dark:border-gray-850 rounded-lg py-1 px-2 -mx-0.5 text-sm outline-hidden w-full"></select></div> <div class="flex gap-2 shrink-0"><!></div></div></div></div></div></div></div></div>`);
function Chat($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $models = () => store_get(models, "$models", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let selectedModelId = mutable_source("");
  let loading = mutable_source(false);
  let stopResponseFlag = false;
  let systemTextareaElement = mutable_source();
  let messagesContainerElement = mutable_source();
  let showSystem = mutable_source(false);
  let system = mutable_source("");
  let role = mutable_source("user");
  let message = mutable_source("");
  let messages = mutable_source([]);
  const scrollToBottom = () => {
    const element = get(messagesContainerElement);
    if (element) {
      element.scrollTop = element == null ? void 0 : element.scrollHeight;
    }
  };
  const stopResponse = () => {
    stopResponseFlag = true;
    console.log("stopResponse");
  };
  const resizeSystemTextarea = async () => {
    await tick();
    if (get(systemTextareaElement)) {
      mutate(systemTextareaElement, get(systemTextareaElement).style.height = "");
      mutate(systemTextareaElement, get(systemTextareaElement).style.height = Math.min(get(systemTextareaElement).scrollHeight, 555) + "px");
    }
  };
  const chatCompletionHandler = async () => {
    var _a;
    if (get(selectedModelId) === "") {
      toast.error($i18n().t("Please select a model."));
      return;
    }
    const model = $models().find((model2) => model2.id === get(selectedModelId));
    if (!model) {
      set(selectedModelId, "");
      return;
    }
    const [res, controller] = await chatCompletion(
      localStorage.token,
      {
        model: model.id,
        stream: true,
        messages: [
          get(system) ? { role: "system", content: get(system) } : void 0,
          ...get(messages)
        ].filter((message2) => message2)
      },
      `${WEBUI_BASE_URL}/api`
    );
    let responseMessage;
    if (((_a = get(messages).at(-1)) == null ? void 0 : _a.role) === "assistant") {
      responseMessage = get(messages).at(-1);
    } else {
      responseMessage = { role: "assistant", content: "" };
      get(messages).push(responseMessage);
      set(messages, get(messages));
    }
    await tick();
    const textareaElement = document.getElementById(`assistant-${get(messages).length - 1}-textarea`);
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
              console.log(line);
              if (line === "data: [DONE]") {
                set(messages, get(messages));
              } else {
                let data = JSON.parse(line.replace(/^data: /, ""));
                console.log(data);
                if (responseMessage.content == "" && data.choices[0].delta.content == "\n") {
                  continue;
                } else {
                  textareaElement.style.height = textareaElement.scrollHeight + "px";
                  responseMessage.content += data.choices[0].delta.content ?? "";
                  set(messages, get(messages));
                  textareaElement.style.height = textareaElement.scrollHeight + "px";
                  await tick();
                }
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
  const addHandler = async () => {
    if (get(message)) {
      get(messages).push({ role: get(role), content: get(message) });
      set(messages, get(messages));
      set(message, "");
      await tick();
      scrollToBottom();
    }
  };
  const submitHandler = async () => {
    if (get(selectedModelId)) {
      await addHandler();
      set(loading, true);
      await chatCompletionHandler();
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
  legacy_pre_effect(() => get(showSystem), () => {
    if (get(showSystem)) {
      resizeSystemTextarea();
    }
  });
  legacy_pre_effect_reset();
  init();
  var div = root();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var div_3 = child(div_2);
  var node = child(div_3);
  Collapsible(node, {
    className: "w-full flex-1",
    buttonClassName: "w-full rounded-lg text-sm border border-gray-100 dark:border-gray-850 w-full py-1 px-1.5",
    grow: (
      // responseMessage.done = true;
      true
    ),
    get open() {
      return get(showSystem);
    },
    set open($$value) {
      set(showSystem, $$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var div_4 = root_1();
      var div_5 = child(div_4);
      var text2 = child(div_5, true);
      reset(div_5);
      var node_1 = sibling(div_5, 2);
      {
        var consequent = ($$anchor3) => {
          var div_6 = root_2();
          var text_1 = child(div_6, true);
          reset(div_6);
          template_effect(() => set_text(text_1, get(system)));
          append($$anchor3, div_6);
        };
        if_block(node_1, ($$render) => {
          if (get(showSystem), get(system), untrack(() => !get(showSystem) && get(system).trim())) $$render(consequent);
        });
      }
      var div_7 = sibling(node_1, 2);
      var button = child(div_7);
      var node_2 = child(button);
      {
        var consequent_1 = ($$anchor3) => {
          ChevronUp($$anchor3, { className: "size-3.5" });
        };
        var alternate = ($$anchor3) => {
          Pencil($$anchor3, { className: "size-3.5" });
        };
        if_block(node_2, ($$render) => {
          if (get(showSystem)) $$render(consequent_1);
          else $$render(alternate, false);
        });
      }
      reset(button);
      reset(div_7);
      reset(div_4);
      template_effect(($0) => set_text(text2, $0), [
        () => ($i18n(), untrack(() => $i18n().t("System Instructions")))
      ]);
      append($$anchor2, div_4);
    },
    $$slots: {
      default: true,
      content: ($$anchor2, $$slotProps) => {
        var div_8 = root_5();
        var div_9 = child(div_8);
        var textarea = child(div_9);
        remove_textarea_child(textarea);
        bind_this(textarea, ($$value) => set(systemTextareaElement, $$value), () => get(systemTextareaElement));
        reset(div_9);
        reset(div_8);
        template_effect(($0) => set_attribute(textarea, "placeholder", $0), [
          () => ($i18n(), untrack(() => $i18n().t("You're a helpful assistant.")))
        ]);
        bind_value(textarea, () => get(system), ($$value) => set(system, $$value));
        event("input", textarea, () => {
          resizeSystemTextarea();
        });
        append($$anchor2, div_8);
      }
    },
    $$legacy: true
  });
  reset(div_3);
  var div_10 = sibling(div_3, 2);
  var div_11 = child(div_10);
  var div_12 = child(div_11);
  var node_3 = child(div_12);
  Messages(node_3, {
    get messages() {
      return get(messages);
    },
    set messages($$value) {
      set(messages, $$value);
    },
    $$legacy: true
  });
  reset(div_12);
  reset(div_11);
  reset(div_10);
  bind_this(div_10, ($$value) => set(messagesContainerElement, $$value), () => get(messagesContainerElement));
  var div_13 = sibling(div_10, 2);
  var div_14 = child(div_13);
  var div_15 = child(div_14);
  var textarea_1 = child(div_15);
  remove_textarea_child(textarea_1);
  reset(div_15);
  var div_16 = sibling(div_15, 2);
  var div_17 = child(div_16);
  var button_1 = child(div_17);
  var node_4 = child(button_1);
  {
    var consequent_2 = ($$anchor2) => {
      var text_2 = text();
      template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("User")))]);
      append($$anchor2, text_2);
    };
    var alternate_1 = ($$anchor2) => {
      var text_3 = text();
      template_effect(($0) => set_text(text_3, $0), [() => ($i18n(), untrack(() => $i18n().t("Assistant")))]);
      append($$anchor2, text_3);
    };
    if_block(node_4, ($$render) => {
      if (get(role) === "user") $$render(consequent_2);
      else $$render(alternate_1, false);
    });
  }
  reset(button_1);
  reset(div_17);
  var div_18 = sibling(div_17, 2);
  var div_19 = child(div_18);
  var select = child(div_19);
  template_effect(() => {
    get(selectedModelId);
    invalidate_inner_signals(() => {
      $models();
    });
  });
  each(select, 5, $models, index, ($$anchor2, model) => {
    var option = root_8();
    var text_4 = child(option, true);
    reset(option);
    var option_value = {};
    template_effect(() => {
      set_text(text_4, (get(model), untrack(() => get(model).name)));
      if (option_value !== (option_value = (get(model), untrack(() => get(model).id)))) {
        option.value = (option.__value = (get(model), untrack(() => get(model).id))) ?? "";
      }
    });
    append($$anchor2, option);
  });
  reset(select);
  reset(div_19);
  var div_20 = sibling(div_19, 2);
  var node_5 = child(div_20);
  {
    var consequent_3 = ($$anchor2) => {
      var fragment_4 = root_9();
      var button_2 = first_child(fragment_4);
      var text_5 = child(button_2, true);
      reset(button_2);
      var button_3 = sibling(button_2, 2);
      var text_6 = child(button_3, true);
      reset(button_3);
      template_effect(
        ($0, $1) => {
          button_2.disabled = get(message) === "";
          set_text(text_5, $0);
          set_text(text_6, $1);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Add"))),
          () => ($i18n(), untrack(() => $i18n().t("Run")))
        ]
      );
      event("click", button_2, () => {
        addHandler();
        set(role, get(role) === "user" ? "assistant" : "user");
      });
      event("click", button_3, () => {
        submitHandler();
      });
      append($$anchor2, fragment_4);
    };
    var alternate_2 = ($$anchor2) => {
      var button_4 = root_10();
      var text_7 = child(button_4, true);
      reset(button_4);
      template_effect(($0) => set_text(text_7, $0), [() => ($i18n(), untrack(() => $i18n().t("Cancel")))]);
      event("click", button_4, () => {
        stopResponse();
      });
      append($$anchor2, button_4);
    };
    if_block(node_5, ($$render) => {
      if (!get(loading)) $$render(consequent_3);
      else $$render(alternate_2, false);
    });
  }
  reset(div_20);
  reset(div_18);
  reset(div_16);
  reset(div_14);
  reset(div_13);
  reset(div_2);
  reset(div_1);
  reset(div);
  template_effect(
    ($0, $1) => {
      set_attribute(textarea_1, "placeholder", $0);
      set_class(button_1, 1, `px-3.5 py-1.5 text-sm font-medium bg-gray-50 hover:bg-gray-100 text-gray-900 dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-gray-200 transition rounded-lg shrink-0 ${($settings(), untrack(() => {
        var _a;
        return ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "" : "outline-hidden";
      })) ?? ""}`);
      set_attribute(button_1, "aria-pressed", get(role) === "assistant");
      set_attribute(button_1, "aria-label", $1);
    },
    [
      () => ($i18n(), get(role), untrack(() => $i18n().t(`Enter {{role}} message here`, {
        role: get(role) === "user" ? $i18n().t("a user") : $i18n().t("an assistant")
      }))),
      () => ($i18n(), get(role), untrack(() => $i18n().t(get(role) === "user" ? "Switch to Assistant role" : "Switch to User role")))
    ]
  );
  bind_value(textarea_1, () => get(message), ($$value) => set(message, $$value));
  event("input", textarea_1, (e) => {
    e.target.style.height = "";
    e.target.style.height = Math.min(e.target.scrollHeight, 150) + "px";
  });
  event("focus", textarea_1, (e) => {
    e.target.style.height = "";
    e.target.style.height = Math.min(e.target.scrollHeight, 150) + "px";
  });
  event("click", button_1, () => {
    set(role, get(role) === "user" ? "assistant" : "user");
  });
  bind_select_value(select, () => get(selectedModelId), ($$value) => set(selectedModelId, $$value));
  append($$anchor, div);
  pop();
  $$cleanup();
}
function _page($$anchor) {
  Chat($$anchor, {});
}
export {
  _page as component
};
