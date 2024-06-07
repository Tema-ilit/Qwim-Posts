<script setup lang="ts">
interface IPost {
  id: number;
  createdAt: string;
  title: string;
  preview: string;
  image: string;
  description: string;
}

const route = useRoute();
const store = usePostStore();
const post = ref<IPost>();

onMounted(async () => {
  await store.getPost(route.params.id as string);
});
</script>

<template>
  <div class="container px-28 pb-20 pt-[120px]">
    <h2 class="text-[84px] mb-16">{{ store.post?.title }}</h2>

    <div>
      <img class="mb-20" src="/img/default1.jpg" alt="Img" />
      <span class="text-base mb-8">About</span>
      <p class="text-4xl">{{ store.post?.description }}</p>
    </div>
  </div>
</template>

<style scoped></style>
