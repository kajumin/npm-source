import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store/index.js'

import Layout from '@/layout/Layout.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    meta: {
      title: 'home',
      hideChildren: true
    },
    component: Layout,
    redirect: { name: 'Home' },
    children: [
      {
        path: 'home',
        name: 'Home',
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
      title: 'vue-count-to'
    },
    component: Layout,
    redirect: { name: 'CountToDemo1' },
    children: [
      {
        path: 'demo1',
        name: 'CountToDemo1',
        meta: {
          title: 'demo1'
        },
        component: () =>
          import(
            /* webpackChunkName: "vue-count-to-demo" */ '@/views/count-to/CountTo.vue'
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
    redirect: { name: 'ClipboardDemo1' },
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
    redirect: {
      name: 'Md5Demo1'
    },
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
      title: 'qrcode'
    },
    component: Layout,
    redirect: {
      name: 'QrcodeDemo1'
    },
    children: [
      {
        path: 'demo1',
        name: 'QrcodeDemo1',
        meta: {
          title: 'demo1'
        },
        component: () =>
          import(
            /* webpackChunkName: "qrcode-demo1" */ '@/views/qrcode/Qrcode.vue'
          )
      },
      {
        path: 'demo2',
        name: 'QrcodeDemo2',
        meta: {
          title: 'demo2'
        },
        component: () =>
          import(
            /* webpackChunkName: "qrcode-demo2" */ '@/views/qrcode/Qriously.vue'
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
        path: 'demo1',
        name: 'PdfDemo1',
        meta: {
          title: 'pdf-demo1'
        },
        component: () =>
          import(/* webpackChunkName: "pdf-demo1" */ '@/views/pdf/Pdf.vue')
      },
      {
        path: 'demo2',
        name: 'PdfDemo2',
        meta: {
          title: 'pdf-demo2'
        },
        component: () =>
          import(/* webpackChunkName: "pdf-demo2" */ '@/views/pdf/Pdf2.vue')
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
    redirect: {
      name: 'HighlightDemo1'
    },
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
  },
  {
    path: '/lazyload',
    name: 'Lazyload',
    meta: {
      title: 'lazyload',
      hideChildren: true
    },
    component: Layout,
    redirect: {
      name: 'LazyloadDemo1'
    },
    children: [
      {
        path: 'demo1',
        name: 'LazyloadDemo1',
        component: () =>
          import(
            /* webpackChunkName: "lazyload-demo1" */ '@/views/lazyload/demo1.vue'
          )
      }
    ]
  },
  {
    path: '/scroller',
    name: 'Scroller',
    meta: {
      title: 'scroller',
      hideChildren: true
    },
    component: Layout,
    redirect: {
      name: 'ScrollerDemo1'
    },
    children: [
      {
        path: 'demo1',
        name: 'ScrollerDemo1',
        component: () =>
          import(
            /* webpackChunkName: "scroller-demo1" */ '@/views/scroller/demo1.vue'
          )
      }
    ]
  },
  {
    path: '/slot',
    name: 'Slot',
    meta: {
      title: 'slot',
      hideChildren: true
    },
    component: Layout,
    redirect: {
      name: 'SlotDemo1'
    },
    children: [
      {
        path: 'demo1',
        name: 'SlotDemo1',
        component: () =>
          import(
            /* webpackChunkName: "slot-demo1" */ '@/views/slot/demo1.vue'
          )
      }
    ]
  },
  {
    path: '/lodash',
    name: 'Lodash',
    component: Layout,
    meta: {
      title: 'Lodash'
    },
    redirect: { name: 'LodashDemo1' },
    children: [
      {
        path: 'demo1',
        name: 'LodashDemo1',
        meta: {
          title: 'demo1'
        },
        component: () =>
          import(
            /* webpackChunkName: "lodash-demo1" */ '@/views/lodash/Lodash.vue'
          )
      },
      {
        path: 'demo2',
        name: 'LodashDemo2',
        meta: {
          title: 'demo2'
        },
        component: () =>
          import(
            /* webpackChunkName: "lodash-demo2" */ '@/views/lodash/Debounce.vue'
          )
      },
      {
        path: 'demo3',
        name: 'LodashDemo3',
        meta: {
          title: 'demo3'
        },
        component: () =>
          import(
            /* webpackChunkName: "lodash-demo3" */ '@/views/lodash/FlowRight.vue'
          )
      }
    ]
  },
  {
    path: '/keepalive',
    name: 'Keepalive',
    component: Layout,
    meta: {
      title: 'keepalive'
    },
    redirect: { name: 'KeepaliveDemo1' },
    children: [
      {
        path: 'demo1',
        name: 'KeepaliveDemo1',
        meta: {
          title: 'demo1',
          keepalive: true
        },
        component: () =>
          import(
            /* webpackChunkName: "keepalive" */ '@/views/keepalive/demo1.vue'
          )
      },
      {
        path: 'demo2',
        name: 'KeepaliveDemo2',
        meta: {
          title: 'demo2',
          keepalive: true
        },
        component: () =>
          import(
            /* webpackChunkName: "keepalive" */ '@/views/keepalive/demo2.vue'
          )
      },
      {
        path: 'demo3',
        name: 'KeepaliveDemo3',
        meta: {
          title: 'demo3',
          keepalive: true
        },
        component: () =>
          import(
            /* webpackChunkName: "keepalive" */ '@/views/keepalive/demo3.vue'
          )
      },
      {
        path: 'demo4',
        name: 'KeepaliveDemo4',
        meta: {
          title: 'demo4',
          keepalive: true
        },
        component: () =>
          import(
            /* webpackChunkName: "keepalive" */ '@/views/keepalive/demo4.vue'
          )
      },
      {
        path: 'demo5',
        name: 'KeepaliveDemo5',
        meta: {
          title: 'demo5',
          keepalive: true
        },
        component: () =>
          import(
            /* webpackChunkName: "keepalive" */ '@/views/keepalive/demo5.vue'
          )
      },
      {
        path: 'demo6',
        name: 'KeepaliveDemo6',
        meta: {
          title: 'demo6',
          keepalive: true
        },
        component: () =>
          import(
            /* webpackChunkName: "keepalive" */ '@/views/keepalive/demo6.vue'
          )
      },
      {
        path: 'demo7',
        name: 'KeepaliveDemo7',
        meta: {
          title: 'demo7',
          keepalive: true
        },
        component: () =>
          import(
            /* webpackChunkName: "keepalive" */ '@/views/keepalive/demo7.vue'
          )
      },
      {
        path: 'demo8',
        name: 'KeepaliveDemo8',
        meta: {
          title: 'demo8',
          keepalive: true
        },
        component: () =>
          import(
            /* webpackChunkName: "keepalive" */ '@/views/keepalive/demo8.vue'
          )
      },
      {
        path: 'demo9',
        name: 'KeepaliveDemo9',
        meta: {
          title: 'demo9',
          keepalive: true
        },
        component: () =>
          import(
            /* webpackChunkName: "keepalive" */ '@/views/keepalive/demo9.vue'
          )
      },
      {
        path: 'demo10',
        name: 'KeepaliveDemo10',
        meta: {
          title: 'demo10',
          keepalive: true
        },
        component: () =>
          import(
            /* webpackChunkName: "keepalive" */ '@/views/keepalive/demo10.vue'
          )
      },
      {
        path: 'demo11',
        name: 'KeepaliveDemo11',
        meta: {
          title: 'demo11',
          keepalive: true
        },
        component: () =>
          import(
            /* webpackChunkName: "keepalive" */ '@/views/keepalive/demo11.vue'
          )
      },
      {
        path: 'demo12',
        name: 'KeepaliveDemo12',
        meta: {
          title: 'demo12',
          keepalive: true
        },
        component: () =>
          import(
            /* webpackChunkName: "keepalive" */ '@/views/keepalive/demo12.vue'
          )
      },
      {
        path: 'demo13',
        name: 'KeepaliveDemo13',
        meta: {
          title: 'demo13',
          keepalive: true
        },
        component: () =>
          import(
            /* webpackChunkName: "keepalive" */ '@/views/keepalive/demo13.vue'
          )
      },
      {
        path: 'demo14',
        name: 'KeepaliveDemo14',
        meta: {
          title: 'demo14',
          keepalive: true
        },
        component: () =>
          import(
            /* webpackChunkName: "keepalive" */ '@/views/keepalive/demo14.vue'
          )
      }
    ]
  }
]

function getMenuList(routes, menuList = {}, lastName = '') {
  routes.forEach((item) => {
    if (item.children) {
      menuList[item.name] = []
      getMenuList(item.children, menuList[item.name], lastName + item.name)
    } else {
      menuList.push({ path: item.name, name: item.name })
    }
  })
  return menuList
}
const menuList = getMenuList(routes)
console.log(menuList, 'menuList')

export { routes, menuList }

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  console.log('to', to, store.getters.permission_routes.length)
  if (store.getters.permission_routes.length) {
    next()
  } else {
    store.dispatch('set_routes').then(() => {
      next()
    })
  }
})

export default router
