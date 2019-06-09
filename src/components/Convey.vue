<template>
  <div class="convey animated bounceInDown">
    <div class="bg">
      <div class="track">
        <div v-for="(item, index) in convey" :key="index" class="block">
          <a @click="clickConvey(index, item.code)"  :style="item.selected ? styles: {}">
            <img
              :src="'../../static/el-' + item.code + '.png'"
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
  name: 'Convey',
  data () {
    return {
      styles: {
        'border': '4px solid #fee411',
        'border-radius': '4px',
        'padding-top': '40px',
        'box-sizing': 'border-box'
      },
      convey: this.$store.state.convey
    }
  },
  methods: {
    init () {
      console.log('convey init')
    },
    clickConvey (index, code) {
      this.$store.commit('setConveyChoose', { index: index, code: code })
    }
  },
  created () {
    this.init()
    this.$store.commit('refreshConvey')
  },
  destory () {
    this.$store.commit('resetConvey')
  }
}
</script>

<style lang="stylus" scoped>
.convey {
  padding-top: 30px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
}

.bg {
  user-select: none;
  width: 654px;
  background-image: url('../../static/dai.png');
  background-size: 654px, 100px;
  background-position: center center;
}

.track {
  display: flex;
  flex-direction: row;
  align-items: left;
  height: 100px;
  padding-left: 10px;
  padding-right: 10px;
  overflow-x: scroll;
}

.track::-webkit-scrollbar {
  width: 0 !important;
}

.block {
  background-color: none;
  width: 55px;
  height: 55px;
  padding: 15px 6px 10px 10px;
}
/*.block:hover {
  background-color: rgba(0, 0, 0, 0.3);
  background-clip: content-box;
}*/
</style>
