import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import state from './state';
import es6Promise from 'es6-promise';

es6Promise.polyfill();
Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    mutations,
    actions
});

export default store;