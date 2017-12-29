<template>
    <div id="container">
        <div class="page-header">
            <h1 class="text-center">Address Book</h1>
            <p>Dynamic Component + EventBus + Axios</p>
        </div>
        <component :is="currentView" :contact="contact"></component>
        <contactList :contactlist="contactlist"></contactList>
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
</template>

<script>
    import Vue from 'vue';
    import ContactList from './components/ContactList.vue';
    import AddContact from './components/AddContact.vue';
    import UpdateContact from './components/UpdateContact.vue';
    import UpdatePhoto from './components/UpdatePhoto.vue';

    import config from './Configs.js';
    import eventBus from './EventBus.js';
    import Paginate from 'vuejs-paginate';

    export default {
        name: 'app',
        components: { ContactList, AddContact, UpdateContact, UpdatePhoto, Paginate },
        data: function() {
            return {
                currentView: null,
                contact: { no: 0, name: "", address: "", photo: "" },
                contactlist: { pageno: 1, pagesize: config.PAGESIZE, totalcount: 0, contacts: [] }
            }
        },
        mounted: function() {
            this.fetchContacts();
            eventBus.$on("cancel", () => {
                this.currentView = null;
            });
            eventBus.$on("addSubmit", (contact) => {
                this.currentView = null;
                this.addContact(contact);
            });
            eventBus.$on("updateSubmit", (contact) => {
                this.currentView = null;
                thit.updateContact(contact);
            });
            eventBus.$on("addContactForm", () => {
                this.currentView = "addContact";
            });
            eventBus.$on("editContactForm", (no) => {
                this.fetchContactOne(no);
                this.currentView = "updateContact";
            });
            eventBus.$on("deleteContact", (no) => {
                this.deleteContact(no);
            });
            eventBus.$on("editPhoto", (no) => {
                this.fetchContactOne(no);
                this.currentView = "updatePhoto";
            });
            eventBus.$on("updatePhoto", (no, file) => {
                if(typeof file !== "undefined") {
                    this.updatePhoto(no, file);
                }
                this.currentView = null;
            })
        },
        methods: {
            pageChanged: function(page) {
                this.contactlist.pageno = page;
                this.fetchContacts();
            },
            fetchContacts: function() {
                this.$axios.get(config.FETCH, {
                    params: {
                        pageno: this.contactlist.pageno,
                        pagesize: this.contactlist.pagesize
                    }
                })
                .then((res) => {
                    this.contactlist = res.data;
                })
                .catch((ex) => {
                    console.log("fetch contacts fail", ex);
                    this.contactlist.contacts = [];
                })
            },
            addContact: function(contact) {
                this.$axios.post(config.ADD, contact)
                .then((res) => {
                    this.contactlist.pageno = 1;
                    this.fetchContacts();
                })
                .catch((ex) => {
                    console.log("add contact fail", ex);
                })
            },
            updateContact: function(contact) {
                this.$axios.put(config.UPDATE.replace("${no}", contact.no), contact) 
                .then((res) => {
                    this.fetchContacts();
                })
                .catch((ex) => {
                    console.log("update contact fail", ex);
                })
            },
            fetchContactOne: function(no) {
                this.$axios.get(config.FETCH_ONE.replace("${no}", no))
                .then((res) => {
                    this.contact = res.data;
                })
                .catch((ex) => {
                    console.log("fetch contact one fail", ex);
                })
            },
            deleteContact: function(no) {
                this.$axios.delete(config.DELETE.replace("${no}", no))
                .then((res) => {
                    this.fetchContacts();
                })
                .catch((ex) => {
                    console.log("delete contact fail", ex);
                })
            },
            updatePhoto: function(no, file) {
                let data = new FormData();
                data.append("photo", file);
                this.$axios.post(config.UPDATE_PHOTO.replace("${no}", no), data)
                .then((res) => {
                    this.fetchContacts();
                })
                .catch((ex) => {
                    console.log("update photo fail", ex);
                })
            }
        },
        computed: {
            totalpage: function() {
                return Math.floor((this.contactlist.totalcount - 1) / this.contactlist.pagesize) + 1;
            }
        },
        watch: {
            ["contactlist.pageno"] : function() {
                this.$ref.pagebuttons.selected = this.contactlist.pageno - 1;
            }
        }
    }
</script>

<style scoped>
    @import url("https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css");
    #container {
        font-family: 'Avenir', Arial, Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>