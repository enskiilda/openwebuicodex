import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, g as getContext, n as createEventDispatcher, c as child, r as reset, e as sibling, t as template_effect, u as untrack, i as deep_read_state, a as pop, b as get, m as mutable_source, s as set } from "./BxIY6ir7.js";
import { s as set_text, e as event } from "./cBADewWV.js";
import { f as from_html, a as append } from "./CAbo1QWi.js";
import { a as set_attribute, s as set_class, r as remove_input_defaults } from "./kXiCYuyj.js";
import { p as preventDefault } from "./CGgk3ROl.js";
import { i as init } from "./ByqEASoO.js";
import { p as prop } from "./BRmGPDvq.js";
import { a as store_get, s as setup_stores } from "./BvQ5O7-v.js";
import { t as toast } from "./BccDN__m.js";
import { M as Modal } from "./DF6V1elH.js";
import { X as XMark } from "./CUUSX84-.js";
import { i as if_block } from "./BoSuMvtf.js";
import { b as bind_value } from "./DVLuwGai.js";
import { S as Spinner } from "./CtnI4RVL.js";
import { e as extractFrontmatter } from "./Bh-hrM1w.js";
var root_1$1 = from_html(`<div><div class=" flex justify-between dark:text-gray-300 px-5 pt-4 pb-2"><div class=" text-lg font-medium self-center"> </div> <button class="self-center"><!></button></div> <div class="flex flex-col md:flex-row w-full px-5 pb-4 md:space-x-4 dark:text-gray-200"><div class=" flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div class="px-1 text-sm"><div class="my-2"> </div> <div class="my-2"> </div> <hr class="dark:border-gray-800 my-3"/> <div class="my-2"> <a target="_blank" class="underline text-blue-400 hover:text-blue-300"> </a></div></div> <div class="flex justify-end pt-3 text-sm font-medium"><button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="submit"> </button></div></form></div></div></div>`);
function ManifestModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  createEventDispatcher();
  let show = prop($$props, "show", 12, false);
  let manifest = prop($$props, "manifest", 24, () => ({}));
  init();
  Modal($$anchor, {
    size: "sm",
    get show() {
      return show();
    },
    set show($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var div = root_1$1();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var text = child(div_2, true);
      reset(div_2);
      var button = sibling(div_2, 2);
      var node = child(button);
      XMark(node, { className: "size-5" });
      reset(button);
      reset(div_1);
      var div_3 = sibling(div_1, 2);
      var div_4 = child(div_3);
      var form = child(div_4);
      var div_5 = child(form);
      var div_6 = child(div_5);
      var text_1 = child(div_6, true);
      reset(div_6);
      var div_7 = sibling(div_6, 2);
      var text_2 = child(div_7, true);
      reset(div_7);
      var div_8 = sibling(div_7, 4);
      var text_3 = child(div_8);
      var a = sibling(text_3);
      var text_4 = child(a, true);
      reset(a);
      reset(div_8);
      reset(div_5);
      var div_9 = sibling(div_5, 2);
      var button_1 = child(div_9);
      var text_5 = child(button_1, true);
      reset(button_1);
      reset(div_9);
      reset(form);
      reset(div_4);
      reset(div_3);
      reset(div);
      template_effect(
        ($0, $1, $2, $3, $4) => {
          set_text(text, $0);
          set_text(text_1, $1);
          set_text(text_2, $2);
          set_text(text_3, `${$3 ?? ""} `);
          set_attribute(a, "href", (deep_read_state(manifest()), untrack(() => manifest().funding_url)));
          set_text(text_4, (deep_read_state(manifest()), untrack(() => manifest().funding_url)));
          set_text(text_5, $4);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Show your support!"))),
          () => ($i18n(), untrack(() => $i18n().t("The developers behind this plugin are passionate volunteers from the community. If you find this plugin helpful, please consider contributing to its development."))),
          () => ($i18n(), untrack(() => $i18n().t("Your entire contribution will go directly to the plugin developer; Open WebUI does not take any percentage. However, the chosen funding platform might have its own fees."))),
          () => ($i18n(), untrack(() => $i18n().t("Support this plugin:"))),
          () => ($i18n(), untrack(() => $i18n().t("Done")))
        ]
      );
      event("click", button, () => {
        show(false);
      });
      event("submit", form, preventDefault(() => {
        show(false);
      }));
      append($$anchor2, div);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root_2 = from_html(`<div class="ml-2 self-center"><!></div>`);
var root_1 = from_html(`<div><div class=" flex justify-between dark:text-gray-300 px-5 pt-4 pb-2"><div class=" text-lg font-medium self-center"> </div> <button class="self-center"><!></button></div> <div class="flex flex-col md:flex-row w-full px-4 pb-3 md:space-x-4 dark:text-gray-200"><div class=" flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div class="px-1"><div class="flex flex-col w-full"><div class=" mb-1 text-xs text-gray-500"> </div> <div class="flex-1"><input class="w-full text-sm bg-transparent disabled:text-gray-500 dark:disabled:text-gray-500 outline-hidden" type="url" required/></div></div></div> <div class="flex justify-end pt-3 text-sm font-medium"><button type="submit"> <!></button></div></form></div></div></div>`);
function ImportModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let onImport = prop($$props, "onImport", 8, (e) => {
  });
  prop($$props, "onClose", 8, () => {
  });
  let loadUrlHandler = prop($$props, "loadUrlHandler", 8, () => {
  });
  let successMessage = prop($$props, "successMessage", 12, "");
  let loading = mutable_source(false);
  let url = mutable_source("");
  const submitHandler = async () => {
    set(loading, true);
    if (!get(url)) {
      toast.error($i18n().t("Please enter a valid URL"));
      set(loading, false);
      return;
    }
    const res = await loadUrlHandler()(get(url)).catch((err) => {
      toast.error(`${err}`);
      set(loading, false);
      return null;
    });
    if (res) {
      if (!successMessage()) {
        successMessage($i18n().t("Function imported successfully"));
      }
      toast.success(successMessage());
      let func = res;
      func.id = func.id || func.name.replace(/\s+/g, "_").toLowerCase();
      const frontmatter = extractFrontmatter(res.content);
      if (frontmatter == null ? void 0 : frontmatter.title) {
        func.name = frontmatter.title;
      }
      func.meta = {
        ...func.meta ?? {},
        description: (frontmatter == null ? void 0 : frontmatter.description) ?? func.name
      };
      onImport()(func);
      show(false);
    }
  };
  init();
  Modal($$anchor, {
    size: "sm",
    get show() {
      return show();
    },
    set show($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var div = root_1();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var text = child(div_2, true);
      reset(div_2);
      var button = sibling(div_2, 2);
      var node = child(button);
      XMark(node, { className: "size-5" });
      reset(button);
      reset(div_1);
      var div_3 = sibling(div_1, 2);
      var div_4 = child(div_3);
      var form = child(div_4);
      var div_5 = child(form);
      var div_6 = child(div_5);
      var div_7 = child(div_6);
      var text_1 = child(div_7, true);
      reset(div_7);
      var div_8 = sibling(div_7, 2);
      var input = child(div_8);
      remove_input_defaults(input);
      reset(div_8);
      reset(div_6);
      reset(div_5);
      var div_9 = sibling(div_5, 2);
      var button_1 = child(div_9);
      var text_2 = child(button_1);
      var node_1 = sibling(text_2);
      {
        var consequent = ($$anchor3) => {
          var div_10 = root_2();
          var node_2 = child(div_10);
          Spinner(node_2, {});
          reset(div_10);
          append($$anchor3, div_10);
        };
        if_block(node_1, ($$render) => {
          if (get(loading)) $$render(consequent);
        });
      }
      reset(button_1);
      reset(div_9);
      reset(form);
      reset(div_4);
      reset(div_3);
      reset(div);
      template_effect(
        ($0, $1, $2, $3) => {
          set_text(text, $0);
          set_text(text_1, $1);
          set_attribute(input, "placeholder", $2);
          set_class(button_1, 1, `px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center ${get(loading) ? " cursor-not-allowed" : ""}`);
          button_1.disabled = get(loading);
          set_text(text_2, `${$3 ?? ""} `);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Import"))),
          () => ($i18n(), untrack(() => $i18n().t("URL"))),
          () => ($i18n(), untrack(() => $i18n().t("Enter the URL to import"))),
          () => ($i18n(), untrack(() => $i18n().t("Import")))
        ]
      );
      event("click", button, () => {
        show(false);
      });
      bind_value(input, () => get(url), ($$value) => set(url, $$value));
      event("submit", form, preventDefault(() => {
        submitHandler();
      }));
      append($$anchor2, div);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
export {
  ImportModal as I,
  ManifestModal as M
};
