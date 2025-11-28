import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, a as pop } from "../chunks/BxIY6ir7.js";
import { i as init } from "../chunks/ByqEASoO.js";
import { s as setup_stores, a as store_get } from "../chunks/BvQ5O7-v.js";
import { p as page } from "../chunks/CrvggIeO.js";
import { C as Chat } from "../chunks/C0vJEsB_.js";
function _page($$anchor, $$props) {
  push($$props, false);
  const $page = () => store_get(page, "$page", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  init();
  Chat($$anchor, {
    get chatIdProp() {
      return $page().params.id;
    }
  });
  pop();
  $$cleanup();
}
export {
  _page as component
};
