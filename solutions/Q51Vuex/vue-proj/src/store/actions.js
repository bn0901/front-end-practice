
import { ADD_TODO, CLEAR_ALL_COMPLETED, DELETE_TODO, SELECT_ALL_TODOS,RECEIVE_TODOS } from './mutation-types'
import storageUtil from '../utils/storageUtil'

export default {
  addTodo({commit}, todo){
    // 提交对mutation的请求
    commit(ADD_TODO, {todo})  // 用{}就是对象把view传过来的参数包起来，包成对象格式
  },

  deleteTodo({commit},index){
    commit(DELETE_TODO,{index}) // 无论这个数据什么类型，都要用对象给它括起来
  },

  selectAllTodos({commit},check){
    commit(SELECT_ALL_TODOS,{check})
  },

  clearAllCompleted({commit}){
    commit(CLEAR_ALL_COMPLETED)
  },

  // 异步获取todos并更新状态
  reqTodo({commit}){
    //模拟
    setTimeout(()=>{
      // 读取数据
      const todos = storageUtil.readTodos()
      //提交mutation
      commit(RECEIVE_TODOS,todos)
    },1000)
  }
}
