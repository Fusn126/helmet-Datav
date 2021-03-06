import Vue from 'vue'
import App from './App.vue'
import './assets/common.less'
import dataV from '@jiaminghi/data-view'
import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
  forceNew: true,
  debug: true,
  connection: 'http://127.0.0.1:9000/testnamespace'
}))

Vue.config.productionTip = false

Vue.use(dataV)

new Vue({
  render: h => h(App)
}).$mount('#app')
