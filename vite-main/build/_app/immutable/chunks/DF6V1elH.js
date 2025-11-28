import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, o as onMount, ay as onDestroy, l as legacy_pre_effect, j as legacy_pre_effect_reset, f as first_child, a as pop, i as deep_read_state, b as get, m as mutable_source, s as set, c as child, r as reset, t as template_effect, u as untrack } from "./BxIY6ir7.js";
import { e as event } from "./cBADewWV.js";
import { c as comment, a as append, f as from_html } from "./CAbo1QWi.js";
import { i as if_block } from "./BoSuMvtf.js";
import { s as slot } from "./CZEGIGsR.js";
import { s as set_class } from "./kXiCYuyj.js";
import { t as transition } from "./B3nUhwYU.js";
import { b as bind_this } from "./D16JuV5t.js";
import { i as init } from "./ByqEASoO.js";
import { p as prop } from "./BRmGPDvq.js";
import { f as fade } from "./BNZI2i79.js";
import { f as flyAndScale } from "./BuLNlPfL.js";
import { F as FocusTrap, a as createFocusTrap } from "./6_T3Ulvi.js";
var root_1 = from_html(`<div aria-modal="true" role="dialog" style="scrollbar-gutter: stable;"><div><!></div></div>`);
function Modal($$anchor, $$props) {
  push($$props, false);
  let show = prop($$props, "show", 12, true);
  let size = prop($$props, "size", 8, "md");
  let containerClassName = prop($$props, "containerClassName", 8, "p-3");
  let className = prop($$props, "className", 8, "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-4xl");
  let modalElement = mutable_source(null);
  let focusTrap = mutable_source(null);
  const sizeToWidth = (size2) => {
    if (size2 === "full") {
      return "w-full";
    }
    if (size2 === "xs") {
      return "w-[16rem]";
    } else if (size2 === "sm") {
      return "w-[30rem]";
    } else if (size2 === "md") {
      return "w-[42rem]";
    } else if (size2 === "lg") {
      return "w-[56rem]";
    } else if (size2 === "xl") {
      return "w-[70rem]";
    } else if (size2 === "2xl") {
      return "w-[84rem]";
    } else if (size2 === "3xl") {
      return "w-[100rem]";
    } else {
      return "w-[56rem]";
    }
  };
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
    if (get(focusTrap)) {
      get(focusTrap).deactivate();
    }
    if (get(modalElement)) {
      document.body.removeChild(get(modalElement));
    }
  });
  legacy_pre_effect(
    () => (deep_read_state(show()), get(modalElement), get(focusTrap), FocusTrap),
    () => {
      if (show() && get(modalElement)) {
        document.body.appendChild(get(modalElement));
        set(focusTrap, createFocusTrap(get(modalElement), {
          allowOutsideClick: (e) => {
            return e.target.closest("[data-sonner-toast]") !== null;
          }
        }));
        get(focusTrap).activate();
        window.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";
      } else if (get(modalElement)) {
        get(focusTrap).deactivate();
        window.removeEventListener("keydown", handleKeyDown);
        document.body.removeChild(get(modalElement));
        document.body.style.overflow = "unset";
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
      template_effect(
        ($0) => {
          set_class(div, 1, `modal fixed top-0 right-0 left-0 bottom-0 bg-black/30 dark:bg-black/60 w-full h-screen max-h-[100dvh] ${containerClassName() ?? ""}  flex justify-center z-9999 overflow-y-auto overscroll-contain`, "svelte-1vr5p4p");
          set_class(div_1, 1, `m-auto max-w-full ${$0 ?? ""} ${size() !== "full" ? "mx-2" : ""} shadow-3xl min-h-fit scrollbar-hidden ${className() ?? ""} border border-white dark:border-gray-850`, "svelte-1vr5p4p");
        },
        [
          () => (deep_read_state(size()), untrack(() => sizeToWidth(size())))
        ]
      );
      transition(1, div_1, () => flyAndScale);
      event("mousedown", div_1, (e) => {
        e.stopPropagation();
      });
      transition(1, div, () => fade, () => ({ duration: 10 }));
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
  Modal as M
};
