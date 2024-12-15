import { createRouter, createWebHistory } from "vue-router"
import Home from "./views/Home.vue"
import Project from "./views/Project.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/projects/:id",
    name: "Work",
    component: Project,
    props: true,
  },
]

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      if (to.path != from.path) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              el: to.hash,
              top: 65,
            })
          }, 310)
        })
      } else {
        return {
          el: to.hash,
          top: 65,
        }
      }
    } else {
      return { top: 0 }
    }
  },

  history: createWebHistory(),
  routes,
})

export default router
