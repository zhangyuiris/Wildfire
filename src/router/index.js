import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Start from '@/components/Start'
import store from '../store/index'
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
    if (store.getters.getWinDialog === true || store.getters.getLoseDialog === true) {
      next()
    }
  } else {
    next()
  }
})
export default router
