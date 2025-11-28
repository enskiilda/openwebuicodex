import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { t as template_effect, p as push, g as getContext, o as onMount, l as legacy_pre_effect, s as set, b as get, m as mutable_source, i as deep_read_state, j as legacy_pre_effect_reset, c as child, r as reset, e as sibling, u as untrack, h as derived_safe_equal, aE as invalidate_inner_signals, a as pop, f as first_child, aG as remove_textarea_child } from "./BxIY6ir7.js";
import { e as event, s as set_text } from "./cBADewWV.js";
import { e as each, i as index } from "./7_HZMPNF.js";
import { i as if_block } from "./BoSuMvtf.js";
import { b as from_svg, a as append, f as from_html, t as text, c as comment } from "./CAbo1QWi.js";
import { a as set_attribute, s as set_class, c as clsx, r as remove_input_defaults, d as bind_select_value } from "./kXiCYuyj.js";
import { b as bind_value } from "./DVLuwGai.js";
import { i as init } from "./ByqEASoO.js";
import { p as prop } from "./BRmGPDvq.js";
import { a as store_get, s as setup_stores } from "./BvQ5O7-v.js";
import { t as toast } from "./BccDN__m.js";
import { b as settings } from "./2Yg1sHDo.js";
import { v as verifyOpenAIConnection } from "./Bm2W_wlw.js";
import { v as verifyOllamaConnection } from "./d72FSnuN.js";
import { M as Modal } from "./DF6V1elH.js";
import { P as Plus } from "./F9_n4pHG.js";
import { S as SensitiveInput } from "./BmA2IqKa.js";
import { T as Tooltip } from "./BHXWufQb.js";
import { S as Switch_1 } from "./CakJ276w.js";
import { T as Tags } from "./BXKRkMSz.js";
import { S as Spinner } from "./CtnI4RVL.js";
import { X as XMark } from "./CUUSX84-.js";
import { T as Textarea } from "./B-P1fI-w.js";
import { C as ConfirmDialog } from "./DhVOSDv1.js";
import { b as bind_this } from "./D16JuV5t.js";
import { f as fileSaver } from "./DRcZXQDn.js";
import { b as getToolServerData } from "./DtDmpg9G.js";
import { v as verifyToolServerConnection, r as registerOAuthClient } from "./DkfueU7Q.js";
import { A as AccessControl } from "./CFsG9iJ9.js";
var root$3 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg>`);
function Cog6($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-4 h-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$3();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root$2 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14"></path></svg>`);
function Minus($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-4 h-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$2();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root_4$2 = from_html(`<div class="flex gap-2"><div class="flex w-full justify-between items-center"><div class=" text-xs text-gray-500"> </div> <div><button type="button" class=" text-xs text-gray-700 dark:text-gray-300"><!></button></div></div></div>`);
var root_7$1 = from_html(`<button class="self-center p-1 bg-transparent hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-850 rounded-lg transition" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-4 h-4"><path fill-rule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clip-rule="evenodd"></path></svg></button>`);
var root_11$1 = from_html(`<option> </option>`);
var root_10$1 = from_html(`<option> </option> <!>`, 1);
var root_9 = from_html(`<option> </option> <!>`, 1);
var root_14$1 = from_html(`<div> </div>`);
var root_16$1 = from_html(`<div> </div>`);
var root_18$1 = from_html(`<div> </div>`);
var root_20$1 = from_html(`<div> </div>`);
var root_21 = from_html(`<div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><label for="headers-input"> </label> <div class="flex-1"><!></div></div></div>`);
var root_23$1 = from_html(`<input type="text" id="prefix-id-input" autocomplete="off"/>`);
var root_24 = from_html(`<div class="flex flex-row justify-between items-center w-full mt-2"><label for="prefix-id-input"> </label> <div><button type="button" class=" text-xs text-gray-700 dark:text-gray-300"> </button></div></div>`);
var root_25$1 = from_html(`<div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><label for="api-version-input"> </label> <div class="flex-1"><input id="api-version-input" type="text" autocomplete="off" required/></div></div></div>`);
var root_27$1 = from_html(`<li class=" flex gap-2 w-full justify-between items-center"><div class=" text-sm flex-1 py-1 rounded-lg"> </div> <div class="shrink-0"><button type="button"><!></button></div></li>`);
var root_26 = from_html(`<ul class="flex flex-col"></ul>`);
var root_28 = from_html(`<div><!></div>`);
var root_33$1 = from_html(`<button class="px-3.5 py-1.5 text-sm font-medium dark:bg-black dark:hover:bg-gray-900 dark:text-white bg-white text-black hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center" type="button"> </button>`);
var root_34$1 = from_html(`<div class="ml-2 self-center"><!></div>`);
var root_1$2 = from_html(`<div><div class=" flex justify-between dark:text-gray-100 px-5 pt-4 pb-1.5"><h1 class="text-lg font-medium self-center font-primary"><!></h1> <button class="self-center"><!></button></div> <div class="flex flex-col md:flex-row w-full px-4 pb-4 md:space-x-4 dark:text-gray-200"><div class=" flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div class="px-1"><!> <div class="flex gap-2 mt-1.5"><div class="flex flex-col w-full"><label for="url-input"> </label> <div class="flex-1"><input id="url-input" type="text" autocomplete="off" required/></div></div> <!> <div class="flex flex-col shrink-0 self-end"><label class="sr-only" for="toggle-connection"> </label> <!></div></div> <div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><label for="select-bearer-or-session"> </label> <div class="flex gap-2"><div class="flex-shrink-0 self-start"><select id="select-bearer-or-session"><option> </option><option> </option><!></select></div> <div class="flex flex-1 items-center"><!></div></div></div></div> <!> <div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><label for="prefix-id-input"> </label> <div class="flex-1"><!></div></div></div> <!> <!> <div class="flex flex-col w-full mt-2"><div class="mb-1 flex justify-between"><div> </div></div> <!></div> <div class="flex items-center"><label class="sr-only" for="add-model-id-input"> </label> <input id="add-model-id-input"/> <div><button type="button"><!></button></div></div></div> <div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><div> </div> <div class="flex-1 mt-0.5"><!></div></div></div> <div class="flex justify-end pt-3 text-sm font-medium gap-1.5"><!> <button type="submit"> <!></button></div></form></div></div></div>`);
function AddConnectionModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let onSubmit = prop($$props, "onSubmit", 8, () => {
  });
  let onDelete = prop($$props, "onDelete", 8, () => {
  });
  let show = prop($$props, "show", 12, false);
  let edit = prop($$props, "edit", 8, false);
  let ollama = prop($$props, "ollama", 8, false);
  let direct = prop($$props, "direct", 8, false);
  let connection = prop($$props, "connection", 8, null);
  let url = mutable_source("");
  let key = mutable_source("");
  let auth_type = mutable_source("bearer");
  let connectionType = mutable_source("external");
  let azure = mutable_source(false);
  let prefixId = mutable_source("");
  let enable = mutable_source(true);
  let apiVersion = mutable_source("");
  let headers = mutable_source("");
  let tags = mutable_source([]);
  let modelId = mutable_source("");
  let modelIds = mutable_source([]);
  let loading = mutable_source(false);
  const verifyOllamaHandler = async () => {
    set(url, get(url).replace(/\/$/, ""));
    const res = await verifyOllamaConnection(localStorage.token, { url: get(url), key: get(key) }).catch((error) => {
      toast.error(`${error}`);
    });
    if (res) {
      toast.success($i18n().t("Server connection verified"));
    }
  };
  const verifyOpenAIHandler = async () => {
    set(url, get(url).replace(/\/$/, ""));
    let _headers = null;
    if (get(headers)) {
      try {
        _headers = JSON.parse(get(headers));
        if (typeof _headers !== "object" || Array.isArray(_headers)) {
          _headers = null;
          throw new Error("Headers must be a valid JSON object");
        }
        set(headers, JSON.stringify(_headers, null, 2));
      } catch (error) {
        toast.error($i18n().t("Headers must be a valid JSON object"));
        return;
      }
    }
    const res = await verifyOpenAIConnection(
      localStorage.token,
      {
        url: get(url),
        key: get(key),
        config: {
          auth_type: get(auth_type),
          azure: get(azure),
          api_version: get(apiVersion),
          ..._headers ? { headers: _headers } : {}
        }
      },
      direct()
    ).catch((error) => {
      toast.error(`${error}`);
    });
    if (res) {
      toast.success($i18n().t("Server connection verified"));
    }
  };
  const verifyHandler = () => {
    if (ollama()) {
      verifyOllamaHandler();
    } else {
      verifyOpenAIHandler();
    }
  };
  const addModelHandler = () => {
    if (get(modelId)) {
      set(modelIds, [...get(modelIds), get(modelId)]);
      set(modelId, "");
    }
  };
  const submitHandler = async () => {
    set(loading, true);
    if (!ollama() && !get(url)) {
      set(loading, false);
      toast.error($i18n().t("URL is required"));
      return;
    }
    if (get(azure)) {
      if (!get(apiVersion)) {
        set(loading, false);
        toast.error($i18n().t("API Version is required"));
        return;
      }
      if (!get(key) && !["azure_ad", "microsoft_entra_id"].includes(get(auth_type))) {
        set(loading, false);
        toast.error($i18n().t("Key is required"));
        return;
      }
      if (get(modelIds).length === 0) {
        set(loading, false);
        toast.error($i18n().t("Deployment names are required for Azure OpenAI"));
        return;
      }
    }
    if (get(headers)) {
      try {
        const _headers = JSON.parse(get(headers));
        if (typeof _headers !== "object" || Array.isArray(_headers)) {
          throw new Error("Headers must be a valid JSON object");
        }
        set(headers, JSON.stringify(_headers, null, 2));
      } catch (error) {
        toast.error($i18n().t("Headers must be a valid JSON object"));
        return;
      }
    }
    set(url, get(url).replace(/\/$/, ""));
    const connection2 = {
      url: get(url),
      key: get(key),
      config: {
        enable: get(enable),
        tags: get(tags),
        prefix_id: get(prefixId),
        model_ids: get(modelIds),
        connection_type: get(connectionType),
        auth_type: get(auth_type),
        headers: get(headers) ? JSON.parse(get(headers)) : void 0,
        ...!ollama() && get(azure) ? { azure: true, api_version: get(apiVersion) } : {}
      }
    };
    await onSubmit()(connection2);
    set(loading, false);
    show(false);
    set(url, "");
    set(key, "");
    set(auth_type, "bearer");
    set(prefixId, "");
    set(tags, []);
    set(modelIds, []);
  };
  const init$1 = () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    if (connection()) {
      set(url, connection().url);
      set(key, connection().key);
      set(auth_type, connection().config.auth_type ?? "bearer");
      set(headers, ((_a = connection().config) == null ? void 0 : _a.headers) ? JSON.stringify(connection().config.headers, null, 2) : "");
      set(enable, ((_b = connection().config) == null ? void 0 : _b.enable) ?? true);
      set(tags, ((_c = connection().config) == null ? void 0 : _c.tags) ?? []);
      set(prefixId, ((_d = connection().config) == null ? void 0 : _d.prefix_id) ?? "");
      set(modelIds, ((_e = connection().config) == null ? void 0 : _e.model_ids) ?? []);
      if (ollama()) {
        set(connectionType, ((_f = connection().config) == null ? void 0 : _f.connection_type) ?? "local");
      } else {
        set(connectionType, ((_g = connection().config) == null ? void 0 : _g.connection_type) ?? "external");
        set(azure, ((_h = connection().config) == null ? void 0 : _h.azure) ?? false);
        set(apiVersion, ((_i = connection().config) == null ? void 0 : _i.api_version) ?? "");
      }
    }
  };
  onMount(() => {
    init$1();
  });
  legacy_pre_effect(() => (get(url), deep_read_state(direct())), () => {
    set(azure, (get(url).includes("azure.") || get(url).includes("cognitive.microsoft.com")) && !direct() ? true : false);
  });
  legacy_pre_effect(() => deep_read_state(show()), () => {
    if (show()) {
      init$1();
    }
  });
  legacy_pre_effect_reset();
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
      var div = root_1$2();
      var div_1 = child(div);
      var h1 = child(div_1);
      var node = child(h1);
      {
        var consequent = ($$anchor3) => {
          var text$1 = text();
          template_effect(($0) => set_text(text$1, $0), [
            () => ($i18n(), untrack(() => $i18n().t("Edit Connection")))
          ]);
          append($$anchor3, text$1);
        };
        var alternate = ($$anchor3) => {
          var text_1 = text();
          template_effect(($0) => set_text(text_1, $0), [
            () => ($i18n(), untrack(() => $i18n().t("Add Connection")))
          ]);
          append($$anchor3, text_1);
        };
        if_block(node, ($$render) => {
          if (edit()) $$render(consequent);
          else $$render(alternate, false);
        });
      }
      reset(h1);
      var button = sibling(h1, 2);
      var node_1 = child(button);
      XMark(node_1, { className: "size-5" });
      reset(button);
      reset(div_1);
      var div_2 = sibling(div_1, 2);
      var div_3 = child(div_2);
      var form = child(div_3);
      var div_4 = child(form);
      var node_2 = child(div_4);
      {
        var consequent_2 = ($$anchor3) => {
          var div_5 = root_4$2();
          var div_6 = child(div_5);
          var div_7 = child(div_6);
          var text_2 = child(div_7, true);
          reset(div_7);
          var div_8 = sibling(div_7, 2);
          var button_1 = child(div_8);
          var node_3 = child(button_1);
          {
            var consequent_1 = ($$anchor4) => {
              var text_3 = text();
              template_effect(($0) => set_text(text_3, $0), [() => ($i18n(), untrack(() => $i18n().t("Local")))]);
              append($$anchor4, text_3);
            };
            var alternate_1 = ($$anchor4) => {
              var text_4 = text();
              template_effect(($0) => set_text(text_4, $0), [() => ($i18n(), untrack(() => $i18n().t("External")))]);
              append($$anchor4, text_4);
            };
            if_block(node_3, ($$render) => {
              if (get(connectionType) === "local") $$render(consequent_1);
              else $$render(alternate_1, false);
            });
          }
          reset(button_1);
          reset(div_8);
          reset(div_6);
          reset(div_5);
          template_effect(($0) => set_text(text_2, $0), [
            () => ($i18n(), untrack(() => $i18n().t("Connection Type")))
          ]);
          event("click", button_1, () => {
            set(connectionType, get(connectionType) === "local" ? "external" : "local");
          });
          append($$anchor3, div_5);
        };
        if_block(node_2, ($$render) => {
          if (!direct()) $$render(consequent_2);
        });
      }
      var div_9 = sibling(node_2, 2);
      var div_10 = child(div_9);
      var label = child(div_10);
      var text_5 = child(label, true);
      reset(label);
      var div_11 = sibling(label, 2);
      var input = child(div_11);
      remove_input_defaults(input);
      reset(div_11);
      reset(div_10);
      var node_4 = sibling(div_10, 2);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Verify Connection"))));
        Tooltip(node_4, {
          get content() {
            return get($0);
          },
          className: "self-end -mb-1",
          children: ($$anchor3, $$slotProps2) => {
            var button_2 = root_7$1();
            template_effect(($02) => set_attribute(button_2, "aria-label", $02), [
              () => ($i18n(), untrack(() => $i18n().t("Verify Connection")))
            ]);
            event("click", button_2, () => {
              verifyHandler();
            });
            append($$anchor3, button_2);
          },
          $$slots: { default: true }
        });
      }
      var div_12 = sibling(node_4, 2);
      var label_1 = child(div_12);
      var text_6 = child(label_1, true);
      reset(label_1);
      var node_5 = sibling(label_1, 2);
      {
        let $0 = derived_safe_equal(() => (get(enable), $i18n(), untrack(() => get(enable) ? $i18n().t("Enabled") : $i18n().t("Disabled"))));
        Tooltip(node_5, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps2) => {
            Switch_1($$anchor3, {
              id: "toggle-connection",
              get state() {
                return get(enable);
              },
              set state($$value) {
                set(enable, $$value);
              },
              $$legacy: true
            });
          },
          $$slots: { default: true }
        });
      }
      reset(div_12);
      reset(div_9);
      var div_13 = sibling(div_9, 2);
      var div_14 = child(div_13);
      var label_2 = child(div_14);
      var text_7 = child(label_2, true);
      reset(label_2);
      var div_15 = sibling(label_2, 2);
      var div_16 = child(div_15);
      var select = child(div_16);
      template_effect(() => {
        get(auth_type);
        invalidate_inner_signals(() => {
          $settings();
          $i18n();
          ollama();
          direct();
          get(azure);
        });
      });
      var option = child(select);
      var text_8 = child(option, true);
      reset(option);
      option.value = option.__value = "none";
      var option_1 = sibling(option);
      var text_9 = child(option_1, true);
      reset(option_1);
      option_1.value = option_1.__value = "bearer";
      var node_6 = sibling(option_1);
      {
        var consequent_5 = ($$anchor3) => {
          var fragment_6 = root_9();
          var option_2 = first_child(fragment_6);
          var text_10 = child(option_2, true);
          reset(option_2);
          option_2.value = option_2.__value = "session";
          var node_7 = sibling(option_2, 2);
          {
            var consequent_4 = ($$anchor4) => {
              var fragment_7 = root_10$1();
              var option_3 = first_child(fragment_7);
              var text_11 = child(option_3, true);
              reset(option_3);
              option_3.value = option_3.__value = "system_oauth";
              var node_8 = sibling(option_3, 2);
              {
                var consequent_3 = ($$anchor5) => {
                  var option_4 = root_11$1();
                  var text_12 = child(option_4, true);
                  reset(option_4);
                  option_4.value = option_4.__value = "microsoft_entra_id";
                  template_effect(($0) => set_text(text_12, $0), [() => ($i18n(), untrack(() => $i18n().t("Entra ID")))]);
                  append($$anchor5, option_4);
                };
                if_block(node_8, ($$render) => {
                  if (get(azure)) $$render(consequent_3);
                });
              }
              template_effect(($0) => set_text(text_11, $0), [() => ($i18n(), untrack(() => $i18n().t("OAuth")))]);
              append($$anchor4, fragment_7);
            };
            if_block(node_7, ($$render) => {
              if (!direct()) $$render(consequent_4);
            });
          }
          template_effect(($0) => set_text(text_10, $0), [() => ($i18n(), untrack(() => $i18n().t("Session")))]);
          append($$anchor3, fragment_6);
        };
        if_block(node_6, ($$render) => {
          if (!ollama()) $$render(consequent_5);
        });
      }
      reset(select);
      reset(div_16);
      var div_17 = sibling(div_16, 2);
      var node_9 = child(div_17);
      {
        var consequent_6 = ($$anchor3) => {
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("API Key"))));
            SensitiveInput($$anchor3, {
              get placeholder() {
                return get($0);
              },
              required: false,
              get value() {
                return get(key);
              },
              set value($$value) {
                set(key, $$value);
              },
              $$legacy: true
            });
          }
        };
        var alternate_5 = ($$anchor3) => {
          var fragment_9 = comment();
          var node_10 = first_child(fragment_9);
          {
            var consequent_7 = ($$anchor4) => {
              var div_18 = root_14$1();
              var text_13 = child(div_18, true);
              reset(div_18);
              template_effect(
                ($0) => {
                  set_class(div_18, 1, ($settings(), untrack(() => {
                    var _a;
                    return `text-xs self-center translate-y-[1px] ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
                  })));
                  set_text(text_13, $0);
                },
                [
                  () => ($i18n(), untrack(() => $i18n().t("No authentication")))
                ]
              );
              append($$anchor4, div_18);
            };
            var alternate_4 = ($$anchor4) => {
              var fragment_10 = comment();
              var node_11 = first_child(fragment_10);
              {
                var consequent_8 = ($$anchor5) => {
                  var div_19 = root_16$1();
                  var text_14 = child(div_19, true);
                  reset(div_19);
                  template_effect(
                    ($0) => {
                      set_class(div_19, 1, ($settings(), untrack(() => {
                        var _a;
                        return `text-xs self-center translate-y-[1px] ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
                      })));
                      set_text(text_14, $0);
                    },
                    [
                      () => ($i18n(), untrack(() => $i18n().t("Forwards system user session credentials to authenticate")))
                    ]
                  );
                  append($$anchor5, div_19);
                };
                var alternate_3 = ($$anchor5) => {
                  var fragment_11 = comment();
                  var node_12 = first_child(fragment_11);
                  {
                    var consequent_9 = ($$anchor6) => {
                      var div_20 = root_18$1();
                      var text_15 = child(div_20, true);
                      reset(div_20);
                      template_effect(
                        ($0) => {
                          set_class(div_20, 1, ($settings(), untrack(() => {
                            var _a;
                            return `text-xs self-center translate-y-[1px] ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
                          })));
                          set_text(text_15, $0);
                        },
                        [
                          () => ($i18n(), untrack(() => $i18n().t("Forwards system user OAuth access token to authenticate")))
                        ]
                      );
                      append($$anchor6, div_20);
                    };
                    var alternate_2 = ($$anchor6) => {
                      var fragment_12 = comment();
                      var node_13 = first_child(fragment_12);
                      {
                        var consequent_10 = ($$anchor7) => {
                          var div_21 = root_20$1();
                          var text_16 = child(div_21, true);
                          reset(div_21);
                          template_effect(
                            ($0) => {
                              set_class(div_21, 1, ($settings(), untrack(() => {
                                var _a;
                                return `text-xs self-center translate-y-[1px] ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
                              })));
                              set_text(text_16, $0);
                            },
                            [
                              () => ($i18n(), untrack(() => $i18n().t("Uses DefaultAzureCredential to authenticate")))
                            ]
                          );
                          append($$anchor7, div_21);
                        };
                        if_block(
                          node_13,
                          ($$render) => {
                            if (get(auth_type), untrack(() => ["azure_ad", "microsoft_entra_id"].includes(get(auth_type)))) $$render(consequent_10);
                          },
                          true
                        );
                      }
                      append($$anchor6, fragment_12);
                    };
                    if_block(
                      node_12,
                      ($$render) => {
                        if (get(auth_type) === "system_oauth") $$render(consequent_9);
                        else $$render(alternate_2, false);
                      },
                      true
                    );
                  }
                  append($$anchor5, fragment_11);
                };
                if_block(
                  node_11,
                  ($$render) => {
                    if (get(auth_type) === "session") $$render(consequent_8);
                    else $$render(alternate_3, false);
                  },
                  true
                );
              }
              append($$anchor4, fragment_10);
            };
            if_block(
              node_10,
              ($$render) => {
                if (get(auth_type) === "none") $$render(consequent_7);
                else $$render(alternate_4, false);
              },
              true
            );
          }
          append($$anchor3, fragment_9);
        };
        if_block(node_9, ($$render) => {
          if (get(auth_type) === "bearer") $$render(consequent_6);
          else $$render(alternate_5, false);
        });
      }
      reset(div_17);
      reset(div_15);
      reset(div_14);
      reset(div_13);
      var node_14 = sibling(div_13, 2);
      {
        var consequent_11 = ($$anchor3) => {
          var div_22 = root_21();
          var div_23 = child(div_22);
          var label_3 = child(div_23);
          var text_17 = child(label_3, true);
          reset(label_3);
          var div_24 = sibling(label_3, 2);
          var node_15 = child(div_24);
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t('Enter additional headers in JSON format (e.g. {"X-Custom-Header": "value"}'))));
            Tooltip(node_15, {
              get content() {
                return get($0);
              },
              children: ($$anchor4, $$slotProps2) => {
                {
                  let $02 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Enter additional headers in JSON format"))));
                  Textarea($$anchor4, {
                    className: "w-full text-sm outline-hidden",
                    get placeholder() {
                      return get($02);
                    },
                    required: false,
                    minSize: 30,
                    get value() {
                      return get(headers);
                    },
                    set value($$value) {
                      set(headers, $$value);
                    },
                    $$legacy: true
                  });
                }
              },
              $$slots: { default: true }
            });
          }
          reset(div_24);
          reset(div_23);
          reset(div_22);
          template_effect(
            ($0) => {
              set_class(label_3, 1, ($settings(), untrack(() => {
                var _a;
                return `mb-0.5 text-xs text-gray-500
								${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : ""}`;
              })));
              set_text(text_17, $0);
            },
            [() => ($i18n(), untrack(() => $i18n().t("Headers")))]
          );
          append($$anchor3, div_22);
        };
        if_block(node_14, ($$render) => {
          if (!ollama() && !direct()) $$render(consequent_11);
        });
      }
      var div_25 = sibling(node_14, 2);
      var div_26 = child(div_25);
      var label_4 = child(div_26);
      var text_18 = child(label_4, true);
      reset(label_4);
      var div_27 = sibling(label_4, 2);
      var node_16 = child(div_27);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Prefix ID is used to avoid conflicts with other connections by adding a prefix to the model IDs - leave empty to disable"))));
        Tooltip(node_16, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps2) => {
            var input_1 = root_23$1();
            remove_input_defaults(input_1);
            template_effect(
              ($02) => {
                set_class(input_1, 1, ($settings(), untrack(() => {
                  var _a;
                  return `w-full text-sm bg-transparent ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
                })));
                set_attribute(input_1, "placeholder", $02);
              },
              [() => ($i18n(), untrack(() => $i18n().t("Prefix ID")))]
            );
            bind_value(input_1, () => get(prefixId), ($$value) => set(prefixId, $$value));
            append($$anchor3, input_1);
          },
          $$slots: { default: true }
        });
      }
      reset(div_27);
      reset(div_26);
      reset(div_25);
      var node_17 = sibling(div_25, 2);
      {
        var consequent_12 = ($$anchor3) => {
          var div_28 = root_24();
          var label_5 = child(div_28);
          var text_19 = child(label_5, true);
          reset(label_5);
          var div_29 = sibling(label_5, 2);
          var button_3 = child(div_29);
          var text_20 = child(button_3, true);
          reset(button_3);
          reset(div_29);
          reset(div_28);
          template_effect(
            ($0, $1) => {
              set_class(label_5, 1, ($settings(), untrack(() => {
                var _a;
                return `mb-0.5 text-xs text-gray-500
								${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : ""}`;
              })));
              set_text(text_19, $0);
              set_text(text_20, $1);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Provider Type"))),
              () => (get(azure), $i18n(), untrack(() => get(azure) ? $i18n().t("Azure OpenAI") : $i18n().t("OpenAI")))
            ]
          );
          event("click", button_3, () => {
            set(azure, !get(azure));
          });
          append($$anchor3, div_28);
        };
        if_block(node_17, ($$render) => {
          if (!ollama() && !direct()) $$render(consequent_12);
        });
      }
      var node_18 = sibling(node_17, 2);
      {
        var consequent_13 = ($$anchor3) => {
          var div_30 = root_25$1();
          var div_31 = child(div_30);
          var label_6 = child(div_31);
          var text_21 = child(label_6, true);
          reset(label_6);
          var div_32 = sibling(label_6, 2);
          var input_2 = child(div_32);
          remove_input_defaults(input_2);
          reset(div_32);
          reset(div_31);
          reset(div_30);
          template_effect(
            ($0, $1) => {
              set_class(label_6, 1, ($settings(), untrack(() => {
                var _a;
                return `mb-0.5 text-xs text-gray-500
								${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : ""}`;
              })));
              set_text(text_21, $0);
              set_class(input_2, 1, ($settings(), untrack(() => {
                var _a;
                return `w-full text-sm bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-700 ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
              })));
              set_attribute(input_2, "placeholder", $1);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("API Version"))),
              () => ($i18n(), untrack(() => $i18n().t("API Version")))
            ]
          );
          bind_value(input_2, () => get(apiVersion), ($$value) => set(apiVersion, $$value));
          append($$anchor3, div_30);
        };
        if_block(node_18, ($$render) => {
          if (get(azure)) $$render(consequent_13);
        });
      }
      var div_33 = sibling(node_18, 2);
      var div_34 = child(div_33);
      var div_35 = child(div_34);
      var text_22 = child(div_35, true);
      reset(div_35);
      reset(div_34);
      var node_19 = sibling(div_34, 2);
      {
        var consequent_14 = ($$anchor3) => {
          var ul = root_26();
          each(ul, 5, () => get(modelIds), index, ($$anchor4, modelId2, modelIdx, $$array) => {
            var li = root_27$1();
            var div_36 = child(li);
            var text_23 = child(div_36, true);
            reset(div_36);
            var div_37 = sibling(div_36, 2);
            var button_4 = child(div_37);
            var node_20 = child(button_4);
            Minus(node_20, { strokeWidth: "2", className: "size-3.5" });
            reset(button_4);
            reset(div_37);
            reset(li);
            template_effect(
              ($0) => {
                set_text(text_23, get(modelId2));
                set_attribute(button_4, "aria-label", $0);
              },
              [
                () => ($i18n(), get(modelId2), untrack(() => $i18n().t(`Remove {{MODELID}} from list.`, { MODELID: get(modelId2) })))
              ]
            );
            event("click", button_4, () => {
              set(modelIds, get(modelIds).filter((_, idx) => idx !== modelIdx));
            });
            append($$anchor4, li);
          });
          reset(ul);
          append($$anchor3, ul);
        };
        var alternate_8 = ($$anchor3) => {
          var div_38 = root_28();
          var node_21 = child(div_38);
          {
            var consequent_15 = ($$anchor4) => {
              var text_24 = text();
              template_effect(($0) => set_text(text_24, $0), [
                () => ($i18n(), get(url), untrack(() => $i18n().t('Leave empty to include all models from "{{url}}/api/tags" endpoint', { url: get(url) })))
              ]);
              append($$anchor4, text_24);
            };
            var alternate_7 = ($$anchor4) => {
              var fragment_15 = comment();
              var node_22 = first_child(fragment_15);
              {
                var consequent_16 = ($$anchor5) => {
                  var text_25 = text();
                  template_effect(($0) => set_text(text_25, $0), [
                    () => ($i18n(), untrack(() => $i18n().t("Deployment names are required for Azure OpenAI")))
                  ]);
                  append($$anchor5, text_25);
                };
                var alternate_6 = ($$anchor5) => {
                  var text_26 = text();
                  template_effect(($0) => set_text(text_26, $0), [
                    () => ($i18n(), get(url), untrack(() => $i18n().t('Leave empty to include all models from "{{url}}/models" endpoint', { url: get(url) })))
                  ]);
                  append($$anchor5, text_26);
                };
                if_block(
                  node_22,
                  ($$render) => {
                    if (get(azure)) $$render(consequent_16);
                    else $$render(alternate_6, false);
                  },
                  true
                );
              }
              append($$anchor4, fragment_15);
            };
            if_block(node_21, ($$render) => {
              if (ollama()) $$render(consequent_15);
              else $$render(alternate_7, false);
            });
          }
          reset(div_38);
          template_effect(() => set_class(div_38, 1, ($settings(), untrack(() => {
            var _a;
            return `text-gray-500 text-xs text-center py-2 px-10
								${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : ""}`;
          }))));
          append($$anchor3, div_38);
        };
        if_block(node_19, ($$render) => {
          if (get(modelIds), untrack(() => get(modelIds).length > 0)) $$render(consequent_14);
          else $$render(alternate_8, false);
        });
      }
      reset(div_33);
      var div_39 = sibling(div_33, 2);
      var label_7 = child(div_39);
      var text_27 = child(label_7, true);
      reset(label_7);
      var input_3 = sibling(label_7, 2);
      remove_input_defaults(input_3);
      var div_40 = sibling(input_3, 2);
      var button_5 = child(div_40);
      var node_23 = child(button_5);
      Plus(node_23, { className: "size-3.5", strokeWidth: "2" });
      reset(button_5);
      reset(div_40);
      reset(div_39);
      reset(div_4);
      var div_41 = sibling(div_4, 2);
      var div_42 = child(div_41);
      var div_43 = child(div_42);
      var text_28 = child(div_43, true);
      reset(div_43);
      var div_44 = sibling(div_43, 2);
      var node_24 = child(div_44);
      Tags(node_24, {
        get tags() {
          return get(tags);
        },
        set tags($$value) {
          set(tags, $$value);
        },
        $$events: {
          add: (e) => {
            set(tags, [...get(tags), { name: e.detail }]);
          },
          delete: (e) => {
            set(tags, get(tags).filter((tag) => tag.name !== e.detail));
          }
        },
        $$legacy: true
      });
      reset(div_44);
      reset(div_42);
      reset(div_41);
      var div_45 = sibling(div_41, 2);
      var node_25 = child(div_45);
      {
        var consequent_17 = ($$anchor3) => {
          var button_6 = root_33$1();
          var text_29 = child(button_6, true);
          reset(button_6);
          template_effect(($0) => set_text(text_29, $0), [() => ($i18n(), untrack(() => $i18n().t("Delete")))]);
          event("click", button_6, () => {
            onDelete()();
            show(false);
          });
          append($$anchor3, button_6);
        };
        if_block(node_25, ($$render) => {
          if (edit()) $$render(consequent_17);
        });
      }
      var button_7 = sibling(node_25, 2);
      var text_30 = child(button_7);
      var node_26 = sibling(text_30);
      {
        var consequent_18 = ($$anchor3) => {
          var div_46 = root_34$1();
          var node_27 = child(div_46);
          Spinner(node_27, {});
          reset(div_46);
          append($$anchor3, div_46);
        };
        if_block(node_26, ($$render) => {
          if (get(loading)) $$render(consequent_18);
        });
      }
      reset(button_7);
      reset(div_45);
      reset(form);
      reset(div_3);
      reset(div_2);
      reset(div);
      template_effect(
        ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) => {
          set_attribute(button, "aria-label", $0);
          set_class(label, 1, ($settings(), untrack(() => {
            var _a;
            return `mb-0.5 text-xs text-gray-500
								${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : ""}`;
          })));
          set_text(text_5, $1);
          set_class(input, 1, ($settings(), untrack(() => {
            var _a;
            return `w-full text-sm bg-transparent ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
          })));
          set_attribute(input, "placeholder", $2);
          set_text(text_6, $3);
          set_class(label_2, 1, ($settings(), untrack(() => {
            var _a;
            return `text-xs ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
          })));
          set_text(text_7, $4);
          set_class(select, 1, ($settings(), untrack(() => {
            var _a;
            return `w-full text-sm bg-transparent pr-5 ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
          })));
          set_text(text_8, $5);
          set_text(text_9, $6);
          set_class(label_4, 1, ($settings(), untrack(() => {
            var _a;
            return `mb-0.5 text-xs text-gray-500
								${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : ""}`;
          })));
          set_text(text_18, $7);
          set_class(div_35, 1, ($settings(), untrack(() => {
            var _a;
            return `mb-0.5 text-xs text-gray-500
								${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : ""}`;
          })));
          set_text(text_22, $8);
          set_text(text_27, $9);
          set_class(input_3, 1, `w-full py-1 text-sm rounded-lg bg-transparent ${get(modelId) ? "" : "text-gray-500"} ${($settings(), untrack(() => {
            var _a;
            return ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "dark:placeholder:text-gray-100 placeholder:text-gray-700" : "placeholder:text-gray-300 dark:placeholder:text-gray-700 outline-hidden";
          })) ?? ""}`);
          set_attribute(input_3, "placeholder", $10);
          set_attribute(button_5, "aria-label", $11);
          set_class(div_43, 1, ($settings(), untrack(() => {
            var _a;
            return `mb-0.5 text-xs text-gray-500
								${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : ""}`;
          })));
          set_text(text_28, $12);
          set_class(button_7, 1, `px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center ${get(loading) ? " cursor-not-allowed" : ""}`);
          button_7.disabled = get(loading);
          set_text(text_30, `${$13 ?? ""} `);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Close modal"))),
          () => ($i18n(), untrack(() => $i18n().t("URL"))),
          () => ($i18n(), untrack(() => $i18n().t("API Base URL"))),
          () => ($i18n(), untrack(() => $i18n().t("Toggle whether current connection is active."))),
          () => ($i18n(), untrack(() => $i18n().t("Auth"))),
          () => ($i18n(), untrack(() => $i18n().t("None"))),
          () => ($i18n(), untrack(() => $i18n().t("Bearer"))),
          () => ($i18n(), untrack(() => $i18n().t("Prefix ID"))),
          () => ($i18n(), untrack(() => $i18n().t("Model IDs"))),
          () => ($i18n(), untrack(() => $i18n().t("Add a model ID"))),
          () => ($i18n(), untrack(() => $i18n().t("Add a model ID"))),
          () => ($i18n(), untrack(() => $i18n().t("Add"))),
          () => ($i18n(), untrack(() => $i18n().t("Tags"))),
          () => ($i18n(), untrack(() => $i18n().t("Save")))
        ]
      );
      event("click", button, () => {
        show(false);
      });
      bind_value(input, () => get(url), ($$value) => set(url, $$value));
      bind_select_value(select, () => get(auth_type), ($$value) => set(auth_type, $$value));
      bind_value(input_3, () => get(modelId), ($$value) => set(modelId, $$value));
      event("click", button_5, () => {
        addModelHandler();
      });
      event("submit", form, (e) => {
        e.preventDefault();
        submitHandler();
      });
      append($$anchor2, div);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root_7 = from_html(` <span class="text-gray-500"> </span>`, 1);
var root_4$1 = from_html(`<div class="flex gap-2 mb-1.5"><div class="flex w-full justify-between items-center"><div class=" text-xs text-gray-500"> </div> <div><button type="button" class=" text-xs text-gray-700 dark:text-gray-300"><!></button></div></div></div>`);
var root_8 = from_html(`<button class="self-center p-1 bg-transparent hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-850 rounded-lg transition" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4" aria-hidden="true"><path fill-rule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clip-rule="evenodd"></path></svg></button>`);
var root_11 = from_html(`<div class="flex-1 flex items-center"><label for="url-or-path" class="sr-only"> </label> <input type="text" id="url-or-path" autocomplete="off" required/></div>`);
var root_13 = from_html(`<div><label for="url-or-path" class="sr-only"> </label> <textarea autocomplete="off" required rows="5"></textarea></div>`);
var root_14 = from_html(`<div> </div>`);
var root_10 = from_html(`<div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><div class="flex justify-between items-center mb-0.5"><div class="flex gap-2 items-center"><div for="select-bearer-or-session"> </div></div></div> <div class="flex gap-2"><div class="flex-shrink-0 self-start"><select id="select-bearer-or-session"><option> </option><option> </option></select></div> <div class="flex flex-1 items-center"><!></div></div> <!></div></div>`);
var root_16 = from_html(`<button class=" text-xs underline dark:text-gray-500 dark:hover:text-gray-200 text-gray-700 hover:text-gray-900 transition" type="button"> </button>`);
var root_17 = from_html(`<div class="text-xs font-medium px-1.5 rounded-md bg-yellow-500/20 text-yellow-700 dark:text-yellow-200"> </div>`);
var root_18 = from_html(`<div class="text-xs font-medium px-1.5 rounded-md bg-green-500/20 text-green-700 dark:text-green-200"> </div>`);
var root_15 = from_html(`<div class="flex items-center gap-2"><div class="flex flex-col justify-end items-center shrink-0"><!></div> <!></div>`);
var root_20 = from_html(`<option> </option>`);
var root_19 = from_html(`<option> </option> <!>`, 1);
var root_23 = from_html(`<div> </div>`);
var root_25 = from_html(`<div> </div>`);
var root_27 = from_html(`<div> </div>`);
var root_29 = from_html(`<div> </div>`);
var root_32 = from_html(`<span class="text-xs text-gray-200 dark:text-gray-800 ml-0.5"> </span>`);
var root_30 = from_html(`<div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><label for="headers-input"> </label> <div class="flex-1"><!></div></div></div> <hr class=" border-gray-100 dark:border-gray-700/10 my-2.5 w-full"/> <div class="flex gap-2"><div class="flex flex-col w-full"><label for="enter-id"> <!></label> <div class="flex-1"><input id="enter-id" type="text" autocomplete="off"/></div></div></div> <div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><label for="enter-name"> </label> <div class="flex-1"><input id="enter-name" type="text" autocomplete="off" required/></div></div></div> <div class="flex flex-col w-full mt-2"><label for="description"> </label> <div class="flex-1"><input id="description" type="text" autocomplete="off"/></div></div> <div class="flex flex-col w-full mt-2"><label for="function-name-filter-list"> </label> <div class="flex-1"><input id="function-name-filter-list" type="text" autocomplete="off"/></div></div> <hr class=" border-gray-100 dark:border-gray-700/10 my-2.5 w-full"/> <div class="my-2 -mx-2"><div class="px-4 py-3 bg-gray-50 dark:bg-gray-950 rounded-3xl"><!></div></div>`, 1);
var root_33 = from_html(`<div class=" bg-yellow-500/20 text-yellow-700 dark:text-yellow-200 rounded-2xl text-xs px-4 py-3 mb-2"><span class="font-medium"> </span> <a class="font-medium underline" href="https://docs.openwebui.com/features/mcp" target="_blank"> </a></div>`);
var root_34 = from_html(`<button class="px-3.5 py-1.5 text-sm font-medium dark:bg-black dark:hover:bg-gray-900 dark:text-white bg-white text-black hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center" type="button"> </button>`);
var root_35 = from_html(`<div class="ml-2 self-center"><!></div>`);
var root_1$1 = from_html(`<div><div class=" flex justify-between dark:text-gray-100 px-5 pt-4 pb-2"><h1 class=" text-lg font-medium self-center font-primary"><!></h1> <div class="flex items-center gap-3"><div class="flex gap-1.5 text-xs justify-end"><button class=" hover:underline" type="button"> </button> <button class=" hover:underline" type="button"> </button></div> <button class="self-center"><!></button></div></div> <div class="flex flex-col md:flex-row w-full px-4 pb-4 md:space-x-4 dark:text-gray-200"><div class=" flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><input type="file" hidden="" accept=".json"/> <form class="flex flex-col w-full"><div class="px-1"><!> <div class="flex gap-2"><div class="flex flex-col w-full"><div class="flex justify-between mb-0.5"><label for="api-base-url"> </label></div> <div class="flex flex-1 items-center"><input id="api-base-url" type="text" autocomplete="off" required/> <!> <!></div></div></div> <!> <div class="flex gap-2 mt-2"><div class="flex flex-col w-full"><div class="flex justify-between items-center"><div class="flex gap-2 items-center"><div for="select-bearer-or-session"> </div></div> <!></div> <div class="flex gap-2"><div class="flex-shrink-0 self-start"><select id="select-bearer-or-session"><option> </option><option> </option><option> </option><!></select></div> <div class="flex flex-1 items-center"><!></div></div></div></div> <!></div> <!> <div class="flex justify-between pt-3 text-sm font-medium gap-1.5"><div></div> <div class="flex gap-1.5"><!> <button type="submit"> <!></button></div></div></form></div></div></div>`);
function AddToolServerModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const { saveAs } = fileSaver;
  const i18n = getContext("i18n");
  let onSubmit = prop($$props, "onSubmit", 8, () => {
  });
  let onDelete = prop($$props, "onDelete", 8, () => {
  });
  let show = prop($$props, "show", 12, false);
  let edit = prop($$props, "edit", 8, false);
  let direct = prop($$props, "direct", 8, false);
  let connection = prop($$props, "connection", 8, null);
  let inputElement = mutable_source(null);
  let type = mutable_source(
    "openapi"
    // 'openapi', 'mcp'
  );
  let url = mutable_source("");
  let spec_type = mutable_source(
    "url"
    // 'url', 'json'
  );
  let spec = mutable_source(
    ""
    // used when spec_type is 'json'
  );
  let path = mutable_source("openapi.json");
  let auth_type = mutable_source("bearer");
  let key = mutable_source("");
  let headers = mutable_source("");
  let functionNameFilterList = mutable_source([]);
  let accessControl = mutable_source({});
  let id = mutable_source("");
  let name = mutable_source("");
  let description = mutable_source("");
  let oauthClientInfo = mutable_source(null);
  let enable = mutable_source(true);
  let loading = mutable_source(false);
  const registerOAuthClientHandler = async () => {
    if (get(url) === "") {
      toast.error($i18n().t("Please enter a valid URL"));
      return;
    }
    if (get(id) === "") {
      toast.error($i18n().t("Please enter a valid ID"));
      return;
    }
    const res = await registerOAuthClient(localStorage.token, { url: get(url), client_id: get(id) }, "mcp").catch((err) => {
      toast.error($i18n().t("Registration failed"));
      return null;
    });
    if (res) {
      toast.warning($i18n().t("Please save the connection to persist the OAuth client information and do not change the ID"));
      toast.success($i18n().t("Registration successful"));
      console.debug("Registration successful", res);
      set(oauthClientInfo, (res == null ? void 0 : res.oauth_client_info) ?? null);
    }
  };
  const verifyHandler = async () => {
    if (get(url) === "") {
      toast.error($i18n().t("Please enter a valid URL"));
      return;
    }
    if (["openapi", ""].includes(get(type))) {
      if (get(spec_type) === "json" && get(spec) === "") {
        toast.error($i18n().t("Please enter a valid JSON spec"));
        return;
      }
      if (get(spec_type) === "url" && get(path) === "") {
        toast.error($i18n().t("Please enter a valid path"));
        return;
      }
    }
    if (get(headers)) {
      try {
        let _headers = JSON.parse(get(headers));
        if (typeof _headers !== "object" || Array.isArray(_headers)) {
          _headers = null;
          throw new Error("Headers must be a valid JSON object");
        }
        set(headers, JSON.stringify(_headers, null, 2));
      } catch (error) {
        toast.error($i18n().t("Headers must be a valid JSON object"));
        return;
      }
    }
    if (direct()) {
      const res = await getToolServerData(get(auth_type) === "bearer" ? get(key) : localStorage.token, get(path).includes("://") ? get(path) : `${get(url)}${get(path).startsWith("/") ? "" : "/"}${get(path)}`).catch((err) => {
        toast.error($i18n().t("Connection failed"));
      });
      if (res) {
        toast.success($i18n().t("Connection successful"));
        console.debug("Connection successful", res);
      }
    } else {
      const res = await verifyToolServerConnection(localStorage.token, {
        url: get(url),
        path: get(path),
        type: get(type),
        auth_type: get(auth_type),
        headers: get(headers) ? JSON.parse(get(headers)) : void 0,
        key: get(key),
        config: { enable: get(enable), access_control: get(accessControl) },
        info: {
          id: get(id),
          name: get(name),
          description: get(description)
        }
      }).catch((err) => {
        toast.error($i18n().t("Connection failed"));
      });
      if (res) {
        toast.success($i18n().t("Connection successful"));
        console.debug("Connection successful", res);
      }
    }
  };
  const importHandler = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event2) => {
      const json = event2.target.result;
      console.log("importHandler", json);
      try {
        let data = JSON.parse(json);
        if (Array.isArray(data)) {
          if (data.length === 0) {
            toast.error($i18n().t("Please select a valid JSON file"));
            return;
          }
          data = data[0];
        }
        if (data.type) set(type, data.type);
        if (data.url) set(url, data.url);
        if (data.spec_type) set(spec_type, data.spec_type);
        if (data.spec) set(spec, data.spec);
        if (data.path) set(path, data.path);
        if (data.auth_type) set(auth_type, data.auth_type);
        if (data.headers) set(headers, JSON.stringify(data.headers, null, 2));
        if (data.key) set(key, data.key);
        if (data.info) {
          set(id, data.info.id ?? "");
          set(name, data.info.name ?? "");
          set(description, data.info.description ?? "");
        }
        if (data.config) {
          set(enable, data.config.enable ?? true);
          set(accessControl, data.config.access_control ?? {});
        }
        toast.success($i18n().t("Import successful"));
      } catch (error) {
        toast.error($i18n().t("Please select a valid JSON file"));
      }
    };
    reader.readAsText(file);
  };
  const exportHandler = async () => {
    const json = JSON.stringify([
      {
        type: get(type),
        url: get(url),
        spec_type: get(spec_type),
        spec: get(spec),
        path: get(path),
        auth_type: get(auth_type),
        headers: get(headers) ? JSON.parse(get(headers)) : void 0,
        key: get(key),
        info: {
          id: get(id),
          name: get(name),
          description: get(description)
        }
      }
    ]);
    const blob = new Blob([json], { type: "application/json" });
    saveAs(blob, `tool-server-${get(id) || get(name) || "export"}.json`);
  };
  const submitHandler = async () => {
    set(loading, true);
    set(url, get(url).replace(/\/$/, ""));
    if (get(id).includes(":") || get(id).includes("|")) {
      toast.error($i18n().t('ID cannot contain ":" or "|" characters'));
      set(loading, false);
      return;
    }
    if (get(type) === "mcp" && get(auth_type) === "oauth_2.1" && !get(oauthClientInfo)) {
      toast.error($i18n().t("Please register the OAuth client"));
      set(loading, false);
      return;
    }
    if (get(spec_type) === "json") {
      try {
        const specJSON = JSON.parse(get(spec));
        set(spec, JSON.stringify(specJSON, null, 2));
      } catch (e) {
        toast.error($i18n().t("Please enter a valid JSON spec"));
        set(loading, false);
        return;
      }
    }
    if (get(headers)) {
      try {
        const _headers = JSON.parse(get(headers));
        if (typeof _headers !== "object" || Array.isArray(_headers)) {
          throw new Error("Headers must be a valid JSON object");
        }
        set(headers, JSON.stringify(_headers, null, 2));
      } catch (error) {
        toast.error($i18n().t("Headers must be a valid JSON object"));
        set(loading, false);
        return;
      }
    }
    const connection2 = {
      type: get(type),
      url: get(url),
      spec_type: get(spec_type),
      spec: get(spec),
      path: get(path),
      auth_type: get(auth_type),
      headers: get(headers) ? JSON.parse(get(headers)) : void 0,
      key: get(key),
      config: {
        enable: get(enable),
        function_name_filter_list: get(functionNameFilterList),
        access_control: get(accessControl)
      },
      info: {
        id: get(id),
        name: get(name),
        description: get(description),
        ...get(oauthClientInfo) ? { oauth_client_info: get(oauthClientInfo) } : {}
      }
    };
    await onSubmit()(connection2);
    set(loading, false);
    show(false);
    set(type, "openapi");
    set(url, "");
    set(spec_type, "url");
    set(spec, "");
    set(path, "openapi.json");
    set(key, "");
    set(auth_type, "bearer");
    set(id, "");
    set(name, "");
    set(description, "");
    set(oauthClientInfo, null);
    set(enable, true);
    set(functionNameFilterList, []);
    set(accessControl, null);
  };
  const init$1 = () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
    if (connection()) {
      set(type, ((_a = connection()) == null ? void 0 : _a.type) ?? "openapi");
      set(url, connection().url);
      set(spec_type, ((_b = connection()) == null ? void 0 : _b.spec_type) ?? "url");
      set(spec, ((_c = connection()) == null ? void 0 : _c.spec) ?? "");
      set(path, ((_d = connection()) == null ? void 0 : _d.path) ?? "openapi.json");
      set(auth_type, ((_e = connection()) == null ? void 0 : _e.auth_type) ?? "bearer");
      set(headers, ((_f = connection()) == null ? void 0 : _f.headers) ? JSON.stringify(connection().headers, null, 2) : "");
      set(key, ((_g = connection()) == null ? void 0 : _g.key) ?? "");
      set(id, ((_h = connection().info) == null ? void 0 : _h.id) ?? "");
      set(name, ((_i = connection().info) == null ? void 0 : _i.name) ?? "");
      set(description, ((_j = connection().info) == null ? void 0 : _j.description) ?? "");
      set(oauthClientInfo, ((_k = connection().info) == null ? void 0 : _k.oauth_client_info) ?? null);
      set(enable, ((_l = connection().config) == null ? void 0 : _l.enable) ?? true);
      set(functionNameFilterList, ((_m = connection().config) == null ? void 0 : _m.function_name_filter_list) ?? []);
      set(accessControl, ((_n = connection().config) == null ? void 0 : _n.access_control) ?? null);
    }
  };
  onMount(() => {
    init$1();
  });
  legacy_pre_effect(() => deep_read_state(show()), () => {
    if (show()) {
      init$1();
    }
  });
  legacy_pre_effect_reset();
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
      var h1 = child(div_1);
      var node = child(h1);
      {
        var consequent = ($$anchor3) => {
          var text$1 = text();
          template_effect(($0) => set_text(text$1, $0), [
            () => ($i18n(), untrack(() => $i18n().t("Edit Connection")))
          ]);
          append($$anchor3, text$1);
        };
        var alternate = ($$anchor3) => {
          var text_1 = text();
          template_effect(($0) => set_text(text_1, $0), [
            () => ($i18n(), untrack(() => $i18n().t("Add Connection")))
          ]);
          append($$anchor3, text_1);
        };
        if_block(node, ($$render) => {
          if (edit()) $$render(consequent);
          else $$render(alternate, false);
        });
      }
      reset(h1);
      var div_2 = sibling(h1, 2);
      var div_3 = child(div_2);
      var button = child(div_3);
      var text_2 = child(button, true);
      reset(button);
      var button_1 = sibling(button, 2);
      var text_3 = child(button_1, true);
      reset(button_1);
      reset(div_3);
      var button_2 = sibling(div_3, 2);
      var node_1 = child(button_2);
      XMark(node_1, { className: "size-5" });
      reset(button_2);
      reset(div_2);
      reset(div_1);
      var div_4 = sibling(div_1, 2);
      var div_5 = child(div_4);
      var input = child(div_5);
      bind_this(input, ($$value) => set(inputElement, $$value), () => get(inputElement));
      var form = sibling(input, 2);
      var div_6 = child(form);
      var node_2 = child(div_6);
      {
        var consequent_3 = ($$anchor3) => {
          var div_7 = root_4$1();
          var div_8 = child(div_7);
          var div_9 = child(div_8);
          var text_4 = child(div_9, true);
          reset(div_9);
          var div_10 = sibling(div_9, 2);
          var button_3 = child(div_10);
          var node_3 = child(button_3);
          {
            var consequent_1 = ($$anchor4) => {
              var text_5 = text();
              template_effect(($0) => set_text(text_5, $0), [() => ($i18n(), untrack(() => $i18n().t("OpenAPI")))]);
              append($$anchor4, text_5);
            };
            var alternate_1 = ($$anchor4) => {
              var fragment_4 = comment();
              var node_4 = first_child(fragment_4);
              {
                var consequent_2 = ($$anchor5) => {
                  var fragment_5 = root_7();
                  var text_6 = first_child(fragment_5);
                  var span = sibling(text_6);
                  var text_7 = child(span, true);
                  reset(span);
                  template_effect(
                    ($0, $1) => {
                      set_text(text_6, `${$0 ?? ""} `);
                      set_text(text_7, $1);
                    },
                    [
                      () => ($i18n(), untrack(() => $i18n().t("MCP"))),
                      () => ($i18n(), untrack(() => $i18n().t("Streamable HTTP")))
                    ]
                  );
                  append($$anchor5, fragment_5);
                };
                if_block(
                  node_4,
                  ($$render) => {
                    if (get(type) === "mcp") $$render(consequent_2);
                  },
                  true
                );
              }
              append($$anchor4, fragment_4);
            };
            if_block(node_3, ($$render) => {
              if (get(type), untrack(() => ["", "openapi"].includes(get(type)))) $$render(consequent_1);
              else $$render(alternate_1, false);
            });
          }
          reset(button_3);
          reset(div_10);
          reset(div_8);
          reset(div_7);
          template_effect(($0) => set_text(text_4, $0), [() => ($i18n(), untrack(() => $i18n().t("Type")))]);
          event("click", button_3, () => {
            set(type, ["", "openapi"].includes(get(type)) ? "mcp" : "openapi");
          });
          append($$anchor3, div_7);
        };
        if_block(node_2, ($$render) => {
          if (!direct()) $$render(consequent_3);
        });
      }
      var div_11 = sibling(node_2, 2);
      var div_12 = child(div_11);
      var div_13 = child(div_12);
      var label = child(div_13);
      var text_8 = child(label, true);
      reset(label);
      reset(div_13);
      var div_14 = sibling(div_13, 2);
      var input_1 = child(div_14);
      remove_input_defaults(input_1);
      var node_5 = sibling(input_1, 2);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Verify Connection"))));
        Tooltip(node_5, {
          get content() {
            return get($0);
          },
          className: "shrink-0 flex items-center mr-1",
          children: ($$anchor3, $$slotProps2) => {
            var button_4 = root_8();
            template_effect(($02) => set_attribute(button_4, "aria-label", $02), [
              () => ($i18n(), untrack(() => $i18n().t("Verify Connection")))
            ]);
            event("click", button_4, () => {
              verifyHandler();
            });
            append($$anchor3, button_4);
          },
          $$slots: { default: true }
        });
      }
      var node_6 = sibling(node_5, 2);
      {
        let $0 = derived_safe_equal(() => (get(enable), $i18n(), untrack(() => get(enable) ? $i18n().t("Enabled") : $i18n().t("Disabled"))));
        Tooltip(node_6, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps2) => {
            Switch_1($$anchor3, {
              get state() {
                return get(enable);
              },
              set state($$value) {
                set(enable, $$value);
              },
              $$legacy: true
            });
          },
          $$slots: { default: true }
        });
      }
      reset(div_14);
      reset(div_12);
      reset(div_11);
      var node_7 = sibling(div_11, 2);
      {
        var consequent_7 = ($$anchor3) => {
          var div_15 = root_10();
          var div_16 = child(div_15);
          var div_17 = child(div_16);
          var div_18 = child(div_17);
          var div_19 = child(div_18);
          var text_9 = child(div_19, true);
          reset(div_19);
          reset(div_18);
          reset(div_17);
          var div_20 = sibling(div_17, 2);
          var div_21 = child(div_20);
          var select = child(div_21);
          template_effect(() => {
            get(spec_type);
            invalidate_inner_signals(() => {
              $settings();
              $i18n();
            });
          });
          var option = child(select);
          var text_10 = child(option, true);
          reset(option);
          option.value = option.__value = "url";
          var option_1 = sibling(option);
          var text_11 = child(option_1, true);
          reset(option_1);
          option_1.value = option_1.__value = "json";
          reset(select);
          reset(div_21);
          var div_22 = sibling(div_21, 2);
          var node_8 = child(div_22);
          {
            var consequent_4 = ($$anchor4) => {
              var div_23 = root_11();
              var label_1 = child(div_23);
              var text_12 = child(label_1, true);
              reset(label_1);
              var input_2 = sibling(label_1, 2);
              remove_input_defaults(input_2);
              reset(div_23);
              template_effect(
                ($0, $1) => {
                  set_text(text_12, $0);
                  set_class(input_2, 1, ($settings(), untrack(() => {
                    var _a;
                    return `w-full text-sm bg-transparent ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
                  })));
                  set_attribute(input_2, "placeholder", $1);
                },
                [
                  () => ($i18n(), untrack(() => $i18n().t("openapi.json URL or Path"))),
                  () => ($i18n(), untrack(() => $i18n().t("openapi.json URL or Path")))
                ]
              );
              bind_value(input_2, () => get(path), ($$value) => set(path, $$value));
              append($$anchor4, div_23);
            };
            var alternate_2 = ($$anchor4) => {
              var fragment_7 = comment();
              var node_9 = first_child(fragment_7);
              {
                var consequent_5 = ($$anchor5) => {
                  var div_24 = root_13();
                  var label_2 = child(div_24);
                  var text_13 = child(label_2, true);
                  reset(label_2);
                  var textarea = sibling(label_2, 2);
                  remove_textarea_child(textarea);
                  reset(div_24);
                  template_effect(
                    ($0, $1) => {
                      set_class(div_24, 1, ($settings(), untrack(() => {
                        var _a;
                        return `text-xs w-full self-center translate-y-[1px] ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
                      })));
                      set_text(text_13, $0);
                      set_class(textarea, 1, ($settings(), untrack(() => {
                        var _a;
                        return `w-full text-sm bg-transparent ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700 text-black dark:text-white"}`;
                      })));
                      set_attribute(textarea, "placeholder", $1);
                    },
                    [
                      () => ($i18n(), untrack(() => $i18n().t("JSON Spec"))),
                      () => ($i18n(), untrack(() => $i18n().t("JSON Spec")))
                    ]
                  );
                  bind_value(textarea, () => get(spec), ($$value) => set(spec, $$value));
                  append($$anchor5, div_24);
                };
                if_block(
                  node_9,
                  ($$render) => {
                    if (get(spec_type) === "json") $$render(consequent_5);
                  },
                  true
                );
              }
              append($$anchor4, fragment_7);
            };
            if_block(node_8, ($$render) => {
              if (get(spec_type) === "url") $$render(consequent_4);
              else $$render(alternate_2, false);
            });
          }
          reset(div_22);
          reset(div_20);
          var node_10 = sibling(div_20, 2);
          {
            var consequent_6 = ($$anchor4) => {
              var div_25 = root_14();
              var text_14 = child(div_25, true);
              reset(div_25);
              template_effect(
                ($0) => {
                  set_class(div_25, 1, ($settings(), untrack(() => {
                    var _a;
                    return `text-xs mt-1 ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
                  })));
                  set_text(text_14, $0);
                },
                [
                  () => ($i18n(), get(path), get(url), untrack(() => $i18n().t(`WebUI will make requests to "{{url}}"`, {
                    url: get(path).includes("://") ? get(path) : `${get(url)}${get(path).startsWith("/") ? "" : "/"}${get(path)}`
                  })))
                ]
              );
              append($$anchor4, div_25);
            };
            if_block(node_10, ($$render) => {
              if (get(spec_type), untrack(() => ["", "url"].includes(get(spec_type)))) $$render(consequent_6);
            });
          }
          reset(div_16);
          reset(div_15);
          template_effect(
            ($0, $1, $2) => {
              set_class(div_19, 1, ($settings(), untrack(() => {
                var _a;
                return `text-xs ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
              })));
              set_text(text_9, $0);
              set_class(select, 1, ($settings(), untrack(() => {
                var _a;
                return `w-full text-sm bg-transparent pr-5 ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
              })));
              set_text(text_10, $1);
              set_text(text_11, $2);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("OpenAPI Spec"))),
              () => ($i18n(), untrack(() => $i18n().t("URL"))),
              () => ($i18n(), untrack(() => $i18n().t("JSON")))
            ]
          );
          bind_select_value(select, () => get(spec_type), ($$value) => set(spec_type, $$value));
          append($$anchor3, div_15);
        };
        if_block(node_7, ($$render) => {
          if (get(type), untrack(() => ["", "openapi"].includes(get(type)))) $$render(consequent_7);
        });
      }
      var div_26 = sibling(node_7, 2);
      var div_27 = child(div_26);
      var div_28 = child(div_27);
      var div_29 = child(div_28);
      var div_30 = child(div_29);
      var text_15 = child(div_30, true);
      reset(div_30);
      reset(div_29);
      var node_11 = sibling(div_29, 2);
      {
        var consequent_9 = ($$anchor3) => {
          var div_31 = root_15();
          var div_32 = child(div_31);
          var node_12 = child(div_32);
          {
            let $0 = derived_safe_equal(() => (get(oauthClientInfo), $i18n(), untrack(() => get(oauthClientInfo) ? $i18n().t("Register Again") : $i18n().t("Register Client"))));
            Tooltip(node_12, {
              get content() {
                return get($0);
              },
              children: ($$anchor4, $$slotProps2) => {
                var button_5 = root_16();
                var text_16 = child(button_5, true);
                reset(button_5);
                template_effect(($02) => set_text(text_16, $02), [
                  () => ($i18n(), untrack(() => $i18n().t("Register Client")))
                ]);
                event("click", button_5, () => {
                  registerOAuthClientHandler();
                });
                append($$anchor4, button_5);
              },
              $$slots: { default: true }
            });
          }
          reset(div_32);
          var node_13 = sibling(div_32, 2);
          {
            var consequent_8 = ($$anchor4) => {
              var div_33 = root_17();
              var text_17 = child(div_33, true);
              reset(div_33);
              template_effect(($0) => set_text(text_17, $0), [
                () => ($i18n(), untrack(() => $i18n().t("Not Registered")))
              ]);
              append($$anchor4, div_33);
            };
            var alternate_3 = ($$anchor4) => {
              var div_34 = root_18();
              var text_18 = child(div_34, true);
              reset(div_34);
              template_effect(($0) => set_text(text_18, $0), [() => ($i18n(), untrack(() => $i18n().t("Registered")))]);
              append($$anchor4, div_34);
            };
            if_block(node_13, ($$render) => {
              if (!get(oauthClientInfo)) $$render(consequent_8);
              else $$render(alternate_3, false);
            });
          }
          reset(div_31);
          append($$anchor3, div_31);
        };
        if_block(node_11, ($$render) => {
          if (get(auth_type) === "oauth_2.1") $$render(consequent_9);
        });
      }
      reset(div_28);
      var div_35 = sibling(div_28, 2);
      var div_36 = child(div_35);
      var select_1 = child(div_36);
      template_effect(() => {
        get(auth_type);
        invalidate_inner_signals(() => {
          $settings();
          $i18n();
          direct();
          get(type);
        });
      });
      var option_2 = child(select_1);
      var text_19 = child(option_2, true);
      reset(option_2);
      option_2.value = option_2.__value = "none";
      var option_3 = sibling(option_2);
      var text_20 = child(option_3, true);
      reset(option_3);
      option_3.value = option_3.__value = "bearer";
      var option_4 = sibling(option_3);
      var text_21 = child(option_4, true);
      reset(option_4);
      option_4.value = option_4.__value = "session";
      var node_14 = sibling(option_4);
      {
        var consequent_11 = ($$anchor3) => {
          var fragment_8 = root_19();
          var option_5 = first_child(fragment_8);
          var text_22 = child(option_5, true);
          reset(option_5);
          option_5.value = option_5.__value = "system_oauth";
          var node_15 = sibling(option_5, 2);
          {
            var consequent_10 = ($$anchor4) => {
              var option_6 = root_20();
              var text_23 = child(option_6, true);
              reset(option_6);
              option_6.value = option_6.__value = "oauth_2.1";
              template_effect(($0) => set_text(text_23, $0), [() => ($i18n(), untrack(() => $i18n().t("OAuth 2.1")))]);
              append($$anchor4, option_6);
            };
            if_block(node_15, ($$render) => {
              if (get(type) === "mcp") $$render(consequent_10);
            });
          }
          template_effect(($0) => set_text(text_22, $0), [() => ($i18n(), untrack(() => $i18n().t("OAuth")))]);
          append($$anchor3, fragment_8);
        };
        if_block(node_14, ($$render) => {
          if (!direct()) $$render(consequent_11);
        });
      }
      reset(select_1);
      reset(div_36);
      var div_37 = sibling(div_36, 2);
      var node_16 = child(div_37);
      {
        var consequent_12 = ($$anchor3) => {
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("API Key"))));
            SensitiveInput($$anchor3, {
              get placeholder() {
                return get($0);
              },
              required: false,
              get value() {
                return get(key);
              },
              set value($$value) {
                set(key, $$value);
              },
              $$legacy: true
            });
          }
        };
        var alternate_7 = ($$anchor3) => {
          var fragment_10 = comment();
          var node_17 = first_child(fragment_10);
          {
            var consequent_13 = ($$anchor4) => {
              var div_38 = root_23();
              var text_24 = child(div_38, true);
              reset(div_38);
              template_effect(
                ($0) => {
                  set_class(div_38, 1, ($settings(), untrack(() => {
                    var _a;
                    return `text-xs self-center translate-y-[1px] ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
                  })));
                  set_text(text_24, $0);
                },
                [
                  () => ($i18n(), untrack(() => $i18n().t("No authentication")))
                ]
              );
              append($$anchor4, div_38);
            };
            var alternate_6 = ($$anchor4) => {
              var fragment_11 = comment();
              var node_18 = first_child(fragment_11);
              {
                var consequent_14 = ($$anchor5) => {
                  var div_39 = root_25();
                  var text_25 = child(div_39, true);
                  reset(div_39);
                  template_effect(
                    ($0) => {
                      set_class(div_39, 1, ($settings(), untrack(() => {
                        var _a;
                        return `text-xs self-center translate-y-[1px] ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
                      })));
                      set_text(text_25, $0);
                    },
                    [
                      () => ($i18n(), untrack(() => $i18n().t("Forwards system user session credentials to authenticate")))
                    ]
                  );
                  append($$anchor5, div_39);
                };
                var alternate_5 = ($$anchor5) => {
                  var fragment_12 = comment();
                  var node_19 = first_child(fragment_12);
                  {
                    var consequent_15 = ($$anchor6) => {
                      var div_40 = root_27();
                      var text_26 = child(div_40, true);
                      reset(div_40);
                      template_effect(
                        ($0) => {
                          set_class(div_40, 1, ($settings(), untrack(() => {
                            var _a;
                            return `text-xs self-center translate-y-[1px] ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
                          })));
                          set_text(text_26, $0);
                        },
                        [
                          () => ($i18n(), untrack(() => $i18n().t("Forwards system user OAuth access token to authenticate")))
                        ]
                      );
                      append($$anchor6, div_40);
                    };
                    var alternate_4 = ($$anchor6) => {
                      var fragment_13 = comment();
                      var node_20 = first_child(fragment_13);
                      {
                        var consequent_16 = ($$anchor7) => {
                          var div_41 = root_29();
                          var text_27 = child(div_41, true);
                          reset(div_41);
                          template_effect(
                            ($0) => {
                              set_class(div_41, 1, ($settings(), untrack(() => {
                                var _a;
                                return `flex items-center text-xs self-center translate-y-[1px] ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
                              })));
                              set_text(text_27, $0);
                            },
                            [
                              () => ($i18n(), untrack(() => $i18n().t("Uses OAuth 2.1 Dynamic Client Registration")))
                            ]
                          );
                          append($$anchor7, div_41);
                        };
                        if_block(
                          node_20,
                          ($$render) => {
                            if (get(auth_type) === "oauth_2.1") $$render(consequent_16);
                          },
                          true
                        );
                      }
                      append($$anchor6, fragment_13);
                    };
                    if_block(
                      node_19,
                      ($$render) => {
                        if (get(auth_type) === "system_oauth") $$render(consequent_15);
                        else $$render(alternate_4, false);
                      },
                      true
                    );
                  }
                  append($$anchor5, fragment_12);
                };
                if_block(
                  node_18,
                  ($$render) => {
                    if (get(auth_type) === "session") $$render(consequent_14);
                    else $$render(alternate_5, false);
                  },
                  true
                );
              }
              append($$anchor4, fragment_11);
            };
            if_block(
              node_17,
              ($$render) => {
                if (get(auth_type) === "none") $$render(consequent_13);
                else $$render(alternate_6, false);
              },
              true
            );
          }
          append($$anchor3, fragment_10);
        };
        if_block(node_16, ($$render) => {
          if (get(auth_type) === "bearer") $$render(consequent_12);
          else $$render(alternate_7, false);
        });
      }
      reset(div_37);
      reset(div_35);
      reset(div_27);
      reset(div_26);
      var node_21 = sibling(div_26, 2);
      {
        var consequent_18 = ($$anchor3) => {
          var fragment_14 = root_30();
          var div_42 = first_child(fragment_14);
          var div_43 = child(div_42);
          var label_3 = child(div_43);
          var text_28 = child(label_3, true);
          reset(label_3);
          var div_44 = sibling(label_3, 2);
          var node_22 = child(div_44);
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t('Enter additional headers in JSON format (e.g. {"X-Custom-Header": "value"}'))));
            Tooltip(node_22, {
              get content() {
                return get($0);
              },
              children: ($$anchor4, $$slotProps2) => {
                {
                  let $02 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Enter additional headers in JSON format"))));
                  Textarea($$anchor4, {
                    className: "w-full text-sm outline-hidden",
                    get placeholder() {
                      return get($02);
                    },
                    required: false,
                    minSize: 30,
                    get value() {
                      return get(headers);
                    },
                    set value($$value) {
                      set(headers, $$value);
                    },
                    $$legacy: true
                  });
                }
              },
              $$slots: { default: true }
            });
          }
          reset(div_44);
          reset(div_43);
          reset(div_42);
          var div_45 = sibling(div_42, 4);
          var div_46 = child(div_45);
          var label_4 = child(div_46);
          var text_29 = child(label_4);
          var node_23 = sibling(text_29);
          {
            var consequent_17 = ($$anchor4) => {
              var span_1 = root_32();
              var text_30 = child(span_1, true);
              reset(span_1);
              template_effect(($0) => set_text(text_30, $0), [() => ($i18n(), untrack(() => $i18n().t("Optional")))]);
              append($$anchor4, span_1);
            };
            if_block(node_23, ($$render) => {
              if (get(type) !== "mcp") $$render(consequent_17);
            });
          }
          reset(label_4);
          var div_47 = sibling(label_4, 2);
          var input_3 = child(div_47);
          remove_input_defaults(input_3);
          reset(div_47);
          reset(div_46);
          reset(div_45);
          var div_48 = sibling(div_45, 2);
          var div_49 = child(div_48);
          var label_5 = child(div_49);
          var text_31 = child(label_5, true);
          reset(label_5);
          var div_50 = sibling(label_5, 2);
          var input_4 = child(div_50);
          remove_input_defaults(input_4);
          reset(div_50);
          reset(div_49);
          reset(div_48);
          var div_51 = sibling(div_48, 2);
          var label_6 = child(div_51);
          var text_32 = child(label_6, true);
          reset(label_6);
          var div_52 = sibling(label_6, 2);
          var input_5 = child(div_52);
          remove_input_defaults(input_5);
          reset(div_52);
          reset(div_51);
          var div_53 = sibling(div_51, 2);
          var label_7 = child(div_53);
          var text_33 = child(label_7, true);
          reset(label_7);
          var div_54 = sibling(label_7, 2);
          var input_6 = child(div_54);
          remove_input_defaults(input_6);
          reset(div_54);
          reset(div_53);
          var div_55 = sibling(div_53, 4);
          var div_56 = child(div_55);
          var node_24 = child(div_56);
          AccessControl(node_24, {
            get accessControl() {
              return get(accessControl);
            },
            set accessControl($$value) {
              set(accessControl, $$value);
            },
            $$legacy: true
          });
          reset(div_56);
          reset(div_55);
          template_effect(
            ($0, $1, $2, $3, $4, $5, $6, $7, $8) => {
              set_class(label_3, 1, ($settings(), untrack(() => {
                var _a;
                return `mb-0.5 text-xs text-gray-500
								${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : ""}`;
              })));
              set_text(text_28, $0);
              set_class(label_4, 1, ($settings(), untrack(() => {
                var _a;
                return `mb-0.5 text-xs ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
              })));
              set_text(text_29, `${$1 ?? ""} `);
              set_class(input_3, 1, ($settings(), untrack(() => {
                var _a;
                return `w-full text-sm bg-transparent ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
              })));
              set_attribute(input_3, "placeholder", $2);
              input_3.required = get(type) === "mcp";
              set_class(label_5, 1, ($settings(), untrack(() => {
                var _a;
                return `mb-0.5 text-xs ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
              })));
              set_text(text_31, $3);
              set_class(input_4, 1, ($settings(), untrack(() => {
                var _a;
                return `w-full text-sm bg-transparent ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
              })));
              set_attribute(input_4, "placeholder", $4);
              set_class(label_6, 1, ($settings(), untrack(() => {
                var _a;
                return `mb-1 text-xs ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100 placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700 text-gray-500"}`;
              })));
              set_text(text_32, $5);
              set_class(input_5, 1, ($settings(), untrack(() => {
                var _a;
                return `w-full text-sm bg-transparent ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
              })));
              set_attribute(input_5, "placeholder", $6);
              set_class(label_7, 1, ($settings(), untrack(() => {
                var _a;
                return `mb-1 text-xs ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100 placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700 text-gray-500"}`;
              })));
              set_text(text_33, $7);
              set_class(input_6, 1, ($settings(), untrack(() => {
                var _a;
                return `w-full text-sm bg-transparent ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
              })));
              set_attribute(input_6, "placeholder", $8);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Headers"))),
              () => ($i18n(), untrack(() => $i18n().t("ID"))),
              () => ($i18n(), untrack(() => $i18n().t("Enter ID"))),
              () => ($i18n(), untrack(() => $i18n().t("Name"))),
              () => ($i18n(), untrack(() => $i18n().t("Enter name"))),
              () => ($i18n(), untrack(() => $i18n().t("Description"))),
              () => ($i18n(), untrack(() => $i18n().t("Enter description"))),
              () => ($i18n(), untrack(() => $i18n().t("Function Name Filter List"))),
              () => ($i18n(), untrack(() => $i18n().t("Enter function name filter list (e.g. func1, !func2)")))
            ]
          );
          bind_value(input_3, () => get(id), ($$value) => set(id, $$value));
          bind_value(input_4, () => get(name), ($$value) => set(name, $$value));
          bind_value(input_5, () => get(description), ($$value) => set(description, $$value));
          bind_value(input_6, () => get(functionNameFilterList), ($$value) => set(functionNameFilterList, $$value));
          append($$anchor3, fragment_14);
        };
        if_block(node_21, ($$render) => {
          if (!direct()) $$render(consequent_18);
        });
      }
      reset(div_6);
      var node_25 = sibling(div_6, 2);
      {
        var consequent_19 = ($$anchor3) => {
          var div_57 = root_33();
          var span_2 = child(div_57);
          var text_34 = child(span_2);
          reset(span_2);
          var text_35 = sibling(span_2);
          var a = sibling(text_35);
          var text_36 = child(a, true);
          reset(a);
          reset(div_57);
          template_effect(
            ($0, $1, $2) => {
              set_text(text_34, `${$0 ?? ""}:`);
              set_text(text_35, ` ${$1 ?? ""} `);
              set_text(text_36, $2);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Warning"))),
              () => ($i18n(), untrack(() => $i18n().t("MCP support is experimental and its specification changes often, which can lead to incompatibilities. OpenAPI specification support is directly maintained by the Open WebUI team, making it the more reliable option for compatibility."))),
              () => ($i18n(), untrack(() => $i18n().t("Read more →")))
            ]
          );
          append($$anchor3, div_57);
        };
        if_block(node_25, ($$render) => {
          if (get(type) === "mcp") $$render(consequent_19);
        });
      }
      var div_58 = sibling(node_25, 2);
      var div_59 = sibling(child(div_58), 2);
      var node_26 = child(div_59);
      {
        var consequent_20 = ($$anchor3) => {
          var button_6 = root_34();
          var text_37 = child(button_6, true);
          reset(button_6);
          template_effect(($0) => set_text(text_37, $0), [() => ($i18n(), untrack(() => $i18n().t("Delete")))]);
          event("click", button_6, () => {
            onDelete()();
            show(false);
          });
          append($$anchor3, button_6);
        };
        if_block(node_26, ($$render) => {
          if (edit()) $$render(consequent_20);
        });
      }
      var button_7 = sibling(node_26, 2);
      var text_38 = child(button_7);
      var node_27 = sibling(text_38);
      {
        var consequent_21 = ($$anchor3) => {
          var div_60 = root_35();
          var node_28 = child(div_60);
          Spinner(node_28, {});
          reset(div_60);
          append($$anchor3, div_60);
        };
        if_block(node_27, ($$render) => {
          if (get(loading)) $$render(consequent_21);
        });
      }
      reset(button_7);
      reset(div_59);
      reset(div_58);
      reset(form);
      reset(div_5);
      reset(div_4);
      reset(div);
      template_effect(
        ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) => {
          set_text(text_2, $0);
          set_text(text_3, $1);
          set_attribute(button_2, "aria-label", $2);
          set_class(label, 1, ($settings(), untrack(() => {
            var _a;
            return `text-xs ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
          })));
          set_text(text_8, $3);
          set_class(input_1, 1, ($settings(), untrack(() => {
            var _a;
            return `w-full flex-1 text-sm bg-transparent ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
          })));
          set_attribute(input_1, "placeholder", $4);
          set_class(div_30, 1, ($settings(), untrack(() => {
            var _a;
            return `text-xs ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
          })));
          set_text(text_15, $5);
          set_class(select_1, 1, ($settings(), untrack(() => {
            var _a;
            return `w-full text-sm bg-transparent pr-5 ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder:text-gray-700 dark:placeholder:text-gray-100" : "outline-hidden placeholder:text-gray-300 dark:placeholder:text-gray-700"}`;
          })));
          set_text(text_19, $6);
          set_text(text_20, $7);
          set_text(text_21, $8);
          set_class(button_7, 1, `px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center ${get(loading) ? " cursor-not-allowed" : ""}`);
          button_7.disabled = get(loading);
          set_text(text_38, `${$9 ?? ""} `);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Import"))),
          () => ($i18n(), untrack(() => $i18n().t("Export"))),
          () => ($i18n(), untrack(() => $i18n().t("Close Configure Connection Modal"))),
          () => ($i18n(), untrack(() => $i18n().t("URL"))),
          () => ($i18n(), untrack(() => $i18n().t("API Base URL"))),
          () => ($i18n(), untrack(() => $i18n().t("Auth"))),
          () => ($i18n(), untrack(() => $i18n().t("None"))),
          () => ($i18n(), untrack(() => $i18n().t("Bearer"))),
          () => ($i18n(), untrack(() => $i18n().t("Session"))),
          () => ($i18n(), untrack(() => $i18n().t("Save")))
        ]
      );
      event("click", button, () => {
        var _a;
        (_a = get(inputElement)) == null ? void 0 : _a.click();
      });
      event("click", button_1, exportHandler);
      event("click", button_2, () => {
        show(false);
      });
      event("change", input, (e) => {
        importHandler(e);
      });
      bind_value(input_1, () => get(url), ($$value) => set(url, $$value));
      bind_select_value(select_1, () => get(auth_type), ($$value) => set(auth_type, $$value));
      event("submit", form, (e) => {
        e.preventDefault();
        submitHandler();
      });
      append($$anchor2, div);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root$1 = from_svg(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10.0503 10.6066L2.97923 17.6777C2.19818 18.4587 2.19818 19.725 2.97923 20.5061V20.5061C3.76027 21.2871 5.0266 21.2871 5.80765 20.5061L12.8787 13.435" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.0502 10.6066C9.20638 8.45358 9.37134 5.6286 11.1109 3.88909C12.8504 2.14957 16.0606 1.76777 17.8284 2.82843L14.7877 5.8691L14.5051 8.98014L17.6161 8.69753L20.6568 5.65685C21.7175 7.42462 21.3357 10.6349 19.5961 12.3744C17.8566 14.1139 15.0316 14.2789 12.8786 13.435" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
function WrenchAlt($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-4 h-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$1();
  template_effect(() => {
    set_class(svg, 0, clsx(className()));
    set_attribute(svg, "stroke-width", strokeWidth());
  });
  append($$anchor, svg);
}
var root_3 = from_html(`<div class=" capitalize outline-hidden w-full bg-transparent"> <span class="text-gray-500"> </span></div>`);
var root_4 = from_html(`<div> </div>`);
var root_1 = from_html(`<div class="flex w-full"><div><!> <!></div></div>`);
var root_5 = from_html(`<button class="self-center p-1 bg-transparent hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-850 rounded-lg transition" type="button"><!></button>`);
var root = from_html(`<!> <!> <div class="flex w-full gap-2 items-center"><!> <div class="flex gap-1"><!></div></div>`, 1);
function Connection($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let onDelete = prop($$props, "onDelete", 8, () => {
  });
  let onSubmit = prop($$props, "onSubmit", 8, () => {
  });
  let connection = prop($$props, "connection", 12, null);
  let direct = prop($$props, "direct", 8, false);
  let showConfigModal = mutable_source(false);
  let showDeleteConfirmDialog = mutable_source(false);
  init();
  var fragment = root();
  var node = first_child(fragment);
  AddToolServerModal(node, {
    edit: true,
    get direct() {
      return direct();
    },
    get connection() {
      return connection();
    },
    onDelete: () => {
      set(showDeleteConfirmDialog, true);
    },
    onSubmit: (c) => {
      connection(c);
      onSubmit()(c);
    },
    get show() {
      return get(showConfigModal);
    },
    set show($$value) {
      set(showConfigModal, $$value);
    },
    $$legacy: true
  });
  var node_1 = sibling(node, 2);
  ConfirmDialog(node_1, {
    get show() {
      return get(showDeleteConfirmDialog);
    },
    set show($$value) {
      set(showDeleteConfirmDialog, $$value);
    },
    $$events: {
      confirm: () => {
        onDelete()();
        set(showConfigModal, false);
      }
    },
    $$legacy: true
  });
  var div = sibling(node_1, 2);
  var node_2 = child(div);
  Tooltip(node_2, {
    className: "w-full relative",
    content: "",
    placement: "top-start",
    children: ($$anchor2, $$slotProps) => {
      var div_1 = root_1();
      var div_2 = child(div_1);
      var node_3 = child(div_2);
      {
        let $0 = derived_safe_equal(() => (deep_read_state(connection()), $i18n(), untrack(() => {
          var _a;
          return ((_a = connection()) == null ? void 0 : _a.type) === "mcp" ? $i18n().t("MCP") : $i18n().t("OpenAPI");
        })));
        Tooltip(node_3, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps2) => {
            WrenchAlt($$anchor3, {});
          },
          $$slots: { default: true }
        });
      }
      var node_4 = sibling(node_3, 2);
      {
        var consequent = ($$anchor3) => {
          var div_3 = root_3();
          var text2 = child(div_3);
          var span = sibling(text2);
          var text_1 = child(span, true);
          reset(span);
          reset(div_3);
          template_effect(() => {
            set_text(text2, `${(deep_read_state(connection()), untrack(() => {
              var _a, _b, _c;
              return ((_b = (_a = connection()) == null ? void 0 : _a.info) == null ? void 0 : _b.name) ?? ((_c = connection()) == null ? void 0 : _c.url);
            })) ?? ""} `);
            set_text(text_1, (deep_read_state(connection()), untrack(() => {
              var _a, _b;
              return ((_b = (_a = connection()) == null ? void 0 : _a.info) == null ? void 0 : _b.id) ?? "";
            })));
          });
          append($$anchor3, div_3);
        };
        var alternate = ($$anchor3) => {
          var div_4 = root_4();
          var text_2 = child(div_4, true);
          reset(div_4);
          template_effect(() => set_text(text_2, (deep_read_state(connection()), untrack(() => {
            var _a;
            return (_a = connection()) == null ? void 0 : _a.url;
          }))));
          append($$anchor3, div_4);
        };
        if_block(node_4, ($$render) => {
          if (deep_read_state(connection()), untrack(() => {
            var _a, _b;
            return (_b = (_a = connection()) == null ? void 0 : _a.info) == null ? void 0 : _b.name;
          })) $$render(consequent);
          else $$render(alternate, false);
        });
      }
      reset(div_2);
      reset(div_1);
      template_effect(() => set_class(div_2, 1, `flex-1 relative flex gap-1.5 items-center ${(deep_read_state(connection()), untrack(() => {
        var _a, _b;
        return !(((_b = (_a = connection()) == null ? void 0 : _a.config) == null ? void 0 : _b.enable) ?? true) ? "opacity-50" : "";
      })) ?? ""}`));
      append($$anchor2, div_1);
    },
    $$slots: { default: true }
  });
  var div_5 = sibling(node_2, 2);
  var node_5 = child(div_5);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Configure"))));
    Tooltip(node_5, {
      get content() {
        return get($0);
      },
      className: "self-start",
      children: ($$anchor2, $$slotProps) => {
        var button = root_5();
        var node_6 = child(button);
        Cog6(node_6, {});
        reset(button);
        event("click", button, () => {
          set(showConfigModal, true);
        });
        append($$anchor2, button);
      },
      $$slots: { default: true }
    });
  }
  reset(div_5);
  reset(div);
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  AddConnectionModal as A,
  Cog6 as C,
  Minus as M,
  WrenchAlt as W,
  AddToolServerModal as a,
  Connection as b
};
