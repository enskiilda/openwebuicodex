import { _ as create_text, z as block, a5 as set_hydrate_node, x as hydrating, a1 as get_first_child, y as hydrate_next, b as get, h as derived_safe_equal, ac as read_hydration_instruction, ad as HYDRATION_START_ELSE, ae as skip_nodes, a4 as set_hydrating, a6 as hydrate_node, a2 as COMMENT_NODE, af as HYDRATION_END, ag as internal_set, ah as current_batch, ai as branch, aj as should_defer_append, m as mutable_source, F as source, ak as array_from, al as is_array, am as EACH_INDEX_REACTIVE, an as resume_effect, ao as pause_effect, ap as EACH_ITEM_REACTIVE, aq as EACH_ITEM_IMMUTABLE, ar as INERT, a3 as get_next_sibling, as as pause_children, at as run_out_transitions, au as clear_text_content, av as destroy_effect, C as queue_micro_task, aw as EACH_IS_CONTROLLED, ax as EACH_IS_ANIMATED } from "./BxIY6ir7.js";
function index(_, i) {
  return i;
}
function pause_effects(state, to_destroy, controlled_anchor) {
  var transitions = [];
  var length = to_destroy.length;
  for (var i = 0; i < length; i++) {
    pause_children(to_destroy[i].e, transitions, true);
  }
  run_out_transitions(transitions, () => {
    var fast_path = transitions.length === 0 && controlled_anchor !== null;
    if (fast_path) {
      var anchor = (
        /** @type {Element} */
        controlled_anchor
      );
      var parent_node = (
        /** @type {Element} */
        anchor.parentNode
      );
      clear_text_content(parent_node);
      parent_node.append(anchor);
      state.items.clear();
      link(state, to_destroy[0].prev, to_destroy[length - 1].next);
    }
    for (var i2 = 0; i2 < length; i2++) {
      var item = to_destroy[i2];
      if (!fast_path) {
        state.items.delete(item.k);
        link(state, item.prev, item.next);
      }
      destroy_effect(item.e, !fast_path);
    }
    if (state.first === to_destroy[0]) {
      state.first = to_destroy[0].prev;
    }
  });
}
function each(node, flags, get_collection, get_key, render_fn, fallback_fn = null) {
  var anchor = node;
  var items = /* @__PURE__ */ new Map();
  var first = null;
  var is_controlled = (flags & EACH_IS_CONTROLLED) !== 0;
  var is_reactive_value = (flags & EACH_ITEM_REACTIVE) !== 0;
  var is_reactive_index = (flags & EACH_INDEX_REACTIVE) !== 0;
  if (is_controlled) {
    var parent_node = (
      /** @type {Element} */
      node
    );
    anchor = hydrating ? set_hydrate_node(
      /** @type {Comment | Text} */
      get_first_child(parent_node)
    ) : parent_node.appendChild(create_text());
  }
  if (hydrating) {
    hydrate_next();
  }
  var fallback = null;
  var each_array = derived_safe_equal(() => {
    var collection = get_collection();
    return is_array(collection) ? collection : collection == null ? [] : array_from(collection);
  });
  var array;
  var first_run = true;
  function commit() {
    reconcile(state, array, anchor, flags, get_key);
    if (fallback !== null) {
      if (array.length === 0) {
        if (fallback.fragment) {
          anchor.before(fallback.fragment);
          fallback.fragment = null;
        } else {
          resume_effect(fallback.effect);
        }
        effect.first = fallback.effect;
      } else {
        pause_effect(fallback.effect, () => {
          fallback = null;
        });
      }
    }
  }
  var effect = block(() => {
    array = /** @type {V[]} */
    get(each_array);
    var length = array.length;
    let mismatch = false;
    if (hydrating) {
      var is_else = read_hydration_instruction(anchor) === HYDRATION_START_ELSE;
      if (is_else !== (length === 0)) {
        anchor = skip_nodes();
        set_hydrate_node(anchor);
        set_hydrating(false);
        mismatch = true;
      }
    }
    var keys = /* @__PURE__ */ new Set();
    var batch = (
      /** @type {Batch} */
      current_batch
    );
    var prev = null;
    var defer = should_defer_append();
    for (var i = 0; i < length; i += 1) {
      if (hydrating && hydrate_node.nodeType === COMMENT_NODE && /** @type {Comment} */
      hydrate_node.data === HYDRATION_END) {
        anchor = /** @type {Comment} */
        hydrate_node;
        mismatch = true;
        set_hydrating(false);
      }
      var value = array[i];
      var key = get_key(value, i);
      var item = first_run ? null : items.get(key);
      if (item) {
        if (is_reactive_value) {
          internal_set(item.v, value);
        }
        if (is_reactive_index) {
          internal_set(
            /** @type {Value<number>} */
            item.i,
            i
          );
        } else {
          item.i = i;
        }
        if (defer) {
          batch.skipped_effects.delete(item.e);
        }
      } else {
        item = create_item(
          first_run ? anchor : null,
          prev,
          value,
          key,
          i,
          render_fn,
          flags,
          get_collection
        );
        if (first_run) {
          item.o = true;
          if (prev === null) {
            first = item;
          } else {
            prev.next = item;
          }
          prev = item;
        }
        items.set(key, item);
      }
      keys.add(key);
    }
    if (length === 0 && fallback_fn && !fallback) {
      if (first_run) {
        fallback = {
          fragment: null,
          effect: branch(() => fallback_fn(anchor))
        };
      } else {
        var fragment = document.createDocumentFragment();
        var target = create_text();
        fragment.append(target);
        fallback = {
          fragment,
          effect: branch(() => fallback_fn(target))
        };
      }
    }
    if (hydrating && length > 0) {
      set_hydrate_node(skip_nodes());
    }
    if (!first_run) {
      if (defer) {
        for (const [key2, item2] of items) {
          if (!keys.has(key2)) {
            batch.skipped_effects.add(item2.e);
          }
        }
        batch.oncommit(commit);
        batch.ondiscard(() => {
        });
      } else {
        commit();
      }
    }
    if (mismatch) {
      set_hydrating(true);
    }
    get(each_array);
  });
  var state = { effect, items, first };
  first_run = false;
  if (hydrating) {
    anchor = hydrate_node;
  }
}
function reconcile(state, array, anchor, flags, get_key) {
  var _a, _b, _c, _d;
  var is_animated = (flags & EACH_IS_ANIMATED) !== 0;
  var length = array.length;
  var items = state.items;
  var current = state.first;
  var seen;
  var prev = null;
  var to_animate;
  var matched = [];
  var stashed = [];
  var value;
  var key;
  var item;
  var i;
  if (is_animated) {
    for (i = 0; i < length; i += 1) {
      value = array[i];
      key = get_key(value, i);
      item = /** @type {EachItem} */
      items.get(key);
      if (item.o) {
        (_a = item.a) == null ? void 0 : _a.measure();
        (to_animate ?? (to_animate = /* @__PURE__ */ new Set())).add(item);
      }
    }
  }
  for (i = 0; i < length; i += 1) {
    value = array[i];
    key = get_key(value, i);
    item = /** @type {EachItem} */
    items.get(key);
    state.first ?? (state.first = item);
    if (!item.o) {
      item.o = true;
      var next = prev ? prev.next : current;
      link(state, prev, item);
      link(state, item, next);
      move(item, next, anchor);
      prev = item;
      matched = [];
      stashed = [];
      current = prev.next;
      continue;
    }
    if ((item.e.f & INERT) !== 0) {
      resume_effect(item.e);
      if (is_animated) {
        (_b = item.a) == null ? void 0 : _b.unfix();
        (to_animate ?? (to_animate = /* @__PURE__ */ new Set())).delete(item);
      }
    }
    if (item !== current) {
      if (seen !== void 0 && seen.has(item)) {
        if (matched.length < stashed.length) {
          var start = stashed[0];
          var j;
          prev = start.prev;
          var a = matched[0];
          var b = matched[matched.length - 1];
          for (j = 0; j < matched.length; j += 1) {
            move(matched[j], start, anchor);
          }
          for (j = 0; j < stashed.length; j += 1) {
            seen.delete(stashed[j]);
          }
          link(state, a.prev, b.next);
          link(state, prev, a);
          link(state, b, start);
          current = start;
          prev = b;
          i -= 1;
          matched = [];
          stashed = [];
        } else {
          seen.delete(item);
          move(item, current, anchor);
          link(state, item.prev, item.next);
          link(state, item, prev === null ? state.first : prev.next);
          link(state, prev, item);
          prev = item;
        }
        continue;
      }
      matched = [];
      stashed = [];
      while (current !== null && current.k !== key) {
        if ((current.e.f & INERT) === 0) {
          (seen ?? (seen = /* @__PURE__ */ new Set())).add(current);
        }
        stashed.push(current);
        current = current.next;
      }
      if (current === null) {
        continue;
      }
      item = current;
    }
    matched.push(item);
    prev = item;
    current = item.next;
  }
  let has_offscreen_items = items.size > length;
  if (current !== null || seen !== void 0) {
    var to_destroy = seen === void 0 ? [] : array_from(seen);
    while (current !== null) {
      if ((current.e.f & INERT) === 0) {
        to_destroy.push(current);
      }
      current = current.next;
    }
    var destroy_length = to_destroy.length;
    has_offscreen_items = items.size - destroy_length > length;
    if (destroy_length > 0) {
      var controlled_anchor = (flags & EACH_IS_CONTROLLED) !== 0 && length === 0 ? anchor : null;
      if (is_animated) {
        for (i = 0; i < destroy_length; i += 1) {
          (_c = to_destroy[i].a) == null ? void 0 : _c.measure();
        }
        for (i = 0; i < destroy_length; i += 1) {
          (_d = to_destroy[i].a) == null ? void 0 : _d.fix();
        }
      }
      pause_effects(state, to_destroy, controlled_anchor);
    }
  }
  if (has_offscreen_items) {
    for (const item2 of items.values()) {
      if (!item2.o) {
        link(state, prev, item2);
        prev = item2;
      }
    }
  }
  state.effect.last = prev && prev.e;
  if (is_animated) {
    queue_micro_task(() => {
      var _a2;
      if (to_animate === void 0) return;
      for (item of to_animate) {
        (_a2 = item.a) == null ? void 0 : _a2.apply();
      }
    });
  }
}
function create_item(anchor, prev, value, key, index2, render_fn, flags, get_collection) {
  var reactive = (flags & EACH_ITEM_REACTIVE) !== 0;
  var mutable = (flags & EACH_ITEM_IMMUTABLE) === 0;
  var v = reactive ? mutable ? mutable_source(value, false, false) : source(value) : value;
  var i = (flags & EACH_INDEX_REACTIVE) === 0 ? index2 : source(index2);
  var item = {
    i,
    v,
    k: key,
    a: null,
    // @ts-expect-error
    e: null,
    o: false,
    prev,
    next: null
  };
  try {
    if (anchor === null) {
      var fragment = document.createDocumentFragment();
      fragment.append(anchor = create_text());
    }
    item.e = branch(() => render_fn(
      /** @type {Node} */
      anchor,
      v,
      i,
      get_collection
    ));
    if (prev !== null) {
      prev.next = item;
    }
    return item;
  } finally {
  }
}
function move(item, next, anchor) {
  var end = item.next ? (
    /** @type {TemplateNode} */
    item.next.e.nodes_start
  ) : anchor;
  var dest = next ? (
    /** @type {TemplateNode} */
    next.e.nodes_start
  ) : anchor;
  var node = (
    /** @type {TemplateNode} */
    item.e.nodes_start
  );
  while (node !== null && node !== end) {
    var next_node = (
      /** @type {TemplateNode} */
      get_next_sibling(node)
    );
    dest.before(node);
    node = next_node;
  }
}
function link(state, prev, next) {
  if (prev === null) {
    state.first = next;
    state.effect.first = next && next.e;
  } else {
    if (prev.e.next) {
      prev.e.next.prev = null;
    }
    prev.next = next;
    prev.e.next = next && next.e;
  }
  if (next !== null) {
    if (next.e.prev) {
      next.e.prev.next = null;
    }
    next.prev = prev;
    next.e.prev = prev && prev.e;
  }
}
export {
  each as e,
  index as i
};
