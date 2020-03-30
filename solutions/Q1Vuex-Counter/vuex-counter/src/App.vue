<template>
<div>
  <p>click {{$store.state.count}} times, count is {{evenOrOdd}}</p>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
  <button @click="incrementIfOdd">如果奇数则增加</button>
  <button @click="incrementAsync">异步过1秒增加</button>
</div>
</template>

<script>

export default {
  name: 'App',
  computed:{
    evenOrOdd(){
        return this.$store.getters.evenOrOdd  //不需要调用，只需要读取属性值。所以不需要加括号
    }
  },
  methods:{
    //增加
    increment(){
      //通知vuex去增加
      this.$store.dispatch('increment',1) //触发store中的对应的action。aciton的名跟这个相同
    },
    //减少
    decrement(){
      this.$store.dispatch('decrement',1)
    },
    //如果是奇数才增加
    incrementIfOdd(){
      this.$store.dispatch('incrementIfOdd',1)
    },
    //过1s才增加
    incrementAsync(){
      this.$store.dispatch('incrementAsync',1)
    }


  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
