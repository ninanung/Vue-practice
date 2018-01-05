import config from './config.js';
import constant from './constant.js';
import axios from 'axios';

export default {
    fetchContacts: function(pageno, pagesize) {
        return axios.get(config.FETCH, { 
            params: {
                pageno: pageno, 
                pagesize: pagesize 
            }
        });
    },
    fetchContactOne: function(no) {
        return axios.get(config.FETCH_ONE.replace("${no}", no));
    },
    addContact: function(contact) {
        return  axios.post(config.ADD, contact);
    },
    updateContact: function(contact) {
        return axios.put(config.UPDATE.replace("${no}", contact.no), contact);
    },
    deleteContact: function(no) {
        return axios.delete(config.DELETE.replace("${no}", no));
    },
    updatePhoto: function(no, file) {
        let data = new FormData();
        data.append("photo", file);
        return axios.post(config.UPDATE_PHOTO.replace("${no}", no), data);
    }
}