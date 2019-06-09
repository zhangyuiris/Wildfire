<template>
  <div>
    <el-row style="width: 100vw">
      <el-col :span="16" :offset="4">
        <Convey/>
        <Maps/>
      </el-col>
      <el-col :span="2">
        <div class="next animated bounceInRight" @click="click()">
          <img src="../../static/next.png" style="width: 100px;padding-top: 300px">
        </div>
      </el-col>
    </el-row>
    <div class="layer" v-if="dialogWinVisible">
      <div class="modal">
        <div style="padding-top: 380px">
          <img @click="play()" src="../../static/victorybutton.png" width="200px">
        </div>
      </div>
    </div>
    <div class="layer" v-if="dialogLoseVisible">
      <div class="modal lose">
        <div style="padding-top: 380px">
          <img @click="play()" src="../../static/losebutton.png" width="200px">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Convey from './Convey'
import Maps from './Maps'
export default {
  name: 'Index',
  components: { Maps, Convey },
  data () {
    return {
    }
  },
  computed: {
    dialogWinVisible: function () {
      return this.$store.state.dialogWinOpen
    },
    dialogLoseVisible: function () {
      return this.$store.state.dialogLoseOpen
    }
  },
  methods: {
    init () {
      console.log('init')
    },
    click () {
      this.$store.commit('systemRound')
      this.$store.commit('refreshConvey')
    },
    play () {
      this.$router.push({
        path: '/',
        params: {
          finished: 'finished'
        }
      })
      this.$store.commit('closeDialog')
    }
  },
  created () {
    this.init()
  }
}
</script>

<style lang="stylus" scoped>
.container {
  align: center;
  width: 70%;
}
.layer {
  position absolute
  top 0
  z-index 999
  width 100vw
  height 100vh
  padding-top 100px
  background-color rgba(0, 0, 0, 0.5)
  display flex
  justify-content center
}
.modal {
  background-image url("../../static/victory.png")
  background-size 410px 540px
  width 410px
  height 540px
}
.lose {
  background-image url("../../static/lose.png")
}
</style>
