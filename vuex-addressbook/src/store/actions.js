import contactapi from '../api/ContactApi';
import constant from '../constant';

export default {
    [constant.ADD_CONTACT_FORM]: (store) => {
        store.commit(constant.ADD_CONTACT_FORM);
    },
    [constant.ADD_CONTACT]: (store, payload) => {
        contactapi.addContact(store.state.contact)
        .then((res) => {
            if(res.data.status == "success") {
                store.dispatch(constant.CANCEL_FORM);
                store.dispatch(constant.FETCH_CONTACTS, { pagno: 1 })
            }
            else {
                console.log("ADD CONTACT ERROR" + res.data);
            }
        })
    },
    [constant.CANCEL_FORM]: (store) => {
        store.commit(constant.CANCEL_FORM);
    },
    [constant.EDIT_CONTACT_FORM]: (store, payload) => {
        contactapi.fetchContactOne(payload.no)
        .then((res) => {
            store.commit(constant.EDIT_CONTACT_FORM, { contact: res.data });
        })
    },
    [constant.UPDATE_CONTACT]: (store, payload) => {
        contactapi.updateContact(store.state.contact)
        .then((res) => {
            if(res.data.status == "success") {
                store.dispatch(constant.CANCEL_FORM);
                store.dispatch(constant.FETCH_CONTACTS, { pageno: store.state.contactlist.pageno })
            }
            else {
                console.log("UPDATE CONTACT ERROR" + res.data);
            }
        })
    },
    [constant.EDIT_PHOTO_FORM]: (store, payload) => {
        contactapi.fetchContactOne(payload.no)
        .then((res) => {
            store.commit(constant.EDIT_PHOTO_FORM, { contact: res.data });
        })
    },
    [constant.UPDATE_PHOTO]: (store, payload) => {
        contactapi.updatePhoto(payload.no, payload.file)
        .then((res) => {
            store.dispatch(constant.CANCEL_FORM);
            store.dispatch(constant.FETCH_CONTACTS, { pageno: store.state.contactlist.pageno});
        })
    },
    [constant.FETCH_CONTACTS]: (store, payload) => {
        let pageno;
        if(typeof payload == "undefind" || typeof payloadno == "undefind") {
            pageno = 1;
        }
        else {
            pageno = payload.pageno;
        }
        const pagesize = store.state.contactlist.pagesize;
        contactapi.fetchContacts(pageno, pagesize)
        .then((res) => {
            store.commit(constant.FETCH_CONTACTS, { contactlist: res.data });
        })
    },
    [constant.CANCEL_FORM]: (store) => {
        store.commit(constant.CANCEL_FORM);
    },
    [constant.DELETE_CONTACT]: (store, payload) => {
        contactapi.deleteContact(payload.no)
        .then((res) => {
            store.commit(constant.FETCH_CONTACTS, { pageno: store.state.contactlist.pageno });
        })
    },
    [constant.CHANGE_MODE]: (store, payload) => {
        store.commit(constant.CHANGE_MODE, { mode: payload.mode });
    }
}