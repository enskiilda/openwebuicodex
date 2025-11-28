import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { t as template_effect, p as push, g as getContext, o as onMount, c as child, i as deep_read_state, u as untrack, r as reset, e as sibling, b as get, a as pop, q as next, h as derived_safe_equal, s as set, m as mutable_source, l as legacy_pre_effect, j as legacy_pre_effect_reset, f as first_child, aW as user_derived, bq as to_array, n as createEventDispatcher, k as tick } from "./BxIY6ir7.js";
import { s as set_text, e as event } from "./cBADewWV.js";
import { i as if_block } from "./BoSuMvtf.js";
import { b as from_svg, a as append, f as from_html, t as text, c as comment } from "./CAbo1QWi.js";
import { s as slot } from "./CZEGIGsR.js";
import { i as init } from "./ByqEASoO.js";
import { p as prop } from "./BRmGPDvq.js";
import { s as setup_stores, a as store_get, d as store_set, m as mark_store_binding } from "./BvQ5O7-v.js";
import "./C2A39Ney.js";
import { M as Menu, a as Menu_trigger, b as Menu_content, c as Menu_item } from "./DQmZL-p0.js";
import "./h-B6Md2q.js";
import { f as fade } from "./BNZI2i79.js";
import { c as getUsage } from "./DtDmpg9G.js";
import { b as userSignOut } from "./GdVmBnqS.js";
import { b as settings, n as showShortcuts, o as showSettings, s as showSidebar, u as user, m as mobile } from "./2Yg1sHDo.js";
import { T as Tooltip } from "./BHXWufQb.js";
import { a as set_attribute, s as set_class, c as clsx } from "./kXiCYuyj.js";
import { e as each, i as index } from "./7_HZMPNF.js";
import { M as Modal } from "./DF6V1elH.js";
import { X as XMark } from "./CUUSX84-.js";
var root$9 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"></path></svg>`);
function ArchiveBox($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "2.5");
  var svg = root$9();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root$8 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"></path></svg>`);
