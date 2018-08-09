import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/page/home'
import find from '@/components/page/find'
import tab from '@/components/tabFooter/tab'
import mine from '@/components/page/mine'
import showAllCards from '@/components/page/showAllCards'
import applyCard from '@/components/page/applyCard'
import login from '@/components/page/login'
import newsDatil from '@/components/page/newsDatil'
import personInfo from '@/components/page/personInfo'
import uploadImg from '@/components/page/uploadImg'
import setUp from '@/components/page/setUp'
import NullPage from '@/components/page/404'
Vue.use(Router)


let router = new Router({
  routes: [{
      path: '/login',
      name: 'login',
      component: login,
    }, {
      path: '/',
      name: 'home',
      components: {
        default: home,
        tab: tab
      },
      meta: {
        keepAlive: true
      }
    }, {
      path: '/find',
      name: 'find',
      components: {
        default: find,
        tab: tab
      },
      meta: {
        keepAlive: true
      }
    }, {
      path: '/mine',
      name: 'mine',
      components: {
        default: mine,
        tab: tab
      },
      // meta: {
      //   keepAlive: true
      // }
    }, {
      path: '/tab',
      name: 'tab',
      component: tab,
      meta: {
        keepAlive: true
      }
    }, {
      path: '/showAllCards',
      name: 'showAllCards',
      component: showAllCards,
    },
    {
      path: '/newsDatil',
      name: 'newsDatil',
      component: newsDatil,
    }, {
      path: '/applyCard',
      name: 'applyCard',
      component: applyCard,
    },
    {
      path: '/personInfo',
      name: 'personInfo',
      component: personInfo,
    },
    {
      path: '/uploadImg',
      name: 'uploadImg',
      component: uploadImg,
    },
    {
      path: '/setUp',
      name: 'setUp',
      component: setUp,
    },
    {
      path: '/NullPage',
      name: 'NullPage',
      component: NullPage,
    },
  ]
})
router.beforeEach((to, from, next) => {
  // console.log('to:' + to.path)
  if (to.path.startsWith('/login')) {
    window.localStorage.clear()
    next()
  } else {
    let user = window.localStorage.getItem('Guid')
    if (!user) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  }
})



export default router
