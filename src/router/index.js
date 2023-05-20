import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },

     {
      path: '/our-cats',
      name: 'ourCats',
      component: () => import('../views/OurCats.vue')
    },

    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/OurContacts.vue')
    },
    {
      name: 'OneCat',
      props: true,
      path: '/:id',
      component: () => import('../views/OneCat.vue')
    },
    {
      name: 'OurCats',
      props: true,
      path: '/our-cats',
      component: () => import('../views/OurCats.vue')
    }
  ]
})

export default router
