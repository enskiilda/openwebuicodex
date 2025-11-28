import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { f as first_child, p as push, c as child, r as reset, t as template_effect, a as pop, m as mutable_source, o as onMount, s as set, b as get, l as legacy_pre_effect, i as deep_read_state, j as legacy_pre_effect_reset, u as untrack, e as sibling, k as tick, ay as onDestroy, h as derived_safe_equal, bc as setContext, d as deferred_template_effect, $ as $document } from "../chunks/BxIY6ir7.js";
import { c as comment, a as append, b as from_svg, f as from_html, t as text } from "../chunks/CAbo1QWi.js";
import { s as slot } from "../chunks/CZEGIGsR.js";
import { h as head } from "../chunks/Cb8chUSZ.js";
import { a as set_attribute, c as clsx, s as set_class, h as set_style, f as attribute_effect, S as STYLE } from "../chunks/kXiCYuyj.js";
import { i as init } from "../chunks/ByqEASoO.js";
import { a as store_get, b as store_unsub, s as setup_stores } from "../chunks/BvQ5O7-v.js";
import { e as event, s as set_text } from "../chunks/cBADewWV.js";
import { e as each, i as index } from "../chunks/7_HZMPNF.js";
import { i as if_block } from "../chunks/BoSuMvtf.js";
import { b as bind_this } from "../chunks/D16JuV5t.js";
import { p as prop, l as legacy_rest_props, s as spread_props } from "../chunks/BRmGPDvq.js";
import { a as toastState, u as useEffect, c as cn } from "../chunks/BccDN__m.js";
import { c as component } from "../chunks/-ZmPojHm.js";
import { c as config, W as WEBUI_NAME, u as user, a as models, l as theme, m as mobile, b as settings } from "../chunks/2Yg1sHDo.js";
import { i as i18n, a as initI18n } from "../chunks/BEveHQTb.js";
import { b as WEBUI_BASE_URL } from "../chunks/DQ9UxF7k.js";
const ssr = false;
const trailingSlash = "ignore";
const _layout$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ssr,
  trailingSlash
}, Symbol.toStringTag, { value: "Module" }));
var root_1$4 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>`);
var root_3$1 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>`);
var root_5 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>`);
var root_7 = from_svg(`<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>`);
function Icon($$anchor, $$props) {
  let type = prop($$props, "type", 8, "success");
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var svg = root_1$4();
      append($$anchor2, svg);
    };
    var alternate_3 = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      {
        var consequent_1 = ($$anchor3) => {
          var svg_1 = root_3$1();
          append($$anchor3, svg_1);
        };
        var alternate_2 = ($$anchor3) => {
          var fragment_2 = comment();
          var node_2 = first_child(fragment_2);
          {
            var consequent_2 = ($$anchor4) => {
              var svg_2 = root_5();
              append($$anchor4, svg_2);
            };
            var alternate_1 = ($$anchor4) => {
              var fragment_3 = comment();
              var node_3 = first_child(fragment_3);
              {
                var consequent_3 = ($$anchor5) => {
                  var svg_3 = root_7();
                  append($$anchor5, svg_3);
                };
                var alternate = ($$anchor5) => {
                };
                if_block(
                  node_3,
                  ($$render) => {
                    if (type() === "warning") $$render(consequent_3);
                    else $$render(alternate, false);
                  },
                  true
                );
              }
              append($$anchor4, fragment_3);
            };
            if_block(
              node_2,
              ($$render) => {
                if (type() === "info") $$render(consequent_2);
                else $$render(alternate_1, false);
              },
              true
            );
          }
          append($$anchor3, fragment_2);
        };
        if_block(
          node_1,
          ($$render) => {
            if (type() === "error") $$render(consequent_1);
            else $$render(alternate_2, false);
          },
          true
        );
      }
      append($$anchor2, fragment_1);
    };
    if_block(node, ($$render) => {
      if (type() === "success") $$render(consequent);
      else $$render(alternate_3, false);
    });
  }
  append($$anchor, fragment);
}
var root_1$3 = from_html(`<div class="sonner-loading-bar"></div>`);
var root$2 = from_html(`<div class="sonner-loading-wrapper"><div class="sonner-spinner"></div></div>`);
function Loader($$anchor, $$props) {
  push($$props, false);
  let visible = prop($$props, "visible", 8);
  const bars = Array(12).fill(0);
  init();
  var div = root$2();
  var div_1 = child(div);
  each(div_1, 5, () => bars, index, ($$anchor2, _) => {
    var div_2 = root_1$3();
    append($$anchor2, div_2);
  });
  reset(div_1);
  reset(div);
  template_effect(() => set_attribute(div, "data-visible", visible()));
  append($$anchor, div);
  pop();
}
var root_1$2 = from_html(`<button aria-label="Close toast" data-close-button=""><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>`);
var root_4 = from_html(`<div data-icon=""><!> <!></div>`);
var root_15 = from_html(`<div data-title=""><!></div>`);
var root_18 = from_html(`<div data-description=""><!></div>`);
var root_21 = from_html(`<button data-button="" data-cancel=""> </button>`);
var root_22 = from_html(`<button data-button=""> </button>`);
var root_3 = from_html(`<!> <div data-content=""><!> <!></div> <!> <!>`, 1);
var root$1 = from_html(`<li aria-atomic="true" role="status" data-sonner-toast=""><!> <!></li>`);
function Toast($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  push($$props, false);
  const $heights = () => store_get(heights, "$heights", $$stores);
  const $effect = () => store_get(get(effect), "$effect", $$stores);
  const $toasts = () => store_get(toasts, "$toasts", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const isFront = mutable_source(void 0, true);
  const isVisible = mutable_source(void 0, true);
  const toastTitle = mutable_source(void 0, true);
  const toastDescription = mutable_source(void 0, true);
  const toastType = mutable_source(void 0, true);
  const toastClass = mutable_source(void 0, true);
  const toastDescriptionClass = mutable_source(void 0, true);
  const heightIndex = mutable_source(void 0, true);
  const coords = mutable_source(void 0, true);
  const toastsHeightBefore = mutable_source(void 0, true);
  const disabled = mutable_source(void 0, true);
  const isPromiseLoadingOrInfiniteDuration = mutable_source(void 0, true);
  const TOAST_LIFETIME = 4e3;
  const GAP = 14;
  const SWIPE_TRESHOLD = 20;
  const TIME_BEFORE_UNMOUNT = 200;
  const SCALE_MULTIPLIER = 0.05;
  const defaultClasses = {
    toast: "",
    title: "",
    description: "",
    loader: "",
    closeButton: "",
    cancelButton: "",
    actionButton: "",
    action: "",
    warning: "",
    error: "",
    success: "",
    default: "",
    info: "",
    loading: ""
  };
  const { toasts, heights, removeHeight, setHeight, remove } = toastState;
  let toast = prop($$props, "toast", 9);
  let index2 = prop($$props, "index", 9);
  let expanded = prop($$props, "expanded", 9);
  let invert = prop($$props, "invert", 13);
  let position = prop($$props, "position", 9);
  let visibleToasts = prop($$props, "visibleToasts", 9);
  let expandByDefault = prop($$props, "expandByDefault", 9);
  let closeButton = prop($$props, "closeButton", 9);
  let interacting = prop($$props, "interacting", 9);
  let cancelButtonStyle = prop($$props, "cancelButtonStyle", 9, "");
  let actionButtonStyle = prop($$props, "actionButtonStyle", 9, "");
  let duration = prop($$props, "duration", 9, 4e3);
  let descriptionClass = prop($$props, "descriptionClass", 9, "");
  let classes = prop($$props, "classes", 29, () => ({}));
  let unstyled = prop($$props, "unstyled", 9, false);
  let mounted = mutable_source(false, true);
  let removed = mutable_source(false, true);
  let swiping = mutable_source(false, true);
  let swipeOut = mutable_source(false, true);
  let offsetBeforeRemove = mutable_source(0, true);
  let initialHeight = mutable_source(0, true);
  let toastRef = mutable_source(void 0, true);
  let offset = mutable_source(0, true);
  let closeTimerStartTimeRef = 0;
  let lastCloseTimerStartTimeRef = 0;
  let pointerStartRef = null;
  async function updateHeights() {
    if (!get(mounted)) {
      return;
    }
    await tick();
    let scale;
    if (expanded() || expandByDefault()) {
      scale = 1;
    } else {
      scale = 1 - index2() * SCALE_MULTIPLIER;
    }
    get(toastRef).style.setProperty("height", "auto");
    const offsetHeight = get(toastRef).offsetHeight;
    const rectHeight = get(toastRef).getBoundingClientRect().height;
    const scaledRectHeight = Math.round((rectHeight / scale + Number.EPSILON) * 100) / 100;
    get(toastRef).style.removeProperty("height");
    let finalHeight;
    if (Math.abs(scaledRectHeight - offsetHeight) < 1) {
      finalHeight = scaledRectHeight;
    } else {
      finalHeight = offsetHeight;
    }
    set(initialHeight, finalHeight);
    setHeight({ toastId: toast().id, height: finalHeight });
  }
  function deleteToast() {
    set(removed, true);
    set(offsetBeforeRemove, get(offset));
    removeHeight(toast().id);
    setTimeout(
      () => {
        remove(toast().id);
      },
      TIME_BEFORE_UNMOUNT
    );
  }
  let timeoutId = mutable_source(void 0, true);
  let remainingTime = mutable_source(toast().duration || duration() || TOAST_LIFETIME, true);
  function pauseTimer() {
    if (lastCloseTimerStartTimeRef < closeTimerStartTimeRef) {
      const elapsedTime = (/* @__PURE__ */ new Date()).getTime() - closeTimerStartTimeRef;
      set(remainingTime, get(remainingTime) - elapsedTime);
    }
    lastCloseTimerStartTimeRef = (/* @__PURE__ */ new Date()).getTime();
  }
  function startTimer() {
    closeTimerStartTimeRef = (/* @__PURE__ */ new Date()).getTime();
    set(timeoutId, setTimeout(
      () => {
        var _a, _b;
        (_b = (_a = toast()).onAutoClose) == null ? void 0 : _b.call(_a, toast());
        deleteToast();
      },
      get(remainingTime)
    ));
  }
  let effect = mutable_source(void 0, true);
  onMount(() => {
    set(mounted, true);
    const height = get(toastRef).getBoundingClientRect().height;
    set(initialHeight, height);
    setHeight({ toastId: toast().id, height });
    return () => removeHeight(toast().id);
  });
  function onPointerDown(event2) {
    if (get(disabled)) {
      return;
    }
    set(offsetBeforeRemove, get(offset));
    const target = event2.target;
    target.setPointerCapture(event2.pointerId);
    if (target.tagName === "BUTTON") {
      return;
    }
    set(swiping, true);
    pointerStartRef = { x: event2.clientX, y: event2.clientY };
  }
  function onPointerUp() {
    var _a, _b, _c;
    if (get(swipeOut)) {
      return;
    }
    pointerStartRef = null;
    const swipeAmount = Number(((_a = get(toastRef)) == null ? void 0 : _a.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0);
    if (Math.abs(swipeAmount) >= SWIPE_TRESHOLD) {
      set(offsetBeforeRemove, get(offset));
      (_c = (_b = toast()).onDismiss) == null ? void 0 : _c.call(_b, toast());
      deleteToast();
      set(swipeOut, true);
      return;
    }
    get(toastRef).style.setProperty("--swipe-amount", "0px");
    set(swiping, false);
  }
  function onPointerMove(event2) {
    if (!pointerStartRef) {
      return;
    }
    const yPosition = event2.clientY - pointerStartRef.y;
    const xPosition = event2.clientX - pointerStartRef.x;
    const clamp = get(coords)[0] === "top" ? Math.min : Math.max;
    const clampedY = clamp(0, yPosition);
    const swipeStartThreshold = event2.pointerType === "touch" ? 10 : 2;
    const isAllowedToSwipe = Math.abs(clampedY) > swipeStartThreshold;
    if (isAllowedToSwipe) {
      get(toastRef).style.setProperty("--swipe-amount", `${yPosition}px`);
    } else if (Math.abs(xPosition) > swipeStartThreshold) {
      pointerStartRef = null;
    }
  }
  legacy_pre_effect(() => deep_read_state(classes()), () => {
    classes({ ...defaultClasses, ...classes() });
  });
  legacy_pre_effect(() => deep_read_state(index2()), () => {
    set(isFront, index2() === 0);
  });
  legacy_pre_effect(
    () => (deep_read_state(index2()), deep_read_state(visibleToasts())),
    () => {
      set(isVisible, index2() + 1 <= visibleToasts());
    }
  );
  legacy_pre_effect(() => deep_read_state(toast()), () => {
    set(toastTitle, toast().title);
  });
  legacy_pre_effect(() => deep_read_state(toast()), () => {
    set(toastDescription, toast().description);
  });
  legacy_pre_effect(() => deep_read_state(toast()), () => {
    set(toastType, toast().type);
  });
  legacy_pre_effect(() => deep_read_state(toast()), () => {
    set(toastClass, toast().class || "");
  });
  legacy_pre_effect(() => deep_read_state(toast()), () => {
    set(toastDescriptionClass, toast().descriptionClass || "");
  });
  legacy_pre_effect(() => ($heights(), deep_read_state(toast())), () => {
    set(heightIndex, $heights().findIndex((height) => height.toastId === toast().id) || 0);
  });
  legacy_pre_effect(() => deep_read_state(position()), () => {
    set(coords, position().split("-"));
  });
  legacy_pre_effect(() => ($heights(), get(heightIndex)), () => {
    set(toastsHeightBefore, $heights().reduce(
      (prev, curr, reducerIndex) => {
        if (reducerIndex >= get(heightIndex)) return prev;
        return prev + curr.height;
      },
      0
    ));
  });
  legacy_pre_effect(() => (deep_read_state(invert()), deep_read_state(toast())), () => {
    invert(toast().invert || invert());
  });
  legacy_pre_effect(() => get(toastType), () => {
    set(disabled, get(toastType) === "loading");
  });
  legacy_pre_effect(() => (get(heightIndex), get(toastsHeightBefore)), () => {
    set(offset, Math.round(get(heightIndex) * GAP + get(toastsHeightBefore)));
  });
  legacy_pre_effect(() => (get(toastTitle), get(toastDescription)), () => {
    get(toastTitle), get(toastDescription), updateHeights();
  });
  legacy_pre_effect(
    () => (deep_read_state(toast()), get(timeoutId), deep_read_state(duration())),
    () => {
      if (toast().updated) {
        clearTimeout(get(timeoutId));
        set(remainingTime, toast().duration || duration() || TOAST_LIFETIME);
        startTimer();
      }
    }
  );
  legacy_pre_effect(() => (deep_read_state(toast()), get(toastType)), () => {
    set(isPromiseLoadingOrInfiniteDuration, toast().promise && get(toastType) === "loading" || toast().duration === Number.POSITIVE_INFINITY);
  });
  legacy_pre_effect(
    () => (get(isPromiseLoadingOrInfiniteDuration), deep_read_state(expanded()), deep_read_state(interacting()), get(timeoutId)),
    () => {
      store_unsub(
        set(effect, useEffect(() => {
          if (!get(isPromiseLoadingOrInfiniteDuration)) {
            if (expanded() || interacting()) {
              pauseTimer();
            } else {
              startTimer();
            }
          }
          return () => clearTimeout(get(timeoutId));
        })),
        "$effect",
        $$stores
      );
    }
  );
  legacy_pre_effect(() => $effect(), () => {
    $effect();
  });
  legacy_pre_effect(() => deep_read_state(toast()), () => {
    if (toast().delete) {
      deleteToast();
    }
  });
  legacy_pre_effect_reset();
  init(true);
  var li = root$1();
  set_attribute(
    li,
    "tabindex",
    // Ensure we maintain correct pointer capture even when going outside of the toast (e.g. when swiping)
    // Remove only if treshold is met
    // User is swiping in wrong direction so we disable swipe gesture
    // for the current pointer down interaction
    0
  );
  let styles;
  var node = child(li);
  {
    var consequent = ($$anchor2) => {
      var button = root_1$2();
      template_effect(
        ($0) => {
          set_attribute(button, "data-disabled", get(disabled));
          set_class(button, 1, $0);
        },
        [
          () => clsx((deep_read_state(cn), deep_read_state(classes()), deep_read_state(toast()), untrack(() => {
            var _a, _b, _c;
            return cn((_a = classes()) == null ? void 0 : _a.closeButton, (_c = (_b = toast()) == null ? void 0 : _b.classes) == null ? void 0 : _c.closeButton);
          })))
        ]
      );
      event("click", button, function(...$$args) {
        var _a;
        (_a = get(disabled) ? void 0 : () => {
          var _a2, _b;
          deleteToast();
          (_b = (_a2 = toast()).onDismiss) == null ? void 0 : _b.call(_a2, toast());
        }) == null ? void 0 : _a.apply(this, $$args);
      });
      append($$anchor2, button);
    };
    if_block(node, ($$render) => {
      if (deep_read_state(closeButton()), deep_read_state(toast()), untrack(() => closeButton() && !toast().component)) $$render(consequent);
    });
  }
  var node_1 = sibling(node, 2);
  {
    var consequent_1 = ($$anchor2) => {
      var fragment = comment();
      var node_2 = first_child(fragment);
      component(node_2, () => toast().component, ($$anchor3, $$component) => {
        $$component($$anchor3, spread_props(() => toast().componentProps, { $$events: { closeToast: deleteToast } }));
      });
      append($$anchor2, fragment);
    };
    var alternate_6 = ($$anchor2) => {
      var fragment_1 = root_3();
      var node_3 = first_child(fragment_1);
      {
        var consequent_8 = ($$anchor3) => {
          var div = root_4();
          var node_4 = child(div);
          {
            var consequent_2 = ($$anchor4) => {
              var fragment_2 = comment();
              var node_5 = first_child(fragment_2);
              slot(node_5, $$props, "loading-icon", {}, null);
              append($$anchor4, fragment_2);
            };
            if_block(node_4, ($$render) => {
              if (deep_read_state(toast()), get(toastType), untrack(() => (toast().promise || get(toastType) === "loading") && !toast().icon)) $$render(consequent_2);
            });
          }
          var node_6 = sibling(node_4, 2);
          {
            var consequent_3 = ($$anchor4) => {
              var fragment_3 = comment();
              var node_7 = first_child(fragment_3);
              component(node_7, () => toast().icon, ($$anchor5, $$component) => {
                $$component($$anchor5, {});
              });
              append($$anchor4, fragment_3);
            };
            var alternate_3 = ($$anchor4) => {
              var fragment_4 = comment();
              var node_8 = first_child(fragment_4);
              {
                var consequent_4 = ($$anchor5) => {
                  var fragment_5 = comment();
                  var node_9 = first_child(fragment_5);
                  slot(node_9, $$props, "success-icon", {}, null);
                  append($$anchor5, fragment_5);
                };
                var alternate_2 = ($$anchor5) => {
                  var fragment_6 = comment();
                  var node_10 = first_child(fragment_6);
                  {
                    var consequent_5 = ($$anchor6) => {
                      var fragment_7 = comment();
                      var node_11 = first_child(fragment_7);
                      slot(node_11, $$props, "error-icon", {}, null);
                      append($$anchor6, fragment_7);
                    };
                    var alternate_1 = ($$anchor6) => {
                      var fragment_8 = comment();
                      var node_12 = first_child(fragment_8);
                      {
                        var consequent_6 = ($$anchor7) => {
                          var fragment_9 = comment();
                          var node_13 = first_child(fragment_9);
                          slot(node_13, $$props, "warning-icon", {}, null);
                          append($$anchor7, fragment_9);
                        };
                        var alternate = ($$anchor7) => {
                          var fragment_10 = comment();
                          var node_14 = first_child(fragment_10);
                          {
                            var consequent_7 = ($$anchor8) => {
                              var fragment_11 = comment();
                              var node_15 = first_child(fragment_11);
                              slot(node_15, $$props, "info-icon", {}, null);
                              append($$anchor8, fragment_11);
                            };
                            if_block(
                              node_14,
                              ($$render) => {
                                if (get(toastType) === "info") $$render(consequent_7);
                              },
                              true
                            );
                          }
                          append($$anchor7, fragment_10);
                        };
                        if_block(
                          node_12,
                          ($$render) => {
                            if (get(toastType) === "warning") $$render(consequent_6);
                            else $$render(alternate, false);
                          },
                          true
                        );
                      }
                      append($$anchor6, fragment_8);
                    };
                    if_block(
                      node_10,
                      ($$render) => {
                        if (get(toastType) === "error") $$render(consequent_5);
                        else $$render(alternate_1, false);
                      },
                      true
                    );
                  }
                  append($$anchor5, fragment_6);
                };
                if_block(
                  node_8,
                  ($$render) => {
                    if (get(toastType) === "success") $$render(consequent_4);
                    else $$render(alternate_2, false);
                  },
                  true
                );
              }
              append($$anchor4, fragment_4);
            };
            if_block(node_6, ($$render) => {
              if (deep_read_state(toast()), untrack(() => toast().icon)) $$render(consequent_3);
              else $$render(alternate_3, false);
            });
          }
          reset(div);
          append($$anchor3, div);
        };
        if_block(node_3, ($$render) => {
          if (get(toastType), deep_read_state(toast()), untrack(() => get(toastType) !== "default" || toast().icon || toast().promise)) $$render(consequent_8);
        });
      }
      var div_1 = sibling(node_3, 2);
      var node_16 = child(div_1);
      {
        var consequent_10 = ($$anchor3) => {
          var div_2 = root_15();
          var node_17 = child(div_2);
          {
            var consequent_9 = ($$anchor4) => {
              var fragment_12 = comment();
              var node_18 = first_child(fragment_12);
              component(node_18, () => toast().title, ($$anchor5, $$component) => {
                $$component($$anchor5, spread_props(() => toast().componentProps));
              });
              append($$anchor4, fragment_12);
            };
            var alternate_4 = ($$anchor4) => {
              var text$1 = text();
              template_effect(() => set_text(text$1, (deep_read_state(toast()), untrack(() => toast().title))));
              append($$anchor4, text$1);
            };
            if_block(node_17, ($$render) => {
              if (deep_read_state(toast()), untrack(() => typeof toast().title !== "string")) $$render(consequent_9);
              else $$render(alternate_4, false);
            });
          }
          reset(div_2);
          template_effect(($0) => set_class(div_2, 1, $0), [
            () => clsx((deep_read_state(cn), deep_read_state(classes()), deep_read_state(toast()), untrack(() => {
              var _a, _b, _c;
              return cn((_a = classes()) == null ? void 0 : _a.title, (_c = (_b = toast()) == null ? void 0 : _b.classes) == null ? void 0 : _c.title);
            })))
          ]);
          append($$anchor3, div_2);
        };
        if_block(node_16, ($$render) => {
          if (deep_read_state(toast()), untrack(() => toast().title)) $$render(consequent_10);
        });
      }
      var node_19 = sibling(node_16, 2);
      {
        var consequent_12 = ($$anchor3) => {
          var div_3 = root_18();
          var node_20 = child(div_3);
          {
            var consequent_11 = ($$anchor4) => {
              var fragment_14 = comment();
              var node_21 = first_child(fragment_14);
              component(node_21, () => toast().description, ($$anchor5, $$component) => {
                $$component($$anchor5, spread_props(() => toast().componentProps));
              });
              append($$anchor4, fragment_14);
            };
            var alternate_5 = ($$anchor4) => {
              var text_1 = text();
              template_effect(() => set_text(text_1, (deep_read_state(toast()), untrack(() => toast().description))));
              append($$anchor4, text_1);
            };
            if_block(node_20, ($$render) => {
              if (deep_read_state(toast()), untrack(() => typeof toast().description !== "string")) $$render(consequent_11);
              else $$render(alternate_5, false);
            });
          }
          reset(div_3);
          template_effect(($0) => set_class(div_3, 1, $0), [
            () => clsx((deep_read_state(cn), deep_read_state(descriptionClass()), get(toastDescriptionClass), deep_read_state(classes()), deep_read_state(toast()), untrack(() => {
              var _a, _b;
              return cn(descriptionClass(), get(toastDescriptionClass), (_a = classes()) == null ? void 0 : _a.description, (_b = toast().classes) == null ? void 0 : _b.description);
            })))
          ]);
          append($$anchor3, div_3);
        };
        if_block(node_19, ($$render) => {
          if (deep_read_state(toast()), untrack(() => toast().description)) $$render(consequent_12);
        });
      }
      reset(div_1);
      var node_22 = sibling(div_1, 2);
      {
        var consequent_13 = ($$anchor3) => {
          var button_1 = root_21();
          var text_2 = child(button_1, true);
          reset(button_1);
          template_effect(
            ($0) => {
              set_style(button_1, cancelButtonStyle());
              set_class(button_1, 1, $0);
              set_text(text_2, (deep_read_state(toast()), untrack(() => toast().cancel.label)));
            },
            [
              () => clsx((deep_read_state(cn), deep_read_state(classes()), deep_read_state(toast()), untrack(() => {
                var _a, _b, _c;
                return cn((_a = classes()) == null ? void 0 : _a.cancelButton, (_c = (_b = toast()) == null ? void 0 : _b.classes) == null ? void 0 : _c.cancelButton);
              })))
            ]
          );
          event("click", button_1, () => {
            var _a;
            deleteToast();
            if ((_a = toast().cancel) == null ? void 0 : _a.onClick) {
              toast().cancel.onClick();
            }
          });
          append($$anchor3, button_1);
        };
        if_block(node_22, ($$render) => {
          if (deep_read_state(toast()), untrack(() => toast().cancel)) $$render(consequent_13);
        });
      }
      var node_23 = sibling(node_22, 2);
      {
        var consequent_14 = ($$anchor3) => {
          var button_2 = root_22();
          var text_3 = child(button_2, true);
          reset(button_2);
          template_effect(
            ($0) => {
              set_style(button_2, actionButtonStyle());
              set_class(button_2, 1, $0);
              set_text(text_3, (deep_read_state(toast()), untrack(() => toast().action.label)));
            },
            [
              () => clsx((deep_read_state(cn), deep_read_state(classes()), deep_read_state(toast()), untrack(() => {
                var _a, _b, _c;
                return cn((_a = classes()) == null ? void 0 : _a.actionButton, (_c = (_b = toast()) == null ? void 0 : _b.classes) == null ? void 0 : _c.actionButton);
              })))
            ]
          );
          event("click", button_2, (event2) => {
            var _a;
            (_a = toast().action) == null ? void 0 : _a.onClick(event2);
            if (event2.defaultPrevented) return;
            deleteToast();
          });
          append($$anchor3, button_2);
        };
        if_block(node_23, ($$render) => {
          if (deep_read_state(toast()), untrack(() => toast().action)) $$render(consequent_14);
        });
      }
      append($$anchor2, fragment_1);
    };
    if_block(node_1, ($$render) => {
      if (deep_read_state(toast()), untrack(() => toast().component)) $$render(consequent_1);
      else $$render(alternate_6, false);
    });
  }
  reset(li);
  bind_this(li, ($$value) => set(toastRef, $$value), () => get(toastRef));
  template_effect(
    ($0, $1, $2) => {
      set_attribute(li, "aria-live", (deep_read_state(toast()), untrack(() => toast().important ? "assertive" : "polite")));
      set_class(li, 1, $0);
      set_attribute(li, "data-styled", (deep_read_state(toast()), deep_read_state(unstyled()), untrack(() => {
        var _a;
        return !(toast().component || ((_a = toast()) == null ? void 0 : _a.unstyled) || unstyled());
      })));
      set_attribute(li, "data-mounted", get(mounted));
      set_attribute(li, "data-promise", $1);
      set_attribute(li, "data-removed", get(removed));
      set_attribute(li, "data-visible", get(isVisible));
      set_attribute(li, "data-y-position", (get(coords), untrack(() => get(coords)[0])));
      set_attribute(li, "data-x-position", (get(coords), untrack(() => get(coords)[1])));
      set_attribute(li, "data-index", index2());
      set_attribute(li, "data-front", get(isFront));
      set_attribute(li, "data-swiping", get(swiping));
      set_attribute(li, "data-type", get(toastType));
      set_attribute(li, "data-invert", invert());
      set_attribute(li, "data-swipe-out", get(swipeOut));
      set_attribute(li, "data-expanded", $2);
      styles = set_style(
        li,
        (deep_read_state($$sanitized_props), deep_read_state(toast()), untrack(() => `${$$sanitized_props.style} ${toast().style}`)),
        styles,
        {
          "--index": index2(),
          "--toasts-before": index2(),
          "--z-index": ($toasts(), deep_read_state(index2()), untrack(() => $toasts().length - index2())),
          "--offset": `${get(removed) ? get(offsetBeforeRemove) : get(offset)}px`,
          "--initial-height": `${get(initialHeight)}px`
        }
      );
    },
    [
      () => clsx((deep_read_state(cn), deep_read_state($$sanitized_props), get(toastClass), deep_read_state(classes()), deep_read_state(toast()), get(toastType), untrack(() => {
        var _a, _b, _c, _d, _e, _f;
        return cn($$sanitized_props.class, get(toastClass), (_a = classes()) == null ? void 0 : _a.toast, (_c = (_b = toast()) == null ? void 0 : _b.classes) == null ? void 0 : _c.toast, (_d = classes()) == null ? void 0 : _d[get(toastType)], (_f = (_e = toast()) == null ? void 0 : _e.classes) == null ? void 0 : _f[get(toastType)]);
      }))),
      () => (deep_read_state(toast()), untrack(() => Boolean(toast().promise))),
      () => (deep_read_state(expanded()), deep_read_state(expandByDefault()), get(mounted), untrack(() => Boolean(expanded() || expandByDefault() && get(mounted))))
    ]
  );
  event("pointerdown", li, onPointerDown);
  event("pointerup", li, onPointerUp);
  event("pointermove", li, onPointerMove);
  append($$anchor, li);
  pop();
  $$cleanup();
}
var root_2 = from_html(`<ol></ol>`);
var root_1$1 = from_html(`<section class="svelte-nbs0zk"></section>`);
function Toaster($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const $$restProps = legacy_rest_props($$sanitized_props, [
    "invert",
    "theme",
    "position",
    "hotkey",
    "containerAriaLabel",
    "richColors",
    "expand",
    "duration",
    "visibleToasts",
    "closeButton",
    "toastOptions",
    "offset",
    "dir"
  ]);
  push($$props, false);
  const $toasts = () => store_get(toasts, "$toasts", $$stores);
  const $heights = () => store_get(heights, "$heights", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const possiblePositions = mutable_source();
  const hotkeyLabel = mutable_source();
  const VISIBLE_TOASTS_AMOUNT = 3;
  const VIEWPORT_OFFSET = "32px";
  const TOAST_WIDTH = 356;
  const GAP = 14;
  const DARK = "dark";
  const LIGHT = "light";
  function getInitialTheme(t) {
    if (t !== "system") {
      return t;
    }
    if (typeof window !== "undefined") {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return DARK;
      }
      return LIGHT;
    }
    return LIGHT;
  }
  function getDocumentDirection() {
    if (typeof window === "undefined") return "ltr";
    if (typeof document === "undefined") return "ltr";
    const dirAttribute = document.documentElement.getAttribute("dir");
    if (dirAttribute === "auto" || !dirAttribute) {
      return window.getComputedStyle(document.documentElement).direction;
    }
    return dirAttribute;
  }
  let invert = prop($$props, "invert", 8, false);
  let theme2 = prop($$props, "theme", 8, "light");
  let position = prop($$props, "position", 8, "bottom-right");
  let hotkey = prop($$props, "hotkey", 24, () => ["altKey", "KeyT"]);
  let containerAriaLabel = prop($$props, "containerAriaLabel", 8, "Notifications");
  let richColors = prop($$props, "richColors", 8, false);
  let expand = prop($$props, "expand", 8, false);
  let duration = prop($$props, "duration", 8, 4e3);
  let visibleToasts = prop($$props, "visibleToasts", 8, VISIBLE_TOASTS_AMOUNT);
  let closeButton = prop($$props, "closeButton", 8, false);
  let toastOptions = prop($$props, "toastOptions", 24, () => ({}));
  let offset = prop($$props, "offset", 8, null);
  let dir = prop($$props, "dir", 24, getDocumentDirection);
  const { toasts, heights, reset: reset$1 } = toastState;
  let expanded = mutable_source(false);
  let interacting = mutable_source(false);
  let actualTheme = mutable_source(getInitialTheme(theme2()));
  let listRef = mutable_source();
  let lastFocusedElementRef = null;
  let isFocusWithinRef = false;
  onDestroy(() => {
    if (get(listRef) && lastFocusedElementRef) {
      lastFocusedElementRef.focus({ preventScroll: true });
      lastFocusedElementRef = null;
      isFocusWithinRef = false;
    }
  });
  onMount(() => {
    reset$1();
    const handleKeydown = (event2) => {
      var _a, _b;
      const isHotkeyPressed = hotkey().every((key) => event2[key] || event2.code === key);
      if (isHotkeyPressed) {
        set(expanded, true);
        (_a = get(listRef)) == null ? void 0 : _a.focus();
      }
      if (event2.code === "Escape" && (document.activeElement === get(listRef) || ((_b = get(listRef)) == null ? void 0 : _b.contains(document.activeElement)))) {
        set(expanded, false);
      }
    };
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  });
  function handleBlur(event2) {
    if (isFocusWithinRef && !event2.currentTarget.contains(event2.relatedTarget)) {
      isFocusWithinRef = false;
      if (lastFocusedElementRef) {
        lastFocusedElementRef.focus({ preventScroll: true });
        lastFocusedElementRef = null;
      }
    }
  }
  function handleFocus(event2) {
    if (!isFocusWithinRef) {
      isFocusWithinRef = true;
      lastFocusedElementRef = event2.relatedTarget;
    }
  }
  legacy_pre_effect(() => (deep_read_state(position()), $toasts()), () => {
    set(possiblePositions, Array.from(new Set([
      position(),
      ...$toasts().filter((toast) => toast.position).map((toast) => toast.position)
    ].filter(Boolean))));
  });
  legacy_pre_effect(() => deep_read_state(hotkey()), () => {
    set(hotkeyLabel, hotkey().join("+").replace(/Key/g, "").replace(/Digit/g, ""));
  });
  legacy_pre_effect(() => $toasts(), () => {
    if ($toasts().length <= 1) {
      set(expanded, false);
    }
  });
  legacy_pre_effect(() => $toasts(), () => {
    const toastsToDismiss = $toasts().filter((toast) => toast.dismiss && !toast.delete);
    if (toastsToDismiss.length > 0) {
      const updatedToasts = $toasts().map((toast) => {
        const matchingToast = toastsToDismiss.find((dismissToast) => dismissToast.id === toast.id);
        if (matchingToast) {
          return { ...toast, delete: true };
        }
        return toast;
      });
      toasts.set(updatedToasts);
    }
  });
  legacy_pre_effect(() => deep_read_state(theme2()), () => {
    if (theme2() !== "system") {
      set(actualTheme, theme2());
    }
    if (typeof window !== "undefined") {
      if (theme2() === "system") {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
          set(actualTheme, DARK);
        } else {
          set(actualTheme, LIGHT);
        }
      }
      const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
      const changeHandler = ({ matches }) => {
        set(actualTheme, matches ? DARK : LIGHT);
      };
      if ("addEventListener" in mediaQueryList) {
        mediaQueryList.addEventListener("change", changeHandler);
      } else {
        mediaQueryList.addListener(changeHandler);
      }
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var section = root_1$1();
      set_attribute(section, "tabindex", -1);
      each(section, 5, () => get(possiblePositions), index, ($$anchor3, position2, index2, $$array) => {
        var ol = root_2();
        attribute_effect(
          ol,
          ($0, $1, $2) => ({
            tabIndex: -1,
            class: (deep_read_state($$sanitized_props), untrack(() => $$sanitized_props.class)),
            "data-sonner-toaster": true,
            "data-theme": get(actualTheme),
            "data-rich-colors": richColors(),
            dir: $0,
            "data-y-position": $1,
            "data-x-position": $2,
            style: (deep_read_state($$sanitized_props), untrack(() => $$sanitized_props.style)),
            ...$$restProps,
            [STYLE]: {
              "--front-toast-height": ($heights(), untrack(() => {
                var _a;
                return `${(_a = $heights()[0]) == null ? void 0 : _a.height}px`;
              })),
              "--offset": typeof offset() === "number" ? `${offset()}px` : offset() || VIEWPORT_OFFSET,
              "--width": `${TOAST_WIDTH}px`,
              "--gap": `${GAP}px`
            }
          }),
          [
            () => (deep_read_state(dir()), untrack(() => dir() === "auto" ? getDocumentDirection() : dir())),
            () => (get(position2), untrack(() => get(position2).split("-")[0])),
            () => (get(position2), untrack(() => get(position2).split("-")[1]))
          ],
          void 0,
          void 0,
          "svelte-nbs0zk"
        );
        each(
          ol,
          7,
          () => ($toasts(), get(position2), untrack(() => $toasts().filter((toast) => !toast.position && index2 === 0 || toast.position === get(position2)))),
          (toast) => toast.id,
          ($$anchor4, toast, index3, $$array_1) => {
            {
              let $0 = derived_safe_equal(() => (deep_read_state(toastOptions()), untrack(() => {
                var _a;
                return ((_a = toastOptions()) == null ? void 0 : _a.actionButtonStyle) || "";
              })));
              let $1 = derived_safe_equal(() => (deep_read_state(toastOptions()), untrack(() => {
                var _a;
                return ((_a = toastOptions()) == null ? void 0 : _a.cancelButtonStyle) || "";
              })));
              let $2 = derived_safe_equal(() => (deep_read_state(toastOptions()), untrack(() => {
                var _a;
                return ((_a = toastOptions()) == null ? void 0 : _a.class) || "";
              })));
              let $3 = derived_safe_equal(() => (deep_read_state(toastOptions()), untrack(() => {
                var _a;
                return ((_a = toastOptions()) == null ? void 0 : _a.descriptionClass) || "";
              })));
              let $4 = derived_safe_equal(() => (deep_read_state(toastOptions()), untrack(() => toastOptions().classes || {})));
              let $5 = derived_safe_equal(() => (deep_read_state(toastOptions()), deep_read_state(duration()), untrack(() => {
                var _a;
                return ((_a = toastOptions()) == null ? void 0 : _a.duration) ?? duration();
              })));
              let $6 = derived_safe_equal(() => (deep_read_state(toastOptions()), untrack(() => toastOptions().unstyled || false)));
              Toast($$anchor4, {
                get index() {
                  return get(index3);
                },
                get toast() {
                  return get(toast);
                },
                get invert() {
                  return invert();
                },
                get visibleToasts() {
                  return visibleToasts();
                },
                get closeButton() {
                  return closeButton();
                },
                get interacting() {
                  return get(interacting);
                },
                get position() {
                  return get(position2);
                },
                get expandByDefault() {
                  return expand();
                },
                get expanded() {
                  return get(expanded);
                },
                get actionButtonStyle() {
                  return get($0);
                },
                get cancelButtonStyle() {
                  return get($1);
                },
                get class() {
                  return get($2);
                },
                get descriptionClass() {
                  return get($3);
                },
                get classes() {
                  return get($4);
                },
                get duration() {
                  return get($5);
                },
                get unstyled() {
                  return get($6);
                },
                $$slots: {
                  "loading-icon": ($$anchor5, $$slotProps) => {
                    var fragment_2 = comment();
                    var node_1 = first_child(fragment_2);
                    slot(node_1, $$props, "loading-icon", {}, ($$anchor6) => {
                      {
                        let $02 = derived_safe_equal(() => (get(toast), untrack(() => get(toast).type === "loading")));
                        Loader($$anchor6, {
                          get visible() {
                            return get($02);
                          }
                        });
                      }
                    });
                    append($$anchor5, fragment_2);
                  },
                  "success-icon": ($$anchor5, $$slotProps) => {
                    var fragment_4 = comment();
                    var node_2 = first_child(fragment_4);
                    slot(node_2, $$props, "success-icon", {}, ($$anchor6) => {
                      Icon($$anchor6, { type: "success" });
                    });
                    append($$anchor5, fragment_4);
                  },
                  "error-icon": ($$anchor5, $$slotProps) => {
                    var fragment_6 = comment();
                    var node_3 = first_child(fragment_6);
                    slot(node_3, $$props, "error-icon", {}, ($$anchor6) => {
                      Icon($$anchor6, { type: "error" });
                    });
                    append($$anchor5, fragment_6);
                  },
                  "warning-icon": ($$anchor5, $$slotProps) => {
                    var fragment_8 = comment();
                    var node_4 = first_child(fragment_8);
                    slot(node_4, $$props, "warning-icon", {}, ($$anchor6) => {
                      Icon($$anchor6, { type: "warning" });
                    });
                    append($$anchor5, fragment_8);
                  },
                  "info-icon": ($$anchor5, $$slotProps) => {
                    var fragment_10 = comment();
                    var node_5 = first_child(fragment_10);
                    slot(node_5, $$props, "info-icon", {}, ($$anchor6) => {
                      Icon($$anchor6, { type: "info" });
                    });
                    append($$anchor5, fragment_10);
                  }
                }
              });
            }
          }
        );
        reset(ol);
        bind_this(ol, ($$value) => set(listRef, $$value), () => get(listRef));
        template_effect(() => ol.dir = ol.dir);
        event("blur", ol, handleBlur);
        event("focus", ol, handleFocus);
        event("mouseenter", ol, () => set(expanded, true));
        event("mousemove", ol, () => set(expanded, true));
        event("mouseleave", ol, () => {
          if (!get(interacting)) {
            set(expanded, false);
          }
        });
        event("pointerdown", ol, () => set(interacting, true));
        event("pointerup", ol, () => set(interacting, false));
        append($$anchor3, ol);
      });
      reset(section);
      template_effect(() => set_attribute(section, "aria-label", `${containerAriaLabel()} ${get(hotkeyLabel)}`));
      append($$anchor2, section);
    };
    if_block(node, ($$render) => {
      if ($toasts(), untrack(() => $toasts().length > 0)) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_1 = from_html(`<link crossorigin="anonymous" rel="icon"/>`);
var root = from_html(`<!> <!>`, 1);
function _layout($$anchor, $$props) {
  push($$props, false);
  const $WEBUI_NAME = () => store_get(WEBUI_NAME, "$WEBUI_NAME", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  setContext("i18n", i18n);
  const BREAKPOINT = 768;
  const mockConfig = {
    status: true,
    name: "Open WebUI",
    version: "0.6.40",
    default_locale: "pl-PL",
    default_models: "",
    default_prompt_suggestions: [
      {
        content: "Help me study",
        title: ["Help me study", "vocabulary for a college entrance exam"]
      },
      {
        content: "Give me ideas",
        title: ["Give me ideas", "for what to do with my kids art"]
      },
      {
        content: "Tell me a fun fact",
        title: ["Tell me a fun fact", "about the Roman Empire"]
      },
      {
        content: "Show me a code snippet",
        title: ["Show me a code snippet", "of a website sticky header"]
      }
    ],
    features: {
      auth: false,
      auth_trusted_header: false,
      enable_api_keys: true,
      enable_signup: true,
      enable_login_form: true,
      enable_web_search: true,
      enable_google_drive_integration: false,
      enable_onedrive_integration: false,
      enable_image_generation: true,
      enable_admin_export: true,
      enable_admin_chat_access: true,
      enable_community_sharing: true,
      enable_autocomplete_generation: true,
      enable_direct_connections: true,
      enable_version_update_check: false
    },
    oauth: { providers: {} }
  };
  const mockUser = {
    id: "local-user",
    email: "user@localhost",
    name: "Local User",
    role: "admin",
    profile_image_url: "/static/favicon.png",
    permissions: {
      chat: { temporary_enforced: false, multiple_models: true },
      features: {
        image_generation: true,
        code_interpreter: true,
        web_search: true
      }
    }
  };
  const mockModels = [
    {
      id: "gpt-4",
      name: "GPT-4",
      owned_by: "openai",
      external: true
    },
    {
      id: "gpt-3.5-turbo",
      name: "GPT-3.5 Turbo",
      owned_by: "openai",
      external: true
    },
    {
      id: "llama2",
      name: "Llama 2",
      owned_by: "ollama",
      details: {
        parent_model: "",
        format: "gguf",
        family: "llama",
        families: ["llama"],
        parameter_size: "7B",
        quantization_level: "Q4_0"
      },
      size: 38e8,
      description: "Llama 2 is a collection of pretrained and fine-tuned generative text models.",
      model: "llama2:latest",
      modified_at: "2024-01-01T00:00:00Z",
      digest: "abc123"
    }
  ];
  config.set(mockConfig);
  WEBUI_NAME.set(mockConfig.name);
  user.set(mockUser);
  models.set(mockModels);
  theme.set(localStorage.theme || "dark");
  mobile.set(typeof window !== "undefined" ? window.innerWidth < BREAKPOINT : false);
  onMount(() => {
    settings.set(JSON.parse(localStorage.getItem("settings") ?? "{}"));
    initI18n(localStorage == null ? void 0 : localStorage.locale);
    const onResize = () => mobile.set(window.innerWidth < BREAKPOINT);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  });
  init();
  var fragment = root();
  head("12qhfyh", ($$anchor2) => {
    var link = root_1();
    template_effect(() => set_attribute(link, "href", `${WEBUI_BASE_URL}/static/favicon.png`));
    deferred_template_effect(() => {
      $document.title = $WEBUI_NAME() ?? "";
    });
    append($$anchor2, link);
  });
  var node = first_child(fragment);
  slot(node, $$props, "default", {}, null);
  var node_1 = sibling(node, 2);
  Toaster(node_1, { theme: "dark", richColors: true, position: "top-right" });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _layout as component,
  _layout$1 as universal
};
