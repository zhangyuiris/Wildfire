import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Start from '@/components/Start'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    }
  ]
})
