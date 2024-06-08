const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})


module.exports = {
  devServer: {
    historyApiFallback: true,
    css: {
      extract: {
        ignoreOrder: true,
      },
      loaderOptions: {
        sass: {
          additionalData: '@import "@/assets/scss/_variables.scss";',
        },
      },
    },
  }
};


