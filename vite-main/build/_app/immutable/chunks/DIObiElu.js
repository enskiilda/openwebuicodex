import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, aP as derived, l as legacy_pre_effect, i as deep_read_state, j as legacy_pre_effect_reset, f as first_child, a as pop, s as set, m as mutable_source, b as get, c as child, r as reset, A as effect } from "./BxIY6ir7.js";
import { c as comment, a as append, f as from_html } from "./CAbo1QWi.js";
import { s as slot } from "./CZEGIGsR.js";
import { i as init } from "./ByqEASoO.js";
import { p as prop, l as legacy_rest_props } from "./BRmGPDvq.js";
import { a as store_get, s as setup_stores } from "./BvQ5O7-v.js";
import { s as setSubMenuCtx, g as getSubmenuCtx, u as updateSubPositioning, d as getSubTrigger, e as bubble_event } from "./DQmZL-p0.js";
import { e as event } from "./cBADewWV.js";
import { i as if_block } from "./BoSuMvtf.js";
import { c as createDispatcher, a as action, d as disabledAttrs } from "./C2A39Ney.js";
import { f as attribute_effect } from "./kXiCYuyj.js";
import { t as transition } from "./B3nUhwYU.js";
import { b as bind_this } from "./D16JuV5t.js";
function Menu_sub($$anchor, $$props) {
  push($$props, false);
  const $idValues = () => store_get(idValues, "$idValues", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let disabled = prop($$props, "disabled", 24, () => void 0);
  let open = prop($$props, "open", 28, () => void 0);
  let onOpenChange = prop($$props, "onOpenChange", 24, () => void 0);
  const { updateOption, ids, states: { subOpen } } = setSubMenuCtx({
    disabled: disabled(),
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
    open() !== void 0 && subOpen.set(open());
  });
  legacy_pre_effect(() => deep_read_state(disabled()), () => {
    updateOption("disabled", disabled());
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
      get subIds() {
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
function Menu_sub_content($$anchor, $$props) {
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
  const $subMenu = () => store_get(subMenu, "$subMenu", $$stores);
  const $subOpen = () => store_get(subOpen, "$subOpen", $$stores);
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
  let side = prop($$props, "side", 8, "right");
  let align = prop($$props, "align", 8, "start");
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
  const { elements: { subMenu }, states: { subOpen }, ids, getAttrs } = getSubmenuCtx();
  const dispatch = createDispatcher();
  const attrs = getAttrs("sub-content");
  legacy_pre_effect(() => deep_read_state(id()), () => {
    if (id()) {
      ids.menu.set(id());
    }
  });
  legacy_pre_effect(() => $subMenu(), () => {
    set(builder, $subMenu());
  });
  legacy_pre_effect(() => get(builder), () => {
    Object.assign(get(builder), attrs);
  });
  legacy_pre_effect(
    () => (deep_read_state(side()), deep_read_state(align()), deep_read_state(sideOffset()), deep_read_state(alignOffset()), deep_read_state(collisionPadding()), deep_read_state(avoidCollisions()), deep_read_state(collisionBoundary()), deep_read_state(sameWidth()), deep_read_state(fitViewport()), deep_read_state(strategy()), deep_read_state(overlap())),
    () => {
      updateSubPositioning({
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
          var div = root_3();
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
          effect(() => event("m-focusout", div, dispatch));
          effect(() => event("m-keydown", div, dispatch));
          effect(() => event("m-pointermove", div, dispatch));
          transition(3, div, transition$1, transitionConfig);
          append($$anchor3, div);
        };
        var alternate_3 = ($$anchor3) => {
          var fragment_3 = comment();
          var node_4 = first_child(fragment_3);
          {
            var consequent_2 = ($$anchor4) => {
              var div_1 = root_5();
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
              effect(() => event("m-focusout", div_1, dispatch));
              effect(() => event("m-keydown", div_1, dispatch));
              effect(() => event("m-pointermove", div_1, dispatch));
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
                  effect(() => event("m-focusout", div_2, dispatch));
                  effect(() => event("m-keydown", div_2, dispatch));
                  effect(() => event("m-pointermove", div_2, dispatch));
                  transition(1, div_2, inTransition, inTransitionConfig);
                  append($$anchor5, div_2);
                };
                var alternate_1 = ($$anchor5) => {
                  var fragment_5 = comment();
                  var node_8 = first_child(fragment_5);
                  {
                    var consequent_4 = ($$anchor6) => {
                      var div_3 = root_9();
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
                      effect(() => event("m-focusout", div_3, dispatch));
                      effect(() => event("m-keydown", div_3, dispatch));
                      effect(() => event("m-pointermove", div_3, dispatch));
                      transition(2, div_3, outTransition, outTransitionConfig);
                      append($$anchor6, div_3);
                    };
                    var alternate = ($$anchor6) => {
                      var fragment_6 = comment();
                      var node_10 = first_child(fragment_6);
                      {
                        var consequent_5 = ($$anchor7) => {
                          var div_4 = root_11();
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
                          effect(() => event("m-focusout", div_4, dispatch));
                          effect(() => event("m-keydown", div_4, dispatch));
                          effect(() => event("m-pointermove", div_4, dispatch));
                          append($$anchor7, div_4);
                        };
                        if_block(
                          node_10,
                          ($$render) => {
                            if ($subOpen()) $$render(consequent_5);
                          },
                          true
                        );
                      }
                      append($$anchor6, fragment_6);
                    };
                    if_block(
                      node_8,
                      ($$render) => {
                        if (outTransition() && $subOpen()) $$render(consequent_4);
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
                    if (inTransition() && $subOpen()) $$render(consequent_3);
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
                if (inTransition() && outTransition() && $subOpen()) $$render(consequent_2);
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
            if (transition$1() && $subOpen()) $$render(consequent_1);
            else $$render(alternate_3, false);
          },
          true
        );
      }
      append($$anchor2, fragment_2);
    };
    if_block(node, ($$render) => {
      if (asChild() && $subOpen()) $$render(consequent);
      else $$render(alternate_4, false);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_2 = from_html(`<div><!></div>`);
function Menu_sub_trigger($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const $$restProps = legacy_rest_props($$sanitized_props, ["disabled", "asChild", "id", "el"]);
  push($$props, false);
  const $subTrigger = () => store_get(subTrigger, "$subTrigger", $$stores);
  const $disabledStore = () => store_get(disabledStore, "$disabledStore", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const builder = mutable_source();
  const attrs = mutable_source();
  let disabled = prop($$props, "disabled", 8, false);
  let asChild = prop($$props, "asChild", 8, false);
  let id = prop($$props, "id", 24, () => void 0);
  let el = prop($$props, "el", 28, () => void 0);
  const { elements: { subTrigger }, ids, getAttrs, options } = getSubTrigger();
  const { disabled: disabledStore } = options;
  const dispatch = createDispatcher();
  legacy_pre_effect(() => deep_read_state(id()), () => {
    if (id()) {
      ids.trigger.set(id());
    }
  });
  legacy_pre_effect(() => $subTrigger(), () => {
    set(builder, $subTrigger());
  });
  legacy_pre_effect(
    () => (deep_read_state(disabled()), $disabledStore()),
    () => {
      set(attrs, {
        ...getAttrs("sub-trigger"),
        ...disabledAttrs(disabled() || $disabledStore())
      });
    }
  );
  legacy_pre_effect(() => (get(builder), get(attrs)), () => {
    Object.assign(get(builder), get(attrs));
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
      var div = root_2();
      attribute_effect(div, () => ({ ...get(builder), ...$$restProps }));
      var node_2 = child(div);
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
      reset(div);
      bind_this(div, ($$value) => el($$value), () => el());
      action(div, ($$node) => {
        var _a, _b;
        return (_b = (_a = get(builder)).action) == null ? void 0 : _b.call(_a, $$node);
      });
      effect(() => event("m-click", div, dispatch));
      effect(() => event("m-focusin", div, dispatch));
      effect(() => event("m-focusout", div, dispatch));
      effect(() => event("m-keydown", div, dispatch));
      effect(() => event("m-pointerleave", div, dispatch));
      effect(() => event("m-pointermove", div, dispatch));
      effect(() => event("pointerenter", div, function($$arg) {
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
export {
  Menu_sub as M,
  Menu_sub_trigger as a,
  Menu_sub_content as b
};
