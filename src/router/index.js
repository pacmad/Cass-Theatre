import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from '@/main'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'PagePublicHome',
    component: () =>
      import('@/pages/public/Home')
  },
  {
    path: '/login',
    name: 'PagePrivateLogin',
    component: () =>
      import('@/pages/private/Login')
  },
  {
    path: '/admin',
    name: 'PagePrivateSecureAdmin',
    component: () =>
      import('@/pages/private/secure/Admin'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = auth.currentUser
  if (requiresAuth && !currentUser) {
    next('/')
  } else if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
})
