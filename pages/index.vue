<script setup lang="ts">
const store = usePostStore();
const page = ref<number>(0);
const showId = ref(0);

onMounted(async () => {
  await store.getposts();
});
</script>

<template>
  <div>
    <div
      class="container m-auto xl:px-28 xl:pt-32 xl:pb-32 lg:px-20 lg:pt-24 lg:pb-24 md:px-14 md:pt-16 md:pb-16 sm:px-8 sm:pt-10 sm:pb-10"
    >
      <h1 class="text-black text-[84px] leading-[84px] font-normal mb-14">
        Articles
      </h1>

      <div v-if="store.posts" class="posts grid grid-cols-4 gap-8 mb-12">
        <div
          v-for="item in store.posts.slice(page * 8, page * 8 + 8)"
          :key="item.id"
          class="relative flex flex-col items-start transition ease-in-out duration-300 hover:-translate-y-4"
          @mouseenter="showId = item.id"
          @mouseleave="showId = 0"
        >
          <img src="/img/default1.jpg" alt="Image" class="mb-6" />
          <p class="mb-3">{{ item.preview }}</p>

          <transition name="fade">
            <NuxtLink
              v-if="item.id === showId"
              :to="{ name: 'posts-id', params: { id: item.id } }"
              class="absolute z-10 left-0 -bottom-6 text-xl font-normal leading-7 text-[#7941A7] transition ease-in-out duration-300 hover:text-[#E2BEFF] m-0"
            >
              Read more
            </NuxtLink>
          </transition>
        </div>
      </div>

      <PaginationApp v-model="page" />
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
