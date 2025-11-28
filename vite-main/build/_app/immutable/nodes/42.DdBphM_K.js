import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, g as getContext, o as onMount, f as first_child, a as pop, s as set, m as mutable_source, b as get, c as child, r as reset } from "../chunks/BxIY6ir7.js";
import { c as comment, a as append, f as from_html } from "../chunks/CAbo1QWi.js";
import { i as if_block } from "../chunks/BoSuMvtf.js";
import { i as init } from "../chunks/ByqEASoO.js";
import { s as setup_stores, a as store_get } from "../chunks/BvQ5O7-v.js";
import { g as goto } from "../chunks/h-B6Md2q.js";
import { p as page } from "../chunks/CrvggIeO.js";
import { a as getToolById, u as updateToolById, g as getTools } from "../chunks/DloK8TH_.js";
import { S as Spinner } from "../chunks/CtnI4RVL.js";
import { T as ToolkitEditor } from "../chunks/gStZIjy6.js";
import { W as WEBUI_VERSION } from "../chunks/DQ9UxF7k.js";
import { t as tools } from "../chunks/2Yg1sHDo.js";
import { e as extractFrontmatter, c as compareVersion } from "../chunks/Bh-hrM1w.js";
import { t as toast } from "../chunks/BccDN__m.js";
var root_2 = from_html(`<div class="flex items-center justify-center h-full"><div class=" pb-16"><!></div></div>`);
function _page($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $page = () => store_get(page, "$page", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let tool = mutable_source(null);
  const saveHandler = async (data) => {
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
    const res = await updateToolById(localStorage.token, get(tool).id, {
      id: data.id,
      name: data.name,
      meta: data.meta,
      content: data.content,
      access_control: data.access_control
    }).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      toast.success($i18n().t("Tool updated successfully"));
      tools.set(await getTools(localStorage.token));
    }
  };
  onMount(async () => {
    console.log("mounted");
    const id = $page().url.searchParams.get("id");
    if (id) {
      set(tool, await getToolById(localStorage.token, id).catch((error) => {
        toast.error(`${error}`);
        goto("/workspace/tools");
        return null;
      }));
      console.log(get(tool));
    }
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      ToolkitEditor($$anchor2, {
        edit: true,
        get id() {
          return get(tool).id;
        },
        get name() {
          return get(tool).name;
        },
        get meta() {
          return get(tool).meta;
        },
        get content() {
          return get(tool).content;
        },
        get accessControl() {
          return get(tool).access_control;
        },
        onSave: (value) => {
          saveHandler(value);
        }
      });
    };
    var alternate = ($$anchor2) => {
      var div = root_2();
      var div_1 = child(div);
      var node_1 = child(div_1);
      Spinner(node_1, { className: "size-5" });
      reset(div_1);
      reset(div);
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (get(tool)) $$render(consequent);
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
