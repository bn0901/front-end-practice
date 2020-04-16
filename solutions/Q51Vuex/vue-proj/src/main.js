import Vue from 'vue'
import App from './App.vue'
import store from "./store"   //引入

Vue.config.productionTip = false

new Vue({
  // 从语法上，这是箭头函数。所以render它的值是函数。这个函数接收一个参数h(App),参数是函数类型。
  // 这个函数执行接收一个app组件，而且箭头有两个作用，首先代表是箭头后是个函数，同时还代表return 。
  // 所以render渲染函数返回的是h函数执行以后返回的结果
  render: h => h(App),
  store
}).$mount('#app')


// ==========================原写法
// new Vue({
//   el: '#app',
//   components: {
//     App
//   },
//   template: '<App/>',
//   store
// })

// ===========================变形
// render: function (createElement) {
//   return createElement(App)   //创建出<App/>
//
// }
// =========================最终
// render: h=> h(App)
