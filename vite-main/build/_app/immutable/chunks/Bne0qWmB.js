import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, n as createEventDispatcher, o as onMount, b as get, m as mutable_source, ay as onDestroy, c as child, r as reset, s as set, a as pop } from "./BxIY6ir7.js";
import { f as from_html, a as append } from "./CAbo1QWi.js";
import { s as slot } from "./CZEGIGsR.js";
import { b as bind_this } from "./D16JuV5t.js";
import { i as init } from "./ByqEASoO.js";
var root = from_html(`<div><!></div>`);
function Loader($$anchor, $$props) {
  push($$props, false);
  const dispatch = createEventDispatcher();
  let loaderElement = mutable_source();
  let observer;
  let intervalId;
  onMount(() => {
    observer = new IntersectionObserver(
      (entries, observer2) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intervalId = setInterval(
              () => {
                dispatch("visible");
              },
              100
            );
          } else {
            clearInterval(intervalId);
          }
        });
      },
      {
        root: null,
        // viewport
        rootMargin: "0px",
        threshold: 0.1
        // When 10% of the loader is visible
      }
    );
    observer.observe(get(loaderElement));
  });
  onDestroy(() => {
    if (observer) {
      observer.disconnect();
    }
    if (intervalId) {
      clearInterval(intervalId);
    }
  });
  init();
  var div = root();
  var node = child(div);
  slot(node, $$props, "default", {}, null);
  reset(div);
  bind_this(div, ($$value) => set(loaderElement, $$value), () => get(loaderElement));
  append($$anchor, div);
  pop();
}
export {
  Loader as L
};
