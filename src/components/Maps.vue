<template>
  <div class="maps">
    <div v-for="(col, index) in map" :key="index + 'row'" class="row">
      <div v-for="(item, i) in col" :key="i + 'col'" class="col">
        <div
          class="dock"
          :style="{backgroundImage: 'url(../../static/' + 'logo' + '.png)', backgroundSize: '100%', backgroundPosition: 'center center'}"
        >
          <a @click="clickMap(index, i, item.code)">
            <img
              :src="'../../static/' + item.code + '.png'"
              width="100%"
              height="100%"
              ondragstart="return false;"
              alt
            >
          </a>
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
.maps {
  padding-top: 20px;
}

.row {
  display: flex;
  justify-content: center;
}

.dock {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  vertical-align: center;
}
</style>
