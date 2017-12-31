import Vue from "vue";
import Vuex from "vuex";
import constant from "../constant";
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todolist: [
            { todo: "play game", done: false },
            { todo: "walkingwith mungje", done: false },
            { todo: "study Vue", done: false}
        ]
    },
    mutations: {
        [constant.ADD_TODO]: (state, payload) => {
            if(payload.todo !== "") {
                state.todolist.push({
                    todo: payload.todo,
                    done: false
                });
            }
        },
        [constant.DELETE_TODO]: (state, payload) => {
            state.todolist.splice(payload.index, 1);
        },
        [constant.DONE_TOGGLE]: (state, payload) => {
            let doneState = state.todolist[payload.index].done;
            state.todolist[payload.index].done = !doneState;
        }
    }
});

export default store;