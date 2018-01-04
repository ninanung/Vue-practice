import constant from './constant.js'

export default {
    [constant.ADD_TODO]: (state, payload) => {
        if(payload.todo !== "") {
            state.todolist.push({ todo: payload.todo, done: payload.done });
        }
    },
    [constant.DONE_TOGGLE]: (state, payload) => {
        let isDone = state.todolist[payload.index].done;
        state.todolist[payload.index].done = !isDone;
    },
    [constant.DELETE_TODO]: (state, payload) => {
        state.todolist.splixe(payload.index, 1);
    }
}