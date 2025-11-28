import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, n as createEventDispatcher, g as getContext, c as child, b as get, m as mutable_source, e as sibling, r as reset, t as template_effect, u as untrack, s as set, a as pop, i as deep_read_state, f as first_child, h as derived_safe_equal } from "./BxIY6ir7.js";
import { f as from_html, a as append, c as comment } from "./CAbo1QWi.js";
import { i as init } from "./ByqEASoO.js";
import { p as prop } from "./BRmGPDvq.js";
import { a as store_get, s as setup_stores } from "./BvQ5O7-v.js";
import { e as event, s as set_text } from "./cBADewWV.js";
import { e as each, i as index } from "./7_HZMPNF.js";
import { i as if_block } from "./BoSuMvtf.js";
import { s as set_class, a as set_attribute, r as remove_input_defaults } from "./kXiCYuyj.js";
import { b as bind_value } from "./DVLuwGai.js";
import "./2Yg1sHDo.js";
import { t as toast } from "./BccDN__m.js";
import { T as Tooltip } from "./BHXWufQb.js";
import { X as XMark } from "./CUUSX84-.js";
var root_3 = from_html(`<option></option>`);
var root_2$1 = from_html(`<datalist id="tagOptions"></datalist>`);
var root_1 = from_html(`<div class="flex items-center"><input class=" px-2 cursor-pointer self-center text-xs h-fit bg-transparent outline-hidden line-clamp-1 w-[6.5rem]" list="tagOptions"/> <!> <button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" stroke-width="2" aria-hidden="true" class="w-3 h-3"><path fill-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd"></path></svg></button></div>`);
var root_4 = from_html(`<span class="text-xs pl-2 self-center"> </span>`);
var root$1 = from_html(`<div><!> <button class=" cursor-pointer self-center p-0.5 flex h-fit items-center rounded-full transition border dark:border-gray-600 border-dashed" type="button"><div class=" m-auto self-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" fill="currentColor"><path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"></path></svg></div></button> <!></div>`);
function TagInput($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const dispatch = createEventDispatcher();
  const i18n = getContext("i18n");
  let label = prop($$props, "label", 8, "");
  let suggestionTags = prop($$props, "suggestionTags", 24, () => []);
  let showTagInput = mutable_source(false);
  let tagName = mutable_source("");
  const addTagHandler = async () => {
    set(tagName, get(tagName).trim());
    if (get(tagName) !== "") {
      dispatch("add", get(tagName));
      set(tagName, "");
      set(showTagInput, false);
    } else {
      toast.error($i18n().t(`Invalid Tag`));
    }
  };
  init();
  var div = root$1();
  var node = child(div);
  {
    var consequent_1 = ($$anchor2) => {
      var div_1 = root_1();
      var input = child(div_1);
      remove_input_defaults(input);
      var node_1 = sibling(input, 2);
      {
        var consequent = ($$anchor3) => {
          var datalist = root_2$1();
          each(datalist, 5, suggestionTags, index, ($$anchor4, tag) => {
            var option = root_3();
            var option_value = {};
            template_effect(() => {
              if (option_value !== (option_value = (get(tag), untrack(() => get(tag).name)))) {
                option.value = (option.__value = (get(tag), untrack(() => get(tag).name))) ?? "";
              }
            });
            append($$anchor4, option);
          });
          reset(datalist);
          append($$anchor3, datalist);
        };
        if_block(node_1, ($$render) => {
          if (deep_read_state(suggestionTags()), untrack(() => suggestionTags().length > 0)) $$render(consequent);
        });
      }
      var button = sibling(node_1, 2);
      reset(div_1);
      template_effect(
        ($0, $1, $2) => {
          set_attribute(input, "placeholder", $0);
          set_attribute(input, "aria-label", $1);
          set_attribute(button, "aria-label", $2);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Add a tag"))),
          () => ($i18n(), untrack(() => $i18n().t("Add a tag"))),
          () => ($i18n(), untrack(() => $i18n().t("Save Tag")))
        ]
      );
      bind_value(input, () => get(tagName), ($$value) => set(tagName, $$value));
      event("keydown", input, (event2) => {
        if (event2.key === "Enter") {
          addTagHandler();
        }
      });
      event("click", button, addTagHandler);
      append($$anchor2, div_1);
    };
    if_block(node, ($$render) => {
      if (get(showTagInput)) $$render(consequent_1);
    });
  }
  var button_1 = sibling(node, 2);
  var div_2 = child(button_1);
  var svg = child(div_2);
  reset(div_2);
  reset(button_1);
  var node_2 = sibling(button_1, 2);
  {
    var consequent_2 = ($$anchor2) => {
      var span = root_4();
      var text = child(span, true);
      reset(span);
      template_effect(() => set_text(text, label()));
      append($$anchor2, span);
    };
    if_block(node_2, ($$render) => {
      if (label() && !get(showTagInput)) $$render(consequent_2);
    });
  }
  reset(div);
  template_effect(
    ($0) => {
      set_class(div, 1, `px-0.5 flex ${get(showTagInput) ? "flex-row-reverse" : ""}`);
      set_attribute(button_1, "aria-label", $0);
      set_class(svg, 0, `size-2.5 ${get(showTagInput) ? "rotate-45" : ""} transition-all transform`);
    },
    [() => ($i18n(), untrack(() => $i18n().t("Add Tag")))]
  );
  event("click", button_1, () => {
    set(showTagInput, !get(showTagInput));
  });
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root_2 = from_html(`<button class="relative group/tags px-1.5 py-[0.5px] gap-0.5 flex justify-between h-fit max-h-fit w-fit items-center rounded-lg bg-gray-500/20 text-gray-700 dark:text-gray-200 transition cursor-pointer"><div class=" text-[0.7rem] font-medium self-center line-clamp-1 w-fit"> </div> <div class="hidden group-hover/tags:block transition"><div class="rounded-full pl-[1px] backdrop-blur-sm h-full flex self-center cursor-pointer"><!></div></div></button>`);
function TagItem($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let tag = prop($$props, "tag", 8);
  let onDelete = prop($$props, "onDelete", 8, () => {
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      Tooltip($$anchor2, {
        get content() {
          return deep_read_state(tag()), untrack(() => tag().name);
        },
        children: ($$anchor3, $$slotProps) => {
          var button = root_2();
          var div = child(button);
          var text = child(div, true);
          reset(div);
          var div_1 = sibling(div, 2);
          var div_2 = child(div_1);
          var node_1 = child(div_2);
          XMark(node_1, { className: "size-3", strokeWidth: "2.5" });
          reset(div_2);
          reset(div_1);
          reset(button);
          template_effect(
            ($0) => {
              set_attribute(button, "aria-label", $0);
              set_text(text, (deep_read_state(tag()), untrack(() => tag().name)));
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Remove this tag from list")))
            ]
          );
          event("click", button, () => {
            onDelete()();
          });
          append($$anchor3, button);
        },
        $$slots: { default: true }
      });
    };
    if_block(node, ($$render) => {
      if (tag()) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
function TagList($$anchor, $$props) {
  push($$props, false);
  getContext("i18n");
  const dispatch = createEventDispatcher();
  let tags = prop($$props, "tags", 24, () => []);
  init();
  var fragment = comment();
  var node = first_child(fragment);
  each(node, 1, tags, index, ($$anchor2, tag) => {
    TagItem($$anchor2, {
      get tag() {
        return get(tag);
      },
      onDelete: () => {
        dispatch("delete", get(tag).name);
      }
    });
  });
  append($$anchor, fragment);
  pop();
}
var root = from_html(`<ul class="flex flex-row flex-wrap gap-[0.3rem] line-clamp-1"><!> <!></ul>`);
function Tags($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const dispatch = createEventDispatcher();
  const i18n = getContext("i18n");
  let tags = prop($$props, "tags", 24, () => []);
  let suggestionTags = prop($$props, "suggestionTags", 24, () => []);
  init();
  var ul = root();
  var node = child(ul);
  TagList(node, {
    get tags() {
      return tags();
    },
    $$events: {
      delete: (e) => {
        dispatch("delete", e.detail);
      }
    }
  });
  var node_1 = sibling(node, 2);
  {
    let $0 = derived_safe_equal(() => (deep_read_state(tags()), $i18n(), untrack(() => tags().length == 0 ? $i18n().t("Add Tags") : "")));
    TagInput(node_1, {
      get label() {
        return get($0);
      },
      get suggestionTags() {
        return suggestionTags();
      },
      $$events: {
        add: (e) => {
          dispatch("add", e.detail);
        }
      }
    });
  }
  reset(ul);
  append($$anchor, ul);
  pop();
  $$cleanup();
}
export {
  Tags as T
};
