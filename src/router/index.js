import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/test'
import Pay from '@/components/pay'
import Cashier from '@/components/cashier'

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/',
      redirect: '/test'
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
      meta:{
        title:'通道信息验证'
      }
    },
    {
      path: '/pay',
      name: 'pay',
      component: Pay,
      meta:{
        title:'银联支付'
      }
    },
    {
      path: '/cashier',
      name: 'cashier',
      component: Cashier,
      meta:{
        title:'收银台'
      }
    },
  ]
})
