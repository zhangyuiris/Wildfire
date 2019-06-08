import Vue from 'vue'
import Vuex from 'vuex'
import { Element, add } from '../util'
let grass = new Element('草坪', 'grass', true, 0, false)
let fire = new Element('火', 'fire', true, 0, true)
let ice = new Element('冰', 'ice', false, 0, false)
let dust = new Element('土', 'dust', true, 0, false)
let wood = new Element('木', 'wood', true, 0, false)
let stone = new Element('石', 'stone', true, 3, false)
let water = new Element('水', 'water', false, 0, false)
let swamp = new Element('沼泽', 'swamp', false, 0, false)

let object = [dust, wood, ice, fire, water]

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
          let a = Math.floor(Math.random() * 10) % 5
          state.convey.push(object[a])
        } else {
          let a = Math.floor(Math.random() * 10) % 2
          state.convey.push(object[a])
        }
      }
      state.round++
      console.log(state.convey)
    },
    restart (state) {
      state = {
        round: 0,
        loading: true,
        convey: [],
        map: [],
        conveyChoose: {},
        mapChoose: {}
      }
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
      let col = mapChoose.col
      let row = mapChoose.row
      console.log({ row, col })
      if (state.conveyChoose.code) {
        let result = add(state.conveyChoose.code, mapChoose.code)
        if (state.conveyChoose.code === 'ice' && mapChoose.code === 'fire') {
          Vue.set(state.map[row], col, water)
          if (col - 1 >= 0) {
            Vue.set(
              state.map[row],
              col - 1,
              mapping[add(state.map[row][col - 1], water)]
            )
          }
          if (col + 1 < state.map[0].length) {
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
          if (row + 1 < state.map.length) {
            Vue.set(
              state.map[row + 1],
              col,
              mapping[add(state.map[row + 1][col], water)]
            )
          }
        } else {
          Vue.set(state.map[row], col, mapping[result])
        }
        Vue.set(state.map[row], col, mapping[result])
        state.convey.splice(state.conveyChoose.index, 1)
        state.conveyChoose = {}
      }
    },
    setConveyChoose (state, conveyChoose) {
      state.conveyChoose = conveyChoose
    },
    systemRound (state) {
      let randomCellList = []
      let factorSum = 0
      for (let i = 0; i < state.map.length; i++) {
        for (let j = 0; j < state.map[i].length; j++) {
          if (state.map[i][j].isFired) {
            if (
              i - 1 >= 0 &&
              !state.map[i - 1][j].isFired &&
              (state.map[i - 1][j].code !== 'water' ||
                state.map[i - 1][j].code !== 'swamp')
            ) {
              let factor = 1
              if (state.map[i - 1][j].code === 'wood') {
                factor = 3
              }
              factorSum += factor
              randomCellList.push({ row: i - 1, col: j, factor })
            }

            if (
              i + 1 < state.map.length &&
              !state.map[i + 1][j].isFired &&
              (state.map[i + 1][j].code !== 'water' ||
                state.map[i + 1][j].code !== 'swamp')
            ) {
              let factor = 1
              if (state.map[i + 1][j].code === 'wood') {
                factor = 3
              }
              factorSum += factor
              randomCellList.push({ row: i + 1, col: j, factor })
            }

            if (
              j - 1 >= 0 &&
              !state.map[i][j - 1].isFired &&
              (state.map[i][j - 1].code !== 'water' ||
                state.map[i][j - 1].code !== 'swamp')
            ) {
              let factor = 1
              if (state.map[i][j - 1].code === 'wood') {
                factor = 3
              }
              factorSum += factor
              randomCellList.push({ row: i, col: j - 1, factor })
            }

            if (
              j + 1 < state.map[i].length &&
              !state.map[i][j + 1].isFired &&
              (state.map[i][j + 1].code !== 'water' ||
                state.map[i][j + 1].code !== 'swamp')
            ) {
              let factor = 1
              if (state.map[i][j + 1].code === 'wood') {
                factor = 3
              }
              factorSum += factor
              randomCellList.push({ row: i, col: j + 1, factor })
            }
          }
        }
      }
      const totalCount = Number.parseInt((randomCellList.length / 4).toFixed(0))
      console.log(`totalCount: ${totalCount}`)
      for (let i = 0; i < totalCount; i++) {
        let random = Number.parseInt((Math.random() * factorSum).toFixed(0))

        for (let j = 0; j < randomCellList.length; j++) {
          random -= randomCellList[j].factor
          if (random <= 0) {
            factorSum -= randomCellList[j].factor
            console.log({
              row: randomCellList[j].row,
              col: randomCellList[j].col
            })
            Vue.set(
              state.map[randomCellList[j].row],
              randomCellList[j].col,
              fire
            )
            randomCellList.splice(j, 1)
            break
          }
        }
      }
    }
  },
  actions: {}
})
