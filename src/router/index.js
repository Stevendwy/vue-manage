import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/readme',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      children: [
        {
          path: '/',
          component: resolve => require(['../components/Readme.vue'], resolve)
        },
        {
          path: '/changepwd',
          component: resolve => require(['../components/Changepwd.vue'], resolve)
        }
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../components/Login.vue'], resolve)      
    },
  ]
})
