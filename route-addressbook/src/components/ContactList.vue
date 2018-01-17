<template>
    <div>
        <p class="addnew">
            <router-link class="btn btn-primary" :to="{ name: 'addcontact' }">New Address</router-link>
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
                    <tr v-for="contact in contactlist.contacts" :key="contact.no">
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
            <div>
                <paginate
                    ref="pagebuttons"
                    :page-count="totalpage"
                    :page-range="7"
                    :margin-pages="3"
                    :click-handler="pageChanged"
                    :prev-text="'Prev'"
                    :next-text="'Next'"
                    :container-class="'pagination'"
                    :page-class="'page-item'">
                </paginate>
            </div>
        </div>
    </div>
</template>

<script>
    import constant from '../constant.js';
    import { mapState } from 'vuex';
    import Paginate from 'vuejs-pagenate';
    import _ from 'lodash';

    export default {
        name: 'contactList',
        components: { Paginate },
        computed: _.extend({
                {
                    totalpage: function() {
                        const totalpage = this.contactlist.totalcount;
                        const pagesize = this.contactlist.pagesize;
                        return Math.floor((totalcount - 1) / pagesize) + 1;
                    }
                }
            }, mapState([ 'contactlist' ])
        ),
        mounted: function() {
            let page = 1;
            if(this.$route.query && this.$route.query.page) {
                page = parseInt(this.$route.query.page);
            }
            this.$route.dispatch(constant.FETCH_CONTACTS, { pageno: page });
            this.$refs.pagebuttons.selected = page - 1;
        },
        beforeRouteUpdate(to, from, next) {
            if(to.query.page && to.query.page != this.contactlist.pageno) {
                let page = to.query.page;
                this.$store.dispatch(constant.FETCH_CONTACTS, { pageno: page });
                this.$refs.pagebuttons.selected = page - 1;
                next();
            }
        },
        methods: {
            pageChanged: function(page) {
                this.$route.push({ name: "contacts", query: { page: page }});
            },
            editContact: function(no) {
                this.$route.push({ name: "updatecontact", params: { no: no }});
            },
            deleteContact: function(no) {
                if(confirm("REALLY WANT TO DELETE??????")) {
                    this.$store(constant.DELETE_CONTACT, { no: no });
                    this.$route.push({ name: 'contacts' });
                }
            },
            editPhoto: function(no) {
                this.$route.push({ name: "updatephoto", params: { no: no }});
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