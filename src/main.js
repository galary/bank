// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import MintUI from 'mint-ui'
import qs from 'qs'
import 'mint-ui/lib/style.css'
import './assets/font2/iconfont.css'
import './assets/font/iconfont.css'
import './assets/font/iconfont.js'
import './assets/font2/iconfont.js'
import './assets/font3/iconfont.css'
import './assets/font3/iconfont.js'
import 'animate.css/animate.min.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import util from './assets/util.js'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false

Vue.use(MintUI)
Vue.use(VueAwesomeSwiper)
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; //此处是增加的代码，设置请求头的类型
Vue.prototype.$http = axios
Vue.prototype.$qs = qs
Vue.prototype.util = util
Vue.prototype.baseUrl = 'http://api.getcard.cn'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
