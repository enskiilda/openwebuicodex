import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, n as createEventDispatcher, g as getContext, o as onMount, s as set, m as mutable_source, f as first_child, a as pop, b as get, c as child, i as deep_read_state, u as untrack, r as reset, e as sibling, t as template_effect, q as next } from "./BxIY6ir7.js";
import { e as event, s as set_text } from "./cBADewWV.js";
import { i as if_block } from "./BoSuMvtf.js";
import { h as html } from "./tLAl1VVg.js";
import { c as comment, a as append, f as from_html, t as text } from "./CAbo1QWi.js";
import { s as set_class, a as set_attribute } from "./kXiCYuyj.js";
import { t as transition } from "./B3nUhwYU.js";
import { i as init } from "./ByqEASoO.js";
import { p as prop } from "./BRmGPDvq.js";
import { s as setup_stores, a as store_get } from "./BvQ5O7-v.js";
import { f as fade } from "./BNZI2i79.js";
import purify from "./bQFTtKkZ.js";
import { m as marked } from "./Bh-hrM1w.js";
import { b as WEBUI_BASE_URL } from "./DQ9UxF7k.js";
var root_11 = from_html(`<div class="flex md:hidden group w-fit md:items-center"><a class="text-gray-700 dark:text-white text-xs font-semibold underline" target="_blank"> </a> <div class=" ml-1 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-white"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clip-rule="evenodd"></path></svg></div></div>`);
var root_12 = from_html(`<div class="hidden md:flex group w-fit md:items-center"><a class="text-gray-700 dark:text-white text-xs font-semibold underline" href="/" target="_blank"> </a> <div class=" ml-1 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-white"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clip-rule="evenodd"></path></svg></div></div>`);
var root_2 = from_html(`<div><div class=" flex flex-col md:flex-row md:items-center flex-1 text-sm w-fit gap-1.5"><div class="flex justify-between self-start"><div><!></div> <!></div> <div class="flex-1 text-xs text-gray-700 dark:text-white max-h-60 overflow-y-auto"><!></div></div> <!> <div class="flex self-start"><button class="  -mt-1 -mb-2 -translate-y-[1px] ml-1.5 mr-1 text-gray-400 dark:hover:text-white">&times;</button></div></div>`);
function Banner($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const dispatch = createEventDispatcher();
  const i18n = getContext("i18n");
  let banner = prop($$props, "banner", 24, () => ({
    id: "",
    type: "info",
    title: "",
    content: "",
    url: "",
    dismissible: true,
    timestamp: Math.floor(Date.now() / 1e3)
  }));
  let className = prop($$props, "className", 8, "mx-2 px-2 rounded-lg");
  let dismissed = prop($$props, "dismissed", 12, false);
  let mounted = mutable_source(false);
  const classNames = {
    info: "bg-blue-500/20 text-blue-700 dark:text-blue-200 ",
    success: "bg-green-500/20 text-green-700 dark:text-green-200",
    warning: "bg-yellow-500/20 text-yellow-700 dark:text-yellow-200",
    error: "bg-red-500/20 text-red-700 dark:text-red-200"
  };
  const dismiss = (id) => {
    dismissed(true);
    dispatch("dismiss", id);
  };
  onMount(() => {
    set(mounted, true);
    console.log("Banner mounted:", banner());
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_7 = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      {
        var consequent_6 = ($$anchor3) => {
          var div = root_2();
          var div_1 = child(div);
          var div_2 = child(div_1);
          var div_3 = child(div_2);
          var node_2 = child(div_3);
          {
            var consequent = ($$anchor4) => {
              var text$1 = text();
              template_effect(($0) => set_text(text$1, $0), [() => ($i18n(), untrack(() => $i18n().t("Info")))]);
              append($$anchor4, text$1);
            };
            var alternate_3 = ($$anchor4) => {
              var fragment_3 = comment();
              var node_3 = first_child(fragment_3);
              {
                var consequent_1 = ($$anchor5) => {
                  var text_1 = text();
                  template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("Warning")))]);
                  append($$anchor5, text_1);
                };
                var alternate_2 = ($$anchor5) => {
                  var fragment_5 = comment();
                  var node_4 = first_child(fragment_5);
                  {
                    var consequent_2 = ($$anchor6) => {
                      var text_2 = text();
                      template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Error")))]);
                      append($$anchor6, text_2);
                    };
                    var alternate_1 = ($$anchor6) => {
                      var fragment_7 = comment();
                      var node_5 = first_child(fragment_7);
                      {
                        var consequent_3 = ($$anchor7) => {
                          var text_3 = text();
                          template_effect(($0) => set_text(text_3, $0), [() => ($i18n(), untrack(() => $i18n().t("Success")))]);
                          append($$anchor7, text_3);
                        };
                        var alternate = ($$anchor7) => {
                          var text_4 = text();
                          template_effect(() => set_text(text_4, (deep_read_state(banner()), untrack(() => banner().type))));
                          append($$anchor7, text_4);
                        };
                        if_block(
                          node_5,
                          ($$render) => {
                            if (deep_read_state(banner()), untrack(() => banner().type.toLowerCase() === "success")) $$render(consequent_3);
                            else $$render(alternate, false);
                          },
                          true
                        );
                      }
                      append($$anchor6, fragment_7);
                    };
                    if_block(
                      node_4,
                      ($$render) => {
                        if (deep_read_state(banner()), untrack(() => banner().type.toLowerCase() === "error")) $$render(consequent_2);
                        else $$render(alternate_1, false);
                      },
                      true
                    );
                  }
                  append($$anchor5, fragment_5);
                };
                if_block(
                  node_3,
                  ($$render) => {
                    if (deep_read_state(banner()), untrack(() => banner().type.toLowerCase() === "warning")) $$render(consequent_1);
                    else $$render(alternate_2, false);
                  },
                  true
                );
              }
              append($$anchor4, fragment_3);
            };
            if_block(node_2, ($$render) => {
              if (deep_read_state(banner()), untrack(() => banner().type.toLowerCase() === "info")) $$render(consequent);
              else $$render(alternate_3, false);
            });
          }
          reset(div_3);
          var node_6 = sibling(div_3, 2);
          {
            var consequent_4 = ($$anchor4) => {
              var div_4 = root_11();
              var a = child(div_4);
              var text_5 = child(a, true);
              reset(a);
              next(2);
              reset(div_4);
              template_effect(
                ($0) => {
                  set_attribute(a, "href", `${WEBUI_BASE_URL}/assets/files/whitepaper.pdf`);
                  set_text(text_5, $0);
                },
                [() => ($i18n(), untrack(() => $i18n().t("Learn More")))]
              );
              append($$anchor4, div_4);
            };
            if_block(node_6, ($$render) => {
              if (deep_read_state(banner()), untrack(() => banner().url)) $$render(consequent_4);
            });
          }
          reset(div_2);
          var div_5 = sibling(div_2, 2);
          var node_7 = child(div_5);
          html(node_7, () => (deep_read_state(marked), deep_read_state(purify), deep_read_state(banner()), untrack(() => {
            var _a;
            return marked.parse(purify.sanitize((((_a = banner()) == null ? void 0 : _a.content) ?? "").replace(/\n/g, "<br>")));
          })));
          reset(div_5);
          reset(div_1);
          var node_8 = sibling(div_1, 2);
          {
            var consequent_5 = ($$anchor4) => {
              var div_6 = root_12();
              var a_1 = child(div_6);
              var text_6 = child(a_1, true);
              reset(a_1);
              next(2);
              reset(div_6);
              template_effect(($0) => set_text(text_6, $0), [() => ($i18n(), untrack(() => $i18n().t("Learn More")))]);
              append($$anchor4, div_6);
            };
            if_block(node_8, ($$render) => {
              if (deep_read_state(banner()), untrack(() => banner().url)) $$render(consequent_5);
            });
          }
          var div_7 = sibling(node_8, 2);
          var button = child(div_7);
          reset(div_7);
          reset(div);
          template_effect(
            ($0) => {
              set_class(div, 1, `${className() ?? ""} top-0 left-0 right-0 py-1 flex justify-center items-center relative border border-transparent text-gray-800 dark:text-gary-100 bg-transparent backdrop-blur-xl z-30`);
              set_class(div_3, 1, ` text-xs font-semibold ${(deep_read_state(banner()), untrack(() => classNames[banner().type] ?? classNames["info"])) ?? ""}  w-fit px-2 rounded-sm uppercase line-clamp-1 mr-0.5`);
              set_attribute(button, "aria-label", $0);
            },
            [() => ($i18n(), untrack(() => $i18n().t("Close Banner")))]
          );
          event("click", button, () => {
            dismiss(banner().id);
          });
          transition(3, div, () => fade, () => ({ delay: 100, duration: 300 }));
          append($$anchor3, div);
        };
        if_block(node_1, ($$render) => {
          if (get(mounted)) $$render(consequent_6);
        });
      }
      append($$anchor2, fragment_1);
    };
    if_block(node, ($$render) => {
      if (!dismissed()) $$render(consequent_7);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  Banner as B
};
