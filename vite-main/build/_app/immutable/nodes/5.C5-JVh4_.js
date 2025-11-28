import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, g as getContext, o as onMount, f as first_child, a as pop, d as deferred_template_effect, s as set, m as mutable_source, $ as $document, b as get } from "../chunks/BxIY6ir7.js";
import { c as comment, a as append } from "../chunks/CAbo1QWi.js";
import { i as if_block } from "../chunks/BoSuMvtf.js";
import { s as slot } from "../chunks/CZEGIGsR.js";
import { h as head } from "../chunks/Cb8chUSZ.js";
import { i as init } from "../chunks/ByqEASoO.js";
import { s as setup_stores, a as store_get } from "../chunks/BvQ5O7-v.js";
import { c as config, u as user, W as WEBUI_NAME } from "../chunks/2Yg1sHDo.js";
import { g as goto } from "../chunks/h-B6Md2q.js";
function _layout($$anchor, $$props) {
  push($$props, false);
  const $config = () => store_get(config, "$config", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $WEBUI_NAME = () => store_get(WEBUI_NAME, "$WEBUI_NAME", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let loaded = mutable_source(false);
  onMount(async () => {
    var _a, _b, _c, _d, _e, _f;
    if (!((((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_notes) ?? false) && (((_c = $user()) == null ? void 0 : _c.role) === "admin" || (((_f = (_e = (_d = $user()) == null ? void 0 : _d.permissions) == null ? void 0 : _e.features) == null ? void 0 : _f.notes) ?? true)))) {
      goto("/");
    }
    set(loaded, true);
  });
  init();
  var fragment = comment();
  head("1v8al8m", ($$anchor2) => {
    deferred_template_effect(
      ($0) => {
        $document.title = `
		${$0 ?? ""} • ${$WEBUI_NAME() ?? ""}
	`;
      },
      [() => $i18n().t("Notes")]
    );
  });
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      slot(node_1, $$props, "default", {}, null);
      append($$anchor2, fragment_1);
    };
    if_block(node, ($$render) => {
      if (get(loaded)) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _layout as component
};
