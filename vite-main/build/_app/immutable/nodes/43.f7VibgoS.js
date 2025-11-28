import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, o as onMount, b as get, m as mutable_source, s as set, c as child, r as reset, t as template_effect, u as untrack, i as deep_read_state, a as pop, f as first_child, g as getContext, l as legacy_pre_effect, j as legacy_pre_effect_reset, e as sibling, h as derived_safe_equal, d as deferred_template_effect, $ as $document, k as tick, q as next } from "../chunks/BxIY6ir7.js";
import { s as set_text, e as event } from "../chunks/cBADewWV.js";
import { i as if_block } from "../chunks/BoSuMvtf.js";
import { h as html } from "../chunks/tLAl1VVg.js";
import { f as from_html, a as append, c as comment, t as text } from "../chunks/CAbo1QWi.js";
import { h as head } from "../chunks/Cb8chUSZ.js";
import { s as set_class, c as clsx, h as set_style, a as set_attribute, r as remove_input_defaults } from "../chunks/kXiCYuyj.js";
import { b as bind_value } from "../chunks/DVLuwGai.js";
import { i as init } from "../chunks/ByqEASoO.js";
import { s as setup_stores, a as store_get } from "../chunks/BvQ5O7-v.js";
import purify from "../chunks/bQFTtKkZ.js";
import { f as generateInitialsImage, m as marked } from "../chunks/Bh-hrM1w.js";
import { t as toast } from "../chunks/BccDN__m.js";
import { g as goto } from "../chunks/h-B6Md2q.js";
import { p as page } from "../chunks/CrvggIeO.js";
import { a as getBackendConfig } from "../chunks/DtDmpg9G.js";
import { g as getSessionUser, u as userSignIn, l as ldapUserSignIn, a as userSignUp } from "../chunks/GdVmBnqS.js";
import { b as WEBUI_BASE_URL } from "../chunks/DQ9UxF7k.js";
import { c as config, u as user, W as WEBUI_NAME, j as socket } from "../chunks/2Yg1sHDo.js";
import { S as Spinner } from "../chunks/CtnI4RVL.js";
import { p as prop } from "../chunks/BRmGPDvq.js";
import { k as key } from "../chunks/CmeGWm0r.js";
import { t as transition } from "../chunks/B3nUhwYU.js";
import { a as fly } from "../chunks/BNZI2i79.js";
import { e as each, i as index } from "../chunks/7_HZMPNF.js";
import { A as ArrowRightCircle } from "../chunks/NkZ50FRY.js";
import { S as SensitiveInput } from "../chunks/BmA2IqKa.js";
var root_1$2 = from_html(`<div class=" marquee-item"> </div>`);
var root$1 = from_html(`<div><div><!></div></div>`);
function Marquee($$anchor, $$props) {
  push($$props, false);
  let idx = mutable_source(0);
  let className = prop($$props, "className", 8, "");
  let words = prop($$props, "words", 24, () => ["lorem", "ipsum"]);
  let duration = prop($$props, "duration", 8, 4e3);
  onMount(() => {
    setInterval(
      async () => {
        if (get(idx) === words().length - 1) {
          set(idx, 0);
        } else {
          set(idx, get(idx) + 1);
        }
      },
      duration()
    );
  });
  init();
  var div = root$1();
  var div_1 = child(div);
  var node = child(div_1);
  key(node, () => get(idx), ($$anchor2) => {
    var div_2 = root_1$2();
    var text2 = child(div_2, true);
    reset(div_2);
    template_effect(($0) => set_text(text2, $0), [
      () => (deep_read_state(words()), get(idx), untrack(() => words().at(get(idx))))
    ]);
    transition(1, div_2, () => fly, () => ({ y: "30%", duration: 1e3 }));
    append($$anchor2, div_2);
  });
  reset(div_1);
  reset(div);
  template_effect(() => set_class(div, 1, clsx(className())));
  append($$anchor, div);
  pop();
}
var root_1$1 = from_html(`<div class="image w-full h-full absolute top-0 left-0 bg-cover bg-center transition-opacity duration-1000 svelte-14ofdb6"></div>`);
function SlideShow($$anchor, $$props) {
  push($$props, false);
  let imageUrls = prop($$props, "imageUrls", 24, () => [
    `${WEBUI_BASE_URL}/assets/images/adam.jpg`,
    `${WEBUI_BASE_URL}/assets/images/galaxy.jpg`,
    `${WEBUI_BASE_URL}/assets/images/earth.jpg`,
    `${WEBUI_BASE_URL}/assets/images/space.jpg`
  ]);
  let duration = prop($$props, "duration", 8, 5e3);
  let selectedImageIdx = mutable_source(0);
  onMount(() => {
    setInterval(
      () => {
        set(selectedImageIdx, (get(selectedImageIdx) + 1) % (imageUrls().length - 1));
      },
      duration()
    );
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  each(node, 1, imageUrls, index, ($$anchor2, imageUrl, idx) => {
    var div = root_1$1();
    template_effect(() => set_style(div, `opacity: ${get(selectedImageIdx) === idx ? 1 : 0}; background-image: url('${get(imageUrl) ?? ""}')`));
    append($$anchor2, div);
  });
  append($$anchor, fragment);
  pop();
}
var root_1 = from_html(`<div class="w-full h-screen max-h-[100dvh] text-white relative"><div class="fixed m-10 z-50"><div class="flex space-x-2"><div class=" self-center"><img id="logo" crossorigin="anonymous" class=" w-6 rounded-full" alt="logo"/></div></div></div> <!> <div class="w-full h-full absolute top-0 left-0 bg-linear-to-t from-20% from-black to-transparent"></div> <div class="w-full h-full absolute top-0 left-0 backdrop-blur-xs bg-black/50"></div> <div class="relative bg-transparent w-full h-screen max-h-[100dvh] flex z-10"><div class="flex flex-col justify-end w-full items-center pb-10 text-center"><div class="text-5xl lg:text-7xl font-secondary"><!> <div class="mt-0.5"> </div></div> <div class="flex justify-center mt-8"><div class="flex flex-col justify-center items-center"><button aria-labelledby="get-started" class="relative z-20 flex p-1 rounded-full bg-white/5 hover:bg-white/10 transition font-medium text-sm"><!></button> <div id="get-started" class="mt-1.5 font-primary text-base font-medium"> </div></div></div></div></div></div>`);
function OnBoarding($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let show = prop($$props, "show", 8, true);
  let getStartedHandler = prop($$props, "getStartedHandler", 8, () => {
  });
  function setLogoImage() {
    const logo = document.getElementById("logo");
    if (logo) {
      const isDarkMode = document.documentElement.classList.contains("dark");
      if (isDarkMode) {
        const darkImage = new Image();
        darkImage.src = `${WEBUI_BASE_URL}/static/favicon-dark.png`;
        darkImage.onload = () => {
          logo.src = `${WEBUI_BASE_URL}/static/favicon-dark.png`;
          logo.style.filter = "";
        };
        darkImage.onerror = () => {
          logo.style.filter = "invert(1)";
        };
      }
    }
  }
  legacy_pre_effect(() => deep_read_state(show()), () => {
    if (show()) {
      setLogoImage();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var div = root_1();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var div_3 = child(div_2);
      var img = child(div_3);
      reset(div_3);
      reset(div_2);
      reset(div_1);
      var node_1 = sibling(div_1, 2);
      SlideShow(node_1, { duration: 5e3 });
      var div_4 = sibling(node_1, 6);
      var div_5 = child(div_4);
      var div_6 = child(div_5);
      var node_2 = child(div_6);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => [
          $i18n().t("Explore the cosmos"),
          $i18n().t("Unlock mysteries"),
          $i18n().t("Chart new frontiers"),
          $i18n().t("Dive into knowledge"),
          $i18n().t("Discover wonders"),
          $i18n().t("Ignite curiosity"),
          $i18n().t("Forge new paths"),
          $i18n().t("Unravel secrets"),
          $i18n().t("Pioneer insights"),
          $i18n().t("Embark on adventures")
        ])));
        Marquee(node_2, {
          duration: 5e3,
          get words() {
            return get($0);
          }
        });
      }
      var div_7 = sibling(node_2, 2);
      var text2 = child(div_7, true);
      reset(div_7);
      reset(div_6);
      var div_8 = sibling(div_6, 2);
      var div_9 = child(div_8);
      var button = child(div_9);
      var node_3 = child(button);
      ArrowRightCircle(node_3, { className: "size-6" });
      reset(button);
      var div_10 = sibling(button, 2);
      var text_1 = child(div_10, true);
      reset(div_10);
      reset(div_9);
      reset(div_8);
      reset(div_5);
      reset(div_4);
      reset(div);
      template_effect(
        ($0, $1) => {
          set_attribute(img, "src", `${WEBUI_BASE_URL}/static/favicon.png`);
          set_text(text2, $0);
          set_text(text_1, $1);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t(`wherever you are`))),
          () => ($i18n(), untrack(() => $i18n().t(`Get started`)))
        ]
      );
      event("click", button, () => {
        getStartedHandler()();
      });
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (show()) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_3 = from_html(`<div class=" my-auto pb-10 w-full sm:max-w-md"><div class="flex items-center justify-center gap-3 text-xl sm:text-2xl text-center font-medium dark:text-gray-200"><div> </div> <div><!></div></div></div>`);
var root_5 = from_html(`<div class="flex justify-center mb-6"><img id="logo" crossorigin="anonymous" class="size-24 rounded-full" alt=""/></div>`);
var root_12 = from_html(`<div class="mt-1 text-xs font-medium text-gray-600 dark:text-gray-500"> </div>`);
var root_14 = from_html(`<div class="mb-2"><label for="name" class="text-sm font-medium text-left mb-1 block"> </label> <input type="text" id="name" class="my-0.5 w-full text-sm outline-hidden bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-600" autocomplete="name" required/></div>`);
var root_15 = from_html(`<div class="mb-2"><label for="username" class="text-sm font-medium text-left mb-1 block"> </label> <input type="text" class="my-0.5 w-full text-sm outline-hidden bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-600" autocomplete="username" name="username" id="username" required/></div>`);
var root_16 = from_html(`<div class="mb-2"><label for="email" class="text-sm font-medium text-left mb-1 block"> </label> <input type="email" id="email" class="my-0.5 w-full text-sm outline-hidden bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-600" autocomplete="email" name="email" required/></div>`);
var root_17 = from_html(`<div class="mt-2"><label for="confirm-password" class="text-sm font-medium text-left mb-1 block"> </label> <!></div>`);
var root_13 = from_html(`<div class="flex flex-col mt-4"><!> <!> <div><label for="password" class="text-sm font-medium text-left mb-1 block"> </label> <!></div> <!></div>`);
var root_19 = from_html(`<button class="bg-gray-700/5 hover:bg-gray-700/10 dark:bg-gray-100/5 dark:hover:bg-gray-100/10 dark:text-gray-300 dark:hover:text-white transition w-full rounded-full font-medium text-sm py-2.5" type="submit"> </button>`);
var root_21 = from_html(`<div class=" mt-4 text-sm text-center"> <button class=" font-medium underline" type="button"> </button></div>`);
var root_20 = from_html(`<button class="bg-gray-700/5 hover:bg-gray-700/10 dark:bg-gray-100/5 dark:hover:bg-gray-100/10 dark:text-gray-300 dark:hover:text-white transition w-full rounded-full font-medium text-sm py-2.5" type="submit"> </button> <!>`, 1);
var root_23 = from_html(`<span class="px-3 text-sm font-medium text-gray-900 dark:text-white bg-transparent"> </span>`);
var root_24 = from_html(`<button class="flex justify-center items-center bg-gray-700/5 hover:bg-gray-700/10 dark:bg-gray-100/5 dark:hover:bg-gray-100/10 dark:text-gray-300 dark:hover:text-white transition w-full rounded-full font-medium text-sm py-2.5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="size-6 mr-3"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></svg> <span> </span></button>`);
var root_25 = from_html(`<button class="flex justify-center items-center bg-gray-700/5 hover:bg-gray-700/10 dark:bg-gray-100/5 dark:hover:bg-gray-100/10 dark:text-gray-300 dark:hover:text-white transition w-full rounded-full font-medium text-sm py-2.5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" class="size-6 mr-3"><rect x="1" y="1" width="9" height="9" fill="#f25022"></rect><rect x="1" y="11" width="9" height="9" fill="#00a4ef"></rect><rect x="11" y="1" width="9" height="9" fill="#7fba00"></rect><rect x="11" y="11" width="9" height="9" fill="#ffb900"></rect></svg> <span> </span></button>`);
var root_26 = from_html(`<button class="flex justify-center items-center bg-gray-700/5 hover:bg-gray-700/10 dark:bg-gray-100/5 dark:hover:bg-gray-100/10 dark:text-gray-300 dark:hover:text-white transition w-full rounded-full font-medium text-sm py-2.5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-6 mr-3"><path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.92 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12z"></path></svg> <span> </span></button>`);
var root_27 = from_html(`<button class="flex justify-center items-center bg-gray-700/5 hover:bg-gray-700/10 dark:bg-gray-100/5 dark:hover:bg-gray-100/10 dark:text-gray-300 dark:hover:text-white transition w-full rounded-full font-medium text-sm py-2.5"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-3"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"></path></svg> <span> </span></button>`);
var root_28 = from_html(`<button class="flex justify-center items-center bg-gray-700/5 hover:bg-gray-700/10 dark:bg-gray-100/5 dark:hover:bg-gray-100/10 dark:text-gray-300 dark:hover:text-white transition w-full rounded-full font-medium text-sm py-2.5"><span> </span></button>`);
var root_22 = from_html(`<div class="inline-flex items-center justify-center w-full"><hr class="w-32 h-px my-4 border-0 dark:bg-gray-100/10 bg-gray-700/10"/> <!> <hr class="w-32 h-px my-4 border-0 dark:bg-gray-100/10 bg-gray-700/10"/></div> <div class="flex flex-col space-y-2"><!> <!> <!> <!> <!></div>`, 1);
var root_29 = from_html(`<div class="mt-2"><button class="flex justify-center items-center text-xs w-full text-center underline" type="button"><span> </span></button></div>`);
var root_30 = from_html(`<div class="max-w-3xl mx-auto"><div class="mt-2 text-[0.7rem] text-gray-500 dark:text-gray-400 marked"><!></div></div>`);
var root_4 = from_html(`<div class="my-auto flex flex-col justify-center items-center"><div class=" sm:max-w-md my-auto pb-10 w-full dark:text-gray-100"><!> <form class=" flex flex-col justify-center"><div class="mb-1"><div class=" text-2xl font-medium"><!></div> <!></div> <!> <div class="mt-5"><!></div></form> <!> <!></div> <!></div>`);
var root_31 = from_html(`<div class="fixed m-10 z-50"><div class="flex space-x-2"><div class=" self-center"><img id="logo" crossorigin="anonymous" class=" w-6 rounded-full" alt=""/></div></div></div>`);
var root_2 = from_html(`<div class="fixed bg-transparent min-h-screen w-full flex justify-center font-primary z-50 text-black dark:text-white" id="auth-container"><div class="w-full px-10 min-h-screen flex flex-col text-center"><!></div></div> <!>`, 1);
var root = from_html(`<!> <div class="w-full h-screen max-h-[100dvh] text-white relative" id="auth-page"><div class="w-full h-full absolute top-0 left-0 bg-white dark:bg-black"></div> <div class="w-full absolute top-0 left-0 right-0 h-8 drag-region"></div> <!></div>`, 1);
function _page($$anchor, $$props) {
  var _a;
  push($$props, false);
  const $config = () => store_get(config, "$config", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $socket = () => store_get(socket, "$socket", $$stores);
  const $page = () => store_get(page, "$page", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const $WEBUI_NAME = () => store_get(WEBUI_NAME, "$WEBUI_NAME", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let loaded = mutable_source(false);
  let mode = mutable_source(((_a = $config()) == null ? void 0 : _a.features.enable_ldap) ? "ldap" : "signin");
  let form = mutable_source(null);
  let name = mutable_source("");
  let email = mutable_source("");
  let password = mutable_source("");
  let confirmPassword = mutable_source("");
  let ldapUsername = mutable_source("");
  const setSessionUser = async (sessionUser, redirectPath = null) => {
    if (sessionUser) {
      console.log(sessionUser);
      toast.success($i18n().t(`You're now logged in.`));
      if (sessionUser.token) {
        localStorage.token = sessionUser.token;
      }
      $socket().emit("user-join", { auth: { token: sessionUser.token } });
      await user.set(sessionUser);
      await config.set(await getBackendConfig());
      if (!redirectPath) {
        redirectPath = $page().url.searchParams.get("redirect") || "/";
      }
      goto(redirectPath);
      localStorage.removeItem("redirectPath");
    }
  };
  const signInHandler = async () => {
    const sessionUser = await userSignIn(get(email), get(password)).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    await setSessionUser(sessionUser);
  };
  const signUpHandler = async () => {
    var _a2, _b;
    if ((_b = (_a2 = $config()) == null ? void 0 : _a2.features) == null ? void 0 : _b.enable_signup_password_confirmation) {
      if (get(password) !== get(confirmPassword)) {
        toast.error($i18n().t("Passwords do not match."));
        return;
      }
    }
    const sessionUser = await userSignUp(get(name), get(email), get(password), generateInitialsImage(get(name))).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    await setSessionUser(sessionUser);
  };
  const ldapSignInHandler = async () => {
    const sessionUser = await ldapUserSignIn(get(ldapUsername), get(password)).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    await setSessionUser(sessionUser);
  };
  const submitHandler = async () => {
    if (get(mode) === "ldap") {
      await ldapSignInHandler();
    } else if (get(mode) === "signin") {
      await signInHandler();
    } else {
      await signUpHandler();
    }
  };
  const oauthCallbackHandler = async () => {
    function getCookie(name2) {
      const match = document.cookie.match(new RegExp("(?:^|; )" + name2.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1") + "=([^;]*)"));
      return match ? decodeURIComponent(match[1]) : null;
    }
    const token = getCookie("token");
    if (!token) {
      return;
    }
    const sessionUser = await getSessionUser(token).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (!sessionUser) {
      return;
    }
    localStorage.token = token;
    await setSessionUser(sessionUser, localStorage.getItem("redirectPath") || null);
  };
  let onboarding = mutable_source(false);
  async function setLogoImage() {
    await tick();
    const logo = document.getElementById("logo");
    if (logo) {
      const isDarkMode = document.documentElement.classList.contains("dark");
      if (isDarkMode) {
        const darkImage = new Image();
        darkImage.src = `${WEBUI_BASE_URL}/static/favicon-dark.png`;
        darkImage.onload = () => {
          logo.src = `${WEBUI_BASE_URL}/static/favicon-dark.png`;
          logo.style.filter = "";
        };
        darkImage.onerror = () => {
          logo.style.filter = "invert(1)";
        };
      }
    }
  }
  onMount(async () => {
    var _a2, _b, _c;
    const redirectPath = $page().url.searchParams.get("redirect");
    if ($user() !== void 0) {
      goto(redirectPath || "/");
    } else {
      if (redirectPath) {
        localStorage.setItem("redirectPath", redirectPath);
      }
    }
    const error = $page().url.searchParams.get("error");
    if (error) {
      toast.error(error);
    }
    await oauthCallbackHandler();
    set(form, $page().url.searchParams.get("form"));
    set(loaded, true);
    setLogoImage();
    if ((((_a2 = $config()) == null ? void 0 : _a2.features.auth_trusted_header) ?? false) || ((_b = $config()) == null ? void 0 : _b.features.auth) === false) {
      await signInHandler();
    } else {
      set(onboarding, ((_c = $config()) == null ? void 0 : _c.onboarding) ?? false);
    }
  });
  init();
  var fragment = root();
  head("1s728sz", ($$anchor2) => {
    deferred_template_effect(() => {
      $document.title = `
		${`${$WEBUI_NAME()}`}
	`;
    });
  });
  var node = first_child(fragment);
  OnBoarding(node, {
    getStartedHandler: () => {
      var _a2;
      set(onboarding, false);
      set(mode, ((_a2 = $config()) == null ? void 0 : _a2.features.enable_ldap) ? "ldap" : "signup");
    },
    get show() {
      return get(onboarding);
    },
    set show($$value) {
      set(onboarding, $$value);
    },
    $$legacy: true
  });
  var div = sibling(node, 2);
  var node_1 = sibling(child(div), 4);
  {
    var consequent_23 = ($$anchor2) => {
      var fragment_1 = root_2();
      var div_1 = first_child(fragment_1);
      var div_2 = child(div_1);
      var node_2 = child(div_2);
      {
        var consequent = ($$anchor3) => {
          var div_3 = root_3();
          var div_4 = child(div_3);
          var div_5 = child(div_4);
          var text2 = child(div_5, true);
          reset(div_5);
          var div_6 = sibling(div_5, 2);
          var node_3 = child(div_6);
          Spinner(node_3, { className: "size-5" });
          reset(div_6);
          reset(div_4);
          reset(div_3);
          template_effect(($0) => set_text(text2, $0), [
            () => $i18n().t("Signing in to {{WEBUI_NAME}}", { WEBUI_NAME: $WEBUI_NAME() })
          ]);
          append($$anchor3, div_3);
        };
        var alternate_5 = ($$anchor3) => {
          var div_7 = root_4();
          var div_8 = child(div_7);
          var node_4 = child(div_8);
          {
            var consequent_1 = ($$anchor4) => {
              var div_9 = root_5();
              var img = child(div_9);
              reset(div_9);
              template_effect(() => set_attribute(img, "src", `${WEBUI_BASE_URL}/static/favicon.png`));
              append($$anchor4, div_9);
            };
            if_block(node_4, ($$render) => {
              var _a2, _b;
              if (((_b = (_a2 = $config()) == null ? void 0 : _a2.metadata) == null ? void 0 : _b.auth_logo_position) === "center") $$render(consequent_1);
            });
          }
          var form_1 = sibling(node_4, 2);
          var div_10 = child(form_1);
          var div_11 = child(div_10);
          var node_5 = child(div_11);
          {
            var consequent_2 = ($$anchor4) => {
              var text_1 = text();
              template_effect(($0) => set_text(text_1, $0), [
                () => $i18n().t(`Get started with {{WEBUI_NAME}}`, { WEBUI_NAME: $WEBUI_NAME() })
              ]);
              append($$anchor4, text_1);
            };
            var alternate_2 = ($$anchor4) => {
              var fragment_3 = comment();
              var node_6 = first_child(fragment_3);
              {
                var consequent_3 = ($$anchor5) => {
                  var text_2 = text();
                  template_effect(($0) => set_text(text_2, $0), [
                    () => $i18n().t(`Sign in to {{WEBUI_NAME}} with LDAP`, { WEBUI_NAME: $WEBUI_NAME() })
                  ]);
                  append($$anchor5, text_2);
                };
                var alternate_1 = ($$anchor5) => {
                  var fragment_5 = comment();
                  var node_7 = first_child(fragment_5);
                  {
                    var consequent_4 = ($$anchor6) => {
                      var text_3 = text();
                      template_effect(($0) => set_text(text_3, $0), [
                        () => $i18n().t(`Sign in to {{WEBUI_NAME}}`, { WEBUI_NAME: $WEBUI_NAME() })
                      ]);
                      append($$anchor6, text_3);
                    };
                    var alternate = ($$anchor6) => {
                      var text_4 = text();
                      template_effect(($0) => set_text(text_4, $0), [
                        () => $i18n().t(`Sign up to {{WEBUI_NAME}}`, { WEBUI_NAME: $WEBUI_NAME() })
                      ]);
                      append($$anchor6, text_4);
                    };
                    if_block(
                      node_7,
                      ($$render) => {
                        if (get(mode) === "signin") $$render(consequent_4);
                        else $$render(alternate, false);
                      },
                      true
                    );
                  }
                  append($$anchor5, fragment_5);
                };
                if_block(
                  node_6,
                  ($$render) => {
                    if (get(mode) === "ldap") $$render(consequent_3);
                    else $$render(alternate_1, false);
                  },
                  true
                );
              }
              append($$anchor4, fragment_3);
            };
            if_block(node_5, ($$render) => {
              var _a2;
              if (((_a2 = $config()) == null ? void 0 : _a2.onboarding) ?? false) $$render(consequent_2);
              else $$render(alternate_2, false);
            });
          }
          reset(div_11);
          var node_8 = sibling(div_11, 2);
          {
            var consequent_5 = ($$anchor4) => {
              var div_12 = root_12();
              var text_5 = child(div_12);
              reset(div_12);
              template_effect(
                ($0) => set_text(text_5, `ⓘ ${$WEBUI_NAME() ?? ""}
											${$0 ?? ""}`),
                [
                  () => $i18n().t("does not make any external connections, and your data stays securely on your locally hosted server.")
                ]
              );
              append($$anchor4, div_12);
            };
            if_block(node_8, ($$render) => {
              var _a2;
              if (((_a2 = $config()) == null ? void 0 : _a2.onboarding) ?? false) $$render(consequent_5);
            });
          }
          reset(div_10);
          var node_9 = sibling(div_10, 2);
          {
            var consequent_9 = ($$anchor4) => {
              var div_13 = root_13();
              var node_10 = child(div_13);
              {
                var consequent_6 = ($$anchor5) => {
                  var div_14 = root_14();
                  var label = child(div_14);
                  var text_6 = child(label, true);
                  reset(label);
                  var input = sibling(label, 2);
                  remove_input_defaults(input);
                  reset(div_14);
                  template_effect(
                    ($0, $1) => {
                      set_text(text_6, $0);
                      set_attribute(input, "placeholder", $1);
                    },
                    [
                      () => $i18n().t("Name"),
                      () => $i18n().t("Enter Your Full Name")
                    ]
                  );
                  bind_value(input, () => get(name), ($$value) => set(name, $$value));
                  append($$anchor5, div_14);
                };
                if_block(node_10, ($$render) => {
                  if (get(mode) === "signup") $$render(consequent_6);
                });
              }
              var node_11 = sibling(node_10, 2);
              {
                var consequent_7 = ($$anchor5) => {
                  var div_15 = root_15();
                  var label_1 = child(div_15);
                  var text_7 = child(label_1, true);
                  reset(label_1);
                  var input_1 = sibling(label_1, 2);
                  remove_input_defaults(input_1);
                  reset(div_15);
                  template_effect(
                    ($0, $1) => {
                      set_text(text_7, $0);
                      set_attribute(input_1, "placeholder", $1);
                    },
                    [
                      () => $i18n().t("Username"),
                      () => $i18n().t("Enter Your Username")
                    ]
                  );
                  bind_value(input_1, () => get(ldapUsername), ($$value) => set(ldapUsername, $$value));
                  append($$anchor5, div_15);
                };
                var alternate_3 = ($$anchor5) => {
                  var div_16 = root_16();
                  var label_2 = child(div_16);
                  var text_8 = child(label_2, true);
                  reset(label_2);
                  var input_2 = sibling(label_2, 2);
                  remove_input_defaults(input_2);
                  reset(div_16);
                  template_effect(
                    ($0, $1) => {
                      set_text(text_8, $0);
                      set_attribute(input_2, "placeholder", $1);
                    },
                    [
                      () => $i18n().t("Email"),
                      () => $i18n().t("Enter Your Email")
                    ]
                  );
                  bind_value(input_2, () => get(email), ($$value) => set(email, $$value));
                  append($$anchor5, div_16);
                };
                if_block(node_11, ($$render) => {
                  if (get(mode) === "ldap") $$render(consequent_7);
                  else $$render(alternate_3, false);
                });
              }
              var div_17 = sibling(node_11, 2);
              var label_3 = child(div_17);
              var text_9 = child(label_3, true);
              reset(label_3);
              var node_12 = sibling(label_3, 2);
              {
                let $0 = derived_safe_equal(() => $i18n().t("Enter Your Password"));
                let $1 = derived_safe_equal(() => get(mode) === "signup" ? "new-password" : "current-password");
                SensitiveInput(node_12, {
                  type: "password",
                  id: "password",
                  class: "my-0.5 w-full text-sm outline-hidden bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-600",
                  get placeholder() {
                    return get($0);
                  },
                  get autocomplete() {
                    return get($1);
                  },
                  name: "password",
                  required: true,
                  get value() {
                    return get(password);
                  },
                  set value($$value) {
                    set(password, $$value);
                  },
                  $$legacy: true
                });
              }
              reset(div_17);
              var node_13 = sibling(div_17, 2);
              {
                var consequent_8 = ($$anchor5) => {
                  var div_18 = root_17();
                  var label_4 = child(div_18);
                  var text_10 = child(label_4, true);
                  reset(label_4);
                  var node_14 = sibling(label_4, 2);
                  {
                    let $0 = derived_safe_equal(() => $i18n().t("Confirm Your Password"));
                    SensitiveInput(node_14, {
                      type: "password",
                      id: "confirm-password",
                      class: "my-0.5 w-full text-sm outline-hidden bg-transparent",
                      get placeholder() {
                        return get($0);
                      },
                      autocomplete: "new-password",
                      name: "confirm-password",
                      required: true,
                      get value() {
                        return get(confirmPassword);
                      },
                      set value($$value) {
                        set(confirmPassword, $$value);
                      },
                      $$legacy: true
                    });
                  }
                  reset(div_18);
                  template_effect(($0) => set_text(text_10, $0), [() => $i18n().t("Confirm Password")]);
                  append($$anchor5, div_18);
                };
                if_block(node_13, ($$render) => {
                  var _a2, _b;
                  if (get(mode) === "signup" && ((_b = (_a2 = $config()) == null ? void 0 : _a2.features) == null ? void 0 : _b.enable_signup_password_confirmation)) $$render(consequent_8);
                });
              }
              reset(div_13);
              template_effect(($0) => set_text(text_9, $0), [() => $i18n().t("Password")]);
              append($$anchor4, div_13);
            };
            if_block(node_9, ($$render) => {
              var _a2, _b;
              if (((_a2 = $config()) == null ? void 0 : _a2.features.enable_login_form) || ((_b = $config()) == null ? void 0 : _b.features.enable_ldap) || get(form)) $$render(consequent_9);
            });
          }
          var div_19 = sibling(node_9, 2);
          var node_15 = child(div_19);
          {
            var consequent_12 = ($$anchor4) => {
              var fragment_8 = comment();
              var node_16 = first_child(fragment_8);
              {
                var consequent_10 = ($$anchor5) => {
                  var button = root_19();
                  var text_11 = child(button, true);
                  reset(button);
                  template_effect(($0) => set_text(text_11, $0), [() => $i18n().t("Authenticate")]);
                  append($$anchor5, button);
                };
                var alternate_4 = ($$anchor5) => {
                  var fragment_9 = root_20();
                  var button_1 = first_child(fragment_9);
                  var text_12 = child(button_1, true);
                  reset(button_1);
                  var node_17 = sibling(button_1, 2);
                  {
                    var consequent_11 = ($$anchor6) => {
                      var div_20 = root_21();
                      var text_13 = child(div_20);
                      var button_2 = sibling(text_13);
                      var text_14 = child(button_2, true);
                      reset(button_2);
                      reset(div_20);
                      template_effect(
                        ($0, $1) => {
                          set_text(text_13, `${$0 ?? ""} `);
                          set_text(text_14, $1);
                        },
                        [
                          () => get(mode) === "signin" ? $i18n().t("Don't have an account?") : $i18n().t("Already have an account?"),
                          () => get(mode) === "signin" ? $i18n().t("Sign up") : $i18n().t("Sign in")
                        ]
                      );
                      event("click", button_2, () => {
                        if (get(mode) === "signin") {
                          set(mode, "signup");
                        } else {
                          set(mode, "signin");
                        }
                      });
                      append($$anchor6, div_20);
                    };
                    if_block(node_17, ($$render) => {
                      var _a2, _b;
                      if (((_a2 = $config()) == null ? void 0 : _a2.features.enable_signup) && !(((_b = $config()) == null ? void 0 : _b.onboarding) ?? false)) $$render(consequent_11);
                    });
                  }
                  template_effect(($0) => set_text(text_12, $0), [
                    () => {
                      var _a2;
                      return get(mode) === "signin" ? $i18n().t("Sign in") : ((_a2 = $config()) == null ? void 0 : _a2.onboarding) ?? false ? $i18n().t("Create Admin Account") : $i18n().t("Create Account");
                    }
                  ]);
                  append($$anchor5, fragment_9);
                };
                if_block(node_16, ($$render) => {
                  if (get(mode) === "ldap") $$render(consequent_10);
                  else $$render(alternate_4, false);
                });
              }
              append($$anchor4, fragment_8);
            };
            if_block(node_15, ($$render) => {
              var _a2, _b;
              if (((_a2 = $config()) == null ? void 0 : _a2.features.enable_login_form) || ((_b = $config()) == null ? void 0 : _b.features.enable_ldap) || get(form)) $$render(consequent_12);
            });
          }
          reset(div_19);
          reset(form_1);
          var node_18 = sibling(form_1, 2);
          {
            var consequent_19 = ($$anchor4) => {
              var fragment_10 = root_22();
              var div_21 = first_child(fragment_10);
              var node_19 = sibling(child(div_21), 2);
              {
                var consequent_13 = ($$anchor5) => {
                  var span = root_23();
                  var text_15 = child(span, true);
                  reset(span);
                  template_effect(($0) => set_text(text_15, $0), [() => $i18n().t("or")]);
                  append($$anchor5, span);
                };
                if_block(node_19, ($$render) => {
                  var _a2, _b;
                  if (((_a2 = $config()) == null ? void 0 : _a2.features.enable_login_form) || ((_b = $config()) == null ? void 0 : _b.features.enable_ldap) || get(form)) $$render(consequent_13);
                });
              }
              next(2);
              reset(div_21);
              var div_22 = sibling(div_21, 2);
              var node_20 = child(div_22);
              {
                var consequent_14 = ($$anchor5) => {
                  var button_3 = root_24();
                  var span_1 = sibling(child(button_3), 2);
                  var text_16 = child(span_1, true);
                  reset(span_1);
                  reset(button_3);
                  template_effect(($0) => set_text(text_16, $0), [
                    () => $i18n().t("Continue with {{provider}}", { provider: "Google" })
                  ]);
                  event("click", button_3, () => {
                    window.location.href = `${WEBUI_BASE_URL}/oauth/google/login`;
                  });
                  append($$anchor5, button_3);
                };
                if_block(node_20, ($$render) => {
                  var _a2, _b, _c;
                  if ((_c = (_b = (_a2 = $config()) == null ? void 0 : _a2.oauth) == null ? void 0 : _b.providers) == null ? void 0 : _c.google) $$render(consequent_14);
                });
              }
              var node_21 = sibling(node_20, 2);
              {
                var consequent_15 = ($$anchor5) => {
                  var button_4 = root_25();
                  var span_2 = sibling(child(button_4), 2);
                  var text_17 = child(span_2, true);
                  reset(span_2);
                  reset(button_4);
                  template_effect(($0) => set_text(text_17, $0), [
                    () => $i18n().t("Continue with {{provider}}", { provider: "Microsoft" })
                  ]);
                  event("click", button_4, () => {
                    window.location.href = `${WEBUI_BASE_URL}/oauth/microsoft/login`;
                  });
                  append($$anchor5, button_4);
                };
                if_block(node_21, ($$render) => {
                  var _a2, _b, _c;
                  if ((_c = (_b = (_a2 = $config()) == null ? void 0 : _a2.oauth) == null ? void 0 : _b.providers) == null ? void 0 : _c.microsoft) $$render(consequent_15);
                });
              }
              var node_22 = sibling(node_21, 2);
              {
                var consequent_16 = ($$anchor5) => {
                  var button_5 = root_26();
                  var span_3 = sibling(child(button_5), 2);
                  var text_18 = child(span_3, true);
                  reset(span_3);
                  reset(button_5);
                  template_effect(($0) => set_text(text_18, $0), [
                    () => $i18n().t("Continue with {{provider}}", { provider: "GitHub" })
                  ]);
                  event("click", button_5, () => {
                    window.location.href = `${WEBUI_BASE_URL}/oauth/github/login`;
                  });
                  append($$anchor5, button_5);
                };
                if_block(node_22, ($$render) => {
                  var _a2, _b, _c;
                  if ((_c = (_b = (_a2 = $config()) == null ? void 0 : _a2.oauth) == null ? void 0 : _b.providers) == null ? void 0 : _c.github) $$render(consequent_16);
                });
              }
              var node_23 = sibling(node_22, 2);
              {
                var consequent_17 = ($$anchor5) => {
                  var button_6 = root_27();
                  var span_4 = sibling(child(button_6), 2);
                  var text_19 = child(span_4, true);
                  reset(span_4);
                  reset(button_6);
                  template_effect(($0) => set_text(text_19, $0), [
                    () => {
                      var _a2, _b, _c;
                      return $i18n().t("Continue with {{provider}}", { provider: ((_c = (_b = (_a2 = $config()) == null ? void 0 : _a2.oauth) == null ? void 0 : _b.providers) == null ? void 0 : _c.oidc) ?? "SSO" });
                    }
                  ]);
                  event("click", button_6, () => {
                    window.location.href = `${WEBUI_BASE_URL}/oauth/oidc/login`;
                  });
                  append($$anchor5, button_6);
                };
                if_block(node_23, ($$render) => {
                  var _a2, _b, _c;
                  if ((_c = (_b = (_a2 = $config()) == null ? void 0 : _a2.oauth) == null ? void 0 : _b.providers) == null ? void 0 : _c.oidc) $$render(consequent_17);
                });
              }
              var node_24 = sibling(node_23, 2);
              {
                var consequent_18 = ($$anchor5) => {
                  var button_7 = root_28();
                  var span_5 = child(button_7);
                  var text_20 = child(span_5, true);
                  reset(span_5);
                  reset(button_7);
                  template_effect(($0) => set_text(text_20, $0), [
                    () => $i18n().t("Continue with {{provider}}", { provider: "Feishu" })
                  ]);
                  event("click", button_7, () => {
                    window.location.href = `${WEBUI_BASE_URL}/oauth/feishu/login`;
                  });
                  append($$anchor5, button_7);
                };
                if_block(node_24, ($$render) => {
                  var _a2, _b, _c;
                  if ((_c = (_b = (_a2 = $config()) == null ? void 0 : _a2.oauth) == null ? void 0 : _b.providers) == null ? void 0 : _c.feishu) $$render(consequent_18);
                });
              }
              reset(div_22);
              append($$anchor4, fragment_10);
            };
            if_block(node_18, ($$render) => {
              var _a2, _b;
              if (Object.keys(((_b = (_a2 = $config()) == null ? void 0 : _a2.oauth) == null ? void 0 : _b.providers) ?? {}).length > 0) $$render(consequent_19);
            });
          }
          var node_25 = sibling(node_18, 2);
          {
            var consequent_20 = ($$anchor4) => {
              var div_23 = root_29();
              var button_8 = child(div_23);
              var span_6 = child(button_8);
              var text_21 = child(span_6, true);
              reset(span_6);
              reset(button_8);
              reset(div_23);
              template_effect(($0) => set_text(text_21, $0), [
                () => get(mode) === "ldap" ? $i18n().t("Continue with Email") : $i18n().t("Continue with LDAP")
              ]);
              event("click", button_8, () => {
                var _a2;
                if (get(mode) === "ldap") set(mode, ((_a2 = $config()) == null ? void 0 : _a2.onboarding) ?? false ? "signup" : "signin");
                else set(mode, "ldap");
              });
              append($$anchor4, div_23);
            };
            if_block(node_25, ($$render) => {
              var _a2, _b;
              if (((_a2 = $config()) == null ? void 0 : _a2.features.enable_ldap) && ((_b = $config()) == null ? void 0 : _b.features.enable_login_form)) $$render(consequent_20);
            });
          }
          reset(div_8);
          var node_26 = sibling(div_8, 2);
          {
            var consequent_21 = ($$anchor4) => {
              var div_24 = root_30();
              var div_25 = child(div_24);
              var node_27 = child(div_25);
              html(node_27, () => {
                var _a2, _b;
                return purify.sanitize(marked((_b = (_a2 = $config()) == null ? void 0 : _a2.metadata) == null ? void 0 : _b.login_footer));
              });
              reset(div_25);
              reset(div_24);
              append($$anchor4, div_24);
            };
            if_block(node_26, ($$render) => {
              var _a2, _b;
              if ((_b = (_a2 = $config()) == null ? void 0 : _a2.metadata) == null ? void 0 : _b.login_footer) $$render(consequent_21);
            });
          }
          reset(div_7);
          event("submit", form_1, (e) => {
            e.preventDefault();
            submitHandler();
          });
          append($$anchor3, div_7);
        };
        if_block(node_2, ($$render) => {
          var _a2, _b;
          if ((((_a2 = $config()) == null ? void 0 : _a2.features.auth_trusted_header) ?? false) || ((_b = $config()) == null ? void 0 : _b.features.auth) === false) $$render(consequent);
          else $$render(alternate_5, false);
        });
      }
      reset(div_2);
      reset(div_1);
      var node_28 = sibling(div_1, 2);
      {
        var consequent_22 = ($$anchor3) => {
          var div_26 = root_31();
          var div_27 = child(div_26);
          var div_28 = child(div_27);
          var img_1 = child(div_28);
          reset(div_28);
          reset(div_27);
          reset(div_26);
          template_effect(() => set_attribute(img_1, "src", `${WEBUI_BASE_URL}/static/favicon.png`));
          append($$anchor3, div_26);
        };
        if_block(node_28, ($$render) => {
          var _a2, _b;
          if (!((_b = (_a2 = $config()) == null ? void 0 : _a2.metadata) == null ? void 0 : _b.auth_logo_position)) $$render(consequent_22);
        });
      }
      append($$anchor2, fragment_1);
    };
    if_block(node_1, ($$render) => {
      if (get(loaded)) $$render(consequent_23);
    });
  }
  reset(div);
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _page as component
};
