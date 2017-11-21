// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/index.js'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueToast from 'vue2-toast'
import "babel-polyfill";

// Vue.config.productionTip = false
Vue.use(VueToast, {
  defaultType: 'center'
})

Vue.use(Vuex)
Vue.use(ElementUI)

// 默认设置axios请求
// axios.default.baseUrl = 'http://localhost:3000/'  //设置默认请求的前缀
axios.defaults.withCredentials = true 
Vue.prototype.$axios = axios  

// Vue.prototype.$http = axios //在vue的原型链上添加axios
Vue.config.productionTip = false

// Vue.use(VueTouch, {name: 'v-touch'})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
