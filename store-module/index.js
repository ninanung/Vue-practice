import Vue from 'vue';
import Vuex from 'vuex';
import constant from './constant.js';
import module from './module.js';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        keywordlist: []
    },
    mutations: {
        [constant.ADD_KEYWORD]: (state, payload) => {
            state.keywordlist.splice(0, 0, payload.name);
        }
    },
    actions: {
        [constant.ADD_KEYWORD]: (store, payload) => {
            store.commit(constant.ADD_KEYWORD, payload);
        }
    },
    modules: { m1: module }
})