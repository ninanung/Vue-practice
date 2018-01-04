import constant from './constant.js';
import SearchApi from './SearchApi.js';

export default {
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
                if(res.data.length > 0) {
                    store.dispatch(constant.ADD_KEYWORD, payload);
                }
            });
        }
    }
}