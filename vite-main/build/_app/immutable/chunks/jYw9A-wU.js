import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, g as getContext, l as legacy_pre_effect, i as deep_read_state, s as set, m as mutable_source, b as get, j as legacy_pre_effect_reset, c as child, r as reset, t as template_effect, u as untrack, a as pop, f as first_child, h as derived_safe_equal, e as sibling, q as next, Y as get$1, bq as to_array, aO as writable, bt as readable, aP as derived, bc as setContext, o as onMount, n as createEventDispatcher, aW as user_derived, ay as onDestroy, A as effect, bA as $window, br as hasContext, k as tick } from "./BxIY6ir7.js";
import { i as init } from "./ByqEASoO.js";
import { p as prop, l as legacy_rest_props, s as spread_props } from "./BRmGPDvq.js";
import { e as event, s as set_text } from "./cBADewWV.js";
import { i as if_block } from "./BoSuMvtf.js";
import { f as from_html, a as append, b as from_svg, t as text, c as comment } from "./CAbo1QWi.js";
import { a as store_get, s as setup_stores, d as store_set, b as store_unsub } from "./BvQ5O7-v.js";
import { l as theme, z as showOverview, a as models, u as user } from "./2Yg1sHDo.js";
import { c as clsx, a as set_attribute, s as set_class, h as set_style, f as attribute_effect, S as STYLE } from "./kXiCYuyj.js";
import { a as WEBUI_API_BASE_URL } from "./DQ9UxF7k.js";
import { P as ProfileImage } from "./DXUPjZLs.js";
import { T as Tooltip } from "./BHXWufQb.js";
import { H as Heart } from "./1ZyFFfaT.js";
import { s as slot, a as sanitize_slots } from "./CZEGIGsR.js";
import { s as select, i as identity, T as Transform, a as interrupt, t as transform } from "./CEm4CpfJ.js";
import { g as dispatch } from "./CDrwCZBb.js";
import { i as interpolateZoom } from "./7WfxZx5Q.js";
import { a as action } from "./C2A39Ney.js";
import { b as bind_element_size } from "./DmcjPXfa.js";
import { b as bind_this } from "./D16JuV5t.js";
import { e as bubble_event } from "./DQmZL-p0.js";
import { e as each } from "./7_HZMPNF.js";
import { c as component } from "./-ZmPojHm.js";
import { X as XMark } from "./CUUSX84-.js";
function cc(names) {
  if (typeof names === "string" || typeof names === "number") return "" + names;
  let out = "";
  if (Array.isArray(names)) {
    for (let i = 0, tmp; i < names.length; i++) {
      if ((tmp = cc(names[i])) !== "") {
        out += (out && " ") + tmp;
      }
    }
  } else {
    for (let k in names) {
      if (names[k]) out += (out && " ") + k;
    }
  }
  return out;
}
function sourceEvent(event2) {
  let sourceEvent2;
  while (sourceEvent2 = event2.sourceEvent) event2 = sourceEvent2;
  return event2;
}
function pointer(event2, node) {
  event2 = sourceEvent(event2);
  if (node === void 0) node = event2.currentTarget;
  if (node) {
    var svg = node.ownerSVGElement || node;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      point.x = event2.clientX, point.y = event2.clientY;
      point = point.matrixTransform(node.getScreenCTM().inverse());
      return [point.x, point.y];
    }
    if (node.getBoundingClientRect) {
      var rect = node.getBoundingClientRect();
      return [event2.clientX - rect.left - node.clientLeft, event2.clientY - rect.top - node.clientTop];
    }
  }
  return [event2.pageX, event2.pageY];
}
const nonpassive = { passive: false };
const nonpassivecapture = { capture: true, passive: false };
function nopropagation$1(event2) {
  event2.stopImmediatePropagation();
}
function noevent$1(event2) {
  event2.preventDefault();
  event2.stopImmediatePropagation();
}
function dragDisable(view) {
  var root2 = view.document.documentElement, selection = select(view).on("dragstart.drag", noevent$1, nonpassivecapture);
  if ("onselectstart" in root2) {
    selection.on("selectstart.drag", noevent$1, nonpassivecapture);
  } else {
    root2.__noselect = root2.style.MozUserSelect;
    root2.style.MozUserSelect = "none";
  }
}
function yesdrag(view, noclick) {
  var root2 = view.document.documentElement, selection = select(view).on("dragstart.drag", null);
  if (noclick) {
    selection.on("click.drag", noevent$1, nonpassivecapture);
    setTimeout(function() {
      selection.on("click.drag", null);
    }, 0);
  }
  if ("onselectstart" in root2) {
    selection.on("selectstart.drag", null);
  } else {
    root2.style.MozUserSelect = root2.__noselect;
    delete root2.__noselect;
  }
}
const constant$1 = (x) => () => x;
function DragEvent(type, {
  sourceEvent: sourceEvent2,
  subject,
  target,
  identifier,
  active,
  x,
  y,
  dx,
  dy,
  dispatch: dispatch2
}) {
  Object.defineProperties(this, {
    type: { value: type, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent2, enumerable: true, configurable: true },
    subject: { value: subject, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    identifier: { value: identifier, enumerable: true, configurable: true },
    active: { value: active, enumerable: true, configurable: true },
    x: { value: x, enumerable: true, configurable: true },
    y: { value: y, enumerable: true, configurable: true },
    dx: { value: dx, enumerable: true, configurable: true },
    dy: { value: dy, enumerable: true, configurable: true },
    _: { value: dispatch2 }
  });
}
DragEvent.prototype.on = function() {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};
function defaultFilter$1(event2) {
  return !event2.ctrlKey && !event2.button;
}
function defaultContainer() {
  return this.parentNode;
}
function defaultSubject(event2, d) {
  return d == null ? { x: event2.x, y: event2.y } : d;
}
function defaultTouchable$1() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function drag$1() {
  var filter = defaultFilter$1, container = defaultContainer, subject = defaultSubject, touchable = defaultTouchable$1, gestures = {}, listeners = dispatch("start", "drag", "end"), active = 0, mousedownx, mousedowny, mousemoving, touchending, clickDistance2 = 0;
  function drag2(selection) {
    selection.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved, nonpassive).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function mousedowned(event2, d) {
    if (touchending || !filter.call(this, event2, d)) return;
    var gesture = beforestart(this, container.call(this, event2, d), event2, d, "mouse");
    if (!gesture) return;
    select(event2.view).on("mousemove.drag", mousemoved, nonpassivecapture).on("mouseup.drag", mouseupped, nonpassivecapture);
    dragDisable(event2.view);
    nopropagation$1(event2);
    mousemoving = false;
    mousedownx = event2.clientX;
    mousedowny = event2.clientY;
    gesture("start", event2);
  }
  function mousemoved(event2) {
    noevent$1(event2);
    if (!mousemoving) {
      var dx = event2.clientX - mousedownx, dy = event2.clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag", event2);
  }
  function mouseupped(event2) {
    select(event2.view).on("mousemove.drag mouseup.drag", null);
    yesdrag(event2.view, mousemoving);
    noevent$1(event2);
    gestures.mouse("end", event2);
  }
  function touchstarted(event2, d) {
    if (!filter.call(this, event2, d)) return;
    var touches = event2.changedTouches, c = container.call(this, event2, d), n = touches.length, i, gesture;
    for (i = 0; i < n; ++i) {
      if (gesture = beforestart(this, c, event2, d, touches[i].identifier, touches[i])) {
        nopropagation$1(event2);
        gesture("start", event2, touches[i]);
      }
    }
  }
  function touchmoved(event2) {
    var touches = event2.changedTouches, n = touches.length, i, gesture;
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        noevent$1(event2);
        gesture("drag", event2, touches[i]);
      }
    }
  }
  function touchended(event2) {
    var touches = event2.changedTouches, n = touches.length, i, gesture;
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, 500);
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        nopropagation$1(event2);
        gesture("end", event2, touches[i]);
      }
    }
  }
  function beforestart(that, container2, event2, d, identifier, touch) {
    var dispatch2 = listeners.copy(), p = pointer(touch || event2, container2), dx, dy, s;
    if ((s = subject.call(that, new DragEvent("beforestart", {
      sourceEvent: event2,
      target: drag2,
      identifier,
      active,
      x: p[0],
      y: p[1],
      dx: 0,
      dy: 0,
      dispatch: dispatch2
    }), d)) == null) return;
    dx = s.x - p[0] || 0;
    dy = s.y - p[1] || 0;
    return function gesture(type, event3, touch2) {
      var p0 = p, n;
      switch (type) {
        case "start":
          gestures[identifier] = gesture, n = active++;
          break;
        case "end":
          delete gestures[identifier], --active;
        case "drag":
          p = pointer(touch2 || event3, container2), n = active;
          break;
      }
      dispatch2.call(
        type,
        that,
        new DragEvent(type, {
          sourceEvent: event3,
          subject: s,
          target: drag2,
          identifier,
          active: n,
          x: p[0] + dx,
          y: p[1] + dy,
          dx: p[0] - p0[0],
          dy: p[1] - p0[1],
          dispatch: dispatch2
        }),
        d
      );
    };
  }
  drag2.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : constant$1(!!_), drag2) : filter;
  };
  drag2.container = function(_) {
    return arguments.length ? (container = typeof _ === "function" ? _ : constant$1(_), drag2) : container;
  };
  drag2.subject = function(_) {
    return arguments.length ? (subject = typeof _ === "function" ? _ : constant$1(_), drag2) : subject;
  };
  drag2.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant$1(!!_), drag2) : touchable;
  };
  drag2.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag2 : value;
  };
  drag2.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, drag2) : Math.sqrt(clickDistance2);
  };
  return drag2;
}
const constant = (x) => () => x;
function ZoomEvent(type, {
  sourceEvent: sourceEvent2,
  target,
  transform: transform2,
  dispatch: dispatch2
}) {
  Object.defineProperties(this, {
    type: { value: type, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent2, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    transform: { value: transform2, enumerable: true, configurable: true },
    _: { value: dispatch2 }
  });
}
function nopropagation(event2) {
  event2.stopImmediatePropagation();
}
function noevent(event2) {
  event2.preventDefault();
  event2.stopImmediatePropagation();
}
function defaultFilter(event2) {
  return (!event2.ctrlKey || event2.type === "wheel") && !event2.button;
}
function defaultExtent() {
  var e = this;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
    }
    return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
  }
  return [[0, 0], [e.clientWidth, e.clientHeight]];
}
function defaultTransform() {
  return this.__zoom || identity;
}
function defaultWheelDelta(event2) {
  return -event2.deltaY * (event2.deltaMode === 1 ? 0.05 : event2.deltaMode ? 1 : 2e-3) * (event2.ctrlKey ? 10 : 1);
}
function defaultTouchable() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function defaultConstrain(transform2, extent, translateExtent) {
  var dx0 = transform2.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform2.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform2.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform2.invertY(extent[1][1]) - translateExtent[1][1];
  return transform2.translate(
    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
  );
}
function zoom$1() {
  var filter = defaultFilter, extent = defaultExtent, constrain = defaultConstrain, wheelDelta2 = defaultWheelDelta, touchable = defaultTouchable, scaleExtent = [0, Infinity], translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]], duration = 250, interpolate = interpolateZoom, listeners = dispatch("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
  function zoom2(selection) {
    selection.property("__zoom", defaultTransform).on("wheel.zoom", wheeled, { passive: false }).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  zoom2.transform = function(collection, transform2, point, event2) {
    var selection = collection.selection ? collection.selection() : collection;
    selection.property("__zoom", defaultTransform);
    if (collection !== selection) {
      schedule(collection, transform2, point, event2);
    } else {
      selection.interrupt().each(function() {
        gesture(this, arguments).event(event2).start().zoom(null, typeof transform2 === "function" ? transform2.apply(this, arguments) : transform2).end();
      });
    }
  };
  zoom2.scaleBy = function(selection, k, p, event2) {
    zoom2.scaleTo(selection, function() {
      var k0 = this.__zoom.k, k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    }, p, event2);
  };
  zoom2.scaleTo = function(selection, k, p, event2) {
    zoom2.transform(selection, function() {
      var e = extent.apply(this, arguments), t0 = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t0.invert(p0), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
    }, p, event2);
  };
  zoom2.translateBy = function(selection, x, y, event2) {
    zoom2.transform(selection, function() {
      return constrain(this.__zoom.translate(
        typeof x === "function" ? x.apply(this, arguments) : x,
        typeof y === "function" ? y.apply(this, arguments) : y
      ), extent.apply(this, arguments), translateExtent);
    }, null, event2);
  };
  zoom2.translateTo = function(selection, x, y, p, event2) {
    zoom2.transform(selection, function() {
      var e = extent.apply(this, arguments), t = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(identity.translate(p0[0], p0[1]).scale(t.k).translate(
        typeof x === "function" ? -x.apply(this, arguments) : -x,
        typeof y === "function" ? -y.apply(this, arguments) : -y
      ), e, translateExtent);
    }, p, event2);
  };
  function scale(transform2, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform2.k ? transform2 : new Transform(k, transform2.x, transform2.y);
  }
  function translate(transform2, p0, p1) {
    var x = p0[0] - p1[0] * transform2.k, y = p0[1] - p1[1] * transform2.k;
    return x === transform2.x && y === transform2.y ? transform2 : new Transform(transform2.k, x, y);
  }
  function centroid(extent2) {
    return [(+extent2[0][0] + +extent2[1][0]) / 2, (+extent2[0][1] + +extent2[1][1]) / 2];
  }
  function schedule(transition, transform2, point, event2) {
    transition.on("start.zoom", function() {
      gesture(this, arguments).event(event2).start();
    }).on("interrupt.zoom end.zoom", function() {
      gesture(this, arguments).event(event2).end();
    }).tween("zoom", function() {
      var that = this, args = arguments, g = gesture(that, args).event(event2), e = extent.apply(that, args), p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a = that.__zoom, b = typeof transform2 === "function" ? transform2.apply(that, args) : transform2, i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
      return function(t) {
        if (t === 1) t = b;
        else {
          var l = i(t), k = w / l[2];
          t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k);
        }
        g.zoom(null, t);
      };
    });
  }
  function gesture(that, args, clean) {
    return !clean && that.__zooming || new Gesture(that, args);
  }
  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }
  Gesture.prototype = {
    event: function(event2) {
      if (event2) this.sourceEvent = event2;
      return this;
    },
    start: function() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key2, transform2) {
      if (this.mouse && key2 !== "mouse") this.mouse[1] = transform2.invert(this.mouse[0]);
      if (this.touch0 && key2 !== "touch") this.touch0[1] = transform2.invert(this.touch0[0]);
      if (this.touch1 && key2 !== "touch") this.touch1[1] = transform2.invert(this.touch1[0]);
      this.that.__zoom = transform2;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function(type) {
      var d = select(this.that).datum();
      listeners.call(
        type,
        this.that,
        new ZoomEvent(type, {
          sourceEvent: this.sourceEvent,
          target: zoom2,
          transform: this.that.__zoom,
          dispatch: listeners
        }),
        d
      );
    }
  };
  function wheeled(event2, ...args) {
    if (!filter.apply(this, arguments)) return;
    var g = gesture(this, args).event(event2), t = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta2.apply(this, arguments)))), p = pointer(event2);
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    } else if (t.k === k) return;
    else {
      g.mouse = [p, t.invert(p)];
      interrupt(this);
      g.start();
    }
    noevent(event2);
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }
  function mousedowned(event2, ...args) {
    if (touchending || !filter.apply(this, arguments)) return;
    var currentTarget = event2.currentTarget, g = gesture(this, args, true).event(event2), v = select(event2.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = pointer(event2, currentTarget), x0 = event2.clientX, y0 = event2.clientY;
    dragDisable(event2.view);
    nopropagation(event2);
    g.mouse = [p, this.__zoom.invert(p)];
    interrupt(this);
    g.start();
    function mousemoved(event3) {
      noevent(event3);
      if (!g.moved) {
        var dx = event3.clientX - x0, dy = event3.clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.event(event3).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = pointer(event3, currentTarget), g.mouse[1]), g.extent, translateExtent));
    }
    function mouseupped(event3) {
      v.on("mousemove.zoom mouseup.zoom", null);
      yesdrag(event3.view, g.moved);
      noevent(event3);
      g.event(event3).end();
    }
  }
  function dblclicked(event2, ...args) {
    if (!filter.apply(this, arguments)) return;
    var t0 = this.__zoom, p0 = pointer(event2.changedTouches ? event2.changedTouches[0] : event2, this), p1 = t0.invert(p0), k1 = t0.k * (event2.shiftKey ? 0.5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);
    noevent(event2);
    if (duration > 0) select(this).transition().duration(duration).call(schedule, t1, p0, event2);
    else select(this).call(zoom2.transform, t1, p0, event2);
  }
  function touchstarted(event2, ...args) {
    if (!filter.apply(this, arguments)) return;
    var touches = event2.touches, n = touches.length, g = gesture(this, args, event2.changedTouches.length === n).event(event2), started, i, t, p;
    nopropagation(event2);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer(t, this);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
      else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
    }
    if (touchstarting) touchstarting = clearTimeout(touchstarting);
    if (started) {
      if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() {
        touchstarting = null;
      }, touchDelay);
      interrupt(this);
      g.start();
    }
  }
  function touchmoved(event2, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event2), touches = event2.changedTouches, n = touches.length, i, t, p, l;
    noevent(event2);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer(t, this);
      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p0 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    } else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
    else return;
    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }
  function touchended(event2, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event2), touches = event2.changedTouches, n = touches.length, i, t;
    nopropagation(event2);
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
    }
    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else {
      g.end();
      if (g.taps === 2) {
        t = pointer(t, this);
        if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
          var p = select(this).on("dblclick.zoom");
          if (p) p.apply(this, arguments);
        }
      }
    }
  }
  zoom2.wheelDelta = function(_) {
    return arguments.length ? (wheelDelta2 = typeof _ === "function" ? _ : constant(+_), zoom2) : wheelDelta2;
  };
  zoom2.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : constant(!!_), zoom2) : filter;
  };
  zoom2.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant(!!_), zoom2) : touchable;
  };
  zoom2.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom2) : extent;
  };
  zoom2.scaleExtent = function(_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom2) : [scaleExtent[0], scaleExtent[1]];
  };
  zoom2.translateExtent = function(_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom2) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };
  zoom2.constrain = function(_) {
    return arguments.length ? (constrain = _, zoom2) : constrain;
  };
  zoom2.duration = function(_) {
    return arguments.length ? (duration = +_, zoom2) : duration;
  };
  zoom2.interpolate = function(_) {
    return arguments.length ? (interpolate = _, zoom2) : interpolate;
  };
  zoom2.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom2 : value;
  };
  zoom2.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom2) : Math.sqrt(clickDistance2);
  };
  zoom2.tapDistance = function(_) {
    return arguments.length ? (tapDistance = +_, zoom2) : tapDistance;
  };
  return zoom2;
}
const errorMessages = {
  error001: () => "[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",
  error002: () => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
  error003: (nodeType) => `Node type "${nodeType}" not found. Using fallback type "default".`,
  error004: () => "The React Flow parent container needs a width and a height to render the graph.",
  error005: () => "Only child nodes can use a parent extent.",
  error006: () => "Can't create edge. An edge needs a source and a target.",
  error007: (id) => `The old edge with id=${id} does not exist.`,
  error009: (type) => `Marker type "${type}" doesn't exist.`,
  error008: (handleType, { id, sourceHandle, targetHandle }) => `Couldn't create edge for ${handleType} handle id: "${handleType === "source" ? sourceHandle : targetHandle}", edge id: ${id}.`,
  error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
  error011: (edgeType) => `Edge type "${edgeType}" not found. Using fallback type "default".`,
  error012: (id) => `Node with id "${id}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
  error013: (lib = "react") => `It seems that you haven't loaded the styles. Please import '@xyflow/${lib}/dist/style.css' or base.css to make sure everything is working properly.`,
  error014: () => "useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",
  error015: () => "It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs."
};
const infiniteExtent = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var ConnectionMode;
(function(ConnectionMode2) {
  ConnectionMode2["Strict"] = "strict";
  ConnectionMode2["Loose"] = "loose";
})(ConnectionMode || (ConnectionMode = {}));
var PanOnScrollMode;
(function(PanOnScrollMode2) {
  PanOnScrollMode2["Free"] = "free";
  PanOnScrollMode2["Vertical"] = "vertical";
  PanOnScrollMode2["Horizontal"] = "horizontal";
})(PanOnScrollMode || (PanOnScrollMode = {}));
var SelectionMode;
(function(SelectionMode2) {
  SelectionMode2["Partial"] = "partial";
  SelectionMode2["Full"] = "full";
})(SelectionMode || (SelectionMode = {}));
const initialConnection = {
  inProgress: false,
  isValid: null,
  from: null,
  fromHandle: null,
  fromPosition: null,
  fromNode: null,
  to: null,
  toHandle: null,
  toPosition: null,
  toNode: null
};
var ConnectionLineType;
(function(ConnectionLineType2) {
  ConnectionLineType2["Bezier"] = "default";
  ConnectionLineType2["Straight"] = "straight";
  ConnectionLineType2["Step"] = "step";
  ConnectionLineType2["SmoothStep"] = "smoothstep";
  ConnectionLineType2["SimpleBezier"] = "simplebezier";
})(ConnectionLineType || (ConnectionLineType = {}));
var MarkerType;
(function(MarkerType2) {
  MarkerType2["Arrow"] = "arrow";
  MarkerType2["ArrowClosed"] = "arrowclosed";
})(MarkerType || (MarkerType = {}));
var Position;
(function(Position2) {
  Position2["Left"] = "left";
  Position2["Top"] = "top";
  Position2["Right"] = "right";
  Position2["Bottom"] = "bottom";
})(Position || (Position = {}));
const oppositePosition = {
  [Position.Left]: Position.Right,
  [Position.Right]: Position.Left,
  [Position.Top]: Position.Bottom,
  [Position.Bottom]: Position.Top
};
function areConnectionMapsEqual(a, b) {
  if (!a && !b) {
    return true;
  }
  if (!a || !b || a.size !== b.size) {
    return false;
  }
  if (!a.size && !b.size) {
    return true;
  }
  for (const key2 of a.keys()) {
    if (!b.has(key2)) {
      return false;
    }
  }
  return true;
}
function handleConnectionChange(a, b, cb) {
  if (!cb) {
    return;
  }
  const diff = [];
  a.forEach((connection, key2) => {
    if (!(b == null ? void 0 : b.has(key2))) {
      diff.push(connection);
    }
  });
  if (diff.length) {
    cb(diff);
  }
}
function getConnectionStatus(isValid) {
  return isValid === null ? null : isValid ? "valid" : "invalid";
}
const isEdgeBase = (element) => "id" in element && "source" in element && "target" in element;
const isNodeBase = (element) => "id" in element && "position" in element && !("source" in element) && !("target" in element);
const isInternalNodeBase = (element) => "id" in element && "internals" in element && !("source" in element) && !("target" in element);
const getNodePositionWithOrigin = (node, nodeOrigin = [0, 0]) => {
  const { width, height } = getNodeDimensions(node);
  const origin = node.origin ?? nodeOrigin;
  const offsetX = width * origin[0];
  const offsetY = height * origin[1];
  return {
    x: node.position.x - offsetX,
    y: node.position.y - offsetY
  };
};
const getNodesBounds = (nodes, params = { nodeOrigin: [0, 0] }) => {
  if (nodes.length === 0) {
    return { x: 0, y: 0, width: 0, height: 0 };
  }
  const box = nodes.reduce((currBox, nodeOrId) => {
    const isId = typeof nodeOrId === "string";
    let currentNode = !params.nodeLookup && !isId ? nodeOrId : void 0;
    if (params.nodeLookup) {
      currentNode = isId ? params.nodeLookup.get(nodeOrId) : !isInternalNodeBase(nodeOrId) ? params.nodeLookup.get(nodeOrId.id) : nodeOrId;
    }
    const nodeBox = currentNode ? nodeToBox(currentNode, params.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return getBoundsOfBoxes(currBox, nodeBox);
  }, { x: Infinity, y: Infinity, x2: -Infinity, y2: -Infinity });
  return boxToRect(box);
};
const getInternalNodesBounds = (nodeLookup, params = {}) => {
  if (nodeLookup.size === 0) {
    return { x: 0, y: 0, width: 0, height: 0 };
  }
  let box = { x: Infinity, y: Infinity, x2: -Infinity, y2: -Infinity };
  nodeLookup.forEach((node) => {
    if (params.filter === void 0 || params.filter(node)) {
      const nodeBox = nodeToBox(node);
      box = getBoundsOfBoxes(box, nodeBox);
    }
  });
  return boxToRect(box);
};
const getNodesInside = (nodes, rect, [tx, ty, tScale] = [0, 0, 1], partially = false, excludeNonSelectableNodes = false) => {
  const paneRect = {
    ...pointToRendererPoint(rect, [tx, ty, tScale]),
    width: rect.width / tScale,
    height: rect.height / tScale
  };
  const visibleNodes = [];
  for (const node of nodes.values()) {
    const { measured, selectable = true, hidden = false } = node;
    if (excludeNonSelectableNodes && !selectable || hidden) {
      continue;
    }
    const width = measured.width ?? node.width ?? node.initialWidth ?? null;
    const height = measured.height ?? node.height ?? node.initialHeight ?? null;
    const overlappingArea = getOverlappingArea(paneRect, nodeToRect(node));
    const area = (width ?? 0) * (height ?? 0);
    const partiallyVisible = partially && overlappingArea > 0;
    const forceInitialRender = !node.internals.handleBounds;
    const isVisible = forceInitialRender || partiallyVisible || overlappingArea >= area;
    if (isVisible || node.dragging) {
      visibleNodes.push(node);
    }
  }
  return visibleNodes;
};
const getConnectedEdges = (nodes, edges) => {
  const nodeIds = /* @__PURE__ */ new Set();
  nodes.forEach((node) => {
    nodeIds.add(node.id);
  });
  return edges.filter((edge) => nodeIds.has(edge.source) || nodeIds.has(edge.target));
};
function getFitViewNodes(nodeLookup, options) {
  const fitViewNodes = /* @__PURE__ */ new Map();
  const optionNodeIds = (options == null ? void 0 : options.nodes) ? new Set(options.nodes.map((node) => node.id)) : null;
  nodeLookup.forEach((n) => {
    const isVisible = n.measured.width && n.measured.height && ((options == null ? void 0 : options.includeHiddenNodes) || !n.hidden);
    if (isVisible && (!optionNodeIds || optionNodeIds.has(n.id))) {
      fitViewNodes.set(n.id, n);
    }
  });
  return fitViewNodes;
}
async function fitViewport({ nodes, width, height, panZoom, minZoom, maxZoom }, options) {
  if (nodes.size === 0) {
    return Promise.resolve(true);
  }
  const nodesToFit = getFitViewNodes(nodes, options);
  const bounds = getInternalNodesBounds(nodesToFit);
  const viewport = getViewportForBounds(bounds, width, height, (options == null ? void 0 : options.minZoom) ?? minZoom, (options == null ? void 0 : options.maxZoom) ?? maxZoom, (options == null ? void 0 : options.padding) ?? 0.1);
  await panZoom.setViewport(viewport, { duration: options == null ? void 0 : options.duration });
  return Promise.resolve(true);
}
function calculateNodePosition({ nodeId, nextPosition, nodeLookup, nodeOrigin = [0, 0], nodeExtent, onError }) {
  const node = nodeLookup.get(nodeId);
  const parentNode = node.parentId ? nodeLookup.get(node.parentId) : void 0;
  const { x: parentX, y: parentY } = parentNode ? parentNode.internals.positionAbsolute : { x: 0, y: 0 };
  const origin = node.origin ?? nodeOrigin;
  let extent = nodeExtent;
  if (node.extent === "parent" && !node.expandParent) {
    if (!parentNode) {
      onError == null ? void 0 : onError("005", errorMessages["error005"]());
    } else {
      const parentWidth = parentNode.measured.width;
      const parentHeight = parentNode.measured.height;
      if (parentWidth && parentHeight) {
        extent = [
          [parentX, parentY],
          [parentX + parentWidth, parentY + parentHeight]
        ];
      }
    }
  } else if (parentNode && isCoordinateExtent(node.extent)) {
    extent = [
      [node.extent[0][0] + parentX, node.extent[0][1] + parentY],
      [node.extent[1][0] + parentX, node.extent[1][1] + parentY]
    ];
  }
  const positionAbsolute = isCoordinateExtent(extent) ? clampPosition(nextPosition, extent, node.measured) : nextPosition;
  if (node.measured.width === void 0 || node.measured.height === void 0) {
    onError == null ? void 0 : onError("015", errorMessages["error015"]());
  }
  return {
    position: {
      x: positionAbsolute.x - parentX + (node.measured.width ?? 0) * origin[0],
      y: positionAbsolute.y - parentY + (node.measured.height ?? 0) * origin[1]
    },
    positionAbsolute
  };
}
async function getElementsToRemove({ nodesToRemove = [], edgesToRemove = [], nodes, edges, onBeforeDelete }) {
  const nodeIds = new Set(nodesToRemove.map((node) => node.id));
  const matchingNodes = [];
  for (const node of nodes) {
    if (node.deletable === false) {
      continue;
    }
    const isIncluded = nodeIds.has(node.id);
    const parentHit = !isIncluded && node.parentId && matchingNodes.find((n) => n.id === node.parentId);
    if (isIncluded || parentHit) {
      matchingNodes.push(node);
    }
  }
  const edgeIds = new Set(edgesToRemove.map((edge) => edge.id));
  const deletableEdges = edges.filter((edge) => edge.deletable !== false);
  const connectedEdges = getConnectedEdges(matchingNodes, deletableEdges);
  const matchingEdges = connectedEdges;
  for (const edge of deletableEdges) {
    const isIncluded = edgeIds.has(edge.id);
    if (isIncluded && !matchingEdges.find((e) => e.id === edge.id)) {
      matchingEdges.push(edge);
    }
  }
  if (!onBeforeDelete) {
    return {
      edges: matchingEdges,
      nodes: matchingNodes
    };
  }
  const onBeforeDeleteResult = await onBeforeDelete({
    nodes: matchingNodes,
    edges: matchingEdges
  });
  if (typeof onBeforeDeleteResult === "boolean") {
    return onBeforeDeleteResult ? { edges: matchingEdges, nodes: matchingNodes } : { edges: [], nodes: [] };
  }
  return onBeforeDeleteResult;
}
const clamp = (val, min = 0, max = 1) => Math.min(Math.max(val, min), max);
const clampPosition = (position = { x: 0, y: 0 }, extent, dimensions) => ({
  x: clamp(position.x, extent[0][0], extent[1][0] - ((dimensions == null ? void 0 : dimensions.width) ?? 0)),
  y: clamp(position.y, extent[0][1], extent[1][1] - ((dimensions == null ? void 0 : dimensions.height) ?? 0))
});
function clampPositionToParent(childPosition, childDimensions, parent) {
  const { width: parentWidth, height: parentHeight } = getNodeDimensions(parent);
  const { x: parentX, y: parentY } = parent.internals.positionAbsolute;
  return clampPosition(childPosition, [
    [parentX, parentY],
    [parentX + parentWidth, parentY + parentHeight]
  ], childDimensions);
}
const calcAutoPanVelocity = (value, min, max) => {
  if (value < min) {
    return clamp(Math.abs(value - min), 1, min) / min;
  } else if (value > max) {
    return -clamp(Math.abs(value - max), 1, min) / min;
  }
  return 0;
};
const calcAutoPan = (pos, bounds, speed = 15, distance2 = 40) => {
  const xMovement = calcAutoPanVelocity(pos.x, distance2, bounds.width - distance2) * speed;
  const yMovement = calcAutoPanVelocity(pos.y, distance2, bounds.height - distance2) * speed;
  return [xMovement, yMovement];
};
const getBoundsOfBoxes = (box1, box2) => ({
  x: Math.min(box1.x, box2.x),
  y: Math.min(box1.y, box2.y),
  x2: Math.max(box1.x2, box2.x2),
  y2: Math.max(box1.y2, box2.y2)
});
const rectToBox = ({ x, y, width, height }) => ({
  x,
  y,
  x2: x + width,
  y2: y + height
});
const boxToRect = ({ x, y, x2, y2 }) => ({
  x,
  y,
  width: x2 - x,
  height: y2 - y
});
const nodeToRect = (node, nodeOrigin = [0, 0]) => {
  var _a, _b;
  const { x, y } = isInternalNodeBase(node) ? node.internals.positionAbsolute : getNodePositionWithOrigin(node, nodeOrigin);
  return {
    x,
    y,
    width: ((_a = node.measured) == null ? void 0 : _a.width) ?? node.width ?? node.initialWidth ?? 0,
    height: ((_b = node.measured) == null ? void 0 : _b.height) ?? node.height ?? node.initialHeight ?? 0
  };
};
const nodeToBox = (node, nodeOrigin = [0, 0]) => {
  var _a, _b;
  const { x, y } = isInternalNodeBase(node) ? node.internals.positionAbsolute : getNodePositionWithOrigin(node, nodeOrigin);
  return {
    x,
    y,
    x2: x + (((_a = node.measured) == null ? void 0 : _a.width) ?? node.width ?? node.initialWidth ?? 0),
    y2: y + (((_b = node.measured) == null ? void 0 : _b.height) ?? node.height ?? node.initialHeight ?? 0)
  };
};
const getBoundsOfRects = (rect1, rect2) => boxToRect(getBoundsOfBoxes(rectToBox(rect1), rectToBox(rect2)));
const getOverlappingArea = (rectA, rectB) => {
  const xOverlap = Math.max(0, Math.min(rectA.x + rectA.width, rectB.x + rectB.width) - Math.max(rectA.x, rectB.x));
  const yOverlap = Math.max(0, Math.min(rectA.y + rectA.height, rectB.y + rectB.height) - Math.max(rectA.y, rectB.y));
  return Math.ceil(xOverlap * yOverlap);
};
const isRectObject = (obj) => isNumeric(obj.width) && isNumeric(obj.height) && isNumeric(obj.x) && isNumeric(obj.y);
const isNumeric = (n) => !isNaN(n) && isFinite(n);
const devWarn = (id, message) => {
};
const snapPosition = (position, snapGrid = [1, 1]) => {
  return {
    x: snapGrid[0] * Math.round(position.x / snapGrid[0]),
    y: snapGrid[1] * Math.round(position.y / snapGrid[1])
  };
};
const pointToRendererPoint = ({ x, y }, [tx, ty, tScale], snapToGrid = false, snapGrid = [1, 1]) => {
  const position = {
    x: (x - tx) / tScale,
    y: (y - ty) / tScale
  };
  return snapToGrid ? snapPosition(position, snapGrid) : position;
};
const rendererPointToPoint = ({ x, y }, [tx, ty, tScale]) => {
  return {
    x: x * tScale + tx,
    y: y * tScale + ty
  };
};
function parsePadding(padding, viewport) {
  if (typeof padding === "number") {
    return Math.floor((viewport - viewport / (1 + padding)) * 0.5);
  }
  if (typeof padding === "string" && padding.endsWith("px")) {
    const paddingValue = parseFloat(padding);
    if (!Number.isNaN(paddingValue)) {
      return Math.floor(paddingValue);
    }
  }
  if (typeof padding === "string" && padding.endsWith("%")) {
    const paddingValue = parseFloat(padding);
    if (!Number.isNaN(paddingValue)) {
      return Math.floor(viewport * paddingValue * 0.01);
    }
  }
  console.error(`[React Flow] The padding value "${padding}" is invalid. Please provide a number or a string with a valid unit (px or %).`);
  return 0;
}
function parsePaddings(padding, width, height) {
  if (typeof padding === "string" || typeof padding === "number") {
    const paddingY = parsePadding(padding, height);
    const paddingX = parsePadding(padding, width);
    return {
      top: paddingY,
      right: paddingX,
      bottom: paddingY,
      left: paddingX,
      x: paddingX * 2,
      y: paddingY * 2
    };
  }
  if (typeof padding === "object") {
    const top = parsePadding(padding.top ?? padding.y ?? 0, height);
    const bottom = parsePadding(padding.bottom ?? padding.y ?? 0, height);
    const left = parsePadding(padding.left ?? padding.x ?? 0, width);
    const right = parsePadding(padding.right ?? padding.x ?? 0, width);
    return { top, right, bottom, left, x: left + right, y: top + bottom };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function calculateAppliedPaddings(bounds, x, y, zoom2, width, height) {
  const { x: left, y: top } = rendererPointToPoint(bounds, [x, y, zoom2]);
  const { x: boundRight, y: boundBottom } = rendererPointToPoint({ x: bounds.x + bounds.width, y: bounds.y + bounds.height }, [x, y, zoom2]);
  const right = width - boundRight;
  const bottom = height - boundBottom;
  return {
    left: Math.floor(left),
    top: Math.floor(top),
    right: Math.floor(right),
    bottom: Math.floor(bottom)
  };
}
const getViewportForBounds = (bounds, width, height, minZoom, maxZoom, padding) => {
  const p = parsePaddings(padding, width, height);
  const xZoom = (width - p.x) / bounds.width;
  const yZoom = (height - p.y) / bounds.height;
  const zoom2 = Math.min(xZoom, yZoom);
  const clampedZoom = clamp(zoom2, minZoom, maxZoom);
  const boundsCenterX = bounds.x + bounds.width / 2;
  const boundsCenterY = bounds.y + bounds.height / 2;
  const x = width / 2 - boundsCenterX * clampedZoom;
  const y = height / 2 - boundsCenterY * clampedZoom;
  const newPadding = calculateAppliedPaddings(bounds, x, y, clampedZoom, width, height);
  const offset = {
    left: Math.min(newPadding.left - p.left, 0),
    top: Math.min(newPadding.top - p.top, 0),
    right: Math.min(newPadding.right - p.right, 0),
    bottom: Math.min(newPadding.bottom - p.bottom, 0)
  };
  return {
    x: x - offset.left + offset.right,
    y: y - offset.top + offset.bottom,
    zoom: clampedZoom
  };
};
const isMacOs = () => {
  var _a;
  return typeof navigator !== "undefined" && ((_a = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : _a.indexOf("Mac")) >= 0;
};
function isCoordinateExtent(extent) {
  return extent !== void 0 && extent !== "parent";
}
function getNodeDimensions(node) {
  var _a, _b;
  return {
    width: ((_a = node.measured) == null ? void 0 : _a.width) ?? node.width ?? node.initialWidth ?? 0,
    height: ((_b = node.measured) == null ? void 0 : _b.height) ?? node.height ?? node.initialHeight ?? 0
  };
}
function nodeHasDimensions(node) {
  var _a, _b;
  return (((_a = node.measured) == null ? void 0 : _a.width) ?? node.width ?? node.initialWidth) !== void 0 && (((_b = node.measured) == null ? void 0 : _b.height) ?? node.height ?? node.initialHeight) !== void 0;
}
function evaluateAbsolutePosition(position, dimensions = { width: 0, height: 0 }, parentId, nodeLookup, nodeOrigin) {
  const positionAbsolute = { ...position };
  const parent = nodeLookup.get(parentId);
  if (parent) {
    const origin = parent.origin || nodeOrigin;
    positionAbsolute.x += parent.internals.positionAbsolute.x - (dimensions.width ?? 0) * origin[0];
    positionAbsolute.y += parent.internals.positionAbsolute.y - (dimensions.height ?? 0) * origin[1];
  }
  return positionAbsolute;
}
function withResolvers() {
  let resolve;
  let reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}
function getPointerPosition(event2, { snapGrid = [0, 0], snapToGrid = false, transform: transform2, containerBounds }) {
  const { x, y } = getEventPosition(event2);
  const pointerPos = pointToRendererPoint({ x: x - ((containerBounds == null ? void 0 : containerBounds.left) ?? 0), y: y - ((containerBounds == null ? void 0 : containerBounds.top) ?? 0) }, transform2);
  const { x: xSnapped, y: ySnapped } = snapToGrid ? snapPosition(pointerPos, snapGrid) : pointerPos;
  return {
    xSnapped,
    ySnapped,
    ...pointerPos
  };
}
const getDimensions = (node) => ({
  width: node.offsetWidth,
  height: node.offsetHeight
});
const getHostForElement = (element) => {
  var _a;
  return ((_a = element == null ? void 0 : element.getRootNode) == null ? void 0 : _a.call(element)) || (window == null ? void 0 : window.document);
};
const inputTags = ["INPUT", "SELECT", "TEXTAREA"];
function isInputDOMNode(event2) {
  var _a, _b;
  const target = ((_b = (_a = event2.composedPath) == null ? void 0 : _a.call(event2)) == null ? void 0 : _b[0]) || event2.target;
  if ((target == null ? void 0 : target.nodeType) !== 1)
    return false;
  const isInput = inputTags.includes(target.nodeName) || target.hasAttribute("contenteditable");
  return isInput || !!target.closest(".nokey");
}
const isMouseEvent = (event2) => "clientX" in event2;
const getEventPosition = (event2, bounds) => {
  var _a, _b;
  const isMouse = isMouseEvent(event2);
  const evtX = isMouse ? event2.clientX : (_a = event2.touches) == null ? void 0 : _a[0].clientX;
  const evtY = isMouse ? event2.clientY : (_b = event2.touches) == null ? void 0 : _b[0].clientY;
  return {
    x: evtX - ((bounds == null ? void 0 : bounds.left) ?? 0),
    y: evtY - ((bounds == null ? void 0 : bounds.top) ?? 0)
  };
};
const getHandleBounds = (type, nodeElement, nodeBounds, zoom2, nodeId) => {
  const handles = nodeElement.querySelectorAll(`.${type}`);
  if (!handles || !handles.length) {
    return null;
  }
  return Array.from(handles).map((handle) => {
    const handleBounds = handle.getBoundingClientRect();
    return {
      id: handle.getAttribute("data-handleid"),
      type,
      nodeId,
      position: handle.getAttribute("data-handlepos"),
      x: (handleBounds.left - nodeBounds.left) / zoom2,
      y: (handleBounds.top - nodeBounds.top) / zoom2,
      ...getDimensions(handle)
    };
  });
};
function getBezierEdgeCenter({ sourceX, sourceY, targetX, targetY, sourceControlX, sourceControlY, targetControlX, targetControlY }) {
  const centerX = sourceX * 0.125 + sourceControlX * 0.375 + targetControlX * 0.375 + targetX * 0.125;
  const centerY = sourceY * 0.125 + sourceControlY * 0.375 + targetControlY * 0.375 + targetY * 0.125;
  const offsetX = Math.abs(centerX - sourceX);
  const offsetY = Math.abs(centerY - sourceY);
  return [centerX, centerY, offsetX, offsetY];
}
function calculateControlOffset(distance2, curvature) {
  if (distance2 >= 0) {
    return 0.5 * distance2;
  }
  return curvature * 25 * Math.sqrt(-distance2);
}
function getControlWithCurvature({ pos, x1, y1, x2, y2, c }) {
  switch (pos) {
    case Position.Left:
      return [x1 - calculateControlOffset(x1 - x2, c), y1];
    case Position.Right:
      return [x1 + calculateControlOffset(x2 - x1, c), y1];
    case Position.Top:
      return [x1, y1 - calculateControlOffset(y1 - y2, c)];
    case Position.Bottom:
      return [x1, y1 + calculateControlOffset(y2 - y1, c)];
  }
}
function getBezierPath({ sourceX, sourceY, sourcePosition = Position.Bottom, targetX, targetY, targetPosition = Position.Top, curvature = 0.25 }) {
  const [sourceControlX, sourceControlY] = getControlWithCurvature({
    pos: sourcePosition,
    x1: sourceX,
    y1: sourceY,
    x2: targetX,
    y2: targetY,
    c: curvature
  });
  const [targetControlX, targetControlY] = getControlWithCurvature({
    pos: targetPosition,
    x1: targetX,
    y1: targetY,
    x2: sourceX,
    y2: sourceY,
    c: curvature
  });
  const [labelX, labelY, offsetX, offsetY] = getBezierEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourceControlX,
    sourceControlY,
    targetControlX,
    targetControlY
  });
  return [
    `M${sourceX},${sourceY} C${sourceControlX},${sourceControlY} ${targetControlX},${targetControlY} ${targetX},${targetY}`,
    labelX,
    labelY,
    offsetX,
    offsetY
  ];
}
function getEdgeCenter({ sourceX, sourceY, targetX, targetY }) {
  const xOffset = Math.abs(targetX - sourceX) / 2;
  const centerX = targetX < sourceX ? targetX + xOffset : targetX - xOffset;
  const yOffset = Math.abs(targetY - sourceY) / 2;
  const centerY = targetY < sourceY ? targetY + yOffset : targetY - yOffset;
  return [centerX, centerY, xOffset, yOffset];
}
function getElevatedEdgeZIndex({ sourceNode, targetNode, selected = false, zIndex = 0, elevateOnSelect = false }) {
  if (!elevateOnSelect) {
    return zIndex;
  }
  const edgeOrConnectedNodeSelected = selected || targetNode.selected || sourceNode.selected;
  const selectedZIndex = Math.max(sourceNode.internals.z || 0, targetNode.internals.z || 0, 1e3);
  return zIndex + (edgeOrConnectedNodeSelected ? selectedZIndex : 0);
}
function isEdgeVisible({ sourceNode, targetNode, width, height, transform: transform2 }) {
  const edgeBox = getBoundsOfBoxes(nodeToBox(sourceNode), nodeToBox(targetNode));
  if (edgeBox.x === edgeBox.x2) {
    edgeBox.x2 += 1;
  }
  if (edgeBox.y === edgeBox.y2) {
    edgeBox.y2 += 1;
  }
  const viewRect = {
    x: -transform2[0] / transform2[2],
    y: -transform2[1] / transform2[2],
    width: width / transform2[2],
    height: height / transform2[2]
  };
  return getOverlappingArea(viewRect, boxToRect(edgeBox)) > 0;
}
const getEdgeId = ({ source, sourceHandle, target, targetHandle }) => `xy-edge__${source}${sourceHandle || ""}-${target}${targetHandle || ""}`;
const connectionExists = (edge, edges) => {
  return edges.some((el) => el.source === edge.source && el.target === edge.target && (el.sourceHandle === edge.sourceHandle || !el.sourceHandle && !edge.sourceHandle) && (el.targetHandle === edge.targetHandle || !el.targetHandle && !edge.targetHandle));
};
const addEdge = (edgeParams, edges) => {
  if (!edgeParams.source || !edgeParams.target) {
    return edges;
  }
  let edge;
  if (isEdgeBase(edgeParams)) {
    edge = { ...edgeParams };
  } else {
    edge = {
      ...edgeParams,
      id: getEdgeId(edgeParams)
    };
  }
  if (connectionExists(edge, edges)) {
    return edges;
  }
  if (edge.sourceHandle === null) {
    delete edge.sourceHandle;
  }
  if (edge.targetHandle === null) {
    delete edge.targetHandle;
  }
  return edges.concat(edge);
};
function getStraightPath({ sourceX, sourceY, targetX, targetY }) {
  const [labelX, labelY, offsetX, offsetY] = getEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY
  });
  return [`M ${sourceX},${sourceY}L ${targetX},${targetY}`, labelX, labelY, offsetX, offsetY];
}
const handleDirections = {
  [Position.Left]: { x: -1, y: 0 },
  [Position.Right]: { x: 1, y: 0 },
  [Position.Top]: { x: 0, y: -1 },
  [Position.Bottom]: { x: 0, y: 1 }
};
const getDirection = ({ source, sourcePosition = Position.Bottom, target }) => {
  if (sourcePosition === Position.Left || sourcePosition === Position.Right) {
    return source.x < target.x ? { x: 1, y: 0 } : { x: -1, y: 0 };
  }
  return source.y < target.y ? { x: 0, y: 1 } : { x: 0, y: -1 };
};
const distance = (a, b) => Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
function getPoints({ source, sourcePosition = Position.Bottom, target, targetPosition = Position.Top, center, offset }) {
  const sourceDir = handleDirections[sourcePosition];
  const targetDir = handleDirections[targetPosition];
  const sourceGapped = { x: source.x + sourceDir.x * offset, y: source.y + sourceDir.y * offset };
  const targetGapped = { x: target.x + targetDir.x * offset, y: target.y + targetDir.y * offset };
  const dir = getDirection({
    source: sourceGapped,
    sourcePosition,
    target: targetGapped
  });
  const dirAccessor = dir.x !== 0 ? "x" : "y";
  const currDir = dir[dirAccessor];
  let points = [];
  let centerX, centerY;
  const sourceGapOffset = { x: 0, y: 0 };
  const targetGapOffset = { x: 0, y: 0 };
  const [defaultCenterX, defaultCenterY, defaultOffsetX, defaultOffsetY] = getEdgeCenter({
    sourceX: source.x,
    sourceY: source.y,
    targetX: target.x,
    targetY: target.y
  });
  if (sourceDir[dirAccessor] * targetDir[dirAccessor] === -1) {
    centerX = center.x ?? defaultCenterX;
    centerY = center.y ?? defaultCenterY;
    const verticalSplit = [
      { x: centerX, y: sourceGapped.y },
      { x: centerX, y: targetGapped.y }
    ];
    const horizontalSplit = [
      { x: sourceGapped.x, y: centerY },
      { x: targetGapped.x, y: centerY }
    ];
    if (sourceDir[dirAccessor] === currDir) {
      points = dirAccessor === "x" ? verticalSplit : horizontalSplit;
    } else {
      points = dirAccessor === "x" ? horizontalSplit : verticalSplit;
    }
  } else {
    const sourceTarget = [{ x: sourceGapped.x, y: targetGapped.y }];
    const targetSource = [{ x: targetGapped.x, y: sourceGapped.y }];
    if (dirAccessor === "x") {
      points = sourceDir.x === currDir ? targetSource : sourceTarget;
    } else {
      points = sourceDir.y === currDir ? sourceTarget : targetSource;
    }
    if (sourcePosition === targetPosition) {
      const diff = Math.abs(source[dirAccessor] - target[dirAccessor]);
      if (diff <= offset) {
        const gapOffset = Math.min(offset - 1, offset - diff);
        if (sourceDir[dirAccessor] === currDir) {
          sourceGapOffset[dirAccessor] = (sourceGapped[dirAccessor] > source[dirAccessor] ? -1 : 1) * gapOffset;
        } else {
          targetGapOffset[dirAccessor] = (targetGapped[dirAccessor] > target[dirAccessor] ? -1 : 1) * gapOffset;
        }
      }
    }
    if (sourcePosition !== targetPosition) {
      const dirAccessorOpposite = dirAccessor === "x" ? "y" : "x";
      const isSameDir = sourceDir[dirAccessor] === targetDir[dirAccessorOpposite];
      const sourceGtTargetOppo = sourceGapped[dirAccessorOpposite] > targetGapped[dirAccessorOpposite];
      const sourceLtTargetOppo = sourceGapped[dirAccessorOpposite] < targetGapped[dirAccessorOpposite];
      const flipSourceTarget = sourceDir[dirAccessor] === 1 && (!isSameDir && sourceGtTargetOppo || isSameDir && sourceLtTargetOppo) || sourceDir[dirAccessor] !== 1 && (!isSameDir && sourceLtTargetOppo || isSameDir && sourceGtTargetOppo);
      if (flipSourceTarget) {
        points = dirAccessor === "x" ? sourceTarget : targetSource;
      }
    }
    const sourceGapPoint = { x: sourceGapped.x + sourceGapOffset.x, y: sourceGapped.y + sourceGapOffset.y };
    const targetGapPoint = { x: targetGapped.x + targetGapOffset.x, y: targetGapped.y + targetGapOffset.y };
    const maxXDistance = Math.max(Math.abs(sourceGapPoint.x - points[0].x), Math.abs(targetGapPoint.x - points[0].x));
    const maxYDistance = Math.max(Math.abs(sourceGapPoint.y - points[0].y), Math.abs(targetGapPoint.y - points[0].y));
    if (maxXDistance >= maxYDistance) {
      centerX = (sourceGapPoint.x + targetGapPoint.x) / 2;
      centerY = points[0].y;
    } else {
      centerX = points[0].x;
      centerY = (sourceGapPoint.y + targetGapPoint.y) / 2;
    }
  }
  const pathPoints = [
    source,
    { x: sourceGapped.x + sourceGapOffset.x, y: sourceGapped.y + sourceGapOffset.y },
    ...points,
    { x: targetGapped.x + targetGapOffset.x, y: targetGapped.y + targetGapOffset.y },
    target
  ];
  return [pathPoints, centerX, centerY, defaultOffsetX, defaultOffsetY];
}
function getBend(a, b, c, size) {
  const bendSize = Math.min(distance(a, b) / 2, distance(b, c) / 2, size);
  const { x, y } = b;
  if (a.x === x && x === c.x || a.y === y && y === c.y) {
    return `L${x} ${y}`;
  }
  if (a.y === y) {
    const xDir2 = a.x < c.x ? -1 : 1;
    const yDir2 = a.y < c.y ? 1 : -1;
    return `L ${x + bendSize * xDir2},${y}Q ${x},${y} ${x},${y + bendSize * yDir2}`;
  }
  const xDir = a.x < c.x ? 1 : -1;
  const yDir = a.y < c.y ? -1 : 1;
  return `L ${x},${y + bendSize * yDir}Q ${x},${y} ${x + bendSize * xDir},${y}`;
}
function getSmoothStepPath({ sourceX, sourceY, sourcePosition = Position.Bottom, targetX, targetY, targetPosition = Position.Top, borderRadius = 5, centerX, centerY, offset = 20 }) {
  const [points, labelX, labelY, offsetX, offsetY] = getPoints({
    source: { x: sourceX, y: sourceY },
    sourcePosition,
    target: { x: targetX, y: targetY },
    targetPosition,
    center: { x: centerX, y: centerY },
    offset
  });
  const path = points.reduce((res, p, i) => {
    let segment = "";
    if (i > 0 && i < points.length - 1) {
      segment = getBend(points[i - 1], p, points[i + 1], borderRadius);
    } else {
      segment = `${i === 0 ? "M" : "L"}${p.x} ${p.y}`;
    }
    res += segment;
    return res;
  }, "");
  return [path, labelX, labelY, offsetX, offsetY];
}
function isNodeInitialized(node) {
  var _a;
  return node && !!(node.internals.handleBounds || ((_a = node.handles) == null ? void 0 : _a.length)) && !!(node.measured.width || node.width || node.initialWidth);
}
function getEdgePosition(params) {
  var _a;
  const { sourceNode, targetNode } = params;
  if (!isNodeInitialized(sourceNode) || !isNodeInitialized(targetNode)) {
    return null;
  }
  const sourceHandleBounds = sourceNode.internals.handleBounds || toHandleBounds(sourceNode.handles);
  const targetHandleBounds = targetNode.internals.handleBounds || toHandleBounds(targetNode.handles);
  const sourceHandle = getHandle$1((sourceHandleBounds == null ? void 0 : sourceHandleBounds.source) ?? [], params.sourceHandle);
  const targetHandle = getHandle$1(
    // when connection type is loose we can define all handles as sources and connect source -> source
    params.connectionMode === ConnectionMode.Strict ? (targetHandleBounds == null ? void 0 : targetHandleBounds.target) ?? [] : ((targetHandleBounds == null ? void 0 : targetHandleBounds.target) ?? []).concat((targetHandleBounds == null ? void 0 : targetHandleBounds.source) ?? []),
    params.targetHandle
  );
  if (!sourceHandle || !targetHandle) {
    (_a = params.onError) == null ? void 0 : _a.call(params, "008", errorMessages["error008"](!sourceHandle ? "source" : "target", {
      id: params.id,
      sourceHandle: params.sourceHandle,
      targetHandle: params.targetHandle
    }));
    return null;
  }
  const sourcePosition = (sourceHandle == null ? void 0 : sourceHandle.position) || Position.Bottom;
  const targetPosition = (targetHandle == null ? void 0 : targetHandle.position) || Position.Top;
  const source = getHandlePosition(sourceNode, sourceHandle, sourcePosition);
  const target = getHandlePosition(targetNode, targetHandle, targetPosition);
  return {
    sourceX: source.x,
    sourceY: source.y,
    targetX: target.x,
    targetY: target.y,
    sourcePosition,
    targetPosition
  };
}
function toHandleBounds(handles) {
  if (!handles) {
    return null;
  }
  const source = [];
  const target = [];
  for (const handle of handles) {
    handle.width = handle.width ?? 1;
    handle.height = handle.height ?? 1;
    if (handle.type === "source") {
      source.push(handle);
    } else if (handle.type === "target") {
      target.push(handle);
    }
  }
  return {
    source,
    target
  };
}
function getHandlePosition(node, handle, fallbackPosition = Position.Left, center = false) {
  const x = ((handle == null ? void 0 : handle.x) ?? 0) + node.internals.positionAbsolute.x;
  const y = ((handle == null ? void 0 : handle.y) ?? 0) + node.internals.positionAbsolute.y;
  const { width, height } = handle ?? getNodeDimensions(node);
  if (center) {
    return { x: x + width / 2, y: y + height / 2 };
  }
  const position = (handle == null ? void 0 : handle.position) ?? fallbackPosition;
  switch (position) {
    case Position.Top:
      return { x: x + width / 2, y };
    case Position.Right:
      return { x: x + width, y: y + height / 2 };
    case Position.Bottom:
      return { x: x + width / 2, y: y + height };
    case Position.Left:
      return { x, y: y + height / 2 };
  }
}
function getHandle$1(bounds, handleId) {
  if (!bounds) {
    return null;
  }
  return (!handleId ? bounds[0] : bounds.find((d) => d.id === handleId)) || null;
}
function getMarkerId(marker, id) {
  if (!marker) {
    return "";
  }
  if (typeof marker === "string") {
    return marker;
  }
  const idPrefix = id ? `${id}__` : "";
  return `${idPrefix}${Object.keys(marker).sort().map((key2) => `${key2}=${marker[key2]}`).join("&")}`;
}
function createMarkerIds(edges, { id, defaultColor, defaultMarkerStart, defaultMarkerEnd }) {
  const ids = /* @__PURE__ */ new Set();
  return edges.reduce((markers, edge) => {
    [edge.markerStart || defaultMarkerStart, edge.markerEnd || defaultMarkerEnd].forEach((marker) => {
      if (marker && typeof marker === "object") {
        const markerId = getMarkerId(marker, id);
        if (!ids.has(markerId)) {
          markers.push({ id: markerId, color: marker.color || defaultColor, ...marker });
          ids.add(markerId);
        }
      }
    });
    return markers;
  }, []).sort((a, b) => a.id.localeCompare(b.id));
}
const defaultOptions = {
  nodeOrigin: [0, 0],
  nodeExtent: infiniteExtent,
  elevateNodesOnSelect: true,
  defaults: {}
};
const adoptUserNodesDefaultOptions = {
  ...defaultOptions,
  checkEquality: true
};
function mergeObjects(base, incoming) {
  const result = { ...base };
  for (const key2 in incoming) {
    if (incoming[key2] !== void 0) {
      result[key2] = incoming[key2];
    }
  }
  return result;
}
function updateAbsolutePositions(nodeLookup, parentLookup, options) {
  const _options = mergeObjects(defaultOptions, options);
  for (const node of nodeLookup.values()) {
    if (node.parentId) {
      updateChildNode(node, nodeLookup, parentLookup, _options);
    } else {
      const positionWithOrigin = getNodePositionWithOrigin(node, _options.nodeOrigin);
      const extent = isCoordinateExtent(node.extent) ? node.extent : _options.nodeExtent;
      const clampedPosition = clampPosition(positionWithOrigin, extent, getNodeDimensions(node));
      node.internals.positionAbsolute = clampedPosition;
    }
  }
}
function adoptUserNodes(nodes, nodeLookup, parentLookup, options) {
  var _a, _b;
  const _options = mergeObjects(adoptUserNodesDefaultOptions, options);
  let nodesInitialized = nodes.length > 0;
  const tmpLookup = new Map(nodeLookup);
  const selectedNodeZ = (_options == null ? void 0 : _options.elevateNodesOnSelect) ? 1e3 : 0;
  nodeLookup.clear();
  parentLookup.clear();
  for (const userNode of nodes) {
    let internalNode = tmpLookup.get(userNode.id);
    if (_options.checkEquality && userNode === (internalNode == null ? void 0 : internalNode.internals.userNode)) {
      nodeLookup.set(userNode.id, internalNode);
    } else {
      const positionWithOrigin = getNodePositionWithOrigin(userNode, _options.nodeOrigin);
      const extent = isCoordinateExtent(userNode.extent) ? userNode.extent : _options.nodeExtent;
      const clampedPosition = clampPosition(positionWithOrigin, extent, getNodeDimensions(userNode));
      internalNode = {
        ..._options.defaults,
        ...userNode,
        measured: {
          width: (_a = userNode.measured) == null ? void 0 : _a.width,
          height: (_b = userNode.measured) == null ? void 0 : _b.height
        },
        internals: {
          positionAbsolute: clampedPosition,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: !userNode.measured ? void 0 : internalNode == null ? void 0 : internalNode.internals.handleBounds,
          z: calculateZ(userNode, selectedNodeZ),
          userNode
        }
      };
      nodeLookup.set(userNode.id, internalNode);
    }
    if ((internalNode.measured === void 0 || internalNode.measured.width === void 0 || internalNode.measured.height === void 0) && !internalNode.hidden) {
      nodesInitialized = false;
    }
    if (userNode.parentId) {
      updateChildNode(internalNode, nodeLookup, parentLookup, options);
    }
  }
  return nodesInitialized;
}
function updateParentLookup(node, parentLookup) {
  if (!node.parentId) {
    return;
  }
  const childNodes = parentLookup.get(node.parentId);
  if (childNodes) {
    childNodes.set(node.id, node);
  } else {
    parentLookup.set(node.parentId, /* @__PURE__ */ new Map([[node.id, node]]));
  }
}
function updateChildNode(node, nodeLookup, parentLookup, options) {
  const { elevateNodesOnSelect, nodeOrigin, nodeExtent } = mergeObjects(defaultOptions, options);
  const parentId = node.parentId;
  const parentNode = nodeLookup.get(parentId);
  if (!parentNode) {
    console.warn(`Parent node ${parentId} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  updateParentLookup(node, parentLookup);
  const selectedNodeZ = elevateNodesOnSelect ? 1e3 : 0;
  const { x, y, z } = calculateChildXYZ(node, parentNode, nodeOrigin, nodeExtent, selectedNodeZ);
  const { positionAbsolute } = node.internals;
  const positionChanged = x !== positionAbsolute.x || y !== positionAbsolute.y;
  if (positionChanged || z !== node.internals.z) {
    nodeLookup.set(node.id, {
      ...node,
      internals: {
        ...node.internals,
        positionAbsolute: positionChanged ? { x, y } : positionAbsolute,
        z
      }
    });
  }
}
function calculateZ(node, selectedNodeZ) {
  return (isNumeric(node.zIndex) ? node.zIndex : 0) + (node.selected ? selectedNodeZ : 0);
}
function calculateChildXYZ(childNode, parentNode, nodeOrigin, nodeExtent, selectedNodeZ) {
  const { x: parentX, y: parentY } = parentNode.internals.positionAbsolute;
  const childDimensions = getNodeDimensions(childNode);
  const positionWithOrigin = getNodePositionWithOrigin(childNode, nodeOrigin);
  const clampedPosition = isCoordinateExtent(childNode.extent) ? clampPosition(positionWithOrigin, childNode.extent, childDimensions) : positionWithOrigin;
  let absolutePosition = clampPosition({ x: parentX + clampedPosition.x, y: parentY + clampedPosition.y }, nodeExtent, childDimensions);
  if (childNode.extent === "parent") {
    absolutePosition = clampPositionToParent(absolutePosition, childDimensions, parentNode);
  }
  const childZ = calculateZ(childNode, selectedNodeZ);
  const parentZ = parentNode.internals.z ?? 0;
  return {
    x: absolutePosition.x,
    y: absolutePosition.y,
    z: parentZ > childZ ? parentZ : childZ
  };
}
function handleExpandParent(children, nodeLookup, parentLookup, nodeOrigin = [0, 0]) {
  var _a;
  const changes = [];
  const parentExpansions = /* @__PURE__ */ new Map();
  for (const child2 of children) {
    const parent = nodeLookup.get(child2.parentId);
    if (!parent) {
      continue;
    }
    const parentRect = ((_a = parentExpansions.get(child2.parentId)) == null ? void 0 : _a.expandedRect) ?? nodeToRect(parent);
    const expandedRect = getBoundsOfRects(parentRect, child2.rect);
    parentExpansions.set(child2.parentId, { expandedRect, parent });
  }
  if (parentExpansions.size > 0) {
    parentExpansions.forEach(({ expandedRect, parent }, parentId) => {
      var _a2;
      const positionAbsolute = parent.internals.positionAbsolute;
      const dimensions = getNodeDimensions(parent);
      const origin = parent.origin ?? nodeOrigin;
      const xChange = expandedRect.x < positionAbsolute.x ? Math.round(Math.abs(positionAbsolute.x - expandedRect.x)) : 0;
      const yChange = expandedRect.y < positionAbsolute.y ? Math.round(Math.abs(positionAbsolute.y - expandedRect.y)) : 0;
      const newWidth = Math.max(dimensions.width, Math.round(expandedRect.width));
      const newHeight = Math.max(dimensions.height, Math.round(expandedRect.height));
      const widthChange = (newWidth - dimensions.width) * origin[0];
      const heightChange = (newHeight - dimensions.height) * origin[1];
      if (xChange > 0 || yChange > 0 || widthChange || heightChange) {
        changes.push({
          id: parentId,
          type: "position",
          position: {
            x: parent.position.x - xChange + widthChange,
            y: parent.position.y - yChange + heightChange
          }
        });
        (_a2 = parentLookup.get(parentId)) == null ? void 0 : _a2.forEach((childNode) => {
          if (!children.some((child2) => child2.id === childNode.id)) {
            changes.push({
              id: childNode.id,
              type: "position",
              position: {
                x: childNode.position.x + xChange,
                y: childNode.position.y + yChange
              }
            });
          }
        });
      }
      if (dimensions.width < expandedRect.width || dimensions.height < expandedRect.height || xChange || yChange) {
        changes.push({
          id: parentId,
          type: "dimensions",
          setAttributes: true,
          dimensions: {
            width: newWidth + (xChange ? origin[0] * xChange - widthChange : 0),
            height: newHeight + (yChange ? origin[1] * yChange - heightChange : 0)
          }
        });
      }
    });
  }
  return changes;
}
function updateNodeInternals(updates, nodeLookup, parentLookup, domNode, nodeOrigin, nodeExtent) {
  const viewportNode = domNode == null ? void 0 : domNode.querySelector(".xyflow__viewport");
  let updatedInternals = false;
  if (!viewportNode) {
    return { changes: [], updatedInternals };
  }
  const changes = [];
  const style = window.getComputedStyle(viewportNode);
  const { m22: zoom2 } = new window.DOMMatrixReadOnly(style.transform);
  const parentExpandChildren = [];
  for (const update of updates.values()) {
    const node = nodeLookup.get(update.id);
    if (!node) {
      continue;
    }
    if (node.hidden) {
      nodeLookup.set(node.id, {
        ...node,
        internals: {
          ...node.internals,
          handleBounds: void 0
        }
      });
      updatedInternals = true;
      continue;
    }
    const dimensions = getDimensions(update.nodeElement);
    const dimensionChanged = node.measured.width !== dimensions.width || node.measured.height !== dimensions.height;
    const doUpdate = !!(dimensions.width && dimensions.height && (dimensionChanged || !node.internals.handleBounds || update.force));
    if (doUpdate) {
      const nodeBounds = update.nodeElement.getBoundingClientRect();
      const extent = isCoordinateExtent(node.extent) ? node.extent : nodeExtent;
      let { positionAbsolute } = node.internals;
      if (node.parentId && node.extent === "parent") {
        positionAbsolute = clampPositionToParent(positionAbsolute, dimensions, nodeLookup.get(node.parentId));
      } else if (extent) {
        positionAbsolute = clampPosition(positionAbsolute, extent, dimensions);
      }
      const newNode = {
        ...node,
        measured: dimensions,
        internals: {
          ...node.internals,
          positionAbsolute,
          handleBounds: {
            source: getHandleBounds("source", update.nodeElement, nodeBounds, zoom2, node.id),
            target: getHandleBounds("target", update.nodeElement, nodeBounds, zoom2, node.id)
          }
        }
      };
      nodeLookup.set(node.id, newNode);
      if (node.parentId) {
        updateChildNode(newNode, nodeLookup, parentLookup, { nodeOrigin });
      }
      updatedInternals = true;
      if (dimensionChanged) {
        changes.push({
          id: node.id,
          type: "dimensions",
          dimensions
        });
        if (node.expandParent && node.parentId) {
          parentExpandChildren.push({
            id: node.id,
            parentId: node.parentId,
            rect: nodeToRect(newNode, nodeOrigin)
          });
        }
      }
    }
  }
  if (parentExpandChildren.length > 0) {
    const parentExpandChanges = handleExpandParent(parentExpandChildren, nodeLookup, parentLookup, nodeOrigin);
    changes.push(...parentExpandChanges);
  }
  return { changes, updatedInternals };
}
async function panBy({ delta, panZoom, transform: transform2, translateExtent, width, height }) {
  if (!panZoom || !delta.x && !delta.y) {
    return Promise.resolve(false);
  }
  const nextViewport = await panZoom.setViewportConstrained({
    x: transform2[0] + delta.x,
    y: transform2[1] + delta.y,
    zoom: transform2[2]
  }, [
    [0, 0],
    [width, height]
  ], translateExtent);
  const transformChanged = !!nextViewport && (nextViewport.x !== transform2[0] || nextViewport.y !== transform2[1] || nextViewport.k !== transform2[2]);
  return Promise.resolve(transformChanged);
}
function addConnectionToLookup(type, connection, connectionKey, connectionLookup, nodeId, handleId) {
  let key2 = nodeId;
  const nodeMap = connectionLookup.get(key2) || /* @__PURE__ */ new Map();
  connectionLookup.set(key2, nodeMap.set(connectionKey, connection));
  key2 = `${nodeId}-${type}`;
  const typeMap = connectionLookup.get(key2) || /* @__PURE__ */ new Map();
  connectionLookup.set(key2, typeMap.set(connectionKey, connection));
  if (handleId) {
    key2 = `${nodeId}-${type}-${handleId}`;
    const handleMap = connectionLookup.get(key2) || /* @__PURE__ */ new Map();
    connectionLookup.set(key2, handleMap.set(connectionKey, connection));
  }
}
function updateConnectionLookup(connectionLookup, edgeLookup, edges) {
  connectionLookup.clear();
  edgeLookup.clear();
  for (const edge of edges) {
    const { source: sourceNode, target: targetNode, sourceHandle = null, targetHandle = null } = edge;
    const connection = { edgeId: edge.id, source: sourceNode, target: targetNode, sourceHandle, targetHandle };
    const sourceKey = `${sourceNode}-${sourceHandle}--${targetNode}-${targetHandle}`;
    const targetKey = `${targetNode}-${targetHandle}--${sourceNode}-${sourceHandle}`;
    addConnectionToLookup("source", connection, targetKey, connectionLookup, sourceNode, sourceHandle);
    addConnectionToLookup("target", connection, sourceKey, connectionLookup, targetNode, targetHandle);
    edgeLookup.set(edge.id, edge);
  }
}
function isParentSelected(node, nodeLookup) {
  if (!node.parentId) {
    return false;
  }
  const parentNode = nodeLookup.get(node.parentId);
  if (!parentNode) {
    return false;
  }
  if (parentNode.selected) {
    return true;
  }
  return isParentSelected(parentNode, nodeLookup);
}
function hasSelector(target, selector, domNode) {
  var _a;
  let current = target;
  do {
    if ((_a = current == null ? void 0 : current.matches) == null ? void 0 : _a.call(current, selector))
      return true;
    if (current === domNode)
      return false;
    current = current == null ? void 0 : current.parentElement;
  } while (current);
  return false;
}
function getDragItems(nodeLookup, nodesDraggable, mousePos, nodeId) {
  const dragItems = /* @__PURE__ */ new Map();
  for (const [id, node] of nodeLookup) {
    if ((node.selected || node.id === nodeId) && (!node.parentId || !isParentSelected(node, nodeLookup)) && (node.draggable || nodesDraggable && typeof node.draggable === "undefined")) {
      const internalNode = nodeLookup.get(id);
      if (internalNode) {
        dragItems.set(id, {
          id,
          position: internalNode.position || { x: 0, y: 0 },
          distance: {
            x: mousePos.x - internalNode.internals.positionAbsolute.x,
            y: mousePos.y - internalNode.internals.positionAbsolute.y
          },
          extent: internalNode.extent,
          parentId: internalNode.parentId,
          origin: internalNode.origin,
          expandParent: internalNode.expandParent,
          internals: {
            positionAbsolute: internalNode.internals.positionAbsolute || { x: 0, y: 0 }
          },
          measured: {
            width: internalNode.measured.width ?? 0,
            height: internalNode.measured.height ?? 0
          }
        });
      }
    }
  }
  return dragItems;
}
function getEventHandlerParams({ nodeId, dragItems, nodeLookup, dragging = true }) {
  var _a, _b, _c;
  const nodesFromDragItems = [];
  for (const [id, dragItem] of dragItems) {
    const node2 = (_a = nodeLookup.get(id)) == null ? void 0 : _a.internals.userNode;
    if (node2) {
      nodesFromDragItems.push({
        ...node2,
        position: dragItem.position,
        dragging
      });
    }
  }
  if (!nodeId) {
    return [nodesFromDragItems[0], nodesFromDragItems];
  }
  const node = (_b = nodeLookup.get(nodeId)) == null ? void 0 : _b.internals.userNode;
  return [
    !node ? nodesFromDragItems[0] : {
      ...node,
      position: ((_c = dragItems.get(nodeId)) == null ? void 0 : _c.position) || node.position,
      dragging
    },
    nodesFromDragItems
  ];
}
function XYDrag({ onNodeMouseDown, getStoreItems, onDragStart, onDrag, onDragStop }) {
  let lastPos = { x: null, y: null };
  let autoPanId = 0;
  let dragItems = /* @__PURE__ */ new Map();
  let autoPanStarted = false;
  let mousePosition = { x: 0, y: 0 };
  let containerBounds = null;
  let dragStarted = false;
  let d3Selection = null;
  let abortDrag = false;
  function update({ noDragClassName, handleSelector, domNode, isSelectable, nodeId, nodeClickDistance = 0 }) {
    d3Selection = select(domNode);
    function updateNodes({ x, y }, dragEvent) {
      const { nodeLookup, nodeExtent, snapGrid, snapToGrid, nodeOrigin, onNodeDrag, onSelectionDrag, onError, updateNodePositions } = getStoreItems();
      lastPos = { x, y };
      let hasChange = false;
      let nodesBox = { x: 0, y: 0, x2: 0, y2: 0 };
      if (dragItems.size > 1 && nodeExtent) {
        const rect = getInternalNodesBounds(dragItems);
        nodesBox = rectToBox(rect);
      }
      for (const [id, dragItem] of dragItems) {
        if (!nodeLookup.has(id)) {
          continue;
        }
        let nextPosition = { x: x - dragItem.distance.x, y: y - dragItem.distance.y };
        if (snapToGrid) {
          nextPosition = snapPosition(nextPosition, snapGrid);
        }
        let adjustedNodeExtent = [
          [nodeExtent[0][0], nodeExtent[0][1]],
          [nodeExtent[1][0], nodeExtent[1][1]]
        ];
        if (dragItems.size > 1 && nodeExtent && !dragItem.extent) {
          const { positionAbsolute: positionAbsolute2 } = dragItem.internals;
          const x1 = positionAbsolute2.x - nodesBox.x + nodeExtent[0][0];
          const x2 = positionAbsolute2.x + dragItem.measured.width - nodesBox.x2 + nodeExtent[1][0];
          const y1 = positionAbsolute2.y - nodesBox.y + nodeExtent[0][1];
          const y2 = positionAbsolute2.y + dragItem.measured.height - nodesBox.y2 + nodeExtent[1][1];
          adjustedNodeExtent = [
            [x1, y1],
            [x2, y2]
          ];
        }
        const { position, positionAbsolute } = calculateNodePosition({
          nodeId: id,
          nextPosition,
          nodeLookup,
          nodeExtent: adjustedNodeExtent,
          nodeOrigin,
          onError
        });
        hasChange = hasChange || dragItem.position.x !== position.x || dragItem.position.y !== position.y;
        dragItem.position = position;
        dragItem.internals.positionAbsolute = positionAbsolute;
      }
      if (!hasChange) {
        return;
      }
      updateNodePositions(dragItems, true);
      if (dragEvent && (onDrag || onNodeDrag || !nodeId && onSelectionDrag)) {
        const [currentNode, currentNodes] = getEventHandlerParams({
          nodeId,
          dragItems,
          nodeLookup
        });
        onDrag == null ? void 0 : onDrag(dragEvent, dragItems, currentNode, currentNodes);
        onNodeDrag == null ? void 0 : onNodeDrag(dragEvent, currentNode, currentNodes);
        if (!nodeId) {
          onSelectionDrag == null ? void 0 : onSelectionDrag(dragEvent, currentNodes);
        }
      }
    }
    async function autoPan() {
      if (!containerBounds) {
        return;
      }
      const { transform: transform2, panBy: panBy2, autoPanSpeed, autoPanOnNodeDrag } = getStoreItems();
      if (!autoPanOnNodeDrag) {
        autoPanStarted = false;
        cancelAnimationFrame(autoPanId);
        return;
      }
      const [xMovement, yMovement] = calcAutoPan(mousePosition, containerBounds, autoPanSpeed);
      if (xMovement !== 0 || yMovement !== 0) {
        lastPos.x = (lastPos.x ?? 0) - xMovement / transform2[2];
        lastPos.y = (lastPos.y ?? 0) - yMovement / transform2[2];
        if (await panBy2({ x: xMovement, y: yMovement })) {
          updateNodes(lastPos, null);
        }
      }
      autoPanId = requestAnimationFrame(autoPan);
    }
    function startDrag(event2) {
      var _a;
      const { nodeLookup, multiSelectionActive, nodesDraggable, transform: transform2, snapGrid, snapToGrid, selectNodesOnDrag, onNodeDragStart, onSelectionDragStart, unselectNodesAndEdges } = getStoreItems();
      dragStarted = true;
      if ((!selectNodesOnDrag || !isSelectable) && !multiSelectionActive && nodeId) {
        if (!((_a = nodeLookup.get(nodeId)) == null ? void 0 : _a.selected)) {
          unselectNodesAndEdges();
        }
      }
      if (isSelectable && selectNodesOnDrag && nodeId) {
        onNodeMouseDown == null ? void 0 : onNodeMouseDown(nodeId);
      }
      const pointerPos = getPointerPosition(event2.sourceEvent, { transform: transform2, snapGrid, snapToGrid, containerBounds });
      lastPos = pointerPos;
      dragItems = getDragItems(nodeLookup, nodesDraggable, pointerPos, nodeId);
      if (dragItems.size > 0 && (onDragStart || onNodeDragStart || !nodeId && onSelectionDragStart)) {
        const [currentNode, currentNodes] = getEventHandlerParams({
          nodeId,
          dragItems,
          nodeLookup
        });
        onDragStart == null ? void 0 : onDragStart(event2.sourceEvent, dragItems, currentNode, currentNodes);
        onNodeDragStart == null ? void 0 : onNodeDragStart(event2.sourceEvent, currentNode, currentNodes);
        if (!nodeId) {
          onSelectionDragStart == null ? void 0 : onSelectionDragStart(event2.sourceEvent, currentNodes);
        }
      }
    }
    const d3DragInstance = drag$1().clickDistance(nodeClickDistance).on("start", (event2) => {
      const { domNode: domNode2, nodeDragThreshold, transform: transform2, snapGrid, snapToGrid } = getStoreItems();
      containerBounds = (domNode2 == null ? void 0 : domNode2.getBoundingClientRect()) || null;
      abortDrag = false;
      if (nodeDragThreshold === 0) {
        startDrag(event2);
      }
      const pointerPos = getPointerPosition(event2.sourceEvent, { transform: transform2, snapGrid, snapToGrid, containerBounds });
      lastPos = pointerPos;
      mousePosition = getEventPosition(event2.sourceEvent, containerBounds);
    }).on("drag", (event2) => {
      const { autoPanOnNodeDrag, transform: transform2, snapGrid, snapToGrid, nodeDragThreshold, nodeLookup } = getStoreItems();
      const pointerPos = getPointerPosition(event2.sourceEvent, { transform: transform2, snapGrid, snapToGrid, containerBounds });
      if (event2.sourceEvent.type === "touchmove" && event2.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      nodeId && !nodeLookup.has(nodeId)) {
        abortDrag = true;
      }
      if (abortDrag) {
        return;
      }
      if (!autoPanStarted && autoPanOnNodeDrag && dragStarted) {
        autoPanStarted = true;
        autoPan();
      }
      if (!dragStarted) {
        const x = pointerPos.xSnapped - (lastPos.x ?? 0);
        const y = pointerPos.ySnapped - (lastPos.y ?? 0);
        const distance2 = Math.sqrt(x * x + y * y);
        if (distance2 > nodeDragThreshold) {
          startDrag(event2);
        }
      }
      if ((lastPos.x !== pointerPos.xSnapped || lastPos.y !== pointerPos.ySnapped) && dragItems && dragStarted) {
        mousePosition = getEventPosition(event2.sourceEvent, containerBounds);
        updateNodes(pointerPos, event2.sourceEvent);
      }
    }).on("end", (event2) => {
      if (!dragStarted || abortDrag) {
        return;
      }
      autoPanStarted = false;
      dragStarted = false;
      cancelAnimationFrame(autoPanId);
      if (dragItems.size > 0) {
        const { nodeLookup, updateNodePositions, onNodeDragStop, onSelectionDragStop } = getStoreItems();
        updateNodePositions(dragItems, false);
        if (onDragStop || onNodeDragStop || !nodeId && onSelectionDragStop) {
          const [currentNode, currentNodes] = getEventHandlerParams({
            nodeId,
            dragItems,
            nodeLookup,
            dragging: false
          });
          onDragStop == null ? void 0 : onDragStop(event2.sourceEvent, dragItems, currentNode, currentNodes);
          onNodeDragStop == null ? void 0 : onNodeDragStop(event2.sourceEvent, currentNode, currentNodes);
          if (!nodeId) {
            onSelectionDragStop == null ? void 0 : onSelectionDragStop(event2.sourceEvent, currentNodes);
          }
        }
      }
    }).filter((event2) => {
      const target = event2.target;
      const isDraggable = !event2.button && (!noDragClassName || !hasSelector(target, `.${noDragClassName}`, domNode)) && (!handleSelector || hasSelector(target, handleSelector, domNode));
      return isDraggable;
    });
    d3Selection.call(d3DragInstance);
  }
  function destroy() {
    d3Selection == null ? void 0 : d3Selection.on(".drag", null);
  }
  return {
    update,
    destroy
  };
}
function getNodesWithinDistance(position, nodeLookup, distance2) {
  const nodes = [];
  const rect = {
    x: position.x - distance2,
    y: position.y - distance2,
    width: distance2 * 2,
    height: distance2 * 2
  };
  for (const node of nodeLookup.values()) {
    if (getOverlappingArea(rect, nodeToRect(node)) > 0) {
      nodes.push(node);
    }
  }
  return nodes;
}
const ADDITIONAL_DISTANCE = 250;
function getClosestHandle(position, connectionRadius, nodeLookup, fromHandle) {
  var _a, _b;
  let closestHandles = [];
  let minDistance = Infinity;
  const closeNodes = getNodesWithinDistance(position, nodeLookup, connectionRadius + ADDITIONAL_DISTANCE);
  for (const node of closeNodes) {
    const allHandles = [...((_a = node.internals.handleBounds) == null ? void 0 : _a.source) ?? [], ...((_b = node.internals.handleBounds) == null ? void 0 : _b.target) ?? []];
    for (const handle of allHandles) {
      if (fromHandle.nodeId === handle.nodeId && fromHandle.type === handle.type && fromHandle.id === handle.id) {
        continue;
      }
      const { x, y } = getHandlePosition(node, handle, handle.position, true);
      const distance2 = Math.sqrt(Math.pow(x - position.x, 2) + Math.pow(y - position.y, 2));
      if (distance2 > connectionRadius) {
        continue;
      }
      if (distance2 < minDistance) {
        closestHandles = [{ ...handle, x, y }];
        minDistance = distance2;
      } else if (distance2 === minDistance) {
        closestHandles.push({ ...handle, x, y });
      }
    }
  }
  if (!closestHandles.length) {
    return null;
  }
  if (closestHandles.length > 1) {
    const oppositeHandleType = fromHandle.type === "source" ? "target" : "source";
    return closestHandles.find((handle) => handle.type === oppositeHandleType) ?? closestHandles[0];
  }
  return closestHandles[0];
}
function getHandle(nodeId, handleType, handleId, nodeLookup, connectionMode, withAbsolutePosition = false) {
  var _a, _b, _c;
  const node = nodeLookup.get(nodeId);
  if (!node) {
    return null;
  }
  const handles = connectionMode === "strict" ? (_a = node.internals.handleBounds) == null ? void 0 : _a[handleType] : [...((_b = node.internals.handleBounds) == null ? void 0 : _b.source) ?? [], ...((_c = node.internals.handleBounds) == null ? void 0 : _c.target) ?? []];
  const handle = (handleId ? handles == null ? void 0 : handles.find((h) => h.id === handleId) : handles == null ? void 0 : handles[0]) ?? null;
  return handle && withAbsolutePosition ? { ...handle, ...getHandlePosition(node, handle, handle.position, true) } : handle;
}
function getHandleType(edgeUpdaterType, handleDomNode) {
  if (edgeUpdaterType) {
    return edgeUpdaterType;
  } else if (handleDomNode == null ? void 0 : handleDomNode.classList.contains("target")) {
    return "target";
  } else if (handleDomNode == null ? void 0 : handleDomNode.classList.contains("source")) {
    return "source";
  }
  return null;
}
function isConnectionValid(isInsideConnectionRadius, isHandleValid) {
  let isValid = null;
  if (isHandleValid) {
    isValid = true;
  } else if (isInsideConnectionRadius && !isHandleValid) {
    isValid = false;
  }
  return isValid;
}
const alwaysValid = () => true;
function onPointerDown(event2, { connectionMode, connectionRadius, handleId, nodeId, edgeUpdaterType, isTarget, domNode, nodeLookup, lib, autoPanOnConnect, flowId, panBy: panBy2, cancelConnection, onConnectStart, onConnect, onConnectEnd, isValidConnection = alwaysValid, onReconnectEnd, updateConnection, getTransform, getFromHandle, autoPanSpeed }) {
  const doc = getHostForElement(event2.target);
  let autoPanId = 0;
  let closestHandle;
  const { x, y } = getEventPosition(event2);
  const clickedHandle = doc == null ? void 0 : doc.elementFromPoint(x, y);
  const handleType = getHandleType(edgeUpdaterType, clickedHandle);
  const containerBounds = domNode == null ? void 0 : domNode.getBoundingClientRect();
  if (!containerBounds || !handleType) {
    return;
  }
  const fromHandleInternal = getHandle(nodeId, handleType, handleId, nodeLookup, connectionMode);
  if (!fromHandleInternal) {
    return;
  }
  let position = getEventPosition(event2, containerBounds);
  let autoPanStarted = false;
  let connection = null;
  let isValid = false;
  let handleDomNode = null;
  function autoPan() {
    if (!autoPanOnConnect || !containerBounds) {
      return;
    }
    const [x2, y2] = calcAutoPan(position, containerBounds, autoPanSpeed);
    panBy2({ x: x2, y: y2 });
    autoPanId = requestAnimationFrame(autoPan);
  }
  const fromHandle = {
    ...fromHandleInternal,
    nodeId,
    type: handleType,
    position: fromHandleInternal.position
  };
  const fromNodeInternal = nodeLookup.get(nodeId);
  const from = getHandlePosition(fromNodeInternal, fromHandle, Position.Left, true);
  const newConnection = {
    inProgress: true,
    isValid: null,
    from,
    fromHandle,
    fromPosition: fromHandle.position,
    fromNode: fromNodeInternal,
    to: position,
    toHandle: null,
    toPosition: oppositePosition[fromHandle.position],
    toNode: null
  };
  updateConnection(newConnection);
  let previousConnection = newConnection;
  onConnectStart == null ? void 0 : onConnectStart(event2, { nodeId, handleId, handleType });
  function onPointerMove(event22) {
    if (!getFromHandle() || !fromHandle) {
      onPointerUp(event22);
      return;
    }
    const transform2 = getTransform();
    position = getEventPosition(event22, containerBounds);
    closestHandle = getClosestHandle(pointToRendererPoint(position, transform2, false, [1, 1]), connectionRadius, nodeLookup, fromHandle);
    if (!autoPanStarted) {
      autoPan();
      autoPanStarted = true;
    }
    const result = isValidHandle(event22, {
      handle: closestHandle,
      connectionMode,
      fromNodeId: nodeId,
      fromHandleId: handleId,
      fromType: isTarget ? "target" : "source",
      isValidConnection,
      doc,
      lib,
      flowId,
      nodeLookup
    });
    handleDomNode = result.handleDomNode;
    connection = result.connection;
    isValid = isConnectionValid(!!closestHandle, result.isValid);
    const newConnection2 = {
      // from stays the same
      ...previousConnection,
      isValid,
      to: closestHandle && isValid ? rendererPointToPoint({ x: closestHandle.x, y: closestHandle.y }, transform2) : position,
      toHandle: result.toHandle,
      toPosition: isValid && result.toHandle ? result.toHandle.position : oppositePosition[fromHandle.position],
      toNode: result.toHandle ? nodeLookup.get(result.toHandle.nodeId) : null
    };
    if (isValid && closestHandle && previousConnection.toHandle && newConnection2.toHandle && previousConnection.toHandle.type === newConnection2.toHandle.type && previousConnection.toHandle.nodeId === newConnection2.toHandle.nodeId && previousConnection.toHandle.id === newConnection2.toHandle.id && previousConnection.to.x === newConnection2.to.x && previousConnection.to.y === newConnection2.to.y) {
      return;
    }
    updateConnection(newConnection2);
    previousConnection = newConnection2;
  }
  function onPointerUp(event22) {
    if ((closestHandle || handleDomNode) && connection && isValid) {
      onConnect == null ? void 0 : onConnect(connection);
    }
    const { inProgress, ...connectionState } = previousConnection;
    const finalConnectionState = {
      ...connectionState,
      toPosition: previousConnection.toHandle ? previousConnection.toPosition : null
    };
    onConnectEnd == null ? void 0 : onConnectEnd(event22, finalConnectionState);
    if (edgeUpdaterType) {
      onReconnectEnd == null ? void 0 : onReconnectEnd(event22, finalConnectionState);
    }
    cancelConnection();
    cancelAnimationFrame(autoPanId);
    autoPanStarted = false;
    isValid = false;
    connection = null;
    handleDomNode = null;
    doc.removeEventListener("mousemove", onPointerMove);
    doc.removeEventListener("mouseup", onPointerUp);
    doc.removeEventListener("touchmove", onPointerMove);
    doc.removeEventListener("touchend", onPointerUp);
  }
  doc.addEventListener("mousemove", onPointerMove);
  doc.addEventListener("mouseup", onPointerUp);
  doc.addEventListener("touchmove", onPointerMove);
  doc.addEventListener("touchend", onPointerUp);
}
function isValidHandle(event2, { handle, connectionMode, fromNodeId, fromHandleId, fromType, doc, lib, flowId, isValidConnection = alwaysValid, nodeLookup }) {
  const isTarget = fromType === "target";
  const handleDomNode = handle ? doc.querySelector(`.${lib}-flow__handle[data-id="${flowId}-${handle == null ? void 0 : handle.nodeId}-${handle == null ? void 0 : handle.id}-${handle == null ? void 0 : handle.type}"]`) : null;
  const { x, y } = getEventPosition(event2);
  const handleBelow = doc.elementFromPoint(x, y);
  const handleToCheck = (handleBelow == null ? void 0 : handleBelow.classList.contains(`${lib}-flow__handle`)) ? handleBelow : handleDomNode;
  const result = {
    handleDomNode: handleToCheck,
    isValid: false,
    connection: null,
    toHandle: null
  };
  if (handleToCheck) {
    const handleType = getHandleType(void 0, handleToCheck);
    const handleNodeId = handleToCheck.getAttribute("data-nodeid");
    const handleId = handleToCheck.getAttribute("data-handleid");
    const connectable = handleToCheck.classList.contains("connectable");
    const connectableEnd = handleToCheck.classList.contains("connectableend");
    if (!handleNodeId || !handleType) {
      return result;
    }
    const connection = {
      source: isTarget ? handleNodeId : fromNodeId,
      sourceHandle: isTarget ? handleId : fromHandleId,
      target: isTarget ? fromNodeId : handleNodeId,
      targetHandle: isTarget ? fromHandleId : handleId
    };
    result.connection = connection;
    const isConnectable = connectable && connectableEnd;
    const isValid = isConnectable && (connectionMode === ConnectionMode.Strict ? isTarget && handleType === "source" || !isTarget && handleType === "target" : handleNodeId !== fromNodeId || handleId !== fromHandleId);
    result.isValid = isValid && isValidConnection(connection);
    result.toHandle = getHandle(handleNodeId, handleType, handleId, nodeLookup, connectionMode, false);
  }
  return result;
}
const XYHandle = {
  onPointerDown,
  isValid: isValidHandle
};
const viewChanged = (prevViewport, eventViewport) => prevViewport.x !== eventViewport.x || prevViewport.y !== eventViewport.y || prevViewport.zoom !== eventViewport.k;
const transformToViewport = (transform2) => ({
  x: transform2.x,
  y: transform2.y,
  zoom: transform2.k
});
const viewportToTransform = ({ x, y, zoom: zoom2 }) => identity.translate(x, y).scale(zoom2);
const isWrappedWithClass = (event2, className) => event2.target.closest(`.${className}`);
const isRightClickPan = (panOnDrag, usedButton) => usedButton === 2 && Array.isArray(panOnDrag) && panOnDrag.includes(2);
const getD3Transition = (selection, duration = 0, onEnd = () => {
}) => {
  const hasDuration = typeof duration === "number" && duration > 0;
  if (!hasDuration) {
    onEnd();
  }
  return hasDuration ? selection.transition().duration(duration).on("end", onEnd) : selection;
};
const wheelDelta = (event2) => {
  const factor = event2.ctrlKey && isMacOs() ? 10 : 1;
  return -event2.deltaY * (event2.deltaMode === 1 ? 0.05 : event2.deltaMode ? 1 : 2e-3) * factor;
};
function createPanOnScrollHandler({ zoomPanValues, noWheelClassName, d3Selection, d3Zoom, panOnScrollMode, panOnScrollSpeed, zoomOnPinch, onPanZoomStart, onPanZoom, onPanZoomEnd }) {
  return (event2) => {
    if (isWrappedWithClass(event2, noWheelClassName)) {
      return false;
    }
    event2.preventDefault();
    event2.stopImmediatePropagation();
    const currentZoom = d3Selection.property("__zoom").k || 1;
    if (event2.ctrlKey && zoomOnPinch) {
      const point = pointer(event2);
      const pinchDelta = wheelDelta(event2);
      const zoom2 = currentZoom * Math.pow(2, pinchDelta);
      d3Zoom.scaleTo(d3Selection, zoom2, point, event2);
      return;
    }
    const deltaNormalize = event2.deltaMode === 1 ? 20 : 1;
    let deltaX = panOnScrollMode === PanOnScrollMode.Vertical ? 0 : event2.deltaX * deltaNormalize;
    let deltaY = panOnScrollMode === PanOnScrollMode.Horizontal ? 0 : event2.deltaY * deltaNormalize;
    if (!isMacOs() && event2.shiftKey && panOnScrollMode !== PanOnScrollMode.Vertical) {
      deltaX = event2.deltaY * deltaNormalize;
      deltaY = 0;
    }
    d3Zoom.translateBy(
      d3Selection,
      -(deltaX / currentZoom) * panOnScrollSpeed,
      -(deltaY / currentZoom) * panOnScrollSpeed,
      // @ts-ignore
      { internal: true }
    );
    const nextViewport = transformToViewport(d3Selection.property("__zoom"));
    clearTimeout(zoomPanValues.panScrollTimeout);
    if (!zoomPanValues.isPanScrolling) {
      zoomPanValues.isPanScrolling = true;
      onPanZoomStart == null ? void 0 : onPanZoomStart(event2, nextViewport);
    }
    if (zoomPanValues.isPanScrolling) {
      onPanZoom == null ? void 0 : onPanZoom(event2, nextViewport);
      zoomPanValues.panScrollTimeout = setTimeout(() => {
        onPanZoomEnd == null ? void 0 : onPanZoomEnd(event2, nextViewport);
        zoomPanValues.isPanScrolling = false;
      }, 150);
    }
  };
}
function createZoomOnScrollHandler({ noWheelClassName, preventScrolling, d3ZoomHandler }) {
  return function(event2, d) {
    const isWheel = event2.type === "wheel";
    const preventZoom = !preventScrolling && isWheel && !event2.ctrlKey;
    const hasNoWheelClass = isWrappedWithClass(event2, noWheelClassName);
    if (event2.ctrlKey && isWheel && hasNoWheelClass) {
      event2.preventDefault();
    }
    if (preventZoom || hasNoWheelClass) {
      return null;
    }
    event2.preventDefault();
    d3ZoomHandler.call(this, event2, d);
  };
}
function createPanZoomStartHandler({ zoomPanValues, onDraggingChange, onPanZoomStart }) {
  return (event2) => {
    var _a, _b, _c;
    if ((_a = event2.sourceEvent) == null ? void 0 : _a.internal) {
      return;
    }
    const viewport = transformToViewport(event2.transform);
    zoomPanValues.mouseButton = ((_b = event2.sourceEvent) == null ? void 0 : _b.button) || 0;
    zoomPanValues.isZoomingOrPanning = true;
    zoomPanValues.prevViewport = viewport;
    if (((_c = event2.sourceEvent) == null ? void 0 : _c.type) === "mousedown") {
      onDraggingChange(true);
    }
    if (onPanZoomStart) {
      onPanZoomStart == null ? void 0 : onPanZoomStart(event2.sourceEvent, viewport);
    }
  };
}
function createPanZoomHandler({ zoomPanValues, panOnDrag, onPaneContextMenu, onTransformChange, onPanZoom }) {
  return (event2) => {
    var _a, _b;
    zoomPanValues.usedRightMouseButton = !!(onPaneContextMenu && isRightClickPan(panOnDrag, zoomPanValues.mouseButton ?? 0));
    if (!((_a = event2.sourceEvent) == null ? void 0 : _a.sync)) {
      onTransformChange([event2.transform.x, event2.transform.y, event2.transform.k]);
    }
    if (onPanZoom && !((_b = event2.sourceEvent) == null ? void 0 : _b.internal)) {
      onPanZoom == null ? void 0 : onPanZoom(event2.sourceEvent, transformToViewport(event2.transform));
    }
  };
}
function createPanZoomEndHandler({ zoomPanValues, panOnDrag, panOnScroll, onDraggingChange, onPanZoomEnd, onPaneContextMenu }) {
  return (event2) => {
    var _a;
    if ((_a = event2.sourceEvent) == null ? void 0 : _a.internal) {
      return;
    }
    zoomPanValues.isZoomingOrPanning = false;
    if (onPaneContextMenu && isRightClickPan(panOnDrag, zoomPanValues.mouseButton ?? 0) && !zoomPanValues.usedRightMouseButton && event2.sourceEvent) {
      onPaneContextMenu(event2.sourceEvent);
    }
    zoomPanValues.usedRightMouseButton = false;
    onDraggingChange(false);
    if (onPanZoomEnd && viewChanged(zoomPanValues.prevViewport, event2.transform)) {
      const viewport = transformToViewport(event2.transform);
      zoomPanValues.prevViewport = viewport;
      clearTimeout(zoomPanValues.timerId);
      zoomPanValues.timerId = setTimeout(
        () => {
          onPanZoomEnd == null ? void 0 : onPanZoomEnd(event2.sourceEvent, viewport);
        },
        // we need a setTimeout for panOnScroll to supress multiple end events fired during scroll
        panOnScroll ? 150 : 0
      );
    }
  };
}
function createFilter({ zoomActivationKeyPressed, zoomOnScroll, zoomOnPinch, panOnDrag, panOnScroll, zoomOnDoubleClick, userSelectionActive, noWheelClassName, noPanClassName, lib }) {
  return (event2) => {
    var _a;
    const zoomScroll = zoomActivationKeyPressed || zoomOnScroll;
    const pinchZoom = zoomOnPinch && event2.ctrlKey;
    if (event2.button === 1 && event2.type === "mousedown" && (isWrappedWithClass(event2, `${lib}-flow__node`) || isWrappedWithClass(event2, `${lib}-flow__edge`))) {
      return true;
    }
    if (!panOnDrag && !zoomScroll && !panOnScroll && !zoomOnDoubleClick && !zoomOnPinch) {
      return false;
    }
    if (userSelectionActive) {
      return false;
    }
    if (isWrappedWithClass(event2, noWheelClassName) && event2.type === "wheel") {
      return false;
    }
    if (isWrappedWithClass(event2, noPanClassName) && (event2.type !== "wheel" || panOnScroll && event2.type === "wheel" && !zoomActivationKeyPressed)) {
      return false;
    }
    if (!zoomOnPinch && event2.ctrlKey && event2.type === "wheel") {
      return false;
    }
    if (!zoomOnPinch && event2.type === "touchstart" && ((_a = event2.touches) == null ? void 0 : _a.length) > 1) {
      event2.preventDefault();
      return false;
    }
    if (!zoomScroll && !panOnScroll && !pinchZoom && event2.type === "wheel") {
      return false;
    }
    if (!panOnDrag && (event2.type === "mousedown" || event2.type === "touchstart")) {
      return false;
    }
    if (Array.isArray(panOnDrag) && !panOnDrag.includes(event2.button) && event2.type === "mousedown") {
      return false;
    }
    const buttonAllowed = Array.isArray(panOnDrag) && panOnDrag.includes(event2.button) || !event2.button || event2.button <= 1;
    return (!event2.ctrlKey || event2.type === "wheel") && buttonAllowed;
  };
}
function XYPanZoom({ domNode, minZoom, maxZoom, paneClickDistance, translateExtent, viewport, onPanZoom, onPanZoomStart, onPanZoomEnd, onDraggingChange }) {
  const zoomPanValues = {
    isZoomingOrPanning: false,
    usedRightMouseButton: false,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: false
  };
  const bbox = domNode.getBoundingClientRect();
  const d3ZoomInstance = zoom$1().clickDistance(!isNumeric(paneClickDistance) || paneClickDistance < 0 ? 0 : paneClickDistance).scaleExtent([minZoom, maxZoom]).translateExtent(translateExtent);
  const d3Selection = select(domNode).call(d3ZoomInstance);
  setViewportConstrained({
    x: viewport.x,
    y: viewport.y,
    zoom: clamp(viewport.zoom, minZoom, maxZoom)
  }, [
    [0, 0],
    [bbox.width, bbox.height]
  ], translateExtent);
  const d3ZoomHandler = d3Selection.on("wheel.zoom");
  const d3DblClickZoomHandler = d3Selection.on("dblclick.zoom");
  d3ZoomInstance.wheelDelta(wheelDelta);
  function setTransform(transform2, options) {
    if (d3Selection) {
      return new Promise((resolve) => {
        d3ZoomInstance == null ? void 0 : d3ZoomInstance.transform(getD3Transition(d3Selection, options == null ? void 0 : options.duration, () => resolve(true)), transform2);
      });
    }
    return Promise.resolve(false);
  }
  function update({ noWheelClassName, noPanClassName, onPaneContextMenu, userSelectionActive, panOnScroll, panOnDrag, panOnScrollMode, panOnScrollSpeed, preventScrolling, zoomOnPinch, zoomOnScroll, zoomOnDoubleClick, zoomActivationKeyPressed, lib, onTransformChange }) {
    if (userSelectionActive && !zoomPanValues.isZoomingOrPanning) {
      destroy();
    }
    const isPanOnScroll = panOnScroll && !zoomActivationKeyPressed && !userSelectionActive;
    const wheelHandler = isPanOnScroll ? createPanOnScrollHandler({
      zoomPanValues,
      noWheelClassName,
      d3Selection,
      d3Zoom: d3ZoomInstance,
      panOnScrollMode,
      panOnScrollSpeed,
      zoomOnPinch,
      onPanZoomStart,
      onPanZoom,
      onPanZoomEnd
    }) : createZoomOnScrollHandler({
      noWheelClassName,
      preventScrolling,
      d3ZoomHandler
    });
    d3Selection.on("wheel.zoom", wheelHandler, { passive: false });
    if (!userSelectionActive) {
      const startHandler = createPanZoomStartHandler({
        zoomPanValues,
        onDraggingChange,
        onPanZoomStart
      });
      d3ZoomInstance.on("start", startHandler);
      const panZoomHandler = createPanZoomHandler({
        zoomPanValues,
        panOnDrag,
        onPaneContextMenu: !!onPaneContextMenu,
        onPanZoom,
        onTransformChange
      });
      d3ZoomInstance.on("zoom", panZoomHandler);
      const panZoomEndHandler = createPanZoomEndHandler({
        zoomPanValues,
        panOnDrag,
        panOnScroll,
        onPaneContextMenu,
        onPanZoomEnd,
        onDraggingChange
      });
      d3ZoomInstance.on("end", panZoomEndHandler);
    }
    const filter = createFilter({
      zoomActivationKeyPressed,
      panOnDrag,
      zoomOnScroll,
      panOnScroll,
      zoomOnDoubleClick,
      zoomOnPinch,
      userSelectionActive,
      noPanClassName,
      noWheelClassName,
      lib
    });
    d3ZoomInstance.filter(filter);
    if (zoomOnDoubleClick) {
      d3Selection.on("dblclick.zoom", d3DblClickZoomHandler);
    } else {
      d3Selection.on("dblclick.zoom", null);
    }
  }
  function destroy() {
    d3ZoomInstance.on("zoom", null);
  }
  async function setViewportConstrained(viewport2, extent, translateExtent2) {
    const nextTransform = viewportToTransform(viewport2);
    const contrainedTransform = d3ZoomInstance == null ? void 0 : d3ZoomInstance.constrain()(nextTransform, extent, translateExtent2);
    if (contrainedTransform) {
      await setTransform(contrainedTransform);
    }
    return new Promise((resolve) => resolve(contrainedTransform));
  }
  async function setViewport(viewport2, options) {
    const nextTransform = viewportToTransform(viewport2);
    await setTransform(nextTransform, options);
    return new Promise((resolve) => resolve(nextTransform));
  }
  function syncViewport(viewport2) {
    if (d3Selection) {
      const nextTransform = viewportToTransform(viewport2);
      const currentTransform = d3Selection.property("__zoom");
      if (currentTransform.k !== viewport2.zoom || currentTransform.x !== viewport2.x || currentTransform.y !== viewport2.y) {
        d3ZoomInstance == null ? void 0 : d3ZoomInstance.transform(d3Selection, nextTransform, null, { sync: true });
      }
    }
  }
  function getViewport() {
    const transform$1 = d3Selection ? transform(d3Selection.node()) : { x: 0, y: 0, k: 1 };
    return { x: transform$1.x, y: transform$1.y, zoom: transform$1.k };
  }
  function scaleTo(zoom2, options) {
    if (d3Selection) {
      return new Promise((resolve) => {
        d3ZoomInstance == null ? void 0 : d3ZoomInstance.scaleTo(getD3Transition(d3Selection, options == null ? void 0 : options.duration, () => resolve(true)), zoom2);
      });
    }
    return Promise.resolve(false);
  }
  function scaleBy(factor, options) {
    if (d3Selection) {
      return new Promise((resolve) => {
        d3ZoomInstance == null ? void 0 : d3ZoomInstance.scaleBy(getD3Transition(d3Selection, options == null ? void 0 : options.duration, () => resolve(true)), factor);
      });
    }
    return Promise.resolve(false);
  }
  function setScaleExtent(scaleExtent) {
    d3ZoomInstance == null ? void 0 : d3ZoomInstance.scaleExtent(scaleExtent);
  }
  function setTranslateExtent(translateExtent2) {
    d3ZoomInstance == null ? void 0 : d3ZoomInstance.translateExtent(translateExtent2);
  }
  function setClickDistance(distance2) {
    const validDistance = !isNumeric(distance2) || distance2 < 0 ? 0 : distance2;
    d3ZoomInstance == null ? void 0 : d3ZoomInstance.clickDistance(validDistance);
  }
  return {
    update,
    destroy,
    setViewport,
    setViewportConstrained,
    getViewport,
    scaleTo,
    scaleBy,
    setScaleExtent,
    setTranslateExtent,
    syncViewport,
    setClickDistance
  };
}
var ResizeControlVariant;
(function(ResizeControlVariant2) {
  ResizeControlVariant2["Line"] = "line";
  ResizeControlVariant2["Handle"] = "handle";
})(ResizeControlVariant || (ResizeControlVariant = {}));
var root$s = from_html(`<div role="button" tabindex="-1"><!></div>`);
function Handle($$anchor, $$props) {
  push($$props, false);
  const $connectable = () => store_get(connectable, "$connectable", $$stores);
  const $connectionRadius = () => store_get(connectionRadius, "$connectionRadius", $$stores);
  const $domNode = () => store_get(domNode, "$domNode", $$stores);
  const $nodeLookup = () => store_get(nodeLookup, "$nodeLookup", $$stores);
  const $connectionMode = () => store_get(connectionMode, "$connectionMode", $$stores);
  const $lib = () => store_get(lib, "$lib", $$stores);
  const $autoPanOnConnect = () => store_get(autoPanOnConnect, "$autoPanOnConnect", $$stores);
  const $flowId = () => store_get(flowId, "$flowId", $$stores);
  const $isValidConnectionStore = () => store_get(isValidConnectionStore, "$isValidConnectionStore", $$stores);
  const $onedgecreate = () => store_get(onedgecreate, "$onedgecreate", $$stores);
  const $onConnectAction = () => store_get(onConnectAction, "$onConnectAction", $$stores);
  const $onConnectStartAction = () => store_get(onConnectStartAction, "$onConnectStartAction", $$stores);
  const $onConnectEndAction = () => store_get(onConnectEndAction, "$onConnectEndAction", $$stores);
  const $viewport = () => store_get(viewport, "$viewport", $$stores);
  const $connection = () => store_get(connection, "$connection", $$stores);
  const $edges = () => store_get(edges, "$edges", $$stores);
  const $connectionLookup = () => store_get(connectionLookup, "$connectionLookup", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const isTarget = mutable_source();
  const isConnectable = mutable_source();
  const handleId = mutable_source();
  const connectionInProcess = mutable_source();
  const connectingFrom = mutable_source();
  const connectingTo = mutable_source();
  const isPossibleEndHandle = mutable_source();
  const valid = mutable_source();
  let id = prop($$props, "id", 8, void 0);
  let type = prop($$props, "type", 8, "source");
  let position = prop($$props, "position", 24, () => Position.Top);
  let style = prop($$props, "style", 8, void 0);
  let isValidConnection = prop($$props, "isValidConnection", 8, void 0);
  let onconnect = prop($$props, "onconnect", 8, void 0);
  let ondisconnect = prop($$props, "ondisconnect", 8, void 0);
  let isConnectableProp = prop($$props, "isConnectable", 8, void 0);
  let className = prop($$props, "class", 8, void 0);
  const nodeId = getContext("svelteflow__node_id");
  const connectable = getContext("svelteflow__node_connectable");
  const store = useStore();
  const {
    connectionMode,
    domNode,
    nodeLookup,
    connectionRadius,
    viewport,
    isValidConnection: isValidConnectionStore,
    lib,
    addEdge: addEdge2,
    onedgecreate,
    panBy: panBy2,
    cancelConnection,
    updateConnection,
    autoPanOnConnect,
    edges,
    connectionLookup,
    onconnect: onConnectAction,
    onconnectstart: onConnectStartAction,
    onconnectend: onConnectEndAction,
    flowId,
    connection
  } = store;
  function onPointerDown2(event2) {
    const isMouseTriggered = isMouseEvent(event2);
    if (isMouseTriggered && event2.button === 0 || !isMouseTriggered) {
      XYHandle.onPointerDown(event2, {
        handleId: get(handleId),
        nodeId,
        isTarget: get(isTarget),
        connectionRadius: $connectionRadius(),
        domNode: $domNode(),
        nodeLookup: $nodeLookup(),
        connectionMode: $connectionMode(),
        lib: $lib(),
        autoPanOnConnect: $autoPanOnConnect(),
        flowId: $flowId(),
        isValidConnection: isValidConnection() ?? $isValidConnectionStore(),
        updateConnection,
        cancelConnection,
        panBy: panBy2,
        onConnect: (connection2) => {
          var _a;
          const edge = $onedgecreate() ? $onedgecreate()(connection2) : connection2;
          if (!edge) {
            return;
          }
          addEdge2(edge);
          (_a = $onConnectAction()) == null ? void 0 : _a(connection2);
        },
        onConnectStart: (event3, startParams) => {
          var _a;
          (_a = $onConnectStartAction()) == null ? void 0 : _a(event3, {
            nodeId: startParams.nodeId,
            handleId: startParams.handleId,
            handleType: startParams.handleType
          });
        },
        onConnectEnd: (event3, connectionState) => {
          var _a;
          (_a = $onConnectEndAction()) == null ? void 0 : _a(event3, connectionState);
        },
        getTransform: () => [$viewport().x, $viewport().y, $viewport().zoom],
        getFromHandle: () => $connection().fromHandle
      });
    }
  }
  let prevConnections = mutable_source(null);
  let connections = mutable_source();
  legacy_pre_effect(() => deep_read_state(type()), () => {
    set(isTarget, type() === "target");
  });
  legacy_pre_effect(() => (deep_read_state(isConnectableProp()), $connectable()), () => {
    set(isConnectable, isConnectableProp() !== void 0 ? isConnectableProp() : $connectable());
  });
  legacy_pre_effect(() => deep_read_state(id()), () => {
    set(handleId, id() || null);
  });
  legacy_pre_effect(
    () => (deep_read_state(onconnect()), deep_read_state(ondisconnect()), $edges(), $connectionLookup(), deep_read_state(type()), deep_read_state(id())),
    () => {
      if (onconnect() || ondisconnect()) {
        $edges();
        set(connections, $connectionLookup().get(`${nodeId}-${type()}${id() ? `-${id()}` : ""}`));
      }
    }
  );
  legacy_pre_effect(
    () => (get(prevConnections), get(connections), deep_read_state(ondisconnect()), deep_read_state(onconnect())),
    () => {
      if (get(prevConnections) && !areConnectionMapsEqual(get(connections), get(prevConnections))) {
        const _connections = get(connections) ?? /* @__PURE__ */ new Map();
        handleConnectionChange(get(prevConnections), _connections, ondisconnect());
        handleConnectionChange(_connections, get(prevConnections), onconnect());
      }
      set(prevConnections, get(connections) ?? /* @__PURE__ */ new Map());
    }
  );
  legacy_pre_effect(() => $connection(), () => {
    set(connectionInProcess, !!$connection().fromHandle);
  });
  legacy_pre_effect(() => ($connection(), deep_read_state(type()), get(handleId)), () => {
    var _a, _b, _c;
    set(connectingFrom, ((_a = $connection().fromHandle) == null ? void 0 : _a.nodeId) === nodeId && ((_b = $connection().fromHandle) == null ? void 0 : _b.type) === type() && ((_c = $connection().fromHandle) == null ? void 0 : _c.id) === get(handleId));
  });
  legacy_pre_effect(() => ($connection(), deep_read_state(type()), get(handleId)), () => {
    var _a, _b, _c;
    set(connectingTo, ((_a = $connection().toHandle) == null ? void 0 : _a.nodeId) === nodeId && ((_b = $connection().toHandle) == null ? void 0 : _b.type) === type() && ((_c = $connection().toHandle) == null ? void 0 : _c.id) === get(handleId));
  });
  legacy_pre_effect(
    () => ($connectionMode(), $connection(), deep_read_state(type()), get(handleId)),
    () => {
      var _a, _b, _c;
      set(isPossibleEndHandle, $connectionMode() === ConnectionMode.Strict ? ((_a = $connection().fromHandle) == null ? void 0 : _a.type) !== type() : nodeId !== ((_b = $connection().fromHandle) == null ? void 0 : _b.nodeId) || get(handleId) !== ((_c = $connection().fromHandle) == null ? void 0 : _c.id));
    }
  );
  legacy_pre_effect(() => (get(connectingTo), $connection()), () => {
    set(valid, get(connectingTo) && $connection().isValid);
  });
  legacy_pre_effect_reset();
  init();
  var div = root$s();
  let classes;
  var node = child(div);
  slot(node, $$props, "default", {}, null);
  reset(div);
  template_effect(
    ($0) => {
      set_attribute(div, "data-handleid", get(handleId));
      set_attribute(div, "data-nodeid", nodeId);
      set_attribute(div, "data-handlepos", position());
      set_attribute(div, "data-id", `${$flowId() ?? ""}-${nodeId ?? ""}-${(id() || "") ?? ""}-${type() ?? ""}`);
      classes = set_class(div, 1, $0, null, classes, {
        valid: get(valid),
        connectingto: get(connectingTo),
        connectingfrom: get(connectingFrom),
        source: !get(isTarget),
        target: get(isTarget),
        connectablestart: get(isConnectable),
        connectableend: get(isConnectable),
        connectable: get(isConnectable),
        connectionindicator: get(isConnectable) && (!get(connectionInProcess) || get(isPossibleEndHandle))
      });
      set_style(div, style());
    },
    [
      () => clsx((deep_read_state(cc), deep_read_state(position()), deep_read_state(className()), untrack(() => cc([
        "svelte-flow__handle",
        `svelte-flow__handle-${position()}`,
        "nodrag",
        "nopan",
        position(),
        className()
      ]))))
    ]
  );
  event("mousedown", div, onPointerDown2);
  event("touchstart", div, onPointerDown2);
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root$r = from_html(`<!> <!>`, 1);
function DefaultNode($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  legacy_rest_props($$sanitized_props, ["data", "targetPosition", "sourcePosition"]);
  push($$props, false);
  let data = prop($$props, "data", 24, () => ({ label: "Node" }));
  let targetPosition = prop($$props, "targetPosition", 8, void 0);
  let sourcePosition = prop($$props, "sourcePosition", 8, void 0);
  init();
  var fragment = root$r();
  var node = first_child(fragment);
  {
    let $0 = derived_safe_equal(() => (deep_read_state(targetPosition()), deep_read_state(Position), untrack(() => targetPosition() ?? Position.Top)));
    Handle(node, {
      type: "target",
      get position() {
        return get($0);
      }
    });
  }
  var text2 = sibling(node);
  var node_1 = sibling(text2);
  {
    let $0 = derived_safe_equal(() => (deep_read_state(sourcePosition()), deep_read_state(Position), untrack(() => sourcePosition() ?? Position.Bottom)));
    Handle(node_1, {
      type: "source",
      get position() {
        return get($0);
      }
    });
  }
  template_effect(() => set_text(text2, ` ${(deep_read_state(data()), untrack(() => {
    var _a;
    return (_a = data()) == null ? void 0 : _a.label;
  })) ?? ""} `));
  append($$anchor, fragment);
  pop();
}
var root$q = from_html(` <!>`, 1);
function InputNode($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  legacy_rest_props($$sanitized_props, ["data", "sourcePosition"]);
  push($$props, false);
  let data = prop($$props, "data", 24, () => ({ label: "Node" }));
  let sourcePosition = prop($$props, "sourcePosition", 8, void 0);
  init();
  next();
  var fragment = root$q();
  var text2 = first_child(fragment);
  var node = sibling(text2);
  {
    let $0 = derived_safe_equal(() => (deep_read_state(sourcePosition()), deep_read_state(Position), untrack(() => sourcePosition() ?? Position.Bottom)));
    Handle(node, {
      type: "source",
      get position() {
        return get($0);
      }
    });
  }
  template_effect(() => set_text(text2, `${(deep_read_state(data()), untrack(() => {
    var _a;
    return (_a = data()) == null ? void 0 : _a.label;
  })) ?? ""} `));
  append($$anchor, fragment);
  pop();
}
var root$p = from_html(` <!>`, 1);
function OutputNode($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  legacy_rest_props($$sanitized_props, ["data", "targetPosition"]);
  push($$props, false);
  let data = prop($$props, "data", 24, () => ({ label: "Node" }));
  let targetPosition = prop($$props, "targetPosition", 8, void 0);
  init();
  next();
  var fragment = root$p();
  var text2 = first_child(fragment);
  var node = sibling(text2);
  {
    let $0 = derived_safe_equal(() => (deep_read_state(targetPosition()), deep_read_state(Position), untrack(() => targetPosition() ?? Position.Top)));
    Handle(node, {
      type: "target",
      get position() {
        return get($0);
      }
    });
  }
  template_effect(() => set_text(text2, `${(deep_read_state(data()), untrack(() => {
    var _a;
    return (_a = data()) == null ? void 0 : _a.label;
  })) ?? ""} `));
  append($$anchor, fragment);
  pop();
}
function GroupNode($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  legacy_rest_props($$sanitized_props, []);
}
function tryToMount(node, domNode, target) {
  if (!domNode) {
    return;
  }
  const targetEl = target ? domNode.querySelector(target) : domNode;
  if (targetEl) {
    targetEl.appendChild(node);
  }
}
function portal(node, { target, domNode }) {
  tryToMount(node, domNode, target);
  return {
    async update({ target: target2, domNode: domNode2 }) {
      tryToMount(node, domNode2, target2);
    },
    destroy() {
      if (node.parentNode) {
        node.parentNode.removeChild(node);
      }
    }
  };
}
var root$o = from_html(`<div><!></div>`);
function EdgeLabelRenderer($$anchor, $$props) {
  push($$props, false);
  const $domNode = () => store_get(domNode, "$domNode", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const { domNode } = useStore();
  init();
  var div = root$o();
  var node = child(div);
  slot(node, $$props, "default", {}, null);
  reset(div);
  action(div, ($$node, $$action_arg) => portal == null ? void 0 : portal($$node, $$action_arg), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: $domNode()
  }));
  append($$anchor, div);
  pop();
  $$cleanup();
}
function useHandleEdgeSelect() {
  const { edgeLookup, selectionRect, selectionRectMode, multiselectionKeyPressed, addSelectedEdges, unselectNodesAndEdges, elementsSelectable } = useStore();
  return (id) => {
    const edge = get$1(edgeLookup).get(id);
    if (!edge) {
      console.warn("012", errorMessages["error012"](id));
      return;
    }
    const selectable = edge.selectable || get$1(elementsSelectable) && typeof edge.selectable === "undefined";
    if (selectable) {
      selectionRect.set(null);
      selectionRectMode.set(null);
      if (!edge.selected) {
        addSelectedEdges([id]);
      } else if (edge.selected && get$1(multiselectionKeyPressed)) {
        unselectNodesAndEdges({ nodes: [], edges: [edge] });
      }
    }
  };
}
var root_1$9 = from_html(`<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>`);
function EdgeLabel($$anchor, $$props) {
  push($$props, false);
  let style = prop($$props, "style", 8, void 0);
  let x = prop($$props, "x", 8, void 0);
  let y = prop($$props, "y", 8, void 0);
  const handleEdgeSelect = useHandleEdgeSelect();
  const id = getContext("svelteflow__edge_id");
  init();
  EdgeLabelRenderer($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var div = root_1$9();
      let styles;
      var node = child(div);
      slot(node, $$props, "default", {}, null);
      reset(div);
      template_effect(() => styles = set_style(div, "pointer-events: all;" + style(), styles, {
        transform: `translate(-50%, -50%) translate(${x() ?? ""}px,${y() ?? ""}px)`
      }));
      event("keyup", div, () => {
      });
      event("click", div, () => {
        if (id) handleEdgeSelect(id);
      });
      append($$anchor2, div);
    },
    $$slots: { default: true }
  });
  pop();
}
var root_1$8 = from_svg(`<path fill="none" class="svelte-flow__edge-interaction"></path>`);
var root$n = from_svg(`<path fill="none"></path><!><!>`, 1);
function BaseEdge($$anchor, $$props) {
  push($$props, false);
  let id = prop($$props, "id", 8, void 0);
  let path = prop($$props, "path", 8);
  let label = prop($$props, "label", 8, void 0);
  let labelX = prop($$props, "labelX", 8, void 0);
  let labelY = prop($$props, "labelY", 8, void 0);
  let labelStyle = prop($$props, "labelStyle", 8, void 0);
  let markerStart = prop($$props, "markerStart", 8, void 0);
  let markerEnd = prop($$props, "markerEnd", 8, void 0);
  let style = prop($$props, "style", 8, void 0);
  let interactionWidth = prop($$props, "interactionWidth", 8, 20);
  let className = prop($$props, "class", 8, void 0);
  let interactionWidthValue = interactionWidth() === void 0 ? 20 : interactionWidth();
  init();
  var fragment = root$n();
  var path_1 = first_child(fragment);
  var node = sibling(path_1);
  {
    var consequent = ($$anchor2) => {
      var path_2 = root_1$8();
      set_attribute(path_2, "stroke-opacity", 0);
      template_effect(() => {
        set_attribute(path_2, "d", path());
        set_attribute(path_2, "stroke-width", interactionWidthValue);
      });
      append($$anchor2, path_2);
    };
    if_block(node, ($$render) => {
      if (interactionWidthValue) $$render(consequent);
    });
  }
  var node_1 = sibling(node);
  {
    var consequent_1 = ($$anchor2) => {
      EdgeLabel($$anchor2, {
        get x() {
          return labelX();
        },
        get y() {
          return labelY();
        },
        get style() {
          return labelStyle();
        },
        children: ($$anchor3, $$slotProps) => {
          next();
          var text$1 = text();
          template_effect(() => set_text(text$1, label()));
          append($$anchor3, text$1);
        },
        $$slots: { default: true }
      });
    };
    if_block(node_1, ($$render) => {
      if (label()) $$render(consequent_1);
    });
  }
  template_effect(
    ($0) => {
      set_attribute(path_1, "id", id());
      set_attribute(path_1, "d", path());
      set_class(path_1, 0, $0);
      set_attribute(path_1, "marker-start", markerStart());
      set_attribute(path_1, "marker-end", markerEnd());
      set_style(path_1, style());
    },
    [
      () => clsx((deep_read_state(cc), deep_read_state(className()), untrack(() => cc(["svelte-flow__edge-path", className()]))))
    ]
  );
  append($$anchor, fragment);
  pop();
}
function BezierEdgeInternal($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  legacy_rest_props($$sanitized_props, [
    "label",
    "labelStyle",
    "style",
    "markerStart",
    "markerEnd",
    "interactionWidth",
    "sourceX",
    "sourceY",
    "sourcePosition",
    "targetX",
    "targetY",
    "targetPosition"
  ]);
  push($$props, false);
  const path = mutable_source();
  const labelX = mutable_source();
  const labelY = mutable_source();
  let label = prop($$props, "label", 8, void 0);
  let labelStyle = prop($$props, "labelStyle", 8, void 0);
  let style = prop($$props, "style", 8, void 0);
  let markerStart = prop($$props, "markerStart", 8, void 0);
  let markerEnd = prop($$props, "markerEnd", 8, void 0);
  let interactionWidth = prop($$props, "interactionWidth", 8, void 0);
  let sourceX = prop($$props, "sourceX", 8);
  let sourceY = prop($$props, "sourceY", 8);
  let sourcePosition = prop($$props, "sourcePosition", 8);
  let targetX = prop($$props, "targetX", 8);
  let targetY = prop($$props, "targetY", 8);
  let targetPosition = prop($$props, "targetPosition", 8);
  legacy_pre_effect(
    () => (get(path), get(labelX), get(labelY), deep_read_state(sourceX()), deep_read_state(sourceY()), deep_read_state(targetX()), deep_read_state(targetY()), deep_read_state(sourcePosition()), deep_read_state(targetPosition())),
    () => {
      (($$value) => {
        var $$array = to_array($$value, 3);
        set(path, $$array[0]);
        set(labelX, $$array[1]);
        set(labelY, $$array[2]);
      })(getBezierPath({
        sourceX: sourceX(),
        sourceY: sourceY(),
        targetX: targetX(),
        targetY: targetY(),
        sourcePosition: sourcePosition(),
        targetPosition: targetPosition()
      }));
    }
  );
  legacy_pre_effect_reset();
  init();
  BaseEdge($$anchor, {
    get path() {
      return get(path);
    },
    get labelX() {
      return get(labelX);
    },
    get labelY() {
      return get(labelY);
    },
    get label() {
      return label();
    },
    get labelStyle() {
      return labelStyle();
    },
    get markerStart() {
      return markerStart();
    },
    get markerEnd() {
      return markerEnd();
    },
    get interactionWidth() {
      return interactionWidth();
    },
    get style() {
      return style();
    }
  });
  pop();
}
function SmoothStepEdgeInternal($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  legacy_rest_props($$sanitized_props, [
    "label",
    "labelStyle",
    "style",
    "markerStart",
    "markerEnd",
    "interactionWidth",
    "sourceX",
    "sourceY",
    "sourcePosition",
    "targetX",
    "targetY",
    "targetPosition"
  ]);
  push($$props, false);
  const path = mutable_source();
  const labelX = mutable_source();
  const labelY = mutable_source();
  let label = prop($$props, "label", 8, void 0);
  let labelStyle = prop($$props, "labelStyle", 8, void 0);
  let style = prop($$props, "style", 8, void 0);
  let markerStart = prop($$props, "markerStart", 8, void 0);
  let markerEnd = prop($$props, "markerEnd", 8, void 0);
  let interactionWidth = prop($$props, "interactionWidth", 8, void 0);
  let sourceX = prop($$props, "sourceX", 8);
  let sourceY = prop($$props, "sourceY", 8);
  let sourcePosition = prop($$props, "sourcePosition", 8);
  let targetX = prop($$props, "targetX", 8);
  let targetY = prop($$props, "targetY", 8);
  let targetPosition = prop($$props, "targetPosition", 8);
  legacy_pre_effect(
    () => (get(path), get(labelX), get(labelY), deep_read_state(sourceX()), deep_read_state(sourceY()), deep_read_state(targetX()), deep_read_state(targetY()), deep_read_state(sourcePosition()), deep_read_state(targetPosition())),
    () => {
      (($$value) => {
        var $$array = to_array($$value, 3);
        set(path, $$array[0]);
        set(labelX, $$array[1]);
        set(labelY, $$array[2]);
      })(getSmoothStepPath({
        sourceX: sourceX(),
        sourceY: sourceY(),
        targetX: targetX(),
        targetY: targetY(),
        sourcePosition: sourcePosition(),
        targetPosition: targetPosition()
      }));
    }
  );
  legacy_pre_effect_reset();
  init();
  BaseEdge($$anchor, {
    get path() {
      return get(path);
    },
    get labelX() {
      return get(labelX);
    },
    get labelY() {
      return get(labelY);
    },
    get label() {
      return label();
    },
    get labelStyle() {
      return labelStyle();
    },
    get markerStart() {
      return markerStart();
    },
    get markerEnd() {
      return markerEnd();
    },
    get interactionWidth() {
      return interactionWidth();
    },
    get style() {
      return style();
    }
  });
  pop();
}
function StraightEdgeInternal($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  legacy_rest_props($$sanitized_props, [
    "label",
    "labelStyle",
    "style",
    "markerStart",
    "markerEnd",
    "interactionWidth",
    "sourceX",
    "sourceY",
    "targetX",
    "targetY"
  ]);
  push($$props, false);
  const path = mutable_source();
  const labelX = mutable_source();
  const labelY = mutable_source();
  let label = prop($$props, "label", 8, void 0);
  let labelStyle = prop($$props, "labelStyle", 8, void 0);
  let style = prop($$props, "style", 8, void 0);
  let markerStart = prop($$props, "markerStart", 8, void 0);
  let markerEnd = prop($$props, "markerEnd", 8, void 0);
  let interactionWidth = prop($$props, "interactionWidth", 8, void 0);
  let sourceX = prop($$props, "sourceX", 8);
  let sourceY = prop($$props, "sourceY", 8);
  let targetX = prop($$props, "targetX", 8);
  let targetY = prop($$props, "targetY", 8);
  legacy_pre_effect(
    () => (get(path), get(labelX), get(labelY), deep_read_state(sourceX()), deep_read_state(sourceY()), deep_read_state(targetX()), deep_read_state(targetY())),
    () => {
      (($$value) => {
        var $$array = to_array($$value, 3);
        set(path, $$array[0]);
        set(labelX, $$array[1]);
        set(labelY, $$array[2]);
      })(getStraightPath({
        sourceX: sourceX(),
        sourceY: sourceY(),
        targetX: targetX(),
        targetY: targetY()
      }));
    }
  );
  legacy_pre_effect_reset();
  init();
  BaseEdge($$anchor, {
    get path() {
      return get(path);
    },
    get labelX() {
      return get(labelX);
    },
    get labelY() {
      return get(labelY);
    },
    get label() {
      return label();
    },
    get labelStyle() {
      return labelStyle();
    },
    get markerStart() {
      return markerStart();
    },
    get markerEnd() {
      return markerEnd();
    },
    get interactionWidth() {
      return interactionWidth();
    },
    get style() {
      return style();
    }
  });
  pop();
}
function StepEdgeInternal($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  legacy_rest_props($$sanitized_props, [
    "label",
    "labelStyle",
    "style",
    "markerStart",
    "markerEnd",
    "interactionWidth",
    "sourceX",
    "sourceY",
    "sourcePosition",
    "targetX",
    "targetY",
    "targetPosition"
  ]);
  push($$props, false);
  const path = mutable_source();
  const labelX = mutable_source();
  const labelY = mutable_source();
  let label = prop($$props, "label", 8, void 0);
  let labelStyle = prop($$props, "labelStyle", 8, void 0);
  let style = prop($$props, "style", 8, void 0);
  let markerStart = prop($$props, "markerStart", 8, void 0);
  let markerEnd = prop($$props, "markerEnd", 8, void 0);
  let interactionWidth = prop($$props, "interactionWidth", 8, void 0);
  let sourceX = prop($$props, "sourceX", 8);
  let sourceY = prop($$props, "sourceY", 8);
  let sourcePosition = prop($$props, "sourcePosition", 8);
  let targetX = prop($$props, "targetX", 8);
  let targetY = prop($$props, "targetY", 8);
  let targetPosition = prop($$props, "targetPosition", 8);
  legacy_pre_effect(
    () => (get(path), get(labelX), get(labelY), deep_read_state(sourceX()), deep_read_state(sourceY()), deep_read_state(targetX()), deep_read_state(targetY()), deep_read_state(sourcePosition()), deep_read_state(targetPosition())),
    () => {
      (($$value) => {
        var $$array = to_array($$value, 3);
        set(path, $$array[0]);
        set(labelX, $$array[1]);
        set(labelY, $$array[2]);
      })(getSmoothStepPath({
        sourceX: sourceX(),
        sourceY: sourceY(),
        targetX: targetX(),
        targetY: targetY(),
        sourcePosition: sourcePosition(),
        targetPosition: targetPosition(),
        borderRadius: 0
      }));
    }
  );
  legacy_pre_effect_reset();
  init();
  BaseEdge($$anchor, {
    get path() {
      return get(path);
    },
    get labelX() {
      return get(labelX);
    },
    get labelY() {
      return get(labelY);
    },
    get label() {
      return label();
    },
    get labelStyle() {
      return labelStyle();
    },
    get markerStart() {
      return markerStart();
    },
    get markerEnd() {
      return markerEnd();
    },
    get interactionWidth() {
      return interactionWidth();
    },
    get style() {
      return style();
    }
  });
  pop();
}
function syncNodeStores(nodesStore, userNodesStore) {
  const nodesStoreSetter = nodesStore.set;
  const userNodesStoreSetter = userNodesStore.set;
  const currentNodesStore = get$1(nodesStore);
  const currentUserNodesStore = get$1(userNodesStore);
  const initWithUserNodes = currentNodesStore.length === 0 && currentUserNodesStore.length > 0;
  let val = initWithUserNodes ? currentUserNodesStore : currentNodesStore;
  nodesStore.set(val);
  const _set = (nds) => {
    const updatedNodes = nodesStoreSetter(nds);
    val = updatedNodes;
    userNodesStoreSetter(val);
    return updatedNodes;
  };
  nodesStore.set = userNodesStore.set = _set;
  nodesStore.update = userNodesStore.update = (fn) => _set(fn(val));
}
function syncEdgeStores(edgesStore, userEdgesStore) {
  const nodesStoreSetter = edgesStore.set;
  const userEdgesStoreSetter = userEdgesStore.set;
  let val = get$1(userEdgesStore);
  edgesStore.set(val);
  const _set = (eds) => {
    nodesStoreSetter(eds);
    userEdgesStoreSetter(eds);
    val = eds;
  };
  edgesStore.set = userEdgesStore.set = _set;
  edgesStore.update = userEdgesStore.update = (fn) => _set(fn(val));
}
const syncViewportStores = (panZoomStore, viewportStore, userViewportStore) => {
  if (!userViewportStore) {
    return;
  }
  const panZoom = get$1(panZoomStore);
  const viewportStoreSetter = viewportStore.set;
  const userViewportStoreSetter = userViewportStore.set;
  let val = userViewportStore ? get$1(userViewportStore) : { x: 0, y: 0, zoom: 1 };
  viewportStore.set(val);
  viewportStore.set = (vp) => {
    viewportStoreSetter(vp);
    userViewportStoreSetter(vp);
    val = vp;
    return vp;
  };
  userViewportStore.set = (vp) => {
    panZoom == null ? void 0 : panZoom.syncViewport(vp);
    viewportStoreSetter(vp);
    userViewportStoreSetter(vp);
    val = vp;
    return vp;
  };
  viewportStore.update = (fn) => {
    viewportStore.set(fn(val));
  };
  userViewportStore.update = (fn) => {
    userViewportStore.set(fn(val));
  };
};
const createNodesStore = (nodes, nodeLookup, parentLookup, nodeOrigin = [0, 0], nodeExtent = infiniteExtent, fitViewQueued, fitViewOptions, fitViewResolver, panZoom, width, height, minZoom, maxZoom) => {
  const { subscribe, set: set2, update } = writable([]);
  let value = nodes;
  let defaults = {};
  let elevateNodesOnSelect = true;
  const _set = (nds) => {
    const nodesInitialized = adoptUserNodes(nds, nodeLookup, parentLookup, {
      elevateNodesOnSelect,
      nodeOrigin,
      nodeExtent,
      defaults,
      checkEquality: false
    });
    if (get$1(fitViewQueued) && nodesInitialized && get$1(panZoom)) {
      const fitViewPromise = fitViewport({
        nodes: nodeLookup,
        width: get$1(width),
        height: get$1(height),
        panZoom: get$1(panZoom),
        minZoom: get$1(minZoom),
        maxZoom: get$1(maxZoom)
      }, get$1(fitViewOptions));
      fitViewPromise.then((value2) => {
        var _a;
        (_a = get$1(fitViewResolver)) == null ? void 0 : _a.resolve(value2);
        fitViewResolver.set(null);
      });
      fitViewQueued.set(false);
      fitViewOptions.set(void 0);
    }
    value = nds;
    set2(value);
    return value;
  };
  const _update = (fn) => _set(fn(value));
  const setDefaultOptions = (options) => {
    defaults = options;
  };
  const setOptions = (options) => {
    elevateNodesOnSelect = options.elevateNodesOnSelect ?? elevateNodesOnSelect;
  };
  _set(value);
  return {
    subscribe,
    set: _set,
    update: _update,
    setDefaultOptions,
    setOptions
  };
};
const createEdgesStore = (edges, connectionLookup, edgeLookup, defaultOptions2) => {
  const { subscribe, set: set2, update } = writable([]);
  let value = edges;
  let defaults = {};
  const _set = (eds) => {
    const nextEdges = defaults ? eds.map((edge) => ({ ...defaults, ...edge })) : eds;
    updateConnectionLookup(connectionLookup, edgeLookup, nextEdges);
    value = nextEdges;
    set2(value);
  };
  const _update = (fn) => _set(fn(value));
  const setDefaultOptions = (options) => {
    defaults = options;
  };
  _set(value);
  return {
    subscribe,
    set: _set,
    update: _update,
    setDefaultOptions
  };
};
const initialNodeTypes = {
  input: InputNode,
  output: OutputNode,
  default: DefaultNode,
  group: GroupNode
};
const initialEdgeTypes = {
  straight: StraightEdgeInternal,
  smoothstep: SmoothStepEdgeInternal,
  default: BezierEdgeInternal,
  step: StepEdgeInternal
};
const getInitialStore = ({ nodes = [], edges = [], width, height, fitView, nodeOrigin, nodeExtent }) => {
  const nodeLookup = /* @__PURE__ */ new Map();
  const parentLookup = /* @__PURE__ */ new Map();
  const connectionLookup = /* @__PURE__ */ new Map();
  const edgeLookup = /* @__PURE__ */ new Map();
  const storeNodeOrigin = nodeOrigin ?? [0, 0];
  const storeNodeExtent = nodeExtent ?? infiniteExtent;
  adoptUserNodes(nodes, nodeLookup, parentLookup, {
    nodeExtent: storeNodeExtent,
    nodeOrigin: storeNodeOrigin,
    elevateNodesOnSelect: false,
    checkEquality: false
  });
  updateConnectionLookup(connectionLookup, edgeLookup, edges);
  let viewport = { x: 0, y: 0, zoom: 1 };
  if (fitView && width && height) {
    const bounds = getInternalNodesBounds(nodeLookup, {
      filter: (node) => !!((node.width || node.initialWidth) && (node.height || node.initialHeight))
    });
    viewport = getViewportForBounds(bounds, width, height, 0.5, 2, 0.1);
  }
  const fitViewQueued = writable(false);
  const fitViewOptions = writable(void 0);
  const fitViewResolver = writable(null);
  const panZoom = writable(null);
  const widthStore = writable(500);
  const heightStore = writable(500);
  const minZoom = writable(0.5);
  const maxZoom = writable(2);
  return {
    flowId: writable(null),
    nodes: createNodesStore(nodes, nodeLookup, parentLookup, storeNodeOrigin, storeNodeExtent, fitViewQueued, fitViewOptions, fitViewResolver, panZoom, widthStore, heightStore, minZoom, maxZoom),
    nodeLookup: readable(nodeLookup),
    parentLookup: readable(parentLookup),
    edgeLookup: readable(edgeLookup),
    visibleNodes: readable([]),
    edges: createEdgesStore(edges, connectionLookup, edgeLookup),
    visibleEdges: readable([]),
    connectionLookup: readable(connectionLookup),
    width: widthStore,
    height: heightStore,
    minZoom,
    maxZoom,
    nodeOrigin: writable(storeNodeOrigin),
    nodeDragThreshold: writable(1),
    nodeExtent: writable(storeNodeExtent),
    translateExtent: writable(infiniteExtent),
    autoPanOnNodeDrag: writable(true),
    autoPanOnConnect: writable(true),
    fitViewQueued,
    fitViewOptions,
    fitViewResolver,
    panZoom,
    snapGrid: writable(null),
    dragging: writable(false),
    selectionRect: writable(null),
    selectionKeyPressed: writable(false),
    multiselectionKeyPressed: writable(false),
    deleteKeyPressed: writable(false),
    panActivationKeyPressed: writable(false),
    zoomActivationKeyPressed: writable(false),
    selectionRectMode: writable(null),
    selectionMode: writable(SelectionMode.Partial),
    nodeTypes: writable(initialNodeTypes),
    edgeTypes: writable(initialEdgeTypes),
    viewport: writable(viewport),
    connectionMode: writable(ConnectionMode.Strict),
    domNode: writable(null),
    connection: readable(initialConnection),
    connectionLineType: writable(ConnectionLineType.Bezier),
    connectionRadius: writable(20),
    isValidConnection: writable(() => true),
    nodesDraggable: writable(true),
    nodesConnectable: writable(true),
    elementsSelectable: writable(true),
    selectNodesOnDrag: writable(true),
    markers: readable([]),
    defaultMarkerColor: writable("#b1b1b7"),
    lib: readable("svelte"),
    onlyRenderVisibleElements: writable(false),
    onerror: writable(devWarn),
    ondelete: writable(void 0),
    onedgecreate: writable(void 0),
    onconnect: writable(void 0),
    onconnectstart: writable(void 0),
    onconnectend: writable(void 0),
    onbeforedelete: writable(void 0),
    nodesInitialized: writable(false),
    edgesInitialized: writable(false),
    viewportInitialized: writable(false),
    initialized: readable(false)
  };
};
function getVisibleEdges(store) {
  const visibleEdges = derived([
    store.edges,
    store.nodes,
    store.nodeLookup,
    store.onlyRenderVisibleElements,
    store.viewport,
    store.width,
    store.height
  ], ([edges, , nodeLookup, onlyRenderVisibleElements, viewport, width, height]) => {
    const visibleEdges2 = onlyRenderVisibleElements && width && height ? edges.filter((edge) => {
      const sourceNode = nodeLookup.get(edge.source);
      const targetNode = nodeLookup.get(edge.target);
      return sourceNode && targetNode && isEdgeVisible({
        sourceNode,
        targetNode,
        width,
        height,
        transform: [viewport.x, viewport.y, viewport.zoom]
      });
    }) : edges;
    return visibleEdges2;
  });
  return derived([visibleEdges, store.nodes, store.nodeLookup, store.connectionMode, store.onerror], ([visibleEdges2, , nodeLookup, connectionMode, onerror]) => {
    const layoutedEdges = visibleEdges2.reduce((res, edge) => {
      const sourceNode = nodeLookup.get(edge.source);
      const targetNode = nodeLookup.get(edge.target);
      if (!sourceNode || !targetNode) {
        return res;
      }
      const edgePosition = getEdgePosition({
        id: edge.id,
        sourceNode,
        targetNode,
        sourceHandle: edge.sourceHandle || null,
        targetHandle: edge.targetHandle || null,
        connectionMode,
        onError: onerror
      });
      if (edgePosition) {
        res.push({
          ...edge,
          zIndex: getElevatedEdgeZIndex({
            selected: edge.selected,
            zIndex: edge.zIndex,
            sourceNode,
            targetNode,
            elevateOnSelect: false
          }),
          ...edgePosition
        });
      }
      return res;
    }, []);
    return layoutedEdges;
  });
}
function getVisibleNodes(store) {
  return derived([
    store.nodeLookup,
    store.onlyRenderVisibleElements,
    store.width,
    store.height,
    store.viewport,
    store.nodes
  ], ([nodeLookup, onlyRenderVisibleElements, width, height, viewport]) => {
    const transform2 = [viewport.x, viewport.y, viewport.zoom];
    return onlyRenderVisibleElements ? getNodesInside(nodeLookup, { x: 0, y: 0, width, height }, transform2, true) : Array.from(nodeLookup.values());
  });
}
const key = Symbol();
function createStore({ nodes, edges, width, height, fitView: fitViewOnCreate, nodeOrigin, nodeExtent }) {
  const store = getInitialStore({
    nodes,
    edges,
    width,
    height,
    fitView: fitViewOnCreate,
    nodeOrigin,
    nodeExtent
  });
  function setNodeTypes(nodeTypes) {
    store.nodeTypes.set({
      ...initialNodeTypes,
      ...nodeTypes
    });
  }
  function setEdgeTypes(edgeTypes) {
    store.edgeTypes.set({
      ...initialEdgeTypes,
      ...edgeTypes
    });
  }
  function addEdge$1(edgeParams) {
    const edges2 = get$1(store.edges);
    store.edges.set(addEdge(edgeParams, edges2));
  }
  const updateNodePositions = (nodeDragItems, dragging = false) => {
    var _a;
    const nodeLookup = get$1(store.nodeLookup);
    for (const [id, dragItem] of nodeDragItems) {
      const node = (_a = nodeLookup.get(id)) == null ? void 0 : _a.internals.userNode;
      if (!node) {
        continue;
      }
      node.position = dragItem.position;
      node.dragging = dragging;
    }
    store.nodes.update((nds) => nds);
  };
  function updateNodeInternals$1(updates) {
    var _a, _b, _c;
    const nodeLookup = get$1(store.nodeLookup);
    const parentLookup = get$1(store.parentLookup);
    const { changes, updatedInternals } = updateNodeInternals(updates, nodeLookup, get$1(store.parentLookup), get$1(store.domNode), get$1(store.nodeOrigin));
    if (!updatedInternals) {
      return;
    }
    updateAbsolutePositions(nodeLookup, parentLookup, { nodeOrigin, nodeExtent });
    for (const change of changes) {
      const node = (_a = nodeLookup.get(change.id)) == null ? void 0 : _a.internals.userNode;
      if (!node) {
        continue;
      }
      switch (change.type) {
        case "dimensions": {
          const measured = { ...node.measured, ...change.dimensions };
          if (change.setAttributes) {
            node.width = ((_b = change.dimensions) == null ? void 0 : _b.width) ?? node.width;
            node.height = ((_c = change.dimensions) == null ? void 0 : _c.height) ?? node.height;
          }
          node.measured = measured;
          break;
        }
        case "position":
          node.position = change.position ?? node.position;
          break;
      }
    }
    store.nodes.update((nds) => nds);
    if (!get$1(store.nodesInitialized)) {
      store.nodesInitialized.set(true);
    }
  }
  function fitView(options) {
    const fitViewResolver = get$1(store.fitViewResolver) ?? withResolvers();
    store.fitViewQueued.set(true);
    store.fitViewOptions.set(options);
    store.fitViewResolver.set(fitViewResolver);
    store.nodes.set(get$1(store.nodes));
    return fitViewResolver.promise;
  }
  function zoomBy(factor, options) {
    const panZoom = get$1(store.panZoom);
    if (!panZoom) {
      return Promise.resolve(false);
    }
    return panZoom.scaleBy(factor, options);
  }
  function zoomIn(options) {
    return zoomBy(1.2, options);
  }
  function zoomOut(options) {
    return zoomBy(1 / 1.2, options);
  }
  function setMinZoom(minZoom) {
    const panZoom = get$1(store.panZoom);
    if (panZoom) {
      panZoom.setScaleExtent([minZoom, get$1(store.maxZoom)]);
      store.minZoom.set(minZoom);
    }
  }
  function setMaxZoom(maxZoom) {
    const panZoom = get$1(store.panZoom);
    if (panZoom) {
      panZoom.setScaleExtent([get$1(store.minZoom), maxZoom]);
      store.maxZoom.set(maxZoom);
    }
  }
  function setTranslateExtent(extent) {
    const panZoom = get$1(store.panZoom);
    if (panZoom) {
      panZoom.setTranslateExtent(extent);
      store.translateExtent.set(extent);
    }
  }
  function resetSelectedElements(elements) {
    let elementsChanged = false;
    elements.forEach((element) => {
      if (element.selected) {
        element.selected = false;
        elementsChanged = true;
      }
    });
    return elementsChanged;
  }
  function setPaneClickDistance(distance2) {
    var _a;
    (_a = get$1(store.panZoom)) == null ? void 0 : _a.setClickDistance(distance2);
  }
  function unselectNodesAndEdges(params) {
    const resetNodes = resetSelectedElements((params == null ? void 0 : params.nodes) || get$1(store.nodes));
    if (resetNodes)
      store.nodes.set(get$1(store.nodes));
    const resetEdges = resetSelectedElements((params == null ? void 0 : params.edges) || get$1(store.edges));
    if (resetEdges)
      store.edges.set(get$1(store.edges));
  }
  store.deleteKeyPressed.subscribe(async (deleteKeyPressed) => {
    var _a;
    if (deleteKeyPressed) {
      const nodes2 = get$1(store.nodes);
      const edges2 = get$1(store.edges);
      const selectedNodes = nodes2.filter((node) => node.selected);
      const selectedEdges = edges2.filter((edge) => edge.selected);
      const { nodes: matchingNodes, edges: matchingEdges } = await getElementsToRemove({
        nodesToRemove: selectedNodes,
        edgesToRemove: selectedEdges,
        nodes: nodes2,
        edges: edges2,
        onBeforeDelete: get$1(store.onbeforedelete)
      });
      if (matchingNodes.length || matchingEdges.length) {
        store.nodes.update((nds) => nds.filter((node) => !matchingNodes.some((mN) => mN.id === node.id)));
        store.edges.update((eds) => eds.filter((edge) => !matchingEdges.some((mE) => mE.id === edge.id)));
        (_a = get$1(store.ondelete)) == null ? void 0 : _a({
          nodes: matchingNodes,
          edges: matchingEdges
        });
      }
    }
  });
  function addSelectedNodes(ids) {
    const isMultiSelection = get$1(store.multiselectionKeyPressed);
    store.nodes.update((ns) => ns.map((node) => {
      const nodeWillBeSelected = ids.includes(node.id);
      const selected = isMultiSelection ? node.selected || nodeWillBeSelected : nodeWillBeSelected;
      node.selected = selected;
      return node;
    }));
    if (!isMultiSelection) {
      store.edges.update((es) => es.map((edge) => {
        edge.selected = false;
        return edge;
      }));
    }
  }
  function addSelectedEdges(ids) {
    const isMultiSelection = get$1(store.multiselectionKeyPressed);
    store.edges.update((edges2) => edges2.map((edge) => {
      const edgeWillBeSelected = ids.includes(edge.id);
      const selected = isMultiSelection ? edge.selected || edgeWillBeSelected : edgeWillBeSelected;
      edge.selected = selected;
      return edge;
    }));
    if (!isMultiSelection) {
      store.nodes.update((ns) => ns.map((node) => {
        node.selected = false;
        return node;
      }));
    }
  }
  function handleNodeSelection(id) {
    var _a;
    const node = (_a = get$1(store.nodes)) == null ? void 0 : _a.find((n) => n.id === id);
    if (!node) {
      console.warn("012", errorMessages["error012"](id));
      return;
    }
    store.selectionRect.set(null);
    store.selectionRectMode.set(null);
    if (!node.selected) {
      addSelectedNodes([id]);
    } else if (node.selected && get$1(store.multiselectionKeyPressed)) {
      unselectNodesAndEdges({ nodes: [node], edges: [] });
    }
  }
  function panBy$1(delta) {
    const viewport = get$1(store.viewport);
    return panBy({
      delta,
      panZoom: get$1(store.panZoom),
      transform: [viewport.x, viewport.y, viewport.zoom],
      translateExtent: get$1(store.translateExtent),
      width: get$1(store.width),
      height: get$1(store.height)
    });
  }
  const _connection = writable(initialConnection);
  const updateConnection = (newConnection) => {
    _connection.set({ ...newConnection });
  };
  function cancelConnection() {
    _connection.set(initialConnection);
  }
  function reset2() {
    store.selectionRect.set(null);
    store.selectionRectMode.set(null);
    store.snapGrid.set(null);
    store.isValidConnection.set(() => true);
    unselectNodesAndEdges();
    cancelConnection();
  }
  return {
    // state
    ...store,
    // derived state
    visibleEdges: getVisibleEdges(store),
    visibleNodes: getVisibleNodes(store),
    connection: derived([_connection, store.viewport], ([connection, viewport]) => {
      return connection.inProgress ? {
        ...connection,
        to: pointToRendererPoint(connection.to, [viewport.x, viewport.y, viewport.zoom])
      } : { ...connection };
    }),
    markers: derived([store.edges, store.defaultMarkerColor, store.flowId], ([edges2, defaultColor, id]) => createMarkerIds(edges2, { defaultColor, id })),
    initialized: (() => {
      let initialized = false;
      const initialNodesLength = get$1(store.nodes).length;
      const initialEdgesLength = get$1(store.edges).length;
      return derived([store.nodesInitialized, store.edgesInitialized, store.viewportInitialized], ([nodesInitialized, edgesInitialized, viewportInitialized]) => {
        if (initialized)
          return initialized;
        if (initialNodesLength === 0) {
          initialized = viewportInitialized;
        } else if (initialEdgesLength === 0) {
          initialized = viewportInitialized && nodesInitialized;
        } else {
          initialized = viewportInitialized && nodesInitialized && edgesInitialized;
        }
        return initialized;
      });
    })(),
    // actions
    syncNodeStores: (nodes2) => syncNodeStores(store.nodes, nodes2),
    syncEdgeStores: (edges2) => syncEdgeStores(store.edges, edges2),
    syncViewport: (viewport) => syncViewportStores(store.panZoom, store.viewport, viewport),
    setNodeTypes,
    setEdgeTypes,
    addEdge: addEdge$1,
    updateNodePositions,
    updateNodeInternals: updateNodeInternals$1,
    zoomIn,
    zoomOut,
    fitView: (options) => fitView(options),
    setMinZoom,
    setMaxZoom,
    setTranslateExtent,
    setPaneClickDistance,
    unselectNodesAndEdges,
    addSelectedNodes,
    addSelectedEdges,
    handleNodeSelection,
    panBy: panBy$1,
    updateConnection,
    cancelConnection,
    reset: reset2
  };
}
function useStore() {
  const store = getContext(key);
  if (!store) {
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  }
  return store.getStore();
}
function createStoreContext({ nodes, edges, width, height, fitView, nodeOrigin, nodeExtent }) {
  const store = createStore({ nodes, edges, width, height, fitView, nodeOrigin, nodeExtent });
  setContext(key, {
    getStore: () => store
  });
  return store;
}
function zoom(domNode, params) {
  const { panZoom, minZoom, maxZoom, initialViewport, viewport, dragging, translateExtent, paneClickDistance } = params;
  const panZoomInstance = XYPanZoom({
    domNode,
    minZoom,
    maxZoom,
    translateExtent,
    viewport: initialViewport,
    paneClickDistance,
    onDraggingChange: dragging.set
  });
  const currentViewport = panZoomInstance.getViewport();
  viewport.set(currentViewport);
  panZoom.set(panZoomInstance);
  panZoomInstance.update(params);
  return {
    update(params2) {
      panZoomInstance.update(params2);
    }
  };
}
var root$m = from_html(`<div class="svelte-flow__zoom svelte-1vl0uat"><!></div>`);
function Zoom($$anchor, $$props) {
  push($$props, false);
  const $panActivationKeyPressed = () => store_get(panActivationKeyPressed, "$panActivationKeyPressed", $$stores);
  const $minZoom = () => store_get(minZoom, "$minZoom", $$stores);
  const $maxZoom = () => store_get(maxZoom, "$maxZoom", $$stores);
  const $zoomActivationKeyPressed = () => store_get(zoomActivationKeyPressed, "$zoomActivationKeyPressed", $$stores);
  const $selectionRect = () => store_get(selectionRect, "$selectionRect", $$stores);
  const $translateExtent = () => store_get(translateExtent, "$translateExtent", $$stores);
  const $lib = () => store_get(lib, "$lib", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const viewPort = mutable_source();
  const _panOnDrag = mutable_source();
  const _panOnScroll = mutable_source();
  let initialViewport = prop($$props, "initialViewport", 8, void 0);
  let onMoveStart = prop($$props, "onMoveStart", 8, void 0);
  let onMove = prop($$props, "onMove", 8, void 0);
  let onMoveEnd = prop($$props, "onMoveEnd", 8, void 0);
  let panOnScrollMode = prop($$props, "panOnScrollMode", 8);
  let preventScrolling = prop($$props, "preventScrolling", 8);
  let zoomOnScroll = prop($$props, "zoomOnScroll", 8);
  let zoomOnDoubleClick = prop($$props, "zoomOnDoubleClick", 8);
  let zoomOnPinch = prop($$props, "zoomOnPinch", 8);
  let panOnDrag = prop($$props, "panOnDrag", 8);
  let panOnScroll = prop($$props, "panOnScroll", 8);
  let paneClickDistance = prop($$props, "paneClickDistance", 8);
  const {
    viewport,
    panZoom,
    selectionRect,
    minZoom,
    maxZoom,
    dragging,
    translateExtent,
    lib,
    panActivationKeyPressed,
    zoomActivationKeyPressed,
    viewportInitialized
  } = useStore();
  const onTransformChange = (transform2) => viewport.set({ x: transform2[0], y: transform2[1], zoom: transform2[2] });
  onMount(() => {
    store_set(viewportInitialized, true);
  });
  legacy_pre_effect(() => deep_read_state(initialViewport()), () => {
    set(viewPort, initialViewport() || { x: 0, y: 0, zoom: 1 });
  });
  legacy_pre_effect(() => ($panActivationKeyPressed(), deep_read_state(panOnDrag())), () => {
    set(_panOnDrag, $panActivationKeyPressed() || panOnDrag());
  });
  legacy_pre_effect(() => ($panActivationKeyPressed(), deep_read_state(panOnScroll())), () => {
    set(_panOnScroll, $panActivationKeyPressed() || panOnScroll());
  });
  legacy_pre_effect_reset();
  init();
  var div = root$m();
  var node = child(div);
  slot(node, $$props, "default", {}, null);
  reset(div);
  action(div, ($$node, $$action_arg) => zoom == null ? void 0 : zoom($$node, $$action_arg), () => ({
    viewport,
    minZoom: $minZoom(),
    maxZoom: $maxZoom(),
    initialViewport: get(viewPort),
    dragging,
    panZoom,
    onPanZoomStart: onMoveStart(),
    onPanZoom: onMove(),
    onPanZoomEnd: onMoveEnd(),
    zoomOnScroll: zoomOnScroll(),
    zoomOnDoubleClick: zoomOnDoubleClick(),
    zoomOnPinch: zoomOnPinch(),
    panOnScroll: get(_panOnScroll),
    panOnDrag: get(_panOnDrag),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: panOnScrollMode() || PanOnScrollMode.Free,
    zoomActivationKeyPressed: $zoomActivationKeyPressed(),
    preventScrolling: typeof preventScrolling() === "boolean" ? preventScrolling() : true,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!$selectionRect(),
    translateExtent: $translateExtent(),
    lib: $lib(),
    paneClickDistance: paneClickDistance(),
    onTransformChange
  }));
  append($$anchor, div);
  pop();
  $$cleanup();
}
function wrapHandler(handler, container) {
  return (event2) => {
    if (event2.target !== container) {
      return;
    }
    handler == null ? void 0 : handler(event2);
  };
}
function toggleSelected(ids) {
  return (item) => {
    const isSelected = ids.includes(item.id);
    if (item.selected !== isSelected) {
      item.selected = isSelected;
    }
    return item;
  };
}
var root$l = from_html(`<div><!></div>`);
function Pane($$anchor, $$props) {
  push($$props, false);
  const $panActivationKeyPressed = () => store_get(panActivationKeyPressed, "$panActivationKeyPressed", $$stores);
  const $selectionKeyPressed = () => store_get(selectionKeyPressed, "$selectionKeyPressed", $$stores);
  const $selectionRect = () => store_get(selectionRect, "$selectionRect", $$stores);
  const $elementsSelectable = () => store_get(elementsSelectable, "$elementsSelectable", $$stores);
  const $selectionRectMode = () => store_get(selectionRectMode, "$selectionRectMode", $$stores);
  const $connection = () => store_get(connection, "$connection", $$stores);
  const $edges = () => store_get(edges, "$edges", $$stores);
  const $nodeLookup = () => store_get(nodeLookup, "$nodeLookup", $$stores);
  const $viewport = () => store_get(viewport, "$viewport", $$stores);
  const $selectionMode = () => store_get(selectionMode, "$selectionMode", $$stores);
  const $dragging = () => store_get(dragging, "$dragging", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const _panOnDrag = mutable_source();
  const isSelecting = mutable_source();
  const hasActiveSelection = mutable_source();
  let panOnDrag = prop($$props, "panOnDrag", 8, void 0);
  let selectionOnDrag = prop($$props, "selectionOnDrag", 8, void 0);
  const dispatch2 = createEventDispatcher();
  const {
    nodes,
    nodeLookup,
    edges,
    viewport,
    dragging,
    elementsSelectable,
    selectionRect,
    selectionRectMode,
    selectionKeyPressed,
    selectionMode,
    panActivationKeyPressed,
    unselectNodesAndEdges,
    connection
  } = useStore();
  let container = mutable_source();
  let containerBounds = null;
  let selectedNodes = [];
  let selectionInProgress = false;
  function onClick(event2) {
    if (selectionInProgress || $connection().inProgress) {
      selectionInProgress = false;
      return;
    }
    dispatch2("paneclick", { event: event2 });
    unselectNodesAndEdges();
    selectionRectMode.set(null);
  }
  function onPointerDown2(event2) {
    var _a, _b;
    containerBounds = get(container).getBoundingClientRect();
    if (!elementsSelectable || !get(isSelecting) || event2.button !== 0 || event2.target !== get(container) || !containerBounds) {
      return;
    }
    (_b = (_a = event2.target) == null ? void 0 : _a.setPointerCapture) == null ? void 0 : _b.call(_a, event2.pointerId);
    const { x, y } = getEventPosition(event2, containerBounds);
    unselectNodesAndEdges();
    selectionRect.set({ width: 0, height: 0, startX: x, startY: y, x, y });
  }
  function onPointerMove(event2) {
    if (!get(isSelecting) || !containerBounds || !$selectionRect()) {
      return;
    }
    selectionInProgress = true;
    const mousePos = getEventPosition(event2, containerBounds);
    const startX = $selectionRect().startX ?? 0;
    const startY = $selectionRect().startY ?? 0;
    const nextUserSelectRect = {
      ...$selectionRect(),
      x: mousePos.x < startX ? mousePos.x : startX,
      y: mousePos.y < startY ? mousePos.y : startY,
      width: Math.abs(mousePos.x - startX),
      height: Math.abs(mousePos.y - startY)
    };
    const prevSelectedNodeIds = selectedNodes.map((n) => n.id);
    const prevSelectedEdgeIds = getConnectedEdges(selectedNodes, $edges()).map((e) => e.id);
    selectedNodes = getNodesInside($nodeLookup(), nextUserSelectRect, [$viewport().x, $viewport().y, $viewport().zoom], $selectionMode() === SelectionMode.Partial, true);
    const selectedEdgeIds = getConnectedEdges(selectedNodes, $edges()).map((e) => e.id);
    const selectedNodeIds = selectedNodes.map((n) => n.id);
    if (prevSelectedNodeIds.length !== selectedNodeIds.length || selectedNodeIds.some((id) => !prevSelectedNodeIds.includes(id))) {
      nodes.update((nodes2) => nodes2.map(toggleSelected(selectedNodeIds)));
    }
    if (prevSelectedEdgeIds.length !== selectedEdgeIds.length || selectedEdgeIds.some((id) => !prevSelectedEdgeIds.includes(id))) {
      edges.update((edges2) => edges2.map(toggleSelected(selectedEdgeIds)));
    }
    selectionRectMode.set("user");
    selectionRect.set(nextUserSelectRect);
  }
  function onPointerUp(event2) {
    var _a, _b;
    if (event2.button !== 0) {
      return;
    }
    (_b = (_a = event2.target) == null ? void 0 : _a.releasePointerCapture) == null ? void 0 : _b.call(_a, event2.pointerId);
    if (!get(isSelecting) && $selectionRectMode() === "user" && event2.target === get(container)) {
      onClick == null ? void 0 : onClick(event2);
    }
    selectionRect.set(null);
    if (selectedNodes.length > 0) {
      store_set(selectionRectMode, "nodes");
    }
    if ($selectionKeyPressed()) {
      selectionInProgress = false;
    }
  }
  const onContextMenu = (event2) => {
    var _a;
    if (Array.isArray(get(_panOnDrag)) && ((_a = get(_panOnDrag)) == null ? void 0 : _a.includes(2))) {
      event2.preventDefault();
      return;
    }
    dispatch2("panecontextmenu", { event: event2 });
  };
  legacy_pre_effect(() => ($panActivationKeyPressed(), deep_read_state(panOnDrag())), () => {
    set(_panOnDrag, $panActivationKeyPressed() || panOnDrag());
  });
  legacy_pre_effect(
    () => ($selectionKeyPressed(), $selectionRect(), deep_read_state(selectionOnDrag()), get(_panOnDrag)),
    () => {
      set(isSelecting, $selectionKeyPressed() || $selectionRect() || selectionOnDrag() && get(_panOnDrag) !== true);
    }
  );
  legacy_pre_effect(
    () => ($elementsSelectable(), get(isSelecting), $selectionRectMode()),
    () => {
      set(hasActiveSelection, $elementsSelectable() && (get(isSelecting) || $selectionRectMode() === "user"));
    }
  );
  legacy_pre_effect_reset();
  init();
  var div = root$l();
  var event_handler = user_derived(() => get(hasActiveSelection) ? void 0 : wrapHandler(onClick, get(container)));
  var event_handler_1 = user_derived(() => wrapHandler(onContextMenu, get(container)));
  let classes;
  var node = child(div);
  slot(node, $$props, "default", {}, null);
  reset(div);
  bind_this(div, ($$value) => set(container, $$value), () => get(container));
  template_effect(($0) => classes = set_class(div, 1, "svelte-flow__pane svelte-j55c5z", null, classes, $0), [
    () => ({
      draggable: panOnDrag() === true || Array.isArray(panOnDrag()) && panOnDrag().includes(0),
      dragging: $dragging(),
      selection: get(isSelecting)
    })
  ]);
  event("click", div, function(...$$args) {
    var _a;
    (_a = get(event_handler)) == null ? void 0 : _a.apply(this, $$args);
  });
  event("pointerdown", div, function(...$$args) {
    var _a;
    (_a = get(hasActiveSelection) ? onPointerDown2 : void 0) == null ? void 0 : _a.apply(this, $$args);
  });
  event("pointermove", div, function(...$$args) {
    var _a;
    (_a = get(hasActiveSelection) ? onPointerMove : void 0) == null ? void 0 : _a.apply(this, $$args);
  });
  event("pointerup", div, function(...$$args) {
    var _a;
    (_a = get(hasActiveSelection) ? onPointerUp : void 0) == null ? void 0 : _a.apply(this, $$args);
  });
  event("contextmenu", div, function(...$$args) {
    var _a;
    (_a = get(event_handler_1)) == null ? void 0 : _a.apply(this, $$args);
  });
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root$k = from_html(`<div class="svelte-flow__viewport xyflow__viewport svelte-tjeeg3"><!></div>`);
function Viewport($$anchor, $$props) {
  push($$props, false);
  const $viewport = () => store_get(viewport, "$viewport", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const { viewport } = useStore();
  init();
  var div = root$k();
  var node = child(div);
  slot(node, $$props, "default", {}, null);
  reset(div);
  template_effect(() => set_style(div, `transform: translate(${$viewport().x ?? ""}px, ${$viewport().y ?? ""}px) scale(${$viewport().zoom ?? ""})`));
  append($$anchor, div);
  pop();
  $$cleanup();
}
function drag(domNode, params) {
  const { store, onDrag, onDragStart, onDragStop, onNodeMouseDown } = params;
  const dragInstance = XYDrag({
    onDrag,
    onDragStart,
    onDragStop,
    onNodeMouseDown,
    getStoreItems: () => {
      const snapGrid = get$1(store.snapGrid);
      const vp = get$1(store.viewport);
      return {
        nodes: get$1(store.nodes),
        nodeLookup: get$1(store.nodeLookup),
        edges: get$1(store.edges),
        nodeExtent: get$1(store.nodeExtent),
        snapGrid: snapGrid ? snapGrid : [0, 0],
        snapToGrid: !!snapGrid,
        nodeOrigin: get$1(store.nodeOrigin),
        multiSelectionActive: get$1(store.multiselectionKeyPressed),
        domNode: get$1(store.domNode),
        transform: [vp.x, vp.y, vp.zoom],
        autoPanOnNodeDrag: get$1(store.autoPanOnNodeDrag),
        nodesDraggable: get$1(store.nodesDraggable),
        selectNodesOnDrag: get$1(store.selectNodesOnDrag),
        nodeDragThreshold: get$1(store.nodeDragThreshold),
        unselectNodesAndEdges: store.unselectNodesAndEdges,
        updateNodePositions: store.updateNodePositions,
        panBy: store.panBy
      };
    }
  });
  function updateDrag(domNode2, params2) {
    if (params2.disabled) {
      dragInstance.destroy();
      return;
    }
    dragInstance.update({
      domNode: domNode2,
      noDragClassName: params2.noDragClass,
      handleSelector: params2.handleSelector,
      nodeId: params2.nodeId,
      isSelectable: params2.isSelectable,
      nodeClickDistance: params2.nodeClickDistance
    });
  }
  updateDrag(domNode, params);
  return {
    update(params2) {
      updateDrag(domNode, params2);
    },
    destroy() {
      dragInstance.destroy();
    }
  };
}
function getNodeInlineStyleDimensions({ width, height, initialWidth, initialHeight, measuredWidth, measuredHeight }) {
  if (measuredWidth === void 0 && measuredHeight === void 0) {
    const styleWidth = width ?? initialWidth;
    const styleHeight = height ?? initialHeight;
    return {
      width: styleWidth ? `width:${styleWidth}px;` : "",
      height: styleHeight ? `height:${styleHeight}px;` : ""
    };
  }
  return {
    width: width ? `width:${width}px;` : "",
    height: height ? `height:${height}px;` : ""
  };
}
var root_1$7 = from_html(`<div><!></div>`);
function NodeWrapper($$anchor, $$props) {
  push($$props, false);
  const $nodeTypes = () => store_get(nodeTypes, "$nodeTypes", $$stores);
  const $elementsSelectable = () => store_get(elementsSelectable, "$elementsSelectable", $$stores);
  const $nodesDraggable = () => store_get(nodesDraggable, "$nodesDraggable", $$stores);
  const $connectableStore = () => store_get(connectableStore, "$connectableStore", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const nodeType = mutable_source(void 0, true);
  const nodeTypeValid = mutable_source(void 0, true);
  const nodeComponent = mutable_source(void 0, true);
  const inlineStyleDimensions = mutable_source(void 0, true);
  let node = prop($$props, "node", 9);
  let id = prop($$props, "id", 9);
  let data = prop($$props, "data", 25, () => ({}));
  let selected = prop($$props, "selected", 9, false);
  let draggable = prop($$props, "draggable", 9, void 0);
  let selectable = prop($$props, "selectable", 9, void 0);
  let connectable = prop($$props, "connectable", 9, true);
  let deletable = prop($$props, "deletable", 9, true);
  let hidden = prop($$props, "hidden", 9, false);
  let dragging = prop($$props, "dragging", 9, false);
  let resizeObserver = prop($$props, "resizeObserver", 9, null);
  let style = prop($$props, "style", 9, void 0);
  let type = prop($$props, "type", 9, "default");
  let isParent = prop($$props, "isParent", 9, false);
  let positionX = prop($$props, "positionX", 9);
  let positionY = prop($$props, "positionY", 9);
  let sourcePosition = prop($$props, "sourcePosition", 9, void 0);
  let targetPosition = prop($$props, "targetPosition", 9, void 0);
  let zIndex = prop($$props, "zIndex", 9);
  let measuredWidth = prop($$props, "measuredWidth", 9, void 0);
  let measuredHeight = prop($$props, "measuredHeight", 9, void 0);
  let initialWidth = prop($$props, "initialWidth", 9, void 0);
  let initialHeight = prop($$props, "initialHeight", 9, void 0);
  let width = prop($$props, "width", 9, void 0);
  let height = prop($$props, "height", 9, void 0);
  let dragHandle = prop($$props, "dragHandle", 9, void 0);
  let initialized = prop($$props, "initialized", 9, false);
  let parentId = prop($$props, "parentId", 9, void 0);
  let nodeClickDistance = prop($$props, "nodeClickDistance", 9, void 0);
  let className = prop($$props, "class", 9, "");
  const store = useStore();
  const {
    nodeTypes,
    nodeDragThreshold,
    selectNodesOnDrag,
    handleNodeSelection,
    updateNodeInternals: updateNodeInternals2,
    elementsSelectable,
    nodesDraggable
  } = store;
  let nodeRef = mutable_source(void 0, true);
  let prevNodeRef = mutable_source(null, true);
  const dispatchNodeEvent = createEventDispatcher();
  const connectableStore = writable(connectable());
  let prevType = mutable_source(void 0, true);
  let prevSourcePosition = mutable_source(void 0, true);
  let prevTargetPosition = mutable_source(void 0, true);
  setContext("svelteflow__node_id", id());
  setContext("svelteflow__node_connectable", connectableStore);
  onDestroy(() => {
    var _a;
    if (get(prevNodeRef)) {
      (_a = resizeObserver()) == null ? void 0 : _a.unobserve(get(prevNodeRef));
    }
  });
  function onSelectNodeHandler(event2) {
    if (selectable() && (!get$1(selectNodesOnDrag) || !draggable() || get$1(nodeDragThreshold) > 0)) {
      handleNodeSelection(id());
    }
    dispatchNodeEvent("nodeclick", { node: node().internals.userNode, event: event2 });
  }
  legacy_pre_effect(() => deep_read_state(type()), () => {
    set(nodeType, type() || "default");
  });
  legacy_pre_effect(() => ($nodeTypes(), get(nodeType)), () => {
    set(nodeTypeValid, !!$nodeTypes()[get(nodeType)]);
  });
  legacy_pre_effect(() => ($nodeTypes(), get(nodeType), DefaultNode), () => {
    set(nodeComponent, $nodeTypes()[get(nodeType)] || DefaultNode);
  });
  legacy_pre_effect(
    () => (get(nodeTypeValid), deep_read_state(type())),
    () => {
      if (!get(nodeTypeValid)) {
        console.warn("003", errorMessages["error003"](type()));
      }
    }
  );
  legacy_pre_effect(
    () => (deep_read_state(width()), deep_read_state(height()), deep_read_state(initialWidth()), deep_read_state(initialHeight()), deep_read_state(measuredWidth()), deep_read_state(measuredHeight())),
    () => {
      set(inlineStyleDimensions, getNodeInlineStyleDimensions({
        width: width(),
        height: height(),
        initialWidth: initialWidth(),
        initialHeight: initialHeight(),
        measuredWidth: measuredWidth(),
        measuredHeight: measuredHeight()
      }));
    }
  );
  legacy_pre_effect(() => deep_read_state(connectable()), () => {
    connectableStore.set(!!connectable());
  });
  legacy_pre_effect(
    () => (get(prevType), get(nodeType), get(prevSourcePosition), deep_read_state(sourcePosition()), get(prevTargetPosition), deep_read_state(targetPosition()), deep_read_state(id()), get(nodeRef)),
    () => {
      const doUpdate = get(prevType) && get(nodeType) !== get(prevType) || get(prevSourcePosition) && sourcePosition() !== get(prevSourcePosition) || get(prevTargetPosition) && targetPosition() !== get(prevTargetPosition);
      if (doUpdate) {
        requestAnimationFrame(() => updateNodeInternals2(/* @__PURE__ */ new Map([
          [id(), { id: id(), nodeElement: get(nodeRef), force: true }]
        ])));
      }
      set(prevType, get(nodeType));
      set(prevSourcePosition, sourcePosition());
      set(prevTargetPosition, targetPosition());
    }
  );
  legacy_pre_effect(
    () => (deep_read_state(resizeObserver()), get(nodeRef), get(prevNodeRef), deep_read_state(initialized())),
    () => {
      if (resizeObserver() && (get(nodeRef) !== get(prevNodeRef) || !initialized())) {
        get(prevNodeRef) && resizeObserver().unobserve(get(prevNodeRef));
        get(nodeRef) && resizeObserver().observe(get(nodeRef));
        set(prevNodeRef, get(nodeRef));
      }
    }
  );
  legacy_pre_effect_reset();
  init(true);
  var fragment = comment();
  var node_1 = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var div = root_1$7();
      let classes;
      let styles;
      var node_2 = child(div);
      {
        let $0 = derived_safe_equal(() => selected() ?? false);
        let $1 = derived_safe_equal(() => selectable() ?? $elementsSelectable() ?? true);
        let $2 = derived_safe_equal(() => deletable() ?? true);
        let $3 = derived_safe_equal(() => draggable() ?? $nodesDraggable() ?? true);
        component(node_2, () => get(nodeComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {
            get data() {
              return data();
            },
            get id() {
              return id();
            },
            get selected() {
              return get($0);
            },
            get selectable() {
              return get($1);
            },
            get deletable() {
              return get($2);
            },
            get sourcePosition() {
              return sourcePosition();
            },
            get targetPosition() {
              return targetPosition();
            },
            get zIndex() {
              return zIndex();
            },
            get dragging() {
              return dragging();
            },
            get draggable() {
              return get($3);
            },
            get dragHandle() {
              return dragHandle();
            },
            get parentId() {
              return parentId();
            },
            get type() {
              return get(nodeType);
            },
            get isConnectable() {
              return $connectableStore();
            },
            get positionAbsoluteX() {
              return positionX();
            },
            get positionAbsoluteY() {
              return positionY();
            },
            get width() {
              return width();
            },
            get height() {
              return height();
            }
          });
        });
      }
      reset(div);
      action(div, ($$node, $$action_arg) => drag == null ? void 0 : drag($$node, $$action_arg), () => ({
        nodeId: id(),
        isSelectable: selectable(),
        disabled: false,
        handleSelector: dragHandle(),
        noDragClass: "nodrag",
        nodeClickDistance: nodeClickDistance(),
        onNodeMouseDown: handleNodeSelection,
        onDrag: (event2, _, targetNode, nodes) => {
          dispatchNodeEvent("nodedrag", { event: event2, targetNode, nodes });
        },
        onDragStart: (event2, _, targetNode, nodes) => {
          dispatchNodeEvent("nodedragstart", { event: event2, targetNode, nodes });
        },
        onDragStop: (event2, _, targetNode, nodes) => {
          dispatchNodeEvent("nodedragstop", { event: event2, targetNode, nodes });
        },
        store
      }));
      bind_this(div, ($$value) => set(nodeRef, $$value), () => get(nodeRef));
      effect(() => event("click", div, onSelectNodeHandler));
      effect(() => event("mouseenter", div, (event2) => dispatchNodeEvent("nodemouseenter", { node: node(), event: event2 })));
      effect(() => event("mouseleave", div, (event2) => dispatchNodeEvent("nodemouseleave", { node: node(), event: event2 })));
      effect(() => event("mousemove", div, (event2) => dispatchNodeEvent("nodemousemove", { node: node(), event: event2 })));
      effect(() => event("contextmenu", div, (event2) => dispatchNodeEvent("nodecontextmenu", { node: node(), event: event2 })));
      template_effect(
        ($0) => {
          set_attribute(div, "data-id", id());
          classes = set_class(div, 1, $0, null, classes, {
            dragging: dragging(),
            selected: selected(),
            draggable: draggable(),
            connectable: connectable(),
            selectable: selectable(),
            nopan: draggable(),
            parent: isParent()
          });
          styles = set_style(
            div,
            `${style() ?? "" ?? ""};${(get(inlineStyleDimensions), untrack(() => get(inlineStyleDimensions).width)) ?? ""}${(get(inlineStyleDimensions), untrack(() => get(inlineStyleDimensions).height)) ?? ""}`,
            styles,
            {
              "z-index": zIndex(),
              transform: `translate(${positionX() ?? ""}px, ${positionY() ?? ""}px)`,
              visibility: initialized() ? "visible" : "hidden"
            }
          );
        },
        [
          () => clsx((deep_read_state(cc), get(nodeType), deep_read_state(className()), untrack(() => cc([
            "svelte-flow__node",
            `svelte-flow__node-${get(nodeType)}`,
            className()
          ]))))
        ]
      );
      append($$anchor2, div);
    };
    if_block(node_1, ($$render) => {
      if (!hidden()) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root$j = from_html(`<div class="svelte-flow__nodes svelte-v0zrhd"></div>`);
function NodeRenderer($$anchor, $$props) {
  push($$props, false);
  const $visibleNodes = () => store_get(visibleNodes, "$visibleNodes", $$stores);
  const $nodesDraggable = () => store_get(nodesDraggable, "$nodesDraggable", $$stores);
  const $elementsSelectable = () => store_get(elementsSelectable, "$elementsSelectable", $$stores);
  const $nodesConnectable = () => store_get(nodesConnectable, "$nodesConnectable", $$stores);
  const $parentLookup = () => store_get(parentLookup, "$parentLookup", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let nodeClickDistance = prop($$props, "nodeClickDistance", 8, 0);
  const {
    visibleNodes,
    nodesDraggable,
    nodesConnectable,
    elementsSelectable,
    updateNodeInternals: updateNodeInternals2,
    parentLookup
  } = useStore();
  const resizeObserver = typeof ResizeObserver === "undefined" ? null : new ResizeObserver((entries) => {
    const updates = /* @__PURE__ */ new Map();
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("data-id");
      updates.set(id, { id, nodeElement: entry.target, force: true });
    });
    updateNodeInternals2(updates);
  });
  onDestroy(() => {
    resizeObserver == null ? void 0 : resizeObserver.disconnect();
  });
  init();
  var div = root$j();
  each(div, 5, $visibleNodes, (node) => node.id, ($$anchor2, node) => {
    {
      let $0 = derived_safe_equal(() => (get(node), untrack(() => !!get(node).selected)));
      let $1 = derived_safe_equal(() => (get(node), untrack(() => !!get(node).hidden)));
      let $2 = derived_safe_equal(() => (get(node), $nodesDraggable(), untrack(() => !!(get(node).draggable || $nodesDraggable() && typeof get(node).draggable === "undefined"))));
      let $3 = derived_safe_equal(() => (get(node), $elementsSelectable(), untrack(() => !!(get(node).selectable || $elementsSelectable() && typeof get(node).selectable === "undefined"))));
      let $4 = derived_safe_equal(() => (get(node), $nodesConnectable(), untrack(() => !!(get(node).connectable || $nodesConnectable() && typeof get(node).connectable === "undefined"))));
      let $5 = derived_safe_equal(() => (get(node), untrack(() => get(node).deletable ?? true)));
      let $6 = derived_safe_equal(() => ($parentLookup(), get(node), untrack(() => $parentLookup().has(get(node).id))));
      let $7 = derived_safe_equal(() => (get(node), untrack(() => get(node).type ?? "default")));
      let $8 = derived_safe_equal(() => (get(node), untrack(() => get(node).internals.z ?? 0)));
      let $9 = derived_safe_equal(() => (deep_read_state(nodeHasDimensions), get(node), untrack(() => nodeHasDimensions(get(node)))));
      NodeWrapper($$anchor2, {
        get node() {
          return get(node);
        },
        get id() {
          return get(node), untrack(() => get(node).id);
        },
        get data() {
          return get(node), untrack(() => get(node).data);
        },
        get selected() {
          return get($0);
        },
        get hidden() {
          return get($1);
        },
        get draggable() {
          return get($2);
        },
        get selectable() {
          return get($3);
        },
        get connectable() {
          return get($4);
        },
        get deletable() {
          return get($5);
        },
        get positionX() {
          return get(node), untrack(() => get(node).internals.positionAbsolute.x);
        },
        get positionY() {
          return get(node), untrack(() => get(node).internals.positionAbsolute.y);
        },
        get isParent() {
          return get($6);
        },
        get style() {
          return get(node), untrack(() => get(node).style);
        },
        get class() {
          return get(node), untrack(() => get(node).class);
        },
        get type() {
          return get($7);
        },
        get sourcePosition() {
          return get(node), untrack(() => get(node).sourcePosition);
        },
        get targetPosition() {
          return get(node), untrack(() => get(node).targetPosition);
        },
        get dragging() {
          return get(node), untrack(() => get(node).dragging);
        },
        get zIndex() {
          return get($8);
        },
        get dragHandle() {
          return get(node), untrack(() => get(node).dragHandle);
        },
        get initialized() {
          return get($9);
        },
        get width() {
          return get(node), untrack(() => get(node).width);
        },
        get height() {
          return get(node), untrack(() => get(node).height);
        },
        get initialWidth() {
          return get(node), untrack(() => get(node).initialWidth);
        },
        get initialHeight() {
          return get(node), untrack(() => get(node).initialHeight);
        },
        get measuredWidth() {
          return get(node), untrack(() => get(node).measured.width);
        },
        get measuredHeight() {
          return get(node), untrack(() => get(node).measured.height);
        },
        get parentId() {
          return get(node), untrack(() => get(node).parentId);
        },
        get resizeObserver() {
          return resizeObserver;
        },
        get nodeClickDistance() {
          return nodeClickDistance();
        },
        $$events: {
          nodeclick($$arg) {
            bubble_event.call(this, $$props, $$arg);
          },
          nodemouseenter($$arg) {
            bubble_event.call(this, $$props, $$arg);
          },
          nodemousemove($$arg) {
            bubble_event.call(this, $$props, $$arg);
          },
          nodemouseleave($$arg) {
            bubble_event.call(this, $$props, $$arg);
          },
          nodedrag($$arg) {
            bubble_event.call(this, $$props, $$arg);
          },
          nodedragstart($$arg) {
            bubble_event.call(this, $$props, $$arg);
          },
          nodedragstop($$arg) {
            bubble_event.call(this, $$props, $$arg);
          },
          nodecontextmenu($$arg) {
            bubble_event.call(this, $$props, $$arg);
          }
        }
      });
    }
  });
  reset(div);
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root_1$6 = from_svg(`<svg><g role="img"><!></g></svg>`);
function EdgeWrapper($$anchor, $$props) {
  push($$props, false);
  const $edgeTypes = () => store_get(edgeTypes, "$edgeTypes", $$stores);
  const $flowId = () => store_get(flowId, "$flowId", $$stores);
  const $elementsSelectable = () => store_get(elementsSelectable, "$elementsSelectable", $$stores);
  const $edgeLookup = () => store_get(edgeLookup, "$edgeLookup", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const edgeType = mutable_source(void 0, true);
  const edgeComponent = mutable_source(void 0, true);
  const markerStartUrl = mutable_source(void 0, true);
  const markerEndUrl = mutable_source(void 0, true);
  const isSelectable = mutable_source(void 0, true);
  let id = prop($$props, "id", 9);
  let type = prop($$props, "type", 9, "default");
  let source = prop($$props, "source", 9, "");
  let target = prop($$props, "target", 9, "");
  let data = prop($$props, "data", 25, () => ({}));
  let style = prop($$props, "style", 9, void 0);
  let zIndex = prop($$props, "zIndex", 9, void 0);
  let animated = prop($$props, "animated", 9, false);
  let selected = prop($$props, "selected", 9, false);
  let selectable = prop($$props, "selectable", 9, void 0);
  let deletable = prop($$props, "deletable", 9, void 0);
  let hidden = prop($$props, "hidden", 9, false);
  let label = prop($$props, "label", 9, void 0);
  let labelStyle = prop($$props, "labelStyle", 9, void 0);
  let markerStart = prop($$props, "markerStart", 9, void 0);
  let markerEnd = prop($$props, "markerEnd", 9, void 0);
  let sourceHandle = prop($$props, "sourceHandle", 9, void 0);
  let targetHandle = prop($$props, "targetHandle", 9, void 0);
  let sourceX = prop($$props, "sourceX", 9);
  let sourceY = prop($$props, "sourceY", 9);
  let targetX = prop($$props, "targetX", 9);
  let targetY = prop($$props, "targetY", 9);
  let sourcePosition = prop($$props, "sourcePosition", 9);
  let targetPosition = prop($$props, "targetPosition", 9);
  let ariaLabel = prop($$props, "ariaLabel", 9, void 0);
  let interactionWidth = prop($$props, "interactionWidth", 9, void 0);
  let className = prop($$props, "class", 9, "");
  setContext("svelteflow__edge_id", id());
  const { edgeLookup, edgeTypes, flowId, elementsSelectable } = useStore();
  const dispatch2 = createEventDispatcher();
  const handleEdgeSelect = useHandleEdgeSelect();
  function onClick(event2) {
    const edge = $edgeLookup().get(id());
    if (edge) {
      handleEdgeSelect(id());
      dispatch2("edgeclick", { event: event2, edge });
    }
  }
  function onMouseEvent(event2, type2) {
    const edge = $edgeLookup().get(id());
    if (edge) {
      dispatch2(type2, { event: event2, edge });
    }
  }
  legacy_pre_effect(() => deep_read_state(type()), () => {
    set(edgeType, type() || "default");
  });
  legacy_pre_effect(() => ($edgeTypes(), get(edgeType), BezierEdgeInternal), () => {
    set(edgeComponent, $edgeTypes()[get(edgeType)] || BezierEdgeInternal);
  });
  legacy_pre_effect(() => (deep_read_state(markerStart()), $flowId()), () => {
    set(markerStartUrl, markerStart() ? `url('#${getMarkerId(markerStart(), $flowId())}')` : void 0);
  });
  legacy_pre_effect(() => (deep_read_state(markerEnd()), $flowId()), () => {
    set(markerEndUrl, markerEnd() ? `url('#${getMarkerId(markerEnd(), $flowId())}')` : void 0);
  });
  legacy_pre_effect(() => (deep_read_state(selectable()), $elementsSelectable()), () => {
    set(isSelectable, selectable() ?? $elementsSelectable());
  });
  legacy_pre_effect_reset();
  init(true);
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var svg = root_1$6();
      let styles;
      var g = child(svg);
      let classes;
      var node_1 = child(g);
      {
        let $0 = derived_safe_equal(() => deletable() ?? true);
        component(node_1, () => get(edgeComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {
            get id() {
              return id();
            },
            get source() {
              return source();
            },
            get target() {
              return target();
            },
            get sourceX() {
              return sourceX();
            },
            get sourceY() {
              return sourceY();
            },
            get targetX() {
              return targetX();
            },
            get targetY() {
              return targetY();
            },
            get sourcePosition() {
              return sourcePosition();
            },
            get targetPosition() {
              return targetPosition();
            },
            get animated() {
              return animated();
            },
            get selected() {
              return selected();
            },
            get label() {
              return label();
            },
            get labelStyle() {
              return labelStyle();
            },
            get data() {
              return data();
            },
            get style() {
              return style();
            },
            get interactionWidth() {
              return interactionWidth();
            },
            get selectable() {
              return get(isSelectable);
            },
            get deletable() {
              return get($0);
            },
            get type() {
              return get(edgeType);
            },
            get sourceHandleId() {
              return sourceHandle();
            },
            get targetHandleId() {
              return targetHandle();
            },
            get markerStart() {
              return get(markerStartUrl);
            },
            get markerEnd() {
              return get(markerEndUrl);
            }
          });
        });
      }
      reset(g);
      reset(svg);
      template_effect(
        ($0) => {
          styles = set_style(svg, "", styles, { "z-index": zIndex() });
          classes = set_class(g, 0, $0, null, classes, {
            animated: animated(),
            selected: selected(),
            selectable: get(isSelectable)
          });
          set_attribute(g, "data-id", id());
          set_attribute(g, "aria-label", ariaLabel() === null ? void 0 : ariaLabel() ? ariaLabel() : `Edge from ${source()} to ${target()}`);
        },
        [
          () => clsx((deep_read_state(cc), deep_read_state(className()), untrack(() => cc(["svelte-flow__edge", className()]))))
        ]
      );
      event("click", g, onClick);
      event("contextmenu", g, (e) => {
        onMouseEvent(e, "edgecontextmenu");
      });
      event("mouseenter", g, (e) => {
        onMouseEvent(e, "edgemouseenter");
      });
      event("mouseleave", g, (e) => {
        onMouseEvent(e, "edgemouseleave");
      });
      append($$anchor2, svg);
    };
    if_block(node, ($$render) => {
      if (!hidden()) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
function CallOnMount($$anchor, $$props) {
  push($$props, false);
  let _onMount = prop($$props, "onMount", 8, void 0);
  let _onDestroy = prop($$props, "onDestroy", 8, void 0);
  onMount(() => {
    var _a;
    (_a = _onMount()) == null ? void 0 : _a();
    return _onDestroy();
  });
  init();
  pop();
}
var root$i = from_svg(`<defs></defs>`);
function MarkerDefinition($$anchor, $$props) {
  push($$props, false);
  const $markers = () => store_get(markers, "$markers", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const { markers } = useStore();
  init();
  var defs = root$i();
  each(defs, 5, $markers, (marker) => marker.id, ($$anchor2, marker) => {
    Marker($$anchor2, spread_props(() => get(marker)));
  });
  reset(defs);
  append($$anchor, defs);
  pop();
  $$cleanup();
}
var root_1$5 = from_svg(`<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>`);
var root_3$2 = from_svg(`<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>`);
var root$h = from_svg(`<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>`);
function Marker($$anchor, $$props) {
  push($$props, false);
  let id = prop($$props, "id", 8);
  let type = prop($$props, "type", 8);
  let width = prop($$props, "width", 8, 12.5);
  let height = prop($$props, "height", 8, 12.5);
  let markerUnits = prop($$props, "markerUnits", 8, "strokeWidth");
  let orient = prop($$props, "orient", 8, "auto-start-reverse");
  let color = prop($$props, "color", 8, void 0);
  let strokeWidth = prop($$props, "strokeWidth", 8, void 0);
  init();
  var marker = root$h();
  var node = child(marker);
  {
    var consequent = ($$anchor2) => {
      var polyline = root_1$5();
      template_effect(() => {
        set_attribute(polyline, "stroke", color());
        set_attribute(polyline, "stroke-width", strokeWidth());
      });
      append($$anchor2, polyline);
    };
    var alternate = ($$anchor2) => {
      var fragment = comment();
      var node_1 = first_child(fragment);
      {
        var consequent_1 = ($$anchor3) => {
          var polyline_1 = root_3$2();
          template_effect(() => {
            set_attribute(polyline_1, "stroke", color());
            set_attribute(polyline_1, "stroke-width", strokeWidth());
            set_attribute(polyline_1, "fill", color());
          });
          append($$anchor3, polyline_1);
        };
        if_block(
          node_1,
          ($$render) => {
            if (deep_read_state(type()), deep_read_state(MarkerType), untrack(() => type() === MarkerType.ArrowClosed)) $$render(consequent_1);
          },
          true
        );
      }
      append($$anchor2, fragment);
    };
    if_block(node, ($$render) => {
      if (deep_read_state(type()), deep_read_state(MarkerType), untrack(() => type() === MarkerType.Arrow)) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  reset(marker);
  template_effect(() => {
    set_attribute(marker, "id", id());
    set_attribute(marker, "markerWidth", `${width()}`);
    set_attribute(marker, "markerHeight", `${height()}`);
    set_attribute(marker, "markerUnits", markerUnits());
    set_attribute(marker, "orient", orient());
  });
  append($$anchor, marker);
  pop();
}
var root$g = from_html(`<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>`);
function EdgeRenderer($$anchor, $$props) {
  push($$props, false);
  const $visibleEdges = () => store_get(visibleEdges, "$visibleEdges", $$stores);
  const $elementsSelectable = () => store_get(elementsSelectable, "$elementsSelectable", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let defaultEdgeOptions = prop($$props, "defaultEdgeOptions", 8);
  const {
    visibleEdges,
    edgesInitialized,
    edges: { setDefaultOptions },
    elementsSelectable
  } = useStore();
  onMount(() => {
    if (defaultEdgeOptions()) setDefaultOptions(defaultEdgeOptions());
  });
  init();
  var div = root$g();
  var svg = child(div);
  var node = child(svg);
  MarkerDefinition(node, {});
  reset(svg);
  var node_1 = sibling(svg, 2);
  each(node_1, 1, $visibleEdges, (edge) => edge.id, ($$anchor2, edge) => {
    {
      let $0 = derived_safe_equal(() => (get(edge), $elementsSelectable(), untrack(() => get(edge).selectable ?? $elementsSelectable())));
      let $1 = derived_safe_equal(() => (get(edge), untrack(() => get(edge).type || "default")));
      EdgeWrapper($$anchor2, {
        get id() {
          return get(edge), untrack(() => get(edge).id);
        },
        get source() {
          return get(edge), untrack(() => get(edge).source);
        },
        get target() {
          return get(edge), untrack(() => get(edge).target);
        },
        get data() {
          return get(edge), untrack(() => get(edge).data);
        },
        get style() {
          return get(edge), untrack(() => get(edge).style);
        },
        get animated() {
          return get(edge), untrack(() => get(edge).animated);
        },
        get selected() {
          return get(edge), untrack(() => get(edge).selected);
        },
        get selectable() {
          return get($0);
        },
        get deletable() {
          return get(edge), untrack(() => get(edge).deletable);
        },
        get hidden() {
          return get(edge), untrack(() => get(edge).hidden);
        },
        get label() {
          return get(edge), untrack(() => get(edge).label);
        },
        get labelStyle() {
          return get(edge), untrack(() => get(edge).labelStyle);
        },
        get markerStart() {
          return get(edge), untrack(() => get(edge).markerStart);
        },
        get markerEnd() {
          return get(edge), untrack(() => get(edge).markerEnd);
        },
        get sourceHandle() {
          return get(edge), untrack(() => get(edge).sourceHandle);
        },
        get targetHandle() {
          return get(edge), untrack(() => get(edge).targetHandle);
        },
        get sourceX() {
          return get(edge), untrack(() => get(edge).sourceX);
        },
        get sourceY() {
          return get(edge), untrack(() => get(edge).sourceY);
        },
        get targetX() {
          return get(edge), untrack(() => get(edge).targetX);
        },
        get targetY() {
          return get(edge), untrack(() => get(edge).targetY);
        },
        get sourcePosition() {
          return get(edge), untrack(() => get(edge).sourcePosition);
        },
        get targetPosition() {
          return get(edge), untrack(() => get(edge).targetPosition);
        },
        get ariaLabel() {
          return get(edge), untrack(() => get(edge).ariaLabel);
        },
        get interactionWidth() {
          return get(edge), untrack(() => get(edge).interactionWidth);
        },
        get class() {
          return get(edge), untrack(() => get(edge).class);
        },
        get type() {
          return get($1);
        },
        get zIndex() {
          return get(edge), untrack(() => get(edge).zIndex);
        },
        $$events: {
          edgeclick($$arg) {
            bubble_event.call(this, $$props, $$arg);
          },
          edgecontextmenu($$arg) {
            bubble_event.call(this, $$props, $$arg);
          },
          edgemouseenter($$arg) {
            bubble_event.call(this, $$props, $$arg);
          },
          edgemouseleave($$arg) {
            bubble_event.call(this, $$props, $$arg);
          }
        }
      });
    }
  });
  var node_2 = sibling(node_1, 2);
  {
    var consequent = ($$anchor2) => {
      CallOnMount($$anchor2, {
        onMount: () => {
          store_set(edgesInitialized, true);
        },
        onDestroy: () => {
          store_set(edgesInitialized, false);
        }
      });
    };
    if_block(node_2, ($$render) => {
      if ($visibleEdges(), untrack(() => $visibleEdges().length > 0)) $$render(consequent);
    });
  }
  reset(div);
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root_1$4 = from_html(`<div class="svelte-flow__selection svelte-1vr3gfi"></div>`);
function Selection($$anchor, $$props) {
  let x = prop($$props, "x", 8, 0);
  let y = prop($$props, "y", 8, 0);
  let width = prop($$props, "width", 8, 0);
  let height = prop($$props, "height", 8, 0);
  let isVisible = prop($$props, "isVisible", 8, true);
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var div = root_1$4();
      let styles;
      template_effect(() => styles = set_style(div, "", styles, {
        width: typeof width() === "string" ? width() : `${width()}px`,
        height: typeof height() === "string" ? height() : `${height()}px`,
        transform: `translate(${x()}px, ${y()}px)`
      }));
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (isVisible()) $$render(consequent);
    });
  }
  append($$anchor, fragment);
}
function UserSelection($$anchor, $$props) {
  push($$props, false);
  const $selectionRect = () => store_get(selectionRect, "$selectionRect", $$stores);
  const $selectionRectMode = () => store_get(selectionRectMode, "$selectionRectMode", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const { selectionRect, selectionRectMode } = useStore();
  init();
  {
    let $0 = derived_safe_equal(() => !!($selectionRect() && $selectionRectMode() === "user"));
    let $1 = derived_safe_equal(() => {
      var _a;
      return (_a = $selectionRect()) == null ? void 0 : _a.width;
    });
    let $2 = derived_safe_equal(() => {
      var _a;
      return (_a = $selectionRect()) == null ? void 0 : _a.height;
    });
    let $3 = derived_safe_equal(() => {
      var _a;
      return (_a = $selectionRect()) == null ? void 0 : _a.x;
    });
    let $4 = derived_safe_equal(() => {
      var _a;
      return (_a = $selectionRect()) == null ? void 0 : _a.y;
    });
    Selection($$anchor, {
      get isVisible() {
        return get($0);
      },
      get width() {
        return get($1);
      },
      get height() {
        return get($2);
      },
      get x() {
        return get($3);
      },
      get y() {
        return get($4);
      }
    });
  }
  pop();
  $$cleanup();
}
var root_1$3 = from_html(`<div class="selection-wrapper nopan svelte-sf2y5e" role="button" tabindex="-1"><!></div>`);
function NodeSelection($$anchor, $$props) {
  push($$props, false);
  const $selectionRectMode = () => store_get(selectionRectMode, "$selectionRectMode", $$stores);
  const $nodeLookup = () => store_get(nodeLookup, "$nodeLookup", $$stores);
  const $nodes = () => store_get(nodes, "$nodes", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const store = useStore();
  const { selectionRectMode, nodes, nodeLookup } = store;
  const dispatch2 = createEventDispatcher();
  let bounds = mutable_source(null);
  function onContextMenu(event2) {
    const selectedNodes = $nodes().filter((n) => n.selected);
    dispatch2("selectioncontextmenu", { nodes: selectedNodes, event: event2 });
  }
  function onClick(event2) {
    const selectedNodes = $nodes().filter((n) => n.selected);
    dispatch2("selectionclick", { nodes: selectedNodes, event: event2 });
  }
  legacy_pre_effect(
    () => ($selectionRectMode(), $nodeLookup(), $nodes()),
    () => {
      if ($selectionRectMode() === "nodes") {
        set(bounds, getInternalNodesBounds($nodeLookup(), { filter: (node) => !!node.selected }));
        $nodes();
      }
    }
  );
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node_1 = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var div = root_1$3();
      var node_2 = child(div);
      Selection(node_2, { width: "100%", height: "100%", x: 0, y: 0 });
      reset(div);
      action(div, ($$node, $$action_arg) => drag == null ? void 0 : drag($$node, $$action_arg), () => ({
        disabled: false,
        store,
        onDrag: (event2, _, __, nodes2) => {
          dispatch2("nodedrag", { event: event2, targetNode: null, nodes: nodes2 });
        },
        onDragStart: (event2, _, __, nodes2) => {
          dispatch2("nodedragstart", { event: event2, targetNode: null, nodes: nodes2 });
        },
        onDragStop: (event2, _, __, nodes2) => {
          dispatch2("nodedragstop", { event: event2, targetNode: null, nodes: nodes2 });
        }
      }));
      effect(() => event("contextmenu", div, onContextMenu));
      effect(() => event("click", div, onClick));
      effect(() => event("keyup", div, () => {
      }));
      template_effect(() => set_style(div, `width: ${(get(bounds), untrack(() => get(bounds).width)) ?? ""}px; height: ${(get(bounds), untrack(() => get(bounds).height)) ?? ""}px; transform: translate(${(get(bounds), untrack(() => get(bounds).x)) ?? ""}px, ${(get(bounds), untrack(() => get(bounds).y)) ?? ""}px)`));
      append($$anchor2, div);
    };
    if_block(node_1, ($$render) => {
      if ($selectionRectMode(), get(bounds), deep_read_state(isNumeric), untrack(() => $selectionRectMode() === "nodes" && get(bounds) && isNumeric(get(bounds).x) && isNumeric(get(bounds).y))) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
function shortcut(node, param) {
  let { enabled = true, trigger, type = "keydown" } = param;
  function handler(event2) {
    const normalizedTriggers = Array.isArray(trigger) ? trigger : [trigger];
    const modifiedMap = {
      alt: event2.altKey,
      ctrl: event2.ctrlKey,
      shift: event2.shiftKey,
      meta: event2.metaKey
    };
    for (const trigger2 of normalizedTriggers) {
      const mergedTrigger = {
        modifier: [],
        preventDefault: false,
        enabled: true,
        ...trigger2
      };
      const { modifier, key: key2, callback, preventDefault, enabled: triggerEnabled } = mergedTrigger;
      if (triggerEnabled) {
        if (modifier.length) {
          const modifierDefs = (Array.isArray(modifier) ? modifier : [modifier]).map(
            (def) => typeof def === "string" ? [def] : def
          );
          const modified = modifierDefs.some(
            (def) => def.every((modifier2) => modifiedMap[modifier2])
          );
          if (!modified) continue;
        }
        if (event2.key === key2) {
          if (preventDefault) event2.preventDefault();
          const detail = {
            node,
            trigger: mergedTrigger,
            originalEvent: event2
          };
          node.dispatchEvent(new CustomEvent("shortcut", { detail }));
          callback == null ? void 0 : callback(detail);
        }
      }
    }
  }
  if (enabled) node.addEventListener(type, handler);
  return {
    update: (update) => {
      const { enabled: newEnabled = true, type: newType = "keydown" } = update;
      if (enabled && (!newEnabled || type !== newType)) {
        node.removeEventListener(type, handler);
      } else if (!enabled && newEnabled) {
        node.addEventListener(newType, handler);
      }
      enabled = newEnabled;
      type = newType;
      trigger = update.trigger;
    },
    destroy: () => {
      node.removeEventListener(type, handler);
    }
  };
}
function KeyHandler($$anchor, $$props) {
  push($$props, false);
  let selectionKey = prop($$props, "selectionKey", 8, "Shift");
  let multiSelectionKey = prop($$props, "multiSelectionKey", 24, () => isMacOs() ? "Meta" : "Control");
  let deleteKey = prop($$props, "deleteKey", 8, "Backspace");
  let panActivationKey = prop($$props, "panActivationKey", 8, " ");
  let zoomActivationKey = prop($$props, "zoomActivationKey", 24, () => isMacOs() ? "Meta" : "Control");
  const {
    selectionKeyPressed,
    multiselectionKeyPressed,
    deleteKeyPressed,
    panActivationKeyPressed,
    zoomActivationKeyPressed,
    selectionRect
  } = useStore();
  function isKeyObject(key2) {
    return key2 !== null && typeof key2 === "object";
  }
  function getModifier(key2) {
    return isKeyObject(key2) ? key2.modifier || [] : [];
  }
  function getKeyString(key2) {
    if (key2 === null || key2 === void 0) {
      return "";
    }
    return isKeyObject(key2) ? key2.key : key2;
  }
  function getShortcutTrigger(key2, callback) {
    const keys = Array.isArray(key2) ? key2 : [key2];
    return keys.map((_key) => {
      const keyString = getKeyString(_key);
      return {
        key: keyString,
        modifier: getModifier(_key),
        enabled: keyString !== null,
        callback
      };
    });
  }
  function resetKeysAndSelection() {
    selectionRect.set(null);
    selectionKeyPressed.set(false);
    multiselectionKeyPressed.set(false);
    deleteKeyPressed.set(false);
    panActivationKeyPressed.set(false);
    zoomActivationKeyPressed.set(false);
  }
  init();
  event("blur", $window, resetKeysAndSelection);
  event("contextmenu", $window, resetKeysAndSelection);
  action($window, ($$node, $$action_arg) => shortcut == null ? void 0 : shortcut($$node, $$action_arg), () => ({
    trigger: getShortcutTrigger(selectionKey(), () => selectionKeyPressed.set(true)),
    type: "keydown"
  }));
  action($window, ($$node, $$action_arg) => shortcut == null ? void 0 : shortcut($$node, $$action_arg), () => ({
    trigger: getShortcutTrigger(selectionKey(), () => selectionKeyPressed.set(false)),
    type: "keyup"
  }));
  action($window, ($$node, $$action_arg) => shortcut == null ? void 0 : shortcut($$node, $$action_arg), () => ({
    trigger: getShortcutTrigger(multiSelectionKey(), () => multiselectionKeyPressed.set(true)),
    type: "keydown"
  }));
  action($window, ($$node, $$action_arg) => shortcut == null ? void 0 : shortcut($$node, $$action_arg), () => ({
    trigger: getShortcutTrigger(multiSelectionKey(), () => multiselectionKeyPressed.set(false)),
    type: "keyup"
  }));
  action($window, ($$node, $$action_arg) => shortcut == null ? void 0 : shortcut($$node, $$action_arg), () => ({
    trigger: getShortcutTrigger(deleteKey(), (detail) => {
      const isModifierKey = detail.originalEvent.ctrlKey || detail.originalEvent.metaKey || detail.originalEvent.shiftKey;
      if (!isModifierKey && !isInputDOMNode(detail.originalEvent)) {
        deleteKeyPressed.set(true);
      }
    }),
    type: "keydown"
  }));
  action($window, ($$node, $$action_arg) => shortcut == null ? void 0 : shortcut($$node, $$action_arg), () => ({
    trigger: getShortcutTrigger(deleteKey(), () => deleteKeyPressed.set(false)),
    type: "keyup"
  }));
  action($window, ($$node, $$action_arg) => shortcut == null ? void 0 : shortcut($$node, $$action_arg), () => ({
    trigger: getShortcutTrigger(panActivationKey(), () => panActivationKeyPressed.set(true)),
    type: "keydown"
  }));
  action($window, ($$node, $$action_arg) => shortcut == null ? void 0 : shortcut($$node, $$action_arg), () => ({
    trigger: getShortcutTrigger(panActivationKey(), () => panActivationKeyPressed.set(false)),
    type: "keyup"
  }));
  action($window, ($$node, $$action_arg) => shortcut == null ? void 0 : shortcut($$node, $$action_arg), () => ({
    trigger: getShortcutTrigger(zoomActivationKey(), () => zoomActivationKeyPressed.set(true)),
    type: "keydown"
  }));
  action($window, ($$node, $$action_arg) => shortcut == null ? void 0 : shortcut($$node, $$action_arg), () => ({
    trigger: getShortcutTrigger(zoomActivationKey(), () => zoomActivationKeyPressed.set(false)),
    type: "keyup"
  }));
  pop();
}
var root_2$5 = from_svg(`<path fill="none" class="svelte-flow__connection-path"></path>`);
var root_1$2 = from_svg(`<svg class="svelte-flow__connectionline"><g><!><!></g></svg>`);
function ConnectionLine($$anchor, $$props) {
  push($$props, false);
  const $connection = () => store_get(connection, "$connection", $$stores);
  const $connectionLineType = () => store_get(connectionLineType, "$connectionLineType", $$stores);
  const $width = () => store_get(width, "$width", $$stores);
  const $height = () => store_get(height, "$height", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let containerStyle = prop($$props, "containerStyle", 8, "");
  let style = prop($$props, "style", 8, "");
  let isCustomComponent = prop($$props, "isCustomComponent", 8, false);
  const { width, height, connection, connectionLineType } = useStore();
  let path = mutable_source(null);
  legacy_pre_effect(
    () => ($connection(), deep_read_state(isCustomComponent()), $connectionLineType(), get(path), getStraightPath),
    () => {
      if ($connection().inProgress && !isCustomComponent()) {
        const { from, to, fromPosition, toPosition } = $connection();
        const pathParams = {
          sourceX: from.x,
          sourceY: from.y,
          sourcePosition: fromPosition,
          targetX: to.x,
          targetY: to.y,
          targetPosition: toPosition
        };
        switch ($connectionLineType()) {
          case ConnectionLineType.Bezier:
            (($$value) => {
              var $$array = to_array($$value, 1);
              set(path, $$array[0]);
            })(getBezierPath(pathParams));
            break;
          case ConnectionLineType.Step:
            (($$value) => {
              var $$array_1 = to_array($$value, 1);
              set(path, $$array_1[0]);
            })(getSmoothStepPath({ ...pathParams, borderRadius: 0 }));
            break;
          case ConnectionLineType.SmoothStep:
            (($$value) => {
              var $$array_2 = to_array($$value, 1);
              set(path, $$array_2[0]);
            })(getSmoothStepPath(pathParams));
            break;
          default:
            (($$value) => {
              var $$array_3 = to_array($$value, 1);
              set(path, $$array_3[0]);
            })(getStraightPath(pathParams));
        }
      }
    }
  );
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_1 = ($$anchor2) => {
      var svg = root_1$2();
      var g = child(svg);
      var node_1 = child(g);
      slot(node_1, $$props, "connectionLine", {}, null);
      var node_2 = sibling(node_1);
      {
        var consequent = ($$anchor3) => {
          var path_1 = root_2$5();
          template_effect(() => {
            set_attribute(path_1, "d", get(path));
            set_style(path_1, style());
          });
          append($$anchor3, path_1);
        };
        if_block(node_2, ($$render) => {
          if (!isCustomComponent()) $$render(consequent);
        });
      }
      reset(g);
      reset(svg);
      template_effect(
        ($0) => {
          set_attribute(svg, "width", $width());
          set_attribute(svg, "height", $height());
          set_style(svg, containerStyle());
          set_class(g, 0, $0);
        },
        [
          () => clsx((deep_read_state(cc), deep_read_state(getConnectionStatus), $connection(), untrack(() => cc([
            "svelte-flow__connection",
            getConnectionStatus($connection().isValid)
          ]))))
        ]
      );
      append($$anchor2, svg);
    };
    if_block(node, ($$render) => {
      if ($connection(), untrack(() => $connection().inProgress)) $$render(consequent_1);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root$f = from_html(`<div><!></div>`);
function Panel($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const $$restProps = legacy_rest_props($$sanitized_props, ["position", "style", "class"]);
  push($$props, false);
  const $selectionRectMode = () => store_get(selectionRectMode, "$selectionRectMode", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const positionClasses = mutable_source();
  let position = prop($$props, "position", 8, "top-right");
  let style = prop($$props, "style", 8, void 0);
  let className = prop($$props, "class", 8, void 0);
  const { selectionRectMode } = useStore();
  legacy_pre_effect(() => deep_read_state(position()), () => {
    set(positionClasses, `${position()}`.split("-"));
  });
  legacy_pre_effect_reset();
  init();
  var div = root$f();
  attribute_effect(
    div,
    ($0) => ({
      class: $0,
      style: style(),
      ...$$restProps,
      [STYLE]: { "pointer-events": $selectionRectMode() ? "none" : "" }
    }),
    [
      () => (deep_read_state(cc), deep_read_state(className()), get(positionClasses), untrack(() => cc(["svelte-flow__panel", className(), ...get(positionClasses)])))
    ]
  );
  var node = child(div);
  slot(node, $$props, "default", {}, null);
  reset(div);
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root_2$4 = from_html(`<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>`);
function Attribution($$anchor, $$props) {
  push($$props, false);
  let proOptions = prop($$props, "proOptions", 8, void 0);
  let position = prop($$props, "position", 8, "bottom-right");
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      Panel($$anchor2, {
        get position() {
          return position();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: ($$anchor3, $$slotProps) => {
          var a = root_2$4();
          append($$anchor3, a);
        },
        $$slots: { default: true }
      });
    };
    if_block(node, ($$render) => {
      if (deep_read_state(proOptions()), untrack(() => {
        var _a;
        return !((_a = proOptions()) == null ? void 0 : _a.hideAttribution);
      })) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
}
function updateStore(store, { nodeTypes, edgeTypes, minZoom, maxZoom, translateExtent, paneClickDistance }) {
  if (nodeTypes !== void 0) {
    store.setNodeTypes(nodeTypes);
  }
  if (edgeTypes !== void 0) {
    store.setEdgeTypes(edgeTypes);
  }
  if (minZoom !== void 0) {
    store.setMinZoom(minZoom);
  }
  if (maxZoom !== void 0) {
    store.setMaxZoom(maxZoom);
  }
  if (translateExtent !== void 0) {
    store.setTranslateExtent(translateExtent);
  }
  if (paneClickDistance !== void 0) {
    store.setPaneClickDistance(paneClickDistance);
  }
}
const getKeys = (obj) => Object.keys(obj);
function updateStoreByKeys(store, keys) {
  getKeys(keys).forEach((prop2) => {
    const update = keys[prop2];
    if (update !== void 0) {
      store[prop2].set(update);
    }
  });
}
function getMediaQuery() {
  if (typeof window === "undefined" || !window.matchMedia) {
    return null;
  }
  return window.matchMedia("(prefers-color-scheme: dark)");
}
function useColorModeClass(colorMode = "light") {
  const colorModeClass = readable("light", (set2) => {
    if (colorMode !== "system") {
      set2(colorMode);
      return;
    }
    const mediaQuery = getMediaQuery();
    const updateColorModeClass = () => set2((mediaQuery == null ? void 0 : mediaQuery.matches) ? "dark" : "light");
    set2((mediaQuery == null ? void 0 : mediaQuery.matches) ? "dark" : "light");
    mediaQuery == null ? void 0 : mediaQuery.addEventListener("change", updateColorModeClass);
    return () => {
      mediaQuery == null ? void 0 : mediaQuery.removeEventListener("change", updateColorModeClass);
    };
  });
  return colorModeClass;
}
var root_3$1 = from_html(`<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>`, 1);
var root_2$3 = from_html(`<!> <!>`, 1);
var root$e = from_html(`<div><!> <!> <!> <!></div>`);
function SvelteFlow($$anchor, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const $$restProps = legacy_rest_props($$sanitized_props, [
    "id",
    "nodes",
    "edges",
    "fitView",
    "fitViewOptions",
    "minZoom",
    "maxZoom",
    "initialViewport",
    "viewport",
    "nodeTypes",
    "edgeTypes",
    "selectionKey",
    "selectionMode",
    "panActivationKey",
    "multiSelectionKey",
    "zoomActivationKey",
    "nodesDraggable",
    "nodesConnectable",
    "nodeDragThreshold",
    "elementsSelectable",
    "snapGrid",
    "deleteKey",
    "connectionRadius",
    "connectionLineType",
    "connectionMode",
    "connectionLineStyle",
    "connectionLineContainerStyle",
    "onMoveStart",
    "onMove",
    "onMoveEnd",
    "isValidConnection",
    "translateExtent",
    "nodeExtent",
    "onlyRenderVisibleElements",
    "panOnScrollMode",
    "preventScrolling",
    "zoomOnScroll",
    "zoomOnDoubleClick",
    "zoomOnPinch",
    "panOnScroll",
    "panOnDrag",
    "selectionOnDrag",
    "autoPanOnConnect",
    "autoPanOnNodeDrag",
    "onerror",
    "ondelete",
    "onedgecreate",
    "attributionPosition",
    "proOptions",
    "defaultEdgeOptions",
    "width",
    "height",
    "colorMode",
    "onconnect",
    "onconnectstart",
    "onconnectend",
    "onbeforedelete",
    "oninit",
    "nodeOrigin",
    "paneClickDistance",
    "nodeClickDistance",
    "defaultMarkerColor",
    "style",
    "class"
  ]);
  push($$props, false);
  const $viewport = () => store_get(viewport(), "$viewport", $$stores);
  const $initialized = () => store_get(initialized, "$initialized", $$stores);
  const $colorModeClass = () => store_get(get(colorModeClass), "$colorModeClass", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const colorModeClass = mutable_source();
  let id = prop($$props, "id", 8, "1");
  let nodes = prop($$props, "nodes", 8);
  let edges = prop($$props, "edges", 8);
  let fitView = prop($$props, "fitView", 8, void 0);
  let fitViewOptions = prop($$props, "fitViewOptions", 8, void 0);
  let minZoom = prop($$props, "minZoom", 8, void 0);
  let maxZoom = prop($$props, "maxZoom", 8, void 0);
  let initialViewport = prop($$props, "initialViewport", 8, void 0);
  let viewport = prop($$props, "viewport", 8, void 0);
  let nodeTypes = prop($$props, "nodeTypes", 8, void 0);
  let edgeTypes = prop($$props, "edgeTypes", 8, void 0);
  let selectionKey = prop($$props, "selectionKey", 8, void 0);
  let selectionMode = prop($$props, "selectionMode", 8, void 0);
  let panActivationKey = prop($$props, "panActivationKey", 8, void 0);
  let multiSelectionKey = prop($$props, "multiSelectionKey", 8, void 0);
  let zoomActivationKey = prop($$props, "zoomActivationKey", 8, void 0);
  let nodesDraggable = prop($$props, "nodesDraggable", 8, void 0);
  let nodesConnectable = prop($$props, "nodesConnectable", 8, void 0);
  let nodeDragThreshold = prop($$props, "nodeDragThreshold", 8, void 0);
  let elementsSelectable = prop($$props, "elementsSelectable", 8, void 0);
  let snapGrid = prop($$props, "snapGrid", 8, void 0);
  let deleteKey = prop($$props, "deleteKey", 8, void 0);
  let connectionRadius = prop($$props, "connectionRadius", 8, void 0);
  let connectionLineType = prop($$props, "connectionLineType", 8, void 0);
  let connectionMode = prop($$props, "connectionMode", 24, () => ConnectionMode.Strict);
  let connectionLineStyle = prop($$props, "connectionLineStyle", 8, "");
  let connectionLineContainerStyle = prop($$props, "connectionLineContainerStyle", 8, "");
  let onMoveStart = prop($$props, "onMoveStart", 8, void 0);
  let onMove = prop($$props, "onMove", 8, void 0);
  let onMoveEnd = prop($$props, "onMoveEnd", 8, void 0);
  let isValidConnection = prop($$props, "isValidConnection", 8, void 0);
  let translateExtent = prop($$props, "translateExtent", 8, void 0);
  let nodeExtent = prop($$props, "nodeExtent", 8, void 0);
  let onlyRenderVisibleElements = prop($$props, "onlyRenderVisibleElements", 8, void 0);
  let panOnScrollMode = prop($$props, "panOnScrollMode", 24, () => PanOnScrollMode.Free);
  let preventScrolling = prop($$props, "preventScrolling", 8, true);
  let zoomOnScroll = prop($$props, "zoomOnScroll", 8, true);
  let zoomOnDoubleClick = prop($$props, "zoomOnDoubleClick", 8, true);
  let zoomOnPinch = prop($$props, "zoomOnPinch", 8, true);
  let panOnScroll = prop($$props, "panOnScroll", 8, false);
  let panOnDrag = prop($$props, "panOnDrag", 8, true);
  let selectionOnDrag = prop($$props, "selectionOnDrag", 8, void 0);
  let autoPanOnConnect = prop($$props, "autoPanOnConnect", 8, true);
  let autoPanOnNodeDrag = prop($$props, "autoPanOnNodeDrag", 8, true);
  let onerror = prop($$props, "onerror", 8, void 0);
  let ondelete = prop($$props, "ondelete", 8, void 0);
  let onedgecreate = prop($$props, "onedgecreate", 8, void 0);
  let attributionPosition = prop($$props, "attributionPosition", 8, void 0);
  let proOptions = prop($$props, "proOptions", 8, void 0);
  let defaultEdgeOptions = prop($$props, "defaultEdgeOptions", 8, void 0);
  let width = prop($$props, "width", 8, void 0);
  let height = prop($$props, "height", 8, void 0);
  let colorMode = prop($$props, "colorMode", 8, "light");
  let onconnect = prop($$props, "onconnect", 8, void 0);
  let onconnectstart = prop($$props, "onconnectstart", 8, void 0);
  let onconnectend = prop($$props, "onconnectend", 8, void 0);
  let onbeforedelete = prop($$props, "onbeforedelete", 8, void 0);
  let oninit = prop($$props, "oninit", 8, void 0);
  let nodeOrigin = prop($$props, "nodeOrigin", 8, void 0);
  let paneClickDistance = prop($$props, "paneClickDistance", 8, 0);
  let nodeClickDistance = prop($$props, "nodeClickDistance", 8, 0);
  let defaultMarkerColor = prop($$props, "defaultMarkerColor", 8, "#b1b1b7");
  let style = prop($$props, "style", 8, void 0);
  let className = prop($$props, "class", 8, void 0);
  let domNode = mutable_source();
  let clientWidth = mutable_source();
  let clientHeight = mutable_source();
  const initViewport = $viewport() || initialViewport();
  const store = hasContext(key) ? useStore() : createStoreContext({
    nodes: get$1(nodes()),
    edges: get$1(edges()),
    width: width(),
    height: height(),
    fitView: fitView(),
    nodeOrigin: nodeOrigin(),
    nodeExtent: nodeExtent()
  });
  onMount(() => {
    store.width.set(get(clientWidth));
    store.height.set(get(clientHeight));
    store.domNode.set(get(domNode));
    store.syncNodeStores(nodes());
    store.syncEdgeStores(edges());
    store.syncViewport(viewport());
    if (fitView() !== void 0) {
      store.fitViewQueued.set(fitView());
    }
    if (fitViewOptions()) {
      store.fitViewOptions.set(fitViewOptions());
    }
    updateStore(store, {
      nodeTypes: nodeTypes(),
      edgeTypes: edgeTypes(),
      minZoom: minZoom(),
      maxZoom: maxZoom(),
      translateExtent: translateExtent(),
      paneClickDistance: paneClickDistance()
    });
    return () => {
      store.reset();
    };
  });
  const { initialized } = store;
  let onInitCalled = mutable_source(false);
  legacy_pre_effect(() => (get(clientWidth), get(clientHeight)), () => {
    if (get(clientWidth) !== void 0 && get(clientHeight) !== void 0) {
      store.width.set(get(clientWidth));
      store.height.set(get(clientHeight));
    }
  });
  legacy_pre_effect(
    () => (get(onInitCalled), $initialized(), deep_read_state(oninit())),
    () => {
      var _a;
      if (!get(onInitCalled) && $initialized()) {
        (_a = oninit()) == null ? void 0 : _a();
        set(onInitCalled, true);
      }
    }
  );
  legacy_pre_effect(
    () => (deep_read_state(id()), deep_read_state(connectionLineType()), deep_read_state(connectionRadius()), deep_read_state(selectionMode()), deep_read_state(snapGrid()), deep_read_state(defaultMarkerColor()), deep_read_state(nodesDraggable()), deep_read_state(nodesConnectable()), deep_read_state(elementsSelectable()), deep_read_state(onlyRenderVisibleElements()), deep_read_state(isValidConnection()), deep_read_state(autoPanOnConnect()), deep_read_state(autoPanOnNodeDrag()), deep_read_state(onerror()), deep_read_state(ondelete()), deep_read_state(onedgecreate()), deep_read_state(connectionMode()), deep_read_state(nodeDragThreshold()), deep_read_state(onconnect()), deep_read_state(onconnectstart()), deep_read_state(onconnectend()), deep_read_state(onbeforedelete()), deep_read_state(nodeOrigin()), updateStoreByKeys),
    () => {
      const updatableProps = {
        flowId: id(),
        connectionLineType: connectionLineType(),
        connectionRadius: connectionRadius(),
        selectionMode: selectionMode(),
        snapGrid: snapGrid(),
        defaultMarkerColor: defaultMarkerColor(),
        nodesDraggable: nodesDraggable(),
        nodesConnectable: nodesConnectable(),
        elementsSelectable: elementsSelectable(),
        onlyRenderVisibleElements: onlyRenderVisibleElements(),
        isValidConnection: isValidConnection(),
        autoPanOnConnect: autoPanOnConnect(),
        autoPanOnNodeDrag: autoPanOnNodeDrag(),
        onerror: onerror(),
        ondelete: ondelete(),
        onedgecreate: onedgecreate(),
        connectionMode: connectionMode(),
        nodeDragThreshold: nodeDragThreshold(),
        onconnect: onconnect(),
        onconnectstart: onconnectstart(),
        onconnectend: onconnectend(),
        onbeforedelete: onbeforedelete(),
        nodeOrigin: nodeOrigin()
      };
      updateStoreByKeys(store, updatableProps);
    }
  );
  legacy_pre_effect(
    () => (deep_read_state(nodeTypes()), deep_read_state(edgeTypes()), deep_read_state(minZoom()), deep_read_state(maxZoom()), deep_read_state(translateExtent()), deep_read_state(paneClickDistance())),
    () => {
      updateStore(store, {
        nodeTypes: nodeTypes(),
        edgeTypes: edgeTypes(),
        minZoom: minZoom(),
        maxZoom: maxZoom(),
        translateExtent: translateExtent(),
        paneClickDistance: paneClickDistance()
      });
    }
  );
  legacy_pre_effect(() => deep_read_state(colorMode()), () => {
    store_unsub(set(colorModeClass, useColorModeClass(colorMode())), "$colorModeClass", $$stores);
  });
  legacy_pre_effect_reset();
  init();
  var div = root$e();
  attribute_effect(
    div,
    ($0) => ({
      style: style(),
      class: $0,
      "data-testid": "svelte-flow__wrapper",
      ...$$restProps,
      role: "application"
    }),
    [
      () => (deep_read_state(cc), deep_read_state(className()), $colorModeClass(), untrack(() => cc(["svelte-flow", className(), $colorModeClass()])))
    ],
    void 0,
    void 0,
    "svelte-4xqsnx"
  );
  var node = child(div);
  KeyHandler(node, {
    get selectionKey() {
      return selectionKey();
    },
    get deleteKey() {
      return deleteKey();
    },
    get panActivationKey() {
      return panActivationKey();
    },
    get multiSelectionKey() {
      return multiSelectionKey();
    },
    get zoomActivationKey() {
      return zoomActivationKey();
    }
  });
  var node_1 = sibling(node, 2);
  {
    let $0 = derived_safe_equal(() => (deep_read_state(panOnScrollMode()), deep_read_state(PanOnScrollMode), untrack(() => panOnScrollMode() === void 0 ? PanOnScrollMode.Free : panOnScrollMode())));
    let $1 = derived_safe_equal(() => preventScrolling() === void 0 ? true : preventScrolling());
    let $2 = derived_safe_equal(() => zoomOnScroll() === void 0 ? true : zoomOnScroll());
    let $3 = derived_safe_equal(() => zoomOnDoubleClick() === void 0 ? true : zoomOnDoubleClick());
    let $4 = derived_safe_equal(() => zoomOnPinch() === void 0 ? true : zoomOnPinch());
    let $5 = derived_safe_equal(() => panOnScroll() === void 0 ? false : panOnScroll());
    let $6 = derived_safe_equal(() => panOnDrag() === void 0 ? true : panOnDrag());
    let $7 = derived_safe_equal(() => paneClickDistance() === void 0 ? 0 : paneClickDistance());
    Zoom(node_1, {
      get initialViewport() {
        return initViewport;
      },
      get onMoveStart() {
        return onMoveStart();
      },
      get onMove() {
        return onMove();
      },
      get onMoveEnd() {
        return onMoveEnd();
      },
      get panOnScrollMode() {
        return get($0);
      },
      get preventScrolling() {
        return get($1);
      },
      get zoomOnScroll() {
        return get($2);
      },
      get zoomOnDoubleClick() {
        return get($3);
      },
      get zoomOnPinch() {
        return get($4);
      },
      get panOnScroll() {
        return get($5);
      },
      get panOnDrag() {
        return get($6);
      },
      get paneClickDistance() {
        return get($7);
      },
      children: ($$anchor2, $$slotProps) => {
        {
          let $02 = derived_safe_equal(() => panOnDrag() === void 0 ? true : panOnDrag());
          Pane($$anchor2, {
            get panOnDrag() {
              return get($02);
            },
            get selectionOnDrag() {
              return selectionOnDrag();
            },
            $$events: {
              paneclick($$arg) {
                bubble_event.call(this, $$props, $$arg);
              },
              panecontextmenu($$arg) {
                bubble_event.call(this, $$props, $$arg);
              }
            },
            children: ($$anchor3, $$slotProps2) => {
              var fragment_1 = root_2$3();
              var node_2 = first_child(fragment_1);
              Viewport(node_2, {
                children: ($$anchor4, $$slotProps3) => {
                  var fragment_2 = root_3$1();
                  var node_3 = first_child(fragment_2);
                  EdgeRenderer(node_3, {
                    get defaultEdgeOptions() {
                      return defaultEdgeOptions();
                    },
                    $$events: {
                      edgeclick($$arg) {
                        bubble_event.call(this, $$props, $$arg);
                      },
                      edgecontextmenu($$arg) {
                        bubble_event.call(this, $$props, $$arg);
                      },
                      edgemouseenter($$arg) {
                        bubble_event.call(this, $$props, $$arg);
                      },
                      edgemouseleave($$arg) {
                        bubble_event.call(this, $$props, $$arg);
                      }
                    }
                  });
                  var node_4 = sibling(node_3, 2);
                  ConnectionLine(node_4, {
                    get containerStyle() {
                      return connectionLineContainerStyle();
                    },
                    get style() {
                      return connectionLineStyle();
                    },
                    isCustomComponent: untrack(() => $$slots.connectionLine),
                    $$slots: {
                      connectionLine: ($$anchor5, $$slotProps4) => {
                        var fragment_3 = comment();
                        var node_5 = first_child(fragment_3);
                        slot(node_5, $$props, "connectionLine", {}, null);
                        append($$anchor5, fragment_3);
                      }
                    }
                  });
                  var node_6 = sibling(node_4, 6);
                  NodeRenderer(node_6, {
                    get nodeClickDistance() {
                      return nodeClickDistance();
                    },
                    $$events: {
                      nodeclick($$arg) {
                        bubble_event.call(this, $$props, $$arg);
                      },
                      nodemouseenter($$arg) {
                        bubble_event.call(this, $$props, $$arg);
                      },
                      nodemousemove($$arg) {
                        bubble_event.call(this, $$props, $$arg);
                      },
                      nodemouseleave($$arg) {
                        bubble_event.call(this, $$props, $$arg);
                      },
                      nodedragstart($$arg) {
                        bubble_event.call(this, $$props, $$arg);
                      },
                      nodedrag($$arg) {
                        bubble_event.call(this, $$props, $$arg);
                      },
                      nodedragstop($$arg) {
                        bubble_event.call(this, $$props, $$arg);
                      },
                      nodecontextmenu($$arg) {
                        bubble_event.call(this, $$props, $$arg);
                      }
                    }
                  });
                  var node_7 = sibling(node_6, 2);
                  NodeSelection(node_7, {
                    $$events: {
                      selectionclick($$arg) {
                        bubble_event.call(this, $$props, $$arg);
                      },
                      selectioncontextmenu($$arg) {
                        bubble_event.call(this, $$props, $$arg);
                      },
                      nodedragstart($$arg) {
                        bubble_event.call(this, $$props, $$arg);
                      },
                      nodedrag($$arg) {
                        bubble_event.call(this, $$props, $$arg);
                      },
                      nodedragstop($$arg) {
                        bubble_event.call(this, $$props, $$arg);
                      }
                    }
                  });
                  append($$anchor4, fragment_2);
                },
                $$slots: { default: true }
              });
              var node_8 = sibling(node_2, 2);
              UserSelection(node_8, {});
              append($$anchor3, fragment_1);
            },
            $$slots: { default: true }
          });
        }
      },
      $$slots: { default: true }
    });
  }
  var node_9 = sibling(node_1, 2);
  Attribution(node_9, {
    get proOptions() {
      return proOptions();
    },
    get position() {
      return attributionPosition();
    }
  });
  var node_10 = sibling(node_9, 2);
  slot(node_10, $$props, "default", {}, null);
  reset(div);
  bind_this(div, ($$value) => set(domNode, $$value), () => get(domNode));
  bind_element_size(div, "clientWidth", ($$value) => set(clientWidth, $$value));
  bind_element_size(div, "clientHeight", ($$value) => set(clientHeight, $$value));
  event("dragover", div, function($$arg) {
    bubble_event.call(this, $$props, $$arg);
  });
  event("drop", div, function($$arg) {
    bubble_event.call(this, $$props, $$arg);
  });
  append($$anchor, div);
  pop();
  $$cleanup();
}
function SvelteFlowProvider($$anchor, $$props) {
  push($$props, false);
  let initialNodes = prop($$props, "initialNodes", 8, void 0);
  let initialEdges = prop($$props, "initialEdges", 8, void 0);
  let initialWidth = prop($$props, "initialWidth", 8, void 0);
  let initialHeight = prop($$props, "initialHeight", 8, void 0);
  let fitView = prop($$props, "fitView", 8, void 0);
  let nodeOrigin = prop($$props, "nodeOrigin", 8, void 0);
  const store = createStore({
    nodes: initialNodes(),
    edges: initialEdges(),
    width: initialWidth(),
    height: initialHeight(),
    nodeOrigin: nodeOrigin(),
    fitView: fitView()
  });
  setContext(key, { getStore: () => store });
  onDestroy(() => {
    store.reset();
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  slot(node, $$props, "default", {}, null);
  append($$anchor, fragment);
  pop();
}
var root$d = from_html(`<button><!></button>`);
function ControlButton($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const $$restProps = legacy_rest_props($$sanitized_props, [
    "class",
    "bgColor",
    "bgColorHover",
    "color",
    "colorHover",
    "borderColor"
  ]);
  push($$props, false);
  let className = prop($$props, "class", 8, void 0);
  let bgColor = prop($$props, "bgColor", 8, void 0);
  let bgColorHover = prop($$props, "bgColorHover", 8, void 0);
  let color = prop($$props, "color", 8, void 0);
  let colorHover = prop($$props, "colorHover", 8, void 0);
  let borderColor = prop($$props, "borderColor", 8, void 0);
  init();
  var button = root$d();
  attribute_effect(
    button,
    ($0) => ({
      type: "button",
      class: $0,
      ...$$restProps,
      [STYLE]: {
        "--xy-controls-button-background-color-props": bgColor(),
        "--xy-controls-button-background-color-hover-props": bgColorHover(),
        "--xy-controls-button-color-props": color(),
        "--xy-controls-button-color-hover-props": colorHover(),
        "--xy-controls-button-border-color-props": borderColor()
      }
    }),
    [
      () => (deep_read_state(cc), deep_read_state(className()), untrack(() => cc(["svelte-flow__controls-button", className()])))
    ]
  );
  var node = child(button);
  slot(node, $$props, "default", { class: "button-svg" }, null);
  reset(button);
  event("click", button, function($$arg) {
    bubble_event.call(this, $$props, $$arg);
  });
  append($$anchor, button);
  pop();
}
var root$c = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>`);
function Plus($$anchor) {
  var svg = root$c();
  append($$anchor, svg);
}
var root$b = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>`);
function Minus($$anchor) {
  var svg = root$b();
  append($$anchor, svg);
}
var root$a = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>`);
function Fit($$anchor) {
  var svg = root$a();
  append($$anchor, svg);
}
var root$9 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>`);
function Lock($$anchor) {
  var svg = root$9();
  append($$anchor, svg);
}
var root$8 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>`);
function Unlock($$anchor) {
  var svg = root$8();
  append($$anchor, svg);
}
var root_2$2 = from_html(`<!> <!>`, 1);
var root_1$1 = from_html(`<!> <!> <!> <!> <!> <!>`, 1);
function Controls($$anchor, $$props) {
  push($$props, false);
  const $nodesDraggable = () => store_get(nodesDraggable, "$nodesDraggable", $$stores);
  const $nodesConnectable = () => store_get(nodesConnectable, "$nodesConnectable", $$stores);
  const $elementsSelectable = () => store_get(elementsSelectable, "$elementsSelectable", $$stores);
  const $viewport = () => store_get(viewport, "$viewport", $$stores);
  const $minZoom = () => store_get(minZoom, "$minZoom", $$stores);
  const $maxZoom = () => store_get(maxZoom, "$maxZoom", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const isInteractive = mutable_source();
  const minZoomReached = mutable_source();
  const maxZoomReached = mutable_source();
  const orientationClass = mutable_source();
  let position = prop($$props, "position", 8, "bottom-left");
  let showZoom = prop($$props, "showZoom", 8, true);
  let showFitView = prop($$props, "showFitView", 8, true);
  let showLock = prop($$props, "showLock", 8, true);
  let buttonBgColor = prop($$props, "buttonBgColor", 8, void 0);
  let buttonBgColorHover = prop($$props, "buttonBgColorHover", 8, void 0);
  let buttonColor = prop($$props, "buttonColor", 8, void 0);
  let buttonColorHover = prop($$props, "buttonColorHover", 8, void 0);
  let buttonBorderColor = prop($$props, "buttonBorderColor", 8, void 0);
  let ariaLabel = prop($$props, "ariaLabel", 8, void 0);
  let style = prop($$props, "style", 8, void 0);
  let orientation = prop($$props, "orientation", 8, "vertical");
  let fitViewOptions = prop($$props, "fitViewOptions", 8, void 0);
  let className = prop($$props, "class", 8, "");
  const {
    zoomIn,
    zoomOut,
    fitView,
    viewport,
    minZoom,
    maxZoom,
    nodesDraggable,
    nodesConnectable,
    elementsSelectable
  } = useStore();
  const buttonProps = {
    bgColor: buttonBgColor(),
    bgColorHover: buttonBgColorHover(),
    color: buttonColor(),
    colorHover: buttonColorHover(),
    borderColor: buttonBorderColor()
  };
  const onZoomInHandler = () => {
    zoomIn();
  };
  const onZoomOutHandler = () => {
    zoomOut();
  };
  const onFitViewHandler = () => {
    fitView(fitViewOptions());
  };
  const onToggleInteractivity = () => {
    set(isInteractive, !get(isInteractive));
    nodesDraggable.set(get(isInteractive));
    nodesConnectable.set(get(isInteractive));
    elementsSelectable.set(get(isInteractive));
  };
  legacy_pre_effect(
    () => ($nodesDraggable(), $nodesConnectable(), $elementsSelectable()),
    () => {
      set(isInteractive, $nodesDraggable() || $nodesConnectable() || $elementsSelectable());
    }
  );
  legacy_pre_effect(() => ($viewport(), $minZoom()), () => {
    set(minZoomReached, $viewport().zoom <= $minZoom());
  });
  legacy_pre_effect(() => ($viewport(), $maxZoom()), () => {
    set(maxZoomReached, $viewport().zoom >= $maxZoom());
  });
  legacy_pre_effect(() => deep_read_state(orientation()), () => {
    set(orientationClass, orientation() === "horizontal" ? "horizontal" : "vertical");
  });
  legacy_pre_effect_reset();
  init();
  {
    let $0 = derived_safe_equal(() => (deep_read_state(cc), get(orientationClass), deep_read_state(className()), untrack(() => cc([
      "svelte-flow__controls",
      get(orientationClass),
      className()
    ]))));
    let $1 = derived_safe_equal(() => ariaLabel() ?? "Svelte Flow controls");
    Panel($$anchor, {
      get class() {
        return get($0);
      },
      get position() {
        return position();
      },
      "data-testid": "svelte-flow__controls",
      get "aria-label"() {
        return get($1);
      },
      get style() {
        return style();
      },
      children: ($$anchor2, $$slotProps) => {
        var fragment_1 = root_1$1();
        var node = first_child(fragment_1);
        slot(node, $$props, "before", {}, null);
        var node_1 = sibling(node, 2);
        {
          var consequent = ($$anchor3) => {
            var fragment_2 = root_2$2();
            var node_2 = first_child(fragment_2);
            ControlButton(node_2, spread_props(
              {
                class: "svelte-flow__controls-zoomin",
                title: "zoom in",
                "aria-label": "zoom in",
                get disabled() {
                  return get(maxZoomReached);
                }
              },
              () => buttonProps,
              {
                $$events: { click: onZoomInHandler },
                children: ($$anchor4, $$slotProps2) => {
                  Plus($$anchor4);
                },
                $$slots: { default: true }
              }
            ));
            var node_3 = sibling(node_2, 2);
            ControlButton(node_3, spread_props(
              {
                class: "svelte-flow__controls-zoomout",
                title: "zoom out",
                "aria-label": "zoom out",
                get disabled() {
                  return get(minZoomReached);
                }
              },
              () => buttonProps,
              {
                $$events: { click: onZoomOutHandler },
                children: ($$anchor4, $$slotProps2) => {
                  Minus($$anchor4);
                },
                $$slots: { default: true }
              }
            ));
            append($$anchor3, fragment_2);
          };
          if_block(node_1, ($$render) => {
            if (showZoom()) $$render(consequent);
          });
        }
        var node_4 = sibling(node_1, 2);
        {
          var consequent_1 = ($$anchor3) => {
            ControlButton($$anchor3, spread_props(
              {
                class: "svelte-flow__controls-fitview",
                title: "fit view",
                "aria-label": "fit view"
              },
              () => buttonProps,
              {
                $$events: { click: onFitViewHandler },
                children: ($$anchor4, $$slotProps2) => {
                  Fit($$anchor4);
                },
                $$slots: { default: true }
              }
            ));
          };
          if_block(node_4, ($$render) => {
            if (showFitView()) $$render(consequent_1);
          });
        }
        var node_5 = sibling(node_4, 2);
        {
          var consequent_3 = ($$anchor3) => {
            ControlButton($$anchor3, spread_props(
              {
                class: "svelte-flow__controls-interactive",
                title: "toggle interactivity",
                "aria-label": "toggle interactivity"
              },
              () => buttonProps,
              {
                $$events: { click: onToggleInteractivity },
                children: ($$anchor4, $$slotProps2) => {
                  var fragment_8 = comment();
                  var node_6 = first_child(fragment_8);
                  {
                    var consequent_2 = ($$anchor5) => {
                      Unlock($$anchor5);
                    };
                    var alternate = ($$anchor5) => {
                      Lock($$anchor5);
                    };
                    if_block(node_6, ($$render) => {
                      if (get(isInteractive)) $$render(consequent_2);
                      else $$render(alternate, false);
                    });
                  }
                  append($$anchor4, fragment_8);
                },
                $$slots: { default: true }
              }
            ));
          };
          if_block(node_5, ($$render) => {
            if (showLock()) $$render(consequent_3);
          });
        }
        var node_7 = sibling(node_5, 2);
        slot(node_7, $$props, "default", {}, null);
        var node_8 = sibling(node_7, 2);
        slot(node_8, $$props, "after", {}, null);
        append($$anchor2, fragment_1);
      },
      $$slots: { default: true }
    });
  }
  pop();
  $$cleanup();
}
var BackgroundVariant;
(function(BackgroundVariant2) {
  BackgroundVariant2["Lines"] = "lines";
  BackgroundVariant2["Dots"] = "dots";
  BackgroundVariant2["Cross"] = "cross";
})(BackgroundVariant || (BackgroundVariant = {}));
var root$7 = from_svg(`<circle></circle>`);
function DotPattern($$anchor, $$props) {
  push($$props, false);
  let radius = prop($$props, "radius", 8, 5);
  let className = prop($$props, "class", 8, "");
  init();
  var circle = root$7();
  template_effect(
    ($0) => {
      set_attribute(circle, "cx", radius());
      set_attribute(circle, "cy", radius());
      set_attribute(circle, "r", radius());
      set_class(circle, 0, $0);
    },
    [
      () => clsx((deep_read_state(cc), deep_read_state(className()), untrack(() => cc(["svelte-flow__background-pattern", "dots", className()]))))
    ]
  );
  append($$anchor, circle);
  pop();
}
var root$6 = from_svg(`<path></path>`);
function LinePattern($$anchor, $$props) {
  push($$props, false);
  let lineWidth = prop($$props, "lineWidth", 8, 1);
  let dimensions = prop($$props, "dimensions", 8);
  let variant = prop($$props, "variant", 8, void 0);
  let className = prop($$props, "class", 8, "");
  init();
  var path = root$6();
  template_effect(
    ($0) => {
      set_attribute(path, "stroke-width", lineWidth());
      set_attribute(path, "d", (deep_read_state(dimensions()), untrack(() => `M${dimensions()[0] / 2} 0 V${dimensions()[1]} M0 ${dimensions()[1] / 2} H${dimensions()[0]}`)));
      set_class(path, 0, $0);
    },
    [
      () => clsx((deep_read_state(cc), deep_read_state(variant()), deep_read_state(className()), untrack(() => cc(["svelte-flow__background-pattern", variant(), className()]))))
    ]
  );
  append($$anchor, path);
  pop();
}
const defaultSize = {
  [BackgroundVariant.Dots]: 1,
  [BackgroundVariant.Lines]: 1,
  [BackgroundVariant.Cross]: 6
};
var root$5 = from_svg(`<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>`);
function Background($$anchor, $$props) {
  push($$props, false);
  const $flowId = () => store_get(flowId, "$flowId", $$stores);
  const $viewport = () => store_get(viewport, "$viewport", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const patternId = mutable_source();
  const scaledGap = mutable_source();
  const scaledSize = mutable_source();
  const patternDimensions = mutable_source();
  const patternOffset = mutable_source();
  let id = prop($$props, "id", 8, void 0);
  let variant = prop($$props, "variant", 24, () => BackgroundVariant.Dots);
  let gap = prop($$props, "gap", 8, 20);
  let size = prop($$props, "size", 8, 1);
  let lineWidth = prop($$props, "lineWidth", 8, 1);
  let bgColor = prop($$props, "bgColor", 8, void 0);
  let patternColor = prop($$props, "patternColor", 8, void 0);
  let patternClass = prop($$props, "patternClass", 8, void 0);
  let className = prop($$props, "class", 8, "");
  const { viewport, flowId } = useStore();
  const patternSize = size() || defaultSize[variant()];
  const isDots = variant() === BackgroundVariant.Dots;
  const isCross = variant() === BackgroundVariant.Cross;
  const gapXY = Array.isArray(gap()) ? gap() : [gap(), gap()];
  legacy_pre_effect(() => ($flowId(), deep_read_state(id())), () => {
    set(patternId, `background-pattern-${$flowId()}-${id() ? id() : ""}`);
  });
  legacy_pre_effect(() => $viewport(), () => {
    set(scaledGap, [
      gapXY[0] * $viewport().zoom || 1,
      gapXY[1] * $viewport().zoom || 1
    ]);
  });
  legacy_pre_effect(() => $viewport(), () => {
    set(scaledSize, patternSize * $viewport().zoom);
  });
  legacy_pre_effect(() => (get(scaledSize), get(scaledGap)), () => {
    set(patternDimensions, isCross ? [get(scaledSize), get(scaledSize)] : get(scaledGap));
  });
  legacy_pre_effect(() => (get(scaledSize), get(patternDimensions)), () => {
    set(patternOffset, isDots ? [get(scaledSize) / 2, get(scaledSize) / 2] : [
      get(patternDimensions)[0] / 2,
      get(patternDimensions)[1] / 2
    ]);
  });
  legacy_pre_effect_reset();
  init();
  var svg = root$5();
  let styles;
  var pattern = child(svg);
  var node = child(pattern);
  {
    var consequent = ($$anchor2) => {
      {
        let $0 = derived_safe_equal(() => get(scaledSize) / 2);
        DotPattern($$anchor2, {
          get radius() {
            return get($0);
          },
          get class() {
            return patternClass();
          }
        });
      }
    };
    var alternate = ($$anchor2) => {
      LinePattern($$anchor2, {
        get dimensions() {
          return get(patternDimensions);
        },
        get variant() {
          return variant();
        },
        get lineWidth() {
          return lineWidth();
        },
        get class() {
          return patternClass();
        }
      });
    };
    if_block(node, ($$render) => {
      if (isDots) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  reset(pattern);
  var rect = sibling(pattern);
  reset(svg);
  template_effect(
    ($0) => {
      set_class(svg, 0, $0, "svelte-11j66u4");
      styles = set_style(svg, "", styles, {
        "--xy-background-color-props": bgColor(),
        "--xy-background-pattern-color-props": patternColor()
      });
      set_attribute(pattern, "id", get(patternId));
      set_attribute(pattern, "x", ($viewport(), get(scaledGap), untrack(() => $viewport().x % get(scaledGap)[0])));
      set_attribute(pattern, "y", ($viewport(), get(scaledGap), untrack(() => $viewport().y % get(scaledGap)[1])));
      set_attribute(pattern, "width", (get(scaledGap), untrack(() => get(scaledGap)[0])));
      set_attribute(pattern, "height", (get(scaledGap), untrack(() => get(scaledGap)[1])));
      set_attribute(pattern, "patternTransform", (get(patternOffset), untrack(() => `translate(-${get(patternOffset)[0]},-${get(patternOffset)[1]})`)));
      set_attribute(rect, "fill", `url(#${get(patternId)})`);
    },
    [
      () => clsx((deep_read_state(cc), deep_read_state(className()), untrack(() => cc(["svelte-flow__background", className()]))))
    ]
  );
  append($$anchor, svg);
  pop();
  $$cleanup();
}
const isNode = (element) => isNodeBase(element);
function useSvelteFlow() {
  const { zoomIn, zoomOut, fitView, onbeforedelete, snapGrid, viewport, width, height, minZoom, maxZoom, panZoom, nodes, edges, domNode, nodeLookup, nodeOrigin, edgeLookup, connectionLookup } = useStore();
  const getNodeRect = (node) => {
    var _a, _b;
    const $nodeLookup = get$1(nodeLookup);
    const nodeToUse = isNode(node) ? node : $nodeLookup.get(node.id);
    const position = nodeToUse.parentId ? evaluateAbsolutePosition(nodeToUse.position, nodeToUse.measured, nodeToUse.parentId, $nodeLookup, get$1(nodeOrigin)) : nodeToUse.position;
    const nodeWithPosition = {
      ...nodeToUse,
      position,
      width: ((_a = nodeToUse.measured) == null ? void 0 : _a.width) ?? nodeToUse.width,
      height: ((_b = nodeToUse.measured) == null ? void 0 : _b.height) ?? nodeToUse.height
    };
    return nodeToRect(nodeWithPosition);
  };
  const updateNode = (id, nodeUpdate, options = { replace: false }) => {
    var _a;
    const node = (_a = get$1(nodeLookup).get(id)) == null ? void 0 : _a.internals.userNode;
    if (!node) {
      return;
    }
    const nextNode = typeof nodeUpdate === "function" ? nodeUpdate(node) : nodeUpdate;
    if (options.replace) {
      nodes.update((nds) => nds.map((node2) => {
        if (node2.id === id) {
          return isNode(nextNode) ? nextNode : { ...node2, ...nextNode };
        }
        return node2;
      }));
    } else {
      Object.assign(node, nextNode);
      nodes.update((nds) => nds);
    }
  };
  const getInternalNode = (id) => get$1(nodeLookup).get(id);
  return {
    zoomIn,
    zoomOut,
    getInternalNode,
    getNode: (id) => {
      var _a;
      return (_a = getInternalNode(id)) == null ? void 0 : _a.internals.userNode;
    },
    getNodes: (ids) => ids === void 0 ? get$1(nodes) : getElements(get$1(nodeLookup), ids),
    getEdge: (id) => get$1(edgeLookup).get(id),
    getEdges: (ids) => ids === void 0 ? get$1(edges) : getElements(get$1(edgeLookup), ids),
    setZoom: (zoomLevel, options) => {
      const currentPanZoom = get$1(panZoom);
      return currentPanZoom ? currentPanZoom.scaleTo(zoomLevel, { duration: options == null ? void 0 : options.duration }) : Promise.resolve(false);
    },
    getZoom: () => get$1(viewport).zoom,
    setViewport: async (nextViewport, options) => {
      const currentViewport = get$1(viewport);
      const currentPanZoom = get$1(panZoom);
      if (!currentPanZoom) {
        return Promise.resolve(false);
      }
      await currentPanZoom.setViewport({
        x: nextViewport.x ?? currentViewport.x,
        y: nextViewport.y ?? currentViewport.y,
        zoom: nextViewport.zoom ?? currentViewport.zoom
      }, { duration: options == null ? void 0 : options.duration });
      return Promise.resolve(true);
    },
    getViewport: () => get$1(viewport),
    setCenter: async (x, y, options) => {
      const nextZoom = typeof (options == null ? void 0 : options.zoom) !== "undefined" ? options.zoom : get$1(maxZoom);
      const currentPanZoom = get$1(panZoom);
      if (!currentPanZoom) {
        return Promise.resolve(false);
      }
      await currentPanZoom.setViewport({
        x: get$1(width) / 2 - x * nextZoom,
        y: get$1(height) / 2 - y * nextZoom,
        zoom: nextZoom
      }, { duration: options == null ? void 0 : options.duration });
      return Promise.resolve(true);
    },
    fitView,
    fitBounds: async (bounds, options) => {
      const currentPanZoom = get$1(panZoom);
      if (!currentPanZoom) {
        return Promise.resolve(false);
      }
      const viewport2 = getViewportForBounds(bounds, get$1(width), get$1(height), get$1(minZoom), get$1(maxZoom), (options == null ? void 0 : options.padding) ?? 0.1);
      await currentPanZoom.setViewport(viewport2, { duration: options == null ? void 0 : options.duration });
      return Promise.resolve(true);
    },
    getIntersectingNodes: (nodeOrRect, partially = true, nodesToIntersect) => {
      const isRect = isRectObject(nodeOrRect);
      const nodeRect = isRect ? nodeOrRect : getNodeRect(nodeOrRect);
      if (!nodeRect) {
        return [];
      }
      return (nodesToIntersect || get$1(nodes)).filter((n) => {
        const internalNode = get$1(nodeLookup).get(n.id);
        if (!internalNode || !isRect && n.id === nodeOrRect.id) {
          return false;
        }
        const currNodeRect = nodeToRect(internalNode);
        const overlappingArea = getOverlappingArea(currNodeRect, nodeRect);
        const partiallyVisible = partially && overlappingArea > 0;
        return partiallyVisible || overlappingArea >= nodeRect.width * nodeRect.height;
      });
    },
    isNodeIntersecting: (nodeOrRect, area, partially = true) => {
      const isRect = isRectObject(nodeOrRect);
      const nodeRect = isRect ? nodeOrRect : getNodeRect(nodeOrRect);
      if (!nodeRect) {
        return false;
      }
      const overlappingArea = getOverlappingArea(nodeRect, area);
      const partiallyVisible = partially && overlappingArea > 0;
      return partiallyVisible || overlappingArea >= nodeRect.width * nodeRect.height;
    },
    deleteElements: async ({ nodes: nodesToRemove = [], edges: edgesToRemove = [] }) => {
      const { nodes: matchingNodes, edges: matchingEdges } = await getElementsToRemove({
        nodesToRemove,
        edgesToRemove,
        nodes: get$1(nodes),
        edges: get$1(edges),
        onBeforeDelete: get$1(onbeforedelete)
      });
      if (matchingNodes) {
        nodes.update((nds) => nds.filter((node) => !matchingNodes.some(({ id }) => id === node.id)));
      }
      if (matchingEdges) {
        edges.update((eds) => eds.filter((edge) => !matchingEdges.some(({ id }) => id === edge.id)));
      }
      return {
        deletedNodes: matchingNodes,
        deletedEdges: matchingEdges
      };
    },
    screenToFlowPosition: (position, options = { snapToGrid: true }) => {
      const _domNode = get$1(domNode);
      if (!_domNode) {
        return position;
      }
      const _snapGrid = options.snapToGrid ? get$1(snapGrid) : false;
      const { x, y, zoom: zoom2 } = get$1(viewport);
      const { x: domX, y: domY } = _domNode.getBoundingClientRect();
      const correctedPosition = {
        x: position.x - domX,
        y: position.y - domY
      };
      return pointToRendererPoint(correctedPosition, [x, y, zoom2], _snapGrid !== null, _snapGrid || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (position) => {
      const _domNode = get$1(domNode);
      if (!_domNode) {
        return position;
      }
      const { x, y, zoom: zoom2 } = get$1(viewport);
      const { x: domX, y: domY } = _domNode.getBoundingClientRect();
      const rendererPosition = rendererPointToPoint(position, [x, y, zoom2]);
      return {
        x: rendererPosition.x + domX,
        y: rendererPosition.y + domY
      };
    },
    toObject: () => {
      return {
        nodes: get$1(nodes).map((node) => ({
          ...node,
          // we want to make sure that changes to the nodes object that gets returned by toObject
          // do not affect the nodes object
          position: { ...node.position },
          data: { ...node.data }
        })),
        edges: get$1(edges).map((edge) => ({ ...edge })),
        viewport: { ...get$1(viewport) }
      };
    },
    updateNode,
    updateNodeData: (id, dataUpdate, options) => {
      var _a;
      const node = (_a = get$1(nodeLookup).get(id)) == null ? void 0 : _a.internals.userNode;
      if (!node) {
        return;
      }
      const nextData = typeof dataUpdate === "function" ? dataUpdate(node) : dataUpdate;
      node.data = (options == null ? void 0 : options.replace) ? nextData : { ...node.data, ...nextData };
      nodes.update((nds) => nds);
    },
    getNodesBounds: (nodes2) => {
      const _nodeLookup = get$1(nodeLookup);
      const _nodeOrigin = get$1(nodeOrigin);
      return getNodesBounds(nodes2, { nodeLookup: _nodeLookup, nodeOrigin: _nodeOrigin });
    },
    getHandleConnections: ({ type, id, nodeId }) => {
      var _a;
      return Array.from(((_a = get$1(connectionLookup).get(`${nodeId}-${type}-${id ?? null}`)) == null ? void 0 : _a.values()) ?? []);
    },
    viewport
  };
}
function getElements(lookup, ids) {
  var _a;
  const result = [];
  for (const id of ids) {
    const item = lookup.get(id);
    if (item) {
      const element = "internals" in item ? (_a = item.internals) == null ? void 0 : _a.userNode : item;
      result.push(element);
    }
  }
  return result;
}
function useNodesInitialized() {
  const { nodesInitialized } = useStore();
  return {
    subscribe: nodesInitialized.subscribe
  };
}
var root$4 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"></path></svg>`);
function ArrowLeft($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$4();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root_3 = from_html(`<div class="text-red-500 line-clamp-2 text-xs mt-0.5"> </div>`);
var root_4 = from_html(`<div class="text-gray-500 line-clamp-2 text-xs mt-0.5"> </div>`);
var root_2$1 = from_html(`<div class="flex w-full"><!> <div class="ml-2"><div class=" flex justify-between items-center"><div class="text-xs text-black dark:text-white font-medium line-clamp-1"> </div></div> <!></div></div>`);
var root_6 = from_html(`<div class="text-red-500 line-clamp-2 text-xs mt-0.5"> </div>`);
var root_7 = from_html(`<div class="text-gray-500 line-clamp-2 text-xs mt-0.5"> </div>`);
var root_5 = from_html(`<div class="flex w-full"><!> <div class="ml-2"><div class=" flex justify-between items-center"><div class="text-xs text-black dark:text-white font-medium line-clamp-1"> </div> <button><!></button></div> <!></div></div>`);
var root$3 = from_html(`<div class="px-4 py-3 shadow-md rounded-xl dark:bg-black bg-white border dark:border-gray-900 w-60 h-20 group"><!> <!> <!></div>`);
function Node($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let data = prop($$props, "data", 12);
  init();
  var div = root$3();
  var node = child(div);
  {
    let $0 = derived_safe_equal(() => (deep_read_state(data()), untrack(() => {
      var _a, _b;
      return ((_b = (_a = data()) == null ? void 0 : _a.message) == null ? void 0 : _b.error) ? data().message.error.content : data().message.content;
    })));
    Tooltip(node, {
      get content() {
        return get($0);
      },
      class: "w-full",
      allowHTML: false,
      children: ($$anchor2, $$slotProps) => {
        var fragment = comment();
        var node_1 = first_child(fragment);
        {
          var consequent_1 = ($$anchor3) => {
            var div_1 = root_2$1();
            var node_2 = child(div_1);
            {
              let $02 = derived_safe_equal(() => (deep_read_state(WEBUI_API_BASE_URL), deep_read_state(data()), untrack(() => `${WEBUI_API_BASE_URL}/users/${data().user.id}/profile/image`)));
              ProfileImage(node_2, {
                get src() {
                  return get($02);
                },
                className: "size-5 -translate-y-[1px]"
              });
            }
            var div_2 = sibling(node_2, 2);
            var div_3 = child(div_2);
            var div_4 = child(div_3);
            var text2 = child(div_4, true);
            reset(div_4);
            reset(div_3);
            var node_3 = sibling(div_3, 2);
            {
              var consequent = ($$anchor4) => {
                var div_5 = root_3();
                var text_1 = child(div_5, true);
                reset(div_5);
                template_effect(() => set_text(text_1, (deep_read_state(data()), untrack(() => data().message.error.content))));
                append($$anchor4, div_5);
              };
              var alternate = ($$anchor4) => {
                var div_6 = root_4();
                var text_2 = child(div_6, true);
                reset(div_6);
                template_effect(() => set_text(text_2, (deep_read_state(data()), untrack(() => data().message.content))));
                append($$anchor4, div_6);
              };
              if_block(node_3, ($$render) => {
                if (deep_read_state(data()), untrack(() => {
                  var _a, _b;
                  return (_b = (_a = data()) == null ? void 0 : _a.message) == null ? void 0 : _b.error;
                })) $$render(consequent);
                else $$render(alternate, false);
              });
            }
            reset(div_2);
            reset(div_1);
            template_effect(() => set_text(text2, (deep_read_state(data()), untrack(() => {
              var _a, _b;
              return ((_b = (_a = data()) == null ? void 0 : _a.user) == null ? void 0 : _b.name) ?? "User";
            }))));
            append($$anchor3, div_1);
          };
          var alternate_2 = ($$anchor3) => {
            var div_7 = root_5();
            var node_4 = child(div_7);
            {
              let $02 = derived_safe_equal(() => (deep_read_state(WEBUI_API_BASE_URL), deep_read_state(data()), $i18n(), untrack(() => `${WEBUI_API_BASE_URL}/models/model/profile/image?id=${data().model.id}&lang=${$i18n().language}`)));
              ProfileImage(node_4, {
                get src() {
                  return get($02);
                },
                className: "size-5 -translate-y-[1px]"
              });
            }
            var div_8 = sibling(node_4, 2);
            var div_9 = child(div_8);
            var div_10 = child(div_9);
            var text_3 = child(div_10, true);
            reset(div_10);
            var button = sibling(div_10, 2);
            var node_5 = child(button);
            {
              let $02 = derived_safe_equal(() => (deep_read_state(data()), untrack(() => {
                var _a, _b;
                return ((_b = (_a = data()) == null ? void 0 : _a.message) == null ? void 0 : _b.favorite) ? "fill-red-500 stroke-red-500" : "hover:fill-red-500 hover:stroke-red-500";
              })));
              Heart(node_5, {
                get className() {
                  return `size-3 ${get($02) ?? ""} `;
                },
                strokeWidth: "2.5"
              });
            }
            reset(button);
            reset(div_9);
            var node_6 = sibling(div_9, 2);
            {
              var consequent_2 = ($$anchor4) => {
                var div_11 = root_6();
                var text_4 = child(div_11, true);
                reset(div_11);
                template_effect(() => set_text(text_4, (deep_read_state(data()), untrack(() => data().message.error.content))));
                append($$anchor4, div_11);
              };
              var alternate_1 = ($$anchor4) => {
                var div_12 = root_7();
                var text_5 = child(div_12, true);
                reset(div_12);
                template_effect(() => set_text(text_5, (deep_read_state(data()), untrack(() => data().message.content))));
                append($$anchor4, div_12);
              };
              if_block(node_6, ($$render) => {
                if (deep_read_state(data()), untrack(() => {
                  var _a, _b;
                  return (_b = (_a = data()) == null ? void 0 : _a.message) == null ? void 0 : _b.error;
                })) $$render(consequent_2);
                else $$render(alternate_1, false);
              });
            }
            reset(div_8);
            reset(div_7);
            template_effect(() => {
              set_text(text_3, (deep_read_state(data()), untrack(() => {
                var _a, _b, _c, _d;
                return ((_b = (_a = data()) == null ? void 0 : _a.model) == null ? void 0 : _b.name) ?? ((_d = (_c = data()) == null ? void 0 : _c.message) == null ? void 0 : _d.model) ?? "Assistant";
              })));
              set_class(button, 1, clsx((deep_read_state(data()), untrack(() => {
                var _a, _b;
                return ((_b = (_a = data()) == null ? void 0 : _a.message) == null ? void 0 : _b.favorite) ? "" : "invisible group-hover:visible";
              }))));
            });
            event("click", button, () => {
              var _a, _b;
              data(data().message.favorite = !(((_b = (_a = data()) == null ? void 0 : _a.message) == null ? void 0 : _b.favorite) ?? false), true);
            });
            append($$anchor3, div_7);
          };
          if_block(node_1, ($$render) => {
            if (deep_read_state(data()), untrack(() => data().message.role === "user")) $$render(consequent_1);
            else $$render(alternate_2, false);
          });
        }
        append($$anchor2, fragment);
      },
      $$slots: { default: true }
    });
  }
  var node_7 = sibling(node, 2);
  Handle(node_7, {
    type: "target",
    get position() {
      return deep_read_state(Position), untrack(() => Position.Top);
    },
    class: "w-2 rounded-full dark:bg-gray-900"
  });
  var node_8 = sibling(node_7, 2);
  Handle(node_8, {
    type: "source",
    get position() {
      return deep_read_state(Position), untrack(() => Position.Bottom);
    },
    class: "w-2 rounded-full dark:bg-gray-900"
  });
  reset(div);
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root$2 = from_svg(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M22 3L2 3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22 21L2 21" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 15V9C8 7.89543 8.89543 7 10 7H14C15.1046 7 16 7.89543 16 9V15C16 16.1046 15.1046 17 14 17H10C8.89543 17 8 16.1046 8 15Z"></path></svg>`);
function AlignVertical($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-4 h-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$2();
  template_effect(() => {
    set_class(svg, 0, clsx(className()));
    set_attribute(svg, "stroke-width", strokeWidth());
  });
  append($$anchor, svg);
}
var root$1 = from_svg(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 22L3 2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 22V2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 16H9C7.89543 16 7 15.1046 7 14V10C7 8.89543 7.89543 8 9 8H15C16.1046 8 17 8.89543 17 10V14C17 15.1046 16.1046 16 15 16Z"></path></svg>`);
function AlignHorizontal($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-4 h-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$1();
  template_effect(() => {
    set_class(svg, 0, clsx(className()));
    set_attribute(svg, "stroke-width", strokeWidth());
  });
  append($$anchor, svg);
}
var root_2 = from_html(`<!> <!>`, 1);
var root_1 = from_html(`<!> <!>`, 1);
function Flow($$anchor, $$props) {
  push($$props, false);
  const $theme = () => store_get(theme, "$theme", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const dispatch2 = createEventDispatcher();
  let nodes = prop($$props, "nodes", 8);
  let nodeTypes = prop($$props, "nodeTypes", 8);
  let edges = prop($$props, "edges", 8);
  let setLayoutDirection = prop($$props, "setLayoutDirection", 8);
  init();
  {
    let $0 = derived_safe_equal(() => ($theme(), untrack(() => $theme().includes("dark") ? "dark" : $theme() === "system" ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : "light")));
    SvelteFlow($$anchor, {
      get nodes() {
        return nodes();
      },
      get nodeTypes() {
        return nodeTypes();
      },
      get edges() {
        return edges();
      },
      fitView: true,
      minZoom: 1e-3,
      get colorMode() {
        return get($0);
      },
      nodesConnectable: false,
      nodesDraggable: false,
      oninit: () => {
        console.log("Flow initialized");
      },
      $$events: { nodeclick: (e) => dispatch2("nodeclick", e.detail) },
      children: ($$anchor2, $$slotProps) => {
        var fragment_1 = root_1();
        var node = first_child(fragment_1);
        Controls(node, {
          showLock: false,
          children: ($$anchor3, $$slotProps2) => {
            var fragment_2 = root_2();
            var node_1 = first_child(fragment_2);
            ControlButton(node_1, {
              title: "Vertical Layout",
              $$events: { click: () => setLayoutDirection()("vertical") },
              children: ($$anchor4, $$slotProps3) => {
                AlignVertical($$anchor4, { className: "size-4" });
              },
              $$slots: { default: true }
            });
            var node_2 = sibling(node_1, 2);
            ControlButton(node_2, {
              title: "Horizontal Layout",
              $$events: { click: () => setLayoutDirection()("horizontal") },
              children: ($$anchor4, $$slotProps3) => {
                AlignHorizontal($$anchor4, { className: "size-4" });
              },
              $$slots: { default: true }
            });
            append($$anchor3, fragment_2);
          },
          $$slots: { default: true }
        });
        var node_3 = sibling(node, 2);
        Background(node_3, {
          get variant() {
            return deep_read_state(BackgroundVariant), untrack(() => BackgroundVariant.Dots);
          }
        });
        append($$anchor2, fragment_1);
      },
      $$slots: { default: true }
    });
  }
  pop();
  $$cleanup();
}
var root = from_html(`<div class="w-full h-full relative"><div class=" absolute z-50 w-full flex justify-between dark:text-gray-100 px-4 py-3"><div class="flex items-center gap-2.5"><button class="self-center p-0.5"><!></button> <div class=" text-lg font-medium self-center font-primary"> </div></div> <button class="self-center p-0.5"><!></button></div> <!></div>`);
function View($$anchor, $$props) {
  push($$props, false);
  const $user = () => store_get(user, "$user", $$stores);
  const $models = () => store_get(models, "$models", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $nodes = () => store_get(nodes, "$nodes", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  createEventDispatcher();
  const i18n = getContext("i18n");
  const { width, height } = useStore();
  const { fitView } = useSvelteFlow();
  const nodesInitialized = useNodesInitialized();
  let history = prop($$props, "history", 8);
  let onClose = prop($$props, "onClose", 8);
  let onNodeClick = prop($$props, "onNodeClick", 8);
  let selectedMessageId = mutable_source(null);
  const nodes = writable([]);
  const edges = writable([]);
  let layoutDirection = mutable_source("vertical");
  const nodeTypes = { custom: Node };
  const focusNode = async () => {
    if (get(selectedMessageId) === null) {
      await fitView({ nodes: [{ id: history().currentId }] });
    } else {
      await fitView({ nodes: [{ id: get(selectedMessageId) }] });
    }
    set(selectedMessageId, null);
  };
  const drawFlow = async (direction) => {
    const nodeList = [];
    const edgeList = [];
    const levelOffset = direction === "vertical" ? 150 : 300;
    const siblingOffset = direction === "vertical" ? 250 : 150;
    let positionMap = /* @__PURE__ */ new Map();
    let layerWidths = {};
    Object.keys(history().messages).forEach((id) => {
      var _a;
      const message = history().messages[id];
      const level = message.parentId ? (((_a = positionMap.get(message.parentId)) == null ? void 0 : _a.level) ?? -1) + 1 : 0;
      if (!layerWidths[level]) layerWidths[level] = 0;
      positionMap.set(id, { id: message.id, level, position: layerWidths[level]++ });
    });
    Object.keys(history().messages).forEach((id) => {
      const pos = positionMap.get(id);
      const x = direction === "vertical" ? pos.position * siblingOffset : pos.level * levelOffset;
      const y = direction === "vertical" ? pos.level * levelOffset : pos.position * siblingOffset;
      nodeList.push({
        id: pos.id,
        type: "custom",
        data: {
          user: $user(),
          message: history().messages[id],
          model: $models().find((model) => model.id === history().messages[id].model)
        },
        position: { x, y }
      });
      const parentId = history().messages[id].parentId;
      if (parentId) {
        edgeList.push({
          id: parentId + "-" + pos.id,
          source: parentId,
          target: pos.id,
          selectable: false,
          class: " dark:fill-gray-300 fill-gray-300",
          type: "smoothstep",
          animated: history().currentId === id || recurseCheckChild(id, history().currentId)
        });
      }
    });
    await edges.set([...edgeList]);
    await nodes.set([...nodeList]);
  };
  const recurseCheckChild = (nodeId, currentId) => {
    const node = history().messages[nodeId];
    return node.childrenIds && node.childrenIds.some((id) => id === currentId || recurseCheckChild(id, currentId));
  };
  const setLayoutDirection = (direction) => {
    set(layoutDirection, direction);
    drawFlow(get(layoutDirection));
  };
  onMount(() => {
    drawFlow(get(layoutDirection));
    nodesInitialized.subscribe(async (initialized) => {
      if (initialized) {
        await tick();
        await fitView({ nodes: [{ id: history().currentId }] });
      }
    });
    width.subscribe((value) => {
      if (value) {
        fitView({ nodes: [{ id: history().currentId }] });
      }
    });
    height.subscribe((value) => {
      if (value) {
        fitView({ nodes: [{ id: history().currentId }] });
      }
    });
  });
  onDestroy(() => {
    console.log("Overview destroyed");
    nodes.set([]);
    edges.set([]);
  });
  legacy_pre_effect(() => (deep_read_state(history()), get(layoutDirection)), () => {
    if (history()) {
      drawFlow(get(layoutDirection));
    }
  });
  legacy_pre_effect(() => deep_read_state(history()), () => {
    if (history() && history().currentId) {
      focusNode();
    }
  });
  legacy_pre_effect_reset();
  init();
  var div = root();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var button = child(div_2);
  var node_1 = child(button);
  ArrowLeft(node_1, { className: "size-3.5" });
  reset(button);
  var div_3 = sibling(button, 2);
  var text2 = child(div_3, true);
  reset(div_3);
  reset(div_2);
  var button_1 = sibling(div_2, 2);
  var node_2 = child(button_1);
  XMark(node_2, { className: "size-3.5" });
  reset(button_1);
  reset(div_1);
  var node_3 = sibling(div_1, 2);
  {
    var consequent = ($$anchor2) => {
      Flow($$anchor2, {
        get nodes() {
          return nodes;
        },
        get nodeTypes() {
          return nodeTypes;
        },
        get edges() {
          return edges;
        },
        setLayoutDirection,
        $$events: {
          nodeclick: (e) => {
            onNodeClick()(e.detail);
            set(selectedMessageId, e.detail.node.data.message.id);
            fitView({ nodes: [{ id: get(selectedMessageId) }] });
          }
        }
      });
    };
    if_block(node_3, ($$render) => {
      if ($nodes(), untrack(() => $nodes().length > 0)) $$render(consequent);
    });
  }
  reset(div);
  template_effect(($0) => set_text(text2, $0), [() => ($i18n(), untrack(() => $i18n().t("Chat Overview")))]);
  event("click", button, () => {
    showOverview.set(false);
  });
  event("click", button_1, () => {
    onClose()();
    showOverview.set(false);
  });
  append($$anchor, div);
  pop();
  $$cleanup();
}
function Overview($$anchor, $$props) {
  push($$props, false);
  createEventDispatcher();
  let history = prop($$props, "history", 8);
  let onClose = prop($$props, "onClose", 8);
  let onNodeClick = prop($$props, "onNodeClick", 8);
  init();
  SvelteFlowProvider($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      View($$anchor2, {
        get history() {
          return history();
        },
        get onClose() {
          return onClose();
        },
        get onNodeClick() {
          return onNodeClick();
        }
      });
    },
    $$slots: { default: true }
  });
  pop();
}
export {
  Overview as default
};
