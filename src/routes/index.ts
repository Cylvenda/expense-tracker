import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../layouts/Dashboard.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    redirect: "/",
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
    ],
  },
];

const routers = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default routers;
