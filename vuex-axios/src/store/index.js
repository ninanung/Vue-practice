import Vue from 'vue';
import Vuex from 'vuex';
import constant from '../constant.js';
import SearchApi from '../api/SearchApi.js';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        contacts: []
    },
    mutations: {
        [constant.SEARCH_CONTACT]: (state, payload) => {
            state.contacts = payload.contacts;
        }
    },
    actions: {
        [constant.SEARCH_CONTACT]: (store, payload) => {
            SearchApi.searchContact(payload.name)
            .then((res) => {
                store.commit(constant.SEARCH_CONTACT, { contacts: res.data });
            });
        }
    }
})

export default store;