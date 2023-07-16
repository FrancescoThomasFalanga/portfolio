import { createRouter, createWebHistory } from "vue-router";

import Main from "./pages/Main.vue";
import ProjectsList from "./pages/ProjectsList.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: Main,
      meta: { title: "Home" },
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsList,
      meta: { title: "Projects" },
    },
  ],
});

export { router };
