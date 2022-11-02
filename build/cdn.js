const cdn = {
  // 开发环境
  dev: {
    css: [],
    js: []
  },
  // 生产环境
  build: {
    css: [],
    // css: ['https://photo.feibaos.cn/webs/cdn/nprogress@0.2.0.min.css'],
    js: [
      'https://photo.feibaos.cn/webs/cdn/vue@2.6.11.min.js',
      'https://photo.feibaos.cn/webs/cdn/vue-router@3.2.0.min.js',
      'https://photo.feibaos.cn/webs/cdn/vuex@3.4.0.min.js',
      'https://photo.feibaos.cn/webs/cdn/axios@0.21.1.min.js',
      // 'https://photo.feibaos.cn/webs/cdn/nprogress@0.2.0.min.js',
      'https://photo.feibaos.cn/webs/cdn/moment@2.24.0.min.js',
      'https://photo.feibaos.cn/webs/cdn/moment@2.24.0.locale.zh-cn.js'
      // 'https://photo.feibaos.cn/webs/cdn/echarts@5.0.2.min.js'
    ]
  }
}
// cdn预加载使用
const externals = {
  vue: 'Vue',
  'vue-router': 'VueRouter',
  vuex: 'Vuex',
  // nprogress: 'NProgress',
  moment: 'moment',
  axios: 'axios'
  // echarts: 'echarts',
  // 'element-ui': 'ELEMENT'
}

module.exports = {
  cdn,
  externals
}
