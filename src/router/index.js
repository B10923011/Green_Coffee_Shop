import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "../components/MainPage.vue";
import AppMenu from "../components/AppMenu.vue";
import AppBooking from "../components/AppBooking.vue";
import AppProduct from "../components/AppProduct.vue";
import HomePage from "../components/HomePage.vue";
import LoginVue from '@/components/Login.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path: "/",
        name: "mainpage",
        component: MainPage,
      },
      {
        path: "/home",
        name: "home",
        component: HomePage,
      },
      {
        path: "/menu",
        name: "menu",
        component: AppMenu,
      },
      {
        path: "/booking",
        name: "booking",
        component: AppBooking,
      },
      {
        path: "/product",
        name: "product",
        component: AppProduct,
      },
      {
        path: "/login",
        name: "login",
        component: LoginVue,
      }
  ]
})

export default router
