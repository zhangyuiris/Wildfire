import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: true,
    convey: [],
    map: [],
    conveyChoose: {},
    mapChoose: {}
  },
  getters: {
    getConvey (state) {
      return state.convey
    }
  },
  mutations: {
    initConvey (state, name) {
    },
    initMap (state, name) {
    },
    setMapChoose (state, mapChoose) {
      state.mapChoose = mapChoose
    },
    setConveyChoose (state, conveyChoose) {
      state.conveyChoose = conveyChoose
    }
  },
  actions: {
  }
})
