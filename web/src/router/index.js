import { createRouter, createWebHistory } from 'vue-router'
import PublicPage from '../pages/PublicPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: PublicPage,
      children: [
        {
          path: '/home',
          component: () => import("../components/PublicHome.vue")
        },
        {
          path: '/blog',
        }
      ]
    },
  ]
})

export default router