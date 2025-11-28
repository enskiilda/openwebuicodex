import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, o as onMount, ay as onDestroy, b as get, m as mutable_source, l as legacy_pre_effect, i as deep_read_state, j as legacy_pre_effect_reset, f as first_child, a as pop, c as child, r as reset, s as set, t as template_effect } from "./BxIY6ir7.js";
import { e as event } from "./cBADewWV.js";
import { c as comment, a as append, f as from_html } from "./CAbo1QWi.js";
import { i as if_block } from "./BoSuMvtf.js";
import { s as slot } from "./CZEGIGsR.js";
import { s as set_class } from "./kXiCYuyj.js";
import { t as transition } from "./B3nUhwYU.js";
import { b as bind_this } from "./D16JuV5t.js";
import { i as init } from "./ByqEASoO.js";
import { p as prop } from "./BRmGPDvq.js";
import { a as fly } from "./BNZI2i79.js";
var root_1 = from_html(`<div class="modal fixed right-0 bottom-0 left-0 z-999 flex h-screen max-h-[100dvh] w-full justify-center overflow-hidden overscroll-contain bg-black/60"><div><!></div></div>`);
function Drawer($$anchor, $$props) {
  push($$props, false);
  let show = prop($$props, "show", 12, false);
  let className = prop($$props, "className", 8, "");
  let onClose = prop($$props, "onClose", 8, () => {
  });
  let modalElement = mutable_source(null);
  const handleKeyDown = (event2) => {
    if (event2.key === "Escape" && isTopModal()) {
      console.log("Escape");
      show(false);
    }
  };
  const isTopModal = () => {
    const modals = document.getElementsByClassName("modal");
    return modals.length && modals[modals.length - 1] === get(modalElement);
  };
  onMount(() => {
  });
  onDestroy(() => {
    show(false);
    if (get(modalElement)) {
      if (document.body.contains(get(modalElement))) {
        document.body.removeChild(get(modalElement));
        document.body.style.overflow = "unset";
      }
    }
  });
  legacy_pre_effect(
    () => (deep_read_state(show()), get(modalElement), deep_read_state(onClose())),
    () => {
      if (show() && get(modalElement)) {
        document.body.appendChild(get(modalElement));
        window.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";
      } else if (get(modalElement)) {
        onClose()();
        window.removeEventListener("keydown", handleKeyDown);
        if (document.body.contains(get(modalElement))) {
          document.body.removeChild(get(modalElement));
          document.body.style.overflow = "unset";
        }
      }
    }
  );
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var div = root_1();
      var div_1 = child(div);
      var node_1 = child(div_1);
      slot(node_1, $$props, "default", {}, null);
      reset(div_1);
      reset(div);
      bind_this(div, ($$value) => set(modalElement, $$value), () => get(modalElement));
      template_effect(() => set_class(div_1, 1, ` mt-auto w-full bg-gray-50 dark:bg-gray-900 dark:text-gray-100 ${className() ?? ""} scrollbar-hidden max-h-[100dvh] overflow-y-auto`, "svelte-1u2o1qj"));
      event("mousedown", div_1, (e) => {
        e.stopPropagation();
      });
      transition(1, div, () => fly, () => ({ y: 100, duration: 100 }));
      event("mousedown", div, () => {
        show(false);
      });
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (show()) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
}
export {
  Drawer as D
};
