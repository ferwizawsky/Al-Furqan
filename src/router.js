//import vue router
import { createRouter, createWebHistory } from "vue-router";

//define a routes
const home = () => import("./views/Index.vue");
const surah = () => import("./views/Surah.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/:id",
    name: "surah",
    component: surah,
  },
];

//create router
const router = createRouter({
  history: createWebHistory(),
  routes, // config routes
});

export default router;
