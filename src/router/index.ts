import Vue from 'vue'
import Router, { RouterOptions } from 'vue-router'
Vue.use(Router)


const HomePage = () => import('../pages/Home.vue')
const AboutPage = () => import('../pages/About.vue')
export function createRouter (): Router {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes: [
      { path: '/home', component: HomePage },
      { path: '/about', component: AboutPage },
      { path: '/', redirect: '/home' }
    ]
  } as RouterOptions)
}
