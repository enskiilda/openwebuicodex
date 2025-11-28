import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, o as onMount, a as pop } from "../chunks/BxIY6ir7.js";
import { i as init } from "../chunks/ByqEASoO.js";
import { s as setup_stores, a as store_get } from "../chunks/BvQ5O7-v.js";
import { t as toast } from "../chunks/BccDN__m.js";
import { C as Chat } from "../chunks/C0vJEsB_.js";
import { p as page } from "../chunks/CrvggIeO.js";
function _page($$anchor, $$props) {
  push($$props, false);
  const $page = () => store_get(page, "$page", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  onMount(() => {
    if ($page().url.searchParams.get("error")) {
      toast.error($page().url.searchParams.get("error") || "An unknown error occurred.");
    }
  });
  init();
  Chat($$anchor, {});
  pop();
  $$cleanup();
}
export {
  _page as component
};
