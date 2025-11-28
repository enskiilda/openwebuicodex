import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { al as is_array, aO as writable, Y as get, k as tick, aP as derived, bc as setContext, g as getContext, p as push, l as legacy_pre_effect, s as set, m as mutable_source, i as deep_read_state, b as get$1, j as legacy_pre_effect_reset, f as first_child, a as pop, c as child, r as reset, A as effect$1 } from "./BxIY6ir7.js";
import { e as event } from "./cBADewWV.js";
import { c as comment, a as append, f as from_html } from "./CAbo1QWi.js";
import { i as if_block } from "./BoSuMvtf.js";
import { s as slot } from "./CZEGIGsR.js";
import { e as element } from "./BHXWufQb.js";
import { J as noop, R as isBrowser, U as sleep, l as isHTMLElement, w as withGet, V as wrapArray, W as isFunction, t as toWritableStores, u as generateIds, v as derivedVisible, m as makeElement, L as effect, e as executeCallbacks, f as addMeltEventListener, X as portalAttr, s as styleToString, h as createElHelpers, I as useEscapeKeydown, Q as safeOnMount, F as FIRST_LAST_KEYS, k as kbd, C as isElementDisabled, Y as SELECTION_KEYS, b as overridable, g as disabledAttr, o as omit, M as usePopper, N as getPortalDestination, Z as usePortal, _ as addEventListener, r as removeUndefined, i as createBitAttrs, j as getOptionUpdater, T as getPositioningUpdater, c as createDispatcher, d as disabledAttrs, a as action } from "./C2A39Ney.js";
import { f as attribute_effect } from "./kXiCYuyj.js";
import { b as bind_this } from "./D16JuV5t.js";
import { i as init } from "./ByqEASoO.js";
import { l as legacy_rest_props, p as prop } from "./BRmGPDvq.js";
import { a as store_get, s as setup_stores } from "./BvQ5O7-v.js";
import { t as transition } from "./B3nUhwYU.js";
function bubble_event($$props, event2) {
  var _a;
  var events = (
    /** @type {Record<string, Function[] | Function>} */
    (_a = $$props.$$events) == null ? void 0 : _a[event2.type]
  );
  var callbacks = is_array(events) ? events.slice() : events == null ? [] : [events];
  for (var fn of callbacks) {
    fn.call(this, event2);
  }
}
function addHighlight(element2) {
  element2.setAttribute("data-highlighted", "");
}
function removeHighlight(element2) {
  element2.removeAttribute("data-highlighted");
}
function debounce(fn, wait = 500) {
  let timeout = null;
  return function(...args) {
    const later = () => {
      timeout = null;
      fn(...args);
    };
    timeout && clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
const isDom = () => typeof window !== "undefined";
function getPlatform() {
  const agent = navigator.userAgentData;
  return (agent == null ? void 0 : agent.platform) ?? navigator.platform;
}
const pt = (v) => isDom() && v.test(getPlatform().toLowerCase());
const isTouchDevice = () => isDom() && !!navigator.maxTouchPoints;
const isMac = () => pt(/^mac/) && !isTouchDevice();
const isApple = () => pt(/mac|iphone|ipad|ipod/i);
const isIos = () => isApple() && !isMac();
const LOCK_CLASSNAME = "data-melt-scroll-lock";
function assignStyle(el, style) {
  if (!el)
    return;
  const previousStyle = el.style.cssText;
  Object.assign(el.style, style);
  return () => {
    el.style.cssText = previousStyle;
  };
}
function setCSSProperty(el, property, value) {
  if (!el)
    return;
  const previousValue = el.style.getPropertyValue(property);
  el.style.setProperty(property, value);
  return () => {
    if (previousValue) {
      el.style.setProperty(property, previousValue);
    } else {
      el.style.removeProperty(property);
    }
  };
}
function getPaddingProperty(documentElement) {
  const documentLeft = documentElement.getBoundingClientRect().left;
  const scrollbarX = Math.round(documentLeft) + documentElement.scrollLeft;
  return scrollbarX ? "paddingLeft" : "paddingRight";
}
function removeScroll(_document) {
  const doc = document;
  const win = doc.defaultView ?? window;
  const { documentElement, body } = doc;
  const locked = body.hasAttribute(LOCK_CLASSNAME);
  if (locked)
    return noop;
  body.setAttribute(LOCK_CLASSNAME, "");
  const scrollbarWidth = win.innerWidth - documentElement.clientWidth;
  const setScrollbarWidthProperty = () => setCSSProperty(documentElement, "--scrollbar-width", `${scrollbarWidth}px`);
  const paddingProperty = getPaddingProperty(documentElement);
  const scrollbarSidePadding = win.getComputedStyle(body)[paddingProperty];
  const setStyle = () => assignStyle(body, {
    overflow: "hidden",
    [paddingProperty]: `calc(${scrollbarSidePadding} + ${scrollbarWidth}px)`
  });
  const setIOSStyle = () => {
    const { scrollX, scrollY, visualViewport } = win;
    const offsetLeft = (visualViewport == null ? void 0 : visualViewport.offsetLeft) ?? 0;
    const offsetTop = (visualViewport == null ? void 0 : visualViewport.offsetTop) ?? 0;
    const restoreStyle = assignStyle(body, {
      position: "fixed",
      overflow: "hidden",
      top: `${-(scrollY - Math.floor(offsetTop))}px`,
      left: `${-(scrollX - Math.floor(offsetLeft))}px`,
      right: "0",
      [paddingProperty]: `calc(${scrollbarSidePadding} + ${scrollbarWidth}px)`
    });
    return () => {
      restoreStyle == null ? void 0 : restoreStyle();
      win.scrollTo(scrollX, scrollY);
    };
  };
  const cleanups = [setScrollbarWidthProperty(), isIos() ? setIOSStyle() : setStyle()];
  return () => {
    cleanups.forEach((fn) => fn == null ? void 0 : fn());
    body.removeAttribute(LOCK_CLASSNAME);
  };
}
function handleRovingFocus(nextElement) {
  if (!isBrowser)
    return;
  sleep(1).then(() => {
    const currentFocusedElement = document.activeElement;
    if (!isHTMLElement(currentFocusedElement) || currentFocusedElement === nextElement)
      return;
    currentFocusedElement.tabIndex = -1;
    if (nextElement) {
      nextElement.tabIndex = 0;
      nextElement.focus();
    }
  });
}
function getFocusableElements() {
  return Array.from(document.querySelectorAll('a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]):not([tabindex="-1"]), textarea:not([disabled]):not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])'));
}
function getNextFocusable(currentElement) {
  const focusableElements = getFocusableElements();
  const currentIndex = focusableElements.indexOf(currentElement);
  const nextIndex = currentIndex + 1;
  const nextElement = focusableElements[nextIndex];
  if (nextIndex < focusableElements.length && isHTMLElement(nextElement)) {
    return nextElement;
  }
  return null;
}
function getPreviousFocusable(currentElement) {
  const focusableElements = getFocusableElements();
  const currentIndex = focusableElements.indexOf(currentElement);
  const previousIndex = currentIndex - 1;
  const prevElement = focusableElements[previousIndex];
  if (previousIndex >= 0 && isHTMLElement(prevElement)) {
    return prevElement;
  }
  return null;
}
const ignoredKeys = /* @__PURE__ */ new Set(["Shift", "Control", "Alt", "Meta", "CapsLock", "NumLock"]);
const defaults$3 = {
  onMatch: handleRovingFocus,
  getCurrentItem: () => document.activeElement
};
function createTypeaheadSearch(args = {}) {
  const withDefaults = { ...defaults$3, ...args };
  const typed = withGet(writable([]));
  const resetTyped = debounce(() => {
    typed.update(() => []);
  });
  const handleTypeaheadSearch = (key, items) => {
    if (ignoredKeys.has(key))
      return;
    const currentItem = withDefaults.getCurrentItem();
    const $typed = get(typed);
    if (!Array.isArray($typed)) {
      return;
    }
    $typed.push(key.toLowerCase());
    typed.set($typed);
    const candidateItems = items.filter((item) => {
      if (item.getAttribute("disabled") === "true" || item.getAttribute("aria-disabled") === "true" || item.hasAttribute("data-disabled")) {
        return false;
      }
      return true;
    });
    const isRepeated = $typed.length > 1 && $typed.every((char) => char === $typed[0]);
    const normalizeSearch = isRepeated ? $typed[0] : $typed.join("");
    const currentItemIndex = isHTMLElement(currentItem) ? candidateItems.indexOf(currentItem) : -1;
    let wrappedItems = wrapArray(candidateItems, Math.max(currentItemIndex, 0));
    const excludeCurrentItem = normalizeSearch.length === 1;
    if (excludeCurrentItem) {
      wrappedItems = wrappedItems.filter((v) => v !== currentItem);
    }
    const nextItem = wrappedItems.find((item) => (item == null ? void 0 : item.innerText) && item.innerText.toLowerCase().startsWith(normalizeSearch.toLowerCase()));
    if (isHTMLElement(nextItem) && nextItem !== currentItem) {
      withDefaults.onMatch(nextItem);
    }
    resetTyped();
  };
  return {
    typed,
    resetTyped,
    handleTypeaheadSearch
  };
}
async function handleFocus(args) {
  const { prop: prop2, defaultEl } = args;
  await Promise.all([sleep(1), tick]);
  if (prop2 === void 0) {
    defaultEl == null ? void 0 : defaultEl.focus();
    return;
  }
  const returned = isFunction(prop2) ? prop2(defaultEl) : prop2;
  if (typeof returned === "string") {
    const el = document.querySelector(returned);
    if (!isHTMLElement(el))
      return;
    el.focus();
  } else if (isHTMLElement(returned)) {
    returned.focus();
  }
}
const SUB_OPEN_KEYS = {
  ltr: [...SELECTION_KEYS, kbd.ARROW_RIGHT]
};
const SUB_CLOSE_KEYS = {
  ltr: [kbd.ARROW_LEFT]
};
const menuIdParts = ["menu", "trigger"];
const defaults$2 = {
  arrowSize: 8,
  positioning: {
    placement: "bottom"
  },
  preventScroll: true,
  closeOnEscape: true,
  closeOnOutsideClick: true,
  portal: void 0,
  loop: false,
  dir: "ltr",
  defaultOpen: false,
  typeahead: true,
  closeOnItemClick: true,
  onOutsideClick: void 0
};
function createMenuBuilder(opts) {
  const { name, selector } = createElHelpers(opts.selector);
  const { preventScroll, arrowSize, positioning, closeOnEscape, closeOnOutsideClick, portal, forceVisible, typeahead, loop, closeFocus, disableFocusFirstItem, closeOnItemClick, onOutsideClick } = opts.rootOptions;
  const rootOpen = opts.rootOpen;
  const rootActiveTrigger = opts.rootActiveTrigger;
  const nextFocusable = opts.nextFocusable;
  const prevFocusable = opts.prevFocusable;
  const isUsingKeyboard = withGet.writable(false);
  const lastPointerX = withGet(writable(0));
  const pointerGraceIntent = withGet(writable(null));
  const pointerDir = withGet(writable("right"));
  const currentFocusedItem = withGet(writable(null));
  const pointerMovingToSubmenu = withGet(derived([pointerDir, pointerGraceIntent], ([$pointerDir, $pointerGraceIntent]) => {
    return (e) => {
      const isMovingTowards = $pointerDir === ($pointerGraceIntent == null ? void 0 : $pointerGraceIntent.side);
      return isMovingTowards && isPointerInGraceArea(e, $pointerGraceIntent == null ? void 0 : $pointerGraceIntent.area);
    };
  }));
  const { typed, handleTypeaheadSearch } = createTypeaheadSearch();
  const rootIds = toWritableStores({ ...generateIds(menuIdParts), ...opts.ids });
  const isVisible = derivedVisible({
    open: rootOpen,
    forceVisible,
    activeTrigger: rootActiveTrigger
  });
  const rootMenu = makeElement(name(), {
    stores: [isVisible, portal, rootIds.menu, rootIds.trigger],
    returned: ([$isVisible, $portal, $rootMenuId, $rootTriggerId]) => {
      return {
        role: "menu",
        hidden: $isVisible ? void 0 : true,
        style: styleToString({
          display: $isVisible ? void 0 : "none"
        }),
        id: $rootMenuId,
        "aria-labelledby": $rootTriggerId,
        "data-state": $isVisible ? "open" : "closed",
        "data-portal": portalAttr($portal),
        tabindex: -1
      };
    },
    action: (node) => {
      let unsubPopper = noop;
      const unsubDerived = effect([isVisible, rootActiveTrigger, positioning, closeOnOutsideClick, portal, closeOnEscape], ([$isVisible, $rootActiveTrigger, $positioning, $closeOnOutsideClick, $portal, $closeOnEscape]) => {
        unsubPopper();
        if (!$isVisible || !$rootActiveTrigger)
          return;
        tick().then(() => {
          unsubPopper();
          setMeltMenuAttribute(node, selector);
          unsubPopper = usePopper(node, {
            anchorElement: $rootActiveTrigger,
            open: rootOpen,
            options: {
              floating: $positioning,
              modal: {
                closeOnInteractOutside: $closeOnOutsideClick,
                shouldCloseOnInteractOutside: (e) => {
                  var _a;
                  (_a = onOutsideClick.get()) == null ? void 0 : _a(e);
                  if (e.defaultPrevented)
                    return false;
                  if (isHTMLElement($rootActiveTrigger) && $rootActiveTrigger.contains(e.target)) {
                    return false;
                  }
                  return true;
                },
                onClose: () => {
                  rootOpen.set(false);
                  $rootActiveTrigger.focus();
                },
                open: $isVisible
              },
              portal: getPortalDestination(node, $portal),
              escapeKeydown: $closeOnEscape ? void 0 : null
            }
          }).destroy;
        });
      });
      const unsubEvents = executeCallbacks(addMeltEventListener(node, "keydown", (e) => {
        const target = e.target;
        const menuEl = e.currentTarget;
        if (!isHTMLElement(target) || !isHTMLElement(menuEl))
          return;
        const isKeyDownInside = target.closest('[role="menu"]') === menuEl;
        if (!isKeyDownInside)
          return;
        if (FIRST_LAST_KEYS.includes(e.key)) {
          handleMenuNavigation(e, loop.get() ?? false);
        }
        if (e.key === kbd.TAB) {
          e.preventDefault();
          rootOpen.set(false);
          handleTabNavigation(e, nextFocusable, prevFocusable);
          return;
        }
        const isCharacterKey = e.key.length === 1;
        const isModifierKey = e.ctrlKey || e.altKey || e.metaKey;
        if (!isModifierKey && isCharacterKey && typeahead.get() === true) {
          handleTypeaheadSearch(e.key, getMenuItems(menuEl));
        }
      }));
      return {
        destroy() {
          unsubDerived();
          unsubEvents();
          unsubPopper();
        }
      };
    }
  });
  const rootTrigger = makeElement(name("trigger"), {
    stores: [rootOpen, rootIds.menu, rootIds.trigger],
    returned: ([$rootOpen, $rootMenuId, $rootTriggerId]) => {
      return {
        "aria-controls": $rootMenuId,
        "aria-expanded": $rootOpen,
        "data-state": $rootOpen ? "open" : "closed",
        id: $rootTriggerId,
        tabindex: 0
      };
    },
    action: (node) => {
      applyAttrsIfDisabled(node);
      rootActiveTrigger.update((p) => {
        if (p)
          return p;
        return node;
      });
      const unsub = executeCallbacks(addMeltEventListener(node, "click", (e) => {
        const $rootOpen = rootOpen.get();
        const triggerEl = e.currentTarget;
        if (!isHTMLElement(triggerEl))
          return;
        handleOpen(triggerEl);
        if (!$rootOpen)
          e.preventDefault();
      }), addMeltEventListener(node, "keydown", (e) => {
        const triggerEl = e.currentTarget;
        if (!isHTMLElement(triggerEl))
          return;
        if (!(SELECTION_KEYS.includes(e.key) || e.key === kbd.ARROW_DOWN))
          return;
        e.preventDefault();
        handleOpen(triggerEl);
        const menuId = triggerEl.getAttribute("aria-controls");
        if (!menuId)
          return;
        const menu = document.getElementById(menuId);
        if (!menu)
          return;
        const menuItems = getMenuItems(menu);
        if (!menuItems.length)
          return;
        handleRovingFocus(menuItems[0]);
      }));
      return {
        destroy: unsub
      };
    }
  });
  const rootArrow = makeElement(name("arrow"), {
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
  const overlay = makeElement(name("overlay"), {
    stores: [isVisible],
    returned: ([$isVisible]) => {
      return {
        hidden: $isVisible ? void 0 : true,
        tabindex: -1,
        style: styleToString({
          display: $isVisible ? void 0 : "none"
        }),
        "aria-hidden": "true",
        "data-state": stateAttr($isVisible)
      };
    },
    action: (node) => {
      let unsubEscapeKeydown = noop;
      if (closeOnEscape.get()) {
        const escapeKeydown = useEscapeKeydown(node, {
          handler: () => {
            rootOpen.set(false);
            const $rootActiveTrigger = rootActiveTrigger.get();
            if ($rootActiveTrigger)
              $rootActiveTrigger.focus();
          }
        });
        if (escapeKeydown && escapeKeydown.destroy) {
          unsubEscapeKeydown = escapeKeydown.destroy;
        }
      }
      const unsubPortal = effect([portal], ([$portal]) => {
        if ($portal === null)
          return noop;
        const portalDestination = getPortalDestination(node, $portal);
        if (portalDestination === null)
          return noop;
        return usePortal(node, portalDestination).destroy;
      });
      return {
        destroy() {
          unsubEscapeKeydown();
          unsubPortal();
        }
      };
    }
  });
  const item = makeElement(name("item"), {
    returned: () => {
      return {
        role: "menuitem",
        tabindex: -1,
        "data-orientation": "vertical"
      };
    },
    action: (node) => {
      setMeltMenuAttribute(node, selector);
      applyAttrsIfDisabled(node);
      const unsub = executeCallbacks(addMeltEventListener(node, "pointerdown", (e) => {
        const itemEl = e.currentTarget;
        if (!isHTMLElement(itemEl))
          return;
        if (isElementDisabled(itemEl)) {
          e.preventDefault();
          return;
        }
      }), addMeltEventListener(node, "click", (e) => {
        const itemEl = e.currentTarget;
        if (!isHTMLElement(itemEl))
          return;
        if (isElementDisabled(itemEl)) {
          e.preventDefault();
          return;
        }
        if (e.defaultPrevented) {
          handleRovingFocus(itemEl);
          return;
        }
        if (closeOnItemClick.get()) {
          sleep(1).then(() => {
            rootOpen.set(false);
          });
        }
      }), addMeltEventListener(node, "keydown", (e) => {
        onItemKeyDown(e);
      }), addMeltEventListener(node, "pointermove", (e) => {
        onMenuItemPointerMove(e);
      }), addMeltEventListener(node, "pointerleave", (e) => {
        onMenuItemPointerLeave(e);
      }), addMeltEventListener(node, "focusin", (e) => {
        onItemFocusIn(e);
      }), addMeltEventListener(node, "focusout", (e) => {
        onItemFocusOut(e);
      }));
      return {
        destroy: unsub
      };
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
  const checkboxItemDefaults = {
    defaultChecked: false,
    disabled: false
  };
  const createCheckboxItem = (props) => {
    const withDefaults = { ...checkboxItemDefaults, ...props };
    const checkedWritable = withDefaults.checked ?? writable(withDefaults.defaultChecked ?? null);
    const checked = overridable(checkedWritable, withDefaults.onCheckedChange);
    const disabled = writable(withDefaults.disabled);
    const checkboxItem = makeElement(name("checkbox-item"), {
      stores: [checked, disabled],
      returned: ([$checked, $disabled]) => {
        return {
          role: "menuitemcheckbox",
          tabindex: -1,
          "data-orientation": "vertical",
          "aria-checked": isIndeterminate($checked) ? "mixed" : $checked ? "true" : "false",
          "data-disabled": disabledAttr($disabled),
          "data-state": getCheckedState($checked)
        };
      },
      action: (node) => {
        setMeltMenuAttribute(node, selector);
        applyAttrsIfDisabled(node);
        const unsub = executeCallbacks(addMeltEventListener(node, "pointerdown", (e) => {
          const itemEl = e.currentTarget;
          if (!isHTMLElement(itemEl))
            return;
          if (isElementDisabled(itemEl)) {
            e.preventDefault();
            return;
          }
        }), addMeltEventListener(node, "click", (e) => {
          const itemEl = e.currentTarget;
          if (!isHTMLElement(itemEl))
            return;
          if (isElementDisabled(itemEl)) {
            e.preventDefault();
            return;
          }
          if (e.defaultPrevented) {
            handleRovingFocus(itemEl);
            return;
          }
          checked.update((prev) => {
            if (isIndeterminate(prev))
              return true;
            return !prev;
          });
          if (closeOnItemClick.get()) {
            tick().then(() => {
              rootOpen.set(false);
            });
          }
        }), addMeltEventListener(node, "keydown", (e) => {
          onItemKeyDown(e);
        }), addMeltEventListener(node, "pointermove", (e) => {
          const itemEl = e.currentTarget;
          if (!isHTMLElement(itemEl))
            return;
          if (isElementDisabled(itemEl)) {
            onItemLeave(e);
            return;
          }
          onMenuItemPointerMove(e, itemEl);
        }), addMeltEventListener(node, "pointerleave", (e) => {
          onMenuItemPointerLeave(e);
        }), addMeltEventListener(node, "focusin", (e) => {
          onItemFocusIn(e);
        }), addMeltEventListener(node, "focusout", (e) => {
          onItemFocusOut(e);
        }));
        return {
          destroy: unsub
        };
      }
    });
    const isChecked = derived(checked, ($checked) => $checked === true);
    const _isIndeterminate = derived(checked, ($checked) => $checked === "indeterminate");
    return {
      elements: {
        checkboxItem
      },
      states: {
        checked
      },
      helpers: {
        isChecked,
        isIndeterminate: _isIndeterminate
      },
      options: {
        disabled
      }
    };
  };
  const createMenuRadioGroup = (args = {}) => {
    const valueWritable = args.value ?? writable(args.defaultValue ?? null);
    const value = overridable(valueWritable, args.onValueChange);
    const radioGroup = makeElement(name("radio-group"), {
      returned: () => ({
        role: "group"
      })
    });
    const radioItemDefaults = {
      disabled: false
    };
    const radioItem = makeElement(name("radio-item"), {
      stores: [value],
      returned: ([$value]) => {
        return (itemProps) => {
          const { value: itemValue, disabled } = { ...radioItemDefaults, ...itemProps };
          const checked = $value === itemValue;
          return {
            disabled,
            role: "menuitemradio",
            "data-state": checked ? "checked" : "unchecked",
            "aria-checked": checked,
            "data-disabled": disabledAttr(disabled),
            "data-value": itemValue,
            "data-orientation": "vertical",
            tabindex: -1
          };
        };
      },
      action: (node) => {
        setMeltMenuAttribute(node, selector);
        const unsub = executeCallbacks(addMeltEventListener(node, "pointerdown", (e) => {
          const itemEl = e.currentTarget;
          if (!isHTMLElement(itemEl))
            return;
          const itemValue = node.dataset.value;
          const disabled = node.dataset.disabled;
          if (disabled || itemValue === void 0) {
            e.preventDefault();
            return;
          }
        }), addMeltEventListener(node, "click", (e) => {
          const itemEl = e.currentTarget;
          if (!isHTMLElement(itemEl))
            return;
          const itemValue = node.dataset.value;
          const disabled = node.dataset.disabled;
          if (disabled || itemValue === void 0) {
            e.preventDefault();
            return;
          }
          if (e.defaultPrevented) {
            if (!isHTMLElement(itemEl))
              return;
            handleRovingFocus(itemEl);
            return;
          }
          value.set(itemValue);
          if (closeOnItemClick.get()) {
            tick().then(() => {
              rootOpen.set(false);
            });
          }
        }), addMeltEventListener(node, "keydown", (e) => {
          onItemKeyDown(e);
        }), addMeltEventListener(node, "pointermove", (e) => {
          const itemEl = e.currentTarget;
          if (!isHTMLElement(itemEl))
            return;
          const itemValue = node.dataset.value;
          const disabled = node.dataset.disabled;
          if (disabled || itemValue === void 0) {
            onItemLeave(e);
            return;
          }
          onMenuItemPointerMove(e, itemEl);
        }), addMeltEventListener(node, "pointerleave", (e) => {
          onMenuItemPointerLeave(e);
        }), addMeltEventListener(node, "focusin", (e) => {
          onItemFocusIn(e);
        }), addMeltEventListener(node, "focusout", (e) => {
          onItemFocusOut(e);
        }));
        return {
          destroy: unsub
        };
      }
    });
    const isChecked = derived(value, ($value) => {
      return (itemValue) => {
        return $value === itemValue;
      };
    });
    return {
      elements: {
        radioGroup,
        radioItem
      },
      states: {
        value
      },
      helpers: {
        isChecked
      }
    };
  };
  const { elements: { root: separator } } = createSeparator({
    orientation: "horizontal"
  });
  const subMenuDefaults = {
    ...defaults$2,
    disabled: false,
    positioning: {
      placement: "right-start",
      gutter: 8
    }
  };
  const createSubmenu = (args) => {
    const withDefaults = { ...subMenuDefaults, ...args };
    const subOpenWritable = withDefaults.open ?? writable(false);
    const subOpen = overridable(subOpenWritable, withDefaults == null ? void 0 : withDefaults.onOpenChange);
    const options = toWritableStores(omit(withDefaults, "ids"));
    const { positioning: positioning2, arrowSize: arrowSize2, disabled } = options;
    const subActiveTrigger = withGet(writable(null));
    const subOpenTimer = withGet(writable(null));
    const pointerGraceTimer = withGet(writable(0));
    const subIds = toWritableStores({ ...generateIds(menuIdParts), ...withDefaults.ids });
    safeOnMount(() => {
      const subTrigger2 = document.getElementById(subIds.trigger.get());
      if (subTrigger2) {
        subActiveTrigger.set(subTrigger2);
      }
    });
    const subIsVisible = derivedVisible({
      open: subOpen,
      forceVisible,
      activeTrigger: subActiveTrigger
    });
    const subMenu = makeElement(name("submenu"), {
      stores: [subIsVisible, subIds.menu, subIds.trigger],
      returned: ([$subIsVisible, $subMenuId, $subTriggerId]) => {
        return {
          role: "menu",
          hidden: $subIsVisible ? void 0 : true,
          style: styleToString({
            display: $subIsVisible ? void 0 : "none"
          }),
          id: $subMenuId,
          "aria-labelledby": $subTriggerId,
          "data-state": $subIsVisible ? "open" : "closed",
          // unit tests fail on `.closest` if the id starts with a number
          // so using a data attribute
          "data-id": $subMenuId,
          tabindex: -1
        };
      },
      action: (node) => {
        let unsubPopper = noop;
        const unsubDerived = effect([subIsVisible, positioning2], ([$subIsVisible, $positioning]) => {
          unsubPopper();
          if (!$subIsVisible)
            return;
          const activeTrigger = subActiveTrigger.get();
          if (!activeTrigger)
            return;
          tick().then(() => {
            unsubPopper();
            const parentMenuEl = getParentMenu(activeTrigger);
            unsubPopper = usePopper(node, {
              anchorElement: activeTrigger,
              open: subOpen,
              options: {
                floating: $positioning,
                portal: isHTMLElement(parentMenuEl) ? parentMenuEl : void 0,
                modal: null,
                focusTrap: null,
                escapeKeydown: null
              }
            }).destroy;
          });
        });
        const unsubEvents = executeCallbacks(addMeltEventListener(node, "keydown", (e) => {
          if (e.key === kbd.ESCAPE) {
            return;
          }
          const target = e.target;
          const menuEl = e.currentTarget;
          if (!isHTMLElement(target) || !isHTMLElement(menuEl))
            return;
          const isKeyDownInside = target.closest('[role="menu"]') === menuEl;
          if (!isKeyDownInside)
            return;
          if (FIRST_LAST_KEYS.includes(e.key)) {
            e.stopImmediatePropagation();
            handleMenuNavigation(e, loop.get() ?? false);
            return;
          }
          const isCloseKey = SUB_CLOSE_KEYS["ltr"].includes(e.key);
          const isModifierKey = e.ctrlKey || e.altKey || e.metaKey;
          const isCharacterKey = e.key.length === 1;
          if (isCloseKey) {
            const $subActiveTrigger = subActiveTrigger.get();
            e.preventDefault();
            subOpen.update(() => {
              if ($subActiveTrigger) {
                handleRovingFocus($subActiveTrigger);
              }
              return false;
            });
            return;
          }
          if (e.key === kbd.TAB) {
            e.preventDefault();
            rootOpen.set(false);
            handleTabNavigation(e, nextFocusable, prevFocusable);
            return;
          }
          if (!isModifierKey && isCharacterKey && typeahead.get() === true) {
            handleTypeaheadSearch(e.key, getMenuItems(menuEl));
          }
        }), addMeltEventListener(node, "pointermove", (e) => {
          onMenuPointerMove(e);
        }), addMeltEventListener(node, "focusout", (e) => {
          const $subActiveTrigger = subActiveTrigger.get();
          if (isUsingKeyboard.get()) {
            const target = e.target;
            const submenuEl = document.getElementById(subIds.menu.get());
            if (!isHTMLElement(submenuEl) || !isHTMLElement(target))
              return;
            if (!submenuEl.contains(target) && target !== $subActiveTrigger) {
              subOpen.set(false);
            }
          } else {
            const menuEl = e.currentTarget;
            const relatedTarget = e.relatedTarget;
            if (!isHTMLElement(relatedTarget) || !isHTMLElement(menuEl))
              return;
            if (!menuEl.contains(relatedTarget) && relatedTarget !== $subActiveTrigger) {
              subOpen.set(false);
            }
          }
        }));
        return {
          destroy() {
            unsubDerived();
            unsubPopper();
            unsubEvents();
          }
        };
      }
    });
    const subTrigger = makeElement(name("subtrigger"), {
      stores: [subOpen, disabled, subIds.menu, subIds.trigger],
      returned: ([$subOpen, $disabled, $subMenuId, $subTriggerId]) => {
        return {
          role: "menuitem",
          id: $subTriggerId,
          tabindex: -1,
          "aria-controls": $subMenuId,
          "aria-expanded": $subOpen,
          "data-state": $subOpen ? "open" : "closed",
          "data-disabled": disabledAttr($disabled),
          "aria-haspopop": "menu"
        };
      },
      action: (node) => {
        setMeltMenuAttribute(node, selector);
        applyAttrsIfDisabled(node);
        subActiveTrigger.update((p) => {
          if (p)
            return p;
          return node;
        });
        const unsubTimer = () => {
          clearTimerStore(subOpenTimer);
          window.clearTimeout(pointerGraceTimer.get());
          pointerGraceIntent.set(null);
        };
        const unsubEvents = executeCallbacks(addMeltEventListener(node, "click", (e) => {
          if (e.defaultPrevented)
            return;
          const triggerEl = e.currentTarget;
          if (!isHTMLElement(triggerEl) || isElementDisabled(triggerEl))
            return;
          handleRovingFocus(triggerEl);
          if (!subOpen.get()) {
            subOpen.update((prev) => {
              const isAlreadyOpen = prev;
              if (!isAlreadyOpen) {
                subActiveTrigger.set(triggerEl);
                return !prev;
              }
              return prev;
            });
          }
        }), addMeltEventListener(node, "keydown", (e) => {
          const $typed = typed.get();
          const triggerEl = e.currentTarget;
          if (!isHTMLElement(triggerEl) || isElementDisabled(triggerEl))
            return;
          const isTypingAhead = $typed.length > 0;
          if (isTypingAhead && e.key === kbd.SPACE)
            return;
          if (SUB_OPEN_KEYS["ltr"].includes(e.key)) {
            if (!subOpen.get()) {
              triggerEl.click();
              e.preventDefault();
              return;
            }
            const menuId = triggerEl.getAttribute("aria-controls");
            if (!menuId)
              return;
            const menuEl = document.getElementById(menuId);
            if (!isHTMLElement(menuEl))
              return;
            const firstItem = getMenuItems(menuEl)[0];
            handleRovingFocus(firstItem);
          }
        }), addMeltEventListener(node, "pointermove", (e) => {
          if (!isMouse(e))
            return;
          onItemEnter(e);
          if (e.defaultPrevented)
            return;
          const triggerEl = e.currentTarget;
          if (!isHTMLElement(triggerEl))
            return;
          if (!isFocusWithinSubmenu(subIds.menu.get())) {
            handleRovingFocus(triggerEl);
          }
          const openTimer = subOpenTimer.get();
          if (!subOpen.get() && !openTimer && !isElementDisabled(triggerEl)) {
            subOpenTimer.set(window.setTimeout(() => {
              subOpen.update(() => {
                subActiveTrigger.set(triggerEl);
                return true;
              });
              clearTimerStore(subOpenTimer);
            }, 100));
          }
        }), addMeltEventListener(node, "pointerleave", (e) => {
          if (!isMouse(e))
            return;
          clearTimerStore(subOpenTimer);
          const submenuEl = document.getElementById(subIds.menu.get());
          const contentRect = submenuEl == null ? void 0 : submenuEl.getBoundingClientRect();
          if (contentRect) {
            const side = submenuEl == null ? void 0 : submenuEl.dataset.side;
            const rightSide = side === "right";
            const bleed = rightSide ? -5 : 5;
            const contentNearEdge = contentRect[rightSide ? "left" : "right"];
            const contentFarEdge = contentRect[rightSide ? "right" : "left"];
            pointerGraceIntent.set({
              area: [
                // Apply a bleed on clientX to ensure that our exit point is
                // consistently within polygon bounds
                { x: e.clientX + bleed, y: e.clientY },
                { x: contentNearEdge, y: contentRect.top },
                { x: contentFarEdge, y: contentRect.top },
                { x: contentFarEdge, y: contentRect.bottom },
                { x: contentNearEdge, y: contentRect.bottom }
              ],
              side
            });
            window.clearTimeout(pointerGraceTimer.get());
            pointerGraceTimer.set(window.setTimeout(() => {
              pointerGraceIntent.set(null);
            }, 300));
          } else {
            onTriggerLeave(e);
            if (e.defaultPrevented)
              return;
            pointerGraceIntent.set(null);
          }
        }), addMeltEventListener(node, "focusout", (e) => {
          const triggerEl = e.currentTarget;
          if (!isHTMLElement(triggerEl))
            return;
          removeHighlight(triggerEl);
          const relatedTarget = e.relatedTarget;
          if (!isHTMLElement(relatedTarget))
            return;
          const menuId = triggerEl.getAttribute("aria-controls");
          if (!menuId)
            return;
          const menu = document.getElementById(menuId);
          if (menu && !menu.contains(relatedTarget)) {
            subOpen.set(false);
          }
        }), addMeltEventListener(node, "focusin", (e) => {
          onItemFocusIn(e);
        }));
        return {
          destroy() {
            unsubTimer();
            unsubEvents();
          }
        };
      }
    });
    const subArrow = makeElement(name("subarrow"), {
      stores: arrowSize2,
      returned: ($arrowSize) => ({
        "data-arrow": true,
        style: styleToString({
          position: "absolute",
          width: `var(--arrow-size, ${$arrowSize}px)`,
          height: `var(--arrow-size, ${$arrowSize}px)`
        })
      })
    });
    effect([rootOpen], ([$rootOpen]) => {
      if (!$rootOpen) {
        subActiveTrigger.set(null);
        subOpen.set(false);
      }
    });
    effect([pointerGraceIntent], ([$pointerGraceIntent]) => {
      if (!isBrowser || $pointerGraceIntent)
        return;
      window.clearTimeout(pointerGraceTimer.get());
    });
    effect([subOpen], ([$subOpen]) => {
      if (!isBrowser)
        return;
      if ($subOpen && isUsingKeyboard.get()) {
        sleep(1).then(() => {
          const menuEl = document.getElementById(subIds.menu.get());
          if (!menuEl)
            return;
          const menuItems = getMenuItems(menuEl);
          if (!menuItems.length)
            return;
          handleRovingFocus(menuItems[0]);
        });
      }
      if (!$subOpen) {
        const focusedItem = currentFocusedItem.get();
        const subTriggerEl = document.getElementById(subIds.trigger.get());
        if (focusedItem) {
          sleep(1).then(() => {
            const menuEl = document.getElementById(subIds.menu.get());
            if (!menuEl)
              return;
            if (menuEl.contains(focusedItem)) {
              removeHighlight(focusedItem);
            }
          });
        }
        if (!subTriggerEl || document.activeElement === subTriggerEl)
          return;
        removeHighlight(subTriggerEl);
      }
    });
    return {
      ids: subIds,
      elements: {
        subTrigger,
        subMenu,
        subArrow
      },
      states: {
        subOpen
      },
      options
    };
  };
  safeOnMount(() => {
    const triggerEl = document.getElementById(rootIds.trigger.get());
    if (isHTMLElement(triggerEl) && rootOpen.get()) {
      rootActiveTrigger.set(triggerEl);
    }
    const unsubs = [];
    const handlePointer = () => isUsingKeyboard.set(false);
    const handleKeyDown = () => {
      isUsingKeyboard.set(true);
      unsubs.push(executeCallbacks(addEventListener(document, "pointerdown", handlePointer, { capture: true, once: true }), addEventListener(document, "pointermove", handlePointer, { capture: true, once: true })));
    };
    const keydownListener = (e) => {
      if (e.key === kbd.ESCAPE && closeOnEscape.get()) {
        rootOpen.set(false);
        return;
      }
    };
    unsubs.push(addEventListener(document, "keydown", handleKeyDown, { capture: true }));
    unsubs.push(addEventListener(document, "keydown", keydownListener));
    return () => {
      unsubs.forEach((unsub) => unsub());
    };
  });
  effect([rootOpen, currentFocusedItem], ([$rootOpen, $currentFocusedItem]) => {
    if (!$rootOpen && $currentFocusedItem) {
      removeHighlight($currentFocusedItem);
    }
  });
  effect([rootOpen], ([$rootOpen]) => {
    if (!isBrowser)
      return;
    if (!$rootOpen) {
      const $rootActiveTrigger = rootActiveTrigger.get();
      if (!$rootActiveTrigger)
        return;
      const $closeFocus = closeFocus.get();
      if (!$rootOpen && $rootActiveTrigger) {
        handleFocus({ prop: $closeFocus, defaultEl: $rootActiveTrigger });
      }
    }
  });
  effect([rootOpen, preventScroll], ([$rootOpen, $preventScroll]) => {
    if (!isBrowser)
      return;
    const unsubs = [];
    if ($rootOpen && $preventScroll) {
      unsubs.push(removeScroll());
    }
    sleep(1).then(() => {
      const menuEl = document.getElementById(rootIds.menu.get());
      if (menuEl && $rootOpen && isUsingKeyboard.get()) {
        if (disableFocusFirstItem.get()) {
          handleRovingFocus(menuEl);
          return;
        }
        const menuItems = getMenuItems(menuEl);
        if (!menuItems.length)
          return;
        handleRovingFocus(menuItems[0]);
      }
    });
    return () => {
      unsubs.forEach((unsub) => unsub());
    };
  });
  effect(rootOpen, ($rootOpen) => {
    if (!isBrowser)
      return;
    const handlePointer = () => isUsingKeyboard.set(false);
    const handleKeyDown = (e) => {
      isUsingKeyboard.set(true);
      if (e.key === kbd.ESCAPE && $rootOpen && closeOnEscape.get()) {
        rootOpen.set(false);
        return;
      }
    };
    return executeCallbacks(addEventListener(document, "pointerdown", handlePointer, { capture: true, once: true }), addEventListener(document, "pointermove", handlePointer, { capture: true, once: true }), addEventListener(document, "keydown", handleKeyDown, { capture: true }));
  });
  function handleOpen(triggerEl) {
    rootOpen.update((prev) => {
      const isOpen = !prev;
      if (isOpen) {
        nextFocusable.set(getNextFocusable(triggerEl));
        prevFocusable.set(getPreviousFocusable(triggerEl));
        rootActiveTrigger.set(triggerEl);
      }
      return isOpen;
    });
  }
  function onItemFocusIn(e) {
    const itemEl = e.currentTarget;
    if (!isHTMLElement(itemEl))
      return;
    const $currentFocusedItem = currentFocusedItem.get();
    if ($currentFocusedItem) {
      removeHighlight($currentFocusedItem);
    }
    addHighlight(itemEl);
    currentFocusedItem.set(itemEl);
  }
  function onItemFocusOut(e) {
    const itemEl = e.currentTarget;
    if (!isHTMLElement(itemEl))
      return;
    removeHighlight(itemEl);
  }
  function onItemEnter(e) {
    if (isPointerMovingToSubmenu(e)) {
      e.preventDefault();
    }
  }
  function onItemLeave(e) {
    if (isPointerMovingToSubmenu(e)) {
      return;
    }
    const target = e.target;
    if (!isHTMLElement(target))
      return;
    const parentMenuEl = getParentMenu(target);
    if (!parentMenuEl)
      return;
    handleRovingFocus(parentMenuEl);
  }
  function onTriggerLeave(e) {
    if (isPointerMovingToSubmenu(e)) {
      e.preventDefault();
    }
  }
  function onMenuPointerMove(e) {
    if (!isMouse(e))
      return;
    const target = e.target;
    const currentTarget = e.currentTarget;
    if (!isHTMLElement(currentTarget) || !isHTMLElement(target))
      return;
    const $lastPointerX = lastPointerX.get();
    const pointerXHasChanged = $lastPointerX !== e.clientX;
    if (currentTarget.contains(target) && pointerXHasChanged) {
      const newDir = e.clientX > $lastPointerX ? "right" : "left";
      pointerDir.set(newDir);
      lastPointerX.set(e.clientX);
    }
  }
  function onMenuItemPointerMove(e, currTarget = null) {
    if (!isMouse(e))
      return;
    onItemEnter(e);
    if (e.defaultPrevented)
      return;
    if (currTarget) {
      handleRovingFocus(currTarget);
      return;
    }
    const currentTarget = e.currentTarget;
    if (!isHTMLElement(currentTarget))
      return;
    handleRovingFocus(currentTarget);
  }
  function onMenuItemPointerLeave(e) {
    if (!isMouse(e))
      return;
    onItemLeave(e);
  }
  function onItemKeyDown(e) {
    const $typed = typed.get();
    const isTypingAhead = $typed.length > 0;
    if (isTypingAhead && e.key === kbd.SPACE) {
      e.preventDefault();
      return;
    }
    if (SELECTION_KEYS.includes(e.key)) {
      e.preventDefault();
      const itemEl = e.currentTarget;
      if (!isHTMLElement(itemEl))
        return;
      itemEl.click();
    }
  }
  function isIndeterminate(checked) {
    return checked === "indeterminate";
  }
  function getCheckedState(checked) {
    return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
  }
  function isPointerMovingToSubmenu(e) {
    return pointerMovingToSubmenu.get()(e);
  }
  function getParentMenu(element2) {
    const parentMenuEl = element2.closest('[role="menu"]');
    if (!isHTMLElement(parentMenuEl))
      return null;
    return parentMenuEl;
  }
  return {
    elements: {
      trigger: rootTrigger,
      menu: rootMenu,
      overlay,
      item,
      group,
      groupLabel,
      arrow: rootArrow,
      separator
    },
    builders: {
      createCheckboxItem,
      createSubmenu,
      createMenuRadioGroup
    },
    states: {
      open: rootOpen
    },
    helpers: {
      handleTypeaheadSearch
    },
    ids: rootIds,
    options: opts.rootOptions
  };
}
function handleTabNavigation(e, nextFocusable, prevFocusable) {
  if (e.shiftKey) {
    const $prevFocusable = prevFocusable.get();
    if ($prevFocusable) {
      e.preventDefault();
      sleep(1).then(() => $prevFocusable.focus());
      prevFocusable.set(null);
    }
  } else {
    const $nextFocusable = nextFocusable.get();
    if ($nextFocusable) {
      e.preventDefault();
      sleep(1).then(() => $nextFocusable.focus());
      nextFocusable.set(null);
    }
  }
}
function getMenuItems(menuElement) {
  return Array.from(menuElement.querySelectorAll(`[data-melt-menu-id="${menuElement.id}"]`)).filter((item) => isHTMLElement(item));
}
function applyAttrsIfDisabled(element2) {
  if (!element2 || !isElementDisabled(element2))
    return;
  element2.setAttribute("data-disabled", "");
  element2.setAttribute("aria-disabled", "true");
}
function clearTimerStore(timerStore) {
  if (!isBrowser)
    return;
  const timer = timerStore.get();
  if (timer) {
    window.clearTimeout(timer);
    timerStore.set(null);
  }
}
function isMouse(e) {
  return e.pointerType === "mouse";
}
function setMeltMenuAttribute(element2, selector) {
  if (!element2)
    return;
  const menuEl = element2.closest(`${selector()}, ${selector("submenu")}`);
  if (!isHTMLElement(menuEl))
    return;
  element2.setAttribute("data-melt-menu-id", menuEl.id);
}
function handleMenuNavigation(e, loop) {
  e.preventDefault();
  const currentFocusedItem = document.activeElement;
  const currentTarget = e.currentTarget;
  if (!isHTMLElement(currentFocusedItem) || !isHTMLElement(currentTarget))
    return;
  const menuItems = getMenuItems(currentTarget);
  if (!menuItems.length)
    return;
  const candidateNodes = menuItems.filter((item) => {
    if (item.hasAttribute("data-disabled") || item.getAttribute("disabled") === "true") {
      return false;
    }
    return true;
  });
  const currentIndex = candidateNodes.indexOf(currentFocusedItem);
  let nextIndex;
  switch (e.key) {
    case kbd.ARROW_DOWN:
      if (loop) {
        nextIndex = currentIndex < candidateNodes.length - 1 ? currentIndex + 1 : 0;
      } else {
        nextIndex = currentIndex < candidateNodes.length - 1 ? currentIndex + 1 : currentIndex;
      }
      break;
    case kbd.ARROW_UP:
      if (loop) {
        nextIndex = currentIndex > 0 ? currentIndex - 1 : candidateNodes.length - 1;
      } else {
        nextIndex = currentIndex < 0 ? candidateNodes.length - 1 : currentIndex > 0 ? currentIndex - 1 : 0;
      }
      break;
    case kbd.HOME:
      nextIndex = 0;
      break;
    case kbd.END:
      nextIndex = candidateNodes.length - 1;
      break;
    default:
      return;
  }
  handleRovingFocus(candidateNodes[nextIndex]);
}
function isPointerInGraceArea(e, area) {
  if (!area)
    return false;
  const cursorPos = { x: e.clientX, y: e.clientY };
  return isPointInPolygon(cursorPos, area);
}
function isPointInPolygon(point, polygon) {
  const { x, y } = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].x;
    const yi = polygon[i].y;
    const xj = polygon[j].x;
    const yj = polygon[j].y;
    const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect)
      inside = !inside;
  }
  return inside;
}
function isFocusWithinSubmenu(submenuId) {
  const activeEl = document.activeElement;
  if (!isHTMLElement(activeEl))
    return false;
  const submenuEl = activeEl.closest(`[data-id="${submenuId}"]`);
  return isHTMLElement(submenuEl);
}
function stateAttr(open) {
  return open ? "open" : "closed";
}
const defaults$1 = {
  arrowSize: 8,
  positioning: {
    placement: "bottom"
  },
  preventScroll: true,
  closeOnEscape: true,
  closeOnOutsideClick: true,
  portal: void 0,
  loop: false,
  dir: "ltr",
  defaultOpen: false,
  forceVisible: false,
  typeahead: true,
  closeFocus: void 0,
  disableFocusFirstItem: false,
  closeOnItemClick: true,
  onOutsideClick: void 0
};
function createDropdownMenu(props) {
  const withDefaults = { ...defaults$1, ...props };
  const rootOptions = toWritableStores(omit(withDefaults, "ids"));
  const openWritable = withDefaults.open ?? writable(withDefaults.defaultOpen);
  const rootOpen = overridable(openWritable, withDefaults == null ? void 0 : withDefaults.onOpenChange);
  const rootActiveTrigger = withGet(writable(null));
  const nextFocusable = withGet(writable(null));
  const prevFocusable = withGet(writable(null));
  const { elements, builders, ids, states, options } = createMenuBuilder({
    rootOptions,
    rootOpen,
    rootActiveTrigger: withGet(rootActiveTrigger),
    nextFocusable: withGet(nextFocusable),
    prevFocusable: withGet(prevFocusable),
    selector: "dropdown-menu",
    ids: withDefaults.ids
  });
  return {
    ids,
    elements,
    states,
    builders,
    options
  };
}
const defaults = {
  orientation: "horizontal",
  decorative: false
};
const createSeparator = (props) => {
  const withDefaults = { ...defaults, ...props };
  const options = toWritableStores(withDefaults);
  const { orientation, decorative } = options;
  const root = makeElement("separator", {
    stores: [orientation, decorative],
    returned: ([$orientation, $decorative]) => {
      const ariaOrientation = $orientation === "vertical" ? $orientation : void 0;
      return {
        role: $decorative ? "none" : "separator",
        "aria-orientation": ariaOrientation,
        "aria-hidden": $decorative,
        "data-orientation": $orientation
      };
    }
  });
  return {
    elements: {
      root
    },
    options
  };
};
function getMenuData() {
  const NAME = "menu";
  const SUB_NAME = "menu-submenu";
  const RADIO_GROUP_NAME = "menu-radiogroup";
  const CHECKBOX_ITEM_NAME = "menu-checkboxitem";
  const RADIO_ITEM_NAME = "menu-radioitem";
  const GROUP_NAME = "menu-group";
  const PARTS = [
    "arrow",
    "checkbox-indicator",
    "checkbox-item",
    "content",
    "group",
    "item",
    "label",
    "radio-group",
    "radio-item",
    "radio-indicator",
    "separator",
    "sub-content",
    "sub-trigger",
    "trigger"
  ];
  return {
    NAME,
    SUB_NAME,
    RADIO_GROUP_NAME,
    CHECKBOX_ITEM_NAME,
    RADIO_ITEM_NAME,
    GROUP_NAME,
    PARTS
  };
}
function getCtx() {
  const { NAME } = getMenuData();
  return getContext(NAME);
}
function setCtx(props) {
  const { NAME, PARTS } = getMenuData();
  const getAttrs = createBitAttrs("menu", PARTS);
  const dropdownMenu = {
    ...createDropdownMenu({ ...removeUndefined(props), forceVisible: true }),
    getAttrs
  };
  setContext(NAME, dropdownMenu);
  return {
    ...dropdownMenu,
    updateOption: getOptionUpdater(dropdownMenu.options)
  };
}
function setSubMenuCtx(props) {
  const { SUB_NAME } = getMenuData();
  const { builders: { createSubmenu }, getAttrs } = getCtx();
  const sub = { ...createSubmenu(removeUndefined(props)), getAttrs };
  setContext(SUB_NAME, sub);
  return {
    ...sub,
    updateOption: getOptionUpdater(sub.options)
  };
}
function getSubTrigger() {
  const { SUB_NAME } = getMenuData();
  const submenu = getContext(SUB_NAME);
  return submenu;
}
function getSubmenuCtx() {
  const { SUB_NAME } = getMenuData();
  return getContext(SUB_NAME);
}
function updatePositioning(props) {
  const defaultPlacement = {
    side: "bottom",
    align: "center"
  };
  const withDefaults = { ...defaultPlacement, ...props };
  const { options: { positioning } } = getCtx();
  const updater = getPositioningUpdater(positioning);
  updater(withDefaults);
}
function updateSubPositioning(props) {
  const defaultSubPlacement = {
    side: "right",
    align: "start"
  };
  const withDefaults = { ...defaultSubPlacement, ...props };
  const { options: { positioning } } = getSubmenuCtx();
  const updater = getPositioningUpdater(positioning);
  updater(withDefaults);
}
function Menu_item($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const $$restProps = legacy_rest_props($$sanitized_props, ["href", "asChild", "disabled", "el"]);
  push($$props, false);
  const $item = () => store_get(item, "$item", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const builder = mutable_source();
  const attrs = mutable_source();
  let href = prop($$props, "href", 24, () => void 0);
  let asChild = prop($$props, "asChild", 8, false);
  let disabled = prop($$props, "disabled", 8, false);
  let el = prop($$props, "el", 28, () => void 0);
  const { elements: { item }, getAttrs } = getCtx();
  const dispatch = createDispatcher();
  legacy_pre_effect(() => $item(), () => {
    set(builder, $item());
  });
  legacy_pre_effect(() => deep_read_state(disabled()), () => {
    set(attrs, { ...getAttrs("item"), ...disabledAttrs(disabled()) });
  });
  legacy_pre_effect(() => (get$1(builder), get$1(attrs)), () => {
    Object.assign(get$1(builder), get$1(attrs));
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
      var fragment_2 = comment();
      var node_2 = first_child(fragment_2);
      element(node_2, () => href() ? "a" : "div", false, ($$element, $$anchor3) => {
        bind_this($$element, ($$value) => el($$value), () => el());
        action($$element, ($$node) => {
          var _a, _b;
          return (_b = (_a = get$1(builder)).action) == null ? void 0 : _b.call(_a, $$node);
        });
        attribute_effect($$element, () => ({ href: href(), ...get$1(builder), ...$$restProps }));
        event("m-click", $$element, dispatch);
        event("m-focusin", $$element, dispatch);
        event("m-focusout", $$element, dispatch);
        event("m-keydown", $$element, dispatch);
        event("m-pointerdown", $$element, dispatch);
        event("m-pointerleave", $$element, dispatch);
        event("m-pointermove", $$element, dispatch);
        event("pointerenter", $$element, function($$arg) {
          bubble_event.call(this, $$props, $$arg);
        });
        var fragment_3 = comment();
        var node_3 = first_child(fragment_3);
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
        append($$anchor3, fragment_3);
      });
      append($$anchor2, fragment_2);
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
function Menu($$anchor, $$props) {
  push($$props, false);
  const $idValues = () => store_get(idValues, "$idValues", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let closeOnOutsideClick = prop($$props, "closeOnOutsideClick", 24, () => void 0);
  let closeOnEscape = prop($$props, "closeOnEscape", 24, () => void 0);
  let portal = prop($$props, "portal", 24, () => void 0);
  let open = prop($$props, "open", 28, () => void 0);
  let onOpenChange = prop($$props, "onOpenChange", 24, () => void 0);
  let preventScroll = prop($$props, "preventScroll", 24, () => void 0);
  let loop = prop($$props, "loop", 24, () => void 0);
  let dir = prop($$props, "dir", 24, () => void 0);
  let typeahead = prop($$props, "typeahead", 24, () => void 0);
  let closeFocus = prop($$props, "closeFocus", 24, () => void 0);
  let disableFocusFirstItem = prop($$props, "disableFocusFirstItem", 24, () => void 0);
  let closeOnItemClick = prop($$props, "closeOnItemClick", 24, () => void 0);
  let onOutsideClick = prop($$props, "onOutsideClick", 24, () => void 0);
  const { states: { open: localOpen }, updateOption, ids } = setCtx({
    closeOnOutsideClick: closeOnOutsideClick(),
    closeOnEscape: closeOnEscape(),
    portal: portal(),
    forceVisible: true,
    defaultOpen: open(),
    preventScroll: preventScroll(),
    loop: loop(),
    dir: dir(),
    typeahead: typeahead(),
    closeFocus: closeFocus(),
    disableFocusFirstItem: disableFocusFirstItem(),
    closeOnItemClick: closeOnItemClick(),
    onOutsideClick: onOutsideClick(),
    onOpenChange: ({ next }) => {
      var _a;
      if (open() !== next) {
        (_a = onOpenChange()) == null ? void 0 : _a(next);
        open(next);
      }
      return next;
    }
  });
  const idValues = derived([ids.menu, ids.trigger], ([$menuId, $triggerId]) => ({ menu: $menuId, trigger: $triggerId }));
  legacy_pre_effect(() => deep_read_state(open()), () => {
    open() !== void 0 && localOpen.set(open());
  });
  legacy_pre_effect(() => deep_read_state(closeOnOutsideClick()), () => {
    updateOption("closeOnOutsideClick", closeOnOutsideClick());
  });
  legacy_pre_effect(() => deep_read_state(closeOnEscape()), () => {
    updateOption("closeOnEscape", closeOnEscape());
  });
  legacy_pre_effect(() => deep_read_state(portal()), () => {
    updateOption("portal", portal());
  });
  legacy_pre_effect(() => deep_read_state(preventScroll()), () => {
    updateOption("preventScroll", preventScroll());
  });
  legacy_pre_effect(() => deep_read_state(loop()), () => {
    updateOption("loop", loop());
  });
  legacy_pre_effect(() => deep_read_state(dir()), () => {
    updateOption("dir", dir());
  });
  legacy_pre_effect(() => deep_read_state(closeFocus()), () => {
    updateOption("closeFocus", closeFocus());
  });
  legacy_pre_effect(() => deep_read_state(disableFocusFirstItem()), () => {
    updateOption("disableFocusFirstItem", disableFocusFirstItem());
  });
  legacy_pre_effect(() => deep_read_state(typeahead()), () => {
    updateOption("typeahead", typeahead());
  });
  legacy_pre_effect(() => deep_read_state(closeOnItemClick()), () => {
    updateOption("closeOnItemClick", closeOnItemClick());
  });
  legacy_pre_effect(() => deep_read_state(onOutsideClick()), () => {
    updateOption("onOutsideClick", onOutsideClick());
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
var root_7 = from_html(`<div><!></div>`);
var root_9 = from_html(`<div><!></div>`);
var root_11 = from_html(`<div><!></div>`);
function Menu_content($$anchor, $$props) {
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
  let sameWidth = prop($$props, "sameWidth", 8, false);
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
          effect$1(() => event("m-keydown", div, dispatch));
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
              effect$1(() => event("m-keydown", div_1, dispatch));
              transition(1, div_1, inTransition, inTransitionConfig);
              transition(2, div_1, outTransition, outTransitionConfig);
              append($$anchor4, div_1);
            };
            var alternate_2 = ($$anchor4) => {
              var fragment_4 = comment();
              var node_6 = first_child(fragment_4);
              {
                var consequent_3 = ($$anchor5) => {
                  var div_2 = root_7();
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
                  effect$1(() => event("m-keydown", div_2, dispatch));
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
                      effect$1(() => event("m-keydown", div_3, dispatch));
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
                          effect$1(() => event("m-keydown", div_4, dispatch));
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
var root_2 = from_html(`<button><!></button>`);
function Menu_trigger($$anchor, $$props) {
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
      var button = root_2();
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
      effect$1(() => event("m-keydown", button, dispatch));
      effect$1(() => event("m-pointerdown", button, dispatch));
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
export {
  Menu as M,
  Menu_trigger as a,
  Menu_content as b,
  Menu_item as c,
  getSubTrigger as d,
  bubble_event as e,
  createTypeaheadSearch as f,
  getSubmenuCtx as g,
  addHighlight as h,
  removeScroll as i,
  removeHighlight as r,
  setSubMenuCtx as s,
  updateSubPositioning as u
};
