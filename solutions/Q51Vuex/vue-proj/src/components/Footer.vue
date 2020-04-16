<template>
    <div class="todo-footer">
        <label>
            <input type="checkbox" v-model="isAllComplete" />
        </label>
        <span>
            <span>-已完成{{completeCount}}</span> / 全部{{totalCount}}
        </span>
        <button class="btn btn-danger" v-show="completeCount"
        @click="clearAllCompleted">清除已完成任务</button>

    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  computed: {
    ...mapGetters(['totalCount','completeCount']),
    isAllComplete: {
      get(){
        return this.$store.getters.isAllComplete
      },
      set(value){ // value boolean类型
        this.$store.dispatch('selectAllTodos',value)
      }
    }
  },
  methods:{
    ...mapActions(['clearAllCompleted'])
  }

}
</script>

<style scoped>

</style>