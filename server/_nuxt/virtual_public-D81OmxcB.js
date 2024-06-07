import { ref } from "vue";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { d as defineStore } from "../server.mjs";
const usePostStore = defineStore("postsSrore", () => {
  const posts = ref();
  const post = ref();
  const Base_Url = "https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/";
  const getposts = async () => {
    const postsAll = await $fetch(Base_Url);
    posts.value = postsAll;
  };
  const getPost = async (id) => {
    const postId = await $fetch(`${Base_Url}${id}`);
    post.value = postId;
  };
  return {
    posts,
    post,
    getposts,
    getPost
  };
});
const _imports_0 = publicAssetsURL("/img/default1.jpg");
export {
  _imports_0 as _,
  usePostStore as u
};
//# sourceMappingURL=virtual_public-D81OmxcB.js.map
