import constant from '../constant';
import config from '../config';

export default {
    currentView: null,
    mode: 'add',
    contact: { no: 0, name: "", tel: "", address: "", photo: ""},
    contactlist: {
        pageno: 1, pagesize: config.PAGESIZE, totalcount: 0, contacts: []
    }
}