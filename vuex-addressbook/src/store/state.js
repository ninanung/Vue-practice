import constant from '../constant.js';
import config from '../config.js';

export default {
    currentView: null,
    mode: 'add',
    contact: { no: "", name: "", tel: "", address: "", photo: "" },
    contactlist: {
        pageno: 1, pagesize: config.PAGESIZE, totalcount: 0, contacts: []
    }
}