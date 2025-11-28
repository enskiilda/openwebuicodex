import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, g as getContext, o as onMount, f as first_child, a as pop, s as set, m as mutable_source, b as get } from "../chunks/BxIY6ir7.js";
import { c as comment, a as append } from "../chunks/CAbo1QWi.js";
import { i as if_block } from "../chunks/BoSuMvtf.js";
import { i as init } from "../chunks/ByqEASoO.js";
import { s as setup_stores, a as store_get } from "../chunks/BvQ5O7-v.js";
import { t as toast } from "../chunks/BccDN__m.js";
import { g as goto } from "../chunks/h-B6Md2q.js";
import { p as page } from "../chunks/CrvggIeO.js";
import { a as models, c as config, b as settings } from "../chunks/2Yg1sHDo.js";
import { g as getModelById, u as updateModelById } from "../chunks/BGM--f6E.js";
import { g as getModels } from "../chunks/DtDmpg9G.js";
import { M as ModelEditor } from "../chunks/COhzI1sD.js";
function _page($$anchor, $$props) {
  push($$props, false);
  const $page = () => store_get(page, "$page", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let model = mutable_source(null);
  onMount(async () => {
    const _id = $page().url.searchParams.get("id");
    if (_id) {
      set(model, await getModelById(localStorage.token, _id).catch((e) => {
        return null;
      }));
      if (!get(model)) {
        goto("/workspace/models");
      }
    } else {
      goto("/workspace/models");
    }
  });
  const onSubmit = async (modelInfo) => {
    var _a, _b, _c;
    const res = await updateModelById(localStorage.token, modelInfo.id, modelInfo);
    if (res) {
      await models.set(await getModels(localStorage.token, ((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_direct_connections) && (((_c = $settings()) == null ? void 0 : _c.directConnections) ?? null)));
      toast.success($i18n().t("Model updated successfully"));
      await goto("/workspace/models");
    }
  };
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      ModelEditor($$anchor2, {
        edit: true,
        get model() {
          return get(model);
        },
        onSubmit
      });
    };
    if_block(node, ($$render) => {
      if (get(model)) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _page as component
};
