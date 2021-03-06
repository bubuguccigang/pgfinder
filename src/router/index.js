import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SearchPage from "../views/SearchPage.vue"

Vue.use(VueRouter)



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, 
   
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // {
  //   path: '/pgfinder',
  //   name: 'SearchPG',
    
  //   component: () => import( '../views/SearchPage.vue')
  // },
  {
    path: '/help',
    name: 'help',
    
    component: () => import( '../views/help.vue'),

    
  },
  {
    path: '/howitworks',
    name: 'howitworks',
    
    component: () => import( '../views/howitworks.vue'),

    
  },
  {
    path: '/search',
    name: 'SearchPage',
    component: SearchPage,
    // props: true
  }
  
]


const router = new VueRouter({mode:"history",
  routes
})


export default router 
