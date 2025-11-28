import { _ as create_text, z as block, a0 as HEAD_EFFECT, x as hydrating, a1 as get_first_child, a2 as COMMENT_NODE, a3 as get_next_sibling, a4 as set_hydrating, a5 as set_hydrate_node, a6 as hydrate_node } from "./BxIY6ir7.js";
function head(hash, render_fn) {
  let previous_hydrate_node = null;
  let was_hydrating = hydrating;
  var anchor;
  if (hydrating) {
    previous_hydrate_node = hydrate_node;
    var head_anchor = (
      /** @type {TemplateNode} */
      get_first_child(document.head)
    );
    while (head_anchor !== null && (head_anchor.nodeType !== COMMENT_NODE || /** @type {Comment} */
    head_anchor.data !== hash)) {
      head_anchor = /** @type {TemplateNode} */
      get_next_sibling(head_anchor);
    }
    if (head_anchor === null) {
      set_hydrating(false);
    } else {
      var start = (
        /** @type {TemplateNode} */
        get_next_sibling(head_anchor)
      );
      head_anchor.remove();
      set_hydrate_node(start);
    }
  }
  if (!hydrating) {
    anchor = document.head.appendChild(create_text());
  }
  try {
    block(() => render_fn(anchor), HEAD_EFFECT);
  } finally {
    if (was_hydrating) {
      set_hydrating(true);
      set_hydrate_node(
        /** @type {TemplateNode} */
        previous_hydrate_node
      );
    }
  }
}
export {
  head as h
};
