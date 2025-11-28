import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, g as getContext, l as legacy_pre_effect, s as set, m as mutable_source, b as get, i as deep_read_state, j as legacy_pre_effect_reset, c as child, r as reset, e as sibling, t as template_effect, u as untrack, a as pop, f as first_child, q as next, n as createEventDispatcher, h as derived_safe_equal, aF as mutate, k as tick } from "./BxIY6ir7.js";
import { s as set_text, e as event } from "./cBADewWV.js";
import { f as from_html, a as append, t as text } from "./CAbo1QWi.js";
import { i as if_block } from "./BoSuMvtf.js";
import { a as set_attribute, r as remove_input_defaults, s as set_class } from "./kXiCYuyj.js";
import { i as init } from "./ByqEASoO.js";
import { p as prop } from "./BRmGPDvq.js";
import { a as store_get, s as setup_stores } from "./BvQ5O7-v.js";
import { c as config, a as models, u as user } from "./2Yg1sHDo.js";
import { t as toast } from "./BccDN__m.js";
import { a as getChatById, s as shareChatById, b as deleteSharedChatById } from "./17j0UIT7.js";
import { i as copyToClipboard } from "./Bh-hrM1w.js";
import { M as Modal } from "./DF6V1elH.js";
import { L as Link } from "./EZxqw5-p.js";
import { X as XMark } from "./CUUSX84-.js";
import { s as slot } from "./CZEGIGsR.js";
import "./C2A39Ney.js";
import { b as Menu_content, c as Menu_item } from "./DQmZL-p0.js";
import { f as flyAndScale } from "./BuLNlPfL.js";
import { D as Dropdown } from "./NbBmD2S8.js";
import { G as GarbageBin } from "./C_eYBUEf.js";
import { P as Pencil } from "./wRvEFTSI.js";
import { T as Tooltip } from "./BHXWufQb.js";
import { D as Download } from "./Dm1xcaSj.js";
import { b as bind_value } from "./DVLuwGai.js";
import { p as preventDefault } from "./CGgk3ROl.js";
import { S as Spinner } from "./CtnI4RVL.js";
import "./h-B6Md2q.js";
import { T as Textarea } from "./B-P1fI-w.js";
import { K as Knowledge } from "./Ap_nRVJv.js";
import { a as WEBUI_API_BASE_URL } from "./DQ9UxF7k.js";
const createNewFolder = async (token, folderForm) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/folders/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify(folderForm)
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getFolders = async (token = "") => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/folders/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err.detail;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getFolderById = async (token, id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/folders/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err.detail;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const updateFolderById = async (token, id, folderForm) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/folders/${id}/update`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify(folderForm)
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err.detail;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const updateFolderIsExpandedById = async (token, id, isExpanded) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/folders/${id}/update/expanded`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      is_expanded: isExpanded
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err.detail;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const updateFolderParentIdById = async (token, id, parentId) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/folders/${id}/update/parent`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      parent_id: parentId
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err.detail;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const deleteFolderById = async (token, id, deleteContents) => {
  let error = null;
  const searchParams = new URLSearchParams();
  searchParams.append("delete_contents", deleteContents ? "true" : "false");
  const res = await fetch(`${WEBUI_API_BASE_URL}/folders/${id}?${searchParams.toString()}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err.detail;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
var root_3$1 = from_html(`<a target="_blank"> <span class=" underline"> </span>.</a> <button class="underline"> </button> `, 1);
var root_5$2 = from_html(`<button class="self-center flex items-center gap-1 px-3.5 py-2 text-sm font-medium bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-850 dark:text-white dark:hover:bg-gray-800 transition rounded-full" type="button"> </button>`);
var root_2$1 = from_html(`<div class="px-5 pt-4 pb-5 w-full flex flex-col justify-center"><div class=" text-sm dark:text-gray-300 mb-1"><!></div> <div class="flex justify-end"><div class="flex flex-col items-end space-x-1 mt-3"><div class="flex gap-1"><!> <button class="self-center flex items-center gap-1 px-3.5 py-2 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="button" id="copy-and-share-chat-button"><!> <!></button></div></div></div></div>`);
var root_1$1 = from_html(`<div><div class=" flex justify-between dark:text-gray-300 px-5 pt-4 pb-0.5"><div class=" text-lg font-medium self-center"> </div> <button class="self-center"><!></button></div> <!></div>`);
function ShareChatModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $models = () => store_get(models, "$models", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let chatId = prop($$props, "chatId", 8);
  let chat = mutable_source(null);
  let shareUrl = null;
  const i18n = getContext("i18n");
  const shareLocalChat = async () => {
    get(chat);
    const sharedChat = await shareChatById(localStorage.token, chatId());
    shareUrl = `${window.location.origin}/s/${sharedChat.id}`;
    console.log(shareUrl);
    set(chat, await getChatById(localStorage.token, chatId()));
    return shareUrl;
  };
  const shareChat = async () => {
    const _chat = get(chat).chat;
    console.log("share", _chat);
    toast.success($i18n().t("Redirecting you to Open WebUI Community"));
    const url = "https://openwebui.com";
    const tab = await window.open(`${url}/chats/upload`, "_blank");
    window.addEventListener(
      "message",
      (event2) => {
        if (event2.origin !== url) return;
        if (event2.data === "loaded") {
          tab.postMessage(
            JSON.stringify({
              chat: _chat,
              models: $models().filter((m) => _chat.models.includes(m.id))
            }),
            "*"
          );
        }
      },
      false
    );
  };
  let show = prop($$props, "show", 12, false);
  const isDifferentChat = (_chat) => {
    if (!get(chat)) {
      return true;
    }
    if (!_chat) {
      return false;
    }
    return get(chat).id !== _chat.id || get(chat).share_id !== _chat.share_id;
  };
  legacy_pre_effect(
    () => (deep_read_state(show()), deep_read_state(chatId()), get(chat)),
    () => {
      if (show()) {
        (async () => {
          if (chatId()) {
            const _chat = await getChatById(localStorage.token, chatId());
            if (isDifferentChat(_chat)) {
              set(chat, _chat);
            }
          } else {
            set(chat, null);
            console.log(get(chat));
          }
        })();
      }
    }
  );
  legacy_pre_effect_reset();
  init();
  Modal($$anchor, {
    size: "md",
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
      var text$1 = child(div_2, true);
      reset(div_2);
      var button = sibling(div_2, 2);
      var node = child(button);
      XMark(node, { className: "size-5" });
      reset(button);
      reset(div_1);
      var node_1 = sibling(div_1, 2);
      {
        var consequent_3 = ($$anchor3) => {
          var div_3 = root_2$1();
          var div_4 = child(div_3);
          var node_2 = child(div_4);
          {
            var consequent = ($$anchor4) => {
              var fragment_1 = root_3$1();
              var a = first_child(fragment_1);
              var text_1 = child(a);
              var span = sibling(text_1);
              var text_2 = child(span, true);
              reset(span);
              next();
              reset(a);
              var text_3 = sibling(a);
              var button_1 = sibling(text_3);
              var text_4 = child(button_1, true);
              reset(button_1);
              var text_5 = sibling(button_1);
              template_effect(
                ($0, $1, $2, $3, $4) => {
                  set_attribute(a, "href", `/s/${(get(chat), untrack(() => get(chat).share_id)) ?? ""}`);
                  set_text(text_1, `${$0 ?? ""} `);
                  set_text(text_2, $1);
                  set_text(text_3, ` ${$2 ?? ""} `);
                  set_text(text_4, $3);
                  set_text(text_5, ` ${$4 ?? ""}`);
                },
                [
                  () => ($i18n(), untrack(() => $i18n().t("You have shared this chat"))),
                  () => ($i18n(), untrack(() => $i18n().t("before"))),
                  () => ($i18n(), untrack(() => $i18n().t("Click here to"))),
                  () => ($i18n(), untrack(() => $i18n().t("delete this link"))),
                  () => ($i18n(), untrack(() => $i18n().t("and create a new shared link.")))
                ]
              );
              event("click", button_1, async () => {
                const res = await deleteSharedChatById(localStorage.token, chatId());
                if (res) {
                  set(chat, await getChatById(localStorage.token, chatId()));
                }
              });
              append($$anchor4, fragment_1);
            };
            var alternate = ($$anchor4) => {
              var text_6 = text();
              template_effect(($0) => set_text(text_6, $0), [
                () => ($i18n(), untrack(() => $i18n().t("Messages you send after creating your link won't be shared. Users with the URL will be able to view the shared chat.")))
              ]);
              append($$anchor4, text_6);
            };
            if_block(node_2, ($$render) => {
              if (get(chat), untrack(() => get(chat).share_id)) $$render(consequent);
              else $$render(alternate, false);
            });
          }
          reset(div_4);
          var div_5 = sibling(div_4, 2);
          var div_6 = child(div_5);
          var div_7 = child(div_6);
          var node_3 = child(div_7);
          {
            var consequent_1 = ($$anchor4) => {
              var button_2 = root_5$2();
              var text_7 = child(button_2, true);
              reset(button_2);
              template_effect(($0) => set_text(text_7, $0), [
                () => ($i18n(), untrack(() => $i18n().t("Share to Open WebUI Community")))
              ]);
              event("click", button_2, () => {
                shareChat();
                show(false);
              });
              append($$anchor4, button_2);
            };
            if_block(node_3, ($$render) => {
              if ($config(), untrack(() => {
                var _a;
                return (_a = $config()) == null ? void 0 : _a.features.enable_community_sharing;
              })) $$render(consequent_1);
            });
          }
          var button_3 = sibling(node_3, 2);
          var node_4 = child(button_3);
          Link(node_4, {});
          var node_5 = sibling(node_4, 2);
          {
            var consequent_2 = ($$anchor4) => {
              var text_8 = text();
              template_effect(($0) => set_text(text_8, $0), [
                () => ($i18n(), untrack(() => $i18n().t("Update and Copy Link")))
              ]);
              append($$anchor4, text_8);
            };
            var alternate_1 = ($$anchor4) => {
              var text_9 = text();
              template_effect(($0) => set_text(text_9, $0), [() => ($i18n(), untrack(() => $i18n().t("Copy Link")))]);
              append($$anchor4, text_9);
            };
            if_block(node_5, ($$render) => {
              if (get(chat), untrack(() => get(chat).share_id)) $$render(consequent_2);
              else $$render(alternate_1, false);
            });
          }
          reset(button_3);
          reset(div_7);
          reset(div_6);
          reset(div_5);
          reset(div_3);
          event("click", button_3, async () => {
            const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            if (isSafari) {
              console.log("isSafari");
              const getUrlPromise = async () => {
                const url = await shareLocalChat();
                return new Blob([url], { type: "text/plain" });
              };
              navigator.clipboard.write([new ClipboardItem({ "text/plain": getUrlPromise() })]).then(() => {
                console.log("Async: Copying to clipboard was successful!");
                return true;
              }).catch((error) => {
                console.error("Async: Could not copy text: ", error);
                return false;
              });
            } else {
              copyToClipboard(await shareLocalChat());
            }
            toast.success($i18n().t("Copied shared chat URL to clipboard!"));
            show(false);
          });
          append($$anchor3, div_3);
        };
        if_block(node_1, ($$render) => {
          if (get(chat)) $$render(consequent_3);
        });
      }
      reset(div);
      template_effect(($0) => set_text(text$1, $0), [() => ($i18n(), untrack(() => $i18n().t("Share Chat")))]);
      event("click", button, () => {
        show(false);
      });
      append($$anchor2, div);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root_2 = from_html(`<button><!></button>`);
var root_5$1 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_6$1 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_7 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_4$1 = from_html(`<!> <!> <!>`, 1);
var root_3 = from_html(`<div slot="content"><!></div>`);
function FolderMenu($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  const dispatch = createEventDispatcher();
  let align = prop($$props, "align", 8, "start");
  let onEdit = prop($$props, "onEdit", 8, () => {
  });
  let onExport = prop($$props, "onExport", 8, () => {
  });
  let onDelete = prop($$props, "onDelete", 8, () => {
  });
  let show = mutable_source(false);
  init();
  Dropdown($$anchor, {
    get show() {
      return get(show);
    },
    set show($$value) {
      set(show, $$value);
    },
    $$events: {
      change: (e) => {
        if (e.detail === false) {
          dispatch("close");
        }
      }
    },
    children: ($$anchor2, $$slotProps) => {
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("More"))));
        Tooltip($$anchor2, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps2) => {
            var button = root_2();
            var node = child(button);
            slot(node, $$props, "default", {}, null);
            reset(button);
            event("click", button, (e) => {
              e.stopPropagation();
              set(show, !get(show));
            });
            append($$anchor3, button);
          },
          $$slots: { default: true }
        });
      }
    },
    $$slots: {
      default: true,
      content: ($$anchor2, $$slotProps) => {
        var div = root_3();
        var node_1 = child(div);
        Menu_content(node_1, {
          class: "w-full max-w-[170px] rounded-2xl px-1 py-1 border border-gray-100  dark:border-gray-800   z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg",
          sideOffset: -2,
          side: "bottom",
          get align() {
            return align();
          },
          get transition() {
            return flyAndScale;
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_2 = root_4$1();
            var node_2 = first_child(fragment_2);
            Menu_item(node_2, {
              class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
              $$events: {
                click: () => {
                  onEdit()();
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_3 = root_5$1();
                var node_3 = first_child(fragment_3);
                Pencil(node_3, {});
                var div_1 = sibling(node_3, 2);
                var text2 = child(div_1, true);
                reset(div_1);
                template_effect(($0) => set_text(text2, $0), [() => ($i18n(), untrack(() => $i18n().t("Edit")))]);
                append($$anchor4, fragment_3);
              },
              $$slots: { default: true }
            });
            var node_4 = sibling(node_2, 2);
            Menu_item(node_4, {
              class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
              $$events: {
                click: () => {
                  onExport()();
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_4 = root_6$1();
                var node_5 = first_child(fragment_4);
                Download(node_5, {});
                var div_2 = sibling(node_5, 2);
                var text_1 = child(div_2, true);
                reset(div_2);
                template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("Export")))]);
                append($$anchor4, fragment_4);
              },
              $$slots: { default: true }
            });
            var node_6 = sibling(node_4, 2);
            Menu_item(node_6, {
              class: "flex  gap-2  items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
              $$events: {
                click: () => {
                  onDelete()();
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_5 = root_7();
                var node_7 = first_child(fragment_5);
                GarbageBin(node_7, {});
                var div_3 = sibling(node_7, 2);
                var text_2 = child(div_3, true);
                reset(div_3);
                template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Delete")))]);
                append($$anchor4, fragment_5);
              },
              $$slots: { default: true }
            });
            append($$anchor3, fragment_2);
          },
          $$slots: { default: true }
        });
        reset(div);
        append($$anchor2, div);
      }
    },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root_4 = from_html(`<div class="my-1"><div class="mb-2 text-xs text-gray-500"> </div> <div><!></div></div>`);
