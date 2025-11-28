import { aH as is_runes, z as block, x as hydrating, y as hydrate_next } from "./BxIY6ir7.js";
import { B as BranchManager } from "./BoSuMvtf.js";
function key(node, get_key, render_fn) {
  if (hydrating) {
    hydrate_next();
  }
  var branches = new BranchManager(node);
  var legacy = !is_runes();
  block(() => {
    var key2 = get_key();
    if (legacy && key2 !== null && typeof key2 === "object") {
      key2 = /** @type {V} */
      {};
    }
    branches.ensure(key2, render_fn);
  });
}
export {
  key as k
};
