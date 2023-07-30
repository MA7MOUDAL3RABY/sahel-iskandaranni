// Composables
import {
  createRouter,
  createWebHistory
} from 'vue-router'

const routes = [{
  path: '/',
  component: () => import('@/layouts/Web.vue'),
  children: [{
      path: '/',
      name: 'Fish',
      component: () => import('@/views/Fish.vue'),
    },
    {
      path: '/fish',
      name: 'Fish',
      component: () => import('@/views/Fish.vue'),
    },
  ],
}, ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
