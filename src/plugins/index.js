import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import './info.js'

export default {
  install(Vue) {
    Vue.use(ElementUI, { locale })
  }
}
