<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <todos-header />
            <List/>
            <todos-footer/>
        </div>
    </div>
</template>

<script>
import Header from './components/Header'
import Main from './components/Main.vue'
import Footer from './components/Footer'
import storageUtil from './utils/stotageUtil'

export default {
  name: 'App',
  mounted () {
    this.$store.dispatch('reqTodos')
  },

  components: {
    TodoHeader: Header,
    TodoMain: Main,
    TodoFooter: Footer
  }
}
</script>

<style>
 .todo-container{
     width: 600px;
 }
</style>
