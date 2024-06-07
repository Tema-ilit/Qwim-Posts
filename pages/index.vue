<script setup lang="ts">
const store = usePostStore();

// const totalPage = computed(() => {
//   return Math.ceil(store.post?.length! / 8);
// });

const page = ref(0);

onMounted(async () => {
  await store.getposts();
});
</script>

<template>
  <div class="container m-auto">
    <div class="px-28 pt-28 pb-36">
      <h1 class="text-black text-[84px] leading-[84px] font-normal mb-14">
        Articles
      </h1>

      <div v-if="store.posts" class="posts grid grid-cols-4 gap-8 mb-12">
        <div
          v-for="item in store.posts.slice(page * 8, page * 8 + 8)"
          :key="item.id"
        >
          <NuxtLink :to="{ name: 'posts-id', params: { id: item.id } }">
            <img src="/img/default1.jpg" alt="Image" class="mb-6" />
            <p class="mb-3">{{ item.preview }}</p>
            <button>Read more</button>
          </NuxtLink>
        </div>
      </div>

      <PaginationApp v-model="page" />
    </div>
  </div>
</template>
