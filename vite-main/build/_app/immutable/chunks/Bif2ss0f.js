import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, g as getContext, f as first_child, c as child, r as reset, e as sibling, t as template_effect, q as next, i as deep_read_state, b as get, u as untrack, h as derived_safe_equal, a as pop } from "./BxIY6ir7.js";
import { s as set_text, e as event } from "./cBADewWV.js";
import { f as from_html, a as append, t as text, c as comment } from "./CAbo1QWi.js";
import { e as each, i as index } from "./7_HZMPNF.js";
import { i as if_block } from "./BoSuMvtf.js";
import { s as slot } from "./CZEGIGsR.js";
import { i as init } from "./ByqEASoO.js";
import { p as prop } from "./BRmGPDvq.js";
import { a as store_get, s as setup_stores } from "./BvQ5O7-v.js";
import "./C2A39Ney.js";
import { S as Select, a as Select_trigger, b as Select_content, c as Select_item } from "./ConyMNx9.js";
import { C as ChevronDown } from "./CUFupyOK.js";
import { C as Check } from "./BH2Jmq_7.js";
import { X as XMark } from "./CUUSX84-.js";
var root_5 = from_html(`<button class="outline-none"><!></button>`);
var root_2 = from_html(`<div class="inline-flex h-input px-0.5 w-full outline-hidden bg-transparent truncate placeholder-gray-400 focus:outline-hidden capitalize"><!></div> <!>`, 1);
var root_11 = from_html(`<div class="ml-auto"><!></div>`);
var root_10 = from_html(` <!>`, 1);
var root_1 = from_html(`<!> <!>`, 1);
function TagSelector($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let value = prop($$props, "value", 12, "");
  let placeholder = prop($$props, "placeholder", 24, () => $i18n().t("Tag"));
  let onChange = prop($$props, "onChange", 8, () => {
  });
  let items = prop($$props, "items", 24, () => []);
  init();
  {
    let $0 = derived_safe_equal(() => (deep_read_state(value()), deep_read_state(items()), untrack(() => value() ? items().find((item) => item.value === value()) : null)));
    Select($$anchor, {
      get selected() {
        return get($0);
      },
      get items() {
        return items();
      },
      onSelectedChange: (selectedItem) => {
        value(selectedItem.value);
        onChange()(value());
      },
      children: ($$anchor2, $$slotProps) => {
        var fragment_1 = root_1();
        var node = first_child(fragment_1);
        Select_trigger(node, {
          class: "relative w-full flex items-center gap-0.5 px-2.5 py-1.5 rounded-xl ",
          get "aria-label"() {
            return placeholder();
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_2 = root_2();
            var div = first_child(fragment_2);
            var node_1 = child(div);
            {
              var consequent = ($$anchor4) => {
                var text$1 = text();
                template_effect(() => set_text(text$1, value()));
                append($$anchor4, text$1);
              };
              var alternate = ($$anchor4) => {
                var text_1 = text();
                template_effect(() => set_text(text_1, placeholder()));
                append($$anchor4, text_1);
              };
              if_block(node_1, ($$render) => {
                if (value()) $$render(consequent);
                else $$render(alternate, false);
              });
            }
            reset(div);
            var node_2 = sibling(div, 2);
            {
              var consequent_1 = ($$anchor4) => {
                var button = root_5();
                var node_3 = child(button);
                XMark(node_3, { className: "size-3.5" });
                reset(button);
                event("click", button, () => {
                  value("");
                  onChange()(value());
                });
                append($$anchor4, button);
              };
              var alternate_1 = ($$anchor4) => {
                ChevronDown($$anchor4, { className: " size-3.5", strokeWidth: "2.5" });
              };
              if_block(node_2, ($$render) => {
                if (value()) $$render(consequent_1);
                else $$render(alternate_1, false);
              });
            }
            append($$anchor3, fragment_2);
          },
          $$slots: { default: true }
        });
        var node_4 = sibling(node, 2);
        Select_content(node_4, {
          class: "rounded-2xl min-w-[170px] p-1 border border-gray-100  dark:border-gray-800 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg",
          sameWidth: false,
          align: "start",
          children: ($$anchor3, $$slotProps2) => {
            var fragment_6 = comment();
            var node_5 = first_child(fragment_6);
            slot(node_5, $$props, "default", {}, ($$anchor4) => {
              var fragment_7 = comment();
              var node_6 = first_child(fragment_7);
              each(node_6, 1, items, index, ($$anchor5, item) => {
                Select_item($$anchor5, {
                  class: "flex  gap-2  items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl capitalize",
                  get value() {
                    return get(item), untrack(() => get(item).value);
                  },
                  get label() {
                    return get(item), untrack(() => get(item).label);
                  },
                  children: ($$anchor6, $$slotProps3) => {
                    next();
                    var fragment_9 = root_10();
                    var text_2 = first_child(fragment_9);
                    var node_7 = sibling(text_2);
                    {
                      var consequent_2 = ($$anchor7) => {
                        var div_1 = root_11();
                        var node_8 = child(div_1);
                        Check(node_8, {});
                        reset(div_1);
                        append($$anchor7, div_1);
                      };
                      if_block(node_7, ($$render) => {
                        if (deep_read_state(value()), get(item), untrack(() => value() === get(item).value)) $$render(consequent_2);
                      });
                    }
                    template_effect(($02) => set_text(text_2, `${$02 ?? ""} `), [
                      () => (get(item), untrack(() => get(item).label.length > 32 ? `${get(item).label.slice(0, 32)}...` : get(item).label))
                    ]);
                    append($$anchor6, fragment_9);
                  },
                  $$slots: { default: true }
                });
              });
              append($$anchor4, fragment_7);
            });
            append($$anchor3, fragment_6);
          },
          $$slots: { default: true }
        });
        append($$anchor2, fragment_1);
      },
      $$slots: { default: true }
    });
  }
  pop();
  $$cleanup();
}
export {
  TagSelector as T
};
