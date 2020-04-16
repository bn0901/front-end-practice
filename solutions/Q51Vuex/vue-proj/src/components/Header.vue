<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认"
               v-model="inputTodo" @keyup.enter="add"/>

    </div>
</template>

<script>
export default {
  data () {
    return {
      inputTodo: ''  //内部使用，不存在共享问题，不需要vuex管理
    }
  },
  methods: {
    add () {
      const inputTodo = this.inputTodo.trim()
      if (!inputTodo) {
        return
      }
      // 根据输入封装todo对象
      const todo = {
        title: inputTodo,
        complete: false
      }
      // 添加到todos
      this.$store.dispatch('addTodo', todo)
      // 清除输入
      this.inputTodo = ''
    }
  }
}
</script>

<style scoped>

</style>