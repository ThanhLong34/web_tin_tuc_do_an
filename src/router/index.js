import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/news-category",
    name: "news_category",
    component: import("@/pages/news_category"),
  },
  {
    path: "/news-detail",
    name: "news_detail",
    component: import("@/pages/news_detail"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
