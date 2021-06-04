import { createRouter, createWebHistory } from 'vue-router'
import Login from '/src/views/Login.vue'
import Welcome from '/src/views/Welcome.vue'
import Error from '/src/views/Error.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if (JSON.parse(localStorage.getItem("user"))) {
        next('/welcome')
      } else {
        next()
      }
    }
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: (to, from, next) => {
      if (JSON.parse(localStorage.getItem("user"))) {
        next()
      } else {
        next('/')
      }
    },
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: Error
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router