import Vue from 'vue'
import Vuex from 'vuex'
import { Element, add } from '../util'
let grass = new Element('草坪', 'grass', true, 0, false)
let fire = new Element('火', 'fire', true, 0, false)
let ice = new Element('冰', 'ice', false, 0, false)
let dust = new Element('土', 'dust', true, 0, false)
let wood = new Element('木', 'wood', true, 0, false)
let stone = new Element('石', 'stone', true, 3, false)
let water = new Element('水', 'water', false, 0, false)
let swamp = new Element('沼泽', 'swamp', false, 0, false)

let object = [dust, wood, ice]

let mapping = {
  grass: grass,
  fire: fire,
  ice: ice,
  dust: dust,
  wood: dust,
  stone: stone,
  water: water,
  swamp: swamp
}
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    round: 0,
    loading: true,
    convey: [],
    map: [],
    conveyChoose: {},
    mapChoose: {}
  },
  getters: {
    getConvey (state) {
      return state.convey
    },
    getMap (state) {
      return state.map
    }
  },
  mutations: {
    refreshConvey (state) {
      for (let i = 0; i < 3; i++) {
        if (state.round > 2) {
          let a = Math.floor(Math.random() * 10) % 3
          state.convey.push(object[a])
        } else {
          let a = Math.floor(Math.random() * 10) % 2
          state.convey.push(object[a])
        }
      }
      state.round++
      console.log(state.convey)
    },
    initMap (state) {
      let map = []
      for (let i = 0; i < 6; i++) {
        let col = []
        for (let i = 0; i < 9; i++) {
          col.push(grass)
        }
        map.push(col)
      }
      let y = (Math.floor(Math.random() * 10) % 8) + 1
      let x = (Math.floor(Math.random() * 10) % 4) + 1
      let _position = Math.floor(Math.random() * 10) % 6
      map[x][y] = fire
      switch (_position) {
        case 0:
          map[x][y - 1] = fire
          map[x][y + 1] = fire
          break
        case 1:
          map[x - 1][y] = fire
          map[x + 1][y] = fire
          break
        case 2:
          map[x][y - 1] = fire
          map[x + 1][y] = fire
          break
        case 3:
          map[x - 1][y] = fire
          map[x][y + 1] = fire
          break
        case 4:
          map[x - 1][y] = fire
          map[x][y - 1] = fire
          break
        case 5:
          map[x + 1][y] = fire
          map[x][y + 1] = fire
          break
        default:
          break
      }
      console.log(map)
      state.map = map
    },
    setMapChoose (state, mapChoose) {
      state.mapChoose = mapChoose
      let conveyChoose = state.conveyChoose
      let col = mapChoose.col
      let row = mapChoose.row
      if (state.conveyChoose.code) {
        let result = add(conveyChoose.code, mapChoose.code)
        if (conveyChoose.code === 'ice' && mapChoose.code === 'fire') {
          state.map[row][col] = water
          if (col - 1 >= 0) {
            state.map[row][col - 1] =
              mapping[add(state.map[row][col - 1], water)]
            Vue.set(
              state.map[row],
              col - 1,
              mapping[add(state.map[row][col - 1], water)]
            )
          }
          if (col + 1 <= state.map[0].length) {
            Vue.set(
              state.map[row],
              col + 1,
              mapping[add(state.map[row][col + 1], water)]
            )
          }
          if (row - 1 >= 0) {
            Vue.set(
              state.map[row - 1],
              col,
              mapping[add(state.map[row - 1][col], water)]
            )
          }
          if (row + 1 <= state.map.length) {
            Vue.set(
              state.map[row + 1],
              col,
              mapping[add(state.map[row + 1][col], water)]
            )
          }
        }
        Vue.set(state.map[row], col, mapping[result])
        conveyChoose = {}
        state.convey.splice(state.conveyChoose.index, 1)
        console.log(state.map[row][col])
      }
    },
    setConveyChoose (state, conveyChoose) {
      state.conveyChoose = conveyChoose
    }
  },
  actions: {}
})
