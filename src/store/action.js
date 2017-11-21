
export default {
  addNum ({ commit, state }, id) {
    commit('REMEER_ANSWER', id)
    if (state.itemNum < state.itemDetail.length) {
      commit('ADD_ITEMNUM', 1)
    }
  },
  initalizeData ({ commit }) {
    commit('INITALIZE_DATA')
  }
}