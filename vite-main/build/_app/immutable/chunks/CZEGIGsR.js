import { x as hydrating, y as hydrate_next } from "./BxIY6ir7.js";
function slot(anchor, $$props, name, slot_props, fallback_fn) {
  var _a;
  if (hydrating) {
    hydrate_next();
  }
  var slot_fn = (_a = $$props.$$slots) == null ? void 0 : _a[name];
  var is_interop = false;
  if (slot_fn === true) {
    slot_fn = $$props[name === "default" ? "children" : name];
    is_interop = true;
  }
  if (slot_fn === void 0) {
    if (fallback_fn !== null) {
      fallback_fn(anchor);
    }
  } else {
    slot_fn(anchor, is_interop ? () => slot_props : slot_props);
  }
}
function sanitize_slots(props) {
  const sanitized = {};
  if (props.children) sanitized.default = true;
  for (const key in props.$$slots) {
    sanitized[key] = true;
  }
  return sanitized;
}
export {
  sanitize_slots as a,
  slot as s
};
