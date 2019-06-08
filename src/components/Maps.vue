<template>
  <div class="bg animated bounceInUp">
    <div class="maps">
      <div class="block">
        <div v-for="(col, index) in map" :key="index + 'row'" class="row">
          <div v-for="(item, i) in col" :key="i + 'col'" class="col">
            <div v-if="item.code">
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
      row: 6,
      map: this.$store.state.map
    }
  },
  methods: {
    init () {
      console.log('map init')
      this.$store.commit('initMap')
    },
    clickMap (row, col, code) {
      console.log(row, col, code)
      this.$store.commit('setMapChoose', { row: row, col: col, code: code })
    }
  },
  async created () {
    this.init()
    this.map = await this.$store.state.map
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
  padding: 20px;
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
  padding: 3px 5px 4px 4px;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  vertical-align: center;
}
</style>
