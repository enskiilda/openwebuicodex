import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, g as getContext, c as child, r as reset, e as sibling, t as template_effect, u as untrack, a as pop, l as legacy_pre_effect, j as legacy_pre_effect_reset, f as first_child, b as get, i as deep_read_state, m as mutable_source, s as set } from "./BxIY6ir7.js";
import { f as from_html, a as append, t as text, c as comment } from "./CAbo1QWi.js";
import { i as if_block } from "./BoSuMvtf.js";
import { s as set_class } from "./kXiCYuyj.js";
import { b as bind_this } from "./D16JuV5t.js";
import { p as prop } from "./BRmGPDvq.js";
import { a as store_get, s as setup_stores } from "./BvQ5O7-v.js";
import { s as showSidebar } from "./2Yg1sHDo.js";
import { s as set_text } from "./cBADewWV.js";
import { s as slot } from "./CZEGIGsR.js";
import { i as init } from "./ByqEASoO.js";
var root_3 = from_html(`<div class="px-2 mt-2 text-center text-gray-700 dark:text-gray-200 w-full"><!></div>`);
var root = from_html(`<div class="px-3"><div class="text-center dark:text-white text-2xl font-medium z-50"><!></div> <!></div>`);
function AddFilesPlaceholder($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let title = prop($$props, "title", 8, "");
  let content = prop($$props, "content", 8, "");
  const i18n = getContext("i18n");
  init();
  var div = root();
  var div_1 = child(div);
  var node = child(div_1);
  {
    var consequent = ($$anchor2) => {
      var text$1 = text();
      template_effect(() => set_text(text$1, title()));
      append($$anchor2, text$1);
    };
    var alternate = ($$anchor2) => {
      var text_1 = text();
      template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("Add Files")))]);
      append($$anchor2, text_1);
    };
    if_block(node, ($$render) => {
      if (title()) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  reset(div_1);
  var node_1 = sibling(div_1, 2);
  slot(node_1, $$props, "default", {}, ($$anchor2) => {
    var div_2 = root_3();
    var node_2 = child(div_2);
    {
      var consequent_1 = ($$anchor3) => {
        var text_2 = text();
        template_effect(() => set_text(text_2, content()));
        append($$anchor3, text_2);
      };
      var alternate_1 = ($$anchor3) => {
        var text_3 = text();
        template_effect(($0) => set_text(text_3, $0), [
          () => ($i18n(), untrack(() => $i18n().t("Drop any files here to upload")))
        ]);
        append($$anchor3, text_3);
      };
      if_block(node_2, ($$render) => {
        if (content()) $$render(consequent_1);
        else $$render(alternate_1, false);
      });
    }
    reset(div_2);
    append($$anchor2, div_2);
  });
  reset(div);
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root_1 = from_html(`<div id="dropzone" role="region" aria-label="Drag and Drop Container"><div class="absolute w-full h-full backdrop-blur-sm bg-gray-100/50 dark:bg-gray-900/80 flex justify-center"><div class="m-auto flex flex-col justify-center"><div class="max-w-md"><!></div></div></div></div>`);
function FilesOverlay($$anchor, $$props) {
  push($$props, false);
  const $showSidebar = () => store_get(showSidebar, "$showSidebar", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let show = prop($$props, "show", 8, false);
  let overlayElement = mutable_source(null);
  legacy_pre_effect(() => (deep_read_state(show()), get(overlayElement)), () => {
    if (show() && get(overlayElement)) {
      document.body.appendChild(get(overlayElement));
      document.body.style.overflow = "hidden";
    } else if (get(overlayElement)) {
      document.body.removeChild(get(overlayElement));
      document.body.style.overflow = "unset";
    }
  });
  legacy_pre_effect_reset();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var div = root_1();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var div_3 = child(div_2);
      var node_1 = child(div_3);
      AddFilesPlaceholder(node_1, {});
      reset(div_3);
      reset(div_2);
      reset(div_1);
      reset(div);
      bind_this(div, ($$value) => set(overlayElement, $$value), () => get(overlayElement));
      template_effect(() => set_class(div, 1, `fixed ${$showSidebar() ? "left-0 md:left-[260px] md:w-[calc(100%-260px)]" : "left-0"}  fixed top-0 right-0 bottom-0 w-full h-full flex z-9999 touch-none pointer-events-none`));
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (show()) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  FilesOverlay as F
};
