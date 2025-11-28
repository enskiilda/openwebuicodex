import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, o as onMount, k as tick, b as get, m as mutable_source, aF as mutate, aG as remove_textarea_child, s as set, t as template_effect, a as pop } from "./BxIY6ir7.js";
import { e as event } from "./cBADewWV.js";
import { f as from_html, a as append } from "./CAbo1QWi.js";
import { a as set_attribute, s as set_class, c as clsx } from "./kXiCYuyj.js";
import { b as bind_value } from "./DVLuwGai.js";
import { b as bind_this } from "./D16JuV5t.js";
import { i as init } from "./ByqEASoO.js";
import { p as prop } from "./BRmGPDvq.js";
var root = from_html(`<textarea style="field-sizing: content;"></textarea>`);
function Textarea($$anchor, $$props) {
  push($$props, false);
  let value = prop($$props, "value", 12, "");
  let placeholder = prop($$props, "placeholder", 8, "");
  let rows = prop($$props, "rows", 8, 1);
  let minSize = prop($$props, "minSize", 8, null);
  let maxSize = prop($$props, "maxSize", 8, null);
  let required = prop($$props, "required", 8, false);
  let readonly = prop($$props, "readonly", 8, false);
  let className = prop($$props, "className", 8, "w-full rounded-lg px-3.5 py-2 text-sm bg-gray-50 dark:text-gray-300 dark:bg-gray-850 outline-hidden  h-full");
  let onInput = prop($$props, "onInput", 8, () => {
  });
  let onBlur = prop($$props, "onBlur", 8, () => {
  });
  let textareaElement = mutable_source();
  onMount(async () => {
    await tick();
    resize();
    requestAnimationFrame(() => {
      const interval = setInterval(
        () => {
          if (get(textareaElement)) {
            clearInterval(interval);
            resize();
          }
        },
        100
      );
    });
  });
  const resize = () => {
    if (get(textareaElement)) {
      mutate(textareaElement, get(textareaElement).style.height = "");
      let height = get(textareaElement).scrollHeight;
      if (maxSize() && height > maxSize()) {
        height = maxSize();
      }
      if (minSize() && height < minSize()) {
        height = minSize();
      }
      mutate(textareaElement, get(textareaElement).style.height = `${height}px`);
    }
  };
  init();
  var textarea = root();
  remove_textarea_child(textarea);
  bind_this(textarea, ($$value) => set(textareaElement, $$value), () => get(textareaElement));
  template_effect(() => {
    set_attribute(textarea, "placeholder", placeholder());
    set_class(textarea, 1, clsx(className()));
    set_attribute(textarea, "rows", rows());
    textarea.required = required();
    textarea.readOnly = readonly();
  });
  bind_value(textarea, value);
  event("input", textarea, (e) => {
    resize();
    onInput()(e);
  });
  event("focus", textarea, () => {
    resize();
  });
  event("blur", textarea, function(...$$args) {
    var _a;
    (_a = onBlur()) == null ? void 0 : _a.apply(this, $$args);
  });
  append($$anchor, textarea);
  pop();
}
export {
  Textarea as T
};
