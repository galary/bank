// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/font2/iconfont.css'
import './assets/font/iconfont.css'
import './assets/font/iconfont.js'
import './assets/font2/iconfont.js'
import './assets/font3/iconfont.css'
import './assets/font3/iconfont.js'
import 'animate.css/animate.min.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false

Vue.use(MintUI)
Vue.use(VueAwesomeSwiper)
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
