import constant from './constant.js';

export default {
    [constant.ADD_TODO]: (store, payload) => {
        console.log("addTodo");
        store.commit(constant.ADD_TODO, payload);
    },
    [constant.DELETE_TODO]: (store, payload) => {
        console.log("deleteTodo");
        store.commit(constant.DELETE_TODO, payload);
    },
    [constant.DONE_TOGGLE]: (store, payload) => {
        console.log("doneToggle");
        store.commit(constant.DONE_TOGGLE, payload);
    }
}