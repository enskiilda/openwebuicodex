import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { t as template_effect, p as push, g as getContext, f as first_child, c as child, r as reset, e as sibling, i as deep_read_state, u as untrack, aE as invalidate_inner_signals, b as get, a as pop, h as derived_safe_equal, q as next, o as onMount, s as set, m as mutable_source, k as tick, aF as mutate, ay as onDestroy, n as createEventDispatcher, l as legacy_pre_effect, j as legacy_pre_effect_reset, d as deferred_template_effect, $ as $document } from "../chunks/BxIY6ir7.js";
import { b as from_svg, a as append, f as from_html, c as comment } from "../chunks/CAbo1QWi.js";
import { i as if_block } from "../chunks/BoSuMvtf.js";
import { a as set_attribute, s as set_class, c as clsx, d as bind_select_value, r as remove_input_defaults } from "../chunks/kXiCYuyj.js";
import { i as init } from "../chunks/ByqEASoO.js";
import { a as store_get, s as setup_stores } from "../chunks/BvQ5O7-v.js";
import { g as goto } from "../chunks/h-B6Md2q.js";
import { p as page } from "../chunks/CrvggIeO.js";
import { a as models, s as showSidebar, b as settings, c as config, j as socket, W as WEBUI_NAME, m as mobile, u as user } from "../chunks/2Yg1sHDo.js";
import { d as dayjs2, r as relativeTime } from "../chunks/OO7lCI-F.js";
import "../chunks/CAzIiltw.js";
import "../chunks/bQFTtKkZ.js";
import { t as toast } from "../chunks/BccDN__m.js";
import { m as marked, z as splitStream, i as copyToClipboard, x as v4, v as convertHeicToJpeg, w as compressImage } from "../chunks/Bh-hrM1w.js";
import { s as set_text, e as event } from "../chunks/cBADewWV.js";
import { h as head } from "../chunks/Cb8chUSZ.js";
import { b as bind_value } from "../chunks/DVLuwGai.js";
import { b as bind_this } from "../chunks/D16JuV5t.js";
import { p as prop } from "../chunks/BRmGPDvq.js";
import { f as fileSaver } from "../chunks/DRcZXQDn.js";
import { c as calendar } from "../chunks/CvB8sZNw.js";
import { d as duration } from "../chunks/DWskpcWN.js";
import { d as Pane_resizer, c as Pane, P as Pane_group } from "../chunks/B3I5jJr1.js";
import { b as WEBUI_BASE_URL, a as WEBUI_API_BASE_URL } from "../chunks/DQ9UxF7k.js";
import { F as FileItem, u as uploadFile } from "../chunks/P5gA3V2-.js";
import { c as chatCompletion, g as generateOpenAIChatCompletion } from "../chunks/Bm2W_wlw.js";
import { d as downloadPdf } from "../chunks/CYkpo2Xm.js";
import { e as each, i as index } from "../chunks/7_HZMPNF.js";
import { X as XMark } from "../chunks/CUUSX84-.js";
import { I as Image, M as Markdown } from "../chunks/BgD15ug2.js";
import "../chunks/C2A39Ney.js";
import { p as preventDefault } from "../chunks/CGgk3ROl.js";
import { S as Skeleton } from "../chunks/B-p41pS4.js";
import { P as Pencil } from "../chunks/wRvEFTSI.js";
import { T as Textarea } from "../chunks/B-P1fI-w.js";
import { T as Tooltip } from "../chunks/BHXWufQb.js";
import { M as MessageInput } from "../chunks/D8DDdIAi.js";
import { P as PencilSquare } from "../chunks/B7zwdaZ7.js";
import { s as slot } from "../chunks/CZEGIGsR.js";
import { D as Drawer } from "../chunks/CfhMM1S2.js";
import { A as AccessControlModal } from "../chunks/CRvJEYxG.js";
import { b as getNoteById, u as updateNoteById, d as deleteNoteById } from "../chunks/BInTu4eC.js";
import { R as RichTextInput, V as VoiceRecording } from "../chunks/DmcjPXfa.js";
import { S as Spinner } from "../chunks/CtnI4RVL.js";
import { M as MicSolid } from "../chunks/CC71IhnP.js";
import { C as ConfirmDialog } from "../chunks/DhVOSDv1.js";
import "../chunks/DF6V1elH.js";
import { F as FilesOverlay } from "../chunks/CQWizoxB.js";
import { M as Menu, a as Menu_trigger, b as Menu_content } from "../chunks/DQmZL-p0.js";
import { f as fade } from "../chunks/BNZI2i79.js";
import { C as CloudArrowUp } from "../chunks/BFdJ9EUr.js";
import { N as NoteMenu } from "../chunks/BBHa1_wB.js";
import { E as EllipsisHorizontal } from "../chunks/BC-suBaL.js";
import { S as Sparkles } from "../chunks/CsQKPwST.js";
import { S as Sidebar } from "../chunks/CIfNu5Bq.js";
var root$e = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"></path></svg>`);
function ChatBubbleOval($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$e();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root_1$5 = from_html(`<div class=" text-xs font-medium mb-2"> </div> <div class="flex flex-col gap-1"><!> <div class="flex items-center flex-wrap gap-2 mt-1.5"></div></div> <hr class="my-2 border-gray-50 dark:border-gray-700/10"/>`, 1);
var root_4$5 = from_html(`<option class="bg-gray-50 dark:bg-gray-700"> </option>`);
var root$d = from_html(`<div class="flex items-center mb-1.5 pt-1.5"><div class=" mr-1 flex items-center"><button class="p-0.5 bg-transparent transition rounded-lg"><!></button></div> <div class=" font-medium text-base flex items-center gap-1"><div> </div></div></div> <div class="mt-1 px-1.5"><div class="pb-10"><!> <div class=" text-xs font-medium mb-1"> </div> <div class="w-full"><select class="w-full bg-transparent text-sm outline-hidden"><option class="bg-gray-50 dark:bg-gray-700" disabled> </option><!></select></div></div></div>`, 1);
function Controls($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $models = () => store_get(models, "$models", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let selectedModelId = prop($$props, "selectedModelId", 12, "");
  let files = prop($$props, "files", 28, () => []);
  let onUpdate = prop($$props, "onUpdate", 8, (files2) => {
  });
  init();
  var fragment = root$d();
  var div = first_child(fragment);
  var div_1 = child(div);
  var button = child(div_1);
  var node = child(button);
  XMark(node, { className: "size-5", strokeWidth: "2.5" });
  reset(button);
  reset(div_1);
  var div_2 = sibling(div_1, 2);
  var div_3 = child(div_2);
  var text = child(div_3, true);
  reset(div_3);
  reset(div_2);
  reset(div);
  var div_4 = sibling(div, 2);
  var div_5 = child(div_4);
  var node_1 = child(div_5);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = root_1$5();
      var div_6 = first_child(fragment_1);
      var text_1 = child(div_6, true);
      reset(div_6);
      var div_7 = sibling(div_6, 2);
      var node_2 = child(div_7);
      each(
        node_2,
        1,
        () => (deep_read_state(files()), untrack(() => files().filter((file) => file.type !== "image"))),
        index,
        ($$anchor3, file) => {
          {
            let $0 = derived_safe_equal(() => (get(file), untrack(() => {
              var _a;
              return (_a = get(file)) == null ? void 0 : _a.size;
            })));
            let $1 = derived_safe_equal(() => (get(file), untrack(() => get(file).status === "uploading")));
            FileItem($$anchor3, {
              className: "w-full",
              get item() {
                return get(file);
              },
              small: true,
              edit: true,
              dismissible: true,
              get url() {
                return get(file), untrack(() => get(file).url);
              },
              get name() {
                return get(file), untrack(() => get(file).name);
              },
              get type() {
                return get(file), untrack(() => get(file).type);
              },
              get size() {
                return get($0);
              },
              get loading() {
                return get($1);
              },
              $$events: {
                dismiss: () => {
                  files(files().filter((item) => item.id !== get(file).id));
                  files(files());
                  onUpdate()(files());
                },
                click: () => {
                  console.log(get(file));
                }
              }
            });
          }
        }
      );
      var div_8 = sibling(node_2, 2);
      each(
        div_8,
        5,
        () => (deep_read_state(files()), untrack(() => files().filter((file) => file.type === "image"))),
        index,
        ($$anchor3, file) => {
          Image($$anchor3, {
            get src() {
              return get(file), untrack(() => get(file).url);
            },
            imageClassName: " size-14 rounded-xl object-cover",
            dismissible: true,
            onDismiss: () => {
              files(files().filter((item) => item.id !== get(file).id));
              files(files());
              onUpdate()(files());
            }
          });
        }
      );
      reset(div_8);
      reset(div_7);
      next(2);
      template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("Files")))]);
      append($$anchor2, fragment_1);
    };
    if_block(node_1, ($$render) => {
      if (deep_read_state(files()), untrack(() => files().length > 0)) $$render(consequent);
    });
  }
  var div_9 = sibling(node_1, 2);
  var text_2 = child(div_9, true);
  reset(div_9);
  var div_10 = sibling(div_9, 2);
  var select = child(div_10);
  template_effect(() => {
    selectedModelId();
    invalidate_inner_signals(() => {
      $i18n();
      $models();
    });
  });
  var option = child(select);
  var text_3 = child(option, true);
  reset(option);
  option.value = option.__value = "";
  var node_3 = sibling(option);
  each(
    node_3,
    1,
    () => ($models(), untrack(() => $models().filter((model) => {
      var _a, _b;
      return !(((_b = (_a = model == null ? void 0 : model.info) == null ? void 0 : _a.meta) == null ? void 0 : _b.hidden) ?? false);
    }))),
    index,
    ($$anchor2, model) => {
      var option_1 = root_4$5();
      var text_4 = child(option_1, true);
      reset(option_1);
      var option_1_value = {};
      template_effect(() => {
        set_text(text_4, (get(model), untrack(() => get(model).name)));
        if (option_1_value !== (option_1_value = (get(model), untrack(() => get(model).id)))) {
          option_1.value = (option_1.__value = (get(model), untrack(() => get(model).id))) ?? "";
        }
      });
      append($$anchor2, option_1);
    }
  );
  reset(select);
  reset(div_10);
  reset(div_5);
  reset(div_4);
  template_effect(
    ($0, $1, $2) => {
      set_text(text, $0);
      set_text(text_2, $1);
      set_text(text_3, $2);
    },
    [
      () => ($i18n(), untrack(() => $i18n().t("Controls"))),
      () => ($i18n(), untrack(() => $i18n().t("Model"))),
      () => ($i18n(), untrack(() => $i18n().t("Select a model")))
    ]
  );
  event("click", button, () => {
    show(!show());
  });
  bind_select_value(
    select,
    // Remove the file from the files array
    selectedModelId
  );
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root$c = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25"></path></svg>`);
function ArrowUpLeft($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$c();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root_1$4 = from_html(`<button class=" text-transparent group-hover:text-gray-500 dark:hover:text-gray-300 transition"><!></button>`);
var root_2$1 = from_html(`<button class=" text-transparent group-hover:text-gray-500 dark:hover:text-gray-300 transition"><!></button>`);
var root_3$3 = from_html(`<button class=" text-transparent group-hover:text-gray-500 dark:hover:text-gray-300 transition"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg></button>`);
var root_4$4 = from_html(`<div><!></div>`);
var root_7$1 = from_html(`<div class=" markdown-prose-sm text-sm"><!></div>`);
var root$b = from_html(`<div class="flex flex-col gap-1 group"><div class="flex items-center justify-between pt-1"><div class="py-1 text-sm font-semibold uppercase min-w-[6rem] text-left rounded-lg transition"> </div> <div class="flex items-center gap-2"><!> <!> <!></div></div> <div class="flex-1"><!></div></div>`);
function Message($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let message = prop($$props, "message", 12);
  let idx = prop($$props, "idx", 8);
  let onDelete = prop($$props, "onDelete", 8);
  let onEdit = prop($$props, "onEdit", 8);
  let onInsert = prop($$props, "onInsert", 8);
  init();
  var div = root$b();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var text = child(div_2, true);
  reset(div_2);
  var div_3 = sibling(div_2, 2);
  var node = child(div_3);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Insert"))));
    Tooltip(node, {
      placement: "top",
      get content() {
        return get($0);
      },
      children: ($$anchor2, $$slotProps) => {
        var button = root_1$4();
        var node_1 = child(button);
        ArrowUpLeft(node_1, { className: "size-3.5", strokeWidth: "2" });
        reset(button);
        event("click", button, () => {
          onInsert()();
        });
        append($$anchor2, button);
      },
      $$slots: { default: true }
    });
  }
  var node_2 = sibling(node, 2);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Edit"))));
    Tooltip(node_2, {
      placement: "top",
      get content() {
        return get($0);
      },
      children: ($$anchor2, $$slotProps) => {
        var button_1 = root_2$1();
        var node_3 = child(button_1);
        Pencil(node_3, { className: "size-3.5", strokeWidth: "2" });
        reset(button_1);
        event("click", button_1, () => {
          onEdit()();
        });
        append($$anchor2, button_1);
      },
      $$slots: { default: true }
    });
  }
  var node_4 = sibling(node_2, 2);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete"))));
    Tooltip(node_4, {
      placement: "top",
      get content() {
        return get($0);
      },
      children: ($$anchor2, $$slotProps) => {
        var button_2 = root_3$3();
        event("click", button_2, () => {
          onDelete()();
        });
        append($$anchor2, button_2);
      },
      $$slots: { default: true }
    });
  }
  reset(div_3);
  reset(div_1);
  var div_4 = sibling(div_1, 2);
  var node_5 = child(div_4);
  {
    var consequent = ($$anchor2) => {
      var div_5 = root_4$4();
      var node_6 = child(div_5);
      Skeleton(node_6, { size: "sm" });
      reset(div_5);
      append($$anchor2, div_5);
    };
    var alternate_1 = ($$anchor2) => {
      var fragment = comment();
      var node_7 = first_child(fragment);
      {
        var consequent_1 = ($$anchor3) => {
          {
            let $0 = derived_safe_equal(() => ($i18n(), deep_read_state(message()), untrack(() => $i18n().t(`Enter {{role}} message here`, {
              role: message().role === "user" ? $i18n().t("a user") : $i18n().t("an assistant")
            }))));
            Textarea($$anchor3, {
              className: "w-full bg-transparent outline-hidden text-sm resize-none overflow-hidden",
              get placeholder() {
                return get($0);
              },
              onBlur: () => {
                message(message().edit = false, true);
              },
              get value() {
                return message().content;
              },
              set value($$value) {
                message(message().content = $$value, true);
              },
              $$legacy: true
            });
          }
        };
        var alternate = ($$anchor3) => {
          var div_6 = root_7$1();
          var node_8 = child(div_6);
          {
            let $0 = derived_safe_equal(() => `note-message-${idx()}`);
            Markdown(node_8, {
              get id() {
                return get($0);
              },
              get content() {
                return deep_read_state(message()), untrack(() => message().content);
              }
            });
          }
          reset(div_6);
          append($$anchor3, div_6);
        };
        if_block(
          node_7,
          ($$render) => {
            if (deep_read_state(message()), untrack(() => {
              var _a;
              return ((_a = message()) == null ? void 0 : _a.edit) === true;
            })) $$render(consequent_1);
            else $$render(alternate, false);
          },
          true
        );
      }
      append($$anchor2, fragment);
    };
    if_block(node_5, ($$render) => {
      if (deep_read_state(message()), untrack(() => {
        var _a, _b;
        return !(((_a = message()) == null ? void 0 : _a.done) ?? true) && ((_b = message()) == null ? void 0 : _b.content) === "";
      })) $$render(consequent);
      else $$render(alternate_1, false);
    });
  }
  reset(div_4);
  reset(div);
  template_effect(($0) => set_text(text, $0), [
    () => ($i18n(), deep_read_state(message()), untrack(() => $i18n().t(message().role)))
  ]);
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root$a = from_html(`<div class="space-y-3 pb-12"></div>`);
function Messages($$anchor, $$props) {
  push($$props, false);
  getContext("i18n");
  let messages = prop($$props, "messages", 28, () => []);
  let onInsert = prop($$props, "onInsert", 8, (content) => {
  });
  init();
  var div = root$a();
  each(div, 5, messages, index, ($$anchor2, message, idx) => {
    Message($$anchor2, {
      get message() {
        return get(message);
      },
      idx,
      onInsert: () => {
        var _a;
        onInsert()(((_a = get(message)) == null ? void 0 : _a.content) ?? "");
      },
      onEdit: () => {
        messages(messages().map((msg, messageIdx) => {
          if (messageIdx === idx) {
            return { ...msg, edit: true };
          }
          return msg;
        }));
      },
      onDelete: () => {
        messages(messages().filter((message2, messageIdx) => messageIdx !== idx));
      }
    });
  });
  reset(div);
  append($$anchor, div);
  pop();
}
var root_1$3 = from_html(`<span class="text-gray-500 text-sm"> </span>`);
var root_2 = from_html(`<div class="text-xs rounded-xl px-2.5 py-3 w-full markdown-prose-xs"><blockquote><div class=" line-clamp-3"> </div></blockquote></div>`);
var root_4$3 = from_html(`<button type="button"><!> <span class="block whitespace-nowrap overflow-hidden text-ellipsis leading-none pr-0.5"> </span></button>`);
var root_6$2 = from_html(`<option class="bg-gray-50 dark:bg-gray-700"> </option>`);
var root_5$2 = from_html(`<select class=" bg-transparent rounded-lg py-1 px-2 -mx-0.5 text-sm outline-hidden w-full text-right pr-5"></select>`);
var root_3$2 = from_html(`<div slot="menu" class="flex items-center justify-between gap-2 w-full pr-1"><div><!></div> <!></div>`);
var root$9 = from_html(`<div class="flex items-center mb-1.5 pt-1.5"><div class="flex items-center mr-1"><button class="p-0.5 bg-transparent transition rounded-lg"><!></button></div> <div class=" font-medium text-base flex items-center gap-1"><div> </div> <div><!></div></div></div> <div class="flex flex-col items-center flex-1 @container"><div class=" flex flex-col justify-between w-full overflow-y-auto h-full"><div class="mx-auto w-full md:px-0 h-full relative"><div class=" flex flex-col h-full"><div class=" pb-2.5 flex flex-col justify-between w-full flex-auto overflow-auto h-0 scrollbar-hidden" id="messages-container"><div class=" h-full w-full flex flex-col"><div class="flex-1 p-1"><!></div></div></div> <div class=" pb-[1rem]"><!> <!></div></div></div></div></div>`, 1);
function Chat($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $models = () => store_get(models, "$models", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let show = prop($$props, "show", 12, false);
  let selectedModelId = prop($$props, "selectedModelId", 12, "");
  marked.use({
    breaks: true,
    gfm: true,
    renderer: {
      list(body, ordered, start) {
        const isTaskList = body.includes("data-checked=");
        if (isTaskList) {
          return `<ul data-type="taskList">${body}</ul>`;
        }
        const type = ordered ? "ol" : "ul";
        const startatt = ordered && start !== 1 ? ` start="${start}"` : "";
        return `<${type}${startatt}>${body}</${type}>`;
      },
      listitem(text, task, checked) {
        if (task) {
          const checkedAttr = checked ? "true" : "false";
          return `<li data-type="taskItem" data-checked="${checkedAttr}">${text}</li>`;
        }
        return `<li>${text}</li>`;
      }
    }
  });
  const i18n = getContext("i18n");
  let editor = prop($$props, "editor", 8, null);
  let editing = prop($$props, "editing", 12, false);
  let streaming = prop($$props, "streaming", 12, false);
  let stopResponseFlag = prop($$props, "stopResponseFlag", 12, false);
  let note = prop($$props, "note", 12, null);
  let selectedContent = prop($$props, "selectedContent", 12, null);
  let files = prop($$props, "files", 24, () => []);
  let messages = prop($$props, "messages", 28, () => []);
  let onInsert = prop($$props, "onInsert", 8, (content) => {
  });
  let onStop = prop($$props, "onStop", 8, () => {
  });
  let onEdited = prop($$props, "onEdited", 8, () => {
  });
  prop($$props, "insertNoteHandler", 8, () => {
  });
  let scrollToBottomHandler = prop($$props, "scrollToBottomHandler", 8, () => {
  });
  let loading = mutable_source(false);
  let messagesContainerElement = mutable_source();
  let system = "";
  let editEnabled = mutable_source(false);
  let chatInputElement = mutable_source(null);
  const DEFAULT_DOCUMENT_EDITOR_PROMPT = `You are an expert document editor.

## Task
Based on the user's instruction, update and enhance the existing notes or selection by incorporating relevant and accurate information from the provided context in the content's primary language. Ensure all edits strictly follow the user’s intent.

## Input Structure
- Existing notes: Enclosed within <notes></notes> XML tags.
- Additional context: Enclosed within <context></context> XML tags.
- Current note selection: Enclosed within <selection></selection> XML tags.
- Editing instruction: Provided in the user message.

## Output Instructions
- If a selection is provided, edit **only** the content within <selection></selection>. Leave unselected parts unchanged.
- If no selection is provided, edit the entire notes.
- Deliver a single, rewritten version of the notes in markdown format.
- Integrate information from the context only if it directly supports the user's instruction.
- Use clear, organized markdown elements: headings, lists, task lists ([ ]) where tasks or checklists are strongly implied, bold and italic text as appropriate.
- Focus on improving clarity, completeness, and usefulness of the notes.
- Return only the final, fully-edited markdown notes—do not include explanations, reasoning, or XML tags.
`;
  let scrolledToBottom = true;
  const scrollToBottom = () => {
    if (get(messagesContainerElement)) {
      if (scrolledToBottom) {
        mutate(messagesContainerElement, get(messagesContainerElement).scrollTop = get(messagesContainerElement).scrollHeight);
      }
    }
  };
  const onScroll = () => {
    if (get(messagesContainerElement)) {
      scrolledToBottom = get(messagesContainerElement).scrollHeight - get(messagesContainerElement).scrollTop <= get(messagesContainerElement).clientHeight + 10;
    }
  };
  const chatCompletionHandler = async () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    if (selectedModelId() === "") {
      toast.error($i18n().t("Please select a model."));
      return;
    }
    const model = $models().find((model2) => model2.id === selectedModelId());
    if (!model) {
      selectedModelId("");
      return;
    }
    let responseMessage;
    if (((_a = messages().at(-1)) == null ? void 0 : _a.role) === "assistant") {
      responseMessage = messages().at(-1);
    } else {
      responseMessage = { role: "assistant", content: "", done: false };
      messages().push(responseMessage);
      messages(messages());
    }
    await tick();
    scrollToBottom();
    stopResponseFlag(false);
    let enhancedContent = { json: null, html: "", md: "" };
    system = "";
    if (get(editEnabled)) {
      system = `${DEFAULT_DOCUMENT_EDITOR_PROMPT}

`;
    } else {
      system = `You are a helpful assistant. Please answer the user's questions based on the context provided.

`;
    }
    system += `<notes>${((_d = (_c = (_b = note()) == null ? void 0 : _b.data) == null ? void 0 : _c.content) == null ? void 0 : _d.md) ?? ""}</notes>` + (files() && files().length > 0 ? `
<context>${files().map((file) => {
      var _a2, _b2;
      return `${file.name}: ${((_b2 = (_a2 = file == null ? void 0 : file.file) == null ? void 0 : _a2.data) == null ? void 0 : _b2.content) ?? "Could not extract content"}
`;
    }).join("")}</context>` : "") + (selectedContent() ? `
<selection>${(_e = selectedContent()) == null ? void 0 : _e.text}</selection>` : "");
    const chatMessages = JSON.parse(JSON.stringify([{ role: "system", content: `${system}` }, ...messages()]));
    const [res, controller] = await chatCompletion(
      localStorage.token,
      {
        model: model.id,
        stream: true,
        messages: chatMessages.map((m) => ({ role: m.role, content: m.content }))
        // ...(files && files.length > 0 ? { files } : {}) // TODO: Decide whether to use native file handling or not
      },
      `${WEBUI_BASE_URL}/api`
    );
    await tick();
    scrollToBottom();
    let messageContent = "";
    if (res && res.ok) {
      const reader = res.body.pipeThrough(new TextDecoderStream()).pipeThrough(splitStream("\n")).getReader();
      while (true) {
        const { value, done } = await reader.read();
        if (done || stopResponseFlag()) {
          if (stopResponseFlag()) {
            controller.abort("User: Stop Response");
          }
          if (get(editEnabled)) {
            editing(false);
            streaming(false);
            onEdited()();
          }
          break;
        }
        try {
          let lines = value.split("\n");
          for (const line of lines) {
            if (line !== "") {
              console.log(line);
              if (line === "data: [DONE]") {
                if (get(editEnabled)) {
                  responseMessage.content = `<status title="${$i18n().t("Edited")}" done="true" />`;
                  if (selectedContent() && ((_f = selectedContent()) == null ? void 0 : _f.text) && editor()) {
                    editor().commands.insertContentAt({ from: selectedContent().from, to: selectedContent().to }, enhancedContent.html || enhancedContent.md || "");
                    selectedContent(null);
                  }
                }
                responseMessage.done = true;
                messages(messages());
              } else {
                let data = JSON.parse(line.replace(/^data: /, ""));
                console.log(data);
                let deltaContent = ((_h = (_g = data.choices[0]) == null ? void 0 : _g.delta) == null ? void 0 : _h.content) ?? "";
                if (responseMessage.content == "" && deltaContent == "\n") {
                  continue;
                } else {
                  if (get(editEnabled)) {
                    editing(true);
                    streaming(true);
                    enhancedContent.md += deltaContent;
                    enhancedContent.html = marked.parse(enhancedContent.md);
                    if (!selectedContent() || !((_i = selectedContent()) == null ? void 0 : _i.text)) {
                      note(note().data.content.md = enhancedContent.md, true);
                      note(note().data.content.html = enhancedContent.html, true);
                      note(note().data.content.json = null, true);
                    }
                    scrollToBottomHandler()();
                    responseMessage.content = `<status title="${$i18n().t("Editing")}" done="false" />`;
                    messages(messages());
                  } else {
                    messageContent += deltaContent;
                    responseMessage.content = messageContent;
                    messages(messages());
                  }
                  await tick();
                }
              }
            }
          }
        } catch (error) {
          console.log(error);
        }
        scrollToBottom();
      }
    }
  };
  const submitHandler = async (e) => {
    const { content, data } = e;
    if (selectedModelId() && content) {
      messages().push({ role: "user", content });
      messages(messages());
      await tick();
      scrollToBottom();
      set(loading, true);
      await chatCompletionHandler();
      messages(messages().map((message) => {
        message.done = true;
        return message;
      }));
      set(loading, false);
      stopResponseFlag(false);
    }
  };
  onMount(async () => {
    set(editEnabled, localStorage.getItem("noteEditEnabled") === "true");
    await tick();
    scrollToBottom();
  });
  init();
  var fragment = root$9();
  var div = first_child(fragment);
  var div_1 = child(div);
  var button = child(div_1);
  var node = child(button);
  XMark(node, { className: "size-5", strokeWidth: "2.5" });
  reset(button);
  reset(div_1);
  var div_2 = sibling(div_1, 2);
  var div_3 = child(div_2);
  var text_1 = child(div_3, true);
  reset(div_3);
  var div_4 = sibling(div_3, 2);
  var node_1 = child(div_4);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("This feature is experimental and may be modified or discontinued without notice."))));
    Tooltip(node_1, {
      get content() {
        return get($0);
      },
      position: "top",
      className: "inline-block",
      children: ($$anchor2, $$slotProps) => {
        var span = root_1$3();
        var text_2 = child(span);
        reset(span);
        template_effect(($02) => set_text(text_2, `(${$02 ?? ""})`), [() => ($i18n(), untrack(() => $i18n().t("Experimental")))]);
        append($$anchor2, span);
      },
      $$slots: { default: true }
    });
  }
  reset(div_4);
  reset(div_2);
  reset(div);
  var div_5 = sibling(div, 2);
  var div_6 = child(div_5);
  var div_7 = child(div_6);
  var div_8 = child(div_7);
  var div_9 = child(div_8);
  var div_10 = child(div_9);
  var div_11 = child(div_10);
  var node_2 = child(div_11);
  Messages(node_2, {
    get onInsert() {
      return onInsert();
    },
    get messages() {
      return messages();
    },
    set messages($$value) {
      messages($$value);
    },
    $$legacy: true
  });
  reset(div_11);
  reset(div_10);
  reset(div_9);
  bind_this(div_9, ($$value) => set(messagesContainerElement, $$value), () => get(messagesContainerElement));
  var div_12 = sibling(div_9, 2);
  var node_3 = child(div_12);
  {
    var consequent = ($$anchor2) => {
      var div_13 = root_2();
      var blockquote = child(div_13);
      var div_14 = child(blockquote);
      var text_3 = child(div_14, true);
      reset(div_14);
      reset(blockquote);
      reset(div_13);
      template_effect(() => set_text(text_3, (deep_read_state(selectedContent()), untrack(() => {
        var _a;
        return (_a = selectedContent()) == null ? void 0 : _a.text;
      }))));
      append($$anchor2, div_13);
    };
    if_block(node_3, ($$render) => {
      if (selectedContent()) $$render(consequent);
    });
  }
  var node_4 = sibling(node_3, 2);
  MessageInput(node_4, {
    acceptFiles: false,
    get inputLoading() {
      return get(loading);
    },
    showFormattingToolbar: false,
    onSubmit: submitHandler,
    get onStop() {
      return onStop();
    },
    get chatInputElement() {
      return get(chatInputElement);
    },
    set chatInputElement($$value) {
      set(chatInputElement, $$value);
    },
    $$slots: {
      menu: ($$anchor2, $$slotProps) => {
        var div_15 = root_3$2();
        var div_16 = child(div_15);
        var node_5 = child(div_16);
        {
          let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Edit"))));
          Tooltip(node_5, {
            get content() {
              return get($0);
            },
            placement: "top",
            children: ($$anchor3, $$slotProps2) => {
              var button_1 = root_4$3();
              var node_6 = child(button_1);
              PencilSquare(node_6, { className: "size-4", strokeWidth: "1.75" });
              var span_1 = sibling(node_6, 2);
              var text_4 = child(span_1, true);
              reset(span_1);
              reset(button_1);
              template_effect(
                ($02) => {
                  button_1.disabled = streaming() || get(loading);
                  set_class(button_1, 1, `px-2 @xl:px-2.5 py-2 flex gap-1.5 items-center text-sm rounded-full transition-colors duration-300 focus:outline-hidden max-w-full overflow-hidden hover:bg-gray-50 dark:hover:bg-gray-800 ${get(editEnabled) ? " text-sky-500 dark:text-sky-300 bg-sky-50 dark:bg-sky-200/5" : "bg-transparent text-gray-600 dark:text-gray-300 "} disabled:opacity-50 disabled:pointer-events-none`);
                  set_text(text_4, $02);
                },
                [() => ($i18n(), untrack(() => $i18n().t("Edit")))]
              );
              event("click", button_1, preventDefault(() => {
                set(editEnabled, !get(editEnabled));
                localStorage.setItem("noteEditEnabled", get(editEnabled) ? "true" : "false");
              }));
              append($$anchor3, button_1);
            },
            $$slots: { default: true }
          });
        }
        reset(div_16);
        var node_7 = sibling(div_16, 2);
        Tooltip(node_7, {
          get content() {
            return selectedModelId();
          },
          children: ($$anchor3, $$slotProps2) => {
            var select = root_5$2();
            template_effect(() => {
              selectedModelId();
              invalidate_inner_signals(() => {
                $models();
              });
            });
            each(
              select,
              5,
              () => ($models(), untrack(() => $models().filter((model) => {
                var _a, _b;
                return !(((_b = (_a = model == null ? void 0 : model.info) == null ? void 0 : _a.meta) == null ? void 0 : _b.hidden) ?? false);
              }))),
              index,
              ($$anchor4, model) => {
                var option = root_6$2();
                var text_5 = child(option, true);
                reset(option);
                var option_value = {};
                template_effect(() => {
                  set_text(text_5, (get(model), untrack(() => get(model).name)));
                  if (option_value !== (option_value = (get(model), untrack(() => get(model).id)))) {
                    option.value = (option.__value = (get(model), untrack(() => get(model).id))) ?? "";
                  }
                });
                append($$anchor4, option);
              }
            );
            reset(select);
            bind_select_value(select, selectedModelId);
            append($$anchor3, select);
          },
          $$slots: { default: true }
        });
        reset(div_15);
        append($$anchor2, div_15);
      }
    },
    $$legacy: true
  });
  reset(div_12);
  reset(div_8);
  reset(div_7);
  reset(div_6);
  reset(div_5);
  template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("Chat")))]);
  event("click", button, () => {
    show(!show());
  });
  event("scroll", div_9, onScroll);
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_3$1 = from_html(`<div class=" px-3.5 py-2.5 h-screen max-h-dvh flex flex-col"><!></div>`);
var root_6$1 = from_html(`<div class=" absolute -left-1.5 -right-1.5 -top-0 -bottom-0 z-20 cursor-col-resize bg-transparent"></div>`);
var root_8$1 = from_html(`<div class="flex max-h-full min-h-full"><div class="w-full pt-2 bg-white dark:shadow-lg dark:bg-gray-850 z-40 pointer-events-auto overflow-y-auto scrollbar-hidden flex flex-col px-2"><!></div></div>`);
var root_5$1 = from_html(`<!> <!>`, 1);
function NotePanel($$anchor, $$props) {
  push($$props, false);
  let show = prop($$props, "show", 12, false);
  let pane = prop($$props, "pane", 12, null);
  let containerId = prop($$props, "containerId", 8, "note-container");
  let mediaQuery;
  let largeScreen = mutable_source(false);
  let minSize = mutable_source(0);
  const handleMediaQuery = async (e) => {
    if (e.matches) {
      set(largeScreen, true);
    } else {
      set(largeScreen, false);
      pane(null);
    }
  };
  onMount(() => {
    mediaQuery = window.matchMedia("(min-width: 1000px)");
    mediaQuery.addEventListener("change", handleMediaQuery);
    handleMediaQuery(mediaQuery);
    const container = document.getElementById(containerId());
    set(minSize, Math.floor(400 / container.clientWidth * 100));
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const width = entry.contentRect.width;
        const percentage = 400 / width * 100;
        set(minSize, Math.floor(percentage));
        if (show()) {
          if (pane() && pane().isExpanded() && pane().getSize() < get(minSize)) {
            pane().resize(get(minSize));
          }
        }
      }
    });
    resizeObserver.observe(container);
  });
  onDestroy(() => {
    mediaQuery.removeEventListener("change", handleMediaQuery);
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_1 = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      {
        var consequent = ($$anchor3) => {
          Drawer($$anchor3, {
            get show() {
              return show();
            },
            onClose: () => {
              show(false);
            },
            children: ($$anchor4, $$slotProps) => {
              var div = root_3$1();
              var node_2 = child(div);
              slot(node_2, $$props, "default", {}, null);
              reset(div);
              append($$anchor4, div);
            },
            $$slots: { default: true }
          });
        };
        if_block(node_1, ($$render) => {
          if (show()) $$render(consequent);
        });
      }
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var fragment_3 = comment();
      var node_3 = first_child(fragment_3);
      {
        var consequent_3 = ($$anchor3) => {
          var fragment_4 = root_5$1();
          var node_4 = first_child(fragment_4);
          Pane_resizer(node_4, {
            class: "relative flex items-center justify-center group border-l border-gray-50 dark:border-gray-850 hover:border-gray-200 dark:hover:border-gray-800  transition z-20",
            id: "controls-resizer",
            children: ($$anchor4, $$slotProps) => {
              var div_1 = root_6$1();
              append($$anchor4, div_1);
            },
            $$slots: { default: true }
          });
          var node_5 = sibling(node_4, 2);
          {
            let $0 = derived_safe_equal(() => (get(minSize), untrack(() => Math.max(20, get(minSize)))));
            Pane(node_5, {
              get defaultSize() {
                return get($0);
              },
              get minSize() {
                return get(minSize);
              },
              onCollapse: () => {
                show(false);
              },
              collapsible: true,
              class: " z-10 ",
              get pane() {
                return pane();
              },
              set pane($$value) {
                pane($$value);
              },
              children: ($$anchor4, $$slotProps) => {
                var fragment_5 = comment();
                var node_6 = first_child(fragment_5);
                {
                  var consequent_2 = ($$anchor5) => {
                    var div_2 = root_8$1();
                    var div_3 = child(div_2);
                    var node_7 = child(div_3);
                    slot(node_7, $$props, "default", {}, null);
                    reset(div_3);
                    reset(div_2);
                    append($$anchor5, div_2);
                  };
                  if_block(node_6, ($$render) => {
                    if (show()) $$render(consequent_2);
                  });
                }
                append($$anchor4, fragment_5);
              },
              $$slots: { default: true },
              $$legacy: true
            });
          }
          append($$anchor3, fragment_4);
        };
        if_block(
          node_3,
          ($$render) => {
            if (show()) $$render(consequent_3);
          },
          true
        );
      }
      append($$anchor2, fragment_3);
    };
    if_block(node, ($$render) => {
      if (!get(largeScreen)) $$render(consequent_1);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root$8 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"></path></svg>`);
function Calendar($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-3");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$8();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root$7 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"></path></svg>`);
function Users($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-3");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$7();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root$6 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"></path></svg>`);
function Mic($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$6();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root$5 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"></path></svg>`);
function CursorArrowRays($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$5();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root_4$2 = from_html(`<button class="flex rounded-md py-1.5 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition"><div class=" self-center mr-2"><!></div> <div class=" self-center truncate"> </div></button> <button class="flex rounded-md py-1.5 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition"><div class=" self-center mr-2"><!></div> <div class=" self-center truncate"> </div></button> <button class="flex rounded-md py-1.5 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition"><div class=" self-center mr-2"><!></div> <div class=" self-center truncate"> </div></button>`, 1);
var root_1$2 = from_html(`<!> <!>`, 1);
function RecordMenu($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let className = prop($$props, "className", 8, "max-w-[170px]");
  let onRecord = prop($$props, "onRecord", 8, () => {
  });
  let onCaptureAudio = prop($$props, "onCaptureAudio", 8, () => {
  });
  let onUpload = prop($$props, "onUpload", 8, () => {
  });
  const dispatch = createEventDispatcher();
  init();
  Menu($$anchor, {
    onOpenChange: (state) => {
      dispatch("change", state);
    },
    get open() {
      return show();
    },
    set open($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$2();
      var node = first_child(fragment_1);
      Menu_trigger(node, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = comment();
          var node_1 = first_child(fragment_2);
          slot(node_1, $$props, "default", {}, null);
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      var node_2 = sibling(node, 2);
      slot(node_2, $$props, "content", {}, ($$anchor3) => {
        Menu_content($$anchor3, {
          get class() {
            return `w-full ${className() ?? ""} text-sm rounded-xl p-1 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg font-primary`;
          },
          sideOffset: 8,
          side: "bottom",
          align: "start",
          transition: (e) => fade(e, { duration: 100 }),
          children: ($$anchor4, $$slotProps2) => {
            var fragment_4 = root_4$2();
            var button = first_child(fragment_4);
            var div = child(button);
            var node_3 = child(div);
            Mic(node_3, { className: "size-4", strokeWidth: "2" });
            reset(div);
            var div_1 = sibling(div, 2);
            var text = child(div_1, true);
            reset(div_1);
            reset(button);
            var button_1 = sibling(button, 2);
            var div_2 = child(button_1);
            var node_4 = child(div_2);
            CursorArrowRays(node_4, { className: "size-4", strokeWidth: "2" });
            reset(div_2);
            var div_3 = sibling(div_2, 2);
            var text_1 = child(div_3, true);
            reset(div_3);
            reset(button_1);
            var button_2 = sibling(button_1, 2);
            var div_4 = child(button_2);
            var node_5 = child(div_4);
            CloudArrowUp(node_5, { className: "size-4", strokeWidth: "2" });
            reset(div_4);
            var div_5 = sibling(div_4, 2);
            var text_2 = child(div_5, true);
            reset(div_5);
            reset(button_2);
            template_effect(
              ($0, $1, $2) => {
                set_text(text, $0);
                set_text(text_1, $1);
                set_text(text_2, $2);
              },
              [
                () => ($i18n(), untrack(() => $i18n().t("Record"))),
                () => ($i18n(), untrack(() => $i18n().t("Capture Audio"))),
                () => ($i18n(), untrack(() => $i18n().t("Upload Audio")))
              ]
            );
            event("click", button, async () => {
              onRecord()();
              show(false);
            });
            event("click", button_1, () => {
              onCaptureAudio()();
              show(false);
            });
            event("click", button_2, () => {
              onUpload()();
              show(false);
            });
            append($$anchor4, fragment_4);
          },
          $$slots: { default: true }
        });
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root$4 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clip-rule="evenodd"></path></svg>`);
function SparklesSolid($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-4 h-4");
  prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$4();
  template_effect(() => set_class(svg, 0, clsx(className())));
  append($$anchor, svg);
}
var root$3 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"></path></svg>`);
function ArrowUturnLeft($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$3();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root$2 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"></path></svg>`);
function ArrowUturnRight($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$2();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root_4$1 = from_html(`<button class="flex rounded-md py-1.5 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition"><div class=" self-center mr-2"><!></div> <div class=" self-center truncate"> </div></button> <button class="flex rounded-md py-1.5 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition"><div class=" self-center mr-2"><!></div> <div class=" self-center truncate"> </div></button>`, 1);
var root_1$1 = from_html(`<!> <!>`, 1);
function AIMenu($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let className = prop($$props, "className", 8, "max-w-[170px]");
  let onEdit = prop($$props, "onEdit", 8, () => {
  });
  let onChat = prop($$props, "onChat", 8, () => {
  });
  let onChange = prop($$props, "onChange", 8, () => {
  });
  init();
  Menu($$anchor, {
    get onOpenChange() {
      return onChange();
    },
    get open() {
      return show();
    },
    set open($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$1();
      var node = first_child(fragment_1);
      Menu_trigger(node, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = comment();
          var node_1 = first_child(fragment_2);
          slot(node_1, $$props, "default", {}, null);
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      var node_2 = sibling(node, 2);
      slot(node_2, $$props, "content", {}, ($$anchor3) => {
        Menu_content($$anchor3, {
          get class() {
            return `w-full ${className() ?? ""} text-sm rounded-xl p-1 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg font-primary`;
          },
          sideOffset: 8,
          side: "bottom",
          align: "end",
          transition: (e) => fade(e, { duration: 100 }),
          children: ($$anchor4, $$slotProps2) => {
            var fragment_4 = root_4$1();
            var button = first_child(fragment_4);
            var div = child(button);
            var node_3 = child(div);
            Sparkles(node_3, { className: "size-4", strokeWidth: "2" });
            reset(div);
            var div_1 = sibling(div, 2);
            var text = child(div_1, true);
            reset(div_1);
            reset(button);
            var button_1 = sibling(button, 2);
            var div_2 = child(button_1);
            var node_4 = child(div_2);
            ChatBubbleOval(node_4, { className: "size-4", strokeWidth: "2" });
            reset(div_2);
            var div_3 = sibling(div_2, 2);
            var text_1 = child(div_3, true);
            reset(div_3);
            reset(button_1);
            template_effect(
              ($0, $1) => {
                set_text(text, $0);
                set_text(text_1, $1);
              },
              [
                () => ($i18n(), untrack(() => $i18n().t("Enhance"))),
                () => ($i18n(), untrack(() => $i18n().t("Chat")))
              ]
            );
            event("click", button, async () => {
              onEdit()();
              show(false);
            });
            event("click", button_1, () => {
              onChat()();
              show(false);
            });
            append($$anchor4, fragment_4);
          },
          $$slots: { default: true }
        });
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root$1 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"></path></svg>`);
function AdjustmentsHorizontalOutline($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-4 h-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$1();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root_3 = from_html(`<div class=" text-sm text-gray-500"> <span class="  font-semibold"> </span>.</div>`);
var root_6 = from_html(`<div class=" absolute top-0 bottom-0 left-0 right-0 flex"><div class="m-auto"><!></div></div>`);
var root_9 = from_html(`<button id="sidebar-toggle-button" class=" cursor-pointer flex rounded-lg hover:bg-gray-100 dark:hover:bg-gray-850 transition cursor-"><div class=" self-center p-1.5"><!></div></button>`);
var root_8 = from_html(`<div><!></div>`);
var root_11 = from_html(`<button class=" self-center dark:hover:text-white transition" id="generate-title-button"><!></button>`);
var root_10 = from_html(`<div class="flex self-center items-center space-x-1.5 z-10 translate-y-[0.5px] -translate-x-[0.5px] pl-2"><!></div>`);
var root_12 = from_html(`<div><div class="flex items-center gap-0.5 self-center min-w-fit" dir="ltr"><button class="self-center p-1 hover:enabled:bg-black/5 dark:hover:enabled:bg-white/5 dark:hover:enabled:text-white hover:enabled:text-black rounded-md transition disabled:cursor-not-allowed disabled:text-gray-500 disabled:hover:text-gray-500"><!></button> <button class="self-center p-1 hover:enabled:bg-black/5 dark:hover:enabled:bg-white/5 dark:hover:enabled:text-white hover:enabled:text-black rounded-md transition disabled:cursor-not-allowed disabled:text-gray-500 disabled:hover:text-gray-500"><!></button></div></div>`);
var root_13 = from_html(`<button class="p-1.5 bg-transparent hover:bg-white/5 transition rounded-lg"><!></button>`);
var root_14 = from_html(`<button class="p-1.5 bg-transparent hover:bg-white/5 transition rounded-lg"><!></button>`);
var root_15 = from_html(`<div class="p-1 bg-transparent hover:bg-white/5 transition rounded-lg"><!></div>`);
var root_16 = from_html(`<span> </span>`);
var root_18 = from_html(`<span> </span>`);
var root_20 = from_html(`<span> </span>`);
var root_21 = from_html(`<span> </span>`);
var root_22 = from_html(`<div class="flex items-center gap-1 px-1 min-w-fit"><div> </div> <div> </div></div>`);
var root_23 = from_html(`<div></div>`);
var root_7 = from_html(`<div><div class="shrink-0 w-full flex justify-between items-center px-3.5 mb-1.5"><div class="w-full flex items-center"><!> <input class="w-full text-2xl font-medium bg-transparent outline-hidden" type="text" required/> <!> <div class="flex items-center gap-0.5 translate-x-1"><!> <!> <!> <!></div></div></div> <div class="  px-2.5"><div class=" flex w-full bg-transparent overflow-x-auto scrollbar-none"><div class="flex gap-1 items-center text-xs font-medium text-gray-500 dark:text-gray-500 w-fit"><button class=" flex items-center gap-1 w-fit py-1 px-1.5 rounded-lg min-w-fit"><!> <!></button> <button class=" flex items-center gap-1 w-fit py-1 px-1.5 rounded-lg min-w-fit"><!> <span> </span></button> <!></div></div></div> <div class=" flex-1 w-full h-full overflow-auto px-3.5 pb-20 relative pt-2.5" id="note-content-container"><!> <!></div></div>`);
var root_24 = from_html(`<div class="flex-1 w-full"><!></div>`);
var root_27 = from_html(`<div class="cursor-pointer p-2.5 flex rounded-full border border-gray-50 bg-white dark:border-none dark:bg-gray-850 hover:bg-gray-50 dark:hover:bg-gray-800 transition shadow-xl"><!></div>`);
var root_29 = from_html(`<button class="p-2 flex justify-center items-center hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full transition shrink-0" type="button"><!></button>`);
var root_31 = from_html(`<div class="cursor-pointer p-2.5 flex rounded-full border border-gray-50 bg-white dark:border-none dark:bg-gray-850 hover:bg-gray-50 dark:hover:bg-gray-800 transition shadow-xl"><!></div>`);
var root_25 = from_html(`<!> <div class="cursor-pointer flex gap-0.5 rounded-full border border-gray-50 dark:border-gray-850 dark:bg-gray-850 transition shadow-xl"><!></div>`, 1);
var root_5 = from_html(`<div class="relative flex-1 w-full h-full flex justify-center pt-[11px]" id="note-editor"><!></div> <div class="absolute z-20 bottom-0 right-0 p-3.5 max-w-full w-full flex"><div class="flex gap-1 w-full min-w-full justify-between"><!></div></div>`, 1);
var root_4 = from_html(`<!> <!>`, 1);
var root = from_html(`<!> <!> <!> <!>`, 1);
function NoteEditor($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $models = () => store_get(models, "$models", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $socket = () => store_get(socket, "$socket", $$stores);
  const $WEBUI_NAME = () => store_get(WEBUI_NAME, "$WEBUI_NAME", $$stores);
  const $mobile = () => store_get(mobile, "$mobile", $$stores);
  const $showSidebar = () => store_get(showSidebar, "$showSidebar", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const { saveAs } = fileSaver;
  const i18n = getContext("i18n");
  dayjs2.extend(calendar);
  dayjs2.extend(duration);
  dayjs2.extend(relativeTime);
  async function loadLocale(locales) {
    for (const locale of locales) {
      try {
        dayjs2.locale(locale);
        break;
      } catch (error) {
        console.error(`Could not load locale '${locale}':`, error);
      }
    }
  }
  let id = prop($$props, "id", 8, null);
  let editor = mutable_source(null);
  let note = mutable_source(null);
  let files = mutable_source([]);
  let messages = mutable_source([]);
  let wordCount = mutable_source(0);
  let charCount = mutable_source(0);
  let versionIdx = mutable_source(null);
  let selectedModelId = mutable_source(null);
  let recording = mutable_source(false);
  let displayMediaRecord = mutable_source(false);
  let showPanel = mutable_source(false);
  let selectedPanel = mutable_source("chat");
  let selectedContent = mutable_source(null);
  let showDeleteConfirm = mutable_source(false);
  let showAccessControlModal = mutable_source(false);
  let ignoreBlur = mutable_source(false);
  let titleInputFocused = mutable_source(false);
  let titleGenerating = mutable_source(false);
  let dragged = mutable_source(false);
  let loading = mutable_source(false);
  let editing = mutable_source(false);
  let streaming = mutable_source(false);
  let stopResponseFlag = mutable_source(false);
  let inputElement = mutable_source(null);
  const init$1 = async () => {
    set(loading, true);
    const res = await getNoteById(localStorage.token, id()).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    set(messages, []);
    if (res) {
      set(note, res);
      set(files, res.data.files || []);
    } else {
      goto("/");
      return;
    }
    set(loading, false);
  };
  let debounceTimeout = null;
  const changeDebounceHandler = () => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
    debounceTimeout = setTimeout(
      async () => {
        var _a, _b;
        await updateNoteById(localStorage.token, id(), {
          title: ((_a = get(note)) == null ? void 0 : _a.title) === "" ? $i18n().t("Untitled") : get(note).title,
          data: { files: get(files) },
          access_control: (_b = get(note)) == null ? void 0 : _b.access_control
        }).catch((e) => {
          toast.error(`${e}`);
        });
      },
      200
    );
  };
  function areContentsEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
  }
  function insertNoteVersion(note2) {
    var _a;
    const current = {
      json: note2.data.content.json,
      html: note2.data.content.html,
      md: note2.data.content.md
    };
    const lastVersion = (_a = note2.data.versions) == null ? void 0 : _a.at(-1);
    if (!lastVersion || !areContentsEqual(lastVersion, current)) {
      note2.data.versions = (note2.data.versions ?? []).concat(current);
      return true;
    }
    return false;
  }
  const onEdited = async () => {
    if (!get(editor)) return;
    get(editor).commands.setContent(get(note).data.content.html);
  };
  const generateTitleHandler = async () => {
    var _a, _b;
    const content = get(note).data.content.md;
    const DEFAULT_TITLE_GENERATION_PROMPT_TEMPLATE = `### Task:
Generate a concise, 3-5 word title with an emoji summarizing the content in the content's primary language.
### Guidelines:
- The title should clearly represent the main theme or subject of the content.
- Use emojis that enhance understanding of the topic, but avoid quotation marks or special formatting.
- Write the title in the content's primary language.
- Prioritize accuracy over excessive creativity; keep it clear and simple.
- Your entire response must consist solely of the JSON object, without any introductory or concluding text.
- The output must be a single, raw JSON object, without any markdown code fences or other encapsulating text.
- Ensure no conversational text, affirmations, or explanations precede or follow the raw JSON output, as this will cause direct parsing failure.
### Output:
JSON format: { "title": "your concise title here" }
### Examples:
- { "title": "📉 Stock Market Trends" },
- { "title": "🍪 Perfect Chocolate Chip Recipe" },
- { "title": "Evolution of Music Streaming" },
- { "title": "Remote Work Productivity Tips" },
- { "title": "Artificial Intelligence in Healthcare" },
- { "title": "🎮 Video Game Development Insights" }
### Content:
<content>
${content}
</content>`;
    const oldTitle = JSON.parse(JSON.stringify(get(note).title));
    mutate(note, get(note).title = "");
    set(titleGenerating, true);
    const res = await generateOpenAIChatCompletion(
      localStorage.token,
      {
        model: get(selectedModelId),
        stream: false,
        messages: [
          {
            role: "user",
            content: DEFAULT_TITLE_GENERATION_PROMPT_TEMPLATE
          }
        ]
      },
      `${WEBUI_BASE_URL}/api`
    );
    if (res) {
      const response = ((_b = (_a = res == null ? void 0 : res.choices[0]) == null ? void 0 : _a.message) == null ? void 0 : _b.content) ?? "";
      try {
        const jsonStartIndex = response.indexOf("{");
        const jsonEndIndex = response.lastIndexOf("}");
        if (jsonStartIndex !== -1 && jsonEndIndex !== -1) {
          const jsonResponse = response.substring(jsonStartIndex, jsonEndIndex + 1);
          const parsed = JSON.parse(jsonResponse);
          if (parsed && parsed.title) {
            mutate(note, get(note).title = parsed.title.trim());
          }
        }
      } catch (e) {
        console.error("Error parsing JSON response:", e);
        toast.error($i18n().t("Failed to generate title"));
      }
    }
    if (!get(note).title) {
      mutate(note, get(note).title = oldTitle);
    }
    set(titleGenerating, false);
    await tick();
    changeDebounceHandler();
  };
  async function enhanceNoteHandler() {
    if (get(selectedModelId) === "") {
      toast.error($i18n().t("Please select a model."));
      return;
    }
    const model = $models().filter((model2) => {
      var _a, _b;
      return model2.id === get(selectedModelId) && !(((_b = (_a = model2 == null ? void 0 : model2.info) == null ? void 0 : _a.meta) == null ? void 0 : _b.hidden) ?? false);
    }).find((model2) => model2.id === get(selectedModelId));
    if (!model) {
      set(selectedModelId, "");
      return;
    }
    set(editing, true);
    await enhanceCompletionHandler(model);
    set(editing, false);
    onEdited();
    set(versionIdx, null);
  }
  const stopResponseHandler = async () => {
    set(stopResponseFlag, true);
    console.log("stopResponse", get(stopResponseFlag));
  };
  const uploadFileHandler = async (file) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const tempItemId = v4();
    const fileItem = {
      type: "file",
      file: "",
      id: null,
      url: "",
      name: file.name,
      collection_name: "",
      status: "uploading",
      size: file.size,
      error: "",
      itemId: tempItemId
    };
    if (fileItem.size == 0) {
      toast.error($i18n().t("You cannot upload an empty file."));
      return null;
    }
    set(files, [...get(files), fileItem]);
    set(selectedPanel, "settings");
    if (!get(showPanel)) {
      set(showPanel, true);
    }
    try {
      let metadata = null;
      if ((file.type.startsWith("audio/") || file.type.startsWith("video/")) && ((_c = (_b = (_a = $settings()) == null ? void 0 : _a.audio) == null ? void 0 : _b.stt) == null ? void 0 : _c.language)) {
        metadata = { language: (_f = (_e = (_d = $settings()) == null ? void 0 : _d.audio) == null ? void 0 : _e.stt) == null ? void 0 : _f.language };
      }
      const uploadedFile = await uploadFile(localStorage.token, file, metadata);
      if (uploadedFile) {
        console.log("File upload completed:", {
          id: uploadedFile.id,
          name: fileItem.name,
          collection: (_g = uploadedFile == null ? void 0 : uploadedFile.meta) == null ? void 0 : _g.collection_name
        });
        if (uploadedFile.error) {
          console.warn("File upload warning:", uploadedFile.error);
          toast.warning(uploadedFile.error);
        }
        fileItem.status = "uploaded";
        fileItem.file = uploadedFile;
        fileItem.id = uploadedFile.id;
        fileItem.collection_name = ((_h = uploadedFile == null ? void 0 : uploadedFile.meta) == null ? void 0 : _h.collection_name) || (uploadedFile == null ? void 0 : uploadedFile.collection_name);
        fileItem.url = `${WEBUI_API_BASE_URL}/files/${uploadedFile.id}`;
        set(files, get(files));
      } else {
        set(files, get(files).filter((item) => (item == null ? void 0 : item.itemId) !== tempItemId));
      }
    } catch (e) {
      toast.error(`${e}`);
      set(files, get(files).filter((item) => (item == null ? void 0 : item.itemId) !== tempItemId));
    }
    if (get(files).length > 0) {
      mutate(note, get(note).data.files = get(files));
    } else {
      mutate(note, get(note).data.files = null);
    }
    mutate(editor, get(editor).storage.files = get(files));
    changeDebounceHandler();
    return fileItem;
  };
  const compressImageHandler = async (imageUrl, settings2 = {}, config2 = {}) => {
    var _a, _b, _c, _d, _e, _f;
    const settingsCompression = (settings2 == null ? void 0 : settings2.imageCompression) ?? false;
    const configWidth = ((_b = (_a = config2 == null ? void 0 : config2.file) == null ? void 0 : _a.image_compression) == null ? void 0 : _b.width) ?? null;
    const configHeight = ((_d = (_c = config2 == null ? void 0 : config2.file) == null ? void 0 : _c.image_compression) == null ? void 0 : _d.height) ?? null;
    if (!settingsCompression && !configWidth && !configHeight) {
      return imageUrl;
    }
    let width = null;
    let height = null;
    if (settingsCompression) {
      width = ((_e = settings2 == null ? void 0 : settings2.imageCompressionSize) == null ? void 0 : _e.width) ?? null;
      height = ((_f = settings2 == null ? void 0 : settings2.imageCompressionSize) == null ? void 0 : _f.height) ?? null;
    }
    if (configWidth && (width === null || width > configWidth)) {
      width = configWidth;
    }
    if (configHeight && (height === null || height > configHeight)) {
      height = configHeight;
    }
    if (width || height) {
      return await compressImage(imageUrl, width, height);
    }
    return imageUrl;
  };
  const inputFileHandler = async (file) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    console.log("Processing file:", {
      name: file.name,
      type: file.type,
      size: file.size,
      extension: file.name.split(".").at(-1)
    });
    if ((((_b = (_a = $config()) == null ? void 0 : _a.file) == null ? void 0 : _b.max_size) ?? null) !== null && file.size > (((_d = (_c = $config()) == null ? void 0 : _c.file) == null ? void 0 : _d.max_size) ?? 0) * 1024 * 1024) {
      console.log("File exceeds max size limit:", {
        fileSize: file.size,
        maxSize: (((_f = (_e = $config()) == null ? void 0 : _e.file) == null ? void 0 : _f.max_size) ?? 0) * 1024 * 1024
      });
      toast.error($i18n().t(`File size should not exceed {{maxSize}} MB.`, { maxSize: (_h = (_g = $config()) == null ? void 0 : _g.file) == null ? void 0 : _h.max_size }));
      return;
    }
    if (file["type"].startsWith("image/")) {
      const uploadImagePromise = new Promise(async (resolve, reject) => {
        let reader = new FileReader();
        reader.onload = async (event2) => {
          try {
            let imageUrl = event2.target.result;
            imageUrl = await compressImageHandler(imageUrl, $settings(), $config());
            const fileId = v4();
            const fileItem = { id: fileId, type: "image", url: `${imageUrl}` };
            set(files, [...get(files), fileItem]);
            mutate(note, get(note).data.files = get(files));
            mutate(editor, get(editor).storage.files = get(files));
            changeDebounceHandler();
            resolve(fileItem);
          } catch (err) {
            reject(err);
          }
        };
        reader.readAsDataURL(file["type"] === "image/heic" ? await convertHeicToJpeg(file) : file);
      });
      return await uploadImagePromise;
    } else {
      return await uploadFileHandler(file);
    }
  };
  const downloadHandler = async (type) => {
    console.log("downloadHandler", type);
    if (type === "txt") {
      const blob = new Blob([get(note).data.content.md], { type: "text/plain" });
      saveAs(blob, `${get(note).title}.txt`);
    } else if (type === "md") {
      const blob = new Blob([get(note).data.content.md], { type: "text/markdown" });
      saveAs(blob, `${get(note).title}.md`);
    } else if (type === "pdf") {
      try {
        await downloadPdf(get(note));
      } catch (error) {
        toast.error(`${error}`);
      }
    }
  };
  const deleteNoteHandler = async (id2) => {
    const res = await deleteNoteById(localStorage.token, id2).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      toast.success($i18n().t("Note deleted successfully"));
      goto("/notes");
    } else {
      toast.error($i18n().t("Failed to delete note"));
    }
  };
  const scrollToBottom = () => {
    const element = document.getElementById("note-content-container");
    if (element) {
      element.scrollTop = element == null ? void 0 : element.scrollHeight;
    }
  };
  const enhanceCompletionHandler = async (model) => {
    set(stopResponseFlag, false);
    let enhancedContent = { json: null, html: "", md: "" };
    const systemPrompt = `Enhance existing notes using additional context provided from audio transcription or uploaded file content in the content's primary language. Your task is to make the notes more useful and comprehensive by incorporating relevant information from the provided context.

Input will be provided within <notes> and <context> XML tags, providing a structure for the existing notes and context respectively.

# Output Format

Provide the enhanced notes in markdown format. Use markdown syntax for headings, lists, task lists ([ ]) where tasks or checklists are strongly implied, and emphasis to improve clarity and presentation. Ensure that all integrated content from the context is accurately reflected. Return only the markdown formatted note.
`;
    const [res, controller] = await chatCompletion(
      localStorage.token,
      {
        model: model.id,
        stream: true,
        messages: [
          { role: "system", content: systemPrompt },
          {
            role: "user",
            content: `<notes>${get(note).data.content.md}</notes>` + (get(files) && get(files).length > 0 ? `
<context>${get(files).map((file) => {
              var _a, _b;
              return `${file.name}: ${((_b = (_a = file == null ? void 0 : file.file) == null ? void 0 : _a.data) == null ? void 0 : _b.content) ?? "Could not extract content"}
`;
            }).join("")}</context>` : "")
          }
        ]
      },
      `${WEBUI_BASE_URL}/api`
    );
    await tick();
    set(streaming, true);
    if (res && res.ok) {
      const reader = res.body.pipeThrough(new TextDecoderStream()).pipeThrough(splitStream("\n")).getReader();
      while (true) {
        const { value, done } = await reader.read();
        if (done || get(stopResponseFlag)) {
          if (get(stopResponseFlag)) {
            controller.abort("User: Stop Response");
          }
          set(editing, false);
          set(streaming, false);
          break;
        }
        try {
          let lines = value.split("\n");
          for (const line of lines) {
            if (line !== "") {
              console.log(line);
              if (line === "data: [DONE]") {
                console.log(line);
              } else {
                let data = JSON.parse(line.replace(/^data: /, ""));
                console.log(data);
                if (data.choices && data.choices.length > 0) {
                  const choice = data.choices[0];
                  if (choice.delta && choice.delta.content) {
                    enhancedContent.md += choice.delta.content;
                    enhancedContent.html = marked.parse(enhancedContent.md);
                    mutate(note, get(note).data.content.md = enhancedContent.md);
                    mutate(note, get(note).data.content.html = enhancedContent.html);
                    mutate(note, get(note).data.content.json = null);
                    scrollToBottom();
                  }
                }
              }
            }
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    set(streaming, false);
  };
  const insertHandler = (content) => {
    var _a;
    insertNoteVersion(get(note));
    (_a = get(inputElement)) == null ? void 0 : _a.insertContent(content);
  };
  const noteEventHandler = async (_note) => {
    console.log("noteEventHandler", _note);
    if (_note.id !== id()) return;
    if (_note.access_control && _note.access_control !== get(note).access_control) {
      mutate(note, get(note).access_control = _note.access_control);
    }
    if (_note.data && _note.data.files) {
      set(files, _note.data.files);
      mutate(note, get(note).data.files = get(files));
    }
    if (_note.title && _note.title) {
      mutate(note, get(note).title = _note.title);
    }
    mutate(editor, get(editor).storage.files = get(files));
    await tick();
    for (const file of get(files)) {
      if (file.type === "image") {
        const e = new CustomEvent("data", { files: get(files) });
        const img = document.getElementById(`image:${file.id}`);
        if (img) {
          img.dispatchEvent(e);
        }
      }
    }
  };
  onMount(async () => {
    var _a, _b, _c, _d, _e, _f, _g;
    await tick();
    (_a = $socket()) == null ? void 0 : _a.emit("join-note", { note_id: id(), auth: { token: localStorage.token } });
    (_b = $socket()) == null ? void 0 : _b.on("note-events", noteEventHandler);
    if ((_c = $settings()) == null ? void 0 : _c.models) {
      set(selectedModelId, (_d = $settings()) == null ? void 0 : _d.models[0]);
    } else if ((_e = $config()) == null ? void 0 : _e.default_models) {
      set(selectedModelId, (_f = $config()) == null ? void 0 : _f.default_models.split(",")[0]);
    } else {
      set(selectedModelId, "");
    }
    if (get(selectedModelId)) {
      const model = $models().filter((model2) => {
        var _a2, _b2;
        return model2.id === get(selectedModelId) && !(((_b2 = (_a2 = model2 == null ? void 0 : model2.info) == null ? void 0 : _a2.meta) == null ? void 0 : _b2.hidden) ?? false);
      }).find((model2) => model2.id === get(selectedModelId));
      if (!model) {
        set(selectedModelId, "");
      }
    }
    if (!get(selectedModelId)) {
      set(selectedModelId, ((_g = $models().filter((model) => {
        var _a2, _b2;
        return !(((_b2 = (_a2 = model == null ? void 0 : model.info) == null ? void 0 : _a2.meta) == null ? void 0 : _b2.hidden) ?? false);
      }).at(0)) == null ? void 0 : _g.id) || "");
    }
    document.getElementById("note-editor");
  });
  onDestroy(() => {
    var _a;
    console.log("destroy");
    (_a = $socket()) == null ? void 0 : _a.off("note-events", noteEventHandler);
    document.getElementById("note-editor");
  });
  legacy_pre_effect(() => $i18n(), () => {
    loadLocale($i18n().languages);
  });
  legacy_pre_effect(() => deep_read_state(id()), () => {
    if (id()) {
      init$1();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root();
  head("okwkxt", ($$anchor2) => {
    deferred_template_effect(
      ($0) => {
        $document.title = `
		${$0 ?? ""}
	`;
      },
      [
        () => (get(note), $WEBUI_NAME(), untrack(() => {
          var _a, _b, _c, _d;
          return ((_a = get(note)) == null ? void 0 : _a.title) ? `${((_b = get(note)) == null ? void 0 : _b.title.length) > 30 ? `${(_c = get(note)) == null ? void 0 : _c.title.slice(0, 30)}...` : (_d = get(note)) == null ? void 0 : _d.title} • ${$WEBUI_NAME()}` : `${$WEBUI_NAME()}`;
        }))
      ]
    );
  });
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      AccessControlModal($$anchor2, {
        accessRoles: ["read", "write"],
        onChange: () => {
          changeDebounceHandler();
        },
        get show() {
          return get(showAccessControlModal);
        },
        set show($$value) {
          set(showAccessControlModal, $$value);
        },
        get accessControl() {
          return get(note).access_control;
        },
        set accessControl($$value) {
          mutate(note, get(note).access_control = $$value);
        },
        $$legacy: true
      });
    };
    if_block(node, ($$render) => {
      if (get(note)) $$render(consequent);
    });
  }
  var node_1 = sibling(node, 2);
  FilesOverlay(node_1, {
    get show() {
      return get(dragged);
    }
  });
  var node_2 = sibling(node_1, 2);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete note?"))));
    ConfirmDialog(node_2, {
      get title() {
        return get($0);
      },
      get show() {
        return get(showDeleteConfirm);
      },
      set show($$value) {
        set(showDeleteConfirm, $$value);
      },
      $$events: {
        confirm: () => {
          deleteNoteHandler(get(note).id);
          set(showDeleteConfirm, false);
        }
      },
      children: ($$anchor2, $$slotProps) => {
        var div = root_3();
        var text = child(div);
        var span = sibling(text);
        var text_1 = child(span, true);
        reset(span);
        next();
        reset(div);
        template_effect(
          ($02) => {
            set_text(text, `${$02 ?? ""} `);
            set_text(text_1, (get(note), untrack(() => get(note).title)));
          },
          [
            () => ($i18n(), untrack(() => $i18n().t("This will delete")))
          ]
        );
        append($$anchor2, div);
      },
      $$slots: { default: true },
      $$legacy: true
    });
  }
  var node_3 = sibling(node_2, 2);
  Pane_group(node_3, {
    direction: "horizontal",
    class: "w-full h-full",
    children: ($$anchor2, $$slotProps) => {
      var fragment_2 = root_4();
      var node_4 = first_child(fragment_2);
      Pane(node_4, {
        defaultSize: 70,
        minSize: 30,
        class: "h-full flex flex-col w-full relative",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_3 = root_5();
          var div_1 = first_child(fragment_3);
          var node_5 = child(div_1);
          {
            var consequent_1 = ($$anchor4) => {
              var div_2 = root_6();
              var div_3 = child(div_2);
              var node_6 = child(div_3);
              Spinner(node_6, { className: "size-5" });
              reset(div_3);
              reset(div_2);
              append($$anchor4, div_2);
            };
            var alternate_3 = ($$anchor4) => {
              var div_4 = root_7();
              var div_5 = child(div_4);
              var div_6 = child(div_5);
              var node_7 = child(div_6);
              {
                var consequent_2 = ($$anchor5) => {
                  var div_7 = root_8();
                  var node_8 = child(div_7);
                  {
                    let $0 = derived_safe_equal(() => ($showSidebar(), $i18n(), untrack(() => $showSidebar() ? $i18n().t("Close Sidebar") : $i18n().t("Open Sidebar"))));
                    Tooltip(node_8, {
                      get content() {
                        return get($0);
                      },
                      children: ($$anchor6, $$slotProps3) => {
                        var button = root_9();
                        var div_8 = child(button);
                        var node_9 = child(div_8);
                        Sidebar(node_9, {});
                        reset(div_8);
                        reset(button);
                        event("click", button, () => {
                          showSidebar.set(!$showSidebar());
                        });
                        append($$anchor6, button);
                      },
                      $$slots: { default: true }
                    });
                  }
                  reset(div_7);
                  template_effect(() => set_class(div_7, 1, `${$showSidebar() ? "md:hidden pl-0.5" : ""} flex flex-none items-center pr-1 -translate-x-1`));
                  append($$anchor5, div_7);
                };
                if_block(node_7, ($$render) => {
                  if ($mobile()) $$render(consequent_2);
                });
              }
              var input_1 = sibling(node_7, 2);
              remove_input_defaults(input_1);
              var node_10 = sibling(input_1, 2);
              {
                var consequent_3 = ($$anchor5) => {
                  var div_9 = root_10();
                  var node_11 = child(div_9);
                  {
                    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Generate"))));
                    Tooltip(node_11, {
                      get content() {
                        return get($0);
                      },
                      children: ($$anchor6, $$slotProps3) => {
                        var button_1 = root_11();
                        var node_12 = child(button_1);
                        Sparkles(node_12, { strokeWidth: "2" });
                        reset(button_1);
                        template_effect(() => button_1.disabled = (get(note), $user(), get(titleGenerating), untrack(() => {
                          var _a, _b, _c;
                          return ((_a = get(note)) == null ? void 0 : _a.user_id) !== ((_b = $user()) == null ? void 0 : _b.id) && ((_c = $user()) == null ? void 0 : _c.role) !== "admin" || get(titleGenerating);
                        })));
                        event("mouseenter", button_1, () => {
                          set(ignoreBlur, true);
                        });
                        event("click", button_1, (e) => {
                          e.preventDefault();
                          e.stopImmediatePropagation();
                          e.stopPropagation();
                          generateTitleHandler();
                          set(titleInputFocused, false);
                        });
                        append($$anchor6, button_1);
                      },
                      $$slots: { default: true }
                    });
                  }
                  reset(div_9);
                  append($$anchor5, div_9);
                };
                if_block(node_10, ($$render) => {
                  if (get(titleInputFocused) && !get(titleGenerating)) $$render(consequent_3);
                });
              }
              var div_10 = sibling(node_10, 2);
              var node_13 = child(div_10);
              {
                var consequent_4 = ($$anchor5) => {
                  var div_11 = root_12();
                  var div_12 = child(div_11);
                  var button_2 = child(div_12);
                  var node_14 = child(button_2);
                  ArrowUturnLeft(node_14, { className: "size-4" });
                  reset(button_2);
                  var button_3 = sibling(button_2, 2);
                  var node_15 = child(button_3);
                  ArrowUturnRight(node_15, { className: "size-4" });
                  reset(button_3);
                  reset(div_12);
                  reset(div_11);
                  template_effect(
                    ($0, $1) => {
                      button_2.disabled = $0;
                      button_3.disabled = $1;
                      div_12.dir = div_12.dir;
                    },
                    [
                      () => (get(editor), untrack(() => !get(editor).can().undo())),
                      () => (get(editor), untrack(() => !get(editor).can().redo()))
                    ]
                  );
                  event("click", button_2, () => {
                    get(editor).chain().focus().undo().run();
                  });
                  event("click", button_3, () => {
                    get(editor).chain().focus().redo().run();
                  });
                  append($$anchor5, div_11);
                };
                if_block(node_13, ($$render) => {
                  if (get(editor)) $$render(consequent_4);
                });
              }
              var node_16 = sibling(node_13, 2);
              {
                let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Chat"))));
                Tooltip(node_16, {
                  placement: "top",
                  get content() {
                    return get($0);
                  },
                  className: "cursor-pointer",
                  children: ($$anchor5, $$slotProps3) => {
                    var button_4 = root_13();
                    var node_17 = child(button_4);
                    ChatBubbleOval(node_17, {});
                    reset(button_4);
                    event("click", button_4, () => {
                      if (get(showPanel) && get(selectedPanel) === "chat") {
                        set(showPanel, false);
                      } else {
                        if (!get(showPanel)) {
                          set(showPanel, true);
                        }
                        set(selectedPanel, "chat");
                      }
                    });
                    append($$anchor5, button_4);
                  },
                  $$slots: { default: true }
                });
              }
              var node_18 = sibling(node_16, 2);
              {
                let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Controls"))));
                Tooltip(node_18, {
                  placement: "top",
                  get content() {
                    return get($0);
                  },
                  className: "cursor-pointer",
                  children: ($$anchor5, $$slotProps3) => {
                    var button_5 = root_14();
                    var node_19 = child(button_5);
                    AdjustmentsHorizontalOutline(node_19, {});
                    reset(button_5);
                    event("click", button_5, () => {
                      if (get(showPanel) && get(selectedPanel) === "settings") {
                        set(showPanel, false);
                      } else {
                        if (!get(showPanel)) {
                          set(showPanel, true);
                        }
                        set(selectedPanel, "settings");
                      }
                    });
                    append($$anchor5, button_5);
                  },
                  $$slots: { default: true }
                });
              }
              var node_20 = sibling(node_18, 2);
              NoteMenu(node_20, {
                onDownload: (type) => {
                  downloadHandler(type);
                },
                onCopyLink: async () => {
                  const baseUrl = window.location.origin;
                  const res = await copyToClipboard(`${baseUrl}/notes/${get(note).id}`);
                  if (res) {
                    toast.success($i18n().t("Copied link to clipboard"));
                  } else {
                    toast.error($i18n().t("Failed to copy link"));
                  }
                },
                onCopyToClipboard: async () => {
                  const res = await copyToClipboard(get(note).data.content.md, get(note).data.content.html, true).catch((error) => {
                    toast.error(`${error}`);
                    return null;
                  });
                  if (res) {
                    toast.success($i18n().t("Copied to clipboard"));
                  }
                },
                onDelete: () => {
                  set(showDeleteConfirm, true);
                },
                children: ($$anchor5, $$slotProps3) => {
                  var div_13 = root_15();
                  var node_21 = child(div_13);
                  EllipsisHorizontal(node_21, { className: "size-5" });
                  reset(div_13);
                  append($$anchor5, div_13);
                },
                $$slots: { default: true }
              });
              reset(div_10);
              reset(div_6);
              reset(div_5);
              var div_14 = sibling(div_5, 2);
              var div_15 = child(div_14);
              var div_16 = child(div_15);
              var button_6 = child(div_16);
              var node_22 = child(button_6);
              Calendar(node_22, { className: "size-3.5", strokeWidth: "2" });
              var node_23 = sibling(node_22, 2);
              {
                var consequent_5 = ($$anchor5) => {
                  var span_1 = root_16();
                  var text_2 = child(span_1, true);
                  reset(span_1);
                  template_effect(($0) => set_text(text_2, $0), [
                    () => (deep_read_state(dayjs2), get(note), $i18n(), untrack(() => dayjs2(get(note).created_at / 1e6).format($i18n().t("[Today at] h:mm A"))))
                  ]);
                  append($$anchor5, span_1);
                };
                var alternate_2 = ($$anchor5) => {
                  var fragment_4 = comment();
                  var node_24 = first_child(fragment_4);
                  {
                    var consequent_6 = ($$anchor6) => {
                      var span_2 = root_18();
                      var text_3 = child(span_2, true);
                      reset(span_2);
                      template_effect(($0) => set_text(text_3, $0), [
                        () => (deep_read_state(dayjs2), get(note), $i18n(), untrack(() => dayjs2(get(note).created_at / 1e6).format($i18n().t("[Yesterday at] h:mm A"))))
                      ]);
                      append($$anchor6, span_2);
                    };
                    var alternate_1 = ($$anchor6) => {
                      var fragment_5 = comment();
                      var node_25 = first_child(fragment_5);
                      {
                        var consequent_7 = ($$anchor7) => {
                          var span_3 = root_20();
                          var text_4 = child(span_3, true);
                          reset(span_3);
                          template_effect(($0) => set_text(text_4, $0), [
                            () => (deep_read_state(dayjs2), get(note), $i18n(), untrack(() => dayjs2(get(note).created_at / 1e6).format($i18n().t("[Last] dddd [at] h:mm A"))))
                          ]);
                          append($$anchor7, span_3);
                        };
                        var alternate = ($$anchor7) => {
                          var span_4 = root_21();
                          var text_5 = child(span_4, true);
                          reset(span_4);
                          template_effect(($0) => set_text(text_5, $0), [
                            () => (deep_read_state(dayjs2), get(note), $i18n(), untrack(() => dayjs2(get(note).created_at / 1e6).format($i18n().t("DD/MM/YYYY"))))
                          ]);
                          append($$anchor7, span_4);
                        };
                        if_block(
                          node_25,
                          ($$render) => {
                            if (deep_read_state(dayjs2), get(note), untrack(() => dayjs2(get(note).created_at / 1e6).isSame(dayjs2().subtract(1, "week"), "week"))) $$render(consequent_7);
                            else $$render(alternate, false);
                          },
                          true
                        );
                      }
                      append($$anchor6, fragment_5);
                    };
                    if_block(
                      node_24,
                      ($$render) => {
                        if (deep_read_state(dayjs2), get(note), untrack(() => dayjs2(get(note).created_at / 1e6).isSame(dayjs2().subtract(1, "day"), "day"))) $$render(consequent_6);
                        else $$render(alternate_1, false);
                      },
                      true
                    );
                  }
                  append($$anchor5, fragment_4);
                };
                if_block(node_23, ($$render) => {
                  if (deep_read_state(dayjs2), get(note), untrack(() => dayjs2(get(note).created_at / 1e6).isSame(dayjs2(), "day"))) $$render(consequent_5);
                  else $$render(alternate_2, false);
                });
              }
              reset(button_6);
              var button_7 = sibling(button_6, 2);
              var node_26 = child(button_7);
              Users(node_26, { className: "size-3.5", strokeWidth: "2" });
              var span_5 = sibling(node_26, 2);
              var text_6 = child(span_5, true);
              reset(span_5);
              reset(button_7);
              var node_27 = sibling(button_7, 2);
              {
                var consequent_8 = ($$anchor5) => {
                  var div_17 = root_22();
                  var div_18 = child(div_17);
                  var text_7 = child(div_18, true);
                  reset(div_18);
                  var div_19 = sibling(div_18, 2);
                  var text_8 = child(div_19, true);
                  reset(div_19);
                  reset(div_17);
                  template_effect(
                    ($0, $1) => {
                      set_text(text_7, $0);
                      set_text(text_8, $1);
                    },
                    [
                      () => ($i18n(), get(wordCount), untrack(() => $i18n().t("{{COUNT}} words", { COUNT: get(wordCount) }))),
                      () => ($i18n(), get(charCount), untrack(() => $i18n().t("{{COUNT}} characters", { COUNT: get(charCount) })))
                    ]
                  );
                  append($$anchor5, div_17);
                };
                if_block(node_27, ($$render) => {
                  if (get(editor)) $$render(consequent_8);
                });
              }
              reset(div_16);
              reset(div_15);
              reset(div_14);
              var div_20 = sibling(div_14, 2);
              var node_28 = child(div_20);
              {
                var consequent_9 = ($$anchor5) => {
                  var div_21 = root_23();
                  template_effect(() => set_class(div_21, 1, `w-full h-full fixed top-0 left-0 ${get(streaming) ? "" : " backdrop-blur-xs  bg-white/10 dark:bg-gray-900/10"} flex items-center justify-center z-10 cursor-not-allowed`));
                  append($$anchor5, div_21);
                };
                if_block(node_28, ($$render) => {
                  if (get(editing)) $$render(consequent_9);
                });
              }
              var node_29 = sibling(node_28, 2);
              {
                let $0 = derived_safe_equal(() => (get(note), untrack(() => `note-${get(note).id}`)));
                let $1 = derived_safe_equal(() => (get(note), untrack(() => {
                  var _a, _b;
                  return (_b = (_a = get(note).data) == null ? void 0 : _a.content) == null ? void 0 : _b.html;
                })));
                let $2 = derived_safe_equal(() => (get(note), untrack(() => `note:${get(note).id}`)));
                let $3 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Write something..."))));
                let $4 = derived_safe_equal(() => get(versionIdx) === null && !get(editing));
                bind_this(
                  RichTextInput(node_29, {
                    get id() {
                      return get($0);
                    },
                    className: "input-prose-sm px-0.5",
                    json: true,
                    get html() {
                      return get($1);
                    },
                    get documentId() {
                      return get($2);
                    },
                    collaboration: true,
                    get socket() {
                      return $socket();
                    },
                    get user() {
                      return $user();
                    },
                    dragHandle: true,
                    link: true,
                    image: true,
                    get files() {
                      return get(files);
                    },
                    get placeholder() {
                      return get($3);
                    },
                    get editable() {
                      return get($4);
                    },
                    onSelectionUpdate: ({ editor: editor2 }) => {
                      const { from, to } = editor2.state.selection;
                      const selectedText = editor2.state.doc.textBetween(from, to, " ");
                      if (selectedText.length === 0) {
                        set(selectedContent, null);
                      } else {
                        set(selectedContent, { text: selectedText, from, to });
                      }
                    },
                    onChange: (content) => {
                      mutate(note, get(note).data.content.html = content.html);
                      mutate(note, get(note).data.content.md = content.md);
                      if (get(editor)) {
                        set(wordCount, get(editor).storage.characterCount.words());
                        set(charCount, get(editor).storage.characterCount.characters());
                      }
                    },
                    fileHandler: true,
                    onFileDrop: (currentEditor, files2, pos) => {
                      files2.forEach(async (file) => {
                        const fileItem = await inputFileHandler(file).catch((error) => {
                          return null;
                        });
                        if (fileItem.type === "image") {
                          currentEditor.chain().insertContentAt(pos, { type: "image", attrs: { src: `data://${fileItem.id}` } }).focus().run();
                        }
                      });
                    },
                    onFilePaste: () => {
                    },
                    get editor() {
                      return get(editor);
                    },
                    set editor($$value) {
                      set(editor, $$value);
                    },
                    get value() {
                      return get(note).data.content.json;
                    },
                    set value($$value) {
                      mutate(note, get(note).data.content.json = $$value);
                    },
                    $$events: {
                      paste: async (e) => {
                        var _a;
                        e = e.detail.event || e;
                        const clipboardData = e.clipboardData || window.clipboardData;
                        console.log("Clipboard data:", clipboardData);
                        if (clipboardData && clipboardData.items) {
                          console.log("Clipboard data items:", clipboardData.items);
                          for (const item of clipboardData.items) {
                            console.log("Clipboard item:", item);
                            if (item.type.indexOf("image") !== -1) {
                              const blob = item.getAsFile();
                              const fileItem = await inputFileHandler(blob);
                              if (get(editor)) {
                                (_a = get(editor)) == null ? void 0 : _a.chain().insertContentAt(get(editor).state.selection.$anchor.pos, {
                                  type: "image",
                                  attrs: {
                                    src: `data://${fileItem.id}`
                                    // Use data URI for the image
                                  }
                                }).focus().run();
                              }
                            } else if ((item == null ? void 0 : item.kind) === "file") {
                              const file = item.getAsFile();
                              await inputFileHandler(file);
                              e.preventDefault();
                            }
                          }
                        }
                      }
                    },
                    $$legacy: true
                  }),
                  ($$value) => set(inputElement, $$value),
                  () => get(inputElement)
                );
              }
              reset(div_20);
              reset(div_4);
              template_effect(
                ($0, $1) => {
                  set_class(div_4, 1, ` w-full flex flex-col ${get(loading) ? "opacity-20" : ""}`);
                  set_attribute(input_1, "placeholder", $0);
                  input_1.disabled = (get(note), $user(), get(titleGenerating), untrack(() => {
                    var _a, _b, _c;
                    return ((_a = get(note)) == null ? void 0 : _a.user_id) !== ((_b = $user()) == null ? void 0 : _b.id) && ((_c = $user()) == null ? void 0 : _c.role) !== "admin" || get(titleGenerating);
                  }));
                  button_7.disabled = (get(note), $user(), untrack(() => {
                    var _a, _b, _c;
                    return ((_a = get(note)) == null ? void 0 : _a.user_id) !== ((_b = $user()) == null ? void 0 : _b.id) && ((_c = $user()) == null ? void 0 : _c.role) !== "admin";
                  }));
                  set_text(text_6, $1);
                },
                [
                  () => (get(titleGenerating), $i18n(), untrack(() => get(titleGenerating) ? $i18n().t("Generating...") : $i18n().t("Title"))),
                  () => (get(note), $i18n(), untrack(() => {
                    var _a;
                    return ((_a = get(note)) == null ? void 0 : _a.access_control) ? $i18n().t("Private") : $i18n().t("Everyone");
                  }))
                ]
              );
              bind_value(input_1, () => get(note).title, ($$value) => mutate(note, get(note).title = $$value));
              event("focus", input_1, () => {
                set(titleInputFocused, true);
              });
              event("blur", input_1, (e) => {
                if (get(ignoreBlur)) {
                  set(ignoreBlur, false);
                  return;
                }
                set(titleInputFocused, false);
                changeDebounceHandler();
              });
              event(
                "click",
                button_7,
                // versionNavigateHandler('prev');
                // versionNavigateHandler('next');
                () => {
                  set(showAccessControlModal, true);
                }
              );
              event("wheel", div_15, (e) => {
                if (e.deltaY !== 0) {
                  e.preventDefault();
                  e.currentTarget.scrollLeft += e.deltaY;
                }
              });
              append($$anchor4, div_4);
            };
            if_block(node_5, ($$render) => {
              if (get(loading)) $$render(consequent_1);
              else $$render(alternate_3, false);
            });
          }
          reset(div_1);
          var div_22 = sibling(div_1, 2);
          var div_23 = child(div_22);
          var node_30 = child(div_23);
          {
            var consequent_10 = ($$anchor4) => {
              var div_24 = root_24();
              var node_31 = child(div_24);
              VoiceRecording(node_31, {
                className: "p-1 w-full max-w-full",
                transcribe: false,
                get displayMedia() {
                  return get(displayMediaRecord);
                },
                echoCancellation: false,
                noiseSuppression: false,
                onCancel: () => {
                  set(recording, false);
                  set(displayMediaRecord, false);
                },
                onConfirm: (data) => {
                  if (data == null ? void 0 : data.file) {
                    uploadFileHandler(data == null ? void 0 : data.file);
                  }
                  set(recording, false);
                  set(displayMediaRecord, false);
                },
                get recording() {
                  return get(recording);
                },
                set recording($$value) {
                  set(recording, $$value);
                },
                $$legacy: true
              });
              reset(div_24);
              append($$anchor4, div_24);
            };
            var alternate_5 = ($$anchor4) => {
              var fragment_6 = root_25();
              var node_32 = first_child(fragment_6);
              RecordMenu(node_32, {
                onRecord: async () => {
                  set(displayMediaRecord, false);
                  try {
                    let stream = await navigator.mediaDevices.getUserMedia({ audio: true }).catch(function(err) {
                      toast.error($i18n().t(`Permission denied when accessing microphone: {{error}}`, { error: err }));
                      return null;
                    });
                    if (stream) {
                      set(recording, true);
                      const tracks = stream.getTracks();
                      tracks.forEach((track) => track.stop());
                    }
                    stream = null;
                  } catch {
                    toast.error($i18n().t("Permission denied when accessing microphone"));
                  }
                },
                onCaptureAudio: async () => {
                  set(displayMediaRecord, true);
                  set(recording, true);
                },
                onUpload: async () => {
                  const input = document.createElement("input");
                  input.type = "file";
                  input.accept = "audio/*";
                  input.multiple = false;
                  input.click();
                  input.onchange = async (e) => {
                    const files2 = e.target.files;
                    if (files2 && files2.length > 0) {
                      await uploadFileHandler(files2[0]);
                    }
                  };
                },
                children: ($$anchor5, $$slotProps3) => {
                  {
                    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Record"))));
                    Tooltip($$anchor5, {
                      get content() {
                        return get($0);
                      },
                      placement: "top",
                      children: ($$anchor6, $$slotProps4) => {
                        var div_25 = root_27();
                        var node_33 = child(div_25);
                        MicSolid(node_33, { className: "size-4.5" });
                        reset(div_25);
                        append($$anchor6, div_25);
                      },
                      $$slots: { default: true }
                    });
                  }
                },
                $$slots: { default: true }
              });
              var div_26 = sibling(node_32, 2);
              var node_34 = child(div_26);
              {
                let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("AI"))));
                Tooltip(node_34, {
                  get content() {
                    return get($0);
                  },
                  placement: "top",
                  children: ($$anchor5, $$slotProps3) => {
                    var fragment_8 = comment();
                    var node_35 = first_child(fragment_8);
                    {
                      var consequent_11 = ($$anchor6) => {
                        var button_8 = root_29();
                        var node_36 = child(button_8);
                        Spinner(node_36, { className: "size-5" });
                        reset(button_8);
                        event("click", button_8, () => {
                          stopResponseHandler();
                        });
                        append($$anchor6, button_8);
                      };
                      var alternate_4 = ($$anchor6) => {
                        AIMenu($$anchor6, {
                          onEdit: () => {
                            enhanceNoteHandler();
                          },
                          onChat: () => {
                            set(showPanel, true);
                            set(selectedPanel, "chat");
                          },
                          children: ($$anchor7, $$slotProps4) => {
                            var div_27 = root_31();
                            var node_37 = child(div_27);
                            SparklesSolid(node_37, {});
                            reset(div_27);
                            append($$anchor7, div_27);
                          },
                          $$slots: { default: true }
                        });
                      };
                      if_block(node_35, ($$render) => {
                        if (get(editing)) $$render(consequent_11);
                        else $$render(alternate_4, false);
                      });
                    }
                    append($$anchor5, fragment_8);
                  },
                  $$slots: { default: true }
                });
              }
              reset(div_26);
              append($$anchor4, fragment_6);
            };
            if_block(node_30, ($$render) => {
              if (get(recording)) $$render(consequent_10);
              else $$render(alternate_5, false);
            });
          }
          reset(div_23);
          reset(div_22);
          append($$anchor3, fragment_3);
        },
        $$slots: { default: true }
      });
      var node_38 = sibling(node_4, 2);
      NotePanel(node_38, {
        get show() {
          return get(showPanel);
        },
        set show($$value) {
          set(showPanel, $$value);
        },
        children: ($$anchor3, $$slotProps2) => {
          var fragment_10 = comment();
          var node_39 = first_child(fragment_10);
          {
            var consequent_12 = ($$anchor4) => {
              Chat($$anchor4, {
                get editor() {
                  return get(editor);
                },
                get inputElement() {
                  return get(inputElement);
                },
                get selectedContent() {
                  return get(selectedContent);
                },
                get files() {
                  return get(files);
                },
                onInsert: insertHandler,
                onStop: stopResponseHandler,
                onEdited,
                insertNoteHandler: () => {
                  insertNoteVersion(get(note));
                },
                scrollToBottomHandler: scrollToBottom,
                get show() {
                  return get(showPanel);
                },
                set show($$value) {
                  set(showPanel, $$value);
                },
                get selectedModelId() {
                  return get(selectedModelId);
                },
                set selectedModelId($$value) {
                  set(selectedModelId, $$value);
                },
                get messages() {
                  return get(messages);
                },
                set messages($$value) {
                  set(messages, $$value);
                },
                get note() {
                  return get(note);
                },
                set note($$value) {
                  set(note, $$value);
                },
                get editing() {
                  return get(editing);
                },
                set editing($$value) {
                  set(editing, $$value);
                },
                get streaming() {
                  return get(streaming);
                },
                set streaming($$value) {
                  set(streaming, $$value);
                },
                get stopResponseFlag() {
                  return get(stopResponseFlag);
                },
                set stopResponseFlag($$value) {
                  set(stopResponseFlag, $$value);
                },
                $$legacy: true
              });
            };
            var alternate_6 = ($$anchor4) => {
              var fragment_12 = comment();
              var node_40 = first_child(fragment_12);
              {
                var consequent_13 = ($$anchor5) => {
                  Controls($$anchor5, {
                    onUpdate: () => {
                      changeDebounceHandler();
                    },
                    get show() {
                      return get(showPanel);
                    },
                    set show($$value) {
                      set(showPanel, $$value);
                    },
                    get selectedModelId() {
                      return get(selectedModelId);
                    },
                    set selectedModelId($$value) {
                      set(selectedModelId, $$value);
                    },
                    get files() {
                      return get(files);
                    },
                    set files($$value) {
                      set(files, $$value);
                    },
                    $$legacy: true
                  });
                };
                if_block(
                  node_40,
                  ($$render) => {
                    if (get(selectedPanel) === "settings") $$render(consequent_13);
                  },
                  true
                );
              }
              append($$anchor4, fragment_12);
            };
            if_block(node_39, ($$render) => {
              if (get(selectedPanel) === "chat") $$render(consequent_12);
              else $$render(alternate_6, false);
            });
          }
          append($$anchor3, fragment_10);
        },
        $$slots: { default: true },
        $$legacy: true
      });
      append($$anchor2, fragment_2);
    },
    $$slots: { default: true }
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_1 = from_html(`<div id="note-container"><!></div>`);
function _page($$anchor, $$props) {
  push($$props, false);
  const $showSidebar = () => store_get(showSidebar, "$showSidebar", $$stores);
  const $page = () => store_get(page, "$page", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let loaded = mutable_source(false);
  onMount(async () => {
    set(loaded, true);
  });
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var div = root_1();
      var node_1 = child(div);
      NoteEditor(node_1, {
        get id() {
          return $page().params.id;
        }
      });
      reset(div);
      template_effect(() => set_class(div, 1, `w-full h-full ${$showSidebar() ? "md:max-w-[calc(100%-260px)]" : ""}`));
      append($$anchor2, div);
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
  _page as component
};
