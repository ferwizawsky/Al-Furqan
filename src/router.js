//import vue router
import { createRouter, createWebHistory } from "vue-router";

//define a routes
const home = () => import(/* webpackChunkName: "home" */ "./views/Index.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
];

//create router
const router = createRouter({
  history: createWebHistory(),
  routes, // config routes
});

export default router;
