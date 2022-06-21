import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Chest from '../views/Chest.vue'
import Exercise from '../views/Exercise.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/abs',
      name: 'abs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Abs.vue')
    },
    {
      path: '/biceps',
      name: 'biceps',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Biceps.vue')
    },

    {
      path: '/legs',
      name: 'legs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Legs.vue')
    },

    {
      path: '/neck',
      name: 'neck',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Neck.vue')
    },

    {
      path: '/shoulder',
      name: 'shoulder',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Shoulder.vue')
    },

    {
      path: '/foreArms',
      name: 'foreArms',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ForeArms.vue')
    },

    {
      path: '/calves',
      name: 'calves',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Calves.vue')
    },

    {
      path:'/chest',
      name: "chest",
      component: Chest,
    },

    {
      path:'/exercise/:id',
      name: "exercise",
      component: Exercise,
    },

    {
      path: '/search',
      name: 'search',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Search.vue')
    },
  ]
})

export default router
