import constant from '../constant.js';

export default {
    [constant.LOGIN]: (state, payload) => {
        state.isLogin = true;
        state.user.id = payload.id;
        state.user.password = payload.password;
    },
    [constant.LOGOUT]: (state) => {
        state.isLogin = false;
        state.user.id = "";
        state.user.password = "";
    },
    [constant.SIGNIN]: (state, payload) => {
        state.IDs.push({
            id: payload.id,
            password: payload.password
        });
        state.isLogin = true;
        state.user.id = payload.id;
        state.user.password = payload.id;
    }
}