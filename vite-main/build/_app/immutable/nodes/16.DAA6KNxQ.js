import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, g as getContext, o as onMount, f as first_child, a as pop, s as set, m as mutable_source, b as get, c as child, r as reset } from "../chunks/BxIY6ir7.js";
import { c as comment, a as append, f as from_html } from "../chunks/CAbo1QWi.js";
import { i as if_block } from "../chunks/BoSuMvtf.js";
import { i as init } from "../chunks/ByqEASoO.js";
import { s as setup_stores, a as store_get } from "../chunks/BvQ5O7-v.js";
import { t as toast } from "../chunks/BccDN__m.js";
import { g as goto } from "../chunks/h-B6Md2q.js";
import { p as page } from "../chunks/CrvggIeO.js";
import { f as functions, a as models, c as config, b as settings } from "../chunks/2Yg1sHDo.js";
import { a as getFunctionById, u as updateFunctionById, g as getFunctions } from "../chunks/CZmOTAge.js";
import { F as FunctionEditor } from "../chunks/DSGWtFFP.js";
import { S as Spinner } from "../chunks/CtnI4RVL.js";
import { g as getModels } from "../chunks/DtDmpg9G.js";
import { e as extractFrontmatter, c as compareVersion } from "../chunks/Bh-hrM1w.js";
import { W as WEBUI_VERSION } from "../chunks/DQ9UxF7k.js";
var root_1 = from_html(`<div class="px-[16px] h-full"><!></div>`);
var root_2 = from_html(`<div class="flex items-center justify-center h-full"><div class=" pb-16"><!></div></div>`);
function _page($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $page = () => store_get(page, "$page", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let func = mutable_source(null);
  const saveHandler = async (data) => {
    var _a, _b, _c;
    console.log(data);
    const manifest = extractFrontmatter(data.content);
    if (compareVersion((manifest == null ? void 0 : manifest.required_open_webui_version) ?? "0.0.0", WEBUI_VERSION)) {
      console.log("Version is lower than required");
      toast.error($i18n().t("Open WebUI version (v{{OPEN_WEBUI_VERSION}}) is lower than required version (v{{REQUIRED_VERSION}})", {
        OPEN_WEBUI_VERSION: WEBUI_VERSION,
        REQUIRED_VERSION: (manifest == null ? void 0 : manifest.required_open_webui_version) ?? "0.0.0"
      }));
      return;
    }
    const res = await updateFunctionById(localStorage.token, get(func).id, {
      id: data.id,
      name: data.name,
      meta: data.meta,
      content: data.content
    }).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      toast.success($i18n().t("Function updated successfully"));
      functions.set(await getFunctions(localStorage.token));
      models.set(await getModels(localStorage.token, ((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_direct_connections) && (((_c = $settings()) == null ? void 0 : _c.directConnections) ?? null), false, true));
    }
  };
  onMount(async () => {
    console.log("mounted");
    const id = $page().url.searchParams.get("id");
    if (id) {
      set(func, await getFunctionById(localStorage.token, id).catch((error) => {
        toast.error(`${error}`);
        goto("/admin/functions");
        return null;
      }));
      console.log(get(func));
    }
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var div = root_1();
      var node_1 = child(div);
      FunctionEditor(node_1, {
        edit: true,
        get id() {
          return get(func).id;
        },
        get name() {
          return get(func).name;
        },
        get meta() {
          return get(func).meta;
        },
        get content() {
          return get(func).content;
        },
        onSave: (value) => {
          saveHandler(value);
        }
      });
      reset(div);
      append($$anchor2, div);
    };
    var alternate = ($$anchor2) => {
      var div_1 = root_2();
      var div_2 = child(div_1);
      var node_2 = child(div_2);
      Spinner(node_2, { className: "size-5" });
      reset(div_2);
      reset(div_1);
      append($$anchor2, div_1);
    };
    if_block(node, ($$render) => {
      if (get(func)) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _page as component
};
