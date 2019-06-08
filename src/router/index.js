import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Start from '@/components/Start'

Vue.use(Router)
const routes = [
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

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  if (from.path === '/index' && to.path === '/') {
    if (from.params === 'finished') {
      next()
    }
  } else {
    next()
  }
})
export default router
