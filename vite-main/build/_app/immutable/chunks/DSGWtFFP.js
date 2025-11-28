import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, g as getContext, l as legacy_pre_effect, i as deep_read_state, j as legacy_pre_effect_reset, f as first_child, c as child, r as reset, b as get, h as derived_safe_equal, e as sibling, t as template_effect, u as untrack, m as mutable_source, s as set, a as pop, k as tick } from "./BxIY6ir7.js";
import { e as event, s as set_text } from "./cBADewWV.js";
import { f as from_html, a as append } from "./CAbo1QWi.js";
import { i as if_block } from "./BoSuMvtf.js";
import { r as remove_input_defaults, a as set_attribute } from "./kXiCYuyj.js";
import { b as bind_value } from "./DVLuwGai.js";
import { b as bind_this } from "./D16JuV5t.js";
import { p as preventDefault } from "./CGgk3ROl.js";
import { i as init } from "./ByqEASoO.js";
import { p as prop } from "./BRmGPDvq.js";
import { a as store_get, s as setup_stores } from "./BvQ5O7-v.js";
import { g as goto } from "./h-B6Md2q.js";
import { C as CodeEditor } from "./BPxE9tzl.js";
import { C as ConfirmDialog } from "./DhVOSDv1.js";
import { B as Badge } from "./DGk_635a.js";
import { T as Tooltip } from "./BHXWufQb.js";
import { C as ChevronLeft } from "./cSMfCVGw.js";
var root_1 = from_html(`<button class="w-full text-left text-sm py-1.5 px-1 rounded-lg dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-gray-850" type="button"><!></button>`);
var root_2 = from_html(`<input class="w-full text-2xl font-medium bg-transparent outline-hidden font-primary" type="text" required/>`);
var root_3 = from_html(`<div class="text-sm text-gray-500 shrink-0"> </div>`);
var root_5 = from_html(`<input class="w-full text-sm disabled:text-gray-500 bg-transparent outline-hidden" type="text" required/>`);
var root_6 = from_html(`<input class="w-full text-sm bg-transparent outline-hidden" type="text" required/>`);
var root_7 = from_html(`<div class="text-sm text-gray-500"><div class=" bg-yellow-500/20 text-yellow-700 dark:text-yellow-200 rounded-lg px-4 py-3"><div> </div> <ul class=" mt-1 list-disc pl-4 text-xs"><li> </li> <li> </li></ul></div> <div class="my-3"> </div></div>`);
var root = from_html(`<div class=" flex flex-col justify-between w-full overflow-y-auto h-full"><div class="mx-auto w-full md:px-0 h-full"><form class=" flex flex-col max-h-[100dvh] h-full"><div class="flex flex-col flex-1 overflow-auto h-0 rounded-lg"><div class="w-full mb-2 flex flex-col gap-0.5"><div class="flex w-full items-center"><div class=" shrink-0 mr-2"><!></div> <div class="flex-1"><!></div> <div><!></div></div> <div class=" flex gap-2 px-1 items-center"><!> <!></div></div> <div class="mb-2 flex-1 overflow-auto h-0 rounded-lg"><!></div> <div class="pb-3 flex justify-between"><div class="flex-1 pr-3"><div class="text-xs text-gray-500 line-clamp-2"><span class=" font-semibold dark:text-gray-200"> </span> <br/>— <span class=" font-medium dark:text-gray-400"> </span></div></div> <button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="submit"> </button></div></div></form></div></div> <!>`, 1);
function FunctionEditor($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let formElement = mutable_source(null);
  let showConfirm = mutable_source(false);
  let onSave = prop($$props, "onSave", 8, () => {
  });
  let edit = prop($$props, "edit", 8, false);
  let clone = prop($$props, "clone", 8, false);
  let id = prop($$props, "id", 12, "");
  let name = prop($$props, "name", 12, "");
  let meta = prop($$props, "meta", 28, () => ({ description: "" }));
  let content = prop($$props, "content", 12, "");
  let _content = mutable_source("");
  const updateContent = () => {
    set(_content, content());
  };
  let codeEditor = mutable_source();
  let boilerplate = `"""
title: Example Filter
author: open-webui
author_url: https://github.com/open-webui
funding_url: https://github.com/open-webui
version: 0.1
"""

from pydantic import BaseModel, Field
from typing import Optional


class Filter:
    class Valves(BaseModel):
        priority: int = Field(
            default=0, description="Priority level for the filter operations."
        )
        max_turns: int = Field(
            default=8, description="Maximum allowable conversation turns for a user."
        )
        pass

    class UserValves(BaseModel):
        max_turns: int = Field(
            default=4, description="Maximum allowable conversation turns for a user."
        )
        pass

    def __init__(self):
        # Indicates custom file handling logic. This flag helps disengage default routines in favor of custom
        # implementations, informing the WebUI to defer file-related operations to designated methods within this class.
        # Alternatively, you can remove the files directly from the body in from the inlet hook
        # self.file_handler = True

        # Initialize 'valves' with specific configurations. Using 'Valves' instance helps encapsulate settings,
        # which ensures settings are managed cohesively and not confused with operational flags like 'file_handler'.
        self.valves = self.Valves()
        pass

    def inlet(self, body: dict, __user__: Optional[dict] = None) -> dict:
        # Modify the request body or validate it before processing by the chat completion API.
        # This function is the pre-processor for the API where various checks on the input can be performed.
        # It can also modify the request before sending it to the API.
        print(f"inlet:{__name__}")
        print(f"inlet:body:{body}")
        print(f"inlet:user:{__user__}")

        if __user__.get("role", "admin") in ["user", "admin"]:
            messages = body.get("messages", [])

            max_turns = min(__user__["valves"].max_turns, self.valves.max_turns)
            if len(messages) > max_turns:
                raise Exception(
                    f"Conversation turn limit exceeded. Max turns: {max_turns}"
                )

        return body

    def outlet(self, body: dict, __user__: Optional[dict] = None) -> dict:
        # Modify or analyze the response body after processing by the API.
        # This function is the post-processor for the API, which can be used to modify the response
        # or perform additional checks and analytics.
        print(f"outlet:{__name__}")
        print(f"outlet:body:{body}")
        print(f"outlet:user:{__user__}")

        return body
`;
  const saveHandler = async () => {
    onSave()({ id: id(), name: name(), meta: meta(), content: content() });
  };
  const submitHandler = async () => {
    if (get(codeEditor)) {
      content(get(_content));
      await tick();
      const res = await get(codeEditor).formatPythonCodeHandler();
      await tick();
      content(get(_content));
      await tick();
      if (res) {
        console.info("Code formatted successfully");
        saveHandler();
      }
    }
  };
  legacy_pre_effect(() => deep_read_state(content()), () => {
    if (content()) {
      updateContent();
    }
  });
  legacy_pre_effect(
    () => (deep_read_state(name()), deep_read_state(edit()), deep_read_state(clone())),
    () => {
      if (name() && !edit() && !clone()) {
        id(name().replace(/\s+/g, "_").toLowerCase());
      }
    }
  );
  legacy_pre_effect_reset();
  init();
  var fragment = root();
  var div = first_child(fragment);
  var div_1 = child(div);
  var form = child(div_1);
  var div_2 = child(form);
  var div_3 = child(div_2);
  var div_4 = child(div_3);
  var div_5 = child(div_4);
  var node = child(div_5);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Back"))));
    Tooltip(node, {
      get content() {
        return get($0);
      },
      children: ($$anchor2, $$slotProps) => {
        var button = root_1();
        var node_1 = child(button);
        ChevronLeft(node_1, { strokeWidth: "2.5" });
        reset(button);
        event("click", button, () => {
          goto("/admin/functions");
        });
        append($$anchor2, button);
      },
      $$slots: { default: true }
    });
  }
  reset(div_5);
  var div_6 = sibling(div_5, 2);
  var node_2 = child(div_6);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("e.g. My Filter"))));
    Tooltip(node_2, {
      get content() {
        return get($0);
      },
      placement: "top-start",
      children: ($$anchor2, $$slotProps) => {
        var input = root_2();
        remove_input_defaults(input);
        template_effect(($02) => set_attribute(input, "placeholder", $02), [() => ($i18n(), untrack(() => $i18n().t("Function Name")))]);
        bind_value(input, name);
        append($$anchor2, input);
      },
      $$slots: { default: true }
    });
  }
  reset(div_6);
  var div_7 = sibling(div_6, 2);
  var node_3 = child(div_7);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Function"))));
    Badge(node_3, {
      type: "muted",
      get content() {
        return get($0);
      }
    });
  }
  reset(div_7);
  reset(div_4);
  var div_8 = sibling(div_4, 2);
  var node_4 = child(div_8);
  {
    var consequent = ($$anchor2) => {
      var div_9 = root_3();
      var text = child(div_9, true);
      reset(div_9);
      template_effect(() => set_text(text, id()));
      append($$anchor2, div_9);
    };
    var alternate = ($$anchor2) => {
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("e.g. my_filter"))));
        Tooltip($$anchor2, {
          className: "w-full",
          get content() {
            return get($0);
          },
          placement: "top-start",
          children: ($$anchor3, $$slotProps) => {
            var input_1 = root_5();
            remove_input_defaults(input_1);
            template_effect(
              ($02) => {
                set_attribute(input_1, "placeholder", $02);
                input_1.disabled = edit();
              },
              [() => ($i18n(), untrack(() => $i18n().t("Function ID")))]
            );
            bind_value(input_1, id);
            append($$anchor3, input_1);
          },
          $$slots: { default: true }
        });
      }
    };
    if_block(node_4, ($$render) => {
      if (edit()) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  var node_5 = sibling(node_4, 2);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("e.g. A filter to remove profanity from text"))));
    Tooltip(node_5, {
      className: "w-full self-center items-center flex",
      get content() {
        return get($0);
      },
      placement: "top-start",
      children: ($$anchor2, $$slotProps) => {
        var input_2 = root_6();
        remove_input_defaults(input_2);
        template_effect(($02) => set_attribute(input_2, "placeholder", $02), [
          () => ($i18n(), untrack(() => $i18n().t("Function Description")))
        ]);
        bind_value(input_2, () => meta().description, ($$value) => meta(meta().description = $$value, true));
        append($$anchor2, input_2);
      },
      $$slots: { default: true }
    });
  }
  reset(div_8);
  reset(div_3);
  var div_10 = sibling(div_3, 2);
  var node_6 = child(div_10);
  bind_this(
    CodeEditor(node_6, {
      get value() {
        return content();
      },
      lang: "python",
      boilerplate,
      onChange: (e) => {
        set(_content, e);
      },
      onSave: async () => {
        if (get(formElement)) {
          get(formElement).requestSubmit();
        }
      },
      $$legacy: true
    }),
    ($$value) => set(codeEditor, $$value),
    () => get(codeEditor)
  );
  reset(div_10);
  var div_11 = sibling(div_10, 2);
  var div_12 = child(div_11);
  var div_13 = child(div_12);
  var span = child(div_13);
  var text_1 = child(span, true);
  reset(span);
  var text_2 = sibling(span);
  var span_1 = sibling(text_2, 3);
  var text_3 = child(span_1, true);
  reset(span_1);
  reset(div_13);
  reset(div_12);
  var button_1 = sibling(div_12, 2);
  var text_4 = child(button_1, true);
  reset(button_1);
  reset(div_11);
  reset(div_2);
  reset(form);
  bind_this(form, ($$value) => set(formElement, $$value), () => get(formElement));
  reset(div_1);
  reset(div);
  var node_7 = sibling(div, 2);
  ConfirmDialog(node_7, {
    get show() {
      return get(showConfirm);
    },
    set show($$value) {
      set(showConfirm, $$value);
    },
    $$events: {
      confirm: () => {
        submitHandler();
      }
    },
    children: ($$anchor2, $$slotProps) => {
      var div_14 = root_7();
      var div_15 = child(div_14);
      var div_16 = child(div_15);
      var text_5 = child(div_16, true);
      reset(div_16);
      var ul = sibling(div_16, 2);
      var li = child(ul);
      var text_6 = child(li, true);
      reset(li);
      var li_1 = sibling(li, 2);
      var text_7 = child(li_1, true);
      reset(li_1);
      reset(ul);
      reset(div_15);
      var div_17 = sibling(div_15, 2);
      var text_8 = child(div_17, true);
      reset(div_17);
      reset(div_14);
      template_effect(
        ($0, $1, $2, $3) => {
          set_text(text_5, $0);
          set_text(text_6, $1);
          set_text(text_7, $2);
          set_text(text_8, $3);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Please carefully review the following warnings:"))),
          () => ($i18n(), untrack(() => $i18n().t("Functions allow arbitrary code execution."))),
          () => ($i18n(), untrack(() => $i18n().t("Do not install functions from sources you do not fully trust."))),
          () => ($i18n(), untrack(() => $i18n().t("I acknowledge that I have read and I understand the implications of my action. I am aware of the risks associated with executing arbitrary code and I have verified the trustworthiness of the source.")))
        ]
      );
      append($$anchor2, div_14);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  template_effect(
    ($0, $1, $2, $3) => {
      set_text(text_1, $0);
      set_text(text_2, ` ${$1 ?? ""} `);
      set_text(text_3, $2);
      set_text(text_4, $3);
    },
    [
      () => ($i18n(), untrack(() => $i18n().t("Warning:"))),
      () => ($i18n(), untrack(() => $i18n().t("Functions allow arbitrary code execution."))),
      () => ($i18n(), untrack(() => $i18n().t(`don't install random functions from sources you don't trust.`))),
      () => ($i18n(), untrack(() => $i18n().t("Save")))
    ]
  );
  event("submit", form, preventDefault(() => {
    if (edit()) {
      submitHandler();
    } else {
      set(showConfirm, true);
    }
  }));
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  FunctionEditor as F
};
