import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { ay as onDestroy, aO as writable, aP as derived, Y as get, o as onMount, bc as setContext, br as hasContext, g as getContext, p as push, l as legacy_pre_effect, j as legacy_pre_effect_reset, a as pop, i as deep_read_state, c as child, s as set, m as mutable_source, b as get$1, r as reset, A as effect, t as template_effect, e as sibling, u as untrack, aE as invalidate_inner_signals, h as derived_safe_equal, aF as mutate, f as first_child, k as tick, aG as remove_textarea_child } from "./BxIY6ir7.js";
import { f as from_html, a as append, b as from_svg, c as comment } from "./CAbo1QWi.js";
import { s as slot } from "./CZEGIGsR.js";
import { f as attribute_effect, a as set_attribute, s as set_class, c as clsx, g as set_selected, d as bind_select_value, r as remove_input_defaults } from "./kXiCYuyj.js";
import { b as bind_this } from "./D16JuV5t.js";
import { i as init } from "./ByqEASoO.js";
import { l as legacy_rest_props, p as prop } from "./BRmGPDvq.js";
import { a as store_get, s as setup_stores } from "./BvQ5O7-v.js";
import { e as event, s as set_text } from "./cBADewWV.js";
import { $ as nanoid, a as action } from "./C2A39Ney.js";
import { e as each, i as index } from "./7_HZMPNF.js";
import { i as if_block } from "./BoSuMvtf.js";
import { c as bind_checked, b as bind_value } from "./DVLuwGai.js";
import { p as preventDefault } from "./CGgk3ROl.js";
import { E as folders, a as models, p as prompts, k as knowledge } from "./2Yg1sHDo.js";
import { t as toast } from "./BccDN__m.js";
import { J as isYoutubeUrl, K as isValidHttpUrl } from "./Bh-hrM1w.js";
import { X as XMark } from "./CUUSX84-.js";
import { M as Modal } from "./DF6V1elH.js";
import { S as Spinner } from "./CtnI4RVL.js";
import { M as MapSelector } from "./BTKKWNOf.js";
import { c as createClassComponent } from "./CBn9uhCc.js";
import { t as tippy, T as Tooltip } from "./BHXWufQb.js";
import { b as bind_prop } from "./B81XwWpr.js";
import { g as getPrompts } from "./BukVi0LS.js";
import { g as getKnowledgeBases } from "./C_BzFfir.js";
import { F as Fuse } from "./AFl3itOE.js";
import { d as dayjs2, r as relativeTime } from "./OO7lCI-F.js";
import { D as Database, b as Folder, c as DocumentPage } from "./P5gA3V2-.js";
import { G as GlobeAlt } from "./C7Mz867p.js";
import { a as WEBUI_API_BASE_URL } from "./DQ9UxF7k.js";
function safeOnDestroy(fn) {
  try {
    onDestroy(fn);
  } catch {
    return fn();
  }
}
function derivedWithUnsubscribe(stores, fn) {
  let unsubscribers = [];
  const onUnsubscribe = (cb) => {
    unsubscribers.push(cb);
  };
  const unsubscribe = () => {
    unsubscribers.forEach((fn2) => fn2());
    unsubscribers = [];
  };
  const derivedStore = derived(stores, ($storeValues) => {
    unsubscribe();
    return fn($storeValues, onUnsubscribe);
  });
  safeOnDestroy(unsubscribe);
  const subscribe = (...args) => {
    const unsub = derivedStore.subscribe(...args);
    return () => {
      unsub();
      unsubscribe();
    };
  };
  return {
    ...derivedStore,
    subscribe
  };
}
function clientEffect(stores, fn) {
  if (!isBrowser)
    return () => {
    };
  const unsub = derivedWithUnsubscribe(stores, (stores2, onUnsubscribe) => {
    return {
      stores: stores2,
      onUnsubscribe
    };
  }).subscribe(({ stores: stores2, onUnsubscribe }) => {
    const returned = fn(stores2);
    if (returned) {
      onUnsubscribe(returned);
    }
  });
  safeOnDestroy(unsub);
  return unsub;
}
function toWritableStores(properties) {
  const result = {};
  Object.keys(properties).forEach((key) => {
    const propertyKey = key;
    const value = properties[propertyKey];
    result[propertyKey] = writable(value);
  });
  return result;
}
function getOptionUpdater(options) {
  return function(key, value) {
    if (value === void 0)
      return;
    const store = options[key];
    if (store) {
      store.set(value);
    }
  };
}
function styleToString(style) {
  return Object.keys(style).reduce((str, key) => {
    if (style[key] === void 0)
      return str;
    return str + `${key}:${style[key]};`;
  }, "");
}
let currentState = null;
let element = null;
function getCursorStyle(state) {
  switch (state) {
    case "horizontal":
      return "ew-resize";
    case "horizontal-max":
      return "w-resize";
    case "horizontal-min":
      return "e-resize";
    case "vertical":
      return "ns-resize";
    case "vertical-max":
      return "n-resize";
    case "vertical-min":
      return "s-resize";
  }
}
function resetGlobalCursorStyle() {
  if (element === null)
    return;
  document.head.removeChild(element);
  currentState = null;
  element = null;
}
function setGlobalCursorStyle(state) {
  if (currentState === state)
    return;
  currentState = state;
  const style = getCursorStyle(state);
  if (element === null) {
    element = document.createElement("style");
    document.head.appendChild(element);
  }
  element.innerHTML = `*{cursor: ${style}!important;}`;
}
function computePaneFlexBoxStyle({ defaultSize, dragState, layout, paneData, paneIndex, precision = 3 }) {
  const size = layout[paneIndex];
  let flexGrow;
  if (size == null) {
    flexGrow = defaultSize ?? "1";
  } else if (paneData.length === 1) {
    flexGrow = "1";
  } else {
    flexGrow = size.toPrecision(precision);
  }
  return styleToString({
    "flex-basis": 0,
    "flex-grow": flexGrow,
    "flex-shrink": 1,
    // Without this, pane sizes may be unintentionally overridden by their content
    overflow: "hidden",
    // Disable pointer events inside of a pane during resize
    // This avoid edge cases like nested iframes
    "pointer-events": dragState !== null ? "none" : void 0
  });
}
function calculateAriaValues({ layout, panesArray, pivotIndices }) {
  let currentMinSize = 0;
  let currentMaxSize = 100;
  let totalMinSize = 0;
  let totalMaxSize = 0;
  const firstIndex = pivotIndices[0];
  for (let i = 0; i < panesArray.length; i++) {
    const { constraints } = panesArray[i];
    const { maxSize = 100, minSize = 0 } = constraints;
    if (i === firstIndex) {
      currentMinSize = minSize;
      currentMaxSize = maxSize;
    } else {
      totalMinSize += minSize;
      totalMaxSize += maxSize;
    }
  }
  const valueMax = Math.min(currentMaxSize, 100 - totalMinSize);
  const valueMin = Math.max(currentMinSize, 100 - totalMaxSize);
  const valueNow = layout[firstIndex];
  return {
    valueMax,
    valueMin,
    valueNow
  };
}
function generateId(idFromProps = null) {
  if (idFromProps == null)
    return nanoid(10);
  return idFromProps;
}
const LOCAL_STORAGE_DEBOUNCE_INTERVAL = 100;
const PRECISION = 10;
function initializeStorage(storageObject) {
  try {
    if (typeof localStorage === "undefined") {
      throw new Error("localStorage is not supported in this environment");
    }
    storageObject.getItem = (name) => localStorage.getItem(name);
    storageObject.setItem = (name, value) => localStorage.setItem(name, value);
  } catch (err) {
    console.error(err);
    storageObject.getItem = () => null;
    storageObject.setItem = () => {
    };
  }
}
function getPaneGroupKey(autoSaveId) {
  return `paneforge:${autoSaveId}`;
}
function getPaneKey(panes) {
  const sortedPaneIds = panes.map((pane) => {
    const { constraints, id, idIsFromProps, order } = pane;
    return idIsFromProps ? id : order ? `${order}:${JSON.stringify(constraints)}` : JSON.stringify(constraints);
  }).sort().join(",");
  return sortedPaneIds;
}
function loadSerializedPaneGroupState(autoSaveId, storage) {
  try {
    const paneGroupKey = getPaneGroupKey(autoSaveId);
    const serialized = storage.getItem(paneGroupKey);
    const parsed = JSON.parse(serialized || "");
    if (typeof parsed === "object" && parsed !== null) {
      return parsed;
    }
  } catch {
  }
  return null;
}
function loadPaneGroupState(autoSaveId, panes, storage) {
  const state = loadSerializedPaneGroupState(autoSaveId, storage) || {};
  const paneKey = getPaneKey(panes);
  return state[paneKey] || null;
}
function savePaneGroupState(autoSaveId, panes, paneSizesBeforeCollapse, sizes, storage) {
  const paneGroupKey = getPaneGroupKey(autoSaveId);
  const paneKey = getPaneKey(panes);
  const state = loadSerializedPaneGroupState(autoSaveId, storage) || {};
  state[paneKey] = {
    expandToSizes: Object.fromEntries(paneSizesBeforeCollapse.entries()),
    layout: sizes
  };
  try {
    storage.setItem(paneGroupKey, JSON.stringify(state));
  } catch (error) {
    console.error(error);
  }
}
const debounceMap = {};
function debounce(callback, durationMs = 10) {
  let timeoutId = null;
  const callable = (...args) => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callback(...args);
    }, durationMs);
  };
  return callable;
}
function updateStorageValues({ autoSaveId, layout, storage, paneDataArrayStore, paneSizeBeforeCollapseStore }) {
  const $paneDataArray = get(paneDataArrayStore);
  if (layout.length === 0 || layout.length !== $paneDataArray.length)
    return;
  let debouncedSave = debounceMap[autoSaveId];
  if (debouncedSave == null) {
    debouncedSave = debounce(savePaneGroupState, LOCAL_STORAGE_DEBOUNCE_INTERVAL);
    debounceMap[autoSaveId] = debouncedSave;
  }
  const clonedPaneDataArray = [...$paneDataArray];
  const $paneSizeBeforeCollapse = get(paneSizeBeforeCollapseStore);
  const clonedPaneSizesBeforeCollapse = new Map($paneSizeBeforeCollapse);
  debouncedSave(autoSaveId, clonedPaneDataArray, clonedPaneSizesBeforeCollapse, layout, storage);
}
function removeUndefined(obj) {
  const result = {};
  for (const key in obj) {
    const value = obj[key];
    if (value !== void 0) {
      result[key] = value;
    }
  }
  return result;
}
function chain(...callbacks) {
  return (...args) => {
    for (const callback of callbacks) {
      if (typeof callback === "function") {
        callback(...args);
      }
    }
  };
}
function addEventListener(target, event2, handler, options) {
  const events = Array.isArray(event2) ? event2 : [event2];
  events.forEach((_event) => target.addEventListener(_event, handler, options));
  return () => {
    events.forEach((_event) => target.removeEventListener(_event, handler, options));
  };
}
function areNumbersAlmostEqual(actual, expected, fractionDigits = PRECISION) {
  return compareNumbersWithTolerance(actual, expected, fractionDigits) === 0;
}
function compareNumbersWithTolerance(actual, expected, fractionDigits = PRECISION) {
  const roundedActual = roundTo(actual, fractionDigits);
  const roundedExpected = roundTo(expected, fractionDigits);
  return Math.sign(roundedActual - roundedExpected);
}
function areArraysEqual(arrA, arrB) {
  if (arrA.length !== arrB.length)
    return false;
  for (let index2 = 0; index2 < arrA.length; index2++) {
    if (arrA[index2] !== arrB[index2])
      return false;
  }
  return true;
}
function roundTo(value, decimals) {
  return parseFloat(value.toFixed(decimals));
}
function assert(expectedCondition, message = "Assertion failed!") {
  if (!expectedCondition) {
    console.error(message);
    throw Error(message);
  }
}
function resizePane({ paneConstraints: paneConstraintsArray, paneIndex, initialSize }) {
  const paneConstraints = paneConstraintsArray[paneIndex];
  assert(paneConstraints != null, "Pane constraints should not be null.");
  const { collapsedSize = 0, collapsible, maxSize = 100, minSize = 0 } = paneConstraints;
  let newSize = initialSize;
  if (compareNumbersWithTolerance(newSize, minSize) < 0) {
    newSize = getAdjustedSizeForCollapsible(newSize, collapsible, collapsedSize, minSize);
  }
  newSize = Math.min(maxSize, newSize);
  return parseFloat(newSize.toFixed(PRECISION));
}
function getAdjustedSizeForCollapsible(size, collapsible, collapsedSize, minSize) {
  if (!collapsible)
    return minSize;
  const halfwayPoint = (collapsedSize + minSize) / 2;
  return compareNumbersWithTolerance(size, halfwayPoint) < 0 ? collapsedSize : minSize;
}
function adjustLayoutByDelta({ delta, layout: prevLayout, paneConstraints: paneConstraintsArray, pivotIndices, trigger }) {
  if (areNumbersAlmostEqual(delta, 0))
    return prevLayout;
  const nextLayout = [...prevLayout];
  const [firstPivotIndex, secondPivotIndex] = pivotIndices;
  let deltaApplied = 0;
  {
    if (trigger === "keyboard") {
      {
        const index2 = delta < 0 ? secondPivotIndex : firstPivotIndex;
        const paneConstraints = paneConstraintsArray[index2];
        assert(paneConstraints);
        if (paneConstraints.collapsible) {
          const prevSize = prevLayout[index2];
          assert(prevSize != null);
          const paneConstraints2 = paneConstraintsArray[index2];
          assert(paneConstraints2);
          const { collapsedSize = 0, minSize = 0 } = paneConstraints2;
          if (areNumbersAlmostEqual(prevSize, collapsedSize)) {
            const localDelta = minSize - prevSize;
            if (compareNumbersWithTolerance(localDelta, Math.abs(delta)) > 0) {
              delta = delta < 0 ? 0 - localDelta : localDelta;
            }
          }
        }
      }
      {
        const index2 = delta < 0 ? firstPivotIndex : secondPivotIndex;
        const paneConstraints = paneConstraintsArray[index2];
        assert(paneConstraints);
        const { collapsible } = paneConstraints;
        if (collapsible) {
          const prevSize = prevLayout[index2];
          assert(prevSize != null);
          const paneConstraints2 = paneConstraintsArray[index2];
          assert(paneConstraints2);
          const { collapsedSize = 0, minSize = 0 } = paneConstraints2;
          if (areNumbersAlmostEqual(prevSize, minSize)) {
            const localDelta = prevSize - collapsedSize;
            if (compareNumbersWithTolerance(localDelta, Math.abs(delta)) > 0) {
              delta = delta < 0 ? 0 - localDelta : localDelta;
            }
          }
        }
      }
    }
  }
  {
    const increment = delta < 0 ? 1 : -1;
    let index2 = delta < 0 ? secondPivotIndex : firstPivotIndex;
    let maxAvailableDelta = 0;
    while (true) {
      const prevSize = prevLayout[index2];
      assert(prevSize != null);
      const maxSafeSize = resizePane({
        paneConstraints: paneConstraintsArray,
        paneIndex: index2,
        initialSize: 100
      });
      const delta2 = maxSafeSize - prevSize;
      maxAvailableDelta += delta2;
      index2 += increment;
      if (index2 < 0 || index2 >= paneConstraintsArray.length) {
        break;
      }
    }
    const minAbsDelta = Math.min(Math.abs(delta), Math.abs(maxAvailableDelta));
    delta = delta < 0 ? 0 - minAbsDelta : minAbsDelta;
  }
  {
    const pivotIndex = delta < 0 ? firstPivotIndex : secondPivotIndex;
    let index2 = pivotIndex;
    while (index2 >= 0 && index2 < paneConstraintsArray.length) {
      const deltaRemaining = Math.abs(delta) - Math.abs(deltaApplied);
      const prevSize = prevLayout[index2];
      assert(prevSize != null);
      const unsafeSize = prevSize - deltaRemaining;
      const safeSize = resizePane({
        paneConstraints: paneConstraintsArray,
        paneIndex: index2,
        initialSize: unsafeSize
      });
      if (!areNumbersAlmostEqual(prevSize, safeSize)) {
        deltaApplied += prevSize - safeSize;
        nextLayout[index2] = safeSize;
        if (deltaApplied.toPrecision(3).localeCompare(Math.abs(delta).toPrecision(3), void 0, {
          numeric: true
        }) >= 0) {
          break;
        }
      }
      if (delta < 0) {
        index2--;
      } else {
        index2++;
      }
    }
  }
  if (areNumbersAlmostEqual(deltaApplied, 0)) {
    return prevLayout;
  }
  {
    const pivotIndex = delta < 0 ? secondPivotIndex : firstPivotIndex;
    const prevSize = prevLayout[pivotIndex];
    assert(prevSize != null);
    const unsafeSize = prevSize + deltaApplied;
    const safeSize = resizePane({
      paneConstraints: paneConstraintsArray,
      paneIndex: pivotIndex,
      initialSize: unsafeSize
    });
    nextLayout[pivotIndex] = safeSize;
    if (!areNumbersAlmostEqual(safeSize, unsafeSize)) {
      let deltaRemaining = unsafeSize - safeSize;
      const pivotIndex2 = delta < 0 ? secondPivotIndex : firstPivotIndex;
      let index2 = pivotIndex2;
      while (index2 >= 0 && index2 < paneConstraintsArray.length) {
        const prevSize2 = nextLayout[index2];
        assert(prevSize2 != null);
        const unsafeSize2 = prevSize2 + deltaRemaining;
        const safeSize2 = resizePane({
          paneConstraints: paneConstraintsArray,
          paneIndex: index2,
          initialSize: unsafeSize2
        });
        if (!areNumbersAlmostEqual(prevSize2, safeSize2)) {
          deltaRemaining -= safeSize2 - prevSize2;
          nextLayout[index2] = safeSize2;
        }
        if (areNumbersAlmostEqual(deltaRemaining, 0))
          break;
        delta > 0 ? index2-- : index2++;
      }
    }
  }
  const totalSize = nextLayout.reduce((total, size) => size + total, 0);
  if (!areNumbersAlmostEqual(totalSize, 100))
    return prevLayout;
  return nextLayout;
}
const isBrowser = typeof document !== "undefined";
function isHTMLElement(element2) {
  return element2 instanceof HTMLElement;
}
function isKeyDown(event2) {
  return event2.type === "keydown";
}
function isMouseEvent(event2) {
  return event2.type.startsWith("mouse");
}
function isTouchEvent(event2) {
  return event2.type.startsWith("touch");
}
const defaultStorage = {
  getItem: (name) => {
    initializeStorage(defaultStorage);
    return defaultStorage.getItem(name);
  },
  setItem: (name, value) => {
    initializeStorage(defaultStorage);
    defaultStorage.setItem(name, value);
  }
};
const defaultProps = {
  id: null,
  onLayout: null,
  keyboardResizeBy: null,
  autoSaveId: null,
  direction: "horizontal",
  storage: defaultStorage
};
function createPaneForge(props) {
  const withDefaults = {
    ...defaultProps,
    ...removeUndefined(props)
  };
  const options = toWritableStores(withDefaults);
  const { autoSaveId, direction, keyboardResizeBy, storage, onLayout } = options;
  const groupId = writable(generateId());
  const dragState = writable(null);
  const layout = writable([]);
  const paneDataArray = writable([]);
  const paneDataArrayChanged = writable(false);
  const paneIdToLastNotifiedSizeMap = writable({});
  const paneSizeBeforeCollapseMap = writable(/* @__PURE__ */ new Map());
  const prevDelta = writable(0);
  clientEffect([groupId, layout, paneDataArray], ([$groupId, $layout, $paneDataArray]) => {
    const unsub = updateResizeHandleAriaValues({
      groupId: $groupId,
      layout: $layout,
      paneDataArray: $paneDataArray
    });
    return unsub;
  });
  onMount(() => {
    const unsub = setResizeHandlerEventListeners();
    return unsub;
  });
  clientEffect([autoSaveId, layout, storage], ([$autoSaveId, $layout, $storage]) => {
    if (!$autoSaveId)
      return;
    updateStorageValues({
      autoSaveId: $autoSaveId,
      layout: $layout,
      storage: $storage,
      paneDataArrayStore: paneDataArray,
      paneSizeBeforeCollapseStore: paneSizeBeforeCollapseMap
    });
  });
  function collapsePane(paneData) {
    const $prevLayout = get(layout);
    const $paneDataArray = get(paneDataArray);
    if (!paneData.constraints.collapsible)
      return;
    const paneConstraintsArray = $paneDataArray.map((paneData2) => paneData2.constraints);
    const { collapsedSize = 0, paneSize, pivotIndices } = paneDataHelper($paneDataArray, paneData, $prevLayout);
    assert(paneSize != null);
    if (paneSize === collapsedSize)
      return;
    paneSizeBeforeCollapseMap.update((curr) => {
      curr.set(paneData.id, paneSize);
      return curr;
    });
    const isLastPane = findPaneDataIndex($paneDataArray, paneData) === $paneDataArray.length - 1;
    const delta = isLastPane ? paneSize - collapsedSize : collapsedSize - paneSize;
    const nextLayout = adjustLayoutByDelta({
      delta,
      layout: $prevLayout,
      paneConstraints: paneConstraintsArray,
      pivotIndices,
      trigger: "imperative-api"
    });
    if (areArraysEqual($prevLayout, nextLayout))
      return;
    layout.set(nextLayout);
    const $onLayout = get(onLayout);
    if ($onLayout) {
      $onLayout(nextLayout);
    }
    callPaneCallbacks($paneDataArray, nextLayout, get(paneIdToLastNotifiedSizeMap));
  }
  function getPaneSize(paneData) {
    const $layout = get(layout);
    const $paneDataArray = get(paneDataArray);
    const { paneSize } = paneDataHelper($paneDataArray, paneData, $layout);
    return paneSize;
  }
  const getPaneStyle = derived([paneDataArray, layout, dragState], ([$paneDataArray, $layout, $dragState]) => {
    return (paneData, defaultSize) => {
      const paneIndex = findPaneDataIndex($paneDataArray, paneData);
      return computePaneFlexBoxStyle({
        defaultSize,
        dragState: $dragState,
        layout: $layout,
        paneData: $paneDataArray,
        paneIndex
      });
    };
  });
  function isPaneExpanded(paneData) {
    const $paneDataArray = get(paneDataArray);
    const $layout = get(layout);
    const { collapsedSize = 0, collapsible, paneSize } = paneDataHelper($paneDataArray, paneData, $layout);
    return !collapsible || paneSize > collapsedSize;
  }
  function registerPane(paneData) {
    paneDataArray.update((curr) => {
      const newArr = [...curr, paneData];
      newArr.sort((paneA, paneB) => {
        const orderA = paneA.order;
        const orderB = paneB.order;
        if (orderA == null && orderB == null) {
          return 0;
        } else if (orderA == null) {
          return -1;
        } else if (orderB == null) {
          return 1;
        } else {
          return orderA - orderB;
        }
      });
      return newArr;
    });
    paneDataArrayChanged.set(true);
  }
  clientEffect([paneDataArrayChanged], ([$paneDataArrayChanged]) => {
    if (!$paneDataArrayChanged)
      return;
    paneDataArrayChanged.set(false);
    const $autoSaveId = get(autoSaveId);
    const $storage = get(storage);
    const $prevLayout = get(layout);
    const $paneDataArray = get(paneDataArray);
    let unsafeLayout = null;
    if ($autoSaveId) {
      const state = loadPaneGroupState($autoSaveId, $paneDataArray, $storage);
      if (state) {
        paneSizeBeforeCollapseMap.set(new Map(Object.entries(state.expandToSizes)));
        unsafeLayout = state.layout;
      }
    }
    if (unsafeLayout == null) {
      unsafeLayout = getUnsafeDefaultLayout({
        paneDataArray: $paneDataArray
      });
    }
    const nextLayout = validatePaneGroupLayout({
      layout: unsafeLayout,
      paneConstraints: $paneDataArray.map((paneData) => paneData.constraints)
    });
    if (areArraysEqual($prevLayout, nextLayout))
      return;
    layout.set(nextLayout);
    const $onLayout = get(onLayout);
    if ($onLayout) {
      $onLayout(nextLayout);
    }
    callPaneCallbacks($paneDataArray, nextLayout, get(paneIdToLastNotifiedSizeMap));
  });
  function registerResizeHandle(dragHandleId) {
    return function resizeHandler(event2) {
      event2.preventDefault();
      const $direction = get(direction);
      const $dragState = get(dragState);
      const $groupId = get(groupId);
      const $keyboardResizeBy = get(keyboardResizeBy);
      const $prevLayout = get(layout);
      const $paneDataArray = get(paneDataArray);
      const { initialLayout } = $dragState ?? {};
      const pivotIndices = getPivotIndices($groupId, dragHandleId);
      let delta = getDeltaPercentage(event2, dragHandleId, $direction, $dragState, $keyboardResizeBy);
      if (delta === 0)
        return;
      const isHorizontal = $direction === "horizontal";
      if (document.dir === "rtl" && isHorizontal) {
        delta = -delta;
      }
      const paneConstraints = $paneDataArray.map((paneData) => paneData.constraints);
      const nextLayout = adjustLayoutByDelta({
        delta,
        layout: initialLayout ?? $prevLayout,
        paneConstraints,
        pivotIndices,
        trigger: isKeyDown(event2) ? "keyboard" : "mouse-or-touch"
      });
      const layoutChanged = !areArraysEqual($prevLayout, nextLayout);
      if (isMouseEvent(event2) || isTouchEvent(event2)) {
        const $prevDelta = get(prevDelta);
        if ($prevDelta != delta) {
          prevDelta.set(delta);
          if (!layoutChanged) {
            if (isHorizontal) {
              setGlobalCursorStyle(delta < 0 ? "horizontal-min" : "horizontal-max");
            } else {
              setGlobalCursorStyle(delta < 0 ? "vertical-min" : "vertical-max");
            }
          } else {
            setGlobalCursorStyle(isHorizontal ? "horizontal" : "vertical");
          }
        }
      }
      if (layoutChanged) {
        layout.set(nextLayout);
        const $onLayout = get(onLayout);
        if ($onLayout) {
          $onLayout(nextLayout);
        }
        callPaneCallbacks($paneDataArray, nextLayout, get(paneIdToLastNotifiedSizeMap));
      }
    };
  }
  function resizePane2(paneData, unsafePaneSize) {
    const $prevLayout = get(layout);
    const $paneDataArray = get(paneDataArray);
    const paneConstraintsArr = $paneDataArray.map((paneData2) => paneData2.constraints);
    const { paneSize, pivotIndices } = paneDataHelper($paneDataArray, paneData, $prevLayout);
    assert(paneSize != null);
    const isLastPane = findPaneDataIndex($paneDataArray, paneData) === $paneDataArray.length - 1;
    const delta = isLastPane ? paneSize - unsafePaneSize : unsafePaneSize - paneSize;
    const nextLayout = adjustLayoutByDelta({
      delta,
      layout: $prevLayout,
      paneConstraints: paneConstraintsArr,
      pivotIndices,
      trigger: "imperative-api"
    });
    if (areArraysEqual($prevLayout, nextLayout))
      return;
    layout.set(nextLayout);
    const $onLayout = get(onLayout);
    $onLayout == null ? void 0 : $onLayout(nextLayout);
    callPaneCallbacks($paneDataArray, nextLayout, get(paneIdToLastNotifiedSizeMap));
  }
  function startDragging(dragHandleId, event2) {
    const $direction = get(direction);
    const $layout = get(layout);
    const handleElement = getResizeHandleElement(dragHandleId);
    assert(handleElement);
    const initialCursorPosition = getResizeEventCursorPosition($direction, event2);
    dragState.set({
      dragHandleId,
      dragHandleRect: handleElement.getBoundingClientRect(),
      initialCursorPosition,
      initialLayout: $layout
    });
  }
  function stopDragging() {
    resetGlobalCursorStyle();
    dragState.set(null);
  }
  function unregisterPane(paneData) {
    const $paneDataArray = get(paneDataArray);
    const index2 = findPaneDataIndex($paneDataArray, paneData);
    if (index2 < 0)
      return;
    paneDataArray.update((curr) => {
      curr.splice(index2, 1);
      paneIdToLastNotifiedSizeMap.update((curr2) => {
        delete curr2[paneData.id];
        return curr2;
      });
      paneDataArrayChanged.set(true);
      return curr;
    });
  }
  function isPaneCollapsed(paneData) {
    const $paneDataArray = get(paneDataArray);
    const $layout = get(layout);
    const { collapsedSize = 0, collapsible, paneSize } = paneDataHelper($paneDataArray, paneData, $layout);
    return collapsible === true && paneSize === collapsedSize;
  }
  function expandPane(paneData) {
    const $prevLayout = get(layout);
    const $paneDataArray = get(paneDataArray);
    if (!paneData.constraints.collapsible)
      return;
    const paneConstraintsArray = $paneDataArray.map((paneData2) => paneData2.constraints);
    const { collapsedSize = 0, paneSize, minSize = 0, pivotIndices } = paneDataHelper($paneDataArray, paneData, $prevLayout);
    if (paneSize !== collapsedSize)
      return;
    const prevPaneSize = get(paneSizeBeforeCollapseMap).get(paneData.id);
    const baseSize = prevPaneSize != null && prevPaneSize >= minSize ? prevPaneSize : minSize;
    const isLastPane = findPaneDataIndex($paneDataArray, paneData) === $paneDataArray.length - 1;
    const delta = isLastPane ? paneSize - baseSize : baseSize - paneSize;
    const nextLayout = adjustLayoutByDelta({
      delta,
      layout: $prevLayout,
      paneConstraints: paneConstraintsArray,
      pivotIndices,
      trigger: "imperative-api"
    });
    if (areArraysEqual($prevLayout, nextLayout))
      return;
    layout.set(nextLayout);
    const $onLayout = get(onLayout);
    $onLayout == null ? void 0 : $onLayout(nextLayout);
    callPaneCallbacks($paneDataArray, nextLayout, get(paneIdToLastNotifiedSizeMap));
  }
  const paneGroupStyle = derived([direction], ([$direction]) => {
    return styleToString({
      display: "flex",
      "flex-direction": $direction === "horizontal" ? "row" : "column",
      height: "100%",
      overflow: "hidden",
      width: "100%"
    });
  });
  const paneGroupSelectors = derived([direction, groupId], ([$direction, $groupId]) => {
    return {
      "data-pane-group": "",
      "data-direction": $direction,
      "data-pane-group-id": $groupId
    };
  });
  const paneGroupAttrs = derived([paneGroupStyle, paneGroupSelectors], ([$style, $selectors]) => {
    return {
      style: $style,
      ...$selectors
    };
  });
  function setResizeHandlerEventListeners() {
    const $groupId = get(groupId);
    const handles = getResizeHandleElementsForGroup($groupId);
    const unsubHandlers = handles.map((handle) => {
      const handleId = handle.getAttribute("data-pane-resizer-id");
      if (!handleId)
        return noop;
      const [idBefore, idAfter] = getResizeHandlePaneIds($groupId, handleId, get(paneDataArray));
      if (idBefore == null || idAfter == null)
        return noop;
      const onKeydown = (e) => {
        if (e.defaultPrevented || e.key !== "Enter")
          return;
        e.preventDefault();
        const $paneDataArray = get(paneDataArray);
        const index2 = $paneDataArray.findIndex((paneData2) => paneData2.id === idBefore);
        if (index2 < 0)
          return;
        const paneData = $paneDataArray[index2];
        assert(paneData);
        const $layout = get(layout);
        const size = $layout[index2];
        const { collapsedSize = 0, collapsible, minSize = 0 } = paneData.constraints;
        if (!(size != null && collapsible))
          return;
        const nextLayout = adjustLayoutByDelta({
          delta: areNumbersAlmostEqual(size, collapsedSize) ? minSize - size : collapsedSize - size,
          layout: $layout,
          paneConstraints: $paneDataArray.map((paneData2) => paneData2.constraints),
          pivotIndices: getPivotIndices($groupId, handleId),
          trigger: "keyboard"
        });
        if ($layout !== nextLayout) {
          layout.set(nextLayout);
        }
      };
      const unsubListener = addEventListener(handle, "keydown", onKeydown);
      return () => {
        unsubListener();
      };
    });
    return () => {
      unsubHandlers.forEach((unsub) => unsub());
    };
  }
  function setLayout(newLayout) {
    layout.set(newLayout);
  }
  function getLayout() {
    return get(layout);
  }
  return {
    methods: {
      collapsePane,
      expandPane,
      getSize: getPaneSize,
      getPaneStyle,
      isCollapsed: isPaneCollapsed,
      isExpanded: isPaneExpanded,
      registerPane,
      registerResizeHandle,
      resizePane: resizePane2,
      startDragging,
      stopDragging,
      unregisterPane,
      setLayout,
      getLayout
    },
    states: {
      direction,
      dragState,
      groupId,
      paneGroupAttrs,
      paneGroupSelectors,
      paneGroupStyle,
      layout
    },
    options
  };
}
function updateResizeHandleAriaValues({ groupId, layout, paneDataArray }) {
  const resizeHandleElements = getResizeHandleElementsForGroup(groupId);
  for (let index2 = 0; index2 < paneDataArray.length - 1; index2++) {
    const { valueMax, valueMin, valueNow } = calculateAriaValues({
      layout,
      panesArray: paneDataArray,
      pivotIndices: [index2, index2 + 1]
    });
    const resizeHandleEl = resizeHandleElements[index2];
    if (isHTMLElement(resizeHandleEl)) {
      const paneData = paneDataArray[index2];
      resizeHandleEl.setAttribute("aria-controls", paneData.id);
      resizeHandleEl.setAttribute("aria-valuemax", "" + Math.round(valueMax));
      resizeHandleEl.setAttribute("aria-valuemin", "" + Math.round(valueMin));
      resizeHandleEl.setAttribute("aria-valuenow", valueNow != null ? "" + Math.round(valueNow) : "");
    }
  }
  return () => {
    resizeHandleElements.forEach((resizeHandleElement) => {
      resizeHandleElement.removeAttribute("aria-controls");
      resizeHandleElement.removeAttribute("aria-valuemax");
      resizeHandleElement.removeAttribute("aria-valuemin");
      resizeHandleElement.removeAttribute("aria-valuenow");
    });
  };
}
function getResizeHandleElementsForGroup(groupId) {
  if (!isBrowser)
    return [];
  return Array.from(document.querySelectorAll(`[data-pane-resizer-id][data-pane-group-id="${groupId}"]`));
}
function getPaneGroupElement(id) {
  if (!isBrowser)
    return null;
  const element2 = document.querySelector(`[data-pane-group][data-pane-group-id="${id}"]`);
  if (element2) {
    return element2;
  }
  return null;
}
function noop() {
}
function getResizeHandlePaneIds(groupId, handleId, panesArray) {
  var _a, _b;
  const handle = getResizeHandleElement(handleId);
  const handles = getResizeHandleElementsForGroup(groupId);
  const index2 = handle ? handles.indexOf(handle) : -1;
  const idBefore = ((_a = panesArray[index2]) == null ? void 0 : _a.id) ?? null;
  const idAfter = ((_b = panesArray[index2 + 1]) == null ? void 0 : _b.id) ?? null;
  return [idBefore, idAfter];
}
function getResizeHandleElement(id) {
  if (!isBrowser)
    return null;
  const element2 = document.querySelector(`[data-pane-resizer-id="${id}"]`);
  if (element2) {
    return element2;
  }
  return null;
}
function getResizeHandleElementIndex(groupId, id) {
  if (!isBrowser)
    return null;
  const handles = getResizeHandleElementsForGroup(groupId);
  const index2 = handles.findIndex((handle) => handle.getAttribute("data-pane-resizer-id") === id);
  return index2 ?? null;
}
function getPivotIndices(groupId, dragHandleId) {
  const index2 = getResizeHandleElementIndex(groupId, dragHandleId);
  return index2 != null ? [index2, index2 + 1] : [-1, -1];
}
function paneDataHelper(paneDataArray, paneData, layout) {
  const paneConstraintsArray = paneDataArray.map((paneData2) => paneData2.constraints);
  const paneIndex = findPaneDataIndex(paneDataArray, paneData);
  const paneConstraints = paneConstraintsArray[paneIndex];
  const isLastPane = paneIndex === paneDataArray.length - 1;
  const pivotIndices = isLastPane ? [paneIndex - 1, paneIndex] : [paneIndex, paneIndex + 1];
  const paneSize = layout[paneIndex];
  return {
    ...paneConstraints,
    paneSize,
    pivotIndices
  };
}
function findPaneDataIndex(paneDataArray, paneData) {
  return paneDataArray.findIndex((prevPaneData) => prevPaneData.id === paneData.id);
}
function callPaneCallbacks(paneArray, layout, paneIdToLastNotifiedSizeMap) {
  layout.forEach((size, index2) => {
    const paneData = paneArray[index2];
    assert(paneData);
    const { callbacks, constraints, id: paneId } = paneData;
    const { collapsedSize = 0, collapsible } = constraints;
    const lastNotifiedSize = paneIdToLastNotifiedSizeMap[paneId];
    if (!(lastNotifiedSize == null || size !== lastNotifiedSize))
      return;
    paneIdToLastNotifiedSizeMap[paneId] = size;
    const { onCollapse, onExpand, onResize } = callbacks;
    onResize == null ? void 0 : onResize(size, lastNotifiedSize);
    if (collapsible && (onCollapse || onExpand)) {
      if (onExpand && (lastNotifiedSize == null || lastNotifiedSize === collapsedSize) && size !== collapsedSize) {
        onExpand();
      }
      if (onCollapse && (lastNotifiedSize == null || lastNotifiedSize !== collapsedSize) && size === collapsedSize) {
        onCollapse();
      }
    }
  });
}
function getUnsafeDefaultLayout({ paneDataArray }) {
  const layout = Array(paneDataArray.length);
  const paneConstraintsArray = paneDataArray.map((paneData) => paneData.constraints);
  let numPanesWithSizes = 0;
  let remainingSize = 100;
  for (let index2 = 0; index2 < paneDataArray.length; index2++) {
    const paneConstraints = paneConstraintsArray[index2];
    assert(paneConstraints);
    const { defaultSize } = paneConstraints;
    if (defaultSize != null) {
      numPanesWithSizes++;
      layout[index2] = defaultSize;
      remainingSize -= defaultSize;
    }
  }
  for (let index2 = 0; index2 < paneDataArray.length; index2++) {
    const paneConstraints = paneConstraintsArray[index2];
    assert(paneConstraints);
    const { defaultSize } = paneConstraints;
    if (defaultSize != null) {
      continue;
    }
    const numRemainingPanes = paneDataArray.length - numPanesWithSizes;
    const size = remainingSize / numRemainingPanes;
    numPanesWithSizes++;
    layout[index2] = size;
    remainingSize -= size;
  }
  return layout;
}
function validatePaneGroupLayout({ layout: prevLayout, paneConstraints }) {
  const nextLayout = [...prevLayout];
  const nextLayoutTotalSize = nextLayout.reduce((accumulated, current) => accumulated + current, 0);
  if (nextLayout.length !== paneConstraints.length) {
    throw Error(`Invalid ${paneConstraints.length} pane layout: ${nextLayout.map((size) => `${size}%`).join(", ")}`);
  } else if (!areNumbersAlmostEqual(nextLayoutTotalSize, 100)) {
    for (let index2 = 0; index2 < paneConstraints.length; index2++) {
      const unsafeSize = nextLayout[index2];
      assert(unsafeSize != null);
      const safeSize = 100 / nextLayoutTotalSize * unsafeSize;
      nextLayout[index2] = safeSize;
    }
  }
  let remainingSize = 0;
  for (let index2 = 0; index2 < paneConstraints.length; index2++) {
    const unsafeSize = nextLayout[index2];
    assert(unsafeSize != null);
    const safeSize = resizePane({
      paneConstraints,
      paneIndex: index2,
      initialSize: unsafeSize
    });
    if (unsafeSize != safeSize) {
      remainingSize += unsafeSize - safeSize;
      nextLayout[index2] = safeSize;
    }
  }
  if (!areNumbersAlmostEqual(remainingSize, 0)) {
    for (let index2 = 0; index2 < paneConstraints.length; index2++) {
      const prevSize = nextLayout[index2];
      assert(prevSize != null);
      const unsafeSize = prevSize + remainingSize;
      const safeSize = resizePane({
        paneConstraints,
        paneIndex: index2,
        initialSize: unsafeSize
      });
      if (prevSize !== safeSize) {
        remainingSize -= safeSize - prevSize;
        nextLayout[index2] = safeSize;
        if (areNumbersAlmostEqual(remainingSize, 0)) {
          break;
        }
      }
    }
  }
  return nextLayout;
}
function getDeltaPercentage(e, dragHandleId, dir, initialDragState, keyboardResizeBy) {
  if (isKeyDown(e)) {
    const isHorizontal = dir === "horizontal";
    let delta = 0;
    if (e.shiftKey) {
      delta = 100;
    } else if (keyboardResizeBy != null) {
      delta = keyboardResizeBy;
    } else {
      delta = 10;
    }
    let movement = 0;
    switch (e.key) {
      case "ArrowDown":
        movement = isHorizontal ? 0 : delta;
        break;
      case "ArrowLeft":
        movement = isHorizontal ? -delta : 0;
        break;
      case "ArrowRight":
        movement = isHorizontal ? delta : 0;
        break;
      case "ArrowUp":
        movement = isHorizontal ? 0 : -delta;
        break;
      case "End":
        movement = 100;
        break;
      case "Home":
        movement = -100;
        break;
    }
    return movement;
  } else {
    if (initialDragState == null)
      return 0;
    return getDragOffsetPercentage(e, dragHandleId, dir, initialDragState);
  }
}
function getDragOffsetPercentage(e, dragHandleId, dir, initialDragState) {
  const isHorizontal = dir === "horizontal";
  const handleElement = getResizeHandleElement(dragHandleId);
  assert(handleElement);
  const groupId = handleElement.getAttribute("data-pane-group-id");
  assert(groupId);
  const { initialCursorPosition } = initialDragState;
  const cursorPosition = getResizeEventCursorPosition(dir, e);
  const groupElement = getPaneGroupElement(groupId);
  assert(groupElement);
  const groupRect = groupElement.getBoundingClientRect();
  const groupSizeInPixels = isHorizontal ? groupRect.width : groupRect.height;
  const offsetPixels = cursorPosition - initialCursorPosition;
  const offsetPercentage = offsetPixels / groupSizeInPixels * 100;
  return offsetPercentage;
}
function getResizeEventCursorPosition(dir, e) {
  const isHorizontal = dir === "horizontal";
  if (isMouseEvent(e)) {
    return isHorizontal ? e.clientX : e.clientY;
  } else if (isTouchEvent(e)) {
    const firstTouch = e.touches[0];
    assert(firstTouch);
    return isHorizontal ? firstTouch.screenX : firstTouch.screenY;
  } else {
    throw Error(`Unsupported event type "${e.type}"`);
  }
}
const PF_GROUP_CTX = Symbol("PF_GROUP_CTX");
function setCtx(props) {
  const paneForge = createPaneForge(removeUndefined(props));
  const updateOption = getOptionUpdater(paneForge.options);
  const ctxValue = { ...paneForge, updateOption };
  setContext(PF_GROUP_CTX, ctxValue);
  return ctxValue;
}
function getCtx(componentName) {
  if (!hasContext(PF_GROUP_CTX)) {
    throw new Error(`${componentName} components must be rendered with a <PaneGroup> container`);
  }
  return getContext(PF_GROUP_CTX);
}
var root$9 = from_html(`<div><!></div>`);
function Pane_group($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const $$restProps = legacy_rest_props($$sanitized_props, [
    "autoSaveId",
    "direction",
    "id",
    "keyboardResizeBy",
    "onLayoutChange",
    "storage",
    "el",
    "paneGroup",
    "style"
  ]);
  push($$props, false);
  const $groupId = () => store_get(groupId, "$groupId", $$stores);
  const $paneGroupStyle = () => store_get(paneGroupStyle, "$paneGroupStyle", $$stores);
  const $paneGroupSelectors = () => store_get(paneGroupSelectors, "$paneGroupSelectors", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const style = mutable_source();
  let autoSaveId = prop($$props, "autoSaveId", 8, null);
  let direction = prop($$props, "direction", 8);
  let id = prop($$props, "id", 8, null);
  let keyboardResizeBy = prop($$props, "keyboardResizeBy", 8, null);
  let onLayoutChange = prop($$props, "onLayoutChange", 8, null);
  let storage = prop($$props, "storage", 8, defaultStorage);
  let el = prop($$props, "el", 28, () => void 0);
  let paneGroup = prop($$props, "paneGroup", 28, () => void 0);
  let styleFromProps = prop($$props, "style", 24, () => void 0);
  const {
    states: { paneGroupStyle, paneGroupSelectors, groupId },
    methods: { setLayout, getLayout },
    updateOption
  } = setCtx({
    autoSaveId: autoSaveId(),
    direction: direction(),
    id: id(),
    keyboardResizeBy: keyboardResizeBy(),
    onLayout: onLayoutChange(),
    storage: storage()
  });
  paneGroup({ getLayout, setLayout, getId: () => $groupId() });
  legacy_pre_effect(() => deep_read_state(autoSaveId()), () => {
    updateOption("autoSaveId", autoSaveId());
  });
  legacy_pre_effect(() => deep_read_state(direction()), () => {
    updateOption("direction", direction());
  });
  legacy_pre_effect(() => deep_read_state(id()), () => {
    updateOption("id", id());
  });
  legacy_pre_effect(() => deep_read_state(keyboardResizeBy()), () => {
    updateOption("keyboardResizeBy", keyboardResizeBy());
  });
  legacy_pre_effect(() => deep_read_state(onLayoutChange()), () => {
    updateOption("onLayout", onLayoutChange());
  });
  legacy_pre_effect(() => deep_read_state(storage()), () => {
    updateOption("storage", storage());
  });
  legacy_pre_effect(() => ($paneGroupStyle(), deep_read_state(styleFromProps())), () => {
    set(style, $paneGroupStyle() + (styleFromProps() ?? ""));
  });
  legacy_pre_effect_reset();
  init();
  var div = root$9();
  attribute_effect(div, () => ({
    id: $groupId(),
    ...$paneGroupSelectors(),
    style: get$1(style),
    ...$$restProps
  }));
  var node = child(div);
  slot(node, $$props, "default", {}, null);
  reset(div);
  bind_this(div, ($$value) => el($$value), () => el());
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root$8 = from_html(`<div><!></div>`);
function Pane($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const $$restProps = legacy_rest_props($$sanitized_props, [
    "collapsedSize",
    "collapsible",
    "defaultSize",
    "maxSize",
    "minSize",
    "onCollapse",
    "onExpand",
    "onResize",
    "order",
    "el",
    "pane",
    "id",
    "style"
  ]);
  push($$props, false);
  const $getPaneStyle = () => store_get(getPaneStyle, "$getPaneStyle", $$stores);
  const $groupId = () => store_get(groupId, "$groupId", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const style = mutable_source();
  const attrs = mutable_source();
  let collapsedSize = prop($$props, "collapsedSize", 24, () => void 0);
  let collapsible = prop($$props, "collapsible", 24, () => void 0);
  let defaultSize = prop($$props, "defaultSize", 24, () => void 0);
  let maxSize = prop($$props, "maxSize", 24, () => void 0);
  let minSize = prop($$props, "minSize", 24, () => void 0);
  let onCollapse = prop($$props, "onCollapse", 24, () => void 0);
  let onExpand = prop($$props, "onExpand", 24, () => void 0);
  let onResize = prop($$props, "onResize", 24, () => void 0);
  let order = prop($$props, "order", 24, () => void 0);
  let el = prop($$props, "el", 28, () => void 0);
  let pane = prop($$props, "pane", 28, () => void 0);
  let idFromProps = prop($$props, "id", 24, () => void 0);
  let styleFromProps = prop($$props, "style", 24, () => void 0);
  const {
    methods: {
      getPaneStyle,
      registerPane,
      unregisterPane,
      collapsePane,
      expandPane,
      getSize,
      isCollapsed,
      isExpanded,
      resizePane: resizePane2
    },
    states: { groupId }
  } = getCtx("Pane");
  const paneId = generateId(idFromProps());
  let paneData = mutable_source();
  pane({
    collapse: () => {
      collapsePane(get$1(paneData));
    },
    expand: () => expandPane(get$1(paneData)),
    getSize: () => getSize(get$1(paneData)),
    isCollapsed: () => isCollapsed(get$1(paneData)),
    isExpanded: () => isExpanded(get$1(paneData)),
    resize: (size) => resizePane2(get$1(paneData), size),
    getId: () => paneId
  });
  onMount(() => {
    registerPane(get$1(paneData));
    return () => {
      unregisterPane(get$1(paneData));
    };
  });
  legacy_pre_effect(
    () => (deep_read_state(onCollapse()), deep_read_state(onExpand()), deep_read_state(onResize()), deep_read_state(collapsedSize()), deep_read_state(collapsible()), deep_read_state(defaultSize()), deep_read_state(maxSize()), deep_read_state(minSize()), deep_read_state(idFromProps()), deep_read_state(order())),
    () => {
      set(paneData, {
        callbacks: {
          onCollapse: onCollapse(),
          onExpand: onExpand(),
          onResize: onResize()
        },
        constraints: {
          collapsedSize: collapsedSize(),
          collapsible: collapsible(),
          defaultSize: defaultSize(),
          maxSize: maxSize(),
          minSize: minSize()
        },
        id: paneId,
        idIsFromProps: idFromProps() !== void 0,
        order: order()
      });
    }
  );
  legacy_pre_effect(
    () => ($getPaneStyle(), get$1(paneData), deep_read_state(defaultSize()), deep_read_state(styleFromProps())),
    () => {
      set(style, $getPaneStyle()(get$1(paneData), defaultSize()) + (styleFromProps() ?? ""));
    }
  );
  legacy_pre_effect(() => $groupId(), () => {
    set(attrs, {
      "data-pane": "",
      "data-pane-id": paneId,
      "data-pane-group-id": $groupId()
    });
  });
  legacy_pre_effect_reset();
  init();
  var div = root$8();
  attribute_effect(div, () => ({ style: get$1(style), ...get$1(attrs), ...$$restProps }));
  var node = child(div);
  slot(node, $$props, "default", {}, null);
  reset(div);
  bind_this(div, ($$value) => el($$value), () => el());
  append($$anchor, div);
  pop();
  $$cleanup();
}
function resizeHandleAction(node, params) {
  let unsub = () => {
  };
  function update(params2) {
    unsub();
    const { disabled, resizeHandler, isDragging, stopDragging, onDragging = void 0 } = params2;
    if (disabled || resizeHandler === null || !isDragging)
      return;
    const onMove = (event2) => {
      resizeHandler(event2);
    };
    const onMouseLeave = (event2) => {
      resizeHandler(event2);
    };
    const stopDraggingAndBlur = () => {
      node.blur();
      stopDragging();
      if (onDragging) {
        onDragging(false);
      }
    };
    unsub = chain(addEventListener(document.body, "contextmenu", stopDraggingAndBlur), addEventListener(document.body, "mousemove", onMove), addEventListener(document.body, "touchmove", onMove, { passive: false }), addEventListener(document.body, "mouseleave", onMouseLeave), addEventListener(window, "mouseup", stopDraggingAndBlur), addEventListener(window, "touchend", stopDraggingAndBlur));
  }
  update(params);
  return {
    update,
    onDestroy() {
      unsub();
    }
  };
}
var root$7 = from_html(`<div><!></div>`);
function Pane_resizer($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const $$restProps = legacy_rest_props($$sanitized_props, [
    "disabled",
    "onDraggingChange",
    "tabIndex",
    "el",
    "id",
    "style"
  ]);
  push($$props, false);
  const $dragState = () => store_get(dragState, "$dragState", $$stores);
  const $groupId = () => store_get(groupId, "$groupId", $$stores);
  const $direction = () => store_get(direction, "$direction", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const isDragging = mutable_source();
  const style = mutable_source();
  const attrs = mutable_source();
  let disabled = prop($$props, "disabled", 8, false);
  let onDraggingChange = prop($$props, "onDraggingChange", 24, () => void 0);
  let tabIndex = prop($$props, "tabIndex", 8, 0);
  let el = prop($$props, "el", 12, null);
  let idFromProps = prop($$props, "id", 24, () => void 0);
  let styleFromProps = prop($$props, "style", 24, () => void 0);
  const {
    methods: { registerResizeHandle, startDragging, stopDragging },
    states: { direction, dragState, groupId }
  } = getCtx("PaneResizer");
  const resizeHandleId = generateId(idFromProps());
  let isFocused = mutable_source(false);
  let resizeHandler = mutable_source(null);
  function stopDraggingAndBlur() {
    var _a;
    const element2 = el();
    if (!element2) return;
    element2.blur();
    stopDragging();
    (_a = onDraggingChange()) == null ? void 0 : _a(false);
  }
  onMount(() => {
    if (disabled()) {
      set(resizeHandler, null);
    } else {
      set(resizeHandler, registerResizeHandle(resizeHandleId));
    }
  });
  function handleKeydown(event2) {
    if (disabled() || !get$1(resizeHandler) || event2.defaultPrevented) return;
    const resizeKeys = [
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "End",
      "Home"
    ];
    if (resizeKeys.includes(event2.key)) {
      event2.preventDefault();
      get$1(resizeHandler)(event2);
      return;
    }
    if (event2.key !== "F6") return;
    event2.preventDefault();
    const handles = getResizeHandleElementsForGroup($groupId());
    const index2 = getResizeHandleElementIndex($groupId(), resizeHandleId);
    if (index2 === null) return;
    const nextIndex = event2.shiftKey ? index2 > 0 ? index2 - 1 : handles.length - 1 : index2 + 1 < handles.length ? index2 + 1 : 0;
    const nextHandle = handles[nextIndex];
    nextHandle.focus();
  }
  legacy_pre_effect(() => $dragState(), () => {
    var _a;
    set(isDragging, ((_a = $dragState()) == null ? void 0 : _a.dragHandleId) === resizeHandleId);
  });
  legacy_pre_effect(() => deep_read_state(disabled()), () => {
    if (disabled()) {
      set(resizeHandler, null);
    } else {
      set(resizeHandler, registerResizeHandle(resizeHandleId));
    }
  });
  legacy_pre_effect(
    () => ($direction(), deep_read_state(styleFromProps())),
    () => {
      set(style, styleToString({
        cursor: getCursorStyle($direction()),
        "touch-action": "none",
        "user-select": "none",
        "-webkit-user-select": "none",
        "-webkit-touch-callout": "none"
      }) + styleFromProps());
    }
  );
  legacy_pre_effect(
    () => ($direction(), $groupId(), get$1(isDragging), get$1(isFocused), deep_read_state(disabled())),
    () => {
      set(attrs, {
        "data-direction": $direction(),
        "data-pane-group-id": $groupId(),
        "data-active": get$1(isDragging) ? "pointer" : get$1(isFocused) ? "keyboard" : void 0,
        "data-enabled": !disabled(),
        "data-pane-resizer-id": resizeHandleId,
        "data-pane-resizer": ""
      });
    }
  );
  legacy_pre_effect_reset();
  init();
  var div = root$7();
  attribute_effect(div, () => ({
    role: "separator",
    style: get$1(style),
    tabindex: tabIndex(),
    ...get$1(attrs),
    ...$$restProps
  }));
  var node = child(div);
  slot(node, $$props, "default", {}, null);
  reset(div);
  bind_this(div, ($$value) => el($$value), () => el());
  action(div, ($$node, $$action_arg) => resizeHandleAction == null ? void 0 : resizeHandleAction($$node, $$action_arg), () => ({
    disabled: disabled(),
    resizeHandler: get$1(resizeHandler),
    stopDragging,
    isDragging: get$1(isDragging),
    onDragging: onDraggingChange()
  }));
  effect(() => event("keydown", div, handleKeydown));
  effect(() => event("blur", div, () => set(isFocused, false)));
  effect(() => event("focus", div, () => set(isFocused, true)));
  effect(() => event("mousedown", div, (e) => {
    var _a;
    e.preventDefault();
    startDragging(resizeHandleId, e);
    (_a = onDraggingChange()) == null ? void 0 : _a(true);
  }));
  effect(() => event("mouseup", div, stopDraggingAndBlur));
  effect(() => event("touchcancel", div, stopDraggingAndBlur));
  effect(() => event("touchend", div, stopDraggingAndBlur));
  effect(() => event("touchstart", div, (e) => {
    var _a;
    e.preventDefault();
    startDragging(resizeHandleId, e);
    (_a = onDraggingChange()) == null ? void 0 : _a(true);
  }));
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root$6 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M2 19V9C2 7.89543 2.89543 7 4 7H4.5C5.12951 7 5.72229 6.70361 6.1 6.2L8.32 3.24C8.43331 3.08892 8.61115 3 8.8 3H15.2C15.3889 3 15.5667 3.08892 15.68 3.24L17.9 6.2C18.2777 6.70361 18.8705 7 19.5 7H20C21.1046 7 22 7.89543 22 9V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19Z" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
function Camera($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$6();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root$5 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M21.4383 11.6622L12.2483 20.8522C11.1225 21.9781 9.59552 22.6106 8.00334 22.6106C6.41115 22.6106 4.88418 21.9781 3.75834 20.8522C2.63249 19.7264 2 18.1994 2 16.6072C2 15.015 2.63249 13.4881 3.75834 12.3622L12.9483 3.17222C13.6989 2.42166 14.7169 2 15.7783 2C16.8398 2 17.8578 2.42166 18.6083 3.17222C19.3589 3.92279 19.7806 4.94077 19.7806 6.00222C19.7806 7.06368 19.3589 8.08166 18.6083 8.83222L9.40834 18.0222C9.03306 18.3975 8.52406 18.6083 7.99334 18.6083C7.46261 18.6083 6.95362 18.3975 6.57834 18.0222C6.20306 17.6469 5.99222 17.138 5.99222 16.6072C5.99222 16.0765 6.20306 15.5675 6.57834 15.1922L15.0683 6.71222" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
function Clip($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$5();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root_4 = from_html(`<span class=" text-gray-500"> </span>`);
var root_6 = from_html(`<option disabled selected> </option>`);
var root_7$1 = from_html(`<option> </option>`);
var root_5 = from_html(`<select class="w-full rounded-lg py-2 px-4 text-sm dark:text-gray-300 dark:bg-gray-850 outline-hidden border border-gray-100 dark:border-gray-850"><!><!></select>`);
var root_9$1 = from_html(`<div class="flex items-center space-x-2"><div class="relative flex justify-center items-center gap-2"><input/> <label class="text-sm"> </label></div> <input type="text" class="flex-1 py-1 text-sm dark:text-gray-300 bg-transparent outline-hidden" autocomplete="off"/></div>`);
var root_11 = from_html(`<div class="flex items-center space-x-2"><div class="relative size-6"><input/></div> <input type="text" class="flex-1 py-2 text-sm dark:text-gray-300 bg-transparent outline-hidden" autocomplete="off"/></div>`);
var root_13$1 = from_html(`<input/>`);
var root_15 = from_html(`<input/>`);
var root_17 = from_html(`<input/>`);
var root_19 = from_html(`<input/>`);
var root_21 = from_html(`<input/>`);
var root_23 = from_html(`<div class="flex items-center space-x-2"><div class="relative flex justify-center items-center gap-2 flex-1"><input/></div> <input type="text" class=" py-1 text-sm dark:text-gray-300 bg-transparent outline-hidden text-right" autocomplete="off"/></div>`);
var root_25 = from_html(`<input/>`);
var root_27 = from_html(`<input/>`);
var root_29 = from_html(`<input/>`);
var root_31 = from_html(`<input/>`);
var root_33 = from_html(`<div class="flex flex-col items-center gap-1"><!> <input type="text" class=" w-full py-1 text-left text-sm dark:text-gray-300 bg-transparent outline-hidden" autocomplete="off"/></div>`);
var root_34 = from_html(`<textarea class="w-full rounded-lg py-2 px-4 text-sm dark:text-gray-300 dark:bg-gray-850 outline-hidden border border-gray-100 dark:border-gray-850" autocomplete="off"></textarea>`);
var root_3$3 = from_html(`<div class=" py-0.5 w-full justify-between"><div class="flex w-full justify-between mb-1.5"><div class=" self-center text-xs font-medium"> <!></div></div> <div class="flex mt-0.5 mb-0.5 space-x-2"><div class=" flex-1"><!></div></div></div>`);
var root_2 = from_html(`<div class="flex flex-col gap-1"></div>`);
var root_1$2 = from_html(`<div><div class=" flex justify-between dark:text-gray-300 px-5 pt-4 pb-2"><div class=" text-lg font-medium self-center"> </div> <button class="self-center"><!></button></div> <div class="flex flex-col md:flex-row w-full px-5 pb-4 md:space-x-4 dark:text-gray-200"><div class=" flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div class="px-1"><!></div> <div class="flex justify-end pt-3 text-sm font-medium"><button class="px-3.5 py-1.5 text-sm font-medium bg-white hover:bg-gray-100 text-black dark:bg-black dark:text-white dark:hover:bg-gray-900 transition rounded-full" type="button"> </button> <button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="submit"> </button></div></form></div></div></div>`);
function InputVariablesModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let variables = prop($$props, "variables", 24, () => ({}));
  let onSave = prop($$props, "onSave", 8, (e) => {
  });
  let loading = mutable_source(false);
  let variableValues = mutable_source({});
  const submitHandler = async () => {
    onSave()(get$1(variableValues));
    show(false);
  };
  const init$1 = async () => {
    var _a;
    set(loading, true);
    set(variableValues, {});
    for (const variable of Object.keys(variables())) {
      if (((_a = variables()[variable]) == null ? void 0 : _a.default) !== void 0) {
        mutate(variableValues, get$1(variableValues)[variable] = variables()[variable].default);
      } else {
        mutate(variableValues, get$1(variableValues)[variable] = "");
      }
    }
    set(loading, false);
    await tick();
    const firstInputElement = document.getElementById("input-variable-0");
    if (firstInputElement) {
      console.log("Focusing first input element:", firstInputElement);
      firstInputElement.focus();
    }
  };
  legacy_pre_effect(() => deep_read_state(show()), () => {
    if (show()) {
      init$1();
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
      var div = root_1$2();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var text = child(div_2, true);
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
        var consequent_16 = ($$anchor3) => {
          var div_6 = root_2();
          each(
            div_6,
            5,
            () => (deep_read_state(variables()), untrack(() => Object.keys(variables()))),
            index,
            ($$anchor4, variable, idx) => {
              const computed_const = derived_safe_equal(() => {
                const { type, ...variableAttributes } = (deep_read_state(variables()), get$1(variable), untrack(() => variables()[get$1(variable)] ?? {}));
                return { type, variableAttributes };
              });
              var div_7 = root_3$3();
              var div_8 = child(div_7);
              var div_9 = child(div_8);
              var text_1 = child(div_9);
              var node_2 = sibling(text_1);
              {
                var consequent = ($$anchor5) => {
                  var span = root_4();
                  var text_2 = child(span);
                  reset(span);
                  template_effect(($0) => set_text(text_2, `*${$0 ?? ""}`), [() => ($i18n(), untrack(() => $i18n().t("required")))]);
                  append($$anchor5, span);
                };
                if_block(node_2, ($$render) => {
                  if (deep_read_state(variables()), get$1(variable), untrack(() => {
                    var _a;
                    return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.required) ?? false;
                  })) $$render(consequent);
                });
              }
              reset(div_9);
              reset(div_8);
              var div_10 = sibling(div_8, 2);
              var div_11 = child(div_10);
              var node_3 = child(div_11);
              {
                var consequent_2 = ($$anchor5) => {
                  const options = derived_safe_equal(() => (deep_read_state(get$1(computed_const).variableAttributes), untrack(() => {
                    var _a;
                    return ((_a = get$1(computed_const).variableAttributes) == null ? void 0 : _a.options) ?? [];
                  })));
                  const placeholder = derived_safe_equal(() => (deep_read_state(get$1(computed_const).variableAttributes), untrack(() => {
                    var _a;
                    return ((_a = get$1(computed_const).variableAttributes) == null ? void 0 : _a.placeholder) ?? "";
                  })));
                  var select = root_5();
                  template_effect(() => {
                    get$1(variableValues);
                    invalidate_inner_signals(() => {
                      get$1(variable);
                      get$1(placeholder);
                      get$1(options);
                    });
                  });
                  set_attribute(select, "id", `input-variable-${idx}`);
                  var node_4 = child(select);
                  {
                    var consequent_1 = ($$anchor6) => {
                      var option_1 = root_6();
                      var text_3 = child(option_1, true);
                      reset(option_1);
                      option_1.value = option_1.__value = "";
                      template_effect(() => set_text(text_3, get$1(placeholder)));
                      append($$anchor6, option_1);
                    };
                    if_block(node_4, ($$render) => {
                      if (get$1(placeholder)) $$render(consequent_1);
                    });
                  }
                  var node_5 = sibling(node_4);
                  each(node_5, 1, () => get$1(options), index, ($$anchor6, option) => {
                    var option_2 = root_7$1();
                    var text_4 = child(option_2, true);
                    reset(option_2);
                    var option_2_value = {};
                    template_effect(() => {
                      set_selected(option_2, (get$1(option), get$1(variableValues), get$1(variable), untrack(() => get$1(option) === get$1(variableValues)[get$1(variable)])));
                      set_text(text_4, get$1(option));
                      if (option_2_value !== (option_2_value = get$1(option))) {
                        option_2.value = (option_2.__value = get$1(option)) ?? "";
                      }
                    });
                    append($$anchor6, option_2);
                  });
                  reset(select);
                  bind_select_value(select, () => get$1(variableValues)[get$1(variable)], ($$value) => mutate(variableValues, get$1(variableValues)[get$1(variable)] = $$value));
                  append($$anchor5, select);
                };
                var alternate_13 = ($$anchor5) => {
                  var fragment_1 = comment();
                  var node_6 = first_child(fragment_1);
                  {
                    var consequent_3 = ($$anchor6) => {
                      var div_12 = root_9$1();
                      var div_13 = child(div_12);
                      var input = child(div_13);
                      attribute_effect(
                        input,
                        () => ({
                          type: "checkbox",
                          class: "size-3.5 rounded cursor-pointer border border-gray-200 dark:border-gray-700",
                          id: `input-variable-${idx}`,
                          ...get$1(computed_const).variableAttributes
                        }),
                        void 0,
                        void 0,
                        void 0,
                        void 0,
                        true
                      );
                      var label = sibling(input, 2);
                      set_attribute(label, "for", `input-variable-${idx}`);
                      var text_5 = child(label, true);
                      reset(label);
                      reset(div_13);
                      var input_1 = sibling(div_13, 2);
                      remove_input_defaults(input_1);
                      reset(div_12);
                      template_effect(
                        ($0) => {
                          set_text(text_5, (deep_read_state(variables()), get$1(variable), untrack(() => {
                            var _a;
                            return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.label) ?? get$1(variable);
                          })));
                          set_attribute(input_1, "placeholder", $0);
                          input_1.required = (deep_read_state(variables()), get$1(variable), untrack(() => {
                            var _a;
                            return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.required) ?? false;
                          }));
                        },
                        [
                          () => ($i18n(), untrack(() => $i18n().t("Enter value (true/false)")))
                        ]
                      );
                      bind_checked(input, () => get$1(variableValues)[get$1(variable)], ($$value) => mutate(variableValues, get$1(variableValues)[get$1(variable)] = $$value));
                      bind_value(input_1, () => get$1(variableValues)[get$1(variable)], ($$value) => mutate(variableValues, get$1(variableValues)[get$1(variable)] = $$value));
                      append($$anchor6, div_12);
                    };
                    var alternate_12 = ($$anchor6) => {
                      var fragment_2 = comment();
                      var node_7 = first_child(fragment_2);
                      {
                        var consequent_4 = ($$anchor7) => {
                          var div_14 = root_11();
                          var div_15 = child(div_14);
                          var input_2 = child(div_15);
                          attribute_effect(
                            input_2,
                            () => ({
                              type: "color",
                              class: "size-6 rounded cursor-pointer border border-gray-200 dark:border-gray-700",
                              value: (get$1(variableValues), get$1(variable), untrack(() => get$1(variableValues)[get$1(variable)])),
                              id: `input-variable-${idx}`,
                              ...get$1(computed_const).variableAttributes
                            }),
                            void 0,
                            void 0,
                            void 0,
                            void 0,
                            true
                          );
                          reset(div_15);
                          var input_3 = sibling(div_15, 2);
                          remove_input_defaults(input_3);
                          reset(div_14);
                          template_effect(
                            ($0) => {
                              set_attribute(input_3, "placeholder", $0);
                              input_3.required = (deep_read_state(variables()), get$1(variable), untrack(() => {
                                var _a;
                                return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.required) ?? false;
                              }));
                            },
                            [
                              () => ($i18n(), untrack(() => $i18n().t("Enter hex color (e.g. #FF0000)")))
                            ]
                          );
                          event("input", input_2, (e) => {
                            mutate(variableValues, get$1(variableValues)[get$1(variable)] = e.target.value.toUpperCase());
                          });
                          bind_value(input_3, () => get$1(variableValues)[get$1(variable)], ($$value) => mutate(variableValues, get$1(variableValues)[get$1(variable)] = $$value));
                          append($$anchor7, div_14);
                        };
                        var alternate_11 = ($$anchor7) => {
                          var fragment_3 = comment();
                          var node_8 = first_child(fragment_3);
                          {
                            var consequent_5 = ($$anchor8) => {
                              var input_4 = root_13$1();
                              attribute_effect(
                                input_4,
                                () => ({
                                  type: "date",
                                  class: "w-full rounded-lg py-2 px-4 text-sm dark:text-gray-300 dark:bg-gray-850 outline-hidden border border-gray-100 dark:border-gray-850",
                                  placeholder: (deep_read_state(variables()), get$1(variable), untrack(() => {
                                    var _a;
                                    return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.placeholder) ?? "";
                                  })),
                                  autocomplete: "off",
                                  id: `input-variable-${idx}`,
                                  required: (deep_read_state(variables()), get$1(variable), untrack(() => {
                                    var _a;
                                    return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.required) ?? false;
                                  })),
                                  ...get$1(computed_const).variableAttributes
                                }),
                                void 0,
                                void 0,
                                void 0,
                                void 0,
                                true
                              );
                              bind_value(input_4, () => get$1(variableValues)[get$1(variable)], ($$value) => mutate(variableValues, get$1(variableValues)[get$1(variable)] = $$value));
                              append($$anchor8, input_4);
                            };
                            var alternate_10 = ($$anchor8) => {
                              var fragment_4 = comment();
                              var node_9 = first_child(fragment_4);
                              {
                                var consequent_6 = ($$anchor9) => {
                                  var input_5 = root_15();
                                  attribute_effect(
                                    input_5,
                                    () => ({
                                      type: "datetime-local",
                                      class: "w-full rounded-lg py-2 px-4 text-sm dark:text-gray-300 dark:bg-gray-850 outline-hidden border border-gray-100 dark:border-gray-850",
                                      placeholder: (deep_read_state(variables()), get$1(variable), untrack(() => {
                                        var _a;
                                        return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.placeholder) ?? "";
                                      })),
                                      autocomplete: "off",
                                      id: `input-variable-${idx}`,
                                      required: (deep_read_state(variables()), get$1(variable), untrack(() => {
                                        var _a;
                                        return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.required) ?? false;
                                      })),
                                      ...get$1(computed_const).variableAttributes
                                    }),
                                    void 0,
                                    void 0,
                                    void 0,
                                    void 0,
                                    true
                                  );
                                  bind_value(input_5, () => get$1(variableValues)[get$1(variable)], ($$value) => mutate(variableValues, get$1(variableValues)[get$1(variable)] = $$value));
                                  append($$anchor9, input_5);
                                };
                                var alternate_9 = ($$anchor9) => {
                                  var fragment_5 = comment();
                                  var node_10 = first_child(fragment_5);
                                  {
                                    var consequent_7 = ($$anchor10) => {
                                      var input_6 = root_17();
                                      attribute_effect(
                                        input_6,
                                        () => ({
                                          type: "email",
                                          class: "w-full rounded-lg py-2 px-4 text-sm dark:text-gray-300 dark:bg-gray-850 outline-hidden border border-gray-100 dark:border-gray-850",
                                          placeholder: (deep_read_state(variables()), get$1(variable), untrack(() => {
                                            var _a;
                                            return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.placeholder) ?? "";
                                          })),
                                          autocomplete: "off",
                                          id: `input-variable-${idx}`,
                                          required: (deep_read_state(variables()), get$1(variable), untrack(() => {
                                            var _a;
                                            return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.required) ?? false;
                                          })),
                                          ...get$1(computed_const).variableAttributes
                                        }),
                                        void 0,
                                        void 0,
                                        void 0,
                                        void 0,
                                        true
                                      );
                                      bind_value(input_6, () => get$1(variableValues)[get$1(variable)], ($$value) => mutate(variableValues, get$1(variableValues)[get$1(variable)] = $$value));
                                      append($$anchor10, input_6);
                                    };
                                    var alternate_8 = ($$anchor10) => {
                                      var fragment_6 = comment();
                                      var node_11 = first_child(fragment_6);
                                      {
                                        var consequent_8 = ($$anchor11) => {
                                          var input_7 = root_19();
                                          attribute_effect(
                                            input_7,
                                            () => ({
                                              type: "month",
                                              class: "w-full rounded-lg py-2 px-4 text-sm dark:text-gray-300 dark:bg-gray-850 outline-hidden border border-gray-100 dark:border-gray-850",
                                              placeholder: (deep_read_state(variables()), get$1(variable), untrack(() => {
                                                var _a;
                                                return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.placeholder) ?? "";
                                              })),
                                              autocomplete: "off",
                                              id: `input-variable-${idx}`,
                                              required: (deep_read_state(variables()), get$1(variable), untrack(() => {
                                                var _a;
                                                return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.required) ?? false;
                                              })),
                                              ...get$1(computed_const).variableAttributes
                                            }),
                                            void 0,
                                            void 0,
                                            void 0,
                                            void 0,
                                            true
                                          );
                                          bind_value(input_7, () => get$1(variableValues)[get$1(variable)], ($$value) => mutate(variableValues, get$1(variableValues)[get$1(variable)] = $$value));
                                          append($$anchor11, input_7);
                                        };
                                        var alternate_7 = ($$anchor11) => {
                                          var fragment_7 = comment();
                                          var node_12 = first_child(fragment_7);
                                          {
                                            var consequent_9 = ($$anchor12) => {
                                              var input_8 = root_21();
                                              attribute_effect(
                                                input_8,
                                                () => ({
                                                  type: "number",
                                                  class: "w-full rounded-lg py-2 px-4 text-sm dark:text-gray-300 dark:bg-gray-850 outline-hidden border border-gray-100 dark:border-gray-850",
                                                  placeholder: (deep_read_state(variables()), get$1(variable), untrack(() => {
                                                    var _a;
                                                    return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.placeholder) ?? "";
                                                  })),
                                                  autocomplete: "off",
                                                  id: `input-variable-${idx}`,
                                                  required: (deep_read_state(variables()), get$1(variable), untrack(() => {
                                                    var _a;
                                                    return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.required) ?? false;
                                                  })),
                                                  ...get$1(computed_const).variableAttributes
                                                }),
                                                void 0,
                                                void 0,
                                                void 0,
                                                void 0,
                                                true
                                              );
                                              bind_value(input_8, () => get$1(variableValues)[get$1(variable)], ($$value) => mutate(variableValues, get$1(variableValues)[get$1(variable)] = $$value));
                                              append($$anchor12, input_8);
                                            };
                                            var alternate_6 = ($$anchor12) => {
                                              var fragment_8 = comment();
                                              var node_13 = first_child(fragment_8);
                                              {
                                                var consequent_10 = ($$anchor13) => {
                                                  var div_16 = root_23();
                                                  var div_17 = child(div_16);
                                                  var input_9 = child(div_17);
                                                  attribute_effect(
                                                    input_9,
                                                    () => ({
                                                      type: "range",
                                                      class: "w-full rounded-lg py-1 px-4 text-sm dark:text-gray-300 dark:bg-gray-850 outline-hidden border border-gray-100 dark:border-gray-850",
                                                      id: `input-variable-${idx}`,
                                                      ...get$1(computed_const).variableAttributes
                                                    }),
                                                    void 0,
                                                    void 0,
                                                    void 0,
                                                    void 0,
                                                    true
                                                  );
                                                  reset(div_17);
                                                  var input_10 = sibling(div_17, 2);
                                                  remove_input_defaults(input_10);
                                                  reset(div_16);
                                                  template_effect(
                                                    ($0) => {
                                                      set_attribute(input_10, "placeholder", $0);
                                                      input_10.required = (deep_read_state(variables()), get$1(variable), untrack(() => {
                                                        var _a;
                                                        return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.required) ?? false;
                                                      }));
                                                    },
                                                    [() => ($i18n(), untrack(() => $i18n().t("Enter value")))]
                                                  );
                                                  bind_value(input_9, () => get$1(variableValues)[get$1(variable)], ($$value) => mutate(variableValues, get$1(variableValues)[get$1(variable)] = $$value));
                                                  bind_value(input_10, () => get$1(variableValues)[get$1(variable)], ($$value) => mutate(variableValues, get$1(variableValues)[get$1(variable)] = $$value));
                                                  append($$anchor13, div_16);
                                                };
                                                var alternate_5 = ($$anchor13) => {
                                                  var fragment_9 = comment();
                                                  var node_14 = first_child(fragment_9);
                                                  {
                                                    var consequent_11 = ($$anchor14) => {
                                                      var input_11 = root_25();
                                                      attribute_effect(
                                                        input_11,
                                                        () => ({
                                                          type: "tel",
                                                          class: "w-full rounded-lg py-2 px-4 text-sm dark:text-gray-300 dark:bg-gray-850 outline-hidden border border-gray-100 dark:border-gray-850",
                                                          placeholder: (deep_read_state(variables()), get$1(variable), untrack(() => {
                                                            var _a;
                                                            return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.placeholder) ?? "";
                                                          })),
                                                          autocomplete: "off",
                                                          id: `input-variable-${idx}`,
                                                          required: (deep_read_state(variables()), get$1(variable), untrack(() => {
                                                            var _a;
                                                            return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.required) ?? false;
                                                          })),
                                                          ...get$1(computed_const).variableAttributes
                                                        }),
                                                        void 0,
                                                        void 0,
                                                        void 0,
                                                        void 0,
                                                        true
                                                      );
                                                      bind_value(input_11, () => get$1(variableValues)[get$1(variable)], ($$value) => mutate(variableValues, get$1(variableValues)[get$1(variable)] = $$value));
                                                      append($$anchor14, input_11);
                                                    };
                                                    var alternate_4 = ($$anchor14) => {
                                                      var fragment_10 = comment();
                                                      var node_15 = first_child(fragment_10);
                                                      {
                                                        var consequent_12 = ($$anchor15) => {
                                                          var input_12 = root_27();
                                                          attribute_effect(
                                                            input_12,
                                                            () => ({
                                                              type: "text",
                                                              class: "w-full rounded-lg py-2 px-4 text-sm dark:text-gray-300 dark:bg-gray-850 outline-hidden border border-gray-100 dark:border-gray-850",
                                                              placeholder: (deep_read_state(variables()), get$1(variable), untrack(() => {
                                                                var _a;
                                                                return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.placeholder) ?? "";
                                                              })),
                                                              autocomplete: "off",
                                                              id: `input-variable-${idx}`,
                                                              required: (deep_read_state(variables()), get$1(variable), untrack(() => {
                                                                var _a;
                                                                return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.required) ?? false;
                                                              })),
                                                              ...get$1(computed_const).variableAttributes
                                                            }),
                                                            void 0,
                                                            void 0,
                                                            void 0,
                                                            void 0,
                                                            true
                                                          );
                                                          bind_value(input_12, () => get$1(variableValues)[get$1(variable)], ($$value) => mutate(variableValues, get$1(variableValues)[get$1(variable)] = $$value));
                                                          append($$anchor15, input_12);
                                                        };
                                                        var alternate_3 = ($$anchor15) => {
                                                          var fragment_11 = comment();
                                                          var node_16 = first_child(fragment_11);
                                                          {
                                                            var consequent_13 = ($$anchor16) => {
                                                              var input_13 = root_29();
                                                              attribute_effect(
                                                                input_13,
                                                                () => ({
                                                                  type: "time",
                                                                  class: "w-full rounded-lg py-2 px-4 text-sm dark:text-gray-300 dark:bg-gray-850 outline-hidden border border-gray-100 dark:border-gray-850",
                                                                  placeholder: (deep_read_state(variables()), get$1(variable), untrack(() => {
                                                                    var _a;
                                                                    return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.placeholder) ?? "";
                                                                  })),
                                                                  autocomplete: "off",
                                                                  id: `input-variable-${idx}`,
                                                                  required: (deep_read_state(variables()), get$1(variable), untrack(() => {
                                                                    var _a;
                                                                    return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.required) ?? false;
                                                                  })),
                                                                  ...get$1(computed_const).variableAttributes
                                                                }),
                                                                void 0,
                                                                void 0,
                                                                void 0,
                                                                void 0,
                                                                true
                                                              );
                                                              bind_value(input_13, () => get$1(variableValues)[get$1(variable)], ($$value) => mutate(variableValues, get$1(variableValues)[get$1(variable)] = $$value));
                                                              append($$anchor16, input_13);
                                                            };
                                                            var alternate_2 = ($$anchor16) => {
                                                              var fragment_12 = comment();
                                                              var node_17 = first_child(fragment_12);
                                                              {
                                                                var consequent_14 = ($$anchor17) => {
                                                                  var input_14 = root_31();
                                                                  attribute_effect(
                                                                    input_14,
                                                                    () => ({
                                                                      type: "url",
                                                                      class: "w-full rounded-lg py-2 px-4 text-sm dark:text-gray-300 dark:bg-gray-850 outline-hidden border border-gray-100 dark:border-gray-850",
                                                                      placeholder: (deep_read_state(variables()), get$1(variable), untrack(() => {
                                                                        var _a;
                                                                        return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.placeholder) ?? "";
                                                                      })),
                                                                      autocomplete: "off",
                                                                      id: `input-variable-${idx}`,
                                                                      required: (deep_read_state(variables()), get$1(variable), untrack(() => {
                                                                        var _a;
                                                                        return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.required) ?? false;
                                                                      })),
                                                                      ...get$1(computed_const).variableAttributes
                                                                    }),
                                                                    void 0,
                                                                    void 0,
                                                                    void 0,
                                                                    void 0,
                                                                    true
                                                                  );
                                                                  bind_value(input_14, () => get$1(variableValues)[get$1(variable)], ($$value) => mutate(variableValues, get$1(variableValues)[get$1(variable)] = $$value));
                                                                  append($$anchor17, input_14);
                                                                };
                                                                var alternate_1 = ($$anchor17) => {
                                                                  var fragment_13 = comment();
                                                                  var node_18 = first_child(fragment_13);
                                                                  {
                                                                    var consequent_15 = ($$anchor18) => {
                                                                      var div_18 = root_33();
                                                                      var node_19 = child(div_18);
                                                                      {
                                                                        let $0 = derived_safe_equal(() => (get$1(variableValues), get$1(variable), untrack(() => (get$1(variableValues)[get$1(variable)] ?? "").includes(",") ?? false ? get$1(variableValues)[get$1(variable)].split(",") : null)));
                                                                        MapSelector(node_19, {
                                                                          get setViewLocation() {
                                                                            return get$1($0);
                                                                          },
                                                                          onClick: (value) => {
                                                                            mutate(variableValues, get$1(variableValues)[get$1(variable)] = value);
                                                                          }
                                                                        });
                                                                      }
                                                                      var input_15 = sibling(node_19, 2);
                                                                      remove_input_defaults(input_15);
                                                                      reset(div_18);
                                                                      template_effect(
                                                                        ($0) => {
                                                                          set_attribute(input_15, "placeholder", $0);
                                                                          input_15.required = (deep_read_state(variables()), get$1(variable), untrack(() => {
                                                                            var _a;
                                                                            return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.required) ?? false;
                                                                          }));
                                                                        },
                                                                        [
                                                                          () => ($i18n(), untrack(() => $i18n().t("Enter coordinates (e.g. 51.505, -0.09)")))
                                                                        ]
                                                                      );
                                                                      bind_value(input_15, () => get$1(variableValues)[get$1(variable)], ($$value) => mutate(variableValues, get$1(variableValues)[get$1(variable)] = $$value));
                                                                      append($$anchor18, div_18);
                                                                    };
                                                                    var alternate = ($$anchor18) => {
                                                                      var textarea = root_34();
                                                                      remove_textarea_child(textarea);
                                                                      set_attribute(textarea, "id", `input-variable-${idx}`);
                                                                      template_effect(() => {
                                                                        set_attribute(textarea, "placeholder", (deep_read_state(variables()), get$1(variable), untrack(() => {
                                                                          var _a;
                                                                          return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.placeholder) ?? "";
                                                                        })));
                                                                        textarea.required = (deep_read_state(variables()), get$1(variable), untrack(() => {
                                                                          var _a;
                                                                          return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.required) ?? false;
                                                                        }));
                                                                      });
                                                                      bind_value(textarea, () => get$1(variableValues)[get$1(variable)], ($$value) => mutate(variableValues, get$1(variableValues)[get$1(variable)] = $$value));
                                                                      append($$anchor18, textarea);
                                                                    };
                                                                    if_block(
                                                                      node_18,
                                                                      ($$render) => {
                                                                        if (deep_read_state(variables()), get$1(variable), untrack(() => {
                                                                          var _a;
                                                                          return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.type) === "map";
                                                                        })) $$render(consequent_15);
                                                                        else $$render(alternate, false);
                                                                      },
                                                                      true
                                                                    );
                                                                  }
                                                                  append($$anchor17, fragment_13);
                                                                };
                                                                if_block(
                                                                  node_17,
                                                                  ($$render) => {
                                                                    if (deep_read_state(variables()), get$1(variable), untrack(() => {
                                                                      var _a;
                                                                      return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.type) === "url";
                                                                    })) $$render(consequent_14);
                                                                    else $$render(alternate_1, false);
                                                                  },
                                                                  true
                                                                );
                                                              }
                                                              append($$anchor16, fragment_12);
                                                            };
                                                            if_block(
                                                              node_16,
                                                              ($$render) => {
                                                                if (deep_read_state(variables()), get$1(variable), untrack(() => {
                                                                  var _a;
                                                                  return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.type) === "time";
                                                                })) $$render(consequent_13);
                                                                else $$render(alternate_2, false);
                                                              },
                                                              true
                                                            );
                                                          }
                                                          append($$anchor15, fragment_11);
                                                        };
                                                        if_block(
                                                          node_15,
                                                          ($$render) => {
                                                            if (deep_read_state(variables()), get$1(variable), untrack(() => {
                                                              var _a;
                                                              return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.type) === "text";
                                                            })) $$render(consequent_12);
                                                            else $$render(alternate_3, false);
                                                          },
                                                          true
                                                        );
                                                      }
                                                      append($$anchor14, fragment_10);
                                                    };
                                                    if_block(
                                                      node_14,
                                                      ($$render) => {
                                                        if (deep_read_state(variables()), get$1(variable), untrack(() => {
                                                          var _a;
                                                          return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.type) === "tel";
                                                        })) $$render(consequent_11);
                                                        else $$render(alternate_4, false);
                                                      },
                                                      true
                                                    );
                                                  }
                                                  append($$anchor13, fragment_9);
                                                };
                                                if_block(
                                                  node_13,
                                                  ($$render) => {
                                                    if (deep_read_state(variables()), get$1(variable), untrack(() => {
                                                      var _a;
                                                      return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.type) === "range";
                                                    })) $$render(consequent_10);
                                                    else $$render(alternate_5, false);
                                                  },
                                                  true
                                                );
                                              }
                                              append($$anchor12, fragment_8);
                                            };
                                            if_block(
                                              node_12,
                                              ($$render) => {
                                                if (deep_read_state(variables()), get$1(variable), untrack(() => {
                                                  var _a;
                                                  return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.type) === "number";
                                                })) $$render(consequent_9);
                                                else $$render(alternate_6, false);
                                              },
                                              true
                                            );
                                          }
                                          append($$anchor11, fragment_7);
                                        };
                                        if_block(
                                          node_11,
                                          ($$render) => {
                                            if (deep_read_state(variables()), get$1(variable), untrack(() => {
                                              var _a;
                                              return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.type) === "month";
                                            })) $$render(consequent_8);
                                            else $$render(alternate_7, false);
                                          },
                                          true
                                        );
                                      }
                                      append($$anchor10, fragment_6);
                                    };
                                    if_block(
                                      node_10,
                                      ($$render) => {
                                        if (deep_read_state(variables()), get$1(variable), untrack(() => {
                                          var _a;
                                          return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.type) === "email";
                                        })) $$render(consequent_7);
                                        else $$render(alternate_8, false);
                                      },
                                      true
                                    );
                                  }
                                  append($$anchor9, fragment_5);
                                };
                                if_block(
                                  node_9,
                                  ($$render) => {
                                    if (deep_read_state(variables()), get$1(variable), untrack(() => {
                                      var _a;
                                      return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.type) === "datetime-local";
                                    })) $$render(consequent_6);
                                    else $$render(alternate_9, false);
                                  },
                                  true
                                );
                              }
                              append($$anchor8, fragment_4);
                            };
                            if_block(
                              node_8,
                              ($$render) => {
                                if (deep_read_state(variables()), get$1(variable), untrack(() => {
                                  var _a;
                                  return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.type) === "date";
                                })) $$render(consequent_5);
                                else $$render(alternate_10, false);
                              },
                              true
                            );
                          }
                          append($$anchor7, fragment_3);
                        };
                        if_block(
                          node_7,
                          ($$render) => {
                            if (deep_read_state(variables()), get$1(variable), untrack(() => {
                              var _a;
                              return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.type) === "color";
                            })) $$render(consequent_4);
                            else $$render(alternate_11, false);
                          },
                          true
                        );
                      }
                      append($$anchor6, fragment_2);
                    };
                    if_block(
                      node_6,
                      ($$render) => {
                        if (deep_read_state(variables()), get$1(variable), untrack(() => {
                          var _a;
                          return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.type) === "checkbox";
                        })) $$render(consequent_3);
                        else $$render(alternate_12, false);
                      },
                      true
                    );
                  }
                  append($$anchor5, fragment_1);
                };
                if_block(node_3, ($$render) => {
                  if (deep_read_state(variables()), get$1(variable), untrack(() => {
                    var _a;
                    return ((_a = variables()[get$1(variable)]) == null ? void 0 : _a.type) === "select";
                  })) $$render(consequent_2);
                  else $$render(alternate_13, false);
                });
              }
              reset(div_11);
              reset(div_10);
              reset(div_7);
              template_effect(() => set_text(text_1, `${get$1(variable) ?? ""} `));
              append($$anchor4, div_7);
            }
          );
          reset(div_6);
          append($$anchor3, div_6);
        };
        var alternate_14 = ($$anchor3) => {
          Spinner($$anchor3, { className: "size-5" });
        };
        if_block(node_1, ($$render) => {
          if (!get$1(loading)) $$render(consequent_16);
          else $$render(alternate_14, false);
        });
      }
      reset(div_5);
      var div_19 = sibling(div_5, 2);
      var button_1 = child(div_19);
      var text_6 = child(button_1, true);
      reset(button_1);
      var button_2 = sibling(button_1, 2);
      var text_7 = child(button_2, true);
      reset(button_2);
      reset(div_19);
      reset(form);
      reset(div_4);
      reset(div_3);
      reset(div);
      template_effect(
        ($0, $1, $2) => {
          set_text(text, $0);
          set_text(text_6, $1);
          set_text(text_7, $2);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Input Variables"))),
          () => ($i18n(), untrack(() => $i18n().t("Cancel"))),
          () => ($i18n(), untrack(() => $i18n().t("Save")))
        ]
      );
      event("click", button, () => {
        show(false);
      });
      event(
        "click",
        button_1,
        // Convert the color value to uppercase immediately
        () => {
          show(false);
        }
      );
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
function getSuggestionRenderer(Component, ComponentProps = {}) {
  return function suggestionRenderer() {
    let component = null;
    let container = null;
    let popup = null;
    let refEl = null;
    return {
      onStart: (props) => {
        container = document.createElement("div");
        container.className = "suggestion-list-container";
        document.body.appendChild(container);
        component = createClassComponent({
          component: Component,
          target: container,
          props: {
            char: props == null ? void 0 : props.text,
            query: props == null ? void 0 : props.query,
            command: (item) => {
              props.command({ id: item.id, label: item.label });
            },
            ...ComponentProps
          },
          context: /* @__PURE__ */ new Map([["i18n", ComponentProps == null ? void 0 : ComponentProps.i18n]])
        });
        refEl = document.createElement("div");
        Object.assign(refEl.style, {
          position: "fixed",
          left: "0px",
          top: "0px",
          width: "0px",
          height: "0px"
        });
        document.body.appendChild(refEl);
        popup = tippy(refEl, {
          getReferenceClientRect: props.clientRect,
          appendTo: () => document.body,
          content: container,
          interactive: true,
          trigger: "manual",
          theme: "transparent",
          placement: "top-start",
          offset: [-10, -2],
          arrow: false,
          popperOptions: {
            strategy: "fixed",
            modifiers: [
              {
                name: "preventOverflow",
                options: {
                  boundary: "viewport",
                  // keep within the viewport
                  altAxis: true,
                  // also prevent overflow on the cross axis (X)
                  tether: true,
                  padding: 8
                }
              },
              {
                name: "flip",
                options: {
                  boundary: "viewport",
                  fallbackPlacements: ["top-end", "bottom-start", "bottom-end"]
                }
              },
              // Ensure transforms don’t cause layout widening in some browsers
              { name: "computeStyles", options: { adaptive: true } }
            ]
          },
          // Helps avoid accidental focus/hover “linking” from far away elements
          interactiveBorder: 8
        });
        popup == null ? void 0 : popup.show();
      },
      onUpdate: (props) => {
        if (!component) return;
        component.$set({
          query: props.query,
          command: (item) => {
            props.command({ id: item.id, label: item.label });
          }
        });
        if (props.clientRect && popup) {
          popup.setProps({ getReferenceClientRect: props.clientRect });
        }
      },
      onKeyDown: (props) => {
        var _a;
        return ((_a = component == null ? void 0 : component._onKeyDown) == null ? void 0 : _a.call(component, props.event)) ?? false;
      },
      onExit: () => {
        popup == null ? void 0 : popup.destroy();
        popup = null;
        try {
          component.$destroy();
        } catch (e) {
          console.error("Error unmounting component:", e);
        }
        component = null;
        if (container == null ? void 0 : container.parentNode) container.parentNode.removeChild(container);
        container = null;
        if (refEl == null ? void 0 : refEl.parentNode) refEl.parentNode.removeChild(refEl);
        refEl = null;
      }
    };
  };
}
var root_3$2 = from_html(`<button type="button"><span class=" font-medium text-black dark:text-gray-100"> </span> <span class=" text-xs text-gray-600 dark:text-gray-100"> </span></button>`);
var root_1$1 = from_html(`<div class=" space-y-0.5 scrollbar-hidden"></div>`);
var root$4 = from_html(`<div class="px-2 text-xs text-gray-500 py-1"> </div> <!>`, 1);
function Prompts($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let query = prop($$props, "query", 8, "");
  let prompts2 = prop($$props, "prompts", 24, () => []);
  let onSelect = prop($$props, "onSelect", 8, (e) => {
  });
  let selectedPromptIdx = mutable_source(0);
  let filteredItems = prop($$props, "filteredItems", 28, () => []);
  const selectUp = () => {
    set(selectedPromptIdx, Math.max(0, get$1(selectedPromptIdx) - 1));
  };
  const selectDown = () => {
    set(selectedPromptIdx, Math.min(get$1(selectedPromptIdx) + 1, filteredItems().length - 1));
  };
  const select = async () => {
    const command = filteredItems()[get$1(selectedPromptIdx)];
    if (command) {
      onSelect()({ type: "prompt", data: command });
    }
  };
  legacy_pre_effect(() => (deep_read_state(prompts2()), deep_read_state(query())), () => {
    filteredItems(prompts2().filter((p) => p.command.toLowerCase().includes(query().toLowerCase())).sort((a, b) => a.title.localeCompare(b.title)));
  });
  legacy_pre_effect(() => deep_read_state(query()), () => {
    if (query()) {
      set(selectedPromptIdx, 0);
    }
  });
  legacy_pre_effect_reset();
  var $$exports = { selectUp, selectDown, select };
  init();
  var fragment = root$4();
  var div = first_child(fragment);
  var text = child(div, true);
  reset(div);
  var node = sibling(div, 2);
  {
    var consequent = ($$anchor2) => {
      var div_1 = root_1$1();
      each(div_1, 5, filteredItems, index, ($$anchor3, promptItem, promptIdx) => {
        Tooltip($$anchor3, {
          get content() {
            return get$1(promptItem), untrack(() => get$1(promptItem).title);
          },
          placement: "top-start",
          children: ($$anchor4, $$slotProps) => {
            var button = root_3$2();
            var span = child(button);
            var text_1 = child(span, true);
            reset(span);
            var span_1 = sibling(span, 2);
            var text_2 = child(span_1, true);
            reset(span_1);
            reset(button);
            template_effect(() => {
              set_class(button, 1, ` px-3 py-1 rounded-xl w-full text-left ${promptIdx === get$1(selectedPromptIdx) ? "  bg-gray-50 dark:bg-gray-800 selected-command-option-button" : ""} truncate`);
              set_attribute(button, "data-selected", promptIdx === get$1(selectedPromptIdx));
              set_text(text_1, (get$1(promptItem), untrack(() => get$1(promptItem).command)));
              set_text(text_2, (get$1(promptItem), untrack(() => get$1(promptItem).title)));
            });
            event("click", button, () => {
              onSelect()({ type: "prompt", data: get$1(promptItem) });
            });
            event("mousemove", button, () => {
              set(selectedPromptIdx, promptIdx);
            });
            event("focus", button, () => {
            });
            append($$anchor4, button);
          },
          $$slots: { default: true }
        });
      });
      reset(div_1);
      append($$anchor2, div_1);
    };
    if_block(node, ($$render) => {
      if (deep_read_state(filteredItems()), untrack(() => filteredItems().length > 0)) $$render(consequent);
    });
  }
  template_effect(($0) => set_text(text, $0), [() => ($i18n(), untrack(() => $i18n().t("Prompts")))]);
  append($$anchor, fragment);
  bind_prop($$props, "selectUp", selectUp);
  bind_prop($$props, "selectDown", selectDown);
  bind_prop($$props, "select", select);
  var $$pop = pop($$exports);
  $$cleanup();
  return $$pop;
}
var root$3 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M14 12L10.5 14V10L14 12Z" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 12.7075V11.2924C2 8.39705 2 6.94939 2.90549 6.01792C3.81099 5.08645 5.23656 5.04613 8.08769 4.96549C9.43873 4.92728 10.8188 4.8999 12 4.8999C13.1812 4.8999 14.5613 4.92728 15.9123 4.96549C18.7634 5.04613 20.189 5.08645 21.0945 6.01792C22 6.94939 22 8.39705 22 11.2924V12.7075C22 15.6028 22 17.0505 21.0945 17.9819C20.189 18.9134 18.7635 18.9537 15.9124 19.0344C14.5613 19.0726 13.1812 19.1 12 19.1C10.8188 19.1 9.43867 19.0726 8.0876 19.0344C5.23651 18.9537 3.81097 18.9134 2.90548 17.9819C2 17.0505 2 15.6028 2 12.7075Z"></path></svg>`);
function Youtube($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$3();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root_9 = from_html(`<div class="line-clamp-1 flex-1"> </div>`);
var root_3$1 = from_html(`<button type="button"><div class="  text-black dark:text-gray-100 flex items-center gap-1"><!> <!></div></button>`);
var root_10 = from_html(`<button class="px-2 py-1 rounded-xl w-full text-left bg-gray-50 dark:bg-gray-800 dark:text-gray-100 selected-command-option-button" type="button"><div class="  text-black dark:text-gray-100 line-clamp-1 flex items-center gap-1"><!> <div class="truncate flex-1"> </div></div></button>`);
var root_13 = from_html(`<button class="px-2 py-1 rounded-xl w-full text-left bg-gray-50 dark:bg-gray-800 dark:text-gray-100 selected-command-option-button" type="button"><div class="  text-black dark:text-gray-100 line-clamp-1 flex items-center gap-1"><!> <div class="truncate flex-1"> </div></div></button>`);
var root_1 = from_html(`<!> <!>`, 1);
var root$2 = from_html(`<div class="px-2 text-xs text-gray-500 py-1"> </div> <!>`, 1);
function Knowledge($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $folders = () => store_get(folders, "$folders", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  dayjs2.extend(relativeTime);
  const i18n = getContext("i18n");
  let query = prop($$props, "query", 8, "");
  let onSelect = prop($$props, "onSelect", 8, (e) => {
  });
  let knowledge2 = prop($$props, "knowledge", 24, () => []);
  let selectedIdx = mutable_source(0);
  let items = mutable_source([]);
  let fuse = mutable_source(null);
  let filteredItems = prop($$props, "filteredItems", 28, () => []);
  const selectUp = () => {
    set(selectedIdx, Math.max(0, get$1(selectedIdx) - 1));
  };
  const selectDown = () => {
    set(selectedIdx, Math.min(get$1(selectedIdx) + 1, filteredItems().length - 1));
  };
  const select = async () => {
    const item = document.querySelector(`[data-selected="true"]`);
    if (item) {
      item.click();
    }
  };
  const decodeString = (str) => {
    try {
      return decodeURIComponent(str);
    } catch (e) {
      return str;
    }
  };
  onMount(async () => {
    let legacy_documents = knowledge2().filter((item) => {
      var _a;
      return (_a = item == null ? void 0 : item.meta) == null ? void 0 : _a.document;
    }).map((item) => ({ ...item, type: "file" }));
    let legacy_collections = legacy_documents.length > 0 ? [
      {
        name: "All Documents",
        legacy: true,
        type: "collection",
        description: "Deprecated (legacy collection), please create a new knowledge base.",
        title: $i18n().t("All Documents"),
        collection_names: legacy_documents.map((item) => item.id)
      },
      ...legacy_documents.reduce(
        (a, item) => {
          var _a;
          return [
            .../* @__PURE__ */ new Set([...a, ...(((_a = item == null ? void 0 : item.meta) == null ? void 0 : _a.tags) ?? []).map((tag) => tag.name)])
          ];
        },
        []
      ).map((tag) => ({
        name: tag,
        legacy: true,
        type: "collection",
        description: "Deprecated (legacy collection), please create a new knowledge base.",
        collection_names: legacy_documents.filter((item) => {
          var _a;
          return (((_a = item == null ? void 0 : item.meta) == null ? void 0 : _a.tags) ?? []).map((tag2) => tag2.name).includes(tag);
        }).map((item) => item.id)
      }))
    ] : [];
    let collections = knowledge2().filter((item) => {
      var _a;
      return !((_a = item == null ? void 0 : item.meta) == null ? void 0 : _a.document);
    }).map((item) => ({ ...item, type: "collection" }));
    let collection_files = knowledge2().length > 0 ? [
      ...knowledge2().reduce(
        (a, item) => {
          return [
            .../* @__PURE__ */ new Set([
              ...a,
              ...((item == null ? void 0 : item.files) ?? []).map((file) => ({
                ...file,
                collection: { name: item.name, description: item.description }
                // DO NOT REMOVE, USED IN FILE DESCRIPTION/ATTACHMENT
              }))
            ])
          ];
        },
        []
      ).map((file) => {
        var _a, _b, _c;
        return {
          ...file,
          name: (_a = file == null ? void 0 : file.meta) == null ? void 0 : _a.name,
          description: `${(_b = file == null ? void 0 : file.collection) == null ? void 0 : _b.name} - ${(_c = file == null ? void 0 : file.collection) == null ? void 0 : _c.description}`,
          knowledge: true,
          // DO NOT REMOVE, USED TO INDICATE KNOWLEDGE BASE FILE
          type: "file"
        };
      })
    ] : [];
    let folder_items = $folders().map((folder) => ({
      ...folder,
      type: "folder",
      description: $i18n().t("Folder"),
      title: folder.name
    }));
    set(items, [
      ...folder_items,
      ...collections,
      ...collection_files,
      ...legacy_collections,
      ...legacy_documents
    ].map((item) => {
      var _a, _b;
      return {
        ...item,
        ...(item == null ? void 0 : item.legacy) || ((_a = item == null ? void 0 : item.meta) == null ? void 0 : _a.legacy) || ((_b = item == null ? void 0 : item.meta) == null ? void 0 : _b.document) ? { legacy: true } : {}
      };
    }));
    set(fuse, new Fuse(get$1(items), { keys: ["name", "description"] }));
    await tick();
  });
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      select();
    }
  };
  onMount(() => {
    window.addEventListener("keydown", onKeyDown);
  });
  onDestroy(() => {
    window.removeEventListener("keydown", onKeyDown);
  });
  legacy_pre_effect(
    () => (get$1(fuse), deep_read_state(query()), get$1(items), isYoutubeUrl),
    () => {
      if (get$1(fuse)) {
        filteredItems([
          ...query() ? get$1(fuse).search(query()).map((e) => {
            return e.item;
          }) : get$1(items),
          ...query().startsWith("http") ? isYoutubeUrl(query()) ? [{ type: "youtube", name: query(), description: query() }] : [{ type: "web", name: query(), description: query() }] : []
        ]);
      }
    }
  );
  legacy_pre_effect(() => deep_read_state(query()), () => {
    if (query()) {
      set(selectedIdx, 0);
    }
  });
  legacy_pre_effect_reset();
  var $$exports = { selectUp, selectDown, select };
  init();
  var fragment = root$2();
  var div = first_child(fragment);
  var text = child(div, true);
  reset(div);
  var node = sibling(div, 2);
  {
    var consequent_5 = ($$anchor2) => {
      var fragment_1 = root_1();
      var node_1 = first_child(fragment_1);
      each(node_1, 1, filteredItems, index, ($$anchor3, item, idx) => {
        var fragment_2 = comment();
        var node_2 = first_child(fragment_2);
        {
          var consequent_2 = ($$anchor4) => {
            var button = root_3$1();
            var div_1 = child(button);
            var node_3 = child(div_1);
            {
              let $0 = derived_safe_equal(() => (get$1(item), $i18n(), untrack(() => {
                var _a, _b, _c;
                return ((_a = get$1(item)) == null ? void 0 : _a.legacy) ? $i18n().t("Legacy") : ((_b = get$1(item)) == null ? void 0 : _b.type) === "file" ? $i18n().t("File") : ((_c = get$1(item)) == null ? void 0 : _c.type) === "collection" ? $i18n().t("Collection") : "";
              })));
              Tooltip(node_3, {
                get content() {
                  return get$1($0);
                },
                placement: "top",
                children: ($$anchor5, $$slotProps) => {
                  var fragment_3 = comment();
                  var node_4 = first_child(fragment_3);
                  {
                    var consequent = ($$anchor6) => {
                      Database($$anchor6, { className: "size-4" });
                    };
                    var alternate_1 = ($$anchor6) => {
                      var fragment_5 = comment();
                      var node_5 = first_child(fragment_5);
                      {
                        var consequent_1 = ($$anchor7) => {
                          Folder($$anchor7, { className: "size-4" });
                        };
                        var alternate = ($$anchor7) => {
                          DocumentPage($$anchor7, { className: "size-4" });
                        };
                        if_block(
                          node_5,
                          ($$render) => {
                            if (get$1(item), untrack(() => {
                              var _a;
                              return ((_a = get$1(item)) == null ? void 0 : _a.type) === "folder";
                            })) $$render(consequent_1);
                            else $$render(alternate, false);
                          },
                          true
                        );
                      }
                      append($$anchor6, fragment_5);
                    };
                    if_block(node_4, ($$render) => {
                      if (get$1(item), untrack(() => {
                        var _a;
                        return ((_a = get$1(item)) == null ? void 0 : _a.type) === "collection";
                      })) $$render(consequent);
                      else $$render(alternate_1, false);
                    });
                  }
                  append($$anchor5, fragment_3);
                },
                $$slots: { default: true }
              });
            }
            var node_6 = sibling(node_3, 2);
            {
              let $0 = derived_safe_equal(() => (get$1(item), untrack(() => {
                var _a;
                return `${decodeString((_a = get$1(item)) == null ? void 0 : _a.name)}`;
              })));
              Tooltip(node_6, {
                get content() {
                  return get$1($0);
                },
                placement: "top-start",
                children: ($$anchor5, $$slotProps) => {
                  var div_2 = root_9();
                  var text_1 = child(div_2, true);
                  reset(div_2);
                  template_effect(($02) => set_text(text_1, $02), [
                    () => (get$1(item), untrack(() => {
                      var _a;
                      return decodeString((_a = get$1(item)) == null ? void 0 : _a.name);
                    }))
                  ]);
                  append($$anchor5, div_2);
                },
                $$slots: { default: true }
              });
            }
            reset(div_1);
            reset(button);
            template_effect(() => {
              set_class(button, 1, ` px-2 py-1 rounded-xl w-full text-left flex justify-between items-center ${idx === get$1(selectedIdx) ? " bg-gray-50 dark:bg-gray-800 dark:text-gray-100 selected-command-option-button" : ""}`);
              set_attribute(button, "data-selected", idx === get$1(selectedIdx));
            });
            event("click", button, () => {
              console.log(get$1(item));
              onSelect()({ type: "knowledge", data: get$1(item) });
            });
            event("mousemove", button, () => {
              set(selectedIdx, idx);
            });
            append($$anchor4, button);
          };
          if_block(node_2, ($$render) => {
            if (get$1(item), untrack(() => !["youtube", "web"].includes(get$1(item).type))) $$render(consequent_2);
          });
        }
        append($$anchor3, fragment_2);
      });
      var node_7 = sibling(node_1, 2);
      {
        var consequent_3 = ($$anchor3) => {
          var button_1 = root_10();
          set_attribute(button_1, "data-selected", true);
          var div_3 = child(button_1);
          var node_8 = child(div_3);
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("YouTube"))));
            Tooltip(node_8, {
              get content() {
                return get$1($0);
              },
              placement: "top",
              children: ($$anchor4, $$slotProps) => {
                Youtube($$anchor4, { className: "size-4" });
              },
              $$slots: { default: true }
            });
          }
          var div_4 = sibling(node_8, 2);
          var text_2 = child(div_4, true);
          reset(div_4);
          reset(div_3);
          reset(button_1);
          template_effect(() => set_text(text_2, query()));
          event("click", button_1, () => {
            if (isValidHttpUrl(query())) {
              onSelect()({ type: "youtube", data: query() });
            } else {
              toast.error($i18n().t("Oops! Looks like the URL is invalid. Please double-check and try again."));
            }
          });
          append($$anchor3, button_1);
        };
        var alternate_2 = ($$anchor3) => {
          var fragment_9 = comment();
          var node_9 = first_child(fragment_9);
          {
            var consequent_4 = ($$anchor4) => {
              var button_2 = root_13();
              set_attribute(button_2, "data-selected", true);
              var div_5 = child(button_2);
              var node_10 = child(div_5);
              {
                let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Web"))));
                Tooltip(node_10, {
                  get content() {
                    return get$1($0);
                  },
                  placement: "top",
                  children: ($$anchor5, $$slotProps) => {
                    GlobeAlt($$anchor5, { className: "size-4" });
                  },
                  $$slots: { default: true }
                });
              }
              var div_6 = sibling(node_10, 2);
              var text_3 = child(div_6, true);
              reset(div_6);
              reset(div_5);
              reset(button_2);
              template_effect(() => set_text(text_3, query()));
              event("click", button_2, () => {
                if (isValidHttpUrl(query())) {
                  onSelect()({ type: "web", data: query() });
                } else {
                  toast.error($i18n().t("Oops! Looks like the URL is invalid. Please double-check and try again."));
                }
              });
              append($$anchor4, button_2);
            };
            if_block(
              node_9,
              ($$render) => {
                if (deep_read_state(query()), untrack(() => query().startsWith("http"))) $$render(consequent_4);
              },
              true
            );
          }
          append($$anchor3, fragment_9);
        };
        if_block(node_7, ($$render) => {
          if (deep_read_state(isYoutubeUrl), deep_read_state(query()), untrack(() => isYoutubeUrl(query()))) $$render(consequent_3);
          else $$render(alternate_2, false);
        });
      }
      append($$anchor2, fragment_1);
    };
    if_block(node, ($$render) => {
      if (deep_read_state(filteredItems()), deep_read_state(query()), untrack(() => filteredItems().length > 0 || query().startsWith("http"))) $$render(consequent_5);
    });
  }
  template_effect(($0) => set_text(text, $0), [() => ($i18n(), untrack(() => $i18n().t("Knowledge")))]);
  append($$anchor, fragment);
  bind_prop($$props, "selectUp", selectUp);
  bind_prop($$props, "selectDown", selectDown);
  bind_prop($$props, "select", select);
  var $$pop = pop($$exports);
  $$cleanup();
  return $$pop;
}
var root_3 = from_html(`<button type="button"><div class="flex text-black dark:text-gray-100 line-clamp-1"><img class="rounded-full size-5 items-center mr-2"/> <div class="truncate"> </div></div></button>`);
var root$1 = from_html(`<div class="px-2 text-xs text-gray-500 py-1"> </div> <!>`, 1);
function Models($$anchor, $$props) {
  push($$props, false);
  const $models = () => store_get(models, "$models", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let query = prop($$props, "query", 8, "");
  let onSelect = prop($$props, "onSelect", 8, (e) => {
  });
  let selectedIdx = mutable_source(0);
  let filteredItems = prop($$props, "filteredItems", 28, () => []);
  let fuse = new Fuse(
    $models().filter((model) => {
      var _a, _b;
      return !((_b = (_a = model == null ? void 0 : model.info) == null ? void 0 : _a.meta) == null ? void 0 : _b.hidden);
    }).map((model) => {
      var _a, _b, _c, _d, _e;
      const _item = {
        ...model,
        modelName: model == null ? void 0 : model.name,
        tags: (_c = (_b = (_a = model == null ? void 0 : model.info) == null ? void 0 : _a.meta) == null ? void 0 : _b.tags) == null ? void 0 : _c.map((tag) => tag.name).join(" "),
        desc: (_e = (_d = model == null ? void 0 : model.info) == null ? void 0 : _d.meta) == null ? void 0 : _e.description
      };
      return _item;
    }),
    { keys: ["value", "tags", "modelName"], threshold: 0.5 }
  );
  const selectUp = () => {
    set(selectedIdx, Math.max(0, get$1(selectedIdx) - 1));
  };
  const selectDown = () => {
    set(selectedIdx, Math.min(get$1(selectedIdx) + 1, filteredItems().length - 1));
  };
  const select = async () => {
    const model = filteredItems()[get$1(selectedIdx)];
    if (model) {
      onSelect()({ type: "model", data: model });
    }
  };
  legacy_pre_effect(() => (deep_read_state(query()), $models()), () => {
    filteredItems(query() ? fuse.search(query()).map((e) => {
      return e.item;
    }) : $models().filter((model) => {
      var _a, _b;
      return !((_b = (_a = model == null ? void 0 : model.info) == null ? void 0 : _a.meta) == null ? void 0 : _b.hidden);
    }));
  });
  legacy_pre_effect(() => deep_read_state(query()), () => {
    if (query()) {
      set(selectedIdx, 0);
    }
  });
  legacy_pre_effect_reset();
  var $$exports = { selectUp, selectDown, select };
  init();
  var fragment = root$1();
  var div = first_child(fragment);
  var text = child(div, true);
  reset(div);
  var node = sibling(div, 2);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      each(node_1, 1, filteredItems, index, ($$anchor3, model, modelIdx) => {
        Tooltip($$anchor3, {
          get content() {
            return get$1(model), untrack(() => get$1(model).id);
          },
          placement: "top-start",
          children: ($$anchor4, $$slotProps) => {
            var button = root_3();
            var div_1 = child(button);
            var img = child(div_1);
            var div_2 = sibling(img, 2);
            var text_1 = child(div_2, true);
            reset(div_2);
            reset(div_1);
            reset(button);
            template_effect(() => {
              set_class(button, 1, `px-2.5 py-1.5 rounded-xl w-full text-left ${modelIdx === get$1(selectedIdx) ? "bg-gray-50 dark:bg-gray-800 selected-command-option-button" : ""}`);
              set_attribute(button, "data-selected", modelIdx === get$1(selectedIdx));
              set_attribute(img, "src", (deep_read_state(WEBUI_API_BASE_URL), get$1(model), $i18n(), untrack(() => `${WEBUI_API_BASE_URL}/models/model/profile/image?id=${get$1(model).id}&lang=${$i18n().language}`)));
              set_attribute(img, "alt", (get$1(model), untrack(() => {
                var _a;
                return ((_a = get$1(model)) == null ? void 0 : _a.name) ?? get$1(model).id;
              })));
              set_text(text_1, (get$1(model), untrack(() => get$1(model).name)));
            });
            event("click", button, () => {
              onSelect()({ type: "model", data: get$1(model) });
            });
            event("mousemove", button, () => {
              set(selectedIdx, modelIdx);
            });
            event("focus", button, () => {
            });
            append($$anchor4, button);
          },
          $$slots: { default: true }
        });
      });
      append($$anchor2, fragment_1);
    };
    if_block(node, ($$render) => {
      if (deep_read_state(filteredItems()), untrack(() => filteredItems().length > 0)) $$render(consequent);
    });
  }
  template_effect(($0) => set_text(text, $0), [() => ($i18n(), untrack(() => $i18n().t("Models")))]);
  append($$anchor, fragment);
  bind_prop($$props, "selectUp", selectUp);
  bind_prop($$props, "selectDown", selectDown);
  bind_prop($$props, "select", select);
  var $$pop = pop($$exports);
  $$cleanup();
  return $$pop;
}
var root_7 = from_html(`<div class="py-4 flex flex-col w-full rounded-xl text-gray-700 dark:text-gray-300"><!></div>`);
var root = from_html(`<div id="suggestions-container"><div class="overflow-y-auto scrollbar-thin max-h-60"><!></div></div>`);
function CommandSuggestionList($$anchor, $$props) {
  push($$props, false);
  const $prompts = () => store_get(prompts, "$prompts", $$stores);
  const $knowledge = () => store_get(knowledge, "$knowledge", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let char = prop($$props, "char", 8, "");
  let query = prop($$props, "query", 8, "");
  prop($$props, "command", 8);
  let onSelect = prop($$props, "onSelect", 8, (e) => {
  });
  let onUpload = prop($$props, "onUpload", 8, (e) => {
  });
  let insertTextHandler = prop($$props, "insertTextHandler", 8, (text) => {
  });
  let suggestionElement = mutable_source(null);
  let loading = mutable_source(false);
  let filteredItems = mutable_source([]);
  const init$1 = async () => {
    set(loading, true);
    await Promise.all([
      (async () => {
        prompts.set(await getPrompts(localStorage.token));
      })(),
      (async () => {
        knowledge.set(await getKnowledgeBases(localStorage.token));
      })()
    ]);
    set(loading, false);
  };
  onMount(() => {
    init$1();
  });
  const onKeyDown = (event2) => {
    var _a, _b, _c;
    if (!["ArrowUp", "ArrowDown", "Enter", "Tab", "Escape"].includes(event2.key)) return false;
    if (event2.key === "ArrowUp") {
      (_a = get$1(suggestionElement)) == null ? void 0 : _a.selectUp();
      const item = document.querySelector(`[data-selected="true"]`);
      item == null ? void 0 : item.scrollIntoView({ block: "center", inline: "nearest", behavior: "instant" });
      return true;
    }
    if (event2.key === "ArrowDown") {
      (_b = get$1(suggestionElement)) == null ? void 0 : _b.selectDown();
      const item = document.querySelector(`[data-selected="true"]`);
      item == null ? void 0 : item.scrollIntoView({ block: "center", inline: "nearest", behavior: "instant" });
      return true;
    }
    if (event2.key === "Enter" || event2.key === "Tab") {
      (_c = get$1(suggestionElement)) == null ? void 0 : _c.select();
      if (event2.key === "Enter") {
        event2.preventDefault();
      }
      return true;
    }
    if (event2.key === "Escape") {
      return true;
    }
    return false;
  };
  function _onKeyDown(event2) {
    return onKeyDown(event2);
  }
  var $$exports = { _onKeyDown };
  init();
  var div = root();
  var div_1 = child(div);
  var node = child(div_1);
  {
    var consequent_3 = ($$anchor2) => {
      var fragment = comment();
      var node_1 = first_child(fragment);
      {
        var consequent = ($$anchor3) => {
          {
            let $0 = derived_safe_equal(() => $prompts() ?? []);
            bind_this(
              Prompts($$anchor3, {
                get query() {
                  return query();
                },
                get prompts() {
                  return get$1($0);
                },
                onSelect: (e) => {
                  const { type, data } = e;
                  if (type === "prompt") {
                    insertTextHandler()(data.content);
                  }
                },
                get filteredItems() {
                  return get$1(filteredItems);
                },
                set filteredItems($$value) {
                  set(filteredItems, $$value);
                },
                $$legacy: true
              }),
              ($$value) => set(suggestionElement, $$value),
              () => get$1(suggestionElement)
            );
          }
        };
        var alternate_1 = ($$anchor3) => {
          var fragment_2 = comment();
          var node_2 = first_child(fragment_2);
          {
            var consequent_1 = ($$anchor4) => {
              {
                let $0 = derived_safe_equal(() => $knowledge() ?? []);
                bind_this(
                  Knowledge($$anchor4, {
                    get query() {
                      return query();
                    },
                    get knowledge() {
                      return get$1($0);
                    },
                    onSelect: (e) => {
                      const { type, data } = e;
                      if (type === "knowledge") {
                        insertTextHandler()("");
                        onUpload()({ type: "file", data });
                      } else if (type === "youtube") {
                        insertTextHandler()("");
                        onUpload()({ type: "youtube", data });
                      } else if (type === "web") {
                        insertTextHandler()("");
                        onUpload()({ type: "web", data });
                      }
                    },
                    get filteredItems() {
                      return get$1(filteredItems);
                    },
                    set filteredItems($$value) {
                      set(filteredItems, $$value);
                    },
                    $$legacy: true
                  }),
                  ($$value) => set(suggestionElement, $$value),
                  () => get$1(suggestionElement)
                );
              }
            };
            var alternate = ($$anchor4) => {
              var fragment_4 = comment();
              var node_3 = first_child(fragment_4);
              {
                var consequent_2 = ($$anchor5) => {
                  bind_this(
                    Models($$anchor5, {
                      get query() {
                        return query();
                      },
                      onSelect: (e) => {
                        const { type, data } = e;
                        if (type === "model") {
                          insertTextHandler()("");
                          onSelect()({ type: "model", data });
                        }
                      },
                      get filteredItems() {
                        return get$1(filteredItems);
                      },
                      set filteredItems($$value) {
                        set(filteredItems, $$value);
                      },
                      $$legacy: true
                    }),
                    ($$value) => set(suggestionElement, $$value),
                    () => get$1(suggestionElement)
                  );
                };
                if_block(
                  node_3,
                  ($$render) => {
                    if (char() === "@") $$render(consequent_2);
                  },
                  true
                );
              }
              append($$anchor4, fragment_4);
            };
            if_block(
              node_2,
              ($$render) => {
                if (char() === "#") $$render(consequent_1);
                else $$render(alternate, false);
              },
              true
            );
          }
          append($$anchor3, fragment_2);
        };
        if_block(node_1, ($$render) => {
          if (char() === "/") $$render(consequent);
          else $$render(alternate_1, false);
        });
      }
      append($$anchor2, fragment);
    };
    var alternate_2 = ($$anchor2) => {
      var div_2 = root_7();
      var node_4 = child(div_2);
      Spinner(node_4, {});
      reset(div_2);
      append($$anchor2, div_2);
    };
    if_block(node, ($$render) => {
      if (!get$1(loading)) $$render(consequent_3);
      else $$render(alternate_2, false);
    });
  }
  reset(div_1);
  reset(div);
  template_effect(() => set_class(div, 1, `${(get$1(filteredItems), untrack(() => (get$1(filteredItems) ?? []).length > 0 ? "" : "hidden")) ?? ""} rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 flex flex-col bg-white dark:bg-gray-850 w-72 p-1`));
  append($$anchor, div);
  bind_prop($$props, "_onKeyDown", _onKeyDown);
  var $$pop = pop($$exports);
  $$cleanup();
  return $$pop;
}
export {
  Clip as C,
  InputVariablesModal as I,
  Pane_group as P,
  Camera as a,
  CommandSuggestionList as b,
  Pane as c,
  Pane_resizer as d,
  getSuggestionRenderer as g
};
