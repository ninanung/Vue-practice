import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import store from './store';

import Home from './components/Home.vue';
import About from './components/About.vue';
import Contact from './components/ContactList.vue';
import ContactForm from './components/ContactForm.vue';
import UpdatePhoto from './components/UpdatePhoto.vue';
import NotFound from './components/NotFound.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: "/", component: Home },
    { path: "/home", name: 'home', component: Home },
    { path: "/about", name: 'about', component: About },
    { path: "/contacts", name: 'contacts', component: Contact, children: [
      { path: "add", name: 'addcontact', component: ContactForm },
      { path: "update/:no", name: 'updatecontact', component: ContactForm, props: true },
      { path: "photo/:no", name: "updatephoto", component: UpdatePhoto, props: true }
    ]},
    { path: "*", component: NotFound } 
  ]
});

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
