<template>
  <el-container style="width: 100vw">
    <el-row>
      <el-col :span="16" :offset="2">
        <Convey/>
        <Maps/>
      </el-col>
      <el-col :span="2">
        <div class="next" @click="click()">
          <img src="../../static/next.png" style="width: 100px">
        </div>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import Convey from './Convey'
import Maps from './Maps'
export default {
  name: 'Index',
  components: { Maps, Convey },
  data () {
    return {}
  },
  methods: {
    init () {
      console.log('init')
    },
    click () {
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
