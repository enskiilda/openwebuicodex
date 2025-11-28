import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { aO as writable, bc as setContext, g as getContext, p as push, l as legacy_pre_effect, s as set, m as mutable_source, j as legacy_pre_effect_reset, b as get, a as pop, i as deep_read_state, f as first_child, e as sibling, c as child, r as reset, A as effect, n as createEventDispatcher, k as tick, h as derived_safe_equal, u as untrack } from "./BxIY6ir7.js";
import { i as init } from "./ByqEASoO.js";
import { l as legacy_rest_props, p as prop, s as spread_props } from "./BRmGPDvq.js";
import { a as store_get, s as setup_stores } from "./BvQ5O7-v.js";
import { t as toWritableStores, o as omit, b as overridable, m as makeElement, e as executeCallbacks, f as addMeltEventListener, k as kbd, g as disabledAttr, h as createElHelpers, s as styleToString, i as createBitAttrs, r as removeUndefined, j as getOptionUpdater, a as action, c as createDispatcher } from "./C2A39Ney.js";
import { e as event } from "./cBADewWV.js";
import { f as from_html, a as append, c as comment } from "./CAbo1QWi.js";
import { i as if_block } from "./BoSuMvtf.js";
import { s as slot } from "./CZEGIGsR.js";
import { f as attribute_effect } from "./kXiCYuyj.js";
import { b as bind_this } from "./D16JuV5t.js";
import { b as settings } from "./2Yg1sHDo.js";
import { T as Tooltip } from "./BHXWufQb.js";
const defaults = {
  defaultChecked: false,
  disabled: false,
  required: false,
  name: "",
  value: ""
};
const { name } = createElHelpers("switch");
function createSwitch(props) {
  const propsWithDefaults = { ...defaults, ...props };
  const options = toWritableStores(omit(propsWithDefaults, "checked"));
  const { disabled, required, name: nameStore, value } = options;
  const checkedWritable = propsWithDefaults.checked ?? writable(propsWithDefaults.defaultChecked);
  const checked = overridable(checkedWritable, propsWithDefaults == null ? void 0 : propsWithDefaults.onCheckedChange);
  function toggleSwitch() {
    if (disabled.get())
      return;
    checked.update((prev) => !prev);
  }
  const root2 = makeElement(name(), {
    stores: [checked, disabled, required],
    returned: ([$checked, $disabled, $required]) => {
      return {
        "data-disabled": disabledAttr($disabled),
        disabled: disabledAttr($disabled),
        "data-state": $checked ? "checked" : "unchecked",
        type: "button",
        role: "switch",
        "aria-checked": $checked ? "true" : "false",
        "aria-required": $required ? "true" : void 0
      };
    },
    action(node) {
      const unsub = executeCallbacks(addMeltEventListener(node, "click", () => {
        toggleSwitch();
      }), addMeltEventListener(node, "keydown", (e) => {
        if (e.key !== kbd.ENTER && e.key !== kbd.SPACE)
          return;
        e.preventDefault();
        toggleSwitch();
      }));
      return {
        destroy: unsub
      };
    }
  });
  const input = makeElement(name("input"), {
    stores: [checked, nameStore, required, disabled, value],
    returned: ([$checked, $name, $required, $disabled, $value]) => {
      return {
        type: "checkbox",
        "aria-hidden": true,
        hidden: true,
        tabindex: -1,
        name: $name,
        value: $value,
        checked: $checked,
        required: $required,
        disabled: disabledAttr($disabled),
        style: styleToString({
          position: "absolute",
          opacity: 0,
          "pointer-events": "none",
          margin: 0,
          transform: "translateX(-100%)"
        })
      };
    }
  });
  return {
    elements: {
      root: root2,
      input
    },
    states: {
      checked
    },
    options
  };
}
function getSwitchData() {
  const NAME = "switch";
  const PARTS = ["root", "input", "thumb"];
  return {
    NAME,
    PARTS
  };
}
function setCtx(props) {
  const { NAME, PARTS } = getSwitchData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const Switch2 = { ...createSwitch(removeUndefined(props)), getAttrs };
  setContext(NAME, Switch2);
  return {
    ...Switch2,
    updateOption: getOptionUpdater(Switch2.options)
  };
}
function getCtx() {
  const { NAME } = getSwitchData();
  return getContext(NAME);
}
var root = from_html(`<input/>`);
function Switch_input($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const $$restProps = legacy_rest_props($$sanitized_props, ["el"]);
  push($$props, false);
  const $value = () => store_get(value, "$value", $$stores);
  const $input = () => store_get(input, "$input", $$stores);
  const $name = () => store_get(name2, "$name", $$stores);
  const $disabled = () => store_get(disabled, "$disabled", $$stores);
  const $required = () => store_get(required, "$required", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const inputValue = mutable_source();
  let el = prop($$props, "el", 28, () => void 0);
  const {
    elements: { input },
    options: { value, name: name2, disabled, required }
  } = getCtx();
  legacy_pre_effect(() => $value(), () => {
    set(inputValue, $value() === void 0 || $value() === "" ? "on" : $value());
  });
  legacy_pre_effect_reset();
  init();
  var input_1 = root();
  attribute_effect(
    input_1,
    () => ({
      ...$input(),
      name: $name(),
      disabled: $disabled(),
      required: $required(),
      value: get(inputValue),
      ...$$restProps
    }),
    void 0,
    void 0,
    void 0,
    void 0,
    true
  );
  bind_this(input_1, ($$value) => el($$value), () => el());
  action(input_1, ($$node) => {
    var _a, _b;
    return (_b = (_a = $input()).action) == null ? void 0 : _b.call(_a, $$node);
  });
  append($$anchor, input_1);
  pop();
  $$cleanup();
}
var root_3 = from_html(`<button><!></button>`);
var root_1 = from_html(`<!> <!>`, 1);
function Switch($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const $$restProps = legacy_rest_props($$sanitized_props, [
    "checked",
    "onCheckedChange",
    "disabled",
    "name",
    "value",
    "includeInput",
    "required",
    "asChild",
    "inputAttrs",
    "el"
  ]);
  push($$props, false);
  const $root = () => store_get(root2, "$root", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const builder = mutable_source();
  const attrs = mutable_source();
  let checked = prop($$props, "checked", 28, () => void 0);
  let onCheckedChange = prop($$props, "onCheckedChange", 24, () => void 0);
  let disabled = prop($$props, "disabled", 24, () => void 0);
  let name2 = prop($$props, "name", 24, () => void 0);
  let value = prop($$props, "value", 24, () => void 0);
  let includeInput = prop($$props, "includeInput", 8, true);
  let required = prop($$props, "required", 24, () => void 0);
  let asChild = prop($$props, "asChild", 8, false);
  let inputAttrs = prop($$props, "inputAttrs", 24, () => void 0);
  let el = prop($$props, "el", 28, () => void 0);
  const {
    elements: { root: root2 },
    states: { checked: localChecked },
    updateOption,
    getAttrs
  } = setCtx({
    disabled: disabled(),
    name: name2(),
    value: value(),
    required: required(),
    defaultChecked: checked(),
    onCheckedChange: ({ next }) => {
      var _a;
      if (checked() !== next) {
        (_a = onCheckedChange()) == null ? void 0 : _a(next);
        checked(next);
      }
      return next;
    }
  });
  const dispatch = createDispatcher();
  legacy_pre_effect(() => deep_read_state(checked()), () => {
    checked() !== void 0 && localChecked.set(checked());
  });
  legacy_pre_effect(() => deep_read_state(disabled()), () => {
    updateOption("disabled", disabled());
  });
  legacy_pre_effect(() => deep_read_state(name2()), () => {
    updateOption("name", name2());
  });
  legacy_pre_effect(() => deep_read_state(value()), () => {
    updateOption("value", value());
  });
  legacy_pre_effect(() => deep_read_state(required()), () => {
    updateOption("required", required());
  });
  legacy_pre_effect(() => $root(), () => {
    set(builder, $root());
  });
  legacy_pre_effect(() => deep_read_state(checked()), () => {
    set(attrs, { ...getAttrs("root"), "data-checked": checked() ? "" : void 0 });
  });
  legacy_pre_effect(() => (get(builder), get(attrs)), () => {
    Object.assign(get(builder), get(attrs));
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root_1();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      slot(
        node_1,
        $$props,
        "default",
        {
          get builder() {
            return get(builder);
          }
        },
        null
      );
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var button = root_3();
      attribute_effect(button, () => ({ ...get(builder), type: "button", ...$$restProps }));
      var node_2 = child(button);
      slot(
        node_2,
        $$props,
        "default",
        {
          get builder() {
            return get(builder);
          }
        },
        null
      );
      reset(button);
      bind_this(button, ($$value) => el($$value), () => el());
      action(button, ($$node) => {
        var _a, _b;
        return (_b = (_a = get(builder)).action) == null ? void 0 : _b.call(_a, $$node);
      });
      effect(() => event("m-click", button, dispatch));
      effect(() => event("m-keydown", button, dispatch));
      append($$anchor2, button);
    };
    if_block(node, ($$render) => {
      if (asChild()) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  var node_3 = sibling(node, 2);
  {
    var consequent_1 = ($$anchor2) => {
      Switch_input($$anchor2, spread_props(inputAttrs));
    };
    if_block(node_3, ($$render) => {
      if (includeInput()) $$render(consequent_1);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_2 = from_html(`<span></span>`);
function Switch_thumb($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const $$restProps = legacy_rest_props($$sanitized_props, ["asChild", "el"]);
  push($$props, false);
  const $checked = () => store_get(checked, "$checked", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const attrs = mutable_source();
  let asChild = prop($$props, "asChild", 8, false);
  let el = prop($$props, "el", 28, () => void 0);
  const { states: { checked }, getAttrs } = getCtx();
  legacy_pre_effect(() => $checked(), () => {
    set(attrs, {
      ...getAttrs("thumb"),
      "data-state": $checked() ? "checked" : "unchecked",
      "data-checked": $checked() ? "" : void 0
    });
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      slot(
        node_1,
        $$props,
        "default",
        {
          get attrs() {
            return get(attrs);
          },
          get checked() {
            return $checked();
          }
        },
        null
      );
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var span = root_2();
      attribute_effect(span, () => ({ ...$$restProps, ...get(attrs) }));
      bind_this(span, ($$value) => el($$value), () => el());
      append($$anchor2, span);
    };
    if_block(node, ($$render) => {
      if (asChild()) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
function Switch_1($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let state = prop($$props, "state", 12, true);
  let id = prop($$props, "id", 8, "");
  let ariaLabelledbyId = prop($$props, "ariaLabelledbyId", 8, "");
  let tooltip = prop($$props, "tooltip", 8, false);
  const i18n = getContext("i18n");
  const dispatch = createEventDispatcher();
  init();
  {
    let $0 = derived_safe_equal(() => (deep_read_state(tooltip()), deep_read_state(state()), $i18n(), untrack(() => typeof tooltip() === "string" ? tooltip() : typeof tooltip() === "boolean" && tooltip() ? state() ? $i18n().t("Enabled") : $i18n().t("Disabled") : "")));
    Tooltip($$anchor, {
      get content() {
        return get($0);
      },
      placement: "top",
      children: ($$anchor2, $$slotProps) => {
        {
          let $02 = derived_safe_equal(() => ($settings(), untrack(() => {
            var _a;
            return ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "focus:outline focus:outline-2 focus:outline-gray-800 focus:dark:outline-gray-200" : "outline outline-1 outline-gray-100 dark:outline-gray-800";
          })));
          let $1 = derived_safe_equal(() => state() ? " bg-emerald-500 dark:bg-emerald-700" : "bg-gray-200 dark:bg-transparent");
          Switch($$anchor2, {
            get id() {
              return id();
            },
            get "aria-labelledby"() {
              return ariaLabelledbyId();
            },
            get class() {
              return `flex h-[1.125rem] min-h-[1.125rem] w-8 shrink-0 cursor-pointer items-center rounded-full px-1 mx-[1px] transition  ${get($02) ?? ""} ${get($1) ?? ""}`;
            },
            onCheckedChange: async () => {
              await tick();
              dispatch("change", state());
            },
            get checked() {
              return state();
            },
            set checked($$value) {
              state($$value);
            },
            children: ($$anchor3, $$slotProps2) => {
              Switch_thumb($$anchor3, {
                class: "pointer-events-none block size-3 shrink-0 rounded-full bg-white transition-transform data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0 data-[state=unchecked]:shadow-mini "
              });
            },
            $$slots: { default: true },
            $$legacy: true
          });
        }
      },
      $$slots: { default: true }
    });
  }
  pop();
  $$cleanup();
}
export {
  Switch_1 as S
};
