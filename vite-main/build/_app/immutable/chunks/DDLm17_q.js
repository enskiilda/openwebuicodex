import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, n as createEventDispatcher, g as getContext, f as first_child, i as deep_read_state, u as untrack, a as pop, c as child, e as sibling, b as get, r as reset, t as template_effect, aE as invalidate_inner_signals, aG as remove_textarea_child, h as derived_safe_equal, l as legacy_pre_effect, j as legacy_pre_effect_reset, m as mutable_source, s as set, aF as mutate } from "./BxIY6ir7.js";
import { s as set_text, e as event } from "./cBADewWV.js";
import { i as if_block } from "./BoSuMvtf.js";
import { c as comment, a as append, f as from_html, t as text } from "./CAbo1QWi.js";
import { g as set_selected, d as bind_select_value, r as remove_input_defaults, a as set_attribute, e as set_value, s as set_class } from "./kXiCYuyj.js";
import { p as preventDefault } from "./CGgk3ROl.js";
import { i as init } from "./ByqEASoO.js";
import { p as prop } from "./BRmGPDvq.js";
import { s as setup_stores, a as store_get } from "./BvQ5O7-v.js";
import { t as toast } from "./BccDN__m.js";
import { M as Modal } from "./DF6V1elH.js";
import { b as updateUserValvesById$1, d as updateFunctionValvesById, e as getUserValvesById$1, f as getUserValvesSpecById$1, h as getFunctionValvesById, i as getFunctionValvesSpecById } from "./CZmOTAge.js";
import { b as updateUserValvesById, d as updateToolValvesById, e as getUserValvesById, f as getUserValvesSpecById, h as getToolValvesById, i as getToolValvesSpecById } from "./DloK8TH_.js";
import { S as Spinner } from "./CtnI4RVL.js";
import "./C2A39Ney.js";
import "./2Yg1sHDo.js";
import "./bQFTtKkZ.js";
import { e as each, i as index } from "./7_HZMPNF.js";
import { b as bind_value } from "./DVLuwGai.js";
import { S as Switch_1 } from "./CakJ276w.js";
import { M as MapSelector } from "./BTKKWNOf.js";
import { X as XMark } from "./CUUSX84-.js";
var root_3 = from_html(`<span class=" text-gray-500">*required</span>`);
var root_4$1 = from_html(`<span class="ml-2 self-center"><!></span>`);
var root_7 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_10 = from_html(`<option> </option>`);
var root_9 = from_html(`<select class="w-full rounded-lg py-2 px-4 text-sm dark:text-gray-300 dark:bg-gray-850 outline-hidden border border-gray-100 dark:border-gray-850"></select>`);
var root_12 = from_html(`<div class="flex justify-between items-center"><div class="text-xs text-gray-500"> </div> <div class=" pr-2"><!></div></div>`);
var root_14 = from_html(`<input class="w-full rounded-lg py-2 px-4 text-sm dark:text-gray-300 dark:bg-gray-850 outline-hidden border border-gray-100 dark:border-gray-850" type="text" autocomplete="off" required/>`);
var root_17 = from_html(`<div class="flex items-center space-x-2"><div class="relative size-6"><input type="color" class="size-6 rounded cursor-pointer border border-gray-200 dark:border-gray-700"/></div> <input type="text" class="flex-1 rounded-lg py-2 text-sm dark:text-gray-300 dark:bg-gray-850 outline-hidden border border-gray-100 dark:border-gray-850" autocomplete="off" disabled/></div>`);
var root_20 = from_html(`<input type="text" class=" w-full rounded-lg py-1 text-left text-sm dark:text-gray-300 dark:bg-gray-850 outline-hidden border border-gray-100 dark:border-gray-850" autocomplete="off"/>`);
var root_19 = from_html(`<div class="flex flex-col items-center gap-1"><!> <!></div>`);
var root_21 = from_html(`<textarea class="w-full rounded-lg py-2 px-4 text-sm dark:text-gray-300 dark:bg-gray-850 outline-hidden border border-gray-100 dark:border-gray-850" autocomplete="off" required></textarea>`);
var root_8 = from_html(`<div class="flex mt-0.5 mb-0.5 space-x-2"><div class=" flex-1"><!></div></div>`);
var root_22 = from_html(`<div class="text-xs text-gray-500"> </div>`);
var root_2 = from_html(`<div class=" py-0.5 w-full justify-between"><div class="flex w-full justify-between"><div class=" self-center text-xs font-medium"> <!></div> <button class="p-1 px-3 text-xs flex rounded-sm transition" type="button"><!></button></div> <!> <!></div>`);
var root_23 = from_html(`<div class="text-xs"> </div>`);
function Valves($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const dispatch = createEventDispatcher();
  const i18n = getContext("i18n");
  let valvesSpec = prop($$props, "valvesSpec", 8, null);
  let valves = prop($$props, "valves", 28, () => ({}));
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_12 = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      each(
        node_1,
        1,
        () => (deep_read_state(valvesSpec()), untrack(() => Object.keys(valvesSpec().properties))),
        index,
        ($$anchor3, property) => {
          var div = root_2();
          var div_1 = child(div);
          var div_2 = child(div_1);
          var text$1 = child(div_2);
          var node_2 = sibling(text$1);
          {
            var consequent = ($$anchor4) => {
              var span = root_3();
              append($$anchor4, span);
            };
            if_block(node_2, ($$render) => {
              if (deep_read_state(valvesSpec()), get(property), untrack(() => {
                var _a;
                return (((_a = valvesSpec()) == null ? void 0 : _a.required) ?? []).includes(get(property));
              })) $$render(consequent);
            });
          }
          reset(div_2);
          var button = sibling(div_2, 2);
          var node_3 = child(button);
          {
            var consequent_2 = ($$anchor4) => {
              var span_1 = root_4$1();
              var node_4 = child(span_1);
              {
                var consequent_1 = ($$anchor5) => {
                  var text_1 = text();
                  template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("None")))]);
                  append($$anchor5, text_1);
                };
                var alternate = ($$anchor5) => {
                  var text_2 = text();
                  template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
                  append($$anchor5, text_2);
                };
                if_block(node_4, ($$render) => {
                  if (deep_read_state(valvesSpec()), get(property), untrack(() => {
                    var _a;
                    return (((_a = valvesSpec()) == null ? void 0 : _a.required) ?? []).includes(get(property));
                  })) $$render(consequent_1);
                  else $$render(alternate, false);
                });
              }
              reset(span_1);
              append($$anchor4, span_1);
            };
            var alternate_1 = ($$anchor4) => {
              var span_2 = root_7();
              var text_3 = child(span_2, true);
              reset(span_2);
              template_effect(($0) => set_text(text_3, $0), [() => ($i18n(), untrack(() => $i18n().t("Custom")))]);
              append($$anchor4, span_2);
            };
            if_block(node_3, ($$render) => {
              if (deep_read_state(valves()), get(property), untrack(() => (valves()[get(property)] ?? null) === null)) $$render(consequent_2);
              else $$render(alternate_1, false);
            });
          }
          reset(button);
          reset(div_1);
          var node_5 = sibling(div_1, 2);
          {
            var consequent_10 = ($$anchor4) => {
              var div_3 = root_8();
              var div_4 = child(div_3);
              var node_6 = child(div_4);
              {
                var consequent_3 = ($$anchor5) => {
                  var select = root_9();
                  template_effect(() => {
                    valves();
                    invalidate_inner_signals(() => {
                      get(property);
                      valvesSpec();
                    });
                  });
                  each(
                    select,
                    5,
                    () => (deep_read_state(valvesSpec()), get(property), untrack(() => valvesSpec().properties[get(property)].enum)),
                    index,
                    ($$anchor6, option) => {
                      var option_1 = root_10();
                      var text_4 = child(option_1, true);
                      reset(option_1);
                      var option_1_value = {};
                      template_effect(() => {
                        set_selected(option_1, (get(option), deep_read_state(valves()), get(property), untrack(() => get(option) === valves()[get(property)])));
                        set_text(text_4, get(option));
                        if (option_1_value !== (option_1_value = get(option))) {
                          option_1.value = (option_1.__value = get(option)) ?? "";
                        }
                      });
                      append($$anchor6, option_1);
                    }
                  );
                  reset(select);
                  bind_select_value(select, () => valves()[get(property)], ($$value) => valves(valves()[get(property)] = $$value, true));
                  event("change", select, () => {
                    dispatch("change");
                  });
                  append($$anchor5, select);
                };
                var alternate_6 = ($$anchor5) => {
                  var fragment_4 = comment();
                  var node_7 = first_child(fragment_4);
                  {
                    var consequent_4 = ($$anchor6) => {
                      var div_5 = root_12();
                      var div_6 = child(div_5);
                      var text_5 = child(div_6, true);
                      reset(div_6);
                      var div_7 = sibling(div_6, 2);
                      var node_8 = child(div_7);
                      Switch_1(node_8, {
                        get state() {
                          return valves()[get(property)];
                        },
                        set state($$value) {
                          valves(valves()[get(property)] = $$value, true);
                        },
                        $$events: {
                          change: () => {
                            dispatch("change");
                          }
                        },
                        $$legacy: true
                      });
                      reset(div_7);
                      reset(div_5);
                      template_effect(($0) => set_text(text_5, $0), [
                        () => (deep_read_state(valves()), get(property), $i18n(), untrack(() => valves()[get(property)] ? $i18n().t("Enabled") : $i18n().t("Disabled")))
                      ]);
                      append($$anchor6, div_5);
                    };
                    var alternate_5 = ($$anchor6) => {
                      var fragment_5 = comment();
                      var node_9 = first_child(fragment_5);
                      {
                        var consequent_5 = ($$anchor7) => {
                          var input = root_14();
                          remove_input_defaults(input);
                          template_effect(() => set_attribute(input, "placeholder", (deep_read_state(valvesSpec()), get(property), untrack(() => valvesSpec().properties[get(property)].title))));
                          bind_value(input, () => valves()[get(property)], ($$value) => valves(valves()[get(property)] = $$value, true));
                          event("change", input, () => {
                            dispatch("change");
                          });
                          append($$anchor7, input);
                        };
                        var alternate_4 = ($$anchor7) => {
                          var fragment_6 = comment();
                          var node_10 = first_child(fragment_6);
                          {
                            var consequent_9 = ($$anchor8) => {
                              var fragment_7 = comment();
                              var node_11 = first_child(fragment_7);
                              {
                                var consequent_6 = ($$anchor9) => {
                                  var div_8 = root_17();
                                  var div_9 = child(div_8);
                                  var input_1 = child(div_9);
                                  remove_input_defaults(input_1);
                                  reset(div_9);
                                  var input_2 = sibling(div_9, 2);
                                  remove_input_defaults(input_2);
                                  reset(div_8);
                                  template_effect(
                                    ($0) => {
                                      set_value(input_1, (deep_read_state(valves()), get(property), untrack(() => valves()[get(property)] ?? "#000000")));
                                      set_attribute(input_2, "placeholder", $0);
                                    },
                                    [
                                      () => ($i18n(), untrack(() => $i18n().t("Enter hex color (e.g. #FF0000)")))
                                    ]
                                  );
                                  event("input", input_1, (e) => {
                                    valves(valves()[get(property)] = e.target.value.toUpperCase(), true);
                                    dispatch("change");
                                  });
                                  bind_value(input_2, () => valves()[get(property)], ($$value) => valves(valves()[get(property)] = $$value, true));
                                  event("change", input_2, () => {
                                    dispatch("change");
                                  });
                                  append($$anchor9, div_8);
                                };
                                var alternate_2 = ($$anchor9) => {
                                  var fragment_8 = comment();
                                  var node_12 = first_child(fragment_8);
                                  {
                                    var consequent_8 = ($$anchor10) => {
                                      var div_10 = root_19();
                                      var node_13 = child(div_10);
                                      {
                                        let $0 = derived_safe_equal(() => (deep_read_state(valves()), get(property), untrack(() => (valves()[get(property)] ?? "").includes(",") ?? false ? valves()[get(property)].split(",") : null)));
                                        MapSelector(node_13, {
                                          get setViewLocation() {
                                            return get($0);
                                          },
                                          onClick: (value) => {
                                            valves(valves()[get(property)] = value, true);
                                            dispatch("change");
                                          }
                                        });
                                      }
                                      var node_14 = sibling(node_13, 2);
                                      {
                                        var consequent_7 = ($$anchor11) => {
                                          var input_3 = root_20();
                                          remove_input_defaults(input_3);
                                          template_effect(($0) => set_attribute(input_3, "placeholder", $0), [
                                            () => ($i18n(), untrack(() => $i18n().t("Enter coordinates (e.g. 51.505, -0.09)")))
                                          ]);
                                          bind_value(input_3, () => valves()[get(property)], ($$value) => valves(valves()[get(property)] = $$value, true));
                                          event("change", input_3, () => {
                                            dispatch("change");
                                          });
                                          append($$anchor11, input_3);
                                        };
                                        if_block(node_14, ($$render) => {
                                          if (deep_read_state(valves()), get(property), untrack(() => valves()[get(property)])) $$render(consequent_7);
                                        });
                                      }
                                      reset(div_10);
                                      append($$anchor10, div_10);
                                    };
                                    if_block(
                                      node_12,
                                      ($$render) => {
                                        if (deep_read_state(valvesSpec()), get(property), untrack(() => {
                                          var _a, _b;
                                          return ((_b = (_a = valvesSpec().properties[get(property)]) == null ? void 0 : _a.input) == null ? void 0 : _b.type) === "map";
                                        })) $$render(consequent_8);
                                      },
                                      true
                                    );
                                  }
                                  append($$anchor9, fragment_8);
                                };
                                if_block(node_11, ($$render) => {
                                  if (deep_read_state(valvesSpec()), get(property), untrack(() => {
                                    var _a, _b;
                                    return ((_b = (_a = valvesSpec().properties[get(property)]) == null ? void 0 : _a.input) == null ? void 0 : _b.type) === "color";
                                  })) $$render(consequent_6);
                                  else $$render(alternate_2, false);
                                });
                              }
                              append($$anchor8, fragment_7);
                            };
                            var alternate_3 = ($$anchor8) => {
                              var textarea = root_21();
                              remove_textarea_child(textarea);
                              template_effect(() => set_attribute(textarea, "placeholder", (deep_read_state(valvesSpec()), get(property), untrack(() => valvesSpec().properties[get(property)].title))));
                              bind_value(textarea, () => valves()[get(property)], ($$value) => valves(valves()[get(property)] = $$value, true));
                              event("change", textarea, () => {
                                dispatch("change");
                              });
                              append($$anchor8, textarea);
                            };
                            if_block(
                              node_10,
                              ($$render) => {
                                if (deep_read_state(valvesSpec()), get(property), untrack(() => {
                                  var _a;
                                  return ((_a = valvesSpec().properties[get(property)]) == null ? void 0 : _a.input) ?? null;
                                })) $$render(consequent_9);
                                else $$render(alternate_3, false);
                              },
                              true
                            );
                          }
                          append($$anchor7, fragment_6);
                        };
                        if_block(
                          node_9,
                          ($$render) => {
                            if (deep_read_state(valvesSpec()), get(property), untrack(() => {
                              var _a;
                              return (((_a = valvesSpec().properties[get(property)]) == null ? void 0 : _a.type) ?? null) !== "string";
                            })) $$render(consequent_5);
                            else $$render(alternate_4, false);
                          },
                          true
                        );
                      }
                      append($$anchor6, fragment_5);
                    };
                    if_block(
                      node_7,
                      ($$render) => {
                        if (deep_read_state(valvesSpec()), get(property), untrack(() => {
                          var _a;
                          return (((_a = valvesSpec().properties[get(property)]) == null ? void 0 : _a.type) ?? null) === "boolean";
                        })) $$render(consequent_4);
                        else $$render(alternate_5, false);
                      },
                      true
                    );
                  }
                  append($$anchor5, fragment_4);
                };
                if_block(node_6, ($$render) => {
                  if (deep_read_state(valvesSpec()), get(property), untrack(() => {
                    var _a;
                    return ((_a = valvesSpec().properties[get(property)]) == null ? void 0 : _a.enum) ?? null;
                  })) $$render(consequent_3);
                  else $$render(alternate_6, false);
                });
              }
              reset(div_4);
              reset(div_3);
              append($$anchor4, div_3);
            };
            if_block(node_5, ($$render) => {
              if (deep_read_state(valves()), get(property), untrack(() => (valves()[get(property)] ?? null) !== null)) $$render(consequent_10);
            });
          }
          var node_15 = sibling(node_5, 2);
          {
            var consequent_11 = ($$anchor4) => {
              var div_11 = root_22();
              var text_6 = child(div_11, true);
              reset(div_11);
              template_effect(() => set_text(text_6, (deep_read_state(valvesSpec()), get(property), untrack(() => valvesSpec().properties[get(property)].description))));
              append($$anchor4, div_11);
            };
            if_block(node_15, ($$render) => {
              if (deep_read_state(valvesSpec()), get(property), untrack(() => {
                var _a;
                return (((_a = valvesSpec().properties[get(property)]) == null ? void 0 : _a.description) ?? null) !== null;
              })) $$render(consequent_11);
            });
          }
          reset(div);
          template_effect(() => set_text(text$1, `${(deep_read_state(valvesSpec()), get(property), untrack(() => valvesSpec().properties[get(property)].title)) ?? ""} `));
          event("click", button, () => {
            const propertySpec = valvesSpec().properties[get(property)] ?? {};
            if ((valves()[get(property)] ?? null) === null) {
              if (((propertySpec == null ? void 0 : propertySpec.type) ?? null) === "array") {
                const defaultArray = (propertySpec == null ? void 0 : propertySpec.default) ?? [];
                valves(valves()[get(property)] = Array.isArray(defaultArray) ? defaultArray.join(", ") : "", true);
              } else {
                valves(valves()[get(property)] = (propertySpec == null ? void 0 : propertySpec.default) ?? "", true);
              }
            } else {
              valves(valves()[get(property)] = null, true);
            }
            dispatch("change");
          });
          append($$anchor3, div);
        }
      );
      append($$anchor2, fragment_1);
    };
    var alternate_7 = ($$anchor2) => {
      var div_12 = root_23();
      var text_7 = child(div_12, true);
      reset(div_12);
      template_effect(($0) => set_text(text_7, $0), [() => ($i18n(), untrack(() => $i18n().t("No valves")))]);
      append($$anchor2, div_12);
    };
    if_block(node, ($$render) => {
      if (deep_read_state(valvesSpec()), untrack(() => {
        var _a;
        return valvesSpec() && Object.keys(((_a = valvesSpec()) == null ? void 0 : _a.properties) ?? {}).length;
      })) $$render(consequent_12);
      else $$render(alternate_7, false);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_4 = from_html(`<div class="ml-2 self-center"><!></div>`);
var root_1 = from_html(`<div><div class=" flex justify-between dark:text-gray-300 px-5 pt-4 pb-2"><div class=" text-lg font-medium self-center"> </div> <button class="self-center"><!></button></div> <div class="flex flex-col md:flex-row w-full px-5 pb-4 md:space-x-4 dark:text-gray-200"><div class=" flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div class="px-1"><!></div> <div class="flex justify-end pt-3 text-sm font-medium"><button type="submit"> <!></button></div></form></div></div></div>`);
function ValvesModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  const dispatch = createEventDispatcher();
  let show = prop($$props, "show", 12, false);
  let type = prop($$props, "type", 8, "tool");
  let id = prop($$props, "id", 8, null);
  let userValves = prop($$props, "userValves", 8, false);
  let saving = mutable_source(false);
  let loading = mutable_source(false);
  let valvesSpec = mutable_source(null);
  let valves = mutable_source({});
  const submitHandler = async () => {
    var _a;
    set(saving, true);
    if (get(valvesSpec)) {
      for (const property in get(valvesSpec).properties) {
        if (((_a = get(valvesSpec).properties[property]) == null ? void 0 : _a.type) === "array") {
          if (typeof get(valves)[property] === "string") {
            mutate(valves, get(valves)[property] = (get(valves)[property] ?? "").split(",").map((v) => v.trim()).filter((v) => v.length > 0));
          } else if (get(valves)[property] == null) {
            mutate(valves, get(valves)[property] = null);
          }
        }
      }
      let res = null;
      if (userValves()) {
        if (type() === "tool") {
          res = await updateUserValvesById(localStorage.token, id(), get(valves)).catch((error) => {
            toast.error(`${error}`);
          });
        } else if (type() === "function") {
          res = await updateUserValvesById$1(localStorage.token, id(), get(valves)).catch((error) => {
            toast.error(`${error}`);
          });
        }
      } else {
        if (type() === "tool") {
          res = await updateToolValvesById(localStorage.token, id(), get(valves)).catch((error) => {
            toast.error(`${error}`);
          });
        } else if (type() === "function") {
          res = await updateFunctionValvesById(localStorage.token, id(), get(valves)).catch((error) => {
            toast.error(`${error}`);
          });
        }
      }
      if (res) {
        toast.success($i18n().t("Valves updated successfully"));
        dispatch("save");
      }
    }
    set(saving, false);
  };
  const initHandler = async () => {
    var _a;
    set(loading, true);
    set(valves, {});
    set(valvesSpec, null);
    try {
      if (userValves()) {
        if (type() === "tool") {
          set(valves, await getUserValvesById(localStorage.token, id()));
          set(valvesSpec, await getUserValvesSpecById(localStorage.token, id()));
        } else if (type() === "function") {
          set(valves, await getUserValvesById$1(localStorage.token, id()));
          set(valvesSpec, await getUserValvesSpecById$1(localStorage.token, id()));
        }
      } else {
        if (type() === "tool") {
          set(valves, await getToolValvesById(localStorage.token, id()));
          set(valvesSpec, await getToolValvesSpecById(localStorage.token, id()));
        } else if (type() === "function") {
          set(valves, await getFunctionValvesById(localStorage.token, id()));
          set(valvesSpec, await getFunctionValvesSpecById(localStorage.token, id()));
        }
      }
      if (!get(valves)) {
        set(valves, {});
      }
      if (get(valvesSpec)) {
        for (const property in get(valvesSpec).properties) {
          if (((_a = get(valvesSpec).properties[property]) == null ? void 0 : _a.type) === "array") {
            if (get(valves)[property] != null) {
              mutate(valves, get(valves)[property] = (Array.isArray(get(valves)[property]) ? get(valves)[property] : []).join(","));
            } else {
              mutate(valves, get(valves)[property] = null);
            }
          }
        }
      }
      set(loading, false);
    } catch (e) {
      toast.error(`Error fetching valves`);
      show(false);
    }
  };
  legacy_pre_effect(() => deep_read_state(show()), () => {
    if (show()) {
      initHandler();
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
      var div = root_1();
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
      var node_1 = child(div_5);
      {
        var consequent = ($$anchor3) => {
          Valves($$anchor3, {
            get valvesSpec() {
              return get(valvesSpec);
            },
            get valves() {
              return get(valves);
            },
            set valves($$value) {
              set(valves, $$value);
            },
            $$legacy: true
          });
        };
        var alternate = ($$anchor3) => {
          Spinner($$anchor3, { className: "size-5" });
        };
        if_block(node_1, ($$render) => {
          if (!get(loading)) $$render(consequent);
          else $$render(alternate, false);
        });
      }
      reset(div_5);
      var div_6 = sibling(div_5, 2);
      var button_1 = child(div_6);
      var text_1 = child(button_1);
      var node_2 = sibling(text_1);
      {
        var consequent_1 = ($$anchor3) => {
          var div_7 = root_4();
          var node_3 = child(div_7);
          Spinner(node_3, {});
          reset(div_7);
          append($$anchor3, div_7);
        };
        if_block(node_2, ($$render) => {
          if (get(saving)) $$render(consequent_1);
        });
      }
      reset(button_1);
      reset(div_6);
      reset(form);
      reset(div_4);
      reset(div_3);
      reset(div);
      template_effect(
        ($0, $1) => {
          set_text(text2, $0);
          set_class(button_1, 1, `px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full ${get(saving) ? " cursor-not-allowed" : ""}`);
          button_1.disabled = get(saving);
          set_text(text_1, `${$1 ?? ""} `);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Valves"))),
          () => ($i18n(), untrack(() => $i18n().t("Save")))
        ]
      );
      event("click", button, () => {
        show(false);
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
  ValvesModal as V,
  Valves as a
};
