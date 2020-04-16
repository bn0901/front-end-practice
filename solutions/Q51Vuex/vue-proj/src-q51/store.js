/*
vuex的核心管理对象模块：store
最终向外暴露的就是store，怎么产生store对象呢？
 */

import Vue from 'vue' //要用vuex插件，必然要引用vue
import Vuex from 'vuex'

Vue.use(Vuex)   //声明使用vuex

// 状态对象
const state = { //初始化状态
  count: 0
}

// 包含多个更新state函数的对象
const mutations = {
    // 增加的mutation 函数！
    INCREMENT(state){
        state.count++
    },
    //减少的mutation 函数！
    DECREMENT(state){
        state.count--
    }
}

//包含多个对应事件回调函数的对象
const actions = {
    //增加的 函数！ 一个函数就是一个aciton。要和dispatch同名
    increment({commit},data) {
        //提交增加的mutation
        commit('INCREMENT',data)
    },
    decrement({commit},data) {
        //提交增加的mutation
        commit('DECREMENT',data)
    },
    incrementIfOdd({commit,state}){ //{}里面除了自带commit方法，还带state属性可用
        if(state.count%2===1){
            commit('INCREMENT')
        }
    },
    incrementAsync({commit}){
        // 在actions里直接可以执行异步代码
        setTimeout(()=>{
            commit('INCREMENT')
        },1000)
    }

}

//包含多个getter计算属性函数的对象
const getters = {
    //在这里定义一个函数！函数！
    evenOrOdd(state) {  // 这个state是vuex管理的，就写着就能用。即使state定义在另一个文件也行
        return state.count%2 ===0? '偶数':'奇数'
    }
}

export default new Vuex.Store({
    state, //状态对象
    mutations, // 包含多个更新state函数的对象
    actions, //包含多个对应事件回调函数的对象
    getters //包含多个getter计算属性函数的对象
})