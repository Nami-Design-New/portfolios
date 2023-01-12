import { createRouter, createWebHistory } from 'vue-router'

const routes = [

  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    exact: true
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: () => import('../views/PricingView.vue')
  },
  {
    path: '/Features',
    name: 'Features',
    component: () => import('../components/Features.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
