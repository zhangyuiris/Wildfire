<template>
  <div class="convey">
    <div class="bg">
      <div class="track">
        <div v-for="(item, index) in convey" :key="index" class="block">
          <transition>
            <a @click="clickConvey(index, item.code)">
              <img :src="'../../static/' + item.code + '.png'" height="100%" ondragstart="return false;" alt=""/>
            </a>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Convey',
  data () {
    return {
      convey: this.$store.state.convey
    }
  },
  methods: {
    init () {
      console.log('convey init')
    },
    clickConvey (index, name) {
      this.$store.commit('setConveyChoose', {index: index, name: name})
    }
  },
  created () {
    this.init()
    this.$store.commit('refreshConvey')
  }
}
</script>

<style lang="stylus" scoped>
.convey
  padding-top 30px
  display flex
  justify-content center
.bg
  user-select none
  width 654px
  background-image  url("../../static/dai.png")
  background-size  654px, 100px
  background-position  center center
.track
  display flex
  flex-direction row
  align-items left
  height 100px
  padding-left 6px
  overflow-x scroll
.block
  background-color none
  width 55px
  height 55px
  padding 15px 6px 10px 10px
</style>
