const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    proxy: 'http://interview.pluginesia.com/',
  },
  transpileDependencies: true
})
