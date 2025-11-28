import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, g as getContext, o as onMount, f as first_child, a as pop, s as set, m as mutable_source, b as get } from "../chunks/BxIY6ir7.js";
import { c as comment, a as append } from "../chunks/CAbo1QWi.js";
import { k as key } from "../chunks/CmeGWm0r.js";
import { i as init } from "../chunks/ByqEASoO.js";
import { s as setup_stores, a as store_get } from "../chunks/BvQ5O7-v.js";
import { t as toast } from "../chunks/BccDN__m.js";
import { g as goto } from "../chunks/h-B6Md2q.js";
import { a as models, c as config, b as settings } from "../chunks/2Yg1sHDo.js";
import { b as WEBUI_BASE_URL } from "../chunks/DQ9UxF7k.js";
import { c as createNewModel } from "../chunks/BGM--f6E.js";
import { g as getModels } from "../chunks/DtDmpg9G.js";
import { M as ModelEditor } from "../chunks/COhzI1sD.js";
function _page($$anchor, $$props) {
  push($$props, false);
  const $models = () => store_get(models, "$models", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  const onSubmit = async (modelInfo) => {
    var _a, _b, _c;
    if ($models().find((m) => m.id === modelInfo.id)) {
      toast.error($i18n().t("Error: A model with the ID '{{modelId}}' already exists. Please select a different ID to proceed.", { modelId: modelInfo.id }));
      return;
    }
    if (modelInfo.id === "") {
      toast.error($i18n().t("Error: Model ID cannot be empty. Please enter a valid ID to proceed."));
      return;
    }
    if (modelInfo) {
      const res = await createNewModel(localStorage.token, {
        ...modelInfo,
        meta: {
          ...modelInfo.meta,
          profile_image_url: modelInfo.meta.profile_image_url ?? `${WEBUI_BASE_URL}/static/favicon.png`,
          suggestion_prompts: modelInfo.meta.suggestion_prompts ? modelInfo.meta.suggestion_prompts.filter((prompt) => prompt.content !== "") : null
        },
        params: { ...modelInfo.params }
      }).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (res) {
        await models.set(await getModels(localStorage.token, ((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_direct_connections) && (((_c = $settings()) == null ? void 0 : _c.directConnections) ?? null)));
        toast.success($i18n().t("Model created successfully!"));
        await goto("/workspace/models");
      }
    }
  };
  let model = mutable_source(null);
  onMount(async () => {
    window.addEventListener("message", async (event) => {
      if (![
        "https://openwebui.com",
        "https://www.openwebui.com",
        "http://localhost:5173"
      ].includes(event.origin)) {
        return;
      }
      try {
        let data = JSON.parse(event.data);
        if (data == null ? void 0 : data.info) {
          data = data.info;
        }
        set(model, data);
      } catch (e) {
        console.error("Failed to parse message data:", e);
      }
    });
    if (window.opener ?? false) {
      window.opener.postMessage("loaded", "*");
    }
    if (sessionStorage.model) {
      set(model, JSON.parse(sessionStorage.model));
      sessionStorage.removeItem("model");
    }
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  key(node, () => get(model), ($$anchor2) => {
    ModelEditor($$anchor2, {
      get model() {
        return get(model);
      },
      onSubmit
    });
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _page as component
};
