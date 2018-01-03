import Vue from 'vue';
import App from './App.vue';
import store from './store';
import es6Promise from 'es6-promise';

es6Promise.polyfill();

new Vue({
  store,
  el: '#app',
  render: h => h(App)
})
