const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  css: { extract: false },
  configureWebpack: {
    externals:
      process.env.NODE_ENV !== 'production'
        ? {}
        : {
            'element-ui': 'element-ui' // 将 Element UI 设置为外部依赖
          }
  }
})
