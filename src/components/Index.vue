<template>
  <div class="container">
    <Convey/>
    <Maps/>
  </div>
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
    }
  },
  created () {
    this.init()
  }
}
</script>

<style lang="stylus" scoped>
.container {
  text-align: center;
  width: 80%;
}
</style>
