import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
  level: 'shuju', // 层级
  itemNum: 1,     // 数字
  alltime: 0,     // 所有
  form: {
      name: '',
      region: '',
      date1: '',
      date2: '',
      delivery: true,
      type: ['步步高'],
      resource: '小天才',
      desc: ''
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
