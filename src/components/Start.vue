<template>
  <div class="container">
    start
  </div>
</template>

<script>
export default {
  name: 'Start',
  data () {
    return {
    }
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
  .container
    align center
    width 70%
</style>
