import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import mypage from '@/views/mypage'
import inner from '@/views/inner'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/mypage',
      name:'mypage',
      component:mypage
    },
    {
      path:'/inner',
      name:'inner',
      component:inner
    }
  ]
})
