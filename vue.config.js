const webpackBundleAnalyzer =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const smp = new SpeedMeasurePlugin()
const path = require('path')

const isProd = process.env.NODE_ENV === 'production'
const {
  BUILD_ANALAYZER,
  SOURCE_MAP,
  IMAGE_COMPRESS,
  CDN_OPEN,
  DLL_OPNE
} = require('./build/config')
const { cdn, externals } = require('./build/cdn')

console.log('isProd', isProd)
const config = {
  // vue-cli使用dll
  pluginOptions: {
    dll: {
      entry: ['vue', 'vue-router', 'vuex', 'axios', 'element-ui'],
      output: path.resolve(__dirname, 'dll'),
      cacheFilePath: path.resolve(__dirname, 'public'),
      open: !isProd && DLL_OPNE,
      inject: true
    }
  },
  productionSourceMap: isProd && SOURCE_MAP,
  publicPath: '/',
  configureWebpack: smp.wrap({
    devtool: '',
    externals: isProd && CDN_OPEN ? externals : []
  }),
  chainWebpack: (config) => {
    if (isProd && (BUILD_ANALAYZER || DLL_OPNE)) {
      config.plugin('webpack-report').use(webpackBundleAnalyzer)
    }
    // if (isProd) {
    //   const lodash = config.module.rule('loaders')
    //   lodash.exclude.add(/node_modules/)
    //   lodash.test(/^lodash\.js$/)
    //   .loader('babel-loader')
    //   .options({
    //     'query': {
    //       'plugins': ['lodash'],
    //       'presets': [['@babel/env', { 'targets': { 'node': 6 } }]]
    //     }
    //   })
    // }
    // config.plugin('lodashReplace').use(new LodashModuleReplacementPlugin())
    config.plugin('copy').tap((args) => {
      // console.log('args', args)
      return args
    })
    config.plugin('define').tap((args) => {
      Object.assign(args[0]['process.env'], {
        VERSION: `'${require('./package.json').version}'`,
        BUILD_DATE: `'${new Date().toLocaleString('zh-cn', { hour12: false })}'`
      })
      // console.log('args', args)
      return args
    })
    config.plugin('html').tap((args) => {
      args[0].title = 'webpack优化'
      if (isProd && CDN_OPEN) {
        args[0].cdn = cdn.build
      } else {
        args[0].cdn = cdn.dev
      }
      return args
    })
    if (isProd && IMAGE_COMPRESS) {
      config.module
        .rule('images')
        // .exclude.add(resolve('src/assets/icons')) // 排除icons目录，这些图标已用 svg-sprite-loader 处理，打包成 svg-sprite 了
        // .end()
        .use('url-loader')
        .tap((options) => ({
          limit: 10240, // 稍微改大了点
          fallback: {
            // loader: require.resolve('file-loader'),
            loader: 'file-loader',
            options: {
              // 在这里修改file-loader的配置
              // 直接把outputPath的目录加上，虽然语义没分开清晰但比较简洁
              name: 'img/[name].[hash:8].[ext]',
              esModule: false // 低版本默认为false，高版本默认为true 这里为6.2.0为高本版本所以要手动设置为false
            }
          }
        }))
        .end()
        .use('image-webpack-loader')
        .loader('image-webpack-loader')
        .options({
          mozjpeg: { progressive: true, quality: 50 }, // 压缩JPEG图像
          optipng: { enabled: true }, // 压缩PNG图像
          pngquant: { quality: [0.5, 0.65], speed: 4 }, // 压缩PNG图像
          gifsicle: { interlaced: false } // 压缩GIF图像
        })
        .end()
        .enforce('post') // 表示先执行配置在下面那个loader，即image-webpack-loader
    }

    if (isProd) {
      config.optimization.minimizer('terser').tap((args) => {
        // console.log('args', args)
        args[0].cache = false
        args[0].parallel = false
        args[0].terserOptions.compress.drop_console = true
        args[0].terserOptions.compress.pure_funcs = ['console.log']
        return args
      })
      config.plugins.delete('prefetch')
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
            name: 'split-qrcodejs2',
            minChunks: 1,
            priority: 2,
            enforce: true,
            reuseExistingChunk: true,
            chunks: 'all'
          },
          wangeditor: {
            test: /[\\/]node_modules[\\/](wangeditor)[\\/]/,
            name: 'split-wangeditor',
            minChunks: 1,
            priority: 2,
            enforce: true,
            reuseExistingChunk: true,
            chunks: 'all'
          },
          clipboard: {
            test: /[\\/]node_modules[\\/](clipboard)[\\/]/,
            name: 'split-clipboard',
            minChunks: 1,
            priority: 2,
            enforce: true,
            reuseExistingChunk: true,
            chunks: 'all'
          },
          qs: {
            test: /[\\/]node_modules[\\/](qs)[\\/]/,
            name: 'split-qs',
            minChunks: 1,
            priority: 2,
            enforce: true,
            reuseExistingChunk: true,
            chunks: 'all'
          },
          vuePdf: {
            test: /[\\/]node_modules[\\/](vue-pdf)[\\/]/,
            name: 'split-vue-pdf',
            minChunks: 1,
            priority: 2,
            enforce: true,
            reuseExistingChunk: true,
            chunks: 'all'
          },
          VueCountTo: {
            test: /[\\/]node_modules[\\/](vue-count-to)[\\/]/,
            name: 'split-vue-count-to',
            minChunks: 1,
            priority: 2,
            enforce: true,
            reuseExistingChunk: true,
            chunks: 'all'
          },
          elementUI: {
            test: /[\\/]node_modules[\\/](element-ui)[\\/]/,
            name: 'split-elementUI',
            minChunks: 1,
            priority: 3,
            enforce: true,
            reuseExistingChunk: true,
            chunks: 'all'
          },
          vrx: {
            test: /[\\/]node_modules[\\/](vue|vue-router|vuex|axios|js-md5)[\\/]/,
            name: 'split-libs',
            minChunks: 1,
            priority: 3,
            enforce: true,
            reuseExistingChunk: true,
            chunks: 'all'
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
}

module.exports = config
// module.exports = smp.wrap(config)
