// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'    // 默认主题
// import '../static/css/theme-green/index.css'       // 浅绿色主题
import "babel-polyfill"

// Vue.config.productionTip = false
Vue.use(Element)
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  router,
  render:h=>h(App)
}).$mount("#app")
