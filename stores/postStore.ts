interface IPost {
  id: number;
  createdAt: string;
  title: string;
  preview: string;
  image: string;
  description: string;
}

export const usePostStore = defineStore("postsSrore", () => {
  const posts = ref<IPost[]>();
  const post = ref<IPost>();
  const Base_Url =
    "https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/";

  //получаем посты
  const getposts = async () => {
    const postsAll: IPost[] = await $fetch(Base_Url);

    posts.value = postsAll;
  };

  //Получаем конкретный пост
  const getPost = async (id: string) => {
    const postId: IPost = await $fetch(`${Base_Url}${id}`);

    post.value = postId;
  };

  return {
    posts,
    post,
    getposts,
    getPost,
  };
});
