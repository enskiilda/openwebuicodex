import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, g as getContext, o as onMount, f as first_child, a as pop, s as set, m as mutable_source, b as get } from "../chunks/BxIY6ir7.js";
import { c as comment, a as append } from "../chunks/CAbo1QWi.js";
import { k as key } from "../chunks/CmeGWm0r.js";
import { i as init } from "../chunks/ByqEASoO.js";
import { s as setup_stores, a as store_get } from "../chunks/BvQ5O7-v.js";
import { t as toast } from "../chunks/BccDN__m.js";
import { g as goto } from "../chunks/h-B6Md2q.js";
import { p as prompts } from "../chunks/2Yg1sHDo.js";
import { c as createNewPrompt, g as getPrompts } from "../chunks/BukVi0LS.js";
import { P as PromptEditor } from "../chunks/nWIHoSqo.js";
function _page($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let prompt = mutable_source(null);
  let clone = mutable_source(false);
  const onSubmit = async (_prompt) => {
    const res = await createNewPrompt(localStorage.token, _prompt).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      toast.success($i18n().t("Prompt created successfully"));
      await prompts.set(await getPrompts(localStorage.token));
      await goto("/workspace/prompts");
    }
  };
  onMount(async () => {
    window.addEventListener("message", async (event) => {
      if (![
        "https://openwebui.com",
        "https://www.openwebui.com",
        "http://localhost:5173"
      ].includes(event.origin)) return;
      const _prompt = JSON.parse(event.data);
      console.log("Received prompt via window message:", _prompt);
      set(clone, true);
      set(prompt, {
        title: _prompt.title,
        command: _prompt.command,
        content: _prompt.content,
        access_control: null
      });
    });
    if (window.opener ?? false) {
      window.opener.postMessage("loaded", "*");
    }
    if (sessionStorage.prompt) {
      const _prompt = JSON.parse(sessionStorage.prompt);
      sessionStorage.removeItem("prompt");
      console.log("Received prompt via sessionStorage:", _prompt);
      set(clone, true);
      set(prompt, {
        title: _prompt.title,
        command: _prompt.command,
        content: _prompt.content,
        access_control: null
      });
    }
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  key(node, () => get(prompt), ($$anchor2) => {
    PromptEditor($$anchor2, {
      get prompt() {
        return get(prompt);
      },
      onSubmit,
      get clone() {
        return get(clone);
      }
    });
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _page as component
};
