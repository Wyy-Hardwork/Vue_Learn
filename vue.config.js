const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  pwa: {//改图标
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  },
  devServer: {
    proxy: {
      '/base': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,//是否跨域
        pathRewrite: {
          '^/base': ''
        },
        header:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      },
      '/no': {
        target: 'https://www.linovelib.com',//接口
        changeOrigin: true,//是否跨域
        pathRewrite: {
          '^/no': ''//url中带有apis标识才跨域跨域,pathRewrite是为了防止url都要加上apis才跨
        },
        headers: {
          "Referer": "https://www.linovelib.com",
        }
      },
      '/du': {
        target: 'https://www.dushu.com',
        changeOrigin: true,
        pathRewrite: {
          '^/du': ''
        },
      },
      '/dt': {
        target: 'https://img.dushu.com',
        changeOrigin: true,
        pathRewrite: {
          '^/dt': ''
        },
        headers: {
          "Referer": "https://www.dushu.com/",
        }
      },
      '/ci': {
        target: 'https://www.baidu.com/s?wd=',
        changeOrigin: true,
        pathRewrite: {
          '^/ci': ''
        },
        header:{
          "Referer": "https://www.baidu.com",
        }
      },
    },
  },
  configureWebpack: {//避免pinia不识别
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto'
        }
      ]
    },
  },
  
})

