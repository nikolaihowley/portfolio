<template>
  <main class="container pt-48">
    <!-- Hero -->
    <section>
      <h1 class="fade text-5xl mb-4 font-semibold tracking-tight">
        User interface developer building inclusive web experiences.
      </h1>
      <p class="fade hero-subheading text-xl text-slate-400">
        👋 Hey! I'm Nikolai, an experienced and creative web engineer based in
        Toronto. I specialize in unified design systems and thrive at the
        intersection of design and development.
      </p>
    </section>

    <!-- About -->
    <section class="pt-24 scroll-mt-16" id="about">
      <h2 class="font-semibold mb-4 text-2xl tracking-tight">About me</h2>
      <div class="text-slate-400">
        <p class="mb-4">
          I'm quick off the mark: I had my first fortune 500 marketing gig at
          the age of 17; our work for
          <a
            class="font-medium text-white"
            href="https://fct.ca/"
            target="_blank"
            >First Canadian Title</a
          >, Canada's biggest mortgage insurance company was nominated for
          Marketer of the Year by the Canadian Marketing Association. A year
          later, I was the youngest student to date at
          <a
            class="font-medium text-white"
            href="https://junocollege.com/"
            target="_blank"
          >
            Juno College of Technology</a
          >, Canada's premier coding boot camp.
        </p>
        <p class="mb-4">
          My team won the International Library Association Marketing Award for
          the Open Media Desk project, beating 1100 competitors globally. The
          digital strategy and custom curriculum app was commissioned by the
          <a
            class="font-medium text-white"
            href="https://fopl.ca/"
            target="_blank"
          >
            Federation of Ontario Public Libraries</a
          >, the largest library association in the world.
        </p>
        <p class="mb-4">
          My deepest strength is helping web projects navigate the trajectory
          from intention, through decision, to action; at
          <a
            class="font-medium text-white"
            href="https://unoapp.com/"
            target="_blank"
            >UNOapp</a
          >, a design and development agency in Toronto, I continued to hone
          this skill. I always have strategy and personalized connection in
          mind.
        </p>
        <p class="mb-4">
          Nowadays, I freelance for community-centric businesses in Toronto, as
          well as building
          <a
            class="font-medium text-white"
            href="https://hume.works/"
            target="_blank"
            >HUME.works</a
          >, a natural language processing-powered startup focused on empowering
          co-creative relationships within and across teams.
        </p>
        <p class="mb-4">
          When I'm not coding, I love spending time with my girlfriend and our 2
          cats, playing DOTA2, or tinkering with my racing simulator.
        </p>
      </div>
    </section>

    <!-- work -->
    <section class="pt-24 scroll-mt-16" id="work">
      <h2 class="font-semibold text-2xl mb-6 tracking-tight">Selected work</h2>
      <ul class="flex flex-col gap-12 sm:gap-12">
        <li v-for="item in projects" :key="item">
          <router-link
            :to="`/projects/${item.id}`"
            class="sm:flex gap-4 group hover:brightness-125 transition"
          >
            <figure
              class="shadow-lg w-full h-fit mb-4 sm:mb-0 sm:w-1/3 rounded border-2 border-slate-800 transition overflow-hidden bg-slate-700 group-hover:shadow-xl"
            >
              <img
                :src="item.image"
                class="aspect-video group-hover:saturate-100 transition"
              />
            </figure>
            <div class="flex flex-col justify-center w-full gap-2 sm:w-2/3">
              <h3 class="font-semibold">
                {{ item.title }}
                <span class="text-slate-400">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="inline-block h-4 w-4 group-hover:text-white transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </h3>
              <p class="text-slate-400 transition">
                {{ item.description }}
              </p>
              <ul class="flex gap-2 flex-wrap">
                <li
                  v-for="tag in item.tags"
                  class="shadow-lg group-hover:shadow-xl bg-slate-800 text-slate-300 px-3 py-1 text-xs rounded-full transition"
                >
                  {{ tag }}
                </li>
              </ul>
            </div>
          </router-link>
        </li>
      </ul>
    </section>

    <!-- Contact -->
    <section class="pt-24 pb-24" id="contact">
      <h2 class="font-semibold text-2xl mb-4 tracking-tight">Contact</h2>
      <form>
        <div class="mb-4">
          <label
            for="name"
            class="block mb-2 text-slate-400 pointer-events-none"
          >
            Your name
          </label>
          <input
            v-model="contact.name"
            type="text"
            id="name"
            placeholder="Jane Doe"
            :disabled="contact.sent"
            required
            class="ring-2 ring-transparent focus:ring-slate-700 focus:border-slate-400 bg-transparent disabled:text-slate-400 outline-none shadow-lg w-full px-3 py-2 rounded border border-slate-600 focus:shadow-xl hover:border-slate-400 disabled:border-slate-600 transition"
          />
        </div>
        <div class="mb-4">
          <label
            for="email"
            class="block mb-2 text-slate-400 pointer-events-none"
          >
            Email address
          </label>
          <input
            v-model="contact.email"
            type="email"
            id="email"
            placeholder="janedoe@email.com"
            :disabled="contact.sent"
            required
            class="ring-2 ring-transparent focus:ring-slate-700 focus:border-slate-400 bg-transparent disabled:text-slate-400 outline-none shadow-lg w-full px-3 py-2 rounded border border-slate-600 focus:shadow-xl hover:border-slate-400 disabled:border-slate-600 transition"
          />
        </div>
        <div class="mb-4">
          <label
            for="subject"
            class="block mb-2 text-slate-400 pointer-events-none"
          >
            Subject
          </label>
          <input
            v-model="contact.subject"
            type="text"
            id="subject"
            placeholder="Subject"
            :disabled="contact.sent"
            required
            class="ring-2 ring-transparent focus:ring-slate-700 focus:border-slate-400 bg-transparent disabled:text-slate-400 outline-none shadow-lg w-full px-3 py-2 rounded border border-slate-600 focus:shadow-xl hover:border-slate-400 disabled:border-slate-600 transition"
          />
        </div>
        <div class="mb-6">
          <label
            for="message"
            class="block mb-2 text-slate-400 pointer-events-none"
          >
            Message
          </label>
          <textarea
            v-model="contact.message"
            id="message"
            placeholder="(づ ◕‿◕ )づ"
            :disabled="contact.sent"
            rows="5"
            required
            class="ring-2 ring-transparent focus:ring-slate-700 focus:border-slate-400 bg-transparent disabled:text-slate-400 outline-none shadow-lg w-full px-3 py-2 rounded border border-slate-600 focus:shadow-xl hover:border-slate-400 disabled:border-slate-600 transition"
          >
          </textarea>
        </div>
        <div class="flex gap-4 items-center">
          <button
            @click.prevent="submitMessage()"
            :disabled="!formComplete || contact.sent"
            class="text-sm shadow-lg rounded-full py-2 h-9 font-medium bg-sky-600 disabled:bg-slate-800 disabled:text-slate-400 whitespace-nowrap disabled:brightness-100 hover:shadow-xl disabled:shadow-lg"
            :class="{
              transition: !contact.alterDuration,
              'hover:brightness-125': formComplete && !contact.loading,
              'duration-300': contact.alterDuration,
              'cursor-default': contact.loading,
              'w-16': !contact.sent,
              'w-32': contact.sent,
            }"
          >
            <span v-if="!contact.sent && !contact.loading"> Send </span>
            <span v-if="contact.loading">
              <i class="fa-solid fa-circle-notch fa-spin text-white"></i>
            </span>

            <span
              v-if="contact.sent"
              class="duration-300"
              :class="{
                'opacity-100': contact.displaySentMessage,
                'opacity-0': !contact.displaySentMessage,
              }"
            >
              Message sent!
            </span>
          </button>
        </div>
      </form>
    </section>
  </main>
</template>

<script setup>
import { reactive, computed } from "vue"
import projectsList from "../assets/projects.js"
import emailjs from "@emailjs/browser"

const projects = reactive(projectsList)

const contact = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
  loading: false,
  sent: false,
  alterDuration: false,
  displaySentMessage: false,
})

const formComplete = computed(() => {
  const validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/
  if (
    contact.name.length > 0 &&
    contact.email.match(validRegex) &&
    contact.subject.length > 0 &&
    contact.message.length > 0
  )
    return true
})

function submitMessage() {
  contact.loading = true
  contact.alterDuration = true
  emailjs
    .send(
      "service_s5pxjfk",
      "template_23ptwm1",
      contact,
      "user_tDC2fc7b0yBVBv0z2ofPO"
    )
    .then(
      (result) => {
        console.log("SUCCESS!", result.text)
        contact.loading = false
        contact.sent = true
        setTimeout(() => {
          contact.displaySentMessage = true
        }, 300)
      },
      (error) => {
        console.log("FAILED...", error.text)
      }
    )
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade {
  opacity: 0;
  animation-name: fade;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

@keyframes fade {
  0% {
    transform: translateY(3rem);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
.hero-subheading {
  animation-delay: 150ms;
}
</style>
