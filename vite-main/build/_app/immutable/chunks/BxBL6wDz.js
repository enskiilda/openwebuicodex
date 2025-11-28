import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, g as getContext, l as legacy_pre_effect, s as set, m as mutable_source, i as deep_read_state, j as legacy_pre_effect_reset, f as first_child, c as child, r as reset, e as sibling, b as get, u as untrack, t as template_effect, a as pop, o as onMount, h as derived_safe_equal, n as createEventDispatcher, q as next } from "./BxIY6ir7.js";
import { s as set_text, e as event } from "./cBADewWV.js";
import { i as if_block } from "./BoSuMvtf.js";
import { c as comment, a as append, f as from_html, t as text } from "./CAbo1QWi.js";
import { r as remove_input_defaults, a as set_attribute, s as set_class } from "./kXiCYuyj.js";
import { i as init } from "./ByqEASoO.js";
import { a as store_get, s as setup_stores } from "./BvQ5O7-v.js";
import { g as goto } from "./h-B6Md2q.js";
import { p as page } from "./CrvggIeO.js";
import { _ as __vitePreload } from "./CQrtv1eE.js";
import { e as each, i as index } from "./7_HZMPNF.js";
import { b as bind_value } from "./DVLuwGai.js";
import { p as prop } from "./BRmGPDvq.js";
import { a as models, c as config } from "./2Yg1sHDo.js";
import { M as Modal } from "./DF6V1elH.js";
import { X as XMark } from "./CUUSX84-.js";
import { S as Spinner } from "./CtnI4RVL.js";
import { T as Tooltip } from "./BHXWufQb.js";
import { S as Search } from "./2ixn6gs3.js";
import { C as ChevronUp } from "./DTpd_r3Z.js";
import { C as ChevronDown } from "./CUFupyOK.js";
import { a as WEBUI_API_BASE_URL } from "./DQ9UxF7k.js";
import { t as toast } from "./BccDN__m.js";
import { f as fileSaver } from "./DRcZXQDn.js";
import { d as dayjs2, r as relativeTime } from "./OO7lCI-F.js";
import { g as getFeedbackById, a as getFeedbackItems, e as exportAllFeedbacks, d as deleteFeedbackById, b as getAllFeedbacks } from "./Dhu6d1zL.js";
import { D as Download } from "./Dm1xcaSj.js";
import { B as Badge } from "./DGk_635a.js";
import { C as CloudArrowUp } from "./BFdJ9EUr.js";
import { P as Pagination_1 } from "./DCRGSDLC.js";
import { s as slot } from "./CZEGIGsR.js";
import "./C2A39Ney.js";
import { b as Menu_content, c as Menu_item } from "./DQmZL-p0.js";
import { f as flyAndScale } from "./BuLNlPfL.js";
import { D as Dropdown } from "./NbBmD2S8.js";
import { G as GarbageBin } from "./C_eYBUEf.js";
import { E as EllipsisHorizontal } from "./BC-suBaL.js";
var root_4$3 = from_html(`<span class="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-850 text-xs"> <span class="text-gray-500 font-medium"> </span></span>`);
var root_3$4 = from_html(`<div class="flex flex-wrap gap-1 mt-1 -mx-1"></div>`);
var root_5$4 = from_html(`<span>-</span>`);
var root_2$3 = from_html(`<div class="flex justify-between dark:text-gray-300 px-5 pt-4 pb-2"><div class="text-lg font-medium self-center"> </div> <button class="self-center" aria-label="Close"><!></button></div> <div class="px-5 pb-4 dark:text-gray-200"><div class="mb-2"><!></div> <div class="flex justify-end pt-2"><button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="button"> </button></div></div>`, 1);
function LeaderboardModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const topTags = mutable_source();
  let show = prop($$props, "show", 12, false);
  let model = prop($$props, "model", 8, null);
  let feedbacks2 = prop($$props, "feedbacks", 24, () => []);
  let onClose = prop($$props, "onClose", 8, () => {
  });
  const i18n = getContext("i18n");
  const close = () => {
    show(false);
    onClose()();
  };
  const getTopTagsForModel = (modelId, feedbacks3, topN = 5) => {
    const tagCounts = /* @__PURE__ */ new Map();
    feedbacks3.filter((fb) => fb.data.model_id === modelId).forEach((fb) => {
      (fb.data.tags || []).forEach((tag) => {
        tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
      });
    });
    return Array.from(tagCounts.entries()).sort((a, b) => b[1] - a[1]).slice(0, topN).map(([tag, count]) => ({ tag, count }));
  };
  legacy_pre_effect(() => (deep_read_state(model()), deep_read_state(feedbacks2())), () => {
    set(topTags, model() ? getTopTagsForModel(model().id, feedbacks2()) : []);
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
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      {
        var consequent_1 = ($$anchor3) => {
          var fragment_2 = root_2$3();
          var div = first_child(fragment_2);
          var div_1 = child(div);
          var text2 = child(div_1, true);
          reset(div_1);
          var button = sibling(div_1, 2);
          var node_1 = child(button);
          XMark(node_1, { className: "size-5" });
          reset(button);
          reset(div);
          var div_2 = sibling(div, 2);
          var div_3 = child(div_2);
          var node_2 = child(div_3);
          {
            var consequent = ($$anchor4) => {
              var div_4 = root_3$4();
              each(div_4, 5, () => get(topTags), index, ($$anchor5, tagInfo) => {
                var span = root_4$3();
                var text_1 = child(span);
                var span_1 = sibling(text_1);
                var text_2 = child(span_1, true);
                reset(span_1);
                reset(span);
                template_effect(() => {
                  set_text(text_1, `${(get(tagInfo), untrack(() => get(tagInfo).tag)) ?? ""} `);
                  set_text(text_2, (get(tagInfo), untrack(() => get(tagInfo).count)));
                });
                append($$anchor5, span);
              });
              reset(div_4);
              append($$anchor4, div_4);
            };
            var alternate = ($$anchor4) => {
              var span_2 = root_5$4();
              append($$anchor4, span_2);
            };
            if_block(node_2, ($$render) => {
              if (get(topTags), untrack(() => get(topTags).length)) $$render(consequent);
              else $$render(alternate, false);
            });
          }
          reset(div_3);
          var div_5 = sibling(div_3, 2);
          var button_1 = child(div_5);
          var text_3 = child(button_1, true);
          reset(button_1);
          reset(div_5);
          reset(div_2);
          template_effect(
            ($0) => {
              set_text(text2, (deep_read_state(model()), untrack(() => model().name)));
              set_text(text_3, $0);
            },
            [() => ($i18n(), untrack(() => $i18n().t("Close")))]
          );
          event("click", button, close);
          event("click", button_1, close);
          append($$anchor3, fragment_2);
        };
        if_block(node, ($$render) => {
          if (model()) $$render(consequent_1);
        });
      }
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root_1$2 = from_html(`<div class="flex flex-1"><div class=" self-center ml-1 mr-3"><!></div> <input class=" w-full text-sm pr-4 py-1 rounded-r-xl outline-hidden bg-transparent"/></div>`);
var root_2$2 = from_html(`<div class=" absolute top-0 bottom-0 left-0 right-0 flex"><div class="m-auto"><!></div></div>`);
var root_3$3 = from_html(`<div class="text-center text-xs text-gray-500 dark:text-gray-400 py-1"> </div>`);
var root_5$3 = from_html(`<span class="font-normal"><!></span>`);
var root_8$1 = from_html(`<span class="invisible"><!></span>`);
var root_9$1 = from_html(`<span class="font-normal"><!></span>`);
var root_12 = from_html(`<span class="invisible"><!></span>`);
var root_13 = from_html(`<span class="font-normal"><!></span>`);
var root_16 = from_html(`<span class="invisible"><!></span>`);
var root_17 = from_html(`<span class="font-normal"><!></span>`);
var root_20 = from_html(`<span class="invisible"><!></span>`);
var root_21 = from_html(`<span class="font-normal"><!></span>`);
var root_24$1 = from_html(`<span class="invisible"><!></span>`);
var root_27 = from_html(`<span class="hidden group-hover:inline"> </span> <span class=" group-hover:hidden"> </span>`, 1);
var root_29$1 = from_html(`<span class="hidden group-hover:inline"> </span> <span class=" group-hover:hidden"> </span>`, 1);
var root_25$1 = from_html(`<tr class="bg-white dark:bg-gray-900 dark:border-gray-850 text-xs group cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-850/50 transition"><td class="px-3 py-1.5 text-left font-medium text-gray-900 dark:text-white w-fit"><div class=" line-clamp-1"> </div></td><td class="px-3 py-1.5 flex flex-col justify-center"><div class="flex items-center gap-2"><div class="shrink-0"><img class="size-5 rounded-full object-cover shrink-0"/></div> <div class="font-medium text-gray-800 dark:text-gray-200 pr-4"> </div></div></td><td class="px-3 py-1.5 text-right font-medium text-gray-900 dark:text-white w-max"> </td><td class=" px-3 py-1.5 text-right font-medium text-green-500"><div class=" w-10"><!></div></td><td class="px-3 py-1.5 text-right font-medium text-red-500"><div class=" w-10"><!></div></td></tr>`);
var root_4$2 = from_html(`<table><thead class="text-xs text-gray-800 uppercase bg-transparent dark:text-gray-200"><tr class=" border-b-[1.5px] border-gray-50 dark:border-gray-850"><th scope="col" class="px-2.5 py-2 cursor-pointer select-none w-3"><div class="flex gap-1.5 items-center"> <!></div></th><th scope="col" class="px-2.5 py-2 cursor-pointer select-none"><div class="flex gap-1.5 items-center"> <!></div></th><th scope="col" class="px-2.5 py-2 text-right cursor-pointer select-none w-fit"><div class="flex gap-1.5 items-center justify-end"> <!></div></th><th scope="col" class="px-2.5 py-2 text-right cursor-pointer select-none w-5"><div class="flex gap-1.5 items-center justify-end"> <!></div></th><th scope="col" class="px-2.5 py-2 text-right cursor-pointer select-none w-5"><div class="flex gap-1.5 items-center justify-end"> <!></div></th></tr></thead><tbody></tbody></table>`);
var root$1 = from_html(`<!> <div class="pt-0.5 pb-1 gap-1 flex flex-col md:flex-row justify-between sticky top-0 z-10 bg-white dark:bg-gray-900"><div class="flex items-center md:self-center text-xl font-medium px-0.5 gap-2 shrink-0"><div> </div> <div class="text-lg font-medium text-gray-500 dark:text-gray-500"> </div></div> <div class=" flex space-x-2"><!></div></div> <div class="scrollbar-hidden relative whitespace-nowrap overflow-x-auto max-w-full rounded-sm"><!> <!></div> <div class=" text-gray-500 text-xs mt-1.5 w-full flex justify-end"><div class=" text-right"><div class="line-clamp-1"> </div> </div></div>`, 1);
function Leaderboard($$anchor, $$props) {
  push($$props, false);
  const $models = () => store_get(models, "$models", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const sortedModels = mutable_source();
  const i18n = getContext("i18n");
  const EMBEDDING_MODEL = "TaylorAI/bge-micro-v2";
  let tokenizer = null;
  let model = null;
  let feedbacks2 = prop($$props, "feedbacks", 24, () => []);
  let rankedModels = mutable_source([]);
  let query = mutable_source("");
  let tagEmbeddings = /* @__PURE__ */ new Map();
  let loadingLeaderboard = mutable_source(true);
  let debounceTimer;
  let orderBy = mutable_source(
    "rating"
    // default sort column
  );
  let direction = mutable_source(
    "desc"
    // default sort order
  );
  function setSortKey(key) {
    if (get(orderBy) === key) {
      set(direction, get(direction) === "asc" ? "desc" : "asc");
    } else {
      set(orderBy, key);
      set(direction, key === "name" ? "asc" : "desc");
    }
  }
  let showLeaderboardModal = mutable_source(false);
  let selectedModel = mutable_source(null);
  const openLeaderboardModelModal = (model2) => {
    set(showLeaderboardModal, true);
    set(selectedModel, model2);
  };
  const closeLeaderboardModal = () => {
    set(showLeaderboardModal, false);
    set(selectedModel, null);
  };
  const rankHandler = async (similarities = /* @__PURE__ */ new Map()) => {
    const modelStats = calculateModelStats(feedbacks2(), similarities);
    set(rankedModels, $models().filter((m) => {
      var _a, _b;
      return (m == null ? void 0 : m.owned_by) !== "arena" && (((_b = (_a = m == null ? void 0 : m.info) == null ? void 0 : _a.meta) == null ? void 0 : _b.hidden) ?? false) !== true;
    }).map((model2) => {
      const stats = modelStats.get(model2.id);
      return {
        ...model2,
        rating: stats ? Math.round(stats.rating) : "-",
        stats: {
          count: stats ? stats.won + stats.lost : 0,
          won: stats ? stats.won.toString() : "-",
          lost: stats ? stats.lost.toString() : "-"
        }
      };
    }).sort((a, b) => {
      if (a.rating === "-" && b.rating !== "-") return 1;
      if (b.rating === "-" && a.rating !== "-") return -1;
      if (a.rating !== "-" && b.rating !== "-") return b.rating - a.rating;
      return ((a == null ? void 0 : a.name) ?? (a == null ? void 0 : a.id) ?? "").localeCompare((b == null ? void 0 : b.name) ?? (b == null ? void 0 : b.id) ?? "");
    }));
    set(loadingLeaderboard, false);
  };
  function calculateModelStats(feedbacks3, similarities) {
    const stats = /* @__PURE__ */ new Map();
    const K = 32;
    function getOrDefaultStats(modelId) {
      return stats.get(modelId) || { rating: 1e3, won: 0, lost: 0 };
    }
    function updateStats(modelId, ratingChange, outcome) {
      const currentStats = getOrDefaultStats(modelId);
      currentStats.rating += ratingChange;
      if (outcome === 1) currentStats.won++;
      else if (outcome === 0) currentStats.lost++;
      stats.set(modelId, currentStats);
    }
    function calculateEloChange(ratingA, ratingB, outcome, similarity) {
      const expectedScore = 1 / (1 + Math.pow(10, (ratingB - ratingA) / 400));
      return K * (outcome - expectedScore) * similarity;
    }
    feedbacks3.forEach((feedback) => {
      var _a, _b;
      if (!((_a = feedback == null ? void 0 : feedback.data) == null ? void 0 : _a.model_id) || !((_b = feedback == null ? void 0 : feedback.data) == null ? void 0 : _b.rating)) return;
      const modelA = feedback.data.model_id;
      const statsA = getOrDefaultStats(modelA);
      let outcome;
      switch (feedback.data.rating.toString()) {
        case "1":
          outcome = 1;
          break;
        case "-1":
          outcome = 0;
          break;
        default:
          return;
      }
      const similarity = get(query) !== "" ? similarities.get(feedback.id) || 0 : 1;
      const opponents = feedback.data.sibling_model_ids || [];
      opponents.forEach((modelB) => {
        const statsB = getOrDefaultStats(modelB);
        const changeA = calculateEloChange(statsA.rating, statsB.rating, outcome, similarity);
        const changeB = calculateEloChange(statsB.rating, statsA.rating, 1 - outcome, similarity);
        updateStats(modelA, changeA, outcome);
        updateStats(modelB, changeB, 1 - outcome);
      });
    });
    return stats;
  }
  const cosineSimilarity = (vecA, vecB) => {
    if (vecA.length !== vecB.length) {
      throw new Error("Vectors must be the same length");
    }
    let dotProduct = 0;
    let normA = 0;
    let normB = 0;
    for (let i = 0; i < vecA.length; i++) {
      dotProduct += vecA[i] * vecB[i];
      normA += vecA[i] ** 2;
      normB += vecB[i] ** 2;
    }
    normA = Math.sqrt(normA);
    normB = Math.sqrt(normB);
    if (normA === 0 || normB === 0) {
      return 0;
    }
    return dotProduct / (normA * normB);
  };
  const calculateMaxSimilarity = (queryEmbedding, tagEmbeddings2) => {
    let maxSimilarity = 0;
    for (const tagEmbedding of tagEmbeddings2.values()) {
      const similarity = cosineSimilarity(queryEmbedding, tagEmbedding);
      maxSimilarity = Math.max(maxSimilarity, similarity);
    }
    return maxSimilarity;
  };
  const loadEmbeddingModel = async () => {
    const { env, AutoModel, AutoTokenizer } = await __vitePreload(async () => {
      const { env: env2, AutoModel: AutoModel2, AutoTokenizer: AutoTokenizer2 } = await import("./DsTn8WK5.js");
      return { env: env2, AutoModel: AutoModel2, AutoTokenizer: AutoTokenizer2 };
    }, true ? [] : void 0, import.meta.url);
    if (env.backends.onnx.wasm) {
      env.backends.onnx.wasm.wasmPaths = "/wasm/";
    }
    if (!window.tokenizer) {
      window.tokenizer = await AutoTokenizer.from_pretrained(EMBEDDING_MODEL);
    }
    if (!window.model) {
      window.model = await AutoModel.from_pretrained(EMBEDDING_MODEL);
    }
    tokenizer = window.tokenizer;
    model = window.model;
    const allTags = new Set(feedbacks2().flatMap((feedback) => feedback.data.tags || []));
    await getTagEmbeddings(Array.from(allTags));
  };
  const getEmbeddings = async (text2) => {
    const tokens = await tokenizer(text2);
    const output = await model(tokens);
    const embeddings = output.last_hidden_state.mean(1);
    return embeddings.ort_tensor.data;
  };
  const getTagEmbeddings = async (tags) => {
    const embeddings = /* @__PURE__ */ new Map();
    for (const tag of tags) {
      if (!tagEmbeddings.has(tag)) {
        tagEmbeddings.set(tag, await getEmbeddings(tag));
      }
      embeddings.set(tag, tagEmbeddings.get(tag));
    }
    return embeddings;
  };
  const debouncedQueryHandler = async () => {
    set(loadingLeaderboard, true);
    if (get(query).trim() === "") {
      rankHandler();
      return;
    }
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(
      async () => {
        const queryEmbedding = await getEmbeddings(get(query));
        const similarities = /* @__PURE__ */ new Map();
        for (const feedback of feedbacks2()) {
          const feedbackTags = feedback.data.tags || [];
          const tagEmbeddings2 = await getTagEmbeddings(feedbackTags);
          const maxSimilarity = calculateMaxSimilarity(queryEmbedding, tagEmbeddings2);
          similarities.set(feedback.id, maxSimilarity);
        }
        rankHandler(similarities);
      },
      1500
    );
  };
  onMount(async () => {
    rankHandler();
  });
  legacy_pre_effect(() => get(query), () => {
    get(query), debouncedQueryHandler();
  });
  legacy_pre_effect(() => (get(rankedModels), get(orderBy), get(direction)), () => {
    set(sortedModels, [...get(rankedModels)].sort((a, b) => {
      let aVal, bVal;
      if (get(orderBy) === "name") {
        aVal = a.name;
        bVal = b.name;
        return get(direction) === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      } else if (get(orderBy) === "rating") {
        aVal = a.rating === "-" ? -Infinity : a.rating;
        bVal = b.rating === "-" ? -Infinity : b.rating;
        return get(direction) === "asc" ? aVal - bVal : bVal - aVal;
      } else if (get(orderBy) === "won") {
        aVal = a.stats.won === "-" ? -Infinity : Number(a.stats.won);
        bVal = b.stats.won === "-" ? -Infinity : Number(b.stats.won);
        return get(direction) === "asc" ? aVal - bVal : bVal - aVal;
      } else if (get(orderBy) === "lost") {
        aVal = a.stats.lost === "-" ? -Infinity : Number(a.stats.lost);
        bVal = b.stats.lost === "-" ? -Infinity : Number(b.stats.lost);
        return get(direction) === "asc" ? aVal - bVal : bVal - aVal;
      }
      return 0;
    }));
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root$1();
  var node = first_child(fragment);
  LeaderboardModal(node, {
    get model() {
      return get(selectedModel);
    },
    get feedbacks() {
      return feedbacks2();
    },
    onClose: closeLeaderboardModal,
    get show() {
      return get(showLeaderboardModal);
    },
    set show($$value) {
      set(showLeaderboardModal, $$value);
    },
    $$legacy: true
  });
  var div = sibling(node, 2);
  var div_1 = child(div);
  var div_2 = child(div_1);
  var text_1 = child(div_2, true);
  reset(div_2);
  var div_3 = sibling(div_2, 2);
  var text_2 = child(div_3, true);
  reset(div_3);
  reset(div_1);
  var div_4 = sibling(div_1, 2);
  var node_1 = child(div_4);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Re-rank models by topic similarity"))));
    Tooltip(node_1, {
      get content() {
        return get($0);
      },
      children: ($$anchor2, $$slotProps) => {
        var div_5 = root_1$2();
        var div_6 = child(div_5);
        var node_2 = child(div_6);
        Search(node_2, { className: "size-3" });
        reset(div_6);
        var input = sibling(div_6, 2);
        remove_input_defaults(input);
        reset(div_5);
        template_effect(($02) => set_attribute(input, "placeholder", $02), [() => ($i18n(), untrack(() => $i18n().t("Search")))]);
        bind_value(input, () => get(query), ($$value) => set(query, $$value));
        event("focus", input, () => {
          loadEmbeddingModel();
        });
        append($$anchor2, div_5);
      },
      $$slots: { default: true }
    });
  }
  reset(div_4);
  reset(div);
  var div_7 = sibling(div, 2);
  var node_3 = child(div_7);
  {
    var consequent = ($$anchor2) => {
      var div_8 = root_2$2();
      var div_9 = child(div_8);
      var node_4 = child(div_9);
      Spinner(node_4, { className: "size-5" });
      reset(div_9);
      reset(div_8);
      append($$anchor2, div_8);
    };
    if_block(node_3, ($$render) => {
      if (get(loadingLeaderboard)) $$render(consequent);
    });
  }
  var node_5 = sibling(node_3, 2);
  {
    var consequent_1 = ($$anchor2) => {
      var div_10 = root_3$3();
      var text_3 = child(div_10, true);
      reset(div_10);
      template_effect(($0) => set_text(text_3, $0), [
        () => ($i18n(), untrack(() => $i18n().t("No models found")))
      ]);
      append($$anchor2, div_10);
    };
    var alternate_12 = ($$anchor2) => {
      var table = root_4$2();
      var thead = child(table);
      var tr = child(thead);
      var th = child(tr);
      var div_11 = child(th);
      var text_4 = child(div_11);
      var node_6 = sibling(text_4);
      {
        var consequent_3 = ($$anchor3) => {
          var span = root_5$3();
          var node_7 = child(span);
          {
            var consequent_2 = ($$anchor4) => {
              ChevronUp($$anchor4, { className: "size-2" });
            };
            var alternate = ($$anchor4) => {
              ChevronDown($$anchor4, { className: "size-2" });
            };
            if_block(node_7, ($$render) => {
              if (get(direction) === "asc") $$render(consequent_2);
              else $$render(alternate, false);
            });
          }
          reset(span);
          append($$anchor3, span);
        };
        var alternate_1 = ($$anchor3) => {
          var span_1 = root_8$1();
          var node_8 = child(span_1);
          ChevronUp(node_8, { className: "size-2" });
          reset(span_1);
          append($$anchor3, span_1);
        };
        if_block(node_6, ($$render) => {
          if (get(orderBy) === "rating") $$render(consequent_3);
          else $$render(alternate_1, false);
        });
      }
      reset(div_11);
      reset(th);
      var th_1 = sibling(th);
      var div_12 = child(th_1);
      var text_5 = child(div_12);
      var node_9 = sibling(text_5);
      {
        var consequent_5 = ($$anchor3) => {
          var span_2 = root_9$1();
          var node_10 = child(span_2);
          {
            var consequent_4 = ($$anchor4) => {
              ChevronUp($$anchor4, { className: "size-2" });
            };
            var alternate_2 = ($$anchor4) => {
              ChevronDown($$anchor4, { className: "size-2" });
            };
            if_block(node_10, ($$render) => {
              if (get(direction) === "asc") $$render(consequent_4);
              else $$render(alternate_2, false);
            });
          }
          reset(span_2);
          append($$anchor3, span_2);
        };
        var alternate_3 = ($$anchor3) => {
          var span_3 = root_12();
          var node_11 = child(span_3);
          ChevronUp(node_11, { className: "size-2" });
          reset(span_3);
          append($$anchor3, span_3);
        };
        if_block(node_9, ($$render) => {
          if (get(orderBy) === "name") $$render(consequent_5);
          else $$render(alternate_3, false);
        });
      }
      reset(div_12);
      reset(th_1);
      var th_2 = sibling(th_1);
      var div_13 = child(th_2);
      var text_6 = child(div_13);
      var node_12 = sibling(text_6);
      {
        var consequent_7 = ($$anchor3) => {
          var span_4 = root_13();
          var node_13 = child(span_4);
          {
            var consequent_6 = ($$anchor4) => {
              ChevronUp($$anchor4, { className: "size-2" });
            };
            var alternate_4 = ($$anchor4) => {
              ChevronDown($$anchor4, { className: "size-2" });
            };
            if_block(node_13, ($$render) => {
              if (get(direction) === "asc") $$render(consequent_6);
              else $$render(alternate_4, false);
            });
          }
          reset(span_4);
          append($$anchor3, span_4);
        };
        var alternate_5 = ($$anchor3) => {
          var span_5 = root_16();
          var node_14 = child(span_5);
          ChevronUp(node_14, { className: "size-2" });
          reset(span_5);
          append($$anchor3, span_5);
        };
        if_block(node_12, ($$render) => {
          if (get(orderBy) === "rating") $$render(consequent_7);
          else $$render(alternate_5, false);
        });
      }
      reset(div_13);
      reset(th_2);
      var th_3 = sibling(th_2);
      var div_14 = child(th_3);
      var text_7 = child(div_14);
      var node_15 = sibling(text_7);
      {
        var consequent_9 = ($$anchor3) => {
          var span_6 = root_17();
          var node_16 = child(span_6);
          {
            var consequent_8 = ($$anchor4) => {
              ChevronUp($$anchor4, { className: "size-2" });
            };
            var alternate_6 = ($$anchor4) => {
              ChevronDown($$anchor4, { className: "size-2" });
            };
            if_block(node_16, ($$render) => {
              if (get(direction) === "asc") $$render(consequent_8);
              else $$render(alternate_6, false);
            });
          }
          reset(span_6);
          append($$anchor3, span_6);
        };
        var alternate_7 = ($$anchor3) => {
          var span_7 = root_20();
          var node_17 = child(span_7);
          ChevronUp(node_17, { className: "size-2" });
          reset(span_7);
          append($$anchor3, span_7);
        };
        if_block(node_15, ($$render) => {
          if (get(orderBy) === "won") $$render(consequent_9);
          else $$render(alternate_7, false);
        });
      }
      reset(div_14);
      reset(th_3);
      var th_4 = sibling(th_3);
      var div_15 = child(th_4);
      var text_8 = child(div_15);
      var node_18 = sibling(text_8);
      {
        var consequent_11 = ($$anchor3) => {
          var span_8 = root_21();
          var node_19 = child(span_8);
          {
            var consequent_10 = ($$anchor4) => {
              ChevronUp($$anchor4, { className: "size-2" });
            };
            var alternate_8 = ($$anchor4) => {
              ChevronDown($$anchor4, { className: "size-2" });
            };
            if_block(node_19, ($$render) => {
              if (get(direction) === "asc") $$render(consequent_10);
              else $$render(alternate_8, false);
            });
          }
          reset(span_8);
          append($$anchor3, span_8);
        };
        var alternate_9 = ($$anchor3) => {
          var span_9 = root_24$1();
          var node_20 = child(span_9);
          ChevronUp(node_20, { className: "size-2" });
          reset(span_9);
          append($$anchor3, span_9);
        };
        if_block(node_18, ($$render) => {
          if (get(orderBy) === "lost") $$render(consequent_11);
          else $$render(alternate_9, false);
        });
      }
      reset(div_15);
      reset(th_4);
      reset(tr);
      reset(thead);
      var tbody = sibling(thead);
      each(tbody, 7, () => get(sortedModels), (model2) => model2.id, ($$anchor3, model2, modelIdx, $$array) => {
        var tr_1 = root_25$1();
        var td = child(tr_1);
        var div_16 = child(td);
        var text_9 = child(div_16, true);
        reset(div_16);
        reset(td);
        var td_1 = sibling(td);
        var div_17 = child(td_1);
        var div_18 = child(div_17);
        var img = child(div_18);
        reset(div_18);
        var div_19 = sibling(div_18, 2);
        var text_10 = child(div_19, true);
        reset(div_19);
        reset(div_17);
        reset(td_1);
        var td_2 = sibling(td_1);
        var text_11 = child(td_2, true);
        reset(td_2);
        var td_3 = sibling(td_2);
        var div_20 = child(td_3);
        var node_21 = child(div_20);
        {
          var consequent_12 = ($$anchor4) => {
            var text_12 = text("-");
            append($$anchor4, text_12);
          };
          var alternate_10 = ($$anchor4) => {
            var fragment_11 = root_27();
            var span_10 = first_child(fragment_11);
            var text_13 = child(span_10);
            reset(span_10);
            var span_11 = sibling(span_10, 2);
            var text_14 = child(span_11, true);
            reset(span_11);
            template_effect(
              ($0) => {
                set_text(text_13, `${$0 ?? ""}%`);
                set_text(text_14, (get(model2), untrack(() => get(model2).stats.won)));
              },
              [
                () => (get(model2), untrack(() => (get(model2).stats.won / get(model2).stats.count * 100).toFixed(1)))
              ]
            );
            append($$anchor4, fragment_11);
          };
          if_block(node_21, ($$render) => {
            if (get(model2), untrack(() => get(model2).stats.won === "-")) $$render(consequent_12);
            else $$render(alternate_10, false);
          });
        }
        reset(div_20);
        reset(td_3);
        var td_4 = sibling(td_3);
        var div_21 = child(td_4);
        var node_22 = child(div_21);
        {
          var consequent_13 = ($$anchor4) => {
            var text_15 = text("-");
            append($$anchor4, text_15);
          };
          var alternate_11 = ($$anchor4) => {
            var fragment_12 = root_29$1();
            var span_12 = first_child(fragment_12);
            var text_16 = child(span_12);
            reset(span_12);
            var span_13 = sibling(span_12, 2);
            var text_17 = child(span_13, true);
            reset(span_13);
            template_effect(
              ($0) => {
                set_text(text_16, `${$0 ?? ""}%`);
                set_text(text_17, (get(model2), untrack(() => get(model2).stats.lost)));
              },
              [
                () => (get(model2), untrack(() => (get(model2).stats.lost / get(model2).stats.count * 100).toFixed(1)))
              ]
            );
            append($$anchor4, fragment_12);
          };
          if_block(node_22, ($$render) => {
            if (get(model2), untrack(() => get(model2).stats.lost === "-")) $$render(consequent_13);
            else $$render(alternate_11, false);
          });
        }
        reset(div_21);
        reset(td_4);
        reset(tr_1);
        template_effect(() => {
          set_text(text_9, (get(model2), deep_read_state(get(modelIdx)), untrack(() => {
            var _a;
            return ((_a = get(model2)) == null ? void 0 : _a.rating) !== "-" ? get(modelIdx) + 1 : "-";
          })));
          set_attribute(img, "src", (deep_read_state(WEBUI_API_BASE_URL), get(model2), untrack(() => `${WEBUI_API_BASE_URL}/models/model/profile/image?id=${get(model2).id}`)));
          set_attribute(img, "alt", (get(model2), untrack(() => get(model2).name)));
          set_text(text_10, (get(model2), untrack(() => get(model2).name)));
          set_text(text_11, (get(model2), untrack(() => get(model2).rating)));
        });
        event("click", tr_1, () => openLeaderboardModelModal(get(model2)));
        append($$anchor3, tr_1);
      });
      reset(tbody);
      reset(table);
      template_effect(
        ($0, $1, $2, $3, $4) => {
          set_class(table, 1, `w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto max-w-full ${get(loadingLeaderboard) ? "opacity-20" : ""}`);
          set_text(text_4, `${$0 ?? ""} `);
          set_text(text_5, `${$1 ?? ""} `);
          set_text(text_6, `${$2 ?? ""} `);
          set_text(text_7, `${$3 ?? ""} `);
          set_text(text_8, `${$4 ?? ""} `);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("RK"))),
          () => ($i18n(), untrack(() => $i18n().t("Model"))),
          () => ($i18n(), untrack(() => $i18n().t("Rating"))),
          () => ($i18n(), untrack(() => $i18n().t("Won"))),
          () => ($i18n(), untrack(() => $i18n().t("Lost")))
        ]
      );
      event("click", th, () => setSortKey("rating"));
      event("click", th_1, () => setSortKey("name"));
      event("click", th_2, () => setSortKey("rating"));
      event("click", th_3, () => setSortKey("won"));
      event("click", th_4, () => setSortKey("lost"));
      append($$anchor2, table);
    };
    if_block(node_5, ($$render) => {
      if (get(rankedModels), untrack(() => (get(rankedModels) ?? []).length === 0)) $$render(consequent_1);
      else $$render(alternate_12, false);
    });
  }
  reset(div_7);
  var div_22 = sibling(div_7, 2);
  var div_23 = child(div_22);
  var div_24 = child(div_23);
  var text_18 = child(div_24);
  reset(div_24);
  var text_19 = sibling(div_24);
  reset(div_23);
  reset(div_22);
  template_effect(
    ($0, $1, $2) => {
      set_text(text_1, $0);
      set_text(text_2, (get(rankedModels), untrack(() => get(rankedModels).length)));
      set_text(text_18, `ⓘ ${$1 ?? ""}`);
      set_text(text_19, ` ${$2 ?? ""}`);
    },
    [
      () => ($i18n(), untrack(() => $i18n().t("Leaderboard"))),
      () => ($i18n(), untrack(() => $i18n().t("The evaluation leaderboard is based on the Elo rating system and is updated in real-time."))),
      () => ($i18n(), untrack(() => $i18n().t("The leaderboard is currently in beta, and we may adjust the rating calculations as we refine the algorithm.")))
    ]
  );
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_5$2 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_3$2 = from_html(`<div slot="content"><!></div>`);
function FeedbackMenu($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const { saveAs } = fileSaver;
  const dispatch = createEventDispatcher();
  const i18n = getContext("i18n");
  let show = mutable_source(false);
  init();
  Dropdown($$anchor, {
    get show() {
      return get(show);
    },
    set show($$value) {
      set(show, $$value);
    },
    $$events: { change: (e) => {
    } },
    children: ($$anchor2, $$slotProps) => {
      {
        let $0 = derived_safe_equal(() => $i18n().t("More"));
        Tooltip($$anchor2, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_2 = comment();
            var node = first_child(fragment_2);
            slot(node, $$props, "default", {}, null);
            append($$anchor3, fragment_2);
          },
          $$slots: { default: true }
        });
      }
    },
    $$slots: {
      default: true,
      content: ($$anchor2, $$slotProps) => {
        var div = root_3$2();
        var node_1 = child(div);
        Menu_content(node_1, {
          class: "w-full max-w-[150px] rounded-xl p-1 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg",
          sideOffset: -2,
          side: "bottom",
          align: "start",
          get transition() {
            return flyAndScale;
          },
          children: ($$anchor3, $$slotProps2) => {
            Menu_item($$anchor3, {
              class: "flex  gap-2  items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md",
              $$events: {
                click: () => {
                  dispatch("delete");
                  set(show, false);
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_4 = root_5$2();
                var node_2 = first_child(fragment_4);
                GarbageBin(node_2, { strokeWidth: "2" });
                var div_1 = sibling(node_2, 2);
                var text2 = child(div_1, true);
                reset(div_1);
                template_effect(($0) => set_text(text2, $0), [() => $i18n().t("Delete")]);
                append($$anchor4, fragment_4);
              },
              $$slots: { default: true }
            });
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
var root_5$1 = from_html(`<div class="flex flex-col w-full mb-2"><div class="mb-1 text-xs text-gray-500"> </div> <div class="flex-1 text-xs whitespace-pre-line break-words"><span> </span></div></div>`);
var root_6$1 = from_html(`<div class="flex flex-col w-full mb-2"><div class="mb-1 text-xs text-gray-500"> </div> <div class="flex-1 text-xs whitespace-pre-line break-words max-h-32 overflow-y-auto"><span> </span></div></div>`);
var root_4$1 = from_html(`<!> <!>`, 1);
var root_8 = from_html(`<span class="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-850 text-[9px]"> </span>`);
var root_7$1 = from_html(`<div class="mb-2 -mx-1"><div class="flex flex-wrap gap-1 mt-1"></div></div>`);
var root_3$1 = from_html(`<div class="flex flex-col w-full"><div class="flex flex-col w-full mb-2"><div class=" mb-1 text-xs text-gray-500"> </div> <div class="flex-1 text-xs"><a class=" hover:underline" target="_blank"><span> </span></a></div></div> <!> <div class="flex flex-col w-full mb-2"><div class=" mb-1 text-xs text-gray-500"> </div> <div class="flex-1 text-xs"><span> </span></div></div> <div class="flex flex-col w-full mb-2"><div class=" mb-1 text-xs text-gray-500"> </div> <div class="flex-1 text-xs"><span> </span></div></div> <div class="flex flex-col w-full mb-2"><div class=" mb-1 text-xs text-gray-500"> </div> <div class="flex-1 text-xs"><span> </span></div></div> <!> <div class="flex justify-end pt-2"><button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="button"> </button></div></div>`);
var root_9 = from_html(`<div class="flex items-center justify-center w-full h-32"><!></div>`);
var root_2$1 = from_html(`<div><div class="flex justify-between dark:text-gray-300 px-5 pt-4 pb-2"><div class="text-lg font-medium self-center"> </div> <button class="self-center" aria-label="Close"><!></button></div> <div class="flex flex-col md:flex-row w-full px-5 pb-4 md:space-x-4 dark:text-gray-200"><!></div></div>`);
function FeedbackModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let selectedFeedback = prop($$props, "selectedFeedback", 8, null);
  let onClose = prop($$props, "onClose", 8, () => {
  });
  let loaded = mutable_source(false);
  let feedbackData = mutable_source(null);
  const close = () => {
    show(false);
    onClose()();
  };
  const init$1 = async () => {
    set(loaded, false);
    set(feedbackData, null);
    if (selectedFeedback()) {
      set(feedbackData, await getFeedbackById(localStorage.token, selectedFeedback().id).catch((err) => {
        return null;
      }));
      console.log("Feedback Data:", selectedFeedback(), get(feedbackData));
    }
    set(loaded, true);
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
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      {
        var consequent_5 = ($$anchor3) => {
          var div = root_2$1();
          var div_1 = child(div);
          var div_2 = child(div_1);
          var text2 = child(div_2, true);
          reset(div_2);
          var button = sibling(div_2, 2);
          var node_1 = child(button);
          XMark(node_1, { className: "size-5" });
          reset(button);
          reset(div_1);
          var div_3 = sibling(div_1, 2);
          var node_2 = child(div_3);
          {
            var consequent_4 = ($$anchor4) => {
              var div_4 = root_3$1();
              var div_5 = child(div_4);
              var div_6 = child(div_5);
              var text_1 = child(div_6, true);
              reset(div_6);
              var div_7 = sibling(div_6, 2);
              var a = child(div_7);
              var span = child(a);
              var text_2 = child(span, true);
              reset(span);
              reset(a);
              reset(div_7);
              reset(div_5);
              var node_3 = sibling(div_5, 2);
              {
                var consequent_2 = ($$anchor5) => {
                  const messageId = derived_safe_equal(() => (get(feedbackData), untrack(() => {
                    var _a, _b;
                    return (_b = (_a = get(feedbackData)) == null ? void 0 : _a.meta) == null ? void 0 : _b.message_id;
                  })));
                  const messages = derived_safe_equal(() => (get(feedbackData), untrack(() => {
                    var _a, _b, _c, _d;
                    return (_d = (_c = (_b = (_a = get(feedbackData)) == null ? void 0 : _a.snapshot) == null ? void 0 : _b.chat) == null ? void 0 : _c.chat) == null ? void 0 : _d.history.messages;
                  })));
                  var fragment_2 = root_4$1();
                  var node_4 = first_child(fragment_2);
                  {
                    var consequent = ($$anchor6) => {
                      var div_8 = root_5$1();
                      var div_9 = child(div_8);
                      var text_3 = child(div_9, true);
                      reset(div_9);
                      var div_10 = sibling(div_9, 2);
                      var span_1 = child(div_10);
                      var text_4 = child(span_1, true);
                      reset(span_1);
                      reset(div_10);
                      reset(div_8);
                      template_effect(
                        ($0) => {
                          set_text(text_3, $0);
                          set_text(text_4, (deep_read_state(get(messages)), deep_read_state(get(messageId)), untrack(() => {
                            var _a, _b;
                            return ((_b = get(messages)[(_a = get(messages)[get(messageId)]) == null ? void 0 : _a.parentId]) == null ? void 0 : _b.content) || "-";
                          })));
                        },
                        [() => ($i18n(), untrack(() => $i18n().t("Prompt")))]
                      );
                      append($$anchor6, div_8);
                    };
                    if_block(node_4, ($$render) => {
                      if (deep_read_state(get(messages)), deep_read_state(get(messageId)), untrack(() => {
                        var _a;
                        return get(messages)[(_a = get(messages)[get(messageId)]) == null ? void 0 : _a.parentId];
                      })) $$render(consequent);
                    });
                  }
                  var node_5 = sibling(node_4, 2);
                  {
                    var consequent_1 = ($$anchor6) => {
                      var div_11 = root_6$1();
                      var div_12 = child(div_11);
                      var text_5 = child(div_12, true);
                      reset(div_12);
                      var div_13 = sibling(div_12, 2);
                      var span_2 = child(div_13);
                      var text_6 = child(span_2, true);
                      reset(span_2);
                      reset(div_13);
                      reset(div_11);
                      template_effect(
                        ($0) => {
                          set_text(text_5, $0);
                          set_text(text_6, (deep_read_state(get(messages)), deep_read_state(get(messageId)), untrack(() => {
                            var _a;
                            return ((_a = get(messages)[get(messageId)]) == null ? void 0 : _a.content) || "-";
                          })));
                        },
                        [() => ($i18n(), untrack(() => $i18n().t("Response")))]
                      );
                      append($$anchor6, div_11);
                    };
                    if_block(node_5, ($$render) => {
                      if (deep_read_state(get(messages)), deep_read_state(get(messageId)), untrack(() => get(messages)[get(messageId)])) $$render(consequent_1);
                    });
                  }
                  append($$anchor5, fragment_2);
                };
                if_block(node_3, ($$render) => {
                  if (get(feedbackData)) $$render(consequent_2);
                });
              }
              var div_14 = sibling(node_3, 2);
              var div_15 = child(div_14);
              var text_7 = child(div_15, true);
              reset(div_15);
              var div_16 = sibling(div_15, 2);
              var span_3 = child(div_16);
              var text_8 = child(span_3, true);
              reset(span_3);
              reset(div_16);
              reset(div_14);
              var div_17 = sibling(div_14, 2);
              var div_18 = child(div_17);
              var text_9 = child(div_18, true);
              reset(div_18);
              var div_19 = sibling(div_18, 2);
              var span_4 = child(div_19);
              var text_10 = child(span_4, true);
              reset(span_4);
              reset(div_19);
              reset(div_17);
              var div_20 = sibling(div_17, 2);
              var div_21 = child(div_20);
              var text_11 = child(div_21, true);
              reset(div_21);
              var div_22 = sibling(div_21, 2);
              var span_5 = child(div_22);
              var text_12 = child(span_5, true);
              reset(span_5);
              reset(div_22);
              reset(div_20);
              var node_6 = sibling(div_20, 2);
              {
                var consequent_3 = ($$anchor5) => {
                  var div_23 = root_7$1();
                  var div_24 = child(div_23);
                  each(
                    div_24,
                    5,
                    () => (deep_read_state(selectedFeedback()), untrack(() => {
                      var _a, _b;
                      return (_b = (_a = selectedFeedback()) == null ? void 0 : _a.data) == null ? void 0 : _b.tags;
                    })),
                    index,
                    ($$anchor6, tag) => {
                      var span_6 = root_8();
                      var text_13 = child(span_6, true);
                      reset(span_6);
                      template_effect(() => set_text(text_13, get(tag)));
                      append($$anchor6, span_6);
                    }
                  );
                  reset(div_24);
                  reset(div_23);
                  append($$anchor5, div_23);
                };
                if_block(node_6, ($$render) => {
                  if (deep_read_state(selectedFeedback()), untrack(() => {
                    var _a, _b, _c, _d;
                    return ((_b = (_a = selectedFeedback()) == null ? void 0 : _a.data) == null ? void 0 : _b.tags) && ((_d = (_c = selectedFeedback()) == null ? void 0 : _c.data) == null ? void 0 : _d.tags.length);
                  })) $$render(consequent_3);
                });
              }
              var div_25 = sibling(node_6, 2);
              var button_1 = child(div_25);
              var text_14 = child(button_1, true);
              reset(button_1);
              reset(div_25);
              reset(div_4);
              template_effect(
                ($0, $1, $2, $3, $4) => {
                  set_text(text_1, $0);
                  set_attribute(a, "href", (deep_read_state(selectedFeedback()), untrack(() => {
                    var _a, _b;
                    return `/s/${(_b = (_a = selectedFeedback()) == null ? void 0 : _a.meta) == null ? void 0 : _b.chat_id}`;
                  })));
                  set_text(text_2, (deep_read_state(selectedFeedback()), untrack(() => {
                    var _a, _b;
                    return ((_b = (_a = selectedFeedback()) == null ? void 0 : _a.meta) == null ? void 0 : _b.chat_id) ?? "-";
                  })));
                  set_text(text_7, $1);
                  set_text(text_8, (deep_read_state(selectedFeedback()), untrack(() => {
                    var _a, _b, _c;
                    return ((_c = (_b = (_a = selectedFeedback()) == null ? void 0 : _a.data) == null ? void 0 : _b.details) == null ? void 0 : _c.rating) ?? "-";
                  })));
                  set_text(text_9, $2);
                  set_text(text_10, (deep_read_state(selectedFeedback()), untrack(() => {
                    var _a, _b;
                    return ((_b = (_a = selectedFeedback()) == null ? void 0 : _a.data) == null ? void 0 : _b.reason) || "-";
                  })));
                  set_text(text_11, $3);
                  set_text(text_12, (deep_read_state(selectedFeedback()), untrack(() => {
                    var _a, _b;
                    return ((_b = (_a = selectedFeedback()) == null ? void 0 : _a.data) == null ? void 0 : _b.comment) || "-";
                  })));
                  set_text(text_14, $4);
                },
                [
                  () => ($i18n(), untrack(() => $i18n().t("Chat ID"))),
                  () => ($i18n(), untrack(() => $i18n().t("Rating"))),
                  () => ($i18n(), untrack(() => $i18n().t("Reason"))),
                  () => ($i18n(), untrack(() => $i18n().t("Comment"))),
                  () => ($i18n(), untrack(() => $i18n().t("Close")))
                ]
              );
              event("click", button_1, close);
              append($$anchor4, div_4);
            };
            var alternate = ($$anchor4) => {
              var div_26 = root_9();
              var node_7 = child(div_26);
              Spinner(node_7, { className: "size-5" });
              reset(div_26);
              append($$anchor4, div_26);
            };
            if_block(node_2, ($$render) => {
              if (get(loaded)) $$render(consequent_4);
              else $$render(alternate, false);
            });
          }
          reset(div_3);
          reset(div);
          template_effect(($0) => set_text(text2, $0), [
            () => ($i18n(), untrack(() => $i18n().t("Feedback Details")))
          ]);
          event("click", button, close);
          append($$anchor3, div);
        };
        if_block(node, ($$render) => {
          if (selectedFeedback()) $$render(consequent_5);
        });
      }
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root_1$1 = from_html(`<div class="my-10"><!></div>`);
var root_4 = from_html(`<button class=" p-2 rounded-xl hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-850 transition font-medium text-sm flex items-center space-x-1"><!></button>`);
var root_3 = from_html(`<div><!></div>`);
var root_5 = from_html(`<div class="text-center text-xs text-gray-500 dark:text-gray-400 py-1"> </div>`);
var root_7 = from_html(`<span class="font-normal"><!></span>`);
var root_10 = from_html(`<span class="invisible"><!></span>`);
var root_11 = from_html(`<span class="font-normal"><!></span>`);
var root_14 = from_html(`<span class="invisible"><!></span>`);
var root_15 = from_html(`<span class="font-normal"><!></span>`);
var root_18 = from_html(`<span class="invisible"><!></span>`);
var root_19 = from_html(`<span class="font-normal"><!></span>`);
var root_22 = from_html(`<span class="invisible"><!></span>`);
var root_24 = from_html(`<div class="shrink-0"><img class="size-5 rounded-full object-cover shrink-0"/></div>`);
var root_26 = from_html(`<div class=" text-[0.65rem] text-gray-600 dark:text-gray-400 line-clamp-1"><!></div>`);
var root_25 = from_html(`<div class="font-medium text-gray-600 dark:text-gray-400 flex-1"> </div> <!>`, 1);
var root_29 = from_html(`<div class=" text-sm font-medium text-gray-600 dark:text-gray-400 flex-1 py-1.5"> </div>`);
var root_30 = from_html(`<td class="px-3 py-1 text-right font-medium text-gray-900 dark:text-white w-max"><div class=" flex justify-end"><!></div></td>`);
var root_36 = from_html(`<button class="self-center w-fit text-sm p-1.5 dark:text-gray-300 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl"><!></button>`);
var root_23 = from_html(`<tr class="bg-white dark:bg-gray-900 dark:border-gray-850 text-xs cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-850/50 transition"><td class=" py-0.5 text-right font-medium"><div class="flex justify-center"><!></div></td><td class=" py-1 pl-3 flex flex-col"><div class="flex flex-col items-start gap-0.5 h-full"><div class="flex flex-col h-full"><!></div></div></td><!><td class=" px-3 py-1 text-right font-medium"> </td><td class=" px-3 py-1 text-right font-medium"><!></td></tr>`);
var root_6 = from_html(`<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto max-w-full"><thead class="text-xs text-gray-800 uppercase bg-transparent dark:text-gray-200"><tr class=" border-b-[1.5px] border-gray-50 dark:border-gray-850"><th scope="col" class="px-2.5 py-2 cursor-pointer select-none w-3"><div class="flex gap-1.5 items-center justify-end"> <!></div></th><th scope="col" class="px-2.5 py-2 cursor-pointer select-none"><div class="flex gap-1.5 items-center"> <!></div></th><th scope="col" class="px-2.5 py-2 text-right cursor-pointer select-none w-fit"><div class="flex gap-1.5 items-center justify-end"> <!></div></th><th scope="col" class="px-2.5 py-2 text-right cursor-pointer select-none w-0"><div class="flex gap-1.5 items-center justify-end"> <!></div></th><th scope="col" class="px-2.5 py-2 text-right cursor-pointer select-none w-0"></th></tr></thead><tbody></tbody></table>`);
var root_38 = from_html(`<button class="flex text-xs items-center px-3 py-1.5 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-gray-200 transition"><div class=" self-center mr-2 font-medium line-clamp-1"> </div> <div class=" self-center"><!></div></button>`);
var root_37 = from_html(`<div class=" flex flex-col justify-end w-full text-right gap-1"><div class="line-clamp-1 text-gray-500 text-xs"> </div> <div class="flex space-x-1 ml-auto"><!></div></div>`);
var root_2 = from_html(`<div class="mt-0.5 mb-1 gap-1 flex flex-row justify-between"><div class="flex items-center md:self-center text-xl font-medium px-0.5 gap-2 shrink-0"><div> </div> <div class="text-lg font-medium text-gray-500 dark:text-gray-500"> </div></div> <!></div> <div class="scrollbar-hidden relative whitespace-nowrap overflow-x-auto max-w-full"><!></div> <!> <!>`, 1);
var root = from_html(`<!> <!>`, 1);
function Feedbacks($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const { saveAs } = fileSaver;
  dayjs2.extend(relativeTime);
  const i18n = getContext("i18n");
  let page2 = mutable_source(1);
  let items = mutable_source(null);
  let total = mutable_source(null);
  let orderBy = mutable_source("updated_at");
  let direction = mutable_source("desc");
  const setSortKey = (key) => {
    if (get(orderBy) === key) {
      set(direction, get(direction) === "asc" ? "desc" : "asc");
    } else {
      set(orderBy, key);
      set(direction, "asc");
    }
  };
  let showFeedbackModal = mutable_source(false);
  let selectedFeedback = mutable_source(null);
  const openFeedbackModal = (feedback) => {
    set(showFeedbackModal, true);
    set(selectedFeedback, feedback);
  };
  const closeFeedbackModal = () => {
    set(showFeedbackModal, false);
    set(selectedFeedback, null);
  };
  const getFeedbacks = async () => {
    try {
      const res = await getFeedbackItems(localStorage.token, get(orderBy), get(direction), get(page2)).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (res) {
        set(items, res.items);
        set(total, res.total);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const deleteFeedbackHandler = async (feedbackId) => {
    const response = await deleteFeedbackById(localStorage.token, feedbackId).catch((err) => {
      toast.error(err);
      return null;
    });
    if (response) {
      toast.success($i18n().t("Feedback deleted successfully"));
      set(page2, 1);
      getFeedbacks();
    }
  };
  const shareHandler = async () => {
    toast.success($i18n().t("Redirecting you to Open WebUI Community"));
    const feedbacksToShare = feedbacks.map((f) => {
      const { snapshot, user, ...rest } = f;
      return rest;
    });
    console.log(feedbacksToShare);
    const url = "https://openwebui.com";
    const tab = await window.open(`${url}/leaderboard`, "_blank");
    const messageHandler = (event2) => {
      if (event2.origin !== url) return;
      if (event2.data === "loaded") {
        tab.postMessage(JSON.stringify(feedbacksToShare), "*");
        window.removeEventListener("message", messageHandler);
      }
    };
    window.addEventListener("message", messageHandler, false);
  };
  const exportHandler = async () => {
    const _feedbacks = await exportAllFeedbacks(localStorage.token).catch((err) => {
      toast.error(err);
      return null;
    });
    if (_feedbacks) {
      let blob = new Blob([JSON.stringify(_feedbacks)], { type: "application/json" });
      saveAs(blob, `feedback-history-export-${Date.now()}.json`);
    }
  };
  legacy_pre_effect(() => get(page2), () => {
    if (get(page2)) {
      getFeedbacks();
    }
  });
  legacy_pre_effect(() => (get(orderBy), get(direction)), () => {
    if (get(orderBy) && get(direction)) {
      getFeedbacks();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root();
  var node = first_child(fragment);
  FeedbackModal(node, {
    get selectedFeedback() {
      return get(selectedFeedback);
    },
    onClose: closeFeedbackModal,
    get show() {
      return get(showFeedbackModal);
    },
    set show($$value) {
      set(showFeedbackModal, $$value);
    },
    $$legacy: true
  });
  var node_1 = sibling(node, 2);
  {
    var consequent = ($$anchor2) => {
      var div = root_1$1();
      var node_2 = child(div);
      Spinner(node_2, { className: "size-5" });
      reset(div);
      append($$anchor2, div);
    };
    var alternate_13 = ($$anchor2) => {
      var fragment_1 = root_2();
      var div_1 = first_child(fragment_1);
      var div_2 = child(div_1);
      var div_3 = child(div_2);
      var text$1 = child(div_3, true);
      reset(div_3);
      var div_4 = sibling(div_3, 2);
      var text_1 = child(div_4, true);
      reset(div_4);
      reset(div_2);
      var node_3 = sibling(div_2, 2);
      {
        var consequent_1 = ($$anchor3) => {
          var div_5 = root_3();
          var node_4 = child(div_5);
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Export"))));
            Tooltip(node_4, {
              get content() {
                return get($0);
              },
              children: ($$anchor4, $$slotProps) => {
                var button = root_4();
                var node_5 = child(button);
                Download(node_5, { className: "size-3" });
                reset(button);
                event("click", button, () => {
                  exportHandler();
                });
                append($$anchor4, button);
              },
              $$slots: { default: true }
            });
          }
          reset(div_5);
          append($$anchor3, div_5);
        };
        if_block(node_3, ($$render) => {
          if (get(total) > 0) $$render(consequent_1);
        });
      }
      reset(div_1);
      var div_6 = sibling(div_1, 2);
      var node_6 = child(div_6);
      {
        var consequent_2 = ($$anchor3) => {
          var div_7 = root_5();
          var text_2 = child(div_7, true);
          reset(div_7);
          template_effect(($0) => set_text(text_2, $0), [
            () => ($i18n(), untrack(() => $i18n().t("No feedbacks found")))
          ]);
          append($$anchor3, div_7);
        };
        var alternate_12 = ($$anchor3) => {
          var table = root_6();
          var thead = child(table);
          var tr = child(thead);
          var th = child(tr);
          var div_8 = child(th);
          var text_3 = child(div_8);
          var node_7 = sibling(text_3);
          {
            var consequent_4 = ($$anchor4) => {
              var span = root_7();
              var node_8 = child(span);
              {
                var consequent_3 = ($$anchor5) => {
                  ChevronUp($$anchor5, { className: "size-2" });
                };
                var alternate = ($$anchor5) => {
                  ChevronDown($$anchor5, { className: "size-2" });
                };
                if_block(node_8, ($$render) => {
                  if (get(direction) === "asc") $$render(consequent_3);
                  else $$render(alternate, false);
                });
              }
              reset(span);
              append($$anchor4, span);
            };
            var alternate_1 = ($$anchor4) => {
              var span_1 = root_10();
              var node_9 = child(span_1);
              ChevronUp(node_9, { className: "size-2" });
              reset(span_1);
              append($$anchor4, span_1);
            };
            if_block(node_7, ($$render) => {
              if (get(orderBy) === "user") $$render(consequent_4);
              else $$render(alternate_1, false);
            });
          }
          reset(div_8);
          reset(th);
          var th_1 = sibling(th);
          var div_9 = child(th_1);
          var text_4 = child(div_9);
          var node_10 = sibling(text_4);
          {
            var consequent_6 = ($$anchor4) => {
              var span_2 = root_11();
              var node_11 = child(span_2);
              {
                var consequent_5 = ($$anchor5) => {
                  ChevronUp($$anchor5, { className: "size-2" });
                };
                var alternate_2 = ($$anchor5) => {
                  ChevronDown($$anchor5, { className: "size-2" });
                };
                if_block(node_11, ($$render) => {
                  if (get(direction) === "asc") $$render(consequent_5);
                  else $$render(alternate_2, false);
                });
              }
              reset(span_2);
              append($$anchor4, span_2);
            };
            var alternate_3 = ($$anchor4) => {
              var span_3 = root_14();
              var node_12 = child(span_3);
              ChevronUp(node_12, { className: "size-2" });
              reset(span_3);
              append($$anchor4, span_3);
            };
            if_block(node_10, ($$render) => {
              if (get(orderBy) === "model_id") $$render(consequent_6);
              else $$render(alternate_3, false);
            });
          }
          reset(div_9);
          reset(th_1);
          var th_2 = sibling(th_1);
          var div_10 = child(th_2);
          var text_5 = child(div_10);
          var node_13 = sibling(text_5);
          {
            var consequent_8 = ($$anchor4) => {
              var span_4 = root_15();
              var node_14 = child(span_4);
              {
                var consequent_7 = ($$anchor5) => {
                  ChevronUp($$anchor5, { className: "size-2" });
                };
                var alternate_4 = ($$anchor5) => {
                  ChevronDown($$anchor5, { className: "size-2" });
                };
                if_block(node_14, ($$render) => {
                  if (get(direction) === "asc") $$render(consequent_7);
                  else $$render(alternate_4, false);
                });
              }
              reset(span_4);
              append($$anchor4, span_4);
            };
            var alternate_5 = ($$anchor4) => {
              var span_5 = root_18();
              var node_15 = child(span_5);
              ChevronUp(node_15, { className: "size-2" });
              reset(span_5);
              append($$anchor4, span_5);
            };
            if_block(node_13, ($$render) => {
              if (get(orderBy) === "rating") $$render(consequent_8);
              else $$render(alternate_5, false);
            });
          }
          reset(div_10);
          reset(th_2);
          var th_3 = sibling(th_2);
          var div_11 = child(th_3);
          var text_6 = child(div_11);
          var node_16 = sibling(text_6);
          {
            var consequent_10 = ($$anchor4) => {
              var span_6 = root_19();
              var node_17 = child(span_6);
              {
                var consequent_9 = ($$anchor5) => {
                  ChevronUp($$anchor5, { className: "size-2" });
                };
                var alternate_6 = ($$anchor5) => {
                  ChevronDown($$anchor5, { className: "size-2" });
                };
                if_block(node_17, ($$render) => {
                  if (get(direction) === "asc") $$render(consequent_9);
                  else $$render(alternate_6, false);
                });
              }
              reset(span_6);
              append($$anchor4, span_6);
            };
            var alternate_7 = ($$anchor4) => {
              var span_7 = root_22();
              var node_18 = child(span_7);
              ChevronUp(node_18, { className: "size-2" });
              reset(span_7);
              append($$anchor4, span_7);
            };
            if_block(node_16, ($$render) => {
              if (get(orderBy) === "updated_at") $$render(consequent_10);
              else $$render(alternate_7, false);
            });
          }
          reset(div_11);
          reset(th_3);
          next();
          reset(tr);
          reset(thead);
          var tbody = sibling(thead);
          each(tbody, 5, () => get(items), (feedback) => feedback.id, ($$anchor4, feedback) => {
            var tr_1 = root_23();
            var td = child(tr_1);
            var div_12 = child(td);
            var node_19 = child(div_12);
            {
              let $0 = derived_safe_equal(() => (get(feedback), untrack(() => {
                var _a, _b;
                return (_b = (_a = get(feedback)) == null ? void 0 : _a.user) == null ? void 0 : _b.name;
              })));
              Tooltip(node_19, {
                get content() {
                  return get($0);
                },
                children: ($$anchor5, $$slotProps) => {
                  var div_13 = root_24();
                  var img = child(div_13);
                  reset(div_13);
                  template_effect(() => {
                    set_attribute(img, "src", (deep_read_state(WEBUI_API_BASE_URL), get(feedback), untrack(() => `${WEBUI_API_BASE_URL}/users/${get(feedback).user.id}/profile/image`)));
                    set_attribute(img, "alt", (get(feedback), untrack(() => {
                      var _a, _b;
                      return (_b = (_a = get(feedback)) == null ? void 0 : _a.user) == null ? void 0 : _b.name;
                    })));
                  });
                  append($$anchor5, div_13);
                },
                $$slots: { default: true }
              });
            }
            reset(div_12);
            reset(td);
            var td_1 = sibling(td);
            var div_14 = child(td_1);
            var div_15 = child(div_14);
            var node_20 = child(div_15);
            {
              var consequent_12 = ($$anchor5) => {
                var fragment_10 = root_25();
                var div_16 = first_child(fragment_10);
                var text_7 = child(div_16, true);
                reset(div_16);
                var node_21 = sibling(div_16, 2);
                {
                  let $0 = derived_safe_equal(() => (get(feedback), untrack(() => get(feedback).data.sibling_model_ids.join(", "))));
                  Tooltip(node_21, {
                    get content() {
                      return get($0);
                    },
                    children: ($$anchor6, $$slotProps) => {
                      var div_17 = root_26();
                      var node_22 = child(div_17);
                      {
                        var consequent_11 = ($$anchor7) => {
                          var text_8 = text();
                          template_effect(($02, $1) => set_text(text_8, `${$02 ?? ""}, ${$1 ?? ""}`), [
                            () => (get(feedback), untrack(() => get(feedback).data.sibling_model_ids.slice(0, 2).join(", "))),
                            () => ($i18n(), get(feedback), untrack(() => $i18n().t("and {{COUNT}} more", { COUNT: get(feedback).data.sibling_model_ids.length - 2 })))
                          ]);
                          append($$anchor7, text_8);
                        };
                        var alternate_8 = ($$anchor7) => {
                          var text_9 = text();
                          template_effect(($02) => set_text(text_9, $02), [
                            () => (get(feedback), untrack(() => get(feedback).data.sibling_model_ids.join(", ")))
                          ]);
                          append($$anchor7, text_9);
                        };
                        if_block(node_22, ($$render) => {
                          if (get(feedback), untrack(() => get(feedback).data.sibling_model_ids.length > 2)) $$render(consequent_11);
                          else $$render(alternate_8, false);
                        });
                      }
                      reset(div_17);
                      append($$anchor6, div_17);
                    },
                    $$slots: { default: true }
                  });
                }
                template_effect(() => set_text(text_7, (get(feedback), untrack(() => {
                  var _a;
                  return (_a = get(feedback).data) == null ? void 0 : _a.model_id;
                }))));
                append($$anchor5, fragment_10);
              };
              var alternate_9 = ($$anchor5) => {
                var div_18 = root_29();
                var text_10 = child(div_18, true);
                reset(div_18);
                template_effect(() => set_text(text_10, (get(feedback), untrack(() => {
                  var _a;
                  return (_a = get(feedback).data) == null ? void 0 : _a.model_id;
                }))));
                append($$anchor5, div_18);
              };
              if_block(node_20, ($$render) => {
                if (get(feedback), untrack(() => {
                  var _a;
                  return (_a = get(feedback).data) == null ? void 0 : _a.sibling_model_ids;
                })) $$render(consequent_12);
                else $$render(alternate_9, false);
              });
            }
            reset(div_15);
            reset(div_14);
            reset(td_1);
            var node_23 = sibling(td_1);
            {
              var consequent_16 = ($$anchor5) => {
                var td_2 = root_30();
                var div_19 = child(td_2);
                var node_24 = child(div_19);
                {
                  var consequent_13 = ($$anchor6) => {
                    {
                      let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Won"))));
                      Badge($$anchor6, {
                        type: "info",
                        get content() {
                          return get($0);
                        }
                      });
                    }
                  };
                  var alternate_11 = ($$anchor6) => {
                    var fragment_14 = comment();
                    var node_25 = first_child(fragment_14);
                    {
                      var consequent_14 = ($$anchor7) => {
                        {
                          let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Draw"))));
                          Badge($$anchor7, {
                            type: "muted",
                            get content() {
                              return get($0);
                            }
                          });
                        }
                      };
                      var alternate_10 = ($$anchor7) => {
                        var fragment_16 = comment();
                        var node_26 = first_child(fragment_16);
                        {
                          var consequent_15 = ($$anchor8) => {
                            {
                              let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Lost"))));
                              Badge($$anchor8, {
                                type: "error",
                                get content() {
                                  return get($0);
                                }
                              });
                            }
                          };
                          if_block(
                            node_26,
                            ($$render) => {
                              if (get(feedback), untrack(() => {
                                var _a, _b;
                                return ((_b = (_a = get(feedback)) == null ? void 0 : _a.data) == null ? void 0 : _b.rating.toString()) === "-1";
                              })) $$render(consequent_15);
                            },
                            true
                          );
                        }
                        append($$anchor7, fragment_16);
                      };
                      if_block(
                        node_25,
                        ($$render) => {
                          if (get(feedback), untrack(() => {
                            var _a, _b;
                            return ((_b = (_a = get(feedback)) == null ? void 0 : _a.data) == null ? void 0 : _b.rating.toString()) === "0";
                          })) $$render(consequent_14);
                          else $$render(alternate_10, false);
                        },
                        true
                      );
                    }
                    append($$anchor6, fragment_14);
                  };
                  if_block(node_24, ($$render) => {
                    if (get(feedback), untrack(() => {
                      var _a, _b;
                      return ((_b = (_a = get(feedback)) == null ? void 0 : _a.data) == null ? void 0 : _b.rating.toString()) === "1";
                    })) $$render(consequent_13);
                    else $$render(alternate_11, false);
                  });
                }
                reset(div_19);
                reset(td_2);
                append($$anchor5, td_2);
              };
              if_block(node_23, ($$render) => {
                if (get(feedback), untrack(() => {
                  var _a, _b;
                  return (_b = (_a = get(feedback)) == null ? void 0 : _a.data) == null ? void 0 : _b.rating;
                })) $$render(consequent_16);
              });
            }
            var td_3 = sibling(node_23);
            var text_11 = child(td_3, true);
            reset(td_3);
            var td_4 = sibling(td_3);
            var node_27 = child(td_4);
            FeedbackMenu(node_27, {
              $$events: {
                delete: (e) => {
                  deleteFeedbackHandler(get(feedback).id);
                }
              },
              children: ($$anchor5, $$slotProps) => {
                var button_1 = root_36();
                var node_28 = child(button_1);
                EllipsisHorizontal(node_28, {});
                reset(button_1);
                append($$anchor5, button_1);
              },
              $$slots: { default: true }
            });
            reset(td_4);
            reset(tr_1);
            template_effect(($0) => set_text(text_11, $0), [
              () => (deep_read_state(dayjs2), get(feedback), untrack(() => dayjs2(get(feedback).updated_at * 1e3).fromNow()))
            ]);
            event("click", td_4, (e) => e.stopPropagation());
            event("click", tr_1, () => openFeedbackModal(get(feedback)));
            append($$anchor4, tr_1);
          });
          reset(tbody);
          reset(table);
          template_effect(
            ($0, $1, $2, $3) => {
              set_text(text_3, `${$0 ?? ""} `);
              set_text(text_4, `${$1 ?? ""} `);
              set_text(text_5, `${$2 ?? ""} `);
              set_text(text_6, `${$3 ?? ""} `);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("User"))),
              () => ($i18n(), untrack(() => $i18n().t("Models"))),
              () => ($i18n(), untrack(() => $i18n().t("Result"))),
              () => ($i18n(), untrack(() => $i18n().t("Updated At")))
            ]
          );
          event("click", th, () => setSortKey("user"));
          event("click", th_1, () => setSortKey("model_id"));
          event("click", th_2, () => setSortKey("rating"));
          event("click", th_3, () => setSortKey("updated_at"));
          append($$anchor3, table);
        };
        if_block(node_6, ($$render) => {
          if (get(items), untrack(() => (get(items) ?? []).length === 0)) $$render(consequent_2);
          else $$render(alternate_12, false);
        });
      }
      reset(div_6);
      var node_29 = sibling(div_6, 2);
      {
        var consequent_17 = ($$anchor3) => {
          var div_20 = root_37();
          var div_21 = child(div_20);
          var text_12 = child(div_21, true);
          reset(div_21);
          var div_22 = sibling(div_21, 2);
          var node_30 = child(div_22);
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("To protect your privacy, only ratings, model IDs, tags, and metadata are shared from your feedback—your chat logs remain private and are not included."))));
            Tooltip(node_30, {
              get content() {
                return get($0);
              },
              children: ($$anchor4, $$slotProps) => {
                var button_2 = root_38();
                var div_23 = child(button_2);
                var text_13 = child(div_23, true);
                reset(div_23);
                var div_24 = sibling(div_23, 2);
                var node_31 = child(div_24);
                CloudArrowUp(node_31, { className: "size-3", strokeWidth: "3" });
                reset(div_24);
                reset(button_2);
                template_effect(($02) => set_text(text_13, $02), [
                  () => ($i18n(), untrack(() => $i18n().t("Share to Open WebUI Community")))
                ]);
                event("click", button_2, async () => {
                  shareHandler();
                });
                append($$anchor4, button_2);
              },
              $$slots: { default: true }
            });
          }
          reset(div_22);
          reset(div_20);
          template_effect(($0) => set_text(text_12, $0), [
            () => ($i18n(), untrack(() => $i18n().t("Help us create the best community leaderboard by sharing your feedback history!")))
          ]);
          append($$anchor3, div_20);
        };
        if_block(node_29, ($$render) => {
          if (get(total), $config(), untrack(() => {
            var _a, _b;
            return get(total) > 0 && ((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_community_sharing);
          })) $$render(consequent_17);
        });
      }
      var node_32 = sibling(node_29, 2);
      {
        var consequent_18 = ($$anchor3) => {
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
          if (get(total) > 30) $$render(consequent_18);
        });
      }
      template_effect(
        ($0) => {
          set_text(text$1, $0);
          set_text(text_1, get(total));
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Feedback History")))
        ]
      );
      append($$anchor2, fragment_1);
    };
    if_block(node_1, ($$render) => {
      if (get(items) === null || get(total) === null) $$render(consequent);
      else $$render(alternate_13, false);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_1 = from_html(`<div class="flex flex-col lg:flex-row w-full h-full pb-2 lg:space-x-4"><div id="users-tabs-container" class="tabs mx-[16px] lg:mx-0 lg:px-[16px] flex flex-row overflow-x-auto gap-2.5 max-w-full lg:gap-1 lg:flex-col lg:flex-none lg:w-50 dark:text-gray-200 text-sm font-medium text-left scrollbar-none"><button id="leaderboard"><div class=" self-center mr-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M4 2a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 4 14h8a1.5 1.5 0 0 0 1.5-1.5V6.621a1.5 1.5 0 0 0-.44-1.06L9.94 2.439A1.5 1.5 0 0 0 8.878 2H4Zm6 5.75a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-1.5 0v-3.5Zm-2.75 1.5a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-1.5 0v-2Zm-2 .75a.75.75 0 0 0-.75.75v.5a.75.75 0 0 0 1.5 0v-.5a.75.75 0 0 0-.75-.75Z" clip-rule="evenodd"></path></svg></div> <div class=" self-center"> </div></button> <button id="feedbacks"><div class=" self-center mr-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M5.25 2A2.25 2.25 0 0 0 3 4.25v9a.75.75 0 0 0 1.183.613l1.692-1.195 1.692 1.195a.75.75 0 0 0 .866 0l1.692-1.195 1.693 1.195A.75.75 0 0 0 13 13.25v-9A2.25 2.25 0 0 0 10.75 2h-5.5Zm3.03 3.28a.75.75 0 0 0-1.06-1.06L4.97 6.47a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97h1.315c.76 0 1.375.616 1.375 1.375a.75.75 0 0 0 1.5 0A2.875 2.875 0 0 0 8.625 6.25H7.311l.97-.97Z" clip-rule="evenodd"></path></svg></div> <div class=" self-center"> </div></button></div> <div class="flex-1 mt-1 lg:mt-0 px-[16px] lg:pr-[16px] lg:pl-0 overflow-y-scroll"><!></div></div>`);
function Evaluations($$anchor, $$props) {
  push($$props, false);
  const $page = () => store_get(page, "$page", $$stores);
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
  let loaded = mutable_source(false);
  let feedbacks2 = mutable_source([]);
  onMount(async () => {
    set(feedbacks2, await getAllFeedbacks(localStorage.token));
    set(loaded, true);
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
    set(selectedTab, ["leaderboard", "feedbacks"].includes(tabFromPath) ? tabFromPath : "leaderboard");
  });
  legacy_pre_effect(() => get(selectedTab), () => {
    if (get(selectedTab)) {
      scrollToTab(get(selectedTab));
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_2 = ($$anchor2) => {
      var div = root_1();
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
      var node_1 = child(div_4);
      {
        var consequent = ($$anchor3) => {
          Leaderboard($$anchor3, {
            get feedbacks() {
              return get(feedbacks2);
            }
          });
        };
        var alternate = ($$anchor3) => {
          var fragment_2 = comment();
          var node_2 = first_child(fragment_2);
          {
            var consequent_1 = ($$anchor4) => {
              Feedbacks($$anchor4, {});
            };
            if_block(
              node_2,
              ($$render) => {
                if (get(selectedTab) === "feedbacks") $$render(consequent_1);
              },
              true
            );
          }
          append($$anchor3, fragment_2);
        };
        if_block(node_1, ($$render) => {
          if (get(selectedTab) === "leaderboard") $$render(consequent);
          else $$render(alternate, false);
        });
      }
      reset(div_4);
      reset(div);
      template_effect(
        ($0, $1) => {
          set_class(button, 1, `px-0.5 py-1 min-w-fit rounded-lg lg:flex-none flex text-right transition ${get(selectedTab) === "leaderboard" ? "" : " text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"}`);
          set_text(text2, $0);
          set_class(button_1, 1, `px-0.5 py-1 min-w-fit rounded-lg lg:flex-none flex text-right transition ${get(selectedTab) === "feedbacks" ? "" : " text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"}`);
          set_text(text_1, $1);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Leaderboard"))),
          () => ($i18n(), untrack(() => $i18n().t("Feedbacks")))
        ]
      );
      event("click", button, () => {
        goto("/admin/evaluations/leaderboard");
      });
      event("click", button_1, () => {
        goto("/admin/evaluations/feedbacks");
      });
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (get(loaded)) $$render(consequent_2);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  Evaluations as E
};
