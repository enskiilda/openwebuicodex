var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __publicField = (obj, key2, value) => __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, g as getContext, n as createEventDispatcher, o as onMount, s as set, m as mutable_source, b as get, l as legacy_pre_effect, i as deep_read_state, j as legacy_pre_effect_reset, f as first_child, u as untrack, e as sibling, c as child, r as reset, t as template_effect, aG as remove_textarea_child, h as derived_safe_equal, a as pop, q as next, ay as onDestroy, k as tick, aF as mutate } from "./BxIY6ir7.js";
import { s as set_text, e as event } from "./cBADewWV.js";
import { e as each, i as index } from "./7_HZMPNF.js";
import { i as if_block } from "./BoSuMvtf.js";
import { k as key } from "./CmeGWm0r.js";
import { f as from_html, a as append, t as text, c as comment, b as from_svg } from "./CAbo1QWi.js";
import { s as set_class, a as set_attribute, r as remove_input_defaults, c as clsx, e as set_value, h as set_style } from "./kXiCYuyj.js";
import { i as init } from "./ByqEASoO.js";
import { p as prop } from "./BRmGPDvq.js";
import { a as store_get, s as setup_stores, e as store_mutate } from "./BvQ5O7-v.js";
import { a as models, q as tags, r as showControls, v as showEmbeds, w as embed, e as chatId, j as socket, x as artifactCode, y as showArtifacts, z as showOverview, m as mobile, b as settings, u as user, c as config, A as audioQueue, T as TTSWorker, B as temporaryChatEnabled, W as WEBUI_NAME, C as currentChatPage, D as chats } from "./2Yg1sHDo.js";
import { t as toast } from "./BccDN__m.js";
import { a as getChatById, u as updateChatById, f as getChatList } from "./17j0UIT7.js";
import { b as createMessagesList, G as formatDate, H as removeAllDetails, i as copyToClipboard, A as sanitizeResponseContent, I as getMessageContentParts, l as localizedFormat, m as marked, x as v4 } from "./Bh-hrM1w.js";
import { d as dayjs2 } from "./OO7lCI-F.js";
import "./-BrZk0Qz.js";
import { t as transition } from "./B3nUhwYU.js";
import { b as bind_value } from "./DVLuwGai.js";
import { b as bind_this } from "./D16JuV5t.js";
import { u as updateFeedbackById, c as createNewFeedback } from "./Dhu6d1zL.js";
import { d as generateTags } from "./DtDmpg9G.js";
import { s as synthesizeOpenAISpeech } from "./BgG6Mq7m.js";
import { i as imageGenerations } from "./hD4Sc6e1.js";
import { a as WEBUI_API_BASE_URL, W as WEBUI_VERSION } from "./DQ9UxF7k.js";
import { P as ProfileImage, N as Name } from "./DXUPjZLs.js";
import { S as Skeleton } from "./B-p41pS4.js";
import { C as Collapsible, b as Info, c as CodeBlock, d as LightBulb, M as Markdown, I as Image, F as FullHeightIframe, B as Bolt } from "./BgD15ug2.js";
import { T as Tooltip } from "./BHXWufQb.js";
import { T as Tags } from "./BXKRkMSz.js";
import { X as XMark } from "./CUUSX84-.js";
import "./CAzIiltw.js";
import "./DWskpcWN.js";
import { f as fade } from "./BNZI2i79.js";
import "./DRcZXQDn.js";
import "./bQFTtKkZ.js";
import "./C2A39Ney.js";
import "./h-B6Md2q.js";
import { S as Sparkles } from "./CsQKPwST.js";
import { C as ConfirmDialog } from "./DhVOSDv1.js";
import { b as bind_prop } from "./B81XwWpr.js";
import { M as Modal } from "./DF6V1elH.js";
import { T as Textarea } from "./B-P1fI-w.js";
import { S as Spinner } from "./CtnI4RVL.js";
import { B as Badge } from "./DGk_635a.js";
import { C as Check } from "./BH2Jmq_7.js";
import { E as EllipsisHorizontal } from "./BC-suBaL.js";
import { c as component } from "./-ZmPojHm.js";
import { c as chatCompletion } from "./Bm2W_wlw.js";
import { C as ChatBubble, F as FileItem } from "./P5gA3V2-.js";
import { s as slot } from "./CZEGIGsR.js";
import { b as Menu_content, c as Menu_item } from "./DQmZL-p0.js";
import { f as flyAndScale } from "./BuLNlPfL.js";
import { D as Dropdown } from "./NbBmD2S8.js";
import { C as ChevronDown } from "./CUFupyOK.js";
import { C as ChevronUp } from "./DTpd_r3Z.js";
import { S as Search } from "./2ixn6gs3.js";
import "./DfSR1r5E.js";
import { L as Loader } from "./Bne0qWmB.js";
import { h as html } from "./tLAl1VVg.js";
import { F as Fuse } from "./AFl3itOE.js";
import { E as EyeSlash } from "./B0PhibVT.js";
var root_1$c = from_html(`<div class="text-xs font-medium pt-1.5 -mb-0.5"> </div>`);
var root_2$d = from_html(`<button> </button>`);
var root_4$8 = from_html(`<button><!></button>`);
var root_3$b = from_html(`<div class="text-sm mt-1.5 font-medium"> </div> <div class="flex flex-wrap gap-1.5 text-sm mt-1.5"></div>`, 1);
var root$e = from_html(`<!> <div class=" my-2.5 rounded-xl px-4 py-3 border border-gray-100 dark:border-gray-850"><div class="flex justify-between items-center"><div class="text-sm font-medium"> </div> <button><!></button></div> <div class="w-full flex justify-center"><div class=" relative w-fit overflow-x-auto scrollbar-none"><div class="mt-1.5 w-fit flex gap-1 pb-2"></div> <div class="sticky top-0 bottom-0 left-0 right-0 flex justify-between text-xs"><div> </div> <div> </div></div></div></div> <div><!></div> <div class="mt-2"><textarea class="w-full text-sm px-1 py-2 bg-transparent outline-hidden resize-none rounded-xl" rows="3"></textarea></div> <div class="mt-2 gap-1.5 flex justify-between"><div class="flex items-end group"><!></div> <button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full"> </button></div></div>`, 1);
function RateComment($$anchor, $$props) {
  push($$props, false);
  const $models = () => store_get(models, "$models", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $_tags = () => store_get(tags, "$_tags", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  const dispatch = createEventDispatcher();
  let message = prop($$props, "message", 8);
  let show = prop($$props, "show", 12, false);
  let LIKE_REASONS = [
    "accurate_information",
    "followed_instructions_perfectly",
    "showcased_creativity",
    "positive_attitude",
    "attention_to_detail",
    "thorough_explanation",
    "other"
  ];
  let DISLIKE_REASONS = [
    "dont_like_the_style",
    "too_verbose",
    "not_helpful",
    "not_factually_correct",
    "didnt_fully_follow_instructions",
    "refused_when_it_shouldnt_have",
    "being_lazy",
    "other"
  ];
  let tags$1 = mutable_source([]);
  let reasons = mutable_source([]);
  let selectedReason = mutable_source(null);
  let comment$1 = mutable_source("");
  let detailedRating = mutable_source(null);
  let selectedModel = mutable_source(null);
  const init$1 = () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    if (!get(selectedReason)) {
      set(selectedReason, ((_b = (_a = message()) == null ? void 0 : _a.annotation) == null ? void 0 : _b.reason) ?? "");
    }
    if (!get(comment$1)) {
      set(comment$1, ((_d = (_c = message()) == null ? void 0 : _c.annotation) == null ? void 0 : _d.comment) ?? "");
    }
    set(tags$1, (((_f = (_e = message()) == null ? void 0 : _e.annotation) == null ? void 0 : _f.tags) ?? []).map((tag) => ({ name: tag })));
    if (!get(detailedRating)) {
      set(detailedRating, ((_i = (_h = (_g = message()) == null ? void 0 : _g.annotation) == null ? void 0 : _h.details) == null ? void 0 : _i.rating) ?? null);
    }
  };
  onMount(() => {
    var _a, _b;
    if ((_a = message()) == null ? void 0 : _a.arena) {
      set(selectedModel, $models().find((m) => m.id === message().selectedModelId));
      toast.success($i18n().t('This response was generated by "{{model}}"', {
        model: get(selectedModel) ? ((_b = get(selectedModel)) == null ? void 0 : _b.name) ?? get(selectedModel).id : message().selectedModelId
      }));
    }
  });
  const saveHandler = () => {
    console.log("saveHandler");
    dispatch("save", {
      reason: get(selectedReason),
      comment: get(comment$1),
      tags: get(tags$1).map((tag) => tag.name),
      details: { rating: get(detailedRating) }
    });
    toast.success($i18n().t("Thanks for your feedback!"));
    show(false);
  };
  legacy_pre_effect(() => deep_read_state(message()), () => {
    var _a, _b, _c, _d;
    if (((_b = (_a = message()) == null ? void 0 : _a.annotation) == null ? void 0 : _b.rating) === 1) {
      set(reasons, LIKE_REASONS);
    } else if (((_d = (_c = message()) == null ? void 0 : _c.annotation) == null ? void 0 : _d.rating) === -1) {
      set(reasons, DISLIKE_REASONS);
    }
  });
  legacy_pre_effect(() => deep_read_state(message()), () => {
    if (message()) {
      init$1();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root$e();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var div = root_1$c();
      var text2 = child(div, true);
      reset(div);
      template_effect(($0) => set_text(text2, $0), [
        () => ($i18n(), get(selectedModel), deep_read_state(message()), untrack(() => {
          var _a;
          return $i18n().t('This response was generated by "{{model}}"', {
            model: get(selectedModel) ? ((_a = get(selectedModel)) == null ? void 0 : _a.name) ?? get(selectedModel).id : message().selectedModelId
          });
        }))
      ]);
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (deep_read_state(message()), untrack(() => {
        var _a;
        return (_a = message()) == null ? void 0 : _a.arena;
      })) $$render(consequent);
    });
  }
  var div_1 = sibling(node, 2);
  var div_2 = child(div_1);
  var div_3 = child(div_2);
  var text_1 = child(div_3, true);
  reset(div_3);
  var button = sibling(div_3, 2);
  var node_1 = child(button);
  XMark(node_1, { className: "size-4" });
  reset(button);
  reset(div_2);
  var div_4 = sibling(div_2, 2);
  var div_5 = child(div_4);
  var div_6 = child(div_5);
  each(
    div_6,
    4,
    () => untrack(() => Array.from({ length: 10 }).map((_, i) => i + 1)),
    index,
    ($$anchor2, rating) => {
      var button_1 = root_2$d();
      var text_2 = child(button_1, true);
      reset(button_1);
      template_effect(() => {
        set_class(button_1, 1, `size-7 text-sm border border-gray-100 dark:border-gray-850 hover:bg-gray-50 dark:hover:bg-gray-850 ${get(detailedRating) === rating ? "bg-gray-100 dark:bg-gray-800" : ""} transition rounded-full disabled:cursor-not-allowed disabled:text-gray-500 disabled:bg-white dark:disabled:bg-gray-900`);
        button_1.disabled = (deep_read_state(message()), untrack(() => {
          var _a, _b;
          return ((_b = (_a = message()) == null ? void 0 : _a.annotation) == null ? void 0 : _b.rating) === -1 ? rating > 5 : rating < 6;
        }));
        set_text(text_2, rating);
      });
      event("click", button_1, () => {
        set(detailedRating, rating);
      });
      append($$anchor2, button_1);
    }
  );
  reset(div_6);
  var div_7 = sibling(div_6, 2);
  var div_8 = child(div_7);
  var text_3 = child(div_8);
  reset(div_8);
  var div_9 = sibling(div_8, 2);
  var text_4 = child(div_9);
  reset(div_9);
  reset(div_7);
  reset(div_5);
  reset(div_4);
  var div_10 = sibling(div_4, 2);
  var node_2 = child(div_10);
  {
    var consequent_15 = ($$anchor2) => {
      var fragment_1 = root_3$b();
      var div_11 = first_child(fragment_1);
      var text_5 = child(div_11, true);
      reset(div_11);
      var div_12 = sibling(div_11, 2);
      each(div_12, 5, () => get(reasons), index, ($$anchor3, reason) => {
        var button_2 = root_4$8();
        var node_3 = child(button_2);
        {
          var consequent_1 = ($$anchor4) => {
            var text_6 = text();
            template_effect(($0) => set_text(text_6, $0), [
              () => ($i18n(), untrack(() => $i18n().t("Accurate information")))
            ]);
            append($$anchor4, text_6);
          };
          var alternate_13 = ($$anchor4) => {
            var fragment_3 = comment();
            var node_4 = first_child(fragment_3);
            {
              var consequent_2 = ($$anchor5) => {
                var text_7 = text();
                template_effect(($0) => set_text(text_7, $0), [
                  () => ($i18n(), untrack(() => $i18n().t("Followed instructions perfectly")))
                ]);
                append($$anchor5, text_7);
              };
              var alternate_12 = ($$anchor5) => {
                var fragment_5 = comment();
                var node_5 = first_child(fragment_5);
                {
                  var consequent_3 = ($$anchor6) => {
                    var text_8 = text();
                    template_effect(($0) => set_text(text_8, $0), [
                      () => ($i18n(), untrack(() => $i18n().t("Showcased creativity")))
                    ]);
                    append($$anchor6, text_8);
                  };
                  var alternate_11 = ($$anchor6) => {
                    var fragment_7 = comment();
                    var node_6 = first_child(fragment_7);
                    {
                      var consequent_4 = ($$anchor7) => {
                        var text_9 = text();
                        template_effect(($0) => set_text(text_9, $0), [
                          () => ($i18n(), untrack(() => $i18n().t("Positive attitude")))
                        ]);
                        append($$anchor7, text_9);
                      };
                      var alternate_10 = ($$anchor7) => {
                        var fragment_9 = comment();
                        var node_7 = first_child(fragment_9);
                        {
                          var consequent_5 = ($$anchor8) => {
                            var text_10 = text();
                            template_effect(($0) => set_text(text_10, $0), [
                              () => ($i18n(), untrack(() => $i18n().t("Attention to detail")))
                            ]);
                            append($$anchor8, text_10);
                          };
                          var alternate_9 = ($$anchor8) => {
                            var fragment_11 = comment();
                            var node_8 = first_child(fragment_11);
                            {
                              var consequent_6 = ($$anchor9) => {
                                var text_11 = text();
                                template_effect(($0) => set_text(text_11, $0), [
                                  () => ($i18n(), untrack(() => $i18n().t("Thorough explanation")))
                                ]);
                                append($$anchor9, text_11);
                              };
                              var alternate_8 = ($$anchor9) => {
                                var fragment_13 = comment();
                                var node_9 = first_child(fragment_13);
                                {
                                  var consequent_7 = ($$anchor10) => {
                                    var text_12 = text();
                                    template_effect(($0) => set_text(text_12, $0), [
                                      () => ($i18n(), untrack(() => $i18n().t("Don't like the style")))
                                    ]);
                                    append($$anchor10, text_12);
                                  };
                                  var alternate_7 = ($$anchor10) => {
                                    var fragment_15 = comment();
                                    var node_10 = first_child(fragment_15);
                                    {
                                      var consequent_8 = ($$anchor11) => {
                                        var text_13 = text();
                                        template_effect(($0) => set_text(text_13, $0), [() => ($i18n(), untrack(() => $i18n().t("Too verbose")))]);
                                        append($$anchor11, text_13);
                                      };
                                      var alternate_6 = ($$anchor11) => {
                                        var fragment_17 = comment();
                                        var node_11 = first_child(fragment_17);
                                        {
                                          var consequent_9 = ($$anchor12) => {
                                            var text_14 = text();
                                            template_effect(($0) => set_text(text_14, $0), [() => ($i18n(), untrack(() => $i18n().t("Not helpful")))]);
                                            append($$anchor12, text_14);
                                          };
                                          var alternate_5 = ($$anchor12) => {
                                            var fragment_19 = comment();
                                            var node_12 = first_child(fragment_19);
                                            {
                                              var consequent_10 = ($$anchor13) => {
                                                var text_15 = text();
                                                template_effect(($0) => set_text(text_15, $0), [
                                                  () => ($i18n(), untrack(() => $i18n().t("Not factually correct")))
                                                ]);
                                                append($$anchor13, text_15);
                                              };
                                              var alternate_4 = ($$anchor13) => {
                                                var fragment_21 = comment();
                                                var node_13 = first_child(fragment_21);
                                                {
                                                  var consequent_11 = ($$anchor14) => {
                                                    var text_16 = text();
                                                    template_effect(($0) => set_text(text_16, $0), [
                                                      () => ($i18n(), untrack(() => $i18n().t("Didn't fully follow instructions")))
                                                    ]);
                                                    append($$anchor14, text_16);
                                                  };
                                                  var alternate_3 = ($$anchor14) => {
                                                    var fragment_23 = comment();
                                                    var node_14 = first_child(fragment_23);
                                                    {
                                                      var consequent_12 = ($$anchor15) => {
                                                        var text_17 = text();
                                                        template_effect(($0) => set_text(text_17, $0), [
                                                          () => ($i18n(), untrack(() => $i18n().t("Refused when it shouldn't have")))
                                                        ]);
                                                        append($$anchor15, text_17);
                                                      };
                                                      var alternate_2 = ($$anchor15) => {
                                                        var fragment_25 = comment();
                                                        var node_15 = first_child(fragment_25);
                                                        {
                                                          var consequent_13 = ($$anchor16) => {
                                                            var text_18 = text();
                                                            template_effect(($0) => set_text(text_18, $0), [() => ($i18n(), untrack(() => $i18n().t("Being lazy")))]);
                                                            append($$anchor16, text_18);
                                                          };
                                                          var alternate_1 = ($$anchor16) => {
                                                            var fragment_27 = comment();
                                                            var node_16 = first_child(fragment_27);
                                                            {
                                                              var consequent_14 = ($$anchor17) => {
                                                                var text_19 = text();
                                                                template_effect(($0) => set_text(text_19, $0), [() => ($i18n(), untrack(() => $i18n().t("Other")))]);
                                                                append($$anchor17, text_19);
                                                              };
                                                              var alternate = ($$anchor17) => {
                                                                var text_20 = text();
                                                                template_effect(() => set_text(text_20, get(reason)));
                                                                append($$anchor17, text_20);
                                                              };
                                                              if_block(
                                                                node_16,
                                                                ($$render) => {
                                                                  if (get(reason) === "other") $$render(consequent_14);
                                                                  else $$render(alternate, false);
                                                                },
                                                                true
                                                              );
                                                            }
                                                            append($$anchor16, fragment_27);
                                                          };
                                                          if_block(
                                                            node_15,
                                                            ($$render) => {
                                                              if (get(reason) === "being_lazy") $$render(consequent_13);
                                                              else $$render(alternate_1, false);
                                                            },
                                                            true
                                                          );
                                                        }
                                                        append($$anchor15, fragment_25);
                                                      };
                                                      if_block(
                                                        node_14,
                                                        ($$render) => {
                                                          if (get(reason) === "refused_when_it_shouldnt_have") $$render(consequent_12);
                                                          else $$render(alternate_2, false);
                                                        },
                                                        true
                                                      );
                                                    }
                                                    append($$anchor14, fragment_23);
                                                  };
                                                  if_block(
                                                    node_13,
                                                    ($$render) => {
                                                      if (get(reason) === "didnt_fully_follow_instructions") $$render(consequent_11);
                                                      else $$render(alternate_3, false);
                                                    },
                                                    true
                                                  );
                                                }
                                                append($$anchor13, fragment_21);
                                              };
                                              if_block(
                                                node_12,
                                                ($$render) => {
                                                  if (get(reason) === "not_factually_correct") $$render(consequent_10);
                                                  else $$render(alternate_4, false);
                                                },
                                                true
                                              );
                                            }
                                            append($$anchor12, fragment_19);
                                          };
                                          if_block(
                                            node_11,
                                            ($$render) => {
                                              if (get(reason) === "not_helpful") $$render(consequent_9);
                                              else $$render(alternate_5, false);
                                            },
                                            true
                                          );
                                        }
                                        append($$anchor11, fragment_17);
                                      };
                                      if_block(
                                        node_10,
                                        ($$render) => {
                                          if (get(reason) === "too_verbose") $$render(consequent_8);
                                          else $$render(alternate_6, false);
                                        },
                                        true
                                      );
                                    }
                                    append($$anchor10, fragment_15);
                                  };
                                  if_block(
                                    node_9,
                                    ($$render) => {
                                      if (get(reason) === "dont_like_the_style") $$render(consequent_7);
                                      else $$render(alternate_7, false);
                                    },
                                    true
                                  );
                                }
                                append($$anchor9, fragment_13);
                              };
                              if_block(
                                node_8,
                                ($$render) => {
                                  if (get(reason) === "thorough_explanation") $$render(consequent_6);
                                  else $$render(alternate_8, false);
                                },
                                true
                              );
                            }
                            append($$anchor8, fragment_11);
                          };
                          if_block(
                            node_7,
                            ($$render) => {
                              if (get(reason) === "attention_to_detail") $$render(consequent_5);
                              else $$render(alternate_9, false);
                            },
                            true
                          );
                        }
                        append($$anchor7, fragment_9);
                      };
                      if_block(
                        node_6,
                        ($$render) => {
                          if (get(reason) === "positive_attitude") $$render(consequent_4);
                          else $$render(alternate_10, false);
                        },
                        true
                      );
                    }
                    append($$anchor6, fragment_7);
                  };
                  if_block(
                    node_5,
                    ($$render) => {
                      if (get(reason) === "showcased_creativity") $$render(consequent_3);
                      else $$render(alternate_11, false);
                    },
                    true
                  );
                }
                append($$anchor5, fragment_5);
              };
              if_block(
                node_4,
                ($$render) => {
                  if (get(reason) === "followed_instructions_perfectly") $$render(consequent_2);
                  else $$render(alternate_12, false);
                },
                true
              );
            }
            append($$anchor4, fragment_3);
          };
          if_block(node_3, ($$render) => {
            if (get(reason) === "accurate_information") $$render(consequent_1);
            else $$render(alternate_13, false);
          });
        }
        reset(button_2);
        template_effect(() => set_class(button_2, 1, `px-3 py-0.5 border border-gray-100 dark:border-gray-850 hover:bg-gray-50 dark:hover:bg-gray-850 ${get(selectedReason) === get(reason) ? "bg-gray-100 dark:bg-gray-800" : ""} transition rounded-xl`));
        event("click", button_2, () => {
          set(selectedReason, get(reason));
        });
        append($$anchor3, button_2);
      });
      reset(div_12);
      template_effect(($0) => set_text(text_5, $0), [() => ($i18n(), untrack(() => $i18n().t("Why?")))]);
      append($$anchor2, fragment_1);
    };
    if_block(node_2, ($$render) => {
      if (get(reasons), untrack(() => get(reasons).length > 0)) $$render(consequent_15);
    });
  }
  reset(div_10);
  var div_13 = sibling(div_10, 2);
  var textarea = child(div_13);
  remove_textarea_child(textarea);
  reset(div_13);
  var div_14 = sibling(div_13, 2);
  var div_15 = child(div_14);
  var node_17 = child(div_15);
  {
    let $0 = derived_safe_equal(() => $_tags() ?? []);
    Tags(node_17, {
      get tags() {
        return get(tags$1);
      },
      get suggestionTags() {
        return get($0);
      },
      $$events: {
        delete: (e) => {
          set(tags$1, get(tags$1).filter((tag) => tag.name.replaceAll(" ", "_").toLowerCase() !== e.detail.replaceAll(" ", "_").toLowerCase()));
        },
        add: (e) => {
          set(tags$1, [...get(tags$1), { name: e.detail }]);
        }
      }
    });
  }
  reset(div_15);
  var button_3 = sibling(div_15, 2);
  var text_21 = child(button_3, true);
  reset(button_3);
  reset(div_14);
  reset(div_1);
  template_effect(
    ($0, $1, $2, $3, $4) => {
      set_attribute(div_1, "id", `message-feedback-${(deep_read_state(message()), untrack(() => message().id)) ?? ""}`);
      set_text(text_1, $0);
      set_text(text_3, `1 - ${$1 ?? ""}`);
      set_text(text_4, `10 - ${$2 ?? ""}`);
      set_attribute(textarea, "placeholder", $3);
      set_text(text_21, $4);
    },
    [
      () => ($i18n(), untrack(() => $i18n().t("How would you rate this response?"))),
      () => ($i18n(), untrack(() => $i18n().t("Awful"))),
      () => ($i18n(), untrack(() => $i18n().t("Amazing"))),
      () => ($i18n(), untrack(() => $i18n().t("Feel free to add specific details"))),
      () => ($i18n(), untrack(() => $i18n().t("Save")))
    ]
  );
  event("click", button, () => {
    show(false);
  });
  bind_value(textarea, () => get(comment$1), ($$value) => set(comment$1, $$value));
  event("click", button_3, () => {
    saveHandler();
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_1$b = from_html(`<div class="flex items-center gap-2 text-gray-500 transition"><!> <!></div>`);
var root_5$7 = from_html(`<a target="_blank" class="flex w-full items-center p-1 px-3 group/item justify-between text-gray-800 dark:text-gray-300 font-normal! no-underline!"><div class="flex gap-2 items-center"><!> <div class=" line-clamp-1"> </div></div> <div class=" ml-1 text-white dark:text-gray-900 group-hover/item:text-gray-600 dark:group-hover/item:text-white transition"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clip-rule="evenodd"></path></svg></div></a>`);
var root_7$5 = from_html(`<a target="_blank" class="flex w-full items-center p-1 px-3 group/item justify-between text-gray-800 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-850 rounded-lg font-normal! no-underline! mb-1"><div class=" flex justify-center items-center gap-3"><div class="w-fit"><img alt="favicon" class="size-3.5"/></div> <div class="w-full text-sm line-clamp-1"> </div></div> <div class=" ml-1 text-white dark:text-gray-900 group-hover/item:text-gray-600 dark:group-hover/item:text-white transition"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clip-rule="evenodd"></path></svg></div></a>`);
var root_10$4 = from_html(`<a target="_blank" class="flex w-full items-center p-1 px-3 group/item justify-between text-gray-800 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-850 rounded-lg no-underline mb-1"><div class=" flex justify-center items-center gap-3"><div class="w-fit"><img alt="favicon" class="size-3.5"/></div> <div class="w-full text-sm line-clamp-1"> </div></div> <div class=" ml-1 text-white dark:text-gray-900 group-hover/item:text-gray-600 dark:group-hover/item:text-white transition"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clip-rule="evenodd"></path></svg></div></a>`);
var root_4$7 = from_html(`<div class="text-sm border border-gray-50 dark:border-gray-850 rounded-xl my-1.5 p-2 w-full" slot="content"><!> <!></div>`);
function WebSearchResults($$anchor, $$props) {
  push($$props, false);
  let status = prop($$props, "status", 24, () => ({ urls: [], query: "" }));
  let state = mutable_source(false);
  init();
  Collapsible($$anchor, {
    grow: true,
    className: "w-full",
    buttonClassName: "w-full",
    get open() {
      return get(state);
    },
    set open($$value) {
      set(state, $$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var div = root_1$b();
      var node = child(div);
      slot(node, $$props, "default", {}, null);
      var node_1 = sibling(node, 2);
      {
        var consequent = ($$anchor3) => {
          ChevronUp($$anchor3, { strokeWidth: "2.5", className: "size-3.5 " });
        };
        var alternate = ($$anchor3) => {
          ChevronDown($$anchor3, { strokeWidth: "2.5", className: "size-3.5 " });
        };
        if_block(node_1, ($$render) => {
          if (get(state)) $$render(consequent);
          else $$render(alternate, false);
        });
      }
      reset(div);
      append($$anchor2, div);
    },
    $$slots: {
      default: true,
      content: ($$anchor2, $$slotProps) => {
        var div_1 = root_4$7();
        var node_2 = child(div_1);
        {
          var consequent_1 = ($$anchor3) => {
            var a = root_5$7();
            var div_2 = child(a);
            var node_3 = child(div_2);
            Search(node_3, {});
            var div_3 = sibling(node_3, 2);
            var text2 = child(div_3, true);
            reset(div_3);
            reset(div_2);
            next(2);
            reset(a);
            template_effect(() => {
              set_attribute(a, "href", `https://www.google.com/search?q=${(deep_read_state(status()), untrack(() => status().query)) ?? ""}`);
              set_text(text2, (deep_read_state(status()), untrack(() => status().query)));
            });
            append($$anchor3, a);
          };
          if_block(node_2, ($$render) => {
            if (deep_read_state(status()), untrack(() => {
              var _a;
              return (_a = status()) == null ? void 0 : _a.query;
            })) $$render(consequent_1);
          });
        }
        var node_4 = sibling(node_2, 2);
        {
          var consequent_2 = ($$anchor3) => {
            var fragment_3 = comment();
            var node_5 = first_child(fragment_3);
            each(node_5, 1, () => (deep_read_state(status()), untrack(() => status().items)), index, ($$anchor4, item) => {
              var a_1 = root_7$5();
              var div_4 = child(a_1);
              var div_5 = child(div_4);
              var img = child(div_5);
              reset(div_5);
              var div_6 = sibling(div_5, 2);
              var text_1 = child(div_6, true);
              reset(div_6);
              reset(div_4);
              next(2);
              reset(a_1);
              template_effect(() => {
                set_attribute(a_1, "href", (get(item), untrack(() => get(item).link)));
                set_attribute(img, "src", `https://www.google.com/s2/favicons?sz=32&domain=${(get(item), untrack(() => get(item).link)) ?? ""}`);
                set_text(text_1, (get(item), untrack(() => {
                  var _a;
                  return ((_a = get(item)) == null ? void 0 : _a.title) ?? get(item).link;
                })));
              });
              append($$anchor4, a_1);
            });
            append($$anchor3, fragment_3);
          };
          var alternate_1 = ($$anchor3) => {
            var fragment_4 = comment();
            var node_6 = first_child(fragment_4);
            {
              var consequent_3 = ($$anchor4) => {
                var fragment_5 = comment();
                var node_7 = first_child(fragment_5);
                each(node_7, 1, () => (deep_read_state(status()), untrack(() => status().urls)), index, ($$anchor5, url) => {
                  var a_2 = root_10$4();
                  var div_7 = child(a_2);
                  var div_8 = child(div_7);
                  var img_1 = child(div_8);
                  reset(div_8);
                  var div_9 = sibling(div_8, 2);
                  var text_2 = child(div_9, true);
                  reset(div_9);
                  reset(div_7);
                  next(2);
                  reset(a_2);
                  template_effect(() => {
                    set_attribute(a_2, "href", get(url));
                    set_attribute(img_1, "src", `https://www.google.com/s2/favicons?sz=32&domain=${get(url) ?? ""}`);
                    set_text(text_2, get(url));
                  });
                  append($$anchor5, a_2);
                });
                append($$anchor4, fragment_5);
              };
              if_block(
                node_6,
                ($$render) => {
                  if (deep_read_state(status()), untrack(() => {
                    var _a;
                    return (_a = status()) == null ? void 0 : _a.urls;
                  })) $$render(consequent_3);
                },
                true
              );
            }
            append($$anchor3, fragment_4);
          };
          if_block(node_4, ($$render) => {
            if (deep_read_state(status()), untrack(() => {
              var _a;
              return (_a = status()) == null ? void 0 : _a.items;
            })) $$render(consequent_2);
            else $$render(alternate_1, false);
          });
        }
        reset(div_1);
        append($$anchor2, div_1);
      }
    },
    $$legacy: true
  });
  pop();
}
var root$d = from_html(`<div class="flex my-2 gap-2.5 border px-4 py-3 border-red-600/10 bg-red-600/10 rounded-lg"><div class=" self-start mt-0.5"><!></div> <div class=" self-center text-sm"><!></div></div>`);
function Error$1($$anchor, $$props) {
  push($$props, false);
  let content = prop($$props, "content", 8, "");
  init();
  var div = root$d();
  var div_1 = child(div);
  var node = child(div_1);
  Info(node, { className: "size-5 text-red-700 dark:text-red-400" });
  reset(div_1);
  var div_2 = sibling(div_1, 2);
  var node_1 = child(div_2);
  {
    var consequent = ($$anchor2) => {
      var text$1 = text();
      template_effect(() => set_text(text$1, content()));
      append($$anchor2, text$1);
    };
    var alternate_4 = ($$anchor2) => {
      var fragment_1 = comment();
      var node_2 = first_child(fragment_1);
      {
        var consequent_4 = ($$anchor3) => {
          var fragment_2 = comment();
          var node_3 = first_child(fragment_2);
          {
            var consequent_1 = ($$anchor4) => {
              var text_1 = text();
              template_effect(() => set_text(text_1, (deep_read_state(content()), untrack(() => content().error.message))));
              append($$anchor4, text_1);
            };
            var alternate_2 = ($$anchor4) => {
              var fragment_4 = comment();
              var node_4 = first_child(fragment_4);
              {
                var consequent_2 = ($$anchor5) => {
                  var text_2 = text();
                  template_effect(() => set_text(text_2, (deep_read_state(content()), untrack(() => content().detail))));
                  append($$anchor5, text_2);
                };
                var alternate_1 = ($$anchor5) => {
                  var fragment_6 = comment();
                  var node_5 = first_child(fragment_6);
                  {
                    var consequent_3 = ($$anchor6) => {
                      var text_3 = text();
                      template_effect(() => set_text(text_3, (deep_read_state(content()), untrack(() => content().message))));
                      append($$anchor6, text_3);
                    };
                    var alternate = ($$anchor6) => {
                      var text_4 = text();
                      template_effect(($0) => set_text(text_4, $0), [
                        () => (deep_read_state(content()), untrack(() => JSON.stringify(content())))
                      ]);
                      append($$anchor6, text_4);
                    };
                    if_block(
                      node_5,
                      ($$render) => {
                        if (deep_read_state(content()), untrack(() => {
                          var _a;
                          return (_a = content()) == null ? void 0 : _a.message;
                        })) $$render(consequent_3);
                        else $$render(alternate, false);
                      },
                      true
                    );
                  }
                  append($$anchor5, fragment_6);
                };
                if_block(
                  node_4,
                  ($$render) => {
                    if (deep_read_state(content()), untrack(() => {
                      var _a;
                      return (_a = content()) == null ? void 0 : _a.detail;
                    })) $$render(consequent_2);
                    else $$render(alternate_1, false);
                  },
                  true
                );
              }
              append($$anchor4, fragment_4);
            };
            if_block(node_3, ($$render) => {
              if (deep_read_state(content()), untrack(() => {
                var _a, _b, _c;
                return ((_a = content()) == null ? void 0 : _a.error) && ((_c = (_b = content()) == null ? void 0 : _b.error) == null ? void 0 : _c.message);
              })) $$render(consequent_1);
              else $$render(alternate_2, false);
            });
          }
          append($$anchor3, fragment_2);
        };
        var alternate_3 = ($$anchor3) => {
          var text_5 = text();
          template_effect(($0) => set_text(text_5, $0), [
            () => (deep_read_state(content()), untrack(() => JSON.stringify(content())))
          ]);
          append($$anchor3, text_5);
        };
        if_block(
          node_2,
          ($$render) => {
            if (typeof content() === "object" && content() !== null) $$render(consequent_4);
            else $$render(alternate_3, false);
          },
          true
        );
      }
      append($$anchor2, fragment_1);
    };
    if_block(node_1, ($$render) => {
      if (typeof content() === "string") $$render(consequent);
      else $$render(alternate_4, false);
    });
  }
  reset(div_2);
  reset(div);
  append($$anchor, div);
  pop();
}
var root_4$6 = from_html(`<a class="hover:text-gray-500 dark:hover:text-gray-100 underline grow line-clamp-1" target="_blank"> </a>`);
var root_8$3 = from_html(`<div><div class="text-sm font-medium dark:text-gray-300 mb-1"> </div> <!></div>`);
var root_12$4 = from_html(`<span> </span>`);
var root_14$4 = from_html(`<span class="text-gray-500 dark:text-gray-500"> </span>`);
var root_10$3 = from_html(`<div class="text-sm my-1 dark:text-gray-400 flex items-center gap-2 w-fit"><!></div>`);
var root_15$2 = from_html(`<span class="text-sm text-gray-500 dark:text-gray-400"> </span>`);
var root_16$2 = from_html(`<iframe class="w-full border-0 h-auto rounded-none" sandbox="allow-scripts allow-forms allow-same-origin"></iframe>`);
var root_17$2 = from_html(`<pre class="text-sm dark:text-gray-400 whitespace-pre-line"> </pre>`);
var root_7$4 = from_html(`<div class="flex flex-col w-full gap-2"><!> <div><div class=" text-sm font-medium dark:text-gray-300 flex items-center gap-2 w-fit mb-1"> <!> <!></div> <!></div></div>`);
var root_1$a = from_html(`<div><div class=" flex justify-between dark:text-gray-300 px-4.5 pt-3 pb-2"><div class=" text-lg font-medium self-center flex items-center"><!></div> <button class="self-center"><!></button></div> <div class="flex flex-col md:flex-row w-full px-5 pb-5 md:space-x-4"><div class="flex flex-col w-full dark:text-gray-200 overflow-y-scroll max-h-[22rem] scrollbar-thin gap-1"></div></div></div>`);
function CitationModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let citation = prop($$props, "citation", 8);
  let showPercentage = prop($$props, "showPercentage", 8, false);
  let showRelevance = prop($$props, "showRelevance", 8, true);
  let mergedDocuments = mutable_source([]);
  function calculatePercentage(distance) {
    if (typeof distance !== "number") return null;
    if (distance < 0) return 0;
    if (distance > 1) return 100;
    return Math.round(distance * 1e4) / 100;
  }
  function getRelevanceColor(percentage) {
    if (percentage >= 80) return "bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200";
    if (percentage >= 60) return "bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200";
    if (percentage >= 40) return "bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200";
    return "bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200";
  }
  const decodeString = (str) => {
    try {
      return decodeURIComponent(str);
    } catch (e) {
      return str;
    }
  };
  legacy_pre_effect(() => (deep_read_state(citation()), get(mergedDocuments)), () => {
    var _a;
    if (citation()) {
      set(mergedDocuments, (_a = citation().document) == null ? void 0 : _a.map((c, i) => {
        var _a2, _b;
        return {
          source: citation().source,
          document: c,
          metadata: (_a2 = citation().metadata) == null ? void 0 : _a2[i],
          distance: (_b = citation().distances) == null ? void 0 : _b[i]
        };
      }));
      if (get(mergedDocuments).every((doc) => doc.distance !== void 0)) {
        set(mergedDocuments, get(mergedDocuments).sort((a, b) => (b.distance ?? Infinity) - (a.distance ?? Infinity)));
      }
    }
  });
  legacy_pre_effect_reset();
  init();
  Modal($$anchor, {
    size: "lg",
    get show() {
      return show();
    },
    set show($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var div = root_1$a();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var node = child(div_2);
      {
        var consequent_1 = ($$anchor3) => {
          const document2 = derived_safe_equal(() => (get(mergedDocuments), untrack(() => {
            var _a;
            return (_a = get(mergedDocuments)) == null ? void 0 : _a[0];
          })));
          var fragment_1 = comment();
          var node_1 = first_child(fragment_1);
          {
            var consequent = ($$anchor4) => {
              {
                let $0 = derived_safe_equal(() => (deep_read_state(get(document2)), $i18n(), untrack(() => {
                  var _a, _b;
                  return ((_b = (_a = get(document2).source) == null ? void 0 : _a.url) == null ? void 0 : _b.includes("http")) ? $i18n().t("Open link") : $i18n().t("Open file");
                })));
                Tooltip($$anchor4, {
                  className: "w-fit",
                  get content() {
                    return get($0);
                  },
                  placement: "top-start",
                  tippyOptions: { duration: [500, 0] },
                  children: ($$anchor5, $$slotProps2) => {
                    var a_1 = root_4$6();
                    var text2 = child(a_1, true);
                    reset(a_1);
                    template_effect(
                      ($02, $1) => {
                        set_attribute(a_1, "href", $02);
                        set_text(text2, $1);
                      },
                      [
                        () => (deep_read_state(get(document2)), deep_read_state(WEBUI_API_BASE_URL), untrack(() => {
                          var _a, _b, _c, _d, _e, _f, _g, _h;
                          return ((_b = (_a = get(document2)) == null ? void 0 : _a.metadata) == null ? void 0 : _b.file_id) ? `${WEBUI_API_BASE_URL}/files/${(_d = (_c = get(document2)) == null ? void 0 : _c.metadata) == null ? void 0 : _d.file_id}/content${((_f = (_e = get(document2)) == null ? void 0 : _e.metadata) == null ? void 0 : _f.page) !== void 0 ? `#page=${get(document2).metadata.page + 1}` : ""}` : ((_h = (_g = get(document2).source) == null ? void 0 : _g.url) == null ? void 0 : _h.includes("http")) ? get(document2).source.url : `#`;
                        })),
                        () => (deep_read_state(citation()), untrack(() => {
                          var _a, _b;
                          return decodeString((_b = (_a = citation()) == null ? void 0 : _a.source) == null ? void 0 : _b.name);
                        }))
                      ]
                    );
                    append($$anchor5, a_1);
                  },
                  $$slots: { default: true }
                });
              }
            };
            var alternate = ($$anchor4) => {
              var text_1 = text();
              template_effect(($0) => set_text(text_1, $0), [
                () => (deep_read_state(citation()), untrack(() => {
                  var _a, _b;
                  return decodeString((_b = (_a = citation()) == null ? void 0 : _a.source) == null ? void 0 : _b.name);
                }))
              ]);
              append($$anchor4, text_1);
            };
            if_block(node_1, ($$render) => {
              if (deep_read_state(get(document2)), untrack(() => {
                var _a, _b, _c, _d;
                return ((_b = (_a = get(document2)) == null ? void 0 : _a.metadata) == null ? void 0 : _b.file_id) || ((_d = (_c = get(document2).source) == null ? void 0 : _c.url) == null ? void 0 : _d.includes("http"));
              })) $$render(consequent);
              else $$render(alternate, false);
            });
          }
          append($$anchor3, fragment_1);
        };
        var alternate_1 = ($$anchor3) => {
          var text_2 = text();
          template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Citation")))]);
          append($$anchor3, text_2);
        };
        if_block(node, ($$render) => {
          if (deep_read_state(citation()), untrack(() => {
            var _a, _b;
            return (_b = (_a = citation()) == null ? void 0 : _a.source) == null ? void 0 : _b.name;
          })) $$render(consequent_1);
          else $$render(alternate_1, false);
        });
      }
      reset(div_2);
      var button = sibling(div_2, 2);
      var node_2 = child(button);
      XMark(node_2, { className: "size-5" });
      reset(button);
      reset(div_1);
      var div_3 = sibling(div_1, 2);
      var div_4 = child(div_3);
      each(div_4, 5, () => get(mergedDocuments), index, ($$anchor3, document2) => {
        var div_5 = root_7$4();
        var node_3 = child(div_5);
        {
          var consequent_2 = ($$anchor4) => {
            var div_6 = root_8$3();
            var div_7 = child(div_6);
            var text_3 = child(div_7, true);
            reset(div_7);
            var node_4 = sibling(div_7, 2);
            {
              let $0 = derived_safe_equal(() => (get(document2), untrack(() => JSON.stringify(get(document2).metadata.parameters, null, 2))));
              Textarea(node_4, {
                readonly: true,
                get value() {
                  return get($0);
                }
              });
            }
            reset(div_6);
            template_effect(($0) => set_text(text_3, $0), [() => ($i18n(), untrack(() => $i18n().t("Parameters")))]);
            append($$anchor4, div_6);
          };
          if_block(node_3, ($$render) => {
            if (get(document2), untrack(() => {
              var _a;
              return (_a = get(document2).metadata) == null ? void 0 : _a.parameters;
            })) $$render(consequent_2);
          });
        }
        var div_8 = sibling(node_3, 2);
        var div_9 = child(div_8);
        var text_4 = child(div_9);
        var node_5 = sibling(text_4);
        {
          var consequent_6 = ($$anchor4) => {
            {
              let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Relevance"))));
              Tooltip($$anchor4, {
                className: "w-fit",
                get content() {
                  return get($0);
                },
                placement: "top-start",
                tippyOptions: { duration: [500, 0] },
                children: ($$anchor5, $$slotProps2) => {
                  var div_10 = root_10$3();
                  var node_6 = child(div_10);
                  {
                    var consequent_4 = ($$anchor6) => {
                      const percentage = derived_safe_equal(() => (get(document2), untrack(() => calculatePercentage(get(document2).distance))));
                      var fragment_6 = comment();
                      var node_7 = first_child(fragment_6);
                      {
                        var consequent_3 = ($$anchor7) => {
                          var span = root_12$4();
                          var text_5 = child(span);
                          reset(span);
                          template_effect(
                            ($02, $1) => {
                              set_class(span, 1, $02);
                              set_text(text_5, `${$1 ?? ""}%`);
                            },
                            [
                              () => (deep_read_state(get(percentage)), untrack(() => `px-1 rounded-sm font-medium ${getRelevanceColor(get(percentage))}`)),
                              () => (deep_read_state(get(percentage)), untrack(() => get(percentage).toFixed(2)))
                            ]
                          );
                          append($$anchor7, span);
                        };
                        if_block(node_7, ($$render) => {
                          if (typeof get(percentage) === "number") $$render(consequent_3);
                        });
                      }
                      append($$anchor6, fragment_6);
                    };
                    var alternate_2 = ($$anchor6) => {
                      var fragment_7 = comment();
                      var node_8 = first_child(fragment_7);
                      {
                        var consequent_5 = ($$anchor7) => {
                          var span_1 = root_14$4();
                          var text_6 = child(span_1);
                          reset(span_1);
                          template_effect(($02) => set_text(text_6, `(${$02 ?? ""})`), [
                            () => (get(document2), untrack(() => {
                              var _a;
                              return (((_a = get(document2)) == null ? void 0 : _a.distance) ?? 0).toFixed(4);
                            }))
                          ]);
                          append($$anchor7, span_1);
                        };
                        if_block(
                          node_8,
                          ($$render) => {
                            if (get(document2), untrack(() => {
                              var _a;
                              return typeof ((_a = get(document2)) == null ? void 0 : _a.distance) === "number";
                            })) $$render(consequent_5);
                          },
                          true
                        );
                      }
                      append($$anchor6, fragment_7);
                    };
                    if_block(node_6, ($$render) => {
                      if (showPercentage()) $$render(consequent_4);
                      else $$render(alternate_2, false);
                    });
                  }
                  reset(div_10);
                  append($$anchor5, div_10);
                },
                $$slots: { default: true }
              });
            }
          };
          if_block(node_5, ($$render) => {
            if (deep_read_state(showRelevance()), get(document2), untrack(() => showRelevance() && get(document2).distance !== void 0)) $$render(consequent_6);
          });
        }
        var node_9 = sibling(node_5, 2);
        {
          var consequent_7 = ($$anchor4) => {
            var span_2 = root_15$2();
            var text_7 = child(span_2);
            reset(span_2);
            template_effect(
              ($0) => set_text(text_7, `(${$0 ?? ""}
										${(get(document2), untrack(() => get(document2).metadata.page + 1)) ?? ""})`),
              [() => ($i18n(), untrack(() => $i18n().t("page")))]
            );
            append($$anchor4, span_2);
          };
          if_block(node_9, ($$render) => {
            if (get(document2), untrack(() => {
              var _a, _b;
              return Number.isInteger((_b = (_a = get(document2)) == null ? void 0 : _a.metadata) == null ? void 0 : _b.page);
            })) $$render(consequent_7);
          });
        }
        reset(div_9);
        var node_10 = sibling(div_9, 2);
        {
          var consequent_8 = ($$anchor4) => {
            var iframe = root_16$2();
            template_effect(
              ($0) => {
                set_attribute(iframe, "srcdoc", (get(document2), untrack(() => get(document2).document)));
                set_attribute(iframe, "title", $0);
              },
              [() => ($i18n(), untrack(() => $i18n().t("Content")))]
            );
            append($$anchor4, iframe);
          };
          var alternate_3 = ($$anchor4) => {
            var pre = root_17$2();
            var text_8 = child(pre, true);
            reset(pre);
            template_effect(($0) => set_text(text_8, $0), [
              () => (get(document2), untrack(() => get(document2).document.trim().replace(/\n\n+/g, "\n\n")))
            ]);
            append($$anchor4, pre);
          };
          if_block(node_10, ($$render) => {
            if (get(document2), untrack(() => {
              var _a;
              return (_a = get(document2).metadata) == null ? void 0 : _a.html;
            })) $$render(consequent_8);
            else $$render(alternate_3, false);
          });
        }
        reset(div_8);
        reset(div_5);
        template_effect(($0) => set_text(text_4, `${$0 ?? ""} `), [() => ($i18n(), untrack(() => $i18n().t("Content")))]);
        append($$anchor3, div_5);
      });
      reset(div_4);
      reset(div_3);
      reset(div);
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
var root_3$a = from_html(`<img alt="favicon" class="size-4 rounded-full shrink-0 border border-white dark:border-gray-850 bg-white dark:bg-gray-900"/>`);
var root_2$c = from_html(`<div class="flex -space-x-1 items-center"></div>`);
var root_1$9 = from_html(`<div class=" py-1 -mx-0.5 w-full flex gap-1 items-center flex-wrap"><button class="text-xs font-medium text-gray-600 dark:text-gray-300 px-3.5 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center gap-1 border border-gray-50 dark:border-gray-850"><!> <div><!></div></button></div>`);
var root_7$3 = from_html(`<button class="no-toggle outline-hidden flex dark:text-gray-300 bg-transparent text-gray-600 rounded-xl gap-1.5 items-center"><div class=" font-medium bg-gray-50 dark:bg-gray-850 rounded-md px-1"></div> <div class="flex-1 truncate hover:text-black dark:text-white/60 dark:hover:text-white transition text-left"> </div></button>`);
var root_6$4 = from_html(`<div class="py-1.5"><div class="text-xs gap-2 flex flex-col"></div></div>`);
var root$c = from_html(`<!> <!> <!>`, 1);
function Citations($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let id = prop($$props, "id", 8, "");
  let sources = prop($$props, "sources", 24, () => []);
  let readOnly = prop($$props, "readOnly", 8, false);
  let citations = mutable_source([]);
  let showPercentage = mutable_source(false);
  let showRelevance = mutable_source(true);
  let showCitations = mutable_source(false);
  let showCitationModal = mutable_source(false);
  let selectedCitation = mutable_source(null);
  const showSourceModal = (sourceIdx) => {
    var _a, _b, _c, _d;
    if (get(citations)[sourceIdx]) {
      console.log("Showing citation modal for:", get(citations)[sourceIdx]);
      if ((_b = (_a = get(citations)[sourceIdx]) == null ? void 0 : _a.source) == null ? void 0 : _b.embed_url) {
        const embedUrl = get(citations)[sourceIdx].source.embed_url;
        if (embedUrl) {
          if (readOnly()) {
            window.open(embedUrl, "_blank");
            return;
          } else {
            showControls.set(true);
            showEmbeds.set(true);
            embed.set({
              title: ((_d = (_c = get(citations)[sourceIdx]) == null ? void 0 : _c.source) == null ? void 0 : _d.name) || "Embedded Content",
              url: embedUrl
            });
          }
        } else {
          set(selectedCitation, get(citations)[sourceIdx]);
          set(showCitationModal, true);
        }
      } else {
        set(selectedCitation, get(citations)[sourceIdx]);
        set(showCitationModal, true);
      }
    }
  };
  function calculateShowRelevance(sources2) {
    const distances = sources2.flatMap((citation) => citation.distances ?? []);
    const inRange = distances.filter((d) => d !== void 0 && d >= -1 && d <= 1).length;
    const outOfRange = distances.filter((d) => d !== void 0 && (d < -1 || d > 1)).length;
    if (distances.length === 0) {
      return false;
    }
    if (inRange === distances.length - 1 && outOfRange === 1 || outOfRange === distances.length - 1 && inRange === 1) {
      return false;
    }
    return true;
  }
  function shouldShowPercentage(sources2) {
    const distances = sources2.flatMap((citation) => citation.distances ?? []);
    return distances.every((d) => d !== void 0 && d >= -1 && d <= 1);
  }
  const decodeString = (str) => {
    try {
      return decodeURIComponent(str);
    } catch (e) {
      return str;
    }
  };
  legacy_pre_effect(() => (get(citations), deep_read_state(sources())), () => {
    set(citations, sources().reduce(
      (acc, source) => {
        var _a;
        if (Object.keys(source).length === 0) {
          return acc;
        }
        (_a = source == null ? void 0 : source.document) == null ? void 0 : _a.forEach((document2, index2) => {
          var _a2, _b, _c;
          const metadata = (_a2 = source == null ? void 0 : source.metadata) == null ? void 0 : _a2[index2];
          const distance = (_b = source == null ? void 0 : source.distances) == null ? void 0 : _b[index2];
          const id2 = (metadata == null ? void 0 : metadata.source) ?? ((_c = source == null ? void 0 : source.source) == null ? void 0 : _c.id) ?? "N/A";
          let _source = source == null ? void 0 : source.source;
          if (metadata == null ? void 0 : metadata.name) {
            _source = { ..._source, name: metadata.name };
          }
          if (id2.startsWith("http://") || id2.startsWith("https://")) {
            _source = { ..._source, name: id2, url: id2 };
          }
          const existingSource = acc.find((item) => item.id === id2);
          if (existingSource) {
            existingSource.document.push(document2);
            existingSource.metadata.push(metadata);
            if (distance !== void 0) existingSource.distances.push(distance);
          } else {
            acc.push({
              id: id2,
              source: _source,
              document: [document2],
              metadata: metadata ? [metadata] : [],
              distances: distance !== void 0 ? [distance] : []
            });
          }
        });
        return acc;
      },
      []
    ));
    console.log("citations", get(citations));
    set(showRelevance, calculateShowRelevance(get(citations)));
    set(showPercentage, shouldShowPercentage(get(citations)));
  });
  legacy_pre_effect_reset();
  var $$exports = { showSourceModal };
  init();
  var fragment = root$c();
  var node = first_child(fragment);
  CitationModal(node, {
    get citation() {
      return get(selectedCitation);
    },
    get showPercentage() {
      return get(showPercentage);
    },
    get showRelevance() {
      return get(showRelevance);
    },
    get show() {
      return get(showCitationModal);
    },
    set show($$value) {
      set(showCitationModal, $$value);
    },
    $$legacy: true
  });
  var node_1 = sibling(node, 2);
  {
    var consequent_2 = ($$anchor2) => {
      const urlCitations = derived_safe_equal(() => (get(citations), untrack(() => get(citations).filter((c) => {
        var _a, _b;
        return (_b = (_a = c == null ? void 0 : c.source) == null ? void 0 : _a.name) == null ? void 0 : _b.startsWith("http");
      }))));
      var div = root_1$9();
      var button = child(div);
      var node_2 = child(button);
      {
        var consequent = ($$anchor3) => {
          var div_1 = root_2$c();
          each(
            div_1,
            5,
            () => (deep_read_state(get(urlCitations)), untrack(() => get(urlCitations).slice(0, 3))),
            index,
            ($$anchor4, citation) => {
              var img = root_3$a();
              template_effect(() => set_attribute(img, "src", `https://www.google.com/s2/favicons?sz=32&domain=${(get(citation), untrack(() => get(citation).source.name)) ?? ""}`));
              append($$anchor4, img);
            }
          );
          reset(div_1);
          append($$anchor3, div_1);
        };
        if_block(node_2, ($$render) => {
          if (deep_read_state(get(urlCitations)), untrack(() => get(urlCitations).length > 0)) $$render(consequent);
        });
      }
      var div_2 = sibling(node_2, 2);
      var node_3 = child(div_2);
      {
        var consequent_1 = ($$anchor3) => {
          var text$1 = text();
          template_effect(($0) => set_text(text$1, $0), [() => ($i18n(), untrack(() => $i18n().t("1 Source")))]);
          append($$anchor3, text$1);
        };
        var alternate = ($$anchor3) => {
          var text_1 = text();
          template_effect(($0) => set_text(text_1, $0), [
            () => ($i18n(), get(citations), untrack(() => $i18n().t("{{COUNT}} Sources", { COUNT: get(citations).length })))
          ]);
          append($$anchor3, text_1);
        };
        if_block(node_3, ($$render) => {
          if (get(citations), untrack(() => get(citations).length === 1)) $$render(consequent_1);
          else $$render(alternate, false);
        });
      }
      reset(div_2);
      reset(button);
      reset(div);
      event("click", button, () => {
        set(showCitations, !get(showCitations));
      });
      append($$anchor2, div);
    };
    if_block(node_1, ($$render) => {
      if (get(citations), untrack(() => get(citations).length > 0)) $$render(consequent_2);
    });
  }
  var node_4 = sibling(node_1, 2);
  {
    var consequent_3 = ($$anchor2) => {
      var div_3 = root_6$4();
      var div_4 = child(div_3);
      each(div_4, 5, () => get(citations), index, ($$anchor3, citation, idx) => {
        var button_1 = root_7$3();
        var div_5 = child(button_1);
        div_5.textContent = idx + 1;
        var div_6 = sibling(div_5, 2);
        var text_2 = child(div_6, true);
        reset(div_6);
        reset(button_1);
        template_effect(
          ($0) => {
            set_attribute(button_1, "id", `source-${id()}-${idx + 1}`);
            set_text(text_2, $0);
          },
          [
            () => (get(citation), untrack(() => decodeString(get(citation).source.name)))
          ]
        );
        event("click", button_1, () => {
          set(showCitationModal, true);
          set(selectedCitation, get(citation));
        });
        append($$anchor3, button_1);
      });
      reset(div_4);
      reset(div_3);
      append($$anchor2, div_3);
    };
    if_block(node_4, ($$render) => {
      if (get(showCitations)) $$render(consequent_3);
    });
  }
  append($$anchor, fragment);
  bind_prop($$props, "showSourceModal", showSourceModal);
  var $$pop = pop($$exports);
  $$cleanup();
  return $$pop;
}
var root_2$b = from_html(`<div><!></div>`);
var root_7$2 = from_html(`<div><!></div>`);
var root_11$3 = from_html(`<div><div class=" text-gray-500 text-xs mb-1"> </div> <div class="text-sm"> </div></div>`);
var root_12$3 = from_html(`<div><div class=" text-gray-500 text-xs mb-1"> </div> <div class="text-sm"> </div></div>`);
var root_10$2 = from_html(`<div class="dark:bg-[#202123] dark:text-white px-4 py-4 rounded-b-lg flex flex-col gap-3"><!> <!></div>`);
var root_14$3 = from_html(`<li><a target="_blank"> </a></li>`);
var root_13$2 = from_html(`<div class="flex flex-col w-full"><hr class="border-gray-100 dark:border-gray-850 my-2"/> <div class=" text-sm font-medium dark:text-gray-300"> </div> <ul class="mt-1 list-disc pl-4 text-xs"></ul></div>`);
var root_1$8 = from_html(`<div><div class="flex justify-between dark:text-gray-300 px-5 pt-4 pb-2"><div class="text-lg font-medium self-center flex flex-col gap-0.5 capitalize"><!> <div class="flex gap-2 items-center"><!> <div><!></div></div></div> <button class="self-center"><!></button></div> <div class="flex flex-col md:flex-row w-full px-4 pb-5"><div class="flex flex-col w-full dark:text-gray-200 overflow-y-scroll max-h-[22rem] scrollbar-hidden"><div class="flex flex-col w-full"><!></div> <!> <!></div></div></div>`);
function CodeExecutionModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let codeExecution = prop($$props, "codeExecution", 12, null);
  init();
  Modal($$anchor, {
    size: "lg",
    get show() {
      return show();
    },
    set show($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var div = root_1$8();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var node = child(div_2);
      {
        var consequent_2 = ($$anchor3) => {
          var div_3 = root_2$b();
          var node_1 = child(div_3);
          {
            var consequent = ($$anchor4) => {
              Badge($$anchor4, { type: "error", content: "error" });
            };
            var alternate_1 = ($$anchor4) => {
              var fragment_2 = comment();
              var node_2 = first_child(fragment_2);
              {
                var consequent_1 = ($$anchor5) => {
                  Badge($$anchor5, { type: "success", content: "success" });
                };
                var alternate = ($$anchor5) => {
                  Badge($$anchor5, { type: "warning", content: "incomplete" });
                };
                if_block(
                  node_2,
                  ($$render) => {
                    if (deep_read_state(codeExecution()), untrack(() => {
                      var _a;
                      return (_a = codeExecution().result) == null ? void 0 : _a.output;
                    })) $$render(consequent_1);
                    else $$render(alternate, false);
                  },
                  true
                );
              }
              append($$anchor4, fragment_2);
            };
            if_block(node_1, ($$render) => {
              if (deep_read_state(codeExecution()), untrack(() => {
                var _a;
                return (_a = codeExecution().result) == null ? void 0 : _a.error;
              })) $$render(consequent);
              else $$render(alternate_1, false);
            });
          }
          reset(div_3);
          append($$anchor3, div_3);
        };
        if_block(node, ($$render) => {
          if (deep_read_state(codeExecution()), untrack(() => {
            var _a;
            return (_a = codeExecution()) == null ? void 0 : _a.result;
          })) $$render(consequent_2);
        });
      }
      var div_4 = sibling(node, 2);
      var node_3 = child(div_4);
      {
        var consequent_3 = ($$anchor3) => {
          var div_5 = root_7$2();
          var node_4 = child(div_5);
          Spinner(node_4, { className: "size-4" });
          reset(div_5);
          append($$anchor3, div_5);
        };
        if_block(node_3, ($$render) => {
          if (deep_read_state(codeExecution()), untrack(() => {
            var _a;
            return !((_a = codeExecution()) == null ? void 0 : _a.result);
          })) $$render(consequent_3);
        });
      }
      var div_6 = sibling(node_3, 2);
      var node_5 = child(div_6);
      {
        var consequent_4 = ($$anchor3) => {
          var text$1 = text();
          template_effect(
            ($0) => set_text(text$1, `${$0 ?? ""}: ${(deep_read_state(codeExecution()), untrack(() => {
              var _a;
              return (_a = codeExecution()) == null ? void 0 : _a.name;
            })) ?? ""}`),
            [
              () => ($i18n(), untrack(() => $i18n().t("Code execution")))
            ]
          );
          append($$anchor3, text$1);
        };
        var alternate_2 = ($$anchor3) => {
          var text_1 = text();
          template_effect(($0) => set_text(text_1, $0), [
            () => ($i18n(), untrack(() => $i18n().t("Code execution")))
          ]);
          append($$anchor3, text_1);
        };
        if_block(node_5, ($$render) => {
          if (deep_read_state(codeExecution()), untrack(() => {
            var _a;
            return (_a = codeExecution()) == null ? void 0 : _a.name;
          })) $$render(consequent_4);
          else $$render(alternate_2, false);
        });
      }
      reset(div_6);
      reset(div_4);
      reset(div_2);
      var button = sibling(div_2, 2);
      var node_6 = child(button);
      XMark(node_6, { className: "size-5" });
      reset(button);
      reset(div_1);
      var div_7 = sibling(div_1, 2);
      var div_8 = child(div_7);
      var div_9 = child(div_8);
      var node_7 = child(div_9);
      {
        let $0 = derived_safe_equal(() => (deep_read_state(codeExecution()), untrack(() => {
          var _a;
          return (_a = codeExecution()) == null ? void 0 : _a.id;
        })));
        let $1 = derived_safe_equal(() => (deep_read_state(codeExecution()), untrack(() => {
          var _a;
          return ((_a = codeExecution()) == null ? void 0 : _a.language) ?? "";
        })));
        let $2 = derived_safe_equal(() => (deep_read_state(codeExecution()), untrack(() => {
          var _a;
          return ((_a = codeExecution()) == null ? void 0 : _a.code) ?? "";
        })));
        let $3 = derived_safe_equal(() => (deep_read_state(codeExecution()), untrack(() => {
          var _a, _b, _c, _d, _e;
          return ((_a = codeExecution()) == null ? void 0 : _a.result) && (((_c = (_b = codeExecution()) == null ? void 0 : _b.result) == null ? void 0 : _c.error) || ((_e = (_d = codeExecution()) == null ? void 0 : _d.result) == null ? void 0 : _e.output)) ? "rounded-b-none" : "";
        })));
        CodeBlock(node_7, {
          get id() {
            return `code-exec-${get($0) ?? ""}-code`;
          },
          get lang() {
            return get($1);
          },
          get code() {
            return get($2);
          },
          className: "",
          get editorClassName() {
            return get($3);
          },
          run: false
        });
      }
      reset(div_9);
      var node_8 = sibling(div_9, 2);
      {
        var consequent_7 = ($$anchor3) => {
          var div_10 = root_10$2();
          var node_9 = child(div_10);
          {
            var consequent_5 = ($$anchor4) => {
              var div_11 = root_11$3();
              var div_12 = child(div_11);
              var text_2 = child(div_12, true);
              reset(div_12);
              var div_13 = sibling(div_12, 2);
              var text_3 = child(div_13, true);
              reset(div_13);
              reset(div_11);
              template_effect(
                ($0) => {
                  set_text(text_2, $0);
                  set_text(text_3, (deep_read_state(codeExecution()), untrack(() => {
                    var _a, _b;
                    return (_b = (_a = codeExecution()) == null ? void 0 : _a.result) == null ? void 0 : _b.error;
                  })));
                },
                [() => ($i18n(), untrack(() => $i18n().t("ERROR")))]
              );
              append($$anchor4, div_11);
            };
            if_block(node_9, ($$render) => {
              if (deep_read_state(codeExecution()), untrack(() => {
                var _a, _b;
                return (_b = (_a = codeExecution()) == null ? void 0 : _a.result) == null ? void 0 : _b.error;
              })) $$render(consequent_5);
            });
          }
          var node_10 = sibling(node_9, 2);
          {
            var consequent_6 = ($$anchor4) => {
              var div_14 = root_12$3();
              var div_15 = child(div_14);
              var text_4 = child(div_15, true);
              reset(div_15);
              var div_16 = sibling(div_15, 2);
              var text_5 = child(div_16, true);
              reset(div_16);
              reset(div_14);
              template_effect(
                ($0) => {
                  set_text(text_4, $0);
                  set_text(text_5, (deep_read_state(codeExecution()), untrack(() => {
                    var _a, _b;
                    return (_b = (_a = codeExecution()) == null ? void 0 : _a.result) == null ? void 0 : _b.output;
                  })));
                },
                [() => ($i18n(), untrack(() => $i18n().t("OUTPUT")))]
              );
              append($$anchor4, div_14);
            };
            if_block(node_10, ($$render) => {
              if (deep_read_state(codeExecution()), untrack(() => {
                var _a, _b;
                return (_b = (_a = codeExecution()) == null ? void 0 : _a.result) == null ? void 0 : _b.output;
              })) $$render(consequent_6);
            });
          }
          reset(div_10);
          append($$anchor3, div_10);
        };
        if_block(node_8, ($$render) => {
          if (deep_read_state(codeExecution()), untrack(() => {
            var _a, _b, _c, _d, _e;
            return ((_a = codeExecution()) == null ? void 0 : _a.result) && (((_c = (_b = codeExecution()) == null ? void 0 : _b.result) == null ? void 0 : _c.error) || ((_e = (_d = codeExecution()) == null ? void 0 : _d.result) == null ? void 0 : _e.output));
          })) $$render(consequent_7);
        });
      }
      var node_11 = sibling(node_8, 2);
      {
        var consequent_8 = ($$anchor3) => {
          var div_17 = root_13$2();
          var div_18 = sibling(child(div_17), 2);
          var text_6 = child(div_18, true);
          reset(div_18);
          var ul = sibling(div_18, 2);
          each(
            ul,
            5,
            () => (deep_read_state(codeExecution()), untrack(() => {
              var _a, _b;
              return (_b = (_a = codeExecution()) == null ? void 0 : _a.result) == null ? void 0 : _b.files;
            })),
            index,
            ($$anchor4, file) => {
              var li = root_14$3();
              var a = child(li);
              var text_7 = child(a, true);
              reset(a);
              reset(li);
              template_effect(() => {
                set_attribute(a, "href", (get(file), untrack(() => get(file).url)));
                set_text(text_7, (get(file), untrack(() => get(file).name)));
              });
              append($$anchor4, li);
            }
          );
          reset(ul);
          reset(div_17);
          template_effect(($0) => set_text(text_6, $0), [() => ($i18n(), untrack(() => $i18n().t("Files")))]);
          append($$anchor3, div_17);
        };
        if_block(node_11, ($$render) => {
          if (deep_read_state(codeExecution()), untrack(() => {
            var _a, _b, _c, _d;
            return ((_b = (_a = codeExecution()) == null ? void 0 : _a.result) == null ? void 0 : _b.files) && ((_d = (_c = codeExecution()) == null ? void 0 : _c.result) == null ? void 0 : _d.files.length) > 0;
          })) $$render(consequent_8);
        });
      }
      reset(div_8);
      reset(div_7);
      reset(div);
      event("click", button, () => {
        show(false);
        codeExecution(null);
      });
      append($$anchor2, div);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root_2$a = from_html(`<div class="flex gap-1 text-xs font-semibold svelte-tclqny"><button class="flex dark:text-gray-300 py-1 px-1 bg-gray-50 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 transition rounded-xl max-w-96 svelte-tclqny"><div class="bg-white dark:bg-gray-700 rounded-full size-4 flex items-center justify-center svelte-tclqny"><!></div> <div> </div></button></div>`);
var root_1$7 = from_html(`<div class="mt-1 mb-2 w-full flex gap-1 items-center flex-wrap svelte-tclqny"></div>`);
var root$b = from_html(`<!> <!>`, 1);
function CodeExecutions($$anchor, $$props) {
  push($$props, false);
  let codeExecutions = prop($$props, "codeExecutions", 24, () => []);
  let selectedCodeExecution = mutable_source(null);
  let showCodeExecutionModal = mutable_source(false);
  const updateSelectedCodeExecution = () => {
    if (get(selectedCodeExecution)) {
      set(selectedCodeExecution, codeExecutions().find((execution) => execution.id === get(selectedCodeExecution).id));
    }
  };
  legacy_pre_effect(() => deep_read_state(codeExecutions()), () => {
    if (codeExecutions()) {
      updateSelectedCodeExecution();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root$b();
  var node = first_child(fragment);
  CodeExecutionModal(node, {
    get codeExecution() {
      return get(selectedCodeExecution);
    },
    get show() {
      return get(showCodeExecutionModal);
    },
    set show($$value) {
      set(showCodeExecutionModal, $$value);
    },
    $$legacy: true
  });
  var node_1 = sibling(node, 2);
  {
    var consequent_3 = ($$anchor2) => {
      var div = root_1$7();
      each(div, 5, codeExecutions, (execution) => execution.id, ($$anchor3, execution) => {
        var div_1 = root_2$a();
        var button = child(div_1);
        var div_2 = child(button);
        var node_2 = child(div_2);
        {
          var consequent_2 = ($$anchor4) => {
            var fragment_1 = comment();
            var node_3 = first_child(fragment_1);
            {
              var consequent = ($$anchor5) => {
                XMark($$anchor5, {});
              };
              var alternate_1 = ($$anchor5) => {
                var fragment_3 = comment();
                var node_4 = first_child(fragment_3);
                {
                  var consequent_1 = ($$anchor6) => {
                    Check($$anchor6, { strokeWidth: "3", className: "size-3" });
                  };
                  var alternate = ($$anchor6) => {
                    EllipsisHorizontal($$anchor6, {});
                  };
                  if_block(
                    node_4,
                    ($$render) => {
                      if (get(execution), untrack(() => {
                        var _a;
                        return (_a = get(execution).result) == null ? void 0 : _a.output;
                      })) $$render(consequent_1);
                      else $$render(alternate, false);
                    },
                    true
                  );
                }
                append($$anchor5, fragment_3);
              };
              if_block(node_3, ($$render) => {
                if (get(execution), untrack(() => {
                  var _a;
                  return (_a = get(execution).result) == null ? void 0 : _a.error;
                })) $$render(consequent);
                else $$render(alternate_1, false);
              });
            }
            append($$anchor4, fragment_1);
          };
          var alternate_2 = ($$anchor4) => {
            Spinner($$anchor4, { className: "size-4" });
          };
          if_block(node_2, ($$render) => {
            if (get(execution), untrack(() => {
              var _a;
              return (_a = get(execution)) == null ? void 0 : _a.result;
            })) $$render(consequent_2);
            else $$render(alternate_2, false);
          });
        }
        reset(div_2);
        var div_3 = sibling(div_2, 2);
        var text2 = child(div_3, true);
        reset(div_3);
        reset(button);
        reset(div_1);
        template_effect(() => {
          set_class(
            div_3,
            1,
            `flex-1 mx-2 line-clamp-1 code-execution-name ${(get(execution), untrack(() => {
              var _a;
              return ((_a = get(execution)) == null ? void 0 : _a.result) ? "" : "pulse";
            })) ?? ""}`,
            "svelte-tclqny"
          );
          set_text(text2, (get(execution), untrack(() => get(execution).name)));
        });
        event("click", button, () => {
          set(selectedCodeExecution, get(execution));
          set(showCodeExecutionModal, true);
        });
        append($$anchor3, div_1);
      });
      reset(div);
      append($$anchor2, div);
    };
    if_block(node_1, ($$render) => {
      if (deep_read_state(codeExecutions()), untrack(() => codeExecutions().length > 0)) $$render(consequent_3);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_3$9 = from_html(`<button class="px-1.5 py-[1px] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl flex items-center gap-1 min-w-fit transition"><!> <div class="shrink-0"> </div></button>`);
var root_2$9 = from_html(`<div class="flex flex-row shrink-0 p-0.5 bg-white dark:bg-gray-850 dark:text-gray-100 text-medium rounded-xl shadow-xl border border-gray-100 dark:border-gray-800"></div>`);
var root_5$6 = from_html(`<div class="py-1 flex dark:text-gray-100 bg-white dark:bg-gray-850 border border-gray-100 dark:border-gray-800 w-72 rounded-full shadow-xl"><input type="text" id="floating-message-input" class="ml-5 bg-transparent outline-hidden w-full flex-1 text-sm"/> <div class="ml-1 mr-1"><button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M8 14a.75.75 0 0 1-.75-.75V4.56L4.03 7.78a.75.75 0 0 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.75 4.56v8.69A.75.75 0 0 1 8 14Z" clip-rule="evenodd"></path></svg></button></div></div>`);
var root_9$2 = from_html(`<div class="flex justify-end pt-3 text-sm font-medium"><button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full"> </button></div>`);
var root_6$3 = from_html(`<div class="bg-white dark:bg-gray-850 dark:text-gray-100 rounded-3xl shadow-xl w-80 max-w-full border border-gray-100 dark:border-gray-800"><div class="bg-white dark:bg-gray-850 dark:text-gray-100 text-medium rounded-3xl px-3.5 pt-3 w-full"><div class="font-medium"><!></div></div> <div class="bg-white dark:bg-gray-850 dark:text-gray-100 text-medium rounded-4xl w-full"><div class=" max-h-80 overflow-y-auto w-full markdown-prose-xs px-3.5 py-3" id="response-container"><!> <!></div></div></div>`);
var root$a = from_html(`<div class="absolute rounded-lg mt-1 text-xs z-9999" style="display: none"><!></div>`);
function FloatingButtons($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $models = () => store_get(models, "$models", $$stores);
  const $socket = () => store_get(socket, "$socket", $$stores);
  const $chatId = () => store_get(chatId, "$chatId", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let id = prop($$props, "id", 8, "");
  let messageId = prop($$props, "messageId", 8, "");
  let model = prop($$props, "model", 8, null);
  let messages = prop($$props, "messages", 24, () => []);
  let actions = prop($$props, "actions", 28, () => []);
  let onAdd = prop($$props, "onAdd", 8, (e) => {
  });
  let floatingInput = mutable_source(false);
  let selectedAction = mutable_source(null);
  let selectedText = mutable_source("");
  let floatingInputValue = mutable_source("");
  let content = mutable_source("");
  let responseContent = mutable_source(null);
  let responseDone = mutable_source(false);
  let controller = null;
  const DEFAULT_ACTIONS = [
    {
      id: "ask",
      label: $i18n().t("Ask"),
      icon: ChatBubble,
      input: true,
      prompt: `{{SELECTED_CONTENT}}


{{INPUT_CONTENT}}`
    },
    {
      id: "explain",
      label: $i18n().t("Explain"),
      icon: LightBulb,
      prompt: `{{SELECTED_CONTENT}}


${$i18n().t("Explain")}`
    }
  ];
  const autoScroll = async () => {
    const responseContainer = document.getElementById("response-container");
    if (responseContainer) {
      if (responseContainer.scrollHeight - responseContainer.clientHeight <= responseContainer.scrollTop + 50) {
        responseContainer.scrollTop = responseContainer.scrollHeight;
      }
    }
  };
  const actionHandler = async (actionId) => {
    var _a;
    if (!model()) {
      toast.error($i18n().t("Model not selected"));
      return;
    }
    let selectedContent = get(selectedText).split("\n").map((line) => `> ${line}`).join("\n");
    let selectedAction2 = actions().find((action) => action.id === actionId);
    if (!selectedAction2) {
      toast.error($i18n().t("Action not found"));
      return;
    }
    let prompt = (selectedAction2 == null ? void 0 : selectedAction2.prompt) ?? "";
    let toolIds = [];
    const varToolPattern = /\{\{(.*?)\|tool:id="([^"]+)"\}\}/g;
    prompt = prompt.replace(varToolPattern, (match2, variableId, toolId) => {
      toolIds.push(toolId);
      return variableId;
    });
    let toolIdPattern = /\{\{TOOL:([^\}]+)\}\}/g;
    let match;
    while ((match = toolIdPattern.exec(prompt)) !== null) {
      toolIds.push(match[1]);
    }
    prompt = prompt.replace(toolIdPattern, "");
    if (prompt.includes("{{INPUT_CONTENT}}") && get(floatingInput)) {
      prompt = prompt.replace("{{INPUT_CONTENT}}", get(floatingInputValue));
      set(floatingInputValue, "");
    }
    prompt = prompt.replace("{{CONTENT}}", get(selectedText));
    prompt = prompt.replace("{{SELECTED_CONTENT}}", selectedContent);
    set(content, prompt);
    set(responseContent, "");
    let res;
    [res, controller] = await chatCompletion(localStorage.token, {
      model: model(),
      model_item: $models().find((m) => m.id === model()),
      session_id: (_a = $socket()) == null ? void 0 : _a.id,
      chat_id: $chatId(),
      messages: [...messages(), { role: "user", content: get(content) }].map((message) => ({ role: message.role, content: message.content })),
      ...toolIds.length > 0 ? {
        tool_ids: toolIds
        // params: {
        // 	function_calling: 'native'
        // }
      } : {},
      stream: true
      // Enable streaming
    });
    if (res && res.ok) {
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      const processStream = async () => {
        var _a2, _b;
        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            break;
          }
          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split("\n").filter((line) => line.trim() !== "");
          for (const line of lines) {
            if (line.startsWith("data: ")) {
              if (line.startsWith("data: [DONE]")) {
                set(responseDone, true);
                await tick();
                autoScroll();
                continue;
              } else {
                try {
                  const data = JSON.parse(line.slice(6));
                  if (data.choices && ((_b = (_a2 = data.choices[0]) == null ? void 0 : _a2.delta) == null ? void 0 : _b.content)) {
                    set(responseContent, get(responseContent) + data.choices[0].delta.content);
                    autoScroll();
                  }
                } catch (e) {
                  console.error(e);
                }
              }
            }
          }
        }
      };
      try {
        await processStream();
      } catch (e) {
        if (e.name !== "AbortError") {
          console.error(e);
        }
      }
    } else {
      toast.error($i18n().t("An error occurred while fetching the explanation"));
    }
  };
  const addHandler = async () => {
    const messages2 = [
      { role: "user", content: get(content) },
      { role: "assistant", content: get(responseContent) }
    ];
    onAdd()({ modelId: model(), parentId: messageId(), messages: messages2 });
  };
  const closeHandler = () => {
    if (controller) {
      controller.abort();
    }
    set(selectedAction, null);
    set(selectedText, "");
    set(responseContent, null);
    set(responseDone, false);
    set(floatingInput, false);
    set(floatingInputValue, "");
  };
  onDestroy(() => {
    if (controller) {
      controller.abort();
    }
  });
  legacy_pre_effect(() => deep_read_state(actions()), () => {
    if (actions().length === 0) {
      actions(DEFAULT_ACTIONS);
    }
  });
  legacy_pre_effect_reset();
  var $$exports = { closeHandler };
  init();
  var div = root$a();
  var node = child(div);
  {
    var consequent_2 = ($$anchor2) => {
      var fragment = comment();
      var node_1 = first_child(fragment);
      {
        var consequent_1 = ($$anchor3) => {
          var div_1 = root_2$9();
          each(div_1, 5, actions, index, ($$anchor4, action) => {
            var button = root_3$9();
            var node_2 = child(button);
            {
              var consequent = ($$anchor5) => {
                var fragment_1 = comment();
                var node_3 = first_child(fragment_1);
                component(node_3, () => get(action).icon, ($$anchor6, $$component) => {
                  $$component($$anchor6, { className: "size-3 shrink-0" });
                });
                append($$anchor5, fragment_1);
              };
              if_block(node_2, ($$render) => {
                if (get(action), untrack(() => get(action).icon)) $$render(consequent);
              });
            }
            var div_2 = sibling(node_2, 2);
            var text2 = child(div_2, true);
            reset(div_2);
            reset(button);
            template_effect(() => set_text(text2, (get(action), untrack(() => get(action).label))));
            event("click", button, async () => {
              set(selectedText, window.getSelection().toString());
              set(selectedAction, get(action));
              if (get(action).prompt.includes("{{INPUT_CONTENT}}")) {
                set(floatingInput, true);
                set(floatingInputValue, "");
                await tick();
                setTimeout(
                  () => {
                    const input = document.getElementById("floating-message-input");
                    if (input) {
                      input.focus();
                    }
                  },
                  0
                );
              } else {
                actionHandler(get(action).id);
              }
            });
            append($$anchor4, button);
          });
          reset(div_1);
          append($$anchor3, div_1);
        };
        var alternate = ($$anchor3) => {
          var div_3 = root_5$6();
          var input_1 = child(div_3);
          remove_input_defaults(input_1);
          var div_4 = sibling(input_1, 2);
          var button_1 = child(div_4);
          reset(div_4);
          reset(div_3);
          template_effect(
            ($0) => {
              set_attribute(input_1, "placeholder", $0);
              set_class(button_1, 1, `${get(floatingInputValue) !== "" ? "bg-black text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-100 " : "text-white bg-gray-200 dark:text-gray-900 dark:bg-gray-700 disabled"} transition rounded-full p-1.5 m-0.5 self-center`);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Ask a question")))
            ]
          );
          bind_value(input_1, () => get(floatingInputValue), ($$value) => set(floatingInputValue, $$value));
          event("keydown", input_1, (e) => {
            var _a;
            if (e.key === "Enter") {
              actionHandler((_a = get(selectedAction)) == null ? void 0 : _a.id);
            }
          });
          event("click", button_1, () => {
            var _a;
            actionHandler((_a = get(selectedAction)) == null ? void 0 : _a.id);
          });
          append($$anchor3, div_3);
        };
        if_block(node_1, ($$render) => {
          if (!get(floatingInput)) $$render(consequent_1);
          else $$render(alternate, false);
        });
      }
      append($$anchor2, fragment);
    };
    var alternate_2 = ($$anchor2) => {
      var div_5 = root_6$3();
      var div_6 = child(div_5);
      var div_7 = child(div_6);
      var node_4 = child(div_7);
      {
        let $0 = derived_safe_equal(() => `${id()}-float-prompt`);
        Markdown(node_4, {
          get id() {
            return get($0);
          },
          get content() {
            return get(content);
          }
        });
      }
      reset(div_7);
      reset(div_6);
      var div_8 = sibling(div_6, 2);
      var div_9 = child(div_8);
      var node_5 = child(div_9);
      {
        var consequent_3 = ($$anchor3) => {
          Skeleton($$anchor3, { size: "sm" });
        };
        var alternate_1 = ($$anchor3) => {
          {
            let $0 = derived_safe_equal(() => `${id()}-float-response`);
            Markdown($$anchor3, {
              get id() {
                return get($0);
              },
              get content() {
                return get(responseContent);
              }
            });
          }
        };
        if_block(node_5, ($$render) => {
          if (get(responseContent), untrack(() => {
            var _a;
            return !get(responseContent) || ((_a = get(responseContent)) == null ? void 0 : _a.trim()) === "";
          })) $$render(consequent_3);
          else $$render(alternate_1, false);
        });
      }
      var node_6 = sibling(node_5, 2);
      {
        var consequent_4 = ($$anchor3) => {
          var div_10 = root_9$2();
          var button_2 = child(div_10);
          var text_1 = child(button_2, true);
          reset(button_2);
          reset(div_10);
          template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("Add")))]);
          event("click", button_2, addHandler);
          append($$anchor3, div_10);
        };
        if_block(node_6, ($$render) => {
          if (get(responseDone)) $$render(consequent_4);
        });
      }
      reset(div_9);
      reset(div_8);
      reset(div_5);
      append($$anchor2, div_5);
    };
    if_block(node, ($$render) => {
      if (get(responseContent) === null) $$render(consequent_2);
      else $$render(alternate_2, false);
    });
  }
  reset(div);
  template_effect(() => set_attribute(div, "id", `floating-buttons-${id()}`));
  append($$anchor, div);
  bind_prop($$props, "closeHandler", closeHandler);
  var $$pop = pop($$exports);
  $$cleanup();
  return $$pop;
}
var root$9 = from_html(`<div><!></div> <!>`, 1);
function ContentRenderer($$anchor, $$props) {
  push($$props, false);
  const $mobile = () => store_get(mobile, "$mobile", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $chatId = () => store_get(chatId, "$chatId", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  getContext("i18n");
  let id = prop($$props, "id", 8);
  let content = prop($$props, "content", 8);
  let history = prop($$props, "history", 8);
  let messageId = prop($$props, "messageId", 8);
  let selectedModels = prop($$props, "selectedModels", 24, () => []);
  let done = prop($$props, "done", 8, true);
  let model = prop($$props, "model", 8, null);
  let sources = prop($$props, "sources", 8, null);
  let save = prop($$props, "save", 8, false);
  let preview = prop($$props, "preview", 8, false);
  let floatingButtons = prop($$props, "floatingButtons", 8, true);
  let editCodeBlock = prop($$props, "editCodeBlock", 8, true);
  let topPadding = prop($$props, "topPadding", 8, false);
  let onSave = prop($$props, "onSave", 8, (e) => {
  });
  let onSourceClick = prop($$props, "onSourceClick", 8, (e) => {
  });
  let onTaskClick = prop($$props, "onTaskClick", 8, (e) => {
  });
  let onAddMessages = prop($$props, "onAddMessages", 8, (e) => {
  });
  let contentContainerElement = mutable_source();
  let floatingButtonsElement = mutable_source();
  const updateButtonPosition = (event2) => {
    var _a;
    const buttonsContainerElement = document.getElementById(`floating-buttons-${id()}`);
    if (!((_a = get(contentContainerElement)) == null ? void 0 : _a.contains(event2.target)) && !(buttonsContainerElement == null ? void 0 : buttonsContainerElement.contains(event2.target))) {
      closeFloatingButtons();
      return;
    }
    setTimeout(
      async () => {
        var _a2;
        await tick();
        if (!((_a2 = get(contentContainerElement)) == null ? void 0 : _a2.contains(event2.target))) return;
        let selection = window.getSelection();
        if (selection.toString().trim().length > 0) {
          const range = selection.getRangeAt(0);
          const rect = range.getBoundingClientRect();
          const parentRect = get(contentContainerElement).getBoundingClientRect();
          const top = rect.bottom - parentRect.top;
          const left = rect.left - parentRect.left;
          if (buttonsContainerElement) {
            buttonsContainerElement.style.display = "block";
            const spaceOnRight = parentRect.width - left;
            let halfScreenWidth = $mobile() ? window.innerWidth / 2 : window.innerWidth / 3;
            if (spaceOnRight < halfScreenWidth) {
              const right = parentRect.right - rect.right;
              buttonsContainerElement.style.right = `${right}px`;
              buttonsContainerElement.style.left = "auto";
            } else {
              buttonsContainerElement.style.left = `${left}px`;
              buttonsContainerElement.style.right = "auto";
            }
            buttonsContainerElement.style.top = `${top + 5}px`;
          }
        } else {
          closeFloatingButtons();
        }
      },
      0
    );
  };
  const closeFloatingButtons = () => {
    var _a, _b;
    const buttonsContainerElement = document.getElementById(`floating-buttons-${id()}`);
    if (buttonsContainerElement) {
      buttonsContainerElement.style.display = "none";
    }
    if (get(floatingButtonsElement)) {
      if (typeof ((_a = get(floatingButtonsElement)) == null ? void 0 : _a.closeHandler) === "function") {
        (_b = get(floatingButtonsElement)) == null ? void 0 : _b.closeHandler();
      }
    }
  };
  const keydownHandler = (e) => {
    if (e.key === "Escape") {
      closeFloatingButtons();
    }
  };
  onMount(() => {
    var _a;
    if (floatingButtons()) {
      (_a = get(contentContainerElement)) == null ? void 0 : _a.addEventListener("mouseup", updateButtonPosition);
      document.addEventListener("mouseup", updateButtonPosition);
      document.addEventListener("keydown", keydownHandler);
    }
  });
  onDestroy(() => {
    var _a;
    if (floatingButtons()) {
      (_a = get(contentContainerElement)) == null ? void 0 : _a.removeEventListener("mouseup", updateButtonPosition);
      document.removeEventListener("mouseup", updateButtonPosition);
      document.removeEventListener("keydown", keydownHandler);
    }
  });
  init();
  var fragment = root$9();
  var div = first_child(fragment);
  var node = child(div);
  {
    let $0 = derived_safe_equal(() => (deep_read_state(sources()), deep_read_state(model()), untrack(() => (sources() ?? []).reduce(
      (acc, source) => {
        let ids = [];
        source.document.forEach((document2, index2) => {
          var _a, _b, _c, _d, _e, _f;
          if (((_d = (_c = (_b = (_a = model()) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.capabilities) == null ? void 0 : _d.citations) == false) {
            ids.push("N/A");
            return ids;
          }
          const metadata = (_e = source.metadata) == null ? void 0 : _e[index2];
          const id2 = (metadata == null ? void 0 : metadata.source) ?? "N/A";
          if (metadata == null ? void 0 : metadata.name) {
            ids.push(metadata.name);
            return ids;
          }
          if (id2.startsWith("http://") || id2.startsWith("https://")) {
            ids.push(id2);
          } else {
            ids.push(((_f = source == null ? void 0 : source.source) == null ? void 0 : _f.name) ?? id2);
          }
          return ids;
        });
        acc = [...acc, ...ids];
        return acc.filter((item, index2) => acc.indexOf(item) === index2);
      },
      []
    ))));
    Markdown(node, {
      get id() {
        return id();
      },
      get content() {
        return content();
      },
      get model() {
        return model();
      },
      get save() {
        return save();
      },
      get preview() {
        return preview();
      },
      get done() {
        return done();
      },
      get editCodeBlock() {
        return editCodeBlock();
      },
      get topPadding() {
        return topPadding();
      },
      get sourceIds() {
        return get($0);
      },
      get onSourceClick() {
        return onSourceClick();
      },
      get onTaskClick() {
        return onTaskClick();
      },
      get onSave() {
        return onSave();
      },
      onUpdate: async (token) => {
        var _a;
        const { lang, text: code } = token;
        if ((((_a = $settings()) == null ? void 0 : _a.detectArtifacts) ?? true) && (["html", "svg"].includes(lang) || lang === "xml" && code.includes("svg")) && !$mobile() && $chatId()) {
          await tick();
          showArtifacts.set(true);
          showControls.set(true);
        }
      },
      onPreview: async (value) => {
        console.log("Preview", value);
        await artifactCode.set(value);
        await showControls.set(true);
        await showArtifacts.set(true);
        await showOverview.set(false);
        await showEmbeds.set(false);
      }
    });
  }
  reset(div);
  bind_this(div, ($$value) => set(contentContainerElement, $$value), () => get(contentContainerElement));
  var node_1 = sibling(div, 2);
  {
    var consequent = ($$anchor2) => {
      {
        let $0 = derived_safe_equal(() => ($settings(), untrack(() => {
          var _a;
          return ((_a = $settings()) == null ? void 0 : _a.floatingActionButtons) ?? [];
        })));
        let $1 = derived_safe_equal(() => (deep_read_state(selectedModels()), deep_read_state(model()), untrack(() => {
          var _a, _b, _c;
          return (selectedModels() ?? []).includes((_a = model()) == null ? void 0 : _a.id) ? (_b = model()) == null ? void 0 : _b.id : (selectedModels() ?? []).length > 0 ? selectedModels().at(0) : (_c = model()) == null ? void 0 : _c.id;
        })));
        let $2 = derived_safe_equal(() => (deep_read_state(createMessagesList), deep_read_state(history()), deep_read_state(messageId()), untrack(() => createMessagesList(history(), messageId()))));
        bind_this(
          FloatingButtons($$anchor2, {
            get id() {
              return id();
            },
            get messageId() {
              return messageId();
            },
            get actions() {
              return get($0);
            },
            get model() {
              return get($1);
            },
            get messages() {
              return get($2);
            },
            onAdd: ({ modelId, parentId, messages }) => {
              console.log(modelId, parentId, messages);
              onAddMessages()({ modelId, parentId, messages });
              closeFloatingButtons();
            },
            $$legacy: true
          }),
          ($$value) => set(floatingButtonsElement, $$value),
          () => get(floatingButtonsElement)
        );
      }
    };
    if_block(node_1, ($$render) => {
      if (floatingButtons() && model()) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
function WorkerWrapper(options) {
  return new Worker(
    "" + new URL("../workers/kokoro.worker-dqhRPo6M.js", import.meta.url).href,
    {
      type: "module",
      name: options == null ? void 0 : options.name
    }
  );
}
class KokoroWorker {
  // To track if a request is being processed
  constructor(dtype = "fp32") {
    __publicField(this, "worker", null);
    __publicField(this, "initialized", false);
    __publicField(this, "dtype");
    __publicField(this, "requestQueue", []);
    __publicField(this, "processing", false);
    this.dtype = dtype;
  }
  async init() {
    if (this.worker) {
      console.warn("KokoroWorker is already initialized.");
      return;
    }
    this.worker = new WorkerWrapper();
    this.worker.onmessage = (event2) => {
      const { status, error, audioUrl } = event2.data;
      if (status === "init:complete") {
        this.initialized = true;
      } else if (status === "init:error") {
        console.error(error);
        this.initialized = false;
      } else if (status === "generate:complete") {
        const request = this.requestQueue.shift();
        if (request) {
          request.resolve(audioUrl);
          this.processNextRequest();
        }
      } else if (status === "generate:error") {
        const request = this.requestQueue.shift();
        if (request) {
          request.reject(new Error(error));
          this.processNextRequest();
        }
      }
    };
    return new Promise((resolve, reject) => {
      this.worker.postMessage({
        type: "init",
        payload: { dtype: this.dtype }
      });
      const handleMessage = (event2) => {
        if (event2.data.status === "init:complete") {
          this.worker.removeEventListener("message", handleMessage);
          this.initialized = true;
          resolve();
        } else if (event2.data.status === "init:error") {
          this.worker.removeEventListener("message", handleMessage);
          reject(new Error(event2.data.error));
        }
      };
      this.worker.addEventListener("message", handleMessage);
    });
  }
  async generate({ text: text2, voice }) {
    if (!this.initialized || !this.worker) {
      throw new Error("KokoroTTS Worker is not initialized yet.");
    }
    return new Promise((resolve, reject) => {
      this.requestQueue.push({ text: text2, voice, resolve, reject });
      if (!this.processing) {
        this.processNextRequest();
      }
    });
  }
  processNextRequest() {
    if (this.requestQueue.length === 0) {
      this.processing = false;
      return;
    }
    this.processing = true;
    const { text: text2, voice } = this.requestQueue[0];
    this.worker.postMessage({ type: "generate", payload: { text: text2, voice } });
  }
  terminate() {
    if (this.worker) {
      this.worker.terminate();
      this.worker = null;
      this.initialized = false;
      this.requestQueue = [];
      this.processing = false;
    }
  }
}
var root_2$8 = from_html(`<div class=" py-1.5 bg-transparent text-left text-sm flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition cursor-pointer"><div class="line-clamp-1"> </div></div>`);
var root_3$8 = from_html(`<hr class="border-gray-50 dark:border-gray-850"/>`);
var root_1$6 = from_html(`<!> <!>`, 1);
var root$8 = from_html(`<div class="mt-4"><div class="text-sm font-medium"> </div> <div class="flex flex-col text-left gap-1 mt-1.5"></div></div>`);
function FollowUps($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let followUps = prop($$props, "followUps", 24, () => []);
  let onClick = prop($$props, "onClick", 8, () => {
  });
  init();
  var div = root$8();
  var div_1 = child(div);
  var text2 = child(div_1, true);
  reset(div_1);
  var div_2 = sibling(div_1, 2);
  each(div_2, 5, followUps, index, ($$anchor2, followUp, idx) => {
    var fragment = root_1$6();
    var node = first_child(fragment);
    Tooltip(node, {
      get content() {
        return get(followUp);
      },
      placement: "top-start",
      className: "line-clamp-1",
      children: ($$anchor3, $$slotProps) => {
        var div_3 = root_2$8();
        var div_4 = child(div_3);
        var text_1 = child(div_4, true);
        reset(div_4);
        reset(div_3);
        template_effect(() => {
          set_attribute(div_3, "aria-label", get(followUp));
          set_text(text_1, get(followUp));
        });
        event("click", div_3, () => onClick()(get(followUp)));
        append($$anchor3, div_3);
      },
      $$slots: { default: true }
    });
    var node_1 = sibling(node, 2);
    {
      var consequent = ($$anchor3) => {
        var hr = root_3$8();
        append($$anchor3, hr);
      };
      if_block(node_1, ($$render) => {
        if (deep_read_state(followUps()), untrack(() => idx < followUps().length - 1)) $$render(consequent);
      });
    }
    append($$anchor2, fragment);
  });
  reset(div_2);
  reset(div);
  template_effect(($0) => set_text(text2, $0), [() => ($i18n(), untrack(() => $i18n().t("Follow up")))]);
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root$7 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M11 6H21" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 12H21" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 18H21" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 19V5M5 19L3 16.5M5 19L7 16.5M5 5L3 7M5 5L7 7" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
function LineSpace($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$7();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root$6 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M11 6H21" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 12H21" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 18H21" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 19V5M5 10L3 8M5 10L7 8M5 14L3 16M5 14L7 16" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
function LineSpaceSmaller($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$6();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root_4$5 = from_html(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" aria-hidden="true" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"></path></svg> <div class="flex items-center"> </div>`, 1);
var root_5$5 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_6$2 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_3$7 = from_html(`<div class="py-1.5 px-2.5 flex dark:text-gray-100"><input type="text" id="floating-message-input" class="bg-transparent outline-hidden w-full flex-1 text-sm" autocomplete="off"/> <div class="ml-2 self-center flex items-center"><button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-3.5"><path fill-rule="evenodd" d="M8 14a.75.75 0 0 1-.75-.75V4.56L4.03 7.78a.75.75 0 0 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.75 4.56v8.69A.75.75 0 0 1 8 14Z" clip-rule="evenodd"></path></svg></button></div></div> <hr class="border-gray-50 dark:border-gray-800 my-1 mx-2"/> <!> <!> <!>`, 1);
var root_2$7 = from_html(`<div slot="content"><!></div>`);
function RegenerateMenu($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let onRegenerate = prop($$props, "onRegenerate", 8, (prompt = null) => {
  });
  let onClose = prop($$props, "onClose", 8, () => {
  });
  let show = mutable_source(false);
  let inputValue = mutable_source("");
  init();
  Dropdown($$anchor, {
    align: "end",
    get show() {
      return get(show);
    },
    set show($$value) {
      set(show, $$value);
    },
    $$events: {
      change: (e) => {
        if (e.detail === false) {
          onClose()();
        }
      }
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      slot(node, $$props, "default", {}, null);
      append($$anchor2, fragment_1);
    },
    $$slots: {
      default: true,
      content: ($$anchor2, $$slotProps) => {
        var div = root_2$7();
        var node_1 = child(div);
        Menu_content(node_1, {
          class: "w-full max-w-[200px] rounded-2xl px-1 py-1 border border-gray-100 dark:border-gray-800 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg transition",
          sideOffset: -2,
          side: "bottom",
          align: "start",
          get transition() {
            return flyAndScale;
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_2 = root_3$7();
            var div_1 = first_child(fragment_2);
            var input = child(div_1);
            remove_input_defaults(input);
            var div_2 = sibling(input, 2);
            var button = child(div_2);
            reset(div_2);
            reset(div_1);
            var node_2 = sibling(div_1, 4);
            Menu_item(node_2, {
              class: "flex  gap-2  items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
              $$events: {
                click: () => {
                  onRegenerate()();
                  set(show, false);
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_3 = root_4$5();
                var div_3 = sibling(first_child(fragment_3), 2);
                var text2 = child(div_3, true);
                reset(div_3);
                template_effect(($0) => set_text(text2, $0), [() => ($i18n(), untrack(() => $i18n().t("Try Again")))]);
                append($$anchor4, fragment_3);
              },
              $$slots: { default: true }
            });
            var node_3 = sibling(node_2, 2);
            Menu_item(node_3, {
              class: "flex  gap-2  items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
              $$events: {
                click: () => {
                  onRegenerate()($i18n().t("Add Details"));
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_4 = root_5$5();
                var node_4 = first_child(fragment_4);
                LineSpace(node_4, { strokeWidth: "2" });
                var div_4 = sibling(node_4, 2);
                var text_1 = child(div_4, true);
                reset(div_4);
                template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("Add Details")))]);
                append($$anchor4, fragment_4);
              },
              $$slots: { default: true }
            });
            var node_5 = sibling(node_3, 2);
            Menu_item(node_5, {
              class: "flex  gap-2  items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
              $$events: {
                click: () => {
                  onRegenerate()($i18n().t("More Concise"));
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_5 = root_6$2();
                var node_6 = first_child(fragment_5);
                LineSpaceSmaller(node_6, { strokeWidth: "2" });
                var div_5 = sibling(node_6, 2);
                var text_2 = child(div_5, true);
                reset(div_5);
                template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("More Concise")))]);
                append($$anchor4, fragment_5);
              },
              $$slots: { default: true }
            });
            template_effect(
              ($0) => {
                set_attribute(input, "placeholder", $0);
                set_class(button, 1, `${get(inputValue) !== "" ? "bg-black text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-100 " : "text-white bg-gray-200 dark:text-gray-900 dark:bg-gray-700 disabled"} transition rounded-full p-1 self-center`);
              },
              [
                () => ($i18n(), untrack(() => $i18n().t("Suggest a change")))
              ]
            );
            bind_value(input, () => get(inputValue), ($$value) => set(inputValue, $$value));
            event("keydown", input, (e) => {
              if (e.key === "Enter") {
                onRegenerate()(get(inputValue));
                set(show, false);
              }
            });
            event("click", button, () => {
              onRegenerate()(get(inputValue));
              set(show, false);
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
var root_3$6 = from_html(`<div class="flex flex-col justify-center -space-y-0.5"><div><!></div></div>`);
var root_11$2 = from_html(`<div class="flex flex-col justify-center -space-y-0.5"><div> </div></div>`);
var root_14$2 = from_html(`<div class="bg-gray-50 dark:bg-gray-850 flex rounded-lg py-1 px-2 items-center gap-1 text-xs"><div><!></div> <span class="line-clamp-1"> </span></div>`);
var root_13$1 = from_html(`<div class="flex flex-col justify-center -space-y-0.5"><div> </div> <div class=" flex gap-1 flex-wrap mt-2"></div></div>`);
var root_17$1 = from_html(`<div class="bg-gray-50 dark:bg-gray-850 flex rounded-lg py-1 px-2 items-center gap-1 text-xs"><div><!></div> <span class="line-clamp-1"> </span></div>`);
var root_16$1 = from_html(`<div class="flex flex-col justify-center -space-y-0.5"><div> </div> <div class=" flex gap-1 flex-wrap mt-2"></div></div>`);
var root_19$1 = from_html(`<div class="flex flex-col justify-center -space-y-0.5"><div><!></div></div>`);
var root_24$2 = from_html(`<div class="flex flex-col justify-center -space-y-0.5"><div><!></div></div>`);
var root_1$5 = from_html(`<div class="status-description flex items-center gap-2 py-0.5 w-full text-left"><!></div>`);
function StatusItem($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let status = prop($$props, "status", 8, null);
  let done = prop($$props, "done", 8, false);
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_14 = ($$anchor2) => {
      var div = root_1$5();
      var node_1 = child(div);
      {
        var consequent_3 = ($$anchor3) => {
          WebSearchResults($$anchor3, {
            get status() {
              return status();
            },
            children: ($$anchor4, $$slotProps) => {
              var div_1 = root_3$6();
              var div_2 = child(div_1);
              var node_2 = child(div_2);
              {
                var consequent = ($$anchor5) => {
                  var text$1 = text();
                  template_effect(($0) => set_text(text$1, $0), [
                    () => ($i18n(), deep_read_state(status()), untrack(() => {
                      var _a, _b, _c;
                      return $i18n().t((_a = status()) == null ? void 0 : _a.description, { count: (((_b = status()) == null ? void 0 : _b.urls) || ((_c = status()) == null ? void 0 : _c.items)).length });
                    }))
                  ]);
                  append($$anchor5, text$1);
                };
                var alternate_2 = ($$anchor5) => {
                  var fragment_3 = comment();
                  var node_3 = first_child(fragment_3);
                  {
                    var consequent_1 = ($$anchor6) => {
                      var text_1 = text();
                      template_effect(($0) => set_text(text_1, $0), [
                        () => ($i18n(), untrack(() => $i18n().t("No search query generated")))
                      ]);
                      append($$anchor6, text_1);
                    };
                    var alternate_1 = ($$anchor6) => {
                      var fragment_5 = comment();
                      var node_4 = first_child(fragment_5);
                      {
                        var consequent_2 = ($$anchor7) => {
                          var text_2 = text();
                          template_effect(($0) => set_text(text_2, $0), [
                            () => ($i18n(), untrack(() => $i18n().t("Generating search query")))
                          ]);
                          append($$anchor7, text_2);
                        };
                        var alternate = ($$anchor7) => {
                          var text_3 = text();
                          template_effect(() => set_text(text_3, (deep_read_state(status()), untrack(() => {
                            var _a;
                            return (_a = status()) == null ? void 0 : _a.description;
                          }))));
                          append($$anchor7, text_3);
                        };
                        if_block(
                          node_4,
                          ($$render) => {
                            if (deep_read_state(status()), untrack(() => {
                              var _a;
                              return ((_a = status()) == null ? void 0 : _a.description) === "Generating search query";
                            })) $$render(consequent_2);
                            else $$render(alternate, false);
                          },
                          true
                        );
                      }
                      append($$anchor6, fragment_5);
                    };
                    if_block(
                      node_3,
                      ($$render) => {
                        if (deep_read_state(status()), untrack(() => {
                          var _a;
                          return ((_a = status()) == null ? void 0 : _a.description) === "No search query generated";
                        })) $$render(consequent_1);
                        else $$render(alternate_1, false);
                      },
                      true
                    );
                  }
                  append($$anchor5, fragment_3);
                };
                if_block(node_2, ($$render) => {
                  if (deep_read_state(status()), untrack(() => {
                    var _a, _b;
                    return (_b = (_a = status()) == null ? void 0 : _a.description) == null ? void 0 : _b.includes("{{count}}");
                  })) $$render(consequent);
                  else $$render(alternate_2, false);
                });
              }
              reset(div_2);
              reset(div_1);
              template_effect(() => set_class(div_2, 1, `${(deep_read_state(done()), deep_read_state(status()), untrack(() => {
                var _a;
                return (done() || ((_a = status()) == null ? void 0 : _a.done)) === false ? "shimmer" : "";
              })) ?? ""} text-base line-clamp-1 text-wrap`));
              append($$anchor4, div_1);
            },
            $$slots: { default: true }
          });
        };
        var alternate_13 = ($$anchor3) => {
          var fragment_8 = comment();
          var node_5 = first_child(fragment_8);
          {
            var consequent_4 = ($$anchor4) => {
              var div_3 = root_11$2();
              var div_4 = child(div_3);
              var text_4 = child(div_4, true);
              reset(div_4);
              reset(div_3);
              template_effect(
                ($0) => {
                  set_class(div_4, 1, `${(deep_read_state(done()), deep_read_state(status()), untrack(() => {
                    var _a;
                    return (done() || ((_a = status()) == null ? void 0 : _a.done)) === false ? "shimmer" : "";
                  })) ?? ""} text-gray-500 dark:text-gray-500 text-base line-clamp-1 text-wrap`);
                  set_text(text_4, $0);
                },
                [
                  () => ($i18n(), deep_read_state(status()), untrack(() => $i18n().t(`Searching Knowledge for "{{searchQuery}}"`, { searchQuery: status().query })))
                ]
              );
              append($$anchor4, div_3);
            };
            var alternate_12 = ($$anchor4) => {
              var fragment_9 = comment();
              var node_6 = first_child(fragment_9);
              {
                var consequent_5 = ($$anchor5) => {
                  var div_5 = root_13$1();
                  var div_6 = child(div_5);
                  var text_5 = child(div_6, true);
                  reset(div_6);
                  var div_7 = sibling(div_6, 2);
                  each(
                    div_7,
                    7,
                    () => (deep_read_state(status()), untrack(() => status().queries)),
                    (query) => query,
                    ($$anchor6, query) => {
                      var div_8 = root_14$2();
                      var div_9 = child(div_8);
                      var node_7 = child(div_9);
                      Search(node_7, { className: "size-3" });
                      reset(div_9);
                      var span = sibling(div_9, 2);
                      var text_6 = child(span, true);
                      reset(span);
                      reset(div_8);
                      template_effect(() => set_text(text_6, get(query)));
                      append($$anchor6, div_8);
                    }
                  );
                  reset(div_7);
                  reset(div_5);
                  template_effect(
                    ($0) => {
                      set_class(div_6, 1, `${(deep_read_state(done()), deep_read_state(status()), untrack(() => {
                        var _a;
                        return (done() || ((_a = status()) == null ? void 0 : _a.done)) === false ? "shimmer" : "";
                      })) ?? ""} text-gray-500 dark:text-gray-500 text-base line-clamp-1 text-wrap`);
                      set_text(text_5, $0);
                    },
                    [() => ($i18n(), untrack(() => $i18n().t(`Searching`)))]
                  );
                  append($$anchor5, div_5);
                };
                var alternate_11 = ($$anchor5) => {
                  var fragment_10 = comment();
                  var node_8 = first_child(fragment_10);
                  {
                    var consequent_6 = ($$anchor6) => {
                      var div_10 = root_16$1();
                      var div_11 = child(div_10);
                      var text_7 = child(div_11, true);
                      reset(div_11);
                      var div_12 = sibling(div_11, 2);
                      each(
                        div_12,
                        7,
                        () => (deep_read_state(status()), untrack(() => status().queries)),
                        (query) => query,
                        ($$anchor7, query) => {
                          var div_13 = root_17$1();
                          var div_14 = child(div_13);
                          var node_9 = child(div_14);
                          Search(node_9, { className: "size-3" });
                          reset(div_14);
                          var span_1 = sibling(div_14, 2);
                          var text_8 = child(span_1, true);
                          reset(span_1);
                          reset(div_13);
                          template_effect(() => set_text(text_8, get(query)));
                          append($$anchor7, div_13);
                        }
                      );
                      reset(div_12);
                      reset(div_10);
                      template_effect(
                        ($0) => {
                          set_class(div_11, 1, `${(deep_read_state(done()), deep_read_state(status()), untrack(() => {
                            var _a;
                            return (done() || ((_a = status()) == null ? void 0 : _a.done)) === false ? "shimmer" : "";
                          })) ?? ""} text-gray-500 dark:text-gray-500 text-base line-clamp-1 text-wrap`);
                          set_text(text_7, $0);
                        },
                        [() => ($i18n(), untrack(() => $i18n().t(`Querying`)))]
                      );
                      append($$anchor6, div_10);
                    };
                    var alternate_10 = ($$anchor6) => {
                      var fragment_11 = comment();
                      var node_10 = first_child(fragment_11);
                      {
                        var consequent_9 = ($$anchor7) => {
                          var div_15 = root_19$1();
                          var div_16 = child(div_15);
                          var node_11 = child(div_16);
                          {
                            var consequent_7 = ($$anchor8) => {
                              var text_9 = text();
                              template_effect(($0) => set_text(text_9, $0), [
                                () => ($i18n(), untrack(() => $i18n().t("No sources found")))
                              ]);
                              append($$anchor8, text_9);
                            };
                            var alternate_4 = ($$anchor8) => {
                              var fragment_13 = comment();
                              var node_12 = first_child(fragment_13);
                              {
                                var consequent_8 = ($$anchor9) => {
                                  var text_10 = text();
                                  template_effect(($0) => set_text(text_10, $0), [
                                    () => ($i18n(), untrack(() => $i18n().t("Retrieved 1 source")))
                                  ]);
                                  append($$anchor9, text_10);
                                };
                                var alternate_3 = ($$anchor9) => {
                                  var text_11 = text();
                                  template_effect(($0) => set_text(text_11, $0), [
                                    () => ($i18n(), deep_read_state(status()), untrack(() => $i18n().t("Retrieved {{count}} sources", { count: status().count })))
                                  ]);
                                  append($$anchor9, text_11);
                                };
                                if_block(
                                  node_12,
                                  ($$render) => {
                                    if (deep_read_state(status()), untrack(() => status().count === 1)) $$render(consequent_8);
                                    else $$render(alternate_3, false);
                                  },
                                  true
                                );
                              }
                              append($$anchor8, fragment_13);
                            };
                            if_block(node_11, ($$render) => {
                              if (deep_read_state(status()), untrack(() => status().count === 0)) $$render(consequent_7);
                              else $$render(alternate_4, false);
                            });
                          }
                          reset(div_16);
                          reset(div_15);
                          template_effect(() => set_class(div_16, 1, `${(deep_read_state(done()), deep_read_state(status()), untrack(() => {
                            var _a;
                            return (done() || ((_a = status()) == null ? void 0 : _a.done)) === false ? "shimmer" : "";
                          })) ?? ""} text-gray-500 dark:text-gray-500 text-base line-clamp-1 text-wrap`));
                          append($$anchor7, div_15);
                        };
                        var alternate_9 = ($$anchor7) => {
                          var div_17 = root_24$2();
                          var div_18 = child(div_17);
                          var node_13 = child(div_18);
                          {
                            var consequent_10 = ($$anchor8) => {
                              var text_12 = text();
                              template_effect(($0) => set_text(text_12, $0), [
                                () => ($i18n(), deep_read_state(status()), untrack(() => {
                                  var _a, _b;
                                  return $i18n().t((_a = status()) == null ? void 0 : _a.description, { searchQuery: (_b = status()) == null ? void 0 : _b.query });
                                }))
                              ]);
                              append($$anchor8, text_12);
                            };
                            var alternate_8 = ($$anchor8) => {
                              var fragment_17 = comment();
                              var node_14 = first_child(fragment_17);
                              {
                                var consequent_11 = ($$anchor9) => {
                                  var text_13 = text();
                                  template_effect(($0) => set_text(text_13, $0), [
                                    () => ($i18n(), untrack(() => $i18n().t("No search query generated")))
                                  ]);
                                  append($$anchor9, text_13);
                                };
                                var alternate_7 = ($$anchor9) => {
                                  var fragment_19 = comment();
                                  var node_15 = first_child(fragment_19);
                                  {
                                    var consequent_12 = ($$anchor10) => {
                                      var text_14 = text();
                                      template_effect(($0) => set_text(text_14, $0), [
                                        () => ($i18n(), untrack(() => $i18n().t("Generating search query")))
                                      ]);
                                      append($$anchor10, text_14);
                                    };
                                    var alternate_6 = ($$anchor10) => {
                                      var fragment_21 = comment();
                                      var node_16 = first_child(fragment_21);
                                      {
                                        var consequent_13 = ($$anchor11) => {
                                          var text_15 = text();
                                          template_effect(($0) => set_text(text_15, $0), [
                                            () => ($i18n(), untrack(() => $i18n().t("Searching the web")))
                                          ]);
                                          append($$anchor11, text_15);
                                        };
                                        var alternate_5 = ($$anchor11) => {
                                          var text_16 = text();
                                          template_effect(() => set_text(text_16, (deep_read_state(status()), untrack(() => {
                                            var _a;
                                            return (_a = status()) == null ? void 0 : _a.description;
                                          }))));
                                          append($$anchor11, text_16);
                                        };
                                        if_block(
                                          node_16,
                                          ($$render) => {
                                            if (deep_read_state(status()), untrack(() => {
                                              var _a;
                                              return ((_a = status()) == null ? void 0 : _a.description) === "Searching the web";
                                            })) $$render(consequent_13);
                                            else $$render(alternate_5, false);
                                          },
                                          true
                                        );
                                      }
                                      append($$anchor10, fragment_21);
                                    };
                                    if_block(
                                      node_15,
                                      ($$render) => {
                                        if (deep_read_state(status()), untrack(() => {
                                          var _a;
                                          return ((_a = status()) == null ? void 0 : _a.description) === "Generating search query";
                                        })) $$render(consequent_12);
                                        else $$render(alternate_6, false);
                                      },
                                      true
                                    );
                                  }
                                  append($$anchor9, fragment_19);
                                };
                                if_block(
                                  node_14,
                                  ($$render) => {
                                    if (deep_read_state(status()), untrack(() => {
                                      var _a;
                                      return ((_a = status()) == null ? void 0 : _a.description) === "No search query generated";
                                    })) $$render(consequent_11);
                                    else $$render(alternate_7, false);
                                  },
                                  true
                                );
                              }
                              append($$anchor8, fragment_17);
                            };
                            if_block(node_13, ($$render) => {
                              if (deep_read_state(status()), untrack(() => {
                                var _a, _b;
                                return (_b = (_a = status()) == null ? void 0 : _a.description) == null ? void 0 : _b.includes("{{searchQuery}}");
                              })) $$render(consequent_10);
                              else $$render(alternate_8, false);
                            });
                          }
                          reset(div_18);
                          reset(div_17);
                          template_effect(() => set_class(div_18, 1, `${(deep_read_state(done()), deep_read_state(status()), untrack(() => {
                            var _a;
                            return (done() || ((_a = status()) == null ? void 0 : _a.done)) === false ? "shimmer" : "";
                          })) ?? ""} text-gray-500 dark:text-gray-500 text-base line-clamp-1 text-wrap`));
                          append($$anchor7, div_17);
                        };
                        if_block(
                          node_10,
                          ($$render) => {
                            if (deep_read_state(status()), untrack(() => {
                              var _a, _b;
                              return ((_a = status()) == null ? void 0 : _a.action) === "sources_retrieved" && ((_b = status()) == null ? void 0 : _b.count) !== void 0;
                            })) $$render(consequent_9);
                            else $$render(alternate_9, false);
                          },
                          true
                        );
                      }
                      append($$anchor6, fragment_11);
                    };
                    if_block(
                      node_8,
                      ($$render) => {
                        if (deep_read_state(status()), untrack(() => {
                          var _a, _b;
                          return ((_a = status()) == null ? void 0 : _a.action) === "queries_generated" && ((_b = status()) == null ? void 0 : _b.queries);
                        })) $$render(consequent_6);
                        else $$render(alternate_10, false);
                      },
                      true
                    );
                  }
                  append($$anchor5, fragment_10);
                };
                if_block(
                  node_6,
                  ($$render) => {
                    if (deep_read_state(status()), untrack(() => {
                      var _a, _b;
                      return ((_a = status()) == null ? void 0 : _a.action) === "web_search_queries_generated" && ((_b = status()) == null ? void 0 : _b.queries);
                    })) $$render(consequent_5);
                    else $$render(alternate_11, false);
                  },
                  true
                );
              }
              append($$anchor4, fragment_9);
            };
            if_block(
              node_5,
              ($$render) => {
                if (deep_read_state(status()), untrack(() => {
                  var _a;
                  return ((_a = status()) == null ? void 0 : _a.action) === "knowledge_search";
                })) $$render(consequent_4);
                else $$render(alternate_12, false);
              },
              true
            );
          }
          append($$anchor3, fragment_8);
        };
        if_block(node_1, ($$render) => {
          if (deep_read_state(status()), untrack(() => {
            var _a, _b, _c;
            return ((_a = status()) == null ? void 0 : _a.action) === "web_search" && (((_b = status()) == null ? void 0 : _b.urls) || ((_c = status()) == null ? void 0 : _c.items));
          })) $$render(consequent_3);
          else $$render(alternate_13, false);
        });
      }
      reset(div);
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (deep_read_state(status()), untrack(() => {
        var _a;
        return !((_a = status()) == null ? void 0 : _a.hidden);
      })) $$render(consequent_14);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_6$1 = from_html(`<div class="w-[0.5px] ml-[6.5px] h-[calc(100%-14px)] bg-gray-300 dark:bg-gray-700"></div>`);
var root_5$4 = from_html(`<div class="flex items-stretch gap-2 mb-1"><div class=" "><div class="pt-3 px-1 mb-1.5"><span class="relative flex size-1.5 rounded-full justify-center items-center"><span class="relative inline-flex size-1.5 rounded-full bg-gray-500 dark:bg-gray-400"></span></span></div> <!></div> <!></div>`);
var root_4$4 = from_html(`<div class="w-full"></div>`);
var root_3$5 = from_html(`<div class="flex flex-row"><!></div>`);
var root_2$6 = from_html(`<div class="text-sm flex flex-col w-full"><button class="w-full"><div class="flex items-start gap-2"><!></div></button> <!></div>`);
function StatusHistory($$anchor, $$props) {
  push($$props, false);
  getContext("i18n");
  let statusHistory = prop($$props, "statusHistory", 24, () => []);
  let expand = prop($$props, "expand", 8, false);
  let showHistory = mutable_source(true);
  let history = mutable_source([]);
  let status = mutable_source(null);
  legacy_pre_effect(() => deep_read_state(expand()), () => {
    if (expand()) {
      set(showHistory, true);
    } else {
      set(showHistory, false);
    }
  });
  legacy_pre_effect(() => (deep_read_state(statusHistory()), get(history)), () => {
    if (JSON.stringify(statusHistory()) !== JSON.stringify(get(history))) {
      set(history, statusHistory());
    }
  });
  legacy_pre_effect(() => get(history), () => {
    if (get(history) && get(history).length > 0) {
      set(status, get(history).at(-1));
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_4 = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      {
        var consequent_3 = ($$anchor3) => {
          var div = root_2$6();
          var button = child(div);
          var div_1 = child(button);
          var node_2 = child(div_1);
          StatusItem(node_2, {
            get status() {
              return get(status);
            }
          });
          reset(div_1);
          reset(button);
          var node_3 = sibling(button, 2);
          {
            var consequent_2 = ($$anchor4) => {
              var div_2 = root_3$5();
              var node_4 = child(div_2);
              {
                var consequent_1 = ($$anchor5) => {
                  var div_3 = root_4$4();
                  each(div_3, 5, () => get(history), index, ($$anchor6, status2, idx, $$array) => {
                    var div_4 = root_5$4();
                    var div_5 = child(div_4);
                    var node_5 = sibling(child(div_5), 2);
                    {
                      var consequent = ($$anchor7) => {
                        var div_6 = root_6$1();
                        append($$anchor7, div_6);
                      };
                      if_block(node_5, ($$render) => {
                        if (get(history), untrack(() => idx !== get(history).length - 1)) $$render(consequent);
                      });
                    }
                    reset(div_5);
                    var node_6 = sibling(div_5, 2);
                    StatusItem(node_6, {
                      get status() {
                        return get(status2);
                      },
                      done: true
                    });
                    reset(div_4);
                    append($$anchor6, div_4);
                  });
                  reset(div_3);
                  append($$anchor5, div_3);
                };
                if_block(node_4, ($$render) => {
                  if (get(history), untrack(() => get(history).length > 1)) $$render(consequent_1);
                });
              }
              reset(div_2);
              append($$anchor4, div_2);
            };
            if_block(node_3, ($$render) => {
              if (get(showHistory)) $$render(consequent_2);
            });
          }
          reset(div);
          event("click", button, () => {
            set(showHistory, !get(showHistory));
          });
          append($$anchor3, div);
        };
        if_block(node_1, ($$render) => {
          if (get(status), untrack(() => {
            var _a;
            return ((_a = get(status)) == null ? void 0 : _a.hidden) !== true;
          })) $$render(consequent_3);
        });
      }
      append($$anchor2, fragment_1);
    };
    if_block(node, ($$render) => {
      if (get(history), untrack(() => get(history) && get(history).length > 0)) $$render(consequent_4);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_3$4 = from_html(`<span id="response-message-model-name" class="line-clamp-1 text-black dark:text-white"> </span>`);
var root_5$3 = from_html(`<span class="line-clamp-1"> </span>`);
var root_4$3 = from_html(`<div><!></div>`);
var root_2$5 = from_html(`<!> <!>`, 1);
var root_8$2 = from_html(`<div><!></div>`);
var root_7$1 = from_html(`<div class="my-1 w-full flex overflow-x-auto gap-2 flex-wrap"></div>`);
var root_12$2 = from_html(`<div class="my-2 w-full"><!></div>`);
var root_11$1 = from_html(`<div class="my-1 w-full flex overflow-x-auto gap-2 flex-wrap"></div>`);
var root_13 = from_html(`<div class="w-full bg-gray-50 dark:bg-gray-800 rounded-3xl px-5 py-3 my-2"><textarea class=" bg-transparent outline-hidden w-full resize-none"></textarea> <div class=" mt-2 mb-1 flex justify-between text-sm font-medium"><div><button id="save-new-message-button" class="px-3.5 py-1.5 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-200 transition rounded-3xl"> </button></div> <div class="flex space-x-1.5"><button id="close-edit-message-button" class="px-3.5 py-1.5 bg-white dark:bg-gray-900 hover:bg-gray-100 text-gray-800 dark:text-gray-100 transition rounded-3xl"> </button> <button id="confirm-edit-message-button" class="px-3.5 py-1.5 bg-gray-900 dark:bg-white hover:bg-gray-850 text-gray-100 dark:text-gray-800 transition rounded-3xl"> </button></div></div></div>`);
var root_23 = from_html(`<div class="text-sm flex justify-center font-semibold self-center dark:text-gray-100 min-w-fit"><input type="number" min="1" class="bg-transparent font-semibold self-center dark:text-gray-100 min-w-fit outline-hidden"/> </div>`);
var root_24$1 = from_html(`<div class="text-sm tracking-widest font-semibold self-center dark:text-gray-100 min-w-fit"> </div>`);
var root_22 = from_html(`<div class="flex self-center min-w-fit" dir="ltr"><button class="self-center p-1 hover:bg-black/5 dark:hover:bg-white/5 dark:hover:text-white hover:text-black rounded-md transition"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" class="size-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg></button> <!> <button class="self-center p-1 hover:bg-black/5 dark:hover:bg-white/5 dark:hover:text-white hover:text-black rounded-md transition"><svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" class="size-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg></button></div>`);
var root_28$1 = from_html(`<button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3" aria-hidden="true" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path></svg></button>`);
var root_29$1 = from_html(`<button><svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" stroke-width="2.3" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"></path></svg></button>`);
var root_32$1 = from_svg(`<svg class=" w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><style>.spinner_S1WN {
															animation: spinner_MGfb 0.8s linear infinite;
															animation-delay: -0.8s;
														}

														.spinner_Km9P {
															animation-delay: -0.65s;
														}

														.spinner_JApP {
															animation-delay: -0.5s;
														}

														@keyframes spinner_MGfb {
															93.75%,
															100% {
																opacity: 0.2;
															}
														}</style><circle class="spinner_S1WN" cx="4" cy="12" r="3"></circle><circle class="spinner_S1WN spinner_Km9P" cx="12" cy="12" r="3"></circle><circle class="spinner_S1WN spinner_JApP" cx="20" cy="12" r="3"></circle></svg>`);
var root_34$1 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" stroke-width="2.3" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"></path></svg>`);
var root_35 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" stroke-width="2.3" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"></path></svg>`);
var root_31 = from_html(`<button><!></button>`);
var root_38 = from_svg(`<svg aria-hidden="true" class=" w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><style>.spinner_S1WN {
															animation: spinner_MGfb 0.8s linear infinite;
															animation-delay: -0.8s;
														}

														.spinner_Km9P {
															animation-delay: -0.65s;
														}

														.spinner_JApP {
															animation-delay: -0.5s;
														}

														@keyframes spinner_MGfb {
															93.75%,
															100% {
																opacity: 0.2;
															}
														}</style><circle class="spinner_S1WN" cx="4" cy="12" r="3"></circle><circle class="spinner_S1WN spinner_Km9P" cx="12" cy="12" r="3"></circle><circle class="spinner_S1WN spinner_JApP" cx="20" cy="12" r="3"></circle></svg>`);
var root_39$1 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" stroke-width="2.3" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path></svg>`);
var root_37$1 = from_html(`<button><!></button>`);
var root_41$1 = from_html(`<button aria-hidden="true"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path></svg></button>`);
var root_44 = from_html(`<button><svg aria-hidden="true" stroke="currentColor" fill="none" stroke-width="2.3" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg></button>`);
var root_45 = from_html(`<button><svg aria-hidden="true" stroke="currentColor" fill="none" stroke-width="2.3" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path></svg></button>`);
var root_43 = from_html(`<!> <!>`, 1);
var root_47 = from_html(`<button type="button" id="continue-response-button"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"></path></svg></button>`);
var root_51 = from_html(`<div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3" aria-hidden="true" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"></path></svg></div>`);
var root_49 = from_html(`<button type="button" class="hidden regenerate-response-button"></button> <!>`, 1);
var root_53 = from_html(`<button type="button"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3" aria-hidden="true" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"></path></svg></button>`);
var root_56 = from_html(`<button type="button" id="delete-response-button"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"></path></svg></button>`);
var root_60 = from_html(`<div class="size-4"><img style="fill: currentColor;"/></div>`);
var root_59 = from_html(`<button type="button"><!></button>`);
var root_42 = from_html(`<!> <!> <!> <!> <!>`, 1);
var root_25 = from_html(`<!> <!> <!> <!> <!> <!>`, 1);
var root_21$2 = from_html(`<!> <!>`, 1);
var root_63 = from_html(`<div class="mt-2.5"><!></div>`);
var root_20$1 = from_html(`<div class="flex justify-start overflow-x-auto buttons text-gray-600 dark:text-gray-500 mt-0.5 svelte-1qscqw6"><!></div> <!> <!>`, 1);
var root_1$4 = from_html(`<div><div><!></div> <div class="flex-auto w-0 pl-1 relative"><!> <div><div><div><!> <!> <!> <!> <div id="response-content-container"><!> <!> <!> <!></div></div></div> <!></div></div></div>`);
var root$5 = from_html(`<!> <!>`, 1);
function ResponseMessage($$anchor, $$props) {
  push($$props, false);
  const $models = () => store_get(models, "$models", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $audioQueue = () => store_get(audioQueue, "$audioQueue", $$stores);
  const $TTSWorker = () => store_get(TTSWorker, "$TTSWorker", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const $temporaryChatEnabled = () => store_get(temporaryChatEnabled, "$temporaryChatEnabled", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  const dispatch = createEventDispatcher();
  let chatId2 = prop($$props, "chatId", 8, "");
  let history = prop($$props, "history", 12);
  let messageId = prop($$props, "messageId", 8);
  let selectedModels = prop($$props, "selectedModels", 24, () => []);
  let message = mutable_source(JSON.parse(JSON.stringify(history().messages[messageId()])));
  let siblings = prop($$props, "siblings", 8);
  let setInputText = prop($$props, "setInputText", 8, () => {
  });
  let gotoMessage = prop($$props, "gotoMessage", 8, () => {
  });
  let showPreviousMessage = prop($$props, "showPreviousMessage", 8);
  let showNextMessage = prop($$props, "showNextMessage", 8);
  let updateChat = prop($$props, "updateChat", 8);
  let editMessage = prop($$props, "editMessage", 8);
  let saveMessage = prop($$props, "saveMessage", 8);
  prop($$props, "rateMessage", 8);
  let actionMessage = prop($$props, "actionMessage", 8);
  let deleteMessage = prop($$props, "deleteMessage", 8);
  let submitMessage = prop($$props, "submitMessage", 8);
  let continueResponse = prop($$props, "continueResponse", 8);
  let regenerateResponse = prop($$props, "regenerateResponse", 8);
  let addMessages = prop($$props, "addMessages", 8);
  let isLastMessage = prop($$props, "isLastMessage", 8, true);
  let readOnly = prop($$props, "readOnly", 8, false);
  let editCodeBlock = prop($$props, "editCodeBlock", 8, true);
  let topPadding = prop($$props, "topPadding", 8, false);
  let citationsElement = mutable_source();
  let contentContainerElement = mutable_source();
  let buttonsContainerElement = mutable_source();
  let showDeleteConfirm = mutable_source(false);
  let model = mutable_source(null);
  let edit = mutable_source(false);
  let editedContent = mutable_source("");
  let editTextAreaElement = mutable_source();
  let messageIndexEdit = mutable_source(false);
  let speaking = mutable_source(false);
  let loadingSpeech = mutable_source(false);
  let generatingImage = mutable_source(false);
  let showRateComment = mutable_source(false);
  const copyToClipboard$1 = async (text2) => {
    var _a, _b, _c, _d, _e;
    text2 = removeAllDetails(text2);
    if ((((_b = (_a = $config()) == null ? void 0 : _a.ui) == null ? void 0 : _b.response_watermark) ?? "").trim() !== "") {
      text2 = `${text2}

${(_d = (_c = $config()) == null ? void 0 : _c.ui) == null ? void 0 : _d.response_watermark}`;
    }
    const res = await copyToClipboard(text2, null, ((_e = $settings()) == null ? void 0 : _e.copyFormatted) ?? false);
    if (res) {
      toast.success($i18n().t("Copying to clipboard was successful!"));
    }
  };
  const stopAudio = () => {
    try {
      speechSynthesis.cancel();
      $audioQueue().stop();
    } catch {
    }
    if (get(speaking)) {
      set(speaking, false);
    }
  };
  const speak = async () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C;
    if (!(((_a = get(message)) == null ? void 0 : _a.content) ?? "").trim().length) {
      toast.info($i18n().t("No content to speak"));
      return;
    }
    set(speaking, true);
    const content = removeAllDetails(get(message).content);
    if ($config().audio.tts.engine === "") {
      let voices = [];
      const getVoicesLoop = setInterval(
        () => {
          var _a2, _b2, _c2;
          voices = speechSynthesis.getVoices();
          if (voices.length > 0) {
            clearInterval(getVoicesLoop);
            const voice = ((_a2 = voices == null ? void 0 : voices.filter((v) => {
              var _a3, _b3, _c3, _d2, _e2, _f2;
              return v.voiceURI === (((_c3 = (_b3 = (_a3 = $settings()) == null ? void 0 : _a3.audio) == null ? void 0 : _b3.tts) == null ? void 0 : _c3.voice) ?? ((_f2 = (_e2 = (_d2 = $config()) == null ? void 0 : _d2.audio) == null ? void 0 : _e2.tts) == null ? void 0 : _f2.voice));
            })) == null ? void 0 : _a2.at(0)) ?? void 0;
            console.log(voice);
            const speech = new SpeechSynthesisUtterance(content);
            speech.rate = ((_c2 = (_b2 = $settings().audio) == null ? void 0 : _b2.tts) == null ? void 0 : _c2.playbackRate) ?? 1;
            console.log(speech);
            speech.onend = () => {
              var _a3;
              set(speaking, false);
              if ($settings().conversationMode) {
                (_a3 = document.getElementById("voice-input-button")) == null ? void 0 : _a3.click();
              }
            };
            if (voice) {
              speech.voice = voice;
            }
            speechSynthesis.speak(speech);
          }
        },
        100
      );
    } else {
      $audioQueue().setId(`${get(message).id}`);
      $audioQueue().setPlaybackRate(((_c = (_b = $settings().audio) == null ? void 0 : _b.tts) == null ? void 0 : _c.playbackRate) ?? 1);
      store_mutate(
        audioQueue,
        untrack($audioQueue).onStopped = () => {
          set(speaking, false);
        },
        untrack($audioQueue)
      );
      set(loadingSpeech, true);
      const messageContentParts = getMessageContentParts(content, ((_f = (_e = (_d = $config()) == null ? void 0 : _d.audio) == null ? void 0 : _e.tts) == null ? void 0 : _f.split_on) ?? "punctuation");
      if (!messageContentParts.length) {
        console.log("No content to speak");
        toast.info($i18n().t("No content to speak"));
        set(speaking, false);
        set(loadingSpeech, false);
        return;
      }
      console.debug("Prepared message content for TTS", messageContentParts);
      if (((_h = (_g = $settings().audio) == null ? void 0 : _g.tts) == null ? void 0 : _h.engine) === "browser-kokoro") {
        if (!$TTSWorker()) {
          await TTSWorker.set(new KokoroWorker({ dtype: ((_k = (_j = (_i = $settings().audio) == null ? void 0 : _i.tts) == null ? void 0 : _j.engineConfig) == null ? void 0 : _k.dtype) ?? "fp32" }));
          await $TTSWorker().init();
        }
        for (const [idx, sentence] of messageContentParts.entries()) {
          const url = await $TTSWorker().generate({
            text: sentence,
            voice: ((_n = (_m = (_l = $settings()) == null ? void 0 : _l.audio) == null ? void 0 : _m.tts) == null ? void 0 : _n.voice) ?? ((_q = (_p = (_o = $config()) == null ? void 0 : _o.audio) == null ? void 0 : _p.tts) == null ? void 0 : _q.voice)
          }).catch((error) => {
            console.error(error);
            toast.error(`${error}`);
            set(speaking, false);
            set(loadingSpeech, false);
          });
          if (url && get(speaking)) {
            $audioQueue().enqueue(url);
            set(loadingSpeech, false);
          }
        }
      } else {
        for (const [idx, sentence] of messageContentParts.entries()) {
          const res = await synthesizeOpenAISpeech(
            localStorage.token,
            ((_t = (_s = (_r = $settings()) == null ? void 0 : _r.audio) == null ? void 0 : _s.tts) == null ? void 0 : _t.defaultVoice) === $config().audio.tts.voice ? ((_w = (_v = (_u = $settings()) == null ? void 0 : _u.audio) == null ? void 0 : _v.tts) == null ? void 0 : _w.voice) ?? ((_z = (_y = (_x = $config()) == null ? void 0 : _x.audio) == null ? void 0 : _y.tts) == null ? void 0 : _z.voice) : (_C = (_B = (_A = $config()) == null ? void 0 : _A.audio) == null ? void 0 : _B.tts) == null ? void 0 : _C.voice,
            sentence
          ).catch((error) => {
            console.error(error);
            toast.error(`${error}`);
            set(speaking, false);
            set(loadingSpeech, false);
          });
          if (res && get(speaking)) {
            const blob = await res.blob();
            const url = URL.createObjectURL(blob);
            $audioQueue().enqueue(url);
            set(loadingSpeech, false);
          }
        }
      }
    }
  };
  let preprocessedDetailsCache = [];
  function preprocessForEditing(content) {
    const detailsBlocks = [];
    let i = 0;
    content = content.replace(/<details[\s\S]*?<\/details>/gi, (match) => {
      detailsBlocks.push(match);
      return `<details id="__DETAIL_${i++}__"/>`;
    });
    preprocessedDetailsCache = detailsBlocks;
    return content;
  }
  function postprocessAfterEditing(content) {
    const restoredContent = content.replace(/<details id="__DETAIL_(\d+)__"\/>/g, (_, index2) => preprocessedDetailsCache[parseInt(index2)] || "");
    return restoredContent;
  }
  const editMessageHandler = async () => {
    set(edit, true);
    set(editedContent, preprocessForEditing(get(message).content));
    await tick();
    mutate(editTextAreaElement, get(editTextAreaElement).style.height = "");
    mutate(editTextAreaElement, get(editTextAreaElement).style.height = `${get(editTextAreaElement).scrollHeight}px`);
  };
  const editMessageConfirmHandler = async () => {
    const messageContent = postprocessAfterEditing(get(editedContent) ? get(editedContent) : "");
    editMessage()(get(message).id, { content: messageContent }, false);
    set(edit, false);
    set(editedContent, "");
    await tick();
  };
  const saveAsCopyHandler = async () => {
    const messageContent = postprocessAfterEditing(get(editedContent) ? get(editedContent) : "");
    editMessage()(get(message).id, { content: messageContent });
    set(edit, false);
    set(editedContent, "");
    await tick();
  };
  const cancelEditMessage = async () => {
    set(edit, false);
    set(editedContent, "");
    await tick();
  };
  const generateImage = async (message2) => {
    set(generatingImage, true);
    const res = await imageGenerations(localStorage.token, message2.content).catch((error) => {
      toast.error(`${error}`);
    });
    console.log(res);
    if (res) {
      const files = res.map((image) => ({ type: "image", url: `${image.url}` }));
      saveMessage()(message2.id, { ...message2, files });
    }
    set(generatingImage, false);
  };
  let feedbackLoading = mutable_source(false);
  const feedbackHandler = async (rating = null, details = null) => {
    var _a, _b, _c, _d, _e;
    set(feedbackLoading, true);
    console.log("Feedback", rating, details);
    const updatedMessage = {
      ...get(message),
      annotation: {
        ...((_a = get(message)) == null ? void 0 : _a.annotation) ?? {},
        ...rating !== null ? { rating } : {},
        ...details ? details : {}
      }
    };
    const chat = await getChatById(localStorage.token, chatId2()).catch((error) => {
      toast.error(`${error}`);
    });
    if (!chat) {
      return;
    }
    const messages = createMessagesList(history(), get(message).id);
    let feedbackItem = {
      type: "rating",
      data: {
        ...(updatedMessage == null ? void 0 : updatedMessage.annotation) ? updatedMessage.annotation : {},
        model_id: ((_b = get(message)) == null ? void 0 : _b.selectedModelId) ?? get(message).model,
        ...history().messages[get(message).parentId].childrenIds.length > 1 ? {
          sibling_model_ids: history().messages[get(message).parentId].childrenIds.filter((id) => id !== get(message).id).map((id) => {
            var _a2;
            return ((_a2 = history().messages[id]) == null ? void 0 : _a2.selectedModelId) ?? history().messages[id].model;
          })
        } : {}
      },
      meta: {
        arena: get(message) ? get(message).arena : false,
        model_id: get(message).model,
        message_id: get(message).id,
        message_index: messages.length,
        chat_id: chatId2()
      },
      snapshot: { chat }
    };
    const baseModels = [
      feedbackItem.data.model_id,
      ...feedbackItem.data.sibling_model_ids ?? []
    ].reduce(
      (acc, modelId) => {
        var _a2;
        const model2 = $models().find((m) => m.id === modelId);
        if (model2) {
          acc[model2.id] = ((_a2 = model2 == null ? void 0 : model2.info) == null ? void 0 : _a2.base_model_id) ?? null;
        } else {
          console.warn(`Model with ID ${modelId} not found`);
        }
        return acc;
      },
      {}
    );
    feedbackItem.meta.base_models = baseModels;
    let feedback = null;
    if ((_c = get(message)) == null ? void 0 : _c.feedbackId) {
      feedback = await updateFeedbackById(localStorage.token, get(message).feedbackId, feedbackItem).catch((error) => {
        toast.error(`${error}`);
      });
    } else {
      feedback = await createNewFeedback(localStorage.token, feedbackItem).catch((error) => {
        toast.error(`${error}`);
      });
      if (feedback) {
        updatedMessage.feedbackId = feedback.id;
      }
    }
    console.log(updatedMessage);
    saveMessage()(get(message).id, updatedMessage);
    await tick();
    if (!details) {
      set(showRateComment, true);
      if (!((_d = updatedMessage.annotation) == null ? void 0 : _d.tags) && (((_e = get(message)) == null ? void 0 : _e.content) ?? "") !== "") {
        const tags2 = await generateTags(localStorage.token, get(message).model, messages, chatId2()).catch((error) => {
          console.error(error);
          return [];
        });
        console.log(tags2);
        if (tags2) {
          updatedMessage.annotation.tags = tags2;
          feedbackItem.data.tags = tags2;
          saveMessage()(get(message).id, updatedMessage);
          await updateFeedbackById(localStorage.token, updatedMessage.feedbackId, feedbackItem).catch((error) => {
            toast.error(`${error}`);
          });
        }
      }
    }
    set(feedbackLoading, false);
  };
  const deleteMessageHandler = async () => {
    deleteMessage()(get(message).id);
  };
  const buttonsWheelHandler = (event2) => {
    if (get(buttonsContainerElement)) {
      if (get(buttonsContainerElement).scrollWidth <= get(buttonsContainerElement).clientWidth) {
        return;
      } else {
        event2.preventDefault();
        if (event2.deltaY !== 0) {
          mutate(buttonsContainerElement, get(buttonsContainerElement).scrollLeft += event2.deltaY);
        }
      }
    }
  };
  const contentCopyHandler = (e) => {
    if (get(contentContainerElement)) {
      e.preventDefault();
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const tempDiv = document.createElement("div");
      tempDiv.appendChild(range.cloneContents());
      tempDiv.querySelectorAll("table").forEach((table) => {
        table.style.borderCollapse = "collapse";
        table.style.width = "auto";
        table.style.tableLayout = "auto";
      });
      tempDiv.querySelectorAll("th").forEach((th) => {
        th.style.whiteSpace = "nowrap";
        th.style.padding = "4px 8px";
      });
      e.clipboardData.setData("text/html", tempDiv.innerHTML);
      e.clipboardData.setData("text/plain", selection.toString());
    }
  };
  onMount(async () => {
    await tick();
    if (get(buttonsContainerElement)) {
      get(buttonsContainerElement).addEventListener("wheel", buttonsWheelHandler);
    }
    if (get(contentContainerElement)) {
      get(contentContainerElement).addEventListener("copy", contentCopyHandler);
    }
  });
  onDestroy(() => {
    if (get(buttonsContainerElement)) {
      get(buttonsContainerElement).removeEventListener("wheel", buttonsWheelHandler);
    }
    if (get(contentContainerElement)) {
      get(contentContainerElement).removeEventListener("copy", contentCopyHandler);
    }
  });
  legacy_pre_effect(
    () => (deep_read_state(history()), get(message), deep_read_state(messageId())),
    () => {
      if (history().messages) {
        if (JSON.stringify(get(message)) !== JSON.stringify(history().messages[messageId()])) {
          set(message, JSON.parse(JSON.stringify(history().messages[messageId()])));
        }
      }
    }
  );
  legacy_pre_effect(() => ($models(), get(message)), () => {
    set(model, $models().find((m) => m.id === get(message).model));
  });
  legacy_pre_effect(() => (get(edit), tick), () => {
    if (!get(edit)) {
      (async () => {
        await tick();
      })();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root$5();
  var node = first_child(fragment);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete message?"))));
    ConfirmDialog(node, {
      get title() {
        return get($0);
      },
      get show() {
        return get(showDeleteConfirm);
      },
      set show($$value) {
        set(showDeleteConfirm, $$value);
      },
      $$events: {
        confirm: () => {
          deleteMessageHandler();
        }
      },
      $$legacy: true
    });
  }
  var node_1 = sibling(node, 2);
  key(node_1, () => (get(message), untrack(() => get(message).id)), ($$anchor2) => {
    var div = root_1$4();
    var div_1 = child(div);
    set_class(div_1, 1, `shrink-0 ltr:mr-3 rtl:ml-3 hidden @lg:flex mt-1 `, "svelte-1qscqw6");
    var node_2 = child(div_1);
    {
      let $0 = derived_safe_equal(() => (deep_read_state(WEBUI_API_BASE_URL), get(model), $i18n(), untrack(() => {
        var _a;
        return `${WEBUI_API_BASE_URL}/models/model/profile/image?id=${(_a = get(model)) == null ? void 0 : _a.id}&lang=${$i18n().language}`;
      })));
      ProfileImage(node_2, {
        get src() {
          return get($0);
        },
        className: "size-8 assistant-message-profile-image"
      });
    }
    reset(div_1);
    var div_2 = sibling(div_1, 2);
    var node_3 = child(div_2);
    Name(node_3, {
      children: ($$anchor3, $$slotProps) => {
        var fragment_1 = root_2$5();
        var node_4 = first_child(fragment_1);
        {
          let $0 = derived_safe_equal(() => (get(model), get(message), untrack(() => {
            var _a;
            return ((_a = get(model)) == null ? void 0 : _a.name) ?? get(message).model;
          })));
          Tooltip(node_4, {
            get content() {
              return get($0);
            },
            placement: "top-start",
            children: ($$anchor4, $$slotProps2) => {
              var span = root_3$4();
              var text_1 = child(span, true);
              reset(span);
              template_effect(() => set_text(text_1, (get(model), get(message), untrack(() => {
                var _a;
                return ((_a = get(model)) == null ? void 0 : _a.name) ?? get(message).model;
              }))));
              append($$anchor4, span);
            },
            $$slots: { default: true }
          });
        }
        var node_5 = sibling(node_4, 2);
        {
          var consequent = ($$anchor4) => {
            var div_3 = root_4$3();
            var node_6 = child(div_3);
            {
              let $0 = derived_safe_equal(() => (deep_read_state(dayjs2), get(message), untrack(() => dayjs2(get(message).timestamp * 1e3).format("LLLL"))));
              Tooltip(node_6, {
                get content() {
                  return get($0);
                },
                children: ($$anchor5, $$slotProps2) => {
                  var span_1 = root_5$3();
                  var text_2 = child(span_1, true);
                  reset(span_1);
                  template_effect(($02) => set_text(text_2, $02), [
                    () => ($i18n(), deep_read_state(formatDate), get(message), deep_read_state(dayjs2), untrack(() => $i18n().t(formatDate(get(message).timestamp * 1e3), {
                      LOCALIZED_TIME: dayjs2(get(message).timestamp * 1e3).format("LT"),
                      LOCALIZED_DATE: dayjs2(get(message).timestamp * 1e3).format("L")
                    })))
                  ]);
                  append($$anchor5, span_1);
                },
                $$slots: { default: true }
              });
            }
            reset(div_3);
            template_effect(() => set_class(div_3, 1, `self-center text-xs font-medium first-letter:capitalize ml-0.5 translate-y-[1px] ${($settings(), untrack(() => {
              var _a;
              return ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "dark:text-gray-100 text-gray-900" : "invisible group-hover:visible transition text-gray-400";
            })) ?? ""}`));
            append($$anchor4, div_3);
          };
          if_block(node_5, ($$render) => {
            if (get(message), untrack(() => get(message).timestamp)) $$render(consequent);
          });
        }
        append($$anchor3, fragment_1);
      },
      $$slots: { default: true }
    });
    var div_4 = sibling(node_3, 2);
    var div_5 = child(div_4);
    var div_6 = child(div_5);
    var node_7 = child(div_6);
    {
      var consequent_1 = ($$anchor3) => {
        {
          let $0 = derived_safe_equal(() => (get(message), untrack(() => {
            var _a;
            return (_a = get(message)) == null ? void 0 : _a.statusHistory;
          })));
          StatusHistory($$anchor3, {
            get statusHistory() {
              return get($0);
            }
          });
        }
      };
      if_block(node_7, ($$render) => {
        if (get(model), untrack(() => {
          var _a, _b, _c, _d;
          return ((_d = (_c = (_b = (_a = get(model)) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.capabilities) == null ? void 0 : _d.status_updates) ?? true;
        })) $$render(consequent_1);
      });
    }
    var node_8 = sibling(node_7, 2);
    {
      var consequent_3 = ($$anchor3) => {
        var div_7 = root_7$1();
        each(div_7, 5, () => (get(message), untrack(() => get(message).files)), index, ($$anchor4, file) => {
          var div_8 = root_8$2();
          var node_9 = child(div_8);
          {
            var consequent_2 = ($$anchor5) => {
              Image($$anchor5, {
                get src() {
                  return get(file), untrack(() => get(file).url);
                },
                get alt() {
                  return get(message), untrack(() => get(message).content);
                }
              });
            };
            var alternate = ($$anchor5) => {
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
            if_block(node_9, ($$render) => {
              if (get(file), untrack(() => get(file).type === "image")) $$render(consequent_2);
              else $$render(alternate, false);
            });
          }
          reset(div_8);
          append($$anchor4, div_8);
        });
        reset(div_7);
        append($$anchor3, div_7);
      };
      if_block(node_8, ($$render) => {
        if (get(message), untrack(() => {
          var _a, _b;
          return ((_a = get(message)) == null ? void 0 : _a.files) && ((_b = get(message).files) == null ? void 0 : _b.filter((f) => f.type === "image").length) > 0;
        })) $$render(consequent_3);
      });
    }
    var node_10 = sibling(node_8, 2);
    {
      var consequent_4 = ($$anchor3) => {
        var div_9 = root_11$1();
        each(div_9, 5, () => (get(message), untrack(() => get(message).embeds)), index, ($$anchor4, embed2, idx) => {
          var div_10 = root_12$2();
          var node_11 = child(div_10);
          FullHeightIframe(node_11, {
            get src() {
              return get(embed2);
            },
            allowScripts: true,
            allowForms: true,
            allowSameOrigin: true,
            allowPopups: true
          });
          reset(div_10);
          template_effect(() => set_attribute(div_10, "id", (get(message), untrack(() => `${get(message).id}-embeds-${idx}`))));
          append($$anchor4, div_10);
        });
        reset(div_9);
        append($$anchor3, div_9);
      };
      if_block(node_10, ($$render) => {
        if (get(message), untrack(() => {
          var _a;
          return ((_a = get(message)) == null ? void 0 : _a.embeds) && get(message).embeds.length > 0;
        })) $$render(consequent_4);
      });
    }
    var node_12 = sibling(node_10, 2);
    {
      var consequent_5 = ($$anchor3) => {
        var div_11 = root_13();
        var textarea = child(div_11);
        remove_textarea_child(textarea);
        bind_this(textarea, ($$value) => set(editTextAreaElement, $$value), () => get(editTextAreaElement));
        var div_12 = sibling(textarea, 2);
        var div_13 = child(div_12);
        var button = child(div_13);
        var text_3 = child(button, true);
        reset(button);
        reset(div_13);
        var div_14 = sibling(div_13, 2);
        var button_1 = child(div_14);
        var text_4 = child(button_1, true);
        reset(button_1);
        var button_2 = sibling(button_1, 2);
        var text_5 = child(button_2, true);
        reset(button_2);
        reset(div_14);
        reset(div_12);
        reset(div_11);
        template_effect(
          ($0, $1, $2) => {
            set_attribute(textarea, "id", `message-edit-${(get(message), untrack(() => get(message).id)) ?? ""}`);
            set_text(text_3, $0);
            set_text(text_4, $1);
            set_text(text_5, $2);
          },
          [
            () => ($i18n(), untrack(() => $i18n().t("Save As Copy"))),
            () => ($i18n(), untrack(() => $i18n().t("Cancel"))),
            () => ($i18n(), untrack(() => $i18n().t("Save")))
          ]
        );
        bind_value(textarea, () => get(editedContent), ($$value) => set(editedContent, $$value));
        event("input", textarea, (e) => {
          e.target.style.height = "";
          e.target.style.height = `${e.target.scrollHeight}px`;
        });
        event("keydown", textarea, (e) => {
          var _a, _b;
          if (e.key === "Escape") {
            (_a = document.getElementById("close-edit-message-button")) == null ? void 0 : _a.click();
          }
          const isCmdOrCtrlPressed = e.metaKey || e.ctrlKey;
          const isEnterPressed = e.key === "Enter";
          if (isCmdOrCtrlPressed && isEnterPressed) {
            (_b = document.getElementById("confirm-edit-message-button")) == null ? void 0 : _b.click();
          }
        });
        event("click", button, () => {
          saveAsCopyHandler();
        });
        event("click", button_1, () => {
          cancelEditMessage();
        });
        event("click", button_2, () => {
          editMessageConfirmHandler();
        });
        append($$anchor3, div_11);
      };
      if_block(node_12, ($$render) => {
        if (get(edit) === true) $$render(consequent_5);
      });
    }
    var div_15 = sibling(node_12, 2);
    var node_13 = child(div_15);
    {
      var consequent_6 = ($$anchor3) => {
        Skeleton($$anchor3, {});
      };
      var alternate_1 = ($$anchor3) => {
        var fragment_6 = comment();
        var node_14 = first_child(fragment_6);
        {
          var consequent_7 = ($$anchor4) => {
            {
              let $0 = derived_safe_equal(() => (deep_read_state(chatId2()), get(message), untrack(() => `${chatId2()}-${get(message).id}`)));
              let $1 = derived_safe_equal(() => (get(message), deep_read_state(readOnly()), $settings(), untrack(() => {
                var _a, _b;
                return ((_a = get(message)) == null ? void 0 : _a.done) && !readOnly() && (((_b = $settings()) == null ? void 0 : _b.showFloatingActionButtons) ?? true);
              })));
              let $2 = derived_safe_equal(() => !readOnly());
              let $3 = derived_safe_equal(() => !readOnly());
              let $4 = derived_safe_equal(() => ($settings(), get(message), untrack(() => {
                var _a, _b;
                return ((_a = $settings()) == null ? void 0 : _a.chatFadeStreamingText) ?? true ? ((_b = get(message)) == null ? void 0 : _b.done) ?? false : true;
              })));
              ContentRenderer($$anchor4, {
                get id() {
                  return get($0);
                },
                get messageId() {
                  return get(message), untrack(() => get(message).id);
                },
                get history() {
                  return history();
                },
                get selectedModels() {
                  return selectedModels();
                },
                get content() {
                  return get(message), untrack(() => get(message).content);
                },
                get sources() {
                  return get(message), untrack(() => get(message).sources);
                },
                get floatingButtons() {
                  return get($1);
                },
                get save() {
                  return get($2);
                },
                get preview() {
                  return get($3);
                },
                get editCodeBlock() {
                  return editCodeBlock();
                },
                get topPadding() {
                  return topPadding();
                },
                get done() {
                  return get($4);
                },
                get model() {
                  return get(model);
                },
                onTaskClick: async (e) => {
                  console.log(e);
                },
                onSourceClick: async (id) => {
                  var _a;
                  console.log(id);
                  if (get(citationsElement)) {
                    (_a = get(citationsElement)) == null ? void 0 : _a.showSourceModal(id);
                  }
                },
                onAddMessages: ({ modelId, parentId, messages }) => {
                  addMessages()({ modelId, parentId, messages });
                },
                onSave: ({ raw, oldContent, newContent }) => {
                  history(history().messages[get(message).id].content = history().messages[get(message).id].content.replace(raw, raw.replace(oldContent, newContent)), true);
                  updateChat()();
                }
              });
            }
          };
          if_block(
            node_14,
            ($$render) => {
              if (get(message), untrack(() => get(message).content && get(message).error !== true)) $$render(consequent_7);
            },
            true
          );
        }
        append($$anchor3, fragment_6);
      };
      if_block(node_13, ($$render) => {
        if (get(message), get(model), untrack(() => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
          return get(message).content === "" && !get(message).error && (((_d = (_c = (_b = (_a = get(model)) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.capabilities) == null ? void 0 : _d.status_updates) ?? true ? (((_e = get(message)) == null ? void 0 : _e.statusHistory) ?? [...((_f = get(message)) == null ? void 0 : _f.status) ? [(_g = get(message)) == null ? void 0 : _g.status] : []]).length === 0 || (((_j = (_i = (_h = get(message)) == null ? void 0 : _h.statusHistory) == null ? void 0 : _i.at(-1)) == null ? void 0 : _j.hidden) ?? false) : true);
        })) $$render(consequent_6);
        else $$render(alternate_1, false);
      });
    }
    var node_15 = sibling(node_13, 2);
    {
      var consequent_8 = ($$anchor3) => {
        {
          let $0 = derived_safe_equal(() => (get(message), untrack(() => {
            var _a, _b;
            return ((_b = (_a = get(message)) == null ? void 0 : _a.error) == null ? void 0 : _b.content) ?? get(message).content;
          })));
          Error$1($$anchor3, {
            get content() {
              return get($0);
            }
          });
        }
      };
      if_block(node_15, ($$render) => {
        if (get(message), untrack(() => {
          var _a;
          return (_a = get(message)) == null ? void 0 : _a.error;
        })) $$render(consequent_8);
      });
    }
    var node_16 = sibling(node_15, 2);
    {
      var consequent_9 = ($$anchor3) => {
        {
          let $0 = derived_safe_equal(() => (get(message), untrack(() => {
            var _a;
            return (_a = get(message)) == null ? void 0 : _a.id;
          })));
          let $1 = derived_safe_equal(() => (get(message), untrack(() => {
            var _a, _b;
            return ((_a = get(message)) == null ? void 0 : _a.sources) ?? ((_b = get(message)) == null ? void 0 : _b.citations);
          })));
          bind_this(
            Citations($$anchor3, {
              get id() {
                return get($0);
              },
              get sources() {
                return get($1);
              },
              get readOnly() {
                return readOnly();
              },
              $$legacy: true
            }),
            ($$value) => set(citationsElement, $$value),
            () => get(citationsElement)
          );
        }
      };
      if_block(node_16, ($$render) => {
        if (get(message), get(model), untrack(() => {
          var _a, _b, _c, _d, _e, _f;
          return (((_a = get(message)) == null ? void 0 : _a.sources) || ((_b = get(message)) == null ? void 0 : _b.citations)) && (((_f = (_e = (_d = (_c = get(model)) == null ? void 0 : _c.info) == null ? void 0 : _d.meta) == null ? void 0 : _e.capabilities) == null ? void 0 : _f.citations) ?? true);
        })) $$render(consequent_9);
      });
    }
    var node_17 = sibling(node_16, 2);
    {
      var consequent_10 = ($$anchor3) => {
        CodeExecutions($$anchor3, {
          get codeExecutions() {
            return get(message), untrack(() => get(message).code_executions);
          }
        });
      };
      if_block(node_17, ($$render) => {
        if (get(message), untrack(() => get(message).code_executions)) $$render(consequent_10);
      });
    }
    reset(div_15);
    bind_this(div_15, ($$value) => set(contentContainerElement, $$value), () => get(contentContainerElement));
    reset(div_6);
    reset(div_5);
    var node_18 = sibling(div_5, 2);
    {
      var consequent_34 = ($$anchor3) => {
        var fragment_11 = root_20$1();
        var div_16 = first_child(fragment_11);
        var node_19 = child(div_16);
        {
          var consequent_31 = ($$anchor4) => {
            var fragment_12 = root_21$2();
            var node_20 = first_child(fragment_12);
            {
              var consequent_12 = ($$anchor5) => {
                var div_17 = root_22();
                var button_3 = child(div_17);
                var node_21 = sibling(button_3, 2);
                {
                  var consequent_11 = ($$anchor6) => {
                    var div_18 = root_23();
                    var input_1 = child(div_18);
                    remove_input_defaults(input_1);
                    var text_6 = sibling(input_1);
                    reset(div_18);
                    template_effect(
                      ($0) => {
                        set_attribute(input_1, "id", `message-index-input-${(get(message), untrack(() => get(message).id)) ?? ""}`);
                        set_value(input_1, $0);
                        set_attribute(input_1, "max", (deep_read_state(siblings()), untrack(() => siblings().length)));
                        set_text(text_6, `/${(deep_read_state(siblings()), untrack(() => siblings().length)) ?? ""}`);
                      },
                      [
                        () => (deep_read_state(siblings()), get(message), untrack(() => siblings().indexOf(get(message).id) + 1))
                      ]
                    );
                    event("focus", input_1, (e) => {
                      e.target.select();
                    });
                    event("blur", input_1, (e) => {
                      gotoMessage()(get(message), e.target.value - 1);
                      set(messageIndexEdit, false);
                    });
                    event("keydown", input_1, (e) => {
                      if (e.key === "Enter") {
                        gotoMessage()(get(message), e.target.value - 1);
                        set(messageIndexEdit, false);
                      }
                    });
                    append($$anchor6, div_18);
                  };
                  var alternate_2 = ($$anchor6) => {
                    var div_19 = root_24$1();
                    var text_7 = child(div_19);
                    reset(div_19);
                    template_effect(
                      ($0) => set_text(text_7, `${$0 ?? ""}/${(deep_read_state(siblings()), untrack(() => siblings().length)) ?? ""}`),
                      [
                        () => (deep_read_state(siblings()), get(message), untrack(() => siblings().indexOf(get(message).id) + 1))
                      ]
                    );
                    event("dblclick", div_19, async () => {
                      set(messageIndexEdit, true);
                      await tick();
                      const input = document.getElementById(`message-index-input-${get(message).id}`);
                      if (input) {
                        input.focus();
                        input.select();
                      }
                    });
                    append($$anchor6, div_19);
                  };
                  if_block(node_21, ($$render) => {
                    if (get(messageIndexEdit)) $$render(consequent_11);
                    else $$render(alternate_2, false);
                  });
                }
                var button_4 = sibling(node_21, 2);
                reset(div_17);
                template_effect(
                  ($0, $1) => {
                    set_attribute(button_3, "aria-label", $0);
                    set_attribute(button_4, "aria-label", $1);
                    div_17.dir = div_17.dir;
                  },
                  [
                    () => ($i18n(), untrack(() => $i18n().t("Previous message"))),
                    () => ($i18n(), untrack(() => $i18n().t("Next message")))
                  ]
                );
                event("click", button_3, () => {
                  showPreviousMessage()(get(message));
                });
                event("click", button_4, () => {
                  showNextMessage()(get(message));
                });
                append($$anchor5, div_17);
              };
              if_block(node_20, ($$render) => {
                if (deep_read_state(siblings()), untrack(() => siblings().length > 1)) $$render(consequent_12);
              });
            }
            var node_22 = sibling(node_20, 2);
            {
              var consequent_30 = ($$anchor5) => {
                var fragment_13 = root_25();
                var node_23 = first_child(fragment_13);
                {
                  var consequent_14 = ($$anchor6) => {
                    var fragment_14 = comment();
                    var node_24 = first_child(fragment_14);
                    {
                      var consequent_13 = ($$anchor7) => {
                        {
                          let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Edit"))));
                          Tooltip($$anchor7, {
                            get content() {
                              return get($0);
                            },
                            placement: "bottom",
                            children: ($$anchor8, $$slotProps) => {
                              var button_5 = root_28$1();
                              template_effect(
                                ($02) => {
                                  set_attribute(button_5, "aria-label", $02);
                                  set_class(button_5, 1, `${(deep_read_state(isLastMessage()), $settings(), untrack(() => {
                                    var _a;
                                    return isLastMessage() || (((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false) ? "visible" : "invisible group-hover:visible";
                                  })) ?? ""} p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition`);
                                },
                                [() => ($i18n(), untrack(() => $i18n().t("Edit")))]
                              );
                              event("click", button_5, () => {
                                editMessageHandler();
                              });
                              append($$anchor8, button_5);
                            },
                            $$slots: { default: true }
                          });
                        }
                      };
                      if_block(node_24, ($$render) => {
                        if ($user(), untrack(() => {
                          var _a, _b, _c, _d;
                          return ((_a = $user()) == null ? void 0 : _a.role) === "user" ? ((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.chat) == null ? void 0 : _d.edit) ?? true : true;
                        })) $$render(consequent_13);
                      });
                    }
                    append($$anchor6, fragment_14);
                  };
                  if_block(node_23, ($$render) => {
                    if (!readOnly()) $$render(consequent_14);
                  });
                }
                var node_25 = sibling(node_23, 2);
                {
                  let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Copy"))));
                  Tooltip(node_25, {
                    get content() {
                      return get($0);
                    },
                    placement: "bottom",
                    children: ($$anchor6, $$slotProps) => {
                      var button_6 = root_29$1();
                      template_effect(
                        ($02) => {
                          set_attribute(button_6, "aria-label", $02);
                          set_class(button_6, 1, `${(deep_read_state(isLastMessage()), $settings(), untrack(() => {
                            var _a;
                            return isLastMessage() || (((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false) ? "visible" : "invisible group-hover:visible";
                          })) ?? ""} p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition copy-response-button`);
                        },
                        [() => ($i18n(), untrack(() => $i18n().t("Copy")))]
                      );
                      event("click", button_6, () => {
                        copyToClipboard$1(get(message).content);
                      });
                      append($$anchor6, button_6);
                    },
                    $$slots: { default: true }
                  });
                }
                var node_26 = sibling(node_25, 2);
                {
                  var consequent_17 = ($$anchor6) => {
                    {
                      let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Read Aloud"))));
                      Tooltip($$anchor6, {
                        get content() {
                          return get($0);
                        },
                        placement: "bottom",
                        children: ($$anchor7, $$slotProps) => {
                          var button_7 = root_31();
                          var node_27 = child(button_7);
                          {
                            var consequent_15 = ($$anchor8) => {
                              var svg = root_32$1();
                              append($$anchor8, svg);
                            };
                            var alternate_4 = ($$anchor8) => {
                              var fragment_17 = comment();
                              var node_28 = first_child(fragment_17);
                              {
                                var consequent_16 = ($$anchor9) => {
                                  var svg_1 = root_34$1();
                                  append($$anchor9, svg_1);
                                };
                                var alternate_3 = ($$anchor9) => {
                                  var svg_2 = root_35();
                                  append($$anchor9, svg_2);
                                };
                                if_block(
                                  node_28,
                                  ($$render) => {
                                    if (get(speaking)) $$render(consequent_16);
                                    else $$render(alternate_3, false);
                                  },
                                  true
                                );
                              }
                              append($$anchor8, fragment_17);
                            };
                            if_block(node_27, ($$render) => {
                              if (get(loadingSpeech)) $$render(consequent_15);
                              else $$render(alternate_4, false);
                            });
                          }
                          reset(button_7);
                          template_effect(
                            ($02) => {
                              set_attribute(button_7, "aria-label", $02);
                              set_attribute(button_7, "id", `speak-button-${(get(message), untrack(() => get(message).id)) ?? ""}`);
                              set_class(button_7, 1, `${(deep_read_state(isLastMessage()), $settings(), untrack(() => {
                                var _a;
                                return isLastMessage() || (((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false) ? "visible" : "invisible group-hover:visible";
                              })) ?? ""} p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition`);
                            },
                            [() => ($i18n(), untrack(() => $i18n().t("Read Aloud")))]
                          );
                          event("click", button_7, () => {
                            if (!get(loadingSpeech)) {
                              if (get(speaking)) {
                                stopAudio();
                              } else {
                                speak();
                              }
                            }
                          });
                          append($$anchor7, button_7);
                        },
                        $$slots: { default: true }
                      });
                    }
                  };
                  if_block(node_26, ($$render) => {
                    if ($user(), untrack(() => {
                      var _a, _b, _c, _d;
                      return ((_a = $user()) == null ? void 0 : _a.role) === "admin" || (((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.chat) == null ? void 0 : _d.tts) ?? true);
                    })) $$render(consequent_17);
                  });
                }
                var node_29 = sibling(node_26, 2);
                {
                  var consequent_19 = ($$anchor6) => {
                    {
                      let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Generate Image"))));
                      Tooltip($$anchor6, {
                        get content() {
                          return get($0);
                        },
                        placement: "bottom",
                        children: ($$anchor7, $$slotProps) => {
                          var button_8 = root_37$1();
                          var node_30 = child(button_8);
                          {
                            var consequent_18 = ($$anchor8) => {
                              var svg_3 = root_38();
                              append($$anchor8, svg_3);
                            };
                            var alternate_5 = ($$anchor8) => {
                              var svg_4 = root_39$1();
                              append($$anchor8, svg_4);
                            };
                            if_block(node_30, ($$render) => {
                              if (get(generatingImage)) $$render(consequent_18);
                              else $$render(alternate_5, false);
                            });
                          }
                          reset(button_8);
                          template_effect(
                            ($02) => {
                              set_attribute(button_8, "aria-label", $02);
                              set_class(button_8, 1, `${(deep_read_state(isLastMessage()), $settings(), untrack(() => {
                                var _a;
                                return isLastMessage() || (((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false) ? "visible" : "invisible group-hover:visible";
                              })) ?? ""}  p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition`);
                            },
                            [
                              () => ($i18n(), untrack(() => $i18n().t("Generate Image")))
                            ]
                          );
                          event("click", button_8, () => {
                            if (!get(generatingImage)) {
                              generateImage(get(message));
                            }
                          });
                          append($$anchor7, button_8);
                        },
                        $$slots: { default: true }
                      });
                    }
                  };
                  if_block(node_29, ($$render) => {
                    if ($config(), $user(), deep_read_state(readOnly()), untrack(() => {
                      var _a, _b, _c, _d, _e;
                      return ((_a = $config()) == null ? void 0 : _a.features.enable_image_generation) && (((_b = $user()) == null ? void 0 : _b.role) === "admin" || ((_e = (_d = (_c = $user()) == null ? void 0 : _c.permissions) == null ? void 0 : _d.features) == null ? void 0 : _e.image_generation)) && !readOnly();
                    })) $$render(consequent_19);
                  });
                }
                var node_31 = sibling(node_29, 2);
                {
                  var consequent_20 = ($$anchor6) => {
                    {
                      let $0 = derived_safe_equal(() => (get(message), deep_read_state(sanitizeResponseContent), untrack(() => get(message).usage ? `<pre>${sanitizeResponseContent(JSON.stringify(get(message).usage, null, 2).replace(/"([^(")"]+)":/g, "$1:").slice(1, -1).split("\n").map((line) => line.slice(2)).map((line) => line.endsWith(",") ? line.slice(0, -1) : line).join("\n"))}</pre>` : "")));
                      Tooltip($$anchor6, {
                        get content() {
                          return get($0);
                        },
                        placement: "bottom",
                        children: ($$anchor7, $$slotProps) => {
                          var button_9 = root_41$1();
                          template_effect(() => {
                            set_class(button_9, 1, ` ${(deep_read_state(isLastMessage()), $settings(), untrack(() => {
                              var _a;
                              return isLastMessage() || (((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false) ? "visible" : "invisible group-hover:visible";
                            })) ?? ""} p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition whitespace-pre-wrap`);
                            set_attribute(button_9, "id", `info-${(get(message), untrack(() => get(message).id)) ?? ""}`);
                          });
                          event("click", button_9, () => {
                            console.log(get(message));
                          });
                          append($$anchor7, button_9);
                        },
                        $$slots: { default: true }
                      });
                    }
                  };
                  if_block(node_31, ($$render) => {
                    if (get(message), untrack(() => get(message).usage)) $$render(consequent_20);
                  });
                }
                var node_32 = sibling(node_31, 2);
                {
                  var consequent_29 = ($$anchor6) => {
                    var fragment_20 = root_42();
                    var node_33 = first_child(fragment_20);
                    {
                      var consequent_21 = ($$anchor7) => {
                        var fragment_21 = root_43();
                        var node_34 = first_child(fragment_21);
                        {
                          let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Good Response"))));
                          Tooltip(node_34, {
                            get content() {
                              return get($0);
                            },
                            placement: "bottom",
                            children: ($$anchor8, $$slotProps) => {
                              var button_10 = root_44();
                              template_effect(
                                ($02, $1) => {
                                  set_attribute(button_10, "aria-label", $02);
                                  set_class(button_10, 1, `${(deep_read_state(isLastMessage()), $settings(), untrack(() => {
                                    var _a;
                                    return isLastMessage() || (((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false) ? "visible" : "invisible group-hover:visible";
                                  })) ?? ""} p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg ${$1 ?? ""} dark:hover:text-white hover:text-black transition disabled:cursor-progress disabled:hover:bg-transparent`);
                                  button_10.disabled = get(feedbackLoading);
                                },
                                [
                                  () => ($i18n(), untrack(() => $i18n().t("Good Response"))),
                                  () => (get(message), untrack(() => {
                                    var _a, _b;
                                    return (((_b = (_a = get(message)) == null ? void 0 : _a.annotation) == null ? void 0 : _b.rating) ?? "").toString() === "1" ? "bg-gray-100 dark:bg-gray-800" : "";
                                  }))
                                ]
                              );
                              event("click", button_10, async () => {
                                await feedbackHandler(1);
                                window.setTimeout(
                                  () => {
                                    var _a;
                                    (_a = document.getElementById(`message-feedback-${get(message).id}`)) == null ? void 0 : _a.scrollIntoView();
                                  },
                                  0
                                );
                              });
                              append($$anchor8, button_10);
                            },
                            $$slots: { default: true }
                          });
                        }
                        var node_35 = sibling(node_34, 2);
                        {
                          let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Bad Response"))));
                          Tooltip(node_35, {
                            get content() {
                              return get($0);
                            },
                            placement: "bottom",
                            children: ($$anchor8, $$slotProps) => {
                              var button_11 = root_45();
                              template_effect(
                                ($02, $1) => {
                                  set_attribute(button_11, "aria-label", $02);
                                  set_class(button_11, 1, `${(deep_read_state(isLastMessage()), $settings(), untrack(() => {
                                    var _a;
                                    return isLastMessage() || (((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false) ? "visible" : "invisible group-hover:visible";
                                  })) ?? ""} p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg ${$1 ?? ""} dark:hover:text-white hover:text-black transition disabled:cursor-progress disabled:hover:bg-transparent`);
                                  button_11.disabled = get(feedbackLoading);
                                },
                                [
                                  () => ($i18n(), untrack(() => $i18n().t("Bad Response"))),
                                  () => (get(message), untrack(() => {
                                    var _a, _b;
                                    return (((_b = (_a = get(message)) == null ? void 0 : _a.annotation) == null ? void 0 : _b.rating) ?? "").toString() === "-1" ? "bg-gray-100 dark:bg-gray-800" : "";
                                  }))
                                ]
                              );
                              event("click", button_11, async () => {
                                await feedbackHandler(-1);
                                window.setTimeout(
                                  () => {
                                    var _a;
                                    (_a = document.getElementById(`message-feedback-${get(message).id}`)) == null ? void 0 : _a.scrollIntoView();
                                  },
                                  0
                                );
                              });
                              append($$anchor8, button_11);
                            },
                            $$slots: { default: true }
                          });
                        }
                        append($$anchor7, fragment_21);
                      };
                      if_block(node_33, ($$render) => {
                        if ($temporaryChatEnabled(), $config(), $user(), untrack(() => {
                          var _a, _b, _c, _d, _e;
                          return !$temporaryChatEnabled() && (((_a = $config()) == null ? void 0 : _a.features.enable_message_rating) ?? true) && (((_b = $user()) == null ? void 0 : _b.role) === "admin" || (((_e = (_d = (_c = $user()) == null ? void 0 : _c.permissions) == null ? void 0 : _d.chat) == null ? void 0 : _e.rate_response) ?? true));
                        })) $$render(consequent_21);
                      });
                    }
                    var node_36 = sibling(node_33, 2);
                    {
                      var consequent_22 = ($$anchor7) => {
                        {
                          let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Continue Response"))));
                          Tooltip($$anchor7, {
                            get content() {
                              return get($0);
                            },
                            placement: "bottom",
                            children: ($$anchor8, $$slotProps) => {
                              var button_12 = root_47();
                              template_effect(
                                ($02) => {
                                  set_attribute(button_12, "aria-label", $02);
                                  set_class(button_12, 1, `${(deep_read_state(isLastMessage()), $settings(), untrack(() => {
                                    var _a;
                                    return isLastMessage() || (((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false) ? "visible" : "invisible group-hover:visible";
                                  })) ?? ""} p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition`);
                                },
                                [
                                  () => ($i18n(), untrack(() => $i18n().t("Continue Response")))
                                ]
                              );
                              event("click", button_12, () => {
                                continueResponse()();
                              });
                              append($$anchor8, button_12);
                            },
                            $$slots: { default: true }
                          });
                        }
                      };
                      if_block(node_36, ($$render) => {
                        if (deep_read_state(isLastMessage()), $user(), untrack(() => {
                          var _a, _b, _c, _d;
                          return isLastMessage() && (((_a = $user()) == null ? void 0 : _a.role) === "admin" || (((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.chat) == null ? void 0 : _d.continue_response) ?? true));
                        })) $$render(consequent_22);
                      });
                    }
                    var node_37 = sibling(node_36, 2);
                    {
                      var consequent_24 = ($$anchor7) => {
                        var fragment_23 = comment();
                        var node_38 = first_child(fragment_23);
                        {
                          var consequent_23 = ($$anchor8) => {
                            var fragment_24 = root_49();
                            var button_13 = first_child(fragment_24);
                            var node_39 = sibling(button_13, 2);
                            RegenerateMenu(node_39, {
                              onRegenerate: (prompt = null) => {
                                var _a;
                                set(showRateComment, false);
                                regenerateResponse()(get(message), prompt);
                                (((_a = get(model)) == null ? void 0 : _a.actions) ?? []).forEach((action) => {
                                  dispatch("action", {
                                    id: action.id,
                                    event: {
                                      id: "regenerate-response",
                                      data: { messageId: get(message).id }
                                    }
                                  });
                                });
                              },
                              children: ($$anchor9, $$slotProps) => {
                                {
                                  let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Regenerate"))));
                                  Tooltip($$anchor9, {
                                    get content() {
                                      return get($0);
                                    },
                                    placement: "bottom",
                                    children: ($$anchor10, $$slotProps2) => {
                                      var div_20 = root_51();
                                      template_effect(
                                        ($02) => {
                                          set_attribute(div_20, "aria-label", $02);
                                          set_class(div_20, 1, `${isLastMessage() ? "visible" : "invisible group-hover:visible"} p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition`);
                                        },
                                        [() => ($i18n(), untrack(() => $i18n().t("Regenerate")))]
                                      );
                                      append($$anchor10, div_20);
                                    },
                                    $$slots: { default: true }
                                  });
                                }
                              },
                              $$slots: { default: true }
                            });
                            event("click", button_13, () => {
                              var _a;
                              set(showRateComment, false);
                              regenerateResponse()(get(message));
                              (((_a = get(model)) == null ? void 0 : _a.actions) ?? []).forEach((action) => {
                                dispatch("action", {
                                  id: action.id,
                                  event: {
                                    id: "regenerate-response",
                                    data: { messageId: get(message).id }
                                  }
                                });
                              });
                            });
                            append($$anchor8, fragment_24);
                          };
                          var alternate_6 = ($$anchor8) => {
                            {
                              let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Regenerate"))));
                              Tooltip($$anchor8, {
                                get content() {
                                  return get($0);
                                },
                                placement: "bottom",
                                children: ($$anchor9, $$slotProps) => {
                                  var button_14 = root_53();
                                  template_effect(
                                    ($02) => {
                                      set_attribute(button_14, "aria-label", $02);
                                      set_class(button_14, 1, `${isLastMessage() ? "visible" : "invisible group-hover:visible"} p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition regenerate-response-button`);
                                    },
                                    [() => ($i18n(), untrack(() => $i18n().t("Regenerate")))]
                                  );
                                  event("click", button_14, () => {
                                    var _a;
                                    set(showRateComment, false);
                                    regenerateResponse()(get(message));
                                    (((_a = get(model)) == null ? void 0 : _a.actions) ?? []).forEach((action) => {
                                      dispatch("action", {
                                        id: action.id,
                                        event: {
                                          id: "regenerate-response",
                                          data: { messageId: get(message).id }
                                        }
                                      });
                                    });
                                  });
                                  append($$anchor9, button_14);
                                },
                                $$slots: { default: true }
                              });
                            }
                          };
                          if_block(node_38, ($$render) => {
                            if ($settings(), untrack(() => {
                              var _a;
                              return ((_a = $settings()) == null ? void 0 : _a.regenerateMenu) ?? true;
                            })) $$render(consequent_23);
                            else $$render(alternate_6, false);
                          });
                        }
                        append($$anchor7, fragment_23);
                      };
                      if_block(node_37, ($$render) => {
                        if ($user(), untrack(() => {
                          var _a, _b, _c, _d;
                          return ((_a = $user()) == null ? void 0 : _a.role) === "admin" || (((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.chat) == null ? void 0 : _d.regenerate_response) ?? true);
                        })) $$render(consequent_24);
                      });
                    }
                    var node_40 = sibling(node_37, 2);
                    {
                      var consequent_26 = ($$anchor7) => {
                        var fragment_27 = comment();
                        var node_41 = first_child(fragment_27);
                        {
                          var consequent_25 = ($$anchor8) => {
                            {
                              let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete"))));
                              Tooltip($$anchor8, {
                                get content() {
                                  return get($0);
                                },
                                placement: "bottom",
                                children: ($$anchor9, $$slotProps) => {
                                  var button_15 = root_56();
                                  template_effect(
                                    ($02) => {
                                      set_attribute(button_15, "aria-label", $02);
                                      set_class(button_15, 1, `${(deep_read_state(isLastMessage()), $settings(), untrack(() => {
                                        var _a;
                                        return isLastMessage() || (((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false) ? "visible" : "invisible group-hover:visible";
                                      })) ?? ""} p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition`);
                                    },
                                    [() => ($i18n(), untrack(() => $i18n().t("Delete")))]
                                  );
                                  event("click", button_15, () => {
                                    set(showDeleteConfirm, true);
                                  });
                                  append($$anchor9, button_15);
                                },
                                $$slots: { default: true }
                              });
                            }
                          };
                          if_block(node_41, ($$render) => {
                            if (deep_read_state(siblings()), untrack(() => siblings().length > 1)) $$render(consequent_25);
                          });
                        }
                        append($$anchor7, fragment_27);
                      };
                      if_block(node_40, ($$render) => {
                        if ($user(), untrack(() => {
                          var _a, _b, _c, _d;
                          return ((_a = $user()) == null ? void 0 : _a.role) === "admin" || (((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.chat) == null ? void 0 : _d.delete_message) ?? true);
                        })) $$render(consequent_26);
                      });
                    }
                    var node_42 = sibling(node_40, 2);
                    {
                      var consequent_28 = ($$anchor7) => {
                        var fragment_29 = comment();
                        var node_43 = first_child(fragment_29);
                        each(node_43, 1, () => (get(model), untrack(() => {
                          var _a;
                          return ((_a = get(model)) == null ? void 0 : _a.actions) ?? [];
                        })), index, ($$anchor8, action) => {
                          Tooltip($$anchor8, {
                            get content() {
                              return get(action), untrack(() => get(action).name);
                            },
                            placement: "bottom",
                            children: ($$anchor9, $$slotProps) => {
                              var button_16 = root_59();
                              var node_44 = child(button_16);
                              {
                                var consequent_27 = ($$anchor10) => {
                                  var div_21 = root_60();
                                  var img = child(div_21);
                                  reset(div_21);
                                  template_effect(
                                    ($0) => {
                                      set_attribute(img, "src", (get(action), untrack(() => get(action).icon)));
                                      set_class(img, 1, `w-4 h-4 ${$0 ?? ""}`);
                                      set_attribute(img, "alt", (get(action), untrack(() => get(action).name)));
                                    },
                                    [
                                      () => (get(action), untrack(() => get(action).icon.includes("svg") ? "dark:invert-[80%]" : ""))
                                    ]
                                  );
                                  append($$anchor10, div_21);
                                };
                                var alternate_7 = ($$anchor10) => {
                                  Sparkles($$anchor10, { strokeWidth: "2.1", className: "size-4" });
                                };
                                if_block(node_44, ($$render) => {
                                  if (get(action), untrack(() => {
                                    var _a;
                                    return (_a = get(action)) == null ? void 0 : _a.icon;
                                  })) $$render(consequent_27);
                                  else $$render(alternate_7, false);
                                });
                              }
                              reset(button_16);
                              template_effect(() => {
                                set_attribute(button_16, "aria-label", (get(action), untrack(() => get(action).name)));
                                set_class(button_16, 1, `${(deep_read_state(isLastMessage()), $settings(), untrack(() => {
                                  var _a;
                                  return isLastMessage() || (((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false) ? "visible" : "invisible group-hover:visible";
                                })) ?? ""} p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition`);
                              });
                              event("click", button_16, () => {
                                actionMessage()(get(action).id, get(message));
                              });
                              append($$anchor9, button_16);
                            },
                            $$slots: { default: true }
                          });
                        });
                        append($$anchor7, fragment_29);
                      };
                      if_block(node_42, ($$render) => {
                        if (isLastMessage()) $$render(consequent_28);
                      });
                    }
                    append($$anchor6, fragment_20);
                  };
                  if_block(node_32, ($$render) => {
                    if (!readOnly()) $$render(consequent_29);
                  });
                }
                append($$anchor5, fragment_13);
              };
              if_block(node_22, ($$render) => {
                if (get(message), untrack(() => get(message).done)) $$render(consequent_30);
              });
            }
            append($$anchor4, fragment_12);
          };
          if_block(node_19, ($$render) => {
            if (get(message), deep_read_state(siblings()), untrack(() => get(message).done || siblings().length > 1)) $$render(consequent_31);
          });
        }
        reset(div_16);
        bind_this(div_16, ($$value) => set(buttonsContainerElement, $$value), () => get(buttonsContainerElement));
        var node_45 = sibling(div_16, 2);
        {
          var consequent_32 = ($$anchor4) => {
            RateComment($$anchor4, {
              get message() {
                return get(message);
              },
              set message($$value) {
                set(message, $$value);
              },
              get show() {
                return get(showRateComment);
              },
              set show($$value) {
                set(showRateComment, $$value);
              },
              $$events: {
                save: async (e) => {
                  await feedbackHandler(null, { ...e.detail });
                }
              },
              $$legacy: true
            });
          };
          if_block(node_45, ($$render) => {
            if (get(message), get(showRateComment), untrack(() => get(message).done && get(showRateComment))) $$render(consequent_32);
          });
        }
        var node_46 = sibling(node_45, 2);
        {
          var consequent_33 = ($$anchor4) => {
            var div_22 = root_63();
            var node_47 = child(div_22);
            {
              let $0 = derived_safe_equal(() => (get(message), untrack(() => {
                var _a;
                return (_a = get(message)) == null ? void 0 : _a.followUps;
              })));
              FollowUps(node_47, {
                get followUps() {
                  return get($0);
                },
                onClick: (prompt) => {
                  var _a, _b;
                  if (((_a = $settings()) == null ? void 0 : _a.insertFollowUpPrompt) ?? false) {
                    setInputText()(prompt);
                  } else {
                    submitMessage()((_b = get(message)) == null ? void 0 : _b.id, prompt);
                  }
                }
              });
            }
            reset(div_22);
            transition(1, div_22, () => fade, () => ({ duration: 100 }));
            append($$anchor4, div_22);
          };
          if_block(node_46, ($$render) => {
            if (deep_read_state(isLastMessage()), $settings(), get(message), deep_read_state(readOnly()), untrack(() => {
              var _a, _b;
              return (isLastMessage() || (((_a = $settings()) == null ? void 0 : _a.keepFollowUpPrompts) ?? false)) && get(message).done && !readOnly() && (((_b = get(message)) == null ? void 0 : _b.followUps) ?? []).length > 0;
            })) $$render(consequent_33);
          });
        }
        append($$anchor3, fragment_11);
      };
      if_block(node_18, ($$render) => {
        if (!get(edit)) $$render(consequent_34);
      });
    }
    reset(div_4);
    reset(div_2);
    reset(div);
    template_effect(() => {
      set_class(div, 1, ` flex w-full message-${(get(message), untrack(() => get(message).id)) ?? ""}`, "svelte-1qscqw6");
      set_attribute(div, "id", `message-${(get(message), untrack(() => get(message).id)) ?? ""}`);
      set_attribute(div, "dir", ($settings(), untrack(() => $settings().chatDirection)));
      set_class(div_5, 1, `chat-${(get(message), untrack(() => get(message).role)) ?? ""} w-full min-w-full markdown-prose`, "svelte-1qscqw6");
      set_class(div_15, 1, `w-full flex flex-col relative ${get(edit) ? "hidden" : ""}`);
      div.dir = div.dir;
    });
    append($$anchor2, div);
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root$4 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8 8v8m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm6-2a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm0 0h-1a5 5 0 0 1-5-5v-.5"></path></svg>`);
function Merge($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-4 h-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$4();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root_4$2 = from_html(`<button><div class="flex items-center gap-1.5"><div class="-translate-y-[1px]"> </div></div></button>`);
var root_2$4 = from_html(`<div class="w-full"><div class=" flex w-full mb-4.5 border-b border-gray-200 dark:border-gray-850"><div class="flex gap-2 scrollbar-none overflow-x-auto w-fit text-center font-medium bg-transparent pt-1 text-sm"></div></div> <!></div>`);
var root_10$1 = from_html(`<div><!></div>`);
var root_17 = from_html(`<span class=" self-center invisible group-hover:visible text-gray-400 text-xs font-medium uppercase ml-0.5 -mt-0.5"> </span>`);
var root_16 = from_html(` <!>`, 1);
var root_15$1 = from_html(`<div class="w-full rounded-xl pl-5 pr-2 py-2 mt-2"><!> <div class="mt-1 markdown-prose w-full min-w-full"><!></div></div>`);
var root_21$1 = from_html(`<button type="button" id="merge-response-button"><!></button>`);
var root_20 = from_html(`<div class=" shrink-0 text-gray-600 dark:text-gray-500 mt-1"><!></div>`);
var root_14$1 = from_html(`<div class="flex justify-end"><div class="w-full"><!></div> <!></div>`);
var root_1$3 = from_html(`<div><div class="flex snap-x snap-mandatory overflow-x-auto scrollbar-hidden"><!></div> <!></div>`);
function MultiResponseMessages($$anchor, $$props) {
  push($$props, false);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $models = () => store_get(models, "$models", $$stores);
  const $mobile = () => store_get(mobile, "$mobile", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  dayjs2.extend(localizedFormat);
  let chatId2 = prop($$props, "chatId", 8);
  let history = prop($$props, "history", 12);
  let messageId = prop($$props, "messageId", 8);
  let selectedModels = prop($$props, "selectedModels", 24, () => []);
  let isLastMessage = prop($$props, "isLastMessage", 8);
  let readOnly = prop($$props, "readOnly", 8, false);
  let editCodeBlock = prop($$props, "editCodeBlock", 8, true);
  let setInputText = prop($$props, "setInputText", 8, () => {
  });
  let updateChat = prop($$props, "updateChat", 8);
  let editMessage = prop($$props, "editMessage", 8);
  let saveMessage = prop($$props, "saveMessage", 8);
  let rateMessage = prop($$props, "rateMessage", 8);
  let actionMessage = prop($$props, "actionMessage", 8);
  let submitMessage = prop($$props, "submitMessage", 8);
  let deleteMessage = prop($$props, "deleteMessage", 8);
  let continueResponse = prop($$props, "continueResponse", 8);
  let regenerateResponse = prop($$props, "regenerateResponse", 8);
  let mergeResponses = prop($$props, "mergeResponses", 8);
  let addMessages = prop($$props, "addMessages", 8);
  let triggerScroll = prop($$props, "triggerScroll", 8);
  let topPadding = prop($$props, "topPadding", 8, false);
  createEventDispatcher();
  let parentMessage = mutable_source();
  let groupedMessageIds = mutable_source({});
  let groupedMessageIdsIdx = mutable_source({});
  let selectedModelIdx = mutable_source(null);
  let message = mutable_source(JSON.parse(JSON.stringify(history().messages[messageId()])));
  const gotoMessage = async (modelIdx, messageIdx) => {
    mutate(groupedMessageIdsIdx, get(groupedMessageIdsIdx)[modelIdx] = Math.max(0, Math.min(messageIdx, get(groupedMessageIds)[modelIdx].messageIds.length - 1)));
    let messageId2 = get(groupedMessageIds)[modelIdx].messageIds[get(groupedMessageIdsIdx)[modelIdx]];
    console.log(messageId2);
    let messageChildrenIds = history().messages[messageId2].childrenIds;
    while (messageChildrenIds.length !== 0) {
      messageId2 = messageChildrenIds.at(-1);
      messageChildrenIds = history().messages[messageId2].childrenIds;
    }
    history(history().currentId = messageId2, true);
    await tick();
    await updateChat()();
    triggerScroll()();
  };
  const showPreviousMessage = async (modelIdx) => {
    mutate(groupedMessageIdsIdx, get(groupedMessageIdsIdx)[modelIdx] = Math.max(0, get(groupedMessageIdsIdx)[modelIdx] - 1));
    let messageId2 = get(groupedMessageIds)[modelIdx].messageIds[get(groupedMessageIdsIdx)[modelIdx]];
    console.log(messageId2);
    let messageChildrenIds = history().messages[messageId2].childrenIds;
    while (messageChildrenIds.length !== 0) {
      messageId2 = messageChildrenIds.at(-1);
      messageChildrenIds = history().messages[messageId2].childrenIds;
    }
    history(history().currentId = messageId2, true);
    await tick();
    await updateChat()();
    triggerScroll()();
  };
  const showNextMessage = async (modelIdx) => {
    mutate(groupedMessageIdsIdx, get(groupedMessageIdsIdx)[modelIdx] = Math.min(get(groupedMessageIds)[modelIdx].messageIds.length - 1, get(groupedMessageIdsIdx)[modelIdx] + 1));
    let messageId2 = get(groupedMessageIds)[modelIdx].messageIds[get(groupedMessageIdsIdx)[modelIdx]];
    console.log(messageId2);
    let messageChildrenIds = history().messages[messageId2].childrenIds;
    while (messageChildrenIds.length !== 0) {
      messageId2 = messageChildrenIds.at(-1);
      messageChildrenIds = history().messages[messageId2].childrenIds;
    }
    history(history().currentId = messageId2, true);
    await tick();
    await updateChat()();
    triggerScroll()();
  };
  const initHandler = async () => {
    var _a, _b, _c;
    console.log("multiresponse:initHandler");
    await tick();
    messageId();
    set(parentMessage, history().messages[messageId()].parentId ? history().messages[history().messages[messageId()].parentId] : null);
    set(groupedMessageIds, (_a = get(parentMessage)) == null ? void 0 : _a.models.reduce(
      (a, model, modelIdx) => {
        var _a2, _b2;
        let modelMessageIds = (_a2 = get(parentMessage)) == null ? void 0 : _a2.childrenIds.map((id) => history().messages[id]).filter((m) => (m == null ? void 0 : m.modelIdx) === modelIdx).map((m) => m.id);
        if (modelMessageIds.length === 0) {
          let modelMessages = (_b2 = get(parentMessage)) == null ? void 0 : _b2.childrenIds.map((id) => history().messages[id]).filter((m) => (m == null ? void 0 : m.model) === model);
          modelMessages.forEach((m) => {
            m.modelIdx = modelIdx;
          });
          modelMessageIds = modelMessages.map((m) => m.id);
        }
        return { ...a, [modelIdx]: { messageIds: modelMessageIds } };
      },
      {}
    ));
    set(groupedMessageIdsIdx, (_b = get(parentMessage)) == null ? void 0 : _b.models.reduce(
      (a, model, modelIdx) => {
        const idx = get(groupedMessageIds)[modelIdx].messageIds.findIndex((id) => id === messageId());
        if (idx !== -1) {
          return { ...a, [modelIdx]: idx };
        } else {
          return {
            ...a,
            [modelIdx]: get(groupedMessageIds)[modelIdx].messageIds.length - 1
          };
        }
      },
      {}
    ));
    set(selectedModelIdx, (_c = history().messages[messageId()]) == null ? void 0 : _c.modelIdx);
    console.log(get(groupedMessageIds), get(groupedMessageIdsIdx));
    await tick();
  };
  const onGroupClick = async (_messageId, modelIdx) => {
    if (messageId() != _messageId) {
      let currentMessageId = _messageId;
      let messageChildrenIds = history().messages[currentMessageId].childrenIds;
      while (messageChildrenIds.length !== 0) {
        currentMessageId = messageChildrenIds.at(-1);
        messageChildrenIds = history().messages[currentMessageId].childrenIds;
      }
      history(history().currentId = currentMessageId, true);
      set(selectedModelIdx, modelIdx);
    }
  };
  const mergeResponsesHandler = async () => {
    const responses = Object.keys(get(groupedMessageIds)).map((modelIdx) => {
      const { messageIds } = get(groupedMessageIds)[modelIdx];
      const messageId2 = messageIds[get(groupedMessageIdsIdx)[modelIdx]];
      return history().messages[messageId2].content;
    });
    mergeResponses()(messageId(), responses, chatId2());
  };
  onMount(async () => {
    var _a;
    await initHandler();
    await tick();
    if (((_a = $settings()) == null ? void 0 : _a.scrollOnBranchChange) ?? true) {
      const messageElement = document.getElementById(`message-${messageId()}`);
      if (messageElement) {
        messageElement.scrollIntoView({ block: "start" });
      }
    }
  });
  legacy_pre_effect(
    () => (deep_read_state(history()), get(message), deep_read_state(messageId())),
    () => {
      if (history().messages) {
        if (JSON.stringify(get(message)) !== JSON.stringify(history().messages[messageId()])) {
          set(message, JSON.parse(JSON.stringify(history().messages[messageId()])));
        }
      }
    }
  );
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_12 = ($$anchor2) => {
      var div = root_1$3();
      var div_1 = child(div);
      var node_1 = child(div_1);
      {
        var consequent_3 = ($$anchor3) => {
          var div_2 = root_2$4();
          var div_3 = child(div_2);
          var div_4 = child(div_3);
          each(
            div_4,
            5,
            () => (get(groupedMessageIds), untrack(() => Object.keys(get(groupedMessageIds)))),
            index,
            ($$anchor4, modelIdx) => {
              var fragment_1 = comment();
              var node_2 = first_child(fragment_1);
              {
                var consequent = ($$anchor5) => {
                  const _messageId = derived_safe_equal(() => (get(groupedMessageIds), get(modelIdx), get(groupedMessageIdsIdx), untrack(() => get(groupedMessageIds)[get(modelIdx)].messageIds[get(groupedMessageIdsIdx)[get(modelIdx)]])));
                  const model = derived_safe_equal(() => ($models(), deep_read_state(history()), deep_read_state(get(_messageId)), untrack(() => $models().find((m) => {
                    var _a;
                    return m.id === ((_a = history().messages[get(_messageId)]) == null ? void 0 : _a.model);
                  }))));
                  var button = root_4$2();
                  var div_5 = child(button);
                  var div_6 = child(div_5);
                  var text2 = child(div_6, true);
                  reset(div_6);
                  reset(div_5);
                  reset(button);
                  template_effect(() => {
                    set_class(button, 1, `min-w-fit ${get(selectedModelIdx) == get(modelIdx) ? " dark:border-gray-300 " : " opacity-35 border-transparent"} pb-1.5 px-2.5 transition border-b-2`);
                    set_text(text2, (deep_read_state(get(model)), deep_read_state(history()), deep_read_state(get(_messageId)), untrack(() => {
                      var _a;
                      return get(model) ? `${get(model).name}` : (_a = history().messages[get(_messageId)]) == null ? void 0 : _a.model;
                    })));
                  });
                  event("click", button, async () => {
                    if (get(selectedModelIdx) != get(modelIdx)) {
                      set(selectedModelIdx, get(modelIdx));
                    }
                    onGroupClick(get(_messageId), get(modelIdx));
                  });
                  append($$anchor5, button);
                };
                if_block(node_2, ($$render) => {
                  if (get(groupedMessageIdsIdx), get(modelIdx), get(groupedMessageIds), untrack(() => get(groupedMessageIdsIdx)[get(modelIdx)] !== void 0 && get(groupedMessageIds)[get(modelIdx)].messageIds.length > 0)) $$render(consequent);
                });
              }
              append($$anchor4, fragment_1);
            }
          );
          reset(div_4);
          reset(div_3);
          var node_3 = sibling(div_3, 2);
          {
            var consequent_2 = ($$anchor4) => {
              const _messageId = derived_safe_equal(() => (get(groupedMessageIds), get(selectedModelIdx), get(groupedMessageIdsIdx), untrack(() => get(groupedMessageIds)[get(selectedModelIdx)].messageIds[get(groupedMessageIdsIdx)[get(selectedModelIdx)]])));
              var fragment_2 = comment();
              var node_4 = first_child(fragment_2);
              key(
                node_4,
                () => (deep_read_state(history()), untrack(() => history().currentId)),
                ($$anchor5) => {
                  var fragment_3 = comment();
                  var node_5 = first_child(fragment_3);
                  {
                    var consequent_1 = ($$anchor6) => {
                      ResponseMessage($$anchor6, {
                        get chatId() {
                          return chatId2();
                        },
                        get history() {
                          return history();
                        },
                        get messageId() {
                          return get(_messageId);
                        },
                        get selectedModels() {
                          return selectedModels();
                        },
                        isLastMessage: true,
                        get siblings() {
                          return get(groupedMessageIds), get(selectedModelIdx), untrack(() => get(groupedMessageIds)[get(selectedModelIdx)].messageIds);
                        },
                        gotoMessage: (message2, messageIdx) => gotoMessage(get(selectedModelIdx), messageIdx),
                        showPreviousMessage: () => showPreviousMessage(get(selectedModelIdx)),
                        showNextMessage: () => showNextMessage(get(selectedModelIdx)),
                        get setInputText() {
                          return setInputText();
                        },
                        get updateChat() {
                          return updateChat();
                        },
                        get editMessage() {
                          return editMessage();
                        },
                        get saveMessage() {
                          return saveMessage();
                        },
                        get rateMessage() {
                          return rateMessage();
                        },
                        get deleteMessage() {
                          return deleteMessage();
                        },
                        get actionMessage() {
                          return actionMessage();
                        },
                        get submitMessage() {
                          return submitMessage();
                        },
                        get continueResponse() {
                          return continueResponse();
                        },
                        regenerateResponse: async (message2, prompt = null) => {
                          regenerateResponse()(message2, prompt);
                          await tick();
                          mutate(groupedMessageIdsIdx, get(groupedMessageIdsIdx)[get(selectedModelIdx)] = get(groupedMessageIds)[get(selectedModelIdx)].messageIds.length - 1);
                        },
                        get addMessages() {
                          return addMessages();
                        },
                        get readOnly() {
                          return readOnly();
                        },
                        get topPadding() {
                          return topPadding();
                        }
                      });
                    };
                    if_block(node_5, ($$render) => {
                      if (get(message)) $$render(consequent_1);
                    });
                  }
                  append($$anchor5, fragment_3);
                }
              );
              append($$anchor4, fragment_2);
            };
            if_block(node_3, ($$render) => {
              if (get(selectedModelIdx) !== null) $$render(consequent_2);
            });
          }
          reset(div_2);
          append($$anchor3, div_2);
        };
        var alternate = ($$anchor3) => {
          var fragment_5 = comment();
          var node_6 = first_child(fragment_5);
          each(
            node_6,
            1,
            () => (get(groupedMessageIds), untrack(() => Object.keys(get(groupedMessageIds)))),
            index,
            ($$anchor4, modelIdx) => {
              var fragment_6 = comment();
              var node_7 = first_child(fragment_6);
              {
                var consequent_5 = ($$anchor5) => {
                  const _messageId = derived_safe_equal(() => (get(groupedMessageIds), get(modelIdx), get(groupedMessageIdsIdx), untrack(() => get(groupedMessageIds)[get(modelIdx)].messageIds[get(groupedMessageIdsIdx)[get(modelIdx)]])));
                  var div_7 = root_10$1();
                  var node_8 = child(div_7);
                  key(
                    node_8,
                    () => (deep_read_state(history()), untrack(() => history().currentId)),
                    ($$anchor6) => {
                      var fragment_7 = comment();
                      var node_9 = first_child(fragment_7);
                      {
                        var consequent_4 = ($$anchor7) => {
                          ResponseMessage($$anchor7, {
                            get chatId() {
                              return chatId2();
                            },
                            get history() {
                              return history();
                            },
                            get messageId() {
                              return get(_messageId);
                            },
                            get selectedModels() {
                              return selectedModels();
                            },
                            isLastMessage: true,
                            get siblings() {
                              return get(groupedMessageIds), get(modelIdx), untrack(() => get(groupedMessageIds)[get(modelIdx)].messageIds);
                            },
                            gotoMessage: (message2, messageIdx) => gotoMessage(get(modelIdx), messageIdx),
                            showPreviousMessage: () => showPreviousMessage(get(modelIdx)),
                            showNextMessage: () => showNextMessage(get(modelIdx)),
                            get setInputText() {
                              return setInputText();
                            },
                            get updateChat() {
                              return updateChat();
                            },
                            get editMessage() {
                              return editMessage();
                            },
                            get saveMessage() {
                              return saveMessage();
                            },
                            get rateMessage() {
                              return rateMessage();
                            },
                            get deleteMessage() {
                              return deleteMessage();
                            },
                            get actionMessage() {
                              return actionMessage();
                            },
                            get submitMessage() {
                              return submitMessage();
                            },
                            get continueResponse() {
                              return continueResponse();
                            },
                            regenerateResponse: async (message2, prompt = null) => {
                              regenerateResponse()(message2, prompt);
                              await tick();
                              mutate(groupedMessageIdsIdx, get(groupedMessageIdsIdx)[get(modelIdx)] = get(groupedMessageIds)[get(modelIdx)].messageIds.length - 1);
                            },
                            get addMessages() {
                              return addMessages();
                            },
                            get readOnly() {
                              return readOnly();
                            },
                            get editCodeBlock() {
                              return editCodeBlock();
                            },
                            get topPadding() {
                              return topPadding();
                            }
                          });
                        };
                        if_block(node_9, ($$render) => {
                          if (get(message)) $$render(consequent_4);
                        });
                      }
                      append($$anchor6, fragment_7);
                    }
                  );
                  reset(div_7);
                  template_effect(() => set_class(div_7, 1, ` snap-center w-full max-w-full m-1 border ${(deep_read_state(history()), deep_read_state(messageId()), get(modelIdx), $mobile(), untrack(() => {
                    var _a;
                    return ((_a = history().messages[messageId()]) == null ? void 0 : _a.modelIdx) == get(modelIdx) ? `bg-gray-50 dark:bg-gray-850 border-gray-100 dark:border-gray-800 border-2 ${$mobile() ? "min-w-full" : "min-w-80"}` : `border-gray-100 dark:border-gray-850 border-dashed ${$mobile() ? "min-w-full" : "min-w-80"}`;
                  })) ?? ""} transition-all p-5 rounded-2xl`));
                  event("click", div_7, async () => {
                    onGroupClick(get(_messageId), get(modelIdx));
                  });
                  append($$anchor5, div_7);
                };
                if_block(node_7, ($$render) => {
                  if (get(groupedMessageIdsIdx), get(modelIdx), get(groupedMessageIds), untrack(() => get(groupedMessageIdsIdx)[get(modelIdx)] !== void 0 && get(groupedMessageIds)[get(modelIdx)].messageIds.length > 0)) $$render(consequent_5);
                });
              }
              append($$anchor4, fragment_6);
            }
          );
          append($$anchor3, fragment_5);
        };
        if_block(node_1, ($$render) => {
          if ($settings(), untrack(() => {
            var _a;
            return ((_a = $settings()) == null ? void 0 : _a.displayMultiModelResponsesInTabs) ?? false;
          })) $$render(consequent_3);
          else $$render(alternate, false);
        });
      }
      reset(div_1);
      var node_10 = sibling(div_1, 2);
      {
        var consequent_11 = ($$anchor3) => {
          var fragment_9 = comment();
          var node_11 = first_child(fragment_9);
          {
            var consequent_10 = ($$anchor4) => {
              var div_8 = root_14$1();
              var div_9 = child(div_8);
              var node_12 = child(div_9);
              {
                var consequent_8 = ($$anchor5) => {
                  const message2 = derived_safe_equal(() => (deep_read_state(history()), deep_read_state(messageId()), untrack(() => {
                    var _a;
                    return (_a = history().messages[messageId()]) == null ? void 0 : _a.merged;
                  })));
                  var div_10 = root_15$1();
                  var node_13 = child(div_10);
                  Name(node_13, {
                    children: ($$anchor6, $$slotProps) => {
                      next();
                      var fragment_10 = root_16();
                      var text_1 = first_child(fragment_10);
                      var node_14 = sibling(text_1);
                      {
                        var consequent_6 = ($$anchor7) => {
                          var span = root_17();
                          var text_2 = child(span, true);
                          reset(span);
                          template_effect(($0) => set_text(text_2, $0), [
                            () => (deep_read_state(dayjs2), deep_read_state(get(message2)), untrack(() => dayjs2(get(message2).timestamp * 1e3).format("LT")))
                          ]);
                          append($$anchor7, span);
                        };
                        if_block(node_14, ($$render) => {
                          if (deep_read_state(get(message2)), untrack(() => get(message2).timestamp)) $$render(consequent_6);
                        });
                      }
                      template_effect(($0) => set_text(text_1, `${$0 ?? ""} `), [
                        () => ($i18n(), untrack(() => $i18n().t("Merged Response")))
                      ]);
                      append($$anchor6, fragment_10);
                    },
                    $$slots: { default: true }
                  });
                  var div_11 = sibling(node_13, 2);
                  var node_15 = child(div_11);
                  {
                    var consequent_7 = ($$anchor6) => {
                      Skeleton($$anchor6, {});
                    };
                    var alternate_1 = ($$anchor6) => {
                      {
                        let $0 = derived_safe_equal(() => (deep_read_state(get(message2)), untrack(() => get(message2).content ?? "")));
                        Markdown($$anchor6, {
                          id: `merged`,
                          get content() {
                            return get($0);
                          }
                        });
                      }
                    };
                    if_block(node_15, ($$render) => {
                      if (deep_read_state(get(message2)), untrack(() => {
                        var _a;
                        return (((_a = get(message2)) == null ? void 0 : _a.content) ?? "") === "";
                      })) $$render(consequent_7);
                      else $$render(alternate_1, false);
                    });
                  }
                  reset(div_11);
                  reset(div_10);
                  append($$anchor5, div_10);
                };
                if_block(node_12, ($$render) => {
                  if (deep_read_state(history()), deep_read_state(messageId()), untrack(() => {
                    var _a, _b;
                    return (_b = (_a = history().messages[messageId()]) == null ? void 0 : _a.merged) == null ? void 0 : _b.status;
                  })) $$render(consequent_8);
                });
              }
              reset(div_9);
              var node_16 = sibling(div_9, 2);
              {
                var consequent_9 = ($$anchor5) => {
                  var div_12 = root_20();
                  var node_17 = child(div_12);
                  {
                    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Merge Responses"))));
                    Tooltip(node_17, {
                      get content() {
                        return get($0);
                      },
                      placement: "bottom",
                      children: ($$anchor6, $$slotProps) => {
                        var button_1 = root_21$1();
                        set_class(button_1, 1, "visible p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition");
                        var node_18 = child(button_1);
                        Merge(node_18, { className: " size-5 " });
                        reset(button_1);
                        event("click", button_1, () => {
                          mergeResponsesHandler();
                        });
                        append($$anchor6, button_1);
                      },
                      $$slots: { default: true }
                    });
                  }
                  reset(div_12);
                  append($$anchor5, div_12);
                };
                if_block(node_16, ($$render) => {
                  if (isLastMessage()) $$render(consequent_9);
                });
              }
              reset(div_8);
              append($$anchor4, div_8);
            };
            if_block(node_11, ($$render) => {
              if (get(groupedMessageIds), get(groupedMessageIdsIdx), deep_read_state(history()), untrack(() => !Object.keys(get(groupedMessageIds)).find((modelIdx) => {
                var _a;
                const { messageIds } = get(groupedMessageIds)[modelIdx];
                const _messageId = messageIds[get(groupedMessageIdsIdx)[modelIdx]];
                return !((_a = history().messages[_messageId]) == null ? void 0 : _a.done);
              }))) $$render(consequent_10);
            });
          }
          append($$anchor3, fragment_9);
        };
        if_block(node_10, ($$render) => {
          if (!readOnly()) $$render(consequent_11);
        });
      }
      reset(div);
      template_effect(() => set_attribute(div_1, "id", `responses-container-${chatId2() ?? ""}-${(get(parentMessage), untrack(() => get(parentMessage).id)) ?? ""}`));
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (get(parentMessage)) $$render(consequent_12);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_1$2 = from_html(`<div><!></div>`);
var root_4$1 = from_html(` <span class=" text-gray-500 text-sm font-medium"> </span>`, 1);
var root_9$1 = from_html(`<span class="line-clamp-1"> </span>`);
var root_8$1 = from_html(`<div><!></div>`);
var root_3$3 = from_html(`<!> <!>`, 1);
var root_2$3 = from_html(`<div><!></div>`);
var root_12$1 = from_html(`<span class="line-clamp-1"> </span>`);
var root_11 = from_html(`<div class="flex justify-end pr-2 text-xs"><div><!></div></div>`);
var root_15 = from_html(`<div><!></div>`);
var root_14 = from_html(`<div class="mb-1 w-full flex flex-col justify-end overflow-x-auto gap-1 flex-wrap"></div>`);
var root_21 = from_html(`<div class=" relative group"><div class="relative flex items-center"><!></div> <div class=" absolute -top-1 -right-1"><button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-4"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg></button></div></div>`);
var root_19 = from_html(`<div class="flex items-center flex-wrap gap-2 -mx-2 mb-1"></div>`);
var root_18 = from_html(`<div class=" w-full bg-gray-50 dark:bg-gray-800 rounded-3xl px-5 py-3 mb-2"><!> <div class="max-h-96 overflow-auto"><textarea class=" bg-transparent outline-hidden w-full resize-none"></textarea></div> <div class=" mt-2 mb-1 flex justify-between text-sm font-medium"><div><button id="save-edit-message-button" class="px-3.5 py-1.5 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-200 transition rounded-3xl"> </button></div> <div class="flex space-x-1.5"><button id="close-edit-message-button" class="px-3.5 py-1.5 bg-white dark:bg-gray-900 hover:bg-gray-100 text-gray-800 dark:text-gray-100 transition rounded-3xl"> </button> <button id="confirm-edit-message-button" class="px-3.5 py-1.5 bg-gray-900 dark:bg-white hover:bg-gray-850 text-gray-100 dark:text-gray-800 transition rounded-3xl"> </button></div></div></div>`);
var root_24 = from_html(`<div class="w-full"><div><div><!></div></div></div>`);
var root_29 = from_html(`<div class="text-sm flex justify-center font-semibold self-center dark:text-gray-100 min-w-fit"><input type="number" min="1" class="bg-transparent font-semibold self-center dark:text-gray-100 min-w-fit outline-hidden"/> </div>`);
var root_30 = from_html(`<div class="text-sm tracking-widest font-semibold self-center dark:text-gray-100 min-w-fit"> </div>`);
var root_28 = from_html(`<div class="flex self-center" dir="ltr"><button class="self-center p-1 hover:bg-black/5 dark:hover:bg-white/5 dark:hover:text-white hover:text-black rounded-md transition"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" class="size-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg></button> <!> <button class="self-center p-1 hover:bg-black/5 dark:hover:bg-white/5 dark:hover:text-white hover:text-black rounded-md transition"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" class="size-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg></button></div>`);
var root_32 = from_html(`<button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path></svg></button>`);
var root_34 = from_html(`<button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"></path></svg></button>`);
var root_37 = from_html(`<button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"></path></svg></button>`);
var root_40 = from_html(`<div class="text-sm flex justify-center font-semibold self-center dark:text-gray-100 min-w-fit"><input type="number" min="1" class="bg-transparent font-semibold self-center dark:text-gray-100 min-w-fit outline-hidden"/> </div>`);
var root_41 = from_html(`<div class="text-sm tracking-widest font-semibold self-center dark:text-gray-100 min-w-fit"> </div>`);
var root_39 = from_html(`<div class="flex self-center" dir="ltr"><button class="self-center p-1 hover:bg-black/5 dark:hover:bg-white/5 dark:hover:text-white hover:text-black rounded-md transition"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" class="size-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg></button> <!> <button class="self-center p-1 hover:bg-black/5 dark:hover:bg-white/5 dark:hover:text-white hover:text-black rounded-md transition"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" class="size-3.5"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg></button></div>`);
var root_26 = from_html(`<div><!> <!> <!> <!> <!></div>`);
var root$3 = from_html(`<!> <div class=" flex w-full user-message group"><!> <div class="flex-auto w-0 max-w-full pl-1"><!> <div><!> <!> <!></div></div></div>`, 1);
function UserMessage($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $_user = () => store_get(user, "$_user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  dayjs2.extend(localizedFormat);
  let user$1 = prop($$props, "user", 8);
  let chatId2 = prop($$props, "chatId", 8);
  let history = prop($$props, "history", 8);
  let messageId = prop($$props, "messageId", 8);
  let siblings = prop($$props, "siblings", 8);
  let gotoMessage = prop($$props, "gotoMessage", 8);
  let showPreviousMessage = prop($$props, "showPreviousMessage", 8);
  let showNextMessage = prop($$props, "showNextMessage", 8);
  let editMessage = prop($$props, "editMessage", 8);
  let deleteMessage = prop($$props, "deleteMessage", 8);
  let isFirstMessage = prop($$props, "isFirstMessage", 8);
  let readOnly = prop($$props, "readOnly", 8);
  let editCodeBlock = prop($$props, "editCodeBlock", 8, true);
  let topPadding = prop($$props, "topPadding", 8, false);
  let showDeleteConfirm = mutable_source(false);
  let messageIndexEdit = mutable_source(false);
  let edit = mutable_source(false);
  let editedContent = mutable_source("");
  let editedFiles = mutable_source([]);
  let messageEditTextAreaElement = mutable_source();
  let message = mutable_source(JSON.parse(JSON.stringify(history().messages[messageId()])));
  const copyToClipboard$1 = async (text2) => {
    const res = await copyToClipboard(text2);
    if (res) {
      toast.success($i18n().t("Copying to clipboard was successful!"));
    }
  };
  const editMessageHandler = async () => {
    var _a, _b;
    set(edit, true);
    set(editedContent, ((_a = get(message)) == null ? void 0 : _a.content) ?? "");
    set(editedFiles, get(message).files);
    await tick();
    if (get(messageEditTextAreaElement)) {
      mutate(messageEditTextAreaElement, get(messageEditTextAreaElement).style.height = "");
      mutate(messageEditTextAreaElement, get(messageEditTextAreaElement).style.height = `${get(messageEditTextAreaElement).scrollHeight}px`);
      (_b = get(messageEditTextAreaElement)) == null ? void 0 : _b.focus();
    }
  };
  const editMessageConfirmHandler = async (submit = true) => {
    if (!get(editedContent) && (get(editedFiles) ?? []).length === 0) {
      toast.error($i18n().t("Please enter a message or attach a file."));
      return;
    }
    editMessage()(get(message).id, { content: get(editedContent), files: get(editedFiles) }, submit);
    set(edit, false);
    set(editedContent, "");
    set(editedFiles, []);
  };
  const cancelEditMessage = () => {
    set(edit, false);
    set(editedContent, "");
    set(editedFiles, []);
  };
  const deleteMessageHandler = async () => {
    deleteMessage()(get(message).id);
  };
  onMount(() => {
  });
  legacy_pre_effect(
    () => (deep_read_state(history()), get(message), deep_read_state(messageId())),
    () => {
      if (history().messages) {
        if (JSON.stringify(get(message)) !== JSON.stringify(history().messages[messageId()])) {
          set(message, JSON.parse(JSON.stringify(history().messages[messageId()])));
        }
      }
    }
  );
  legacy_pre_effect_reset();
  init();
  var fragment = root$3();
  var node = first_child(fragment);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete message?"))));
    ConfirmDialog(node, {
      get title() {
        return get($0);
      },
      get show() {
        return get(showDeleteConfirm);
      },
      set show($$value) {
        set(showDeleteConfirm, $$value);
      },
      $$events: {
        confirm: () => {
          deleteMessageHandler();
        }
      },
      $$legacy: true
    });
  }
  var div = sibling(node, 2);
  var node_1 = child(div);
  {
    var consequent = ($$anchor2) => {
      var div_1 = root_1$2();
      set_class(div_1, 1, `shrink-0 ltr:mr-3 rtl:ml-3 mt-1`);
      var node_2 = child(div_1);
      {
        let $0 = derived_safe_equal(() => (deep_read_state(WEBUI_API_BASE_URL), deep_read_state(user$1()), untrack(() => `${WEBUI_API_BASE_URL}/users/${user$1().id}/profile/image`)));
        ProfileImage(node_2, {
          get src() {
            return get($0);
          },
          className: "size-8 user-message-profile-image"
        });
      }
      reset(div_1);
      append($$anchor2, div_1);
    };
    if_block(node_1, ($$render) => {
      if ($settings(), untrack(() => {
        var _a;
        return !(((_a = $settings()) == null ? void 0 : _a.chatBubble) ?? true);
      })) $$render(consequent);
    });
  }
  var div_2 = sibling(node_1, 2);
  var node_3 = child(div_2);
  {
    var consequent_4 = ($$anchor2) => {
      var div_3 = root_2$3();
      var node_4 = child(div_3);
      Name(node_4, {
        children: ($$anchor3, $$slotProps) => {
          var fragment_1 = root_3$3();
          var node_5 = first_child(fragment_1);
          {
            var consequent_1 = ($$anchor4) => {
              var fragment_2 = root_4$1();
              var text_1 = first_child(fragment_2);
              var span = sibling(text_1);
              var text_2 = child(span, true);
              reset(span);
              template_effect(
                ($0) => {
                  set_text(text_1, `${$0 ?? ""} `);
                  set_text(text_2, (get(message), untrack(() => {
                    var _a;
                    return ((_a = get(message)) == null ? void 0 : _a.user) ?? "";
                  })));
                },
                [() => ($i18n(), untrack(() => $i18n().t("You")))]
              );
              append($$anchor4, fragment_2);
            };
            var alternate_1 = ($$anchor4) => {
              var fragment_3 = comment();
              var node_6 = first_child(fragment_3);
              {
                var consequent_2 = ($$anchor5) => {
                  var text_3 = text();
                  template_effect(() => set_text(text_3, (deep_read_state(user$1()), untrack(() => user$1().name))));
                  append($$anchor5, text_3);
                };
                var alternate = ($$anchor5) => {
                  var text_4 = text();
                  template_effect(($0) => set_text(text_4, $0), [() => ($i18n(), untrack(() => $i18n().t("You")))]);
                  append($$anchor5, text_4);
                };
                if_block(
                  node_6,
                  ($$render) => {
                    if ($settings(), $_user(), deep_read_state(user$1()), untrack(() => $settings().showUsername || $_user().name !== user$1().name)) $$render(consequent_2);
                    else $$render(alternate, false);
                  },
                  true
                );
              }
              append($$anchor4, fragment_3);
            };
            if_block(node_5, ($$render) => {
              if (get(message), untrack(() => get(message).user)) $$render(consequent_1);
              else $$render(alternate_1, false);
            });
          }
          var node_7 = sibling(node_5, 2);
          {
            var consequent_3 = ($$anchor4) => {
              var div_4 = root_8$1();
              var node_8 = child(div_4);
              {
                let $0 = derived_safe_equal(() => (deep_read_state(dayjs2), get(message), untrack(() => dayjs2(get(message).timestamp * 1e3).format("LLLL"))));
                Tooltip(node_8, {
                  get content() {
                    return get($0);
                  },
                  children: ($$anchor5, $$slotProps2) => {
                    var span_1 = root_9$1();
                    var text_5 = child(span_1, true);
                    reset(span_1);
                    template_effect(($02) => set_text(text_5, $02), [
                      () => ($i18n(), deep_read_state(formatDate), get(message), deep_read_state(dayjs2), untrack(() => $i18n().t(formatDate(get(message).timestamp * 1e3), {
                        LOCALIZED_TIME: dayjs2(get(message).timestamp * 1e3).format("LT"),
                        LOCALIZED_DATE: dayjs2(get(message).timestamp * 1e3).format("L")
                      })))
                    ]);
                    append($$anchor5, span_1);
                  },
                  $$slots: { default: true }
                });
              }
              reset(div_4);
              template_effect(() => set_class(div_4, 1, `self-center text-xs font-medium first-letter:capitalize ml-0.5 translate-y-[1px] ${($settings(), untrack(() => {
                var _a;
                return ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "dark:text-gray-900 text-gray-100" : "invisible group-hover:visible transition";
              })) ?? ""}`));
              append($$anchor4, div_4);
            };
            if_block(node_7, ($$render) => {
              if (get(message), untrack(() => get(message).timestamp)) $$render(consequent_3);
            });
          }
          append($$anchor3, fragment_1);
        },
        $$slots: { default: true }
      });
      reset(div_3);
      append($$anchor2, div_3);
    };
    var alternate_2 = ($$anchor2) => {
      var fragment_6 = comment();
      var node_9 = first_child(fragment_6);
      {
        var consequent_5 = ($$anchor3) => {
          var div_5 = root_11();
          var div_6 = child(div_5);
          var node_10 = child(div_6);
          {
            let $0 = derived_safe_equal(() => (deep_read_state(dayjs2), get(message), untrack(() => dayjs2(get(message).timestamp * 1e3).format("LLLL"))));
            Tooltip(node_10, {
              get content() {
                return get($0);
              },
              children: ($$anchor4, $$slotProps) => {
                var span_2 = root_12$1();
                var text_6 = child(span_2, true);
                reset(span_2);
                template_effect(($02) => set_text(text_6, $02), [
                  () => ($i18n(), deep_read_state(formatDate), get(message), deep_read_state(dayjs2), untrack(() => $i18n().t(formatDate(get(message).timestamp * 1e3), {
                    LOCALIZED_TIME: dayjs2(get(message).timestamp * 1e3).format("LT"),
                    LOCALIZED_DATE: dayjs2(get(message).timestamp * 1e3).format("L")
                  })))
                ]);
                append($$anchor4, span_2);
              },
              $$slots: { default: true }
            });
          }
          reset(div_6);
          reset(div_5);
          template_effect(() => set_class(div_6, 1, `text-[0.65rem] font-medium first-letter:capitalize mb-0.5 ${($settings(), untrack(() => {
            var _a;
            return ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "dark:text-gray-100 text-gray-900" : "invisible group-hover:visible transition text-gray-400";
          })) ?? ""}`));
          append($$anchor3, div_5);
        };
        if_block(
          node_9,
          ($$render) => {
            if (get(message), untrack(() => get(message).timestamp)) $$render(consequent_5);
          },
          true
        );
      }
      append($$anchor2, fragment_6);
    };
    if_block(node_3, ($$render) => {
      if ($settings(), untrack(() => {
        var _a;
        return !(((_a = $settings()) == null ? void 0 : _a.chatBubble) ?? true);
      })) $$render(consequent_4);
      else $$render(alternate_2, false);
    });
  }
  var div_7 = sibling(node_3, 2);
  var node_11 = child(div_7);
  {
    var consequent_8 = ($$anchor2) => {
      var fragment_7 = comment();
      var node_12 = first_child(fragment_7);
      {
        var consequent_7 = ($$anchor3) => {
          var div_8 = root_14();
          each(div_8, 5, () => (get(message), untrack(() => get(message).files)), index, ($$anchor4, file) => {
            var div_9 = root_15();
            var node_13 = child(div_9);
            {
              var consequent_6 = ($$anchor5) => {
                Image($$anchor5, {
                  get src() {
                    return get(file), untrack(() => get(file).url);
                  },
                  imageClassName: " max-h-96 rounded-lg"
                });
              };
              var alternate_3 = ($$anchor5) => {
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
              if_block(node_13, ($$render) => {
                if (get(file), untrack(() => get(file).type === "image")) $$render(consequent_6);
                else $$render(alternate_3, false);
              });
            }
            reset(div_9);
            template_effect(() => set_class(div_9, 1, clsx(($settings(), untrack(() => {
              var _a;
              return ((_a = $settings()) == null ? void 0 : _a.chatBubble) ?? true ? "self-end" : "";
            })))));
            append($$anchor4, div_9);
          });
          reset(div_8);
          append($$anchor3, div_8);
        };
        if_block(node_12, ($$render) => {
          if (get(message), untrack(() => get(message).files)) $$render(consequent_7);
        });
      }
      append($$anchor2, fragment_7);
    };
    if_block(node_11, ($$render) => {
      if (get(edit) !== true) $$render(consequent_8);
    });
  }
  var node_14 = sibling(node_11, 2);
  {
    var consequent_11 = ($$anchor2) => {
      var div_10 = root_18();
      var node_15 = child(div_10);
      {
        var consequent_10 = ($$anchor3) => {
          var div_11 = root_19();
          each(div_11, 5, () => get(editedFiles), index, ($$anchor4, file, fileIdx) => {
            var fragment_10 = comment();
            var node_16 = first_child(fragment_10);
            {
              var consequent_9 = ($$anchor5) => {
                var div_12 = root_21();
                var div_13 = child(div_12);
                var node_17 = child(div_13);
                Image(node_17, {
                  get src() {
                    return get(file), untrack(() => get(file).url);
                  },
                  alt: "input",
                  imageClassName: " size-14 rounded-xl object-cover"
                });
                reset(div_13);
                var div_14 = sibling(div_13, 2);
                var button = child(div_14);
                reset(div_14);
                reset(div_12);
                template_effect(() => set_class(button, 1, ` bg-white text-black border border-white rounded-full ${($settings(), untrack(() => {
                  var _a;
                  return ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "" : "group-hover:visible invisible transition";
                })) ?? ""}`));
                event("click", button, () => {
                  get(editedFiles).splice(fileIdx, 1);
                  set(editedFiles, get(editedFiles));
                });
                append($$anchor5, div_12);
              };
              var alternate_4 = ($$anchor5) => {
                {
                  let $0 = derived_safe_equal(() => (get(file), untrack(() => {
                    var _a;
                    return (_a = get(file)) == null ? void 0 : _a.size;
                  })));
                  let $1 = derived_safe_equal(() => (get(file), untrack(() => get(file).status === "uploading")));
                  FileItem($$anchor5, {
                    get item() {
                      return get(file);
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
                    get loading() {
                      return get($1);
                    },
                    dismissible: true,
                    edit: true,
                    $$events: {
                      dismiss: async () => {
                        get(editedFiles).splice(fileIdx, 1);
                        set(editedFiles, get(editedFiles));
                      },
                      click: () => {
                        console.log(get(file));
                      }
                    }
                  });
                }
              };
              if_block(node_16, ($$render) => {
                if (get(file), untrack(() => get(file).type === "image")) $$render(consequent_9);
                else $$render(alternate_4, false);
              });
            }
            append($$anchor4, fragment_10);
          });
          reset(div_11);
          append($$anchor3, div_11);
        };
        if_block(node_15, ($$render) => {
          if (get(editedFiles), untrack(() => (get(editedFiles) ?? []).length > 0)) $$render(consequent_10);
        });
      }
      var div_15 = sibling(node_15, 2);
      var textarea = child(div_15);
      remove_textarea_child(textarea);
      bind_this(textarea, ($$value) => set(messageEditTextAreaElement, $$value), () => get(messageEditTextAreaElement));
      reset(div_15);
      var div_16 = sibling(div_15, 2);
      var div_17 = child(div_16);
      var button_1 = child(div_17);
      var text_7 = child(button_1, true);
      reset(button_1);
      reset(div_17);
      var div_18 = sibling(div_17, 2);
      var button_2 = child(div_18);
      var text_8 = child(button_2, true);
      reset(button_2);
      var button_3 = sibling(button_2, 2);
      var text_9 = child(button_3, true);
      reset(button_3);
      reset(div_18);
      reset(div_16);
      reset(div_10);
      template_effect(
        ($0, $1, $2) => {
          set_attribute(textarea, "id", `message-edit-${(get(message), untrack(() => get(message).id)) ?? ""}`);
          set_text(text_7, $0);
          set_text(text_8, $1);
          set_text(text_9, $2);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Save"))),
          () => ($i18n(), untrack(() => $i18n().t("Cancel"))),
          () => ($i18n(), untrack(() => $i18n().t("Send")))
        ]
      );
      bind_value(textarea, () => get(editedContent), ($$value) => set(editedContent, $$value));
      event("input", textarea, (e) => {
        e.target.style.height = "";
        e.target.style.height = `${e.target.scrollHeight}px`;
      });
      event("keydown", textarea, (e) => {
        var _a, _b;
        if (e.key === "Escape") {
          (_a = document.getElementById("close-edit-message-button")) == null ? void 0 : _a.click();
        }
        const isCmdOrCtrlPressed = e.metaKey || e.ctrlKey;
        const isEnterPressed = e.key === "Enter";
        if (isCmdOrCtrlPressed && isEnterPressed) {
          (_b = document.getElementById("confirm-edit-message-button")) == null ? void 0 : _b.click();
        }
      });
      event("click", button_1, () => {
        editMessageConfirmHandler(false);
      });
      event("click", button_2, () => {
        cancelEditMessage();
      });
      event("click", button_3, () => {
        editMessageConfirmHandler();
      });
      append($$anchor2, div_10);
    };
    var alternate_5 = ($$anchor2) => {
      var fragment_12 = comment();
      var node_18 = first_child(fragment_12);
      {
        var consequent_13 = ($$anchor3) => {
          var div_19 = root_24();
          var div_20 = child(div_19);
          var div_21 = child(div_20);
          var node_19 = child(div_21);
          {
            var consequent_12 = ($$anchor4) => {
              {
                let $0 = derived_safe_equal(() => (deep_read_state(chatId2()), get(message), untrack(() => `${chatId2()}-${get(message).id}`)));
                Markdown($$anchor4, {
                  get id() {
                    return get($0);
                  },
                  get content() {
                    return get(message), untrack(() => get(message).content);
                  },
                  get editCodeBlock() {
                    return editCodeBlock();
                  },
                  get topPadding() {
                    return topPadding();
                  }
                });
              }
            };
            if_block(node_19, ($$render) => {
              if (get(message), untrack(() => get(message).content)) $$render(consequent_12);
            });
          }
          reset(div_21);
          reset(div_20);
          reset(div_19);
          template_effect(() => {
            set_class(div_20, 1, `flex ${($settings(), untrack(() => {
              var _a;
              return ((_a = $settings()) == null ? void 0 : _a.chatBubble) ?? true ? "justify-end pb-1" : "w-full";
            })) ?? ""}`);
            set_class(div_21, 1, `rounded-3xl ${($settings(), get(message), untrack(() => {
              var _a;
              return ((_a = $settings()) == null ? void 0 : _a.chatBubble) ?? true ? `max-w-[90%] px-4 py-1.5  bg-gray-50 dark:bg-gray-850 ${get(message).files ? "rounded-tr-lg" : ""}` : " w-full";
            })) ?? ""}`);
          });
          append($$anchor3, div_19);
        };
        if_block(
          node_18,
          ($$render) => {
            if (get(message), untrack(() => get(message).content !== "")) $$render(consequent_13);
          },
          true
        );
      }
      append($$anchor2, fragment_12);
    };
    if_block(node_14, ($$render) => {
      if (get(edit) === true) $$render(consequent_11);
      else $$render(alternate_5, false);
    });
  }
  var node_20 = sibling(node_14, 2);
  {
    var consequent_24 = ($$anchor2) => {
      var div_22 = root_26();
      var node_21 = child(div_22);
      {
        var consequent_16 = ($$anchor3) => {
          var fragment_14 = comment();
          var node_22 = first_child(fragment_14);
          {
            var consequent_15 = ($$anchor4) => {
              var div_23 = root_28();
              var button_4 = child(div_23);
              var node_23 = sibling(button_4, 2);
              {
                var consequent_14 = ($$anchor5) => {
                  var div_24 = root_29();
                  var input_1 = child(div_24);
                  remove_input_defaults(input_1);
                  var text_10 = sibling(input_1);
                  reset(div_24);
                  template_effect(
                    ($0) => {
                      set_attribute(input_1, "id", `message-index-input-${(get(message), untrack(() => get(message).id)) ?? ""}`);
                      set_value(input_1, $0);
                      set_attribute(input_1, "max", (deep_read_state(siblings()), untrack(() => siblings().length)));
                      set_text(text_10, `/${(deep_read_state(siblings()), untrack(() => siblings().length)) ?? ""}`);
                    },
                    [
                      () => (deep_read_state(siblings()), get(message), untrack(() => siblings().indexOf(get(message).id) + 1))
                    ]
                  );
                  event("focus", input_1, (e) => {
                    e.target.select();
                  });
                  event("blur", input_1, (e) => {
                    gotoMessage()(get(message), e.target.value - 1);
                    set(messageIndexEdit, false);
                  });
                  event("keydown", input_1, (e) => {
                    if (e.key === "Enter") {
                      gotoMessage()(get(message), e.target.value - 1);
                      set(messageIndexEdit, false);
                    }
                  });
                  append($$anchor5, div_24);
                };
                var alternate_6 = ($$anchor5) => {
                  var div_25 = root_30();
                  var text_11 = child(div_25);
                  reset(div_25);
                  template_effect(
                    ($0) => set_text(text_11, `${$0 ?? ""}/${(deep_read_state(siblings()), untrack(() => siblings().length)) ?? ""}`),
                    [
                      () => (deep_read_state(siblings()), get(message), untrack(() => siblings().indexOf(get(message).id) + 1))
                    ]
                  );
                  event("dblclick", div_25, async () => {
                    set(messageIndexEdit, true);
                    await tick();
                    const input = document.getElementById(`message-index-input-${get(message).id}`);
                    if (input) {
                      input.focus();
                      input.select();
                    }
                  });
                  append($$anchor5, div_25);
                };
                if_block(node_23, ($$render) => {
                  if (get(messageIndexEdit)) $$render(consequent_14);
                  else $$render(alternate_6, false);
                });
              }
              var button_5 = sibling(node_23, 2);
              reset(div_23);
              template_effect(() => div_23.dir = div_23.dir);
              event("click", button_4, () => {
                showPreviousMessage()(get(message));
              });
              event("click", button_5, () => {
                showNextMessage()(get(message));
              });
              append($$anchor4, div_23);
            };
            if_block(node_22, ($$render) => {
              if (deep_read_state(siblings()), untrack(() => siblings().length > 1)) $$render(consequent_15);
            });
          }
          append($$anchor3, fragment_14);
        };
        if_block(node_21, ($$render) => {
          if ($settings(), untrack(() => {
            var _a;
            return !(((_a = $settings()) == null ? void 0 : _a.chatBubble) ?? true);
          })) $$render(consequent_16);
        });
      }
      var node_24 = sibling(node_21, 2);
      {
        var consequent_17 = ($$anchor3) => {
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Edit"))));
            Tooltip($$anchor3, {
              get content() {
                return get($0);
              },
              placement: "bottom",
              children: ($$anchor4, $$slotProps) => {
                var button_6 = root_32();
                template_effect(() => set_class(button_6, 1, `${($settings(), untrack(() => {
                  var _a;
                  return ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "" : "invisible group-hover:visible";
                })) ?? ""} p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition edit-user-message-button`));
                event("click", button_6, () => {
                  editMessageHandler();
                });
                append($$anchor4, button_6);
              },
              $$slots: { default: true }
            });
          }
        };
        if_block(node_24, ($$render) => {
          if (!readOnly()) $$render(consequent_17);
        });
      }
      var node_25 = sibling(node_24, 2);
      {
        var consequent_18 = ($$anchor3) => {
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Copy"))));
            Tooltip($$anchor3, {
              get content() {
                return get($0);
              },
              placement: "bottom",
              children: ($$anchor4, $$slotProps) => {
                var button_7 = root_34();
                template_effect(() => set_class(button_7, 1, `${($settings(), untrack(() => {
                  var _a;
                  return ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "" : "invisible group-hover:visible";
                })) ?? ""} p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition`));
                event("click", button_7, () => {
                  copyToClipboard$1(get(message).content);
                });
                append($$anchor4, button_7);
              },
              $$slots: { default: true }
            });
          }
        };
        if_block(node_25, ($$render) => {
          if (get(message), untrack(() => {
            var _a;
            return (_a = get(message)) == null ? void 0 : _a.content;
          })) $$render(consequent_18);
        });
      }
      var node_26 = sibling(node_25, 2);
      {
        var consequent_20 = ($$anchor3) => {
          var fragment_17 = comment();
          var node_27 = first_child(fragment_17);
          {
            var consequent_19 = ($$anchor4) => {
              {
                let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete"))));
                Tooltip($$anchor4, {
                  get content() {
                    return get($0);
                  },
                  placement: "bottom",
                  children: ($$anchor5, $$slotProps) => {
                    var button_8 = root_37();
                    template_effect(() => set_class(button_8, 1, `${($settings(), untrack(() => {
                      var _a;
                      return ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "" : "invisible group-hover:visible";
                    })) ?? ""} p-1 rounded-sm dark:hover:text-white hover:text-black transition`));
                    event("click", button_8, () => {
                      set(showDeleteConfirm, true);
                    });
                    append($$anchor5, button_8);
                  },
                  $$slots: { default: true }
                });
              }
            };
            if_block(node_27, ($$render) => {
              if (deep_read_state(readOnly()), deep_read_state(isFirstMessage()), deep_read_state(siblings()), untrack(() => !readOnly() && (!isFirstMessage() || siblings().length > 1))) $$render(consequent_19);
            });
          }
          append($$anchor3, fragment_17);
        };
        if_block(node_26, ($$render) => {
          if ($_user(), untrack(() => {
            var _a, _b, _c, _d;
            return ((_a = $_user()) == null ? void 0 : _a.role) === "admin" || (((_d = (_c = (_b = $_user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.chat) == null ? void 0 : _d.delete_message) ?? false);
          })) $$render(consequent_20);
        });
      }
      var node_28 = sibling(node_26, 2);
      {
        var consequent_23 = ($$anchor3) => {
          var fragment_19 = comment();
          var node_29 = first_child(fragment_19);
          {
            var consequent_22 = ($$anchor4) => {
              var div_26 = root_39();
              var button_9 = child(div_26);
              var node_30 = sibling(button_9, 2);
              {
                var consequent_21 = ($$anchor5) => {
                  var div_27 = root_40();
                  var input_2 = child(div_27);
                  remove_input_defaults(input_2);
                  var text_12 = sibling(input_2);
                  reset(div_27);
                  template_effect(
                    ($0) => {
                      set_attribute(input_2, "id", `message-index-input-${(get(message), untrack(() => get(message).id)) ?? ""}`);
                      set_value(input_2, $0);
                      set_attribute(input_2, "max", (deep_read_state(siblings()), untrack(() => siblings().length)));
                      set_text(text_12, `/${(deep_read_state(siblings()), untrack(() => siblings().length)) ?? ""}`);
                    },
                    [
                      () => (deep_read_state(siblings()), get(message), untrack(() => siblings().indexOf(get(message).id) + 1))
                    ]
                  );
                  event("focus", input_2, (e) => {
                    e.target.select();
                  });
                  event("blur", input_2, (e) => {
                    gotoMessage()(get(message), e.target.value - 1);
                    set(messageIndexEdit, false);
                  });
                  event("keydown", input_2, (e) => {
                    if (e.key === "Enter") {
                      gotoMessage()(get(message), e.target.value - 1);
                      set(messageIndexEdit, false);
                    }
                  });
                  append($$anchor5, div_27);
                };
                var alternate_7 = ($$anchor5) => {
                  var div_28 = root_41();
                  var text_13 = child(div_28);
                  reset(div_28);
                  template_effect(
                    ($0) => set_text(text_13, `${$0 ?? ""}/${(deep_read_state(siblings()), untrack(() => siblings().length)) ?? ""}`),
                    [
                      () => (deep_read_state(siblings()), get(message), untrack(() => siblings().indexOf(get(message).id) + 1))
                    ]
                  );
                  event("dblclick", div_28, async () => {
                    set(messageIndexEdit, true);
                    await tick();
                    const input = document.getElementById(`message-index-input-${get(message).id}`);
                    if (input) {
                      input.focus();
                      input.select();
                    }
                  });
                  append($$anchor5, div_28);
                };
                if_block(node_30, ($$render) => {
                  if (get(messageIndexEdit)) $$render(consequent_21);
                  else $$render(alternate_7, false);
                });
              }
              var button_10 = sibling(node_30, 2);
              reset(div_26);
              template_effect(() => div_26.dir = div_26.dir);
              event("click", button_9, () => {
                showPreviousMessage()(get(message));
              });
              event("click", button_10, () => {
                showNextMessage()(get(message));
              });
              append($$anchor4, div_26);
            };
            if_block(node_29, ($$render) => {
              if (deep_read_state(siblings()), untrack(() => siblings().length > 1)) $$render(consequent_22);
            });
          }
          append($$anchor3, fragment_19);
        };
        if_block(node_28, ($$render) => {
          if ($settings(), untrack(() => {
            var _a;
            return ((_a = $settings()) == null ? void 0 : _a.chatBubble) ?? true;
          })) $$render(consequent_23);
        });
      }
      reset(div_22);
      template_effect(() => set_class(div_22, 1, ` flex ${($settings(), untrack(() => {
        var _a;
        return ((_a = $settings()) == null ? void 0 : _a.chatBubble) ?? true ? "justify-end" : "";
      })) ?? ""}  text-gray-600 dark:text-gray-500`));
      append($$anchor2, div_22);
    };
    if_block(node_20, ($$render) => {
      if (get(edit) !== true) $$render(consequent_24);
    });
  }
  reset(div_7);
  reset(div_2);
  reset(div);
  template_effect(() => {
    set_attribute(div, "dir", ($settings(), untrack(() => $settings().chatDirection)));
    set_attribute(div, "id", `message-${(get(message), untrack(() => get(message).id)) ?? ""}`);
    set_class(div_7, 1, `chat-${(get(message), untrack(() => get(message).role)) ?? ""} w-full min-w-full markdown-prose`);
    div.dir = div.dir;
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root$2 = from_html(`<div role="listitem"><!></div>`);
function Message($$anchor, $$props) {
  push($$props, false);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  createEventDispatcher();
  getContext("i18n");
  let chatId2 = prop($$props, "chatId", 8);
  let selectedModels = prop($$props, "selectedModels", 24, () => []);
  let idx = prop($$props, "idx", 8, 0);
  let history = prop($$props, "history", 12);
  let messageId = prop($$props, "messageId", 8);
  let user2 = prop($$props, "user", 8);
  let setInputText = prop($$props, "setInputText", 8, () => {
  });
  let gotoMessage = prop($$props, "gotoMessage", 8);
  let showPreviousMessage = prop($$props, "showPreviousMessage", 8);
  let showNextMessage = prop($$props, "showNextMessage", 8);
  let updateChat = prop($$props, "updateChat", 8);
  let editMessage = prop($$props, "editMessage", 8);
  let saveMessage = prop($$props, "saveMessage", 8);
  let deleteMessage = prop($$props, "deleteMessage", 8);
  let rateMessage = prop($$props, "rateMessage", 8);
  let actionMessage = prop($$props, "actionMessage", 8);
  let submitMessage = prop($$props, "submitMessage", 8);
  let regenerateResponse = prop($$props, "regenerateResponse", 8);
  let continueResponse = prop($$props, "continueResponse", 8);
  let mergeResponses = prop($$props, "mergeResponses", 8);
  let addMessages = prop($$props, "addMessages", 8);
  let triggerScroll = prop($$props, "triggerScroll", 8);
  let readOnly = prop($$props, "readOnly", 8, false);
  let editCodeBlock = prop($$props, "editCodeBlock", 8, true);
  let topPadding = prop($$props, "topPadding", 8, false);
  init();
  var div = root$2();
  var node = child(div);
  {
    var consequent_2 = ($$anchor2) => {
      var fragment = comment();
      var node_1 = first_child(fragment);
      {
        var consequent = ($$anchor3) => {
          {
            let $0 = derived_safe_equal(() => idx() === 0);
            let $1 = derived_safe_equal(() => (deep_read_state(history()), deep_read_state(messageId()), untrack(() => {
              var _a;
              return history().messages[messageId()].parentId !== null ? ((_a = history().messages[history().messages[messageId()].parentId]) == null ? void 0 : _a.childrenIds) ?? [] : Object.values(history().messages).filter((message) => message.parentId === null).map((message) => message.id) ?? [];
            })));
            UserMessage($$anchor3, {
              get user() {
                return user2();
              },
              get chatId() {
                return chatId2();
              },
              get history() {
                return history();
              },
              get messageId() {
                return messageId();
              },
              get isFirstMessage() {
                return get($0);
              },
              get siblings() {
                return get($1);
              },
              get gotoMessage() {
                return gotoMessage();
              },
              get showPreviousMessage() {
                return showPreviousMessage();
              },
              get showNextMessage() {
                return showNextMessage();
              },
              get editMessage() {
                return editMessage();
              },
              get deleteMessage() {
                return deleteMessage();
              },
              get readOnly() {
                return readOnly();
              },
              get editCodeBlock() {
                return editCodeBlock();
              },
              get topPadding() {
                return topPadding();
              }
            });
          }
        };
        var alternate_1 = ($$anchor3) => {
          var fragment_2 = comment();
          var node_2 = first_child(fragment_2);
          {
            var consequent_1 = ($$anchor4) => {
              {
                let $0 = derived_safe_equal(() => (deep_read_state(messageId()), deep_read_state(history()), untrack(() => messageId() === history().currentId)));
                let $1 = derived_safe_equal(() => (deep_read_state(history()), deep_read_state(messageId()), untrack(() => {
                  var _a;
                  return ((_a = history().messages[history().messages[messageId()].parentId]) == null ? void 0 : _a.childrenIds) ?? [];
                })));
                ResponseMessage($$anchor4, {
                  get chatId() {
                    return chatId2();
                  },
                  get history() {
                    return history();
                  },
                  get messageId() {
                    return messageId();
                  },
                  get selectedModels() {
                    return selectedModels();
                  },
                  get isLastMessage() {
                    return get($0);
                  },
                  get siblings() {
                    return get($1);
                  },
                  get setInputText() {
                    return setInputText();
                  },
                  get gotoMessage() {
                    return gotoMessage();
                  },
                  get showPreviousMessage() {
                    return showPreviousMessage();
                  },
                  get showNextMessage() {
                    return showNextMessage();
                  },
                  get updateChat() {
                    return updateChat();
                  },
                  get editMessage() {
                    return editMessage();
                  },
                  get saveMessage() {
                    return saveMessage();
                  },
                  get rateMessage() {
                    return rateMessage();
                  },
                  get actionMessage() {
                    return actionMessage();
                  },
                  get submitMessage() {
                    return submitMessage();
                  },
                  get deleteMessage() {
                    return deleteMessage();
                  },
                  get continueResponse() {
                    return continueResponse();
                  },
                  get regenerateResponse() {
                    return regenerateResponse();
                  },
                  get addMessages() {
                    return addMessages();
                  },
                  get readOnly() {
                    return readOnly();
                  },
                  get editCodeBlock() {
                    return editCodeBlock();
                  },
                  get topPadding() {
                    return topPadding();
                  }
                });
              }
            };
            var alternate = ($$anchor4) => {
              {
                let $0 = derived_safe_equal(() => (deep_read_state(messageId()), deep_read_state(history()), untrack(() => {
                  var _a;
                  return messageId() === ((_a = history()) == null ? void 0 : _a.currentId);
                })));
                MultiResponseMessages($$anchor4, {
                  get chatId() {
                    return chatId2();
                  },
                  get messageId() {
                    return messageId();
                  },
                  get selectedModels() {
                    return selectedModels();
                  },
                  get isLastMessage() {
                    return get($0);
                  },
                  get setInputText() {
                    return setInputText();
                  },
                  get updateChat() {
                    return updateChat();
                  },
                  get editMessage() {
                    return editMessage();
                  },
                  get saveMessage() {
                    return saveMessage();
                  },
                  get rateMessage() {
                    return rateMessage();
                  },
                  get actionMessage() {
                    return actionMessage();
                  },
                  get submitMessage() {
                    return submitMessage();
                  },
                  get deleteMessage() {
                    return deleteMessage();
                  },
                  get continueResponse() {
                    return continueResponse();
                  },
                  get regenerateResponse() {
                    return regenerateResponse();
                  },
                  get mergeResponses() {
                    return mergeResponses();
                  },
                  get triggerScroll() {
                    return triggerScroll();
                  },
                  get addMessages() {
                    return addMessages();
                  },
                  get readOnly() {
                    return readOnly();
                  },
                  get editCodeBlock() {
                    return editCodeBlock();
                  },
                  get topPadding() {
                    return topPadding();
                  },
                  get history() {
                    return history();
                  },
                  set history($$value) {
                    history($$value);
                  },
                  $$legacy: true
                });
              }
            };
            if_block(
              node_2,
              ($$render) => {
                if (deep_read_state(history()), deep_read_state(messageId()), untrack(() => {
                  var _a, _b;
                  return (((_b = (_a = history().messages[history().messages[messageId()].parentId]) == null ? void 0 : _a.models) == null ? void 0 : _b.length) ?? 1) === 1;
                })) $$render(consequent_1);
                else $$render(alternate, false);
              },
              true
            );
          }
          append($$anchor3, fragment_2);
        };
        if_block(node_1, ($$render) => {
          if (deep_read_state(history()), deep_read_state(messageId()), untrack(() => history().messages[messageId()].role === "user")) $$render(consequent);
          else $$render(alternate_1, false);
        });
      }
      append($$anchor2, fragment);
    };
    if_block(node, ($$render) => {
      if (deep_read_state(history()), deep_read_state(messageId()), untrack(() => history().messages[messageId()])) $$render(consequent_2);
    });
  }
  reset(div);
  template_effect(() => set_class(div, 1, `flex flex-col justify-between px-5 mb-3 w-full ${($settings(), untrack(() => {
    var _a;
    return ((_a = $settings()) == null ? void 0 : _a.widescreenMode) ?? null ? "max-w-full" : "max-w-5xl";
  })) ?? ""} mx-auto rounded-lg group`));
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root_1$1 = from_html(`<!> `, 1);
var root_2$2 = from_html(`<div> </div>`);
var root_5$2 = from_html(`<div class="font-medium dark:text-gray-300 dark:group-hover:text-gray-200 transition line-clamp-1 svelte-6tnq1o"> </div> <div class="text-xs text-gray-600 dark:text-gray-400 font-normal line-clamp-1 svelte-6tnq1o"> </div>`, 1);
var root_6 = from_html(`<div class="font-medium dark:text-gray-300 dark:group-hover:text-gray-200 transition line-clamp-1 svelte-6tnq1o"> </div> <div class="text-xs text-gray-600 dark:text-gray-400 font-normal line-clamp-1 svelte-6tnq1o"> </div>`, 1);
var root_4 = from_html(`<button role="listitem" class="waterfall flex flex-col flex-1 shrink-0 w-full justify-between
				       px-3 py-2 rounded-xl bg-transparent hover:bg-black/5
				       dark:hover:bg-white/5 transition group svelte-6tnq1o"><div class="flex flex-col text-left svelte-6tnq1o"><!></div></button>`);
var root_3$2 = from_html(`<div role="list"></div>`);
var root$1 = from_html(`<div class="mb-1 flex gap-1 text-xs font-medium items-center text-gray-600 dark:text-gray-400 svelte-6tnq1o"><!></div> <div class="h-40 w-full svelte-6tnq1o"><!></div>`, 1);
function Suggestions($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $WEBUI_NAME = () => store_get(WEBUI_NAME, "$WEBUI_NAME", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let suggestionPrompts = prop($$props, "suggestionPrompts", 24, () => []);
  let className = prop($$props, "className", 8, "");
  let inputValue = prop($$props, "inputValue", 8, "");
  let onSelect = prop($$props, "onSelect", 8, (e) => {
  });
  let sortedPrompts = mutable_source([]);
  const fuseOptions = { keys: ["content", "title"], threshold: 0.5 };
  let fuse = mutable_source();
  let filteredPrompts = mutable_source([]);
  function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if ((a[i].id ?? a[i].content) !== (b[i].id ?? b[i].content)) {
        return false;
      }
    }
    return true;
  }
  const getFilteredPrompts = (inputValue2) => {
    if (inputValue2.length > 500) {
      set(filteredPrompts, []);
    } else {
      const newFilteredPrompts = inputValue2.trim() && get(fuse) ? get(fuse).search(inputValue2.trim()).map((result) => result.item) : get(sortedPrompts);
      if (!arraysEqual(get(filteredPrompts), newFilteredPrompts)) {
        set(filteredPrompts, newFilteredPrompts);
      }
    }
  };
  legacy_pre_effect(
    () => (deep_read_state(suggestionPrompts()), deep_read_state(inputValue())),
    () => {
      if (suggestionPrompts()) {
        set(sortedPrompts, [...suggestionPrompts() ?? []].sort(() => Math.random() - 0.5));
        getFilteredPrompts(inputValue());
      }
    }
  );
  legacy_pre_effect(() => get(sortedPrompts), () => {
    set(fuse, new Fuse(get(sortedPrompts), fuseOptions));
  });
  legacy_pre_effect(() => deep_read_state(inputValue()), () => {
    getFilteredPrompts(inputValue());
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root$1();
  var div = first_child(fragment);
  var node = child(div);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = root_1$1();
      var node_1 = first_child(fragment_1);
      Bolt(node_1, {});
      var text2 = sibling(node_1);
      template_effect(($0) => set_text(text2, ` ${$0 ?? ""}`), [() => ($i18n(), untrack(() => $i18n().t("Suggested")))]);
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var div_1 = root_2$2();
      var text_1 = child(div_1);
      reset(div_1);
      template_effect(() => {
        set_class(
          div_1,
          1,
          `flex w-full ${($settings(), untrack(() => {
            var _a;
            return ((_a = $settings()) == null ? void 0 : _a.landingPageMode) === "chat" ? " -mt-1" : "text-center items-center justify-center";
          })) ?? ""}  self-start text-gray-600 dark:text-gray-400`,
          "svelte-6tnq1o"
        );
        set_text(text_1, `${$WEBUI_NAME() ?? ""} ‧ v${WEBUI_VERSION}`);
      });
      append($$anchor2, div_1);
    };
    if_block(node, ($$render) => {
      if (get(filteredPrompts), untrack(() => get(filteredPrompts).length > 0)) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  reset(div);
  var div_2 = sibling(div, 2);
  var node_2 = child(div_2);
  {
    var consequent_2 = ($$anchor2) => {
      var div_3 = root_3$2();
      each(div_3, 7, () => get(filteredPrompts), (prompt, idx) => prompt.id || `${prompt.content}-${idx}`, ($$anchor3, prompt, idx) => {
        var button = root_4();
        var div_4 = child(button);
        var node_3 = child(div_4);
        {
          var consequent_1 = ($$anchor4) => {
            var fragment_2 = root_5$2();
            var div_5 = first_child(fragment_2);
            var text_2 = child(div_5, true);
            reset(div_5);
            var div_6 = sibling(div_5, 2);
            var text_3 = child(div_6, true);
            reset(div_6);
            template_effect(() => {
              set_text(text_2, (get(prompt), untrack(() => get(prompt).title[0])));
              set_text(text_3, (get(prompt), untrack(() => get(prompt).title[1])));
            });
            append($$anchor4, fragment_2);
          };
          var alternate_1 = ($$anchor4) => {
            var fragment_3 = root_6();
            var div_7 = first_child(fragment_3);
            var text_4 = child(div_7, true);
            reset(div_7);
            var div_8 = sibling(div_7, 2);
            var text_5 = child(div_8, true);
            reset(div_8);
            template_effect(
              ($0) => {
                set_text(text_4, (get(prompt), untrack(() => get(prompt).content)));
                set_text(text_5, $0);
              },
              [() => ($i18n(), untrack(() => $i18n().t("Prompt")))]
            );
            append($$anchor4, fragment_3);
          };
          if_block(node_3, ($$render) => {
            if (get(prompt), untrack(() => get(prompt).title && get(prompt).title[0] !== "")) $$render(consequent_1);
            else $$render(alternate_1, false);
          });
        }
        reset(div_4);
        reset(button);
        template_effect(() => set_style(button, `animation-delay: ${get(idx) * 60}ms`));
        event("click", button, () => onSelect()({ type: "prompt", data: get(prompt).content }));
        append($$anchor3, button);
      });
      reset(div_3);
      template_effect(() => set_class(div_3, 1, `max-h-40 overflow-auto scrollbar-none items-start ${className() ?? ""}`, "svelte-6tnq1o"));
      append($$anchor2, div_3);
    };
    if_block(node_2, ($$render) => {
      if (get(filteredPrompts), untrack(() => get(filteredPrompts).length > 0)) $$render(consequent_2);
    });
  }
  reset(div_2);
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_3$1 = from_html(`<img class=" size-[2.7rem] rounded-full border-[1px] border-gray-100 dark:border-none" alt="logo" draggable="false"/>`);
var root_2$1 = from_html(`<button><!></button>`);
var root_5$1 = from_html(`<div class="flex items-center gap-2 text-gray-500 text-lg mt-2 w-fit"><!> </div>`);
var root_10 = from_html(`<a> </a>`);
var root_9 = from_html(`<div class="mt-0.5 text-sm font-normal text-gray-400 dark:text-gray-500">By <!></div>`);
var root_8 = from_html(`<div class="mt-0.5 text-base font-normal text-gray-500 dark:text-gray-400 line-clamp-3 markdown"><!></div> <!>`, 1);
var root_12 = from_html(`<div class=" text-gray-400 dark:text-gray-500 line-clamp-1 font-p"> </div>`);
var root_1 = from_html(`<div class="m-auto w-full max-w-6xl px-8 lg:px-20"><div class="flex justify-start"><div class="flex -space-x-4 mb-0.5"></div></div> <!> <div class=" mt-2 mb-4 text-3xl text-gray-800 dark:text-gray-100 text-left flex items-center gap-4 font-primary"><div><div class=" capitalize line-clamp-1"><!></div> <div><!></div></div></div> <div class=" w-full font-primary"><!></div></div>`);
function ChatPlaceholder($$anchor, $$props) {
  push($$props, false);
  const $_models = () => store_get(models, "$_models", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $temporaryChatEnabled = () => store_get(temporaryChatEnabled, "$temporaryChatEnabled", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let modelIds = prop($$props, "modelIds", 24, () => []);
  let models$1 = prop($$props, "models", 28, () => []);
  let atSelectedModel = prop($$props, "atSelectedModel", 8);
  let onSelect = prop($$props, "onSelect", 8, (e) => {
  });
  let mounted = mutable_source(false);
  let selectedModelIdx = mutable_source(0);
  onMount(() => {
    set(mounted, true);
  });
  legacy_pre_effect(() => (deep_read_state(modelIds()), $_models()), () => {
    models$1(modelIds().map((id) => $_models().find((m) => m.id === id)));
  });
  legacy_pre_effect(() => (deep_read_state(modelIds()), deep_read_state(models$1())), () => {
    if (modelIds().length > 0) {
      set(selectedModelIdx, models$1().length - 1);
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  key(node, () => get(mounted), ($$anchor2) => {
    var div = root_1();
    var div_1 = child(div);
    var div_2 = child(div_1);
    each(div_2, 5, models$1, index, ($$anchor3, model, modelIdx) => {
      var button = root_2$1();
      var node_1 = child(button);
      {
        let $0 = derived_safe_equal(() => (deep_read_state(marked), deep_read_state(sanitizeResponseContent), deep_read_state(models$1()), get(selectedModelIdx), untrack(() => {
          var _a, _b, _c;
          return marked.parse(sanitizeResponseContent(((_c = (_b = (_a = models$1()[get(selectedModelIdx)]) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.description) ?? "").replaceAll("\n", "<br>"));
        })));
        Tooltip(node_1, {
          get content() {
            return get($0);
          },
          placement: "right",
          children: ($$anchor4, $$slotProps) => {
            var img = root_3$1();
            template_effect(() => set_attribute(img, "src", (deep_read_state(WEBUI_API_BASE_URL), get(model), $i18n(), untrack(() => {
              var _a;
              return `${WEBUI_API_BASE_URL}/models/model/profile/image?id=${(_a = get(model)) == null ? void 0 : _a.id}&lang=${$i18n().language}`;
            }))));
            append($$anchor4, img);
          },
          $$slots: { default: true }
        });
      }
      reset(button);
      event("click", button, () => {
        set(selectedModelIdx, modelIdx);
      });
      append($$anchor3, button);
    });
    reset(div_2);
    reset(div_1);
    var node_2 = sibling(div_1, 2);
    {
      var consequent = ($$anchor3) => {
        {
          let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("This chat won't appear in history and your messages will not be saved."))));
          Tooltip($$anchor3, {
            get content() {
              return get($0);
            },
            className: "w-full flex justify-start mb-0.5",
            placement: "top",
            children: ($$anchor4, $$slotProps) => {
              var div_3 = root_5$1();
              var node_3 = child(div_3);
              EyeSlash(node_3, { strokeWidth: "2.5", className: "size-5" });
              var text2 = sibling(node_3, 1, true);
              reset(div_3);
              template_effect(($02) => set_text(text2, $02), [
                () => ($i18n(), untrack(() => $i18n().t("Temporary Chat")))
              ]);
              append($$anchor4, div_3);
            },
            $$slots: { default: true }
          });
        }
      };
      if_block(node_2, ($$render) => {
        if ($temporaryChatEnabled()) $$render(consequent);
      });
    }
    var div_4 = sibling(node_2, 2);
    var div_5 = child(div_4);
    var div_6 = child(div_5);
    var node_4 = child(div_6);
    {
      var consequent_1 = ($$anchor3) => {
        var text_1 = text();
        template_effect(() => set_text(text_1, (deep_read_state(models$1()), get(selectedModelIdx), untrack(() => {
          var _a;
          return (_a = models$1()[get(selectedModelIdx)]) == null ? void 0 : _a.name;
        }))));
        append($$anchor3, text_1);
      };
      var alternate = ($$anchor3) => {
        var text_2 = text();
        template_effect(($0) => set_text(text_2, $0), [
          () => ($i18n(), $user(), untrack(() => {
            var _a;
            return $i18n().t("Hello, {{name}}", { name: (_a = $user()) == null ? void 0 : _a.name });
          }))
        ]);
        append($$anchor3, text_2);
      };
      if_block(node_4, ($$render) => {
        if (deep_read_state(models$1()), get(selectedModelIdx), untrack(() => {
          var _a;
          return (_a = models$1()[get(selectedModelIdx)]) == null ? void 0 : _a.name;
        })) $$render(consequent_1);
        else $$render(alternate, false);
      });
    }
    reset(div_6);
    var div_7 = sibling(div_6, 2);
    var node_5 = child(div_7);
    {
      var consequent_4 = ($$anchor3) => {
        var fragment_4 = root_8();
        var div_8 = first_child(fragment_4);
        var node_6 = child(div_8);
        html(node_6, () => (deep_read_state(marked), deep_read_state(sanitizeResponseContent), deep_read_state(models$1()), get(selectedModelIdx), untrack(() => {
          var _a, _b, _c;
          return marked.parse(sanitizeResponseContent((_c = (_b = (_a = models$1()[get(selectedModelIdx)]) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.description).replaceAll("\n", "<br>"));
        })));
        reset(div_8);
        var node_7 = sibling(div_8, 2);
        {
          var consequent_3 = ($$anchor4) => {
            var div_9 = root_9();
            var node_8 = sibling(child(div_9));
            {
              var consequent_2 = ($$anchor5) => {
                var a = root_10();
                var text_3 = child(a, true);
                reset(a);
                template_effect(() => {
                  set_attribute(a, "href", `https://openwebui.com/m/${(deep_read_state(models$1()), get(selectedModelIdx), untrack(() => {
                    var _a, _b, _c;
                    return (_c = (_b = (_a = models$1()[get(selectedModelIdx)]) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.user.username;
                  })) ?? ""}`);
                  set_text(text_3, (deep_read_state(models$1()), get(selectedModelIdx), untrack(() => {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
                    return ((_c = (_b = (_a = models$1()[get(selectedModelIdx)]) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.user.name) ? (_f = (_e = (_d = models$1()[get(selectedModelIdx)]) == null ? void 0 : _d.info) == null ? void 0 : _e.meta) == null ? void 0 : _f.user.name : `@${(_i = (_h = (_g = models$1()[get(selectedModelIdx)]) == null ? void 0 : _g.info) == null ? void 0 : _h.meta) == null ? void 0 : _i.user.username}`;
                  })));
                });
                append($$anchor5, a);
              };
              var alternate_1 = ($$anchor5) => {
                var text_4 = text();
                template_effect(() => set_text(text_4, (deep_read_state(models$1()), get(selectedModelIdx), untrack(() => {
                  var _a, _b, _c;
                  return (_c = (_b = (_a = models$1()[get(selectedModelIdx)]) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.user.name;
                }))));
                append($$anchor5, text_4);
              };
              if_block(node_8, ($$render) => {
                if (deep_read_state(models$1()), get(selectedModelIdx), untrack(() => {
                  var _a, _b, _c;
                  return (_c = (_b = (_a = models$1()[get(selectedModelIdx)]) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.user.community;
                })) $$render(consequent_2);
                else $$render(alternate_1, false);
              });
            }
            reset(div_9);
            append($$anchor4, div_9);
          };
          if_block(node_7, ($$render) => {
            if (deep_read_state(models$1()), get(selectedModelIdx), untrack(() => {
              var _a, _b, _c;
              return (_c = (_b = (_a = models$1()[get(selectedModelIdx)]) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.user;
            })) $$render(consequent_3);
          });
        }
        append($$anchor3, fragment_4);
      };
      var alternate_2 = ($$anchor3) => {
        var div_10 = root_12();
        var text_5 = child(div_10, true);
        reset(div_10);
        template_effect(($0) => set_text(text_5, $0), [
          () => ($i18n(), untrack(() => $i18n().t("How can I help you today?")))
        ]);
        append($$anchor3, div_10);
      };
      if_block(node_5, ($$render) => {
        if (deep_read_state(models$1()), get(selectedModelIdx), untrack(() => {
          var _a, _b, _c;
          return ((_c = (_b = (_a = models$1()[get(selectedModelIdx)]) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.description) ?? null;
        })) $$render(consequent_4);
        else $$render(alternate_2, false);
      });
    }
    reset(div_7);
    reset(div_5);
    reset(div_4);
    var div_11 = sibling(div_4, 2);
    var node_9 = child(div_11);
    {
      let $0 = derived_safe_equal(() => (deep_read_state(atSelectedModel()), deep_read_state(models$1()), get(selectedModelIdx), $config(), untrack(() => {
        var _a, _b, _c, _d, _e, _f, _g;
        return ((_c = (_b = (_a = atSelectedModel()) == null ? void 0 : _a.info) == null ? void 0 : _b.meta) == null ? void 0 : _c.suggestion_prompts) ?? ((_f = (_e = (_d = models$1()[get(selectedModelIdx)]) == null ? void 0 : _d.info) == null ? void 0 : _e.meta) == null ? void 0 : _f.suggestion_prompts) ?? ((_g = $config()) == null ? void 0 : _g.default_prompt_suggestions) ?? [];
      })));
      Suggestions(node_9, {
        className: "grid grid-cols-2",
        get suggestionPrompts() {
          return get($0);
        },
        get onSelect() {
          return onSelect();
        }
      });
    }
    reset(div_11);
    reset(div);
    transition(1, div_2, () => fade, () => ({ duration: 200 }));
    transition(1, div_6, () => fade, () => ({ duration: 200 }));
    transition(1, div_7, () => fade, () => ({ duration: 200, delay: 200 }));
    transition(1, div_11, () => fade, () => ({ duration: 200, delay: 300 }));
    append($$anchor2, div);
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_5 = from_html(`<div class="w-full flex justify-center py-1 text-xs animate-pulse items-center gap-2"><!> <div class=" "> </div></div>`);
var root_7 = from_html(`<div class="  pb-6"></div>`);
var root_3 = from_html(`<section class="w-full" aria-labelledby="chat-conversation"><h2 class="sr-only" id="chat-conversation"> </h2> <!> <ul role="log" aria-live="polite" aria-relevant="additions" aria-atomic="false"></ul></section> <div class="pb-18"></div> <!>`, 1);
var root_2 = from_html(`<div class="w-full pt-2"><!></div>`);
var root = from_html(`<div><!></div>`);
function Messages($$anchor, $$props) {
  push($$props, false);
  const $_user = () => store_get(user, "$_user", $$stores);
  const $temporaryChatEnabled = () => store_get(temporaryChatEnabled, "$temporaryChatEnabled", $$stores);
  const $currentChatPage = () => store_get(currentChatPage, "$currentChatPage", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  createEventDispatcher();
  const i18n = getContext("i18n");
  let className = prop($$props, "className", 8, "h-full flex pt-8");
  let chatId2 = prop($$props, "chatId", 8, "");
  let user$1 = prop($$props, "user", 24, $_user);
  prop($$props, "prompt", 8);
  let history = prop($$props, "history", 28, () => ({}));
  let selectedModels = prop($$props, "selectedModels", 8);
  let atSelectedModel = prop($$props, "atSelectedModel", 8);
  let messages = mutable_source([]);
  let setInputText = prop($$props, "setInputText", 8, () => {
  });
  let sendMessage = prop($$props, "sendMessage", 8);
  let continueResponse = prop($$props, "continueResponse", 8);
  let regenerateResponse = prop($$props, "regenerateResponse", 8);
  let mergeResponses = prop($$props, "mergeResponses", 8);
  let chatActionHandler = prop($$props, "chatActionHandler", 8);
  let showMessage = prop($$props, "showMessage", 8, () => {
  });
  let submitMessage = prop($$props, "submitMessage", 8, () => {
  });
  let addMessages = prop($$props, "addMessages", 8, () => {
  });
  let readOnly = prop($$props, "readOnly", 8, false);
  let editCodeBlock = prop($$props, "editCodeBlock", 8, true);
  let topPadding = prop($$props, "topPadding", 8, false);
  let bottomPadding = prop($$props, "bottomPadding", 8, false);
  let autoScroll = prop($$props, "autoScroll", 12);
  let onSelect = prop($$props, "onSelect", 8, (e) => {
  });
  let messagesCount = prop($$props, "messagesCount", 12, 20);
  let messagesLoading = mutable_source(false);
  const loadMoreMessages = async () => {
    const element = document.getElementById("messages-container");
    element.scrollTop = element.scrollTop + 100;
    set(messagesLoading, true);
    messagesCount(messagesCount() + 20);
    await tick();
    set(messagesLoading, false);
  };
  const scrollToBottom = () => {
    const element = document.getElementById("messages-container");
    element.scrollTop = element.scrollHeight;
  };
  const updateChat = async () => {
    if (!$temporaryChatEnabled()) {
      history(history());
      await tick();
      await updateChatById(localStorage.token, chatId2(), { history: history(), messages: get(messages) });
      currentChatPage.set(1);
      await chats.set(await getChatList(localStorage.token, $currentChatPage()));
    }
  };
  const gotoMessage = async (message, idx) => {
    var _a;
    let siblings;
    if (message.parentId !== null) {
      siblings = history().messages[message.parentId].childrenIds;
    } else {
      siblings = Object.values(history().messages).filter((msg) => msg.parentId === null).map((msg) => msg.id);
    }
    idx = Math.max(0, Math.min(idx, siblings.length - 1));
    let messageId = siblings[idx];
    if (message.id !== messageId) {
      let messageChildrenIds = history().messages[messageId].childrenIds;
      while (messageChildrenIds.length !== 0) {
        messageId = messageChildrenIds.at(-1);
        messageChildrenIds = history().messages[messageId].childrenIds;
      }
      history(history().currentId = messageId, true);
    }
    await tick();
    if (((_a = $settings()) == null ? void 0 : _a.scrollOnBranchChange) ?? true) {
      const element = document.getElementById("messages-container");
      autoScroll(element.scrollHeight - element.scrollTop <= element.clientHeight + 50);
      setTimeout(
        () => {
          scrollToBottom();
        },
        100
      );
    }
  };
  const showPreviousMessage = async (message) => {
    var _a;
    if (message.parentId !== null) {
      let messageId = history().messages[message.parentId].childrenIds[Math.max(history().messages[message.parentId].childrenIds.indexOf(message.id) - 1, 0)];
      if (message.id !== messageId) {
        let messageChildrenIds = history().messages[messageId].childrenIds;
        while (messageChildrenIds.length !== 0) {
          messageId = messageChildrenIds.at(-1);
          messageChildrenIds = history().messages[messageId].childrenIds;
        }
        history(history().currentId = messageId, true);
      }
    } else {
      let childrenIds = Object.values(history().messages).filter((message2) => message2.parentId === null).map((message2) => message2.id);
      let messageId = childrenIds[Math.max(childrenIds.indexOf(message.id) - 1, 0)];
      if (message.id !== messageId) {
        let messageChildrenIds = history().messages[messageId].childrenIds;
        while (messageChildrenIds.length !== 0) {
          messageId = messageChildrenIds.at(-1);
          messageChildrenIds = history().messages[messageId].childrenIds;
        }
        history(history().currentId = messageId, true);
      }
    }
    await tick();
    if (((_a = $settings()) == null ? void 0 : _a.scrollOnBranchChange) ?? true) {
      const element = document.getElementById("messages-container");
      autoScroll(element.scrollHeight - element.scrollTop <= element.clientHeight + 50);
      setTimeout(
        () => {
          scrollToBottom();
        },
        100
      );
    }
  };
  const showNextMessage = async (message) => {
    var _a;
    if (message.parentId !== null) {
      let messageId = history().messages[message.parentId].childrenIds[Math.min(history().messages[message.parentId].childrenIds.indexOf(message.id) + 1, history().messages[message.parentId].childrenIds.length - 1)];
      if (message.id !== messageId) {
        let messageChildrenIds = history().messages[messageId].childrenIds;
        while (messageChildrenIds.length !== 0) {
          messageId = messageChildrenIds.at(-1);
          messageChildrenIds = history().messages[messageId].childrenIds;
        }
        history(history().currentId = messageId, true);
      }
    } else {
      let childrenIds = Object.values(history().messages).filter((message2) => message2.parentId === null).map((message2) => message2.id);
      let messageId = childrenIds[Math.min(childrenIds.indexOf(message.id) + 1, childrenIds.length - 1)];
      if (message.id !== messageId) {
        let messageChildrenIds = history().messages[messageId].childrenIds;
        while (messageChildrenIds.length !== 0) {
          messageId = messageChildrenIds.at(-1);
          messageChildrenIds = history().messages[messageId].childrenIds;
        }
        history(history().currentId = messageId, true);
      }
    }
    await tick();
    if (((_a = $settings()) == null ? void 0 : _a.scrollOnBranchChange) ?? true) {
      const element = document.getElementById("messages-container");
      autoScroll(element.scrollHeight - element.scrollTop <= element.clientHeight + 50);
      setTimeout(
        () => {
          scrollToBottom();
        },
        100
      );
    }
  };
  const rateMessage = async (messageId, rating) => {
    history(history().messages[messageId].annotation = { ...history().messages[messageId].annotation, rating }, true);
    await updateChat();
  };
  const editMessage = async (messageId, { content, files }, submit = true) => {
    if ((selectedModels() ?? []).filter((id) => id).length === 0) {
      toast.error($i18n().t("Model not selected"));
      return;
    }
    if (history().messages[messageId].role === "user") {
      if (submit) {
        let userPrompt = content;
        let userMessageId = v4();
        let userMessage = {
          id: userMessageId,
          parentId: history().messages[messageId].parentId,
          childrenIds: [],
          role: "user",
          content: userPrompt,
          ...files && { files },
          models: selectedModels(),
          timestamp: Math.floor(Date.now() / 1e3)
          // Unix epoch
        };
        let messageParentId = history().messages[messageId].parentId;
        if (messageParentId !== null) {
          history(
            history().messages[messageParentId].childrenIds = [
              ...history().messages[messageParentId].childrenIds,
              userMessageId
            ],
            true
          );
        }
        history(history().messages[userMessageId] = userMessage, true);
        history(history().currentId = userMessageId, true);
        await tick();
        await sendMessage()(history(), userMessageId);
      } else {
        history(history().messages[messageId].content = content, true);
        history(history().messages[messageId].files = files, true);
        await updateChat();
      }
    } else {
      if (submit) {
        const responseMessageId = v4();
        const message = history().messages[messageId];
        const parentId = message.parentId;
        const responseMessage = {
          ...message,
          id: responseMessageId,
          parentId,
          childrenIds: [],
          files: void 0,
          content,
          timestamp: Math.floor(Date.now() / 1e3)
          // Unix epoch
        };
        history(history().messages[responseMessageId] = responseMessage, true);
        history(history().currentId = responseMessageId, true);
        if (parentId !== null) {
          history(
            history().messages[parentId].childrenIds = [
              ...history().messages[parentId].childrenIds,
              responseMessageId
            ],
            true
          );
        }
        await updateChat();
      } else {
        history(history().messages[messageId].originalContent = history().messages[messageId].content, true);
        history(history().messages[messageId].content = content, true);
        await updateChat();
      }
    }
  };
  const actionMessage = async (actionId, message, event2 = null) => {
    await chatActionHandler()(chatId2(), actionId, message.model, message.id, event2);
  };
  const saveMessage = async (messageId, message) => {
    history(history().messages[messageId] = message, true);
    await updateChat();
  };
  const deleteMessage = async (messageId) => {
    const messageToDelete = history().messages[messageId];
    const parentMessageId = messageToDelete.parentId;
    const childMessageIds = messageToDelete.childrenIds ?? [];
    const grandchildrenIds = childMessageIds.flatMap((childId) => {
      var _a;
      return ((_a = history().messages[childId]) == null ? void 0 : _a.childrenIds) ?? [];
    });
    if (parentMessageId && history().messages[parentMessageId]) {
      history(
        history().messages[parentMessageId].childrenIds = [
          ...history().messages[parentMessageId].childrenIds.filter((id) => id !== messageId),
          ...grandchildrenIds
        ],
        true
      );
    }
    grandchildrenIds.forEach((grandchildId) => {
      if (history().messages[grandchildId]) {
        history(history().messages[grandchildId].parentId = parentMessageId, true);
      }
    });
    [messageId, ...childMessageIds].forEach((id) => {
      delete history().messages[id];
    });
    await tick();
    showMessage()({ id: parentMessageId });
    await updateChat();
  };
  const triggerScroll = () => {
    if (autoScroll()) {
      const element = document.getElementById("messages-container");
      autoScroll(element.scrollHeight - element.scrollTop <= element.clientHeight + 50);
      setTimeout(
        () => {
          scrollToBottom();
        },
        100
      );
    }
  };
  legacy_pre_effect(
    () => (deep_read_state(history()), deep_read_state(messagesCount())),
    () => {
      if (history().currentId) {
        let _messages = [];
        let message = history().messages[history().currentId];
        while (message && (messagesCount() !== null ? _messages.length <= messagesCount() : true)) {
          _messages.unshift({ ...message });
          message = message.parentId !== null ? history().messages[message.parentId] : null;
        }
        set(messages, _messages);
      } else {
        set(messages, []);
      }
    }
  );
  legacy_pre_effect(
    () => (deep_read_state(autoScroll()), deep_read_state(bottomPadding()), tick),
    () => {
      if (autoScroll() && bottomPadding()) {
        (async () => {
          await tick();
          scrollToBottom();
        })();
      }
    }
  );
  legacy_pre_effect_reset();
  init();
  var div = root();
  var node = child(div);
  {
    var consequent = ($$anchor2) => {
      ChatPlaceholder($$anchor2, {
        get modelIds() {
          return selectedModels();
        },
        get atSelectedModel() {
          return atSelectedModel();
        },
        get onSelect() {
          return onSelect();
        }
      });
    };
    var alternate = ($$anchor2) => {
      var div_1 = root_2();
      var node_1 = child(div_1);
      key(node_1, chatId2, ($$anchor3) => {
        var fragment_1 = root_3();
        var section = first_child(fragment_1);
        var h2 = child(section);
        var text2 = child(h2, true);
        reset(h2);
        var node_2 = sibling(h2, 2);
        {
          var consequent_1 = ($$anchor4) => {
            Loader($$anchor4, {
              $$events: {
                visible: (e) => {
                  console.log("visible");
                  if (!get(messagesLoading)) {
                    loadMoreMessages();
                  }
                }
              },
              children: ($$anchor5, $$slotProps) => {
                var div_2 = root_5();
                var node_3 = child(div_2);
                Spinner(node_3, { className: " size-4" });
                var div_3 = sibling(node_3, 2);
                var text_1 = child(div_3, true);
                reset(div_3);
                reset(div_2);
                template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("Loading...")))]);
                append($$anchor5, div_2);
              },
              $$slots: { default: true }
            });
          };
          if_block(node_2, ($$render) => {
            if (get(messages), untrack(() => {
              var _a;
              return ((_a = get(messages).at(0)) == null ? void 0 : _a.parentId) !== null;
            })) $$render(consequent_1);
          });
        }
        var ul = sibling(node_2, 2);
        each(ul, 7, () => get(messages), (message) => message.id, ($$anchor4, message, messageIdx) => {
          Message($$anchor4, {
            get chatId() {
              return chatId2();
            },
            get selectedModels() {
              return selectedModels();
            },
            get messageId() {
              return get(message), untrack(() => get(message).id);
            },
            get idx() {
              return get(messageIdx);
            },
            get user() {
              return user$1();
            },
            get setInputText() {
              return setInputText();
            },
            gotoMessage,
            showPreviousMessage,
            showNextMessage,
            updateChat,
            editMessage,
            deleteMessage,
            rateMessage,
            actionMessage,
            saveMessage,
            get submitMessage() {
              return submitMessage();
            },
            get regenerateResponse() {
              return regenerateResponse();
            },
            get continueResponse() {
              return continueResponse();
            },
            get mergeResponses() {
              return mergeResponses();
            },
            get addMessages() {
              return addMessages();
            },
            triggerScroll,
            get readOnly() {
              return readOnly();
            },
            get editCodeBlock() {
              return editCodeBlock();
            },
            get topPadding() {
              return topPadding();
            },
            get history() {
              return history();
            },
            set history($$value) {
              history($$value);
            },
            $$legacy: true
          });
        });
        reset(ul);
        reset(section);
        var node_4 = sibling(section, 4);
        {
          var consequent_2 = ($$anchor4) => {
            var div_4 = root_7();
            append($$anchor4, div_4);
          };
          if_block(node_4, ($$render) => {
            if (bottomPadding()) $$render(consequent_2);
          });
        }
        template_effect(($0) => set_text(text2, $0), [
          () => ($i18n(), untrack(() => $i18n().t("Chat Conversation")))
        ]);
        append($$anchor3, fragment_1);
      });
      reset(div_1);
      append($$anchor2, div_1);
    };
    if_block(node, ($$render) => {
      if (deep_read_state(history()), untrack(() => {
        var _a;
        return Object.keys(((_a = history()) == null ? void 0 : _a.messages) ?? {}).length == 0;
      })) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  reset(div);
  template_effect(() => set_class(div, 1, clsx(className())));
  append($$anchor, div);
  pop();
  $$cleanup();
}
export {
  KokoroWorker as K,
  Messages as M,
  Suggestions as S
};
