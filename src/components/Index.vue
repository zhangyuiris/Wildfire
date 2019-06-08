<template>
  <el-row style="width: 100vw">
    <el-col :span="16" :offset="4">
      <Convey/>
      <Maps/>
    </el-col>
    <el-col :span="2">
      <div class="next animated bounceInRight" @click="click()">
        <img src="../../static/next.png" style="width: 100px;padding-top: 250px">
      </div>
    </el-col>
    <div width="30%" class="modal">
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="play()">确 定</el-button>
      </span>
    </div>
  </el-row>
</template>

<script>
import Convey from './Convey'
import Maps from './Maps'
export default {
  name: 'Index',
  components: { Maps, Convey },
  data () {
    return {
      // success: this.$store.state.dialogOpen.
      dialogVisible: this.$store.state.dialogOpen
    }
  },
  methods: {
    init () {
      console.log('init')
    },
    click () {
      this.$store.commit('systemRound')
      this.$store.commit('refreshConvey')
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
</style>
