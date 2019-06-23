<template>
  <div class="bg animated bounceInUp">
    <div class="maps">
      <div class="block">
        <div class="combine" :style="combine ? combineStyle : {}" v-show="combine">
          <img src="static/combine.gif" width="68px;" height="68px"/>
        </div>
        <div v-for="(col, index) in map" :key="index + 'row'" class="row">
          <div v-for="(item, i) in col" :key="i + 'col'" class="col">
            <div v-if="item.code === 'fire'">
              <div class="dock" @click="clickMap(index, i, item.code)">
                <img
                  :src="'static/' + change + '.png'"
                  width="100%"
                  height="100%"
                  ondragstart="return false;"
                  alt
                >
              </div>
            </div>
            <div v-else-if="item.code === 'water' ">
              <div class="dock" @click="clickMap(index, i, item.code)">
                <img
                  :src="'static/' + changeWater + '.png'"
                  width="100%"
                  height="100%"
                  ondragstart="return false;"
                  alt
                >
              </div>
            </div>
            <div v-else-if="item.code === 'grass' ">
              <div class="dock" @click="clickMap(index, i, 'grass')"></div>
            </div>
            <div v-else>
              <div class="dock" @click="clickMap(index, i, item.code)">
                <img
                  :src="'static/' + item.code + '.png'"
                  width="100%"
                  height="100%"
                  ondragstart="return false;"
                  alt
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Maps',
  data () {
    return {
      combineStyle: {},
      combine: false,
      change: 'fire3',
      changeWater: 'water1',
      row: 6,
      map: this.$store.state.map
    }
  },
  methods: {
    checkWin () {
      if (JSON.stringify(this.map).indexOf('fire') === -1) {
        return true
      }
      return false
    },
    check () {
      if (JSON.stringify(this.map).indexOf('water') === -1) {
        return true
      }
      return false
    },
    async undisplayCombine () {
      setTimeout(() => {
        this.combine = false
      }, 200)
    },
    init () {
      this.$store.commit('initMap')
    },
    async clickMap (row, col, code) {
      this.combineStyle = {
        'left': (col + 3) * 68 + 44 + 'px',
        'top': row * 68 + 46 + 'px'
      }
      this.combine = true
      await this.undisplayCombine()
      this.$store.commit('setMapChoose', {row: row, col: col, code: code})
      let fire = 0
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 9; j++) {
          let col = this.map[i][j]
          if (col.code === 'fire') {
            fire++
          }
        }
      }
      this.$emit('lose', this.map)
      if (fire === 0) {
        this.$store.commit('openWinDialog')
      }
    }
  },
  async created () {
    this.init()
    this.map = await this.$store.state.map
    const that = this
    setInterval(function () {
      if (that.change === 'fire3') {
        that.change = 'fire4'
      } else {
        that.change = 'fire3'
      }
      if (that.changeWater === 'water1') {
        that.changeWater = 'water2'
      } else {
        that.changeWater = 'water1'
      }
    }, 200)
  }
}
</script>

<style lang="stylus" scoped>
.bg {
  padding-top: 30px;
  display: flex;
  justify-content: center;
}

.block {
  padding: 16px 17px 17px 16px
}

.maps {
  width: 654px;
  height: 478px;
  background-image: url('../../static/di.png');
  background-size: 654px, 478px;
  background-position: center center;
}

.row {
  display: flex;
  justify-content: center;
}
.combine {
  position absolute
  z-index 999
}
.dock {
  /*padding: 0px 5px 0px 4px;*/
  width: 68px;
  height: 68px;
  display: flex;
  justify-content: center;
  vertical-align: center;
}
</style>
