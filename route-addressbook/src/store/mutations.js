import constant from '../constant.js';

export default {
    [constant.FETCH_CONTACTS]: (state, payload) => {
        state.contactlist = payload.contactlist;
    },
    [constant.INITIALIZE_CONTACT_ONE]: (state, payload) => {
        state.contact = { no: "", name: '', tel: '', address: '', photo: '' };
    },
    [constant.FETCH_CONTACT_ONE]: (state, payload) => {
        state.contact = payload.contact;
    }
}