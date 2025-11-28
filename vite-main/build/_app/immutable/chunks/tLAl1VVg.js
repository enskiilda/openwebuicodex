import { t as template_effect, x as hydrating, y as hydrate_next, D as active_effect, aB as remove_effect_dom, a6 as hydrate_node, a2 as COMMENT_NODE, a3 as get_next_sibling, aC as hydration_mismatch, aD as HYDRATION_ERROR, a5 as set_hydrate_node, a1 as get_first_child } from "./BxIY6ir7.js";
import { d as assign_nodes, e as create_fragment_from_html } from "./CAbo1QWi.js";
function html(node, get_value, svg = false, mathml = false, skip_warning = false) {
  var anchor = node;
  var value = "";
  template_effect(() => {
    var effect = (
      /** @type {Effect} */
      active_effect
    );
    if (value === (value = get_value() ?? "")) {
      if (hydrating) hydrate_next();
      return;
    }
    if (effect.nodes_start !== null) {
      remove_effect_dom(
        effect.nodes_start,
        /** @type {TemplateNode} */
        effect.nodes_end
      );
      effect.nodes_start = effect.nodes_end = null;
    }
    if (value === "") return;
    if (hydrating) {
      hydrate_node.data;
      var next = hydrate_next();
      var last = next;
      while (next !== null && (next.nodeType !== COMMENT_NODE || /** @type {Comment} */
      next.data !== "")) {
        last = next;
        next = /** @type {TemplateNode} */
        get_next_sibling(next);
      }
      if (next === null) {
        hydration_mismatch();
        throw HYDRATION_ERROR;
      }
      assign_nodes(hydrate_node, last);
      anchor = set_hydrate_node(next);
      return;
    }
    var html2 = value + "";
    if (svg) html2 = `<svg>${html2}</svg>`;
    else if (mathml) html2 = `<math>${html2}</math>`;
    var node2 = create_fragment_from_html(html2);
    if (svg || mathml) {
      node2 = /** @type {Element} */
      get_first_child(node2);
    }
    assign_nodes(
      /** @type {TemplateNode} */
      get_first_child(node2),
      /** @type {TemplateNode} */
      node2.lastChild
    );
    if (svg || mathml) {
      while (get_first_child(node2)) {
        anchor.before(
          /** @type {Node} */
          get_first_child(node2)
        );
      }
    } else {
      anchor.before(node2);
    }
  });
}
export {
  html as h
};
