<template>
<li>


    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
</li>
</template>

<script>
export default {
 data(){
   return {
     isShow: false,
     bgColor: 'white'
   }
 },


  methods: {
    handleEnter(isEnter){
      if(isEnter){
        this.isShow = true
        this.bgColor = 'gray'
      }else{
        this.isShow =false
        this.bgColor = 'white'
      }
    },
    deleteItem(){
      this.$store.dispatch('deleteTodo',this.index)
    }
  }
}
</script>

<style scoped>

</style>