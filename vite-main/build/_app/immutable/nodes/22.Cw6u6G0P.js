import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, g as getContext, f as first_child, e as sibling, b as get, h as derived_safe_equal, u as untrack, i as deep_read_state, a as pop, t as template_effect, s as set, m as mutable_source, c as child, r as reset, q as next, k as tick, l as legacy_pre_effect, j as legacy_pre_effect_reset, o as onMount, ay as onDestroy, aF as mutate, d as deferred_template_effect, $ as $document } from "../chunks/BxIY6ir7.js";
import { i as init } from "../chunks/ByqEASoO.js";
import { s as setup_stores, a as store_get } from "../chunks/BvQ5O7-v.js";
import { p as page } from "../chunks/CrvggIeO.js";
import { e as event, s as set_text } from "../chunks/cBADewWV.js";
import { f as from_html, c as comment, a as append, b as from_svg, t as text } from "../chunks/CAbo1QWi.js";
import { i as if_block } from "../chunks/BoSuMvtf.js";
import { k as key } from "../chunks/CmeGWm0r.js";
import { h as head } from "../chunks/Cb8chUSZ.js";
import { a as set_attribute, s as set_class, c as clsx, r as remove_input_defaults } from "../chunks/kXiCYuyj.js";
import { b as bind_this } from "../chunks/D16JuV5t.js";
import { p as prop } from "../chunks/BRmGPDvq.js";
import { t as toast } from "../chunks/BccDN__m.js";
import { P as Pane_group, c as Pane, d as Pane_resizer } from "../chunks/B3I5jJr1.js";
import { g as goto } from "../chunks/h-B6Md2q.js";
import { u as user, b as settings, m as mobile, s as showSidebar, g as showArchivedChats, j as socket, e as chatId } from "../chunks/2Yg1sHDo.js";
import { r as removeReaction, a as addReaction, u as updateMessage, d as deleteMessage, g as getChannelUsersById, b as getChannelThreadMessages, s as sendMessage, c as getChannelMessages, e as getChannelById } from "../chunks/CBVbYfHa.js";
import { e as each, i as index } from "../chunks/7_HZMPNF.js";
import { d as dayjs2, r as relativeTime } from "../chunks/OO7lCI-F.js";
import { E as isToday, F as isYesterday, l as localizedFormat, G as formatDate } from "../chunks/Bh-hrM1w.js";
import { a as WEBUI_API_BASE_URL } from "../chunks/DQ9UxF7k.js";
import { L as Link_preview, a as Link_preview_trigger, U as UserStatusLinkPreview, M as Markdown, I as Image } from "../chunks/BgD15ug2.js";
import { N as Name, P as ProfileImage } from "../chunks/DXUPjZLs.js";
import { C as ConfirmDialog } from "../chunks/DhVOSDv1.js";
import { G as GarbageBin } from "../chunks/C_eYBUEf.js";
import { P as Pencil } from "../chunks/wRvEFTSI.js";
import { T as Tooltip } from "../chunks/BHXWufQb.js";
import { T as Textarea } from "../chunks/B-P1fI-w.js";
import { F as FileItem, C as ChatBubble } from "../chunks/P5gA3V2-.js";
import { s as slot } from "../chunks/CZEGIGsR.js";
import "../chunks/C2A39Ney.js";
import { E as EmojiPicker } from "../chunks/DHQbCHk-.js";
import { C as ChevronRight } from "../chunks/CS8GUXml.js";
import { E as Emoji } from "../chunks/D1wUrbJE.js";
import { S as Skeleton } from "../chunks/B-p41pS4.js";
import { L as Loader } from "../chunks/Bne0qWmB.js";
import { S as Spinner } from "../chunks/CtnI4RVL.js";
import { M as MessageInput } from "../chunks/D8DDdIAi.js";
import { U as UserMenu } from "../chunks/B4U2oVkx.js";
import { S as Sidebar } from "../chunks/CIfNu5Bq.js";
import { H as Hashtag, L as Lock } from "../chunks/sO1Rge5t.js";
import { M as Modal } from "../chunks/DF6V1elH.js";
import "../chunks/bQFTtKkZ.js";
import { X as XMark } from "../chunks/CUUSX84-.js";
import { b as bind_value } from "../chunks/DVLuwGai.js";
import { P as Pagination_1 } from "../chunks/DCRGSDLC.js";
/* empty css                 */
import "../chunks/CvB8sZNw.js";
import { C as ChevronUp } from "../chunks/DTpd_r3Z.js";
import { C as ChevronDown } from "../chunks/CUFupyOK.js";
import { B as Badge } from "../chunks/DGk_635a.js";
import "../chunks/-BrZk0Qz.js";
import "../chunks/DRcZXQDn.js";
import "../chunks/CAzIiltw.js";
import "../chunks/DWskpcWN.js";
import { D as Drawer } from "../chunks/CfhMM1S2.js";
import { i as i18n } from "../chunks/BEveHQTb.js";
var root_1$5 = from_html(`<!> <!>`, 1);
function ProfilePreview($$anchor, $$props) {
  push($$props, false);
  getContext("i18n");
  let user2 = prop($$props, "user", 8, null);
  let align = prop($$props, "align", 8, "center");
  let side = prop($$props, "side", 8, "right");
  let sideOffset = prop($$props, "sideOffset", 8, 8);
  init();
  Link_preview($$anchor, {
    openDelay: 0,
    closeDelay: 0,
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$5();
      var node = first_child(fragment_1);
      Link_preview_trigger(node, {
        class: " cursor-pointer no-underline! font-normal! ",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = comment();
          var node_1 = first_child(fragment_2);
          slot(node_1, $$props, "default", {}, null);
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      var node_2 = sibling(node, 2);
      {
        let $0 = derived_safe_equal(() => (deep_read_state(user2()), untrack(() => {
          var _a;
          return (_a = user2()) == null ? void 0 : _a.id;
        })));
        UserStatusLinkPreview(node_2, {
          get id() {
            return get($0);
          },
          get side() {
            return side();
          },
          get align() {
            return align();
          },
          get sideOffset() {
            return sideOffset();
          }
        });
      }
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  pop();
}
var root$6 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"></path></svg>`);
function FaceSmile($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$6();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root$5 = from_svg(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10.25 4.75L6.75 8.25L10.25 11.75" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.75 8.25L12.75 8.25C14.9591 8.25 16.75 10.0409 16.75 12.25V19.25" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
function ArrowUpLeftAlt($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-4 h-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$5();
  template_effect(() => {
    set_class(svg, 0, clsx(className()));
    set_attribute(svg, "stroke-width", strokeWidth());
  });
  append($$anchor, svg);
}
var root_4$2 = from_html(`<button class="hover:bg-gray-100 dark:hover:bg-gray-800 transition rounded-lg p-1 svelte-s6wdik"><!></button>`);
var root_5$1 = from_html(`<button class="hover:bg-gray-100 dark:hover:bg-gray-800 transition rounded-lg p-0.5 svelte-s6wdik"><!></button>`);
var root_7$3 = from_html(`<button class="hover:bg-gray-100 dark:hover:bg-gray-800 transition rounded-lg p-1 svelte-s6wdik"><!></button>`);
var root_9$1 = from_html(`<button class="hover:bg-gray-100 dark:hover:bg-gray-800 transition rounded-lg p-1 svelte-s6wdik"><!></button>`);
var root_10$1 = from_html(`<button class="hover:bg-gray-100 dark:hover:bg-gray-800 transition rounded-lg p-1 svelte-s6wdik"><!></button>`);
var root_8$3 = from_html(`<!> <!>`, 1);
var root_2$4 = from_html(`<div><div class="flex gap-1 rounded-lg bg-white dark:bg-gray-850 shadow-md p-0.5 border border-gray-100 dark:border-gray-850 svelte-s6wdik"><!> <!> <!> <!></div></div>`);
var root_12$2 = from_html(`<img class="size-4 ml-0.5 rounded-full object-cover svelte-s6wdik"/>`);
var root_13$1 = from_html(`<img class="size-4 ml-0.5 rounded-full object-cover svelte-s6wdik"/>`);
var root_11$2 = from_html(`<div class="relative text-xs mb-1 svelte-s6wdik"><div class="absolute h-3 w-7 left-[18px] top-2 rounded-tl-lg border-t-[1.5px] border-l-[1.5px] border-gray-200 dark:border-gray-700 z-0 svelte-s6wdik"></div> <button class="ml-12 flex items-center space-x-2 relative z-0 svelte-s6wdik"><!> <div class="shrink-0 svelte-s6wdik"> </div> <div class="italic text-sm text-gray-500 dark:text-gray-400 line-clamp-1 w-full flex-1 svelte-s6wdik"><!></div></button></div>`);
var root_15$1 = from_html(`<img class="size-8 translate-y-1 ml-0.5 object-cover rounded-full svelte-s6wdik"/>`);
var root_19 = from_html(`<div class="mt-1.5 flex shrink-0 items-center text-xs self-center invisible group-hover:visible text-gray-500 font-medium first-letter:capitalize svelte-s6wdik"><!></div>`);
var root_26 = from_html(`<span class="line-clamp-1 svelte-s6wdik"> </span>`);
var root_25 = from_html(`<div class=" self-center text-xs invisible group-hover:visible text-gray-400 font-medium first-letter:capitalize ml-0.5 translate-y-[1px] svelte-s6wdik"><!></div>`);
var root_22 = from_html(`<div class=" self-end text-base shrink-0 font-medium truncate svelte-s6wdik"><!></div> <!>`, 1);
var root_28 = from_html(`<div class="svelte-s6wdik"><!></div>`);
var root_27 = from_html(`<div class="my-2.5 w-full flex overflow-x-auto gap-2 flex-wrap svelte-s6wdik"></div>`);
var root_31 = from_html(`<div class="py-2 svelte-s6wdik"><!> <div class=" mt-2 mb-1 flex justify-end text-sm font-medium svelte-s6wdik"><div class="flex space-x-1.5 svelte-s6wdik"><button id="close-edit-message-button" class="px-3.5 py-1.5 bg-white dark:bg-gray-900 hover:bg-gray-100 text-gray-800 dark:text-gray-100 transition rounded-3xl svelte-s6wdik"> </button> <button id="confirm-edit-message-button" class="px-3.5 py-1.5 bg-gray-900 dark:bg-white hover:bg-gray-850 text-gray-100 dark:text-gray-800 transition rounded-3xl svelte-s6wdik"> </button></div></div></div>`);
var root_35 = from_html(`<span class="text-gray-500 text-[10px] svelte-s6wdik"> </span>`);
var root_34 = from_html(`<!><!>`, 1);
var root_39 = from_html(`<div class="text-xs font-medium text-gray-500 dark:text-gray-400 svelte-s6wdik"> </div>`);
var root_38 = from_html(`<button><!> <!></button>`);
var root_41 = from_html(`<div class="flex items-center gap-1.5 bg-gray-500/10 hover:outline hover:outline-gray-700/30 dark:hover:outline-gray-300/30 hover:outline-1 transition rounded-xl px-1 py-1 cursor-pointer text-gray-500 dark:text-gray-400 svelte-s6wdik"><!></div>`);
var root_36 = from_html(`<div class="svelte-s6wdik"><div class="flex items-center flex-wrap gap-y-1.5 gap-1 mt-1 mb-2 svelte-s6wdik"><!> <!></div></div>`);
var root_42 = from_html(`<div class="flex items-center gap-1.5 -mt-0.5 mb-1.5 svelte-s6wdik"><button class="flex items-center text-xs py-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition svelte-s6wdik"><span class="font-medium mr-1 svelte-s6wdik"> </span><span class="svelte-s6wdik"> </span> <span class="ml-1 svelte-s6wdik"><!></span></button></div>`);
var root_32 = from_html(`<div class=" min-w-full markdown-prose svelte-s6wdik"><!></div> <!> <!>`, 1);
var root_1$4 = from_html(`<div><!> <!> <div><div><!></div> <div class="flex-auto w-0 pl-1 svelte-s6wdik"><!> <!> <!></div></div></div>`);
var root$4 = from_html(`<!> <!>`, 1);
function Message($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n2, "$i18n", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  dayjs2.extend(relativeTime);
  dayjs2.extend(isToday);
  dayjs2.extend(isYesterday);
  dayjs2.extend(localizedFormat);
  const i18n2 = getContext("i18n");
  let message = prop($$props, "message", 8);
  let showUserProfile = prop($$props, "showUserProfile", 8, true);
  let thread = prop($$props, "thread", 8, false);
  let replyToMessage = prop($$props, "replyToMessage", 8, false);
  let disabled = prop($$props, "disabled", 8, false);
  let onDelete = prop($$props, "onDelete", 8, () => {
  });
  let onEdit = prop($$props, "onEdit", 8, () => {
  });
  let onReply = prop($$props, "onReply", 8, () => {
  });
  let onThread = prop($$props, "onThread", 8, () => {
  });
  let onReaction = prop($$props, "onReaction", 8, () => {
  });
  let showButtons = mutable_source(false);
  let edit = mutable_source(false);
  let editedContent = mutable_source(null);
  let showDeleteConfirmDialog = mutable_source(false);
  init();
  var fragment = root$4();
  var node = first_child(fragment);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete Message"))));
    let $1 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Are you sure you want to delete this message?"))));
    ConfirmDialog(node, {
      get title() {
        return get($0);
      },
      get message() {
        return get($1);
      },
      onConfirm: async () => {
        await onDelete()();
      },
      get show() {
        return get(showDeleteConfirmDialog);
      },
      set show($$value) {
        set(showDeleteConfirmDialog, $$value);
      },
      $$legacy: true
    });
  }
  var node_1 = sibling(node, 2);
  {
    var consequent_19 = ($$anchor2) => {
      var div = root_1$4();
      var node_2 = child(div);
      {
        var consequent_2 = ($$anchor3) => {
          var div_1 = root_2$4();
          var div_2 = child(div_1);
          var node_3 = child(div_2);
          EmojiPicker(node_3, {
            onClose: () => set(showButtons, false),
            onSubmit: (name) => {
              set(showButtons, false);
              onReaction()(name);
            },
            children: ($$anchor4, $$slotProps) => {
              {
                let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Add Reaction"))));
                Tooltip($$anchor4, {
                  get content() {
                    return get($0);
                  },
                  children: ($$anchor5, $$slotProps2) => {
                    var button = root_4$2();
                    var node_4 = child(button);
                    FaceSmile(node_4, {});
                    reset(button);
                    event("click", button, () => {
                      set(showButtons, true);
                    });
                    append($$anchor5, button);
                  },
                  $$slots: { default: true }
                });
              }
            },
            $$slots: { default: true }
          });
          var node_5 = sibling(node_3, 2);
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Reply"))));
            Tooltip(node_5, {
              get content() {
                return get($0);
              },
              children: ($$anchor4, $$slotProps) => {
                var button_1 = root_5$1();
                var node_6 = child(button_1);
                ArrowUpLeftAlt(node_6, { className: "size-5" });
                reset(button_1);
                event("click", button_1, () => {
                  onReply()(message());
                });
                append($$anchor4, button_1);
              },
              $$slots: { default: true }
            });
          }
          var node_7 = sibling(node_5, 2);
          {
            var consequent = ($$anchor4) => {
              {
                let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Reply in Thread"))));
                Tooltip($$anchor4, {
                  get content() {
                    return get($0);
                  },
                  children: ($$anchor5, $$slotProps) => {
                    var button_2 = root_7$3();
                    var node_8 = child(button_2);
                    ChatBubble(node_8, {});
                    reset(button_2);
                    event("click", button_2, () => {
                      onThread()(message().id);
                    });
                    append($$anchor5, button_2);
                  },
                  $$slots: { default: true }
                });
              }
            };
            if_block(node_7, ($$render) => {
              if (!thread()) $$render(consequent);
            });
          }
          var node_9 = sibling(node_7, 2);
          {
            var consequent_1 = ($$anchor4) => {
              var fragment_3 = root_8$3();
              var node_10 = first_child(fragment_3);
              {
                let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Edit"))));
                Tooltip(node_10, {
                  get content() {
                    return get($0);
                  },
                  children: ($$anchor5, $$slotProps) => {
                    var button_3 = root_9$1();
                    var node_11 = child(button_3);
                    Pencil(node_11, {});
                    reset(button_3);
                    event("click", button_3, () => {
                      set(edit, true);
                      set(editedContent, message().content);
                    });
                    append($$anchor5, button_3);
                  },
                  $$slots: { default: true }
                });
              }
              var node_12 = sibling(node_10, 2);
              {
                let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete"))));
                Tooltip(node_12, {
                  get content() {
                    return get($0);
                  },
                  children: ($$anchor5, $$slotProps) => {
                    var button_4 = root_10$1();
                    var node_13 = child(button_4);
                    GarbageBin(node_13, {});
                    reset(button_4);
                    event("click", button_4, () => set(showDeleteConfirmDialog, true));
                    append($$anchor5, button_4);
                  },
                  $$slots: { default: true }
                });
              }
              append($$anchor4, fragment_3);
            };
            if_block(node_9, ($$render) => {
              if (deep_read_state(message()), $user(), untrack(() => {
                var _a, _b;
                return message().user_id === ((_a = $user()) == null ? void 0 : _a.id) || ((_b = $user()) == null ? void 0 : _b.role) === "admin";
              })) $$render(consequent_1);
            });
          }
          reset(div_2);
          reset(div_1);
          template_effect(() => set_class(div_1, 1, ` absolute ${get(showButtons) ? "" : "invisible group-hover:visible"} right-1 -top-2 z-10`, "svelte-s6wdik"));
          append($$anchor3, div_1);
        };
        if_block(node_2, ($$render) => {
          if (!get(edit) && !disabled()) $$render(consequent_2);
        });
      }
      var node_14 = sibling(node_2, 2);
      {
        var consequent_4 = ($$anchor3) => {
          var div_3 = root_11$2();
          var button_5 = sibling(child(div_3), 2);
          var node_15 = child(button_5);
          {
            var consequent_3 = ($$anchor4) => {
              var img = root_12$2();
              template_effect(() => {
                set_attribute(img, "src", (deep_read_state(WEBUI_API_BASE_URL), deep_read_state(message()), untrack(() => `${WEBUI_API_BASE_URL}/models/model/profile/image?id=${message().reply_to_message.meta.model_id}`)));
                set_attribute(img, "alt", (deep_read_state(message()), untrack(() => message().reply_to_message.meta.model_name ?? message().reply_to_message.meta.model_id)));
              });
              append($$anchor4, img);
            };
            var alternate = ($$anchor4) => {
              var img_1 = root_13$1();
              template_effect(
                ($0) => {
                  set_attribute(img_1, "src", (deep_read_state(WEBUI_API_BASE_URL), deep_read_state(message()), untrack(() => {
                    var _a;
                    return `${WEBUI_API_BASE_URL}/users/${(_a = message().reply_to_message.user) == null ? void 0 : _a.id}/profile/image`;
                  })));
                  set_attribute(img_1, "alt", $0);
                },
                [
                  () => (deep_read_state(message()), $i18n(), untrack(() => {
                    var _a;
                    return ((_a = message().reply_to_message.user) == null ? void 0 : _a.name) ?? $i18n().t("Unknown User");
                  }))
                ]
              );
              append($$anchor4, img_1);
            };
            if_block(node_15, ($$render) => {
              if (deep_read_state(message()), untrack(() => {
                var _a, _b, _c;
                return (_c = (_b = (_a = message()) == null ? void 0 : _a.reply_to_message) == null ? void 0 : _b.meta) == null ? void 0 : _c.model_id;
              })) $$render(consequent_3);
              else $$render(alternate, false);
            });
          }
          var div_4 = sibling(node_15, 2);
          var text2 = child(div_4, true);
          reset(div_4);
          var div_5 = sibling(div_4, 2);
          var node_16 = child(div_5);
          {
            let $0 = derived_safe_equal(() => (deep_read_state(message()), untrack(() => `${message().id}-reply-to`)));
            let $1 = derived_safe_equal(() => (deep_read_state(message()), untrack(() => {
              var _a, _b;
              return (_b = (_a = message()) == null ? void 0 : _a.reply_to_message) == null ? void 0 : _b.content;
            })));
            Markdown(node_16, {
              get id() {
                return get($0);
              },
              get content() {
                return get($1);
              }
            });
          }
          reset(div_5);
          reset(button_5);
          reset(div_3);
          template_effect(($0) => set_text(text2, $0), [
            () => (deep_read_state(message()), $i18n(), untrack(() => {
              var _a, _b, _c, _d;
              return ((_b = (_a = message()) == null ? void 0 : _a.reply_to_message.meta) == null ? void 0 : _b.model_name) ?? ((_d = (_c = message()) == null ? void 0 : _c.reply_to_message.user) == null ? void 0 : _d.name) ?? $i18n().t("Unknown User");
            }))
          ]);
          event("click", button_5, () => {
            const messageElement = document.getElementById(`message-${message().reply_to_message.id}`);
            if (messageElement) {
              messageElement.scrollIntoView({ behavior: "smooth", block: "center" });
              messageElement.classList.add("highlight");
              setTimeout(
                () => {
                  messageElement.classList.remove("highlight");
                },
                2e3
              );
              return;
            }
          });
          append($$anchor3, div_3);
        };
        if_block(node_14, ($$render) => {
          if (deep_read_state(message()), untrack(() => {
            var _a, _b;
            return (_b = (_a = message()) == null ? void 0 : _a.reply_to_message) == null ? void 0 : _b.user;
          })) $$render(consequent_4);
        });
      }
      var div_6 = sibling(node_14, 2);
      var div_7 = child(div_6);
      set_class(div_7, 1, `shrink-0 mr-3 w-9`, "svelte-s6wdik");
      var node_17 = child(div_7);
      {
        var consequent_6 = ($$anchor3) => {
          var fragment_4 = comment();
          var node_18 = first_child(fragment_4);
          {
            var consequent_5 = ($$anchor4) => {
              var img_2 = root_15$1();
              template_effect(() => {
                set_attribute(img_2, "src", (deep_read_state(WEBUI_API_BASE_URL), deep_read_state(message()), untrack(() => `${WEBUI_API_BASE_URL}/models/model/profile/image?id=${message().meta.model_id}`)));
                set_attribute(img_2, "alt", (deep_read_state(message()), untrack(() => message().meta.model_name ?? message().meta.model_id)));
              });
              append($$anchor4, img_2);
            };
            var alternate_1 = ($$anchor4) => {
              ProfilePreview($$anchor4, {
                get user() {
                  return deep_read_state(message()), untrack(() => message().user);
                },
                children: ($$anchor5, $$slotProps) => {
                  {
                    let $0 = derived_safe_equal(() => (deep_read_state(WEBUI_API_BASE_URL), deep_read_state(message()), untrack(() => `${WEBUI_API_BASE_URL}/users/${message().user.id}/profile/image`)));
                    ProfileImage($$anchor5, {
                      get src() {
                        return get($0);
                      },
                      className: "size-8 ml-0.5"
                    });
                  }
                },
                $$slots: { default: true }
              });
            };
            if_block(node_18, ($$render) => {
              if (deep_read_state(message()), untrack(() => {
                var _a, _b;
                return (_b = (_a = message()) == null ? void 0 : _a.meta) == null ? void 0 : _b.model_id;
              })) $$render(consequent_5);
              else $$render(alternate_1, false);
            });
          }
          append($$anchor3, fragment_4);
        };
        var alternate_2 = ($$anchor3) => {
          var fragment_7 = comment();
          var node_19 = first_child(fragment_7);
          {
            var consequent_7 = ($$anchor4) => {
              var div_8 = root_19();
              var node_20 = child(div_8);
              {
                let $0 = derived_safe_equal(() => (deep_read_state(dayjs2), deep_read_state(message()), untrack(() => dayjs2(message().created_at / 1e6).format("LLLL"))));
                Tooltip(node_20, {
                  get content() {
                    return get($0);
                  },
                  children: ($$anchor5, $$slotProps) => {
                    next();
                    var text_1 = text();
                    template_effect(($02) => set_text(text_1, $02), [
                      () => (deep_read_state(dayjs2), deep_read_state(message()), untrack(() => dayjs2(message().created_at / 1e6).format("HH:mm")))
                    ]);
                    append($$anchor5, text_1);
                  },
                  $$slots: { default: true }
                });
              }
              reset(div_8);
              append($$anchor4, div_8);
            };
            if_block(node_19, ($$render) => {
              if (deep_read_state(message()), untrack(() => message().created_at)) $$render(consequent_7);
            });
          }
          append($$anchor3, fragment_7);
        };
        if_block(node_17, ($$render) => {
          if (showUserProfile()) $$render(consequent_6);
          else $$render(alternate_2, false);
        });
      }
      reset(div_7);
      var div_9 = sibling(div_7, 2);
      var node_21 = child(div_9);
      {
        var consequent_10 = ($$anchor3) => {
          Name($$anchor3, {
            children: ($$anchor4, $$slotProps) => {
              var fragment_10 = root_22();
              var div_10 = first_child(fragment_10);
              var node_22 = child(div_10);
              {
                var consequent_8 = ($$anchor5) => {
                  var text_2 = text();
                  template_effect(() => set_text(text_2, (deep_read_state(message()), untrack(() => {
                    var _a, _b, _c, _d;
                    return ((_b = (_a = message()) == null ? void 0 : _a.meta) == null ? void 0 : _b.model_name) ?? ((_d = (_c = message()) == null ? void 0 : _c.meta) == null ? void 0 : _d.model_id);
                  }))));
                  append($$anchor5, text_2);
                };
                var alternate_3 = ($$anchor5) => {
                  var text_3 = text();
                  template_effect(() => set_text(text_3, (deep_read_state(message()), untrack(() => {
                    var _a, _b;
                    return (_b = (_a = message()) == null ? void 0 : _a.user) == null ? void 0 : _b.name;
                  }))));
                  append($$anchor5, text_3);
                };
                if_block(node_22, ($$render) => {
                  if (deep_read_state(message()), untrack(() => {
                    var _a, _b;
                    return (_b = (_a = message()) == null ? void 0 : _a.meta) == null ? void 0 : _b.model_id;
                  })) $$render(consequent_8);
                  else $$render(alternate_3, false);
                });
              }
              reset(div_10);
              var node_23 = sibling(div_10, 2);
              {
                var consequent_9 = ($$anchor5) => {
                  var div_11 = root_25();
                  var node_24 = child(div_11);
                  {
                    let $0 = derived_safe_equal(() => (deep_read_state(dayjs2), deep_read_state(message()), untrack(() => dayjs2(message().created_at / 1e6).format("LLLL"))));
                    Tooltip(node_24, {
                      get content() {
                        return get($0);
                      },
                      children: ($$anchor6, $$slotProps2) => {
                        var span = root_26();
                        var text_4 = child(span, true);
                        reset(span);
                        template_effect(($02) => set_text(text_4, $02), [
                          () => ($i18n(), deep_read_state(formatDate), deep_read_state(message()), deep_read_state(dayjs2), untrack(() => $i18n().t(formatDate(message().created_at / 1e6), {
                            LOCALIZED_TIME: dayjs2(message().created_at / 1e6).format("LT"),
                            LOCALIZED_DATE: dayjs2(message().created_at / 1e6).format("L")
                          })))
                        ]);
                        append($$anchor6, span);
                      },
                      $$slots: { default: true }
                    });
                  }
                  reset(div_11);
                  append($$anchor5, div_11);
                };
                if_block(node_23, ($$render) => {
                  if (deep_read_state(message()), untrack(() => message().created_at)) $$render(consequent_9);
                });
              }
              append($$anchor4, fragment_10);
            },
            $$slots: { default: true }
          });
        };
        if_block(node_21, ($$render) => {
          if (showUserProfile()) $$render(consequent_10);
        });
      }
      var node_25 = sibling(node_21, 2);
      {
        var consequent_12 = ($$anchor3) => {
          var div_12 = root_27();
          each(
            div_12,
            5,
            () => (deep_read_state(message()), untrack(() => {
              var _a, _b;
              return (_b = (_a = message()) == null ? void 0 : _a.data) == null ? void 0 : _b.files;
            })),
            index,
            ($$anchor4, file) => {
              var div_13 = root_28();
              var node_26 = child(div_13);
              {
                var consequent_11 = ($$anchor5) => {
                  Image($$anchor5, {
                    get src() {
                      return get(file), untrack(() => get(file).url);
                    },
                    get alt() {
                      return get(file), untrack(() => get(file).name);
                    },
                    imageClassName: " max-h-96 rounded-lg"
                  });
                };
                var alternate_4 = ($$anchor5) => {
                  {
                    let $0 = derived_safe_equal(() => (get(file), untrack(() => {
                      var _a;
                      return (_a = get(file)) == null ? void 0 : _a.size;
                    })));
                    FileItem($$anchor5, {
                      get item() {
                        return get(file);
                      },
                      get url() {
                        return get(file), untrack(() => get(file).url);
                      },
                      get name() {
                        return get(file), untrack(() => get(file).name);
                      },
                      get type() {
                        return get(file), untrack(() => get(file).type);
                      },
                      get size() {
                        return get($0);
                      },
                      small: true
                    });
                  }
                };
                if_block(node_26, ($$render) => {
                  if (get(file), untrack(() => get(file).type === "image")) $$render(consequent_11);
                  else $$render(alternate_4, false);
                });
              }
              reset(div_13);
              append($$anchor4, div_13);
            }
          );
          reset(div_12);
          append($$anchor3, div_12);
        };
        if_block(node_25, ($$render) => {
          if (deep_read_state(message()), untrack(() => {
            var _a, _b;
            return (((_b = (_a = message()) == null ? void 0 : _a.data) == null ? void 0 : _b.files) ?? []).length > 0;
          })) $$render(consequent_12);
        });
      }
      var node_27 = sibling(node_25, 2);
      {
        var consequent_13 = ($$anchor3) => {
          var div_14 = root_31();
          var node_28 = child(div_14);
          Textarea(node_28, {
            className: " bg-transparent outline-hidden w-full resize-none",
            onKeydown: (e) => {
              var _a, _b;
              if (e.key === "Escape") {
                (_a = document.getElementById("close-edit-message-button")) == null ? void 0 : _a.click();
              }
              const isCmdOrCtrlPressed = e.metaKey || e.ctrlKey;
              const isEnterPressed = e.key === "Enter";
              if (isCmdOrCtrlPressed && isEnterPressed) {
                (_b = document.getElementById("confirm-edit-message-button")) == null ? void 0 : _b.click();
              }
            },
            get value() {
              return get(editedContent);
            },
            set value($$value) {
              set(editedContent, $$value);
            },
            $$legacy: true
          });
          var div_15 = sibling(node_28, 2);
          var div_16 = child(div_15);
          var button_6 = child(div_16);
          var text_5 = child(button_6, true);
          reset(button_6);
          var button_7 = sibling(button_6, 2);
          var text_6 = child(button_7, true);
          reset(button_7);
          reset(div_16);
          reset(div_15);
          reset(div_14);
          template_effect(
            ($0, $1) => {
              set_text(text_5, $0);
              set_text(text_6, $1);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Cancel"))),
              () => ($i18n(), untrack(() => $i18n().t("Save")))
            ]
          );
          event("click", button_6, () => {
            set(edit, false);
            set(editedContent, null);
          });
          event("click", button_7, async () => {
            onEdit()(get(editedContent));
            set(edit, false);
            set(editedContent, null);
          });
          append($$anchor3, div_14);
        };
        var alternate_6 = ($$anchor3) => {
          var fragment_15 = root_32();
          var div_17 = first_child(fragment_15);
          var node_29 = child(div_17);
          {
            var consequent_14 = ($$anchor4) => {
              Skeleton($$anchor4, {});
            };
            var alternate_5 = ($$anchor4) => {
              var fragment_17 = root_34();
              var node_30 = first_child(fragment_17);
              Markdown(node_30, {
                get id() {
                  return deep_read_state(message()), untrack(() => message().id);
                },
                get content() {
                  return deep_read_state(message()), untrack(() => message().content);
                }
              });
              var node_31 = sibling(node_30);
              {
                var consequent_15 = ($$anchor5) => {
                  var span_1 = root_35();
                  var text_7 = child(span_1);
                  reset(span_1);
                  template_effect(($0) => set_text(text_7, `(${$0 ?? ""})`), [() => ($i18n(), untrack(() => $i18n().t("edited")))]);
                  append($$anchor5, span_1);
                };
                if_block(node_31, ($$render) => {
                  if (deep_read_state(message()), untrack(() => {
                    var _a, _b;
                    return message().created_at !== message().updated_at && (((_b = (_a = message()) == null ? void 0 : _a.meta) == null ? void 0 : _b.model_id) ?? null) === null;
                  })) $$render(consequent_15);
                });
              }
              append($$anchor4, fragment_17);
            };
            if_block(node_29, ($$render) => {
              if (deep_read_state(message()), untrack(() => {
                var _a, _b, _c;
                return (((_a = message()) == null ? void 0 : _a.content) ?? "").trim() === "" && ((_c = (_b = message()) == null ? void 0 : _b.meta) == null ? void 0 : _c.model_id);
              })) $$render(consequent_14);
              else $$render(alternate_5, false);
            });
          }
          reset(div_17);
          var node_32 = sibling(div_17, 2);
          {
            var consequent_17 = ($$anchor4) => {
              var div_18 = root_36();
              var div_19 = child(div_18);
              var node_33 = child(div_19);
              each(
                node_33,
                1,
                () => (deep_read_state(message()), untrack(() => message().reactions)),
                index,
                ($$anchor5, reaction) => {
                  {
                    let $0 = derived_safe_equal(() => (get(reaction), untrack(() => `:${get(reaction).name}:`)));
                    Tooltip($$anchor5, {
                      get content() {
                        return get($0);
                      },
                      children: ($$anchor6, $$slotProps) => {
                        var button_8 = root_38();
                        var node_34 = child(button_8);
                        Emoji(node_34, {
                          get shortCode() {
                            return get(reaction), untrack(() => get(reaction).name);
                          }
                        });
                        var node_35 = sibling(node_34, 2);
                        {
                          var consequent_16 = ($$anchor7) => {
                            var div_20 = root_39();
                            var text_8 = child(div_20, true);
                            reset(div_20);
                            template_effect(() => set_text(text_8, (get(reaction), untrack(() => {
                              var _a;
                              return (_a = get(reaction).user_ids) == null ? void 0 : _a.length;
                            }))));
                            append($$anchor7, div_20);
                          };
                          if_block(node_35, ($$render) => {
                            if (get(reaction), untrack(() => get(reaction).user_ids.length > 0)) $$render(consequent_16);
                          });
                        }
                        reset(button_8);
                        template_effect(($02) => set_class(button_8, 1, `flex items-center gap-1.5 transition rounded-xl px-2 py-1 cursor-pointer ${$02 ?? ""}`, "svelte-s6wdik"), [
                          () => (get(reaction), $user(), untrack(() => {
                            var _a;
                            return get(reaction).user_ids.includes((_a = $user()) == null ? void 0 : _a.id) ? " bg-blue-300/10 outline outline-blue-500/50 outline-1" : "bg-gray-300/10 dark:bg-gray-500/10 hover:outline hover:outline-gray-700/30 dark:hover:outline-gray-300/30 hover:outline-1";
                          }))
                        ]);
                        event("click", button_8, () => {
                          onReaction()(get(reaction).name);
                        });
                        append($$anchor6, button_8);
                      },
                      $$slots: { default: true }
                    });
                  }
                }
              );
              var node_36 = sibling(node_33, 2);
              EmojiPicker(node_36, {
                onSubmit: (name) => {
                  onReaction()(name);
                },
                children: ($$anchor5, $$slotProps) => {
                  {
                    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Add Reaction"))));
                    Tooltip($$anchor5, {
                      get content() {
                        return get($0);
                      },
                      children: ($$anchor6, $$slotProps2) => {
                        var div_21 = root_41();
                        var node_37 = child(div_21);
                        FaceSmile(node_37, {});
                        reset(div_21);
                        append($$anchor6, div_21);
                      },
                      $$slots: { default: true }
                    });
                  }
                },
                $$slots: { default: true }
              });
              reset(div_19);
              reset(div_18);
              append($$anchor4, div_18);
            };
            if_block(node_32, ($$render) => {
              if (deep_read_state(message()), untrack(() => {
                var _a;
                return (((_a = message()) == null ? void 0 : _a.reactions) ?? []).length > 0;
              })) $$render(consequent_17);
            });
          }
          var node_38 = sibling(node_32, 2);
          {
            var consequent_18 = ($$anchor4) => {
              var div_22 = root_42();
              var button_9 = child(div_22);
              var span_2 = child(button_9);
              var text_9 = child(span_2, true);
              reset(span_2);
              var span_3 = sibling(span_2);
              var text_10 = child(span_3);
              reset(span_3);
              var span_4 = sibling(span_3, 2);
              var node_39 = child(span_4);
              ChevronRight(node_39, { className: "size-2.5", strokeWidth: "3" });
              reset(span_4);
              reset(button_9);
              reset(div_22);
              template_effect(
                ($0, $1, $2) => {
                  set_text(text_9, $0);
                  set_text(text_10, ` - ${$1 ?? ""}
									${$2 ?? ""}`);
                },
                [
                  () => ($i18n(), deep_read_state(message()), untrack(() => $i18n().t("{{COUNT}} Replies", { COUNT: message().reply_count }))),
                  () => ($i18n(), untrack(() => $i18n().t("Last reply"))),
                  () => (deep_read_state(dayjs2), deep_read_state(message()), untrack(() => dayjs2.unix(message().latest_reply_at / 1e9).fromNow()))
                ]
              );
              event("click", button_9, () => {
                onThread()(message().id);
              });
              append($$anchor4, div_22);
            };
            if_block(node_38, ($$render) => {
              if (deep_read_state(thread()), deep_read_state(message()), untrack(() => !thread() && message().reply_count > 0)) $$render(consequent_18);
            });
          }
          append($$anchor3, fragment_15);
        };
        if_block(node_27, ($$render) => {
          if (get(edit)) $$render(consequent_13);
          else $$render(alternate_6, false);
        });
      }
      reset(div_9);
      reset(div_6);
      reset(div);
      template_effect(() => {
        set_attribute(div, "id", `message-${(deep_read_state(message()), untrack(() => message().id)) ?? ""}`);
        set_class(
          div,
          1,
          `flex flex-col justify-between px-5 ${showUserProfile() ? "pt-1.5 pb-0.5" : ""} w-full max-w-full mx-auto group hover:bg-gray-300/5 dark:hover:bg-gray-700/5 transition relative ${replyToMessage() ? "border-l-4 border-blue-500 bg-blue-100/10 dark:bg-blue-100/5 pl-4" : ""} ${(deep_read_state(message()), $user(), untrack(() => {
            var _a, _b, _c, _d, _e, _f;
            return (((_c = (_b = (_a = message()) == null ? void 0 : _a.reply_to_message) == null ? void 0 : _b.meta) == null ? void 0 : _c.model_id) ?? ((_e = (_d = message()) == null ? void 0 : _d.reply_to_message) == null ? void 0 : _e.user_id)) === ((_f = $user()) == null ? void 0 : _f.id) ? "border-l-4 border-orange-500 bg-orange-100/10 dark:bg-orange-100/5 pl-4" : "";
          })) ?? ""}`,
          "svelte-s6wdik"
        );
        set_class(div_6, 1, ` flex w-full message-${(deep_read_state(message()), untrack(() => message().id)) ?? ""}`, "svelte-s6wdik");
        set_attribute(div_6, "id", `message-${(deep_read_state(message()), untrack(() => message().id)) ?? ""}`);
        set_attribute(div_6, "dir", ($settings(), untrack(() => $settings().chatDirection)));
        div_6.dir = div_6.dir;
      });
      append($$anchor2, div);
    };
    if_block(node_1, ($$render) => {
      if (message()) $$render(consequent_19);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_3$4 = from_html(`<div class="w-full flex justify-center py-1 text-xs animate-pulse items-center gap-2"><!> <div class=" "> </div></div>`);
var root_6 = from_html(`<div class="flex flex-col gap-1.5 pb-5 pt-10"><div class="text-2xl font-medium capitalize"> </div> <div class=" text-gray-500"> </div></div>`);
var root_7$2 = from_html(`<div class="flex justify-center text-xs items-center gap-2 py-5"><div class=" "> </div></div>`);
var root_8$2 = from_html(`<hr class=" border-gray-50 dark:border-gray-700/20 py-2.5 w-full"/>`);
var root_5 = from_html(`<div class="px-5 max-w-full mx-auto"><!> <!></div>`);
var root_1$3 = from_html(`<div><!> <!> <div class="pb-6"></div></div>`);
function Messages($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n2, "$i18n", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  dayjs2.extend(relativeTime);
  dayjs2.extend(isToday);
  dayjs2.extend(isYesterday);
  const i18n2 = getContext("i18n");
  let id = prop($$props, "id", 8, null);
  let channel = prop($$props, "channel", 8, null);
  let messages = prop($$props, "messages", 28, () => []);
  let replyToMessage = prop($$props, "replyToMessage", 8, null);
  let top = prop($$props, "top", 8, false);
  let thread = prop($$props, "thread", 8, false);
  let onLoad = prop($$props, "onLoad", 8, () => {
  });
  let onReply = prop($$props, "onReply", 8, () => {
  });
  let onThread = prop($$props, "onThread", 8, () => {
  });
  let messagesLoading = mutable_source(false);
  const loadMoreMessages = async () => {
    const element = document.getElementById("messages-container");
    element.scrollTop = element.scrollTop + 100;
    set(messagesLoading, true);
    await onLoad()();
    await tick();
    set(messagesLoading, false);
  };
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_4 = ($$anchor2) => {
      const messageList = derived_safe_equal(() => (deep_read_state(messages()), untrack(() => messages().slice().reverse())));
      var div = root_1$3();
      var node_1 = child(div);
      {
        var consequent = ($$anchor3) => {
          Loader($$anchor3, {
            $$events: {
              visible: (e) => {
                console.info("visible");
                if (!get(messagesLoading)) {
                  loadMoreMessages();
                }
              }
            },
            children: ($$anchor4, $$slotProps) => {
              var div_1 = root_3$4();
              var node_2 = child(div_1);
              Spinner(node_2, { className: " size-4" });
              var div_2 = sibling(node_2, 2);
              var text2 = child(div_2, true);
              reset(div_2);
              reset(div_1);
              template_effect(($0) => set_text(text2, $0), [() => ($i18n(), untrack(() => $i18n().t("Loading...")))]);
              append($$anchor4, div_1);
            },
            $$slots: { default: true }
          });
        };
        var alternate_1 = ($$anchor3) => {
          var fragment_2 = comment();
          var node_3 = first_child(fragment_2);
          {
            var consequent_3 = ($$anchor4) => {
              var div_3 = root_5();
              var node_4 = child(div_3);
              {
                var consequent_1 = ($$anchor5) => {
                  var div_4 = root_6();
                  var div_5 = child(div_4);
                  var text_1 = child(div_5, true);
                  reset(div_5);
                  var div_6 = sibling(div_5, 2);
                  var text_2 = child(div_6, true);
                  reset(div_6);
                  reset(div_4);
                  template_effect(
                    ($0) => {
                      set_text(text_1, (deep_read_state(channel()), untrack(() => channel().name)));
                      set_text(text_2, $0);
                    },
                    [
                      () => ($i18n(), deep_read_state(dayjs2), deep_read_state(channel()), untrack(() => $i18n().t("This channel was created on {{createdAt}}. This is the very beginning of the {{channelName}} channel.", {
                        createdAt: dayjs2(channel().created_at / 1e6).format("MMMM D, YYYY"),
                        channelName: channel().name
                      })))
                    ]
                  );
                  append($$anchor5, div_4);
                };
                var alternate = ($$anchor5) => {
                  var div_7 = root_7$2();
                  var div_8 = child(div_7);
                  var text_3 = child(div_8, true);
                  reset(div_8);
                  reset(div_7);
                  template_effect(($0) => set_text(text_3, $0), [
                    () => ($i18n(), untrack(() => $i18n().t("Start of the channel")))
                  ]);
                  append($$anchor5, div_7);
                };
                if_block(node_4, ($$render) => {
                  if (channel()) $$render(consequent_1);
                  else $$render(alternate, false);
                });
              }
              var node_5 = sibling(node_4, 2);
              {
                var consequent_2 = ($$anchor5) => {
                  var hr = root_8$2();
                  append($$anchor5, hr);
                };
                if_block(node_5, ($$render) => {
                  if (deep_read_state(get(messageList)), untrack(() => get(messageList).length > 0)) $$render(consequent_2);
                });
              }
              reset(div_3);
              append($$anchor4, div_3);
            };
            if_block(
              node_3,
              ($$render) => {
                if (!thread()) $$render(consequent_3);
              },
              true
            );
          }
          append($$anchor3, fragment_2);
        };
        if_block(node_1, ($$render) => {
          if (!top()) $$render(consequent);
          else $$render(alternate_1, false);
        });
      }
      var node_6 = sibling(node_1, 2);
      each(node_6, 3, () => get(messageList), (message) => id() ? `${id()}-${message.id}` : message.id, ($$anchor3, message, messageIdx) => {
        {
          let $0 = derived_safe_equal(() => (deep_read_state(replyToMessage()), get(message), untrack(() => {
            var _a;
            return ((_a = replyToMessage()) == null ? void 0 : _a.id) === get(message).id;
          })));
          let $1 = derived_safe_equal(() => (deep_read_state(channel()), untrack(() => {
            var _a;
            return !((_a = channel()) == null ? void 0 : _a.write_access);
          })));
          let $2 = derived_safe_equal(() => (deep_read_state(get(messageIdx)), deep_read_state(get(messageList)), get(message), untrack(() => {
            var _a, _b, _c, _d, _e, _f;
            return get(messageIdx) === 0 || ((_a = get(messageList).at(get(messageIdx) - 1)) == null ? void 0 : _a.user_id) !== get(message).user_id || ((_c = (_b = get(messageList).at(get(messageIdx) - 1)) == null ? void 0 : _b.meta) == null ? void 0 : _c.model_id) !== ((_e = (_d = get(message)) == null ? void 0 : _d.meta) == null ? void 0 : _e.model_id) || ((_f = get(message)) == null ? void 0 : _f.reply_to_message);
          })));
          Message($$anchor3, {
            get message() {
              return get(message);
            },
            get thread() {
              return thread();
            },
            get replyToMessage() {
              return get($0);
            },
            get disabled() {
              return get($1);
            },
            get showUserProfile() {
              return get($2);
            },
            onDelete: () => {
              messages(messages().filter((m) => m.id !== get(message).id));
              deleteMessage(localStorage.token, get(message).channel_id, get(message).id).catch((error) => {
                toast.error(`${error}`);
                return null;
              });
            },
            onEdit: (content) => {
              messages(messages().map((m) => {
                if (m.id === get(message).id) {
                  m.content = content;
                }
                return m;
              }));
              updateMessage(localStorage.token, get(message).channel_id, get(message).id, { content }).catch((error) => {
                toast.error(`${error}`);
                return null;
              });
            },
            onReply: (message2) => {
              onReply()(message2);
            },
            onThread: (id2) => {
              onThread()(id2);
            },
            onReaction: (name) => {
              var _a, _b, _c, _d;
              if (((_d = (_b = (((_a = get(message)) == null ? void 0 : _a.reactions) ?? []).find((reaction) => reaction.name === name)) == null ? void 0 : _b.user_ids) == null ? void 0 : _d.includes((_c = $user()) == null ? void 0 : _c.id)) ?? false) {
                messages(messages().map((m) => {
                  if (m.id === get(message).id) {
                    const reaction = m.reactions.find((reaction2) => reaction2.name === name);
                    if (reaction) {
                      reaction.user_ids = reaction.user_ids.filter((id2) => {
                        var _a2;
                        return id2 !== ((_a2 = $user()) == null ? void 0 : _a2.id);
                      });
                      reaction.count = reaction.user_ids.length;
                      if (reaction.count === 0) {
                        m.reactions = m.reactions.filter((r) => r.name !== name);
                      }
                    }
                  }
                  return m;
                }));
                removeReaction(localStorage.token, get(message).channel_id, get(message).id, name).catch((error) => {
                  toast.error(`${error}`);
                  return null;
                });
              } else {
                messages(messages().map((m) => {
                  var _a2, _b2;
                  if (m.id === get(message).id) {
                    if (m.reactions) {
                      const reaction = m.reactions.find((reaction2) => reaction2.name === name);
                      if (reaction) {
                        reaction.user_ids.push((_a2 = $user()) == null ? void 0 : _a2.id);
                        reaction.count = reaction.user_ids.length;
                      } else {
                        m.reactions.push({ name, user_ids: [(_b2 = $user()) == null ? void 0 : _b2.id], count: 1 });
                      }
                    }
                  }
                  return m;
                }));
                addReaction(localStorage.token, get(message).channel_id, get(message).id, name).catch((error) => {
                  toast.error(`${error}`);
                  return null;
                });
              }
            }
          });
        }
      });
      next(2);
      reset(div);
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (messages()) $$render(consequent_4);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root$3 = from_svg(`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"><path d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
function UserAlt($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$3();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root_1$2 = from_html(`<div class="my-10"><!></div>`);
var root_4$1 = from_html(`<span class="font-normal"><!></span>`);
var root_7$1 = from_html(`<span class="invisible"><!></span>`);
var root_8$1 = from_html(`<span class="font-normal"><!></span>`);
var root_11$1 = from_html(`<span class="invisible"><!></span>`);
var root_13 = from_html(`<img class="rounded-2xl w-6 h-6 object-cover flex-shrink-0" alt="user"/>`);
var root_14 = from_html(`<div class="font-medium truncate"> </div>`);
var root_15 = from_html(`<div><span class="relative flex size-1.5"><span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span> <span class="relative inline-flex size-1.5 rounded-full bg-green-500"></span></span></div>`);
var root_12$1 = from_html(`<div class=" dark:border-gray-850 text-xs flex items-center justify-between"><div class="px-3 py-1.5 font-medium text-gray-900 dark:text-white flex-1"><div class="flex items-center gap-2"><!> <!> <!></div></div> <div class="px-3 py-1"><div class=" translate-y-0.5"><!></div></div></div>`);
var root_3$3 = from_html(`<div class="scrollbar-hidden relative whitespace-nowrap w-full max-w-full"><div class=" text-sm text-left text-gray-500 dark:text-gray-400 w-full max-w-full"><div class="text-xs text-gray-800 uppercase bg-transparent dark:text-gray-200 w-full mb-0.5"><div class=" border-b-[1.5px] border-gray-50 dark:border-gray-850 flex items-center justify-between"><button class="px-2.5 py-2 cursor-pointer select-none"><div class="flex gap-1.5 items-center"> <!></div></button> <button class="px-2.5 py-2 cursor-pointer select-none"><div class="flex gap-1.5 items-center"> <!></div></button></div></div> <div class="w-full"></div></div></div> <!>`, 1);
var root_17 = from_html(`<div class="text-gray-500 text-xs text-center py-5 px-10"> </div>`);
var root_2$3 = from_html(`<div class="flex gap-1"><div class=" flex w-full space-x-2"><div class="flex flex-1"><div class=" self-center ml-1 mr-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd"></path></svg></div> <input class=" w-full text-sm pr-4 py-1 rounded-r-xl outline-hidden bg-transparent"/></div></div></div> <!>`, 1);
var root$2 = from_html(`<div class="flex flex-col justify-center"><!></div>`);
function UserList($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n2, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  dayjs2.extend(relativeTime);
  dayjs2.extend(localizedFormat);
  const i18n2 = getContext("i18n");
  let channel = prop($$props, "channel", 8, null);
  let page2 = mutable_source(1);
  let users = mutable_source(null);
  let total = mutable_source(null);
  let query = mutable_source("");
  let orderBy = mutable_source(
    "name"
    // default sort key
  );
  let direction = mutable_source(
    "asc"
    // default sort order
  );
  const setSortKey = (key2) => {
    if (get(orderBy) === key2) {
      set(direction, get(direction) === "asc" ? "desc" : "asc");
    } else {
      set(orderBy, key2);
      set(direction, "asc");
    }
  };
  const getUserList = async () => {
    try {
      const res = await getChannelUsersById(localStorage.token, channel().id, get(query), get(orderBy), get(direction), get(page2)).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (res) {
        set(users, res.users);
        set(total, res.total);
      }
    } catch (err) {
      console.error(err);
    }
  };
  legacy_pre_effect(() => get(page2), () => {
    if (get(page2)) {
      getUserList();
    }
  });
  legacy_pre_effect(() => (get(query), get(orderBy), get(direction)), () => {
    if (get(query) !== null && get(orderBy) && get(direction)) {
      getUserList();
    }
  });
  legacy_pre_effect_reset();
  init();
  var div = root$2();
  var node = child(div);
  {
    var consequent = ($$anchor2) => {
      var div_1 = root_1$2();
      var node_1 = child(div_1);
      Spinner(node_1, { className: "size-5" });
      reset(div_1);
      append($$anchor2, div_1);
    };
    var alternate_5 = ($$anchor2) => {
      var fragment = root_2$3();
      var div_2 = first_child(fragment);
      var div_3 = child(div_2);
      var div_4 = child(div_3);
      var input = sibling(child(div_4), 2);
      remove_input_defaults(input);
      reset(div_4);
      reset(div_3);
      reset(div_2);
      var node_2 = sibling(div_2, 2);
      {
        var consequent_7 = ($$anchor3) => {
          var fragment_1 = root_3$3();
          var div_5 = first_child(fragment_1);
          var div_6 = child(div_5);
          var div_7 = child(div_6);
          var div_8 = child(div_7);
          var button = child(div_8);
          var div_9 = child(button);
          var text2 = child(div_9);
          var node_3 = sibling(text2);
          {
            var consequent_2 = ($$anchor4) => {
              var span = root_4$1();
              var node_4 = child(span);
              {
                var consequent_1 = ($$anchor5) => {
                  ChevronUp($$anchor5, { className: "size-2" });
                };
                var alternate = ($$anchor5) => {
                  ChevronDown($$anchor5, { className: "size-2" });
                };
                if_block(node_4, ($$render) => {
                  if (get(direction) === "asc") $$render(consequent_1);
                  else $$render(alternate, false);
                });
              }
              reset(span);
              append($$anchor4, span);
            };
            var alternate_1 = ($$anchor4) => {
              var span_1 = root_7$1();
              var node_5 = child(span_1);
              ChevronUp(node_5, { className: "size-2" });
              reset(span_1);
              append($$anchor4, span_1);
            };
            if_block(node_3, ($$render) => {
              if (get(orderBy) === "name") $$render(consequent_2);
              else $$render(alternate_1, false);
            });
          }
          reset(div_9);
          reset(button);
          var button_1 = sibling(button, 2);
          var div_10 = child(button_1);
          var text_1 = child(div_10);
          var node_6 = sibling(text_1);
          {
            var consequent_4 = ($$anchor4) => {
              var span_2 = root_8$1();
              var node_7 = child(span_2);
              {
                var consequent_3 = ($$anchor5) => {
                  ChevronUp($$anchor5, { className: "size-2" });
                };
                var alternate_2 = ($$anchor5) => {
                  ChevronDown($$anchor5, { className: "size-2" });
                };
                if_block(node_7, ($$render) => {
                  if (get(direction) === "asc") $$render(consequent_3);
                  else $$render(alternate_2, false);
                });
              }
              reset(span_2);
              append($$anchor4, span_2);
            };
            var alternate_3 = ($$anchor4) => {
              var span_3 = root_11$1();
              var node_8 = child(span_3);
              ChevronUp(node_8, { className: "size-2" });
              reset(span_3);
              append($$anchor4, span_3);
            };
            if_block(node_6, ($$render) => {
              if (get(orderBy) === "role") $$render(consequent_4);
              else $$render(alternate_3, false);
            });
          }
          reset(div_10);
          reset(button_1);
          reset(div_8);
          reset(div_7);
          var div_11 = sibling(div_7, 2);
          each(div_11, 5, () => get(users), index, ($$anchor4, user2, userIdx, $$array) => {
            var div_12 = root_12$1();
            var div_13 = child(div_12);
            var div_14 = child(div_13);
            var node_9 = child(div_14);
            ProfilePreview(node_9, {
              get user() {
                return get(user2);
              },
              side: "right",
              align: "center",
              sideOffset: 6,
              children: ($$anchor5, $$slotProps) => {
                var img = root_13();
                template_effect(() => set_attribute(img, "src", (deep_read_state(WEBUI_API_BASE_URL), get(user2), untrack(() => `${WEBUI_API_BASE_URL}/users/${get(user2).id}/profile/image`))));
                append($$anchor5, img);
              },
              $$slots: { default: true }
            });
            var node_10 = sibling(node_9, 2);
            Tooltip(node_10, {
              get content() {
                return get(user2), untrack(() => get(user2).email);
              },
              placement: "top-start",
              children: ($$anchor5, $$slotProps) => {
                var div_15 = root_14();
                var text_2 = child(div_15, true);
                reset(div_15);
                template_effect(() => set_text(text_2, (get(user2), untrack(() => get(user2).name))));
                append($$anchor5, div_15);
              },
              $$slots: { default: true }
            });
            var node_11 = sibling(node_10, 2);
            {
              var consequent_5 = ($$anchor5) => {
                var div_16 = root_15();
                append($$anchor5, div_16);
              };
              if_block(node_11, ($$render) => {
                if (get(user2), untrack(() => {
                  var _a;
                  return (_a = get(user2)) == null ? void 0 : _a.is_active;
                })) $$render(consequent_5);
              });
            }
            reset(div_14);
            reset(div_13);
            var div_17 = sibling(div_13, 2);
            var div_18 = child(div_17);
            var node_12 = child(div_18);
            {
              let $0 = derived_safe_equal(() => (get(user2), untrack(() => get(user2).role === "admin" ? "info" : get(user2).role === "user" ? "success" : "muted")));
              let $1 = derived_safe_equal(() => ($i18n(), get(user2), untrack(() => $i18n().t(get(user2).role))));
              Badge(node_12, {
                get type() {
                  return get($0);
                },
                get content() {
                  return get($1);
                }
              });
            }
            reset(div_18);
            reset(div_17);
            reset(div_12);
            append($$anchor4, div_12);
          });
          reset(div_11);
          reset(div_6);
          reset(div_5);
          var node_13 = sibling(div_5, 2);
          {
            var consequent_6 = ($$anchor4) => {
              Pagination_1($$anchor4, {
                get count() {
                  return get(total);
                },
                perPage: 30,
                get page() {
                  return get(page2);
                },
                set page($$value) {
                  set(page2, $$value);
                },
                $$legacy: true
              });
            };
            if_block(node_13, ($$render) => {
              if (get(total) > 30) $$render(consequent_6);
            });
          }
          template_effect(
            ($0, $1) => {
              set_text(text2, `${$0 ?? ""} `);
              set_text(text_1, `${$1 ?? ""} `);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Name"))),
              () => ($i18n(), untrack(() => $i18n().t("Role")))
            ]
          );
          event("click", button, () => setSortKey("name"));
          event("click", button_1, () => setSortKey("role"));
          append($$anchor3, fragment_1);
        };
        var alternate_4 = ($$anchor3) => {
          var div_19 = root_17();
          var text_3 = child(div_19, true);
          reset(div_19);
          template_effect(($0) => set_text(text_3, $0), [
            () => ($i18n(), untrack(() => $i18n().t("No users were found.")))
          ]);
          append($$anchor3, div_19);
        };
        if_block(node_2, ($$render) => {
          if (get(users), untrack(() => get(users).length > 0)) $$render(consequent_7);
          else $$render(alternate_4, false);
        });
      }
      template_effect(($0) => set_attribute(input, "placeholder", $0), [() => ($i18n(), untrack(() => $i18n().t("Search")))]);
      bind_value(input, () => get(query), ($$value) => set(query, $$value));
      append($$anchor2, fragment);
    };
    if_block(node, ($$render) => {
      if (get(users) === null || get(total) === null) $$render(consequent);
      else $$render(alternate_5, false);
    });
  }
  reset(div);
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root_2$2 = from_html(`<div><div class=" flex justify-between dark:text-gray-100 px-5 pt-4 mb-1.5"><div class="self-center text-base"><div class="flex items-center gap-0.5 shrink-0"><div class=" size-4 justify-center flex items-center"><!></div> <div class=" text-left self-center overflow-hidden w-full line-clamp-1 capitalize flex-1"> </div></div></div> <button class="self-center"><!></button></div> <div class="flex flex-col md:flex-row w-full px-4 pb-4 md:space-x-4 dark:text-gray-200"><div class=" flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div class="flex flex-col w-full h-full pb-2"><!></div></form></div></div></div>`);
function ChannelInfoModal($$anchor, $$props) {
  push($$props, false);
  getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let channel = prop($$props, "channel", 8, null);
  const submitHandler = async () => {
  };
  onMount(() => {
  });
  legacy_pre_effect(() => deep_read_state(show()), () => {
    if (show()) ;
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_1 = ($$anchor2) => {
      Modal($$anchor2, {
        size: "sm",
        get show() {
          return show();
        },
        set show($$value) {
          show($$value);
        },
        children: ($$anchor3, $$slotProps) => {
          var div = root_2$2();
          var div_1 = child(div);
          var div_2 = child(div_1);
          var div_3 = child(div_2);
          var div_4 = child(div_3);
          var node_1 = child(div_4);
          {
            var consequent = ($$anchor4) => {
              Hashtag($$anchor4, { className: "size-3.5", strokeWidth: "2.5" });
            };
            var alternate = ($$anchor4) => {
              Lock($$anchor4, { className: "size-5.5", strokeWidth: "2" });
            };
            if_block(node_1, ($$render) => {
              if (deep_read_state(channel()), untrack(() => {
                var _a;
                return ((_a = channel()) == null ? void 0 : _a.access_control) === null;
              })) $$render(consequent);
              else $$render(alternate, false);
            });
          }
          reset(div_4);
          var div_5 = sibling(div_4, 2);
          var text2 = child(div_5, true);
          reset(div_5);
          reset(div_3);
          reset(div_2);
          var button = sibling(div_2, 2);
          var node_2 = child(button);
          XMark(node_2, { className: "size-5" });
          reset(button);
          reset(div_1);
          var div_6 = sibling(div_1, 2);
          var div_7 = child(div_6);
          var form = child(div_7);
          var div_8 = child(form);
          var node_3 = child(div_8);
          UserList(node_3, {
            get channel() {
              return channel();
            }
          });
          reset(div_8);
          reset(form);
          reset(div_7);
          reset(div_6);
          reset(div);
          template_effect(() => set_text(text2, (deep_read_state(channel()), untrack(() => channel().name))));
          event("click", button, () => {
            show(false);
          });
          event("submit", form, (e) => {
            e.preventDefault();
            submitHandler();
          });
          append($$anchor3, div);
        },
        $$slots: { default: true },
        $$legacy: true
      });
    };
    if_block(node, ($$render) => {
      if (channel()) $$render(consequent_1);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_2$1 = from_html(`<button id="sidebar-toggle-button" class=" cursor-pointer flex rounded-lg hover:bg-gray-100 dark:hover:bg-gray-850 transition cursor-"><div class=" self-center p-1.5"><!></div></button>`);
var root_1$1 = from_html(`<div><!></div>`);
var root_3$2 = from_html(`<div class="flex items-center gap-0.5 shrink-0"><div class=" size-4 justify-center flex items-center"><!></div> <div class=" text-left self-center overflow-hidden w-full line-clamp-1 capitalize flex-1"> </div></div>`);
var root_7 = from_html(`<button class=" flex cursor-pointer py-1 px-1.5 border dark:border-gray-850 border-gray-50 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-850 transition" aria-label="User Count" type="button"><div class=" flex items-center gap-0.5 m-auto self-center"><!> <div class="text-sm"> </div></div></button>`);
var root_9 = from_html(`<button class="select-none flex rounded-xl p-1.5 w-full hover:bg-gray-50 dark:hover:bg-gray-850 transition" aria-label="User Menu"><div class=" self-center"><img class="size-6 object-cover rounded-full" alt="User profile" draggable="false"/></div></button>`);
var root$1 = from_html(`<!> <nav class="sticky top-0 z-30 w-full px-1.5 py-1 -mb-8 flex items-center drag-region"><div id="navbar-bg-gradient-to-b" class=" bg-linear-to-b via-50% from-white via-white to-transparent dark:from-gray-900 dark:via-gray-900 dark:to-transparent pointer-events-none absolute inset-0 -bottom-7 z-[-1]"></div> <div class=" flex max-w-full w-full mx-auto px-1 pt-0.5 bg-transparent"><div class="flex items-center w-full max-w-full"><!> <div><!></div> <div class="self-start flex flex-none items-center text-gray-600 dark:text-gray-400 gap-1"><!> <!></div></div></div></nav>`, 1);
function Navbar($$anchor, $$props) {
  push($$props, false);
  const $mobile = () => store_get(mobile, "$mobile", $$stores);
  const $showSidebar = () => store_get(showSidebar, "$showSidebar", $$stores);
  const $i18n = () => store_get(i18n2, "$i18n", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n2 = getContext("i18n");
  let showChannelInfoModal = mutable_source(false);
  let channel = prop($$props, "channel", 8);
  init();
  var fragment = root$1();
  var node = first_child(fragment);
  ChannelInfoModal(node, {
    get channel() {
      return channel();
    },
    get show() {
      return get(showChannelInfoModal);
    },
    set show($$value) {
      set(showChannelInfoModal, $$value);
    },
    $$legacy: true
  });
  var nav = sibling(node, 2);
  var div = sibling(child(nav), 2);
  var div_1 = child(div);
  var node_1 = child(div_1);
  {
    var consequent = ($$anchor2) => {
      var div_2 = root_1$1();
      var node_2 = child(div_2);
      {
        let $0 = derived_safe_equal(() => ($showSidebar(), $i18n(), untrack(() => $showSidebar() ? $i18n().t("Close Sidebar") : $i18n().t("Open Sidebar"))));
        Tooltip(node_2, {
          get content() {
            return get($0);
          },
          interactive: true,
          children: ($$anchor3, $$slotProps) => {
            var button = root_2$1();
            var div_3 = child(button);
            var node_3 = child(div_3);
            Sidebar(node_3, {});
            reset(div_3);
            reset(button);
            event("click", button, () => {
              showSidebar.set(!$showSidebar());
            });
            append($$anchor3, button);
          },
          $$slots: { default: true }
        });
      }
      reset(div_2);
      template_effect(() => set_class(div_2, 1, `${$showSidebar() ? "md:hidden" : ""} mr-1.5 mt-0.5 self-start flex flex-none items-center text-gray-600 dark:text-gray-400`));
      append($$anchor2, div_2);
    };
    if_block(node_1, ($$render) => {
      if ($mobile()) $$render(consequent);
    });
  }
  var div_4 = sibling(node_1, 2);
  var node_4 = child(div_4);
  {
    var consequent_2 = ($$anchor2) => {
      var div_5 = root_3$2();
      var div_6 = child(div_5);
      var node_5 = child(div_6);
      {
        var consequent_1 = ($$anchor3) => {
          Hashtag($$anchor3, { className: "size-3", strokeWidth: "2.5" });
        };
        var alternate = ($$anchor3) => {
          Lock($$anchor3, { className: "size-5", strokeWidth: "2" });
        };
        if_block(node_5, ($$render) => {
          if (deep_read_state(channel()), untrack(() => {
            var _a;
            return ((_a = channel()) == null ? void 0 : _a.access_control) === null;
          })) $$render(consequent_1);
          else $$render(alternate, false);
        });
      }
      reset(div_6);
      var div_7 = sibling(div_6, 2);
      var text2 = child(div_7, true);
      reset(div_7);
      reset(div_5);
      template_effect(() => set_text(text2, (deep_read_state(channel()), untrack(() => channel().name))));
      append($$anchor2, div_5);
    };
    if_block(node_4, ($$render) => {
      if (channel()) $$render(consequent_2);
    });
  }
  reset(div_4);
  var div_8 = sibling(div_4, 2);
  var node_6 = child(div_8);
  {
    var consequent_3 = ($$anchor2) => {
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Users"))));
        Tooltip($$anchor2, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps) => {
            var button_1 = root_7();
            var div_9 = child(button_1);
            var node_7 = child(div_9);
            UserAlt(node_7, { className: " size-4", strokeWidth: "1.5" });
            var div_10 = sibling(node_7, 2);
            var text_1 = child(div_10, true);
            reset(div_10);
            reset(div_9);
            reset(button_1);
            template_effect(() => set_text(text_1, (deep_read_state(channel()), untrack(() => channel().user_count))));
            event("click", button_1, () => {
              set(showChannelInfoModal, true);
            });
            append($$anchor3, button_1);
          },
          $$slots: { default: true }
        });
      }
    };
    if_block(node_6, ($$render) => {
      if (deep_read_state(channel()), untrack(() => {
        var _a;
        return ((_a = channel()) == null ? void 0 : _a.user_count) !== void 0;
      })) $$render(consequent_3);
    });
  }
  var node_8 = sibling(node_6, 2);
  {
    var consequent_4 = ($$anchor2) => {
      {
        let $0 = derived_safe_equal(() => ($user(), untrack(() => {
          var _a;
          return (_a = $user()) == null ? void 0 : _a.role;
        })));
        UserMenu($$anchor2, {
          className: "max-w-[240px]",
          get role() {
            return get($0);
          },
          help: true,
          $$events: {
            show: (e) => {
              if (e.detail === "archived-chat") {
                showArchivedChats.set(true);
              }
            }
          },
          children: ($$anchor3, $$slotProps) => {
            var button_2 = root_9();
            var div_11 = child(button_2);
            var img = child(div_11);
            reset(div_11);
            reset(button_2);
            template_effect(() => set_attribute(img, "src", (deep_read_state(WEBUI_API_BASE_URL), $user(), untrack(() => {
              var _a;
              return `${WEBUI_API_BASE_URL}/users/${(_a = $user()) == null ? void 0 : _a.id}/profile/image`;
            }))));
            append($$anchor3, button_2);
          },
          $$slots: { default: true }
        });
      }
    };
    if_block(node_8, ($$render) => {
      if ($user() !== void 0) $$render(consequent_4);
    });
  }
  reset(div_8);
  reset(div_1);
  reset(div);
  reset(nav);
  template_effect(() => set_class(div_4, 1, `flex-1 overflow-hidden max-w-full py-0.5
			${$showSidebar() ? "ml-1" : ""}
			`));
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_3$1 = from_html(`<div class="w-full flex justify-center pt-5 pb-10"><!></div>`);
var root_1 = from_html(`<div class="flex flex-col w-full h-full bg-gray-50 dark:bg-gray-850"><div class="sticky top-0 flex items-center justify-between px-3.5 py-3"><div class=" font-medium text-lg"> </div> <div><button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 p-2"><!></button></div></div> <div class=" max-h-full w-full overflow-y-auto"><!> <div class=" pb-[1rem] px-2.5 w-full"><!></div></div></div>`);
function Thread($$anchor, $$props) {
  push($$props, false);
  const $user = () => store_get(user, "$user", $$stores);
  const $socket = () => store_get(socket, "$socket", $$stores);
  const $i18n = () => store_get(i18n2, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n2 = getContext("i18n");
  let threadId = prop($$props, "threadId", 8, null);
  let channel = prop($$props, "channel", 8, null);
  let onClose = prop($$props, "onClose", 8, () => {
  });
  let messages = mutable_source(null);
  let top = mutable_source(false);
  let messagesContainerElement = mutable_source(null);
  let chatInputElement = mutable_source(null);
  let replyToMessage = mutable_source(null);
  let typingUsers = mutable_source([]);
  let typingUsersTimeout = {};
  const scrollToBottom = () => {
    mutate(messagesContainerElement, get(messagesContainerElement).scrollTop = get(messagesContainerElement).scrollHeight);
  };
  const initHandler = async () => {
    set(messages, null);
    set(top, false);
    set(typingUsers, []);
    typingUsersTimeout = {};
    if (channel()) {
      set(messages, await getChannelThreadMessages(localStorage.token, channel().id, threadId()));
      if (get(messages).length < 50) {
        set(top, true);
      }
      await tick();
      scrollToBottom();
    } else {
      goto("/");
    }
  };
  const channelEventHandler = async (event2) => {
    var _a, _b, _c;
    console.debug(event2);
    if (event2.channel_id === channel().id) {
      const type = ((_a = event2 == null ? void 0 : event2.data) == null ? void 0 : _a.type) ?? null;
      const data = ((_b = event2 == null ? void 0 : event2.data) == null ? void 0 : _b.data) ?? null;
      if (type === "message") {
        if (((data == null ? void 0 : data.parent_id) ?? null) === threadId()) {
          if (get(messages)) {
            set(messages, [data, ...get(messages)]);
            if (get(typingUsers).find((user2) => user2.id === event2.user.id)) {
              set(typingUsers, get(typingUsers).filter((user2) => user2.id !== event2.user.id));
            }
          }
        }
      } else if (type === "message:update") {
        if (get(messages)) {
          const idx = get(messages).findIndex((message) => message.id === data.id);
          if (idx !== -1) {
            mutate(messages, get(messages)[idx] = data);
          }
        }
      } else if (type === "message:delete") {
        if (get(messages)) {
          set(messages, get(messages).filter((message) => message.id !== data.id));
        }
      } else if (type.includes("message:reaction")) {
        if (get(messages)) {
          const idx = get(messages).findIndex((message) => message.id === data.id);
          if (idx !== -1) {
            mutate(messages, get(messages)[idx] = data);
          }
        }
      } else if (type === "typing" && event2.message_id === threadId()) {
        if (event2.user.id === ((_c = $user()) == null ? void 0 : _c.id)) {
          return;
        }
        set(typingUsers, data.typing ? [
          ...get(typingUsers),
          ...get(typingUsers).find((user2) => user2.id === event2.user.id) ? [] : [{ id: event2.user.id, name: event2.user.name }]
        ] : get(typingUsers).filter((user2) => user2.id !== event2.user.id));
        if (typingUsersTimeout[event2.user.id]) {
          clearTimeout(typingUsersTimeout[event2.user.id]);
        }
        typingUsersTimeout[event2.user.id] = setTimeout(
          () => {
            set(typingUsers, get(typingUsers).filter((user2) => user2.id !== event2.user.id));
          },
          5e3
        );
      }
    }
  };
  const submitHandler = async ({ content, data }) => {
    var _a;
    if (!content && ((data == null ? void 0 : data.files) ?? []).length === 0) {
      return;
    }
    await sendMessage(localStorage.token, channel().id, {
      parent_id: threadId(),
      reply_to_id: ((_a = get(replyToMessage)) == null ? void 0 : _a.id) ?? null,
      content,
      data
    }).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    set(replyToMessage, null);
  };
  const onChange = async () => {
    var _a;
    (_a = $socket()) == null ? void 0 : _a.emit("events:channel", {
      channel_id: channel().id,
      message_id: threadId(),
      data: { type: "typing", data: { typing: true } }
    });
  };
  onMount(() => {
    var _a;
    (_a = $socket()) == null ? void 0 : _a.on("events:channel", channelEventHandler);
  });
  onDestroy(() => {
    var _a;
    (_a = $socket()) == null ? void 0 : _a.off("events:channel", channelEventHandler);
  });
  legacy_pre_effect(() => deep_read_state(threadId()), () => {
    if (threadId()) {
      initHandler();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_1 = ($$anchor2) => {
      var div = root_1();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var text2 = child(div_2, true);
      reset(div_2);
      var div_3 = sibling(div_2, 2);
      var button = child(div_3);
      var node_1 = child(button);
      XMark(node_1, {});
      reset(button);
      reset(div_3);
      reset(div_1);
      var div_4 = sibling(div_1, 2);
      var node_2 = child(div_4);
      {
        var consequent = ($$anchor3) => {
          Messages($$anchor3, {
            get id() {
              return threadId();
            },
            get channel() {
              return channel();
            },
            get top() {
              return get(top);
            },
            get messages() {
              return get(messages);
            },
            get replyToMessage() {
              return get(replyToMessage);
            },
            thread: true,
            onReply: async (message) => {
              var _a;
              set(replyToMessage, message);
              await tick();
              (_a = get(chatInputElement)) == null ? void 0 : _a.focus();
            },
            onLoad: async () => {
              const newMessages = await getChannelThreadMessages(localStorage.token, channel().id, threadId(), get(messages).length);
              set(messages, [...get(messages), ...newMessages]);
              if (newMessages.length < 50) {
                set(top, true);
                return;
              }
            }
          });
        };
        var alternate = ($$anchor3) => {
          var div_5 = root_3$1();
          var node_3 = child(div_5);
          Spinner(node_3, {});
          reset(div_5);
          append($$anchor3, div_5);
        };
        if_block(node_2, ($$render) => {
          if (get(messages) !== null) $$render(consequent);
          else $$render(alternate, false);
        });
      }
      var div_6 = sibling(node_2, 2);
      var node_4 = child(div_6);
      {
        let $0 = derived_safe_equal(() => (deep_read_state(channel()), untrack(() => {
          var _a;
          return !((_a = channel()) == null ? void 0 : _a.write_access);
        })));
        let $1 = derived_safe_equal(() => (deep_read_state(channel()), $i18n(), untrack(() => {
          var _a;
          return !((_a = channel()) == null ? void 0 : _a.write_access) ? $i18n().t("You do not have permission to send messages in this thread.") : $i18n().t("Reply to thread...");
        })));
        MessageInput(node_4, {
          get id() {
            return threadId();
          },
          get disabled() {
            return get($0);
          },
          get placeholder() {
            return get($1);
          },
          typingUsersClassName: "from-gray-50 dark:from-gray-850",
          get typingUsers() {
            return get(typingUsers);
          },
          userSuggestions: true,
          channelSuggestions: true,
          onChange,
          onSubmit: submitHandler,
          get replyToMessage() {
            return get(replyToMessage);
          },
          set replyToMessage($$value) {
            set(replyToMessage, $$value);
          },
          get chatInputElement() {
            return get(chatInputElement);
          },
          set chatInputElement($$value) {
            set(chatInputElement, $$value);
          },
          $$legacy: true
        });
      }
      reset(div_6);
      reset(div_4);
      bind_this(div_4, ($$value) => set(messagesContainerElement, $$value), () => get(messagesContainerElement));
      reset(div);
      template_effect(($0) => set_text(text2, $0), [() => ($i18n(), untrack(() => $i18n().t("Thread")))]);
      event("click", button, () => {
        onClose()();
      });
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (channel()) $$render(consequent_1);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_4 = from_html(`<div class=" pb-2.5 max-w-full z-10 scrollbar-hidden w-full h-full pt-6 flex-1 flex flex-col-reverse overflow-auto" id="messages-container"><!></div>`);
var root_3 = from_html(`<!> <div class="flex-1 overflow-y-auto"><!></div> <div class=" pb-[1rem] px-2.5"><!></div>`, 1);
var root_8 = from_html(`<div><!></div>`);
var root_11 = from_html(`<div class=" absolute -left-1.5 -right-1.5 -top-0 -bottom-0 z-20 cursor-col-resize bg-transparent"></div>`);
var root_12 = from_html(`<div class="h-full w-full shadow-xl"><!></div>`);
var root_10 = from_html(`<!> <!>`, 1);
var root_2 = from_html(`<!> <!>`, 1);
var root = from_html(`<div id="channel-container"><!></div>`);
function Channel($$anchor, $$props) {
  push($$props, false);
  const $user = () => store_get(user, "$user", $$stores);
  const $socket = () => store_get(socket, "$socket", $$stores);
  const $chatId = () => store_get(chatId, "$chatId", $$stores);
  const $showSidebar = () => store_get(showSidebar, "$showSidebar", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let id = prop($$props, "id", 8, "");
  let scrollEnd = mutable_source(true);
  let messagesContainerElement = mutable_source(null);
  let chatInputElement = mutable_source(null);
  let top = mutable_source(false);
  let channel = mutable_source(null);
  let messages = mutable_source(null);
  let replyToMessage = mutable_source(null);
  let threadId = mutable_source(null);
  let typingUsers = mutable_source([]);
  let typingUsersTimeout = {};
  const scrollToBottom = () => {
    if (get(messagesContainerElement)) {
      mutate(messagesContainerElement, get(messagesContainerElement).scrollTop = get(messagesContainerElement).scrollHeight);
    }
  };
  const initHandler = async () => {
    set(top, false);
    set(messages, null);
    set(channel, null);
    set(threadId, null);
    set(typingUsers, []);
    typingUsersTimeout = {};
    set(channel, await getChannelById(localStorage.token, id()).catch((error) => {
      return null;
    }));
    if (get(channel)) {
      set(messages, await getChannelMessages(localStorage.token, id(), 0));
      if (get(messages)) {
        scrollToBottom();
        if (get(messages).length < 50) {
          set(top, true);
        }
      }
    } else {
      goto("/");
    }
  };
  const channelEventHandler = async (event2) => {
    var _a, _b, _c;
    if (event2.channel_id === id()) {
      const type = ((_a = event2 == null ? void 0 : event2.data) == null ? void 0 : _a.type) ?? null;
      const data = ((_b = event2 == null ? void 0 : event2.data) == null ? void 0 : _b.data) ?? null;
      if (type === "message") {
        if (((data == null ? void 0 : data.parent_id) ?? null) === null) {
          set(messages, [data, ...get(messages)]);
          if (get(typingUsers).find((user2) => user2.id === event2.user.id)) {
            set(typingUsers, get(typingUsers).filter((user2) => user2.id !== event2.user.id));
          }
          await tick();
          if (get(scrollEnd)) {
            scrollToBottom();
          }
        }
      } else if (type === "message:update") {
        const idx = get(messages).findIndex((message) => message.id === data.id);
        if (idx !== -1) {
          mutate(messages, get(messages)[idx] = data);
        }
      } else if (type === "message:delete") {
        set(messages, get(messages).filter((message) => message.id !== data.id));
      } else if (type === "message:reply") {
        const idx = get(messages).findIndex((message) => message.id === data.id);
        if (idx !== -1) {
          mutate(messages, get(messages)[idx] = data);
        }
      } else if (type.includes("message:reaction")) {
        const idx = get(messages).findIndex((message) => message.id === data.id);
        if (idx !== -1) {
          mutate(messages, get(messages)[idx] = data);
        }
      } else if (type === "typing" && event2.message_id === null) {
        if (event2.user.id === ((_c = $user()) == null ? void 0 : _c.id)) {
          return;
        }
        set(typingUsers, data.typing ? [
          ...get(typingUsers),
          ...get(typingUsers).find((user2) => user2.id === event2.user.id) ? [] : [{ id: event2.user.id, name: event2.user.name }]
        ] : get(typingUsers).filter((user2) => user2.id !== event2.user.id));
        if (typingUsersTimeout[event2.user.id]) {
          clearTimeout(typingUsersTimeout[event2.user.id]);
        }
        typingUsersTimeout[event2.user.id] = setTimeout(
          () => {
            set(typingUsers, get(typingUsers).filter((user2) => user2.id !== event2.user.id));
          },
          5e3
        );
      }
    }
  };
  const submitHandler = async ({ content, data }) => {
    var _a;
    if (!content && ((data == null ? void 0 : data.files) ?? []).length === 0) {
      return;
    }
    const res = await sendMessage(localStorage.token, id(), {
      content,
      data,
      reply_to_id: ((_a = get(replyToMessage)) == null ? void 0 : _a.id) ?? null
    }).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      mutate(messagesContainerElement, get(messagesContainerElement).scrollTop = get(messagesContainerElement).scrollHeight);
    }
    set(replyToMessage, null);
  };
  const onChange = async () => {
    var _a;
    (_a = $socket()) == null ? void 0 : _a.emit("events:channel", {
      channel_id: id(),
      message_id: null,
      data: { type: "typing", data: { typing: true } }
    });
  };
  let mediaQuery;
  let largeScreen = mutable_source(false);
  onMount(() => {
    var _a;
    if ($chatId()) {
      chatId.set("");
    }
    (_a = $socket()) == null ? void 0 : _a.on("events:channel", channelEventHandler);
    mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleMediaQuery = async (e) => {
      if (e.matches) {
        set(largeScreen, true);
      } else {
        set(largeScreen, false);
      }
    };
    mediaQuery.addEventListener("change", handleMediaQuery);
    handleMediaQuery(mediaQuery);
  });
  onDestroy(() => {
    var _a;
    (_a = $socket()) == null ? void 0 : _a.off("events:channel", channelEventHandler);
  });
  legacy_pre_effect(() => deep_read_state(id()), () => {
    if (id()) {
      initHandler();
    }
  });
  legacy_pre_effect_reset();
  init();
  var div = root();
  head("l5reg3", ($$anchor2) => {
    deferred_template_effect(() => {
      $document.title = `#${(get(channel), untrack(() => {
        var _a;
        return ((_a = get(channel)) == null ? void 0 : _a.name) ?? "Channel";
      })) ?? ""} • Open WebUI`;
    });
  });
  var node = child(div);
  Pane_group(node, {
    direction: "horizontal",
    class: "w-full h-full",
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_2();
      var node_1 = first_child(fragment);
      Pane(node_1, {
        defaultSize: 50,
        minSize: 50,
        class: "h-full flex flex-col w-full relative",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_1 = root_3();
          var node_2 = first_child(fragment_1);
          Navbar(node_2, {
            get channel() {
              return get(channel);
            }
          });
          var div_1 = sibling(node_2, 2);
          var node_3 = child(div_1);
          {
            var consequent = ($$anchor4) => {
              var div_2 = root_4();
              var node_4 = child(div_2);
              key(node_4, id, ($$anchor5) => {
                Messages($$anchor5, {
                  get channel() {
                    return get(channel);
                  },
                  get top() {
                    return get(top);
                  },
                  get messages() {
                    return get(messages);
                  },
                  get replyToMessage() {
                    return get(replyToMessage);
                  },
                  onReply: async (message) => {
                    var _a;
                    set(replyToMessage, message);
                    await tick();
                    (_a = get(chatInputElement)) == null ? void 0 : _a.focus();
                  },
                  onThread: (id2) => {
                    set(threadId, id2);
                  },
                  onLoad: async () => {
                    const newMessages = await getChannelMessages(localStorage.token, id(), get(messages).length);
                    set(messages, [...get(messages), ...newMessages]);
                    if (newMessages.length < 50) {
                      set(top, true);
                      return;
                    }
                  }
                });
              });
              reset(div_2);
              bind_this(div_2, ($$value) => set(messagesContainerElement, $$value), () => get(messagesContainerElement));
              event("scroll", div_2, (e) => {
                set(scrollEnd, Math.abs(get(messagesContainerElement).scrollTop) <= 50);
              });
              append($$anchor4, div_2);
            };
            if_block(node_3, ($$render) => {
              if (get(channel)) $$render(consequent);
            });
          }
          reset(div_1);
          var div_3 = sibling(div_1, 2);
          var node_5 = child(div_3);
          {
            let $0 = derived_safe_equal(() => (get(channel), untrack(() => {
              var _a;
              return !((_a = get(channel)) == null ? void 0 : _a.write_access);
            })));
            let $1 = derived_safe_equal(() => (get(channel), $i18n(), untrack(() => {
              var _a;
              return !((_a = get(channel)) == null ? void 0 : _a.write_access) ? $i18n().t("You do not have permission to send messages in this channel.") : $i18n().t("Type here...");
            })));
            MessageInput(node_5, {
              id: "root",
              get typingUsers() {
                return get(typingUsers);
              },
              userSuggestions: true,
              channelSuggestions: true,
              get disabled() {
                return get($0);
              },
              get placeholder() {
                return get($1);
              },
              onChange,
              onSubmit: submitHandler,
              scrollToBottom,
              get scrollEnd() {
                return get(scrollEnd);
              },
              get chatInputElement() {
                return get(chatInputElement);
              },
              set chatInputElement($$value) {
                set(chatInputElement, $$value);
              },
              get replyToMessage() {
                return get(replyToMessage);
              },
              set replyToMessage($$value) {
                set(replyToMessage, $$value);
              },
              $$legacy: true
            });
          }
          reset(div_3);
          append($$anchor3, fragment_1);
        },
        $$slots: { default: true }
      });
      var node_6 = sibling(node_1, 2);
      {
        var consequent_2 = ($$anchor3) => {
          var fragment_3 = comment();
          var node_7 = first_child(fragment_3);
          {
            var consequent_1 = ($$anchor4) => {
              {
                let $0 = derived_safe_equal(() => get(threadId) !== null);
                Drawer($$anchor4, {
                  get show() {
                    return get($0);
                  },
                  onClose: () => {
                    set(threadId, null);
                  },
                  children: ($$anchor5, $$slotProps2) => {
                    var div_4 = root_8();
                    var node_8 = child(div_4);
                    Thread(node_8, {
                      get threadId() {
                        return get(threadId);
                      },
                      get channel() {
                        return get(channel);
                      },
                      onClose: () => {
                        set(threadId, null);
                      }
                    });
                    reset(div_4);
                    template_effect(() => set_class(div_4, 1, ` ${get(threadId) !== null ? " h-screen  w-full" : "px-6 py-4"} h-full`));
                    append($$anchor5, div_4);
                  },
                  $$slots: { default: true }
                });
              }
            };
            if_block(node_7, ($$render) => {
              if (get(threadId) !== null) $$render(consequent_1);
            });
          }
          append($$anchor3, fragment_3);
        };
        var alternate = ($$anchor3) => {
          var fragment_5 = comment();
          var node_9 = first_child(fragment_5);
          {
            var consequent_3 = ($$anchor4) => {
              var fragment_6 = root_10();
              var node_10 = first_child(fragment_6);
              Pane_resizer(node_10, {
                class: "relative flex items-center justify-center group border-l border-gray-50 dark:border-gray-850 hover:border-gray-200 dark:hover:border-gray-800  transition z-20",
                id: "controls-resizer",
                children: ($$anchor5, $$slotProps2) => {
                  var div_5 = root_11();
                  append($$anchor5, div_5);
                },
                $$slots: { default: true }
              });
              var node_11 = sibling(node_10, 2);
              Pane(node_11, {
                defaultSize: 50,
                minSize: 30,
                class: "h-full w-full",
                children: ($$anchor5, $$slotProps2) => {
                  var div_6 = root_12();
                  var node_12 = child(div_6);
                  Thread(node_12, {
                    get threadId() {
                      return get(threadId);
                    },
                    get channel() {
                      return get(channel);
                    },
                    onClose: () => {
                      set(threadId, null);
                    }
                  });
                  reset(div_6);
                  append($$anchor5, div_6);
                },
                $$slots: { default: true }
              });
              append($$anchor4, fragment_6);
            };
            if_block(
              node_9,
              ($$render) => {
                if (get(threadId) !== null) $$render(consequent_3);
              },
              true
            );
          }
          append($$anchor3, fragment_5);
        };
        if_block(node_6, ($$render) => {
          if (!get(largeScreen)) $$render(consequent_2);
          else $$render(alternate, false);
        });
      }
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  reset(div);
  template_effect(() => set_class(div, 1, `h-screen max-h-[100dvh] transition-width duration-200 ease-in-out ${$showSidebar() ? "md:max-w-[calc(100%-260px)]" : ""} w-full max-w-full flex flex-col`));
  append($$anchor, div);
  pop();
  $$cleanup();
}
function _page($$anchor, $$props) {
  push($$props, false);
  const $page = () => store_get(page, "$page", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  init();
  Channel($$anchor, {
    get id() {
      return $page().params.id;
    }
  });
  pop();
  $$cleanup();
}
export {
  _page as component
};
