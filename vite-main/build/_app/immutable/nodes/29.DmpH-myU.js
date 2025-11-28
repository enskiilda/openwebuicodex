import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, o as onMount, a as pop } from "../chunks/BxIY6ir7.js";
import { i as init } from "../chunks/ByqEASoO.js";
import { s as setup_stores, a as store_get } from "../chunks/BvQ5O7-v.js";
import { g as goto } from "../chunks/h-B6Md2q.js";
import { u as user } from "../chunks/2Yg1sHDo.js";
function _page($$anchor, $$props) {
  push($$props, false);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  onMount(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
    if (((_a = $user()) == null ? void 0 : _a.role) !== "admin") {
      if ((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.workspace) == null ? void 0 : _d.models) {
        goto("/workspace/models");
      } else if ((_g = (_f = (_e = $user()) == null ? void 0 : _e.permissions) == null ? void 0 : _f.workspace) == null ? void 0 : _g.knowledge) {
        goto("/workspace/knowledge");
      } else if ((_j = (_i = (_h = $user()) == null ? void 0 : _h.permissions) == null ? void 0 : _i.workspace) == null ? void 0 : _j.prompts) {
        goto("/workspace/prompts");
      } else if ((_m = (_l = (_k = $user()) == null ? void 0 : _k.permissions) == null ? void 0 : _l.workspace) == null ? void 0 : _m.tools) {
        goto("/workspace/tools");
      } else {
        goto("/");
      }
    } else {
      goto("/workspace/models");
    }
  });
  init();
  pop();
  $$cleanup();
}
export {
  _page as component
};
