import constant from '../constant.js';

export default {
    [constant.LOGIN]: (store, payload) => {
        store.commit(constant.LOGIN, payload);
    },
    [constant.LOGOUT]: (store) => {
        store.commit(constant.LOGOUT);
    },
    [constant.SIGNIN]: (store, payload) => {
        store.commit(constant.SIGNIN, payload);
    }
}