import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main-page',
      component: require('@/components/MainPage').default
    },
    {
      path: '/orders',
      name: 'orders-page',
      component: require('@/components/Orders').default
    },
    {
      path: '/admin',
      name: 'admin-page',
      component: require('@/components/Admin').default
    }
  ]
})
