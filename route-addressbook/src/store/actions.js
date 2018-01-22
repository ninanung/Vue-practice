import constant from '../constant.js';
import contactapi from '../api/ContactApi.js';

export default {
    [constant.CHANGE_ISLOADING]: (store, payload) => {
        store.commit(constant.CHANGE_ISLOADING, payload);
    },
    [constant.FETCH_CONTACTS]: (store, payload) => {
        let pageno;
        if(typeof payload === 'undefinded' || typeof payload.pageno === 'undefinded') {
            pageno = 1;
        }
        else {
            pageno = payload.pageno;
        }
        let pagesize = 5;
        store.dispatch(constant.CHANGE_ISLOADING, { isloading: true });
        contactapi.fetchContacts(pageno, pagesize)
        .then((res) => {
            store.commit(constant.FETCH_CONTACTS, { contactlist: res.data });
            store.dispatch(constant.CHANGE_ISLOADING, { isloading: false });
        })
    },
    [constant.ADD_CONTACT]: (store) => {
        store.dispatch(constant.CHANGE_ISLOADING, { isloading: true });
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
        store.dispatch(constant.CHANGE_ISLOADING, { isloading: true });
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
        store.dispatch(constant.CHANGE_ISLOADING, { isloading: true });
        contactapi.updatePhoto(payload.no, payload.file)
        .then((res) => {
            store.dispatch(constant.FETCH_CONTACTS, { pageno: currentpageno });
        });
    },
    [constant.DELETE_CONTACT]: (store, payload) => {
        const currentpageno = store.state.contactlist.pageno;
        store.dispatch(constant.CHANGE_ISLOADING, { isloading: true });
        contactapi.deleteContact(payload.no)
        .then((res) => {
            store.dispatch(constant.FETCH_CONTACTS, { pageno: currentpageno });
        });
    },
    [constant.FETCH_CONTACT_ONE]: (store, payload) => {
        store.dispatch(constant.CHANGE_ISLOADING, { isloading: true });
        contactapi.fetchContactOne(payload.no) 
        .then((res) => {
            store.commit(constant.FETCH_CONTACT_ONE, { contact: res.data });
            store.dispatch(constant.CHANGE_ISLOADING, { isloading: false });
        })
    },
    [constant.INITIALIZE_CONTACT_ONE]: (store) => {
        store.dispatch(constant.CHANGE_ISLOADING, { isloading: true });
        store.commit(constant.INITIALIZE_CONTACT_ONE);
    }
}