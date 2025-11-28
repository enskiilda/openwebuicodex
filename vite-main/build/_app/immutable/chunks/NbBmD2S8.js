import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, g as getContext, n as createEventDispatcher, f as first_child, e as sibling, c as child, r as reset, t as template_effect, u as untrack, a as pop } from "./BxIY6ir7.js";
import { s as set_text } from "./cBADewWV.js";
import { f as from_html, c as comment, a as append } from "./CAbo1QWi.js";
import { s as slot } from "./CZEGIGsR.js";
import { i as init } from "./ByqEASoO.js";
import { p as prop } from "./BRmGPDvq.js";
import { a as store_get, s as setup_stores } from "./BvQ5O7-v.js";
import "./C2A39Ney.js";
import { M as Menu, a as Menu_trigger, b as Menu_content, c as Menu_item } from "./DQmZL-p0.js";
import { f as flyAndScale } from "./BuLNlPfL.js";
var root_5 = from_html(`<div class="flex items-center"> </div>`);
var root_6 = from_html(`<div class="flex items-center"> </div>`);
var root_7 = from_html(`<div class="flex items-center"> </div>`);
var root_4 = from_html(`<!> <!> <!>`, 1);
var root_1 = from_html(`<!> <!>`, 1);
function Dropdown($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let side = prop($$props, "side", 8, "bottom");
  let align = prop($$props, "align", 8, "start");
  let closeOnOutsideClick = prop($$props, "closeOnOutsideClick", 8, true);
  const dispatch = createEventDispatcher();
  init();
  Menu($$anchor, {
    closeFocus: false,
    get closeOnOutsideClick() {
      return closeOnOutsideClick();
    },
    onOpenChange: (state) => {
      dispatch("change", state);
    },
    typeahead: false,
    get open() {
      return show();
    },
    set open($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1();
      var node = first_child(fragment_1);
      Menu_trigger(node, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = comment();
          var node_1 = first_child(fragment_2);
          slot(node_1, $$props, "default", {}, null);
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      var node_2 = sibling(node, 2);
      slot(node_2, $$props, "content", {}, ($$anchor3) => {
        Menu_content($$anchor3, {
          class: "w-full max-w-[130px] rounded-lg p-1 border border-gray-900 z-50 bg-gray-850 text-white",
          sideOffset: 8,
          get side() {
            return side();
          },
          get align() {
            return align();
          },
          get transition() {
            return flyAndScale;
          },
          children: ($$anchor4, $$slotProps2) => {
            var fragment_4 = root_4();
            var node_3 = first_child(fragment_4);
            Menu_item(node_3, {
              class: "flex items-center px-3 py-2 text-sm  font-medium",
              children: ($$anchor5, $$slotProps3) => {
                var div = root_5();
                var text = child(div, true);
                reset(div);
                template_effect(($0) => set_text(text, $0), [() => ($i18n(), untrack(() => $i18n().t("Profile")))]);
                append($$anchor5, div);
              },
              $$slots: { default: true }
            });
            var node_4 = sibling(node_3, 2);
            Menu_item(node_4, {
              class: "flex items-center px-3 py-2 text-sm  font-medium",
              children: ($$anchor5, $$slotProps3) => {
                var div_1 = root_6();
                var text_1 = child(div_1, true);
                reset(div_1);
                template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("Profile")))]);
                append($$anchor5, div_1);
              },
              $$slots: { default: true }
            });
            var node_5 = sibling(node_4, 2);
            Menu_item(node_5, {
              class: "flex items-center px-3 py-2 text-sm  font-medium",
              children: ($$anchor5, $$slotProps3) => {
                var div_2 = root_7();
                var text_2 = child(div_2, true);
                reset(div_2);
                template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Profile")))]);
                append($$anchor5, div_2);
              },
              $$slots: { default: true }
            });
            append($$anchor4, fragment_4);
          },
          $$slots: { default: true }
        });
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
export {
  Dropdown as D
};
