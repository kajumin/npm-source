import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import plugin from '@/plugins/index'
import './styles.scss'
import '@/styles/base.scss'
import '@/styles/layout.scss'

console.log('process.env', process.env)
Promise.resolve('abc12').then(res => {
  console.log('res', res)
})

function p1 () {
  return new Promise((resolve) => {
    resolve(1)
  })
}
async function fun12() {
  const p = await p1()
  console.log('fun12', p)
}
fun12()

Vue.use(plugin)
Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV === 'development'
Vue.prototype.$config = {
  ENV: process.env.NODE_ENV
}

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
