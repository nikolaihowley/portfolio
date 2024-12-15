<template>
  <Navbar />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path" />
    </transition>
  </router-view>
  <!-- Footer -->
  <footer class="py-4 w-full" id="footer">
    <p class="text-xs text-center text-slate-400">
      I built this website with
      <a
        href="https://vuejs.org/"
        class="font-medium text-white"
        target="_blank"
        >Vue.js</a
      >
      and
      <a
        href="https://tailwindcss.com/"
        class="font-medium text-white"
        target="_blank"
        >Tailwind CSS</a
      >.
    </p>
  </footer>
</template>

<script setup>
import Navbar from "./components/Navbar.vue"
import { reactive } from "vue"

const work = reactive([
  {
    title: "Purpose Investments",
    description:
      "Website build including welcome survey to personalize user profiles based on their understanding of ETFs and mututal funds.",
    tags: ["Vue.js", "Vuex", "API", "Sortable.js", "Sketch"],
    image: "../src/assets/purpose.png",
  },
  {
    title: "HUME.works",
    description:
      "Powerful team collaboration app that aligns users based on emotional language and subtext on social channels.",
    tags: ["Vue.js", "NLP", "Chart.js", "Node.js", "Figma"],
    image: "../src/assets/hume.png",
  },
  {
    title: "Open Media Desk",
    description:
      "Conversational chatbot based-learning curriculum for internal use by the largest Library association in North America.",
    tags: ["Vue.js", "SCSS", "Firestore", "Figma"],
    image: "../src/assets/omd.png",
  },
])
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
