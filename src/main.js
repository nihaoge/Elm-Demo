import Vue from 'vue'
import App from './App.vue'
  //引入路由
import router from './ronter'

import store from './store'


Vue.config.productionTip = false

new Vue({
  //引入路由
  router,
  store,
  //可以简写成 router,store,

  render: h => h(App),
}).$mount('#app')
