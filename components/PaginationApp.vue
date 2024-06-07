<script setup lang="ts">
// const prop = defineProps<{page: number}>()
const model = defineModel<number>();
const store = usePostStore();

const totalPage = () => {
  const element = [];
  const total = Math.ceil(store.posts?.length! / 8);

  for (let i = 0; i < total; i++) {
    element.push(i);
  }
  return element;
};

const goToPage = (item: number) => {
  //   prop.page = item;
  model.value = item;
};
</script>

<template>
  <div class="container flex gap-2">
    <button
      v-for="item in totalPage()"
      :key="item"
      @click="model = item"
      class="p-4 rounded-xl w-11 h-11 flex items-center justify-center transition ease-in-out duration-300 active:bg-black active:text-white"
      :class="{
        'bg-[#F3F3F3]': model !== item,
        'bg-black': model === item,
        'text-white': model === item,
        'hover:bg-[#E8E8E8]': model !== item,
      }"
    >
      {{ item + 1 }}
    </button>

    <button
      v-if="model! < 10"
      @click="model!++"
      class="p-4 rounded-xl w-11 h-11 flex items-center justify-center bg-[#F3F3F3] hover:bg-[#E8E8E8] transition ease-in-out duration-300 active:bg-black active:text-white"
    >
      <svg
        width="8"
        height="13"
        viewBox="0 0 8 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5 1.5L6.5 6.5L1.5 11.5"
          stroke="#494949"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped></style>
