import { a as __nuxt_component_0 } from "../server.mjs";
import { u as usePostStore, _ as _imports_0 } from "./virtual_public-D81OmxcB.js";
import { defineComponent, useModel, mergeProps, useSSRContext, ref, unref, withCtx, createVNode, toDisplayString, isRef } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "radix3";
import "defu";
import "klona";
import "@vue/devtools-api";
import "destr";
import "devalue";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PaginationApp",
  __ssrInlineRender: true,
  props: {
    "modelValue": {},
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const store = usePostStore();
    const totalPage = () => {
      var _a;
      const element = [];
      const total = Math.ceil(((_a = store.posts) == null ? void 0 : _a.length) / 8);
      for (let i = 0; i < total; i++) {
        element.push(i);
      }
      return element;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container flex gap-2" }, _attrs))}><!--[-->`);
      ssrRenderList(totalPage(), (item) => {
        _push(`<button class="${ssrRenderClass([{
          "bg-[#F3F3F3]": model.value !== item,
          "bg-black": model.value === item,
          "text-white": model.value === item,
          "hover:bg-[#E8E8E8]": model.value !== item
        }, "p-4 rounded-xl w-11 h-11 flex items-center justify-center transition ease-in-out duration-300 active:bg-black active:text-white"])}">${ssrInterpolate(item + 1)}</button>`);
      });
      _push(`<!--]-->`);
      if (model.value < 10) {
        _push(`<button class="p-4 rounded-xl w-11 h-11 flex items-center justify-center bg-[#F3F3F3] hover:bg-[#E8E8E8] transition ease-in-out duration-300 active:bg-black active:text-white"><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1.5L6.5 6.5L1.5 11.5" stroke="#494949" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PaginationApp.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const store = usePostStore();
    const page = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_PaginationApp = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container m-auto" }, _attrs))}><div class="px-28 pt-28 pb-36"><h1 class="text-black text-[84px] leading-[84px] font-normal mb-14"> Articles </h1>`);
      if (unref(store).posts) {
        _push(`<div class="posts grid grid-cols-4 gap-8 mb-12"><!--[-->`);
        ssrRenderList(unref(store).posts.slice(unref(page) * 8, unref(page) * 8 + 8), (item) => {
          _push(`<div>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: { name: "posts-id", params: { id: item.id } }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Image" class="mb-6"${_scopeId}><p class="mb-3"${_scopeId}>${ssrInterpolate(item.preview)}</p><button${_scopeId}>Read more</button>`);
              } else {
                return [
                  createVNode("img", {
                    src: _imports_0,
                    alt: "Image",
                    class: "mb-6"
                  }),
                  createVNode("p", { class: "mb-3" }, toDisplayString(item.preview), 1),
                  createVNode("button", null, "Read more")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_PaginationApp, {
        modelValue: unref(page),
        "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CVlGk4D2.js.map
