import { x as hydrating, y as hydrate_next, z as block, E as EFFECT_TRANSPARENT } from "./BxIY6ir7.js";
import { B as BranchManager } from "./BoSuMvtf.js";
function component(node, get_component, render_fn) {
  if (hydrating) {
    hydrate_next();
  }
  var branches = new BranchManager(node);
  block(() => {
    var component2 = get_component() ?? null;
    branches.ensure(component2, component2 && ((target) => render_fn(target, component2)));
  }, EFFECT_TRANSPARENT);
}
export {
  component as c
};
