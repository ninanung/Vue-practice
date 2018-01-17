import config from '../config.js';

export default {
    contact: {
        no: 0, name: "", tel: "", address: "", photo: "" 
    },
    contactlist: {
        pageno: 1, pagesize: config.PAGESIZE, totalcount: 0, contacts: []
    }
}