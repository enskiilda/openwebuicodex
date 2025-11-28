const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CUH9EGA7.js","./CyKMQRKW.js","../assets/katex.BuxSlbtc.css"])))=>i.map(i=>d[i]);
import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { aO as writable, k as tick, bc as setContext, g as getContext, p as push, aP as derived, l as legacy_pre_effect, i as deep_read_state, j as legacy_pre_effect_reset, f as first_child, a as pop, s as set, m as mutable_source, b as get, c as child, r as reset, A as effect$1, o as onMount, ay as onDestroy, e as sibling, t as template_effect, u as untrack, h as derived_safe_equal, aF as mutate } from "./BxIY6ir7.js";
import { e as event, s as set_text } from "./cBADewWV.js";
import { c as comment, a as append, f as from_html, b as from_svg, t as text } from "./CAbo1QWi.js";
import { e as each, i as index } from "./7_HZMPNF.js";
import { i as if_block } from "./BoSuMvtf.js";
import { s as slot } from "./CZEGIGsR.js";
import { f as attribute_effect, a as set_attribute, s as set_class, c as clsx, h as set_style, r as remove_input_defaults, j as set_checked } from "./kXiCYuyj.js";
import { t as transition } from "./B3nUhwYU.js";
import { i as init } from "./ByqEASoO.js";
import { p as prop, l as legacy_rest_props } from "./BRmGPDvq.js";
import { a as store_get, s as setup_stores } from "./BvQ5O7-v.js";
import { g as getDefaultExportFromCjs, d as dayjs2, r as relativeTime } from "./OO7lCI-F.js";
import "./CAzIiltw.js";
import { d as duration } from "./DWskpcWN.js";
import { f as fade, s as slide } from "./BNZI2i79.js";
import { q as quintOut } from "./6_T3Ulvi.js";
import { C as ChevronUp } from "./DTpd_r3Z.js";
import { C as ChevronDown } from "./CUFupyOK.js";
import { S as Spinner } from "./CtnI4RVL.js";
import { t as toast } from "./BccDN__m.js";
import { b as settings, c as config, h as channels, a as models, u as user } from "./2Yg1sHDo.js";
import { i as copyToClipboard, R as renderVegaVisualization, S as initMermaid, T as renderMermaidDiagram, U as unescapeHtml, m as marked, V as markedKatexExtension, W as markedExtension, X as replaceTokens, Y as processResponseContent, x as v4 } from "./Bh-hrM1w.js";
import { f as fileSaver } from "./DRcZXQDn.js";
import purify from "./bQFTtKkZ.js";
import { k as key } from "./CmeGWm0r.js";
import { T as Tooltip, e as element } from "./BHXWufQb.js";
import { b as WEBUI_BASE_URL, a as WEBUI_API_BASE_URL } from "./DQ9UxF7k.js";
import { h as html } from "./tLAl1VVg.js";
import { H as HighlightJS } from "./CmCtXIhy.js";
import { C as CodeEditor, S as executeCode } from "./BPxE9tzl.js";
import { b as bind_this } from "./D16JuV5t.js";
import { D as Download } from "./Dm1xcaSj.js";
import { X as XMark } from "./CUUSX84-.js";
import { _ as __vitePreload } from "./CQrtv1eE.js";
import { b as overridable, w as withGet, t as toWritableStores, o as omit, u as generateIds, m as makeElement, e as executeCallbacks, f as addMeltEventListener, p as isElement, a0 as isFocusVisible, a1 as isTouch, h as createElHelpers, v as derivedVisible, L as effect, M as usePopper, N as getPortalDestination, l as isHTMLElement, J as noop$3, X as portalAttr, s as styleToString, R as isBrowser, Q as safeOnMount, U as sleep, i as createBitAttrs, r as removeUndefined, j as getOptionUpdater, T as getPositioningUpdater, c as createDispatcher, a as action } from "./C2A39Ney.js";
import { g as goto } from "./h-B6Md2q.js";
import { a as getUserById } from "./Bi6Hlb5b.js";
import { c as component } from "./-ZmPojHm.js";
import { A as ArrowRightCircle } from "./NkZ50FRY.js";
function getTabbableNodes(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }
  return nodes;
}
const { name } = createElHelpers("hover-card");
const defaults = {
  defaultOpen: false,
  openDelay: 1e3,
  closeDelay: 100,
  positioning: {
    placement: "bottom"
  },
  arrowSize: 8,
  closeOnOutsideClick: true,
  forceVisible: false,
  portal: void 0,
  closeOnEscape: true,
  onOutsideClick: void 0
};
const linkPreviewIdParts = ["trigger", "content"];
function createLinkPreview(props = {}) {
  const withDefaults = { ...defaults, ...props };
  const openWritable = withDefaults.open ?? writable(withDefaults.defaultOpen);
  const open = overridable(openWritable, withDefaults == null ? void 0 : withDefaults.onOpenChange);
  const hasSelection = withGet.writable(false);
  const isPointerDownOnContent = withGet.writable(false);
  const containSelection = writable(false);
  const activeTrigger = writable(null);
  const options = toWritableStores(omit(withDefaults, "ids"));
  const { openDelay, closeDelay, positioning, arrowSize, closeOnOutsideClick, forceVisible, portal, closeOnEscape, onOutsideClick } = options;
  const ids = toWritableStores({ ...generateIds(linkPreviewIdParts), ...withDefaults.ids });
  let timeout = null;
  let originalBodyUserSelect;
  const handleOpen = withGet.derived(openDelay, ($openDelay) => {
    return () => {
      if (timeout) {
        window.clearTimeout(timeout);
        timeout = null;
      }
      timeout = window.setTimeout(() => {
        open.set(true);
      }, $openDelay);
    };
  });
  const handleClose = withGet.derived([closeDelay, isPointerDownOnContent, hasSelection], ([$closeDelay, $isPointerDownOnContent, $hasSelection]) => {
    return () => {
      if (timeout) {
        window.clearTimeout(timeout);
        timeout = null;
      }
      if (!$isPointerDownOnContent && !$hasSelection) {
        timeout = window.setTimeout(() => {
          open.set(false);
        }, $closeDelay);
      }
    };
  });
  const trigger = makeElement(name("trigger"), {
    stores: [open, ids.trigger, ids.content],
    returned: ([$open, $triggerId, $contentId]) => {
      return {
        role: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": $open,
        "data-state": $open ? "open" : "closed",
        "aria-controls": $contentId,
        id: $triggerId
      };
    },
    action: (node) => {
      const unsub = executeCallbacks(addMeltEventListener(node, "pointerenter", (e) => {
        if (isTouch(e))
          return;
        handleOpen.get()();
      }), addMeltEventListener(node, "pointerleave", (e) => {
        if (isTouch(e))
          return;
        handleClose.get()();
      }), addMeltEventListener(node, "focus", (e) => {
        if (!isElement(e.currentTarget) || !isFocusVisible(e.currentTarget))
          return;
        handleOpen.get()();
      }), addMeltEventListener(node, "blur", () => handleClose.get()()));
      return {
        destroy: unsub
      };
    }
  });
  const isVisible = derivedVisible({ open, forceVisible, activeTrigger });
  const content = makeElement(name("content"), {
    stores: [isVisible, portal, ids.content],
    returned: ([$isVisible, $portal, $contentId]) => {
      return {
        hidden: $isVisible ? void 0 : true,
        tabindex: -1,
        style: styleToString({
          "pointer-events": $isVisible ? void 0 : "none",
          opacity: $isVisible ? 1 : 0,
          userSelect: "text",
          WebkitUserSelect: "text"
        }),
        id: $contentId,
        "data-state": $isVisible ? "open" : "closed",
        "data-portal": portalAttr($portal)
      };
    },
    action: (node) => {
      let unsub = noop$3;
      const unsubTimers = () => {
        if (timeout) {
          window.clearTimeout(timeout);
        }
      };
      let unsubPopper = noop$3;
      const unsubDerived = effect([isVisible, activeTrigger, positioning, closeOnOutsideClick, portal, closeOnEscape], ([$isVisible, $activeTrigger, $positioning, $closeOnOutsideClick, $portal, $closeOnEscape]) => {
        unsubPopper();
        if (!$isVisible || !$activeTrigger)
          return;
        tick().then(() => {
          unsubPopper();
          unsubPopper = usePopper(node, {
            anchorElement: $activeTrigger,
            open,
            options: {
              floating: $positioning,
              modal: {
                closeOnInteractOutside: $closeOnOutsideClick,
                onClose: () => {
                  open.set(false);
                  $activeTrigger.focus();
                },
                shouldCloseOnInteractOutside: (e) => {
                  var _a;
                  (_a = onOutsideClick.get()) == null ? void 0 : _a(e);
                  if (e.defaultPrevented)
                    return false;
                  if (isHTMLElement($activeTrigger) && $activeTrigger.contains(e.target))
                    return false;
                  return true;
                },
                open: $isVisible
              },
              portal: getPortalDestination(node, $portal),
              focusTrap: null,
              escapeKeydown: $closeOnEscape ? void 0 : null
            }
          }).destroy;
        });
      });
      unsub = executeCallbacks(addMeltEventListener(node, "pointerdown", (e) => {
        const currentTarget = e.currentTarget;
        const target = e.target;
        if (!isHTMLElement(currentTarget) || !isHTMLElement(target))
          return;
        if (currentTarget.contains(target)) {
          containSelection.set(true);
        }
        hasSelection.set(false);
        isPointerDownOnContent.set(true);
      }), addMeltEventListener(node, "pointerenter", (e) => {
        if (isTouch(e))
          return;
        handleOpen.get()();
      }), addMeltEventListener(node, "pointerleave", (e) => {
        if (isTouch(e))
          return;
        handleClose.get()();
      }), addMeltEventListener(node, "focusout", (e) => {
        e.preventDefault();
      }));
      return {
        destroy() {
          unsub();
          unsubPopper();
          unsubTimers();
          unsubDerived();
        }
      };
    }
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
  effect([containSelection], ([$containSelection]) => {
    if (!isBrowser || !$containSelection)
      return;
    const body = document.body;
    const contentElement = document.getElementById(ids.content.get());
    if (!contentElement)
      return;
    originalBodyUserSelect = body.style.userSelect || body.style.webkitUserSelect;
    const originalContentUserSelect = contentElement.style.userSelect || contentElement.style.webkitUserSelect;
    body.style.userSelect = "none";
    body.style.webkitUserSelect = "none";
    contentElement.style.userSelect = "text";
    contentElement.style.webkitUserSelect = "text";
    return () => {
      body.style.userSelect = originalBodyUserSelect;
      body.style.webkitUserSelect = originalBodyUserSelect;
      contentElement.style.userSelect = originalContentUserSelect;
      contentElement.style.webkitUserSelect = originalContentUserSelect;
    };
  });
  safeOnMount(() => {
    const triggerEl = document.getElementById(ids.trigger.get());
    if (!triggerEl)
      return;
    activeTrigger.set(triggerEl);
  });
  effect([open], ([$open]) => {
    if (!isBrowser || !$open) {
      hasSelection.set(false);
      return;
    }
    const handlePointerUp = () => {
      containSelection.set(false);
      isPointerDownOnContent.set(false);
      sleep(1).then(() => {
        var _a;
        const isSelection = ((_a = document.getSelection()) == null ? void 0 : _a.toString()) !== "";
        if (isSelection) {
          hasSelection.set(true);
        }
      });
    };
    document.addEventListener("pointerup", handlePointerUp);
    const contentElement = document.getElementById(ids.content.get());
    if (!contentElement)
      return;
    const tabbables = getTabbableNodes(contentElement);
    tabbables.forEach((tabbable) => tabbable.setAttribute("tabindex", "-1"));
    return () => {
      document.removeEventListener("pointerup", handlePointerUp);
      hasSelection.set(false);
      isPointerDownOnContent.set(false);
    };
  });
  return {
    ids,
    elements: {
      trigger,
      content,
      arrow
    },
    states: {
      open
    },
    options
  };
}
function getLinkPreviewData() {
  const NAME = "link-preview";
  const PARTS = ["arrow", "content", "trigger"];
  return {
    NAME,
    PARTS
  };
}
function setCtx(props) {
  const { NAME, PARTS } = getLinkPreviewData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const linkPreview = {
    ...createLinkPreview({
      ...removeUndefined(props),
      forceVisible: true
    }),
    getAttrs
  };
  setContext(NAME, linkPreview);
  return {
    ...linkPreview,
    updateOption: getOptionUpdater(linkPreview.options)
  };
}
function getCtx() {
  const { NAME } = getLinkPreviewData();
  return getContext(NAME);
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
function Link_preview($$anchor, $$props) {
  push($$props, false);
  const $idValues = () => store_get(idValues, "$idValues", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let open = prop($$props, "open", 28, () => void 0);
  let onOpenChange = prop($$props, "onOpenChange", 24, () => void 0);
  let openDelay = prop($$props, "openDelay", 8, 700);
  let closeDelay = prop($$props, "closeDelay", 8, 300);
  let closeOnOutsideClick = prop($$props, "closeOnOutsideClick", 24, () => void 0);
  let closeOnEscape = prop($$props, "closeOnEscape", 24, () => void 0);
  let portal = prop($$props, "portal", 24, () => void 0);
  let onOutsideClick = prop($$props, "onOutsideClick", 24, () => void 0);
  const { states: { open: localOpen }, updateOption, ids } = setCtx({
    defaultOpen: open(),
    openDelay: openDelay(),
    closeDelay: closeDelay(),
    closeOnOutsideClick: closeOnOutsideClick(),
    closeOnEscape: closeOnEscape(),
    portal: portal(),
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
  const idValues = derived([ids.content, ids.trigger], ([$contentId, $triggerId]) => ({ content: $contentId, trigger: $triggerId }));
  legacy_pre_effect(() => deep_read_state(open()), () => {
    open() !== void 0 && localOpen.set(open());
  });
  legacy_pre_effect(() => deep_read_state(openDelay()), () => {
    updateOption("openDelay", openDelay());
  });
  legacy_pre_effect(() => deep_read_state(closeDelay()), () => {
    updateOption("closeDelay", closeDelay());
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
var root_3$8 = from_html(`<div><!></div>`);
var root_5$3 = from_html(`<div><!></div>`);
var root_7$3 = from_html(`<div><!></div>`);
var root_9$1 = from_html(`<div><!></div>`);
var root_11$4 = from_html(`<div><!></div>`);
function Link_preview_content($$anchor, $$props) {
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
  const $content = () => store_get(content, "$content", $$stores);
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
  const { elements: { content }, states: { open }, ids, getAttrs } = getCtx();
  const attrs = getAttrs("content");
  const dispatch = createDispatcher();
  legacy_pre_effect(() => deep_read_state(id()), () => {
    if (id()) {
      ids.content.set(id());
    }
  });
  legacy_pre_effect(() => $content(), () => {
    set(builder, $content());
  });
  legacy_pre_effect(() => get(builder), () => {
    Object.assign(get(builder), attrs);
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
            return get(builder);
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
          var div = root_3$8();
          attribute_effect(div, () => ({ ...get(builder), ...$$restProps }));
          var node_3 = child(div);
          slot(
            node_3,
            $$props,
            "default",
            {
              get builder() {
                return get(builder);
              }
            },
            null
          );
          reset(div);
          bind_this(div, ($$value) => el($$value), () => el());
          action(div, ($$node) => {
            var _a, _b;
            return (_b = (_a = get(builder)).action) == null ? void 0 : _b.call(_a, $$node);
          });
          effect$1(() => event("m-focusout", div, dispatch));
          effect$1(() => event("m-pointerdown", div, dispatch));
          effect$1(() => event("m-pointerenter", div, dispatch));
          effect$1(() => event("m-pointerleave", div, dispatch));
          transition(3, div, transition$1, transitionConfig);
          append($$anchor3, div);
        };
        var alternate_3 = ($$anchor3) => {
          var fragment_3 = comment();
          var node_4 = first_child(fragment_3);
          {
            var consequent_2 = ($$anchor4) => {
              var div_1 = root_5$3();
              attribute_effect(div_1, () => ({ ...get(builder), ...$$restProps }));
              var node_5 = child(div_1);
              slot(
                node_5,
                $$props,
                "default",
                {
                  get builder() {
                    return get(builder);
                  }
                },
                null
              );
              reset(div_1);
              bind_this(div_1, ($$value) => el($$value), () => el());
              action(div_1, ($$node) => {
                var _a, _b;
                return (_b = (_a = get(builder)).action) == null ? void 0 : _b.call(_a, $$node);
              });
              effect$1(() => event("m-focusout", div_1, dispatch));
              effect$1(() => event("m-pointerdown", div_1, dispatch));
              effect$1(() => event("m-pointerenter", div_1, dispatch));
              effect$1(() => event("m-pointerleave", div_1, dispatch));
              transition(1, div_1, inTransition, inTransitionConfig);
              transition(2, div_1, outTransition, outTransitionConfig);
              append($$anchor4, div_1);
            };
            var alternate_2 = ($$anchor4) => {
              var fragment_4 = comment();
              var node_6 = first_child(fragment_4);
              {
                var consequent_3 = ($$anchor5) => {
                  var div_2 = root_7$3();
                  attribute_effect(div_2, () => ({ ...get(builder), ...$$restProps }));
                  var node_7 = child(div_2);
                  slot(
                    node_7,
                    $$props,
                    "default",
                    {
                      get builder() {
                        return get(builder);
                      }
                    },
                    null
                  );
                  reset(div_2);
                  bind_this(div_2, ($$value) => el($$value), () => el());
                  action(div_2, ($$node) => {
                    var _a, _b;
                    return (_b = (_a = get(builder)).action) == null ? void 0 : _b.call(_a, $$node);
                  });
                  effect$1(() => event("m-focusout", div_2, dispatch));
                  effect$1(() => event("m-pointerdown", div_2, dispatch));
                  effect$1(() => event("m-pointerenter", div_2, dispatch));
                  effect$1(() => event("m-pointerleave", div_2, dispatch));
                  transition(1, div_2, inTransition, inTransitionConfig);
                  append($$anchor5, div_2);
                };
                var alternate_1 = ($$anchor5) => {
                  var fragment_5 = comment();
                  var node_8 = first_child(fragment_5);
                  {
                    var consequent_4 = ($$anchor6) => {
                      var div_3 = root_9$1();
                      attribute_effect(div_3, () => ({ ...get(builder), ...$$restProps }));
                      var node_9 = child(div_3);
                      slot(
                        node_9,
                        $$props,
                        "default",
                        {
                          get builder() {
                            return get(builder);
                          }
                        },
                        null
                      );
                      reset(div_3);
                      bind_this(div_3, ($$value) => el($$value), () => el());
                      action(div_3, ($$node) => {
                        var _a, _b;
                        return (_b = (_a = get(builder)).action) == null ? void 0 : _b.call(_a, $$node);
                      });
                      effect$1(() => event("m-focusout", div_3, dispatch));
                      effect$1(() => event("m-pointerdown", div_3, dispatch));
                      effect$1(() => event("m-pointerenter", div_3, dispatch));
                      effect$1(() => event("m-pointerleave", div_3, dispatch));
                      transition(2, div_3, outTransition, outTransitionConfig);
                      append($$anchor6, div_3);
                    };
                    var alternate = ($$anchor6) => {
                      var fragment_6 = comment();
                      var node_10 = first_child(fragment_6);
                      {
                        var consequent_5 = ($$anchor7) => {
                          var div_4 = root_11$4();
                          attribute_effect(div_4, () => ({ ...get(builder), ...$$restProps }));
                          var node_11 = child(div_4);
                          slot(
                            node_11,
                            $$props,
                            "default",
                            {
                              get builder() {
                                return get(builder);
                              }
                            },
                            null
                          );
                          reset(div_4);
                          bind_this(div_4, ($$value) => el($$value), () => el());
                          action(div_4, ($$node) => {
                            var _a, _b;
                            return (_b = (_a = get(builder)).action) == null ? void 0 : _b.call(_a, $$node);
                          });
                          effect$1(() => event("m-focusout", div_4, dispatch));
                          effect$1(() => event("m-pointerdown", div_4, dispatch));
                          effect$1(() => event("m-pointerenter", div_4, dispatch));
                          effect$1(() => event("m-pointerleave", div_4, dispatch));
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
var root_2$6 = from_html(`<a><!></a>`);
function Link_preview_trigger($$anchor, $$props) {
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
  legacy_pre_effect(() => get(builder), () => {
    Object.assign(get(builder), attrs);
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
            return get(builder);
          }
        },
        null
      );
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var a2 = root_2$6();
      attribute_effect(a2, () => ({ ...get(builder), ...$$restProps, ...attrs }));
      var node_2 = child(a2);
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
      reset(a2);
      bind_this(a2, ($$value) => el($$value), () => el());
      action(a2, ($$node) => {
        var _a, _b;
        return (_b = (_a = get(builder)).action) == null ? void 0 : _b.call(_a, $$node);
      });
      effect$1(() => event("m-blur", a2, dispatch));
      effect$1(() => event("m-focus", a2, dispatch));
      effect$1(() => event("m-pointerenter", a2, dispatch));
      effect$1(() => event("m-pointerleave", a2, dispatch));
      append($$anchor2, a2);
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
var wheel$1 = { exports: {} };
wheel$1.exports = addWheelListener;
wheel$1.exports.addWheelListener = addWheelListener;
wheel$1.exports.removeWheelListener = removeWheelListener;
function addWheelListener(element2, listener, useCapture) {
  element2.addEventListener("wheel", listener, useCapture);
}
function removeWheelListener(element2, listener, useCapture) {
  element2.removeEventListener("wheel", listener, useCapture);
}
var wheelExports = wheel$1.exports;
var amator = { exports: {} };
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 1e-3;
var SUBDIVISION_PRECISION = 1e-7;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1 / (kSplineTableSize - 1);
var float32ArraySupported = typeof Float32Array === "function";
function A(aA1, aA2) {
  return 1 - 3 * aA2 + 3 * aA1;
}
function B(aA1, aA2) {
  return 3 * aA2 - 6 * aA1;
}
function C(aA1) {
  return 3 * aA1;
}
function calcBezier(aT, aA1, aA2) {
  return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
}
function getSlope(aT, aA1, aA2) {
  return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
}
function binarySubdivide(aX, aA, aB, mX1, mX2) {
  var currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
    var currentSlope = getSlope(aGuessT, mX1, mX2);
    if (currentSlope === 0) {
      return aGuessT;
    }
    var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }
  return aGuessT;
}
function LinearEasing(x) {
  return x;
}
var src = function bezier(mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error("bezier x values must be in [0, 1] range");
  }
  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  }
  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  for (var i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }
  function getTForX(aX) {
    var intervalStart = 0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;
    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;
    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }
  return function BezierEasing2(x) {
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
};
var BezierEasing = src;
var animations = {
  ease: BezierEasing(0.25, 0.1, 0.25, 1),
  easeIn: BezierEasing(0.42, 0, 1, 1),
  easeOut: BezierEasing(0, 0, 0.58, 1),
  easeInOut: BezierEasing(0.42, 0, 0.58, 1),
  linear: BezierEasing(0, 0, 1, 1)
};
amator.exports = animate$1;
amator.exports.makeAggregateRaf = makeAggregateRaf;
amator.exports.sharedScheduler = makeAggregateRaf();
function animate$1(source, target, options) {
  var start = /* @__PURE__ */ Object.create(null);
  var diff = /* @__PURE__ */ Object.create(null);
  options = options || {};
  var easing = typeof options.easing === "function" ? options.easing : animations[options.easing];
  if (!easing) {
    if (options.easing) {
      console.warn("Unknown easing function in amator: " + options.easing);
    }
    easing = animations.ease;
  }
  var step = typeof options.step === "function" ? options.step : noop$2;
  var done = typeof options.done === "function" ? options.done : noop$2;
  var scheduler = getScheduler(options.scheduler);
  var keys = Object.keys(target);
  keys.forEach(function(key2) {
    start[key2] = source[key2];
    diff[key2] = target[key2] - source[key2];
  });
  var durationInMs = typeof options.duration === "number" ? options.duration : 400;
  var durationInFrames = Math.max(1, durationInMs * 0.06);
  var previousAnimationId;
  var frame = 0;
  previousAnimationId = scheduler.next(loop);
  return {
    cancel
  };
  function cancel() {
    scheduler.cancel(previousAnimationId);
    previousAnimationId = 0;
  }
  function loop() {
    var t = easing(frame / durationInFrames);
    frame += 1;
    setValues(t);
    if (frame <= durationInFrames) {
      previousAnimationId = scheduler.next(loop);
      step(source);
    } else {
      previousAnimationId = 0;
      setTimeout(function() {
        done(source);
      }, 0);
    }
  }
  function setValues(t) {
    keys.forEach(function(key2) {
      source[key2] = diff[key2] * t + start[key2];
    });
  }
}
function noop$2() {
}
function getScheduler(scheduler) {
  if (!scheduler) {
    var canRaf = typeof window !== "undefined" && window.requestAnimationFrame;
    return canRaf ? rafScheduler() : timeoutScheduler();
  }
  if (typeof scheduler.next !== "function") throw new Error("Scheduler is supposed to have next(cb) function");
  if (typeof scheduler.cancel !== "function") throw new Error("Scheduler is supposed to have cancel(handle) function");
  return scheduler;
}
function rafScheduler() {
  return {
    next: window.requestAnimationFrame.bind(window),
    cancel: window.cancelAnimationFrame.bind(window)
  };
}
function timeoutScheduler() {
  return {
    next: function(cb) {
      return setTimeout(cb, 1e3 / 60);
    },
    cancel: function(id) {
      return clearTimeout(id);
    }
  };
}
function makeAggregateRaf() {
  var frontBuffer = /* @__PURE__ */ new Set();
  var backBuffer = /* @__PURE__ */ new Set();
  var frameToken = 0;
  return {
    next,
    cancel: next,
    clearAll
  };
  function clearAll() {
    frontBuffer.clear();
    backBuffer.clear();
    cancelAnimationFrame(frameToken);
    frameToken = 0;
  }
  function next(callback) {
    backBuffer.add(callback);
    renderNextFrame();
  }
  function renderNextFrame() {
    if (!frameToken) frameToken = requestAnimationFrame(renderFrame);
  }
  function renderFrame() {
    frameToken = 0;
    var t = backBuffer;
    backBuffer = frontBuffer;
    frontBuffer = t;
    frontBuffer.forEach(function(callback) {
      callback();
    });
    frontBuffer.clear();
  }
}
var amatorExports = amator.exports;
function c(e) {
  s(e);
  const t = a(e);
  return e.on = t.on, e.off = t.off, e.fire = t.fire, e;
}
function a(e) {
  let t = /* @__PURE__ */ Object.create(null);
  return { on: function(n, r, f) {
    if (typeof r != "function") throw new Error("callback is expected to be a function");
    let o = t[n];
    return o || (o = t[n] = []), o.push({ callback: r, ctx: f }), e;
  }, off: function(n, r) {
    if (typeof n > "u") return t = /* @__PURE__ */ Object.create(null), e;
    if (t[n]) if (typeof r != "function") delete t[n];
    else {
      const l = t[n];
      for (let i = 0; i < l.length; ++i) l[i].callback === r && l.splice(i, 1);
    }
    return e;
  }, fire: function(n) {
    const r = t[n];
    if (!r) return e;
    let f;
    arguments.length > 1 && (f = Array.prototype.slice.call(arguments, 1));
    for (let o = 0; o < r.length; ++o) {
      const l = r[o];
      l.callback.apply(l.ctx, f);
    }
    return e;
  } };
}
function s(e) {
  if (!e) throw new Error("Eventify cannot use falsy object as events subject");
  const t = ["on", "fire", "off"];
  for (let n = 0; n < t.length; ++n) if (e.hasOwnProperty(t[n])) throw new Error("Subject cannot be eventified, since it already has property '" + t[n] + "'");
}
var ngraph_events = c;
var kinetic_1 = kinetic$1;
function kinetic$1(getPoint, scroll, settings2) {
  if (typeof settings2 !== "object") {
    settings2 = {};
  }
  var minVelocity = typeof settings2.minVelocity === "number" ? settings2.minVelocity : 5;
  var amplitude = typeof settings2.amplitude === "number" ? settings2.amplitude : 0.25;
  var cancelAnimationFrame2 = typeof settings2.cancelAnimationFrame === "function" ? settings2.cancelAnimationFrame : getCancelAnimationFrame();
  var requestAnimationFrame2 = typeof settings2.requestAnimationFrame === "function" ? settings2.requestAnimationFrame : getRequestAnimationFrame();
  var lastPoint;
  var timestamp;
  var timeConstant = 342;
  var ticker;
  var vx, targetX, ax;
  var vy, targetY, ay;
  var raf;
  return {
    start,
    stop,
    cancel: dispose
  };
  function dispose() {
    cancelAnimationFrame2(ticker);
    cancelAnimationFrame2(raf);
  }
  function start() {
    lastPoint = getPoint();
    ax = ay = vx = vy = 0;
    timestamp = /* @__PURE__ */ new Date();
    cancelAnimationFrame2(ticker);
    cancelAnimationFrame2(raf);
    ticker = requestAnimationFrame2(track);
  }
  function track() {
    var now = Date.now();
    var elapsed = now - timestamp;
    timestamp = now;
    var currentPoint = getPoint();
    var dx = currentPoint.x - lastPoint.x;
    var dy = currentPoint.y - lastPoint.y;
    lastPoint = currentPoint;
    var dt = 1e3 / (1 + elapsed);
    vx = 0.8 * dx * dt + 0.2 * vx;
    vy = 0.8 * dy * dt + 0.2 * vy;
    ticker = requestAnimationFrame2(track);
  }
  function stop() {
    cancelAnimationFrame2(ticker);
    cancelAnimationFrame2(raf);
    var currentPoint = getPoint();
    targetX = currentPoint.x;
    targetY = currentPoint.y;
    timestamp = Date.now();
    if (vx < -minVelocity || vx > minVelocity) {
      ax = amplitude * vx;
      targetX += ax;
    }
    if (vy < -minVelocity || vy > minVelocity) {
      ay = amplitude * vy;
      targetY += ay;
    }
    raf = requestAnimationFrame2(autoScroll);
  }
  function autoScroll() {
    var elapsed = Date.now() - timestamp;
    var moving = false;
    var dx = 0;
    var dy = 0;
    if (ax) {
      dx = -ax * Math.exp(-elapsed / timeConstant);
      if (dx > 0.5 || dx < -0.5) moving = true;
      else dx = ax = 0;
    }
    if (ay) {
      dy = -ay * Math.exp(-elapsed / timeConstant);
      if (dy > 0.5 || dy < -0.5) moving = true;
      else dy = ay = 0;
    }
    if (moving) {
      scroll(targetX + dx, targetY + dy);
      raf = requestAnimationFrame2(autoScroll);
    }
  }
}
function getCancelAnimationFrame() {
  if (typeof cancelAnimationFrame === "function") return cancelAnimationFrame;
  return clearTimeout;
}
function getRequestAnimationFrame() {
  if (typeof requestAnimationFrame === "function") return requestAnimationFrame;
  return function(handler) {
    return setTimeout(handler, 16);
  };
}
var createTextSelectionInterceptor_1 = createTextSelectionInterceptor$1;
function createTextSelectionInterceptor$1(useFake) {
  if (useFake) {
    return {
      capture: noop$1,
      release: noop$1
    };
  }
  var dragObject;
  var prevSelectStart;
  var prevDragStart;
  var wasCaptured = false;
  return {
    capture,
    release
  };
  function capture(domObject) {
    wasCaptured = true;
    prevSelectStart = window.document.onselectstart;
    prevDragStart = window.document.ondragstart;
    window.document.onselectstart = disabled;
    dragObject = domObject;
    dragObject.ondragstart = disabled;
  }
  function release() {
    if (!wasCaptured) return;
    wasCaptured = false;
    window.document.onselectstart = prevSelectStart;
    if (dragObject) dragObject.ondragstart = prevDragStart;
  }
}
function disabled(e) {
  e.stopPropagation();
  return false;
}
function noop$1() {
}
var transform;
var hasRequiredTransform;
function requireTransform() {
  if (hasRequiredTransform) return transform;
  hasRequiredTransform = 1;
  transform = Transform2;
  function Transform2() {
    this.x = 0;
    this.y = 0;
    this.scale = 1;
  }
  return transform;
}
var svgController = { exports: {} };
var hasRequiredSvgController;
function requireSvgController() {
  if (hasRequiredSvgController) return svgController.exports;
  hasRequiredSvgController = 1;
  svgController.exports = makeSvgController2;
  svgController.exports.canAttach = isSVGElement;
  function makeSvgController2(svgElement, options) {
    if (!isSVGElement(svgElement)) {
      throw new Error("svg element is required for svg.panzoom to work");
    }
    var owner = svgElement.ownerSVGElement;
    if (!owner) {
      throw new Error(
        "Do not apply panzoom to the root <svg> element. Use its child instead (e.g. <g></g>). As of March 2016 only FireFox supported transform on the root element"
      );
    }
    if (!options.disableKeyboardInteraction) {
      owner.setAttribute("tabindex", 0);
    }
    var api = {
      getBBox,
      getScreenCTM,
      getOwner,
      applyTransform,
      initTransform
    };
    return api;
    function getOwner() {
      return owner;
    }
    function getBBox() {
      var bbox = svgElement.getBBox();
      return {
        left: bbox.x,
        top: bbox.y,
        width: bbox.width,
        height: bbox.height
      };
    }
    function getScreenCTM() {
      var ctm = owner.getCTM();
      if (!ctm) {
        return owner.getScreenCTM();
      }
      return ctm;
    }
    function initTransform(transform2) {
      var screenCTM = svgElement.getCTM();
      if (screenCTM === null) {
        screenCTM = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix();
      }
      transform2.x = screenCTM.e;
      transform2.y = screenCTM.f;
      transform2.scale = screenCTM.a;
      owner.removeAttributeNS(null, "viewBox");
    }
    function applyTransform(transform2) {
      svgElement.setAttribute("transform", "matrix(" + transform2.scale + " 0 0 " + transform2.scale + " " + transform2.x + " " + transform2.y + ")");
    }
  }
  function isSVGElement(element2) {
    return element2 && element2.ownerSVGElement && element2.getCTM;
  }
  return svgController.exports;
}
var domController = { exports: {} };
var hasRequiredDomController;
function requireDomController() {
  if (hasRequiredDomController) return domController.exports;
  hasRequiredDomController = 1;
  domController.exports = makeDomController2;
  domController.exports.canAttach = isDomElement;
  function makeDomController2(domElement, options) {
    var elementValid = isDomElement(domElement);
    if (!elementValid) {
      throw new Error("panzoom requires DOM element to be attached to the DOM tree");
    }
    var owner = domElement.parentElement;
    domElement.scrollTop = 0;
    if (!options.disableKeyboardInteraction) {
      owner.setAttribute("tabindex", 0);
    }
    var api = {
      getBBox,
      getOwner,
      applyTransform
    };
    return api;
    function getOwner() {
      return owner;
    }
    function getBBox() {
      return {
        left: 0,
        top: 0,
        width: domElement.clientWidth,
        height: domElement.clientHeight
      };
    }
    function applyTransform(transform2) {
      domElement.style.transformOrigin = "0 0 0";
      domElement.style.transform = "matrix(" + transform2.scale + ", 0, 0, " + transform2.scale + ", " + transform2.x + ", " + transform2.y + ")";
    }
  }
  function isDomElement(element2) {
    return element2 && element2.parentElement && element2.style;
  }
  return domController.exports;
}
var wheel = wheelExports;
var animate = amatorExports;
var eventify = ngraph_events;
var kinetic = kinetic_1;
var createTextSelectionInterceptor = createTextSelectionInterceptor_1;
var domTextSelectionInterceptor = createTextSelectionInterceptor();
var fakeTextSelectorInterceptor = createTextSelectionInterceptor(true);
var Transform = requireTransform();
var makeSvgController = requireSvgController();
var makeDomController = requireDomController();
var defaultZoomSpeed = 1;
var defaultDoubleTapZoomSpeed = 1.75;
var doubleTapSpeedInMS = 300;
var clickEventTimeInMS = 200;
var panzoom = createPanZoom;
function createPanZoom(domElement, options) {
  options = options || {};
  var panController = options.controller;
  if (!panController) {
    if (makeSvgController.canAttach(domElement)) {
      panController = makeSvgController(domElement, options);
    } else if (makeDomController.canAttach(domElement)) {
      panController = makeDomController(domElement, options);
    }
  }
  if (!panController) {
    throw new Error(
      "Cannot create panzoom for the current type of dom element"
    );
  }
  var owner = panController.getOwner();
  var storedCTMResult = { x: 0, y: 0 };
  var isDirty = false;
  var transform2 = new Transform();
  if (panController.initTransform) {
    panController.initTransform(transform2);
  }
  var filterKey = typeof options.filterKey === "function" ? options.filterKey : noop;
  var pinchSpeed = typeof options.pinchSpeed === "number" ? options.pinchSpeed : 1;
  var bounds = options.bounds;
  var maxZoom = typeof options.maxZoom === "number" ? options.maxZoom : Number.POSITIVE_INFINITY;
  var minZoom = typeof options.minZoom === "number" ? options.minZoom : 0;
  var boundsPadding = typeof options.boundsPadding === "number" ? options.boundsPadding : 0.05;
  var zoomDoubleClickSpeed = typeof options.zoomDoubleClickSpeed === "number" ? options.zoomDoubleClickSpeed : defaultDoubleTapZoomSpeed;
  var beforeWheel = options.beforeWheel || noop;
  var beforeMouseDown = options.beforeMouseDown || noop;
  var speed = typeof options.zoomSpeed === "number" ? options.zoomSpeed : defaultZoomSpeed;
  var transformOrigin = parseTransformOrigin(options.transformOrigin);
  var textSelection = options.enableTextSelection ? fakeTextSelectorInterceptor : domTextSelectionInterceptor;
  validateBounds(bounds);
  if (options.autocenter) {
    autocenter();
  }
  var frameAnimation;
  var lastTouchEndTime = 0;
  var lastTouchStartTime = 0;
  var pendingClickEventTimeout = 0;
  var lastMouseDownedEvent = null;
  var lastMouseDownTime = /* @__PURE__ */ new Date();
  var lastSingleFingerOffset;
  var touchInProgress = false;
  var panstartFired = false;
  var mouseX;
  var mouseY;
  var clickX;
  var clickY;
  var pinchZoomLength;
  var smoothScroll;
  if ("smoothScroll" in options && !options.smoothScroll) {
    smoothScroll = rigidScroll();
  } else {
    smoothScroll = kinetic(getPoint, scroll, options.smoothScroll);
  }
  var moveByAnimation;
  var zoomToAnimation;
  var multiTouch;
  var paused = false;
  listenForEvents();
  var api = {
    dispose,
    moveBy: internalMoveBy,
    moveTo,
    smoothMoveTo,
    centerOn,
    zoomTo: publicZoomTo,
    zoomAbs,
    smoothZoom,
    smoothZoomAbs,
    showRectangle,
    pause,
    resume,
    isPaused,
    getTransform: getTransformModel,
    getMinZoom,
    setMinZoom,
    getMaxZoom,
    setMaxZoom,
    getTransformOrigin,
    setTransformOrigin,
    getZoomSpeed,
    setZoomSpeed
  };
  eventify(api);
  var initialX = typeof options.initialX === "number" ? options.initialX : transform2.x;
  var initialY = typeof options.initialY === "number" ? options.initialY : transform2.y;
  var initialZoom = typeof options.initialZoom === "number" ? options.initialZoom : transform2.scale;
  if (initialX != transform2.x || initialY != transform2.y || initialZoom != transform2.scale) {
    zoomAbs(initialX, initialY, initialZoom);
  }
  return api;
  function pause() {
    releaseEvents();
    paused = true;
  }
  function resume() {
    if (paused) {
      listenForEvents();
      paused = false;
    }
  }
  function isPaused() {
    return paused;
  }
  function showRectangle(rect) {
    var clientRect = owner.getBoundingClientRect();
    var size = transformToScreen(clientRect.width, clientRect.height);
    var rectWidth = rect.right - rect.left;
    var rectHeight = rect.bottom - rect.top;
    if (!Number.isFinite(rectWidth) || !Number.isFinite(rectHeight)) {
      throw new Error("Invalid rectangle");
    }
    var dw = size.x / rectWidth;
    var dh = size.y / rectHeight;
    var scale = Math.min(dw, dh);
    transform2.x = -(rect.left + rectWidth / 2) * scale + size.x / 2;
    transform2.y = -(rect.top + rectHeight / 2) * scale + size.y / 2;
    transform2.scale = scale;
  }
  function transformToScreen(x, y) {
    if (panController.getScreenCTM) {
      var parentCTM = panController.getScreenCTM();
      var parentScaleX = parentCTM.a;
      var parentScaleY = parentCTM.d;
      var parentOffsetX = parentCTM.e;
      var parentOffsetY = parentCTM.f;
      storedCTMResult.x = x * parentScaleX - parentOffsetX;
      storedCTMResult.y = y * parentScaleY - parentOffsetY;
    } else {
      storedCTMResult.x = x;
      storedCTMResult.y = y;
    }
    return storedCTMResult;
  }
  function autocenter() {
    var w;
    var h;
    var left = 0;
    var top = 0;
    var sceneBoundingBox = getBoundingBox();
    if (sceneBoundingBox) {
      left = sceneBoundingBox.left;
      top = sceneBoundingBox.top;
      w = sceneBoundingBox.right - sceneBoundingBox.left;
      h = sceneBoundingBox.bottom - sceneBoundingBox.top;
    } else {
      var ownerRect = owner.getBoundingClientRect();
      w = ownerRect.width;
      h = ownerRect.height;
    }
    var bbox = panController.getBBox();
    if (bbox.width === 0 || bbox.height === 0) {
      return;
    }
    var dh = h / bbox.height;
    var dw = w / bbox.width;
    var scale = Math.min(dw, dh);
    transform2.x = -(bbox.left + bbox.width / 2) * scale + w / 2 + left;
    transform2.y = -(bbox.top + bbox.height / 2) * scale + h / 2 + top;
    transform2.scale = scale;
  }
  function getTransformModel() {
    return transform2;
  }
  function getMinZoom() {
    return minZoom;
  }
  function setMinZoom(newMinZoom) {
    minZoom = newMinZoom;
  }
  function getMaxZoom() {
    return maxZoom;
  }
  function setMaxZoom(newMaxZoom) {
    maxZoom = newMaxZoom;
  }
  function getTransformOrigin() {
    return transformOrigin;
  }
  function setTransformOrigin(newTransformOrigin) {
    transformOrigin = parseTransformOrigin(newTransformOrigin);
  }
  function getZoomSpeed() {
    return speed;
  }
  function setZoomSpeed(newSpeed) {
    if (!Number.isFinite(newSpeed)) {
      throw new Error("Zoom speed should be a number");
    }
    speed = newSpeed;
  }
  function getPoint() {
    return {
      x: transform2.x,
      y: transform2.y
    };
  }
  function moveTo(x, y) {
    transform2.x = x;
    transform2.y = y;
    keepTransformInsideBounds();
    triggerEvent("pan");
    makeDirty();
  }
  function moveBy(dx, dy) {
    moveTo(transform2.x + dx, transform2.y + dy);
  }
  function keepTransformInsideBounds() {
    var boundingBox = getBoundingBox();
    if (!boundingBox) return;
    var adjusted = false;
    var clientRect = getClientRect();
    var diff = boundingBox.left - clientRect.right;
    if (diff > 0) {
      transform2.x += diff;
      adjusted = true;
    }
    diff = boundingBox.right - clientRect.left;
    if (diff < 0) {
      transform2.x += diff;
      adjusted = true;
    }
    diff = boundingBox.top - clientRect.bottom;
    if (diff > 0) {
      transform2.y += diff;
      adjusted = true;
    }
    diff = boundingBox.bottom - clientRect.top;
    if (diff < 0) {
      transform2.y += diff;
      adjusted = true;
    }
    return adjusted;
  }
  function getBoundingBox() {
    if (!bounds) return;
    if (typeof bounds === "boolean") {
      var ownerRect = owner.getBoundingClientRect();
      var sceneWidth = ownerRect.width;
      var sceneHeight = ownerRect.height;
      return {
        left: sceneWidth * boundsPadding,
        top: sceneHeight * boundsPadding,
        right: sceneWidth * (1 - boundsPadding),
        bottom: sceneHeight * (1 - boundsPadding)
      };
    }
    return bounds;
  }
  function getClientRect() {
    var bbox = panController.getBBox();
    var leftTop = client(bbox.left, bbox.top);
    return {
      left: leftTop.x,
      top: leftTop.y,
      right: bbox.width * transform2.scale + leftTop.x,
      bottom: bbox.height * transform2.scale + leftTop.y
    };
  }
  function client(x, y) {
    return {
      x: x * transform2.scale + transform2.x,
      y: y * transform2.scale + transform2.y
    };
  }
  function makeDirty() {
    isDirty = true;
    frameAnimation = window.requestAnimationFrame(frame);
  }
  function zoomByRatio(clientX, clientY, ratio) {
    if (isNaN$1(clientX) || isNaN$1(clientY) || isNaN$1(ratio)) {
      throw new Error("zoom requires valid numbers");
    }
    var newScale = transform2.scale * ratio;
    if (newScale < minZoom) {
      if (transform2.scale === minZoom) return;
      ratio = minZoom / transform2.scale;
    }
    if (newScale > maxZoom) {
      if (transform2.scale === maxZoom) return;
      ratio = maxZoom / transform2.scale;
    }
    var size = transformToScreen(clientX, clientY);
    transform2.x = size.x - ratio * (size.x - transform2.x);
    transform2.y = size.y - ratio * (size.y - transform2.y);
    if (bounds && boundsPadding === 1 && minZoom === 1) {
      transform2.scale *= ratio;
      keepTransformInsideBounds();
    } else {
      var transformAdjusted = keepTransformInsideBounds();
      if (!transformAdjusted) transform2.scale *= ratio;
    }
    triggerEvent("zoom");
    makeDirty();
  }
  function zoomAbs(clientX, clientY, zoomLevel) {
    var ratio = zoomLevel / transform2.scale;
    zoomByRatio(clientX, clientY, ratio);
  }
  function centerOn(ui) {
    var parent = ui.ownerSVGElement;
    if (!parent)
      throw new Error("ui element is required to be within the scene");
    var clientRect = ui.getBoundingClientRect();
    var cx = clientRect.left + clientRect.width / 2;
    var cy = clientRect.top + clientRect.height / 2;
    var container = parent.getBoundingClientRect();
    var dx = container.width / 2 - cx;
    var dy = container.height / 2 - cy;
    internalMoveBy(dx, dy, true);
  }
  function smoothMoveTo(x, y) {
    internalMoveBy(x - transform2.x, y - transform2.y, true);
  }
  function internalMoveBy(dx, dy, smooth) {
    if (!smooth) {
      return moveBy(dx, dy);
    }
    if (moveByAnimation) moveByAnimation.cancel();
    var from = { x: 0, y: 0 };
    var to = { x: dx, y: dy };
    var lastX = 0;
    var lastY = 0;
    moveByAnimation = animate(from, to, {
      step: function(v) {
        moveBy(v.x - lastX, v.y - lastY);
        lastX = v.x;
        lastY = v.y;
      }
    });
  }
  function scroll(x, y) {
    cancelZoomAnimation();
    moveTo(x, y);
  }
  function dispose() {
    releaseEvents();
  }
  function listenForEvents() {
    owner.addEventListener("mousedown", onMouseDown, { passive: false });
    owner.addEventListener("dblclick", onDoubleClick, { passive: false });
    owner.addEventListener("touchstart", onTouch, { passive: false });
    owner.addEventListener("keydown", onKeyDown, { passive: false });
    wheel.addWheelListener(owner, onMouseWheel, { passive: false });
    makeDirty();
  }
  function releaseEvents() {
    wheel.removeWheelListener(owner, onMouseWheel);
    owner.removeEventListener("mousedown", onMouseDown);
    owner.removeEventListener("keydown", onKeyDown);
    owner.removeEventListener("dblclick", onDoubleClick);
    owner.removeEventListener("touchstart", onTouch);
    if (frameAnimation) {
      window.cancelAnimationFrame(frameAnimation);
      frameAnimation = 0;
    }
    smoothScroll.cancel();
    releaseDocumentMouse();
    releaseTouches();
    textSelection.release();
    triggerPanEnd();
  }
  function frame() {
    if (isDirty) applyTransform();
  }
  function applyTransform() {
    isDirty = false;
    panController.applyTransform(transform2);
    triggerEvent("transform");
    frameAnimation = 0;
  }
  function onKeyDown(e) {
    var x = 0, y = 0, z = 0;
    if (e.keyCode === 38) {
      y = 1;
    } else if (e.keyCode === 40) {
      y = -1;
    } else if (e.keyCode === 37) {
      x = 1;
    } else if (e.keyCode === 39) {
      x = -1;
    } else if (e.keyCode === 189 || e.keyCode === 109) {
      z = 1;
    } else if (e.keyCode === 187 || e.keyCode === 107) {
      z = -1;
    }
    if (filterKey(e, x, y, z)) {
      return;
    }
    if (x || y) {
      e.preventDefault();
      e.stopPropagation();
      var clientRect = owner.getBoundingClientRect();
      var offset = Math.min(clientRect.width, clientRect.height);
      var moveSpeedRatio = 0.05;
      var dx = offset * moveSpeedRatio * x;
      var dy = offset * moveSpeedRatio * y;
      internalMoveBy(dx, dy);
    }
    if (z) {
      var scaleMultiplier = getScaleMultiplier(z * 100);
      var offset = transformOrigin ? getTransformOriginOffset() : midPoint();
      publicZoomTo(offset.x, offset.y, scaleMultiplier);
    }
  }
  function midPoint() {
    var ownerRect = owner.getBoundingClientRect();
    return {
      x: ownerRect.width / 2,
      y: ownerRect.height / 2
    };
  }
  function onTouch(e) {
    beforeTouch(e);
    clearPendingClickEventTimeout();
    if (e.touches.length === 1) {
      return handleSingleFingerTouch(e, e.touches[0]);
    } else if (e.touches.length === 2) {
      pinchZoomLength = getPinchZoomLength(e.touches[0], e.touches[1]);
      multiTouch = true;
      startTouchListenerIfNeeded();
    }
  }
  function beforeTouch(e) {
    if (options.onTouch && !options.onTouch(e)) {
      return;
    }
    e.stopPropagation();
    e.preventDefault();
  }
  function beforeDoubleClick(e) {
    clearPendingClickEventTimeout();
    if (options.onDoubleClick && !options.onDoubleClick(e)) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
  }
  function handleSingleFingerTouch(e) {
    lastTouchStartTime = /* @__PURE__ */ new Date();
    var touch = e.touches[0];
    var offset = getOffsetXY(touch);
    lastSingleFingerOffset = offset;
    var point = transformToScreen(offset.x, offset.y);
    mouseX = point.x;
    mouseY = point.y;
    clickX = mouseX;
    clickY = mouseY;
    smoothScroll.cancel();
    startTouchListenerIfNeeded();
  }
  function startTouchListenerIfNeeded() {
    if (touchInProgress) {
      return;
    }
    touchInProgress = true;
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
    document.addEventListener("touchcancel", handleTouchEnd);
  }
  function handleTouchMove(e) {
    if (e.touches.length === 1) {
      e.stopPropagation();
      var touch = e.touches[0];
      var offset = getOffsetXY(touch);
      var point = transformToScreen(offset.x, offset.y);
      var dx = point.x - mouseX;
      var dy = point.y - mouseY;
      if (dx !== 0 && dy !== 0) {
        triggerPanStart();
      }
      mouseX = point.x;
      mouseY = point.y;
      internalMoveBy(dx, dy);
    } else if (e.touches.length === 2) {
      multiTouch = true;
      var t1 = e.touches[0];
      var t2 = e.touches[1];
      var currentPinchLength = getPinchZoomLength(t1, t2);
      var scaleMultiplier = 1 + (currentPinchLength / pinchZoomLength - 1) * pinchSpeed;
      var firstTouchPoint = getOffsetXY(t1);
      var secondTouchPoint = getOffsetXY(t2);
      mouseX = (firstTouchPoint.x + secondTouchPoint.x) / 2;
      mouseY = (firstTouchPoint.y + secondTouchPoint.y) / 2;
      if (transformOrigin) {
        var offset = getTransformOriginOffset();
        mouseX = offset.x;
        mouseY = offset.y;
      }
      publicZoomTo(mouseX, mouseY, scaleMultiplier);
      pinchZoomLength = currentPinchLength;
      e.stopPropagation();
      e.preventDefault();
    }
  }
  function clearPendingClickEventTimeout() {
    if (pendingClickEventTimeout) {
      clearTimeout(pendingClickEventTimeout);
      pendingClickEventTimeout = 0;
    }
  }
  function handlePotentialClickEvent(e) {
    if (!options.onClick) return;
    clearPendingClickEventTimeout();
    var dx = mouseX - clickX;
    var dy = mouseY - clickY;
    var l = Math.sqrt(dx * dx + dy * dy);
    if (l > 5) return;
    pendingClickEventTimeout = setTimeout(function() {
      pendingClickEventTimeout = 0;
      options.onClick(e);
    }, doubleTapSpeedInMS);
  }
  function handleTouchEnd(e) {
    clearPendingClickEventTimeout();
    if (e.touches.length > 0) {
      var offset = getOffsetXY(e.touches[0]);
      var point = transformToScreen(offset.x, offset.y);
      mouseX = point.x;
      mouseY = point.y;
    } else {
      var now = /* @__PURE__ */ new Date();
      if (now - lastTouchEndTime < doubleTapSpeedInMS) {
        if (transformOrigin) {
          var offset = getTransformOriginOffset();
          smoothZoom(offset.x, offset.y, zoomDoubleClickSpeed);
        } else {
          smoothZoom(lastSingleFingerOffset.x, lastSingleFingerOffset.y, zoomDoubleClickSpeed);
        }
      } else if (now - lastTouchStartTime < clickEventTimeInMS) {
        handlePotentialClickEvent(e);
      }
      lastTouchEndTime = now;
      triggerPanEnd();
      releaseTouches();
    }
  }
  function getPinchZoomLength(finger1, finger2) {
    var dx = finger1.clientX - finger2.clientX;
    var dy = finger1.clientY - finger2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }
  function onDoubleClick(e) {
    beforeDoubleClick(e);
    var offset = getOffsetXY(e);
    if (transformOrigin) {
      offset = getTransformOriginOffset();
    }
    smoothZoom(offset.x, offset.y, zoomDoubleClickSpeed);
  }
  function onMouseDown(e) {
    clearPendingClickEventTimeout();
    if (beforeMouseDown(e)) return;
    lastMouseDownedEvent = e;
    lastMouseDownTime = /* @__PURE__ */ new Date();
    if (touchInProgress) {
      e.stopPropagation();
      return false;
    }
    var isLeftButton = e.button === 1 && window.event !== null || e.button === 0;
    if (!isLeftButton) return;
    smoothScroll.cancel();
    var offset = getOffsetXY(e);
    var point = transformToScreen(offset.x, offset.y);
    clickX = mouseX = point.x;
    clickY = mouseY = point.y;
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    textSelection.capture(e.target || e.srcElement);
    return false;
  }
  function onMouseMove(e) {
    if (touchInProgress) return;
    triggerPanStart();
    var offset = getOffsetXY(e);
    var point = transformToScreen(offset.x, offset.y);
    var dx = point.x - mouseX;
    var dy = point.y - mouseY;
    mouseX = point.x;
    mouseY = point.y;
    internalMoveBy(dx, dy);
  }
  function onMouseUp() {
    var now = /* @__PURE__ */ new Date();
    if (now - lastMouseDownTime < clickEventTimeInMS) handlePotentialClickEvent(lastMouseDownedEvent);
    textSelection.release();
    triggerPanEnd();
    releaseDocumentMouse();
  }
  function releaseDocumentMouse() {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
    panstartFired = false;
  }
  function releaseTouches() {
    document.removeEventListener("touchmove", handleTouchMove);
    document.removeEventListener("touchend", handleTouchEnd);
    document.removeEventListener("touchcancel", handleTouchEnd);
    panstartFired = false;
    multiTouch = false;
    touchInProgress = false;
  }
  function onMouseWheel(e) {
    if (beforeWheel(e)) return;
    smoothScroll.cancel();
    var delta = e.deltaY;
    if (e.deltaMode > 0) delta *= 100;
    var scaleMultiplier = getScaleMultiplier(delta);
    if (scaleMultiplier !== 1) {
      var offset = transformOrigin ? getTransformOriginOffset() : getOffsetXY(e);
      publicZoomTo(offset.x, offset.y, scaleMultiplier);
      e.preventDefault();
    }
  }
  function getOffsetXY(e) {
    var offsetX, offsetY;
    var ownerRect = owner.getBoundingClientRect();
    offsetX = e.clientX - ownerRect.left;
    offsetY = e.clientY - ownerRect.top;
    return { x: offsetX, y: offsetY };
  }
  function smoothZoom(clientX, clientY, scaleMultiplier) {
    var fromValue = transform2.scale;
    var from = { scale: fromValue };
    var to = { scale: scaleMultiplier * fromValue };
    smoothScroll.cancel();
    cancelZoomAnimation();
    zoomToAnimation = animate(from, to, {
      step: function(v) {
        zoomAbs(clientX, clientY, v.scale);
      },
      done: triggerZoomEnd
    });
  }
  function smoothZoomAbs(clientX, clientY, toScaleValue) {
    var fromValue = transform2.scale;
    var from = { scale: fromValue };
    var to = { scale: toScaleValue };
    smoothScroll.cancel();
    cancelZoomAnimation();
    zoomToAnimation = animate(from, to, {
      step: function(v) {
        zoomAbs(clientX, clientY, v.scale);
      }
    });
  }
  function getTransformOriginOffset() {
    var ownerRect = owner.getBoundingClientRect();
    return {
      x: ownerRect.width * transformOrigin.x,
      y: ownerRect.height * transformOrigin.y
    };
  }
  function publicZoomTo(clientX, clientY, scaleMultiplier) {
    smoothScroll.cancel();
    cancelZoomAnimation();
    return zoomByRatio(clientX, clientY, scaleMultiplier);
  }
  function cancelZoomAnimation() {
    if (zoomToAnimation) {
      zoomToAnimation.cancel();
      zoomToAnimation = null;
    }
  }
  function getScaleMultiplier(delta) {
    var sign = Math.sign(delta);
    var deltaAdjustedSpeed = Math.min(0.25, Math.abs(speed * delta / 128));
    return 1 - sign * deltaAdjustedSpeed;
  }
  function triggerPanStart() {
    if (!panstartFired) {
      triggerEvent("panstart");
      panstartFired = true;
      smoothScroll.start();
    }
  }
  function triggerPanEnd() {
    if (panstartFired) {
      if (!multiTouch) smoothScroll.stop();
      triggerEvent("panend");
    }
  }
  function triggerZoomEnd() {
    triggerEvent("zoomend");
  }
  function triggerEvent(name2) {
    api.fire(name2, api);
  }
}
function parseTransformOrigin(options) {
  if (!options) return;
  if (typeof options === "object") {
    if (!isNumber(options.x) || !isNumber(options.y))
      failTransformOrigin(options);
    return options;
  }
  failTransformOrigin();
}
function failTransformOrigin(options) {
  console.error(options);
  throw new Error(
    [
      "Cannot parse transform origin.",
      "Some good examples:",
      '  "center center" can be achieved with {x: 0.5, y: 0.5}',
      '  "top center" can be achieved with {x: 0.5, y: 0}',
      '  "bottom right" can be achieved with {x: 1, y: 1}'
    ].join("\n")
  );
}
function noop() {
}
function validateBounds(bounds) {
  var boundsType = typeof bounds;
  if (boundsType === "undefined" || boundsType === "boolean") return;
  var validBounds = isNumber(bounds.left) && isNumber(bounds.top) && isNumber(bounds.bottom) && isNumber(bounds.right);
  if (!validBounds)
    throw new Error(
      "Bounds object is not valid. It can be: undefined, boolean (true|false) or an object {left, top, right, bottom}"
    );
}
function isNumber(x) {
  return Number.isFinite(x);
}
function isNaN$1(value) {
  if (Number.isNaN) {
    return Number.isNaN(value);
  }
  return value !== value;
}
function rigidScroll() {
  return {
    start: noop,
    stop: noop,
    cancel: noop
  };
}
function autoRun() {
  if (typeof document === "undefined") return;
  var scripts = document.getElementsByTagName("script");
  if (!scripts) return;
  var panzoomScript;
  for (var i = 0; i < scripts.length; ++i) {
    var x = scripts[i];
    if (x.src && x.src.match(/\bpanzoom(\.min)?\.js/)) {
      panzoomScript = x;
      break;
    }
  }
  if (!panzoomScript) return;
  var query = panzoomScript.getAttribute("query");
  if (!query) return;
  var globalName = panzoomScript.getAttribute("name") || "pz";
  var started = Date.now();
  tryAttach();
  function tryAttach() {
    var el = document.querySelector(query);
    if (!el) {
      var now = Date.now();
      var elapsed = now - started;
      if (elapsed < 2e3) {
        setTimeout(tryAttach, 100);
        return;
      }
      console.error("Cannot find the panzoom element", globalName);
      return;
    }
    var options = collectOptions(panzoomScript);
    console.log(options);
    window[globalName] = createPanZoom(el, options);
  }
  function collectOptions(script) {
    var attrs = script.attributes;
    var options = {};
    for (var j = 0; j < attrs.length; ++j) {
      var attr = attrs[j];
      var nameValue = getPanzoomAttributeNameValue(attr);
      if (nameValue) {
        options[nameValue.name] = nameValue.value;
      }
    }
    return options;
  }
  function getPanzoomAttributeNameValue(attr) {
    if (!attr.name) return;
    var isPanZoomAttribute = attr.name[0] === "p" && attr.name[1] === "z" && attr.name[2] === "-";
    if (!isPanZoomAttribute) return;
    var name2 = attr.name.substr(3);
    var value = JSON.parse(attr.value);
    return { name: name2, value };
  }
}
autoRun();
const panzoom$1 = /* @__PURE__ */ getDefaultExportFromCjs(panzoom);
var root_1$8 = from_html(`<div class="modal fixed top-0 right-0 left-0 bottom-0 bg-black text-white w-full min-h-screen h-screen flex justify-center z-9999 overflow-hidden overscroll-contain"><div class=" absolute left-0 w-full flex justify-between select-none z-20"><div><button class=" p-5"><!></button></div> <div><button class=" p-5 z-999"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6"><path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z"></path><path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z"></path></svg></button></div></div> <div class="flex h-full max-h-full justify-center items-center z-0"><img class=" mx-auto h-full object-scale-down select-none" draggable="false"/></div></div>`);
function ImagePreview($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const { saveAs } = fileSaver;
  let show = prop($$props, "show", 12, false);
  let src2 = prop($$props, "src", 8, "");
  let alt = prop($$props, "alt", 8, "");
  const i18n = getContext("i18n");
  let previewElement = mutable_source(null);
  let instance = mutable_source();
  let sceneElement = mutable_source();
  const handleKeyDown = (event2) => {
    if (event2.key === "Escape") {
      console.log("Escape");
      show(false);
    }
  };
  onMount(() => {
  });
  onDestroy(() => {
    show(false);
    if (get(previewElement)) {
      document.body.removeChild(get(previewElement));
    }
  });
  legacy_pre_effect(() => (get(sceneElement), panzoom$1), () => {
    if (get(sceneElement)) {
      set(instance, panzoom$1(get(sceneElement), { bounds: true, boundsPadding: 0.1, zoomSpeed: 0.065 }));
    }
  });
  legacy_pre_effect(() => (deep_read_state(show()), get(previewElement)), () => {
    if (show() && get(previewElement)) {
      document.body.appendChild(get(previewElement));
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else if (get(previewElement)) {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.removeChild(get(previewElement));
      document.body.style.overflow = "unset";
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var div = root_1$8();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var button = child(div_2);
      var node_1 = child(button);
      XMark(node_1, { className: "size-6" });
      reset(button);
      reset(div_2);
      var div_3 = sibling(div_2, 2);
      var button_1 = child(div_3);
      reset(div_3);
      reset(div_1);
      var div_4 = sibling(div_1, 2);
      var img = child(div_4);
      bind_this(img, ($$value) => set(sceneElement, $$value), () => get(sceneElement));
      reset(div_4);
      reset(div);
      bind_this(div, ($$value) => set(previewElement, $$value), () => get(previewElement));
      template_effect(() => {
        set_attribute(img, "src", src2());
        set_attribute(img, "alt", alt());
      });
      event("pointerdown", button, (e) => {
        e.stopImmediatePropagation();
        e.preventDefault();
        show(false);
      });
      event("click", button, (e) => {
        show(false);
      });
      event("click", button_1, () => {
        if (src2().startsWith("data:image/")) {
          const base64Data = src2().split(",")[1];
          const blob = new Blob([Uint8Array.from(atob(base64Data), (c2) => c2.charCodeAt(0))], { type: "image/png" });
          const mimeType = blob.type || "image/png";
          const fileName = `${$i18n().t("Generated Image").toLowerCase().replace(/ /g, "_")}.${mimeType.split("/")[1]}`;
          saveAs(blob, fileName);
          return;
        } else if (src2().startsWith("blob:")) {
          fetch(src2()).then((response) => response.blob()).then((blob) => {
            const mimeType = blob.type || "image/png";
            const blobWithType = new Blob([blob], { type: mimeType });
            const fileName = `${$i18n().t("Generated Image").toLowerCase().replace(/ /g, "_")}.${mimeType.split("/")[1]}`;
            saveAs(blobWithType, fileName);
          }).catch((error) => {
            console.error("Error downloading blob:", error);
          });
          return;
        } else if (src2().startsWith("/") || src2().startsWith("http://") || src2().startsWith("https://")) {
          fetch(src2()).then((response) => response.blob()).then((blob) => {
            const mimeType = blob.type || "image/png";
            const blobWithType = new Blob([blob], { type: mimeType });
            const fileName = `${$i18n().t("Generated Image").toLowerCase().replace(/ /g, "_")}.${mimeType.split("/")[1]}`;
            saveAs(blobWithType, fileName);
          }).catch((error) => {
            console.error("Error downloading remote image:", error);
          });
          return;
        }
      });
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (show()) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_1$7 = from_html(`<div class=" absolute -top-1 -right-1"><button class=" bg-white text-black border border-white rounded-full group-hover:visible invisible transition" type="button"><!></button></div>`);
var root$b = from_html(`<!> <div class=" relative group w-fit flex items-center"><button type="button"><img draggable="false" data-cy="image"/></button> <!></div>`, 1);
function Image($$anchor, $$props) {
  push($$props, false);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let src2 = prop($$props, "src", 8, "");
  let alt = prop($$props, "alt", 8, "");
  let className = prop($$props, "className", 24, () => {
    var _a;
    return ` w-full ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "" : "outline-hidden focus:outline-hidden"}`;
  });
  let imageClassName = prop($$props, "imageClassName", 8, "rounded-lg");
  let dismissible = prop($$props, "dismissible", 8, false);
  let onDismiss = prop($$props, "onDismiss", 8, () => {
  });
  const i18n = getContext("i18n");
  let _src = mutable_source("");
  let showImagePreview = mutable_source(false);
  legacy_pre_effect(() => (deep_read_state(src2()), WEBUI_BASE_URL), () => {
    set(_src, src2().startsWith("/") ? `${WEBUI_BASE_URL}${src2()}` : src2());
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root$b();
  var node = first_child(fragment);
  ImagePreview(node, {
    get src() {
      return get(_src);
    },
    get alt() {
      return alt();
    },
    get show() {
      return get(showImagePreview);
    },
    set show($$value) {
      set(showImagePreview, $$value);
    },
    $$legacy: true
  });
  var div = sibling(node, 2);
  var button = child(div);
  var img = child(button);
  reset(button);
  var node_1 = sibling(button, 2);
  {
    var consequent = ($$anchor2) => {
      var div_1 = root_1$7();
      var button_1 = child(div_1);
      var node_2 = child(button_1);
      XMark(node_2, { className: "size-4" });
      reset(button_1);
      reset(div_1);
      template_effect(($0) => set_attribute(button_1, "aria-label", $0), [() => ($i18n(), untrack(() => $i18n().t("Remove image")))]);
      event("click", button_1, () => {
        onDismiss()();
      });
      append($$anchor2, div_1);
    };
    if_block(node_1, ($$render) => {
      if (dismissible()) $$render(consequent);
    });
  }
  reset(div);
  template_effect(
    ($0) => {
      set_class(button, 1, clsx(className()));
      set_attribute(button, "aria-label", $0);
      set_attribute(img, "src", get(_src));
      set_attribute(img, "alt", alt());
      set_class(img, 1, clsx(imageClassName()));
    },
    [
      () => ($i18n(), untrack(() => $i18n().t("Show image preview")))
    ]
  );
  event("click", button, () => {
    set(showImagePreview, true);
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var __assign$1 = function() {
  __assign$1 = Object.assign || function(t) {
    for (var s2, i = 1, n = arguments.length; i < n; i++) {
      s2 = arguments[i];
      for (var p in s2) if (Object.prototype.hasOwnProperty.call(s2, p))
        t[p] = s2[p];
    }
    return t;
  };
  return __assign$1.apply(this, arguments);
};
var pairDivider = "~";
var blockDivider = "~~";
function generateNamedReferences(input, prev) {
  var entities = {};
  var characters = {};
  var blocks = input.split(blockDivider);
  var isOptionalBlock = false;
  for (var i = 0; blocks.length > i; i++) {
    var entries = blocks[i].split(pairDivider);
    for (var j = 0; j < entries.length; j += 2) {
      var entity = entries[j];
      var character = entries[j + 1];
      var fullEntity = "&" + entity + ";";
      entities[fullEntity] = character;
      if (isOptionalBlock) {
        entities["&" + entity] = character;
      }
      characters[character] = fullEntity;
    }
    isOptionalBlock = true;
  }
  return prev ? { entities: __assign$1(__assign$1({}, entities), prev.entities), characters: __assign$1(__assign$1({}, characters), prev.characters) } : { entities, characters };
}
var bodyRegExps = {
  xml: /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
  html4: /&notin;|&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
  html5: /&centerdot;|&copysr;|&divideontimes;|&gtcc;|&gtcir;|&gtdot;|&gtlPar;|&gtquest;|&gtrapprox;|&gtrarr;|&gtrdot;|&gtreqless;|&gtreqqless;|&gtrless;|&gtrsim;|&ltcc;|&ltcir;|&ltdot;|&lthree;|&ltimes;|&ltlarr;|&ltquest;|&ltrPar;|&ltri;|&ltrie;|&ltrif;|&notin;|&notinE;|&notindot;|&notinva;|&notinvb;|&notinvc;|&notni;|&notniva;|&notnivb;|&notnivc;|&parallel;|&timesb;|&timesbar;|&timesd;|&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g
};
var namedReferences = {};
namedReferences["xml"] = generateNamedReferences(`lt~<~gt~>~quot~"~apos~'~amp~&`);
namedReferences["html4"] = generateNamedReferences(`apos~'~OElig~Œ~oelig~œ~Scaron~Š~scaron~š~Yuml~Ÿ~circ~ˆ~tilde~˜~ensp~ ~emsp~ ~thinsp~ ~zwnj~‌~zwj~‍~lrm~‎~rlm~‏~ndash~–~mdash~—~lsquo~‘~rsquo~’~sbquo~‚~ldquo~“~rdquo~”~bdquo~„~dagger~†~Dagger~‡~permil~‰~lsaquo~‹~rsaquo~›~euro~€~fnof~ƒ~Alpha~Α~Beta~Β~Gamma~Γ~Delta~Δ~Epsilon~Ε~Zeta~Ζ~Eta~Η~Theta~Θ~Iota~Ι~Kappa~Κ~Lambda~Λ~Mu~Μ~Nu~Ν~Xi~Ξ~Omicron~Ο~Pi~Π~Rho~Ρ~Sigma~Σ~Tau~Τ~Upsilon~Υ~Phi~Φ~Chi~Χ~Psi~Ψ~Omega~Ω~alpha~α~beta~β~gamma~γ~delta~δ~epsilon~ε~zeta~ζ~eta~η~theta~θ~iota~ι~kappa~κ~lambda~λ~mu~μ~nu~ν~xi~ξ~omicron~ο~pi~π~rho~ρ~sigmaf~ς~sigma~σ~tau~τ~upsilon~υ~phi~φ~chi~χ~psi~ψ~omega~ω~thetasym~ϑ~upsih~ϒ~piv~ϖ~bull~•~hellip~…~prime~′~Prime~″~oline~‾~frasl~⁄~weierp~℘~image~ℑ~real~ℜ~trade~™~alefsym~ℵ~larr~←~uarr~↑~rarr~→~darr~↓~harr~↔~crarr~↵~lArr~⇐~uArr~⇑~rArr~⇒~dArr~⇓~hArr~⇔~forall~∀~part~∂~exist~∃~empty~∅~nabla~∇~isin~∈~notin~∉~ni~∋~prod~∏~sum~∑~minus~−~lowast~∗~radic~√~prop~∝~infin~∞~ang~∠~and~∧~or~∨~cap~∩~cup~∪~int~∫~there4~∴~sim~∼~cong~≅~asymp~≈~ne~≠~equiv~≡~le~≤~ge~≥~sub~⊂~sup~⊃~nsub~⊄~sube~⊆~supe~⊇~oplus~⊕~otimes~⊗~perp~⊥~sdot~⋅~lceil~⌈~rceil~⌉~lfloor~⌊~rfloor~⌋~lang~〈~rang~〉~loz~◊~spades~♠~clubs~♣~hearts~♥~diams~♦~~nbsp~ ~iexcl~¡~cent~¢~pound~£~curren~¤~yen~¥~brvbar~¦~sect~§~uml~¨~copy~©~ordf~ª~laquo~«~not~¬~shy~­~reg~®~macr~¯~deg~°~plusmn~±~sup2~²~sup3~³~acute~´~micro~µ~para~¶~middot~·~cedil~¸~sup1~¹~ordm~º~raquo~»~frac14~¼~frac12~½~frac34~¾~iquest~¿~Agrave~À~Aacute~Á~Acirc~Â~Atilde~Ã~Auml~Ä~Aring~Å~AElig~Æ~Ccedil~Ç~Egrave~È~Eacute~É~Ecirc~Ê~Euml~Ë~Igrave~Ì~Iacute~Í~Icirc~Î~Iuml~Ï~ETH~Ð~Ntilde~Ñ~Ograve~Ò~Oacute~Ó~Ocirc~Ô~Otilde~Õ~Ouml~Ö~times~×~Oslash~Ø~Ugrave~Ù~Uacute~Ú~Ucirc~Û~Uuml~Ü~Yacute~Ý~THORN~Þ~szlig~ß~agrave~à~aacute~á~acirc~â~atilde~ã~auml~ä~aring~å~aelig~æ~ccedil~ç~egrave~è~eacute~é~ecirc~ê~euml~ë~igrave~ì~iacute~í~icirc~î~iuml~ï~eth~ð~ntilde~ñ~ograve~ò~oacute~ó~ocirc~ô~otilde~õ~ouml~ö~divide~÷~oslash~ø~ugrave~ù~uacute~ú~ucirc~û~uuml~ü~yacute~ý~thorn~þ~yuml~ÿ~quot~"~amp~&~lt~<~gt~>`);
namedReferences["html5"] = generateNamedReferences('Abreve~Ă~Acy~А~Afr~𝔄~Amacr~Ā~And~⩓~Aogon~Ą~Aopf~𝔸~ApplyFunction~⁡~Ascr~𝒜~Assign~≔~Backslash~∖~Barv~⫧~Barwed~⌆~Bcy~Б~Because~∵~Bernoullis~ℬ~Bfr~𝔅~Bopf~𝔹~Breve~˘~Bscr~ℬ~Bumpeq~≎~CHcy~Ч~Cacute~Ć~Cap~⋒~CapitalDifferentialD~ⅅ~Cayleys~ℭ~Ccaron~Č~Ccirc~Ĉ~Cconint~∰~Cdot~Ċ~Cedilla~¸~CenterDot~·~Cfr~ℭ~CircleDot~⊙~CircleMinus~⊖~CirclePlus~⊕~CircleTimes~⊗~ClockwiseContourIntegral~∲~CloseCurlyDoubleQuote~”~CloseCurlyQuote~’~Colon~∷~Colone~⩴~Congruent~≡~Conint~∯~ContourIntegral~∮~Copf~ℂ~Coproduct~∐~CounterClockwiseContourIntegral~∳~Cross~⨯~Cscr~𝒞~Cup~⋓~CupCap~≍~DD~ⅅ~DDotrahd~⤑~DJcy~Ђ~DScy~Ѕ~DZcy~Џ~Darr~↡~Dashv~⫤~Dcaron~Ď~Dcy~Д~Del~∇~Dfr~𝔇~DiacriticalAcute~´~DiacriticalDot~˙~DiacriticalDoubleAcute~˝~DiacriticalGrave~`~DiacriticalTilde~˜~Diamond~⋄~DifferentialD~ⅆ~Dopf~𝔻~Dot~¨~DotDot~⃜~DotEqual~≐~DoubleContourIntegral~∯~DoubleDot~¨~DoubleDownArrow~⇓~DoubleLeftArrow~⇐~DoubleLeftRightArrow~⇔~DoubleLeftTee~⫤~DoubleLongLeftArrow~⟸~DoubleLongLeftRightArrow~⟺~DoubleLongRightArrow~⟹~DoubleRightArrow~⇒~DoubleRightTee~⊨~DoubleUpArrow~⇑~DoubleUpDownArrow~⇕~DoubleVerticalBar~∥~DownArrow~↓~DownArrowBar~⤓~DownArrowUpArrow~⇵~DownBreve~̑~DownLeftRightVector~⥐~DownLeftTeeVector~⥞~DownLeftVector~↽~DownLeftVectorBar~⥖~DownRightTeeVector~⥟~DownRightVector~⇁~DownRightVectorBar~⥗~DownTee~⊤~DownTeeArrow~↧~Downarrow~⇓~Dscr~𝒟~Dstrok~Đ~ENG~Ŋ~Ecaron~Ě~Ecy~Э~Edot~Ė~Efr~𝔈~Element~∈~Emacr~Ē~EmptySmallSquare~◻~EmptyVerySmallSquare~▫~Eogon~Ę~Eopf~𝔼~Equal~⩵~EqualTilde~≂~Equilibrium~⇌~Escr~ℰ~Esim~⩳~Exists~∃~ExponentialE~ⅇ~Fcy~Ф~Ffr~𝔉~FilledSmallSquare~◼~FilledVerySmallSquare~▪~Fopf~𝔽~ForAll~∀~Fouriertrf~ℱ~Fscr~ℱ~GJcy~Ѓ~Gammad~Ϝ~Gbreve~Ğ~Gcedil~Ģ~Gcirc~Ĝ~Gcy~Г~Gdot~Ġ~Gfr~𝔊~Gg~⋙~Gopf~𝔾~GreaterEqual~≥~GreaterEqualLess~⋛~GreaterFullEqual~≧~GreaterGreater~⪢~GreaterLess~≷~GreaterSlantEqual~⩾~GreaterTilde~≳~Gscr~𝒢~Gt~≫~HARDcy~Ъ~Hacek~ˇ~Hat~^~Hcirc~Ĥ~Hfr~ℌ~HilbertSpace~ℋ~Hopf~ℍ~HorizontalLine~─~Hscr~ℋ~Hstrok~Ħ~HumpDownHump~≎~HumpEqual~≏~IEcy~Е~IJlig~Ĳ~IOcy~Ё~Icy~И~Idot~İ~Ifr~ℑ~Im~ℑ~Imacr~Ī~ImaginaryI~ⅈ~Implies~⇒~Int~∬~Integral~∫~Intersection~⋂~InvisibleComma~⁣~InvisibleTimes~⁢~Iogon~Į~Iopf~𝕀~Iscr~ℐ~Itilde~Ĩ~Iukcy~І~Jcirc~Ĵ~Jcy~Й~Jfr~𝔍~Jopf~𝕁~Jscr~𝒥~Jsercy~Ј~Jukcy~Є~KHcy~Х~KJcy~Ќ~Kcedil~Ķ~Kcy~К~Kfr~𝔎~Kopf~𝕂~Kscr~𝒦~LJcy~Љ~Lacute~Ĺ~Lang~⟪~Laplacetrf~ℒ~Larr~↞~Lcaron~Ľ~Lcedil~Ļ~Lcy~Л~LeftAngleBracket~⟨~LeftArrow~←~LeftArrowBar~⇤~LeftArrowRightArrow~⇆~LeftCeiling~⌈~LeftDoubleBracket~⟦~LeftDownTeeVector~⥡~LeftDownVector~⇃~LeftDownVectorBar~⥙~LeftFloor~⌊~LeftRightArrow~↔~LeftRightVector~⥎~LeftTee~⊣~LeftTeeArrow~↤~LeftTeeVector~⥚~LeftTriangle~⊲~LeftTriangleBar~⧏~LeftTriangleEqual~⊴~LeftUpDownVector~⥑~LeftUpTeeVector~⥠~LeftUpVector~↿~LeftUpVectorBar~⥘~LeftVector~↼~LeftVectorBar~⥒~Leftarrow~⇐~Leftrightarrow~⇔~LessEqualGreater~⋚~LessFullEqual~≦~LessGreater~≶~LessLess~⪡~LessSlantEqual~⩽~LessTilde~≲~Lfr~𝔏~Ll~⋘~Lleftarrow~⇚~Lmidot~Ŀ~LongLeftArrow~⟵~LongLeftRightArrow~⟷~LongRightArrow~⟶~Longleftarrow~⟸~Longleftrightarrow~⟺~Longrightarrow~⟹~Lopf~𝕃~LowerLeftArrow~↙~LowerRightArrow~↘~Lscr~ℒ~Lsh~↰~Lstrok~Ł~Lt~≪~Map~⤅~Mcy~М~MediumSpace~ ~Mellintrf~ℳ~Mfr~𝔐~MinusPlus~∓~Mopf~𝕄~Mscr~ℳ~NJcy~Њ~Nacute~Ń~Ncaron~Ň~Ncedil~Ņ~Ncy~Н~NegativeMediumSpace~​~NegativeThickSpace~​~NegativeThinSpace~​~NegativeVeryThinSpace~​~NestedGreaterGreater~≫~NestedLessLess~≪~NewLine~\n~Nfr~𝔑~NoBreak~⁠~NonBreakingSpace~ ~Nopf~ℕ~Not~⫬~NotCongruent~≢~NotCupCap~≭~NotDoubleVerticalBar~∦~NotElement~∉~NotEqual~≠~NotEqualTilde~≂̸~NotExists~∄~NotGreater~≯~NotGreaterEqual~≱~NotGreaterFullEqual~≧̸~NotGreaterGreater~≫̸~NotGreaterLess~≹~NotGreaterSlantEqual~⩾̸~NotGreaterTilde~≵~NotHumpDownHump~≎̸~NotHumpEqual~≏̸~NotLeftTriangle~⋪~NotLeftTriangleBar~⧏̸~NotLeftTriangleEqual~⋬~NotLess~≮~NotLessEqual~≰~NotLessGreater~≸~NotLessLess~≪̸~NotLessSlantEqual~⩽̸~NotLessTilde~≴~NotNestedGreaterGreater~⪢̸~NotNestedLessLess~⪡̸~NotPrecedes~⊀~NotPrecedesEqual~⪯̸~NotPrecedesSlantEqual~⋠~NotReverseElement~∌~NotRightTriangle~⋫~NotRightTriangleBar~⧐̸~NotRightTriangleEqual~⋭~NotSquareSubset~⊏̸~NotSquareSubsetEqual~⋢~NotSquareSuperset~⊐̸~NotSquareSupersetEqual~⋣~NotSubset~⊂⃒~NotSubsetEqual~⊈~NotSucceeds~⊁~NotSucceedsEqual~⪰̸~NotSucceedsSlantEqual~⋡~NotSucceedsTilde~≿̸~NotSuperset~⊃⃒~NotSupersetEqual~⊉~NotTilde~≁~NotTildeEqual~≄~NotTildeFullEqual~≇~NotTildeTilde~≉~NotVerticalBar~∤~Nscr~𝒩~Ocy~О~Odblac~Ő~Ofr~𝔒~Omacr~Ō~Oopf~𝕆~OpenCurlyDoubleQuote~“~OpenCurlyQuote~‘~Or~⩔~Oscr~𝒪~Otimes~⨷~OverBar~‾~OverBrace~⏞~OverBracket~⎴~OverParenthesis~⏜~PartialD~∂~Pcy~П~Pfr~𝔓~PlusMinus~±~Poincareplane~ℌ~Popf~ℙ~Pr~⪻~Precedes~≺~PrecedesEqual~⪯~PrecedesSlantEqual~≼~PrecedesTilde~≾~Product~∏~Proportion~∷~Proportional~∝~Pscr~𝒫~Qfr~𝔔~Qopf~ℚ~Qscr~𝒬~RBarr~⤐~Racute~Ŕ~Rang~⟫~Rarr~↠~Rarrtl~⤖~Rcaron~Ř~Rcedil~Ŗ~Rcy~Р~Re~ℜ~ReverseElement~∋~ReverseEquilibrium~⇋~ReverseUpEquilibrium~⥯~Rfr~ℜ~RightAngleBracket~⟩~RightArrow~→~RightArrowBar~⇥~RightArrowLeftArrow~⇄~RightCeiling~⌉~RightDoubleBracket~⟧~RightDownTeeVector~⥝~RightDownVector~⇂~RightDownVectorBar~⥕~RightFloor~⌋~RightTee~⊢~RightTeeArrow~↦~RightTeeVector~⥛~RightTriangle~⊳~RightTriangleBar~⧐~RightTriangleEqual~⊵~RightUpDownVector~⥏~RightUpTeeVector~⥜~RightUpVector~↾~RightUpVectorBar~⥔~RightVector~⇀~RightVectorBar~⥓~Rightarrow~⇒~Ropf~ℝ~RoundImplies~⥰~Rrightarrow~⇛~Rscr~ℛ~Rsh~↱~RuleDelayed~⧴~SHCHcy~Щ~SHcy~Ш~SOFTcy~Ь~Sacute~Ś~Sc~⪼~Scedil~Ş~Scirc~Ŝ~Scy~С~Sfr~𝔖~ShortDownArrow~↓~ShortLeftArrow~←~ShortRightArrow~→~ShortUpArrow~↑~SmallCircle~∘~Sopf~𝕊~Sqrt~√~Square~□~SquareIntersection~⊓~SquareSubset~⊏~SquareSubsetEqual~⊑~SquareSuperset~⊐~SquareSupersetEqual~⊒~SquareUnion~⊔~Sscr~𝒮~Star~⋆~Sub~⋐~Subset~⋐~SubsetEqual~⊆~Succeeds~≻~SucceedsEqual~⪰~SucceedsSlantEqual~≽~SucceedsTilde~≿~SuchThat~∋~Sum~∑~Sup~⋑~Superset~⊃~SupersetEqual~⊇~Supset~⋑~TRADE~™~TSHcy~Ћ~TScy~Ц~Tab~	~Tcaron~Ť~Tcedil~Ţ~Tcy~Т~Tfr~𝔗~Therefore~∴~ThickSpace~  ~ThinSpace~ ~Tilde~∼~TildeEqual~≃~TildeFullEqual~≅~TildeTilde~≈~Topf~𝕋~TripleDot~⃛~Tscr~𝒯~Tstrok~Ŧ~Uarr~↟~Uarrocir~⥉~Ubrcy~Ў~Ubreve~Ŭ~Ucy~У~Udblac~Ű~Ufr~𝔘~Umacr~Ū~UnderBar~_~UnderBrace~⏟~UnderBracket~⎵~UnderParenthesis~⏝~Union~⋃~UnionPlus~⊎~Uogon~Ų~Uopf~𝕌~UpArrow~↑~UpArrowBar~⤒~UpArrowDownArrow~⇅~UpDownArrow~↕~UpEquilibrium~⥮~UpTee~⊥~UpTeeArrow~↥~Uparrow~⇑~Updownarrow~⇕~UpperLeftArrow~↖~UpperRightArrow~↗~Upsi~ϒ~Uring~Ů~Uscr~𝒰~Utilde~Ũ~VDash~⊫~Vbar~⫫~Vcy~В~Vdash~⊩~Vdashl~⫦~Vee~⋁~Verbar~‖~Vert~‖~VerticalBar~∣~VerticalLine~|~VerticalSeparator~❘~VerticalTilde~≀~VeryThinSpace~ ~Vfr~𝔙~Vopf~𝕍~Vscr~𝒱~Vvdash~⊪~Wcirc~Ŵ~Wedge~⋀~Wfr~𝔚~Wopf~𝕎~Wscr~𝒲~Xfr~𝔛~Xopf~𝕏~Xscr~𝒳~YAcy~Я~YIcy~Ї~YUcy~Ю~Ycirc~Ŷ~Ycy~Ы~Yfr~𝔜~Yopf~𝕐~Yscr~𝒴~ZHcy~Ж~Zacute~Ź~Zcaron~Ž~Zcy~З~Zdot~Ż~ZeroWidthSpace~​~Zfr~ℨ~Zopf~ℤ~Zscr~𝒵~abreve~ă~ac~∾~acE~∾̳~acd~∿~acy~а~af~⁡~afr~𝔞~aleph~ℵ~amacr~ā~amalg~⨿~andand~⩕~andd~⩜~andslope~⩘~andv~⩚~ange~⦤~angle~∠~angmsd~∡~angmsdaa~⦨~angmsdab~⦩~angmsdac~⦪~angmsdad~⦫~angmsdae~⦬~angmsdaf~⦭~angmsdag~⦮~angmsdah~⦯~angrt~∟~angrtvb~⊾~angrtvbd~⦝~angsph~∢~angst~Å~angzarr~⍼~aogon~ą~aopf~𝕒~ap~≈~apE~⩰~apacir~⩯~ape~≊~apid~≋~approx~≈~approxeq~≊~ascr~𝒶~ast~*~asympeq~≍~awconint~∳~awint~⨑~bNot~⫭~backcong~≌~backepsilon~϶~backprime~‵~backsim~∽~backsimeq~⋍~barvee~⊽~barwed~⌅~barwedge~⌅~bbrk~⎵~bbrktbrk~⎶~bcong~≌~bcy~б~becaus~∵~because~∵~bemptyv~⦰~bepsi~϶~bernou~ℬ~beth~ℶ~between~≬~bfr~𝔟~bigcap~⋂~bigcirc~◯~bigcup~⋃~bigodot~⨀~bigoplus~⨁~bigotimes~⨂~bigsqcup~⨆~bigstar~★~bigtriangledown~▽~bigtriangleup~△~biguplus~⨄~bigvee~⋁~bigwedge~⋀~bkarow~⤍~blacklozenge~⧫~blacksquare~▪~blacktriangle~▴~blacktriangledown~▾~blacktriangleleft~◂~blacktriangleright~▸~blank~␣~blk12~▒~blk14~░~blk34~▓~block~█~bne~=⃥~bnequiv~≡⃥~bnot~⌐~bopf~𝕓~bot~⊥~bottom~⊥~bowtie~⋈~boxDL~╗~boxDR~╔~boxDl~╖~boxDr~╓~boxH~═~boxHD~╦~boxHU~╩~boxHd~╤~boxHu~╧~boxUL~╝~boxUR~╚~boxUl~╜~boxUr~╙~boxV~║~boxVH~╬~boxVL~╣~boxVR~╠~boxVh~╫~boxVl~╢~boxVr~╟~boxbox~⧉~boxdL~╕~boxdR~╒~boxdl~┐~boxdr~┌~boxh~─~boxhD~╥~boxhU~╨~boxhd~┬~boxhu~┴~boxminus~⊟~boxplus~⊞~boxtimes~⊠~boxuL~╛~boxuR~╘~boxul~┘~boxur~└~boxv~│~boxvH~╪~boxvL~╡~boxvR~╞~boxvh~┼~boxvl~┤~boxvr~├~bprime~‵~breve~˘~bscr~𝒷~bsemi~⁏~bsim~∽~bsime~⋍~bsol~\\~bsolb~⧅~bsolhsub~⟈~bullet~•~bump~≎~bumpE~⪮~bumpe~≏~bumpeq~≏~cacute~ć~capand~⩄~capbrcup~⩉~capcap~⩋~capcup~⩇~capdot~⩀~caps~∩︀~caret~⁁~caron~ˇ~ccaps~⩍~ccaron~č~ccirc~ĉ~ccups~⩌~ccupssm~⩐~cdot~ċ~cemptyv~⦲~centerdot~·~cfr~𝔠~chcy~ч~check~✓~checkmark~✓~cir~○~cirE~⧃~circeq~≗~circlearrowleft~↺~circlearrowright~↻~circledR~®~circledS~Ⓢ~circledast~⊛~circledcirc~⊚~circleddash~⊝~cire~≗~cirfnint~⨐~cirmid~⫯~cirscir~⧂~clubsuit~♣~colon~:~colone~≔~coloneq~≔~comma~,~commat~@~comp~∁~compfn~∘~complement~∁~complexes~ℂ~congdot~⩭~conint~∮~copf~𝕔~coprod~∐~copysr~℗~cross~✗~cscr~𝒸~csub~⫏~csube~⫑~csup~⫐~csupe~⫒~ctdot~⋯~cudarrl~⤸~cudarrr~⤵~cuepr~⋞~cuesc~⋟~cularr~↶~cularrp~⤽~cupbrcap~⩈~cupcap~⩆~cupcup~⩊~cupdot~⊍~cupor~⩅~cups~∪︀~curarr~↷~curarrm~⤼~curlyeqprec~⋞~curlyeqsucc~⋟~curlyvee~⋎~curlywedge~⋏~curvearrowleft~↶~curvearrowright~↷~cuvee~⋎~cuwed~⋏~cwconint~∲~cwint~∱~cylcty~⌭~dHar~⥥~daleth~ℸ~dash~‐~dashv~⊣~dbkarow~⤏~dblac~˝~dcaron~ď~dcy~д~dd~ⅆ~ddagger~‡~ddarr~⇊~ddotseq~⩷~demptyv~⦱~dfisht~⥿~dfr~𝔡~dharl~⇃~dharr~⇂~diam~⋄~diamond~⋄~diamondsuit~♦~die~¨~digamma~ϝ~disin~⋲~div~÷~divideontimes~⋇~divonx~⋇~djcy~ђ~dlcorn~⌞~dlcrop~⌍~dollar~$~dopf~𝕕~dot~˙~doteq~≐~doteqdot~≑~dotminus~∸~dotplus~∔~dotsquare~⊡~doublebarwedge~⌆~downarrow~↓~downdownarrows~⇊~downharpoonleft~⇃~downharpoonright~⇂~drbkarow~⤐~drcorn~⌟~drcrop~⌌~dscr~𝒹~dscy~ѕ~dsol~⧶~dstrok~đ~dtdot~⋱~dtri~▿~dtrif~▾~duarr~⇵~duhar~⥯~dwangle~⦦~dzcy~џ~dzigrarr~⟿~eDDot~⩷~eDot~≑~easter~⩮~ecaron~ě~ecir~≖~ecolon~≕~ecy~э~edot~ė~ee~ⅇ~efDot~≒~efr~𝔢~eg~⪚~egs~⪖~egsdot~⪘~el~⪙~elinters~⏧~ell~ℓ~els~⪕~elsdot~⪗~emacr~ē~emptyset~∅~emptyv~∅~emsp13~ ~emsp14~ ~eng~ŋ~eogon~ę~eopf~𝕖~epar~⋕~eparsl~⧣~eplus~⩱~epsi~ε~epsiv~ϵ~eqcirc~≖~eqcolon~≕~eqsim~≂~eqslantgtr~⪖~eqslantless~⪕~equals~=~equest~≟~equivDD~⩸~eqvparsl~⧥~erDot~≓~erarr~⥱~escr~ℯ~esdot~≐~esim~≂~excl~!~expectation~ℰ~exponentiale~ⅇ~fallingdotseq~≒~fcy~ф~female~♀~ffilig~ﬃ~fflig~ﬀ~ffllig~ﬄ~ffr~𝔣~filig~ﬁ~fjlig~fj~flat~♭~fllig~ﬂ~fltns~▱~fopf~𝕗~fork~⋔~forkv~⫙~fpartint~⨍~frac13~⅓~frac15~⅕~frac16~⅙~frac18~⅛~frac23~⅔~frac25~⅖~frac35~⅗~frac38~⅜~frac45~⅘~frac56~⅚~frac58~⅝~frac78~⅞~frown~⌢~fscr~𝒻~gE~≧~gEl~⪌~gacute~ǵ~gammad~ϝ~gap~⪆~gbreve~ğ~gcirc~ĝ~gcy~г~gdot~ġ~gel~⋛~geq~≥~geqq~≧~geqslant~⩾~ges~⩾~gescc~⪩~gesdot~⪀~gesdoto~⪂~gesdotol~⪄~gesl~⋛︀~gesles~⪔~gfr~𝔤~gg~≫~ggg~⋙~gimel~ℷ~gjcy~ѓ~gl~≷~glE~⪒~gla~⪥~glj~⪤~gnE~≩~gnap~⪊~gnapprox~⪊~gne~⪈~gneq~⪈~gneqq~≩~gnsim~⋧~gopf~𝕘~grave~`~gscr~ℊ~gsim~≳~gsime~⪎~gsiml~⪐~gtcc~⪧~gtcir~⩺~gtdot~⋗~gtlPar~⦕~gtquest~⩼~gtrapprox~⪆~gtrarr~⥸~gtrdot~⋗~gtreqless~⋛~gtreqqless~⪌~gtrless~≷~gtrsim~≳~gvertneqq~≩︀~gvnE~≩︀~hairsp~ ~half~½~hamilt~ℋ~hardcy~ъ~harrcir~⥈~harrw~↭~hbar~ℏ~hcirc~ĥ~heartsuit~♥~hercon~⊹~hfr~𝔥~hksearow~⤥~hkswarow~⤦~hoarr~⇿~homtht~∻~hookleftarrow~↩~hookrightarrow~↪~hopf~𝕙~horbar~―~hscr~𝒽~hslash~ℏ~hstrok~ħ~hybull~⁃~hyphen~‐~ic~⁣~icy~и~iecy~е~iff~⇔~ifr~𝔦~ii~ⅈ~iiiint~⨌~iiint~∭~iinfin~⧜~iiota~℩~ijlig~ĳ~imacr~ī~imagline~ℐ~imagpart~ℑ~imath~ı~imof~⊷~imped~Ƶ~in~∈~incare~℅~infintie~⧝~inodot~ı~intcal~⊺~integers~ℤ~intercal~⊺~intlarhk~⨗~intprod~⨼~iocy~ё~iogon~į~iopf~𝕚~iprod~⨼~iscr~𝒾~isinE~⋹~isindot~⋵~isins~⋴~isinsv~⋳~isinv~∈~it~⁢~itilde~ĩ~iukcy~і~jcirc~ĵ~jcy~й~jfr~𝔧~jmath~ȷ~jopf~𝕛~jscr~𝒿~jsercy~ј~jukcy~є~kappav~ϰ~kcedil~ķ~kcy~к~kfr~𝔨~kgreen~ĸ~khcy~х~kjcy~ќ~kopf~𝕜~kscr~𝓀~lAarr~⇚~lAtail~⤛~lBarr~⤎~lE~≦~lEg~⪋~lHar~⥢~lacute~ĺ~laemptyv~⦴~lagran~ℒ~langd~⦑~langle~⟨~lap~⪅~larrb~⇤~larrbfs~⤟~larrfs~⤝~larrhk~↩~larrlp~↫~larrpl~⤹~larrsim~⥳~larrtl~↢~lat~⪫~latail~⤙~late~⪭~lates~⪭︀~lbarr~⤌~lbbrk~❲~lbrace~{~lbrack~[~lbrke~⦋~lbrksld~⦏~lbrkslu~⦍~lcaron~ľ~lcedil~ļ~lcub~{~lcy~л~ldca~⤶~ldquor~„~ldrdhar~⥧~ldrushar~⥋~ldsh~↲~leftarrow~←~leftarrowtail~↢~leftharpoondown~↽~leftharpoonup~↼~leftleftarrows~⇇~leftrightarrow~↔~leftrightarrows~⇆~leftrightharpoons~⇋~leftrightsquigarrow~↭~leftthreetimes~⋋~leg~⋚~leq~≤~leqq~≦~leqslant~⩽~les~⩽~lescc~⪨~lesdot~⩿~lesdoto~⪁~lesdotor~⪃~lesg~⋚︀~lesges~⪓~lessapprox~⪅~lessdot~⋖~lesseqgtr~⋚~lesseqqgtr~⪋~lessgtr~≶~lesssim~≲~lfisht~⥼~lfr~𝔩~lg~≶~lgE~⪑~lhard~↽~lharu~↼~lharul~⥪~lhblk~▄~ljcy~љ~ll~≪~llarr~⇇~llcorner~⌞~llhard~⥫~lltri~◺~lmidot~ŀ~lmoust~⎰~lmoustache~⎰~lnE~≨~lnap~⪉~lnapprox~⪉~lne~⪇~lneq~⪇~lneqq~≨~lnsim~⋦~loang~⟬~loarr~⇽~lobrk~⟦~longleftarrow~⟵~longleftrightarrow~⟷~longmapsto~⟼~longrightarrow~⟶~looparrowleft~↫~looparrowright~↬~lopar~⦅~lopf~𝕝~loplus~⨭~lotimes~⨴~lowbar~_~lozenge~◊~lozf~⧫~lpar~(~lparlt~⦓~lrarr~⇆~lrcorner~⌟~lrhar~⇋~lrhard~⥭~lrtri~⊿~lscr~𝓁~lsh~↰~lsim~≲~lsime~⪍~lsimg~⪏~lsqb~[~lsquor~‚~lstrok~ł~ltcc~⪦~ltcir~⩹~ltdot~⋖~lthree~⋋~ltimes~⋉~ltlarr~⥶~ltquest~⩻~ltrPar~⦖~ltri~◃~ltrie~⊴~ltrif~◂~lurdshar~⥊~luruhar~⥦~lvertneqq~≨︀~lvnE~≨︀~mDDot~∺~male~♂~malt~✠~maltese~✠~map~↦~mapsto~↦~mapstodown~↧~mapstoleft~↤~mapstoup~↥~marker~▮~mcomma~⨩~mcy~м~measuredangle~∡~mfr~𝔪~mho~℧~mid~∣~midast~*~midcir~⫰~minusb~⊟~minusd~∸~minusdu~⨪~mlcp~⫛~mldr~…~mnplus~∓~models~⊧~mopf~𝕞~mp~∓~mscr~𝓂~mstpos~∾~multimap~⊸~mumap~⊸~nGg~⋙̸~nGt~≫⃒~nGtv~≫̸~nLeftarrow~⇍~nLeftrightarrow~⇎~nLl~⋘̸~nLt~≪⃒~nLtv~≪̸~nRightarrow~⇏~nVDash~⊯~nVdash~⊮~nacute~ń~nang~∠⃒~nap~≉~napE~⩰̸~napid~≋̸~napos~ŉ~napprox~≉~natur~♮~natural~♮~naturals~ℕ~nbump~≎̸~nbumpe~≏̸~ncap~⩃~ncaron~ň~ncedil~ņ~ncong~≇~ncongdot~⩭̸~ncup~⩂~ncy~н~neArr~⇗~nearhk~⤤~nearr~↗~nearrow~↗~nedot~≐̸~nequiv~≢~nesear~⤨~nesim~≂̸~nexist~∄~nexists~∄~nfr~𝔫~ngE~≧̸~nge~≱~ngeq~≱~ngeqq~≧̸~ngeqslant~⩾̸~nges~⩾̸~ngsim~≵~ngt~≯~ngtr~≯~nhArr~⇎~nharr~↮~nhpar~⫲~nis~⋼~nisd~⋺~niv~∋~njcy~њ~nlArr~⇍~nlE~≦̸~nlarr~↚~nldr~‥~nle~≰~nleftarrow~↚~nleftrightarrow~↮~nleq~≰~nleqq~≦̸~nleqslant~⩽̸~nles~⩽̸~nless~≮~nlsim~≴~nlt~≮~nltri~⋪~nltrie~⋬~nmid~∤~nopf~𝕟~notinE~⋹̸~notindot~⋵̸~notinva~∉~notinvb~⋷~notinvc~⋶~notni~∌~notniva~∌~notnivb~⋾~notnivc~⋽~npar~∦~nparallel~∦~nparsl~⫽⃥~npart~∂̸~npolint~⨔~npr~⊀~nprcue~⋠~npre~⪯̸~nprec~⊀~npreceq~⪯̸~nrArr~⇏~nrarr~↛~nrarrc~⤳̸~nrarrw~↝̸~nrightarrow~↛~nrtri~⋫~nrtrie~⋭~nsc~⊁~nsccue~⋡~nsce~⪰̸~nscr~𝓃~nshortmid~∤~nshortparallel~∦~nsim~≁~nsime~≄~nsimeq~≄~nsmid~∤~nspar~∦~nsqsube~⋢~nsqsupe~⋣~nsubE~⫅̸~nsube~⊈~nsubset~⊂⃒~nsubseteq~⊈~nsubseteqq~⫅̸~nsucc~⊁~nsucceq~⪰̸~nsup~⊅~nsupE~⫆̸~nsupe~⊉~nsupset~⊃⃒~nsupseteq~⊉~nsupseteqq~⫆̸~ntgl~≹~ntlg~≸~ntriangleleft~⋪~ntrianglelefteq~⋬~ntriangleright~⋫~ntrianglerighteq~⋭~num~#~numero~№~numsp~ ~nvDash~⊭~nvHarr~⤄~nvap~≍⃒~nvdash~⊬~nvge~≥⃒~nvgt~>⃒~nvinfin~⧞~nvlArr~⤂~nvle~≤⃒~nvlt~<⃒~nvltrie~⊴⃒~nvrArr~⤃~nvrtrie~⊵⃒~nvsim~∼⃒~nwArr~⇖~nwarhk~⤣~nwarr~↖~nwarrow~↖~nwnear~⤧~oS~Ⓢ~oast~⊛~ocir~⊚~ocy~о~odash~⊝~odblac~ő~odiv~⨸~odot~⊙~odsold~⦼~ofcir~⦿~ofr~𝔬~ogon~˛~ogt~⧁~ohbar~⦵~ohm~Ω~oint~∮~olarr~↺~olcir~⦾~olcross~⦻~olt~⧀~omacr~ō~omid~⦶~ominus~⊖~oopf~𝕠~opar~⦷~operp~⦹~orarr~↻~ord~⩝~order~ℴ~orderof~ℴ~origof~⊶~oror~⩖~orslope~⩗~orv~⩛~oscr~ℴ~osol~⊘~otimesas~⨶~ovbar~⌽~par~∥~parallel~∥~parsim~⫳~parsl~⫽~pcy~п~percnt~%~period~.~pertenk~‱~pfr~𝔭~phiv~ϕ~phmmat~ℳ~phone~☎~pitchfork~⋔~planck~ℏ~planckh~ℎ~plankv~ℏ~plus~+~plusacir~⨣~plusb~⊞~pluscir~⨢~plusdo~∔~plusdu~⨥~pluse~⩲~plussim~⨦~plustwo~⨧~pm~±~pointint~⨕~popf~𝕡~pr~≺~prE~⪳~prap~⪷~prcue~≼~pre~⪯~prec~≺~precapprox~⪷~preccurlyeq~≼~preceq~⪯~precnapprox~⪹~precneqq~⪵~precnsim~⋨~precsim~≾~primes~ℙ~prnE~⪵~prnap~⪹~prnsim~⋨~profalar~⌮~profline~⌒~profsurf~⌓~propto~∝~prsim~≾~prurel~⊰~pscr~𝓅~puncsp~ ~qfr~𝔮~qint~⨌~qopf~𝕢~qprime~⁗~qscr~𝓆~quaternions~ℍ~quatint~⨖~quest~?~questeq~≟~rAarr~⇛~rAtail~⤜~rBarr~⤏~rHar~⥤~race~∽̱~racute~ŕ~raemptyv~⦳~rangd~⦒~range~⦥~rangle~⟩~rarrap~⥵~rarrb~⇥~rarrbfs~⤠~rarrc~⤳~rarrfs~⤞~rarrhk~↪~rarrlp~↬~rarrpl~⥅~rarrsim~⥴~rarrtl~↣~rarrw~↝~ratail~⤚~ratio~∶~rationals~ℚ~rbarr~⤍~rbbrk~❳~rbrace~}~rbrack~]~rbrke~⦌~rbrksld~⦎~rbrkslu~⦐~rcaron~ř~rcedil~ŗ~rcub~}~rcy~р~rdca~⤷~rdldhar~⥩~rdquor~”~rdsh~↳~realine~ℛ~realpart~ℜ~reals~ℝ~rect~▭~rfisht~⥽~rfr~𝔯~rhard~⇁~rharu~⇀~rharul~⥬~rhov~ϱ~rightarrow~→~rightarrowtail~↣~rightharpoondown~⇁~rightharpoonup~⇀~rightleftarrows~⇄~rightleftharpoons~⇌~rightrightarrows~⇉~rightsquigarrow~↝~rightthreetimes~⋌~ring~˚~risingdotseq~≓~rlarr~⇄~rlhar~⇌~rmoust~⎱~rmoustache~⎱~rnmid~⫮~roang~⟭~roarr~⇾~robrk~⟧~ropar~⦆~ropf~𝕣~roplus~⨮~rotimes~⨵~rpar~)~rpargt~⦔~rppolint~⨒~rrarr~⇉~rscr~𝓇~rsh~↱~rsqb~]~rsquor~’~rthree~⋌~rtimes~⋊~rtri~▹~rtrie~⊵~rtrif~▸~rtriltri~⧎~ruluhar~⥨~rx~℞~sacute~ś~sc~≻~scE~⪴~scap~⪸~sccue~≽~sce~⪰~scedil~ş~scirc~ŝ~scnE~⪶~scnap~⪺~scnsim~⋩~scpolint~⨓~scsim~≿~scy~с~sdotb~⊡~sdote~⩦~seArr~⇘~searhk~⤥~searr~↘~searrow~↘~semi~;~seswar~⤩~setminus~∖~setmn~∖~sext~✶~sfr~𝔰~sfrown~⌢~sharp~♯~shchcy~щ~shcy~ш~shortmid~∣~shortparallel~∥~sigmav~ς~simdot~⩪~sime~≃~simeq~≃~simg~⪞~simgE~⪠~siml~⪝~simlE~⪟~simne~≆~simplus~⨤~simrarr~⥲~slarr~←~smallsetminus~∖~smashp~⨳~smeparsl~⧤~smid~∣~smile~⌣~smt~⪪~smte~⪬~smtes~⪬︀~softcy~ь~sol~/~solb~⧄~solbar~⌿~sopf~𝕤~spadesuit~♠~spar~∥~sqcap~⊓~sqcaps~⊓︀~sqcup~⊔~sqcups~⊔︀~sqsub~⊏~sqsube~⊑~sqsubset~⊏~sqsubseteq~⊑~sqsup~⊐~sqsupe~⊒~sqsupset~⊐~sqsupseteq~⊒~squ~□~square~□~squarf~▪~squf~▪~srarr~→~sscr~𝓈~ssetmn~∖~ssmile~⌣~sstarf~⋆~star~☆~starf~★~straightepsilon~ϵ~straightphi~ϕ~strns~¯~subE~⫅~subdot~⪽~subedot~⫃~submult~⫁~subnE~⫋~subne~⊊~subplus~⪿~subrarr~⥹~subset~⊂~subseteq~⊆~subseteqq~⫅~subsetneq~⊊~subsetneqq~⫋~subsim~⫇~subsub~⫕~subsup~⫓~succ~≻~succapprox~⪸~succcurlyeq~≽~succeq~⪰~succnapprox~⪺~succneqq~⪶~succnsim~⋩~succsim~≿~sung~♪~supE~⫆~supdot~⪾~supdsub~⫘~supedot~⫄~suphsol~⟉~suphsub~⫗~suplarr~⥻~supmult~⫂~supnE~⫌~supne~⊋~supplus~⫀~supset~⊃~supseteq~⊇~supseteqq~⫆~supsetneq~⊋~supsetneqq~⫌~supsim~⫈~supsub~⫔~supsup~⫖~swArr~⇙~swarhk~⤦~swarr~↙~swarrow~↙~swnwar~⤪~target~⌖~tbrk~⎴~tcaron~ť~tcedil~ţ~tcy~т~tdot~⃛~telrec~⌕~tfr~𝔱~therefore~∴~thetav~ϑ~thickapprox~≈~thicksim~∼~thkap~≈~thksim~∼~timesb~⊠~timesbar~⨱~timesd~⨰~tint~∭~toea~⤨~top~⊤~topbot~⌶~topcir~⫱~topf~𝕥~topfork~⫚~tosa~⤩~tprime~‴~triangle~▵~triangledown~▿~triangleleft~◃~trianglelefteq~⊴~triangleq~≜~triangleright~▹~trianglerighteq~⊵~tridot~◬~trie~≜~triminus~⨺~triplus~⨹~trisb~⧍~tritime~⨻~trpezium~⏢~tscr~𝓉~tscy~ц~tshcy~ћ~tstrok~ŧ~twixt~≬~twoheadleftarrow~↞~twoheadrightarrow~↠~uHar~⥣~ubrcy~ў~ubreve~ŭ~ucy~у~udarr~⇅~udblac~ű~udhar~⥮~ufisht~⥾~ufr~𝔲~uharl~↿~uharr~↾~uhblk~▀~ulcorn~⌜~ulcorner~⌜~ulcrop~⌏~ultri~◸~umacr~ū~uogon~ų~uopf~𝕦~uparrow~↑~updownarrow~↕~upharpoonleft~↿~upharpoonright~↾~uplus~⊎~upsi~υ~upuparrows~⇈~urcorn~⌝~urcorner~⌝~urcrop~⌎~uring~ů~urtri~◹~uscr~𝓊~utdot~⋰~utilde~ũ~utri~▵~utrif~▴~uuarr~⇈~uwangle~⦧~vArr~⇕~vBar~⫨~vBarv~⫩~vDash~⊨~vangrt~⦜~varepsilon~ϵ~varkappa~ϰ~varnothing~∅~varphi~ϕ~varpi~ϖ~varpropto~∝~varr~↕~varrho~ϱ~varsigma~ς~varsubsetneq~⊊︀~varsubsetneqq~⫋︀~varsupsetneq~⊋︀~varsupsetneqq~⫌︀~vartheta~ϑ~vartriangleleft~⊲~vartriangleright~⊳~vcy~в~vdash~⊢~vee~∨~veebar~⊻~veeeq~≚~vellip~⋮~verbar~|~vert~|~vfr~𝔳~vltri~⊲~vnsub~⊂⃒~vnsup~⊃⃒~vopf~𝕧~vprop~∝~vrtri~⊳~vscr~𝓋~vsubnE~⫋︀~vsubne~⊊︀~vsupnE~⫌︀~vsupne~⊋︀~vzigzag~⦚~wcirc~ŵ~wedbar~⩟~wedge~∧~wedgeq~≙~wfr~𝔴~wopf~𝕨~wp~℘~wr~≀~wreath~≀~wscr~𝓌~xcap~⋂~xcirc~◯~xcup~⋃~xdtri~▽~xfr~𝔵~xhArr~⟺~xharr~⟷~xlArr~⟸~xlarr~⟵~xmap~⟼~xnis~⋻~xodot~⨀~xopf~𝕩~xoplus~⨁~xotime~⨂~xrArr~⟹~xrarr~⟶~xscr~𝓍~xsqcup~⨆~xuplus~⨄~xutri~△~xvee~⋁~xwedge~⋀~yacy~я~ycirc~ŷ~ycy~ы~yfr~𝔶~yicy~ї~yopf~𝕪~yscr~𝓎~yucy~ю~zacute~ź~zcaron~ž~zcy~з~zdot~ż~zeetrf~ℨ~zfr~𝔷~zhcy~ж~zigrarr~⇝~zopf~𝕫~zscr~𝓏~~AMP~&~COPY~©~GT~>~LT~<~QUOT~"~REG~®', namedReferences["html4"]);
var numericUnicodeMap = {
  0: 65533,
  128: 8364,
  130: 8218,
  131: 402,
  132: 8222,
  133: 8230,
  134: 8224,
  135: 8225,
  136: 710,
  137: 8240,
  138: 352,
  139: 8249,
  140: 338,
  142: 381,
  145: 8216,
  146: 8217,
  147: 8220,
  148: 8221,
  149: 8226,
  150: 8211,
  151: 8212,
  152: 732,
  153: 8482,
  154: 353,
  155: 8250,
  156: 339,
  158: 382,
  159: 376
};
var fromCodePoint = String.fromCodePoint || function(astralCodePoint) {
  return String.fromCharCode(Math.floor((astralCodePoint - 65536) / 1024) + 55296, (astralCodePoint - 65536) % 1024 + 56320);
};
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s2, i = 1, n = arguments.length; i < n; i++) {
      s2 = arguments[i];
      for (var p in s2) if (Object.prototype.hasOwnProperty.call(s2, p))
        t[p] = s2[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var allNamedReferences = __assign(__assign({}, namedReferences), { all: namedReferences.html5 });
var defaultDecodeOptions = {
  scope: "body",
  level: "all"
};
var strict = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g;
var attribute = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g;
var baseDecodeRegExps = {
  xml: {
    strict,
    attribute,
    body: bodyRegExps.xml
  },
  html4: {
    strict,
    attribute,
    body: bodyRegExps.html4
  },
  html5: {
    strict,
    attribute,
    body: bodyRegExps.html5
  }
};
var decodeRegExps = __assign(__assign({}, baseDecodeRegExps), { all: baseDecodeRegExps.html5 });
var fromCharCode = String.fromCharCode;
var outOfBoundsChar = fromCharCode(65533);
function getDecodedEntity(entity, references, isAttribute, isStrict) {
  var decodeResult = entity;
  var decodeEntityLastChar = entity[entity.length - 1];
  if (isAttribute && decodeEntityLastChar === "=") {
    decodeResult = entity;
  } else if (isStrict && decodeEntityLastChar !== ";") {
    decodeResult = entity;
  } else {
    var decodeResultByReference = references[entity];
    if (decodeResultByReference) {
      decodeResult = decodeResultByReference;
    } else if (entity[0] === "&" && entity[1] === "#") {
      var decodeSecondChar = entity[2];
      var decodeCode = decodeSecondChar == "x" || decodeSecondChar == "X" ? parseInt(entity.substr(3), 16) : parseInt(entity.substr(2));
      decodeResult = decodeCode >= 1114111 ? outOfBoundsChar : decodeCode > 65535 ? fromCodePoint(decodeCode) : fromCharCode(numericUnicodeMap[decodeCode] || decodeCode);
    }
  }
  return decodeResult;
}
function decode(text2, _a) {
  var _b = _a === void 0 ? defaultDecodeOptions : _a, _c = _b.level, level = _c === void 0 ? "all" : _c, _d = _b.scope, scope = _d === void 0 ? level === "xml" ? "strict" : "body" : _d;
  if (!text2) {
    return "";
  }
  var decodeRegExp = decodeRegExps[level][scope];
  var references = allNamedReferences[level].entities;
  var isAttribute = scope === "attribute";
  var isStrict = scope === "strict";
  return text2.replace(decodeRegExp, function(entity) {
    return getDecodedEntity(entity, references, isAttribute, isStrict);
  });
}
var root$a = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"></path></svg>`);
function Clipboard($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "2");
  var svg = root$a();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root$9 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"></path></svg>`);
function Reset($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "2");
  var svg = root$9();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root_2$5 = from_html(`<button class="p-1.5 rounded-lg border border-gray-100 dark:border-none dark:bg-gray-850 hover:bg-gray-50 dark:hover:bg-gray-800 transition"><!></button>`);
var root_3$7 = from_html(`<button class="p-1.5 rounded-lg border border-gray-100 dark:border-none dark:bg-gray-850 hover:bg-gray-50 dark:hover:bg-gray-800 transition"><!></button>`);
var root_4$3 = from_html(`<button class="p-1.5 rounded-lg border border-gray-100 dark:border-none dark:bg-gray-850 hover:bg-gray-50 dark:hover:bg-gray-800 transition"><!></button>`);
var root_1$6 = from_html(`<div class=" absolute top-2.5 right-2.5"><div class="flex gap-1"><!> <!> <!></div></div>`);
var root$8 = from_html(`<div><div class="flex h-full max-h-full justify-center items-center"><!></div> <!></div>`);
function SVGPanZoom($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const { saveAs } = fileSaver;
  const i18n = getContext("i18n");
  let className = prop($$props, "className", 8, "");
  let svg = prop($$props, "svg", 8, "");
  let content = prop($$props, "content", 8, "");
  let instance = mutable_source();
  let sceneParentElement = mutable_source();
  let sceneElement = mutable_source();
  const resetPanZoomViewport = () => {
    get(instance).moveTo(0, 0);
    get(instance).zoomAbs(0, 0, 1);
    console.log(get(instance).getTransform());
  };
  const downloadAsSVG = () => {
    const svgBlob = new Blob([svg()], { type: "image/svg+xml" });
    saveAs(svgBlob, `diagram.svg`);
  };
  legacy_pre_effect(() => (get(sceneElement), panzoom$1), () => {
    if (get(sceneElement)) {
      set(instance, panzoom$1(get(sceneElement), { bounds: true, boundsPadding: 0.1, zoomSpeed: 0.065 }));
    }
  });
  legacy_pre_effect_reset();
  init();
  var div = root$8();
  var div_1 = child(div);
  var node = child(div_1);
  html(node, () => (deep_read_state(purify), deep_read_state(svg()), untrack(() => purify.sanitize(svg(), {
    USE_PROFILES: { svg: true, svgFilters: true },
    // allow <svg>, <defs>, <filter>, etc.
    WHOLE_DOCUMENT: false,
    ADD_TAGS: ["style", "foreignObject"],
    // include foreignObject if using HTML labels
    ADD_ATTR: [
      "class",
      "style",
      "id",
      "data-*",
      "viewBox",
      "preserveAspectRatio",
      // markers / arrows
      "markerWidth",
      "markerHeight",
      "markerUnits",
      "refX",
      "refY",
      "orient",
      // hrefs (for gradients, markers, etc.)
      "href",
      "xlink:href",
      // text positioning
      "dominant-baseline",
      "text-anchor",
      // pattern / clip / mask units
      "clipPathUnits",
      "filterUnits",
      "patternUnits",
      "patternContentUnits",
      "maskUnits",
      // a11y niceties
      "role",
      "aria-label",
      "aria-labelledby",
      "aria-hidden",
      "tabindex"
    ],
    SANITIZE_DOM: true
  }))));
  reset(div_1);
  bind_this(div_1, ($$value) => set(sceneElement, $$value), () => get(sceneElement));
  var node_1 = sibling(div_1, 2);
  {
    var consequent = ($$anchor2) => {
      var div_2 = root_1$6();
      var div_3 = child(div_2);
      var node_2 = child(div_3);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Download as SVG"))));
        Tooltip(node_2, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps) => {
            var button = root_2$5();
            var node_3 = child(button);
            Download(node_3, { className: " size-4" });
            reset(button);
            event("click", button, () => {
              downloadAsSVG();
            });
            append($$anchor3, button);
          },
          $$slots: { default: true }
        });
      }
      var node_4 = sibling(node_2, 2);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Reset view"))));
        Tooltip(node_4, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps) => {
            var button_1 = root_3$7();
            var node_5 = child(button_1);
            Reset(node_5, { className: " size-4" });
            reset(button_1);
            event("click", button_1, () => {
              resetPanZoomViewport();
            });
            append($$anchor3, button_1);
          },
          $$slots: { default: true }
        });
      }
      var node_6 = sibling(node_4, 2);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Copy to clipboard"))));
        Tooltip(node_6, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps) => {
            var button_2 = root_4$3();
            var node_7 = child(button_2);
            Clipboard(node_7, { className: " size-4", strokeWidth: "1.5" });
            reset(button_2);
            event("click", button_2, () => {
              copyToClipboard(content());
              toast.success($i18n().t("Copied to clipboard"));
            });
            append($$anchor3, button_2);
          },
          $$slots: { default: true }
        });
      }
      reset(div_3);
      reset(div_2);
      append($$anchor2, div_2);
    };
    if_block(node_1, ($$render) => {
      if (content()) $$render(consequent);
    });
  }
  reset(div);
  bind_this(div, ($$value) => set(sceneParentElement, $$value), () => get(sceneParentElement));
  template_effect(() => set_class(div, 1, `relative ${className() ?? ""}`));
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root$7 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path></svg>`);
function ChevronUpDown($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-4 h-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$7();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root_4$2 = from_html(`<div class="flex gap-2.5 border px-4 py-3 border-red-600/10 bg-red-600/10 rounded-2xl mb-2"> </div>`);
var root_3$6 = from_html(`<div class="p-3"><!> <pre> </pre></div>`);
var root_7$2 = from_html(`<div class="run-code-button bg-none border-none p-0.5 cursor-not-allowed bg-white dark:bg-black"> </div>`);
var root_9 = from_html(`<button class="flex gap-1 items-center run-code-button bg-none border-none transition rounded-md px-1.5 py-0.5 bg-white dark:bg-black"><div> </div></button>`);
var root_10 = from_html(`<button class="save-code-button bg-none border-none transition rounded-md px-1.5 py-0.5 bg-white dark:bg-black"> </button>`);
var root_11$3 = from_html(`<button class="flex gap-1 items-center run-code-button bg-none border-none transition rounded-md px-1.5 py-0.5 bg-white dark:bg-black"><div> </div></button>`);
var root_14$3 = from_html(`<pre class=" hljs p-4 px-5 overflow-x-auto"><code><!></code></pre>`);
var root_15$1 = from_html(`<div class="bg-white dark:bg-black dark:text-white rounded-b-3xl! pt-0.5 pb-3 px-4 flex flex-col gap-2 text-xs"><span class="text-gray-500 italic"> </span></div>`);
var root_18$2 = from_html(`<div class=" "><div class=" text-gray-500 text-sm mb-1"> </div> <div class="text-sm"> </div></div>`);
var root_20$2 = from_html(`<div class=" "><div class=" text-gray-500 text-sm mb-1"> </div> <div> </div></div>`);
var root_22$1 = from_html(`<div class="text-sm"> </div>`);
var root_25$3 = from_html(`<img alt="Output" class=" w-full max-w-[36rem]"/>`);
var root_23$1 = from_html(`<div class="flex flex-col gap-2"></div>`);
var root_21 = from_html(`<div class=" "><div class=" text-gray-500 text-sm mb-1"> </div> <!> <!></div>`);
var root_19 = from_html(`<!> <!>`, 1);
var root_17 = from_html(`<div class="bg-gray-50 dark:bg-black dark:text-white rounded-b-3xl! py-4 px-4 flex flex-col gap-2"><!></div>`);
var root_16$1 = from_html(`<div class="bg-gray-50 dark:bg-black dark:text-white max-w-full overflow-x-auto scrollbar-hidden"></div> <!>`, 1);
var root_5$2 = from_html(`<div class="absolute left-0 right-0 py-2.5 pr-3 text-text-300 pl-4.5 text-xs font-medium dark:text-white"> </div> <div><div class="flex items-center gap-0.5"><button class="flex gap-1 items-center bg-none border-none transition rounded-md px-1.5 py-0.5 bg-white dark:bg-black"><div class=" -translate-y-[0.5px]"><!></div> <div> </div></button> <!> <!> <button class="copy-code-button bg-none border-none transition rounded-md px-1.5 py-0.5 bg-white dark:bg-black"> </button> <!></div></div> <div><div class=" pt-8 bg-white dark:bg-black"></div> <!></div> <!>`, 1);
var root$6 = from_html(`<div><div dir="ltr"><!></div></div>`);
function CodeBlock($$anchor, $$props) {
  push($$props, false);
  const $config = () => store_get(config, "$config", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let id = prop($$props, "id", 8, "");
  let edit = prop($$props, "edit", 8, true);
  let onSave = prop($$props, "onSave", 8, (e) => {
  });
  let onUpdate = prop($$props, "onUpdate", 8, (e) => {
  });
  let onPreview = prop($$props, "onPreview", 8, (e) => {
  });
  let save = prop($$props, "save", 8, false);
  let run = prop($$props, "run", 8, true);
  let preview = prop($$props, "preview", 8, false);
  let collapsed = prop($$props, "collapsed", 12, false);
  let token = prop($$props, "token", 8);
  let lang = prop($$props, "lang", 8, "");
  let code = prop($$props, "code", 12, "");
  let attributes = prop($$props, "attributes", 24, () => ({}));
  let className = prop($$props, "className", 8, "mb-2");
  let editorClassName = prop($$props, "editorClassName", 8, "");
  let stickyButtonsClassName = prop($$props, "stickyButtonsClassName", 8, "top-0");
  let _code = mutable_source("");
  const updateCode = () => {
    set(_code, code());
  };
  let _token = mutable_source(null);
  let renderHTML = mutable_source(null);
  let renderError = mutable_source(null);
  let executing = mutable_source(false);
  let stdout = mutable_source(null);
  let stderr = mutable_source(null);
  let result = mutable_source(null);
  let files = mutable_source(null);
  let copied = mutable_source(false);
  let saved = mutable_source(false);
  const collapseCodeBlock = () => {
    collapsed(!collapsed());
  };
  const saveCode = () => {
    set(saved, true);
    code(get(_code));
    onSave()(code());
    setTimeout(
      () => {
        set(saved, false);
      },
      1e3
    );
  };
  const copyCode = async () => {
    set(copied, true);
    await copyToClipboard(get(_code));
    setTimeout(
      () => {
        set(copied, false);
      },
      1e3
    );
  };
  const previewCode = () => {
    onPreview()(code());
  };
  const checkPythonCode = (str) => {
    const pythonSyntax = [
      "def ",
      "else:",
      "elif ",
      "try:",
      "except:",
      "finally:",
      "yield ",
      "lambda ",
      "assert ",
      "nonlocal ",
      "del ",
      "True",
      "False",
      "None",
      " and ",
      " or ",
      " not ",
      " in ",
      " is ",
      " with "
    ];
    for (let syntax of pythonSyntax) {
      if (str.includes(syntax)) {
        return true;
      }
    }
    return false;
  };
  const executePython = async (code2) => {
    var _a, _b;
    set(result, null);
    set(stdout, null);
    set(stderr, null);
    set(executing, true);
    if (((_b = (_a = $config()) == null ? void 0 : _a.code) == null ? void 0 : _b.engine) === "jupyter") {
      const output = await executeCode(localStorage.token, code2).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (output) {
        if (output["stdout"]) {
          set(stdout, output["stdout"]);
          const stdoutLines = get(stdout).split("\n");
          for (const [idx, line] of stdoutLines.entries()) {
            if (line.startsWith("data:image/png;base64")) {
              if (get(files)) {
                get(files).push({ type: "image/png", data: line });
              } else {
                set(files, [{ type: "image/png", data: line }]);
              }
              if (get(stdout).includes(`${line}
`)) {
                set(stdout, get(stdout).replace(`${line}
`, ``));
              } else if (get(stdout).includes(`${line}`)) {
                set(stdout, get(stdout).replace(`${line}`, ``));
              }
            }
          }
        }
        if (output["result"]) {
          set(result, output["result"]);
          const resultLines = get(result).split("\n");
          for (const [idx, line] of resultLines.entries()) {
            if (line.startsWith("data:image/png;base64")) {
              if (get(files)) {
                get(files).push({ type: "image/png", data: line });
              } else {
                set(files, [{ type: "image/png", data: line }]);
              }
              if (get(result).includes(`${line}
`)) {
                set(result, get(result).replace(`${line}
`, ``));
              } else if (get(result).includes(`${line}`)) {
                set(result, get(result).replace(`${line}`, ``));
              }
            }
          }
        }
        output["stderr"] && set(stderr, output["stderr"]);
      }
      set(executing, false);
    } else {
      set(stderr, "Python code execution is not available. Please configure a backend code execution service.");
      set(executing, false);
    }
  };
  let mermaid = null;
  const renderMermaid = async (code2) => {
    if (!mermaid) {
      mermaid = await initMermaid();
    }
    return await renderMermaidDiagram(mermaid, code2);
  };
  const render = async () => {
    var _a, _b;
    onUpdate()(token());
    if (lang() === "mermaid" && (((_a = token()) == null ? void 0 : _a.raw) ?? "").slice(-4).includes("```")) {
      try {
        set(renderHTML, await renderMermaid(code()));
      } catch (error) {
        console.error("Failed to render mermaid diagram:", error);
        const errorMsg = error instanceof Error ? error.message : String(error);
        set(renderError, $i18n().t("Failed to render diagram") + `: ${errorMsg}`);
        set(renderHTML, null);
      }
    } else if ((lang() === "vega" || lang() === "vega-lite") && (((_b = token()) == null ? void 0 : _b.raw) ?? "").slice(-4).includes("```")) {
      try {
        set(renderHTML, await renderVegaVisualization(code()));
      } catch (error) {
        console.error("Failed to render Vega visualization:", error);
        const errorMsg = error instanceof Error ? error.message : String(error);
        set(renderError, $i18n().t("Failed to render visualization") + `: ${errorMsg}`);
        set(renderHTML, null);
      }
    }
  };
  const onAttributesUpdate = () => {
    var _a;
    if ((_a = attributes()) == null ? void 0 : _a.output) {
      const unescapeHtml2 = (html2) => {
        const textArea = document.createElement("textarea");
        textArea.innerHTML = html2;
        return textArea.value;
      };
      try {
        const unescapedOutput = unescapeHtml2(attributes().output);
        const output = JSON.parse(unescapedOutput);
        set(stdout, output.stdout);
        set(stderr, output.stderr);
        set(result, output.result);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };
  onMount(async () => {
    if (token()) {
      onUpdate()(token());
    }
  });
  legacy_pre_effect(() => deep_read_state(code()), () => {
    if (code()) {
      updateCode();
    }
  });
  legacy_pre_effect(() => (deep_read_state(token()), get(_token)), () => {
    if (token()) {
      if (JSON.stringify(token()) !== JSON.stringify(get(_token))) {
        set(_token, token());
      }
    }
  });
  legacy_pre_effect(() => get(_token), () => {
    if (get(_token)) {
      render();
    }
  });
  legacy_pre_effect(() => deep_read_state(attributes()), () => {
    if (attributes()) {
      onAttributesUpdate();
    }
  });
  legacy_pre_effect_reset();
  init();
  var div = root$6();
  var div_1 = child(div);
  var node = child(div_1);
  {
    var consequent_2 = ($$anchor2) => {
      var fragment = comment();
      var node_1 = first_child(fragment);
      {
        var consequent = ($$anchor3) => {
          SVGPanZoom($$anchor3, {
            className: " rounded-3xl max-h-fit overflow-hidden",
            get svg() {
              return get(renderHTML);
            },
            get content() {
              return get(_token), untrack(() => get(_token).text);
            }
          });
        };
        var alternate = ($$anchor3) => {
          var div_2 = root_3$6();
          var node_2 = child(div_2);
          {
            var consequent_1 = ($$anchor4) => {
              var div_3 = root_4$2();
              var text2 = child(div_3, true);
              reset(div_3);
              template_effect(() => set_text(text2, get(renderError)));
              append($$anchor4, div_3);
            };
            if_block(node_2, ($$render) => {
              if (get(renderError)) $$render(consequent_1);
            });
          }
          var pre = sibling(node_2, 2);
          var text_1 = child(pre, true);
          reset(pre);
          reset(div_2);
          template_effect(() => set_text(text_1, code()));
          append($$anchor3, div_2);
        };
        if_block(node_1, ($$render) => {
          if (get(renderHTML)) $$render(consequent);
          else $$render(alternate, false);
        });
      }
      append($$anchor2, fragment);
    };
    var alternate_5 = ($$anchor2) => {
      var fragment_2 = root_5$2();
      var div_4 = first_child(fragment_2);
      var text_2 = child(div_4, true);
      reset(div_4);
      var div_5 = sibling(div_4, 2);
      var div_6 = child(div_5);
      var button = child(div_6);
      var div_7 = child(button);
      var node_3 = child(div_7);
      ChevronUpDown(node_3, { className: "size-3" });
      reset(div_7);
      var div_8 = sibling(div_7, 2);
      var text_3 = child(div_8, true);
      reset(div_8);
      reset(button);
      var node_4 = sibling(button, 2);
      {
        var consequent_5 = ($$anchor3) => {
          var fragment_3 = comment();
          var node_5 = first_child(fragment_3);
          {
            var consequent_3 = ($$anchor4) => {
              var div_9 = root_7$2();
              var text_4 = child(div_9, true);
              reset(div_9);
              template_effect(($0) => set_text(text_4, $0), [() => ($i18n(), untrack(() => $i18n().t("Running")))]);
              append($$anchor4, div_9);
            };
            var alternate_1 = ($$anchor4) => {
              var fragment_4 = comment();
              var node_6 = first_child(fragment_4);
              {
                var consequent_4 = ($$anchor5) => {
                  var button_1 = root_9();
                  var div_10 = child(button_1);
                  var text_5 = child(div_10, true);
                  reset(div_10);
                  reset(button_1);
                  template_effect(($0) => set_text(text_5, $0), [() => ($i18n(), untrack(() => $i18n().t("Run")))]);
                  event("click", button_1, async () => {
                    code(get(_code));
                    await tick();
                    executePython(code());
                  });
                  append($$anchor5, button_1);
                };
                if_block(
                  node_6,
                  ($$render) => {
                    if (run()) $$render(consequent_4);
                  },
                  true
                );
              }
              append($$anchor4, fragment_4);
            };
            if_block(node_5, ($$render) => {
              if (get(executing)) $$render(consequent_3);
              else $$render(alternate_1, false);
            });
          }
          append($$anchor3, fragment_3);
        };
        if_block(node_4, ($$render) => {
          if ($config(), deep_read_state(lang()), deep_read_state(code()), untrack(() => {
            var _a, _b;
            return (((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_code_execution) ?? true) && (lang().toLowerCase() === "python" || lang().toLowerCase() === "py" || lang() === "" && checkPythonCode(code()));
          })) $$render(consequent_5);
        });
      }
      var node_7 = sibling(node_4, 2);
      {
        var consequent_6 = ($$anchor3) => {
          var button_2 = root_10();
          var text_6 = child(button_2, true);
          reset(button_2);
          template_effect(($0) => set_text(text_6, $0), [
            () => (get(saved), $i18n(), untrack(() => get(saved) ? $i18n().t("Saved") : $i18n().t("Save")))
          ]);
          event("click", button_2, saveCode);
          append($$anchor3, button_2);
        };
        if_block(node_7, ($$render) => {
          if (save()) $$render(consequent_6);
        });
      }
      var button_3 = sibling(node_7, 2);
      var text_7 = child(button_3, true);
      reset(button_3);
      var node_8 = sibling(button_3, 2);
      {
        var consequent_7 = ($$anchor3) => {
          var button_4 = root_11$3();
          var div_11 = child(button_4);
          var text_8 = child(div_11, true);
          reset(div_11);
          reset(button_4);
          template_effect(($0) => set_text(text_8, $0), [() => ($i18n(), untrack(() => $i18n().t("Preview")))]);
          event("click", button_4, previewCode);
          append($$anchor3, button_4);
        };
        if_block(node_8, ($$render) => {
          if (deep_read_state(preview()), deep_read_state(lang()), untrack(() => preview() && ["html", "svg"].includes(lang()))) $$render(consequent_7);
        });
      }
      reset(div_6);
      reset(div_5);
      var div_12 = sibling(div_5, 2);
      var node_9 = sibling(child(div_12), 2);
      {
        var consequent_9 = ($$anchor3) => {
          var fragment_5 = comment();
          var node_10 = first_child(fragment_5);
          {
            var consequent_8 = ($$anchor4) => {
              CodeEditor($$anchor4, {
                get value() {
                  return code();
                },
                get id() {
                  return id();
                },
                get lang() {
                  return lang();
                },
                onSave: () => {
                  saveCode();
                },
                onChange: (value) => {
                  set(_code, value);
                }
              });
            };
            var alternate_2 = ($$anchor4) => {
              var pre_1 = root_14$3();
              var code_1 = child(pre_1);
              var node_11 = child(code_1);
              html(node_11, () => (deep_read_state(HighlightJS), deep_read_state(code()), deep_read_state(lang()), untrack(() => {
                var _a;
                return HighlightJS.highlightAuto(code(), (_a = HighlightJS.getLanguage(lang())) == null ? void 0 : _a.aliases).value || code();
              })));
              reset(code_1);
              reset(pre_1);
              template_effect(() => {
                set_style(pre_1, `border-top-left-radius: 0px; border-top-right-radius: 0px; ${((get(executing) || get(stdout) || get(stderr) || get(result)) && "border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;") ?? ""}`);
                set_class(code_1, 1, `language-${lang() ?? ""} rounded-t-none whitespace-pre text-sm`);
              });
              append($$anchor4, pre_1);
            };
            if_block(node_10, ($$render) => {
              if (edit()) $$render(consequent_8);
              else $$render(alternate_2, false);
            });
          }
          append($$anchor3, fragment_5);
        };
        var alternate_3 = ($$anchor3) => {
          var div_13 = root_15$1();
          var span = child(div_13);
          var text_9 = child(span, true);
          reset(span);
          reset(div_13);
          template_effect(($0) => set_text(text_9, $0), [
            () => ($i18n(), deep_read_state(code()), untrack(() => $i18n().t("{{COUNT}} hidden lines", { COUNT: code().split("\n").length })))
          ]);
          append($$anchor3, div_13);
        };
        if_block(node_9, ($$render) => {
          if (!collapsed()) $$render(consequent_9);
          else $$render(alternate_3, false);
        });
      }
      reset(div_12);
      var node_12 = sibling(div_12, 2);
      {
        var consequent_17 = ($$anchor3) => {
          var fragment_7 = root_16$1();
          var div_14 = first_child(fragment_7);
          var node_13 = sibling(div_14, 2);
          {
            var consequent_16 = ($$anchor4) => {
              var div_15 = root_17();
              var node_14 = child(div_15);
              {
                var consequent_10 = ($$anchor5) => {
                  var div_16 = root_18$2();
                  var div_17 = child(div_16);
                  var text_10 = child(div_17, true);
                  reset(div_17);
                  var div_18 = sibling(div_17, 2);
                  var text_11 = child(div_18, true);
                  reset(div_18);
                  reset(div_16);
                  template_effect(
                    ($0, $1) => {
                      set_text(text_10, $0);
                      set_text(text_11, $1);
                    },
                    [
                      () => ($i18n(), untrack(() => $i18n().t("STDOUT/STDERR"))),
                      () => ($i18n(), untrack(() => $i18n().t("Running...")))
                    ]
                  );
                  append($$anchor5, div_16);
                };
                var alternate_4 = ($$anchor5) => {
                  var fragment_8 = root_19();
                  var node_15 = first_child(fragment_8);
                  {
                    var consequent_11 = ($$anchor6) => {
                      var div_19 = root_20$2();
                      var div_20 = child(div_19);
                      var text_12 = child(div_20, true);
                      reset(div_20);
                      var div_21 = sibling(div_20, 2);
                      var text_13 = child(div_21, true);
                      reset(div_21);
                      reset(div_19);
                      template_effect(
                        ($0, $1) => {
                          set_text(text_12, $0);
                          set_class(div_21, 1, `text-sm font-mono whitespace-pre-wrap ${$1 ?? ""}  overflow-y-auto`);
                          set_text(text_13, get(stdout) || get(stderr));
                        },
                        [
                          () => ($i18n(), untrack(() => $i18n().t("STDOUT/STDERR"))),
                          () => (get(stdout), untrack(() => {
                            var _a, _b;
                            return ((_b = (_a = get(stdout)) == null ? void 0 : _a.split("\n")) == null ? void 0 : _b.length) > 100 ? `max-h-96` : "";
                          }))
                        ]
                      );
                      append($$anchor6, div_19);
                    };
                    if_block(node_15, ($$render) => {
                      if (get(stdout) || get(stderr)) $$render(consequent_11);
                    });
                  }
                  var node_16 = sibling(node_15, 2);
                  {
                    var consequent_15 = ($$anchor6) => {
                      var div_22 = root_21();
                      var div_23 = child(div_22);
                      var text_14 = child(div_23, true);
                      reset(div_23);
                      var node_17 = sibling(div_23, 2);
                      {
                        var consequent_12 = ($$anchor7) => {
                          var div_24 = root_22$1();
                          var text_15 = child(div_24, true);
                          reset(div_24);
                          template_effect(($0) => set_text(text_15, $0), [
                            () => (get(result), untrack(() => `${JSON.stringify(get(result))}`))
                          ]);
                          append($$anchor7, div_24);
                        };
                        if_block(node_17, ($$render) => {
                          if (get(result)) $$render(consequent_12);
                        });
                      }
                      var node_18 = sibling(node_17, 2);
                      {
                        var consequent_14 = ($$anchor7) => {
                          var div_25 = root_23$1();
                          each(div_25, 5, () => get(files), index, ($$anchor8, file) => {
                            var fragment_9 = comment();
                            var node_19 = first_child(fragment_9);
                            {
                              var consequent_13 = ($$anchor9) => {
                                var img = root_25$3();
                                template_effect(() => set_attribute(img, "src", (get(file), untrack(() => get(file).data))));
                                append($$anchor9, img);
                              };
                              if_block(node_19, ($$render) => {
                                if (get(file), untrack(() => get(file).type.startsWith("image"))) $$render(consequent_13);
                              });
                            }
                            append($$anchor8, fragment_9);
                          });
                          reset(div_25);
                          append($$anchor7, div_25);
                        };
                        if_block(node_18, ($$render) => {
                          if (get(files)) $$render(consequent_14);
                        });
                      }
                      reset(div_22);
                      template_effect(($0) => set_text(text_14, $0), [() => ($i18n(), untrack(() => $i18n().t("RESULT")))]);
                      append($$anchor6, div_22);
                    };
                    if_block(node_16, ($$render) => {
                      if (get(result) || get(files)) $$render(consequent_15);
                    });
                  }
                  append($$anchor5, fragment_8);
                };
                if_block(node_14, ($$render) => {
                  if (get(executing)) $$render(consequent_10);
                  else $$render(alternate_4, false);
                });
              }
              reset(div_15);
              append($$anchor4, div_15);
            };
            if_block(node_13, ($$render) => {
              if (get(executing) || get(stdout) || get(stderr) || get(result) || get(files)) $$render(consequent_16);
            });
          }
          template_effect(() => set_attribute(div_14, "id", `plt-canvas-${id() ?? ""}`));
          append($$anchor3, fragment_7);
        };
        if_block(node_12, ($$render) => {
          if (!collapsed()) $$render(consequent_17);
        });
      }
      template_effect(
        ($0, $1) => {
          set_text(text_2, lang());
          set_class(div_5, 1, `sticky ${stickyButtonsClassName() ?? ""} left-0 right-0 py-2 pr-3 flex items-center justify-end w-full z-10 text-xs text-black dark:text-white`);
          set_text(text_3, $0);
          set_text(text_7, $1);
          set_class(div_12, 1, `language-${lang() ?? ""} rounded-t-3xl -mt-9 ${(editorClassName() ? editorClassName() : get(executing) || get(stdout) || get(stderr) || get(result) ? "" : "rounded-b-3xl") ?? ""} overflow-hidden`);
        },
        [
          () => (deep_read_state(collapsed()), $i18n(), untrack(() => collapsed() ? $i18n().t("Expand") : $i18n().t("Collapse"))),
          () => (get(copied), $i18n(), untrack(() => get(copied) ? $i18n().t("Copied") : $i18n().t("Copy")))
        ]
      );
      event("click", button, collapseCodeBlock);
      event("click", button_3, copyCode);
      append($$anchor2, fragment_2);
    };
    if_block(node, ($$render) => {
      if (deep_read_state(lang()), untrack(() => ["mermaid", "vega", "vega-lite"].includes(lang()))) $$render(consequent_2);
      else $$render(alternate_5, false);
    });
  }
  reset(div_1);
  reset(div);
  template_effect(() => {
    set_class(div_1, 1, `relative ${className() ?? ""} flex flex-col rounded-3xl border border-gray-100 dark:border-gray-850 my-0.5`);
    div_1.dir = div_1.dir;
  });
  append($$anchor, div);
  pop();
  $$cleanup();
}
const disableSingleTilde = {
  tokenizer: {
    del(src2) {
      const doubleMatch = /^~~(?=\S)([\s\S]*?\S)~~/.exec(src2);
      if (doubleMatch) {
        return {
          type: "del",
          raw: doubleMatch[0],
          text: doubleMatch[1],
          tokens: this.lexer.inlineTokens(doubleMatch[1])
        };
      }
      const singleMatch = /^~(?=\S)([\s\S]*?\S)~/.exec(src2);
      if (singleMatch) {
        return {
          type: "text",
          raw: singleMatch[0],
          text: singleMatch[0]
          // include both tildes as literal text
        };
      }
      return false;
    }
  }
};
function escapeHtml$1(s2) {
  return s2.replace(
    /[&<>"']/g,
    (c2) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c2]
  );
}
function mentionStart(src2) {
  return src2.indexOf("<");
}
function mentionTokenizer(src2, options = {}) {
  const trigger = options.triggerChar ?? "@";
  const re = new RegExp(`^<\\${trigger}([\\w.\\-:/]+)(?:\\|([^>]*))?>`);
  const m = re.exec(src2);
  if (!m) return;
  const [, id, label] = m;
  return {
    type: "mention",
    raw: m[0],
    triggerChar: trigger,
    id,
    label: label && label.length > 0 ? label : id
  };
}
function mentionRenderer(token, options = {}) {
  const trigger = options.triggerChar ?? "@";
  const cls = options.className ?? "mention";
  const extra = options.extraAttrs ?? {};
  const attrs = Object.entries({
    class: cls,
    "data-type": "mention",
    "data-id": token.id,
    "data-mention-suggestion-char": trigger,
    ...extra
  }).map(([k, v]) => `${k}="${escapeHtml$1(String(v))}"`).join(" ");
  return `<span ${attrs}>${escapeHtml$1(trigger + token.label)}</span>`;
}
function mentionExtension(opts = {}) {
  return {
    name: "mention",
    level: "inline",
    start: mentionStart,
    tokenizer(src2) {
      return mentionTokenizer.call(this, src2, opts);
    },
    renderer(token) {
      return mentionRenderer(token, opts);
    }
  };
}
function KatexRenderer($$anchor, $$props) {
  push($$props, false);
  let content = prop($$props, "content", 8);
  let displayMode = prop($$props, "displayMode", 8, false);
  let renderToString = mutable_source(null);
  onMount(async () => {
    const [katex] = await Promise.all([
      __vitePreload(() => import("./CyKMQRKW.js"), true ? [] : void 0, import.meta.url),
      __vitePreload(() => import("./CUH9EGA7.js"), true ? __vite__mapDeps([0,1]) : void 0, import.meta.url),
      __vitePreload(() => Promise.resolve({}), true ? __vite__mapDeps([2]) : void 0, import.meta.url)
    ]);
    set(renderToString, katex.renderToString);
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      html(node_1, () => (get(renderToString), deep_read_state(content()), deep_read_state(displayMode()), untrack(() => get(renderToString)(content(), { displayMode: displayMode(), throwOnError: false }))));
      append($$anchor2, fragment_1);
    };
    if_block(node, ($$render) => {
      if (get(renderToString)) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_1$5 = from_html(`<button class="text-[10px] w-fit translate-y-[2px] px-2 py-0.5 dark:bg-white/5 dark:text-white/80 dark:hover:text-white bg-gray-50 text-black/80 hover:text-black transition rounded-xl"><span class="line-clamp-1"> </span></button>`);
function Source($$anchor, $$props) {
  push($$props, false);
  let id = prop($$props, "id", 8);
  let title = prop($$props, "title", 8, "N/A");
  let onClick = prop($$props, "onClick", 8, () => {
  });
  function getDomain(url) {
    const domain = url.replace("http://", "").replace("https://", "").split(/[/?#]/)[0];
    if (domain.startsWith("www.")) {
      return domain.slice(4);
    }
    return domain;
  }
  function formattedTitle(title2) {
    if (title2.startsWith("http")) {
      return getDomain(title2);
    }
    return title2;
  }
  const getDisplayTitle = (title2) => {
    if (!title2) return "N/A";
    if (title2.length > 30) {
      return title2.slice(0, 15) + "..." + title2.slice(-10);
    }
    return title2;
  };
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var button = root_1$5();
      var span = child(button);
      var text2 = child(span, true);
      reset(span);
      reset(button);
      template_effect(($0) => set_text(text2, $0), [
        () => (deep_read_state(title()), untrack(() => getDisplayTitle(formattedTitle(decodeURIComponent(title())))))
      ]);
      event("click", button, () => {
        onClick()(id());
      });
      append($$anchor2, button);
    };
    if_block(node, ($$render) => {
      if (title() !== "N/A") $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_3$5 = from_html(`<video class="w-full my-2" title="Video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" controls allowfullscreen=""></video>`, 2);
var root_7$1 = from_html(`<audio class="w-full my-2" title="Audio player" controls></audio>`);
var root_11$2 = from_html(`<iframe class="w-full aspect-video my-2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe>`);
var root_14$2 = from_html(`<iframe class="w-full my-2" title="Embedded content" frameborder="0" sandbox=""></iframe>`);
var root_18$1 = from_html(`<div class="flex flex-col justify-center -space-y-0.5"><div> </div></div>`);
var root_22 = from_html(`<iframe class="w-full my-2" title="Content" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" width="100%"></iframe>`);
var root_24$2 = from_html(`<br/>`);
function HTMLToken($$anchor, $$props) {
  push($$props, false);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  prop($$props, "id", 8);
  let token = prop($$props, "token", 8);
  let html2 = mutable_source(null);
  legacy_pre_effect(() => (deep_read_state(token()), purify), () => {
    var _a;
    if (token().type === "html" && ((_a = token()) == null ? void 0 : _a.text)) {
      set(html2, purify.sanitize(token().text));
    } else {
      set(html2, null);
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_13 = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      {
        var consequent_1 = ($$anchor3) => {
          const video = derived_safe_equal(() => (get(html2), untrack(() => get(html2).match(/<video[^>]*>([\s\S]*?)<\/video>/))));
          const videoSrc = derived_safe_equal(() => (deep_read_state(get(video)), untrack(() => get(video) && get(video)[1])));
          var fragment_2 = comment();
          var node_2 = first_child(fragment_2);
          {
            var consequent = ($$anchor4) => {
              var video_1 = root_3$5();
              template_effect(($0) => set_attribute(video_1, "src", $0), [
                () => (deep_read_state(get(videoSrc)), untrack(() => get(videoSrc).replaceAll("&amp;", "&")))
              ]);
              append($$anchor4, video_1);
            };
            var alternate = ($$anchor4) => {
              var text$1 = text();
              template_effect(() => set_text(text$1, (deep_read_state(token()), untrack(() => token().text))));
              append($$anchor4, text$1);
            };
            if_block(node_2, ($$render) => {
              if (get(videoSrc)) $$render(consequent);
              else $$render(alternate, false);
            });
          }
          append($$anchor3, fragment_2);
        };
        var alternate_10 = ($$anchor3) => {
          var fragment_4 = comment();
          var node_3 = first_child(fragment_4);
          {
            var consequent_3 = ($$anchor4) => {
              const audio = derived_safe_equal(() => (get(html2), untrack(() => get(html2).match(/<audio[^>]*>([\s\S]*?)<\/audio>/))));
              const audioSrc = derived_safe_equal(() => (deep_read_state(get(audio)), untrack(() => get(audio) && get(audio)[1])));
              var fragment_5 = comment();
              var node_4 = first_child(fragment_5);
              {
                var consequent_2 = ($$anchor5) => {
                  var audio_1 = root_7$1();
                  template_effect(($0) => set_attribute(audio_1, "src", $0), [
                    () => (deep_read_state(get(audioSrc)), untrack(() => get(audioSrc).replaceAll("&amp;", "&")))
                  ]);
                  append($$anchor5, audio_1);
                };
                var alternate_1 = ($$anchor5) => {
                  var text_1 = text();
                  template_effect(() => set_text(text_1, (deep_read_state(token()), untrack(() => token().text))));
                  append($$anchor5, text_1);
                };
                if_block(node_4, ($$render) => {
                  if (get(audioSrc)) $$render(consequent_2);
                  else $$render(alternate_1, false);
                });
              }
              append($$anchor4, fragment_5);
            };
            var alternate_9 = ($$anchor4) => {
              var fragment_7 = comment();
              var node_5 = first_child(fragment_7);
              {
                var consequent_5 = ($$anchor5) => {
                  const match = derived_safe_equal(() => (deep_read_state(token()), untrack(() => token().text.match(/<iframe\s+[^>]*src="https:\/\/www\.youtube\.com\/embed\/([a-zA-Z0-9_-]{11})(?:\?[^"]*)?"[^>]*><\/iframe>/))));
                  const ytId = derived_safe_equal(() => (deep_read_state(get(match)), untrack(() => get(match) && get(match)[1])));
                  var fragment_8 = comment();
                  var node_6 = first_child(fragment_8);
                  {
                    var consequent_4 = ($$anchor6) => {
                      var iframe = root_11$2();
                      template_effect(() => set_attribute(iframe, "src", `https://www.youtube.com/embed/${get(ytId)}`));
                      append($$anchor6, iframe);
                    };
                    if_block(node_6, ($$render) => {
                      if (get(ytId)) $$render(consequent_4);
                    });
                  }
                  append($$anchor5, fragment_8);
                };
                var alternate_8 = ($$anchor5) => {
                  var fragment_9 = comment();
                  var node_7 = first_child(fragment_9);
                  {
                    var consequent_7 = ($$anchor6) => {
                      const match = derived_safe_equal(() => (deep_read_state(token()), untrack(() => token().text.match(/<iframe\s+[^>]*src="([^"]+)"[^>]*><\/iframe>/))));
                      const iframeSrc = derived_safe_equal(() => (deep_read_state(get(match)), untrack(() => get(match) && get(match)[1])));
                      var fragment_10 = comment();
                      var node_8 = first_child(fragment_10);
                      {
                        var consequent_6 = ($$anchor7) => {
                          var iframe_1 = root_14$2();
                          template_effect(() => set_attribute(iframe_1, "src", get(iframeSrc)));
                          event("load", iframe_1, (e) => {
                            try {
                              e.currentTarget.style.height = e.currentTarget.contentWindow.document.body.scrollHeight + 20 + "px";
                            } catch {
                            }
                          });
                          append($$anchor7, iframe_1);
                        };
                        var alternate_2 = ($$anchor7) => {
                          var text_2 = text();
                          template_effect(() => set_text(text_2, (deep_read_state(token()), untrack(() => token().text))));
                          append($$anchor7, text_2);
                        };
                        if_block(node_8, ($$render) => {
                          if (get(iframeSrc)) $$render(consequent_6);
                          else $$render(alternate_2, false);
                        });
                      }
                      append($$anchor6, fragment_10);
                    };
                    var alternate_7 = ($$anchor6) => {
                      var fragment_12 = comment();
                      var node_9 = first_child(fragment_12);
                      {
                        var consequent_9 = ($$anchor7) => {
                          const match = derived_safe_equal(() => (deep_read_state(token()), untrack(() => token().text.match(/<status title="([^"]+)" done="(true|false)" ?\/?>/))));
                          const statusTitle = derived_safe_equal(() => (deep_read_state(get(match)), untrack(() => get(match) && get(match)[1])));
                          const statusDone = derived_safe_equal(() => (deep_read_state(get(match)), untrack(() => get(match) && get(match)[2] === "true")));
                          var fragment_13 = comment();
                          var node_10 = first_child(fragment_13);
                          {
                            var consequent_8 = ($$anchor8) => {
                              var div = root_18$1();
                              var div_1 = child(div);
                              var text_3 = child(div_1, true);
                              reset(div_1);
                              reset(div);
                              template_effect(() => {
                                set_class(div_1, 1, `${get(statusDone) === false ? "shimmer" : ""} text-gray-500 dark:text-gray-500 line-clamp-1 text-wrap`);
                                set_text(text_3, get(statusTitle));
                              });
                              append($$anchor8, div);
                            };
                            var alternate_3 = ($$anchor8) => {
                              var text_4 = text();
                              template_effect(() => set_text(text_4, (deep_read_state(token()), untrack(() => token().text))));
                              append($$anchor8, text_4);
                            };
                            if_block(node_10, ($$render) => {
                              if (get(statusTitle)) $$render(consequent_8);
                              else $$render(alternate_3, false);
                            });
                          }
                          append($$anchor7, fragment_13);
                        };
                        var alternate_6 = ($$anchor7) => {
                          var fragment_15 = comment();
                          var node_11 = first_child(fragment_15);
                          {
                            var consequent_11 = ($$anchor8) => {
                              const match = derived_safe_equal(() => (deep_read_state(token()), untrack(() => token().text.match(/<file type="html" id="([^"]+)"/))));
                              const fileId = derived_safe_equal(() => (deep_read_state(get(match)), untrack(() => get(match) && get(match)[1])));
                              var fragment_16 = comment();
                              var node_12 = first_child(fragment_16);
                              {
                                var consequent_10 = ($$anchor9) => {
                                  var iframe_2 = root_22();
                                  template_effect(() => {
                                    set_attribute(iframe_2, "src", `${WEBUI_BASE_URL}/api/v1/files/${get(fileId)}/content/html`);
                                    set_attribute(iframe_2, "sandbox", `allow-scripts allow-downloads${($settings(), untrack(() => {
                                      var _a;
                                      return ((_a = $settings()) == null ? void 0 : _a.iframeSandboxAllowForms) ?? false ? " allow-forms" : "";
                                    })) ?? ""}${($settings(), untrack(() => {
                                      var _a;
                                      return ((_a = $settings()) == null ? void 0 : _a.iframeSandboxAllowSameOrigin) ?? false ? " allow-same-origin" : "";
                                    })) ?? ""}`);
                                  });
                                  event("load", iframe_2, (e) => {
                                    try {
                                      e.currentTarget.style.height = e.currentTarget.contentWindow.document.body.scrollHeight + 20 + "px";
                                    } catch {
                                    }
                                  });
                                  append($$anchor9, iframe_2);
                                };
                                if_block(node_12, ($$render) => {
                                  if (get(fileId)) $$render(consequent_10);
                                });
                              }
                              append($$anchor8, fragment_16);
                            };
                            var alternate_5 = ($$anchor8) => {
                              var fragment_17 = comment();
                              var node_13 = first_child(fragment_17);
                              {
                                var consequent_12 = ($$anchor9) => {
                                  var br = root_24$2();
                                  append($$anchor9, br);
                                };
                                var alternate_4 = ($$anchor9) => {
                                  var text_5 = text();
                                  template_effect(() => set_text(text_5, (deep_read_state(token()), untrack(() => token().text))));
                                  append($$anchor9, text_5);
                                };
                                if_block(
                                  node_13,
                                  ($$render) => {
                                    if (deep_read_state(token()), untrack(() => token().text.trim().match(/^<br\s*\/?>$/i))) $$render(consequent_12);
                                    else $$render(alternate_4, false);
                                  },
                                  true
                                );
                              }
                              append($$anchor8, fragment_17);
                            };
                            if_block(
                              node_11,
                              ($$render) => {
                                if (deep_read_state(token()), untrack(() => token().text.includes(`<file type="html"`))) $$render(consequent_11);
                                else $$render(alternate_5, false);
                              },
                              true
                            );
                          }
                          append($$anchor7, fragment_15);
                        };
                        if_block(
                          node_9,
                          ($$render) => {
                            if (deep_read_state(token()), untrack(() => token().text && token().text.includes("<status"))) $$render(consequent_9);
                            else $$render(alternate_6, false);
                          },
                          true
                        );
                      }
                      append($$anchor6, fragment_12);
                    };
                    if_block(
                      node_7,
                      ($$render) => {
                        if (deep_read_state(token()), untrack(() => token().text && token().text.includes("<iframe"))) $$render(consequent_7);
                        else $$render(alternate_7, false);
                      },
                      true
                    );
                  }
                  append($$anchor5, fragment_9);
                };
                if_block(
                  node_5,
                  ($$render) => {
                    if (deep_read_state(token()), untrack(() => token().text && token().text.match(/<iframe\s+[^>]*src="https:\/\/www\.youtube\.com\/embed\/([a-zA-Z0-9_-]{11})(?:\?[^"]*)?"[^>]*><\/iframe>/))) $$render(consequent_5);
                    else $$render(alternate_8, false);
                  },
                  true
                );
              }
              append($$anchor4, fragment_7);
            };
            if_block(
              node_3,
              ($$render) => {
                if (get(html2), untrack(() => get(html2) && get(html2).includes("<audio"))) $$render(consequent_3);
                else $$render(alternate_9, false);
              },
              true
            );
          }
          append($$anchor3, fragment_4);
        };
        if_block(node_1, ($$render) => {
          if (get(html2), untrack(() => get(html2) && get(html2).includes("<video"))) $$render(consequent_1);
          else $$render(alternate_10, false);
        });
      }
      append($$anchor2, fragment_1);
    };
    if_block(node, ($$render) => {
      if (deep_read_state(token()), untrack(() => token().type === "html")) $$render(consequent_13);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_3$4 = from_html(`<span> </span>`);
function TextToken($$anchor, $$props) {
  push($$props, false);
  let token = prop($$props, "token", 8);
  let done = prop($$props, "done", 8, true);
  let texts = mutable_source([]);
  legacy_pre_effect(() => deep_read_state(token()), () => {
    var _a;
    set(texts, (((_a = token()) == null ? void 0 : _a.raw) ?? "").split(" "));
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var text_1 = text();
      template_effect(() => set_text(text_1, (deep_read_state(token()), untrack(() => {
        var _a;
        return (_a = token()) == null ? void 0 : _a.raw;
      }))));
      append($$anchor2, text_1);
    };
    var alternate = ($$anchor2) => {
      var fragment_2 = comment();
      var node_1 = first_child(fragment_2);
      each(node_1, 1, () => get(texts), index, ($$anchor3, text2) => {
        var span = root_3$4();
        var text_2 = child(span);
        reset(span);
        template_effect(() => set_text(text_2, `${get(text2) ?? ""} `));
        transition(3, span, () => fade, () => ({ duration: 100 }));
        append($$anchor3, span);
      });
      append($$anchor2, fragment_2);
    };
    if_block(node, ($$render) => {
      if (done()) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_1$4 = from_html(`<code class="codespan cursor-pointer"> </code>`);
var root_2$4 = from_html(`<code class="codespan cursor-pointer"> </code>`);
function CodespanToken($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let token = prop($$props, "token", 8);
  let done = prop($$props, "done", 8, true);
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var code = root_1$4();
      var text2 = child(code, true);
      reset(code);
      template_effect(($0) => set_text(text2, $0), [
        () => (deep_read_state(unescapeHtml), deep_read_state(token()), untrack(() => unescapeHtml(token().text)))
      ]);
      event("click", code, () => {
        copyToClipboard(unescapeHtml(token().text));
        toast.success($i18n().t("Copied to clipboard"));
      });
      append($$anchor2, code);
    };
    var alternate = ($$anchor2) => {
      var code_1 = root_2$4();
      var text_1 = child(code_1, true);
      reset(code_1);
      template_effect(($0) => set_text(text_1, $0), [
        () => (deep_read_state(unescapeHtml), deep_read_state(token()), untrack(() => unescapeHtml(token().text)))
      ]);
      transition(3, code_1, () => fade, () => ({ duration: 100 }));
      event("click", code_1, () => {
        copyToClipboard(unescapeHtml(token().text));
        toast.success($i18n().t("Copied to clipboard"));
      });
      append($$anchor2, code_1);
    };
    if_block(node, ($$render) => {
      if (done()) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_2$3 = from_html(`<div><span class="relative flex size-2"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span> <span class="relative inline-flex rounded-full size-2 bg-green-500"></span></span></div> <span class="text-xs"> </span>`, 1);
var root_3$3 = from_html(`<div><span class="relative flex size-2"><span class="relative inline-flex rounded-full size-2 bg-gray-500"></span></span></div> <span class="text-xs"> </span>`, 1);
var root_1$3 = from_html(`<div class=" flex gap-3.5 w-full py-3 px-3 items-center"><div class=" items-center flex shrink-0"><img class=" size-12 object-cover rounded-xl" alt="profile"/></div> <div class=" flex flex-col w-full flex-1"><div class="mb-0.5 font-medium line-clamp-1 pr-2"> </div> <div class=" flex items-center gap-2"><!></div></div></div>`);
function UserStatus($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let user2 = prop($$props, "user", 8, null);
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_1 = ($$anchor2) => {
      var div = root_1$3();
      var div_1 = child(div);
      var img = child(div_1);
      reset(div_1);
      var div_2 = sibling(div_1, 2);
      var div_3 = child(div_2);
      var text2 = child(div_3, true);
      reset(div_3);
      var div_4 = sibling(div_3, 2);
      var node_1 = child(div_4);
      {
        var consequent = ($$anchor3) => {
          var fragment_1 = root_2$3();
          var span = sibling(first_child(fragment_1), 2);
          var text_1 = child(span, true);
          reset(span);
          template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("Active")))]);
          append($$anchor3, fragment_1);
        };
        var alternate = ($$anchor3) => {
          var fragment_2 = root_3$3();
          var span_1 = sibling(first_child(fragment_2), 2);
          var text_2 = child(span_1, true);
          reset(span_1);
          template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Away")))]);
          append($$anchor3, fragment_2);
        };
        if_block(node_1, ($$render) => {
          if (deep_read_state(user2()), untrack(() => {
            var _a;
            return (_a = user2()) == null ? void 0 : _a.active;
          })) $$render(consequent);
          else $$render(alternate, false);
        });
      }
      reset(div_4);
      reset(div_2);
      reset(div);
      template_effect(() => {
        set_attribute(img, "src", (deep_read_state(WEBUI_API_BASE_URL), deep_read_state(user2()), untrack(() => {
          var _a;
          return `${WEBUI_API_BASE_URL}/users/${(_a = user2()) == null ? void 0 : _a.id}/profile/image`;
        })));
        set_text(text2, (deep_read_state(user2()), untrack(() => user2().name)));
      });
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (user2()) $$render(consequent_1);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
function UserStatusLinkPreview($$anchor, $$props) {
  push($$props, false);
  getContext("i18n");
  let id = prop($$props, "id", 8, null);
  let side = prop($$props, "side", 8, "top");
  let align = prop($$props, "align", 8, "start");
  let sideOffset = prop($$props, "sideOffset", 8, 6);
  let user2 = mutable_source(null);
  onMount(async () => {
    if (id()) {
      set(user2, await getUserById(localStorage.token, id()).catch((error) => {
        console.error("Error fetching user by ID:", error);
        return null;
      }));
    }
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      Link_preview_content($$anchor2, {
        class: "w-full max-w-[260px] rounded-2xl border border-gray-100  dark:border-gray-800 z-[99999] bg-white dark:bg-gray-850 dark:text-white shadow-lg transition",
        get side() {
          return side();
        },
        get align() {
          return align();
        },
        get sideOffset() {
          return sideOffset();
        },
        children: ($$anchor3, $$slotProps) => {
          UserStatus($$anchor3, {
            get user() {
              return get(user2);
            }
          });
        },
        $$slots: { default: true }
      });
    };
    if_block(node, ($$render) => {
      if (get(user2)) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_2$2 = from_html(`<span class="mention"> </span>`);
var root_1$2 = from_html(`<!> <!>`, 1);
function MentionToken($$anchor, $$props) {
  push($$props, false);
  const $channels = () => store_get(channels, "$channels", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $models = () => store_get(models, "$models", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let token = prop($$props, "token", 8);
  let triggerChar = mutable_source("");
  let label = mutable_source("");
  let idType = mutable_source(null);
  let id = mutable_source("");
  const init$1 = () => {
    var _a, _b, _c;
    const _id = (_a = token()) == null ? void 0 : _a.id;
    const parts = _id == null ? void 0 : _id.split(":");
    if (parts) {
      set(idType, parts[0]);
      set(
        id,
        parts.slice(1).join(":")
        // in case id contains ':'
      );
    } else {
      set(idType, null);
      set(id, _id);
    }
    set(label, ((_b = token()) == null ? void 0 : _b.label) ?? get(id));
    set(triggerChar, ((_c = token()) == null ? void 0 : _c.triggerChar) ?? "@");
    if (get(triggerChar) === "#") {
      if (get(idType) === "C") {
        const channel = $channels().find((c2) => c2.id === get(id));
        if (channel) {
          set(label, channel.name);
        } else {
          set(label, $i18n().t("Unknown"));
        }
      } else if (get(idType) === "T") ;
    } else if (get(triggerChar) === "@") {
      if (get(idType) === "U") ;
      else if (get(idType) === "M") {
        const model = $models().find((m) => m.id === get(id));
        if (model) {
          set(label, model.name);
        } else {
          set(label, $i18n().t("Unknown"));
        }
      }
    }
  };
  legacy_pre_effect(() => deep_read_state(token()), () => {
    if (token()) {
      init$1();
    }
  });
  legacy_pre_effect_reset();
  init();
  Link_preview($$anchor, {
    openDelay: (
      // split by : and take first part as idType and second part as id
      // in case id contains ':'
      // Channel
      // Thread
      // User
      // Model
      0
    ),
    closeDelay: 0,
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$2();
      var node = first_child(fragment_1);
      Link_preview_trigger(node, {
        class: " cursor-pointer no-underline! font-normal! ",
        children: ($$anchor3, $$slotProps2) => {
          var span = root_2$2();
          var text2 = child(span);
          reset(span);
          template_effect(() => set_text(text2, `${get(triggerChar) ?? ""}${get(label) ?? ""}`));
          event("click", span, async () => {
            if (get(triggerChar) === "@") {
              if (get(idType) === "U") {
                console.log("Clicked user mention", get(id));
              } else if (get(idType) === "M") {
                console.log("Clicked model mention", get(id));
                await goto(`/?model=${get(id)}`);
              }
            } else if (get(triggerChar) === "#") {
              if (get(idType) === "C") {
                if ($channels().find((c2) => c2.id === get(id))) {
                  await goto(`/channels/${get(id)}`);
                }
              } else if (get(idType) === "T") ;
            } else {
              console.log("Clicked mention", get(id));
            }
          });
          append($$anchor3, span);
        },
        $$slots: { default: true }
      });
      var node_1 = sibling(node, 2);
      {
        var consequent = ($$anchor3) => {
          UserStatusLinkPreview($$anchor3, {
            get id() {
              return get(id);
            }
          });
        };
        if_block(node_1, ($$render) => {
          if (get(triggerChar) === "@" && get(idType) === "U") $$render(consequent);
        });
      }
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  pop();
  $$cleanup();
}
var root_4$1 = from_html(`<button class="text-[10px] w-fit translate-y-[2px] px-2 py-0.5 dark:bg-white/5 dark:text-white/80 dark:hover:text-white bg-gray-50 text-black/80 hover:text-black transition rounded-xl"><span class="line-clamp-1"> <span class="dark:text-white/50 text-black/50"> </span></span></button>`);
var root_6 = from_html(`<div><!></div>`);
var root_5$1 = from_html(`<div class="bg-gray-50 dark:bg-gray-850 rounded-xl p-1 cursor-pointer"></div>`);
var root_3$2 = from_html(`<!> <!>`, 1);
function SourceToken($$anchor, $$props) {
  push($$props, false);
  prop($$props, "id", 8);
  let token = prop($$props, "token", 8);
  let sourceIds = prop($$props, "sourceIds", 24, () => []);
  let onClick = prop($$props, "onClick", 8, () => {
  });
  let containerElement;
  let openPreview = mutable_source(false);
  function getDomain(url) {
    const domain = url.replace("http://", "").replace("https://", "").split(/[/?#]/)[0];
    if (domain.startsWith("www.")) {
      return domain.slice(4);
    }
    return domain;
  }
  function formattedTitle(title) {
    if (title.startsWith("http")) {
      return getDomain(title);
    }
    return title;
  }
  const getDisplayTitle = (title) => {
    if (!title) return "N/A";
    if (title.length > 30) {
      return title.slice(0, 15) + "..." + title.slice(-10);
    }
    return title;
  };
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      {
        let $0 = derived_safe_equal(() => (deep_read_state(token()), untrack(() => token().ids[0] - 1)));
        Source($$anchor2, {
          get id() {
            return get($0);
          },
          get title() {
            return deep_read_state(sourceIds()), deep_read_state(token()), untrack(() => sourceIds()[token().ids[0] - 1]);
          },
          get onClick() {
            return onClick();
          }
        });
      }
    };
    var alternate = ($$anchor2) => {
      Link_preview($$anchor2, {
        openDelay: 0,
        get open() {
          return get(openPreview);
        },
        set open($$value) {
          set(openPreview, $$value);
        },
        children: ($$anchor3, $$slotProps) => {
          var fragment_3 = root_3$2();
          var node_1 = first_child(fragment_3);
          Link_preview_trigger(node_1, {
            children: ($$anchor4, $$slotProps2) => {
              var button = root_4$1();
              var span = child(button);
              var text2 = child(span);
              var span_1 = sibling(text2);
              var text_1 = child(span_1);
              reset(span_1);
              reset(span);
              reset(button);
              template_effect(
                ($0) => {
                  set_text(text2, `${$0 ?? ""} `);
                  set_text(text_1, `+${(deep_read_state(token()), untrack(() => {
                    var _a;
                    return (((_a = token()) == null ? void 0 : _a.ids) ?? []).length - 1;
                  })) ?? ""}`);
                },
                [
                  () => (deep_read_state(sourceIds()), deep_read_state(token()), untrack(() => getDisplayTitle(formattedTitle(decodeURIComponent(sourceIds()[token().ids[0] - 1])))))
                ]
              );
              event("click", button, () => {
                set(openPreview, !get(openPreview));
              });
              append($$anchor4, button);
            },
            $$slots: { default: true }
          });
          var node_2 = sibling(node_1, 2);
          Link_preview_content(node_2, {
            class: "z-[999]",
            align: "start",
            strategy: "fixed",
            sideOffset: 6,
            get el() {
              return containerElement;
            },
            children: ($$anchor4, $$slotProps2) => {
              var div = root_5$1();
              each(div, 5, () => (deep_read_state(token()), untrack(() => token().ids)), index, ($$anchor5, sourceId) => {
                var div_1 = root_6();
                var node_3 = child(div_1);
                {
                  let $0 = derived_safe_equal(() => get(sourceId) - 1);
                  Source(node_3, {
                    get id() {
                      return get($0);
                    },
                    get title() {
                      return deep_read_state(sourceIds()), get(sourceId), untrack(() => sourceIds()[get(sourceId) - 1]);
                    },
                    get onClick() {
                      return onClick();
                    }
                  });
                }
                reset(div_1);
                append($$anchor5, div_1);
              });
              reset(div);
              append($$anchor4, div);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_3);
        },
        $$slots: { default: true },
        $$legacy: true
      });
    };
    if_block(node, ($$render) => {
      if (deep_read_state(token()), untrack(() => {
        var _a;
        return (((_a = token()) == null ? void 0 : _a.ids) ?? []).length == 1;
      })) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_7 = from_html(`<a target="_blank" rel="nofollow"><!></a>`);
var root_8 = from_html(`<a target="_blank" rel="nofollow"> </a>`);
var root_12$1 = from_html(`<strong><!></strong>`);
var root_14$1 = from_html(`<em><!></em>`);
var root_18 = from_html(`<br/>`);
var root_20$1 = from_html(`<del><!></del>`);
var root_25$2 = from_html(`<iframe width="100%" frameborder="0"></iframe>`);
function MarkdownInlineTokens($$anchor, $$props) {
  push($$props, false);
  getContext("i18n");
  let id = prop($$props, "id", 8);
  let done = prop($$props, "done", 8, true);
  let tokens = prop($$props, "tokens", 8);
  let sourceIds = prop($$props, "sourceIds", 24, () => []);
  let onSourceClick = prop($$props, "onSourceClick", 8, () => {
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  each(node, 1, tokens, index, ($$anchor2, token) => {
    var fragment_1 = comment();
    var node_1 = first_child(fragment_1);
    {
      var consequent = ($$anchor3) => {
        var text$1 = text();
        template_effect(($0) => set_text(text$1, $0), [
          () => (deep_read_state(unescapeHtml), get(token), untrack(() => unescapeHtml(get(token).text)))
        ]);
        append($$anchor3, text$1);
      };
      var alternate_14 = ($$anchor3) => {
        var fragment_3 = comment();
        var node_2 = first_child(fragment_3);
        {
          var consequent_1 = ($$anchor4) => {
            HTMLToken($$anchor4, {
              get id() {
                return id();
              },
              get token() {
                return get(token);
              },
              get onSourceClick() {
                return onSourceClick();
              }
            });
          };
          var alternate_13 = ($$anchor4) => {
            var fragment_5 = comment();
            var node_3 = first_child(fragment_5);
            {
              var consequent_3 = ($$anchor5) => {
                var fragment_6 = comment();
                var node_4 = first_child(fragment_6);
                {
                  var consequent_2 = ($$anchor6) => {
                    var a2 = root_7();
                    var node_5 = child(a2);
                    {
                      let $0 = derived_safe_equal(() => `${id()}-a`);
                      MarkdownInlineTokens(node_5, {
                        get id() {
                          return get($0);
                        },
                        get tokens() {
                          return get(token), untrack(() => get(token).tokens);
                        },
                        get onSourceClick() {
                          return onSourceClick();
                        },
                        get done() {
                          return done();
                        }
                      });
                    }
                    reset(a2);
                    template_effect(() => {
                      set_attribute(a2, "href", (get(token), untrack(() => get(token).href)));
                      set_attribute(a2, "title", (get(token), untrack(() => get(token).title)));
                    });
                    append($$anchor6, a2);
                  };
                  var alternate = ($$anchor6) => {
                    var a_1 = root_8();
                    var text_1 = child(a_1, true);
                    reset(a_1);
                    template_effect(() => {
                      set_attribute(a_1, "href", (get(token), untrack(() => get(token).href)));
                      set_attribute(a_1, "title", (get(token), untrack(() => get(token).title)));
                      set_text(text_1, (get(token), untrack(() => get(token).text)));
                    });
                    append($$anchor6, a_1);
                  };
                  if_block(node_4, ($$render) => {
                    if (get(token), untrack(() => get(token).tokens)) $$render(consequent_2);
                    else $$render(alternate, false);
                  });
                }
                append($$anchor5, fragment_6);
              };
              var alternate_12 = ($$anchor5) => {
                var fragment_7 = comment();
                var node_6 = first_child(fragment_7);
                {
                  var consequent_4 = ($$anchor6) => {
                    Image($$anchor6, {
                      get src() {
                        return get(token), untrack(() => get(token).href);
                      },
                      get alt() {
                        return get(token), untrack(() => get(token).text);
                      }
                    });
                  };
                  var alternate_11 = ($$anchor6) => {
                    var fragment_9 = comment();
                    var node_7 = first_child(fragment_9);
                    {
                      var consequent_5 = ($$anchor7) => {
                        var strong = root_12$1();
                        var node_8 = child(strong);
                        {
                          let $0 = derived_safe_equal(() => `${id()}-strong`);
                          MarkdownInlineTokens(node_8, {
                            get id() {
                              return get($0);
                            },
                            get tokens() {
                              return get(token), untrack(() => get(token).tokens);
                            },
                            get onSourceClick() {
                              return onSourceClick();
                            }
                          });
                        }
                        reset(strong);
                        append($$anchor7, strong);
                      };
                      var alternate_10 = ($$anchor7) => {
                        var fragment_10 = comment();
                        var node_9 = first_child(fragment_10);
                        {
                          var consequent_6 = ($$anchor8) => {
                            var em = root_14$1();
                            var node_10 = child(em);
                            {
                              let $0 = derived_safe_equal(() => `${id()}-em`);
                              MarkdownInlineTokens(node_10, {
                                get id() {
                                  return get($0);
                                },
                                get tokens() {
                                  return get(token), untrack(() => get(token).tokens);
                                },
                                get onSourceClick() {
                                  return onSourceClick();
                                }
                              });
                            }
                            reset(em);
                            append($$anchor8, em);
                          };
                          var alternate_9 = ($$anchor8) => {
                            var fragment_11 = comment();
                            var node_11 = first_child(fragment_11);
                            {
                              var consequent_7 = ($$anchor9) => {
                                CodespanToken($$anchor9, {
                                  get token() {
                                    return get(token);
                                  },
                                  get done() {
                                    return done();
                                  }
                                });
                              };
                              var alternate_8 = ($$anchor9) => {
                                var fragment_13 = comment();
                                var node_12 = first_child(fragment_13);
                                {
                                  var consequent_8 = ($$anchor10) => {
                                    var br = root_18();
                                    append($$anchor10, br);
                                  };
                                  var alternate_7 = ($$anchor10) => {
                                    var fragment_14 = comment();
                                    var node_13 = first_child(fragment_14);
                                    {
                                      var consequent_9 = ($$anchor11) => {
                                        var del = root_20$1();
                                        var node_14 = child(del);
                                        {
                                          let $0 = derived_safe_equal(() => `${id()}-del`);
                                          MarkdownInlineTokens(node_14, {
                                            get id() {
                                              return get($0);
                                            },
                                            get tokens() {
                                              return get(token), untrack(() => get(token).tokens);
                                            },
                                            get onSourceClick() {
                                              return onSourceClick();
                                            }
                                          });
                                        }
                                        reset(del);
                                        append($$anchor11, del);
                                      };
                                      var alternate_6 = ($$anchor11) => {
                                        var fragment_15 = comment();
                                        var node_15 = first_child(fragment_15);
                                        {
                                          var consequent_11 = ($$anchor12) => {
                                            var fragment_16 = comment();
                                            var node_16 = first_child(fragment_16);
                                            {
                                              var consequent_10 = ($$anchor13) => {
                                                KatexRenderer($$anchor13, {
                                                  get content() {
                                                    return get(token), untrack(() => get(token).text);
                                                  },
                                                  displayMode: false
                                                });
                                              };
                                              if_block(node_16, ($$render) => {
                                                if (get(token), untrack(() => get(token).text)) $$render(consequent_10);
                                              });
                                            }
                                            append($$anchor12, fragment_16);
                                          };
                                          var alternate_5 = ($$anchor12) => {
                                            var fragment_18 = comment();
                                            var node_17 = first_child(fragment_18);
                                            {
                                              var consequent_12 = ($$anchor13) => {
                                                var iframe = root_25$2();
                                                template_effect(() => {
                                                  set_attribute(iframe, "src", `${WEBUI_BASE_URL}/api/v1/files/${(get(token), untrack(() => get(token).fileId)) ?? ""}/content`);
                                                  set_attribute(iframe, "title", (get(token), untrack(() => get(token).fileId)));
                                                });
                                                event("load", iframe, (e) => {
                                                  try {
                                                    e.currentTarget.style.height = e.currentTarget.contentWindow.document.body.scrollHeight + 20 + "px";
                                                  } catch {
                                                  }
                                                });
                                                append($$anchor13, iframe);
                                              };
                                              var alternate_4 = ($$anchor13) => {
                                                var fragment_19 = comment();
                                                var node_18 = first_child(fragment_19);
                                                {
                                                  var consequent_13 = ($$anchor14) => {
                                                    MentionToken($$anchor14, {
                                                      get token() {
                                                        return get(token);
                                                      }
                                                    });
                                                  };
                                                  var alternate_3 = ($$anchor14) => {
                                                    var fragment_21 = comment();
                                                    var node_19 = first_child(fragment_21);
                                                    {
                                                      var consequent_14 = ($$anchor15) => {
                                                        var fragment_22 = comment();
                                                        var node_20 = first_child(fragment_22);
                                                        html(node_20, () => (deep_read_state(purify), get(token), untrack(() => purify.sanitize(`<sup class="footnote-ref footnote-ref-text">${get(token).escapedText}</sup>`) || "")));
                                                        append($$anchor15, fragment_22);
                                                      };
                                                      var alternate_2 = ($$anchor15) => {
                                                        var fragment_23 = comment();
                                                        var node_21 = first_child(fragment_23);
                                                        {
                                                          var consequent_15 = ($$anchor16) => {
                                                            SourceToken($$anchor16, {
                                                              get id() {
                                                                return id();
                                                              },
                                                              get token() {
                                                                return get(token);
                                                              },
                                                              get sourceIds() {
                                                                return sourceIds();
                                                              },
                                                              get onClick() {
                                                                return onSourceClick();
                                                              }
                                                            });
                                                          };
                                                          var alternate_1 = ($$anchor16) => {
                                                            var fragment_25 = comment();
                                                            var node_22 = first_child(fragment_25);
                                                            {
                                                              var consequent_16 = ($$anchor17) => {
                                                                TextToken($$anchor17, {
                                                                  get token() {
                                                                    return get(token);
                                                                  },
                                                                  get done() {
                                                                    return done();
                                                                  }
                                                                });
                                                              };
                                                              if_block(
                                                                node_22,
                                                                ($$render) => {
                                                                  if (get(token), untrack(() => get(token).type === "text")) $$render(consequent_16);
                                                                },
                                                                true
                                                              );
                                                            }
                                                            append($$anchor16, fragment_25);
                                                          };
                                                          if_block(
                                                            node_21,
                                                            ($$render) => {
                                                              if (get(token), untrack(() => get(token).type === "citation")) $$render(consequent_15);
                                                              else $$render(alternate_1, false);
                                                            },
                                                            true
                                                          );
                                                        }
                                                        append($$anchor15, fragment_23);
                                                      };
                                                      if_block(
                                                        node_19,
                                                        ($$render) => {
                                                          if (get(token), untrack(() => get(token).type === "footnote")) $$render(consequent_14);
                                                          else $$render(alternate_2, false);
                                                        },
                                                        true
                                                      );
                                                    }
                                                    append($$anchor14, fragment_21);
                                                  };
                                                  if_block(
                                                    node_18,
                                                    ($$render) => {
                                                      if (get(token), untrack(() => get(token).type === "mention")) $$render(consequent_13);
                                                      else $$render(alternate_3, false);
                                                    },
                                                    true
                                                  );
                                                }
                                                append($$anchor13, fragment_19);
                                              };
                                              if_block(
                                                node_17,
                                                ($$render) => {
                                                  if (get(token), untrack(() => get(token).type === "iframe")) $$render(consequent_12);
                                                  else $$render(alternate_4, false);
                                                },
                                                true
                                              );
                                            }
                                            append($$anchor12, fragment_18);
                                          };
                                          if_block(
                                            node_15,
                                            ($$render) => {
                                              if (get(token), untrack(() => get(token).type === "inlineKatex")) $$render(consequent_11);
                                              else $$render(alternate_5, false);
                                            },
                                            true
                                          );
                                        }
                                        append($$anchor11, fragment_15);
                                      };
                                      if_block(
                                        node_13,
                                        ($$render) => {
                                          if (get(token), untrack(() => get(token).type === "del")) $$render(consequent_9);
                                          else $$render(alternate_6, false);
                                        },
                                        true
                                      );
                                    }
                                    append($$anchor10, fragment_14);
                                  };
                                  if_block(
                                    node_12,
                                    ($$render) => {
                                      if (get(token), untrack(() => get(token).type === "br")) $$render(consequent_8);
                                      else $$render(alternate_7, false);
                                    },
                                    true
                                  );
                                }
                                append($$anchor9, fragment_13);
                              };
                              if_block(
                                node_11,
                                ($$render) => {
                                  if (get(token), untrack(() => get(token).type === "codespan")) $$render(consequent_7);
                                  else $$render(alternate_8, false);
                                },
                                true
                              );
                            }
                            append($$anchor8, fragment_11);
                          };
                          if_block(
                            node_9,
                            ($$render) => {
                              if (get(token), untrack(() => get(token).type === "em")) $$render(consequent_6);
                              else $$render(alternate_9, false);
                            },
                            true
                          );
                        }
                        append($$anchor7, fragment_10);
                      };
                      if_block(
                        node_7,
                        ($$render) => {
                          if (get(token), untrack(() => get(token).type === "strong")) $$render(consequent_5);
                          else $$render(alternate_10, false);
                        },
                        true
                      );
                    }
                    append($$anchor6, fragment_9);
                  };
                  if_block(
                    node_6,
                    ($$render) => {
                      if (get(token), untrack(() => get(token).type === "image")) $$render(consequent_4);
                      else $$render(alternate_11, false);
                    },
                    true
                  );
                }
                append($$anchor5, fragment_7);
              };
              if_block(
                node_3,
                ($$render) => {
                  if (get(token), untrack(() => get(token).type === "link")) $$render(consequent_3);
                  else $$render(alternate_12, false);
                },
                true
              );
            }
            append($$anchor4, fragment_5);
          };
          if_block(
            node_2,
            ($$render) => {
              if (get(token), untrack(() => get(token).type === "html")) $$render(consequent_1);
              else $$render(alternate_13, false);
            },
            true
          );
        }
        append($$anchor3, fragment_3);
      };
      if_block(node_1, ($$render) => {
        if (get(token), untrack(() => get(token).type === "escape")) $$render(consequent);
        else $$render(alternate_14, false);
      });
    }
    append($$anchor2, fragment_1);
  });
  append($$anchor, fragment);
  pop();
}
var root$5 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path></svg>`);
function Info($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$5();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root$4 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path></svg>`);
function Star($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-4 h-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$4();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root$3 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"></path></svg>`);
function LightBulb($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-4 h-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$3();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root$2 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"></path></svg>`);
function Bolt($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-3");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$2();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
const alertStyles = {
  NOTE: { border: "border-sky-500", text: "text-sky-500", icon: Info },
  TIP: {
    border: "border-emerald-500",
    text: "text-emerald-500",
    icon: LightBulb
  },
  IMPORTANT: {
    border: "border-purple-500",
    text: "text-purple-500",
    icon: Star
  },
  WARNING: {
    border: "border-yellow-500",
    text: "text-yellow-500",
    icon: ArrowRightCircle
  },
  CAUTION: { border: "border-rose-500", text: "text-rose-500", icon: Bolt }
};
function alertComponent(token) {
  var _a;
  const regExpStr = `^(?:\\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\\])\\s*?
*`;
  const regExp = new RegExp(regExpStr);
  const matches = (_a = token.text) == null ? void 0 : _a.match(regExp);
  if (matches && matches.length) {
    const alertType = matches[1];
    const newText = token.text.replace(regExp, "");
    const newTokens = marked.lexer(newText);
    return { type: alertType, text: newText, tokens: newTokens };
  }
  return false;
}
var root$1 = from_html(`<div><div><!> <span class=" font-medium"> </span></div> <div class="pb-2"><!></div></div>`);
function AlertRenderer($$anchor, $$props) {
  push($$props, false);
  prop($$props, "token", 8);
  let alert = prop($$props, "alert", 8);
  let id = prop($$props, "id", 8, "");
  let tokenIdx = prop($$props, "tokenIdx", 8, 0);
  let onTaskClick = prop($$props, "onTaskClick", 8, void 0);
  let onSourceClick = prop($$props, "onSourceClick", 8, void 0);
  init();
  var div = root$1();
  var div_1 = child(div);
  var node = child(div_1);
  component(node, () => alertStyles[alert().type].icon, ($$anchor2, $$component) => {
    $$component($$anchor2, { className: "inline-block size-4" });
  });
  var span = sibling(node, 2);
  var text2 = child(span, true);
  reset(span);
  reset(div_1);
  var div_2 = sibling(div_1, 2);
  var node_1 = child(div_2);
  {
    let $0 = derived_safe_equal(() => `${id()}-${tokenIdx()}`);
    MarkdownTokens(node_1, {
      get id() {
        return get($0);
      },
      get tokens() {
        return deep_read_state(alert()), untrack(() => alert().tokens);
      },
      get onTaskClick() {
        return onTaskClick();
      },
      get onSourceClick() {
        return onSourceClick();
      }
    });
  }
  reset(div_2);
  reset(div);
  template_effect(() => {
    set_class(div, 1, (deep_read_state(alert()), untrack(() => `border-l-4 pl-2.5 ${alertStyles[alert().type].border} my-0.5`)));
    set_class(div_1, 1, `${(deep_read_state(alert()), untrack(() => alertStyles[alert().type].text)) ?? ""} items-center flex gap-1 py-1.5`);
    set_text(text2, (deep_read_state(alert()), untrack(() => alert().type)));
  });
  append($$anchor, div);
  pop();
}
var root_2$1 = from_html(`<hr class=" border-gray-100 dark:border-gray-850"/>`);
var root_12 = from_html(`<th scope="col" class="px-2.5! py-2! cursor-pointer border-b border-gray-100! dark:border-gray-800!"><div class="gap-1.5 text-left"><div class="shrink-0 break-normal"><!></div></div></th>`);
var root_14 = from_html(`<td><div class="break-normal"><!></div></td>`);
var root_13 = from_html(`<tr class="bg-white dark:bg-gray-900 text-xs"></tr>`);
var root_15 = from_html(`<button class="p-1 rounded-lg bg-transparent transition"><!></button>`);
var root_16 = from_html(`<button class="p-1 rounded-lg bg-transparent transition"><!></button>`);
var root_11$1 = from_html(`<div class="relative w-full group mb-2"><div class="scrollbar-hidden relative overflow-x-auto max-w-full"><table class=" w-full text-sm text-left text-gray-500 dark:text-gray-400 max-w-full rounded-xl"><thead class="text-xs text-gray-700 uppercase bg-white dark:bg-gray-900 dark:text-gray-400 border-none"><tr></tr></thead><tbody></tbody></table></div> <div class=" absolute top-1 right-1.5 z-20 invisible group-hover:visible flex gap-0.5"><!> <!></div></div>`);
var root_20 = from_html(`<blockquote dir="auto"><!></blockquote>`);
var root_25$1 = from_html(`<input class=" translate-y-[1px] -translate-x-1" type="checkbox"/>`);
var root_24$1 = from_html(`<li class="text-start"><!> <!></li>`);
var root_23 = from_html(`<ol dir="auto"></ol>`);
var root_28 = from_html(`<input type="checkbox"/> <div><!></div>`, 1);
var root_27 = from_html(`<li><!></li>`);
var root_26$1 = from_html(`<ul dir="auto"></ul>`);
var root_32 = from_html(`<div class=" mb-1.5" slot="content"><!></div>`);
var root_36 = from_html(`<iframe width="100%" frameborder="0"></iframe>`);
var root_38 = from_html(`<p dir="auto"><!></p>`);
var root_41$1 = from_html(`<p><!></p>`);
var root_54 = from_html(`<div class="my-2"></div>`);
function MarkdownTokens($$anchor, $$props) {
  push($$props, false);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  const { saveAs } = fileSaver;
  let id = prop($$props, "id", 8);
  let tokens = prop($$props, "tokens", 8);
  let top = prop($$props, "top", 8, true);
  let attributes = prop($$props, "attributes", 24, () => ({}));
  let sourceIds = prop($$props, "sourceIds", 24, () => []);
  let done = prop($$props, "done", 8, true);
  let save = prop($$props, "save", 8, false);
  let preview = prop($$props, "preview", 8, false);
  let editCodeBlock = prop($$props, "editCodeBlock", 8, true);
  let topPadding = prop($$props, "topPadding", 8, false);
  let onSave = prop($$props, "onSave", 8, () => {
  });
  let onUpdate = prop($$props, "onUpdate", 8, () => {
  });
  let onPreview = prop($$props, "onPreview", 8, () => {
  });
  let onTaskClick = prop($$props, "onTaskClick", 8, () => {
  });
  let onSourceClick = prop($$props, "onSourceClick", 8, () => {
  });
  const headerComponent = (depth) => {
    return "h" + depth;
  };
  const exportTableToCSVHandler = (token, tokenIdx = 0) => {
    console.log("Exporting table to CSV");
    const header = token.header.map((headerCell) => `"${headerCell.text.replace(/"/g, '""')}"`);
    const rows = token.rows.map((row) => row.map((cell) => {
      const cellContent = cell.tokens.map((token2) => token2.text).join("");
      return `"${cellContent.replace(/"/g, '""')}"`;
    }));
    const csvData = [header, ...rows];
    const csvContent = csvData.map((row) => row.join(",")).join("\n");
    console.log(csvData);
    console.log(csvContent);
    const bom = "\uFEFF";
    const blob = new Blob([bom + csvContent], { type: "text/csv;charset=UTF-8" });
    saveAs(blob, `table-${id()}-${tokenIdx}.csv`);
  };
  init();
  var fragment = comment();
  var node = first_child(fragment);
  each(node, 1, tokens, index, ($$anchor2, token, tokenIdx) => {
    var fragment_1 = comment();
    var node_1 = first_child(fragment_1);
    {
      var consequent = ($$anchor3) => {
        var hr = root_2$1();
        append($$anchor3, hr);
      };
      var alternate_20 = ($$anchor3) => {
        var fragment_2 = comment();
        var node_2 = first_child(fragment_2);
        {
          var consequent_1 = ($$anchor4) => {
            var fragment_3 = comment();
            var node_3 = first_child(fragment_3);
            element(node_3, () => headerComponent(get(token).depth), false, ($$element, $$anchor5) => {
              attribute_effect($$element, () => ({ dir: "auto" }));
              {
                let $0 = derived_safe_equal(() => `${id()}-${tokenIdx}-h`);
                MarkdownInlineTokens($$anchor5, {
                  get id() {
                    return get($0);
                  },
                  get tokens() {
                    return get(token), untrack(() => get(token).tokens);
                  },
                  get done() {
                    return done();
                  },
                  get sourceIds() {
                    return sourceIds();
                  },
                  get onSourceClick() {
                    return onSourceClick();
                  }
                });
              }
            });
            append($$anchor4, fragment_3);
          };
          var alternate_19 = ($$anchor4) => {
            var fragment_5 = comment();
            var node_4 = first_child(fragment_5);
            {
              var consequent_3 = ($$anchor5) => {
                var fragment_6 = comment();
                var node_5 = first_child(fragment_6);
                {
                  var consequent_2 = ($$anchor6) => {
                    {
                      let $0 = derived_safe_equal(() => `${id()}-${tokenIdx}`);
                      let $1 = derived_safe_equal(() => ($settings(), untrack(() => {
                        var _a;
                        return ((_a = $settings()) == null ? void 0 : _a.collapseCodeBlocks) ?? false;
                      })));
                      let $2 = derived_safe_equal(() => (get(token), untrack(() => {
                        var _a;
                        return ((_a = get(token)) == null ? void 0 : _a.lang) ?? "";
                      })));
                      let $3 = derived_safe_equal(() => (get(token), untrack(() => {
                        var _a;
                        return ((_a = get(token)) == null ? void 0 : _a.text) ?? "";
                      })));
                      let $4 = derived_safe_equal(() => topPadding() ? "top-10" : "top-0");
                      CodeBlock($$anchor6, {
                        get id() {
                          return get($0);
                        },
                        get collapsed() {
                          return get($1);
                        },
                        get token() {
                          return get(token);
                        },
                        get lang() {
                          return get($2);
                        },
                        get code() {
                          return get($3);
                        },
                        get attributes() {
                          return attributes();
                        },
                        get save() {
                          return save();
                        },
                        get preview() {
                          return preview();
                        },
                        get edit() {
                          return editCodeBlock();
                        },
                        get stickyButtonsClassName() {
                          return get($4);
                        },
                        onSave: (value) => {
                          onSave()({
                            raw: get(token).raw,
                            oldContent: get(token).text,
                            newContent: value
                          });
                        },
                        get onUpdate() {
                          return onUpdate();
                        },
                        get onPreview() {
                          return onPreview();
                        }
                      });
                    }
                  };
                  var alternate = ($$anchor6) => {
                    var text$1 = text();
                    template_effect(() => set_text(text$1, (get(token), untrack(() => get(token).text))));
                    append($$anchor6, text$1);
                  };
                  if_block(node_5, ($$render) => {
                    if (get(token), untrack(() => get(token).raw.includes("```"))) $$render(consequent_2);
                    else $$render(alternate, false);
                  });
                }
                append($$anchor5, fragment_6);
              };
              var alternate_18 = ($$anchor5) => {
                var fragment_9 = comment();
                var node_6 = first_child(fragment_9);
                {
                  var consequent_4 = ($$anchor6) => {
                    var div = root_11$1();
                    var div_1 = child(div);
                    var table = child(div_1);
                    var thead = child(table);
                    var tr = child(thead);
                    each(tr, 5, () => (get(token), untrack(() => get(token).header)), index, ($$anchor7, header, headerIdx) => {
                      var th = root_12();
                      var div_2 = child(th);
                      var div_3 = child(div_2);
                      var node_7 = child(div_3);
                      {
                        let $0 = derived_safe_equal(() => `${id()}-${tokenIdx}-header-${headerIdx}`);
                        MarkdownInlineTokens(node_7, {
                          get id() {
                            return get($0);
                          },
                          get tokens() {
                            return get(header), untrack(() => get(header).tokens);
                          },
                          get done() {
                            return done();
                          },
                          get sourceIds() {
                            return sourceIds();
                          },
                          get onSourceClick() {
                            return onSourceClick();
                          }
                        });
                      }
                      reset(div_3);
                      reset(div_2);
                      reset(th);
                      template_effect(() => set_style(th, (get(token), untrack(() => get(token).align[headerIdx] ? "" : `text-align: ${get(token).align[headerIdx]}`))));
                      append($$anchor7, th);
                    });
                    reset(tr);
                    reset(thead);
                    var tbody = sibling(thead);
                    each(tbody, 5, () => (get(token), untrack(() => get(token).rows)), index, ($$anchor7, row, rowIdx) => {
                      var tr_1 = root_13();
                      each(tr_1, 5, () => get(row) ?? [], index, ($$anchor8, cell, cellIdx) => {
                        var td = root_14();
                        var div_4 = child(td);
                        var node_8 = child(div_4);
                        {
                          let $0 = derived_safe_equal(() => `${id()}-${tokenIdx}-row-${rowIdx}-${cellIdx}`);
                          MarkdownInlineTokens(node_8, {
                            get id() {
                              return get($0);
                            },
                            get tokens() {
                              return get(cell), untrack(() => get(cell).tokens);
                            },
                            get done() {
                              return done();
                            },
                            get sourceIds() {
                              return sourceIds();
                            },
                            get onSourceClick() {
                              return onSourceClick();
                            }
                          });
                        }
                        reset(div_4);
                        reset(td);
                        template_effect(() => {
                          set_class(td, 1, `px-3! py-2! text-gray-900 dark:text-white w-max ${(get(token), untrack(() => get(token).rows.length - 1 === rowIdx ? "" : "border-b border-gray-50! dark:border-gray-850!")) ?? ""}`);
                          set_style(td, (get(token), untrack(() => get(token).align[cellIdx] ? `text-align: ${get(token).align[cellIdx]}` : "")));
                        });
                        append($$anchor8, td);
                      });
                      reset(tr_1);
                      append($$anchor7, tr_1);
                    });
                    reset(tbody);
                    reset(table);
                    reset(div_1);
                    var div_5 = sibling(div_1, 2);
                    var node_9 = child(div_5);
                    {
                      let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Copy"))));
                      Tooltip(node_9, {
                        get content() {
                          return get($0);
                        },
                        children: ($$anchor7, $$slotProps) => {
                          var button = root_15();
                          var node_10 = child(button);
                          Clipboard(node_10, { className: " size-3.5", strokeWidth: "1.5" });
                          reset(button);
                          event("click", button, (e) => {
                            var _a;
                            e.stopPropagation();
                            copyToClipboard(get(token).raw.trim(), null, ((_a = $settings()) == null ? void 0 : _a.copyFormatted) ?? false);
                          });
                          append($$anchor7, button);
                        },
                        $$slots: { default: true }
                      });
                    }
                    var node_11 = sibling(node_9, 2);
                    {
                      let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Export to CSV"))));
                      Tooltip(node_11, {
                        get content() {
                          return get($0);
                        },
                        children: ($$anchor7, $$slotProps) => {
                          var button_1 = root_16();
                          var node_12 = child(button_1);
                          Download(node_12, { className: " size-3.5", strokeWidth: "1.5" });
                          reset(button_1);
                          event("click", button_1, (e) => {
                            e.stopPropagation();
                            exportTableToCSVHandler(get(token), tokenIdx);
                          });
                          append($$anchor7, button_1);
                        },
                        $$slots: { default: true }
                      });
                    }
                    reset(div_5);
                    reset(div);
                    append($$anchor6, div);
                  };
                  var alternate_17 = ($$anchor6) => {
                    var fragment_10 = comment();
                    var node_13 = first_child(fragment_10);
                    {
                      var consequent_6 = ($$anchor7) => {
                        const alert = derived_safe_equal(() => (deep_read_state(alertComponent), get(token), untrack(() => alertComponent(get(token)))));
                        var fragment_11 = comment();
                        var node_14 = first_child(fragment_11);
                        {
                          var consequent_5 = ($$anchor8) => {
                            AlertRenderer($$anchor8, {
                              get token() {
                                return get(token);
                              },
                              get alert() {
                                return get(alert);
                              }
                            });
                          };
                          var alternate_1 = ($$anchor8) => {
                            var blockquote = root_20();
                            var node_15 = child(blockquote);
                            {
                              let $0 = derived_safe_equal(() => `${id()}-${tokenIdx}`);
                              MarkdownTokens(node_15, {
                                get id() {
                                  return get($0);
                                },
                                get tokens() {
                                  return get(token), untrack(() => get(token).tokens);
                                },
                                get done() {
                                  return done();
                                },
                                get editCodeBlock() {
                                  return editCodeBlock();
                                },
                                get onTaskClick() {
                                  return onTaskClick();
                                },
                                get sourceIds() {
                                  return sourceIds();
                                },
                                get onSourceClick() {
                                  return onSourceClick();
                                }
                              });
                            }
                            reset(blockquote);
                            template_effect(() => blockquote.dir = blockquote.dir);
                            append($$anchor8, blockquote);
                          };
                          if_block(node_14, ($$render) => {
                            if (get(alert)) $$render(consequent_5);
                            else $$render(alternate_1, false);
                          });
                        }
                        append($$anchor7, fragment_11);
                      };
                      var alternate_16 = ($$anchor7) => {
                        var fragment_13 = comment();
                        var node_16 = first_child(fragment_13);
                        {
                          var consequent_10 = ($$anchor8) => {
                            var fragment_14 = comment();
                            var node_17 = first_child(fragment_14);
                            {
                              var consequent_8 = ($$anchor9) => {
                                var ol = root_23();
                                each(ol, 5, () => (get(token), untrack(() => get(token).items)), index, ($$anchor10, item, itemIdx) => {
                                  var li = root_24$1();
                                  var node_18 = child(li);
                                  {
                                    var consequent_7 = ($$anchor11) => {
                                      var input = root_25$1();
                                      remove_input_defaults(input);
                                      template_effect(() => set_checked(input, (get(item), untrack(() => get(item).checked))));
                                      event("change", input, (e) => {
                                        onTaskClick()({
                                          id: id(),
                                          token: get(token),
                                          tokenIdx,
                                          item: get(item),
                                          itemIdx,
                                          checked: e.target.checked
                                        });
                                      });
                                      append($$anchor11, input);
                                    };
                                    if_block(node_18, ($$render) => {
                                      if (get(item), untrack(() => {
                                        var _a;
                                        return (_a = get(item)) == null ? void 0 : _a.task;
                                      })) $$render(consequent_7);
                                    });
                                  }
                                  var node_19 = sibling(node_18, 2);
                                  {
                                    let $0 = derived_safe_equal(() => `${id()}-${tokenIdx}-${itemIdx}`);
                                    MarkdownTokens(node_19, {
                                      get id() {
                                        return get($0);
                                      },
                                      get tokens() {
                                        return get(item), untrack(() => get(item).tokens);
                                      },
                                      get top() {
                                        return get(token), untrack(() => get(token).loose);
                                      },
                                      get done() {
                                        return done();
                                      },
                                      get editCodeBlock() {
                                        return editCodeBlock();
                                      },
                                      get onTaskClick() {
                                        return onTaskClick();
                                      },
                                      get sourceIds() {
                                        return sourceIds();
                                      },
                                      get onSourceClick() {
                                        return onSourceClick();
                                      }
                                    });
                                  }
                                  reset(li);
                                  append($$anchor10, li);
                                });
                                reset(ol);
                                template_effect(() => {
                                  set_attribute(ol, "start", (get(token), untrack(() => get(token).start || 1)));
                                  ol.dir = ol.dir;
                                });
                                append($$anchor9, ol);
                              };
                              var alternate_3 = ($$anchor9) => {
                                var ul = root_26$1();
                                each(ul, 5, () => (get(token), untrack(() => get(token).items)), index, ($$anchor10, item, itemIdx) => {
                                  var li_1 = root_27();
                                  var node_20 = child(li_1);
                                  {
                                    var consequent_9 = ($$anchor11) => {
                                      var fragment_15 = root_28();
                                      var input_1 = first_child(fragment_15);
                                      remove_input_defaults(input_1);
                                      var div_6 = sibling(input_1, 2);
                                      var node_21 = child(div_6);
                                      {
                                        let $0 = derived_safe_equal(() => `${id()}-${tokenIdx}-${itemIdx}`);
                                        MarkdownTokens(node_21, {
                                          get id() {
                                            return get($0);
                                          },
                                          get tokens() {
                                            return get(item), untrack(() => get(item).tokens);
                                          },
                                          get top() {
                                            return get(token), untrack(() => get(token).loose);
                                          },
                                          get done() {
                                            return done();
                                          },
                                          get editCodeBlock() {
                                            return editCodeBlock();
                                          },
                                          get onTaskClick() {
                                            return onTaskClick();
                                          },
                                          get sourceIds() {
                                            return sourceIds();
                                          },
                                          get onSourceClick() {
                                            return onSourceClick();
                                          }
                                        });
                                      }
                                      reset(div_6);
                                      template_effect(() => set_checked(input_1, (get(item), untrack(() => get(item).checked))));
                                      event("change", input_1, (e) => {
                                        onTaskClick()({
                                          id: id(),
                                          token: get(token),
                                          tokenIdx,
                                          item: get(item),
                                          itemIdx,
                                          checked: e.target.checked
                                        });
                                      });
                                      append($$anchor11, fragment_15);
                                    };
                                    var alternate_2 = ($$anchor11) => {
                                      var fragment_16 = comment();
                                      var node_22 = first_child(fragment_16);
                                      {
                                        let $0 = derived_safe_equal(() => `${id()}-${tokenIdx}-${itemIdx}`);
                                        MarkdownTokens(node_22, {
                                          get id() {
                                            return get($0);
                                          },
                                          get tokens() {
                                            return get(item), untrack(() => get(item).tokens);
                                          },
                                          get top() {
                                            return get(token), untrack(() => get(token).loose);
                                          },
                                          get done() {
                                            return done();
                                          },
                                          get editCodeBlock() {
                                            return editCodeBlock();
                                          },
                                          get onTaskClick() {
                                            return onTaskClick();
                                          },
                                          get sourceIds() {
                                            return sourceIds();
                                          },
                                          get onSourceClick() {
                                            return onSourceClick();
                                          }
                                        });
                                      }
                                      append($$anchor11, fragment_16);
                                    };
                                    if_block(node_20, ($$render) => {
                                      if (get(item), untrack(() => {
                                        var _a;
                                        return (_a = get(item)) == null ? void 0 : _a.task;
                                      })) $$render(consequent_9);
                                      else $$render(alternate_2, false);
                                    });
                                  }
                                  reset(li_1);
                                  template_effect(() => set_class(li_1, 1, `text-start ${(get(item), untrack(() => {
                                    var _a;
                                    return ((_a = get(item)) == null ? void 0 : _a.task) ? "flex -translate-x-6.5 gap-3 " : "";
                                  })) ?? ""}`));
                                  append($$anchor10, li_1);
                                });
                                reset(ul);
                                template_effect(() => ul.dir = ul.dir);
                                append($$anchor9, ul);
                              };
                              if_block(node_17, ($$render) => {
                                if (get(token), untrack(() => get(token).ordered)) $$render(consequent_8);
                                else $$render(alternate_3, false);
                              });
                            }
                            append($$anchor8, fragment_14);
                          };
                          var alternate_15 = ($$anchor8) => {
                            var fragment_17 = comment();
                            var node_23 = first_child(fragment_17);
                            {
                              var consequent_11 = ($$anchor9) => {
                                {
                                  let $0 = derived_safe_equal(() => ($settings(), untrack(() => {
                                    var _a;
                                    return ((_a = $settings()) == null ? void 0 : _a.expandDetails) ?? false;
                                  })));
                                  let $1 = derived_safe_equal(() => (get(token), untrack(() => {
                                    var _a;
                                    return (_a = get(token)) == null ? void 0 : _a.attributes;
                                  })));
                                  Collapsible($$anchor9, {
                                    get title() {
                                      return get(token), untrack(() => get(token).summary);
                                    },
                                    get open() {
                                      return get($0);
                                    },
                                    get attributes() {
                                      return get($1);
                                    },
                                    className: "w-full space-y-1",
                                    dir: "auto",
                                    $$slots: {
                                      content: ($$anchor10, $$slotProps) => {
                                        var div_7 = root_32();
                                        var node_24 = child(div_7);
                                        {
                                          let $02 = derived_safe_equal(() => `${id()}-${tokenIdx}-d`);
                                          let $12 = derived_safe_equal(() => (deep_read_state(marked), deep_read_state(decode), get(token), untrack(() => marked.lexer(decode(get(token).text)))));
                                          let $2 = derived_safe_equal(() => (get(token), untrack(() => {
                                            var _a;
                                            return (_a = get(token)) == null ? void 0 : _a.attributes;
                                          })));
                                          MarkdownTokens(node_24, {
                                            get id() {
                                              return get($02);
                                            },
                                            get tokens() {
                                              return get($12);
                                            },
                                            get attributes() {
                                              return get($2);
                                            },
                                            get done() {
                                              return done();
                                            },
                                            get editCodeBlock() {
                                              return editCodeBlock();
                                            },
                                            get onTaskClick() {
                                              return onTaskClick();
                                            },
                                            get sourceIds() {
                                              return sourceIds();
                                            },
                                            get onSourceClick() {
                                              return onSourceClick();
                                            }
                                          });
                                        }
                                        reset(div_7);
                                        append($$anchor10, div_7);
                                      }
                                    }
                                  });
                                }
                              };
                              var alternate_14 = ($$anchor9) => {
                                var fragment_19 = comment();
                                var node_25 = first_child(fragment_19);
                                {
                                  var consequent_12 = ($$anchor10) => {
                                    HTMLToken($$anchor10, {
                                      get id() {
                                        return id();
                                      },
                                      get token() {
                                        return get(token);
                                      },
                                      get onSourceClick() {
                                        return onSourceClick();
                                      }
                                    });
                                  };
                                  var alternate_13 = ($$anchor10) => {
                                    var fragment_21 = comment();
                                    var node_26 = first_child(fragment_21);
                                    {
                                      var consequent_13 = ($$anchor11) => {
                                        var iframe = root_36();
                                        template_effect(() => {
                                          set_attribute(iframe, "src", `${WEBUI_BASE_URL}/api/v1/files/${(get(token), untrack(() => get(token).fileId)) ?? ""}/content`);
                                          set_attribute(iframe, "title", (get(token), untrack(() => get(token).fileId)));
                                        });
                                        event("load", iframe, (e) => {
                                          try {
                                            e.currentTarget.style.height = e.currentTarget.contentWindow.document.body.scrollHeight + 20 + "px";
                                          } catch {
                                          }
                                        });
                                        append($$anchor11, iframe);
                                      };
                                      var alternate_12 = ($$anchor11) => {
                                        var fragment_22 = comment();
                                        var node_27 = first_child(fragment_22);
                                        {
                                          var consequent_14 = ($$anchor12) => {
                                            var p = root_38();
                                            var node_28 = child(p);
                                            {
                                              let $0 = derived_safe_equal(() => `${id()}-${tokenIdx}-p`);
                                              let $1 = derived_safe_equal(() => (get(token), untrack(() => get(token).tokens ?? [])));
                                              MarkdownInlineTokens(node_28, {
                                                get id() {
                                                  return get($0);
                                                },
                                                get tokens() {
                                                  return get($1);
                                                },
                                                get done() {
                                                  return done();
                                                },
                                                get sourceIds() {
                                                  return sourceIds();
                                                },
                                                get onSourceClick() {
                                                  return onSourceClick();
                                                }
                                              });
                                            }
                                            reset(p);
                                            template_effect(() => p.dir = p.dir);
                                            append($$anchor12, p);
                                          };
                                          var alternate_11 = ($$anchor12) => {
                                            var fragment_23 = comment();
                                            var node_29 = first_child(fragment_23);
                                            {
                                              var consequent_18 = ($$anchor13) => {
                                                var fragment_24 = comment();
                                                var node_30 = first_child(fragment_24);
                                                {
                                                  var consequent_16 = ($$anchor14) => {
                                                    var p_1 = root_41$1();
                                                    var node_31 = child(p_1);
                                                    {
                                                      var consequent_15 = ($$anchor15) => {
                                                        {
                                                          let $0 = derived_safe_equal(() => `${id()}-${tokenIdx}-t`);
                                                          MarkdownInlineTokens($$anchor15, {
                                                            get id() {
                                                              return get($0);
                                                            },
                                                            get tokens() {
                                                              return get(token), untrack(() => get(token).tokens);
                                                            },
                                                            get done() {
                                                              return done();
                                                            },
                                                            get sourceIds() {
                                                              return sourceIds();
                                                            },
                                                            get onSourceClick() {
                                                              return onSourceClick();
                                                            }
                                                          });
                                                        }
                                                      };
                                                      var alternate_4 = ($$anchor15) => {
                                                        var text_1 = text();
                                                        template_effect(($0) => set_text(text_1, $0), [
                                                          () => (deep_read_state(unescapeHtml), get(token), untrack(() => unescapeHtml(get(token).text)))
                                                        ]);
                                                        append($$anchor15, text_1);
                                                      };
                                                      if_block(node_31, ($$render) => {
                                                        if (get(token), untrack(() => get(token).tokens)) $$render(consequent_15);
                                                        else $$render(alternate_4, false);
                                                      });
                                                    }
                                                    reset(p_1);
                                                    append($$anchor14, p_1);
                                                  };
                                                  var alternate_6 = ($$anchor14) => {
                                                    var fragment_27 = comment();
                                                    var node_32 = first_child(fragment_27);
                                                    {
                                                      var consequent_17 = ($$anchor15) => {
                                                        {
                                                          let $0 = derived_safe_equal(() => `${id()}-${tokenIdx}-p`);
                                                          let $1 = derived_safe_equal(() => (get(token), untrack(() => get(token).tokens ?? [])));
                                                          MarkdownInlineTokens($$anchor15, {
                                                            get id() {
                                                              return get($0);
                                                            },
                                                            get tokens() {
                                                              return get($1);
                                                            },
                                                            get done() {
                                                              return done();
                                                            },
                                                            get sourceIds() {
                                                              return sourceIds();
                                                            },
                                                            get onSourceClick() {
                                                              return onSourceClick();
                                                            }
                                                          });
                                                        }
                                                      };
                                                      var alternate_5 = ($$anchor15) => {
                                                        var text_2 = text();
                                                        template_effect(($0) => set_text(text_2, $0), [
                                                          () => (deep_read_state(unescapeHtml), get(token), untrack(() => unescapeHtml(get(token).text)))
                                                        ]);
                                                        append($$anchor15, text_2);
                                                      };
                                                      if_block(
                                                        node_32,
                                                        ($$render) => {
                                                          if (get(token), untrack(() => get(token).tokens)) $$render(consequent_17);
                                                          else $$render(alternate_5, false);
                                                        },
                                                        true
                                                      );
                                                    }
                                                    append($$anchor14, fragment_27);
                                                  };
                                                  if_block(node_30, ($$render) => {
                                                    if (top()) $$render(consequent_16);
                                                    else $$render(alternate_6, false);
                                                  });
                                                }
                                                append($$anchor13, fragment_24);
                                              };
                                              var alternate_10 = ($$anchor13) => {
                                                var fragment_30 = comment();
                                                var node_33 = first_child(fragment_30);
                                                {
                                                  var consequent_20 = ($$anchor14) => {
                                                    var fragment_31 = comment();
                                                    var node_34 = first_child(fragment_31);
                                                    {
                                                      var consequent_19 = ($$anchor15) => {
                                                        {
                                                          let $0 = derived_safe_equal(() => (get(token), untrack(() => {
                                                            var _a;
                                                            return ((_a = get(token)) == null ? void 0 : _a.displayMode) ?? false;
                                                          })));
                                                          KatexRenderer($$anchor15, {
                                                            get content() {
                                                              return get(token), untrack(() => get(token).text);
                                                            },
                                                            get displayMode() {
                                                              return get($0);
                                                            }
                                                          });
                                                        }
                                                      };
                                                      if_block(node_34, ($$render) => {
                                                        if (get(token), untrack(() => get(token).text)) $$render(consequent_19);
                                                      });
                                                    }
                                                    append($$anchor14, fragment_31);
                                                  };
                                                  var alternate_9 = ($$anchor14) => {
                                                    var fragment_33 = comment();
                                                    var node_35 = first_child(fragment_33);
                                                    {
                                                      var consequent_22 = ($$anchor15) => {
                                                        var fragment_34 = comment();
                                                        var node_36 = first_child(fragment_34);
                                                        {
                                                          var consequent_21 = ($$anchor16) => {
                                                            {
                                                              let $0 = derived_safe_equal(() => (get(token), untrack(() => {
                                                                var _a;
                                                                return ((_a = get(token)) == null ? void 0 : _a.displayMode) ?? false;
                                                              })));
                                                              KatexRenderer($$anchor16, {
                                                                get content() {
                                                                  return get(token), untrack(() => get(token).text);
                                                                },
                                                                get displayMode() {
                                                                  return get($0);
                                                                }
                                                              });
                                                            }
                                                          };
                                                          if_block(node_36, ($$render) => {
                                                            if (get(token), untrack(() => get(token).text)) $$render(consequent_21);
                                                          });
                                                        }
                                                        append($$anchor15, fragment_34);
                                                      };
                                                      var alternate_8 = ($$anchor15) => {
                                                        var fragment_36 = comment();
                                                        var node_37 = first_child(fragment_36);
                                                        {
                                                          var consequent_23 = ($$anchor16) => {
                                                            var div_8 = root_54();
                                                            append($$anchor16, div_8);
                                                          };
                                                          var alternate_7 = ($$anchor16) => {
                                                            var text_3 = text();
                                                            template_effect(($0) => set_text(text_3, $0), [
                                                              () => (get(token), untrack(() => console.log("Unknown token", get(token))))
                                                            ]);
                                                            append($$anchor16, text_3);
                                                          };
                                                          if_block(
                                                            node_37,
                                                            ($$render) => {
                                                              if (get(token), untrack(() => get(token).type === "space")) $$render(consequent_23);
                                                              else $$render(alternate_7, false);
                                                            },
                                                            true
                                                          );
                                                        }
                                                        append($$anchor15, fragment_36);
                                                      };
                                                      if_block(
                                                        node_35,
                                                        ($$render) => {
                                                          if (get(token), untrack(() => get(token).type === "blockKatex")) $$render(consequent_22);
                                                          else $$render(alternate_8, false);
                                                        },
                                                        true
                                                      );
                                                    }
                                                    append($$anchor14, fragment_33);
                                                  };
                                                  if_block(
                                                    node_33,
                                                    ($$render) => {
                                                      if (get(token), untrack(() => get(token).type === "inlineKatex")) $$render(consequent_20);
                                                      else $$render(alternate_9, false);
                                                    },
                                                    true
                                                  );
                                                }
                                                append($$anchor13, fragment_30);
                                              };
                                              if_block(
                                                node_29,
                                                ($$render) => {
                                                  if (get(token), untrack(() => get(token).type === "text")) $$render(consequent_18);
                                                  else $$render(alternate_10, false);
                                                },
                                                true
                                              );
                                            }
                                            append($$anchor12, fragment_23);
                                          };
                                          if_block(
                                            node_27,
                                            ($$render) => {
                                              if (get(token), untrack(() => get(token).type === "paragraph")) $$render(consequent_14);
                                              else $$render(alternate_11, false);
                                            },
                                            true
                                          );
                                        }
                                        append($$anchor11, fragment_22);
                                      };
                                      if_block(
                                        node_26,
                                        ($$render) => {
                                          if (get(token), untrack(() => get(token).type === "iframe")) $$render(consequent_13);
                                          else $$render(alternate_12, false);
                                        },
                                        true
                                      );
                                    }
                                    append($$anchor10, fragment_21);
                                  };
                                  if_block(
                                    node_25,
                                    ($$render) => {
                                      if (get(token), untrack(() => get(token).type === "html")) $$render(consequent_12);
                                      else $$render(alternate_13, false);
                                    },
                                    true
                                  );
                                }
                                append($$anchor9, fragment_19);
                              };
                              if_block(
                                node_23,
                                ($$render) => {
                                  if (get(token), untrack(() => get(token).type === "details")) $$render(consequent_11);
                                  else $$render(alternate_14, false);
                                },
                                true
                              );
                            }
                            append($$anchor8, fragment_17);
                          };
                          if_block(
                            node_16,
                            ($$render) => {
                              if (get(token), untrack(() => get(token).type === "list")) $$render(consequent_10);
                              else $$render(alternate_15, false);
                            },
                            true
                          );
                        }
                        append($$anchor7, fragment_13);
                      };
                      if_block(
                        node_13,
                        ($$render) => {
                          if (get(token), untrack(() => get(token).type === "blockquote")) $$render(consequent_6);
                          else $$render(alternate_16, false);
                        },
                        true
                      );
                    }
                    append($$anchor6, fragment_10);
                  };
                  if_block(
                    node_6,
                    ($$render) => {
                      if (get(token), untrack(() => get(token).type === "table")) $$render(consequent_4);
                      else $$render(alternate_17, false);
                    },
                    true
                  );
                }
                append($$anchor5, fragment_9);
              };
              if_block(
                node_4,
                ($$render) => {
                  if (get(token), untrack(() => get(token).type === "code")) $$render(consequent_3);
                  else $$render(alternate_18, false);
                },
                true
              );
            }
            append($$anchor4, fragment_5);
          };
          if_block(
            node_2,
            ($$render) => {
              if (get(token), untrack(() => get(token).type === "heading")) $$render(consequent_1);
              else $$render(alternate_19, false);
            },
            true
          );
        }
        append($$anchor3, fragment_2);
      };
      if_block(node_1, ($$render) => {
        if (get(token), untrack(() => get(token).type === "hr")) $$render(consequent);
        else $$render(alternate_20, false);
      });
    }
    append($$anchor2, fragment_1);
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
function escapeHtml(s2) {
  return s2.replace(
    /[&<>"']/g,
    (c2) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c2]
  );
}
function footnoteExtension() {
  return {
    name: "footnote",
    level: "inline",
    start(src2) {
      return src2.search(/\[\^\s*[a-zA-Z0-9_-]+\s*\]/);
    },
    tokenizer(src2) {
      const rule = /^\[\^\s*([a-zA-Z0-9_-]+)\s*\]/;
      const match = rule.exec(src2);
      if (match) {
        const escapedText = escapeHtml(match[1]);
        return {
          type: "footnote",
          raw: match[0],
          text: match[1],
          escapedText
        };
      }
    }
  };
}
function footnoteExtension$1() {
  return {
    extensions: [footnoteExtension()]
  };
}
function citationExtension() {
  return {
    name: "citation",
    level: "inline",
    start(src2) {
      return src2.search(/\[(\d[\d,\s]*)\]/);
    },
    tokenizer(src2) {
      if (/^\[\^/.test(src2)) return;
      const rule = /^(\[(?:\d[\d,\s]*)\])+/;
      const match = rule.exec(src2);
      if (!match) return;
      const raw = match[0];
      const groupRegex = /\[([\d,\s]+)\]/g;
      const ids = [];
      let m;
      while (m = groupRegex.exec(raw)) {
        const parsed = m[1].split(",").map((n) => parseInt(n.trim(), 10)).filter((n) => !isNaN(n));
        ids.push(...parsed);
      }
      return {
        type: "citation",
        raw,
        ids
        // merged list
      };
    },
    renderer(token) {
      return token.ids.join(",");
    }
  };
}
function citationExtension$1() {
  return {
    extensions: [citationExtension()]
  };
}
function Markdown($$anchor, $$props) {
  push($$props, false);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let id = prop($$props, "id", 8, "");
  let content = prop($$props, "content", 8);
  let done = prop($$props, "done", 8, true);
  let model = prop($$props, "model", 8, null);
  let save = prop($$props, "save", 8, false);
  let preview = prop($$props, "preview", 8, false);
  let editCodeBlock = prop($$props, "editCodeBlock", 8, true);
  let topPadding = prop($$props, "topPadding", 8, false);
  let sourceIds = prop($$props, "sourceIds", 24, () => []);
  let onSave = prop($$props, "onSave", 8, () => {
  });
  let onUpdate = prop($$props, "onUpdate", 8, () => {
  });
  let onPreview = prop($$props, "onPreview", 8, () => {
  });
  let onSourceClick = prop($$props, "onSourceClick", 8, () => {
  });
  let onTaskClick = prop($$props, "onTaskClick", 8, () => {
  });
  let tokens = mutable_source([]);
  const options = {};
  marked.use(markedKatexExtension(options));
  marked.use(markedExtension(options));
  marked.use(citationExtension$1());
  marked.use(footnoteExtension$1());
  marked.use(disableSingleTilde);
  marked.use({
    extensions: [
      mentionExtension({ triggerChar: "@" }),
      mentionExtension({ triggerChar: "#" })
    ]
  });
  legacy_pre_effect(
    () => (deep_read_state(content()), deep_read_state(model()), $user()),
    () => {
      (async () => {
        var _a, _b;
        if (content()) {
          set(tokens, marked.lexer(replaceTokens(processResponseContent(content()), (_a = model()) == null ? void 0 : _a.name, (_b = $user()) == null ? void 0 : _b.name)));
        }
      })();
    }
  );
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  key(node, id, ($$anchor2) => {
    MarkdownTokens($$anchor2, {
      get tokens() {
        return get(tokens);
      },
      get id() {
        return id();
      },
      get done() {
        return done();
      },
      get save() {
        return save();
      },
      get preview() {
        return preview();
      },
      get editCodeBlock() {
        return editCodeBlock();
      },
      get sourceIds() {
        return sourceIds();
      },
      get topPadding() {
        return topPadding();
      },
      get onTaskClick() {
        return onTaskClick();
      },
      get onSourceClick() {
        return onSourceClick();
      },
      get onSave() {
        return onSave();
      },
      get onUpdate() {
        return onUpdate();
      },
      get onPreview() {
        return onPreview();
      }
    });
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_1$1 = from_html(`<iframe width="100%" frameborder="0"></iframe>`);
var root_3$1 = from_html(`<iframe width="100%" frameborder="0"></iframe>`);
function FullHeightIframe($$anchor, $$props) {
  push($$props, false);
  const sandbox = mutable_source();
  const isUrl = mutable_source();
  let src2 = prop(
    $$props,
    "src",
    8,
    null
    // URL or raw HTML (auto-detected)
  );
  let title = prop($$props, "title", 8, "Embedded Content");
  let initialHeight = prop(
    $$props,
    "initialHeight",
    8,
    null
    // initial height in px, null = auto
  );
  let iframeClassName = prop($$props, "iframeClassName", 8, "w-full rounded-2xl");
  let args = prop($$props, "args", 8, null);
  let allowScripts = prop($$props, "allowScripts", 8, true);
  let allowForms = prop($$props, "allowForms", 8, false);
  let allowSameOrigin = prop(
    $$props,
    "allowSameOrigin",
    8,
    false
    // set to true only when you trust the content
  );
  let allowPopups = prop($$props, "allowPopups", 8, false);
  let allowDownloads = prop($$props, "allowDownloads", 8, true);
  let referrerPolicy = prop($$props, "referrerPolicy", 8, "strict-origin-when-cross-origin");
  let allowFullscreen = prop($$props, "allowFullscreen", 8, true);
  let iframe = mutable_source(null);
  let iframeSrc = mutable_source(null);
  let iframeDoc = mutable_source(null);
  const setIframeSrc = async () => {
    await tick();
    if (get(isUrl)) {
      set(iframeSrc, src2());
      set(iframeDoc, null);
    } else {
      set(iframeDoc, await processHtmlForDeps(src2()));
      set(iframeSrc, null);
    }
  };
  const alpineDirectives = [
    "x-data",
    "x-init",
    "x-show",
    "x-bind",
    "x-on",
    "x-text",
    "x-html",
    "x-model",
    "x-modelable",
    "x-ref",
    "x-for",
    "x-if",
    "x-effect",
    "x-transition",
    "x-cloak",
    "x-ignore",
    "x-teleport",
    "x-id"
  ];
  async function processHtmlForDeps(html2) {
    if (!allowSameOrigin()) return html2;
    const scriptTags = [];
    const hasAlpineDirectives = alpineDirectives.some((dir) => html2.includes(dir));
    if (hasAlpineDirectives) {
      try {
        const { default: alpineCode } = await __vitePreload(async () => {
          const { default: alpineCode2 } = await import("./Coz9QFcg.js");
          return { default: alpineCode2 };
        }, true ? [] : void 0, import.meta.url);
        const alpineBlob = new Blob([alpineCode], { type: "text/javascript" });
        const alpineUrl = URL.createObjectURL(alpineBlob);
        const alpineTag = `<script src="${alpineUrl}" defer><\/script>`;
        scriptTags.push(alpineTag);
      } catch (error) {
        console.error("Error processing Alpine for iframe:", error);
      }
    }
    const chartJsDirectives = ["new Chart(", "Chart."];
    const hasChartJsDirectives = chartJsDirectives.some((dir) => html2.includes(dir));
    if (hasChartJsDirectives) {
      try {
        const { default: Chart } = await __vitePreload(async () => {
          const { default: Chart2 } = await import("./Dd5t9uLK.js");
          return { default: Chart2 };
        }, true ? [] : void 0, import.meta.url);
        window.Chart = Chart;
        const chartTag = `<script>
window.Chart = parent.Chart; // Chart previously assigned on parent
<\/script>`;
        scriptTags.push(chartTag);
      } catch (error) {
        console.error("Error processing Chart.js for iframe:", error);
      }
    }
    if (scriptTags.length === 0) return html2;
    const tags = scriptTags.join("\n");
    if (html2.includes("</head>")) {
      return html2.replace("</head>", `${tags}
</head>`);
    }
    if (html2.includes("</body>")) {
      return html2.replace("</body>", `${tags}
</body>`);
    }
    return `${tags}
${html2}`;
  }
  function resizeSameOrigin() {
    var _a, _b, _c;
    if (!get(iframe)) return;
    try {
      const doc = get(iframe).contentDocument || ((_a = get(iframe).contentWindow) == null ? void 0 : _a.document);
      console.log("iframe doc:", doc);
      if (!doc) return;
      const h = Math.max(((_b = doc.documentElement) == null ? void 0 : _b.scrollHeight) ?? 0, ((_c = doc.body) == null ? void 0 : _c.scrollHeight) ?? 0);
      if (h > 0) mutate(iframe, get(iframe).style.height = h + 20 + "px");
    } catch {
    }
  }
  function onMessage(e) {
    if (!get(iframe) || e.source !== get(iframe).contentWindow) return;
    const data = e.data;
    if ((data == null ? void 0 : data.type) === "iframe:height" && typeof data.height === "number") {
      mutate(iframe, get(iframe).style.height = Math.max(0, data.height) + "px");
    }
  }
  const onLoad = async () => {
    var _a;
    requestAnimationFrame(resizeSameOrigin);
    if (args() && ((_a = get(iframe)) == null ? void 0 : _a.contentWindow)) {
      mutate(iframe, get(iframe).contentWindow.args = args());
    }
  };
  onMount(() => {
    window.addEventListener("message", onMessage);
  });
  onDestroy(() => {
    window.removeEventListener("message", onMessage);
  });
  legacy_pre_effect(
    () => (deep_read_state(allowScripts()), deep_read_state(allowForms()), deep_read_state(allowSameOrigin()), deep_read_state(allowPopups()), deep_read_state(allowDownloads())),
    () => {
      set(sandbox, [
        allowScripts() && "allow-scripts",
        allowForms() && "allow-forms",
        allowSameOrigin() && "allow-same-origin",
        allowPopups() && "allow-popups",
        allowDownloads() && "allow-downloads"
      ].filter(Boolean).join(" ") || void 0);
    }
  );
  legacy_pre_effect(() => deep_read_state(src2()), () => {
    set(isUrl, typeof src2() === "string" && /^(https?:)?\/\//i.test(src2()));
  });
  legacy_pre_effect(() => deep_read_state(src2()), () => {
    if (src2()) {
      setIframeSrc();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var iframe_1 = root_1$1();
      bind_this(iframe_1, ($$value) => set(iframe, $$value), () => get(iframe));
      template_effect(() => {
        set_attribute(iframe_1, "srcdoc", get(iframeDoc));
        set_attribute(iframe_1, "title", title());
        set_class(iframe_1, 1, clsx(iframeClassName()));
        set_style(iframe_1, `${initialHeight() ? `height:${initialHeight()}px;` : ""}`);
        set_attribute(iframe_1, "sandbox", get(sandbox));
        iframe_1.allowFullscreen = allowFullscreen();
      });
      event("load", iframe_1, onLoad);
      append($$anchor2, iframe_1);
    };
    var alternate = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      {
        var consequent_1 = ($$anchor3) => {
          var iframe_2 = root_3$1();
          bind_this(iframe_2, ($$value) => set(iframe, $$value), () => get(iframe));
          template_effect(() => {
            set_attribute(iframe_2, "src", get(iframeSrc));
            set_attribute(iframe_2, "title", title());
            set_class(iframe_2, 1, clsx(iframeClassName()));
            set_style(iframe_2, `${initialHeight() ? `height:${initialHeight()}px;` : ""}`);
            set_attribute(iframe_2, "sandbox", get(sandbox));
            set_attribute(iframe_2, "referrerpolicy", referrerPolicy());
            iframe_2.allowFullscreen = allowFullscreen();
          });
          event("load", iframe_2, onLoad);
          append($$anchor3, iframe_2);
        };
        if_block(
          node_1,
          ($$render) => {
            if (get(iframeSrc)) $$render(consequent_1);
          },
          true
        );
      }
      append($$anchor2, fragment_1);
    };
    if_block(node, ($$render) => {
      if (get(iframeDoc)) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_3 = from_html(`<div class="my-2"><!></div>`);
var root_2 = from_html(`<div class="py-1 w-full cursor-pointer"><div class=" w-full text-xs text-gray-500"><div> </div></div> <!></div>`);
var root_5 = from_html(`<div><!></div>`);
var root_11 = from_html(`<div><!></div>`);
var root_4 = from_html(`<div><div><!> <div><!></div> <div class="flex self-center translate-y-[1px]"><!></div></div></div> <!>`, 1);
var root_1 = from_html(`<!> <!>`, 1);
var root_26 = from_html(`<div><!></div>`);
var root_25 = from_html(`<div><div><!> <div><!></div> <div class="flex self-center translate-y-[1px]"><!></div></div></div>`);
var root_42 = from_html(`<div class="flex self-start translate-y-1"><!></div>`);
var root_46 = from_html(`<div><!></div>`);
var root_41 = from_html(`<div><div><div class="flex items-start justify-between"><!> <!></div> <!></div></div>`);
var root_48 = from_html(`<div><!></div>`);
var root_24 = from_html(`<!> <!>`, 1);
var root = from_html(`<div><!></div>`);
function Collapsible($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  dayjs2.extend(duration);
  dayjs2.extend(relativeTime);
  async function loadLocale(locales) {
    if (!locales || !Array.isArray(locales)) {
      return;
    }
    for (const locale of locales) {
      try {
        dayjs2.locale(locale);
        break;
      } catch (error) {
        console.error(`Could not load locale '${locale}':`, error);
      }
    }
  }
  let open = prop($$props, "open", 12, false);
  let className = prop($$props, "className", 8, "");
  let buttonClassName = prop($$props, "buttonClassName", 8, "w-fit text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition");
  let id = prop($$props, "id", 8, "");
  let title = prop($$props, "title", 8, null);
  let attributes = prop($$props, "attributes", 8, null);
  let chevron = prop($$props, "chevron", 8, false);
  let grow = prop($$props, "grow", 8, false);
  let disabled2 = prop($$props, "disabled", 8, false);
  let hide = prop($$props, "hide", 8, false);
  let onChange = prop($$props, "onChange", 8, () => {
  });
  const collapsibleId = v4();
  function parseJSONString(str) {
    try {
      return parseJSONString(JSON.parse(str));
    } catch (e) {
      return str;
    }
  }
  function formatJSONString(str) {
    try {
      const parsed = parseJSONString(str);
      if (typeof parsed === "object") {
        return JSON.stringify(parsed, null, 2);
      } else {
        return `${JSON.stringify(String(parsed))}`;
      }
    } catch (e) {
      return str;
    }
  }
  legacy_pre_effect(() => $i18n(), () => {
    loadLocale($i18n().languages);
  });
  legacy_pre_effect(() => (deep_read_state(onChange()), deep_read_state(open())), () => {
    onChange()(open());
  });
  legacy_pre_effect_reset();
  init();
  var div = root();
  var node = child(div);
  {
    var consequent_14 = ($$anchor2) => {
      const args = derived_safe_equal(() => (deep_read_state(decode), deep_read_state(attributes()), untrack(() => {
        var _a;
        return decode((_a = attributes()) == null ? void 0 : _a.arguments);
      })));
      const result = derived_safe_equal(() => (deep_read_state(decode), deep_read_state(attributes()), untrack(() => {
        var _a;
        return decode(((_a = attributes()) == null ? void 0 : _a.result) ?? "");
      })));
      const files = derived_safe_equal(() => (deep_read_state(decode), deep_read_state(attributes()), untrack(() => {
        var _a;
        return parseJSONString(decode(((_a = attributes()) == null ? void 0 : _a.files) ?? ""));
      })));
      const embeds = derived_safe_equal(() => (deep_read_state(decode), deep_read_state(attributes()), untrack(() => {
        var _a;
        return parseJSONString(decode(((_a = attributes()) == null ? void 0 : _a.embeds) ?? ""));
      })));
      var fragment = root_1();
      var node_1 = first_child(fragment);
      {
        var consequent = ($$anchor3) => {
          var div_1 = root_2();
          var div_2 = child(div_1);
          var div_3 = child(div_2);
          var text2 = child(div_3, true);
          reset(div_3);
          reset(div_2);
          var node_2 = sibling(div_2, 2);
          each(node_2, 1, () => get(embeds), index, ($$anchor4, embed, idx) => {
            var div_4 = root_3();
            var node_3 = child(div_4);
            FullHeightIframe(node_3, {
              get src() {
                return get(embed);
              },
              get args() {
                return get(args);
              },
              allowScripts: true,
              allowForms: true,
              allowSameOrigin: true,
              allowPopups: true
            });
            reset(div_4);
            template_effect(() => set_attribute(div_4, "id", (deep_read_state(attributes()), untrack(() => {
              var _a;
              return `${collapsibleId}-tool-calls-${(_a = attributes()) == null ? void 0 : _a.id}-embed-${idx}`;
            }))));
            append($$anchor4, div_4);
          });
          reset(div_1);
          template_effect(() => set_text(text2, (deep_read_state(attributes()), untrack(() => attributes().name))));
          append($$anchor3, div_1);
        };
        var alternate_4 = ($$anchor3) => {
          var fragment_1 = root_4();
          var div_5 = first_child(fragment_1);
          var div_6 = child(div_5);
          var node_4 = child(div_6);
          {
            var consequent_1 = ($$anchor4) => {
              var div_7 = root_5();
              var node_5 = child(div_7);
              Spinner(node_5, { className: "size-4" });
              reset(div_7);
              append($$anchor4, div_7);
            };
            if_block(node_4, ($$render) => {
              if (deep_read_state(attributes()), untrack(() => {
                var _a, _b;
                return ((_a = attributes()) == null ? void 0 : _a.done) && ((_b = attributes()) == null ? void 0 : _b.done) !== "true";
              })) $$render(consequent_1);
            });
          }
          var div_8 = sibling(node_4, 2);
          var node_6 = child(div_8);
          {
            var consequent_2 = ($$anchor4) => {
              {
                let $0 = derived_safe_equal(() => (deep_read_state(attributes()), untrack(() => {
                  var _a;
                  return `${collapsibleId}-tool-calls-${(_a = attributes()) == null ? void 0 : _a.id}`;
                })));
                let $1 = derived_safe_equal(() => ($i18n(), deep_read_state(attributes()), untrack(() => $i18n().t("View Result from **{{NAME}}**", { NAME: attributes().name }))));
                Markdown($$anchor4, {
                  get id() {
                    return get($0);
                  },
                  get content() {
                    return get($1);
                  }
                });
              }
            };
            var alternate = ($$anchor4) => {
              {
                let $0 = derived_safe_equal(() => (deep_read_state(attributes()), untrack(() => {
                  var _a;
                  return `${collapsibleId}-tool-calls-${(_a = attributes()) == null ? void 0 : _a.id}-executing`;
                })));
                let $1 = derived_safe_equal(() => ($i18n(), deep_read_state(attributes()), untrack(() => $i18n().t("Executing **{{NAME}}**...", { NAME: attributes().name }))));
                Markdown($$anchor4, {
                  get id() {
                    return get($0);
                  },
                  get content() {
                    return get($1);
                  }
                });
              }
            };
            if_block(node_6, ($$render) => {
              if (deep_read_state(attributes()), untrack(() => {
                var _a;
                return ((_a = attributes()) == null ? void 0 : _a.done) === "true";
              })) $$render(consequent_2);
              else $$render(alternate, false);
            });
          }
          reset(div_8);
          var div_9 = sibling(div_8, 2);
          var node_7 = child(div_9);
          {
            var consequent_3 = ($$anchor4) => {
              ChevronUp($$anchor4, { strokeWidth: "3.5", className: "size-3.5" });
            };
            var alternate_1 = ($$anchor4) => {
              ChevronDown($$anchor4, { strokeWidth: "3.5", className: "size-3.5" });
            };
            if_block(node_7, ($$render) => {
              if (open()) $$render(consequent_3);
              else $$render(alternate_1, false);
            });
          }
          reset(div_9);
          reset(div_6);
          reset(div_5);
          var node_8 = sibling(div_5, 2);
          {
            var consequent_7 = ($$anchor4) => {
              var fragment_6 = comment();
              var node_9 = first_child(fragment_6);
              {
                var consequent_6 = ($$anchor5) => {
                  var div_10 = root_11();
                  var node_10 = child(div_10);
                  {
                    var consequent_5 = ($$anchor6) => {
                      var fragment_7 = comment();
                      var node_11 = first_child(fragment_7);
                      {
                        var consequent_4 = ($$anchor7) => {
                          {
                            let $0 = derived_safe_equal(() => (deep_read_state(attributes()), untrack(() => {
                              var _a;
                              return `${collapsibleId}-tool-calls-${(_a = attributes()) == null ? void 0 : _a.id}-result`;
                            })));
                            let $1 = derived_safe_equal(() => (deep_read_state(get(args)), deep_read_state(get(result)), untrack(() => `> \`\`\`json
> ${formatJSONString(get(args))}
> ${formatJSONString(get(result))}
> \`\`\``)));
                            Markdown($$anchor7, {
                              get id() {
                                return get($0);
                              },
                              get content() {
                                return get($1);
                              }
                            });
                          }
                        };
                        var alternate_2 = ($$anchor7) => {
                          {
                            let $0 = derived_safe_equal(() => (deep_read_state(attributes()), untrack(() => {
                              var _a;
                              return `${collapsibleId}-tool-calls-${(_a = attributes()) == null ? void 0 : _a.id}-result`;
                            })));
                            let $1 = derived_safe_equal(() => (deep_read_state(get(args)), untrack(() => `> \`\`\`json
> ${formatJSONString(get(args))}
> \`\`\``)));
                            Markdown($$anchor7, {
                              get id() {
                                return get($0);
                              },
                              get content() {
                                return get($1);
                              }
                            });
                          }
                        };
                        if_block(node_11, ($$render) => {
                          if (deep_read_state(attributes()), untrack(() => {
                            var _a;
                            return ((_a = attributes()) == null ? void 0 : _a.done) === "true";
                          })) $$render(consequent_4);
                          else $$render(alternate_2, false);
                        });
                      }
                      append($$anchor6, fragment_7);
                    };
                    var alternate_3 = ($$anchor6) => {
                      var fragment_10 = comment();
                      var node_12 = first_child(fragment_10);
                      slot(node_12, $$props, "content", {}, null);
                      append($$anchor6, fragment_10);
                    };
                    if_block(node_10, ($$render) => {
                      if (deep_read_state(attributes()), untrack(() => {
                        var _a;
                        return ((_a = attributes()) == null ? void 0 : _a.type) === "tool_calls";
                      })) $$render(consequent_5);
                      else $$render(alternate_3, false);
                    });
                  }
                  reset(div_10);
                  transition(3, div_10, () => slide, () => ({ duration: 300, easing: quintOut, axis: "y" }));
                  append($$anchor5, div_10);
                };
                if_block(node_9, ($$render) => {
                  if (open() && !hide()) $$render(consequent_6);
                });
              }
              append($$anchor4, fragment_6);
            };
            if_block(node_8, ($$render) => {
              if (!grow()) $$render(consequent_7);
            });
          }
          template_effect(() => {
            set_class(div_5, 1, `${buttonClassName() ?? ""} cursor-pointer`);
            set_class(div_6, 1, ` w-full font-medium flex items-center justify-between gap-2 ${(deep_read_state(attributes()), untrack(() => {
              var _a, _b;
              return ((_a = attributes()) == null ? void 0 : _a.done) && ((_b = attributes()) == null ? void 0 : _b.done) !== "true" ? "shimmer" : "";
            })) ?? ""}
			`);
          });
          event("pointerup", div_5, () => {
            if (!disabled2()) {
              open(!open());
            }
          });
          append($$anchor3, fragment_1);
        };
        if_block(node_1, ($$render) => {
          if (deep_read_state(get(embeds)), untrack(() => get(embeds) && Array.isArray(get(embeds)) && get(embeds).length > 0)) $$render(consequent);
          else $$render(alternate_4, false);
        });
      }
      var node_13 = sibling(node_1, 2);
      {
        var consequent_13 = ($$anchor3) => {
          var fragment_11 = comment();
          var node_14 = first_child(fragment_11);
          {
            var consequent_12 = ($$anchor4) => {
              var fragment_12 = comment();
              var node_15 = first_child(fragment_12);
              each(node_15, 1, () => get(files) ?? [], index, ($$anchor5, file, idx) => {
                var fragment_13 = comment();
                var node_16 = first_child(fragment_13);
                {
                  var consequent_9 = ($$anchor6) => {
                    var fragment_14 = comment();
                    var node_17 = first_child(fragment_14);
                    {
                      var consequent_8 = ($$anchor7) => {
                        {
                          let $0 = derived_safe_equal(() => (deep_read_state(attributes()), untrack(() => {
                            var _a;
                            return `${collapsibleId}-tool-calls-${(_a = attributes()) == null ? void 0 : _a.id}-result-${idx}`;
                          })));
                          Image($$anchor7, {
                            get id() {
                              return get($0);
                            },
                            get src() {
                              return get(file);
                            },
                            alt: "Image"
                          });
                        }
                      };
                      if_block(node_17, ($$render) => {
                        if (get(file), untrack(() => get(file).startsWith("data:image/"))) $$render(consequent_8);
                      });
                    }
                    append($$anchor6, fragment_14);
                  };
                  var alternate_5 = ($$anchor6) => {
                    var fragment_16 = comment();
                    var node_18 = first_child(fragment_16);
                    {
                      var consequent_11 = ($$anchor7) => {
                        var fragment_17 = comment();
                        var node_19 = first_child(fragment_17);
                        {
                          var consequent_10 = ($$anchor8) => {
                            {
                              let $0 = derived_safe_equal(() => (deep_read_state(attributes()), untrack(() => {
                                var _a;
                                return `${collapsibleId}-tool-calls-${(_a = attributes()) == null ? void 0 : _a.id}-result-${idx}`;
                              })));
                              Image($$anchor8, {
                                get id() {
                                  return get($0);
                                },
                                get src() {
                                  return get(file), untrack(() => get(file).url);
                                },
                                alt: "Image"
                              });
                            }
                          };
                          if_block(node_19, ($$render) => {
                            if (get(file), untrack(() => get(file).type === "image" && get(file).url)) $$render(consequent_10);
                          });
                        }
                        append($$anchor7, fragment_17);
                      };
                      if_block(
                        node_18,
                        ($$render) => {
                          if (typeof get(file) === "object") $$render(consequent_11);
                        },
                        true
                      );
                    }
                    append($$anchor6, fragment_16);
                  };
                  if_block(node_16, ($$render) => {
                    if (typeof get(file) === "string") $$render(consequent_9);
                    else $$render(alternate_5, false);
                  });
                }
                append($$anchor5, fragment_13);
              });
              append($$anchor4, fragment_12);
            };
            if_block(node_14, ($$render) => {
              if (typeof get(files) === "object") $$render(consequent_12);
            });
          }
          append($$anchor3, fragment_11);
        };
        if_block(node_13, ($$render) => {
          if (deep_read_state(attributes()), untrack(() => {
            var _a;
            return ((_a = attributes()) == null ? void 0 : _a.done) === "true";
          })) $$render(consequent_13);
        });
      }
      append($$anchor2, fragment);
    };
    var alternate_15 = ($$anchor2) => {
      var fragment_19 = root_24();
      var node_20 = first_child(fragment_19);
      {
        var consequent_23 = ($$anchor3) => {
          var div_11 = root_25();
          var div_12 = child(div_11);
          var node_21 = child(div_12);
          {
            var consequent_15 = ($$anchor4) => {
              var div_13 = root_26();
              var node_22 = child(div_13);
              Spinner(node_22, { className: "size-4" });
              reset(div_13);
              append($$anchor4, div_13);
            };
            if_block(node_21, ($$render) => {
              if (deep_read_state(attributes()), untrack(() => {
                var _a, _b;
                return ((_a = attributes()) == null ? void 0 : _a.done) && ((_b = attributes()) == null ? void 0 : _b.done) !== "true";
              })) $$render(consequent_15);
            });
          }
          var div_14 = sibling(node_21, 2);
          var node_23 = child(div_14);
          {
            var consequent_19 = ($$anchor4) => {
              var fragment_20 = comment();
              var node_24 = first_child(fragment_20);
              {
                var consequent_18 = ($$anchor5) => {
                  var fragment_21 = comment();
                  var node_25 = first_child(fragment_21);
                  {
                    var consequent_16 = ($$anchor6) => {
                      var text_1 = text();
                      template_effect(($0) => set_text(text_1, $0), [
                        () => ($i18n(), untrack(() => $i18n().t("Thought for less than a second")))
                      ]);
                      append($$anchor6, text_1);
                    };
                    var alternate_7 = ($$anchor6) => {
                      var fragment_23 = comment();
                      var node_26 = first_child(fragment_23);
                      {
                        var consequent_17 = ($$anchor7) => {
                          var text_2 = text();
                          template_effect(($0) => set_text(text_2, $0), [
                            () => ($i18n(), deep_read_state(attributes()), untrack(() => $i18n().t("Thought for {{DURATION}} seconds", { DURATION: attributes().duration })))
                          ]);
                          append($$anchor7, text_2);
                        };
                        var alternate_6 = ($$anchor7) => {
                          var text_3 = text();
                          template_effect(($0) => set_text(text_3, $0), [
                            () => ($i18n(), deep_read_state(dayjs2), deep_read_state(attributes()), untrack(() => $i18n().t("Thought for {{DURATION}}", {
                              DURATION: dayjs2.duration(attributes().duration, "seconds").humanize()
                            })))
                          ]);
                          append($$anchor7, text_3);
                        };
                        if_block(
                          node_26,
                          ($$render) => {
                            if (deep_read_state(attributes()), untrack(() => attributes().duration < 60)) $$render(consequent_17);
                            else $$render(alternate_6, false);
                          },
                          true
                        );
                      }
                      append($$anchor6, fragment_23);
                    };
                    if_block(node_25, ($$render) => {
                      if (deep_read_state(attributes()), untrack(() => attributes().duration < 1)) $$render(consequent_16);
                      else $$render(alternate_7, false);
                    });
                  }
                  append($$anchor5, fragment_21);
                };
                var alternate_8 = ($$anchor5) => {
                  var text_4 = text();
                  template_effect(($0) => set_text(text_4, $0), [() => ($i18n(), untrack(() => $i18n().t("Thinking...")))]);
                  append($$anchor5, text_4);
                };
                if_block(node_24, ($$render) => {
                  if (deep_read_state(attributes()), untrack(() => {
                    var _a, _b;
                    return ((_a = attributes()) == null ? void 0 : _a.done) === "true" && ((_b = attributes()) == null ? void 0 : _b.duration);
                  })) $$render(consequent_18);
                  else $$render(alternate_8, false);
                });
              }
              append($$anchor4, fragment_20);
            };
            var alternate_11 = ($$anchor4) => {
              var fragment_27 = comment();
              var node_27 = first_child(fragment_27);
              {
                var consequent_21 = ($$anchor5) => {
                  var fragment_28 = comment();
                  var node_28 = first_child(fragment_28);
                  {
                    var consequent_20 = ($$anchor6) => {
                      var text_5 = text();
                      template_effect(($0) => set_text(text_5, $0), [() => ($i18n(), untrack(() => $i18n().t("Analyzed")))]);
                      append($$anchor6, text_5);
                    };
                    var alternate_9 = ($$anchor6) => {
                      var text_6 = text();
                      template_effect(($0) => set_text(text_6, $0), [() => ($i18n(), untrack(() => $i18n().t("Analyzing...")))]);
                      append($$anchor6, text_6);
                    };
                    if_block(node_28, ($$render) => {
                      if (deep_read_state(attributes()), untrack(() => {
                        var _a;
                        return ((_a = attributes()) == null ? void 0 : _a.done) === "true";
                      })) $$render(consequent_20);
                      else $$render(alternate_9, false);
                    });
                  }
                  append($$anchor5, fragment_28);
                };
                var alternate_10 = ($$anchor5) => {
                  var text_7 = text();
                  template_effect(() => set_text(text_7, title()));
                  append($$anchor5, text_7);
                };
                if_block(
                  node_27,
                  ($$render) => {
                    if (deep_read_state(attributes()), untrack(() => {
                      var _a;
                      return ((_a = attributes()) == null ? void 0 : _a.type) === "code_interpreter";
                    })) $$render(consequent_21);
                    else $$render(alternate_10, false);
                  },
                  true
                );
              }
              append($$anchor4, fragment_27);
            };
            if_block(node_23, ($$render) => {
              if (deep_read_state(attributes()), untrack(() => {
                var _a;
                return ((_a = attributes()) == null ? void 0 : _a.type) === "reasoning";
              })) $$render(consequent_19);
              else $$render(alternate_11, false);
            });
          }
          reset(div_14);
          var div_15 = sibling(div_14, 2);
          var node_29 = child(div_15);
          {
            var consequent_22 = ($$anchor4) => {
              ChevronUp($$anchor4, { strokeWidth: "3.5", className: "size-3.5" });
            };
            var alternate_12 = ($$anchor4) => {
              ChevronDown($$anchor4, { strokeWidth: "3.5", className: "size-3.5" });
            };
            if_block(node_29, ($$render) => {
              if (open()) $$render(consequent_22);
              else $$render(alternate_12, false);
            });
          }
          reset(div_15);
          reset(div_12);
          reset(div_11);
          template_effect(() => {
            set_class(div_11, 1, `${buttonClassName() ?? ""} cursor-pointer`);
            set_class(div_12, 1, ` w-full font-medium flex items-center justify-between gap-2 ${(deep_read_state(attributes()), untrack(() => {
              var _a, _b;
              return ((_a = attributes()) == null ? void 0 : _a.done) && ((_b = attributes()) == null ? void 0 : _b.done) !== "true" ? "shimmer" : "";
            })) ?? ""}
			`);
          });
          event("pointerup", div_11, () => {
            if (!disabled2()) {
              open(!open());
            }
          });
          append($$anchor3, div_11);
        };
        var alternate_14 = ($$anchor3) => {
          var div_16 = root_41();
          var div_17 = child(div_16);
          var div_18 = child(div_17);
          var node_30 = child(div_18);
          slot(node_30, $$props, "default", {}, null);
          var node_31 = sibling(node_30, 2);
          {
            var consequent_25 = ($$anchor4) => {
              var div_19 = root_42();
              var node_32 = child(div_19);
              {
                var consequent_24 = ($$anchor5) => {
                  ChevronUp($$anchor5, { strokeWidth: "3.5", className: "size-3.5" });
                };
                var alternate_13 = ($$anchor5) => {
                  ChevronDown($$anchor5, { strokeWidth: "3.5", className: "size-3.5" });
                };
                if_block(node_32, ($$render) => {
                  if (open()) $$render(consequent_24);
                  else $$render(alternate_13, false);
                });
              }
              reset(div_19);
              append($$anchor4, div_19);
            };
            if_block(node_31, ($$render) => {
              if (chevron()) $$render(consequent_25);
            });
          }
          reset(div_18);
          var node_33 = sibling(div_18, 2);
          {
            var consequent_27 = ($$anchor4) => {
              var fragment_36 = comment();
              var node_34 = first_child(fragment_36);
              {
                var consequent_26 = ($$anchor5) => {
                  var div_20 = root_46();
                  var node_35 = child(div_20);
                  slot(node_35, $$props, "content", {}, null);
                  reset(div_20);
                  transition(3, div_20, () => slide, () => ({ duration: 300, easing: quintOut, axis: "y" }));
                  event("pointerup", div_20, (e) => {
                    e.stopPropagation();
                  });
                  append($$anchor5, div_20);
                };
                if_block(node_34, ($$render) => {
                  if (open() && !hide()) $$render(consequent_26);
                });
              }
              append($$anchor4, fragment_36);
            };
            if_block(node_33, ($$render) => {
              if (grow()) $$render(consequent_27);
            });
          }
          reset(div_17);
          reset(div_16);
          template_effect(() => set_class(div_16, 1, `${buttonClassName() ?? ""} cursor-pointer`));
          event("click", div_16, (e) => {
            e.stopPropagation();
          });
          event("pointerup", div_16, (e) => {
            if (!disabled2()) {
              open(!open());
            }
          });
          append($$anchor3, div_16);
        };
        if_block(node_20, ($$render) => {
          if (title() !== null) $$render(consequent_23);
          else $$render(alternate_14, false);
        });
      }
      var node_36 = sibling(node_20, 2);
      {
        var consequent_29 = ($$anchor3) => {
          var fragment_37 = comment();
          var node_37 = first_child(fragment_37);
          {
            var consequent_28 = ($$anchor4) => {
              var div_21 = root_48();
              var node_38 = child(div_21);
              slot(node_38, $$props, "content", {}, null);
              reset(div_21);
              transition(3, div_21, () => slide, () => ({ duration: 300, easing: quintOut, axis: "y" }));
              append($$anchor4, div_21);
            };
            if_block(node_37, ($$render) => {
              if (open() && !hide()) $$render(consequent_28);
            });
          }
          append($$anchor3, fragment_37);
        };
        if_block(node_36, ($$render) => {
          if (!grow()) $$render(consequent_29);
        });
      }
      append($$anchor2, fragment_19);
    };
    if_block(node, ($$render) => {
      if (deep_read_state(attributes()), untrack(() => {
        var _a;
        return ((_a = attributes()) == null ? void 0 : _a.type) === "tool_calls";
      })) $$render(consequent_14);
      else $$render(alternate_15, false);
    });
  }
  reset(div);
  template_effect(() => {
    set_attribute(div, "id", id());
    set_class(div, 1, clsx(className()));
  });
  append($$anchor, div);
  pop();
  $$cleanup();
}
export {
  Bolt as B,
  Collapsible as C,
  FullHeightIframe as F,
  Image as I,
  Link_preview as L,
  Markdown as M,
  SVGPanZoom as S,
  UserStatusLinkPreview as U,
  Link_preview_trigger as a,
  Info as b,
  CodeBlock as c,
  LightBulb as d,
  Clipboard as e
};
