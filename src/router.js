import { createRouter, createWebHistory } from "vue-router";

import ProjectsList from "./pages/ProjectsList.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/projects",
      name: "projects",
      component: ProjectsList,
      meta: { title: "Projects" },
    },
  ],
});

export { router };
