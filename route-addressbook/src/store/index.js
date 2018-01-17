import Vuex from 'vuex';
import Vue from 'vue';
import ES6promise from 'es6-promise';
import state from './state.js';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);
ES6promise.polyfill();

const store = new Vuex.store({
    state,
    mutations,
    actions
});

export default store;