import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _05a5a126 = () => interopDefault(import('..\\pages\\page1.vue' /* webpackChunkName: "pages_page1" */))
const _05b3b8a7 = () => interopDefault(import('..\\pages\\page2.vue' /* webpackChunkName: "pages_page2" */))
const _b9289b14 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/page1",
    component: _05a5a126,
    name: "page1"
  }, {
    path: "/page2",
    component: _05b3b8a7,
    name: "page2"
  }, {
    path: "/",
    component: _b9289b14,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
