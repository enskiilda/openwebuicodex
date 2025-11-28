import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { t as template_effect, p as push, g as getContext, n as createEventDispatcher, l as legacy_pre_effect, i as deep_read_state, j as legacy_pre_effect_reset, c as child, r as reset, e as sibling, aF as mutate, b as get, m as mutable_source, u as untrack, aE as invalidate_inner_signals, h as derived_safe_equal, a as pop, s as set, f as first_child, q as next, o as onMount } from "./BxIY6ir7.js";
import { s as set_text, e as event } from "./cBADewWV.js";
import { i as if_block } from "./BoSuMvtf.js";
import { b as from_svg, a as append, f as from_html, c as comment, t as text } from "./CAbo1QWi.js";
import { a as set_attribute, s as set_class, c as clsx, r as remove_input_defaults, d as bind_select_value } from "./kXiCYuyj.js";
import { i as init } from "./ByqEASoO.js";
import { a as store_get, s as setup_stores } from "./BvQ5O7-v.js";
import { t as toast } from "./BccDN__m.js";
import { g as goto } from "./h-B6Md2q.js";
import { u as user, c as config } from "./2Yg1sHDo.js";
import { p as page } from "./CrvggIeO.js";
import { e as each, i as index } from "./7_HZMPNF.js";
import { b as bind_value, a as bind_files } from "./DVLuwGai.js";
import { b as WEBUI_BASE_URL, a as WEBUI_API_BASE_URL } from "./DQ9UxF7k.js";
import { d as dayjs2, r as relativeTime } from "./OO7lCI-F.js";
import { l as localizedFormat, f as generateInitialsImage } from "./Bh-hrM1w.js";
import { u as updateUserById, b as getUserGroupsById, d as deleteUserById, c as getUsers, e as getUserDefaultPermissions, f as updateUserDefaultPermissions } from "./Bi6Hlb5b.js";
import { P as Pagination_1 } from "./DCRGSDLC.js";
import { p as prop } from "./BRmGPDvq.js";
import { T as Tooltip } from "./BHXWufQb.js";
import { p as preventDefault } from "./CGgk3ROl.js";
import { M as Modal } from "./DF6V1elH.js";
import { X as XMark } from "./CUUSX84-.js";
import { S as SensitiveInput } from "./BmA2IqKa.js";
import { U as UserProfileImage, C as ChatsModal } from "./BfZt12ry.js";
/* empty css         */
import { e as getChatListByUserId } from "./17j0UIT7.js";
import "./bQFTtKkZ.js";
import { c as addUser } from "./GdVmBnqS.js";
import { S as Spinner } from "./CtnI4RVL.js";
import { C as ConfirmDialog } from "./DhVOSDv1.js";
import { B as Badge } from "./DGk_635a.js";
import { P as Plus } from "./F9_n4pHG.js";
import { C as ChevronUp } from "./DTpd_r3Z.js";
import { C as ChevronDown } from "./CUFupyOK.js";
import "./-BrZk0Qz.js";
import { B as Banner } from "./CkX7EQxC.js";
import { M as Markdown } from "./BgD15ug2.js";
import { C as ChevronRight } from "./CS8GUXml.js";
import { S as Search } from "./2ixn6gs3.js";
import { T as Textarea } from "./B-P1fI-w.js";
import { S as Switch_1 } from "./CakJ276w.js";
import { a as addUserToGroup, r as removeUserFromGroup, u as updateGroupById, d as deleteGroupById, g as getGroups, c as createNewGroup } from "./D8Q8X2hm.js";
import { C as Checkbox } from "./BfX_BY5_.js";
import { P as Pencil } from "./wRvEFTSI.js";
import { U as UserCircleSolid } from "./CIK4JG9S.js";
var root$b = from_svg(`<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="icon" aria-hidden="true"><path d="M16.585 10C16.585 6.3632 13.6368 3.41504 10 3.41504C6.3632 3.41504 3.41504 6.3632 3.41504 10C3.41504 11.9528 4.26592 13.7062 5.61621 14.9121C6.6544 13.6452 8.23235 12.835 10 12.835C11.7674 12.835 13.3447 13.6454 14.3828 14.9121C15.7334 13.7062 16.585 11.9531 16.585 10ZM10 14.165C8.67626 14.165 7.49115 14.7585 6.69531 15.6953C7.66679 16.2602 8.79525 16.585 10 16.585C11.2041 16.585 12.3316 16.2597 13.3027 15.6953C12.5069 14.759 11.3233 14.1651 10 14.165ZM11.835 8.5C11.835 7.48656 11.0134 6.66504 10 6.66504C8.98656 6.66504 8.16504 7.48656 8.16504 8.5C8.16504 9.51344 8.98656 10.335 10 10.335C11.0134 10.335 11.835 9.51344 11.835 8.5ZM17.915 10C17.915 14.3713 14.3713 17.915 10 17.915C5.62867 17.915 2.08496 14.3713 2.08496 10C2.08496 5.62867 5.62867 2.08496 10 2.08496C14.3713 2.08496 17.915 5.62867 17.915 10ZM13.165 8.5C13.165 10.248 11.748 11.665 10 11.665C8.25202 11.665 6.83496 10.248 6.83496 8.5C6.83496 6.75202 8.25202 5.33496 10 5.33496C11.748 5.33496 13.165 6.75202 13.165 8.5Z"></path></svg>`);
function User($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-4 h-4");
  var svg = root$b();
  template_effect(() => set_attribute(svg, "className", className()));
  append($$anchor, svg);
}
var root$a = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"></path></svg>`);
function ChatBubbles($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$a();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root_3$4 = from_html(`<span class="px-1.5 py-0.5 rounded-xl bg-gray-100 dark:bg-gray-850 text-xs"><a> </a></span>`);
var root_2$4 = from_html(`<div class="flex flex-col w-full text-sm"><div class="mb-1 text-xs text-gray-500"> </div> <div class="flex flex-wrap gap-1 my-0.5 -mx-1"></div></div>`);
var root_4$5 = from_html(`<div class="flex flex-col w-full"><div class=" mb-1 text-xs text-gray-500"> </div> <div class="flex-1 text-sm break-all mb-1"> </div></div>`);
var root_1$6 = from_html(`<div><div class=" flex justify-between dark:text-gray-300 px-5 pt-4 pb-2"><div class=" text-lg font-medium self-center"> </div> <button class="self-center"><!></button></div> <div class="flex flex-col md:flex-row w-full md:space-x-4 dark:text-gray-200"><div class=" flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div class=" px-5 pt-3 pb-5 w-full"><div class="flex self-center w-full"><div class=" self-start h-full mr-6"><!></div> <div class=" flex-1"><div class="overflow-hidden w-ful mb-2"><div class=" self-center capitalize font-medium truncate"> </div> <div class="text-xs text-gray-500"> </div></div> <div class=" flex flex-col space-y-1.5"><!> <div class="flex flex-col w-full"><div class=" mb-1 text-xs text-gray-500"> </div> <div class="flex-1"><select class="w-full dark:bg-gray-900 text-sm bg-transparent disabled:text-gray-500 dark:disabled:text-gray-500 outline-hidden" required><option> </option><option> </option><option> </option></select></div></div> <div class="flex flex-col w-full"><div class=" mb-1 text-xs text-gray-500"> </div> <div class="flex-1"><input class="w-full text-sm bg-transparent outline-hidden svelte-zhsfcf" type="text" autocomplete="off" required/></div></div> <div class="flex flex-col w-full"><div class=" mb-1 text-xs text-gray-500"> </div> <div class="flex-1"><input class="w-full text-sm bg-transparent disabled:text-gray-500 dark:disabled:text-gray-500 outline-hidden svelte-zhsfcf" type="email" autocomplete="off" required/></div></div> <!> <div class="flex flex-col w-full"><div class=" mb-1 text-xs text-gray-500"> </div> <div class="flex-1"><!></div></div></div></div></div> <div class="flex justify-end pt-3 text-sm font-medium"><button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center" type="submit"> </button></div></div></form></div></div></div>`);
function EditUserModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  const dispatch = createEventDispatcher();
  dayjs2.extend(localizedFormat);
  let show = prop($$props, "show", 12, false);
  let selectedUser = prop($$props, "selectedUser", 8);
  let sessionUser = prop($$props, "sessionUser", 8);
  const init$1 = () => {
    if (selectedUser()) {
      set(_user, selectedUser());
      mutate(_user, get(_user).password = "");
      loadUserGroups();
    }
  };
  let _user = mutable_source({
    profile_image_url: "",
    role: "pending",
    name: "",
    email: "",
    password: ""
  });
  let userGroups = mutable_source(null);
  const submitHandler = async () => {
    const res = await updateUserById(localStorage.token, selectedUser().id, get(_user)).catch((error) => {
      toast.error(`${error}`);
    });
    if (res) {
      dispatch("save");
      show(false);
    }
  };
  const loadUserGroups = async () => {
    var _a;
    if (!((_a = selectedUser()) == null ? void 0 : _a.id)) return;
    set(userGroups, null);
    set(userGroups, await getUserGroupsById(localStorage.token, selectedUser().id).catch((error) => {
      toast.error(`${error}`);
      return null;
    }));
  };
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
      var div = root_1$6();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var text2 = child(div_2, true);
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
      var node_1 = child(div_7);
      UserProfileImage(node_1, {
        imageClassName: "size-14",
        get user() {
          return get(_user);
        },
        get profileImageUrl() {
          return get(_user).profile_image_url;
        },
        set profileImageUrl($$value) {
          mutate(_user, get(_user).profile_image_url = $$value);
        },
        $$legacy: true
      });
      reset(div_7);
      var div_8 = sibling(div_7, 2);
      var div_9 = child(div_8);
      var div_10 = child(div_9);
      var text_1 = child(div_10, true);
      reset(div_10);
      var div_11 = sibling(div_10, 2);
      var text_2 = child(div_11);
      reset(div_11);
      reset(div_9);
      var div_12 = sibling(div_9, 2);
      var node_2 = child(div_12);
      {
        var consequent = ($$anchor3) => {
          var div_13 = root_2$4();
          var div_14 = child(div_13);
          var text_3 = child(div_14, true);
          reset(div_14);
          var div_15 = sibling(div_14, 2);
          each(div_15, 5, () => get(userGroups), index, ($$anchor4, userGroup) => {
            var span = root_3$4();
            var a = child(span);
            var text_4 = child(a, true);
            reset(a);
            reset(span);
            template_effect(() => {
              set_attribute(a, "href", (get(userGroup), untrack(() => "/admin/users/groups?id=" + get(userGroup).id)));
              set_text(text_4, (get(userGroup), untrack(() => get(userGroup).name)));
            });
            event("click", a, preventDefault(() => goto("/admin/users/groups?id=" + get(userGroup).id)));
            append($$anchor4, span);
          });
          reset(div_15);
          reset(div_13);
          template_effect(($0) => set_text(text_3, $0), [() => ($i18n(), untrack(() => $i18n().t("User Groups")))]);
          append($$anchor3, div_13);
        };
        if_block(node_2, ($$render) => {
          if (get(userGroups), untrack(() => (get(userGroups) ?? []).length > 0)) $$render(consequent);
        });
      }
      var div_16 = sibling(node_2, 2);
      var div_17 = child(div_16);
      var text_5 = child(div_17, true);
      reset(div_17);
      var div_18 = sibling(div_17, 2);
      var select = child(div_18);
      template_effect(() => {
        get(_user);
        invalidate_inner_signals(() => {
          sessionUser();
          $i18n();
        });
      });
      var option = child(select);
      var text_6 = child(option, true);
      reset(option);
      option.value = option.__value = "admin";
      var option_1 = sibling(option);
      var text_7 = child(option_1, true);
      reset(option_1);
      option_1.value = option_1.__value = "user";
      var option_2 = sibling(option_1);
      var text_8 = child(option_2, true);
      reset(option_2);
      option_2.value = option_2.__value = "pending";
      reset(select);
      reset(div_18);
      reset(div_16);
      var div_19 = sibling(div_16, 2);
      var div_20 = child(div_19);
      var text_9 = child(div_20, true);
      reset(div_20);
      var div_21 = sibling(div_20, 2);
      var input = child(div_21);
      remove_input_defaults(input);
      reset(div_21);
      reset(div_19);
      var div_22 = sibling(div_19, 2);
      var div_23 = child(div_22);
      var text_10 = child(div_23, true);
      reset(div_23);
      var div_24 = sibling(div_23, 2);
      var input_1 = child(div_24);
      remove_input_defaults(input_1);
      reset(div_24);
      reset(div_22);
      var node_3 = sibling(div_22, 2);
      {
        var consequent_1 = ($$anchor3) => {
          var div_25 = root_4$5();
          var div_26 = child(div_25);
          var text_11 = child(div_26, true);
          reset(div_26);
          var div_27 = sibling(div_26, 2);
          var text_12 = child(div_27, true);
          reset(div_27);
          reset(div_25);
          template_effect(
            ($0) => {
              set_text(text_11, $0);
              set_text(text_12, (get(_user), untrack(() => get(_user).oauth_sub ?? "")));
            },
            [() => ($i18n(), untrack(() => $i18n().t("OAuth ID")))]
          );
          append($$anchor3, div_25);
        };
        if_block(node_3, ($$render) => {
          if (get(_user), untrack(() => {
            var _a;
            return (_a = get(_user)) == null ? void 0 : _a.oauth_sub;
          })) $$render(consequent_1);
        });
      }
      var div_28 = sibling(node_3, 2);
      var div_29 = child(div_28);
      var text_13 = child(div_29, true);
      reset(div_29);
      var div_30 = sibling(div_29, 2);
      var node_4 = child(div_30);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Enter New Password"))));
        SensitiveInput(node_4, {
          class: "w-full text-sm bg-transparent outline-hidden",
          type: "password",
          get placeholder() {
            return get($0);
          },
          autocomplete: "new-password",
          required: false,
          get value() {
            return get(_user).password;
          },
          set value($$value) {
            mutate(_user, get(_user).password = $$value);
          },
          $$legacy: true
        });
      }
      reset(div_30);
      reset(div_28);
      reset(div_12);
      reset(div_8);
      reset(div_6);
      var div_31 = sibling(div_6, 2);
      var button_1 = child(div_31);
      var text_14 = child(button_1, true);
      reset(button_1);
      reset(div_31);
      reset(div_5);
      reset(form);
      reset(div_4);
      reset(div_3);
      reset(div);
      template_effect(
        ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) => {
          set_text(text2, $0);
          set_text(text_1, (deep_read_state(selectedUser()), untrack(() => selectedUser().name)));
          set_text(text_2, `${$1 ?? ""}
										${$2 ?? ""}`);
          set_text(text_5, $3);
          select.disabled = (get(_user), deep_read_state(sessionUser()), untrack(() => get(_user).id == sessionUser().id));
          set_text(text_6, $4);
          set_text(text_7, $5);
          set_text(text_8, $6);
          set_text(text_9, $7);
          set_attribute(input, "placeholder", $8);
          set_text(text_10, $9);
          set_attribute(input_1, "placeholder", $10);
          set_text(text_13, $11);
          set_text(text_14, $12);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Edit User"))),
          () => ($i18n(), untrack(() => $i18n().t("Created at"))),
          () => (deep_read_state(dayjs2), deep_read_state(selectedUser()), untrack(() => dayjs2(selectedUser().created_at * 1e3).format("LL"))),
          () => ($i18n(), untrack(() => $i18n().t("Role"))),
          () => ($i18n(), untrack(() => $i18n().t("Admin"))),
          () => ($i18n(), untrack(() => $i18n().t("User"))),
          () => ($i18n(), untrack(() => $i18n().t("Pending"))),
          () => ($i18n(), untrack(() => $i18n().t("Name"))),
          () => ($i18n(), untrack(() => $i18n().t("Enter Your Name"))),
          () => ($i18n(), untrack(() => $i18n().t("Email"))),
          () => ($i18n(), untrack(() => $i18n().t("Enter Your Email"))),
          () => ($i18n(), untrack(() => $i18n().t("New Password"))),
          () => ($i18n(), untrack(() => $i18n().t("Save")))
        ]
      );
      event("click", button, () => {
        show(false);
      });
      bind_select_value(select, () => get(_user).role, ($$value) => mutate(_user, get(_user).role = $$value));
      bind_value(input, () => get(_user).name, ($$value) => mutate(_user, get(_user).name = $$value));
      bind_value(input_1, () => get(_user).email, ($$value) => mutate(_user, get(_user).email = $$value));
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
function UserChatsModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  dayjs2.extend(localizedFormat);
  const i18n = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let user2 = prop($$props, "user", 8);
  let chatList = mutable_source(null);
  let page2 = mutable_source(1);
  let query = mutable_source("");
  let orderBy = mutable_source("updated_at");
  let direction = mutable_source("desc");
  let filter = mutable_source({});
  let allChatsLoaded = mutable_source(false);
  let chatListLoading = mutable_source(false);
  let searchDebounceTimeout;
  const searchHandler = async () => {
    if (!show()) {
      return;
    }
    if (searchDebounceTimeout) {
      clearTimeout(searchDebounceTimeout);
    }
    set(page2, 1);
    set(chatList, null);
    if (get(query) === "") {
      set(chatList, await getChatListByUserId(localStorage.token, user2().id, get(page2), get(filter)));
    } else {
      searchDebounceTimeout = setTimeout(
        async () => {
          set(chatList, await getChatListByUserId(localStorage.token, user2().id, get(page2), get(filter)));
        },
        500
      );
    }
    if ((get(chatList) ?? []).length === 0) {
      set(allChatsLoaded, true);
    } else {
      set(allChatsLoaded, false);
    }
  };
  const loadMoreChats = async () => {
    set(chatListLoading, true);
    set(page2, get(page2) + 1);
    let newChatList = [];
    newChatList = await getChatListByUserId(localStorage.token, user2().id, get(page2), get(filter));
    set(allChatsLoaded, newChatList.length === 0);
    if (newChatList.length > 0) {
      set(chatList, [...get(chatList), ...newChatList]);
    }
    set(chatListLoading, false);
  };
  const init$1 = async () => {
    set(chatList, await getChatListByUserId(localStorage.token, user2().id, get(page2), get(filter)));
  };
  legacy_pre_effect(() => (get(query), get(orderBy), get(direction)), () => {
    set(filter, {
      ...get(query) ? { query: get(query) } : {},
      ...get(orderBy) ? { order_by: get(orderBy) } : {},
      ...get(direction) ? { direction: get(direction) } : {}
    });
  });
  legacy_pre_effect(() => get(filter), () => {
    if (get(filter) !== null) {
      searchHandler();
    }
  });
  legacy_pre_effect(() => deep_read_state(show()), () => {
    if (show()) {
      init$1();
    } else {
      set(chatList, null);
      set(page2, 1);
      set(allChatsLoaded, false);
      set(chatListLoading, false);
    }
  });
  legacy_pre_effect_reset();
  init();
  {
    let $0 = derived_safe_equal(() => ($i18n(), deep_read_state(user2()), untrack(() => $i18n().t("{{user}}'s Chats", {
      user: user2().name.length > 32 ? `${user2().name.slice(0, 32)}...` : user2().name
    }))));
    let $1 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("No chats found for this user."))));
    ChatsModal($$anchor, {
      get title() {
        return get($0);
      },
      get emptyPlaceholder() {
        return get($1);
      },
      shareUrl: true,
      get chatList() {
        return get(chatList);
      },
      get allChatsLoaded() {
        return get(allChatsLoaded);
      },
      get chatListLoading() {
        return get(chatListLoading);
      },
      onUpdate: () => {
        init$1();
      },
      loadHandler: loadMoreChats,
      get show() {
        return show();
      },
      set show($$value) {
        show($$value);
      },
      get query() {
        return get(query);
      },
      set query($$value) {
        set(query, $$value);
      },
      get orderBy() {
        return get(orderBy);
      },
      set orderBy($$value) {
        set(orderBy, $$value);
      },
      get direction() {
        return get(direction);
      },
      set direction($$value) {
        set(direction, $$value);
      },
      $$legacy: true
    });
  }
  pop();
  $$cleanup();
}
var root_2$3 = from_html(`<div class="flex flex-col w-full mb-3"><div class=" mb-1 text-xs text-gray-500"> </div> <div class="flex-1"><select class="w-full capitalize rounded-lg text-sm bg-transparent dark:disabled:text-gray-500 outline-hidden" required><option> </option><option> </option><option> </option></select></div></div> <div class="flex flex-col w-full mt-1"><div class=" mb-1 text-xs text-gray-500"> </div> <div class="flex-1"><input class="w-full text-sm bg-transparent disabled:text-gray-500 dark:disabled:text-gray-500 outline-hidden svelte-1ga5uvq" type="text" autocomplete="off" required/></div></div> <hr class=" border-gray-100 dark:border-gray-850 my-2.5 w-full"/> <div class="flex flex-col w-full"><div class=" mb-1 text-xs text-gray-500"> </div> <div class="flex-1"><input class="w-full text-sm bg-transparent disabled:text-gray-500 dark:disabled:text-gray-500 outline-hidden svelte-1ga5uvq" type="email" required/></div></div> <div class="flex flex-col w-full mt-1"><div class=" mb-1 text-xs text-gray-500"> </div> <div class="flex-1"><!></div></div>`, 1);
var root_4$4 = from_html(`<div><div class="mb-3 w-full"><input id="upload-user-csv-input" hidden="" type="file" accept=".csv" class="svelte-1ga5uvq"/> <button class="w-full text-sm font-medium py-3 bg-transparent hover:bg-gray-100 border border-dashed dark:border-gray-850 dark:hover:bg-gray-850 text-center rounded-xl" type="button"><!></button></div> <div class=" text-xs text-gray-500"> <a class="underline dark:text-gray-200"> </a></div></div>`);
var root_7$4 = from_html(`<div class="ml-2 self-center"><!></div>`);
var root_1$5 = from_html(`<div><div class=" flex justify-between dark:text-gray-300 px-5 pt-4 pb-2"><div class=" text-lg font-medium self-center"> </div> <button class="self-center"><!></button></div> <div class="flex flex-col md:flex-row w-full px-4 pb-3 md:space-x-4 dark:text-gray-200"><div class=" flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div class="flex -mt-2 mb-1.5 gap-1 scrollbar-none overflow-x-auto w-fit text-center text-sm font-medium rounded-full bg-transparent dark:text-gray-200"><button type="button"> </button> <button type="button"> </button></div> <div class="px-1"><!></div> <div class="flex justify-end pt-3 text-sm font-medium"><button type="submit"> <!></button></div></form></div></div></div>`);
function AddUserModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  const dispatch = createEventDispatcher();
  let show = prop($$props, "show", 12, false);
  let loading = mutable_source(false);
  let tab = mutable_source("");
  let inputFiles = mutable_source();
  let _user = mutable_source({ name: "", email: "", password: "", role: "user" });
  const submitHandler = async () => {
    const stopLoading = () => {
      dispatch("save");
      set(loading, false);
    };
    if (get(tab) === "") {
      set(loading, true);
      const res = await addUser(localStorage.token, get(_user).name, get(_user).email, get(_user).password, get(_user).role, generateInitialsImage(get(_user).name)).catch((error) => {
        toast.error(`${error}`);
      });
      if (res) {
        stopLoading();
        show(false);
      }
    } else {
      if (get(inputFiles)) {
        set(loading, true);
        const file = get(inputFiles)[0];
        const reader = new FileReader();
        reader.onload = async (e) => {
          const csv = e.target.result;
          const rows = csv.split("\n");
          let userCount = 0;
          for (const [idx, row] of rows.entries()) {
            const columns = row.split(",").map((col) => col.trim());
            console.debug(idx, columns);
            if (idx > 0) {
              if (columns.length === 4 && ["admin", "user", "pending"].includes(columns[3].toLowerCase())) {
                const res = await addUser(localStorage.token, columns[0], columns[1], columns[2], columns[3].toLowerCase(), generateInitialsImage(columns[0])).catch((error) => {
                  toast.error(`Row ${idx + 1}: ${error}`);
                  return null;
                });
                if (res) {
                  userCount = userCount + 1;
                }
              } else {
                toast.error(`Row ${idx + 1}: invalid format.`);
              }
            }
          }
          toast.success($i18n().t("Successfully imported {{userCount}} users.", { userCount }));
          set(inputFiles, null);
          const uploadInputElement = document.getElementById("upload-user-csv-input");
          if (uploadInputElement) {
            uploadInputElement.value = null;
          }
          stopLoading();
        };
        reader.readAsText(file, "utf-8");
      } else {
        toast.error($i18n().t("File not found."));
      }
    }
    set(loading, false);
  };
  legacy_pre_effect(() => deep_read_state(show()), () => {
    if (show()) {
      set(_user, { name: "", email: "", password: "", role: "user" });
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
      var div = root_1$5();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var text$1 = child(div_2, true);
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
      var button_1 = child(div_5);
      var text_1 = child(button_1, true);
      reset(button_1);
      var button_2 = sibling(button_1, 2);
      var text_2 = child(button_2, true);
      reset(button_2);
      reset(div_5);
      var div_6 = sibling(div_5, 2);
      var node_1 = child(div_6);
      {
        var consequent = ($$anchor3) => {
          var fragment_1 = root_2$3();
          var div_7 = first_child(fragment_1);
          var div_8 = child(div_7);
          var text_3 = child(div_8, true);
          reset(div_8);
          var div_9 = sibling(div_8, 2);
          var select = child(div_9);
          template_effect(() => {
            get(_user);
            invalidate_inner_signals(() => {
              $i18n();
            });
          });
          var option = child(select);
          var text_4 = child(option, true);
          reset(option);
          option.value = option.__value = "pending";
          var option_1 = sibling(option);
          var text_5 = child(option_1, true);
          reset(option_1);
          option_1.value = option_1.__value = "user";
          var option_2 = sibling(option_1);
          var text_6 = child(option_2, true);
          reset(option_2);
          option_2.value = option_2.__value = "admin";
          reset(select);
          reset(div_9);
          reset(div_7);
          var div_10 = sibling(div_7, 2);
          var div_11 = child(div_10);
          var text_7 = child(div_11, true);
          reset(div_11);
          var div_12 = sibling(div_11, 2);
          var input = child(div_12);
          remove_input_defaults(input);
          reset(div_12);
          reset(div_10);
          var div_13 = sibling(div_10, 4);
          var div_14 = child(div_13);
          var text_8 = child(div_14, true);
          reset(div_14);
          var div_15 = sibling(div_14, 2);
          var input_1 = child(div_15);
          remove_input_defaults(input_1);
          reset(div_15);
          reset(div_13);
          var div_16 = sibling(div_13, 2);
          var div_17 = child(div_16);
          var text_9 = child(div_17, true);
          reset(div_17);
          var div_18 = sibling(div_17, 2);
          var node_2 = child(div_18);
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Enter Your Password"))));
            SensitiveInput(node_2, {
              class: "w-full text-sm bg-transparent disabled:text-gray-500 dark:disabled:text-gray-500 outline-hidden",
              type: "password",
              get placeholder() {
                return get($0);
              },
              autocomplete: "off",
              required: true,
              get value() {
                return get(_user).password;
              },
              set value($$value) {
                mutate(_user, get(_user).password = $$value);
              },
              $$legacy: true
            });
          }
          reset(div_18);
          reset(div_16);
          template_effect(
            ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) => {
              set_text(text_3, $0);
              set_attribute(select, "placeholder", $1);
              set_text(text_4, $2);
              set_text(text_5, $3);
              set_text(text_6, $4);
              set_text(text_7, $5);
              set_attribute(input, "placeholder", $6);
              set_text(text_8, $7);
              set_attribute(input_1, "placeholder", $8);
              set_text(text_9, $9);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Role"))),
              () => ($i18n(), untrack(() => $i18n().t("Enter Your Role"))),
              () => ($i18n(), untrack(() => $i18n().t("pending"))),
              () => ($i18n(), untrack(() => $i18n().t("user"))),
              () => ($i18n(), untrack(() => $i18n().t("admin"))),
              () => ($i18n(), untrack(() => $i18n().t("Name"))),
              () => ($i18n(), untrack(() => $i18n().t("Enter Your Full Name"))),
              () => ($i18n(), untrack(() => $i18n().t("Email"))),
              () => ($i18n(), untrack(() => $i18n().t("Enter Your Email"))),
              () => ($i18n(), untrack(() => $i18n().t("Password")))
            ]
          );
          bind_select_value(select, () => get(_user).role, ($$value) => mutate(_user, get(_user).role = $$value));
          bind_value(input, () => get(_user).name, ($$value) => mutate(_user, get(_user).name = $$value));
          bind_value(input_1, () => get(_user).email, ($$value) => mutate(_user, get(_user).email = $$value));
          append($$anchor3, fragment_1);
        };
        var alternate_1 = ($$anchor3) => {
          var fragment_2 = comment();
          var node_3 = first_child(fragment_2);
          {
            var consequent_2 = ($$anchor4) => {
              var div_19 = root_4$4();
              var div_20 = child(div_19);
              var input_2 = child(div_20);
              var button_3 = sibling(input_2, 2);
              var node_4 = child(button_3);
              {
                var consequent_1 = ($$anchor5) => {
                  var text_10 = text();
                  template_effect(() => set_text(text_10, `${(get(inputFiles), untrack(() => get(inputFiles).length > 0 ? `${get(inputFiles).length}` : "")) ?? ""} document(s) selected.`));
                  append($$anchor5, text_10);
                };
                var alternate = ($$anchor5) => {
                  var text_11 = text();
                  template_effect(($0) => set_text(text_11, $0), [
                    () => ($i18n(), untrack(() => $i18n().t("Click here to select a csv file.")))
                  ]);
                  append($$anchor5, text_11);
                };
                if_block(node_4, ($$render) => {
                  if (get(inputFiles)) $$render(consequent_1);
                  else $$render(alternate, false);
                });
              }
              reset(button_3);
              reset(div_20);
              var div_21 = sibling(div_20, 2);
              var text_12 = child(div_21);
              var a = sibling(text_12);
              var text_13 = child(a, true);
              reset(a);
              reset(div_21);
              reset(div_19);
              template_effect(
                ($0, $1) => {
                  set_text(text_12, `ⓘ ${$0 ?? ""} `);
                  set_attribute(a, "href", `${WEBUI_BASE_URL}/static/user-import.csv`);
                  set_text(text_13, $1);
                },
                [
                  () => ($i18n(), untrack(() => $i18n().t("Ensure your CSV file includes 4 columns in this order: Name, Email, Password, Role."))),
                  () => ($i18n(), untrack(() => $i18n().t("Click here to download user import template file.")))
                ]
              );
              bind_files(input_2, () => get(inputFiles), ($$value) => set(inputFiles, $$value));
              event("click", button_3, () => {
                var _a;
                (_a = document.getElementById("upload-user-csv-input")) == null ? void 0 : _a.click();
              });
              append($$anchor4, div_19);
            };
            if_block(
              node_3,
              ($$render) => {
                if (get(tab) === "import") $$render(consequent_2);
              },
              true
            );
          }
          append($$anchor3, fragment_2);
        };
        if_block(node_1, ($$render) => {
          if (get(tab) === "") $$render(consequent);
          else $$render(alternate_1, false);
        });
      }
      reset(div_6);
      var div_22 = sibling(div_6, 2);
      var button_4 = child(div_22);
      var text_14 = child(button_4);
      var node_5 = sibling(text_14);
      {
        var consequent_3 = ($$anchor3) => {
          var div_23 = root_7$4();
          var node_6 = child(div_23);
          Spinner(node_6, {});
          reset(div_23);
          append($$anchor3, div_23);
        };
        if_block(node_5, ($$render) => {
          if (get(loading)) $$render(consequent_3);
        });
      }
      reset(button_4);
      reset(div_22);
      reset(form);
      reset(div_4);
      reset(div_3);
      reset(div);
      template_effect(
        ($0, $1, $2, $3) => {
          set_text(text$1, $0);
          set_class(button_1, 1, `min-w-fit p-1.5 ${get(tab) === "" ? "" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"} transition`);
          set_text(text_1, $1);
          set_class(button_2, 1, `min-w-fit p-1.5 ${get(tab) === "import" ? "" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"} transition`);
          set_text(text_2, $2);
          set_class(button_4, 1, `px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center ${get(loading) ? " cursor-not-allowed" : ""}`);
          button_4.disabled = get(loading);
          set_text(text_14, `${$3 ?? ""} `);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Add User"))),
          () => ($i18n(), untrack(() => $i18n().t("Form"))),
          () => ($i18n(), untrack(() => $i18n().t("CSV Import"))),
          () => ($i18n(), untrack(() => $i18n().t("Save")))
        ]
      );
      event("click", button, () => {
        show(false);
      });
      event("click", button_1, () => {
        set(tab, "");
      });
      event("click", button_2, () => {
        set(tab, "import");
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
var root_2$2 = from_html(`<div class=" mt-1 mb-2 text-xs text-red-500"><!></div>`);
var root_3$3 = from_html(`<div class="my-10"><!></div>`);
var root_6$1 = from_html(`<span class="text-lg font-medium text-red-500"> <span class="text-sm font-normal"> </span></span>`);
var root_7$3 = from_html(`<span class="text-lg font-medium text-gray-500 dark:text-gray-300"> <span class="text-sm font-normal"> </span></span>`);
var root_8$3 = from_html(`<span class="text-lg font-medium text-gray-500 dark:text-gray-300"> </span>`);
var root_9$1 = from_html(`<button class=" p-2 rounded-xl hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-850 transition font-medium text-sm flex items-center space-x-1"><!></button>`);
var root_10 = from_html(`<span class="font-normal"><!></span>`);
var root_13$1 = from_html(`<span class="invisible"><!></span>`);
var root_14$2 = from_html(`<span class="font-normal"><!></span>`);
var root_17$1 = from_html(`<span class="invisible"><!></span>`);
var root_18$1 = from_html(`<span class="font-normal"><!></span>`);
var root_21$2 = from_html(`<span class="invisible"><!></span>`);
var root_22$2 = from_html(`<span class="font-normal"><!></span>`);
var root_25$1 = from_html(`<span class="invisible"><!></span>`);
var root_26$1 = from_html(`<span class="font-normal"><!></span>`);
var root_29$1 = from_html(`<span class="invisible"><!></span>`);
var root_32$1 = from_html(`<button class="self-center w-fit text-sm px-2 py-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-xl"><!></button>`);
var root_33$1 = from_html(`<button class="self-center w-fit text-sm px-2 py-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"></path></svg></button>`);
var root_35$1 = from_html(`<button class="self-center w-fit text-sm px-2 py-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"></path></svg></button>`);
var root_30$1 = from_html(`<tr class="bg-white dark:bg-gray-900 dark:border-gray-850 text-xs"><td class="px-3 py-1 min-w-[7rem] w-28"><button class=" translate-y-0.5"><!></button></td><td class="px-3 py-1 font-medium text-gray-900 dark:text-white max-w-48"><div class="flex items-center"><img class="rounded-full w-6 h-6 object-cover mr-2.5 flex-shrink-0" alt="user"/> <div class="font-medium truncate"> </div></div></td><td class=" px-3 py-1"> </td><td class=" px-3 py-1"> </td><td class=" px-3 py-1"> </td><td class="px-3 py-1 text-right"><div class="flex justify-end w-full"><!> <!> <!></div></td></tr>`);
var root_4$3 = from_html(`<div class="pt-0.5 pb-1 gap-1 flex flex-col md:flex-row justify-between sticky top-0 z-10 bg-white dark:bg-gray-900"><div class="flex md:self-center text-lg font-medium px-0.5 gap-2"><div class="flex-shrink-0"> </div> <div><!></div></div> <div class="flex gap-1"><div class=" flex w-full space-x-2"><div class="flex flex-1"><div class=" self-center ml-1 mr-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd"></path></svg></div> <input class=" w-full text-sm pr-4 py-1 rounded-r-xl outline-hidden bg-transparent"/></div> <div><!></div></div></div></div> <div class="scrollbar-hidden relative whitespace-nowrap overflow-x-auto max-w-full"><table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto max-w-full"><thead class="text-xs text-gray-800 uppercase bg-transparent dark:text-gray-200"><tr class=" border-b-[1.5px] border-gray-50 dark:border-gray-850"><th scope="col" class="px-2.5 py-2 cursor-pointer select-none"><div class="flex gap-1.5 items-center"> <!></div></th><th scope="col" class="px-2.5 py-2 cursor-pointer select-none"><div class="flex gap-1.5 items-center"> <!></div></th><th scope="col" class="px-2.5 py-2 cursor-pointer select-none"><div class="flex gap-1.5 items-center"> <!></div></th><th scope="col" class="px-2.5 py-2 cursor-pointer select-none"><div class="flex gap-1.5 items-center"> <!></div></th><th scope="col" class="px-2.5 py-2 cursor-pointer select-none"><div class="flex gap-1.5 items-center"> <!></div></th><th scope="col" class="px-2.5 py-2 text-right"></th></tr></thead><tbody></tbody></table></div> <div class=" text-gray-500 text-xs mt-1.5 text-right"> </div> <!>`, 1);
var root_38$1 = from_html(`<div class="text-sm"><!></div>`);
var root$9 = from_html(`<!> <!> <!> <!> <!> <!> <!>`, 1);
function UserList($$anchor, $$props) {
  push($$props, false);
  const $user = () => store_get(user, "$user", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  dayjs2.extend(relativeTime);
  dayjs2.extend(localizedFormat);
  const i18n = getContext("i18n");
  let page2 = mutable_source(1);
  let users = mutable_source(null);
  let total = mutable_source(null);
  let query = mutable_source("");
  let orderBy = mutable_source(
    "created_at"
    // default sort key
  );
  let direction = mutable_source(
    "asc"
    // default sort order
  );
  let selectedUser = mutable_source(null);
  let showDeleteConfirmDialog = mutable_source(false);
  let showAddUserModal = mutable_source(false);
  let showUserChatsModal = mutable_source(false);
  let showEditUserModal = mutable_source(false);
  const deleteUserHandler = async (id) => {
    const res = await deleteUserById(localStorage.token, id).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (get(users).length === 1 && get(page2) > 1) {
      set(page2, get(page2) - 1);
    }
    if (res) {
      getUserList();
    }
  };
  const setSortKey = (key) => {
    if (get(orderBy) === key) {
      set(direction, get(direction) === "asc" ? "desc" : "asc");
    } else {
      set(orderBy, key);
      set(direction, "asc");
    }
  };
  const getUserList = async () => {
    try {
      const res = await getUsers(localStorage.token, get(query), get(orderBy), get(direction), get(page2)).catch((error) => {
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
  var fragment = root$9();
  var node = first_child(fragment);
  ConfirmDialog(node, {
    get show() {
      return get(showDeleteConfirmDialog);
    },
    set show($$value) {
      set(showDeleteConfirmDialog, $$value);
    },
    $$events: {
      confirm: () => {
        deleteUserHandler(get(selectedUser).id);
      }
    },
    $$legacy: true
  });
  var node_1 = sibling(node, 2);
  AddUserModal(node_1, {
    get show() {
      return get(showAddUserModal);
    },
    set show($$value) {
      set(showAddUserModal, $$value);
    },
    $$events: {
      save: async () => {
        getUserList();
      }
    },
    $$legacy: true
  });
  var node_2 = sibling(node_1, 2);
  EditUserModal(node_2, {
    get selectedUser() {
      return get(selectedUser);
    },
    get sessionUser() {
      return $user();
    },
    get show() {
      return get(showEditUserModal);
    },
    set show($$value) {
      set(showEditUserModal, $$value);
    },
    $$events: {
      save: async () => {
        getUserList();
      }
    },
    $$legacy: true
  });
  var node_3 = sibling(node_2, 2);
  {
    var consequent = ($$anchor2) => {
      UserChatsModal($$anchor2, {
        get user() {
          return get(selectedUser);
        },
        get show() {
          return get(showUserChatsModal);
        },
        set show($$value) {
          set(showUserChatsModal, $$value);
        },
        $$legacy: true
      });
    };
    if_block(node_3, ($$render) => {
      if (get(selectedUser)) $$render(consequent);
    });
  }
  var node_4 = sibling(node_3, 2);
  {
    var consequent_1 = ($$anchor2) => {
      var div = root_2$2();
      var node_5 = child(div);
      Banner(node_5, {
        className: "mx-0",
        banner: {
          type: "error",
          title: "License Error",
          content: "Exceeded the number of seats in your license. Please contact support to increase the number of seats."
        }
      });
      reset(div);
      append($$anchor2, div);
    };
    if_block(node_4, ($$render) => {
      if ($config(), get(total), untrack(() => {
        var _a, _b, _c, _d;
        return (((_b = (_a = $config()) == null ? void 0 : _a.license_metadata) == null ? void 0 : _b.seats) ?? null) !== null && get(total) && get(total) > ((_d = (_c = $config()) == null ? void 0 : _c.license_metadata) == null ? void 0 : _d.seats);
      })) $$render(consequent_1);
    });
  }
  var node_6 = sibling(node_4, 2);
  {
    var consequent_2 = ($$anchor2) => {
      var div_1 = root_3$3();
      var node_7 = child(div_1);
      Spinner(node_7, { className: "size-5" });
      reset(div_1);
      append($$anchor2, div_1);
    };
    var alternate_12 = ($$anchor2) => {
      var fragment_2 = root_4$3();
      var div_2 = first_child(fragment_2);
      var div_3 = child(div_2);
      var div_4 = child(div_3);
      var text2 = child(div_4, true);
      reset(div_4);
      var div_5 = sibling(div_4, 2);
      var node_8 = child(div_5);
      {
        var consequent_4 = ($$anchor3) => {
          var fragment_3 = comment();
          var node_9 = first_child(fragment_3);
          {
            var consequent_3 = ($$anchor4) => {
              var span = root_6$1();
              var text_1 = child(span);
              var span_1 = sibling(text_1);
              var text_2 = child(span_1, true);
              reset(span_1);
              reset(span);
              template_effect(
                ($0) => {
                  set_text(text_1, `${get(total) ?? ""} of ${($config(), untrack(() => {
                    var _a, _b;
                    return (_b = (_a = $config()) == null ? void 0 : _a.license_metadata) == null ? void 0 : _b.seats;
                  })) ?? ""} `);
                  set_text(text_2, $0);
                },
                [
                  () => ($i18n(), untrack(() => $i18n().t("available users")))
                ]
              );
              append($$anchor4, span);
            };
            var alternate = ($$anchor4) => {
              var span_2 = root_7$3();
              var text_3 = child(span_2);
              var span_3 = sibling(text_3);
              var text_4 = child(span_3, true);
              reset(span_3);
              reset(span_2);
              template_effect(
                ($0) => {
                  set_text(text_3, `${get(total) ?? ""} of ${($config(), untrack(() => {
                    var _a, _b;
                    return (_b = (_a = $config()) == null ? void 0 : _a.license_metadata) == null ? void 0 : _b.seats;
                  })) ?? ""} `);
                  set_text(text_4, $0);
                },
                [
                  () => ($i18n(), untrack(() => $i18n().t("available users")))
                ]
              );
              append($$anchor4, span_2);
            };
            if_block(node_9, ($$render) => {
              if (get(total), $config(), untrack(() => {
                var _a, _b;
                return get(total) > ((_b = (_a = $config()) == null ? void 0 : _a.license_metadata) == null ? void 0 : _b.seats);
              })) $$render(consequent_3);
              else $$render(alternate, false);
            });
          }
          append($$anchor3, fragment_3);
        };
        var alternate_1 = ($$anchor3) => {
          var span_4 = root_8$3();
          var text_5 = child(span_4, true);
          reset(span_4);
          template_effect(() => set_text(text_5, get(total)));
          append($$anchor3, span_4);
        };
        if_block(node_8, ($$render) => {
          if ($config(), untrack(() => {
            var _a, _b;
            return (((_b = (_a = $config()) == null ? void 0 : _a.license_metadata) == null ? void 0 : _b.seats) ?? null) !== null;
          })) $$render(consequent_4);
          else $$render(alternate_1, false);
        });
      }
      reset(div_5);
      reset(div_3);
      var div_6 = sibling(div_3, 2);
      var div_7 = child(div_6);
      var div_8 = child(div_7);
      var input = sibling(child(div_8), 2);
      remove_input_defaults(input);
      reset(div_8);
      var div_9 = sibling(div_8, 2);
      var node_10 = child(div_9);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Add User"))));
        Tooltip(node_10, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps) => {
            var button = root_9$1();
            var node_11 = child(button);
            Plus(node_11, { className: "size-3.5" });
            reset(button);
            event("click", button, () => {
              set(showAddUserModal, !get(showAddUserModal));
            });
            append($$anchor3, button);
          },
          $$slots: { default: true }
        });
      }
      reset(div_9);
      reset(div_7);
      reset(div_6);
      reset(div_2);
      var div_10 = sibling(div_2, 2);
      var table = child(div_10);
      var thead = child(table);
      var tr = child(thead);
      var th = child(tr);
      var div_11 = child(th);
      var text_6 = child(div_11);
      var node_12 = sibling(text_6);
      {
        var consequent_6 = ($$anchor3) => {
          var span_5 = root_10();
          var node_13 = child(span_5);
          {
            var consequent_5 = ($$anchor4) => {
              ChevronUp($$anchor4, { className: "size-2" });
            };
            var alternate_2 = ($$anchor4) => {
              ChevronDown($$anchor4, { className: "size-2" });
            };
            if_block(node_13, ($$render) => {
              if (get(direction) === "asc") $$render(consequent_5);
              else $$render(alternate_2, false);
            });
          }
          reset(span_5);
          append($$anchor3, span_5);
        };
        var alternate_3 = ($$anchor3) => {
          var span_6 = root_13$1();
          var node_14 = child(span_6);
          ChevronUp(node_14, { className: "size-2" });
          reset(span_6);
          append($$anchor3, span_6);
        };
        if_block(node_12, ($$render) => {
          if (get(orderBy) === "role") $$render(consequent_6);
          else $$render(alternate_3, false);
        });
      }
      reset(div_11);
      reset(th);
      var th_1 = sibling(th);
      var div_12 = child(th_1);
      var text_7 = child(div_12);
      var node_15 = sibling(text_7);
      {
        var consequent_8 = ($$anchor3) => {
          var span_7 = root_14$2();
          var node_16 = child(span_7);
          {
            var consequent_7 = ($$anchor4) => {
              ChevronUp($$anchor4, { className: "size-2" });
            };
            var alternate_4 = ($$anchor4) => {
              ChevronDown($$anchor4, { className: "size-2" });
            };
            if_block(node_16, ($$render) => {
              if (get(direction) === "asc") $$render(consequent_7);
              else $$render(alternate_4, false);
            });
          }
          reset(span_7);
          append($$anchor3, span_7);
        };
        var alternate_5 = ($$anchor3) => {
          var span_8 = root_17$1();
          var node_17 = child(span_8);
          ChevronUp(node_17, { className: "size-2" });
          reset(span_8);
          append($$anchor3, span_8);
        };
        if_block(node_15, ($$render) => {
          if (get(orderBy) === "name") $$render(consequent_8);
          else $$render(alternate_5, false);
        });
      }
      reset(div_12);
      reset(th_1);
      var th_2 = sibling(th_1);
      var div_13 = child(th_2);
      var text_8 = child(div_13);
      var node_18 = sibling(text_8);
      {
        var consequent_10 = ($$anchor3) => {
          var span_9 = root_18$1();
          var node_19 = child(span_9);
          {
            var consequent_9 = ($$anchor4) => {
              ChevronUp($$anchor4, { className: "size-2" });
            };
            var alternate_6 = ($$anchor4) => {
              ChevronDown($$anchor4, { className: "size-2" });
            };
            if_block(node_19, ($$render) => {
              if (get(direction) === "asc") $$render(consequent_9);
              else $$render(alternate_6, false);
            });
          }
          reset(span_9);
          append($$anchor3, span_9);
        };
        var alternate_7 = ($$anchor3) => {
          var span_10 = root_21$2();
          var node_20 = child(span_10);
          ChevronUp(node_20, { className: "size-2" });
          reset(span_10);
          append($$anchor3, span_10);
        };
        if_block(node_18, ($$render) => {
          if (get(orderBy) === "email") $$render(consequent_10);
          else $$render(alternate_7, false);
        });
      }
      reset(div_13);
      reset(th_2);
      var th_3 = sibling(th_2);
      var div_14 = child(th_3);
      var text_9 = child(div_14);
      var node_21 = sibling(text_9);
      {
        var consequent_12 = ($$anchor3) => {
          var span_11 = root_22$2();
          var node_22 = child(span_11);
          {
            var consequent_11 = ($$anchor4) => {
              ChevronUp($$anchor4, { className: "size-2" });
            };
            var alternate_8 = ($$anchor4) => {
              ChevronDown($$anchor4, { className: "size-2" });
            };
            if_block(node_22, ($$render) => {
              if (get(direction) === "asc") $$render(consequent_11);
              else $$render(alternate_8, false);
            });
          }
          reset(span_11);
          append($$anchor3, span_11);
        };
        var alternate_9 = ($$anchor3) => {
          var span_12 = root_25$1();
          var node_23 = child(span_12);
          ChevronUp(node_23, { className: "size-2" });
          reset(span_12);
          append($$anchor3, span_12);
        };
        if_block(node_21, ($$render) => {
          if (get(orderBy) === "last_active_at") $$render(consequent_12);
          else $$render(alternate_9, false);
        });
      }
      reset(div_14);
      reset(th_3);
      var th_4 = sibling(th_3);
      var div_15 = child(th_4);
      var text_10 = child(div_15);
      var node_24 = sibling(text_10);
      {
        var consequent_14 = ($$anchor3) => {
          var span_13 = root_26$1();
          var node_25 = child(span_13);
          {
            var consequent_13 = ($$anchor4) => {
              ChevronUp($$anchor4, { className: "size-2" });
            };
            var alternate_10 = ($$anchor4) => {
              ChevronDown($$anchor4, { className: "size-2" });
            };
            if_block(node_25, ($$render) => {
              if (get(direction) === "asc") $$render(consequent_13);
              else $$render(alternate_10, false);
            });
          }
          reset(span_13);
          append($$anchor3, span_13);
        };
        var alternate_11 = ($$anchor3) => {
          var span_14 = root_29$1();
          var node_26 = child(span_14);
          ChevronUp(node_26, { className: "size-2" });
          reset(span_14);
          append($$anchor3, span_14);
        };
        if_block(node_24, ($$render) => {
          if (get(orderBy) === "created_at") $$render(consequent_14);
          else $$render(alternate_11, false);
        });
      }
      reset(div_15);
      reset(th_4);
      next();
      reset(tr);
      reset(thead);
      var tbody = sibling(thead);
      each(tbody, 5, () => get(users), index, ($$anchor3, user2, userIdx, $$array) => {
        var tr_1 = root_30$1();
        var td = child(tr_1);
        var button_1 = child(td);
        var node_27 = child(button_1);
        {
          let $0 = derived_safe_equal(() => (get(user2), untrack(() => get(user2).role === "admin" ? "info" : get(user2).role === "user" ? "success" : "muted")));
          let $1 = derived_safe_equal(() => ($i18n(), get(user2), untrack(() => $i18n().t(get(user2).role))));
          Badge(node_27, {
            get type() {
              return get($0);
            },
            get content() {
              return get($1);
            }
          });
        }
        reset(button_1);
        reset(td);
        var td_1 = sibling(td);
        var div_16 = child(td_1);
        var img = child(div_16);
        var div_17 = sibling(img, 2);
        var text_11 = child(div_17, true);
        reset(div_17);
        reset(div_16);
        reset(td_1);
        var td_2 = sibling(td_1);
        var text_12 = child(td_2, true);
        reset(td_2);
        var td_3 = sibling(td_2);
        var text_13 = child(td_3, true);
        reset(td_3);
        var td_4 = sibling(td_3);
        var text_14 = child(td_4, true);
        reset(td_4);
        var td_5 = sibling(td_4);
        var div_18 = child(td_5);
        var node_28 = child(div_18);
        {
          var consequent_15 = ($$anchor4) => {
            {
              let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Chats"))));
              Tooltip($$anchor4, {
                get content() {
                  return get($0);
                },
                children: ($$anchor5, $$slotProps) => {
                  var button_2 = root_32$1();
                  var node_29 = child(button_2);
                  ChatBubbles(node_29, {});
                  reset(button_2);
                  event("click", button_2, async () => {
                    set(showUserChatsModal, !get(showUserChatsModal));
                    set(selectedUser, get(user2));
                  });
                  append($$anchor5, button_2);
                },
                $$slots: { default: true }
              });
            }
          };
          if_block(node_28, ($$render) => {
            if ($config(), get(user2), untrack(() => $config().features.enable_admin_chat_access && get(user2).role !== "admin")) $$render(consequent_15);
          });
        }
        var node_30 = sibling(node_28, 2);
        {
          let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Edit User"))));
          Tooltip(node_30, {
            get content() {
              return get($0);
            },
            children: ($$anchor4, $$slotProps) => {
              var button_3 = root_33$1();
              event("click", button_3, async () => {
                set(showEditUserModal, !get(showEditUserModal));
                set(selectedUser, get(user2));
              });
              append($$anchor4, button_3);
            },
            $$slots: { default: true }
          });
        }
        var node_31 = sibling(node_30, 2);
        {
          var consequent_16 = ($$anchor4) => {
            {
              let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete User"))));
              Tooltip($$anchor4, {
                get content() {
                  return get($0);
                },
                children: ($$anchor5, $$slotProps) => {
                  var button_4 = root_35$1();
                  event("click", button_4, async () => {
                    set(showDeleteConfirmDialog, true);
                    set(selectedUser, get(user2));
                  });
                  append($$anchor5, button_4);
                },
                $$slots: { default: true }
              });
            }
          };
          if_block(node_31, ($$render) => {
            if (get(user2), untrack(() => get(user2).role !== "admin")) $$render(consequent_16);
          });
        }
        reset(div_18);
        reset(td_5);
        reset(tr_1);
        template_effect(
          ($0, $1) => {
            set_attribute(img, "src", (deep_read_state(WEBUI_API_BASE_URL), get(user2), untrack(() => `${WEBUI_API_BASE_URL}/users/${get(user2).id}/profile/image`)));
            set_text(text_11, (get(user2), untrack(() => get(user2).name)));
            set_text(text_12, (get(user2), untrack(() => get(user2).email)));
            set_text(text_13, $0);
            set_text(text_14, $1);
          },
          [
            () => (deep_read_state(dayjs2), get(user2), untrack(() => dayjs2(get(user2).last_active_at * 1e3).fromNow())),
            () => (deep_read_state(dayjs2), get(user2), untrack(() => dayjs2(get(user2).created_at * 1e3).format("LL")))
          ]
        );
        event("click", button_1, () => {
          set(selectedUser, get(user2));
          set(showEditUserModal, !get(showEditUserModal));
        });
        append($$anchor3, tr_1);
      });
      reset(tbody);
      reset(table);
      reset(div_10);
      var div_19 = sibling(div_10, 2);
      var text_15 = child(div_19);
      reset(div_19);
      var node_32 = sibling(div_19, 2);
      {
        var consequent_17 = ($$anchor3) => {
          Pagination_1($$anchor3, {
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
        if_block(node_32, ($$render) => {
          if (get(total) > 30) $$render(consequent_17);
        });
      }
      template_effect(
        ($0, $1, $2, $3, $4, $5, $6, $7) => {
          set_text(text2, $0);
          set_attribute(input, "placeholder", $1);
          set_text(text_6, `${$2 ?? ""} `);
          set_text(text_7, `${$3 ?? ""} `);
          set_text(text_8, `${$4 ?? ""} `);
          set_text(text_9, `${$5 ?? ""} `);
          set_text(text_10, `${$6 ?? ""} `);
          set_text(text_15, `ⓘ ${$7 ?? ""}`);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Users"))),
          () => ($i18n(), untrack(() => $i18n().t("Search"))),
          () => ($i18n(), untrack(() => $i18n().t("Role"))),
          () => ($i18n(), untrack(() => $i18n().t("Name"))),
          () => ($i18n(), untrack(() => $i18n().t("Email"))),
          () => ($i18n(), untrack(() => $i18n().t("Last Active"))),
          () => ($i18n(), untrack(() => $i18n().t("Created at"))),
          () => ($i18n(), untrack(() => $i18n().t("Click on the user role button to change a user's role.")))
        ]
      );
      bind_value(input, () => get(query), ($$value) => set(query, $$value));
      event("click", th, () => setSortKey("role"));
      event("click", th_1, () => setSortKey("name"));
      event("click", th_2, () => setSortKey("email"));
      event("click", th_3, () => setSortKey("last_active_at"));
      event("click", th_4, () => setSortKey("created_at"));
      append($$anchor2, fragment_2);
    };
    if_block(node_6, ($$render) => {
      if (get(users) === null || get(total) === null) $$render(consequent_2);
      else $$render(alternate_12, false);
    });
  }
  var node_33 = sibling(node_6, 2);
  {
    var consequent_19 = ($$anchor2) => {
      var fragment_17 = comment();
      var node_34 = first_child(fragment_17);
      {
        var consequent_18 = ($$anchor3) => {
          var div_20 = root_38$1();
          var node_35 = child(div_20);
          Markdown(node_35, {
            content: `
> [!NOTE]
> # **Hey there! 👋**
>
> It looks like you have over 50 users, that usually falls under organizational usage.
> 
> Open WebUI is completely free to use as-is, with no restrictions or hidden limits, and we'd love to keep it that way. 🌱  
>
> By supporting the project through sponsorship or an enterprise license, you’re not only helping us stay independent, you’re also helping us ship new features faster, improve stability, and grow the project for the long haul. With an *enterprise license*, you also get additional perks like dedicated support, customization options, and more, all at a fraction of what it would cost to build and maintain internally.  
> 
> Your support helps us stay independent and continue building great tools for everyone. 💛
> 
> - 👉 **[Click here to learn more about enterprise licensing](https://docs.openwebui.com/enterprise)**
> - 👉 *[Click here to sponsor the project on GitHub](https://github.com/sponsors/tjbck)*
`
          });
          reset(div_20);
          append($$anchor3, div_20);
        };
        if_block(node_34, ($$render) => {
          if (get(total) > 50) $$render(consequent_18);
        });
      }
      append($$anchor2, fragment_17);
    };
    if_block(node_33, ($$render) => {
      if ($config(), untrack(() => {
        var _a;
        return !((_a = $config()) == null ? void 0 : _a.license_metadata);
      })) $$render(consequent_19);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root$8 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"></path></svg>`);
function UsersSolid($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  var svg = root$8();
  template_effect(() => set_class(svg, 0, clsx(className())));
  append($$anchor, svg);
}
var root_1$4 = from_html(`<div class="flex flex-col w-full mt-2"><div class=" mb-0.5 text-xs text-gray-500"> </div> <div class="flex-1"><button class="text-xs bg-transparent hover:underline cursor-pointer" type="button"> </button></div></div>`);
var root$7 = from_html(`<div class="flex gap-2"><div class="flex flex-col w-full"><div class=" mb-0.5 text-xs text-gray-500"> </div> <div class="flex-1"><input class="w-full text-sm bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-700 outline-hidden" type="text" autocomplete="off" required/></div></div></div> <div class="flex flex-col w-full mt-2"><div class=" mb-1 text-xs text-gray-500"> </div> <div class="flex-1"><!></div></div> <hr class="border-gray-50 dark:border-gray-850 my-1"/> <div class="flex flex-col w-full mt-2"><div class=" mb-1 text-xs text-gray-500"> </div> <div><div class=" flex w-full justify-between"><div class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div></div> <!>`, 1);
function General($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let name = prop($$props, "name", 12, "");
  prop($$props, "color", 8, "");
  let description = prop($$props, "description", 12, "");
  let data = prop($$props, "data", 28, () => ({}));
  let edit = prop($$props, "edit", 8, false);
  let onDelete = prop($$props, "onDelete", 8, () => {
  });
  init();
  var fragment = root$7();
  var div = first_child(fragment);
  var div_1 = child(div);
  var div_2 = child(div_1);
  var text2 = child(div_2, true);
  reset(div_2);
  var div_3 = sibling(div_2, 2);
  var input = child(div_3);
  remove_input_defaults(input);
  reset(div_3);
  reset(div_1);
  reset(div);
  var div_4 = sibling(div, 2);
  var div_5 = child(div_4);
  var text_1 = child(div_5, true);
  reset(div_5);
  var div_6 = sibling(div_5, 2);
  var node = child(div_6);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Group Description"))));
    Textarea(node, {
      className: "w-full text-sm bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-700 outline-hidden resize-none",
      rows: 4,
      get placeholder() {
        return get($0);
      },
      get value() {
        return description();
      },
      set value($$value) {
        description($$value);
      },
      $$legacy: true
    });
  }
  reset(div_6);
  reset(div_4);
  var div_7 = sibling(div_4, 4);
  var div_8 = child(div_7);
  var text_2 = child(div_8, true);
  reset(div_8);
  var div_9 = sibling(div_8, 2);
  var div_10 = child(div_9);
  var div_11 = child(div_10);
  var text_3 = child(div_11, true);
  reset(div_11);
  var div_12 = sibling(div_11, 2);
  var node_1 = child(div_12);
  {
    let $0 = derived_safe_equal(() => (deep_read_state(data()), untrack(() => {
      var _a, _b;
      return ((_b = (_a = data()) == null ? void 0 : _a.config) == null ? void 0 : _b.share) ?? true;
    })));
    Switch_1(node_1, {
      tooltip: true,
      get state() {
        return get($0);
      },
      $$events: {
        change: (e) => {
          var _a, _b, _c;
          if ((_b = (_a = data()) == null ? void 0 : _a.config) == null ? void 0 : _b.share) {
            data(data().config.share = e.detail, true);
          } else {
            data(data().config = { ...((_c = data()) == null ? void 0 : _c.config) ?? {}, share: e.detail }, true);
          }
        }
      }
    });
  }
  reset(div_12);
  reset(div_10);
  reset(div_9);
  reset(div_7);
  var node_2 = sibling(div_7, 2);
  {
    var consequent = ($$anchor2) => {
      var div_13 = root_1$4();
      var div_14 = child(div_13);
      var text_4 = child(div_14, true);
      reset(div_14);
      var div_15 = sibling(div_14, 2);
      var button = child(div_15);
      var text_5 = child(button, true);
      reset(button);
      reset(div_15);
      reset(div_13);
      template_effect(
        ($0, $1) => {
          set_text(text_4, $0);
          set_text(text_5, $1);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Actions"))),
          () => ($i18n(), untrack(() => $i18n().t("Delete")))
        ]
      );
      event("click", button, () => onDelete()());
      append($$anchor2, div_13);
    };
    if_block(node_2, ($$render) => {
      if (edit()) $$render(consequent);
    });
  }
  template_effect(
    ($0, $1, $2, $3, $4) => {
      set_text(text2, $0);
      set_attribute(input, "placeholder", $1);
      set_text(text_1, $2);
      set_text(text_2, $3);
      set_text(text_3, $4);
    },
    [
      () => ($i18n(), untrack(() => $i18n().t("Name"))),
      () => ($i18n(), untrack(() => $i18n().t("Group Name"))),
      () => ($i18n(), untrack(() => $i18n().t("Description"))),
      () => ($i18n(), untrack(() => $i18n().t("Setting"))),
      () => ($i18n(), untrack(() => $i18n().t("Allow Group Sharing")))
    ]
  );
  bind_value(input, name);
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_1$3 = from_html(`<div class="ml-2 flex flex-col gap-2 pt-0.5 pb-1"><div class="flex w-full justify-between"><div class="self-center text-xs"> </div> <!></div> <div class="flex w-full justify-between"><div class="self-center text-xs"> </div> <!></div></div>`);
var root_3$2 = from_html(`<div class="pb-0.5"><div class="text-xs text-gray-500"> </div></div>`);
var root_4$2 = from_html(`<div><div class="text-xs text-gray-500"> </div></div>`);
var root_5$1 = from_html(`<div class="ml-2 flex flex-col gap-2 pt-0.5 pb-1"><div class="flex w-full justify-between"><div class="self-center text-xs"> </div> <!></div> <div class="flex w-full justify-between"><div class="self-center text-xs"> </div> <!></div></div>`);
var root_7$2 = from_html(`<div class="pb-0.5"><div class="text-xs text-gray-500"> </div></div>`);
var root_8$2 = from_html(`<div class=" self-center text-xs font-medium"> </div> <!>`, 1);
var root_9 = from_html(`<div class="ml-2 flex flex-col gap-2 pt-0.5 pb-1"><div class="flex w-full justify-between"><div class="self-center text-xs"> </div> <!></div> <div class="flex w-full justify-between"><div class="self-center text-xs"> </div> <!></div></div>`);
var root_11$1 = from_html(`<div class="pb-0.5"><div class="text-xs text-gray-500"> </div></div>`);
var root_12$1 = from_html(`<div><div class="text-xs text-gray-500"> </div></div>`);
var root_14$1 = from_html(`<div><div class="text-xs text-gray-500"> </div></div>`);
var root_13 = from_html(`<div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div>`);
var root_15$2 = from_html(`<div><div class="text-xs text-gray-500"> </div></div>`);
var root_17 = from_html(`<div><div class="text-xs text-gray-500"> </div></div>`);
var root_16$1 = from_html(`<div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div>`);
var root_18 = from_html(`<div><div class="text-xs text-gray-500"> </div></div>`);
var root_20$1 = from_html(`<div><div class="text-xs text-gray-500"> </div></div>`);
var root_19$1 = from_html(`<div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div>`);
var root_21$1 = from_html(`<div><div class="text-xs text-gray-500"> </div></div>`);
var root_23 = from_html(`<div><div class="text-xs text-gray-500"> </div></div>`);
var root_22$1 = from_html(`<div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div>`);
var root_24 = from_html(`<div><div class="text-xs text-gray-500"> </div></div>`);
var root_26 = from_html(`<div><div class="text-xs text-gray-500"> </div></div>`);
var root_25 = from_html(`<div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div>`);
var root_27 = from_html(`<div><div class="text-xs text-gray-500"> </div></div>`);
var root_28 = from_html(`<div><div class="text-xs text-gray-500"> </div></div>`);
var root_30 = from_html(`<div><div class="text-xs text-gray-500"> </div></div>`);
var root_31 = from_html(`<div><div class="text-xs text-gray-500"> </div></div>`);
var root_32 = from_html(`<div><div class="text-xs text-gray-500"> </div></div>`);
var root_29 = from_html(`<div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div> <div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div> <div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div>`, 1);
var root_33 = from_html(`<div><div class="text-xs text-gray-500"> </div></div>`);
var root_34 = from_html(`<div><div class="text-xs text-gray-500"> </div></div>`);
var root_35 = from_html(`<div><div class="text-xs text-gray-500"> </div></div>`);
var root_36 = from_html(`<div><div class="text-xs text-gray-500"> </div></div>`);
var root_37 = from_html(`<div><div class="text-xs text-gray-500"> </div></div>`);
var root_38 = from_html(`<div><div class="text-xs text-gray-500"> </div></div>`);
var root_39 = from_html(`<div><div class="text-xs text-gray-500"> </div></div>`);
var root_40 = from_html(`<div><div class="text-xs text-gray-500"> </div></div>`);
var root_41 = from_html(`<div><div class="text-xs text-gray-500"> </div></div>`);
var root_42 = from_html(`<div><div class="text-xs text-gray-500"> </div></div>`);
var root_43 = from_html(`<div><div class="text-xs text-gray-500"> </div></div>`);
var root_44 = from_html(`<div><div class="text-xs text-gray-500"> </div></div>`);
var root_45 = from_html(`<div><div class="text-xs text-gray-500"> </div></div>`);
var root_47 = from_html(`<div><div class="text-xs text-gray-500"> </div></div>`);
var root_46 = from_html(`<div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div>`);
var root_48 = from_html(`<div><div class="text-xs text-gray-500"> </div></div>`);
var root_49 = from_html(`<div><div class="text-xs text-gray-500"> </div></div>`);
var root_50 = from_html(`<div><div class="text-xs text-gray-500"> </div></div>`);
var root_51 = from_html(`<div><div class="text-xs text-gray-500"> </div></div>`);
var root_52 = from_html(`<div><div class="text-xs text-gray-500"> </div></div>`);
var root_53 = from_html(`<div><div class="text-xs text-gray-500"> </div></div>`);
var root$6 = from_html(`<div class="space-y-2"><div><div class=" mb-2 text-sm font-medium"> </div> <div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div> <div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div> <div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div> <div class="flex flex-col w-full"><!> <!></div></div> <hr class=" border-gray-100 dark:border-gray-850"/> <div><div class=" mb-2 text-sm font-medium"> </div> <div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div> <!> <div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div> <!> <div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div> <!> <div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div> <!> <div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div> <!></div> <hr class=" border-gray-100 dark:border-gray-850"/> <div><div class=" mb-2 text-sm font-medium"> </div> <div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div> <div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div> <!> <div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div> <div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div> <div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div> <div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div> <div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div> <div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div> <div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div> <div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div> <div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div> <div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div> <div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div> <div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div> <div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div> <!></div> <hr class=" border-gray-100 dark:border-gray-850"/> <div><div class=" mb-2 text-sm font-medium"> </div> <div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div> <div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div> <div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div> <div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div> <div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div> <div class="flex flex-col w-full"><div class="flex w-full justify-between my-1"><div class=" self-center text-xs font-medium"> </div> <!></div> <!></div></div></div>`);
function Permissions($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  const DEFAULT_PERMISSIONS = {
    workspace: {
      models: false,
      knowledge: false,
      prompts: false,
      tools: false,
      models_import: false,
      models_export: false,
      prompts_import: false,
      prompts_export: false,
      tools_import: false,
      tools_export: false
    },
    sharing: {
      models: false,
      public_models: false,
      knowledge: false,
      public_knowledge: false,
      prompts: false,
      public_prompts: false,
      tools: false,
      public_tools: false,
      notes: false,
      public_notes: false
    },
    chat: {
      controls: true,
      valves: true,
      system_prompt: true,
      params: true,
      file_upload: true,
      delete: true,
      delete_message: true,
      continue_response: true,
      regenerate_response: true,
      rate_response: true,
      edit: true,
      share: true,
      export: true,
      stt: true,
      tts: true,
      call: true,
      multiple_models: true,
      temporary: true,
      temporary_enforced: false
    },
    features: {
      api_keys: false,
      direct_tool_servers: false,
      web_search: true,
      image_generation: true,
      code_interpreter: true,
      notes: true
    }
  };
  let permissions = prop($$props, "permissions", 28, () => ({}));
  let defaultPermissions = prop($$props, "defaultPermissions", 24, () => ({}));
  function fillMissingProperties(obj, defaults) {
    return {
      ...defaults,
      ...obj,
      workspace: { ...defaults.workspace, ...obj.workspace },
      sharing: { ...defaults.sharing, ...obj.sharing },
      chat: { ...defaults.chat, ...obj.chat },
      features: { ...defaults.features, ...obj.features }
    };
  }
  onMount(() => {
    permissions(fillMissingProperties(permissions(), DEFAULT_PERMISSIONS));
  });
  legacy_pre_effect(() => deep_read_state(permissions()), () => {
    permissions(fillMissingProperties(permissions(), DEFAULT_PERMISSIONS));
  });
  legacy_pre_effect_reset();
  init();
  var div = root$6();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var text2 = child(div_2, true);
  reset(div_2);
  var div_3 = sibling(div_2, 2);
  var div_4 = child(div_3);
  var div_5 = child(div_4);
  var text_1 = child(div_5, true);
  reset(div_5);
  var node = sibling(div_5, 2);
  Switch_1(node, {
    get state() {
      return permissions().workspace.models;
    },
    set state($$value) {
      permissions(permissions().workspace.models = $$value, true);
    },
    $$legacy: true
  });
  reset(div_4);
  var node_1 = sibling(div_4, 2);
  {
    var consequent = ($$anchor2) => {
      var div_6 = root_1$3();
      var div_7 = child(div_6);
      var div_8 = child(div_7);
      var text_2 = child(div_8, true);
      reset(div_8);
      var node_2 = sibling(div_8, 2);
      Switch_1(node_2, {
        get state() {
          return permissions().workspace.models_import;
        },
        set state($$value) {
          permissions(permissions().workspace.models_import = $$value, true);
        },
        $$legacy: true
      });
      reset(div_7);
      var div_9 = sibling(div_7, 2);
      var div_10 = child(div_9);
      var text_3 = child(div_10, true);
      reset(div_10);
      var node_3 = sibling(div_10, 2);
      Switch_1(node_3, {
        get state() {
          return permissions().workspace.models_export;
        },
        set state($$value) {
          permissions(permissions().workspace.models_export = $$value, true);
        },
        $$legacy: true
      });
      reset(div_9);
      reset(div_6);
      template_effect(
        ($0, $1) => {
          set_text(text_2, $0);
          set_text(text_3, $1);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Import Models"))),
          () => ($i18n(), untrack(() => $i18n().t("Export Models")))
        ]
      );
      append($$anchor2, div_6);
    };
    var alternate = ($$anchor2) => {
      var fragment = comment();
      var node_4 = first_child(fragment);
      {
        var consequent_1 = ($$anchor3) => {
          var div_11 = root_3$2();
          var div_12 = child(div_11);
          var text_4 = child(div_12, true);
          reset(div_12);
          reset(div_11);
          template_effect(($0) => set_text(text_4, $0), [
            () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
          ]);
          append($$anchor3, div_11);
        };
        if_block(
          node_4,
          ($$render) => {
            if (deep_read_state(defaultPermissions()), untrack(() => {
              var _a, _b;
              return (_b = (_a = defaultPermissions()) == null ? void 0 : _a.workspace) == null ? void 0 : _b.models;
            })) $$render(consequent_1);
          },
          true
        );
      }
      append($$anchor2, fragment);
    };
    if_block(node_1, ($$render) => {
      if (deep_read_state(permissions()), untrack(() => permissions().workspace.models)) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  reset(div_3);
  var div_13 = sibling(div_3, 2);
  var div_14 = child(div_13);
  var div_15 = child(div_14);
  var text_5 = child(div_15, true);
  reset(div_15);
  var node_5 = sibling(div_15, 2);
  Switch_1(node_5, {
    get state() {
      return permissions().workspace.knowledge;
    },
    set state($$value) {
      permissions(permissions().workspace.knowledge = $$value, true);
    },
    $$legacy: true
  });
  reset(div_14);
  var node_6 = sibling(div_14, 2);
  {
    var consequent_2 = ($$anchor2) => {
      var div_16 = root_4$2();
      var div_17 = child(div_16);
      var text_6 = child(div_17, true);
      reset(div_17);
      reset(div_16);
      template_effect(($0) => set_text(text_6, $0), [
        () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
      ]);
      append($$anchor2, div_16);
    };
    if_block(node_6, ($$render) => {
      if (deep_read_state(defaultPermissions()), deep_read_state(permissions()), untrack(() => {
        var _a, _b;
        return ((_b = (_a = defaultPermissions()) == null ? void 0 : _a.workspace) == null ? void 0 : _b.knowledge) && !permissions().workspace.knowledge;
      })) $$render(consequent_2);
    });
  }
  reset(div_13);
  var div_18 = sibling(div_13, 2);
  var div_19 = child(div_18);
  var div_20 = child(div_19);
  var text_7 = child(div_20, true);
  reset(div_20);
  var node_7 = sibling(div_20, 2);
  Switch_1(node_7, {
    get state() {
      return permissions().workspace.prompts;
    },
    set state($$value) {
      permissions(permissions().workspace.prompts = $$value, true);
    },
    $$legacy: true
  });
  reset(div_19);
  var node_8 = sibling(div_19, 2);
  {
    var consequent_3 = ($$anchor2) => {
      var div_21 = root_5$1();
      var div_22 = child(div_21);
      var div_23 = child(div_22);
      var text_8 = child(div_23, true);
      reset(div_23);
      var node_9 = sibling(div_23, 2);
      Switch_1(node_9, {
        get state() {
          return permissions().workspace.prompts_import;
        },
        set state($$value) {
          permissions(permissions().workspace.prompts_import = $$value, true);
        },
        $$legacy: true
      });
      reset(div_22);
      var div_24 = sibling(div_22, 2);
      var div_25 = child(div_24);
      var text_9 = child(div_25, true);
      reset(div_25);
      var node_10 = sibling(div_25, 2);
      Switch_1(node_10, {
        get state() {
          return permissions().workspace.prompts_export;
        },
        set state($$value) {
          permissions(permissions().workspace.prompts_export = $$value, true);
        },
        $$legacy: true
      });
      reset(div_24);
      reset(div_21);
      template_effect(
        ($0, $1) => {
          set_text(text_8, $0);
          set_text(text_9, $1);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Import Prompts"))),
          () => ($i18n(), untrack(() => $i18n().t("Export Prompts")))
        ]
      );
      append($$anchor2, div_21);
    };
    var alternate_1 = ($$anchor2) => {
      var fragment_1 = comment();
      var node_11 = first_child(fragment_1);
      {
        var consequent_4 = ($$anchor3) => {
          var div_26 = root_7$2();
          var div_27 = child(div_26);
          var text_10 = child(div_27, true);
          reset(div_27);
          reset(div_26);
          template_effect(($0) => set_text(text_10, $0), [
            () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
          ]);
          append($$anchor3, div_26);
        };
        if_block(
          node_11,
          ($$render) => {
            if (deep_read_state(defaultPermissions()), untrack(() => {
              var _a, _b;
              return (_b = (_a = defaultPermissions()) == null ? void 0 : _a.workspace) == null ? void 0 : _b.prompts;
            })) $$render(consequent_4);
          },
          true
        );
      }
      append($$anchor2, fragment_1);
    };
    if_block(node_8, ($$render) => {
      if (deep_read_state(permissions()), untrack(() => permissions().workspace.prompts)) $$render(consequent_3);
      else $$render(alternate_1, false);
    });
  }
  reset(div_18);
  var div_28 = sibling(div_18, 2);
  var node_12 = child(div_28);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Warning: Enabling this will allow users to upload arbitrary code on the server."))));
    Tooltip(node_12, {
      className: "flex w-full justify-between my-1",
      get content() {
        return get($0);
      },
      placement: "top-start",
      children: ($$anchor2, $$slotProps) => {
        var fragment_2 = root_8$2();
        var div_29 = first_child(fragment_2);
        var text_11 = child(div_29, true);
        reset(div_29);
        var node_13 = sibling(div_29, 2);
        Switch_1(node_13, {
          get state() {
            return permissions().workspace.tools;
          },
          set state($$value) {
            permissions(permissions().workspace.tools = $$value, true);
          },
          $$legacy: true
        });
        template_effect(($02) => set_text(text_11, $02), [() => ($i18n(), untrack(() => $i18n().t("Tools Access")))]);
        append($$anchor2, fragment_2);
      },
      $$slots: { default: true }
    });
  }
  var node_14 = sibling(node_12, 2);
  {
    var consequent_5 = ($$anchor2) => {
      var div_30 = root_9();
      var div_31 = child(div_30);
      var div_32 = child(div_31);
      var text_12 = child(div_32, true);
      reset(div_32);
      var node_15 = sibling(div_32, 2);
      Switch_1(node_15, {
        get state() {
          return permissions().workspace.tools_import;
        },
        set state($$value) {
          permissions(permissions().workspace.tools_import = $$value, true);
        },
        $$legacy: true
      });
      reset(div_31);
      var div_33 = sibling(div_31, 2);
      var div_34 = child(div_33);
      var text_13 = child(div_34, true);
      reset(div_34);
      var node_16 = sibling(div_34, 2);
      Switch_1(node_16, {
        get state() {
          return permissions().workspace.tools_export;
        },
        set state($$value) {
          permissions(permissions().workspace.tools_export = $$value, true);
        },
        $$legacy: true
      });
      reset(div_33);
      reset(div_30);
      template_effect(
        ($0, $1) => {
          set_text(text_12, $0);
          set_text(text_13, $1);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Import Tools"))),
          () => ($i18n(), untrack(() => $i18n().t("Export Tools")))
        ]
      );
      append($$anchor2, div_30);
    };
    var alternate_2 = ($$anchor2) => {
      var fragment_3 = comment();
      var node_17 = first_child(fragment_3);
      {
        var consequent_6 = ($$anchor3) => {
          var div_35 = root_11$1();
          var div_36 = child(div_35);
          var text_14 = child(div_36, true);
          reset(div_36);
          reset(div_35);
          template_effect(($0) => set_text(text_14, $0), [
            () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
          ]);
          append($$anchor3, div_35);
        };
        if_block(
          node_17,
          ($$render) => {
            if (deep_read_state(defaultPermissions()), untrack(() => {
              var _a, _b;
              return (_b = (_a = defaultPermissions()) == null ? void 0 : _a.workspace) == null ? void 0 : _b.tools;
            })) $$render(consequent_6);
          },
          true
        );
      }
      append($$anchor2, fragment_3);
    };
    if_block(node_14, ($$render) => {
      if (deep_read_state(permissions()), untrack(() => permissions().workspace.tools)) $$render(consequent_5);
      else $$render(alternate_2, false);
    });
  }
  reset(div_28);
  reset(div_1);
  var div_37 = sibling(div_1, 4);
  var div_38 = child(div_37);
  var text_15 = child(div_38, true);
  reset(div_38);
  var div_39 = sibling(div_38, 2);
  var div_40 = child(div_39);
  var div_41 = child(div_40);
  var text_16 = child(div_41, true);
  reset(div_41);
  var node_18 = sibling(div_41, 2);
  Switch_1(node_18, {
    get state() {
      return permissions().sharing.models;
    },
    set state($$value) {
      permissions(permissions().sharing.models = $$value, true);
    },
    $$legacy: true
  });
  reset(div_40);
  var node_19 = sibling(div_40, 2);
  {
    var consequent_7 = ($$anchor2) => {
      var div_42 = root_12$1();
      var div_43 = child(div_42);
      var text_17 = child(div_43, true);
      reset(div_43);
      reset(div_42);
      template_effect(($0) => set_text(text_17, $0), [
        () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
      ]);
      append($$anchor2, div_42);
    };
    if_block(node_19, ($$render) => {
      if (deep_read_state(defaultPermissions()), deep_read_state(permissions()), untrack(() => {
        var _a, _b;
        return ((_b = (_a = defaultPermissions()) == null ? void 0 : _a.sharing) == null ? void 0 : _b.models) && !permissions().sharing.models;
      })) $$render(consequent_7);
    });
  }
  reset(div_39);
  var node_20 = sibling(div_39, 2);
  {
    var consequent_9 = ($$anchor2) => {
      var div_44 = root_13();
      var div_45 = child(div_44);
      var div_46 = child(div_45);
      var text_18 = child(div_46, true);
      reset(div_46);
      var node_21 = sibling(div_46, 2);
      Switch_1(node_21, {
        get state() {
          return permissions().sharing.public_models;
        },
        set state($$value) {
          permissions(permissions().sharing.public_models = $$value, true);
        },
        $$legacy: true
      });
      reset(div_45);
      var node_22 = sibling(div_45, 2);
      {
        var consequent_8 = ($$anchor3) => {
          var div_47 = root_14$1();
          var div_48 = child(div_47);
          var text_19 = child(div_48, true);
          reset(div_48);
          reset(div_47);
          template_effect(($0) => set_text(text_19, $0), [
            () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
          ]);
          append($$anchor3, div_47);
        };
        if_block(node_22, ($$render) => {
          if (deep_read_state(defaultPermissions()), deep_read_state(permissions()), untrack(() => {
            var _a, _b;
            return ((_b = (_a = defaultPermissions()) == null ? void 0 : _a.sharing) == null ? void 0 : _b.public_models) && !permissions().sharing.public_models;
          })) $$render(consequent_8);
        });
      }
      reset(div_44);
      template_effect(($0) => set_text(text_18, $0), [
        () => ($i18n(), untrack(() => $i18n().t("Models Public Sharing")))
      ]);
      append($$anchor2, div_44);
    };
    if_block(node_20, ($$render) => {
      if (deep_read_state(permissions()), untrack(() => permissions().sharing.models)) $$render(consequent_9);
    });
  }
  var div_49 = sibling(node_20, 2);
  var div_50 = child(div_49);
  var div_51 = child(div_50);
  var text_20 = child(div_51, true);
  reset(div_51);
  var node_23 = sibling(div_51, 2);
  Switch_1(node_23, {
    get state() {
      return permissions().sharing.knowledge;
    },
    set state($$value) {
      permissions(permissions().sharing.knowledge = $$value, true);
    },
    $$legacy: true
  });
  reset(div_50);
  var node_24 = sibling(div_50, 2);
  {
    var consequent_10 = ($$anchor2) => {
      var div_52 = root_15$2();
      var div_53 = child(div_52);
      var text_21 = child(div_53, true);
      reset(div_53);
      reset(div_52);
      template_effect(($0) => set_text(text_21, $0), [
        () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
      ]);
      append($$anchor2, div_52);
    };
    if_block(node_24, ($$render) => {
      if (deep_read_state(defaultPermissions()), deep_read_state(permissions()), untrack(() => {
        var _a, _b;
        return ((_b = (_a = defaultPermissions()) == null ? void 0 : _a.sharing) == null ? void 0 : _b.knowledge) && !permissions().sharing.knowledge;
      })) $$render(consequent_10);
    });
  }
  reset(div_49);
  var node_25 = sibling(div_49, 2);
  {
    var consequent_12 = ($$anchor2) => {
      var div_54 = root_16$1();
      var div_55 = child(div_54);
      var div_56 = child(div_55);
      var text_22 = child(div_56, true);
      reset(div_56);
      var node_26 = sibling(div_56, 2);
      Switch_1(node_26, {
        get state() {
          return permissions().sharing.public_knowledge;
        },
        set state($$value) {
          permissions(permissions().sharing.public_knowledge = $$value, true);
        },
        $$legacy: true
      });
      reset(div_55);
      var node_27 = sibling(div_55, 2);
      {
        var consequent_11 = ($$anchor3) => {
          var div_57 = root_17();
          var div_58 = child(div_57);
          var text_23 = child(div_58, true);
          reset(div_58);
          reset(div_57);
          template_effect(($0) => set_text(text_23, $0), [
            () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
          ]);
          append($$anchor3, div_57);
        };
        if_block(node_27, ($$render) => {
          if (deep_read_state(defaultPermissions()), deep_read_state(permissions()), untrack(() => {
            var _a, _b;
            return ((_b = (_a = defaultPermissions()) == null ? void 0 : _a.sharing) == null ? void 0 : _b.public_knowledge) && !permissions().sharing.public_knowledge;
          })) $$render(consequent_11);
        });
      }
      reset(div_54);
      template_effect(($0) => set_text(text_22, $0), [
        () => ($i18n(), untrack(() => $i18n().t("Knowledge Public Sharing")))
      ]);
      append($$anchor2, div_54);
    };
    if_block(node_25, ($$render) => {
      if (deep_read_state(permissions()), untrack(() => permissions().sharing.knowledge)) $$render(consequent_12);
    });
  }
  var div_59 = sibling(node_25, 2);
  var div_60 = child(div_59);
  var div_61 = child(div_60);
  var text_24 = child(div_61, true);
  reset(div_61);
  var node_28 = sibling(div_61, 2);
  Switch_1(node_28, {
    get state() {
      return permissions().sharing.prompts;
    },
    set state($$value) {
      permissions(permissions().sharing.prompts = $$value, true);
    },
    $$legacy: true
  });
  reset(div_60);
  var node_29 = sibling(div_60, 2);
  {
    var consequent_13 = ($$anchor2) => {
      var div_62 = root_18();
      var div_63 = child(div_62);
      var text_25 = child(div_63, true);
      reset(div_63);
      reset(div_62);
      template_effect(($0) => set_text(text_25, $0), [
        () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
      ]);
      append($$anchor2, div_62);
    };
    if_block(node_29, ($$render) => {
      if (deep_read_state(defaultPermissions()), deep_read_state(permissions()), untrack(() => {
        var _a, _b;
        return ((_b = (_a = defaultPermissions()) == null ? void 0 : _a.sharing) == null ? void 0 : _b.prompts) && !permissions().sharing.prompts;
      })) $$render(consequent_13);
    });
  }
  reset(div_59);
  var node_30 = sibling(div_59, 2);
  {
    var consequent_15 = ($$anchor2) => {
      var div_64 = root_19$1();
      var div_65 = child(div_64);
      var div_66 = child(div_65);
      var text_26 = child(div_66, true);
      reset(div_66);
      var node_31 = sibling(div_66, 2);
      Switch_1(node_31, {
        get state() {
          return permissions().sharing.public_prompts;
        },
        set state($$value) {
          permissions(permissions().sharing.public_prompts = $$value, true);
        },
        $$legacy: true
      });
      reset(div_65);
      var node_32 = sibling(div_65, 2);
      {
        var consequent_14 = ($$anchor3) => {
          var div_67 = root_20$1();
          var div_68 = child(div_67);
          var text_27 = child(div_68, true);
          reset(div_68);
          reset(div_67);
          template_effect(($0) => set_text(text_27, $0), [
            () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
          ]);
          append($$anchor3, div_67);
        };
        if_block(node_32, ($$render) => {
          if (deep_read_state(defaultPermissions()), deep_read_state(permissions()), untrack(() => {
            var _a, _b;
            return ((_b = (_a = defaultPermissions()) == null ? void 0 : _a.sharing) == null ? void 0 : _b.public_prompts) && !permissions().sharing.public_prompts;
          })) $$render(consequent_14);
        });
      }
      reset(div_64);
      template_effect(($0) => set_text(text_26, $0), [
        () => ($i18n(), untrack(() => $i18n().t("Prompts Public Sharing")))
      ]);
      append($$anchor2, div_64);
    };
    if_block(node_30, ($$render) => {
      if (deep_read_state(permissions()), untrack(() => permissions().sharing.prompts)) $$render(consequent_15);
    });
  }
  var div_69 = sibling(node_30, 2);
  var div_70 = child(div_69);
  var div_71 = child(div_70);
  var text_28 = child(div_71, true);
  reset(div_71);
  var node_33 = sibling(div_71, 2);
  Switch_1(node_33, {
    get state() {
      return permissions().sharing.tools;
    },
    set state($$value) {
      permissions(permissions().sharing.tools = $$value, true);
    },
    $$legacy: true
  });
  reset(div_70);
  var node_34 = sibling(div_70, 2);
  {
    var consequent_16 = ($$anchor2) => {
      var div_72 = root_21$1();
      var div_73 = child(div_72);
      var text_29 = child(div_73, true);
      reset(div_73);
      reset(div_72);
      template_effect(($0) => set_text(text_29, $0), [
        () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
      ]);
      append($$anchor2, div_72);
    };
    if_block(node_34, ($$render) => {
      if (deep_read_state(defaultPermissions()), deep_read_state(permissions()), untrack(() => {
        var _a, _b;
        return ((_b = (_a = defaultPermissions()) == null ? void 0 : _a.sharing) == null ? void 0 : _b.tools) && !permissions().sharing.tools;
      })) $$render(consequent_16);
    });
  }
  reset(div_69);
  var node_35 = sibling(div_69, 2);
  {
    var consequent_18 = ($$anchor2) => {
      var div_74 = root_22$1();
      var div_75 = child(div_74);
      var div_76 = child(div_75);
      var text_30 = child(div_76, true);
      reset(div_76);
      var node_36 = sibling(div_76, 2);
      Switch_1(node_36, {
        get state() {
          return permissions().sharing.public_tools;
        },
        set state($$value) {
          permissions(permissions().sharing.public_tools = $$value, true);
        },
        $$legacy: true
      });
      reset(div_75);
      var node_37 = sibling(div_75, 2);
      {
        var consequent_17 = ($$anchor3) => {
          var div_77 = root_23();
          var div_78 = child(div_77);
          var text_31 = child(div_78, true);
          reset(div_78);
          reset(div_77);
          template_effect(($0) => set_text(text_31, $0), [
            () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
          ]);
          append($$anchor3, div_77);
        };
        if_block(node_37, ($$render) => {
          if (deep_read_state(defaultPermissions()), deep_read_state(permissions()), untrack(() => {
            var _a, _b;
            return ((_b = (_a = defaultPermissions()) == null ? void 0 : _a.sharing) == null ? void 0 : _b.public_tools) && !permissions().sharing.public_tools;
          })) $$render(consequent_17);
        });
      }
      reset(div_74);
      template_effect(($0) => set_text(text_30, $0), [
        () => ($i18n(), untrack(() => $i18n().t("Tools Public Sharing")))
      ]);
      append($$anchor2, div_74);
    };
    if_block(node_35, ($$render) => {
      if (deep_read_state(permissions()), untrack(() => permissions().sharing.tools)) $$render(consequent_18);
    });
  }
  var div_79 = sibling(node_35, 2);
  var div_80 = child(div_79);
  var div_81 = child(div_80);
  var text_32 = child(div_81, true);
  reset(div_81);
  var node_38 = sibling(div_81, 2);
  Switch_1(node_38, {
    get state() {
      return permissions().sharing.notes;
    },
    set state($$value) {
      permissions(permissions().sharing.notes = $$value, true);
    },
    $$legacy: true
  });
  reset(div_80);
  var node_39 = sibling(div_80, 2);
  {
    var consequent_19 = ($$anchor2) => {
      var div_82 = root_24();
      var div_83 = child(div_82);
      var text_33 = child(div_83, true);
      reset(div_83);
      reset(div_82);
      template_effect(($0) => set_text(text_33, $0), [
        () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
      ]);
      append($$anchor2, div_82);
    };
    if_block(node_39, ($$render) => {
      if (deep_read_state(defaultPermissions()), deep_read_state(permissions()), untrack(() => {
        var _a, _b;
        return ((_b = (_a = defaultPermissions()) == null ? void 0 : _a.sharing) == null ? void 0 : _b.notes) && !permissions().sharing.notes;
      })) $$render(consequent_19);
    });
  }
  reset(div_79);
  var node_40 = sibling(div_79, 2);
  {
    var consequent_21 = ($$anchor2) => {
      var div_84 = root_25();
      var div_85 = child(div_84);
      var div_86 = child(div_85);
      var text_34 = child(div_86, true);
      reset(div_86);
      var node_41 = sibling(div_86, 2);
      Switch_1(node_41, {
        get state() {
          return permissions().sharing.public_notes;
        },
        set state($$value) {
          permissions(permissions().sharing.public_notes = $$value, true);
        },
        $$legacy: true
      });
      reset(div_85);
      var node_42 = sibling(div_85, 2);
      {
        var consequent_20 = ($$anchor3) => {
          var div_87 = root_26();
          var div_88 = child(div_87);
          var text_35 = child(div_88, true);
          reset(div_88);
          reset(div_87);
          template_effect(($0) => set_text(text_35, $0), [
            () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
          ]);
          append($$anchor3, div_87);
        };
        if_block(node_42, ($$render) => {
          if (deep_read_state(defaultPermissions()), deep_read_state(permissions()), untrack(() => {
            var _a, _b;
            return ((_b = (_a = defaultPermissions()) == null ? void 0 : _a.sharing) == null ? void 0 : _b.public_notes) && !permissions().sharing.public_notes;
          })) $$render(consequent_20);
        });
      }
      reset(div_84);
      template_effect(($0) => set_text(text_34, $0), [
        () => ($i18n(), untrack(() => $i18n().t("Notes Public Sharing")))
      ]);
      append($$anchor2, div_84);
    };
    if_block(node_40, ($$render) => {
      if (deep_read_state(permissions()), untrack(() => permissions().sharing.notes)) $$render(consequent_21);
    });
  }
  reset(div_37);
  var div_89 = sibling(div_37, 4);
  var div_90 = child(div_89);
  var text_36 = child(div_90, true);
  reset(div_90);
  var div_91 = sibling(div_90, 2);
  var div_92 = child(div_91);
  var div_93 = child(div_92);
  var text_37 = child(div_93, true);
  reset(div_93);
  var node_43 = sibling(div_93, 2);
  Switch_1(node_43, {
    get state() {
      return permissions().chat.file_upload;
    },
    set state($$value) {
      permissions(permissions().chat.file_upload = $$value, true);
    },
    $$legacy: true
  });
  reset(div_92);
  var node_44 = sibling(div_92, 2);
  {
    var consequent_22 = ($$anchor2) => {
      var div_94 = root_27();
      var div_95 = child(div_94);
      var text_38 = child(div_95, true);
      reset(div_95);
      reset(div_94);
      template_effect(($0) => set_text(text_38, $0), [
        () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
      ]);
      append($$anchor2, div_94);
    };
    if_block(node_44, ($$render) => {
      if (deep_read_state(defaultPermissions()), deep_read_state(permissions()), untrack(() => {
        var _a, _b;
        return ((_b = (_a = defaultPermissions()) == null ? void 0 : _a.chat) == null ? void 0 : _b.file_upload) && !permissions().chat.file_upload;
      })) $$render(consequent_22);
    });
  }
  reset(div_91);
  var div_96 = sibling(div_91, 2);
  var div_97 = child(div_96);
  var div_98 = child(div_97);
  var text_39 = child(div_98, true);
  reset(div_98);
  var node_45 = sibling(div_98, 2);
  Switch_1(node_45, {
    get state() {
      return permissions().chat.controls;
    },
    set state($$value) {
      permissions(permissions().chat.controls = $$value, true);
    },
    $$legacy: true
  });
  reset(div_97);
  var node_46 = sibling(div_97, 2);
  {
    var consequent_23 = ($$anchor2) => {
      var div_99 = root_28();
      var div_100 = child(div_99);
      var text_40 = child(div_100, true);
      reset(div_100);
      reset(div_99);
      template_effect(($0) => set_text(text_40, $0), [
        () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
      ]);
      append($$anchor2, div_99);
    };
    if_block(node_46, ($$render) => {
      if (deep_read_state(defaultPermissions()), deep_read_state(permissions()), untrack(() => {
        var _a, _b;
        return ((_b = (_a = defaultPermissions()) == null ? void 0 : _a.chat) == null ? void 0 : _b.controls) && !permissions().chat.controls;
      })) $$render(consequent_23);
    });
  }
  reset(div_96);
  var node_47 = sibling(div_96, 2);
  {
    var consequent_27 = ($$anchor2) => {
      var fragment_4 = root_29();
      var div_101 = first_child(fragment_4);
      var div_102 = child(div_101);
      var div_103 = child(div_102);
      var text_41 = child(div_103, true);
      reset(div_103);
      var node_48 = sibling(div_103, 2);
      Switch_1(node_48, {
        get state() {
          return permissions().chat.valves;
        },
        set state($$value) {
          permissions(permissions().chat.valves = $$value, true);
        },
        $$legacy: true
      });
      reset(div_102);
      var node_49 = sibling(div_102, 2);
      {
        var consequent_24 = ($$anchor3) => {
          var div_104 = root_30();
          var div_105 = child(div_104);
          var text_42 = child(div_105, true);
          reset(div_105);
          reset(div_104);
          template_effect(($0) => set_text(text_42, $0), [
            () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
          ]);
          append($$anchor3, div_104);
        };
        if_block(node_49, ($$render) => {
          if (deep_read_state(defaultPermissions()), deep_read_state(permissions()), untrack(() => {
            var _a, _b;
            return ((_b = (_a = defaultPermissions()) == null ? void 0 : _a.chat) == null ? void 0 : _b.valves) && !permissions().chat.valves;
          })) $$render(consequent_24);
        });
      }
      reset(div_101);
      var div_106 = sibling(div_101, 2);
      var div_107 = child(div_106);
      var div_108 = child(div_107);
      var text_43 = child(div_108, true);
      reset(div_108);
      var node_50 = sibling(div_108, 2);
      Switch_1(node_50, {
        get state() {
          return permissions().chat.system_prompt;
        },
        set state($$value) {
          permissions(permissions().chat.system_prompt = $$value, true);
        },
        $$legacy: true
      });
      reset(div_107);
      var node_51 = sibling(div_107, 2);
      {
        var consequent_25 = ($$anchor3) => {
          var div_109 = root_31();
          var div_110 = child(div_109);
          var text_44 = child(div_110, true);
          reset(div_110);
          reset(div_109);
          template_effect(($0) => set_text(text_44, $0), [
            () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
          ]);
          append($$anchor3, div_109);
        };
        if_block(node_51, ($$render) => {
          if (deep_read_state(defaultPermissions()), deep_read_state(permissions()), untrack(() => {
            var _a, _b;
            return ((_b = (_a = defaultPermissions()) == null ? void 0 : _a.chat) == null ? void 0 : _b.system_prompt) && !permissions().chat.system_prompt;
          })) $$render(consequent_25);
        });
      }
      reset(div_106);
      var div_111 = sibling(div_106, 2);
      var div_112 = child(div_111);
      var div_113 = child(div_112);
      var text_45 = child(div_113, true);
      reset(div_113);
      var node_52 = sibling(div_113, 2);
      Switch_1(node_52, {
        get state() {
          return permissions().chat.params;
        },
        set state($$value) {
          permissions(permissions().chat.params = $$value, true);
        },
        $$legacy: true
      });
      reset(div_112);
      var node_53 = sibling(div_112, 2);
      {
        var consequent_26 = ($$anchor3) => {
          var div_114 = root_32();
          var div_115 = child(div_114);
          var text_46 = child(div_115, true);
          reset(div_115);
          reset(div_114);
          template_effect(($0) => set_text(text_46, $0), [
            () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
          ]);
          append($$anchor3, div_114);
        };
        if_block(node_53, ($$render) => {
          if (deep_read_state(defaultPermissions()), deep_read_state(permissions()), untrack(() => {
            var _a, _b;
            return ((_b = (_a = defaultPermissions()) == null ? void 0 : _a.chat) == null ? void 0 : _b.params) && !permissions().chat.params;
          })) $$render(consequent_26);
        });
      }
      reset(div_111);
      template_effect(
        ($0, $1, $2) => {
          set_text(text_41, $0);
          set_text(text_43, $1);
          set_text(text_45, $2);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Allow Chat Valves"))),
          () => ($i18n(), untrack(() => $i18n().t("Allow Chat System Prompt"))),
          () => ($i18n(), untrack(() => $i18n().t("Allow Chat Params")))
        ]
      );
      append($$anchor2, fragment_4);
    };
    if_block(node_47, ($$render) => {
      if (deep_read_state(permissions()), untrack(() => permissions().chat.controls)) $$render(consequent_27);
    });
  }
  var div_116 = sibling(node_47, 2);
  var div_117 = child(div_116);
  var div_118 = child(div_117);
  var text_47 = child(div_118, true);
  reset(div_118);
  var node_54 = sibling(div_118, 2);
  Switch_1(node_54, {
    get state() {
      return permissions().chat.edit;
    },
    set state($$value) {
      permissions(permissions().chat.edit = $$value, true);
    },
    $$legacy: true
  });
  reset(div_117);
  var node_55 = sibling(div_117, 2);
  {
    var consequent_28 = ($$anchor2) => {
      var div_119 = root_33();
      var div_120 = child(div_119);
      var text_48 = child(div_120, true);
      reset(div_120);
      reset(div_119);
      template_effect(($0) => set_text(text_48, $0), [
        () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
      ]);
      append($$anchor2, div_119);
    };
    if_block(node_55, ($$render) => {
      if (deep_read_state(defaultPermissions()), deep_read_state(permissions()), untrack(() => {
        var _a, _b;
        return ((_b = (_a = defaultPermissions()) == null ? void 0 : _a.chat) == null ? void 0 : _b.edit) && !permissions().chat.edit;
      })) $$render(consequent_28);
    });
  }
  reset(div_116);
  var div_121 = sibling(div_116, 2);
  var div_122 = child(div_121);
  var div_123 = child(div_122);
  var text_49 = child(div_123, true);
  reset(div_123);
  var node_56 = sibling(div_123, 2);
  Switch_1(node_56, {
    get state() {
      return permissions().chat.delete;
    },
    set state($$value) {
      permissions(permissions().chat.delete = $$value, true);
    },
    $$legacy: true
  });
  reset(div_122);
  var node_57 = sibling(div_122, 2);
  {
    var consequent_29 = ($$anchor2) => {
      var div_124 = root_34();
      var div_125 = child(div_124);
      var text_50 = child(div_125, true);
      reset(div_125);
      reset(div_124);
      template_effect(($0) => set_text(text_50, $0), [
        () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
      ]);
      append($$anchor2, div_124);
    };
    if_block(node_57, ($$render) => {
      if (deep_read_state(defaultPermissions()), deep_read_state(permissions()), untrack(() => {
        var _a, _b;
        return ((_b = (_a = defaultPermissions()) == null ? void 0 : _a.chat) == null ? void 0 : _b.delete) && !permissions().chat.delete;
      })) $$render(consequent_29);
    });
  }
  reset(div_121);
  var div_126 = sibling(div_121, 2);
  var div_127 = child(div_126);
  var div_128 = child(div_127);
  var text_51 = child(div_128, true);
  reset(div_128);
  var node_58 = sibling(div_128, 2);
  Switch_1(node_58, {
    get state() {
      return permissions().chat.delete_message;
    },
    set state($$value) {
      permissions(permissions().chat.delete_message = $$value, true);
    },
    $$legacy: true
  });
  reset(div_127);
  var node_59 = sibling(div_127, 2);
  {
    var consequent_30 = ($$anchor2) => {
      var div_129 = root_35();
      var div_130 = child(div_129);
      var text_52 = child(div_130, true);
      reset(div_130);
      reset(div_129);
      template_effect(($0) => set_text(text_52, $0), [
        () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
      ]);
      append($$anchor2, div_129);
    };
    if_block(node_59, ($$render) => {
      if (deep_read_state(defaultPermissions()), deep_read_state(permissions()), untrack(() => {
        var _a, _b;
        return ((_b = (_a = defaultPermissions()) == null ? void 0 : _a.chat) == null ? void 0 : _b.delete_message) && !permissions().chat.delete_message;
      })) $$render(consequent_30);
    });
  }
  reset(div_126);
  var div_131 = sibling(div_126, 2);
  var div_132 = child(div_131);
  var div_133 = child(div_132);
  var text_53 = child(div_133, true);
  reset(div_133);
  var node_60 = sibling(div_133, 2);
  Switch_1(node_60, {
    get state() {
      return permissions().chat.continue_response;
    },
    set state($$value) {
      permissions(permissions().chat.continue_response = $$value, true);
    },
    $$legacy: true
  });
  reset(div_132);
  var node_61 = sibling(div_132, 2);
  {
    var consequent_31 = ($$anchor2) => {
      var div_134 = root_36();
      var div_135 = child(div_134);
      var text_54 = child(div_135, true);
      reset(div_135);
      reset(div_134);
      template_effect(($0) => set_text(text_54, $0), [
        () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
      ]);
      append($$anchor2, div_134);
    };
    if_block(node_61, ($$render) => {
      if (deep_read_state(defaultPermissions()), deep_read_state(permissions()), untrack(() => {
        var _a, _b;
        return ((_b = (_a = defaultPermissions()) == null ? void 0 : _a.chat) == null ? void 0 : _b.continue_response) && !permissions().chat.continue_response;
      })) $$render(consequent_31);
    });
  }
  reset(div_131);
  var div_136 = sibling(div_131, 2);
  var div_137 = child(div_136);
  var div_138 = child(div_137);
  var text_55 = child(div_138, true);
  reset(div_138);
  var node_62 = sibling(div_138, 2);
  Switch_1(node_62, {
    get state() {
      return permissions().chat.regenerate_response;
    },
    set state($$value) {
      permissions(permissions().chat.regenerate_response = $$value, true);
    },
    $$legacy: true
  });
  reset(div_137);
  var node_63 = sibling(div_137, 2);
  {
    var consequent_32 = ($$anchor2) => {
      var div_139 = root_37();
      var div_140 = child(div_139);
      var text_56 = child(div_140, true);
      reset(div_140);
      reset(div_139);
      template_effect(($0) => set_text(text_56, $0), [
        () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
      ]);
      append($$anchor2, div_139);
    };
    if_block(node_63, ($$render) => {
      if (deep_read_state(defaultPermissions()), deep_read_state(permissions()), untrack(() => {
        var _a, _b;
        return ((_b = (_a = defaultPermissions()) == null ? void 0 : _a.chat) == null ? void 0 : _b.regenerate_response) && !permissions().chat.regenerate_response;
      })) $$render(consequent_32);
    });
  }
  reset(div_136);
  var div_141 = sibling(div_136, 2);
  var div_142 = child(div_141);
  var div_143 = child(div_142);
  var text_57 = child(div_143, true);
  reset(div_143);
  var node_64 = sibling(div_143, 2);
  Switch_1(node_64, {
    get state() {
      return permissions().chat.rate_response;
    },
    set state($$value) {
      permissions(permissions().chat.rate_response = $$value, true);
    },
    $$legacy: true
  });
  reset(div_142);
  var node_65 = sibling(div_142, 2);
  {
    var consequent_33 = ($$anchor2) => {
      var div_144 = root_38();
      var div_145 = child(div_144);
      var text_58 = child(div_145, true);
      reset(div_145);
      reset(div_144);
      template_effect(($0) => set_text(text_58, $0), [
        () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
      ]);
      append($$anchor2, div_144);
    };
    if_block(node_65, ($$render) => {
      if (deep_read_state(defaultPermissions()), deep_read_state(permissions()), untrack(() => {
        var _a, _b;
        return ((_b = (_a = defaultPermissions()) == null ? void 0 : _a.chat) == null ? void 0 : _b.rate_response) && !permissions().chat.rate_response;
      })) $$render(consequent_33);
    });
  }
  reset(div_141);
  var div_146 = sibling(div_141, 2);
  var div_147 = child(div_146);
  var div_148 = child(div_147);
  var text_59 = child(div_148, true);
  reset(div_148);
  var node_66 = sibling(div_148, 2);
  Switch_1(node_66, {
    get state() {
      return permissions().chat.share;
    },
    set state($$value) {
      permissions(permissions().chat.share = $$value, true);
    },
    $$legacy: true
  });
  reset(div_147);
  var node_67 = sibling(div_147, 2);
  {
    var consequent_34 = ($$anchor2) => {
      var div_149 = root_39();
      var div_150 = child(div_149);
      var text_60 = child(div_150, true);
      reset(div_150);
      reset(div_149);
      template_effect(($0) => set_text(text_60, $0), [
        () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
      ]);
      append($$anchor2, div_149);
    };
    if_block(node_67, ($$render) => {
      if (deep_read_state(defaultPermissions()), deep_read_state(permissions()), untrack(() => {
        var _a, _b;
        return ((_b = (_a = defaultPermissions()) == null ? void 0 : _a.chat) == null ? void 0 : _b.share) && !permissions().chat.share;
      })) $$render(consequent_34);
    });
  }
  reset(div_146);
  var div_151 = sibling(div_146, 2);
  var div_152 = child(div_151);
  var div_153 = child(div_152);
  var text_61 = child(div_153, true);
  reset(div_153);
  var node_68 = sibling(div_153, 2);
  Switch_1(node_68, {
    get state() {
      return permissions().chat.export;
    },
    set state($$value) {
      permissions(permissions().chat.export = $$value, true);
    },
    $$legacy: true
  });
  reset(div_152);
  var node_69 = sibling(div_152, 2);
  {
    var consequent_35 = ($$anchor2) => {
      var div_154 = root_40();
      var div_155 = child(div_154);
      var text_62 = child(div_155, true);
      reset(div_155);
      reset(div_154);
      template_effect(($0) => set_text(text_62, $0), [
        () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
      ]);
      append($$anchor2, div_154);
    };
    if_block(node_69, ($$render) => {
      if (deep_read_state(defaultPermissions()), deep_read_state(permissions()), untrack(() => {
        var _a, _b;
        return ((_b = (_a = defaultPermissions()) == null ? void 0 : _a.chat) == null ? void 0 : _b.export) && !permissions().chat.export;
      })) $$render(consequent_35);
    });
  }
  reset(div_151);
  var div_156 = sibling(div_151, 2);
  var div_157 = child(div_156);
  var div_158 = child(div_157);
  var text_63 = child(div_158, true);
  reset(div_158);
  var node_70 = sibling(div_158, 2);
  Switch_1(node_70, {
    get state() {
      return permissions().chat.stt;
    },
    set state($$value) {
      permissions(permissions().chat.stt = $$value, true);
    },
    $$legacy: true
  });
  reset(div_157);
  var node_71 = sibling(div_157, 2);
  {
    var consequent_36 = ($$anchor2) => {
      var div_159 = root_41();
      var div_160 = child(div_159);
      var text_64 = child(div_160, true);
      reset(div_160);
      reset(div_159);
      template_effect(($0) => set_text(text_64, $0), [
        () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
      ]);
      append($$anchor2, div_159);
    };
    if_block(node_71, ($$render) => {
      if (deep_read_state(defaultPermissions()), deep_read_state(permissions()), untrack(() => {
        var _a, _b;
        return ((_b = (_a = defaultPermissions()) == null ? void 0 : _a.chat) == null ? void 0 : _b.stt) && !permissions().chat.stt;
      })) $$render(consequent_36);
    });
  }
  reset(div_156);
  var div_161 = sibling(div_156, 2);
  var div_162 = child(div_161);
  var div_163 = child(div_162);
  var text_65 = child(div_163, true);
  reset(div_163);
  var node_72 = sibling(div_163, 2);
  Switch_1(node_72, {
    get state() {
      return permissions().chat.tts;
    },
    set state($$value) {
      permissions(permissions().chat.tts = $$value, true);
    },
    $$legacy: true
  });
  reset(div_162);
  var node_73 = sibling(div_162, 2);
  {
    var consequent_37 = ($$anchor2) => {
      var div_164 = root_42();
      var div_165 = child(div_164);
      var text_66 = child(div_165, true);
      reset(div_165);
      reset(div_164);
      template_effect(($0) => set_text(text_66, $0), [
        () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
      ]);
      append($$anchor2, div_164);
    };
    if_block(node_73, ($$render) => {
      if (deep_read_state(defaultPermissions()), deep_read_state(permissions()), untrack(() => {
        var _a, _b;
        return ((_b = (_a = defaultPermissions()) == null ? void 0 : _a.chat) == null ? void 0 : _b.tts) && !permissions().chat.tts;
      })) $$render(consequent_37);
    });
  }
  reset(div_161);
  var div_166 = sibling(div_161, 2);
  var div_167 = child(div_166);
  var div_168 = child(div_167);
  var text_67 = child(div_168, true);
  reset(div_168);
  var node_74 = sibling(div_168, 2);
  Switch_1(node_74, {
    get state() {
      return permissions().chat.call;
    },
    set state($$value) {
      permissions(permissions().chat.call = $$value, true);
    },
    $$legacy: true
  });
  reset(div_167);
  var node_75 = sibling(div_167, 2);
  {
    var consequent_38 = ($$anchor2) => {
      var div_169 = root_43();
      var div_170 = child(div_169);
      var text_68 = child(div_170, true);
      reset(div_170);
      reset(div_169);
      template_effect(($0) => set_text(text_68, $0), [
        () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
      ]);
      append($$anchor2, div_169);
    };
    if_block(node_75, ($$render) => {
      if (deep_read_state(defaultPermissions()), deep_read_state(permissions()), untrack(() => {
        var _a, _b;
        return ((_b = (_a = defaultPermissions()) == null ? void 0 : _a.chat) == null ? void 0 : _b.call) && !permissions().chat.call;
      })) $$render(consequent_38);
    });
  }
  reset(div_166);
  var div_171 = sibling(div_166, 2);
  var div_172 = child(div_171);
  var div_173 = child(div_172);
  var text_69 = child(div_173, true);
  reset(div_173);
  var node_76 = sibling(div_173, 2);
  Switch_1(node_76, {
    get state() {
      return permissions().chat.multiple_models;
    },
    set state($$value) {
      permissions(permissions().chat.multiple_models = $$value, true);
    },
    $$legacy: true
  });
  reset(div_172);
  var node_77 = sibling(div_172, 2);
  {
    var consequent_39 = ($$anchor2) => {
      var div_174 = root_44();
      var div_175 = child(div_174);
      var text_70 = child(div_175, true);
      reset(div_175);
      reset(div_174);
      template_effect(($0) => set_text(text_70, $0), [
        () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
      ]);
      append($$anchor2, div_174);
    };
    if_block(node_77, ($$render) => {
      if (deep_read_state(defaultPermissions()), deep_read_state(permissions()), untrack(() => {
        var _a, _b;
        return ((_b = (_a = defaultPermissions()) == null ? void 0 : _a.chat) == null ? void 0 : _b.multiple_models) && !permissions().chat.multiple_models;
      })) $$render(consequent_39);
    });
  }
  reset(div_171);
  var div_176 = sibling(div_171, 2);
  var div_177 = child(div_176);
  var div_178 = child(div_177);
  var text_71 = child(div_178, true);
  reset(div_178);
  var node_78 = sibling(div_178, 2);
  Switch_1(node_78, {
    get state() {
      return permissions().chat.temporary;
    },
    set state($$value) {
      permissions(permissions().chat.temporary = $$value, true);
    },
    $$legacy: true
  });
  reset(div_177);
  var node_79 = sibling(div_177, 2);
  {
    var consequent_40 = ($$anchor2) => {
      var div_179 = root_45();
      var div_180 = child(div_179);
      var text_72 = child(div_180, true);
      reset(div_180);
      reset(div_179);
      template_effect(($0) => set_text(text_72, $0), [
        () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
      ]);
      append($$anchor2, div_179);
    };
    if_block(node_79, ($$render) => {
      if (deep_read_state(defaultPermissions()), deep_read_state(permissions()), untrack(() => {
        var _a, _b;
        return ((_b = (_a = defaultPermissions()) == null ? void 0 : _a.chat) == null ? void 0 : _b.temporary) && !permissions().chat.temporary;
      })) $$render(consequent_40);
    });
  }
  reset(div_176);
  var node_80 = sibling(div_176, 2);
  {
    var consequent_42 = ($$anchor2) => {
      var div_181 = root_46();
      var div_182 = child(div_181);
      var div_183 = child(div_182);
      var text_73 = child(div_183, true);
      reset(div_183);
      var node_81 = sibling(div_183, 2);
      Switch_1(node_81, {
        get state() {
          return permissions().chat.temporary_enforced;
        },
        set state($$value) {
          permissions(permissions().chat.temporary_enforced = $$value, true);
        },
        $$legacy: true
      });
      reset(div_182);
      var node_82 = sibling(div_182, 2);
      {
        var consequent_41 = ($$anchor3) => {
          var div_184 = root_47();
          var div_185 = child(div_184);
          var text_74 = child(div_185, true);
          reset(div_185);
          reset(div_184);
          template_effect(($0) => set_text(text_74, $0), [
            () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
          ]);
          append($$anchor3, div_184);
        };
        if_block(node_82, ($$render) => {
          if (deep_read_state(defaultPermissions()), deep_read_state(permissions()), untrack(() => {
            var _a, _b;
            return ((_b = (_a = defaultPermissions()) == null ? void 0 : _a.chat) == null ? void 0 : _b.temporary_enforced) && !permissions().chat.temporary_enforced;
          })) $$render(consequent_41);
        });
      }
      reset(div_181);
      template_effect(($0) => set_text(text_73, $0), [
        () => ($i18n(), untrack(() => $i18n().t("Enforce Temporary Chat")))
      ]);
      append($$anchor2, div_181);
    };
    if_block(node_80, ($$render) => {
      if (deep_read_state(permissions()), untrack(() => permissions().chat.temporary)) $$render(consequent_42);
    });
  }
  reset(div_89);
  var div_186 = sibling(div_89, 4);
  var div_187 = child(div_186);
  var text_75 = child(div_187, true);
  reset(div_187);
  var div_188 = sibling(div_187, 2);
  var div_189 = child(div_188);
  var div_190 = child(div_189);
  var text_76 = child(div_190, true);
  reset(div_190);
  var node_83 = sibling(div_190, 2);
  Switch_1(node_83, {
    get state() {
      return permissions().features.api_keys;
    },
    set state($$value) {
      permissions(permissions().features.api_keys = $$value, true);
    },
    $$legacy: true
  });
  reset(div_189);
  var node_84 = sibling(div_189, 2);
  {
    var consequent_43 = ($$anchor2) => {
      var div_191 = root_48();
      var div_192 = child(div_191);
      var text_77 = child(div_192, true);
      reset(div_192);
      reset(div_191);
      template_effect(($0) => set_text(text_77, $0), [
        () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
      ]);
      append($$anchor2, div_191);
    };
    if_block(node_84, ($$render) => {
      if (deep_read_state(defaultPermissions()), deep_read_state(permissions()), untrack(() => {
        var _a, _b;
        return ((_b = (_a = defaultPermissions()) == null ? void 0 : _a.features) == null ? void 0 : _b.api_keys) && !permissions().features.api_keys;
      })) $$render(consequent_43);
    });
  }
  reset(div_188);
  var div_193 = sibling(div_188, 2);
  var div_194 = child(div_193);
  var div_195 = child(div_194);
  var text_78 = child(div_195, true);
  reset(div_195);
  var node_85 = sibling(div_195, 2);
  Switch_1(node_85, {
    get state() {
      return permissions().features.direct_tool_servers;
    },
    set state($$value) {
      permissions(permissions().features.direct_tool_servers = $$value, true);
    },
    $$legacy: true
  });
  reset(div_194);
  var node_86 = sibling(div_194, 2);
  {
    var consequent_44 = ($$anchor2) => {
      var div_196 = root_49();
      var div_197 = child(div_196);
      var text_79 = child(div_197, true);
      reset(div_197);
      reset(div_196);
      template_effect(($0) => set_text(text_79, $0), [
        () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
      ]);
      append($$anchor2, div_196);
    };
    if_block(node_86, ($$render) => {
      if (deep_read_state(defaultPermissions()), deep_read_state(permissions()), untrack(() => {
        var _a, _b;
        return ((_b = (_a = defaultPermissions()) == null ? void 0 : _a.features) == null ? void 0 : _b.direct_tool_servers) && !permissions().features.direct_tool_servers;
      })) $$render(consequent_44);
    });
  }
  reset(div_193);
  var div_198 = sibling(div_193, 2);
  var div_199 = child(div_198);
  var div_200 = child(div_199);
  var text_80 = child(div_200, true);
  reset(div_200);
  var node_87 = sibling(div_200, 2);
  Switch_1(node_87, {
    get state() {
      return permissions().features.web_search;
    },
    set state($$value) {
      permissions(permissions().features.web_search = $$value, true);
    },
    $$legacy: true
  });
  reset(div_199);
  var node_88 = sibling(div_199, 2);
  {
    var consequent_45 = ($$anchor2) => {
      var div_201 = root_50();
      var div_202 = child(div_201);
      var text_81 = child(div_202, true);
      reset(div_202);
      reset(div_201);
      template_effect(($0) => set_text(text_81, $0), [
        () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
      ]);
      append($$anchor2, div_201);
    };
    if_block(node_88, ($$render) => {
      if (deep_read_state(defaultPermissions()), deep_read_state(permissions()), untrack(() => {
        var _a, _b;
        return ((_b = (_a = defaultPermissions()) == null ? void 0 : _a.features) == null ? void 0 : _b.web_search) && !permissions().features.web_search;
      })) $$render(consequent_45);
    });
  }
  reset(div_198);
  var div_203 = sibling(div_198, 2);
  var div_204 = child(div_203);
  var div_205 = child(div_204);
  var text_82 = child(div_205, true);
  reset(div_205);
  var node_89 = sibling(div_205, 2);
  Switch_1(node_89, {
    get state() {
      return permissions().features.image_generation;
    },
    set state($$value) {
      permissions(permissions().features.image_generation = $$value, true);
    },
    $$legacy: true
  });
  reset(div_204);
  var node_90 = sibling(div_204, 2);
  {
    var consequent_46 = ($$anchor2) => {
      var div_206 = root_51();
      var div_207 = child(div_206);
      var text_83 = child(div_207, true);
      reset(div_207);
      reset(div_206);
      template_effect(($0) => set_text(text_83, $0), [
        () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
      ]);
      append($$anchor2, div_206);
    };
    if_block(node_90, ($$render) => {
      if (deep_read_state(defaultPermissions()), deep_read_state(permissions()), untrack(() => {
        var _a, _b;
        return ((_b = (_a = defaultPermissions()) == null ? void 0 : _a.features) == null ? void 0 : _b.image_generation) && !permissions().features.image_generation;
      })) $$render(consequent_46);
    });
  }
  reset(div_203);
  var div_208 = sibling(div_203, 2);
  var div_209 = child(div_208);
  var div_210 = child(div_209);
  var text_84 = child(div_210, true);
  reset(div_210);
  var node_91 = sibling(div_210, 2);
  Switch_1(node_91, {
    get state() {
      return permissions().features.code_interpreter;
    },
    set state($$value) {
      permissions(permissions().features.code_interpreter = $$value, true);
    },
    $$legacy: true
  });
  reset(div_209);
  var node_92 = sibling(div_209, 2);
  {
    var consequent_47 = ($$anchor2) => {
      var div_211 = root_52();
      var div_212 = child(div_211);
      var text_85 = child(div_212, true);
      reset(div_212);
      reset(div_211);
      template_effect(($0) => set_text(text_85, $0), [
        () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
      ]);
      append($$anchor2, div_211);
    };
    if_block(node_92, ($$render) => {
      if (deep_read_state(defaultPermissions()), deep_read_state(permissions()), untrack(() => {
        var _a, _b;
        return ((_b = (_a = defaultPermissions()) == null ? void 0 : _a.features) == null ? void 0 : _b.code_interpreter) && !permissions().features.code_interpreter;
      })) $$render(consequent_47);
    });
  }
  reset(div_208);
  var div_213 = sibling(div_208, 2);
  var div_214 = child(div_213);
  var div_215 = child(div_214);
  var text_86 = child(div_215, true);
  reset(div_215);
  var node_93 = sibling(div_215, 2);
  Switch_1(node_93, {
    get state() {
      return permissions().features.notes;
    },
    set state($$value) {
      permissions(permissions().features.notes = $$value, true);
    },
    $$legacy: true
  });
  reset(div_214);
  var node_94 = sibling(div_214, 2);
  {
    var consequent_48 = ($$anchor2) => {
      var div_216 = root_53();
      var div_217 = child(div_216);
      var text_87 = child(div_217, true);
      reset(div_217);
      reset(div_216);
      template_effect(($0) => set_text(text_87, $0), [
        () => ($i18n(), untrack(() => $i18n().t("This is a default user permission and will remain enabled.")))
      ]);
      append($$anchor2, div_216);
    };
    if_block(node_94, ($$render) => {
      if (deep_read_state(defaultPermissions()), deep_read_state(permissions()), untrack(() => {
        var _a, _b;
        return ((_b = (_a = defaultPermissions()) == null ? void 0 : _a.features) == null ? void 0 : _b.notes) && !permissions().features.notes;
      })) $$render(consequent_48);
    });
  }
  reset(div_213);
  reset(div_186);
  reset(div);
  template_effect(
    ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32) => {
      set_text(text2, $0);
      set_text(text_1, $1);
      set_text(text_5, $2);
      set_text(text_7, $3);
      set_text(text_15, $4);
      set_text(text_16, $5);
      set_text(text_20, $6);
      set_text(text_24, $7);
      set_text(text_28, $8);
      set_text(text_32, $9);
      set_text(text_36, $10);
      set_text(text_37, $11);
      set_text(text_39, $12);
      set_text(text_47, $13);
      set_text(text_49, $14);
      set_text(text_51, $15);
      set_text(text_53, $16);
      set_text(text_55, $17);
      set_text(text_57, $18);
      set_text(text_59, $19);
      set_text(text_61, $20);
      set_text(text_63, $21);
      set_text(text_65, $22);
      set_text(text_67, $23);
      set_text(text_69, $24);
      set_text(text_71, $25);
      set_text(text_75, $26);
      set_text(text_76, $27);
      set_text(text_78, $28);
      set_text(text_80, $29);
      set_text(text_82, $30);
      set_text(text_84, $31);
      set_text(text_86, $32);
    },
    [
      () => ($i18n(), untrack(() => $i18n().t("Workspace Permissions"))),
      () => ($i18n(), untrack(() => $i18n().t("Models Access"))),
      () => ($i18n(), untrack(() => $i18n().t("Knowledge Access"))),
      () => ($i18n(), untrack(() => $i18n().t("Prompts Access"))),
      () => ($i18n(), untrack(() => $i18n().t("Sharing Permissions"))),
      () => ($i18n(), untrack(() => $i18n().t("Models Sharing"))),
      () => ($i18n(), untrack(() => $i18n().t("Knowledge Sharing"))),
      () => ($i18n(), untrack(() => $i18n().t("Prompts Sharing"))),
      () => ($i18n(), untrack(() => $i18n().t("Tools Sharing"))),
      () => ($i18n(), untrack(() => $i18n().t("Notes Sharing"))),
      () => ($i18n(), untrack(() => $i18n().t("Chat Permissions"))),
      () => ($i18n(), untrack(() => $i18n().t("Allow File Upload"))),
      () => ($i18n(), untrack(() => $i18n().t("Allow Chat Controls"))),
      () => ($i18n(), untrack(() => $i18n().t("Allow Chat Edit"))),
      () => ($i18n(), untrack(() => $i18n().t("Allow Chat Delete"))),
      () => ($i18n(), untrack(() => $i18n().t("Allow Delete Messages"))),
      () => ($i18n(), untrack(() => $i18n().t("Allow Continue Response"))),
      () => ($i18n(), untrack(() => $i18n().t("Allow Regenerate Response"))),
      () => ($i18n(), untrack(() => $i18n().t("Allow Rate Response"))),
      () => ($i18n(), untrack(() => $i18n().t("Allow Chat Share"))),
      () => ($i18n(), untrack(() => $i18n().t("Allow Chat Export"))),
      () => ($i18n(), untrack(() => $i18n().t("Allow Speech to Text"))),
      () => ($i18n(), untrack(() => $i18n().t("Allow Text to Speech"))),
      () => ($i18n(), untrack(() => $i18n().t("Allow Call"))),
      () => ($i18n(), untrack(() => $i18n().t("Allow Multiple Models in Chat"))),
      () => ($i18n(), untrack(() => $i18n().t("Allow Temporary Chat"))),
      () => ($i18n(), untrack(() => $i18n().t("Features Permissions"))),
      () => ($i18n(), untrack(() => $i18n().t("API Keys"))),
      () => ($i18n(), untrack(() => $i18n().t("Direct Tool Servers"))),
      () => ($i18n(), untrack(() => $i18n().t("Web Search"))),
      () => ($i18n(), untrack(() => $i18n().t("Image Generation"))),
      () => ($i18n(), untrack(() => $i18n().t("Code Interpreter"))),
      () => ($i18n(), untrack(() => $i18n().t("Notes")))
    ]
  );
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root_1$2 = from_html(`<div class="my-10"><!></div>`);
var root_4$1 = from_html(`<span class="font-normal"><!></span>`);
var root_7$1 = from_html(`<span class="invisible"><!></span>`);
var root_8$1 = from_html(`<span class="font-normal"><!></span>`);
var root_11 = from_html(`<span class="invisible"><!></span>`);
var root_12 = from_html(`<span class="font-normal"><!></span>`);
var root_15$1 = from_html(`<span class="invisible"><!></span>`);
var root_16 = from_html(`<span class="font-normal"><!></span>`);
var root_19 = from_html(`<span class="invisible"><!></span>`);
var root_21 = from_html(`<div class="flex items-center"><img class="rounded-full w-6 h-6 object-cover mr-2.5 flex-shrink-0" alt="user"/> <div class="font-medium truncate"> </div></div>`);
var root_20 = from_html(`<tr class="bg-white dark:bg-gray-900 dark:border-gray-850 text-xs"><td class=" px-3 py-1 w-8"><div class="flex w-full justify-center"><!></div></td><td class="px-3 py-1 min-w-[7rem] w-28"><div class=" translate-y-0.5"><!></div></td><td class="px-3 py-1 font-medium text-gray-900 dark:text-white max-w-48"><!></td><td class=" px-3 py-1"> </td></tr>`);
var root_3$1 = from_html(`<div class="scrollbar-hidden relative whitespace-nowrap overflow-x-auto max-w-full"><table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto max-w-full"><thead class="text-xs text-gray-800 uppercase bg-transparent dark:text-gray-200"><tr class=" border-b-[1.5px] border-gray-50 dark:border-gray-850"><th scope="col" class="px-2.5 py-2 cursor-pointer text-left w-8"><div class="flex gap-1.5 items-center"> <!></div></th><th scope="col" class="px-2.5 py-2 cursor-pointer select-none"><div class="flex gap-1.5 items-center"> <!></div></th><th scope="col" class="px-2.5 py-2 cursor-pointer select-none"><div class="flex gap-1.5 items-center"> <!></div></th><th scope="col" class="px-2.5 py-2 cursor-pointer select-none"><div class="flex gap-1.5 items-center"> <!></div></th></tr></thead><tbody></tbody></table></div>`);
var root_22 = from_html(`<div class="text-gray-500 text-xs text-center py-2 px-10"> </div>`);
var root_2$1 = from_html(`<!> <!>`, 1);
var root$5 = from_html(`<div class=" max-h-full h-full w-full flex flex-col overflow-y-hidden"><div class="w-full h-fit mb-1.5"><div class="flex flex-1 h-fit"><div class=" self-center mr-3"><!></div> <input class=" w-full text-sm pr-4 rounded-r-xl outline-hidden bg-transparent"/></div></div> <!></div>`);
function Users$1($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  dayjs2.extend(relativeTime);
  dayjs2.extend(localizedFormat);
  let groupId = prop($$props, "groupId", 8);
  prop($$props, "userCount", 8, 0);
  let users = mutable_source(null);
  let total = mutable_source(null);
  let query = mutable_source("");
  let orderBy = mutable_source(
    `group_id:${groupId()}`
    // default sort key
  );
  let direction = mutable_source(
    "desc"
    // default sort order
  );
  let page2 = mutable_source(1);
  const setSortKey = (key) => {
    if (get(orderBy) === key) {
      set(direction, get(direction) === "asc" ? "desc" : "asc");
    } else {
      set(orderBy, key);
      set(direction, "asc");
    }
  };
  const getUserList = async () => {
    try {
      const res = await getUsers(localStorage.token, get(query), get(orderBy), get(direction), get(page2)).catch((error) => {
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
  const toggleMember = async (userId, state) => {
    if (state === "checked") {
      await addUserToGroup(localStorage.token, groupId(), [userId]).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
    } else {
      await removeUserFromGroup(localStorage.token, groupId(), [userId]).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
    }
    set(page2, 1);
    getUserList();
  };
  legacy_pre_effect(() => get(query), () => {
    if (get(query)) {
      set(page2, 1);
    }
  });
  legacy_pre_effect(() => (get(page2), get(query), get(orderBy), get(direction)), () => {
    if (get(page2) !== null && get(query) !== null && get(orderBy) !== null && get(direction) !== null) {
      getUserList();
    }
  });
  legacy_pre_effect_reset();
  init();
  var div = root$5();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var div_3 = child(div_2);
  var node = child(div_3);
  Search(node, {});
  reset(div_3);
  var input = sibling(div_3, 2);
  remove_input_defaults(input);
  reset(div_2);
  reset(div_1);
  var node_1 = sibling(div_1, 2);
  {
    var consequent = ($$anchor2) => {
      var div_4 = root_1$2();
      var node_2 = child(div_4);
      Spinner(node_2, { className: "size-5" });
      reset(div_4);
      append($$anchor2, div_4);
    };
    var alternate_9 = ($$anchor2) => {
      var fragment = root_2$1();
      var node_3 = first_child(fragment);
      {
        var consequent_9 = ($$anchor3) => {
          var div_5 = root_3$1();
          var table = child(div_5);
          var thead = child(table);
          var tr = child(thead);
          var th = child(tr);
          var div_6 = child(th);
          var text2 = child(div_6);
          var node_4 = sibling(text2);
          {
            var consequent_2 = ($$anchor4) => {
              var span = root_4$1();
              var node_5 = child(span);
              {
                var consequent_1 = ($$anchor5) => {
                  ChevronUp($$anchor5, { className: "size-2" });
                };
                var alternate = ($$anchor5) => {
                  ChevronDown($$anchor5, { className: "size-2" });
                };
                if_block(node_5, ($$render) => {
                  if (get(direction) === "asc") $$render(consequent_1);
                  else $$render(alternate, false);
                });
              }
              reset(span);
              append($$anchor4, span);
            };
            var alternate_1 = ($$anchor4) => {
              var span_1 = root_7$1();
              var node_6 = child(span_1);
              ChevronUp(node_6, { className: "size-2" });
              reset(span_1);
              append($$anchor4, span_1);
            };
            if_block(node_4, ($$render) => {
              if (get(orderBy) === `group_id:${groupId()}`) $$render(consequent_2);
              else $$render(alternate_1, false);
            });
          }
          reset(div_6);
          reset(th);
          var th_1 = sibling(th);
          var div_7 = child(th_1);
          var text_1 = child(div_7);
          var node_7 = sibling(text_1);
          {
            var consequent_4 = ($$anchor4) => {
              var span_2 = root_8$1();
              var node_8 = child(span_2);
              {
                var consequent_3 = ($$anchor5) => {
                  ChevronUp($$anchor5, { className: "size-2" });
                };
                var alternate_2 = ($$anchor5) => {
                  ChevronDown($$anchor5, { className: "size-2" });
                };
                if_block(node_8, ($$render) => {
                  if (get(direction) === "asc") $$render(consequent_3);
                  else $$render(alternate_2, false);
                });
              }
              reset(span_2);
              append($$anchor4, span_2);
            };
            var alternate_3 = ($$anchor4) => {
              var span_3 = root_11();
              var node_9 = child(span_3);
              ChevronUp(node_9, { className: "size-2" });
              reset(span_3);
              append($$anchor4, span_3);
            };
            if_block(node_7, ($$render) => {
              if (get(orderBy) === "role") $$render(consequent_4);
              else $$render(alternate_3, false);
            });
          }
          reset(div_7);
          reset(th_1);
          var th_2 = sibling(th_1);
          var div_8 = child(th_2);
          var text_2 = child(div_8);
          var node_10 = sibling(text_2);
          {
            var consequent_6 = ($$anchor4) => {
              var span_4 = root_12();
              var node_11 = child(span_4);
              {
                var consequent_5 = ($$anchor5) => {
                  ChevronUp($$anchor5, { className: "size-2" });
                };
                var alternate_4 = ($$anchor5) => {
                  ChevronDown($$anchor5, { className: "size-2" });
                };
                if_block(node_11, ($$render) => {
                  if (get(direction) === "asc") $$render(consequent_5);
                  else $$render(alternate_4, false);
                });
              }
              reset(span_4);
              append($$anchor4, span_4);
            };
            var alternate_5 = ($$anchor4) => {
              var span_5 = root_15$1();
              var node_12 = child(span_5);
              ChevronUp(node_12, { className: "size-2" });
              reset(span_5);
              append($$anchor4, span_5);
            };
            if_block(node_10, ($$render) => {
              if (get(orderBy) === "name") $$render(consequent_6);
              else $$render(alternate_5, false);
            });
          }
          reset(div_8);
          reset(th_2);
          var th_3 = sibling(th_2);
          var div_9 = child(th_3);
          var text_3 = child(div_9);
          var node_13 = sibling(text_3);
          {
            var consequent_8 = ($$anchor4) => {
              var span_6 = root_16();
              var node_14 = child(span_6);
              {
                var consequent_7 = ($$anchor5) => {
                  ChevronUp($$anchor5, { className: "size-2" });
                };
                var alternate_6 = ($$anchor5) => {
                  ChevronDown($$anchor5, { className: "size-2" });
                };
                if_block(node_14, ($$render) => {
                  if (get(direction) === "asc") $$render(consequent_7);
                  else $$render(alternate_6, false);
                });
              }
              reset(span_6);
              append($$anchor4, span_6);
            };
            var alternate_7 = ($$anchor4) => {
              var span_7 = root_19();
              var node_15 = child(span_7);
              ChevronUp(node_15, { className: "size-2" });
              reset(span_7);
              append($$anchor4, span_7);
            };
            if_block(node_13, ($$render) => {
              if (get(orderBy) === "last_active_at") $$render(consequent_8);
              else $$render(alternate_7, false);
            });
          }
          reset(div_9);
          reset(th_3);
          reset(tr);
          reset(thead);
          var tbody = sibling(thead);
          each(tbody, 7, () => get(users), (user2, userIdx) => (user2 == null ? void 0 : user2.id) ?? userIdx, ($$anchor4, user2) => {
            var tr_1 = root_20();
            var td = child(tr_1);
            var div_10 = child(td);
            var node_16 = child(div_10);
            {
              let $0 = derived_safe_equal(() => (get(user2), deep_read_state(groupId()), untrack(() => {
                var _a;
                return (((_a = get(user2)) == null ? void 0 : _a.group_ids) ?? []).includes(groupId()) ? "checked" : "unchecked";
              })));
              Checkbox(node_16, {
                get state() {
                  return get($0);
                },
                $$events: {
                  change: (e) => {
                    toggleMember(get(user2).id, e.detail);
                  }
                }
              });
            }
            reset(div_10);
            reset(td);
            var td_1 = sibling(td);
            var div_11 = child(td_1);
            var node_17 = child(div_11);
            {
              let $0 = derived_safe_equal(() => (get(user2), untrack(() => get(user2).role === "admin" ? "info" : get(user2).role === "user" ? "success" : "muted")));
              let $1 = derived_safe_equal(() => ($i18n(), get(user2), untrack(() => $i18n().t(get(user2).role))));
              Badge(node_17, {
                get type() {
                  return get($0);
                },
                get content() {
                  return get($1);
                }
              });
            }
            reset(div_11);
            reset(td_1);
            var td_2 = sibling(td_1);
            var node_18 = child(td_2);
            Tooltip(node_18, {
              get content() {
                return get(user2), untrack(() => get(user2).email);
              },
              placement: "top-start",
              children: ($$anchor5, $$slotProps) => {
                var div_12 = root_21();
                var img = child(div_12);
                var div_13 = sibling(img, 2);
                var text_4 = child(div_13, true);
                reset(div_13);
                reset(div_12);
                template_effect(() => {
                  set_attribute(img, "src", (deep_read_state(WEBUI_API_BASE_URL), get(user2), untrack(() => `${WEBUI_API_BASE_URL}/users/${get(user2).id}/profile/image`)));
                  set_text(text_4, (get(user2), untrack(() => get(user2).name)));
                });
                append($$anchor5, div_12);
              },
              $$slots: { default: true }
            });
            reset(td_2);
            var td_3 = sibling(td_2);
            var text_5 = child(td_3, true);
            reset(td_3);
            reset(tr_1);
            template_effect(($0) => set_text(text_5, $0), [
              () => (deep_read_state(dayjs2), get(user2), untrack(() => dayjs2(get(user2).last_active_at * 1e3).fromNow()))
            ]);
            append($$anchor4, tr_1);
          });
          reset(tbody);
          reset(table);
          reset(div_5);
          template_effect(
            ($0, $1, $2, $3) => {
              set_text(text2, `${$0 ?? ""} `);
              set_text(text_1, `${$1 ?? ""} `);
              set_text(text_2, `${$2 ?? ""} `);
              set_text(text_3, `${$3 ?? ""} `);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("MBR"))),
              () => ($i18n(), untrack(() => $i18n().t("Role"))),
              () => ($i18n(), untrack(() => $i18n().t("Name"))),
              () => ($i18n(), untrack(() => $i18n().t("Last Active")))
            ]
          );
          event("click", th, () => setSortKey(`group_id:${groupId()}`));
          event("click", th_1, () => setSortKey("role"));
          event("click", th_2, () => setSortKey("name"));
          event("click", th_3, () => setSortKey("last_active_at"));
          append($$anchor3, div_5);
        };
        var alternate_8 = ($$anchor3) => {
          var div_14 = root_22();
          var text_6 = child(div_14, true);
          reset(div_14);
          template_effect(($0) => set_text(text_6, $0), [
            () => ($i18n(), untrack(() => $i18n().t("No users were found.")))
          ]);
          append($$anchor3, div_14);
        };
        if_block(node_3, ($$render) => {
          if (get(users), untrack(() => get(users).length > 0)) $$render(consequent_9);
          else $$render(alternate_8, false);
        });
      }
      var node_19 = sibling(node_3, 2);
      {
        var consequent_10 = ($$anchor3) => {
          Pagination_1($$anchor3, {
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
        if_block(node_19, ($$render) => {
          if (get(total) > 30) $$render(consequent_10);
        });
      }
      append($$anchor2, fragment);
    };
    if_block(node_1, ($$render) => {
      if (get(users) === null || get(total) === null) $$render(consequent);
      else $$render(alternate_9, false);
    });
  }
  reset(div);
  template_effect(($0) => set_attribute(input, "placeholder", $0), [() => ($i18n(), untrack(() => $i18n().t("Search")))]);
  bind_value(input, () => get(query), ($$value) => set(query, $$value));
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root$4 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM1.615 16.428a1.224 1.224 0 0 1-.569-1.175 6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 0 1 7 18a9.953 9.953 0 0 1-5.385-1.572ZM16.25 5.75a.75.75 0 0 0-1.5 0v2h-2a.75.75 0 0 0 0 1.5h2v2a.75.75 0 0 0 1.5 0v-2h2a.75.75 0 0 0 0-1.5h-2v-2Z"></path></svg>`);
function UserPlusSolid($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  var svg = root$4();
  template_effect(() => set_class(svg, 0, clsx(className())));
  append($$anchor, svg);
}
var root$3 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clip-rule="evenodd"></path></svg>`);
function WrenchSolid($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  var svg = root$3();
  template_effect(() => set_class(svg, 0, clsx(className())));
  append($$anchor, svg);
}
var root_6 = from_html(`<button type="button"><div class=" self-center mr-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M6.955 1.45A.5.5 0 0 1 7.452 1h1.096a.5.5 0 0 1 .497.45l.17 1.699c.484.12.94.312 1.356.562l1.321-1.081a.5.5 0 0 1 .67.033l.774.775a.5.5 0 0 1 .034.67l-1.08 1.32c.25.417.44.873.561 1.357l1.699.17a.5.5 0 0 1 .45.497v1.096a.5.5 0 0 1-.45.497l-1.699.17c-.12.484-.312.94-.562 1.356l1.082 1.322a.5.5 0 0 1-.034.67l-.774.774a.5.5 0 0 1-.67.033l-1.322-1.08c-.416.25-.872.44-1.356.561l-.17 1.699a.5.5 0 0 1-.497.45H7.452a.5.5 0 0 1-.497-.45l-.17-1.699a4.973 4.973 0 0 1-1.356-.562L4.108 13.37a.5.5 0 0 1-.67-.033l-.774-.775a.5.5 0 0 1-.034-.67l1.08-1.32a4.971 4.971 0 0 1-.561-1.357l-1.699-.17A.5.5 0 0 1 1 8.548V7.452a.5.5 0 0 1 .45-.497l1.699-.17c.12-.484.312-.94.562-1.356L2.629 4.107a.5.5 0 0 1 .034-.67l.774-.774a.5.5 0 0 1 .67-.033L5.43 3.71a4.97 4.97 0 0 1 1.356-.561l.17-1.699ZM6 8c0 .538.212 1.026.558 1.385l.057.057a2 2 0 0 0 2.828-2.828l-.058-.056A2 2 0 0 0 6 8Z" clip-rule="evenodd"></path></svg></div> <div class=" self-center"> </div></button>`);
var root_7 = from_html(`<button type="button"><div class=" self-center mr-2"><!></div> <div class=" self-center"> </div></button>`);
var root_8 = from_html(`<button type="button"><div class=" self-center mr-2"><!></div> <div class=" self-center"> </div></button>`);
var root_15 = from_html(`<div class="ml-2 self-center"><!></div>`);
var root_14 = from_html(`<div class="flex justify-end pt-3 text-sm font-medium gap-1.5"><button type="submit"> <!></button></div>`);
var root_1$1 = from_html(`<div><div class=" flex justify-between dark:text-gray-100 px-5 pt-4 mb-1.5"><div class=" text-lg font-medium self-center font-primary"><!></div> <button class="self-center"><!></button></div> <div class="flex flex-col md:flex-row w-full px-4 pb-4 md:space-x-4 dark:text-gray-200"><div class=" flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div class="flex flex-col lg:flex-row w-full h-full pb-2 lg:space-x-4"><div id="admin-settings-tabs-container" class="tabs flex flex-row overflow-x-auto gap-2.5 max-w-full lg:gap-1 lg:flex-col lg:flex-none lg:w-40 dark:text-gray-200 text-sm font-medium text-left scrollbar-none"><!> <!> <!></div> <div class="flex-1 mt-1 lg:mt-1 lg:h-[30rem] lg:max-h-[30rem] flex flex-col"><div class="w-full h-full overflow-y-auto scrollbar-hidden"><!></div> <!></div></div></form></div></div></div>`);
var root$2 = from_html(`<!> <!>`, 1);
function EditGroupModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let onSubmit = prop($$props, "onSubmit", 8, () => {
  });
  let onDelete = prop($$props, "onDelete", 8, () => {
  });
  let show = prop($$props, "show", 12, false);
  let edit = prop($$props, "edit", 8, false);
  let group = prop($$props, "group", 8, null);
  let defaultPermissions = prop($$props, "defaultPermissions", 24, () => ({}));
  let custom = prop($$props, "custom", 8, true);
  let tabs = prop($$props, "tabs", 24, () => ["general", "permissions", "users"]);
  let selectedTab = mutable_source("general");
  let loading = mutable_source(false);
  let showDeleteConfirmDialog = mutable_source(false);
  let userCount = mutable_source(0);
  let name = prop($$props, "name", 12, "");
  let description = prop($$props, "description", 12, "");
  let data = prop($$props, "data", 28, () => ({}));
  let permissions = prop($$props, "permissions", 28, () => ({
    workspace: {
      models: false,
      knowledge: false,
      prompts: false,
      tools: false,
      models_import: false,
      models_export: false,
      prompts_import: false,
      prompts_export: false,
      tools_import: false,
      tools_export: false
    },
    sharing: {
      models: false,
      public_models: false,
      knowledge: false,
      public_knowledge: false,
      prompts: false,
      public_prompts: false,
      tools: false,
      public_tools: false,
      notes: false,
      public_notes: false
    },
    chat: {
      controls: true,
      valves: true,
      system_prompt: true,
      params: true,
      file_upload: true,
      delete: true,
      delete_message: true,
      continue_response: true,
      regenerate_response: true,
      rate_response: true,
      edit: true,
      share: true,
      export: true,
      stt: true,
      tts: true,
      call: true,
      multiple_models: true,
      temporary: true,
      temporary_enforced: false
    },
    features: {
      api_keys: false,
      direct_tool_servers: false,
      web_search: true,
      image_generation: true,
      code_interpreter: true,
      notes: true
    }
  }));
  const submitHandler = async () => {
    set(loading, true);
    const group2 = {
      name: name(),
      description: description(),
      data: data(),
      permissions: permissions()
    };
    await onSubmit()(group2);
    set(loading, false);
    show(false);
  };
  const init$1 = () => {
    var _a, _b, _c;
    if (group()) {
      name(group().name);
      description(group().description);
      permissions(((_a = group()) == null ? void 0 : _a.permissions) ?? {});
      data(((_b = group()) == null ? void 0 : _b.data) ?? {});
      set(userCount, ((_c = group()) == null ? void 0 : _c.member_count) ?? 0);
    }
  };
  onMount(() => {
    set(selectedTab, tabs()[0]);
    init$1();
  });
  legacy_pre_effect(() => deep_read_state(show()), () => {
    if (show()) {
      init$1();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root$2();
  var node = first_child(fragment);
  ConfirmDialog(node, {
    get show() {
      return get(showDeleteConfirmDialog);
    },
    set show($$value) {
      set(showDeleteConfirmDialog, $$value);
    },
    $$events: {
      confirm: () => {
        onDelete()();
        show(false);
      }
    },
    $$legacy: true
  });
  var node_1 = sibling(node, 2);
  Modal(node_1, {
    size: "lg",
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
      var node_2 = child(div_2);
      {
        var consequent_1 = ($$anchor3) => {
          var fragment_1 = comment();
          var node_3 = first_child(fragment_1);
          {
            var consequent = ($$anchor4) => {
              var text$1 = text();
              template_effect(($0) => set_text(text$1, $0), [
                () => ($i18n(), untrack(() => $i18n().t("Edit User Group")))
              ]);
              append($$anchor4, text$1);
            };
            var alternate = ($$anchor4) => {
              var text_1 = text();
              template_effect(($0) => set_text(text_1, $0), [
                () => ($i18n(), untrack(() => $i18n().t("Add User Group")))
              ]);
              append($$anchor4, text_1);
            };
            if_block(node_3, ($$render) => {
              if (edit()) $$render(consequent);
              else $$render(alternate, false);
            });
          }
          append($$anchor3, fragment_1);
        };
        var alternate_1 = ($$anchor3) => {
          var text_2 = text();
          template_effect(($0) => set_text(text_2, $0), [
            () => ($i18n(), untrack(() => $i18n().t("Edit Default Permissions")))
          ]);
          append($$anchor3, text_2);
        };
        if_block(node_2, ($$render) => {
          if (custom()) $$render(consequent_1);
          else $$render(alternate_1, false);
        });
      }
      reset(div_2);
      var button = sibling(div_2, 2);
      var node_4 = child(button);
      XMark(node_4, { className: "size-5" });
      reset(button);
      reset(div_1);
      var div_3 = sibling(div_1, 2);
      var div_4 = child(div_3);
      var form = child(div_4);
      var div_5 = child(form);
      var div_6 = child(div_5);
      var node_5 = child(div_6);
      {
        var consequent_2 = ($$anchor3) => {
          var button_1 = root_6();
          var div_7 = sibling(child(button_1), 2);
          var text_3 = child(div_7, true);
          reset(div_7);
          reset(button_1);
          template_effect(
            ($0) => {
              set_class(button_1, 1, `px-0.5 py-1 max-w-fit w-fit rounded-lg flex-1 lg:flex-none flex text-right transition ${get(selectedTab) === "general" ? "" : " text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"}`);
              set_text(text_3, $0);
            },
            [() => ($i18n(), untrack(() => $i18n().t("General")))]
          );
          event("click", button_1, () => {
            set(selectedTab, "general");
          });
          append($$anchor3, button_1);
        };
        if_block(node_5, ($$render) => {
          if (deep_read_state(tabs()), untrack(() => tabs().includes("general"))) $$render(consequent_2);
        });
      }
      var node_6 = sibling(node_5, 2);
      {
        var consequent_3 = ($$anchor3) => {
          var button_2 = root_7();
          var div_8 = child(button_2);
          var node_7 = child(div_8);
          WrenchSolid(node_7, {});
          reset(div_8);
          var div_9 = sibling(div_8, 2);
          var text_4 = child(div_9, true);
          reset(div_9);
          reset(button_2);
          template_effect(
            ($0) => {
              set_class(button_2, 1, `px-0.5 py-1 max-w-fit w-fit rounded-lg flex-1 lg:flex-none flex text-right transition ${get(selectedTab) === "permissions" ? "" : " text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"}`);
              set_text(text_4, $0);
            },
            [() => ($i18n(), untrack(() => $i18n().t("Permissions")))]
          );
          event("click", button_2, () => {
            set(selectedTab, "permissions");
          });
          append($$anchor3, button_2);
        };
        if_block(node_6, ($$render) => {
          if (deep_read_state(tabs()), untrack(() => tabs().includes("permissions"))) $$render(consequent_3);
        });
      }
      var node_8 = sibling(node_6, 2);
      {
        var consequent_4 = ($$anchor3) => {
          var button_3 = root_8();
          var div_10 = child(button_3);
          var node_9 = child(div_10);
          UserPlusSolid(node_9, {});
          reset(div_10);
          var div_11 = sibling(div_10, 2);
          var text_5 = child(div_11, true);
          reset(div_11);
          reset(button_3);
          template_effect(
            ($0) => {
              set_class(button_3, 1, `px-0.5 py-1 max-w-fit w-fit rounded-lg flex-1 lg:flex-none flex text-right transition ${get(selectedTab) === "users" ? "" : " text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"}`);
              set_text(text_5, $0);
            },
            [() => ($i18n(), untrack(() => $i18n().t("Users")))]
          );
          event("click", button_3, () => {
            set(selectedTab, "users");
          });
          append($$anchor3, button_3);
        };
        if_block(node_8, ($$render) => {
          if (deep_read_state(tabs()), untrack(() => tabs().includes("users"))) $$render(consequent_4);
        });
      }
      reset(div_6);
      var div_12 = sibling(div_6, 2);
      var div_13 = child(div_12);
      var node_10 = child(div_13);
      {
        var consequent_5 = ($$anchor3) => {
          General($$anchor3, {
            get edit() {
              return edit();
            },
            onDelete: () => {
              set(showDeleteConfirmDialog, true);
            },
            get name() {
              return name();
            },
            set name($$value) {
              name($$value);
            },
            get description() {
              return description();
            },
            set description($$value) {
              description($$value);
            },
            get data() {
              return data();
            },
            set data($$value) {
              data($$value);
            },
            $$legacy: true
          });
        };
        var alternate_3 = ($$anchor3) => {
          var fragment_6 = comment();
          var node_11 = first_child(fragment_6);
          {
            var consequent_6 = ($$anchor4) => {
              Permissions($$anchor4, {
                get defaultPermissions() {
                  return defaultPermissions();
                },
                get permissions() {
                  return permissions();
                },
                set permissions($$value) {
                  permissions($$value);
                },
                $$legacy: true
              });
            };
            var alternate_2 = ($$anchor4) => {
              var fragment_8 = comment();
              var node_12 = first_child(fragment_8);
              {
                var consequent_7 = ($$anchor5) => {
                  {
                    let $0 = derived_safe_equal(() => (deep_read_state(group()), untrack(() => {
                      var _a;
                      return (_a = group()) == null ? void 0 : _a.id;
                    })));
                    Users$1($$anchor5, {
                      get groupId() {
                        return get($0);
                      },
                      get userCount() {
                        return get(userCount);
                      },
                      set userCount($$value) {
                        set(userCount, $$value);
                      },
                      $$legacy: true
                    });
                  }
                };
                if_block(
                  node_12,
                  ($$render) => {
                    if (get(selectedTab) == "users") $$render(consequent_7);
                  },
                  true
                );
              }
              append($$anchor4, fragment_8);
            };
            if_block(
              node_11,
              ($$render) => {
                if (get(selectedTab) == "permissions") $$render(consequent_6);
                else $$render(alternate_2, false);
              },
              true
            );
          }
          append($$anchor3, fragment_6);
        };
        if_block(node_10, ($$render) => {
          if (get(selectedTab) == "general") $$render(consequent_5);
          else $$render(alternate_3, false);
        });
      }
      reset(div_13);
      var node_13 = sibling(div_13, 2);
      {
        var consequent_9 = ($$anchor3) => {
          var div_14 = root_14();
          var button_4 = child(div_14);
          var text_6 = child(button_4);
          var node_14 = sibling(text_6);
          {
            var consequent_8 = ($$anchor4) => {
              var div_15 = root_15();
              var node_15 = child(div_15);
              Spinner(node_15, {});
              reset(div_15);
              append($$anchor4, div_15);
            };
            if_block(node_14, ($$render) => {
              if (get(loading)) $$render(consequent_8);
            });
          }
          reset(button_4);
          reset(div_14);
          template_effect(
            ($0) => {
              set_class(button_4, 1, `px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center ${get(loading) ? " cursor-not-allowed" : ""}`);
              button_4.disabled = get(loading);
              set_text(text_6, `${$0 ?? ""} `);
            },
            [() => ($i18n(), untrack(() => $i18n().t("Save")))]
          );
          append($$anchor3, div_14);
        };
        if_block(node_13, ($$render) => {
          if (get(selectedTab), untrack(() => ["general", "permissions"].includes(get(selectedTab)))) $$render(consequent_9);
        });
      }
      reset(div_12);
      reset(div_5);
      reset(form);
      reset(div_4);
      reset(div_3);
      reset(div);
      event("click", button, () => {
        show(false);
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
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root$1 = from_html(`<!> <button class="flex items-center gap-3 justify-between px-1 text-xs w-full transition"><div class="flex items-center gap-1.5 w-full font-medium flex-1"><div><!></div> <div class="line-clamp-1"> </div></div> <div class="flex items-center gap-1.5 w-fit font-medium text-right justify-end"> <div><!></div> <div class=" rounded-lg p-1 hover:bg-gray-100 dark:hover:bg-gray-850 transition"><!></div></div></button>`, 1);
function GroupItem($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $page = () => store_get(page, "$page", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let group = prop($$props, "group", 24, () => ({ name: "Admins", user_ids: [1, 2, 3] }));
  let defaultPermissions = prop($$props, "defaultPermissions", 24, () => ({}));
  let setGroups = prop($$props, "setGroups", 8, () => {
  });
  let showEdit = mutable_source(false);
  const updateHandler = async (_group) => {
    const res = await updateGroupById(localStorage.token, group().id, _group).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      toast.success($i18n().t("Group updated successfully"));
      setGroups()();
    }
  };
  const deleteHandler = async () => {
    const res = await deleteGroupById(localStorage.token, group().id).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      toast.success($i18n().t("Group deleted successfully"));
      setGroups()();
    }
  };
  onMount(() => {
    const groupId = $page().url.searchParams.get("id");
    if (groupId && groupId === group().id) {
      set(showEdit, true);
    }
  });
  init();
  var fragment = root$1();
  var node = first_child(fragment);
  EditGroupModal(node, {
    edit: true,
    get group() {
      return group();
    },
    get defaultPermissions() {
      return defaultPermissions();
    },
    onSubmit: updateHandler,
    onDelete: deleteHandler,
    get show() {
      return get(showEdit);
    },
    set show($$value) {
      set(showEdit, $$value);
    },
    $$legacy: true
  });
  var button = sibling(node, 2);
  var div = child(button);
  var div_1 = child(div);
  var node_1 = child(div_1);
  UserCircleSolid(node_1, { className: "size-4" });
  reset(div_1);
  var div_2 = sibling(div_1, 2);
  var text2 = child(div_2, true);
  reset(div_2);
  reset(div);
  var div_3 = sibling(div, 2);
  var text_1 = child(div_3);
  var div_4 = sibling(text_1);
  var node_2 = child(div_4);
  User(node_2, { className: "size-3.5" });
  reset(div_4);
  var div_5 = sibling(div_4, 2);
  var node_3 = child(div_5);
  Pencil(node_3, { className: "size-3.5" });
  reset(div_5);
  reset(div_3);
  reset(button);
  template_effect(() => {
    set_text(text2, (deep_read_state(group()), untrack(() => group().name)));
    set_text(text_1, `${(deep_read_state(group()), untrack(() => {
      var _a;
      return (_a = group()) == null ? void 0 : _a.member_count;
    })) ?? ""} `);
  });
  event("click", button, () => {
    set(showEdit, true);
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_2 = from_html(`<button class=" p-2 rounded-xl hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-850 transition font-medium text-sm flex items-center space-x-1"><!></button>`);
var root_3 = from_html(`<div class="flex flex-col items-center justify-center h-40"><div class=" text-xl font-medium"> </div> <div class="mt-1 text-sm dark:text-gray-300"> </div> <div class="mt-3"><button class=" px-4 py-1.5 text-sm rounded-full bg-black hover:bg-gray-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition font-medium flex items-center space-x-1"> </button></div></div>`);
var root_5 = from_html(`<div class="my-2"><!></div>`);
var root_4 = from_html(`<div><div class=" flex items-center gap-3 justify-between text-xs uppercase px-1 font-medium"><div class="w-full basis-3/5"> </div> <div class="w-full basis-2/5 text-right"> </div></div> <hr class="mt-1.5 border-gray-100 dark:border-gray-850"/> <!></div>`);
var root_1 = from_html(`<!> <div class="mt-0.5 mb-2 gap-1 flex flex-col md:flex-row justify-between"><div class="flex items-center md:self-center text-xl font-medium px-0.5 gap-2 shrink-0"><div> </div> <div class="text-lg font-medium text-gray-500 dark:text-gray-500"> </div></div> <div class="flex gap-1"><div class=" flex w-full space-x-2"><div class="flex flex-1"><div class=" self-center ml-1 mr-3"><!></div> <input class=" w-full text-sm pr-4 py-1 rounded-r-xl outline-hidden bg-transparent"/></div> <div><!></div></div></div></div> <div><!> <hr class="mb-2 border-gray-100 dark:border-gray-850"/> <!> <button class="flex items-center justify-between rounded-lg w-full transition pt-1"><div class="flex items-center gap-2.5"><div class="p-1.5 bg-black/5 dark:bg-white/10 rounded-full"><!></div> <div class="text-left"><div class=" text-sm font-medium"> </div> <div class="flex text-xs mt-0.5"> </div></div></div> <div><!></div></button></div>`, 1);
function Groups($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  dayjs2.extend(relativeTime);
  const i18n = getContext("i18n");
  let loaded = mutable_source(false);
  let groups = mutable_source([]);
  let filteredGroups = mutable_source();
  let search = mutable_source("");
  let defaultPermissions = mutable_source({});
  let showAddGroupModal = mutable_source(false);
  let showDefaultPermissionsModal = mutable_source(false);
  const setGroups = async () => {
    set(groups, await getGroups(localStorage.token));
  };
  const addGroupHandler = async (group) => {
    const res = await createNewGroup(localStorage.token, group).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      toast.success($i18n().t("Group created successfully"));
      set(groups, await getGroups(localStorage.token));
    }
  };
  const updateDefaultPermissionsHandler = async (group) => {
    console.debug(group.permissions);
    const res = await updateUserDefaultPermissions(localStorage.token, group.permissions).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      toast.success($i18n().t("Default permissions updated successfully"));
      set(defaultPermissions, await getUserDefaultPermissions(localStorage.token));
    }
  };
  onMount(async () => {
    var _a;
    if (((_a = $user()) == null ? void 0 : _a.role) !== "admin") {
      await goto("/");
      return;
    }
    set(defaultPermissions, await getUserDefaultPermissions(localStorage.token));
    await setGroups();
    set(loaded, true);
  });
  legacy_pre_effect(() => (get(groups), get(search)), () => {
    set(filteredGroups, get(groups).filter((user2) => {
      if (get(search) === "") {
        return true;
      } else {
        let name = user2.name.toLowerCase();
        const query = get(search).toLowerCase();
        return name.includes(query);
      }
    }));
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_1 = ($$anchor2) => {
      var fragment_1 = root_1();
      var node_1 = first_child(fragment_1);
      EditGroupModal(node_1, {
        edit: false,
        get permissions() {
          return get(defaultPermissions);
        },
        onSubmit: addGroupHandler,
        get show() {
          return get(showAddGroupModal);
        },
        set show($$value) {
          set(showAddGroupModal, $$value);
        },
        $$legacy: true
      });
      var div = sibling(node_1, 2);
      var div_1 = child(div);
      var div_2 = child(div_1);
      var text2 = child(div_2, true);
      reset(div_2);
      var div_3 = sibling(div_2, 2);
      var text_1 = child(div_3, true);
      reset(div_3);
      reset(div_1);
      var div_4 = sibling(div_1, 2);
      var div_5 = child(div_4);
      var div_6 = child(div_5);
      var div_7 = child(div_6);
      var node_2 = child(div_7);
      Search(node_2, {});
      reset(div_7);
      var input = sibling(div_7, 2);
      remove_input_defaults(input);
      reset(div_6);
      var div_8 = sibling(div_6, 2);
      var node_3 = child(div_8);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Create Group"))));
        Tooltip(node_3, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps) => {
            var button = root_2();
            var node_4 = child(button);
            Plus(node_4, { className: "size-3.5" });
            reset(button);
            event("click", button, () => {
              set(showAddGroupModal, !get(showAddGroupModal));
            });
            append($$anchor3, button);
          },
          $$slots: { default: true }
        });
      }
      reset(div_8);
      reset(div_5);
      reset(div_4);
      reset(div);
      var div_9 = sibling(div, 2);
      var node_5 = child(div_9);
      {
        var consequent = ($$anchor3) => {
          var div_10 = root_3();
          var div_11 = child(div_10);
          var text_2 = child(div_11, true);
          reset(div_11);
          var div_12 = sibling(div_11, 2);
          var text_3 = child(div_12, true);
          reset(div_12);
          var div_13 = sibling(div_12, 2);
          var button_1 = child(div_13);
          var text_4 = child(button_1, true);
          reset(button_1);
          reset(div_13);
          reset(div_10);
          template_effect(
            ($0, $1, $2, $3) => {
              set_text(text_2, $0);
              set_text(text_3, $1);
              set_attribute(button_1, "aria-label", $2);
              set_text(text_4, $3);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Organize your users"))),
              () => ($i18n(), untrack(() => $i18n().t("Use groups to group your users and assign permissions."))),
              () => ($i18n(), untrack(() => $i18n().t("Create Group"))),
              () => ($i18n(), untrack(() => $i18n().t("Create Group")))
            ]
          );
          event("click", button_1, () => {
            set(showAddGroupModal, true);
          });
          append($$anchor3, div_10);
        };
        var alternate = ($$anchor3) => {
          var div_14 = root_4();
          var div_15 = child(div_14);
          var div_16 = child(div_15);
          var text_5 = child(div_16, true);
          reset(div_16);
          var div_17 = sibling(div_16, 2);
          var text_6 = child(div_17, true);
          reset(div_17);
          reset(div_15);
          var node_6 = sibling(div_15, 4);
          each(node_6, 1, () => get(filteredGroups), index, ($$anchor4, group) => {
            var div_18 = root_5();
            var node_7 = child(div_18);
            GroupItem(node_7, {
              get group() {
                return get(group);
              },
              setGroups,
              get defaultPermissions() {
                return get(defaultPermissions);
              }
            });
            reset(div_18);
            append($$anchor4, div_18);
          });
          reset(div_14);
          template_effect(
            ($0, $1) => {
              set_text(text_5, $0);
              set_text(text_6, $1);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Group"))),
              () => ($i18n(), untrack(() => $i18n().t("Users")))
            ]
          );
          append($$anchor3, div_14);
        };
        if_block(node_5, ($$render) => {
          if (get(filteredGroups), untrack(() => get(filteredGroups).length === 0)) $$render(consequent);
          else $$render(alternate, false);
        });
      }
      var node_8 = sibling(node_5, 4);
      EditGroupModal(node_8, {
        tabs: ["permissions"],
        custom: false,
        onSubmit: updateDefaultPermissionsHandler,
        get show() {
          return get(showDefaultPermissionsModal);
        },
        set show($$value) {
          set(showDefaultPermissionsModal, $$value);
        },
        get permissions() {
          return get(defaultPermissions);
        },
        set permissions($$value) {
          set(defaultPermissions, $$value);
        },
        $$legacy: true
      });
      var button_2 = sibling(node_8, 2);
      var div_19 = child(button_2);
      var div_20 = child(div_19);
      var node_9 = child(div_20);
      UsersSolid(node_9, { className: "size-4" });
      reset(div_20);
      var div_21 = sibling(div_20, 2);
      var div_22 = child(div_21);
      var text_7 = child(div_22, true);
      reset(div_22);
      var div_23 = sibling(div_22, 2);
      var text_8 = child(div_23, true);
      reset(div_23);
      reset(div_21);
      reset(div_19);
      var div_24 = sibling(div_19, 2);
      var node_10 = child(div_24);
      ChevronRight(node_10, { strokeWidth: "2.5" });
      reset(div_24);
      reset(button_2);
      reset(div_9);
      template_effect(
        ($0, $1, $2, $3) => {
          set_text(text2, $0);
          set_text(text_1, (get(groups), untrack(() => get(groups).length)));
          set_attribute(input, "placeholder", $1);
          set_text(text_7, $2);
          set_text(text_8, $3);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Groups"))),
          () => ($i18n(), untrack(() => $i18n().t("Search"))),
          () => ($i18n(), untrack(() => $i18n().t("Default permissions"))),
          () => ($i18n(), untrack(() => $i18n().t('applies to all users with the "user" role')))
        ]
      );
      bind_value(input, () => get(search), ($$value) => set(search, $$value));
      event("click", button_2, () => {
        set(showDefaultPermissionsModal, true);
      });
      append($$anchor2, fragment_1);
    };
    if_block(node, ($$render) => {
      if (get(loaded)) $$render(consequent_1);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root = from_html(`<div class="flex flex-col lg:flex-row w-full h-full pb-2 lg:space-x-4"><div id="users-tabs-container" class="mx-[16px] lg:mx-0 lg:px-[16px] flex flex-row overflow-x-auto gap-2.5 max-w-full lg:gap-1 lg:flex-col lg:flex-none lg:w-50 dark:text-gray-200 text-sm font-medium text-left scrollbar-none"><button id="overview"><div class=" self-center mr-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4"><path d="M8.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10.9 12.006c.11.542-.348.994-.9.994H2c-.553 0-1.01-.452-.902-.994a5.002 5.002 0 0 1 9.803 0ZM14.002 12h-1.59a2.556 2.556 0 0 0-.04-.29 6.476 6.476 0 0 0-1.167-2.603 3.002 3.002 0 0 1 3.633 1.911c.18.522-.283.982-.836.982ZM12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path></svg></div> <div class=" self-center"> </div></button> <button id="groups"><div class=" self-center mr-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4"><path d="M8 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3.156 11.763c.16-.629.44-1.21.813-1.72a2.5 2.5 0 0 0-2.725 1.377c-.136.287.102.58.418.58h1.449c.01-.077.025-.156.045-.237ZM12.847 11.763c.02.08.036.16.046.237h1.446c.316 0 .554-.293.417-.579a2.5 2.5 0 0 0-2.722-1.378c.374.51.653 1.09.813 1.72ZM14 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 13c-.552 0-1.013-.455-.876-.99a4.002 4.002 0 0 1 7.753 0c.136.535-.324.99-.877.99H5Z"></path></svg></div> <div class=" self-center"> </div></button></div> <div class="flex-1 mt-1 lg:mt-0 px-[16px] lg:pr-[16px] lg:pl-0 overflow-y-scroll"><!></div></div>`);
function Users($$anchor, $$props) {
  push($$props, false);
  const $page = () => store_get(page, "$page", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let selectedTab = mutable_source();
  const scrollToTab = (tabId) => {
    const tabElement = document.getElementById(tabId);
    if (tabElement) {
      tabElement.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    }
  };
  onMount(async () => {
    var _a;
    if (((_a = $user()) == null ? void 0 : _a.role) !== "admin") {
      await goto("/");
    }
    const containerElement = document.getElementById("users-tabs-container");
    if (containerElement) {
      containerElement.addEventListener("wheel", function(event2) {
        if (event2.deltaY !== 0) {
          containerElement.scrollLeft += event2.deltaY;
        }
      });
    }
    scrollToTab(get(selectedTab));
  });
  legacy_pre_effect(() => $page(), () => {
    const pathParts = $page().url.pathname.split("/");
    const tabFromPath = pathParts[pathParts.length - 1];
    set(selectedTab, ["overview", "groups"].includes(tabFromPath) ? tabFromPath : "overview");
  });
  legacy_pre_effect(() => get(selectedTab), () => {
    if (get(selectedTab)) {
      scrollToTab(get(selectedTab));
    }
  });
  legacy_pre_effect_reset();
  init();
  var div = root();
  var div_1 = child(div);
  var button = child(div_1);
  var div_2 = sibling(child(button), 2);
  var text2 = child(div_2, true);
  reset(div_2);
  reset(button);
  var button_1 = sibling(button, 2);
  var div_3 = sibling(child(button_1), 2);
  var text_1 = child(div_3, true);
  reset(div_3);
  reset(button_1);
  reset(div_1);
  var div_4 = sibling(div_1, 2);
  var node = child(div_4);
  {
    var consequent = ($$anchor2) => {
      UserList($$anchor2, {});
    };
    var alternate = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      {
        var consequent_1 = ($$anchor3) => {
          Groups($$anchor3, {});
        };
        if_block(
          node_1,
          ($$render) => {
            if (get(selectedTab) === "groups") $$render(consequent_1);
          },
          true
        );
      }
      append($$anchor2, fragment_1);
    };
    if_block(node, ($$render) => {
      if (get(selectedTab) === "overview") $$render(consequent);
      else $$render(alternate, false);
    });
  }
  reset(div_4);
  reset(div);
  template_effect(
    ($0, $1) => {
      set_class(button, 1, `px-0.5 py-1 min-w-fit rounded-lg lg:flex-none flex text-right transition ${get(selectedTab) === "overview" ? "" : " text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"}`);
      set_text(text2, $0);
      set_class(button_1, 1, `px-0.5 py-1 min-w-fit rounded-lg lg:flex-none flex text-right transition ${get(selectedTab) === "groups" ? "" : " text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"}`);
      set_text(text_1, $1);
    },
    [
      () => ($i18n(), untrack(() => $i18n().t("Overview"))),
      () => ($i18n(), untrack(() => $i18n().t("Groups")))
    ]
  );
  event("click", button, () => {
    goto("/admin/users/overview");
  });
  event("click", button_1, () => {
    goto("/admin/users/groups");
  });
  append($$anchor, div);
  pop();
  $$cleanup();
}
export {
  Users as U
};
