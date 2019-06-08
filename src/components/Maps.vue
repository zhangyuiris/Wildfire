<template>
  <div class="bg animated bounceInUp">
    <div class="maps">
      <div class="block">
        <div v-for="(col, index) in map" :key="index + 'row'" class="row">
          <div v-for="(item, i) in col" :key="i + 'col'" class="col">
            <div v-if="item.code !== 'fire' ">
              <div class="dock" @click="clickMap(index, i, item.code)">
                <img
                  :src="'../../static/' + item.code + '.png'"
                  width="100%"
                  height="100%"
                  ondragstart="return false;"
                  alt
                >
              </div>
            </div>
            <div v-else-if="item.code === 'fire' ">
              <div class="dock" @click="clickMap(index, i, item.code)">
                <img
                  :src="'../../static/' + change + '.png'"
                  width="100%"
                  height="100%"
                  ondragstart="return false;"
                  alt
                >
              </div>
            </div>
            <div v-else>
              <div class="dock" @click="clickMap(index, i, 'grass')"></div>
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
      change: 'fire',
      row: 6,
      map: this.$store.state.map
    }
  },
  methods: {
    checkWin () {
      console.log(JSON.stringify(this.map).indexOf('fire'))
      if (JSON.stringify(this.map).indexOf('fire') === -1) {
        return true
      }
      return false
    },
    init () {
      console.log('map init')
      this.$store.commit('initMap')
    },
    clickMap (row, col, code) {
      console.log(row, col, code)
      this.$store.commit('setMapChoose', { row: row, col: col, code: code })
      // if (this.checkWin()) {
      this.$store.commit('openDialog')
      // }
    }
  },
  async created () {
    this.init()
    this.map = await this.$store.state.map
    const that = this
    setInterval(function () {
      if (that.change === 'fire') {
        that.change = 'fire2'
      } else {
        that.change = 'fire'
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

.dock {
  /*padding: 0px 5px 0px 4px;*/
  width: 68px;
  height: 68px;
  display: flex;
  justify-content: center;
  vertical-align: center;
}
</style>
