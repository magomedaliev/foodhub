import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/catalog",
      name: "catalog",
      component: () => import("../views/CatalogView.vue")
    },
    {
      path: "/food",
      redirect: "/",
    },
    {
      path: "/food/:id",
      name: "food",
      component: () => import("../views/FoodView.vue")
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/CartView.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue")
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    }
  ]
})

export default router
