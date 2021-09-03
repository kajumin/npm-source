import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '@/components/layout/Layout.vue'
import store from '@/store/index.js'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'home',
      hideChildren: true
    },
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'HomeIndex',
        meta: {
          title: 'home'
        },
        component: Home
      }
    ]
  },
  {
    path: '/count-to',
    name: 'CountTo',
    meta: {
      title: 'count-to'
    },
    component: Layout,
    children: [
      {
        path: 'demo1',
        name: 'CountToDemo1',
        meta: {
          title: 'demo1'
        },
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
    meta: {
      title: 'clipboard'
    },
    component: Layout,
    children: [
      {
        path: 'demo1',
        name: 'ClipboardDemo1',
        meta: {
          title: 'demo1'
        },
        component: () =>
          import(
            /* webpackChunkName: "clipboard-demo1" */ '@/views/clipboard/Clipboard.vue'
          )
      }
    ]
  },

  {
    path: '/request',
    name: 'Request',
    meta: {
      title: 'request'
    },
    component: Layout,
    redirect: { name: 'Axios' },
    children: [
      {
        path: 'axios',
        name: 'Axios',
        meta: {
          title: 'axios'
        },
        component: () =>
          import(/* webpackChunkName: "axios-demo" */ '@/views/axios/Axios.vue')
      },
      {
        path: '/qs',
        name: 'Qs',
        meta: {
          title: 'qs'
        },
        component: () =>
          import(/* webpackChunkName: "qs-demo" */ '@/views/axios/Qs.vue')
      }
    ]
  },
  {
    path: '/md5',
    name: 'Md5',
    meta: {
      title: 'md5',
      hideChildren: true
    },
    component: Layout,
    children: [
      {
        path: 'demo1',
        name: 'Md5Demo1',
        component: () =>
          import(/* webpackChunkName: "md5-demo1" */ '@/views/md5/Md5.vue')
      }
    ]
  },
  {
    path: '/qrcode',
    name: 'Qrcode',
    meta: {
      title: 'qrcode',
      hideChildren: true
    },
    component: Layout,
    children: [
      {
        path: 'demo1',
        name: 'QrcodeDemo1',
        component: () =>
          import(
            /* webpackChunkName: "qrcode-demo1" */ '@/views/qrcode/Qrcode.vue'
          )
      }
    ]
  },
  {
    path: '/wang-editor',
    name: 'WangEditor',
    meta: {
      title: 'wang-editor'
    },
    component: Layout,
    children: [
      {
        path: 'demo1',
        name: 'WangEditorDemo1',
        meta: {
          title: 'demo1'
        },
        component: () =>
          import(
            /* webpackChunkName: "wang-editor-demo1" */ '@/views/wang-editor/WangEditor.vue'
          )
      }
    ]
  },
  {
    path: '/pdf',
    name: 'Pdf',
    meta: {
      title: 'pdf'
    },
    component: Layout,
    children: [
      {
        path: 'base',
        name: 'PdfBase',
        meta: {
          title: 'base'
        },
        component: () =>
          import(/* webpackChunkName: "pdf-base" */ '@/views/pdf/Pdf.vue')
      },
      {
        path: 'senior',
        name: 'PdfSenior',
        meta: {
          title: 'senior'
        },
        component: () =>
          import(/* webpackChunkName: "pdf2-senior" */ '@/views/pdf/Pdf2.vue')
      }
    ]
  },
  {
    path: '/highlight',
    name: 'Highlight',
    meta: {
      title: 'highlight',
      hideChildren: true
    },
    component: Layout,
    children: [
      {
        path: 'demo1',
        name: 'HighlightDemo1',
        component: () =>
          import(
            /* webpackChunkName: "highlight-demo1" */ '@/views/highlight/Highlight.vue'
          )
      }
    ]
  }
]
export { routes }
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  console.log(store.getters)
  if (store.getters.permission_routes.length) {
    next()
  } else {
    store.dispatch('set_routes').then(() => {
      console.log('下一步')
      next()
    })
  }
})

export default router
