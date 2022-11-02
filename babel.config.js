const isProd = process.env.NODE_ENV === 'production'
const plugins = []

if (isProd) {
  plugins.push('lodash')
}

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins
}
