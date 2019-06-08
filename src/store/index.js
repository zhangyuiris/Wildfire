import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: true,
    convey: [ {name: 'fire'}, {name: 'fire'}, {name: 'fire'}, {name: 'fire'} ],
    array: [],
    conveyChoose: '',
    mapChoose: ''
  },
  getters: {
    getConvey (state) {
      return state.convey
    }
  },
  mutations: {
    setMapChoose (state, name) {
      state.mapChoose = name
    },
    setConveyChoose (state, newState) {
      state.conveyChoose = newState.name
      // state.convey.splice(newState.index, 1)
    }
  },
  actions: {
  }
})
