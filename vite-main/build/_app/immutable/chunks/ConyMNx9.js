import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { aO as writable, aP as derived, k as tick, Y as get, bp as readonly, bc as setContext, g as getContext, p as push, l as legacy_pre_effect, i as deep_read_state, j as legacy_pre_effect_reset, f as first_child, a as pop, s as set, m as mutable_source, b as get$1, c as child, r as reset, A as effect$1, t as template_effect, e as sibling, q as next$1, u as untrack, h as derived_safe_equal } from "./BxIY6ir7.js";
import { e as event, s as set_text } from "./cBADewWV.js";
import { c as comment, a as append, f as from_html, t as text } from "./CAbo1QWi.js";
import { e as each, i as index } from "./7_HZMPNF.js";
import { i as if_block } from "./BoSuMvtf.js";
import { s as slot } from "./CZEGIGsR.js";
import { i as init } from "./ByqEASoO.js";
import { p as prop, l as legacy_rest_props } from "./BRmGPDvq.js";
import { a as store_get, s as setup_stores } from "./BvQ5O7-v.js";
import { l as isHTMLElement, n as getElementByMeltId, p as isElement, q as isHTMLLabelElement, m as makeElement, f as addMeltEventListener, w as withGet, b as overridable, t as toWritableStores, o as omit, h as createElHelpers, u as generateIds, v as derivedVisible, x as dequal, y as isObject, z as stripValues, e as executeCallbacks, k as kbd, A as isHTMLButtonElement, B as last, F as FIRST_LAST_KEYS, C as isElementDisabled, D as back, E as forward, G as prev, H as next, I as useEscapeKeydown, J as noop, g as disabledAttr, K as isHTMLInputElement, L as effect, M as usePopper, N as getPortalDestination, s as styleToString, O as generateId, P as createHiddenInput, Q as safeOnMount, R as isBrowser, S as toggle, i as createBitAttrs, r as removeUndefined, j as getOptionUpdater, T as getPositioningUpdater, c as createDispatcher, a as action } from "./C2A39Ney.js";
import { f as createTypeaheadSearch, h as addHighlight, r as removeHighlight, i as removeScroll, e as bubble_event } from "./DQmZL-p0.js";
import { f as attribute_effect } from "./kXiCYuyj.js";
import { t as transition } from "./B3nUhwYU.js";
import { b as bind_this } from "./D16JuV5t.js";
import { C as ChevronDown } from "./CUFupyOK.js";
import { C as Check } from "./BH2Jmq_7.js";
function getOptions(el) {
  return Array.from(el.querySelectorAll('[role="option"]:not([data-disabled])')).filter((el2) => isHTMLElement(el2));
}
function createClickOutsideIgnore(meltId) {
  return (e) => {
    const target = e.target;
    const triggerEl = getElementByMeltId(meltId);
    if (!triggerEl || !isElement(target))
      return false;
    const id = triggerEl.id;
    if (isHTMLLabelElement(target) && id === target.htmlFor) {
      return true;
    }
    if (target.closest(`label[for="${id}"]`)) {
      return true;
    }
    return false;
  };
}
function createLabel() {
  const root = makeElement("label", {
    action: (node) => {
      const mouseDown = addMeltEventListener(node, "mousedown", (e) => {
        if (!e.defaultPrevented && e.detail > 1) {
          e.preventDefault();
        }
      });
      return {
        destroy: mouseDown
      };
    }
  });
  return {
    elements: {
      root
    }
  };
}
const INTERACTION_KEYS = [kbd.ARROW_LEFT, kbd.ESCAPE, kbd.ARROW_RIGHT, kbd.SHIFT, kbd.CAPS_LOCK, kbd.CONTROL, kbd.ALT, kbd.META, kbd.ENTER, kbd.F1, kbd.F2, kbd.F3, kbd.F4, kbd.F5, kbd.F6, kbd.F7, kbd.F8, kbd.F9, kbd.F10, kbd.F11, kbd.F12];
const defaults = {
  positioning: {
    placement: "bottom",
    sameWidth: true
  },
  scrollAlignment: "nearest",
  loop: true,
  defaultOpen: false,
  closeOnOutsideClick: true,
  preventScroll: true,
  closeOnEscape: true,
  forceVisible: false,
  portal: void 0,
  builder: "listbox",
  disabled: false,
  required: false,
  name: void 0,
  typeahead: true,
  highlightOnHover: true,
  onOutsideClick: void 0
};
const listboxIdParts = ["trigger", "menu", "label"];
function createListbox(props) {
  const withDefaults = { ...defaults, ...props };
  const activeTrigger = withGet(writable(null));
  const highlightedItem = withGet(writable(null));
  const selectedWritable = withDefaults.selected ?? writable(withDefaults.defaultSelected);
  const selected = overridable(selectedWritable, withDefaults == null ? void 0 : withDefaults.onSelectedChange);
  const highlighted = derived(highlightedItem, ($highlightedItem) => $highlightedItem ? getOptionProps($highlightedItem) : void 0);
  const openWritable = withDefaults.open ?? writable(withDefaults.defaultOpen);
  const open = overridable(openWritable, withDefaults == null ? void 0 : withDefaults.onOpenChange);
  const options = toWritableStores({
    ...omit(withDefaults, "open", "defaultOpen", "builder", "ids"),
    multiple: withDefaults.multiple ?? false
  });
  const { scrollAlignment, loop, closeOnOutsideClick, closeOnEscape, preventScroll, portal, forceVisible, positioning, multiple, arrowSize, disabled, required, typeahead, name: nameProp, highlightOnHover, onOutsideClick } = options;
  const { name, selector } = createElHelpers(withDefaults.builder);
  const ids = toWritableStores({ ...generateIds(listboxIdParts), ...withDefaults.ids });
  const { handleTypeaheadSearch } = createTypeaheadSearch({
    onMatch: (element) => {
      highlightedItem.set(element);
      element.scrollIntoView({ block: scrollAlignment.get() });
    },
    getCurrentItem() {
      return highlightedItem.get();
    }
  });
  function getOptionProps(el) {
    const value = el.getAttribute("data-value");
    const label2 = el.getAttribute("data-label");
    const disabled2 = el.hasAttribute("data-disabled");
    return {
      value: value ? JSON.parse(value) : value,
      label: label2 ?? el.textContent ?? void 0,
      disabled: disabled2 ? true : false
    };
  }
  const setOption = (newOption) => {
    selected.update(($option) => {
      const $multiple = multiple.get();
      if ($multiple) {
        const optionArr = Array.isArray($option) ? [...$option] : [];
        return toggle(newOption, optionArr, (itemA, itemB) => dequal(itemA.value, itemB.value));
      }
      return newOption;
    });
  };
  function selectItem(item) {
    const props2 = getOptionProps(item);
    setOption(props2);
  }
  async function openMenu() {
    open.set(true);
    const triggerEl = document.getElementById(ids.trigger.get());
    if (!triggerEl)
      return;
    if (triggerEl !== activeTrigger.get())
      activeTrigger.set(triggerEl);
    await tick();
    const menuElement = document.getElementById(ids.menu.get());
    if (!isHTMLElement(menuElement))
      return;
    const selectedItem = menuElement.querySelector("[aria-selected=true]");
    if (!isHTMLElement(selectedItem))
      return;
    highlightedItem.set(selectedItem);
  }
  function closeMenu() {
    open.set(false);
    highlightedItem.set(null);
  }
  const isVisible = derivedVisible({ open, forceVisible, activeTrigger });
  const isSelected = derived([selected], ([$selected]) => {
    return (value) => {
      if (Array.isArray($selected)) {
        return $selected.some((o) => dequal(o.value, value));
      }
      if (isObject(value)) {
        return dequal($selected == null ? void 0 : $selected.value, stripValues(value, void 0));
      }
      return dequal($selected == null ? void 0 : $selected.value, value);
    };
  });
  const isHighlighted = derived([highlighted], ([$value]) => {
    return (item) => {
      return dequal($value == null ? void 0 : $value.value, item);
    };
  });
  const trigger = makeElement(name("trigger"), {
    stores: [open, highlightedItem, disabled, ids.menu, ids.trigger, ids.label],
    returned: ([$open, $highlightedItem, $disabled, $menuId, $triggerId, $labelId]) => {
      return {
        "aria-activedescendant": $highlightedItem == null ? void 0 : $highlightedItem.id,
        "aria-autocomplete": "list",
        "aria-controls": $menuId,
        "aria-expanded": $open,
        "aria-labelledby": $labelId,
        // autocomplete: 'off',
        id: $triggerId,
        role: "combobox",
        disabled: disabledAttr($disabled),
        type: withDefaults.builder === "select" ? "button" : void 0
      };
    },
    action: (node) => {
      const isInput = isHTMLInputElement(node);
      const unsubscribe = executeCallbacks(
        addMeltEventListener(node, "click", () => {
          node.focus();
          const $open = open.get();
          if ($open) {
            closeMenu();
          } else {
            openMenu();
          }
        }),
        // Handle all input key events including typing, meta, and navigation.
        addMeltEventListener(node, "keydown", (e) => {
          const $open = open.get();
          if (!$open) {
            if (INTERACTION_KEYS.includes(e.key)) {
              return;
            }
            if (e.key === kbd.TAB) {
              return;
            }
            if (e.key === kbd.BACKSPACE && isInput && node.value === "") {
              return;
            }
            if (e.key === kbd.SPACE && isHTMLButtonElement(node)) {
              return;
            }
            openMenu();
            tick().then(() => {
              const $selectedItem = selected.get();
              if ($selectedItem)
                return;
              const menuEl = document.getElementById(ids.menu.get());
              if (!isHTMLElement(menuEl))
                return;
              const enabledItems = Array.from(menuEl.querySelectorAll(`${selector("item")}:not([data-disabled]):not([data-hidden])`)).filter((item) => isHTMLElement(item));
              if (!enabledItems.length)
                return;
              if (e.key === kbd.ARROW_DOWN) {
                highlightedItem.set(enabledItems[0]);
                enabledItems[0].scrollIntoView({ block: scrollAlignment.get() });
              } else if (e.key === kbd.ARROW_UP) {
                highlightedItem.set(last(enabledItems));
                last(enabledItems).scrollIntoView({ block: scrollAlignment.get() });
              }
            });
          }
          if (e.key === kbd.TAB) {
            closeMenu();
            return;
          }
          if (e.key === kbd.ENTER && !e.isComposing || e.key === kbd.SPACE && isHTMLButtonElement(node)) {
            e.preventDefault();
            const $highlightedItem = highlightedItem.get();
            if ($highlightedItem) {
              selectItem($highlightedItem);
            }
            if (!multiple.get()) {
              closeMenu();
            }
          }
          if (e.key === kbd.ARROW_UP && e.altKey) {
            closeMenu();
          }
          if (FIRST_LAST_KEYS.includes(e.key)) {
            e.preventDefault();
            const menuElement = document.getElementById(ids.menu.get());
            if (!isHTMLElement(menuElement))
              return;
            const itemElements = getOptions(menuElement);
            if (!itemElements.length)
              return;
            const candidateNodes = itemElements.filter((opt) => !isElementDisabled(opt) && opt.dataset.hidden === void 0);
            const $currentItem = highlightedItem.get();
            const currentIndex = $currentItem ? candidateNodes.indexOf($currentItem) : -1;
            const $loop = loop.get();
            const $scrollAlignment = scrollAlignment.get();
            let nextItem;
            switch (e.key) {
              case kbd.ARROW_DOWN:
                nextItem = next(candidateNodes, currentIndex, $loop);
                break;
              case kbd.ARROW_UP:
                nextItem = prev(candidateNodes, currentIndex, $loop);
                break;
              case kbd.PAGE_DOWN:
                nextItem = forward(candidateNodes, currentIndex, 10, $loop);
                break;
              case kbd.PAGE_UP:
                nextItem = back(candidateNodes, currentIndex, 10, $loop);
                break;
              case kbd.HOME:
                nextItem = candidateNodes[0];
                break;
              case kbd.END:
                nextItem = last(candidateNodes);
                break;
              default:
                return;
            }
            highlightedItem.set(nextItem);
            nextItem == null ? void 0 : nextItem.scrollIntoView({ block: $scrollAlignment });
          } else if (typeahead.get()) {
            const menuEl = document.getElementById(ids.menu.get());
            if (!isHTMLElement(menuEl))
              return;
            handleTypeaheadSearch(e.key, getOptions(menuEl));
          }
        })
      );
      let unsubEscapeKeydown = noop;
      const escape = useEscapeKeydown(node, {
        handler: closeMenu,
        enabled: derived([open, closeOnEscape], ([$open, $closeOnEscape]) => {
          return $open && $closeOnEscape;
        })
      });
      if (escape && escape.destroy) {
        unsubEscapeKeydown = escape.destroy;
      }
      return {
        destroy() {
          unsubscribe();
          unsubEscapeKeydown();
        }
      };
    }
  });
  const menu = makeElement(name("menu"), {
    stores: [isVisible, ids.menu],
    returned: ([$isVisible, $menuId]) => {
      return {
        hidden: $isVisible ? void 0 : true,
        id: $menuId,
        role: "listbox",
        style: styleToString({ display: $isVisible ? void 0 : "none" })
      };
    },
    action: (node) => {
      let unsubPopper = noop;
      const unsubscribe = executeCallbacks(
        // Bind the popper portal to the input element.
        effect([isVisible, portal, closeOnOutsideClick, positioning, activeTrigger], ([$isVisible, $portal, $closeOnOutsideClick, $positioning, $activeTrigger]) => {
          unsubPopper();
          if (!$isVisible || !$activeTrigger)
            return;
          tick().then(() => {
            unsubPopper();
            const ignoreHandler = createClickOutsideIgnore(ids.trigger.get());
            unsubPopper = usePopper(node, {
              anchorElement: $activeTrigger,
              open,
              options: {
                floating: $positioning,
                focusTrap: null,
                modal: {
                  closeOnInteractOutside: $closeOnOutsideClick,
                  onClose: closeMenu,
                  open: $isVisible,
                  shouldCloseOnInteractOutside: (e) => {
                    var _a;
                    (_a = onOutsideClick.get()) == null ? void 0 : _a(e);
                    if (e.defaultPrevented)
                      return false;
                    const target = e.target;
                    if (!isElement(target))
                      return false;
                    if (target === $activeTrigger || $activeTrigger.contains(target)) {
                      return false;
                    }
                    if (ignoreHandler(e))
                      return false;
                    return true;
                  }
                },
                escapeKeydown: null,
                portal: getPortalDestination(node, $portal)
              }
            }).destroy;
          });
        })
      );
      return {
        destroy: () => {
          unsubscribe();
          unsubPopper();
        }
      };
    }
  });
  const { elements: { root: labelBuilder } } = createLabel();
  const { action: labelAction } = get(labelBuilder);
  const label = makeElement(name("label"), {
    stores: [ids.label, ids.trigger],
    returned: ([$labelId, $triggerId]) => {
      return {
        id: $labelId,
        for: $triggerId
      };
    },
    action: labelAction
  });
  const option = makeElement(name("option"), {
    stores: [isSelected],
    returned: ([$isSelected]) => (props2) => {
      const selected2 = $isSelected(props2.value);
      return {
        "data-value": JSON.stringify(props2.value),
        "data-label": props2.label,
        "data-disabled": disabledAttr(props2.disabled),
        "aria-disabled": props2.disabled ? true : void 0,
        "aria-selected": selected2,
        "data-selected": selected2 ? "" : void 0,
        id: generateId(),
        role: "option"
      };
    },
    action: (node) => {
      const unsubscribe = executeCallbacks(addMeltEventListener(node, "click", (e) => {
        if (isElementDisabled(node)) {
          e.preventDefault();
          return;
        }
        selectItem(node);
        if (!multiple.get()) {
          closeMenu();
        }
      }), effect(highlightOnHover, ($highlightOnHover) => {
        if (!$highlightOnHover)
          return;
        const unsub = executeCallbacks(addMeltEventListener(node, "mouseover", () => {
          highlightedItem.set(node);
        }), addMeltEventListener(node, "mouseleave", () => {
          highlightedItem.set(null);
        }));
        return unsub;
      }));
      return { destroy: unsubscribe };
    }
  });
  const group = makeElement(name("group"), {
    returned: () => {
      return (groupId) => ({
        role: "group",
        "aria-labelledby": groupId
      });
    }
  });
  const groupLabel = makeElement(name("group-label"), {
    returned: () => {
      return (groupId) => ({
        id: groupId
      });
    }
  });
  const hiddenInput = createHiddenInput({
    value: derived([selected], ([$selected]) => {
      const value = Array.isArray($selected) ? $selected.map((o) => o.value) : $selected == null ? void 0 : $selected.value;
      return typeof value === "string" ? value : JSON.stringify(value);
    }),
    name: readonly(nameProp),
    required,
    prefix: withDefaults.builder
  });
  const arrow = makeElement(name("arrow"), {
    stores: arrowSize,
    returned: ($arrowSize) => ({
      "data-arrow": true,
      style: styleToString({
        position: "absolute",
        width: `var(--arrow-size, ${$arrowSize}px)`,
        height: `var(--arrow-size, ${$arrowSize}px)`
      })
    })
  });
  safeOnMount(() => {
    if (!isBrowser)
      return;
    const menuEl = document.getElementById(ids.menu.get());
    const triggerEl = document.getElementById(ids.trigger.get());
    if (triggerEl) {
      activeTrigger.set(triggerEl);
    }
    if (!menuEl)
      return;
    const selectedEl = menuEl.querySelector("[data-selected]");
    if (!isHTMLElement(selectedEl))
      return;
  });
  effect([highlightedItem], ([$highlightedItem]) => {
    if (!isBrowser)
      return;
    const menuElement = document.getElementById(ids.menu.get());
    if (!isHTMLElement(menuElement))
      return;
    getOptions(menuElement).forEach((node) => {
      if (node === $highlightedItem) {
        addHighlight(node);
      } else {
        removeHighlight(node);
      }
    });
  });
  effect([open], ([$open]) => {
    if (!isBrowser)
      return;
    let unsubScroll = noop;
    if (preventScroll.get() && $open) {
      unsubScroll = removeScroll();
    }
    return () => {
      unsubScroll();
    };
  });
  return {
    ids,
    elements: {
      trigger,
      group,
      option,
      menu,
      groupLabel,
      label,
      hiddenInput,
      arrow
    },
    states: {
      open,
      selected,
      highlighted,
      highlightedItem
    },
    helpers: {
      isSelected,
      isHighlighted,
      closeMenu
    },
    options
  };
}
function createSelect(props) {
  const listbox = createListbox({ ...props, builder: "select" });
  const selectedLabel = derived(listbox.states.selected, ($selected) => {
    if (Array.isArray($selected)) {
      return $selected.map((o) => o.label).join(", ");
    }
    return ($selected == null ? void 0 : $selected.label) ?? "";
  });
  return {
    ...listbox,
    elements: {
      ...listbox.elements
    },
    states: {
      ...listbox.states,
      selectedLabel
    }
  };
}
function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((value, index2) => value === arr2[index2]);
}
function getSelectData() {
  const NAME = "select";
  const GROUP_NAME = "select-group";
  const ITEM_NAME = "select-item";
  const PARTS = [
    "arrow",
    "content",
    "group",
    "item",
    "indicator",
    "input",
    "label",
    "trigger",
    "value"
  ];
  return {
    NAME,
    GROUP_NAME,
    ITEM_NAME,
    PARTS
  };
}
function getCtx() {
  const { NAME } = getSelectData();
  return getContext(NAME);
}
function setCtx(props) {
  const { NAME, PARTS } = getSelectData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const select = {
    ...createSelect({ ...removeUndefined(props), forceVisible: true }),
    getAttrs
  };
  setContext(NAME, select);
  return {
    ...select,
    updateOption: getOptionUpdater(select.options)
  };
}
function setItemCtx(value) {
  const { ITEM_NAME } = getSelectData();
  const select = getCtx();
  setContext(ITEM_NAME, value);
  return select;
}
function updatePositioning(props) {
  const defaultPlacement = {
    side: "bottom",
    align: "center",
    sameWidth: true
  };
  const withDefaults = { ...defaultPlacement, ...props };
  const { options: { positioning } } = getCtx();
  const updater = getPositioningUpdater(positioning);
  updater(withDefaults);
}
function Select($$anchor, $$props) {
  push($$props, false);
  const $idValues = () => store_get(idValues, "$idValues", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let required = prop($$props, "required", 24, () => void 0);
  let disabled = prop($$props, "disabled", 24, () => void 0);
  let preventScroll = prop($$props, "preventScroll", 24, () => void 0);
  let loop = prop($$props, "loop", 24, () => void 0);
  let closeOnEscape = prop($$props, "closeOnEscape", 24, () => void 0);
  let closeOnOutsideClick = prop($$props, "closeOnOutsideClick", 24, () => void 0);
  let portal = prop($$props, "portal", 24, () => void 0);
  let name = prop($$props, "name", 24, () => void 0);
  let multiple = prop($$props, "multiple", 8, false);
  let selected = prop($$props, "selected", 28, () => void 0);
  let onSelectedChange = prop($$props, "onSelectedChange", 24, () => void 0);
  let open = prop($$props, "open", 28, () => void 0);
  let onOpenChange = prop($$props, "onOpenChange", 24, () => void 0);
  let items = prop($$props, "items", 24, () => []);
  let onOutsideClick = prop($$props, "onOutsideClick", 24, () => void 0);
  let typeahead = prop($$props, "typeahead", 24, () => void 0);
  const {
    states: { open: localOpen, selected: localSelected },
    updateOption,
    ids
  } = setCtx({
    required: required(),
    disabled: disabled(),
    preventScroll: preventScroll(),
    loop: loop(),
    closeOnEscape: closeOnEscape(),
    closeOnOutsideClick: closeOnOutsideClick(),
    portal: portal(),
    name: name(),
    onOutsideClick: onOutsideClick(),
    multiple: multiple(),
    forceVisible: true,
    defaultSelected: Array.isArray(selected()) ? [...selected()] : selected(),
    defaultOpen: open(),
    onSelectedChange: ({ next: next2 }) => {
      var _a, _b;
      if (Array.isArray(next2)) {
        if (!Array.isArray(selected()) || !arraysAreEqual(selected(), next2)) {
          (_a = onSelectedChange()) == null ? void 0 : _a(next2);
          selected(next2);
          return next2;
        }
        return next2;
      }
      if (selected() !== next2) {
        (_b = onSelectedChange()) == null ? void 0 : _b(next2);
        selected(next2);
      }
      return next2;
    },
    onOpenChange: ({ next: next2 }) => {
      var _a;
      if (open() !== next2) {
        (_a = onOpenChange()) == null ? void 0 : _a(next2);
        open(next2);
      }
      return next2;
    },
    items: items(),
    typeahead: typeahead()
  });
  const idValues = derived([ids.menu, ids.trigger, ids.label], ([$menuId, $triggerId, $labelId]) => ({ menu: $menuId, trigger: $triggerId, label: $labelId }));
  legacy_pre_effect(() => deep_read_state(open()), () => {
    open() !== void 0 && localOpen.set(open());
  });
  legacy_pre_effect(() => deep_read_state(selected()), () => {
    selected() !== void 0 && localSelected.set(Array.isArray(selected()) ? [...selected()] : selected());
  });
  legacy_pre_effect(() => deep_read_state(required()), () => {
    updateOption("required", required());
  });
  legacy_pre_effect(() => deep_read_state(disabled()), () => {
    updateOption("disabled", disabled());
  });
  legacy_pre_effect(() => deep_read_state(preventScroll()), () => {
    updateOption("preventScroll", preventScroll());
  });
  legacy_pre_effect(() => deep_read_state(loop()), () => {
    updateOption("loop", loop());
  });
  legacy_pre_effect(() => deep_read_state(closeOnEscape()), () => {
    updateOption("closeOnEscape", closeOnEscape());
  });
  legacy_pre_effect(() => deep_read_state(closeOnOutsideClick()), () => {
    updateOption("closeOnOutsideClick", closeOnOutsideClick());
  });
  legacy_pre_effect(() => deep_read_state(portal()), () => {
    updateOption("portal", portal());
  });
  legacy_pre_effect(() => deep_read_state(name()), () => {
    updateOption("name", name());
  });
  legacy_pre_effect(() => deep_read_state(multiple()), () => {
    updateOption("multiple", multiple());
  });
  legacy_pre_effect(() => deep_read_state(onOutsideClick()), () => {
    updateOption("onOutsideClick", onOutsideClick());
  });
  legacy_pre_effect(() => deep_read_state(typeahead()), () => {
    updateOption("typeahead", typeahead());
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  slot(
    node,
    $$props,
    "default",
    {
      get ids() {
        return $idValues();
      }
    },
    null
  );
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_3 = from_html(`<div><!></div>`);
var root_5 = from_html(`<div><!></div>`);
var root_7$1 = from_html(`<div><!></div>`);
var root_9 = from_html(`<div><!></div>`);
var root_11 = from_html(`<div><!></div>`);
function Select_content($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const $$restProps = legacy_rest_props($$sanitized_props, [
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "asChild",
    "id",
    "side",
    "align",
    "sideOffset",
    "alignOffset",
    "collisionPadding",
    "avoidCollisions",
    "collisionBoundary",
    "sameWidth",
    "fitViewport",
    "strategy",
    "overlap",
    "el"
  ]);
  push($$props, false);
  const $menu = () => store_get(menu, "$menu", $$stores);
  const $open = () => store_get(open, "$open", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const builder = mutable_source();
  let transition$1 = prop($$props, "transition", 24, () => void 0);
  let transitionConfig = prop($$props, "transitionConfig", 24, () => void 0);
  let inTransition = prop($$props, "inTransition", 24, () => void 0);
  let inTransitionConfig = prop($$props, "inTransitionConfig", 24, () => void 0);
  let outTransition = prop($$props, "outTransition", 24, () => void 0);
  let outTransitionConfig = prop($$props, "outTransitionConfig", 24, () => void 0);
  let asChild = prop($$props, "asChild", 8, false);
  let id = prop($$props, "id", 24, () => void 0);
  let side = prop($$props, "side", 8, "bottom");
  let align = prop($$props, "align", 8, "center");
  let sideOffset = prop($$props, "sideOffset", 8, 0);
  let alignOffset = prop($$props, "alignOffset", 8, 0);
  let collisionPadding = prop($$props, "collisionPadding", 8, 8);
  let avoidCollisions = prop($$props, "avoidCollisions", 8, true);
  let collisionBoundary = prop($$props, "collisionBoundary", 24, () => void 0);
  let sameWidth = prop($$props, "sameWidth", 8, true);
  let fitViewport = prop($$props, "fitViewport", 8, false);
  let strategy = prop($$props, "strategy", 8, "absolute");
  let overlap = prop($$props, "overlap", 8, false);
  let el = prop($$props, "el", 28, () => void 0);
  const { elements: { menu }, states: { open }, ids, getAttrs } = getCtx();
  const dispatch = createDispatcher();
  const attrs = getAttrs("content");
  legacy_pre_effect(() => deep_read_state(id()), () => {
    if (id()) {
      ids.menu.set(id());
    }
  });
  legacy_pre_effect(() => $menu(), () => {
    set(builder, $menu());
  });
  legacy_pre_effect(() => get$1(builder), () => {
    Object.assign(get$1(builder), attrs);
  });
  legacy_pre_effect(
    () => ($open(), deep_read_state(side()), deep_read_state(align()), deep_read_state(sideOffset()), deep_read_state(alignOffset()), deep_read_state(collisionPadding()), deep_read_state(avoidCollisions()), deep_read_state(collisionBoundary()), deep_read_state(sameWidth()), deep_read_state(fitViewport()), deep_read_state(strategy()), deep_read_state(overlap())),
    () => {
      if ($open()) {
        updatePositioning({
          side: side(),
          align: align(),
          sideOffset: sideOffset(),
          alignOffset: alignOffset(),
          collisionPadding: collisionPadding(),
          avoidCollisions: avoidCollisions(),
          collisionBoundary: collisionBoundary(),
          sameWidth: sameWidth(),
          fitViewport: fitViewport(),
          strategy: strategy(),
          overlap: overlap()
        });
      }
    }
  );
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
          get builder() {
            return get$1(builder);
          }
        },
        null
      );
      append($$anchor2, fragment_1);
    };
    var alternate_4 = ($$anchor2) => {
      var fragment_2 = comment();
      var node_2 = first_child(fragment_2);
      {
        var consequent_1 = ($$anchor3) => {
          var div = root_3();
          attribute_effect(div, () => ({ ...get$1(builder), ...$$restProps }));
          var node_3 = child(div);
          slot(
            node_3,
            $$props,
            "default",
            {
              get builder() {
                return get$1(builder);
              }
            },
            null
          );
          reset(div);
          bind_this(div, ($$value) => el($$value), () => el());
          action(div, ($$node) => {
            var _a, _b;
            return (_b = (_a = get$1(builder)).action) == null ? void 0 : _b.call(_a, $$node);
          });
          effect$1(() => event("m-pointerleave", div, dispatch));
          effect$1(() => event("keydown", div, function($$arg) {
            bubble_event.call(this, $$props, $$arg);
          }));
          transition(3, div, transition$1, transitionConfig);
          append($$anchor3, div);
        };
        var alternate_3 = ($$anchor3) => {
          var fragment_3 = comment();
          var node_4 = first_child(fragment_3);
          {
            var consequent_2 = ($$anchor4) => {
              var div_1 = root_5();
              attribute_effect(div_1, () => ({ ...get$1(builder), ...$$restProps }));
              var node_5 = child(div_1);
              slot(
                node_5,
                $$props,
                "default",
                {
                  get builder() {
                    return get$1(builder);
                  }
                },
                null
              );
              reset(div_1);
              bind_this(div_1, ($$value) => el($$value), () => el());
              action(div_1, ($$node) => {
                var _a, _b;
                return (_b = (_a = get$1(builder)).action) == null ? void 0 : _b.call(_a, $$node);
              });
              effect$1(() => event("m-pointerleave", div_1, dispatch));
              effect$1(() => event("keydown", div_1, function($$arg) {
                bubble_event.call(this, $$props, $$arg);
              }));
              transition(1, div_1, inTransition, inTransitionConfig);
              transition(2, div_1, outTransition, outTransitionConfig);
              append($$anchor4, div_1);
            };
            var alternate_2 = ($$anchor4) => {
              var fragment_4 = comment();
              var node_6 = first_child(fragment_4);
              {
                var consequent_3 = ($$anchor5) => {
                  var div_2 = root_7$1();
                  attribute_effect(div_2, () => ({ ...get$1(builder), ...$$restProps }));
                  var node_7 = child(div_2);
                  slot(
                    node_7,
                    $$props,
                    "default",
                    {
                      get builder() {
                        return get$1(builder);
                      }
                    },
                    null
                  );
                  reset(div_2);
                  bind_this(div_2, ($$value) => el($$value), () => el());
                  action(div_2, ($$node) => {
                    var _a, _b;
                    return (_b = (_a = get$1(builder)).action) == null ? void 0 : _b.call(_a, $$node);
                  });
                  effect$1(() => event("m-pointerleave", div_2, dispatch));
                  effect$1(() => event("keydown", div_2, function($$arg) {
                    bubble_event.call(this, $$props, $$arg);
                  }));
                  transition(1, div_2, inTransition, inTransitionConfig);
                  append($$anchor5, div_2);
                };
                var alternate_1 = ($$anchor5) => {
                  var fragment_5 = comment();
                  var node_8 = first_child(fragment_5);
                  {
                    var consequent_4 = ($$anchor6) => {
                      var div_3 = root_9();
                      attribute_effect(div_3, () => ({ ...get$1(builder), ...$$restProps }));
                      var node_9 = child(div_3);
                      slot(
                        node_9,
                        $$props,
                        "default",
                        {
                          get builder() {
                            return get$1(builder);
                          }
                        },
                        null
                      );
                      reset(div_3);
                      bind_this(div_3, ($$value) => el($$value), () => el());
                      action(div_3, ($$node) => {
                        var _a, _b;
                        return (_b = (_a = get$1(builder)).action) == null ? void 0 : _b.call(_a, $$node);
                      });
                      effect$1(() => event("m-pointerleave", div_3, dispatch));
                      effect$1(() => event("keydown", div_3, function($$arg) {
                        bubble_event.call(this, $$props, $$arg);
                      }));
                      transition(2, div_3, outTransition, outTransitionConfig);
                      append($$anchor6, div_3);
                    };
                    var alternate = ($$anchor6) => {
                      var fragment_6 = comment();
                      var node_10 = first_child(fragment_6);
                      {
                        var consequent_5 = ($$anchor7) => {
                          var div_4 = root_11();
                          attribute_effect(div_4, () => ({ ...get$1(builder), ...$$restProps }));
                          var node_11 = child(div_4);
                          slot(
                            node_11,
                            $$props,
                            "default",
                            {
                              get builder() {
                                return get$1(builder);
                              }
                            },
                            null
                          );
                          reset(div_4);
                          bind_this(div_4, ($$value) => el($$value), () => el());
                          action(div_4, ($$node) => {
                            var _a, _b;
                            return (_b = (_a = get$1(builder)).action) == null ? void 0 : _b.call(_a, $$node);
                          });
                          effect$1(() => event("m-pointerleave", div_4, dispatch));
                          effect$1(() => event("keydown", div_4, function($$arg) {
                            bubble_event.call(this, $$props, $$arg);
                          }));
                          append($$anchor7, div_4);
                        };
                        if_block(
                          node_10,
                          ($$render) => {
                            if ($open()) $$render(consequent_5);
                          },
                          true
                        );
                      }
                      append($$anchor6, fragment_6);
                    };
                    if_block(
                      node_8,
                      ($$render) => {
                        if (outTransition() && $open()) $$render(consequent_4);
                        else $$render(alternate, false);
                      },
                      true
                    );
                  }
                  append($$anchor5, fragment_5);
                };
                if_block(
                  node_6,
                  ($$render) => {
                    if (inTransition() && $open()) $$render(consequent_3);
                    else $$render(alternate_1, false);
                  },
                  true
                );
              }
              append($$anchor4, fragment_4);
            };
            if_block(
              node_4,
              ($$render) => {
                if (inTransition() && outTransition() && $open()) $$render(consequent_2);
                else $$render(alternate_2, false);
              },
              true
            );
          }
          append($$anchor3, fragment_3);
        };
        if_block(
          node_2,
          ($$render) => {
            if (transition$1() && $open()) $$render(consequent_1);
            else $$render(alternate_3, false);
          },
          true
        );
      }
      append($$anchor2, fragment_2);
    };
    if_block(node, ($$render) => {
      if (asChild() && $open()) $$render(consequent);
      else $$render(alternate_4, false);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_2$3 = from_html(`<div><!></div>`);
function Select_item($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const $$restProps = legacy_rest_props($$sanitized_props, ["value", "disabled", "label", "asChild", "el"]);
  push($$props, false);
  const $item = () => store_get(item, "$item", $$stores);
  const $isSelectedStore = () => store_get(isSelectedStore, "$isSelectedStore", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const builder = mutable_source();
  const isSelected = mutable_source();
  let value = prop($$props, "value", 8);
  let disabled = prop($$props, "disabled", 24, () => void 0);
  let label = prop($$props, "label", 24, () => void 0);
  let asChild = prop($$props, "asChild", 8, false);
  let el = prop($$props, "el", 28, () => void 0);
  const {
    elements: { option: item },
    helpers: { isSelected: isSelectedStore },
    getAttrs
  } = setItemCtx(value());
  const dispatch = createDispatcher();
  const attrs = getAttrs("item");
  legacy_pre_effect(
    () => ($item(), deep_read_state(value()), deep_read_state(disabled()), deep_read_state(label())),
    () => {
      set(builder, $item()({ value: value(), disabled: disabled(), label: label() }));
    }
  );
  legacy_pre_effect(() => get$1(builder), () => {
    Object.assign(get$1(builder), attrs);
  });
  legacy_pre_effect(() => ($isSelectedStore(), deep_read_state(value())), () => {
    set(isSelected, $isSelectedStore()(value()));
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
          get builder() {
            return get$1(builder);
          },
          get isSelected() {
            return get$1(isSelected);
          }
        },
        null
      );
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var div = root_2$3();
      attribute_effect(div, () => ({ ...get$1(builder), ...$$restProps }));
      var node_2 = child(div);
      slot(
        node_2,
        $$props,
        "default",
        {
          get builder() {
            return get$1(builder);
          },
          get isSelected() {
            return get$1(isSelected);
          }
        },
        ($$anchor3) => {
          var text$1 = text();
          template_effect(() => set_text(text$1, label() || value()));
          append($$anchor3, text$1);
        }
      );
      reset(div);
      bind_this(div, ($$value) => el($$value), () => el());
      action(div, ($$node) => {
        var _a, _b;
        return (_b = (_a = get$1(builder)).action) == null ? void 0 : _b.call(_a, $$node);
      });
      effect$1(() => event("m-click", div, dispatch));
      effect$1(() => event("m-pointermove", div, dispatch));
      effect$1(() => event("focusin", div, function($$arg) {
        bubble_event.call(this, $$props, $$arg);
      }));
      effect$1(() => event("keydown", div, function($$arg) {
        bubble_event.call(this, $$props, $$arg);
      }));
      effect$1(() => event("focusout", div, function($$arg) {
        bubble_event.call(this, $$props, $$arg);
      }));
      effect$1(() => event("pointerleave", div, function($$arg) {
        bubble_event.call(this, $$props, $$arg);
      }));
      append($$anchor2, div);
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
var root_2$2 = from_html(`<button><!></button>`);
function Select_trigger($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const $$restProps = legacy_rest_props($$sanitized_props, ["asChild", "id", "el"]);
  push($$props, false);
  const $trigger = () => store_get(trigger, "$trigger", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const builder = mutable_source();
  let asChild = prop($$props, "asChild", 8, false);
  let id = prop($$props, "id", 24, () => void 0);
  let el = prop($$props, "el", 28, () => void 0);
  const { elements: { trigger }, ids, getAttrs } = getCtx();
  const dispatch = createDispatcher();
  const attrs = getAttrs("trigger");
  legacy_pre_effect(() => deep_read_state(id()), () => {
    if (id()) {
      ids.trigger.set(id());
    }
  });
  legacy_pre_effect(() => $trigger(), () => {
    set(builder, $trigger());
  });
  legacy_pre_effect(() => get$1(builder), () => {
    Object.assign(get$1(builder), attrs);
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
          get builder() {
            return get$1(builder);
          }
        },
        null
      );
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var button = root_2$2();
      attribute_effect(button, () => ({ ...get$1(builder), type: "button", ...$$restProps }));
      var node_2 = child(button);
      slot(
        node_2,
        $$props,
        "default",
        {
          get builder() {
            return get$1(builder);
          }
        },
        null
      );
      reset(button);
      bind_this(button, ($$value) => el($$value), () => el());
      action(button, ($$node) => {
        var _a, _b;
        return (_b = (_a = get$1(builder)).action) == null ? void 0 : _b.call(_a, $$node);
      });
      effect$1(() => event("m-click", button, dispatch));
      effect$1(() => event("m-keydown", button, dispatch));
      append($$anchor2, button);
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
var root_2$1 = from_html(`<span> </span>`);
function Select_value($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const $$restProps = legacy_rest_props($$sanitized_props, ["placeholder", "asChild", "el"]);
  push($$props, false);
  const $selectedLabel = () => store_get(selectedLabel, "$selectedLabel", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const label = mutable_source();
  let placeholder = prop($$props, "placeholder", 8, "");
  let asChild = prop($$props, "asChild", 8, false);
  let el = prop($$props, "el", 28, () => void 0);
  const { states: { selectedLabel }, getAttrs } = getCtx();
  const attrs = getAttrs("value");
  legacy_pre_effect(() => $selectedLabel(), () => {
    set(label, $selectedLabel());
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
          get label() {
            return get$1(label);
          },
          get attrs() {
            return attrs;
          }
        },
        null
      );
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var span = root_2$1();
      attribute_effect(span, () => ({
        ...$$restProps,
        ...attrs,
        "data-placeholder": !get$1(label) ? "" : void 0
      }));
      var text2 = child(span, true);
      reset(span);
      bind_this(span, ($$value) => el($$value), () => el());
      template_effect(() => set_text(text2, get$1(label) || placeholder()));
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
var root_2 = from_html(`<!> <!>`, 1);
var root_7 = from_html(`<div class="ml-auto"><!></div>`);
var root_6 = from_html(` <!>`, 1);
var root_1 = from_html(`<!> <!>`, 1);
function ViewSelector($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let value = prop($$props, "value", 12, "");
  let placeholder = prop($$props, "placeholder", 24, () => $i18n().t("Select view"));
  let onChange = prop($$props, "onChange", 8, () => {
  });
  const items = [
    { value: "", label: $i18n().t("All") },
    { value: "created", label: $i18n().t("Created by you") },
    { value: "shared", label: $i18n().t("Shared with you") }
  ];
  init();
  {
    let $0 = derived_safe_equal(() => (deep_read_state(value()), untrack(() => items.find((item) => item.value === value()))));
    Select($$anchor, {
      get selected() {
        return get$1($0);
      },
      get items() {
        return items;
      },
      onSelectedChange: (selectedItem) => {
        value(selectedItem.value);
        onChange()(value());
      },
      children: ($$anchor2, $$slotProps) => {
        var fragment_1 = root_1();
        var node = first_child(fragment_1);
        Select_trigger(node, {
          class: "relative w-full flex items-center gap-0.5 px-2.5 py-1.5 bg-gray-50 dark:bg-gray-850 rounded-xl ",
          get "aria-label"() {
            return placeholder();
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_2 = root_2();
            var node_1 = first_child(fragment_2);
            Select_value(node_1, {
              class: "inline-flex h-input px-0.5 w-full outline-hidden bg-transparent truncate  placeholder-gray-400  focus:outline-hidden",
              get placeholder() {
                return placeholder();
              }
            });
            var node_2 = sibling(node_1, 2);
            ChevronDown(node_2, { className: " size-3.5", strokeWidth: "2.5" });
            append($$anchor3, fragment_2);
          },
          $$slots: { default: true }
        });
        var node_3 = sibling(node, 2);
        Select_content(node_3, {
          class: "rounded-2xl min-w-[170px] p-1 border border-gray-100  dark:border-gray-800 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg",
          sameWidth: false,
          align: "start",
          children: ($$anchor3, $$slotProps2) => {
            var fragment_3 = comment();
            var node_4 = first_child(fragment_3);
            slot(node_4, $$props, "default", {}, ($$anchor4) => {
              var fragment_4 = comment();
              var node_5 = first_child(fragment_4);
              each(node_5, 1, () => items, index, ($$anchor5, item) => {
                Select_item($$anchor5, {
                  class: "flex  gap-2  items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
                  get value() {
                    return get$1(item), untrack(() => get$1(item).value);
                  },
                  get label() {
                    return get$1(item), untrack(() => get$1(item).label);
                  },
                  children: ($$anchor6, $$slotProps3) => {
                    next$1();
                    var fragment_6 = root_6();
                    var text2 = first_child(fragment_6);
                    var node_6 = sibling(text2);
                    {
                      var consequent = ($$anchor7) => {
                        var div = root_7();
                        var node_7 = child(div);
                        Check(node_7, {});
                        reset(div);
                        append($$anchor7, div);
                      };
                      if_block(node_6, ($$render) => {
                        if (deep_read_state(value()), get$1(item), untrack(() => value() === get$1(item).value)) $$render(consequent);
                      });
                    }
                    template_effect(() => set_text(text2, `${(get$1(item), untrack(() => get$1(item).label)) ?? ""} `));
                    append($$anchor6, fragment_6);
                  },
                  $$slots: { default: true }
                });
              });
              append($$anchor4, fragment_4);
            });
            append($$anchor3, fragment_3);
          },
          $$slots: { default: true }
        });
        append($$anchor2, fragment_1);
      },
      $$slots: { default: true }
    });
  }
  pop();
  $$cleanup();
}
export {
  Select as S,
  ViewSelector as V,
  Select_trigger as a,
  Select_content as b,
  Select_item as c
};