var root_5 = from_html(`<div slot="label"><div class="flex w-full justify-between"><div class=" mb-2 text-xs text-gray-500"> </div></div></div>`);
var root_6 = from_html(`<div class="ml-2 self-center"><!></div>`);
var root_1 = from_html(`<div><div class=" flex justify-between dark:text-gray-300 px-5 pt-4 pb-1"><div class=" text-lg font-medium self-center"><!></div> <button class="self-center"><!></button></div> <div class="flex flex-col md:flex-row w-full px-5 pb-4 md:space-x-4 dark:text-gray-200"><div class=" flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div class="flex flex-col w-full mt-1"><div class=" mb-1 text-xs text-gray-500"> </div> <div class="flex-1"><input id="folder-name" class="w-full text-sm bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-700 outline-hidden" type="text" autocomplete="off"/></div></div> <input id="folder-background-image-input" type="file" hidden="" accept="image/*"/> <div class="flex justify-between w-full mt-1 items-center"><div class="text-xs text-gray-500"> </div> <div><button aria-labelledby="chat-background-label background-image-url-state" class="p-1 px-3 text-xs flex rounded-sm transition" type="button"><span class="ml-2 self-center" id="background-image-url-state"> </span></button></div></div> <hr class=" border-gray-50 dark:border-gray-850 my-2.5 w-full"/> <!> <div class="my-2"><!></div> <div class="flex justify-end pt-3 text-sm font-medium gap-1.5"><button type="submit"> <!></button></div></form></div></div></div>`);
function FolderModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let onSubmit = prop($$props, "onSubmit", 8, (e) => {
  });
  let folderId = prop($$props, "folderId", 8, null);
  let edit = prop($$props, "edit", 8, false);
  let folder = null;
  let name = mutable_source("");
  let meta = mutable_source({ background_image_url: null });
  let data = mutable_source({ system_prompt: "", files: [] });
  let loading = mutable_source(false);
  const submitHandler = async () => {
    var _a;
    set(loading, true);
    if ((((_a = get(data)) == null ? void 0 : _a.files) ?? []).some((file) => file.status === "uploading")) {
      toast.error($i18n().t("Please wait until all files are uploaded."));
      set(loading, false);
      return;
    }
    await onSubmit()({ name: get(name), meta: get(meta), data: get(data) });
    show(false);
    set(loading, false);
  };
  const init$1 = async () => {
    if (folderId()) {
      folder = await getFolderById(localStorage.token, folderId()).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      set(name, folder.name);
      set(meta, folder.meta || { background_image_url: null });
      set(data, folder.data || { system_prompt: "", files: [] });
    }
    focusInput();
  };
  const focusInput = async () => {
    await tick();
    const input = document.getElementById("folder-name");
    if (input) {
      input.focus();
      input.select();
    }
  };
  legacy_pre_effect(() => deep_read_state(show()), () => {
    if (show()) {
      init$1();
    }
  });
  legacy_pre_effect(() => (deep_read_state(show()), deep_read_state(edit())), () => {
    if (!show() && !edit()) {
      set(name, "");
      set(meta, { background_image_url: null });
      set(data, { system_prompt: "", files: [] });
    }
  });
  legacy_pre_effect_reset();
  init();
  Modal($$anchor, {
    size: "md",
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
      var node = child(div_2);
      {
        var consequent = ($$anchor3) => {
          var text$1 = text();
          template_effect(($0) => set_text(text$1, $0), [() => ($i18n(), untrack(() => $i18n().t("Edit Folder")))]);
          append($$anchor3, text$1);
        };
        var alternate = ($$anchor3) => {
          var text_1 = text();
          template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("Create Folder")))]);
          append($$anchor3, text_1);
        };
        if_block(node, ($$render) => {
          if (edit()) $$render(consequent);
          else $$render(alternate, false);
        });
      }
      reset(div_2);
      var button = sibling(div_2, 2);
      var node_1 = child(button);
      XMark(node_1, { className: "size-5" });
      reset(button);
      reset(div_1);
      var div_3 = sibling(div_1, 2);
      var div_4 = child(div_3);
      var form = child(div_4);
      var div_5 = child(form);
      var div_6 = child(div_5);
      var text_2 = child(div_6, true);
      reset(div_6);
      var div_7 = sibling(div_6, 2);
      var input_1 = child(div_7);
      remove_input_defaults(input_1);
      reset(div_7);
      reset(div_5);
      var input_2 = sibling(div_5, 2);
      var div_8 = sibling(input_2, 2);
      var div_9 = child(div_8);
      var text_3 = child(div_9, true);
      reset(div_9);
      var div_10 = sibling(div_9, 2);
      var button_1 = child(div_10);
      var span = child(button_1);
      var text_4 = child(span, true);
      reset(span);
      reset(button_1);
      reset(div_10);
      reset(div_8);
      var node_2 = sibling(div_8, 4);
      {
        var consequent_1 = ($$anchor3) => {
          var div_11 = root_4();
          var div_12 = child(div_11);
          var text_5 = child(div_12, true);
          reset(div_12);
          var div_13 = sibling(div_12, 2);
          var node_3 = child(div_13);
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Write your model system prompt content here\ne.g.) You are Mario from Super Mario Bros, acting as an assistant."))));
            Textarea(node_3, {
              className: " text-sm w-full bg-transparent outline-hidden ",
              get placeholder() {
                return get($0);
              },
              maxSize: 200,
              get value() {
                return get(data).system_prompt;
              },
              set value($$value) {
                mutate(data, get(data).system_prompt = $$value);
              },
              $$legacy: true
            });
          }
          reset(div_13);
          reset(div_11);
          template_effect(($0) => set_text(text_5, $0), [() => ($i18n(), untrack(() => $i18n().t("System Prompt")))]);
          append($$anchor3, div_11);
        };
        if_block(node_2, ($$render) => {
          if ($user(), untrack(() => {
            var _a, _b, _c;
            return ((_a = $user()) == null ? void 0 : _a.role) === "admin" || (((_c = (_b = $user()) == null ? void 0 : _b.permissions.chat) == null ? void 0 : _c.system_prompt) ?? true);
          })) $$render(consequent_1);
        });
      }
      var div_14 = sibling(node_2, 2);
      var node_4 = child(div_14);
      Knowledge(node_4, {
        get selectedItems() {
          return get(data).files;
        },
        set selectedItems($$value) {
          mutate(data, get(data).files = $$value);
        },
        $$slots: {
          label: ($$anchor3, $$slotProps2) => {
            var div_15 = root_5();
            var div_16 = child(div_15);
            var div_17 = child(div_16);
            var text_6 = child(div_17, true);
            reset(div_17);
            reset(div_16);
            reset(div_15);
            template_effect(($0) => set_text(text_6, $0), [() => ($i18n(), untrack(() => $i18n().t("Knowledge")))]);
            append($$anchor3, div_15);
          }
        },
        $$legacy: true
      });
      reset(div_14);
      var div_18 = sibling(div_14, 2);
      var button_2 = child(div_18);
      var text_7 = child(button_2);
      var node_5 = sibling(text_7);
      {
        var consequent_2 = ($$anchor3) => {
          var div_19 = root_6();
          var node_6 = child(div_19);
          Spinner(node_6, {});
          reset(div_19);
          append($$anchor3, div_19);
        };
        if_block(node_5, ($$render) => {
          if (get(loading)) $$render(consequent_2);
        });
      }
      reset(button_2);
      reset(div_18);
      reset(form);
      reset(div_4);
      reset(div_3);
      reset(div);
      template_effect(
        ($0, $1, $2, $3, $4) => {
          set_text(text_2, $0);
          set_attribute(input_1, "placeholder", $1);
          set_text(text_3, $2);
          set_text(text_4, $3);
          set_class(button_2, 1, `px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-950 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center ${get(loading) ? " cursor-not-allowed" : ""}`);
          button_2.disabled = get(loading);
          set_text(text_7, `${$4 ?? ""} `);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Folder Name"))),
          () => ($i18n(), untrack(() => $i18n().t("Enter folder name"))),
          () => ($i18n(), untrack(() => $i18n().t("Folder Background Image"))),
          () => (get(meta), $i18n(), untrack(() => {
            var _a;
            return (((_a = get(meta)) == null ? void 0 : _a.background_image_url) ?? null) === null ? $i18n().t("Upload") : $i18n().t("Reset");
          })),
          () => ($i18n(), untrack(() => $i18n().t("Save")))
        ]
      );
      event("click", button, () => {
        show(false);
      });
      bind_value(input_1, () => get(name), ($$value) => set(name, $$value));
      event("change", input_2, (e) => {
        const inputFiles = e.target.files;
        let reader = new FileReader();
        reader.onload = (event2) => {
          let originalImageUrl = `${event2.target.result}`;
          mutate(meta, get(meta).background_image_url = originalImageUrl);
        };
        if (inputFiles && inputFiles.length > 0 && ["image/gif", "image/webp", "image/jpeg", "image/png"].includes(inputFiles[0]["type"])) {
          reader.readAsDataURL(inputFiles[0]);
        } else {
          console.log(`Unsupported File Type '${inputFiles[0]["type"]}'.`);
          e.target.value = "";
        }
      });
      event("click", button_1, () => {
        var _a;
        if (((_a = get(meta)) == null ? void 0 : _a.background_image_url) !== null) {
          mutate(meta, get(meta).background_image_url = null);
        } else {
          const input = document.getElementById("folder-background-image-input");
          if (input) {
            input.click();
          }
        }
      });
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
  FolderModal as F,
  ShareChatModal as S,
  FolderMenu as a,
  updateFolderParentIdById as b,
  updateFolderIsExpandedById as c,
  deleteFolderById as d,
  getFolders as e,
  createNewFolder as f,
  getFolderById as g,
  updateFolderById as u
};
