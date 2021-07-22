const isProd = process.env.NODE_ENV === 'production'
const webpackBundleAnalyzer = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
console.log(isProd)
const config = {
  productionSourceMap: false,
  chainWebpack: (config) => {
    if (isProd) {
      config.plugin('webpack-report').use(webpackBundleAnalyzer, [
        {
          analyzerMode: 'static'
        }
      ])
    }
    config.optimization.runtimeChunk('single')
    config.optimization.splitChunks({
      // chunks: 'all',
      // minSize: 300 * 1024,
      // minChunks: 1,
      // maxAsyncRequests: 5,
      // maxInitialRequests: 3,
      // automaticNameDelimiter: '~',
      // name: true,
      cacheGroups: {
        qrcodejs2: {
          test: /[\\/]node_modules[\\/](qrcodejs2)[\\/]/,
          name: 'qrcodejs2',
          minChunks: 1,
          priority: 2,
          enforce: true,
          reuseExistingChunk: true,
          chunks: 'all'
        },
        wangeditor: {
          test: /[\\/]node_modules[\\/](wangeditor)[\\/]/,
          name: 'wangeditor',
          minChunks: 1,
          priority: 3,
          enforce: true,
          reuseExistingChunk: true,
          chunks: 'all'
        },
        qs: {
          test: /[\\/]node_modules[\\/](qs)[\\/]/,
          name: 'qs',
          minChunks: 1,
          priority: 4,
          enforce: true,
          reuseExistingChunk: true,
          chunks: 'all'
        },
        elementUI: {
          test: /[\\/]node_modules[\\/](element-ui)[\\/]/,
          name: 'elementUI',
          minChunks: 1,
          priority: 5,
          enforce: true,
          reuseExistingChunk: true,
          chunks: 'all'
        },
        vuePdf: {
          test: /[\\/]node_modules[\\/](vue-pdf)[\\/]/,
          name: 'vue-pdf',
          minChunks: 1,
          priority: 6,
          enforce: true,
          reuseExistingChunk: true,
          chunks: 'initial'
        },
        clipboard: {
          test: /[\\/]node_modules[\\/](clipboard)[\\/]/,
          name: 'clipboard',
          minChunks: 1,
          priority: 7,
          enforce: true,
          reuseExistingChunk: true,
          chunks: 'initial'
        },
        vrx: {
          test: /[\\/]node_modules[\\/](vue|vue-router|vuex)[\\/]/,
          name: 'vrx',
          minChunks: 1,
          priority: 7,
          enforce: true,
          reuseExistingChunk: true,
          chunks: 'initial'
        },
        // kushUtil: {
        //   test: /[\\/]node_modules[\\/](|@kush)[\\/]/,
        //   name: '@kush',
        //   priority: 4,
        //   enforce: true,
        //   minChunks: 1,
        //   reuseExistingChunk: true
        //   // chunks: "initial"
        // },
        // systemUtil: {
        //   test: /[\\/]src[\\/](class|util|vueReuse)[\\/]/,
        //   name: '@systemUtil',
        //   priority: 5,
        //   enforce: true,
        //   minChunks: 1,
        //   reuseExistingChunk: true
        //   // chunks: "initial"
        // },
        // ar: {
        //   test: /[\\/]src[\\/](api|router)[\\/]/,
        //   name: '@ar',
        //   priority: 6,
        //   enforce: true,
        //   minChunks: 1,
        //   reuseExistingChunk: true,
        //   chunks: 'initial'
        // },
        // as: {
        //   test: /[\\/]src[\\/](assets)[\\/]/,
        //   name: '@as',
        //   priority: 6,
        //   enforce: true,
        //   minChunks: 1,
        //   reuseExistingChunk: true,
        //   chunks: 'initial'
        // },
        // overlayscrollbars: {
        //   test: /[\\/]node_modules[\\/](|overlayscrollbars|overlayscrollbars-vue)[\\/]/,
        //   name: '@overlayscrollbars',
        //   priority: 7,
        //   enforce: true,
        //   minChunks: 1,
        //   reuseExistingChunk: true,
        //   chunks: 'initial'
        // },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    })
  }
}

module.exports = config
