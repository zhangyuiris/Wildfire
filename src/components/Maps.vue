<template>
  <div class="maps">
    <div v-for="(col, index) in array" :key="index + 'row'" class="row">
      <div v-for="(item, i) in col" :key="i + 'col'" class="col">
        <div class="dock" :style="{backgroundImage: 'url(../../static/' + 'logo' + '.png)', backgroundSize: '100%', backgroundPosition: 'center center'}">
          <a @click="clickMap(index, i, item.name)">
            <img :src="'../../static/' + item.name + '.png'" :width="item.countStand / 5 * 60" :height="item.countStand / 5 * 60"  ondragstart="return false;" alt=""/>
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
      array: [
        [ {name: 'fire', countStand: 4}, {name: 'fire'}, {name: 'fire'}, {name: 'fire'}, {name: 'fire'}, {name: 'fire'} ],
        [ {name: 'fire'}, {name: 'fire'}, {name: 'fire'}, {name: 'fire'}, {name: 'fire'}, {name: 'fire'} ],
        [ {name: 'fire'}, {name: 'fire'}, {name: 'fire'}, {name: 'fire'}, {name: 'fire'}, {name: 'fire'} ],
        [ {name: 'fire'}, {name: 'fire'}, {name: 'fire'}, {name: 'fire'}, {name: 'fire'}, {name: 'fire'} ],
        [ {name: 'fire'}, {name: 'fire'}, {name: 'fire'}, {name: 'fire'}, {name: 'fire'}, {name: 'fire'} ],
        [ {name: 'fire'}, {name: 'fire'}, {name: 'fire'}, {name: 'fire'}, {name: 'fire'}, {name: 'fire'} ]
      ]
    }
  },
  methods: {
    init () {
      console.log('map init')
    },
    clickMap (row, col, name) {
      console.log(row, col, name)
      this.$store.commit('setMapChoose', name)
    }
  },
  created () {
    this.init()
  }
}
</script>

<style lang="stylus" scoped>
.maps
  padding-top 20px
.row
  display flex
  justify-content center
.dock
  width 60px
  height 60px
  display flex
  justify-content center
  vertical-align center
  padding 10px
</style>
