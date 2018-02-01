import axios from 'axios';
import constant from './constant.js';
import config from './config.js';

export default {
    login: function(id, password) {
        return axios.post(config.LOGIN, { id: id, password: password });
    },
    signin: function(id, password) {
        return axios.post(config.SIGNIN, { id: id, password: password });
    }
}