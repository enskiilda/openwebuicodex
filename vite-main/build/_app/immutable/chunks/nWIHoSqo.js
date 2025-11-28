import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, g as getContext, o as onMount, s as set, m as mutable_source, k as tick, l as legacy_pre_effect, b as get, i as deep_read_state, j as legacy_pre_effect_reset, f as first_child, h as derived_safe_equal, e as sibling, c as child, r as reset, t as template_effect, u as untrack, q as next, a as pop } from "./BxIY6ir7.js";
import { s as set_text, e as event } from "./cBADewWV.js";
import { i as if_block } from "./BoSuMvtf.js";
import { f as from_html, a as append } from "./CAbo1QWi.js";
import { r as remove_input_defaults, a as set_attribute, s as set_class } from "./kXiCYuyj.js";
import { b as bind_value } from "./DVLuwGai.js";
import { p as preventDefault } from "./CGgk3ROl.js";
import { i as init } from "./ByqEASoO.js";
import { p as prop } from "./BRmGPDvq.js";
import { a as store_get, s as setup_stores } from "./BvQ5O7-v.js";
import { T as Textarea } from "./B-P1fI-w.js";
import { t as toast } from "./BccDN__m.js";
import { T as Tooltip } from "./BHXWufQb.js";
import { L as LockClosed } from "./CK7-DaSl.js";
import { A as AccessControlModal } from "./CRvJEYxG.js";
import { u as user } from "./2Yg1sHDo.js";
import { s as slugify } from "./Bh-hrM1w.js";
import { S as Spinner } from "./CtnI4RVL.js";
var root_1 = from_html(`<div class="flex flex-col w-full"><div class="flex items-center"><input class="text-2xl font-medium w-full bg-transparent outline-hidden" required/> <div class="self-center shrink-0"><button class="bg-gray-50 hover:bg-gray-100 text-black dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-white transition px-2 py-1 rounded-full flex gap-1 items-center" type="button"><!> <div class="text-sm font-medium shrink-0"> </div></button></div></div> <div class="flex gap-0.5 items-center text-xs text-gray-500"><div>/</div> <input class=" w-full bg-transparent outline-hidden" required/></div></div>`);
var root_2 = from_html(`<div class="ml-1.5 self-center"><!></div>`);
var root = from_html(`<!> <div class="w-full max-h-full flex justify-center"><form class="flex flex-col w-full mb-10"><div class="my-2"><!></div> <div class="my-2"><div class="flex w-full justify-between"><div class=" self-center text-sm font-medium"> </div></div> <div class="mt-2"><div><!></div> <div class="text-xs text-gray-400 dark:text-gray-500"> <span class=" text-gray-600 dark:text-gray-300 font-medium"> </span> <span class=" text-gray-600 dark:text-gray-300 font-medium"></span> <span class=" text-gray-600 dark:text-gray-300 font-medium"></span>.</div> <div class="text-xs text-gray-400 dark:text-gray-500 underline"><a href="https://docs.openwebui.com/features/workspace/prompts" target="_blank"> </a></div></div></div> <div class="my-4 flex justify-end pb-20"><button type="submit"><div class=" self-center font-medium"> </div> <!></button></div></form></div>`, 1);
function PromptEditor($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let onSubmit = prop($$props, "onSubmit", 8);
  let edit = prop($$props, "edit", 8, false);
  let prompt = prop($$props, "prompt", 8, null);
  prop($$props, "clone", 8, false);
  const i18n = getContext("i18n");
  let loading = mutable_source(false);
  let title = mutable_source("");
  let command = mutable_source("");
  let content = mutable_source("");
  let accessControl = mutable_source({});
  let showAccessControlModal = mutable_source(false);
  let hasManualEdit = mutable_source(false);
  function handleCommandInput(e) {
    set(hasManualEdit, true);
  }
  const submitHandler = async () => {
    set(loading, true);
    if (validateCommandString(get(command))) {
      await onSubmit()({
        title: get(title),
        command: get(command),
        content: get(content),
        access_control: get(accessControl)
      });
    } else {
      toast.error($i18n().t("Only alphanumeric characters and hyphens are allowed in the command string."));
    }
    set(loading, false);
  };
  const validateCommandString = (inputString) => {
    const regex = /^[a-zA-Z0-9-_]+$/;
    return regex.test(inputString);
  };
  onMount(async () => {
    var _a, _b;
    if (prompt()) {
      set(title, prompt().title);
      await tick();
      set(command, prompt().command.at(0) === "/" ? prompt().command.slice(1) : prompt().command);
      set(content, prompt().content);
      set(accessControl, ((_a = prompt()) == null ? void 0 : _a.access_control) === void 0 ? {} : (_b = prompt()) == null ? void 0 : _b.access_control);
    }
  });
  legacy_pre_effect(
    () => (deep_read_state(edit()), get(hasManualEdit), get(title), slugify),
    () => {
      if (!edit() && !get(hasManualEdit)) {
        set(command, get(title) !== "" ? slugify(get(title)) : "");
      }
    }
  );
  legacy_pre_effect_reset();
  init();
  var fragment = root();
  var node = first_child(fragment);
  {
    let $0 = derived_safe_equal(() => ($user(), untrack(() => {
      var _a, _b, _c, _d;
      return ((_c = (_b = (_a = $user()) == null ? void 0 : _a.permissions) == null ? void 0 : _b.sharing) == null ? void 0 : _c.prompts) || ((_d = $user()) == null ? void 0 : _d.role) === "admin";
    })));
    let $1 = derived_safe_equal(() => ($user(), untrack(() => {
      var _a, _b, _c, _d;
      return ((_c = (_b = (_a = $user()) == null ? void 0 : _a.permissions) == null ? void 0 : _b.sharing) == null ? void 0 : _c.public_prompts) || ((_d = $user()) == null ? void 0 : _d.role) === "admin";
    })));
    AccessControlModal(node, {
      accessRoles: ["read", "write"],
      get share() {
        return get($0);
      },
      get sharePublic() {
        return get($1);
      },
      get show() {
        return get(showAccessControlModal);
      },
      set show($$value) {
        set(showAccessControlModal, $$value);
      },
      get accessControl() {
        return get(accessControl);
      },
      set accessControl($$value) {
        set(accessControl, $$value);
      },
      $$legacy: true
    });
  }
  var div = sibling(node, 2);
  var form = child(div);
  var div_1 = child(form);
  var node_1 = child(div_1);
  {
    let $0 = derived_safe_equal(() => ($i18n(), get(command), untrack(() => `${$i18n().t("Only alphanumeric characters and hyphens are allowed")} - ${$i18n().t('Activate this command by typing "/{{COMMAND}}" to chat input.', { COMMAND: get(command) })}`)));
    Tooltip(node_1, {
      get content() {
        return get($0);
      },
      placement: "bottom-start",
      children: ($$anchor2, $$slotProps) => {
        var div_2 = root_1();
        var div_3 = child(div_2);
        var input = child(div_3);
        remove_input_defaults(input);
        var div_4 = sibling(input, 2);
        var button = child(div_4);
        var node_2 = child(button);
        LockClosed(node_2, { strokeWidth: "2.5", className: "size-3.5" });
        var div_5 = sibling(node_2, 2);
        var text = child(div_5, true);
        reset(div_5);
        reset(button);
        reset(div_4);
        reset(div_3);
        var div_6 = sibling(div_3, 2);
        var input_1 = sibling(child(div_6), 2);
        remove_input_defaults(input_1);
        reset(div_6);
        reset(div_2);
        template_effect(
          ($02, $1, $2) => {
            set_attribute(input, "placeholder", $02);
            set_text(text, $1);
            set_attribute(input_1, "placeholder", $2);
            input_1.disabled = edit();
          },
          [
            () => ($i18n(), untrack(() => $i18n().t("Title"))),
            () => ($i18n(), untrack(() => $i18n().t("Access"))),
            () => ($i18n(), untrack(() => $i18n().t("Command")))
          ]
        );
        bind_value(input, () => get(title), ($$value) => set(title, $$value));
        event("click", button, () => {
          set(showAccessControlModal, true);
        });
        bind_value(input_1, () => get(command), ($$value) => set(command, $$value));
        event("input", input_1, handleCommandInput);
        append($$anchor2, div_2);
      },
      $$slots: { default: true }
    });
  }
  reset(div_1);
  var div_7 = sibling(div_1, 2);
  var div_8 = child(div_7);
  var div_9 = child(div_8);
  var text_1 = child(div_9, true);
  reset(div_9);
  reset(div_8);
  var div_10 = sibling(div_8, 2);
  var div_11 = child(div_10);
  var node_3 = child(div_11);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Write a summary in 50 words that summarizes {{topic}}."))));
    Textarea(node_3, {
      className: "text-sm w-full bg-transparent outline-hidden overflow-y-hidden resize-none",
      get placeholder() {
        return get($0);
      },
      rows: 6,
      required: true,
      get value() {
        return get(content);
      },
      set value($$value) {
        set(content, $$value);
      },
      $$legacy: true
    });
  }
  reset(div_11);
  var div_12 = sibling(div_11, 2);
  var text_2 = child(div_12);
  var span = sibling(text_2);
  var text_3 = child(span);
  reset(span);
  var text_4 = sibling(span);
  var span_1 = sibling(text_4);
  span_1.textContent = "{{";
  var text_5 = sibling(span_1);
  var span_2 = sibling(text_5);
  span_2.textContent = "}}";
  next();
  reset(div_12);
  var div_13 = sibling(div_12, 2);
  var a = child(div_13);
  var text_6 = child(a, true);
  reset(a);
  reset(div_13);
  reset(div_10);
  reset(div_7);
  var div_14 = sibling(div_7, 2);
  var button_1 = child(div_14);
  var div_15 = child(button_1);
  var text_7 = child(div_15, true);
  reset(div_15);
  var node_4 = sibling(div_15, 2);
  {
    var consequent = ($$anchor2) => {
      var div_16 = root_2();
      var node_5 = child(div_16);
      Spinner(node_5, {});
      reset(div_16);
      append($$anchor2, div_16);
    };
    if_block(node_4, ($$render) => {
      if (get(loading)) $$render(consequent);
    });
  }
  reset(button_1);
  reset(div_14);
  reset(form);
  reset(div);
  template_effect(
    ($0, $1, $2, $3, $4, $5, $6) => {
      set_text(text_1, $0);
      set_text(text_2, `ⓘ ${$1 ?? ""} `);
      set_text(text_3, `{{${$2 ?? ""}}}`);
      set_text(text_4, `.
					${$3 ?? ""} `);
      set_text(text_5, ` ${$4 ?? ""} `);
      set_text(text_6, $5);
      set_class(button_1, 1, ` text-sm w-full lg:w-fit px-4 py-2 transition rounded-xl ${get(loading) ? " cursor-not-allowed bg-black hover:bg-gray-900 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-black" : "bg-black hover:bg-gray-900 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-black"} flex w-full justify-center`);
      button_1.disabled = get(loading);
      set_text(text_7, $6);
    },
    [
      () => ($i18n(), untrack(() => $i18n().t("Prompt Content"))),
      () => ($i18n(), untrack(() => $i18n().t("Format your variables using brackets like this:"))),
      () => ($i18n(), untrack(() => $i18n().t("variable"))),
      () => ($i18n(), untrack(() => $i18n().t("Make sure to enclose them with"))),
      () => ($i18n(), untrack(() => $i18n().t("and"))),
      () => ($i18n(), untrack(() => $i18n().t("To learn more about powerful prompt variables, click here"))),
      () => ($i18n(), untrack(() => $i18n().t("Save & Create")))
    ]
  );
  event("submit", form, preventDefault(() => {
    submitHandler();
  }));
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  PromptEditor as P
};
