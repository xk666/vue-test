import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'
import Register from '@/components/register/register'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Register',
      component: Register
    }
  ]
})
