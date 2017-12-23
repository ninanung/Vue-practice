import Vue from 'vue'
import TodoList from './component/TodoList.vue';

new Vue({
  el: '#app',
  render: h => h(TodoList)
})
