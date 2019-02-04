import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/',
        name: 'dashboard',
        component: () => import ('./views/Dashboard.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./views/Login.vue')
    },
    {
        path: '/sign-up',
        name: 'sign-up',
        component: () => import('./views/SignUp.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('./views/Dashboard.vue')
    }
  ]
})
