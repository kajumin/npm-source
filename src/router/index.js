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
        path: 'base',
        name: 'CountToBase',
        component: () =>
          import(
            /* webpackChunkName: "count-to-demo" */ '@/views/count-to/CountTo.vue'
          )
      }
    ]
  },
  {
    path: '/clipboard',
    name: 'Clipboard',
    component: () =>
      import(
        /* webpackChunkName: "clipboard-demo" */ '@/views/clipboard/Clipboard.vue'
      )
  },

  {
    path: '/request',
    name: 'Request',
    component: Layout,
    children: [
      {
        path: '/axios',
        name: 'Axios',
        component: () =>
          import(/* webpackChunkName: "axios-demo" */ '@/views/axios/Axios.vue')
      },
      {
        path: '/qs',
        name: 'Qs',
        component: () =>
          import(/* webpackChunkName: "qs-demo" */ '@/views/axios/Qs.vue')
      }
    ]
  },
  {
    path: '/md5',
    name: 'Md5',
    component: () => import(/* webpackChunkName: "md5-demo" */ '@/views/md5/Md5.vue')
  },
  {
    path: '/qrcode',
    name: 'Qrcode',
    component: () =>
      import(/* webpackChunkName: "qrcode-demo" */ '@/views/qrcode/Qrcode.vue')
  },
  {
    path: '/wang-editor',
    name: 'WangEditor',
    component: Layout,
    children: [
      {
        path: 'base',
        name: 'WangEditor-Base',
        component: () =>
          import(
            /* webpackChunkName: "wang-editor-demo" */ '@/views/wang-editor/WangEditor.vue'
          )
      }
    ]
  },
  {
    path: '/pdf',
    name: 'Pdf',
    component: Layout,
    childre: [
      {
        path: 'base',
        name: 'Pdf-Base',
        component: () =>
          import(/* webpackChunkName: "pdf-demo" */ '@/views/pdf/Pdf.vue')
      },
      {
        path: '/pdf2',
        name: 'Pdf-Senior',
        component: () =>
          import(/* webpackChunkName: "pdf2-demo" */ '@/views/pdf/Pdf2.vue')
      }
    ]
  },
  {
    path: '/highlight',
    name: 'Highlight',
    component: () =>
      import(
        /* webpackChunkName: "highlight-demo" */ '@/views/highlight/Highlight.vue'
      )
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
