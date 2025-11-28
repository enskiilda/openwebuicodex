import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, g as getContext, o as onMount, l as legacy_pre_effect, j as legacy_pre_effect_reset, c as child, t as template_effect, a as pop, i as deep_read_state, e as sibling, u as untrack, s as set, m as mutable_source, r as reset, f as first_child, b as get, aE as invalidate_inner_signals, h as derived_safe_equal } from "./BxIY6ir7.js";
import { e as event, s as set_text } from "./cBADewWV.js";
import { e as each, i as index } from "./7_HZMPNF.js";
import { i as if_block } from "./BoSuMvtf.js";
import { f as from_html, a as append, b as from_svg, t as text, c as comment } from "./CAbo1QWi.js";
import { i as init_select, b as select_option, s as set_class, d as bind_select_value } from "./kXiCYuyj.js";
import { i as init } from "./ByqEASoO.js";
import { p as prop } from "./BRmGPDvq.js";
import { s as setup_stores, a as store_get } from "./BvQ5O7-v.js";
import { g as getGroups } from "./D8Q8X2hm.js";
import "./bQFTtKkZ.js";
import { U as UserCircleSolid } from "./CIK4JG9S.js";
import { X as XMark } from "./CUUSX84-.js";
import { B as Badge } from "./DGk_635a.js";
var root_1 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"></path></svg>`);
var root_2 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"></path></svg>`);
var root_3 = from_html(`<option class=" text-gray-700" selected> </option>`);
var root_8 = from_html(`<option class=" text-gray-700"> </option>`);
var root_10 = from_html(`<div class="flex items-center gap-3 justify-between text-xs w-full transition"><div class="flex items-center gap-1.5 w-full font-medium"><div><!></div> <div> </div></div> <div class="w-full flex justify-end items-center gap-0.5"><button type="button"><!></button> <button class=" rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-850 transition" type="button"><!></button></div></div>`);
var root_13 = from_html(`<div class="flex items-center justify-center"><div class="text-gray-500 text-xs text-center py-2 px-10"> </div></div>`);
var root_7 = from_html(`<div><div><div class="flex justify-between mb-1.5"><div class="text-sm font-medium"> </div></div> <div class="mb-1"><div class="flex w-full"><div class="flex flex-1 items-center"><div class="w-full px-0.5"><select><option class=" text-gray-700" disabled selected> </option><!></select></div></div></div></div> <hr class=" border-gray-100 dark:border-gray-700/10 mt-1.5 mb-2.5 w-full"/> <div class="flex flex-col gap-2 mb-1 px-0.5"><!></div></div></div>`);
var root = from_html(`<div class=" rounded-lg flex flex-col gap-2"><div><div class=" text-sm font-medium mb-1.5"> </div> <div class="flex gap-2.5 items-center mb-1"><div><div class=" p-2 bg-black/5 dark:bg-white/5 rounded-full"><!></div></div> <div><select id="models" class="outline-hidden bg-transparent text-sm font-medium rounded-lg block w-fit pr-10 max-w-full placeholder-gray-400"><option class=" text-gray-700" selected> </option><!></select> <div class=" text-xs text-gray-400 font-medium"><!></div></div></div></div> <!></div>`);
function AccessControl($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let onChange = prop($$props, "onChange", 8, () => {
  });
  let accessRoles = prop($$props, "accessRoles", 24, () => ["read"]);
  let accessControl = prop($$props, "accessControl", 28, () => ({}));
  let share = prop($$props, "share", 8, true);
  let sharePublic = prop($$props, "sharePublic", 8, true);
  let selectedGroupId = mutable_source("");
  let groups = mutable_source([]);
  const initPublicAccess = () => {
    if (!sharePublic() && accessControl() === null) {
      accessControl({
        read: { group_ids: [], user_ids: [] },
        write: { group_ids: [], user_ids: [] }
      });
      onChange()(accessControl());
    }
  };
  onMount(async () => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    set(groups, await getGroups(localStorage.token, true));
    if (accessControl() === null) {
      initPublicAccess();
    } else {
      accessControl({
        read: {
          group_ids: ((_b = (_a = accessControl()) == null ? void 0 : _a.read) == null ? void 0 : _b.group_ids) ?? [],
          user_ids: ((_d = (_c = accessControl()) == null ? void 0 : _c.read) == null ? void 0 : _d.user_ids) ?? []
        },
        write: {
          group_ids: ((_f = (_e = accessControl()) == null ? void 0 : _e.write) == null ? void 0 : _f.group_ids) ?? [],
          user_ids: ((_h = (_g = accessControl()) == null ? void 0 : _g.write) == null ? void 0 : _h.user_ids) ?? []
        }
      });
    }
  });
  legacy_pre_effect(
    () => (deep_read_state(sharePublic()), deep_read_state(accessControl())),
    () => {
      if (!sharePublic() && accessControl() === null) {
        initPublicAccess();
      }
    }
  );
  legacy_pre_effect_reset();
  init();
  var div = root();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var text$1 = child(div_2, true);
  reset(div_2);
  var div_3 = sibling(div_2, 2);
  var div_4 = child(div_3);
  var div_5 = child(div_4);
  var node = child(div_5);
  {
    var consequent = ($$anchor2) => {
      var svg = root_1();
      append($$anchor2, svg);
    };
    var alternate = ($$anchor2) => {
      var svg_1 = root_2();
      append($$anchor2, svg_1);
    };
    if_block(node, ($$render) => {
      if (accessControl() !== null) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  reset(div_5);
  reset(div_4);
  var div_6 = sibling(div_4, 2);
  var select = child(div_6);
  var option = child(select);
  var text_1 = child(option, true);
  reset(option);
  option.value = option.__value = "private";
  var node_1 = sibling(option);
  {
    var consequent_1 = ($$anchor2) => {
      var option_1 = root_3();
      var text_2 = child(option_1, true);
      reset(option_1);
      option_1.value = option_1.__value = "public";
      template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Public")))]);
      append($$anchor2, option_1);
    };
    if_block(node_1, ($$render) => {
      if (share() && sharePublic()) $$render(consequent_1);
    });
  }
  reset(select);
  var select_value;
  init_select(select);
  var div_7 = sibling(select, 2);
  var node_2 = child(div_7);
  {
    var consequent_2 = ($$anchor2) => {
      var text_3 = text();
      template_effect(($0) => set_text(text_3, $0), [
        () => ($i18n(), untrack(() => $i18n().t("Only select users and groups with permission can access")))
      ]);
      append($$anchor2, text_3);
    };
    var alternate_1 = ($$anchor2) => {
      var text_4 = text();
      template_effect(($0) => set_text(text_4, $0), [
        () => ($i18n(), untrack(() => $i18n().t("Accessible to all users")))
      ]);
      append($$anchor2, text_4);
    };
    if_block(node_2, ($$render) => {
      if (accessControl() !== null) $$render(consequent_2);
      else $$render(alternate_1, false);
    });
  }
  reset(div_7);
  reset(div_6);
  reset(div_3);
  reset(div_1);
  var node_3 = sibling(div_1, 2);
  {
    var consequent_6 = ($$anchor2) => {
      var fragment_2 = comment();
      var node_4 = first_child(fragment_2);
      {
        var consequent_5 = ($$anchor3) => {
          const accessGroups = derived_safe_equal(() => (get(groups), deep_read_state(accessControl()), untrack(() => get(groups).filter((group) => {
            var _a, _b;
            return (((_b = (_a = accessControl()) == null ? void 0 : _a.read) == null ? void 0 : _b.group_ids) ?? []).includes(group.id);
          }))));
          var div_8 = root_7();
          var div_9 = child(div_8);
          var div_10 = child(div_9);
          var div_11 = child(div_10);
          var text_5 = child(div_11, true);
          reset(div_11);
          reset(div_10);
          var div_12 = sibling(div_10, 2);
          var div_13 = child(div_12);
          var div_14 = child(div_13);
          var div_15 = child(div_14);
          var select_1 = child(div_15);
          template_effect(() => {
            get(selectedGroupId);
            invalidate_inner_signals(() => {
              accessControl();
              onChange();
              $i18n();
              get(groups);
            });
          });
          var option_2 = child(select_1);
          var text_6 = child(option_2, true);
          reset(option_2);
          option_2.value = option_2.__value = "";
          var node_5 = sibling(option_2);
          each(
            node_5,
            1,
            () => (get(groups), deep_read_state(accessControl()), untrack(() => get(groups).filter((group) => {
              var _a, _b;
              return !(((_b = (_a = accessControl()) == null ? void 0 : _a.read) == null ? void 0 : _b.group_ids) ?? []).includes(group.id);
            }))),
            index,
            ($$anchor4, group) => {
              var option_3 = root_8();
              var text_7 = child(option_3, true);
              reset(option_3);
              var option_3_value = {};
              template_effect(() => {
                set_text(text_7, (get(group), untrack(() => get(group).name)));
                if (option_3_value !== (option_3_value = (get(group), untrack(() => get(group).id)))) {
                  option_3.value = (option_3.__value = (get(group), untrack(() => get(group).id))) ?? "";
                }
              });
              append($$anchor4, option_3);
            }
          );
          reset(select_1);
          reset(div_15);
          reset(div_14);
          reset(div_13);
          reset(div_12);
          var div_16 = sibling(div_12, 4);
          var node_6 = child(div_16);
          {
            var consequent_4 = ($$anchor4) => {
              var fragment_3 = comment();
              var node_7 = first_child(fragment_3);
              each(node_7, 1, () => get(accessGroups), index, ($$anchor5, group) => {
                var div_17 = root_10();
                var div_18 = child(div_17);
                var div_19 = child(div_18);
                var node_8 = child(div_19);
                UserCircleSolid(node_8, { className: "size-4" });
                reset(div_19);
                var div_20 = sibling(div_19, 2);
                var text_8 = child(div_20, true);
                reset(div_20);
                reset(div_18);
                var div_21 = sibling(div_18, 2);
                var button = child(div_21);
                var node_9 = child(button);
                {
                  var consequent_3 = ($$anchor6) => {
                    {
                      let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Write"))));
                      Badge($$anchor6, {
                        type: "success",
                        get content() {
                          return get($0);
                        }
                      });
                    }
                  };
                  var alternate_2 = ($$anchor6) => {
                    {
                      let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Read"))));
                      Badge($$anchor6, {
                        type: "info",
                        get content() {
                          return get($0);
                        }
                      });
                    }
                  };
                  if_block(node_9, ($$render) => {
                    if (deep_read_state(accessControl()), get(group), untrack(() => {
                      var _a, _b;
                      return (((_b = (_a = accessControl()) == null ? void 0 : _a.write) == null ? void 0 : _b.group_ids) ?? []).includes(get(group).id);
                    })) $$render(consequent_3);
                    else $$render(alternate_2, false);
                  });
                }
                reset(button);
                var button_1 = sibling(button, 2);
                var node_10 = child(button_1);
                XMark(node_10, {});
                reset(button_1);
                reset(div_21);
                reset(div_17);
                template_effect(() => set_text(text_8, (get(group), untrack(() => get(group).name))));
                event("click", button, () => {
                  var _a, _b, _c, _d, _e, _f;
                  if (accessRoles().includes("write")) {
                    if ((((_b = (_a = accessControl()) == null ? void 0 : _a.write) == null ? void 0 : _b.group_ids) ?? []).includes(get(group).id)) {
                      accessControl(accessControl().write.group_ids = (((_d = (_c = accessControl()) == null ? void 0 : _c.write) == null ? void 0 : _d.group_ids) ?? []).filter((group_id) => group_id !== get(group).id), true);
                    } else {
                      accessControl(accessControl().write.group_ids = [...((_f = (_e = accessControl()) == null ? void 0 : _e.write) == null ? void 0 : _f.group_ids) ?? [], get(group).id], true);
                    }
                    onChange()(accessControl());
                  }
                });
                event("click", button_1, () => {
                  var _a, _b, _c, _d;
                  accessControl(accessControl().read.group_ids = (((_b = (_a = accessControl()) == null ? void 0 : _a.read) == null ? void 0 : _b.group_ids) ?? []).filter((id) => id !== get(group).id), true);
                  accessControl(accessControl().write.group_ids = (((_d = (_c = accessControl()) == null ? void 0 : _c.write) == null ? void 0 : _d.group_ids) ?? []).filter((id) => id !== get(group).id), true);
                  onChange()(accessControl());
                });
                append($$anchor5, div_17);
              });
              append($$anchor4, fragment_3);
            };
            var alternate_3 = ($$anchor4) => {
              var div_22 = root_13();
              var div_23 = child(div_22);
              var text_9 = child(div_23, true);
              reset(div_23);
              reset(div_22);
              template_effect(($0) => set_text(text_9, $0), [
                () => ($i18n(), untrack(() => $i18n().t("No groups with access, add a group to grant access")))
              ]);
              append($$anchor4, div_22);
            };
            if_block(node_6, ($$render) => {
              if (deep_read_state(get(accessGroups)), untrack(() => get(accessGroups).length > 0)) $$render(consequent_4);
              else $$render(alternate_3, false);
            });
          }
          reset(div_16);
          reset(div_9);
          reset(div_8);
          template_effect(
            ($0, $1) => {
              set_text(text_5, $0);
              set_class(select_1, 1, `outline-hidden bg-transparent text-sm rounded-lg block w-full pr-10 max-w-full
									${get(selectedGroupId) ? "" : "text-gray-500"}
									dark:placeholder-gray-500`);
              set_text(text_6, $1);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Groups"))),
              () => ($i18n(), untrack(() => $i18n().t("Select a group")))
            ]
          );
          bind_select_value(select_1, () => get(selectedGroupId), ($$value) => set(selectedGroupId, $$value));
          event("change", select_1, () => {
            var _a, _b;
            if (get(selectedGroupId) !== "") {
              accessControl(
                accessControl().read.group_ids = [
                  ...((_b = (_a = accessControl()) == null ? void 0 : _a.read) == null ? void 0 : _b.group_ids) ?? [],
                  get(selectedGroupId)
                ],
                true
              );
              set(selectedGroupId, "");
              onChange()(accessControl());
            }
          });
          append($$anchor3, div_8);
        };
        if_block(node_4, ($$render) => {
          if (accessControl() !== null) $$render(consequent_5);
        });
      }
      append($$anchor2, fragment_2);
    };
    if_block(node_3, ($$render) => {
      if (share()) $$render(consequent_6);
    });
  }
  reset(div);
  template_effect(
    ($0, $1) => {
      set_text(text$1, $0);
      set_text(text_1, $1);
      if (select_value !== (select_value = accessControl() !== null ? "private" : "public")) {
        select.value = select.__value = accessControl() !== null ? "private" : "public", select_option(select, accessControl() !== null ? "private" : "public");
      }
    },
    [
      () => ($i18n(), untrack(() => $i18n().t("Visibility"))),
      () => ($i18n(), untrack(() => $i18n().t("Private")))
    ]
  );
  event("change", select, (e) => {
    if (e.target.value === "public") {
      accessControl(null);
    } else {
      accessControl({
        read: { group_ids: [], user_ids: [] },
        write: { group_ids: [], user_ids: [] }
      });
    }
    onChange()(accessControl());
  });
  append($$anchor, div);
  pop();
  $$cleanup();
}
export {
  AccessControl as A
};
