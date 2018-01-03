import axios from 'axios';
import constant from '../constant';

export default {
    searchContact: (name) => {
        return axios.get(constant.BASE_URL + name);
    }
}