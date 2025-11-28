import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, g as getContext, t as template_effect, b as get, a as pop, e as sibling, c as child, m as mutable_source, s as set, r as reset, aG as remove_textarea_child, h as derived_safe_equal } from "../chunks/BxIY6ir7.js";
import { e as event, s as set_text } from "../chunks/cBADewWV.js";
import { f as from_html, a as append } from "../chunks/CAbo1QWi.js";
import { i as if_block } from "../chunks/BoSuMvtf.js";
import { a as set_attribute, s as set_class, r as remove_input_defaults } from "../chunks/kXiCYuyj.js";
import { b as bind_value } from "../chunks/DVLuwGai.js";
import { p as preventDefault } from "../chunks/CGgk3ROl.js";
import { i as init } from "../chunks/ByqEASoO.js";
import { s as setup_stores, a as store_get } from "../chunks/BvQ5O7-v.js";
import { g as goto } from "../chunks/h-B6Md2q.js";
import { c as createNewKnowledge, g as getKnowledgeBases } from "../chunks/C_BzFfir.js";
import { t as toast } from "../chunks/BccDN__m.js";
import { k as knowledge, u as user } from "../chunks/2Yg1sHDo.js";
import { A as AccessControl } from "../chunks/CFsG9iJ9.js";
import { S as Spinner } from "../chunks/CtnI4RVL.js";
var root_1 = from_html(`<div class="ml-1.5 self-center"><!></div>`);
var root = from_html(`<div class="w-full max-h-full"><button class="flex space-x-1"><div class=" self-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd"></path></svg></div> <div class=" self-center font-medium text-sm"> </div></button> <form class="flex flex-col max-w-lg mx-auto mt-10 mb-10"><div class=" w-full flex flex-col justify-center"><div class=" text-2xl font-medium font-primary mb-2.5"> </div> <div class="w-full flex flex-col gap-2.5"><div class="w-full"><div class=" text-sm mb-2"> </div> <div class="w-full mt-1"><input class="w-full rounded-lg py-2 px-4 text-sm bg-gray-50 dark:text-gray-300 dark:bg-gray-850 outline-hidden" type="text" required/></div></div> <div><div class="text-sm mb-2"> </div> <div class=" w-full mt-1"><textarea class="w-full resize-none rounded-lg py-2 px-4 text-sm bg-gray-50 dark:text-gray-300 dark:bg-gray-850 outline-hidden" rows="4" required></textarea></div></div></div></div> <div class="mt-2"><div class="px-4 py-3 bg-gray-50 dark:bg-gray-950 rounded-3xl"><!></div></div> <div class="flex justify-end mt-2"><div><button type="submit"><div class=" self-center font-medium"> </div> <!></button></div></div></form></div>`);
function CreateKnowledgeBase($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let loading = mutable_source(false);
  let name = mutable_source("");
  let description = mutable_source("");
  let accessControl = mutable_source({});
  const submitHandler = async () => {
    set(loading, true);
    if (get(name).trim() === "" || get(description).trim() === "") {
      toast.error($i18n().t("Please fill in all fields."));
      set(name, "");
      set(description, "");
      set(loading, false);
      return;
    }
    const res = await createNewKnowledge(localStorage.token, get(name), get(description), get(accessControl)).catch((e) => {
      toast.error(`${e}`);
    });
    if (res) {
      toast.success($i18n().t("Knowledge created successfully."));
      knowledge.set(await getKnowledgeBases(localStorage.token));
      goto(`/workspace/knowledge/${res.id}`);
    }
    set(loading, false);
  };
  init();
  var div = root();
  var button = child(div);
  var div_1 = sibling(child(button), 2);
  var text = child(div_1, true);
  reset(div_1);
  reset(button);
  var form = sibling(button, 2);
  var div_2 = child(form);
  var div_3 = child(div_2);
  var text_1 = child(div_3, true);
  reset(div_3);
  var div_4 = sibling(div_3, 2);
  var div_5 = child(div_4);
  var div_6 = child(div_5);
  var text_2 = child(div_6, true);
  reset(div_6);
  var div_7 = sibling(div_6, 2);
  var input = child(div_7);
  remove_input_defaults(input);
  reset(div_7);
  reset(div_5);
  var div_8 = sibling(div_5, 2);
  var div_9 = child(div_8);
  var text_3 = child(div_9, true);
  reset(div_9);
  var div_10 = sibling(div_9, 2);
  var textarea = child(div_10);
  remove_textarea_child(textarea);
  reset(div_10);
  reset(div_8);
  reset(div_4);
  reset(div_2);
  var div_11 = sibling(div_2, 2);
  var div_12 = child(div_11);
  var node = child(div_12);
  {
    let $0 = derived_safe_equal(() => {
      var _a, _b, _c, _d;
      return ((_c = (_b = (_a = $user()) == null ? void 0 : _a.permissions) == null ? void 0 : _b.sharing) == null ? void 0 : _c.knowledge) || ((_d = $user()) == null ? void 0 : _d.role) === "admin";
    });
    let $1 = derived_safe_equal(() => {
      var _a, _b, _c, _d;
      return ((_c = (_b = (_a = $user()) == null ? void 0 : _a.permissions) == null ? void 0 : _b.sharing) == null ? void 0 : _c.public_knowledge) || ((_d = $user()) == null ? void 0 : _d.role) === "admin";
    });
    AccessControl(node, {
      accessRoles: ["read", "write"],
      get share() {
        return get($0);
      },
      get sharePublic() {
        return get($1);
      },
      get accessControl() {
        return get(accessControl);
      },
      set accessControl($$value) {
        set(accessControl, $$value);
      },
      $$legacy: true
    });
  }
  reset(div_12);
  reset(div_11);
  var div_13 = sibling(div_11, 2);
  var div_14 = child(div_13);
  var button_1 = child(div_14);
  var div_15 = child(button_1);
  var text_4 = child(div_15, true);
  reset(div_15);
  var node_1 = sibling(div_15, 2);
  {
    var consequent = ($$anchor2) => {
      var div_16 = root_1();
      var node_2 = child(div_16);
      Spinner(node_2, {});
      reset(div_16);
      append($$anchor2, div_16);
    };
    if_block(node_1, ($$render) => {
      if (get(loading)) $$render(consequent);
    });
  }
  reset(button_1);
  reset(div_14);
  reset(div_13);
  reset(form);
  reset(div);
  template_effect(
    ($0, $1, $2, $3, $4, $5, $6) => {
      set_text(text, $0);
      set_text(text_1, $1);
      set_text(text_2, $2);
      set_attribute(input, "placeholder", $3);
      set_text(text_3, $4);
      set_attribute(textarea, "placeholder", $5);
      set_class(button_1, 1, ` text-sm px-4 py-2 transition rounded-lg ${get(loading) ? " cursor-not-allowed bg-gray-100 dark:bg-gray-800" : " bg-gray-50 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800"} flex`);
      button_1.disabled = get(loading);
      set_text(text_4, $6);
    },
    [
      () => $i18n().t("Back"),
      () => $i18n().t("Create a knowledge base"),
      () => $i18n().t("What are you working on?"),
      () => $i18n().t("Name your knowledge base"),
      () => $i18n().t("What are you trying to achieve?"),
      () => $i18n().t("Describe your knowledge base and objectives"),
      () => $i18n().t("Create Knowledge")
    ]
  );
  event("click", button, () => {
    goto("/workspace/knowledge");
  });
  bind_value(input, () => get(name), ($$value) => set(name, $$value));
  bind_value(textarea, () => get(description), ($$value) => set(description, $$value));
  event("submit", form, preventDefault(() => {
    submitHandler();
  }));
  append($$anchor, div);
  pop();
  $$cleanup();
}
function _page($$anchor) {
  CreateKnowledgeBase($$anchor, {});
}
export {
  _page as component
};
