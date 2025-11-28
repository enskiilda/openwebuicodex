import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, g as getContext, n as createEventDispatcher, o as onMount, ay as onDestroy, l as legacy_pre_effect, j as legacy_pre_effect_reset, f as first_child, a as pop, i as deep_read_state, b as get, s as set, m as mutable_source, k as tick, c as child, r as reset, e as sibling, h as derived_safe_equal, t as template_effect, u as untrack, aG as remove_textarea_child } from "./BxIY6ir7.js";
import { s as set_text, e as event } from "./cBADewWV.js";
import { i as if_block } from "./BoSuMvtf.js";
import { h as html } from "./tLAl1VVg.js";
import { s as slot } from "./CZEGIGsR.js";
import { c as comment, a as append, f as from_html, t as text } from "./CAbo1QWi.js";
import { a as set_attribute } from "./kXiCYuyj.js";
import { t as transition } from "./B3nUhwYU.js";
import { b as bind_value } from "./DVLuwGai.js";
import { b as bind_this } from "./D16JuV5t.js";
import { i as init } from "./ByqEASoO.js";
import { p as prop } from "./BRmGPDvq.js";
import { s as setup_stores, a as store_get } from "./BvQ5O7-v.js";
import purify from "./bQFTtKkZ.js";
import { F as FocusTrap, a as createFocusTrap } from "./6_T3Ulvi.js";
import { f as fade } from "./BNZI2i79.js";
import { f as flyAndScale } from "./BuLNlPfL.js";
import { m as marked } from "./Bh-hrM1w.js";
var root_7 = from_html(`<textarea class="w-full mt-2 rounded-lg px-4 py-2 text-sm dark:text-gray-300 dark:bg-gray-900 outline-hidden resize-none" rows="3" required></textarea>`);
var root_4 = from_html(`<div class=" text-sm text-gray-500 flex-1"><!> <!></div>`);
var root_1 = from_html(`<div class=" fixed top-0 right-0 left-0 bottom-0 bg-black/60 w-full h-screen max-h-[100dvh] flex justify-center z-99999999 overflow-hidden overscroll-contain"><div class=" m-auto max-w-full w-[32rem] mx-2 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm rounded-4xl max-h-[100dvh] shadow-3xl border border-white dark:border-gray-900"><div class="px-[1.75rem] py-6 flex flex-col"><div class=" text-lg font-medium dark:text-gray-200 mb-2.5"><!></div> <!> <div class="mt-6 flex justify-between gap-1.5"><button class="text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-white font-medium w-full py-2 rounded-3xl transition" type="button"> </button> <button class="text-sm bg-gray-900 hover:bg-gray-850 text-gray-100 dark:bg-gray-100 dark:hover:bg-white dark:text-gray-800 font-medium w-full py-2 rounded-3xl transition" type="button"> </button></div></div></div></div>`);
function ConfirmDialog($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  const dispatch = createEventDispatcher();
  let title = prop($$props, "title", 8, "");
  let message = prop($$props, "message", 8, "");
  let cancelLabel = prop($$props, "cancelLabel", 24, () => $i18n().t("Cancel"));
  let confirmLabel = prop($$props, "confirmLabel", 24, () => $i18n().t("Confirm"));
  let onConfirm = prop($$props, "onConfirm", 8, () => {
  });
  let input = prop($$props, "input", 8, false);
  let inputPlaceholder = prop($$props, "inputPlaceholder", 8, "");
  let inputValue = prop($$props, "inputValue", 12, "");
  let show = prop($$props, "show", 12, false);
  let modalElement = mutable_source(null);
  let mounted = mutable_source(false);
  let focusTrap = mutable_source(null);
  const init$1 = () => {
    inputValue("");
  };
  const handleKeyDown = (event2) => {
    if (event2.key === "Escape") {
      console.log("Escape");
      show(false);
    }
    if (event2.key === "Enter") {
      console.log("Enter");
      confirmHandler();
    }
  };
  const confirmHandler = async () => {
    show(false);
    await tick();
    await onConfirm()();
    dispatch("confirm", inputValue());
  };
  onMount(() => {
    set(mounted, true);
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
  legacy_pre_effect(() => deep_read_state(show()), () => {
    if (show()) {
      init$1();
    }
  });
  legacy_pre_effect(
    () => (get(mounted), deep_read_state(show()), get(modalElement), get(focusTrap), FocusTrap),
    () => {
      if (get(mounted)) {
        if (show() && get(modalElement)) {
          document.body.appendChild(get(modalElement));
          set(focusTrap, createFocusTrap(get(modalElement)));
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
    }
  );
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_3 = ($$anchor2) => {
      var div = root_1();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var div_3 = child(div_2);
      var node_1 = child(div_3);
      {
        var consequent = ($$anchor3) => {
          var text$1 = text();
          template_effect(() => set_text(text$1, title()));
          append($$anchor3, text$1);
        };
        var alternate = ($$anchor3) => {
          var text_1 = text();
          template_effect(($0) => set_text(text_1, $0), [
            () => ($i18n(), untrack(() => $i18n().t("Confirm your action")))
          ]);
          append($$anchor3, text_1);
        };
        if_block(node_1, ($$render) => {
          if (title() !== "") $$render(consequent);
          else $$render(alternate, false);
        });
      }
      reset(div_3);
      var node_2 = sibling(div_3, 2);
      slot(node_2, $$props, "default", {}, ($$anchor3) => {
        var div_4 = root_4();
        var node_3 = child(div_4);
        {
          var consequent_1 = ($$anchor4) => {
            const html$1 = derived_safe_equal(() => (deep_read_state(purify), deep_read_state(marked), deep_read_state(message()), untrack(() => purify.sanitize(marked.parse(message())))));
            var fragment_3 = comment();
            var node_4 = first_child(fragment_3);
            html(node_4, () => get(html$1));
            append($$anchor4, fragment_3);
          };
          var alternate_1 = ($$anchor4) => {
            var text_2 = text();
            template_effect(($0) => set_text(text_2, $0), [
              () => ($i18n(), untrack(() => $i18n().t("This action cannot be undone. Do you wish to continue?")))
            ]);
            append($$anchor4, text_2);
          };
          if_block(node_3, ($$render) => {
            if (message() !== "") $$render(consequent_1);
            else $$render(alternate_1, false);
          });
        }
        var node_5 = sibling(node_3, 2);
        {
          var consequent_2 = ($$anchor4) => {
            var textarea = root_7();
            remove_textarea_child(textarea);
            template_effect(($0) => set_attribute(textarea, "placeholder", $0), [
              () => (deep_read_state(inputPlaceholder()), $i18n(), untrack(() => inputPlaceholder() ? inputPlaceholder() : $i18n().t("Enter your message")))
            ]);
            bind_value(textarea, inputValue);
            append($$anchor4, textarea);
          };
          if_block(node_5, ($$render) => {
            if (input()) $$render(consequent_2);
          });
        }
        reset(div_4);
        append($$anchor3, div_4);
      });
      var div_5 = sibling(node_2, 2);
      var button = child(div_5);
      var text_3 = child(button, true);
      reset(button);
      var button_1 = sibling(button, 2);
      var text_4 = child(button_1, true);
      reset(button_1);
      reset(div_5);
      reset(div_2);
      reset(div_1);
      reset(div);
      bind_this(div, ($$value) => set(modalElement, $$value), () => get(modalElement));
      template_effect(() => {
        set_text(text_3, cancelLabel());
        set_text(text_4, confirmLabel());
      });
      event("click", button, () => {
        show(false);
        dispatch("cancel");
      });
      event("click", button_1, () => {
        confirmHandler();
      });
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
      if (show()) $$render(consequent_3);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  ConfirmDialog as C
};
