import constant from '../constant.js';
import contactapi from '../api/ContactApi.js';

export default {
    [constant.FETCH_CONTACTS]: (store, payload) => {
        let pageno;
        if(typeof payload === 'undefinded' || typeof payload.pageno === 'undefinded') {
            pageno = 1;
        }
        else {
            pageno = payload.pageno;
        }
        let pagesize = 5;
        contactapi.fetchContacts(pageno, pagesize)
        .then((res) => {
            store.commit(constant.FETCH_CONTACTS, { contactlist: res.data });
        })
    },
    [constant.ADD_CONTACT]: (store) => {
        contactapi.addContact(store.state.contact) 
        .then((res) => {
            if(res.data.status == "success") {
                store.dispatch(constant.FETCH_CONTACTS, { pageno: 1 });
            }
            else {
                console.log("ADD_CONTACT_FAIL");
            }
        }); 
    },
    [constant.UPDATE_CONTACT]: (store) => {
        contactapi.updateContact(store.state.contact) 
        .then((res) => {
            if(res.data.status == "success") {
                store.dispatch(constant.FETCH_CONTACTS, { pageno: 1 });
            }
            else {
                console.log("UPDATE_CONTACT_FAIL");
            }
        });
    },
    [constant.UPDATE_PHOTO]: (store, payload) => {
        const currentpageno = store.state.contactlist.pageno;
        contactapi.updatePhoto(payload.no, payload.file)
        .then((res) => {
            store.dispatch(constant.FETCH_CONTACTS, { pageno: currentpageno });
        });
    },
    [constant.DELETE_CONTACT]: (store, payload) => {
        const currentpageno = store.state.contactlist.pageno;
        contactapi.deleteContact(payload.no)
        .then((res) => {
            store.dispatch(constant.FETCH_CONTACTS, { pageno: currentpageno });
        });
    },
    [constant.FETCH_CONTACT_ONE]: (store, payload) => {
        contactapi.fetchContactOne(payload.no) 
        .then((res) => {
            store.commit(constant.FETCH_CONTACT_ONE, { contact: res.data });
        })
    },
    [constant.INITIALIZE_CONTACT_ONE]: (store) => {
        store.commit(constant.INITIALIZE_CONTACT_ONE);
    }
}