import Vue from 'vue'
import App from './App.vue'
import store from "./store"   //引入

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store   // 所有组件对象都多了一个属性：$store
}).$mount('#app')
