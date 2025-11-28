import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, o as onMount, a as pop } from "../chunks/BxIY6ir7.js";
import { i as init } from "../chunks/ByqEASoO.js";
import { s as setup_stores, a as store_get } from "../chunks/BvQ5O7-v.js";
import { g as goto } from "../chunks/h-B6Md2q.js";
import { p as page } from "../chunks/CrvggIeO.js";
import { d as dayjs2 } from "../chunks/OO7lCI-F.js";
import "../chunks/CAzIiltw.js";
import { c as createNoteHandler } from "../chunks/CYkpo2Xm.js";
function _page($$anchor, $$props) {
  push($$props, false);
  const $page = () => store_get(page, "$page", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  onMount(async () => {
    const title = $page().url.searchParams.get("title") ?? dayjs2().format("YYYY-MM-DD");
    const content = $page().url.searchParams.get("content") ?? "";
    const res = await createNoteHandler(title, content);
    if (res) {
      goto(`/notes/${res.id}`);
    }
  });
  init();
  pop();
  $$cleanup();
}
export {
  _page as component
};
