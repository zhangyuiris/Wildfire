<template>
  <el-container class="container">
    <el-row>
      <el-col :span="16" :offset="4" class="animated bounceInDown">
        <img src="../../static/name.png" width="40%"/>
      </el-col>
      <el-col :span="4" :offset="10" style="padding-top: 100px">
        <div class="loading" v-show="!show">
          <div>{{progress}}%</div>
        </div>
        <a @click="start" style="cursor: pointer" v-show="show">
          <img src="../../static/start.png" width="100%"/>
        </a>
      </el-col>
      <el-col :span="4" :offset="10" style="padding-top: 40px">
        <div style="display: flex; justify-content: space-around">
          <a href="https://github.com/zhangyuiris/Wildfire" class="github">GITHUB</a>
          <a href="https://github.com/zhangyuiris/Wildfire/blob/master/README.md" class="github">README</a>
        </div>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
export default {
  name: 'Start',
  data () {
    return {
      progress: 0,
      show: false
    }
  },
  methods: {
    start () {
      this.$store.commit('restart')
      this.$router.push('/index')
    },
    progressBar () {
      this.progress = 1
      let timeout = Math.floor(Math.random() * 20 + 20)
      const that = this
      let interval = setInterval(function () {
        that.progress += Math.floor(Math.random() * 3 + 1)
        if (that.progress > 98) {
          that.progress = 100
          that.show = !that.show
          clearInterval(interval)
        }
      }, timeout)
    }
  },
  created () {
    this.progressBar()
  }
}
</script>

<style lang="stylus" scoped>
.container
  padding-top 140px
.loading
  background-image url("../../static/loading.png")
  background-size 100% 100%
  display flex
  justify-content center
  vertical-align middle
  padding-top 35px
  font-size 24px
  box-sizing border-box
  color #4d7541
  height 108px
  width 100%
.github
  color white
  text-decoration none
  font-size 16px
  font-weight 600
</style>
