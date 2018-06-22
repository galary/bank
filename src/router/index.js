import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/page/home'
import find from '@/components/page/find'
import mine from '@/components/page/mine'
// import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: home
  }, {
    path: '/find',
    name: 'find',
    component: find
  }, {
    path: '/mine',
    name: 'mine',
    component: mine
  }]
})
