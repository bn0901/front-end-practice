<template>
    <ul class="todo-main">
        <item v-for="(todo,index) in todos" :key="index"
              :todo="todo" :index="index"> </item>
    </ul>
</template>

<script>
import {mapState} from 'vuex'
import Item from 'Item'
import storageUtil from '../utils/storageUtil'

export default {
  computed: {
    ...mapState(['todos'])
  },
  watch:{  // 监视todos的所有变化
    todos: {
      deep: true, //深度监视
      handler: storageUtil.saveTodos // 保存todos到localstorage
    }
  },

  components:{
    Item
  }
}
</script>

<style scoped>
    .todo-main {
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }

</style>