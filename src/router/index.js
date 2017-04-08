import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: require('@/components/Hello')
    },
    {
      path: '/select',
      name: 'SelectTest',
      component: require('@/components/Select')
    },
    {
      path: '/validation',
      name: 'ValidationTest',
      component: require('@/components/Validation')
    },
    {
      path: '/child-model',
      name: 'ChildModel',
      component: require('@/components/ChildModel')
    },
    {
      path: '/vee-validation',
      name: 'VeeValidation',
      component: require('@/components/VeeValidation')
    }
  ]
})
