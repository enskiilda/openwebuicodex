import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { aO as writable, aP as derived, bp as readonly, bc as setContext, g as getContext, p as push, l as legacy_pre_effect, i as deep_read_state, s as set, m as mutable_source, b as get, j as legacy_pre_effect_reset, f as first_child, a as pop, c as child, r as reset, A as effect, t as template_effect, u as untrack, aX as invalid_default_snippet, e as sibling, q as next, h as derived_safe_equal } from "./BxIY6ir7.js";
import { e as event, s as set_text } from "./cBADewWV.js";
import { c as comment, a as append, f as from_html, t as text } from "./CAbo1QWi.js";
import { e as each } from "./7_HZMPNF.js";
import { i as if_block } from "./BoSuMvtf.js";
import { l as legacy_rest_props, p as prop } from "./BRmGPDvq.js";
import { b as overridable, t as toWritableStores, o as omit, w as withGet, m as makeElement, h as createElHelpers, e as executeCallbacks, f as addMeltEventListener, l as isHTMLElement, k as kbd, i as createBitAttrs, r as removeUndefined, j as getOptionUpdater, a as action, c as createDispatcher } from "./C2A39Ney.js";
import { s as slot } from "./CZEGIGsR.js";
import { f as attribute_effect } from "./kXiCYuyj.js";
import { b as bind_this } from "./D16JuV5t.js";
import { i as init } from "./ByqEASoO.js";
import { a as store_get, s as setup_stores } from "./BvQ5O7-v.js";
import { C as ChevronLeft } from "./cSMfCVGw.js";
import { C as ChevronRight } from "./CS8GUXml.js";
function getPageItems({ page = 1, totalPages, siblingCount = 1 }) {
  const pageItems = [];
  const pagesToShow = /* @__PURE__ */ new Set([1, totalPages]);
  const firstItemWithSiblings = 3 + siblingCount;
  const lastItemWithSiblings = totalPages - 2 - siblingCount;
  if (firstItemWithSiblings > lastItemWithSiblings) {
    for (let p = 2; p <= totalPages - 1; p++) {
      pagesToShow.add(p);
    }
  } else if (page < firstItemWithSiblings) {
    for (let p = 2; p <= Math.min(firstItemWithSiblings, totalPages); p++) {
      pagesToShow.add(p);
    }
  } else if (page > lastItemWithSiblings) {
    for (let p = totalPages - 1; p >= Math.max(lastItemWithSiblings, 2); p--) {
      pagesToShow.add(p);
    }
  } else {
    for (let p = Math.max(page - siblingCount, 2); p <= Math.min(page + siblingCount, totalPages); p++) {
      pagesToShow.add(p);
    }
  }
  const addPage = (value) => {
    pageItems.push({ type: "page", value, key: `page-${value}` });
  };
  const addEllipsis = () => {
    pageItems.push({ type: "ellipsis", key: `ellipsis-${pageItems.length}` });
  };
  let lastNumber = 0;
  for (const page2 of Array.from(pagesToShow).sort((a, b) => a - b)) {
    if (page2 - lastNumber > 1) {
      addEllipsis();
    }
    addPage(page2);
    lastNumber = page2;
  }
  return pageItems;
}
const defaults = {
  perPage: 1,
  siblingCount: 1,
  defaultPage: 1
};
const { name, selector } = createElHelpers("pagination");
function createPagination(props) {
  const withDefaults = { ...defaults, ...props };
  const pageWritable = withDefaults.page ?? writable(withDefaults.defaultPage);
  const page = overridable(pageWritable, withDefaults == null ? void 0 : withDefaults.onPageChange);
  const options = toWritableStores(omit(withDefaults, "page", "onPageChange", "defaultPage"));
  const { perPage, siblingCount, count } = options;
  const totalPages = withGet.derived([count, perPage], ([$count, $perPage]) => {
    return Math.ceil($count / $perPage);
  });
  const range = derived([page, perPage, count], ([$page, $perPage, $count]) => {
    const start = ($page - 1) * $perPage;
    const end = Math.min(start + $perPage, $count);
    return { start, end };
  });
  const root2 = makeElement(name(), {
    returned: () => ({
      "data-scope": "pagination"
    })
  });
  const pages = derived([page, totalPages, siblingCount], ([$page, $totalPages, $siblingCount]) => {
    return getPageItems({ page: $page, totalPages: $totalPages, siblingCount: $siblingCount });
  });
  const keydown = (e) => {
    const thisEl = e.target;
    if (!isHTMLElement(thisEl))
      return;
    const rootEl = thisEl.closest('[data-scope="pagination"]');
    if (!isHTMLElement(rootEl))
      return;
    const triggers = Array.from(rootEl.querySelectorAll(selector("page"))).filter((el) => isHTMLElement(el));
    const prevButton2 = rootEl.querySelector(selector("prev"));
    const nextButton2 = rootEl.querySelector(selector("next"));
    if (isHTMLElement(prevButton2)) {
      triggers.unshift(prevButton2);
    }
    if (isHTMLElement(nextButton2)) {
      triggers.push(nextButton2);
    }
    const index = triggers.indexOf(thisEl);
    if (e.key === kbd.ARROW_LEFT && index !== 0) {
      e.preventDefault();
      triggers[index - 1].focus();
    } else if (e.key === kbd.ARROW_RIGHT && index !== triggers.length - 1) {
      e.preventDefault();
      triggers[index + 1].focus();
    } else if (e.key === kbd.HOME) {
      e.preventDefault();
      triggers[0].focus();
    } else if (e.key === kbd.END) {
      e.preventDefault();
      triggers[triggers.length - 1].focus();
    }
  };
  const pageTrigger = makeElement(name("page"), {
    stores: page,
    returned: ($page) => {
      return (pageItem) => {
        return {
          "aria-label": `Page ${pageItem.value}`,
          "data-value": pageItem.value,
          "data-selected": pageItem.value === $page ? "" : void 0
        };
      };
    },
    action: (node) => {
      const unsub = executeCallbacks(addMeltEventListener(node, "click", () => {
        const value = node.dataset.value;
        if (!value || Number.isNaN(+value))
          return;
        page.set(Number(value));
      }), addMeltEventListener(node, "keydown", keydown));
      return {
        destroy: unsub
      };
    }
  });
  const prevButton = makeElement(name("prev"), {
    stores: page,
    returned: ($page) => {
      return {
        "aria-label": "Previous",
        disabled: $page <= 1
      };
    },
    action: (node) => {
      const unsub = executeCallbacks(addMeltEventListener(node, "click", () => {
        page.update((p) => Math.max(p - 1, 1));
      }), addMeltEventListener(node, "keydown", keydown));
      return {
        destroy: unsub
      };
    }
  });
  const nextButton = makeElement(name("next"), {
    stores: [page, totalPages],
    returned: ([$page, $totalPages]) => {
      return {
        "aria-label": "Next",
        disabled: $page >= $totalPages
      };
    },
    action: (node) => {
      const unsub = executeCallbacks(addMeltEventListener(node, "click", () => {
        const $totalPages = totalPages.get();
        page.update((p) => Math.min(p + 1, $totalPages));
      }), addMeltEventListener(node, "keydown", keydown));
      return {
        destroy: unsub
      };
    }
  });
  return {
    elements: {
      root: root2,
      pageTrigger,
      prevButton,
      nextButton
    },
    states: {
      range: readonly(range),
      page,
      pages: readonly(pages),
      totalPages: readonly(totalPages)
    },
    options
  };
}
function getPaginationData() {
  const NAME = "pagination";
  const PARTS = ["root", "prev-button", "next-button", "page"];
  return {
    NAME,
    PARTS
  };
}
function setCtx(props) {
  const { NAME, PARTS } = getPaginationData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const pagination = { ...createPagination(removeUndefined(props)), getAttrs };
  setContext(NAME, pagination);
  return {
    ...pagination,
    updateOption: getOptionUpdater(pagination.options)
  };
}
function getCtx() {
  const { NAME } = getPaginationData();
  return getContext(NAME);
}
var root_3 = from_html(`<div><!></div>`);
function Pagination($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const $$restProps = legacy_rest_props($$sanitized_props, [
    "count",
    "page",
    "onPageChange",
    "perPage",
    "siblingCount",
    "asChild",
    "el"
  ]);
  push($$props, false);
  const $root = () => store_get(root2, "$root", $$stores);
  const $pages = () => store_get(pages, "$pages", $$stores);
  const $range = () => store_get(range, "$range", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const builder = mutable_source();
  let count = prop($$props, "count", 8);
  let page = prop($$props, "page", 28, () => void 0);
  let onPageChange = prop($$props, "onPageChange", 24, () => void 0);
  let perPage = prop($$props, "perPage", 24, () => void 0);
  let siblingCount = prop($$props, "siblingCount", 24, () => void 0);
  let asChild = prop($$props, "asChild", 8, false);
  let el = prop($$props, "el", 28, () => void 0);
  const {
    elements: { root: root2 },
    states: { pages, range, page: localPage },
    getAttrs,
    updateOption
  } = setCtx({
    count: count(),
    perPage: perPage(),
    siblingCount: siblingCount(),
    defaultPage: page(),
    onPageChange: ({ next: next2 }) => {
      var _a;
      if (page() !== next2) {
        page(next2);
        (_a = onPageChange()) == null ? void 0 : _a(next2);
      }
      return next2;
    }
  });
  const attrs = getAttrs("root");
  legacy_pre_effect(() => deep_read_state(page()), () => {
    page() !== void 0 && localPage.set(page());
  });
  legacy_pre_effect(() => $root(), () => {
    set(builder, $root());
  });
  legacy_pre_effect(() => get(builder), () => {
    Object.assign(get(builder), attrs);
  });
  legacy_pre_effect(() => deep_read_state(count()), () => {
    updateOption("count", count());
  });
  legacy_pre_effect(() => deep_read_state(perPage()), () => {
    updateOption("perPage", perPage());
  });
  legacy_pre_effect(() => deep_read_state(siblingCount()), () => {
    updateOption("siblingCount", siblingCount());
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      slot(
        node_1,
        $$props,
        "default",
        {
          get builder() {
            return get(builder);
          },
          get pages() {
            return $pages();
          },
          get range() {
            return $range();
          }
        },
        null
      );
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var div = root_3();
      attribute_effect(div, () => ({ ...get(builder), ...$$restProps }));
      var node_2 = child(div);
      slot(
        node_2,
        $$props,
        "default",
        {
          get builder() {
            return get(builder);
          },
          get pages() {
            return $pages();
          },
          get range() {
            return $range();
          }
        },
        null
      );
      reset(div);
      bind_this(div, ($$value) => el($$value), () => el());
      action(div, ($$node) => {
        var _a, _b;
        return (_b = (_a = get(builder)).action) == null ? void 0 : _b.call(_a, $$node);
      });
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (asChild()) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_2$2 = from_html(`<button><!></button>`);
function Pagination_prev_button($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const $$restProps = legacy_rest_props($$sanitized_props, ["asChild", "el"]);
  push($$props, false);
  const $prevButton = () => store_get(prevButton, "$prevButton", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const builder = mutable_source();
  let asChild = prop($$props, "asChild", 24, () => void 0);
  let el = prop($$props, "el", 28, () => void 0);
  const { elements: { prevButton }, getAttrs } = getCtx();
  const attrs = getAttrs("prev-button");
  const dispatch = createDispatcher();
  legacy_pre_effect(() => $prevButton(), () => {
    set(builder, $prevButton());
  });
  legacy_pre_effect(() => get(builder), () => {
    Object.assign(get(builder), attrs);
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      slot(
        node_1,
        $$props,
        "default",
        {
          get builder() {
            return get(builder);
          }
        },
        null
      );
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var button = root_2$2();
      attribute_effect(button, () => ({ ...get(builder), type: "button", ...$$restProps }));
      var node_2 = child(button);
      slot(
        node_2,
        $$props,
        "default",
        {
          get builder() {
            return get(builder);
          }
        },
        null
      );
      reset(button);
      bind_this(button, ($$value) => el($$value), () => el());
      action(button, ($$node) => {
        var _a, _b;
        return (_b = (_a = get(builder)).action) == null ? void 0 : _b.call(_a, $$node);
      });
      effect(() => event("m-click", button, dispatch));
      append($$anchor2, button);
    };
    if_block(node, ($$render) => {
      if (asChild()) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_2$1 = from_html(`<button><!></button>`);
function Pagination_next_button($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const $$restProps = legacy_rest_props($$sanitized_props, ["asChild", "el"]);
  push($$props, false);
  const $nextButton = () => store_get(nextButton, "$nextButton", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const builder = mutable_source();
  let asChild = prop($$props, "asChild", 24, () => void 0);
  let el = prop($$props, "el", 28, () => void 0);
  const { elements: { nextButton }, getAttrs } = getCtx();
  const attrs = getAttrs("next-button");
  const dispatch = createDispatcher();
  legacy_pre_effect(() => $nextButton(), () => {
    set(builder, $nextButton());
  });
  legacy_pre_effect(() => get(builder), () => {
    Object.assign(get(builder), attrs);
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      slot(
        node_1,
        $$props,
        "default",
        {
          get builder() {
            return get(builder);
          }
        },
        null
      );
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var button = root_2$1();
      attribute_effect(button, () => ({ ...get(builder), type: "button", ...$$restProps }));
      var node_2 = child(button);
      slot(
        node_2,
        $$props,
        "default",
        {
          get builder() {
            return get(builder);
          }
        },
        null
      );
      reset(button);
      bind_this(button, ($$value) => el($$value), () => el());
      action(button, ($$node) => {
        var _a, _b;
        return (_b = (_a = get(builder)).action) == null ? void 0 : _b.call(_a, $$node);
      });
      effect(() => event("m-click", button, dispatch));
      append($$anchor2, button);
    };
    if_block(node, ($$render) => {
      if (asChild()) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_2 = from_html(`<button><!></button>`);
function Pagination_page($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const $$restProps = legacy_rest_props($$sanitized_props, ["asChild", "page", "el"]);
  push($$props, false);
  const $pageTrigger = () => store_get(pageTrigger, "$pageTrigger", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const builder = mutable_source();
  let asChild = prop($$props, "asChild", 24, () => void 0);
  let page = prop($$props, "page", 8);
  let el = prop($$props, "el", 28, () => void 0);
  const { elements: { pageTrigger }, getAttrs } = getCtx();
  const attrs = getAttrs("page");
  const dispatch = createDispatcher();
  legacy_pre_effect(() => ($pageTrigger(), deep_read_state(page())), () => {
    set(builder, $pageTrigger()(page()));
  });
  legacy_pre_effect(() => get(builder), () => {
    Object.assign(get(builder), attrs);
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      slot(
        node_1,
        $$props,
        "default",
        {
          get builder() {
            return get(builder);
          }
        },
        null
      );
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var button = root_2();
      attribute_effect(button, () => ({ type: "button", ...get(builder), ...$$restProps }));
      var node_2 = child(button);
      slot(
        node_2,
        $$props,
        "default",
        {
          get builder() {
            return get(builder);
          }
        },
        ($$anchor3) => {
          var text$1 = text();
          template_effect(() => set_text(text$1, (deep_read_state(page()), untrack(() => page().value))));
          append($$anchor3, text$1);
        }
      );
      reset(button);
      bind_this(button, ($$value) => el($$value), () => el());
      action(button, ($$node) => {
        var _a, _b;
        return (_b = (_a = get(builder)).action) == null ? void 0 : _b.call(_a, $$node);
      });
      effect(() => event("m-click", button, dispatch));
      append($$anchor2, button);
    };
    if_block(node, ($$render) => {
      if (asChild()) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_4 = from_html(`<div class="text-sm font-medium text-foreground-alt">...</div>`);
var root_1 = from_html(`<div class="my-2 flex items-center"><!> <div class="flex items-center gap-2.5"></div> <!></div>`);
var root = from_html(`<div class="flex justify-center"><!></div>`);
function Pagination_1($$anchor, $$props) {
  let page = prop($$props, "page", 12, 0);
  let count = prop($$props, "count", 8, 0);
  let perPage = prop($$props, "perPage", 8, 20);
  var div = root();
  var node = child(div);
  Pagination(node, {
    get count() {
      return count();
    },
    get perPage() {
      return perPage();
    },
    get page() {
      return page();
    },
    set page($$value) {
      page($$value);
    },
    children: invalid_default_snippet,
    $$slots: {
      default: ($$anchor2, $$slotProps) => {
        const pages = derived_safe_equal(() => $$slotProps.pages);
        var div_1 = root_1();
        var node_1 = child(div_1);
        Pagination_prev_button(node_1, {
          class: "mr-[25px] inline-flex size-8 items-center justify-center rounded-[9px] bg-transparent hover:bg-gray-50 dark:hover:bg-gray-850 active:scale-98 disabled:cursor-not-allowed disabled:text-gray-400 dark:disabled:text-gray-700 hover:disabled:bg-transparent dark:hover:disabled:bg-transparent",
          children: ($$anchor3, $$slotProps2) => {
            ChevronLeft($$anchor3, { className: "size-4", strokeWidth: "2" });
          },
          $$slots: { default: true }
        });
        var div_2 = sibling(node_1, 2);
        each(div_2, 5, () => get(pages), (page2) => page2.key, ($$anchor3, page2, $$index, $$array) => {
          var fragment_1 = comment();
          var node_2 = first_child(fragment_1);
          {
            var consequent = ($$anchor4) => {
              var div_3 = root_4();
              append($$anchor4, div_3);
            };
            var alternate = ($$anchor4) => {
              Pagination_page($$anchor4, {
                get page() {
                  return get(page2);
                },
                class: "inline-flex size-8 items-center justify-center rounded-[9px] bg-transparent hover:bg-gray-50 dark:hover:bg-gray-850 text-sm font-medium hover:bg-dark-10 active:scale-98 disabled:cursor-not-allowed disabled:opacity-50 hover:disabled:bg-transparent data-selected:bg-gray-50 data-selected:text-gray-700 data-selected:hover:bg-gray-100 dark:data-selected:bg-gray-850 dark:data-selected:text-gray-50 dark:data-selected:hover:bg-gray-800 transition",
                children: ($$anchor5, $$slotProps2) => {
                  next();
                  var text$1 = text();
                  template_effect(() => set_text(text$1, (get(page2), untrack(() => get(page2).value))));
                  append($$anchor5, text$1);
                },
                $$slots: { default: true }
              });
            };
            if_block(node_2, ($$render) => {
              if (get(page2), untrack(() => get(page2).type === "ellipsis")) $$render(consequent);
              else $$render(alternate, false);
            });
          }
          append($$anchor3, fragment_1);
        });
        reset(div_2);
        var node_3 = sibling(div_2, 2);
        Pagination_next_button(node_3, {
          class: "ml-[25px]  inline-flex size-8 items-center justify-center rounded-[9px] bg-transparent hover:bg-gray-50 dark:hover:bg-gray-850 active:scale-98 disabled:cursor-not-allowed disabled:text-gray-400 dark:disabled:text-gray-700 hover:disabled:bg-transparent dark:hover:disabled:bg-transparent",
          children: ($$anchor3, $$slotProps2) => {
            ChevronRight($$anchor3, { className: "size-4", strokeWidth: "2" });
          },
          $$slots: { default: true }
        });
        reset(div_1);
        append($$anchor2, div_1);
      }
    },
    $$legacy: true
  });
  reset(div);
  append($$anchor, div);
}
export {
  Pagination_1 as P
};
