import { createRouter, createWebHistory } from 'vue-router'
import Login from '/src/views/Login.vue'
import Welcome from '/src/views/Welcome.vue'
import Error from '/src/views/Error.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome,
  },
  {
    path: '/404',
    name: 'Error',
    component: Error,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router