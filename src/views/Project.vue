<template>
  <main class="container text-slate-400 pt-32 flex-grow">
    <router-link
      to="/"
      class="inline-block hover:text-white transition mb-6 font-medium text-lg"
    >
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        class="inline-block h-4 w-4 -rotate-[135deg] -translate-y-[2px]"
      >
        <path
          fill-rule="evenodd"
          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
          clip-rule="evenodd"
        ></path>
      </svg>
      Home</router-link
    >
    <img :src="project.image" alt="" class="rounded mb-12 shadow-lg" />
    <h1 class="text-white text-5xl font-semibold tracking-tight mb-8">
      {{ project.title }}
    </h1>
    <article
      v-html="project.html"
      class="mb-10 prose prose-slate text-slate-400 prose-headings:text-white prose-headings:tracking-tight prose-headings:font-semibold"
    ></article>
    <router-link
      to="/"
      class="inline-block hover:text-white transition mb-24 font-medium text-lg"
    >
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        class="inline-block h-4 w-4 -rotate-[135deg] -translate-y-[2px]"
      >
        <path
          fill-rule="evenodd"
          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
          clip-rule="evenodd"
        ></path>
      </svg>
      Home</router-link
    >
  </main>
</template>

<script setup>
import { reactive, onMounted } from "vue"
import { useRoute } from "vue-router"
import projectsList from "../assets/projects.js"
const route = useRoute()

const project = reactive({})

onMounted(() => {
  let id = route.params.id
  const currentProject = projectsList.find((item) => item.id === id)
  Object.assign(project, currentProject)
})
</script>
