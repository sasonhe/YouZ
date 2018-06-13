import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/uzhi/',
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }]
})