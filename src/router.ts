import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/produtos",
    name: "Produtos",
    component: () => import("@/views/Products.vue"),
  },
  {
    path: "/clientes",
    name: "Clientes",
    component: () => import("@/views/Customers.vue"),
  },
  {
    path: "/sobre",
    name: "Sobre",
    component: () => import("@/views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
