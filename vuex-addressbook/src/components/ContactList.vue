<template>
    <div>
        <p class="addnew">
            <button class="btn btn-primary" @click="addContact">Add New Address</button>
        </p>
        <div id="example">
            <table id="list" class="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Tel</td>
                        <td>Address</td>
                        <td>Photo</td>
                        <td>Edit/Delete</td>
                    </tr>
                </thead>
                <tbody id="contacts">
                    <tr v-for="contact in contactlist.contacts">
                        <td>{{ contact.name }}</td>
                        <td>{{ contact.tel }}</td>
                        <td>{{ contact.address }}</td>
                        <td><img class="thumbnail" :src="contact.photo" @click="editPhoto(contact.no)"/></td>
                        <td>
                            <button class="btn btn-primary" @click="editContact(contact.no)">Edit</button>
                            <button class="btn btn-primary" @click="deleteContact(contact.no)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import constant from '../constant.js';
    import { mapState } from 'vuex';

    export default {
        name: 'contactList',
        computed: mapState([ 'contactlist' ]),
        methods: {
            addContact: function() {
                this.$store.dispatch(constant.ADD_CONTACT_FORM); 
            },
            editContact: function(no) {
                this.$store.dispatch(constant.EDIT_CONTACT_FORM, { no: no });
            },
            deleteContact: function(no) {
                if(confirm("REALLY WANT TO DELETE???????") == true) {
                    this.$store.dispatch(constant.DELETE_CONTACT, { no: no });
                }
            },
            editPhoto: function(no) {
                this.$store.dispatch(constant.EDIT_PHOTO_FORM, { no: no });
            }
        }
    }
</script>

<style scoped>
    .addnew {
        margin: 10px auto;
        max-width: 820px;
        min-width: 820px;
        padding: 40px 0 0 0;
        text-align: left;
    }
    #example {
        margin: 10px auto;
        max-width: 820px;
        min-width: 820px;
        padding: 0;
        position: relative;
        font: 13px "verdana";
    }
    #example .long {
        width: 100%;
    }
    #example .short {
        width: 50%;
    }
    #example input, textarea, select {
        box-sizing: border-box;
        border: 1px solid #BEBEBE;
        padding: 7px;
        margin: 0;
        outline: none; 
    }
    #list {
        width: 800px;
        font: 13px "verdana";
    }
    #list thead tr {
        color: yellow;
        background: purple;
    }
    #list th:nth-child(5n+1), #list td:nth-child(5n+1) {
        width: 200px;
    }
    #list th:nth-child(5n+2), #list td:nth-child(5n+2) {
        width: 150px;
    }
    #list th:nth-child(5n+3), #list td:nth-child(5n+3) {
        width: 250px;
    }
    #list th:nth-child(5n+4), #list td:nth-child(5n+4) {
        width: 60px;
    }
    #list th:nth-child(5n), #list td:nth-child(5n) {
        width: 150px;
    }
    #list th {
        padding: 10px 5px 10px 5px;
    }
    #list tr {
        border-bottom: solid 1px black;
    }
    #list td, #list th {
        text-align: center;
        vertical-align: middle;
    }
    img.thumbnail {
        width: 48px;
        height: 48px;
        margin-top: auto;
        margin-bottom: auto;
        display: block;
        cursor: pointer;
    }
</style>