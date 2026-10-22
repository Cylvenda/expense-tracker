import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LandingView from '../views/LandingView.vue'


const routes = [
  { path: '/', component: LandingView },
  { path: '/home', component: HomeView },
]

const routers = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default routers
