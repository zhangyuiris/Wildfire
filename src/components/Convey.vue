<template>
  <div class="convey">
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
  user-select none
  padding 20px
.track
  display: flex
  flex-direction row
  align-items left
  padding 10px
  height 80px
  background-color saddlebrown
  overflow-x scroll
.block
  background-color none
  margin-right 10px
  width 60px
  height 60px
  padding 10px
</style>
