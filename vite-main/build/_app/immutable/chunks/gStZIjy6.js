import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, g as getContext, l as legacy_pre_effect, i as deep_read_state, j as legacy_pre_effect_reset, f as first_child, s as set, m as mutable_source, b as get, h as derived_safe_equal, e as sibling, c as child, r as reset, t as template_effect, u as untrack, a as pop, k as tick } from "./BxIY6ir7.js";
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
import { u as user } from "./2Yg1sHDo.js";
import { C as CodeEditor } from "./BPxE9tzl.js";
import { C as ConfirmDialog } from "./DhVOSDv1.js";
import { C as ChevronLeft } from "./cSMfCVGw.js";
import { T as Tooltip } from "./BHXWufQb.js";
import { L as LockClosed } from "./CK7-DaSl.js";
import { A as AccessControlModal } from "./CRvJEYxG.js";
var root_1 = from_html(`<button class="w-full text-left text-sm py-1.5 px-1 rounded-lg dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-gray-850" type="button"><!></button>`);
var root_2 = from_html(`<input class="w-full text-2xl font-medium bg-transparent outline-hidden font-primary" type="text" required/>`);
var root_3 = from_html(`<div class="text-sm text-gray-500 shrink-0"> </div>`);
var root_5 = from_html(`<input class="w-full text-sm disabled:text-gray-500 bg-transparent outline-hidden" type="text" required/>`);
var root_6 = from_html(`<input class="w-full text-sm bg-transparent outline-hidden" type="text" required/>`);
var root_7 = from_html(`<div class="text-sm text-gray-500"><div class=" bg-yellow-500/20 text-yellow-700 dark:text-yellow-200 rounded-lg px-4 py-3"><div> </div> <ul class=" mt-1 list-disc pl-4 text-xs"><li> </li> <li> </li></ul></div> <div class="my-3"> </div></div>`);
var root = from_html(`<!> <div class=" flex flex-col justify-between w-full overflow-y-auto h-full"><div class="mx-auto w-full md:px-0 h-full"><form class=" flex flex-col max-h-[100dvh] h-full"><div class="flex flex-col flex-1 overflow-auto h-0 rounded-lg"><div class="w-full mb-2 flex flex-col gap-0.5"><div class="flex w-full items-center"><div class=" shrink-0 mr-2"><!></div> <div class="flex-1"><!></div> <div class="self-center shrink-0"><button class="bg-gray-50 hover:bg-gray-100 text-black dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-white transition px-2 py-1 rounded-full flex gap-1 items-center" type="button"><!> <div class="text-sm font-medium shrink-0"> </div></button></div></div> <div class=" flex gap-2 px-1 items-center"><!> <!></div></div> <div class="mb-2 flex-1 overflow-auto h-0 rounded-lg"><!></div> <div class="pb-3 flex justify-between"><div class="flex-1 pr-3"><div class="text-xs text-gray-500 line-clamp-2"><span class=" font-semibold dark:text-gray-200"> </span> <br/>— <span class=" font-medium dark:text-gray-400"> </span></div></div> <button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="submit"> </button></div></div></form></div></div> <!>`, 1);
function ToolkitEditor($$anchor, $$props) {
  push($$props, false);
  const $user = () => store_get(user, "$user", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let formElement = mutable_source(null);
  let showConfirm = mutable_source(false);
  let showAccessControlModal = mutable_source(false);
  let edit = prop($$props, "edit", 8, false);
  let clone = prop($$props, "clone", 8, false);
  let onSave = prop($$props, "onSave", 8, () => {
  });
  let id = prop($$props, "id", 12, "");
  let name = prop($$props, "name", 12, "");
  let meta = prop($$props, "meta", 28, () => ({ description: "" }));
  let content = prop($$props, "content", 12, "");
  let accessControl = prop($$props, "accessControl", 28, () => ({}));
  let _content = mutable_source("");
  const updateContent = () => {
    set(_content, content());
  };
  let codeEditor = mutable_source();
  let boilerplate = `import os
import requests
from datetime import datetime
from pydantic import BaseModel, Field

class Tools:
    def __init__(self):
        pass

    # Add your custom tools using pure Python code here, make sure to add type hints and descriptions
	
    def get_user_name_and_email_and_id(self, __user__: dict = {}) -> str:
        """
        Get the user name, Email and ID from the user object.
        """

        # Do not include a descrption for __user__ as it should not be shown in the tool's specification
        # The session user object will be passed as a parameter when the function is called

        print(__user__)
        result = ""

        if "name" in __user__:
            result += f"User: {__user__['name']}"
        if "id" in __user__:
            result += f" (ID: {__user__['id']})"
        if "email" in __user__:
            result += f" (Email: {__user__['email']})"

        if result == "":
            result = "User: Unknown"

        return result

    def get_current_time(self) -> str:
        """
        Get the current time in a more human-readable format.
        """

        now = datetime.now()
        current_time = now.strftime("%I:%M:%S %p")  # Using 12-hour format with AM/PM
        current_date = now.strftime(
            "%A, %B %d, %Y"
        )  # Full weekday, month name, day, and year

        return f"Current Date and Time = {current_date}, {current_time}"

    def calculator(
        self,
        equation: str = Field(
            ..., description="The mathematical equation to calculate."
        ),
    ) -> str:
        """
        Calculate the result of an equation.
        """

        # Avoid using eval in production code
        # https://nedbatchelder.com/blog/201206/eval_really_is_dangerous.html
        try:
            result = eval(equation)
            return f"{equation} = {result}"
        except Exception as e:
            print(e)
            return "Invalid equation"

    def get_current_weather(
        self,
        city: str = Field(
            "New York, NY", description="Get the current weather for a given city."
        ),
    ) -> str:
        """
        Get the current weather for a given city.
        """

        api_key = os.getenv("OPENWEATHER_API_KEY")
        if not api_key:
            return (
                "API key is not set in the environment variable 'OPENWEATHER_API_KEY'."
            )

        base_url = "http://api.openweathermap.org/data/2.5/weather"
        params = {
            "q": city,
            "appid": api_key,
            "units": "metric",  # Optional: Use 'imperial' for Fahrenheit
        }

        try:
            response = requests.get(base_url, params=params)
            response.raise_for_status()  # Raise HTTPError for bad responses (4xx and 5xx)
            data = response.json()

            if data.get("cod") != 200:
                return f"Error fetching weather data: {data.get('message')}"

            weather_description = data["weather"][0]["description"]
            temperature = data["main"]["temp"]
            humidity = data["main"]["humidity"]
            wind_speed = data["wind"]["speed"]

            return f"Weather in {city}: {temperature}°C"
        except requests.RequestException as e:
            return f"Error fetching weather data: {str(e)}"
`;
  const saveHandler = async () => {
    onSave()({
      id: id(),
      name: name(),
      meta: meta(),
      content: content(),
      access_control: accessControl()
    });
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
        console.log("Code formatted successfully");
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
  var node = first_child(fragment);
  {
    let $0 = derived_safe_equal(() => ($user(), untrack(() => {
      var _a, _b, _c, _d;
      return ((_c = (_b = (_a = $user()) == null ? void 0 : _a.permissions) == null ? void 0 : _b.sharing) == null ? void 0 : _c.tools) || ((_d = $user()) == null ? void 0 : _d.role) === "admin";
    })));
    let $1 = derived_safe_equal(() => ($user(), untrack(() => {
      var _a, _b, _c, _d;
      return ((_c = (_b = (_a = $user()) == null ? void 0 : _a.permissions) == null ? void 0 : _b.sharing) == null ? void 0 : _c.public_tools) || ((_d = $user()) == null ? void 0 : _d.role) === "admin";
    })));
    AccessControlModal(node, {
      accessRoles: ["read", "write"],
      get share() {
        return get($0);
      },
      get sharePublic() {
        return get($1);
      },
      get show() {
        return get(showAccessControlModal);
      },
      set show($$value) {
        set(showAccessControlModal, $$value);
      },
      get accessControl() {
        return accessControl();
      },
      set accessControl($$value) {
        accessControl($$value);
      },
      $$legacy: true
    });
  }
  var div = sibling(node, 2);
  var div_1 = child(div);
  var form = child(div_1);
  var div_2 = child(form);
  var div_3 = child(div_2);
  var div_4 = child(div_3);
  var div_5 = child(div_4);
  var node_1 = child(div_5);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Back"))));
    Tooltip(node_1, {
      get content() {
        return get($0);
      },
      children: ($$anchor2, $$slotProps) => {
        var button = root_1();
        var node_2 = child(button);
        ChevronLeft(node_2, { strokeWidth: "2.5" });
        reset(button);
        event("click", button, () => {
          goto("/workspace/tools");
        });
        append($$anchor2, button);
      },
      $$slots: { default: true }
    });
  }
  reset(div_5);
  var div_6 = sibling(div_5, 2);
  var node_3 = child(div_6);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("e.g. My Tools"))));
    Tooltip(node_3, {
      get content() {
        return get($0);
      },
      placement: "top-start",
      children: ($$anchor2, $$slotProps) => {
        var input = root_2();
        remove_input_defaults(input);
        template_effect(($02) => set_attribute(input, "placeholder", $02), [() => ($i18n(), untrack(() => $i18n().t("Tool Name")))]);
        bind_value(input, name);
        append($$anchor2, input);
      },
      $$slots: { default: true }
    });
  }
  reset(div_6);
  var div_7 = sibling(div_6, 2);
  var button_1 = child(div_7);
  var node_4 = child(button_1);
  LockClosed(node_4, { strokeWidth: "2.5", className: "size-3.5" });
  var div_8 = sibling(node_4, 2);
  var text = child(div_8, true);
  reset(div_8);
  reset(button_1);
  reset(div_7);
  reset(div_4);
  var div_9 = sibling(div_4, 2);
  var node_5 = child(div_9);
  {
    var consequent = ($$anchor2) => {
      var div_10 = root_3();
      var text_1 = child(div_10, true);
      reset(div_10);
      template_effect(() => set_text(text_1, id()));
      append($$anchor2, div_10);
    };
    var alternate = ($$anchor2) => {
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("e.g. my_tools"))));
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
              [() => ($i18n(), untrack(() => $i18n().t("Tool ID")))]
            );
            bind_value(input_1, id);
            append($$anchor3, input_1);
          },
          $$slots: { default: true }
        });
      }
    };
    if_block(node_5, ($$render) => {
      if (edit()) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  var node_6 = sibling(node_5, 2);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("e.g. Tools for performing various operations"))));
    Tooltip(node_6, {
      className: "w-full self-center items-center flex",
      get content() {
        return get($0);
      },
      placement: "top-start",
      children: ($$anchor2, $$slotProps) => {
        var input_2 = root_6();
        remove_input_defaults(input_2);
        template_effect(($02) => set_attribute(input_2, "placeholder", $02), [
          () => ($i18n(), untrack(() => $i18n().t("Tool Description")))
        ]);
        bind_value(input_2, () => meta().description, ($$value) => meta(meta().description = $$value, true));
        append($$anchor2, input_2);
      },
      $$slots: { default: true }
    });
  }
  reset(div_9);
  reset(div_3);
  var div_11 = sibling(div_3, 2);
  var node_7 = child(div_11);
  bind_this(
    CodeEditor(node_7, {
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
  reset(div_11);
  var div_12 = sibling(div_11, 2);
  var div_13 = child(div_12);
  var div_14 = child(div_13);
  var span = child(div_14);
  var text_2 = child(span, true);
  reset(span);
  var text_3 = sibling(span);
  var span_1 = sibling(text_3, 3);
  var text_4 = child(span_1, true);
  reset(span_1);
  reset(div_14);
  reset(div_13);
  var button_2 = sibling(div_13, 2);
  var text_5 = child(button_2, true);
  reset(button_2);
  reset(div_12);
  reset(div_2);
  reset(form);
  bind_this(form, ($$value) => set(formElement, $$value), () => get(formElement));
  reset(div_1);
  reset(div);
  var node_8 = sibling(div, 2);
  ConfirmDialog(node_8, {
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
      var div_15 = root_7();
      var div_16 = child(div_15);
      var div_17 = child(div_16);
      var text_6 = child(div_17, true);
      reset(div_17);
      var ul = sibling(div_17, 2);
      var li = child(ul);
      var text_7 = child(li, true);
      reset(li);
      var li_1 = sibling(li, 2);
      var text_8 = child(li_1, true);
      reset(li_1);
      reset(ul);
      reset(div_16);
      var div_18 = sibling(div_16, 2);
      var text_9 = child(div_18, true);
      reset(div_18);
      reset(div_15);
      template_effect(
        ($0, $1, $2, $3) => {
          set_text(text_6, $0);
          set_text(text_7, $1);
          set_text(text_8, $2);
          set_text(text_9, $3);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Please carefully review the following warnings:"))),
          () => ($i18n(), untrack(() => $i18n().t("Tools have a function calling system that allows arbitrary code execution."))),
          () => ($i18n(), untrack(() => $i18n().t("Do not install tools from sources you do not fully trust."))),
          () => ($i18n(), untrack(() => $i18n().t("I acknowledge that I have read and I understand the implications of my action. I am aware of the risks associated with executing arbitrary code and I have verified the trustworthiness of the source.")))
        ]
      );
      append($$anchor2, div_15);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  template_effect(
    ($0, $1, $2, $3, $4) => {
      set_text(text, $0);
      set_text(text_2, $1);
      set_text(text_3, ` ${$2 ?? ""} `);
      set_text(text_4, $3);
      set_text(text_5, $4);
    },
    [
      () => ($i18n(), untrack(() => $i18n().t("Access"))),
      () => ($i18n(), untrack(() => $i18n().t("Warning:"))),
      () => ($i18n(), untrack(() => $i18n().t("Tools are a function calling system with arbitrary code execution"))),
      () => ($i18n(), untrack(() => $i18n().t(`don't install random tools from sources you don't trust.`))),
      () => ($i18n(), untrack(() => $i18n().t("Save")))
    ]
  );
  event("click", button_1, () => {
    set(showAccessControlModal, true);
  });
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
  ToolkitEditor as T
};
