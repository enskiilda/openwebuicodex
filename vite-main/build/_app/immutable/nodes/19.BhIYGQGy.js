import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, o as onMount, a as pop } from "../chunks/BxIY6ir7.js";
import { i as init } from "../chunks/ByqEASoO.js";
import { g as goto } from "../chunks/h-B6Md2q.js";
import { U as Users } from "../chunks/Bc4GEkxx.js";
function _page($$anchor, $$props) {
  push($$props, false);
  onMount(() => {
    goto("/admin/users/overview");
  });
  init();
  Users($$anchor, {});
  pop();
}
export {
  _page as component
};