function QuestionMarkCircle($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-4 h-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$8();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root$7 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"></path></svg>`);
function Map($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$7();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root$6 = from_svg(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19Z"></path><path d="M8 14L12 10L16 14" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
function Keyboard($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$6();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var Shortcut = /* @__PURE__ */ ((Shortcut2) => {
  Shortcut2["NEW_CHAT"] = "newChat";
  Shortcut2["NEW_TEMPORARY_CHAT"] = "newTemporaryChat";
  Shortcut2["DELETE_CHAT"] = "deleteChat";
  Shortcut2["SEARCH"] = "search";
  Shortcut2["OPEN_SETTINGS"] = "openSettings";
  Shortcut2["SHOW_SHORTCUTS"] = "showShortcuts";
  Shortcut2["TOGGLE_SIDEBAR"] = "toggleSidebar";
  Shortcut2["CLOSE_MODAL"] = "closeModal";
  Shortcut2["FOCUS_INPUT"] = "focusInput";
  Shortcut2["ACCEPT_AUTOCOMPLETE"] = "acceptAutocomplete";
  Shortcut2["PREVENT_FILE_CREATION"] = "preventFileCreation";
  Shortcut2["NAVIGATE_PROMPT_HISTORY_UP"] = "navigatePromptHistoryUp";
  Shortcut2["ATTACH_FILE"] = "attachFile";
  Shortcut2["ADD_PROMPT"] = "addPrompt";
  Shortcut2["TALK_TO_MODEL"] = "talkToModel";
  Shortcut2["GENERATE_MESSAGE_PAIR"] = "generateMessagePair";
  Shortcut2["REGENERATE_RESPONSE"] = "regenerateResponse";
  Shortcut2["COPY_LAST_CODE_BLOCK"] = "copyLastCodeBlock";
  Shortcut2["COPY_LAST_RESPONSE"] = "copyLastResponse";
  Shortcut2["STOP_GENERATING"] = "stopGenerating";
  return Shortcut2;
})(Shortcut || {});
const shortcuts = {
  //Chat
  [
    "newChat"
    /* NEW_CHAT */
  ]: {
    name: "New Chat",
    keys: ["mod", "shift", "O"],
    category: "Chat"
  },
  [
    "newTemporaryChat"
    /* NEW_TEMPORARY_CHAT */
  ]: {
    name: "New Temporary Chat",
    keys: ["mod", "shift", `'`],
    category: "Chat"
  },
  [
    "deleteChat"
    /* DELETE_CHAT */
  ]: {
    name: "Delete Chat",
    keys: ["mod", "shift", "Backspace", "Delete"],
    category: "Chat"
  },
  //Global
  [
    "search"
    /* SEARCH */
  ]: {
    name: "Search",
    keys: ["mod", "K"],
    category: "Global"
  },
  [
    "openSettings"
    /* OPEN_SETTINGS */
  ]: {
    name: "Open Settings",
    keys: ["mod", "."],
    category: "Global"
  },
  [
    "showShortcuts"
    /* SHOW_SHORTCUTS */
  ]: {
    name: "Show Shortcuts",
    keys: ["mod", "/"],
    category: "Global"
  },
  [
    "toggleSidebar"
    /* TOGGLE_SIDEBAR */
  ]: {
    name: "Toggle Sidebar",
    keys: ["mod", "shift", "S"],
    category: "Global"
  },
  [
    "closeModal"
    /* CLOSE_MODAL */
  ]: {
    name: "Close Modal",
    keys: ["Escape"],
    category: "Global"
  },
  //Input
  [
    "focusInput"
    /* FOCUS_INPUT */
  ]: {
    name: "Focus Chat Input",
    keys: ["shift", "Escape"],
    category: "Input"
  },
  [
    "acceptAutocomplete"
    /* ACCEPT_AUTOCOMPLETE */
  ]: {
    name: "Accept Autocomplete Generation\nJump to Prompt Variable",
    keys: ["Tab"],
    category: "Input"
  },
  [
    "preventFileCreation"
    /* PREVENT_FILE_CREATION */
  ]: {
    name: "Prevent File Creation",
    keys: ["mod", "shift", "V"],
    category: "Input",
    tooltip: 'Only active when "Paste Large Text as File" setting is toggled on.'
  },
  [
    "attachFile"
    /* ATTACH_FILE */
  ]: {
    name: "Attach File From Knowledge",
    keys: ["#"],
    category: "Input"
  },
  [
    "addPrompt"
    /* ADD_PROMPT */
  ]: {
    name: "Add Custom Prompt",
    keys: ["/"],
    category: "Input"
  },
  [
    "talkToModel"
    /* TALK_TO_MODEL */
  ]: {
    name: "Talk to Model",
    keys: ["@"],
    category: "Input"
  },
  //Message
  [
    "generateMessagePair"
    /* GENERATE_MESSAGE_PAIR */
  ]: {
    name: "Generate Message Pair",
    keys: ["mod", "shift", "Enter"],
    category: "Message",
    tooltip: "Only active when the chat input is in focus."
  },
  [
    "regenerateResponse"
    /* REGENERATE_RESPONSE */
  ]: {
    name: "Regenerate Response",
    keys: ["mod", "R"],
    category: "Message"
  },
  [
    "stopGenerating"
    /* STOP_GENERATING */
  ]: {
    name: "Stop Generating",
    keys: ["Escape"],
    category: "Message",
    tooltip: "Only active when the chat input is in focus and an LLM is generating a response."
  },
  [
    "navigatePromptHistoryUp"
    /* NAVIGATE_PROMPT_HISTORY_UP */
  ]: {
    name: "Edit Last Message",
    keys: ["ArrowUp"],
    category: "Message",
    tooltip: "Only can be triggered when the chat input is in focus."
  },
  [
    "copyLastResponse"
    /* COPY_LAST_RESPONSE */
  ]: {
    name: "Copy Last Response",
    keys: ["mod", "shift", "C"],
    category: "Message"
  },
  [
    "copyLastCodeBlock"
    /* COPY_LAST_CODE_BLOCK */
  ]: {
    name: "Copy Last Code Block",
    keys: ["mod", "shift", ";"],
    category: "Message"
  }
};
var root_2$1 = from_html(`<span class="whitespace-nowrap"> <span class="text-xs">&nbsp;*</span></span>`);
var root_4$2 = from_html(`<div class="h-fit px-1 py-0.5 flex items-start justify-center rounded-sm border border-black/10 capitalize text-gray-600 dark:border-white/10 dark:text-gray-300"> </div>`);
var root$5 = from_html(`<div class="w-full flex justify-between"><div class="text-sm whitespace-pre-line"><!></div> <div class="flex-shrink-0 flex justify-end self-start h-full space-x-1 text-xs"></div></div>`);
function ShortcutItem($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let shortcut = prop($$props, "shortcut", 8);
  let isMac = prop($$props, "isMac", 8);
  const i18n = getContext("i18n");
  let keyboardLayoutMap;
  onMount(async () => {
    if (navigator.keyboard && "getLayoutMap" in navigator.keyboard) {
      try {
        keyboardLayoutMap = await navigator.keyboard.getLayoutMap();
      } catch (error) {
        console.error("Failed to get keyboard layout map:", error);
      }
    }
  });
  function formatKey(key) {
    switch (key) {
      case "mod":
        return isMac() ? "⌘" : "Ctrl";
      case "shift":
        return isMac() ? "⇧" : "Shift";
      case "alt":
        return isMac() ? "⌥" : "Alt";
    }
    if (keyboardLayoutMap && keyboardLayoutMap.has(key)) {
      const mappedKey = keyboardLayoutMap.get(key) ?? key;
      return mappedKey.length === 1 ? mappedKey.toUpperCase() : mappedKey;
    }
    const lowerKey = key.toLowerCase();
    switch (lowerKey) {
      case "backspace":
      case "delete":
        return isMac() ? "⌫" : "Delete";
      case "escape":
        return "Esc";
      case "enter":
        return isMac() ? "↩" : "Enter";
      case "tab":
        return isMac() ? "⇥" : "Tab";
      case "arrowup":
        return "↑";
      case "arrowdown":
        return "↓";
      case "quote":
        return "'";
      case "period":
        return ".";
      case "slash":
        return "/";
      case "semicolon":
        return ";";
      default:
        if (lowerKey.startsWith("key") || lowerKey.startsWith("digit")) {
          return key.slice(-1).toUpperCase();
        }
        return key.toUpperCase();
    }
  }
  init();
  var div = root$5();
  var div_1 = child(div);
  var node = child(div_1);
  {
    var consequent = ($$anchor2) => {
      {
        let $0 = derived_safe_equal(() => ($i18n(), deep_read_state(shortcut()), untrack(() => $i18n().t(shortcut().tooltip))));
        Tooltip($$anchor2, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps) => {
            var span = root_2$1();
            var text2 = child(span, true);
            next();
            reset(span);
            template_effect(($02) => set_text(text2, $02), [
              () => ($i18n(), deep_read_state(shortcut()), untrack(() => $i18n().t(shortcut().name)))
            ]);
            append($$anchor3, span);
          },
          $$slots: { default: true }
        });
      }
    };
    var alternate = ($$anchor2) => {
      var text_1 = text();
      template_effect(($0) => set_text(text_1, $0), [
        () => ($i18n(), deep_read_state(shortcut()), untrack(() => $i18n().t(shortcut().name)))
      ]);
      append($$anchor2, text_1);
    };
    if_block(node, ($$render) => {
      if (deep_read_state(shortcut()), untrack(() => shortcut().tooltip)) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  reset(div_1);
  var div_2 = sibling(div_1, 2);
  each(
    div_2,
    5,
    () => (deep_read_state(shortcut()), untrack(() => shortcut().keys.filter((key) => !(key.toLowerCase() === "delete" && shortcut().keys.includes("Backspace"))))),
    index,
    ($$anchor2, key) => {
      var div_3 = root_4$2();
      var text_2 = child(div_3, true);
      reset(div_3);
      template_effect(($0) => set_text(text_2, $0), [() => (get(key), untrack(() => formatKey(get(key))))]);
      append($$anchor2, div_3);
    }
  );
  reset(div_2);
  reset(div);
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root_3 = from_html(`<div class="py-3"><div class="w-full border-t dark:border-gray-850 border-gray-50"></div></div>`);
var root_4$1 = from_html(`<div class="col-span-1 flex items-start"><!></div>`);
var root_2 = from_html(`<!> <div class="flex justify-between dark:text-gray-300 pb-2"><div class="text-base self-center"> </div></div> <div class="flex flex-col md:flex-row w-full md:space-x-2 dark:text-gray-200"><div class="flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><div class=" grid grid-cols-1 sm:grid-cols-2 gap-2 gap-x-4 w-full"></div></div></div>`, 1);
var root_1$1 = from_html(`<div class="text-gray-700 dark:text-gray-100 px-5 py-4"><div class="flex justify-between dark:text-gray-300 pb-2"><div class="text-lg font-medium self-center"> </div> <button class="self-center"><!></button></div> <!></div>`);
function ShortcutsModal($$anchor, $$props) {
  push($$props, false);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let categorizedShortcuts = mutable_source({});
  let isMac = mutable_source(false);
  onMount(() => {
    set(isMac, /Mac/i.test(navigator.userAgent));
  });
  legacy_pre_effect(() => $settings(), () => {
    const allShortcuts = Object.values(shortcuts).filter((shortcut) => {
      if (!shortcut.setting) {
        return true;
      }
      return $settings()[shortcut.setting.id] === shortcut.setting.value;
    });
    set(categorizedShortcuts, allShortcuts.reduce(
      (acc, shortcut) => {
        const category = shortcut.category;
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(shortcut);
        return acc;
      },
      {}
    ));
  });
  legacy_pre_effect_reset();
  init();
  Modal($$anchor, {
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
      var text2 = child(div_2, true);
      reset(div_2);
      var button = sibling(div_2, 2);
      var node = child(button);
      XMark(node, { className: "size-5" });
      reset(button);
      reset(div_1);
      var node_1 = sibling(div_1, 2);
      each(
        node_1,
        1,
        () => (get(categorizedShortcuts), untrack(() => Object.entries(get(categorizedShortcuts)))),
        index,
        ($$anchor3, $$item, categoryIndex) => {
          var $$array = user_derived(() => to_array(get($$item), 2));
          let category = () => get($$array)[0];
          let items = () => get($$array)[1];
          var fragment_1 = root_2();
          var node_2 = first_child(fragment_1);
          {
            var consequent = ($$anchor4) => {
              var div_3 = root_3();
              append($$anchor4, div_3);
            };
            if_block(node_2, ($$render) => {
              if (categoryIndex > 0) $$render(consequent);
            });
          }
          var div_4 = sibling(node_2, 2);
          var div_5 = child(div_4);
          var text_1 = child(div_5, true);
          reset(div_5);
          reset(div_4);
          var div_6 = sibling(div_4, 2);
          var div_7 = child(div_6);
          var div_8 = child(div_7);
          each(div_8, 5, items, index, ($$anchor4, shortcut) => {
            var div_9 = root_4$1();
            var node_3 = child(div_9);
            ShortcutItem(node_3, {
              get shortcut() {
                return get(shortcut);
              },
              get isMac() {
                return get(isMac);
              }
            });
            reset(div_9);
            append($$anchor4, div_9);
          });
          reset(div_8);
          reset(div_7);
          reset(div_6);
          template_effect(($0) => set_text(text_1, $0), [
            () => ($i18n(), category(), untrack(() => $i18n().t(category())))
          ]);
          append($$anchor3, fragment_1);
        }
      );
      reset(div);
      template_effect(($0) => set_text(text2, $0), [
        () => ($i18n(), untrack(() => $i18n().t("Keyboard Shortcuts")))
      ]);
      event("click", button, () => show(false));
      append($$anchor2, div);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root$4 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`);
function Settings($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-5 h-5");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$4();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root$3 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"></path></svg>`);
function Code($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-5 h-5");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$3();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root$2 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`);
function UserGroup($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-5 h-5");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$2();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root$1 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z" clip-rule="evenodd" aria-hidden="true"></path><path fill-rule="evenodd" d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z" clip-rule="evenodd"></path></svg>`);
function SignOut($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-5 h-5");
  prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$1();
  template_effect(() => set_class(svg, 0, clsx(className())));
  append($$anchor, svg);
}
var root_5 = from_html(`<div class=" self-center mr-3"><!></div> <div class=" self-center truncate"> </div>`, 1);
var root_6 = from_html(`<div class=" self-center mr-3"><!></div> <div class=" self-center truncate"> </div>`, 1);
var root_8 = from_html(`<div class=" self-center mr-3"><!></div> <div class=" self-center truncate"> </div>`, 1);
var root_9 = from_html(`<div class=" self-center mr-3"><!></div> <div class=" self-center truncate"> </div>`, 1);
var root_7 = from_html(`<!> <!>`, 1);
var root_12 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_13 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_11 = from_html(`<!> <!>`, 1);
var root_14 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_10 = from_html(`<hr class=" border-gray-50 dark:border-gray-800 my-1 p-0"/> <!> <!>`, 1);
var root_15 = from_html(`<div class=" self-center mr-3"><!></div> <div class=" self-center truncate"> </div>`, 1);
var root_18 = from_html(`<div class="flex rounded-xl py-1 px-3 text-xs gap-2.5 items-center"><div class=" flex items-center"><span class="relative flex size-2"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span> <span class="relative inline-flex rounded-full size-2 bg-green-500"></span></span></div> <div class=" "><span> </span> <span class=" font-semibold"> </span></div></div>`);
var root_17 = from_html(`<hr class=" border-gray-50 dark:border-gray-800 my-1 p-0"/> <!>`, 1);
var root_4 = from_html(`<!> <!> <!> <!> <hr class=" border-gray-50 dark:border-gray-800 my-1 p-0"/> <!> <!>`, 1);
var root_1 = from_html(`<!> <!>`, 1);
var root = from_html(`<!> <!>`, 1);
function UserMenu($$anchor, $$props) {
  push($$props, false);
  const $showShortcuts = () => store_get(showShortcuts, "$showShortcuts", $$stores);
  const $mobile = () => store_get(mobile, "$mobile", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let role = prop($$props, "role", 8, "");
  let help = prop($$props, "help", 8, false);
  let className = prop($$props, "className", 8, "max-w-[240px]");
  const dispatch = createEventDispatcher();
  let usage = mutable_source(null);
  const getUsageInfo = async () => {
    const res = await getUsage(localStorage.token).catch((error) => {
      console.error("Error fetching usage info:", error);
    });
    if (res) {
      set(usage, res);
    } else {
      set(usage, null);
    }
  };
  legacy_pre_effect(() => deep_read_state(show()), () => {
    if (show()) {
      getUsageInfo();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root();
  var node = first_child(fragment);
  ShortcutsModal(node, {
    get show() {
      mark_store_binding();
      return $showShortcuts();
    },
    set show($$value) {
      store_set(showShortcuts, $$value);
    },
    $$legacy: true
  });
  var node_1 = sibling(node, 2);
  Menu(node_1, {
    onOpenChange: (state) => {
      dispatch("change", state);
    },
    get open() {
      return show();
    },
    set open($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1();
      var node_2 = first_child(fragment_1);
      Menu_trigger(node_2, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = comment();
          var node_3 = first_child(fragment_2);
          slot(node_3, $$props, "default", {}, null);
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      var node_4 = sibling(node_2, 2);
      slot(node_4, $$props, "content", {}, ($$anchor3) => {
        Menu_content($$anchor3, {
          get class() {
            return `w-full ${className() ?? ""}  rounded-2xl px-1 py-1  border border-gray-100  dark:border-gray-800 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg text-sm`;
          },
          sideOffset: 4,
          side: "top",
          align: "end",
          transition: (e) => fade(e, { duration: 100 }),
          children: ($$anchor4, $$slotProps2) => {
            var fragment_4 = root_4();
            var node_5 = first_child(fragment_4);
            Menu_item(node_5, {
              class: "flex rounded-xl py-1.5 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer",
              $$events: {
                click: async () => {
                  show(false);
                  await showSettings.set(true);
                  if ($mobile()) {
                    await tick();
                    showSidebar.set(false);
                  }
                }
              },
              children: ($$anchor5, $$slotProps3) => {
                var fragment_5 = root_5();
                var div = first_child(fragment_5);
                var node_6 = child(div);
                Settings(node_6, { className: "w-5 h-5", strokeWidth: "1.5" });
                reset(div);
                var div_1 = sibling(div, 2);
                var text2 = child(div_1, true);
                reset(div_1);
                template_effect(($0) => set_text(text2, $0), [() => ($i18n(), untrack(() => $i18n().t("Settings")))]);
                append($$anchor5, fragment_5);
              },
              $$slots: { default: true }
            });
            var node_7 = sibling(node_5, 2);
            Menu_item(node_7, {
              class: "flex rounded-xl py-1.5 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer",
              $$events: {
                click: async () => {
                  show(false);
                  dispatch("show", "archived-chat");
                  if ($mobile()) {
                    await tick();
                    showSidebar.set(false);
                  }
                }
              },
              children: ($$anchor5, $$slotProps3) => {
                var fragment_6 = root_6();
                var div_2 = first_child(fragment_6);
                var node_8 = child(div_2);
                ArchiveBox(node_8, { className: "size-5", strokeWidth: "1.5" });
                reset(div_2);
                var div_3 = sibling(div_2, 2);
                var text_1 = child(div_3, true);
                reset(div_3);
                template_effect(($0) => set_text(text_1, $0), [
                  () => ($i18n(), untrack(() => $i18n().t("Archived Chats")))
                ]);
                append($$anchor5, fragment_6);
              },
              $$slots: { default: true }
            });
            var node_9 = sibling(node_7, 2);
            {
              var consequent = ($$anchor5) => {
                var fragment_7 = root_7();
                var node_10 = first_child(fragment_7);
                Menu_item(node_10, {
                  as: "a",
                  href: "/playground",
                  class: "flex rounded-xl py-1.5 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition select-none",
                  $$events: {
                    click: async () => {
                      show(false);
                      if ($mobile()) {
                        await tick();
                        showSidebar.set(false);
                      }
                    }
                  },
                  children: ($$anchor6, $$slotProps3) => {
                    var fragment_8 = root_8();
                    var div_4 = first_child(fragment_8);
                    var node_11 = child(div_4);
                    Code(node_11, { className: "size-5", strokeWidth: "1.5" });
                    reset(div_4);
                    var div_5 = sibling(div_4, 2);
                    var text_2 = child(div_5, true);
                    reset(div_5);
                    template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Playground")))]);
                    append($$anchor6, fragment_8);
                  },
                  $$slots: { default: true }
                });
                var node_12 = sibling(node_10, 2);
                Menu_item(node_12, {
                  as: "a",
                  href: "/admin",
                  class: "flex rounded-xl py-1.5 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition select-none",
                  $$events: {
                    click: async () => {
                      show(false);
                      if ($mobile()) {
                        await tick();
                        showSidebar.set(false);
                      }
                    }
                  },
                  children: ($$anchor6, $$slotProps3) => {
                    var fragment_9 = root_9();
                    var div_6 = first_child(fragment_9);
                    var node_13 = child(div_6);
                    UserGroup(node_13, { className: "w-5 h-5", strokeWidth: "1.5" });
                    reset(div_6);
                    var div_7 = sibling(div_6, 2);
                    var text_3 = child(div_7, true);
                    reset(div_7);
                    template_effect(($0) => set_text(text_3, $0), [() => ($i18n(), untrack(() => $i18n().t("Admin Panel")))]);
                    append($$anchor6, fragment_9);
                  },
                  $$slots: { default: true }
                });
                append($$anchor5, fragment_7);
              };
              if_block(node_9, ($$render) => {
                if (role() === "admin") $$render(consequent);
              });
            }
            var node_14 = sibling(node_9, 2);
            {
              var consequent_2 = ($$anchor5) => {
                var fragment_10 = root_10();
                var node_15 = sibling(first_child(fragment_10), 2);
                {
                  var consequent_1 = ($$anchor6) => {
                    var fragment_11 = root_11();
                    var node_16 = first_child(fragment_11);
                    Menu_item(node_16, {
                      as: "a",
                      target: "_blank",
                      class: "flex gap-3 items-center py-1.5 px-3 text-sm select-none w-full cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition",
                      id: "chat-share-button",
                      href: "https://docs.openwebui.com",
                      $$events: {
                        click: () => {
                          show(false);
                        }
                      },
                      children: ($$anchor7, $$slotProps3) => {
                        var fragment_12 = root_12();
                        var node_17 = first_child(fragment_12);
                        QuestionMarkCircle(node_17, { className: "size-5" });
                        var div_8 = sibling(node_17, 2);
                        var text_4 = child(div_8, true);
                        reset(div_8);
                        template_effect(($0) => set_text(text_4, $0), [() => ($i18n(), untrack(() => $i18n().t("Documentation")))]);
                        append($$anchor7, fragment_12);
                      },
                      $$slots: { default: true }
                    });
                    var node_18 = sibling(node_16, 2);
                    Menu_item(node_18, {
                      as: "a",
                      target: "_blank",
                      class: "flex gap-3 items-center py-1.5 px-3 text-sm select-none w-full cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition",
                      id: "chat-share-button",
                      href: "https://github.com/open-webui/open-webui/releases",
                      $$events: {
                        click: () => {
                          show(false);
                        }
                      },
                      children: ($$anchor7, $$slotProps3) => {
                        var fragment_13 = root_13();
                        var node_19 = first_child(fragment_13);
                        Map(node_19, { className: "size-5" });
                        var div_9 = sibling(node_19, 2);
                        var text_5 = child(div_9, true);
                        reset(div_9);
                        template_effect(($0) => set_text(text_5, $0), [() => ($i18n(), untrack(() => $i18n().t("Releases")))]);
                        append($$anchor7, fragment_13);
                      },
                      $$slots: { default: true }
                    });
                    append($$anchor6, fragment_11);
                  };
                  if_block(node_15, ($$render) => {
                    if ($user(), untrack(() => {
                      var _a;
                      return ((_a = $user()) == null ? void 0 : _a.role) === "admin";
                    })) $$render(consequent_1);
                  });
                }
                var node_20 = sibling(node_15, 2);
                Menu_item(node_20, {
                  class: "flex gap-3 items-center py-1.5 px-3 text-sm select-none w-full  hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition cursor-pointer",
                  id: "chat-share-button",
                  $$events: {
                    click: async () => {
                      show(false);
                      showShortcuts.set(!$showShortcuts());
                      if ($mobile()) {
                        await tick();
                        showSidebar.set(false);
                      }
                    }
                  },
                  children: ($$anchor6, $$slotProps3) => {
                    var fragment_14 = root_14();
                    var node_21 = first_child(fragment_14);
                    Keyboard(node_21, { className: "size-5" });
                    var div_10 = sibling(node_21, 2);
                    var text_6 = child(div_10, true);
                    reset(div_10);
                    template_effect(($0) => set_text(text_6, $0), [
                      () => ($i18n(), untrack(() => $i18n().t("Keyboard shortcuts")))
                    ]);
                    append($$anchor6, fragment_14);
                  },
                  $$slots: { default: true }
                });
                append($$anchor5, fragment_10);
              };
              if_block(node_14, ($$render) => {
                if (help()) $$render(consequent_2);
              });
            }
            var node_22 = sibling(node_14, 4);
            Menu_item(node_22, {
              class: "flex rounded-xl py-1.5 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition",
              $$events: {
                click: async () => {
                  const res = await userSignOut();
                  user.set(null);
                  localStorage.removeItem("token");
                  location.href = (res == null ? void 0 : res.redirect_url) ?? "/auth";
                  show(false);
                }
              },
              children: ($$anchor5, $$slotProps3) => {
                var fragment_15 = root_15();
                var div_11 = first_child(fragment_15);
                var node_23 = child(div_11);
                SignOut(node_23, { className: "w-5 h-5", strokeWidth: "1.5" });
                reset(div_11);
                var div_12 = sibling(div_11, 2);
                var text_7 = child(div_12, true);
                reset(div_12);
                template_effect(($0) => set_text(text_7, $0), [() => ($i18n(), untrack(() => $i18n().t("Sign Out")))]);
                append($$anchor5, fragment_15);
              },
              $$slots: { default: true }
            });
            var node_24 = sibling(node_22, 2);
            {
              var consequent_4 = ($$anchor5) => {
                var fragment_16 = comment();
                var node_25 = first_child(fragment_16);
                {
                  var consequent_3 = ($$anchor6) => {
                    var fragment_17 = root_17();
                    var node_26 = sibling(first_child(fragment_17), 2);
                    {
                      let $0 = derived_safe_equal(() => (get(usage), $i18n(), untrack(() => {
                        var _a, _b;
                        return ((_a = get(usage)) == null ? void 0 : _a.model_ids) && ((_b = get(usage)) == null ? void 0 : _b.model_ids.length) > 0 ? `${$i18n().t("Running")}: ${get(usage).model_ids.join(", ")} ✨` : "";
                      })));
                      Tooltip(node_26, {
                        get content() {
                          return get($0);
                        },
                        children: ($$anchor7, $$slotProps3) => {
                          var div_13 = root_18();
                          var div_14 = sibling(child(div_13), 2);
                          var span = child(div_14);
                          var text_8 = child(span);
                          reset(span);
                          var span_1 = sibling(span, 2);
                          var text_9 = child(span_1, true);
                          reset(span_1);
                          reset(div_14);
                          reset(div_13);
                          template_effect(
                            ($02) => {
                              set_text(text_8, `${$02 ?? ""}:`);
                              set_text(text_9, (get(usage), untrack(() => {
                                var _a, _b;
                                return (_b = (_a = get(usage)) == null ? void 0 : _a.user_ids) == null ? void 0 : _b.length;
                              })));
                            },
                            [() => ($i18n(), untrack(() => $i18n().t("Active Users")))]
                          );
                          event("mouseenter", div_13, () => {
                            getUsageInfo();
                          });
                          append($$anchor7, div_13);
                        },
                        $$slots: { default: true }
                      });
                    }
                    append($$anchor6, fragment_17);
                  };
                  if_block(node_25, ($$render) => {
                    if (get(usage), untrack(() => {
                      var _a, _b;
                      return ((_b = (_a = get(usage)) == null ? void 0 : _a.user_ids) == null ? void 0 : _b.length) > 0;
                    })) $$render(consequent_3);
                  });
                }
                append($$anchor5, fragment_16);
              };
              if_block(node_24, ($$render) => {
                if (get(usage)) $$render(consequent_4);
              });
            }
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
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  ArchiveBox as A,
  Map as M,
  Settings as S,
  UserMenu as U,
  UserGroup as a,
  Shortcut as b,
  shortcuts as s
};
