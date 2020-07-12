module.exports = {
  transpileDependencies: ['vuetify'],
  css: {
    loaderOptions: {
      scss: {
        prependData: `$NODE_ENV: ${process.env.NODE_ENV};`,
      },
    },
  },
};
