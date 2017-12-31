import Vue from 'vue'
import TodoList from './component/TodoList.vue';
import store from './store/index.js';

new Vue({
  store,
  el: '#app',
  render: h => h(TodoList)
})
