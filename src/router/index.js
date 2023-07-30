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
    {
      path: '/stews',
      name: 'stews',
      component: () => import('@/views/stews.vue'),
    },
    {
      path: '/rice-pasta',
      name: 'rice-pasta',
      component: () => import('@/views/rice-pasta.vue'),
    },
    {
      path: '/soups',
      name: 'soups',
      component: () => import('@/views/soups.vue'),
    },
    {
      path: '/meals',
      name: 'meals',
      component: () => import('@/views/meals.vue'),
    },
    {
      path: '/appetisers-salads',
      name: 'appetisers-salads',
      component: () => import('@/views/appetisers-salads.vue'),
    },
    {
      path: '/beverages-juices',
      name: 'beverages-juices',
      component: () => import('@/views/beverages-juices.vue'),
    },
  ],
}, ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
