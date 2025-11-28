import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, g as getContext, o as onMount, f as first_child, a as pop, s as set, m as mutable_source, b as get } from "../chunks/BxIY6ir7.js";
import { c as comment, a as append } from "../chunks/CAbo1QWi.js";
import { i as if_block } from "../chunks/BoSuMvtf.js";
import { i as init } from "../chunks/ByqEASoO.js";
import { s as setup_stores, a as store_get } from "../chunks/BvQ5O7-v.js";
import { t as toast } from "../chunks/BccDN__m.js";
import { g as goto } from "../chunks/h-B6Md2q.js";
import { p as prompts } from "../chunks/2Yg1sHDo.js";
import { a as getPromptByCommand, u as updatePromptByCommand, g as getPrompts } from "../chunks/BukVi0LS.js";
import { p as page } from "../chunks/CrvggIeO.js";
import { P as PromptEditor } from "../chunks/nWIHoSqo.js";
function _page($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $page = () => store_get(page, "$page", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let prompt = mutable_source(null);
  const onSubmit = async (_prompt) => {
    console.log(_prompt);
    const prompt2 = await updatePromptByCommand(localStorage.token, _prompt).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (prompt2) {
      toast.success($i18n().t("Prompt updated successfully"));
      await prompts.set(await getPrompts(localStorage.token));
      await goto("/workspace/prompts");
    }
  };
  onMount(async () => {
    const command = $page().url.searchParams.get("command");
    if (command) {
      const _prompt = await getPromptByCommand(localStorage.token, command.replace(/\//g, "")).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (_prompt) {
        set(prompt, {
          title: _prompt.title,
          command: _prompt.command,
          content: _prompt.content,
          access_control: (_prompt == null ? void 0 : _prompt.access_control) === void 0 ? {} : _prompt == null ? void 0 : _prompt.access_control
        });
      } else {
        goto("/workspace/prompts");
      }
    } else {
      goto("/workspace/prompts");
    }
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      PromptEditor($$anchor2, {
        get prompt() {
          return get(prompt);
        },
        onSubmit,
        edit: true
      });
    };
    if_block(node, ($$render) => {
      if (get(prompt)) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _page as component
};
