import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
  {
    path: "/produtos",
    name: "Produtos",
    component: () => import("@/views/Products.vue"),
  },
  {
    path: "/contato",
    name: "Contato",
    component: () => import("@/views/Contact.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
