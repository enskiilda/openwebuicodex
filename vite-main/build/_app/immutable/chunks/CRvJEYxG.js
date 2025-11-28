import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, g as getContext, c as child, r as reset, e as sibling, t as template_effect, u as untrack, a as pop } from "./BxIY6ir7.js";
import { s as set_text, e as event } from "./cBADewWV.js";
import { f as from_html, a as append } from "./CAbo1QWi.js";
import { i as init } from "./ByqEASoO.js";
import { p as prop } from "./BRmGPDvq.js";
import { a as store_get, s as setup_stores } from "./BvQ5O7-v.js";
import { M as Modal } from "./DF6V1elH.js";
import { A as AccessControl } from "./CFsG9iJ9.js";
import { X as XMark } from "./CUUSX84-.js";
var root_1 = from_html(`<div><div class=" flex justify-between dark:text-gray-100 px-5 pt-3 pb-1"><div class=" text-lg font-medium self-center font-primary"> </div> <button class="self-center"><!></button></div> <div class="w-full px-5 pb-4 dark:text-white"><!></div></div>`);
function AccessControlModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let accessControl = prop($$props, "accessControl", 28, () => ({}));
  let accessRoles = prop($$props, "accessRoles", 24, () => ["read"]);
  let share = prop($$props, "share", 8, true);
  let sharePublic = prop($$props, "sharePublic", 8, true);
  let onChange = prop($$props, "onChange", 8, () => {
  });
  init();
  Modal($$anchor, {
    size: "sm",
    get show() {
      return show();
    },
    set show($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var div = root_1();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var text = child(div_2, true);
      reset(div_2);
      var button = sibling(div_2, 2);
      var node = child(button);
      XMark(node, { className: "size-5" });
      reset(button);
      reset(div_1);
      var div_3 = sibling(div_1, 2);
      var node_1 = child(div_3);
      AccessControl(node_1, {
        get onChange() {
          return onChange();
        },
        get accessRoles() {
          return accessRoles();
        },
        get share() {
          return share();
        },
        get sharePublic() {
          return sharePublic();
        },
        get accessControl() {
          return accessControl();
        },
        set accessControl($$value) {
          accessControl($$value);
        },
        $$legacy: true
      });
      reset(div_3);
      reset(div);
      template_effect(($0) => set_text(text, $0), [
        () => ($i18n(), untrack(() => $i18n().t("Access Control")))
      ]);
      event("click", button, () => {
        show(false);
      });
      append($$anchor2, div);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
export {
  AccessControlModal as A
};
