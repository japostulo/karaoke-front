import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Video',
    component: () => import(/*webpackChunkName: 'Video'*/ '../components/Video.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/*webpackChunkName: 'Home'*/ '../views/Home.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
