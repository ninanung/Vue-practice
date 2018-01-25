import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueRouter from 'vue-router';

import Login from './components/Login.vue';
import Home from './components/Home.vue';
import Signin from './components/Signin.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/home", name: "home", component: Home },
    { path: "/login", name: "login", component: Login },
    { path: "/signin", name: "signin", component: Signin },
  ]
})

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
