import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, n as createEventDispatcher, l as legacy_pre_effect, s as set, m as mutable_source, i as deep_read_state, j as legacy_pre_effect_reset, c as child, b as get, r as reset, t as template_effect, a as pop, f as first_child } from "./BxIY6ir7.js";
import { e as event } from "./cBADewWV.js";
import { f as from_html, a as append, b as from_svg, c as comment } from "./CAbo1QWi.js";
import { i as if_block } from "./BoSuMvtf.js";
import { s as set_class } from "./kXiCYuyj.js";
import { i as init } from "./ByqEASoO.js";
import { p as prop } from "./BRmGPDvq.js";
var root_1 = from_svg(`<svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m5 12 4.7 4.5 9.3-9"></path></svg>`);
var root_3 = from_svg(`<svg class="w-3 h-3.5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 12h14"></path></svg>`);
var root = from_html(`<button type="button"><div class="top-0 left-0 absolute w-full flex justify-center"><!></div></button>`);
function Checkbox($$anchor, $$props) {
  push($$props, false);
  const dispatch = createEventDispatcher();
  let state = prop($$props, "state", 8, "unchecked");
  let indeterminate = prop($$props, "indeterminate", 8, false);
  let disabled = prop($$props, "disabled", 8, false);
  let _state = mutable_source("unchecked");
  legacy_pre_effect(() => deep_read_state(state()), () => {
    set(_state, state());
  });
  legacy_pre_effect_reset();
  init();
  var button = root();
  var div = child(button);
  var node = child(div);
  {
    var consequent = ($$anchor2) => {
      var svg = root_1();
      append($$anchor2, svg);
    };
    var alternate = ($$anchor2) => {
      var fragment = comment();
      var node_1 = first_child(fragment);
      {
        var consequent_1 = ($$anchor3) => {
          var svg_1 = root_3();
          append($$anchor3, svg_1);
        };
        if_block(
          node_1,
          ($$render) => {
            if (indeterminate()) $$render(consequent_1);
          },
          true
        );
      }
      append($$anchor2, fragment);
    };
    if_block(node, ($$render) => {
      if (get(_state) === "checked") $$render(consequent);
      else $$render(alternate, false);
    });
  }
  reset(div);
  reset(button);
  template_effect(() => {
    set_class(button, 1, ` outline -outline-offset-1 outline-[1.5px] outline-gray-200 dark:outline-gray-600 ${state() !== "unchecked" ? "bg-black outline-black " : "hover:outline-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800"} text-white transition-all rounded-sm inline-block w-3.5 h-3.5 relative ${disabled() ? "opacity-50 cursor-not-allowed" : ""}`);
    button.disabled = disabled();
  });
  event("click", button, () => {
    if (disabled()) return;
    if (get(_state) === "unchecked") {
      set(_state, "checked");
      dispatch("change", get(_state));
    } else if (get(_state) === "checked") {
      set(_state, "unchecked");
      if (!indeterminate()) {
        dispatch("change", get(_state));
      }
    } else if (indeterminate()) {
      set(_state, "checked");
      dispatch("change", get(_state));
    }
  });
  append($$anchor, button);
  pop();
}
export {
  Checkbox as C
};
