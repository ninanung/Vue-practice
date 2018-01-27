import constant from '../constant.js';

export default {
    [constant.LOGIN]: (state, payload) => {
        state.islogin = true;
        state.user.id = payload.id;
        state.user.password = payload.password;
    },
    [constant.LOGOUT]: (state) => {
        state.islogin = false;
        state.user.id = "";
        state.user.password = "";
    },
    [constant.SIGNIN]: (state, payload) => {
        state.IDs.push({
            id: payload.id,
            password: payload.password
        });
        state.islogin = true;
        state.user.id = payload.id;
        state.user.password = payload.password;
    }
}