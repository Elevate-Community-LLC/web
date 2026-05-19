import { initNav, useNav } from '@/composables/useNav'
import { createRouter, createWebHistory } from 'vue-router'
initNav()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'Home',
      meta: { module: 'home' },
      component: () => import('@/views/HomeView.vue'),
      children: [
        {
          path: 'services',
          name: 'Services',
          meta: { module: 'services' },
          component: () => import('@/views/services/ServicesView.vue'),
        },
        {
          path: 'platforms',
          name: 'Platforms',
          meta: { module: 'platforms' },
          component: () => import('@/views/platforms/PlatformsView.vue'),
        },
        {
          path: 'products',
          name: 'Products',
          meta: { module: 'products' },
          component: () => import('@/views/products/ProductsView.vue'),
        },
        {
          path: 'about',
          name: 'About',
          meta: { module: 'about' },
          component: () => import('@/views/AboutView.vue'),
        },
        {
          path: '/:pathMatch(.*)*',
          name: 'Page Under Construction',
          component: () => import('@/views/NotFoundView.vue')
        },
      ]
    },
    {
      path: '',
      name: 'Content',
      meta: { module: 'content' },
      component: () => import('@/views/ContentView.vue'),
      children: [
        {
          path: 'services/solar-expertise',
          name: 'Solar Expertise',
          meta: { module: 'services' },
          component: () => import('@/views/services/SolarExpertiseServiceView.vue'),
        },
        {
          path: 'services/implementation',
          name: 'Implementation',
          meta: { module: 'services' },
          component: () => import('@/views/services/ImplementationServiceView.vue'),
        },
        {
          path: 'services/integration',
          name: 'Integration',
          meta: { module: 'services' },
          component: () => import('@/views/services/IntegrationServiceView.vue'),
        },
        {
          path: 'services/optimization',
          name: 'Optimization',
          meta: { module: 'services' },
          component: () => import('@/views/services/OptimizationServiceView.vue'),
        },
      ]
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // If a savedPosition is available (browser back/forward button), use it
    if (savedPosition) {
      return savedPosition
    } else {
      // Otherwise, always scroll to the top
      return { top: 0, left: 0 }
    }
  },
})

const nav = useNav()

router.afterEach((to) => {
  nav.value.items = nav.value.items.filter((item) => ['home', to.meta.module].includes(item.module))
})

export default router
