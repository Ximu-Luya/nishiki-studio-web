import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/categories/:path*',
      component: () => import('../pages/Categories.vue'),
    },
    {
      path: '/blog/:filepath*',
      component: () => import('../pages/Blog.vue'),
    },
    {
      path: '/about',
      component: () => import('../pages/About.vue'),
    },
  ]
})

export default router