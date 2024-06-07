import { u as useRoute } from "../server.mjs";
import { u as usePostStore, _ as _imports_0 } from "./virtual_public-D81OmxcB.js";
import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const store = usePostStore();
    ref();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container px-28 pb-20 pt-[120px]" }, _attrs))}><h2 class="text-[84px] mb-16">${ssrInterpolate((_a = unref(store).post) == null ? void 0 : _a.title)}</h2><div><img class="mb-20"${ssrRenderAttr("src", _imports_0)} alt="Img"><span class="text-base mb-8">About</span><p class="text-4xl">${ssrInterpolate((_b = unref(store).post) == null ? void 0 : _b.description)}</p></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/posts/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-BWs7LRyo.js.map
