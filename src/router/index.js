import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '@/components/layout/Layout.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/count-to',
    name: 'CountTo',
    component: Layout,
    children: [
      {
        path: 'list',
        name: 'CountToList',
        component: () => import(/* webpackChunkName: "count-to" */ '@/views/count-to/CountTo.vue')
      }
    ]
  },
  {
    path: '/clipboard',
    name: 'Clipboard',
    component: () => import(/* webpackChunkName: "clipboard" */ '@/views/clipboard/Clipboard.vue')
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import(/* webpackChunkName: "axios" */ '@/views/axios/Axios.vue')
  },
  {
    path: '/qs',
    name: 'Qs',
    component: () => import(/* webpackChunkName: "qs" */ '@/views/axios/Qs.vue')
  },
  {
    path: '/md5',
    name: 'Md5',
    component: () => import(/* webpackChunkName: "md5" */ '@/views/md5/Md5.vue')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
