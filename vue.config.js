module.exports = {
    devServer: {
      proxy: {
        '/restapi': {
          target: 'https://h5.ele.me',
          changeOrigin: true
        },
        '/soso': {
          target: 'https://c.y.qq.com',
          changeOrigin: true
        }
      }
    }
  }