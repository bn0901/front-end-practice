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
import  {mapGetters,mapState,mapActions} from 'vuex'
export default {
  name: 'App',
  computed:{
    ...mapGetters(['evenOrOdd']),
    ...mapState(['count'])
  },
  methods:{
    ...mapActions(['increment','decrement','incrementIfOdd','incrementAsync'])
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
