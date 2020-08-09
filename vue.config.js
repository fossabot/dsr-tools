module.exports = {
  transpileDependencies: ['vuetify'],
  productionSourceMap: false,
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/scss/variables.scss"; @import "~@/scss/color.scss";'
      }
    }
  }
};
