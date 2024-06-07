<script setup lang="ts"></script>

<template>
  <header class="px-10 py-9">
    <div class="flex items-center justify-between">
      <NuxtLink to="/"><img src="/img/logo.svg" alt="Logo" /></NuxtLink>

      <div class="flex items-center gap-24">
        <nav class="flex items-center gap-14 list-none">
          <li
            class="transition ease-in-out duration-300 z-20 hover:-translate-y-1.5 hover:text-slate-400"
          >
            <NuxtLink to="/works">Works</NuxtLink>
          </li>
          <li
            class="transition ease-in-out duration-300 z-20 hover:-translate-y-1.5 hover:text-slate-400"
          >
            <NuxtLink to="/about">About</NuxtLink>
          </li>
        </nav>
        <div class="nav__btn flex gap-4">
          <button
            class="flex justify-center items-center rounded-full border-solid border-2 border-black/10 p-3.5"
          >
            <img class="" src="/img/lang.png" alt="lang" />
          </button>

          <button
            class="py-4 px-8 rounded-full bg-black text-white transition ease-in-out duration-300 hover:bg-[#E8E8E8] hover:text-black"
          >
            Let’s work
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
