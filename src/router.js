import Vue from 'vue'
import Router from 'vue-router'

import Customers from './components/Customers.vue'
import About from './components/About.vue'
import Add from './components/Add'
import CustomerDetails from './components/CustomerDetails'
import Edit from './components/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'customers',
      component: Customers
     //component: './components/Customers.vue'
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:About
     //component: () => import(/* webpackChunkName: "about" */ './components/About.vue')
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/details/:id',
      name: 'details',
      component: CustomerDetails
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: Edit
    }
  
  ]
})
