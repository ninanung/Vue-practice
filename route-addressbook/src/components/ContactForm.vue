<template>
    <div class="modal">
        <div class="form" @keyup.esc="cancelEvent()">
            <h3 class="heading">:: {{ headingText }}</h3>
            <div v-if="mode == 'update'" class="form-group">
                <label>Key Number</label>
                <input type="text" name="no" class="long" disabled v-model="contact.no" />
            </div>
            <div class="form-group">
                <label>Name</label>
                <input type="text" name="name" class="long" v-model="contact.name" ref="name" placeholder="Insert name"/>
            </div>
            <div class="form-group">
                <label>Tel</label>
                <input type="text" name="tel" class="long" v-model="contact.tel" placeholder="Insert tel" />
            </div>
            <div class="form-group">
                <label>Address</label>
                <input type="text" name="address" class="long" v-model="contact.address" placeholder="Insert address" />
            </div>
            <div class="form-group">
                <label>&nbsp;</label>
                <input type="button" class="button btn btn-primary" :value="btnText" @click="submitEvent()" />
                <input type="button" class="button btn btn-primary" value="Cancel" @click="cancelEvent()" />
            </div>
        </div>
    </div>
</template>

<script>
    import constant from '../constant.js';
    import { mapState } from 'vuex';
    import _ from 'lodash';

    export default {
        name: 'contactForm',
        data: function() {
            return {
                mode: "add"
            }
        },
        props: [ 'no' ],
        computed: _.extend({
            btnText: function() {
                if(this.mode != 'update') {
                    return 'Add';
                }
                else return 'Edit';
            },
            headingText: function() {
                if(this.mode != 'update') {
                    return 'Add New Address';
                }
                else return 'Update Address';
            }
        }, mapState([
            'contactlist', 'contact'
        ])),
        mounted: function() {
            this.$refs.name.focus();
            let cr = this.$router.currentRoute;
            if(cr.fullPath.indexOf('/add') > -1) {
                this.mode = "add";
                this.$store.dispatch(constant.INITIALIZE_CONTACT_ONE);
            }
            else if {cr.fullPath.indexOf('/update') > -1) {
                this.mode = "update";
                this.$store.dispatch(constant.FETCH_CONTACT_ONE, { no: this.no }); 
            }
        },
        methods: {
            submitEvent: function() {
                if(this.mode == 'update') {
                    this.$store.dispatch(constant.UPDATE_CONTACT);
                    tihs.$router.push({ name: 'contacts', query: { page: this.contactlist.pageno } });
                }
                else {
                    this.$store.dispatch(constant.ADD_CONTACT);
                    this.$router.push({ name: 'contacts', query: { page: 1 } });
                }
            },
            cancelEvent: function() {
                this.$router.push({ name: 'contacts', query: { page: this.contactlist.pageno } });
            }
        }
    }
</script>

<style scoped>
    .modal {
        display: block;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0, 0, 0);
        background-color: rgba(0, 0, 0, 0.4);
    }
    .form {
        background-color: white;
        margin: 100px auto;
        max-width: 400px;
        min-width: 200px;
        font: 13px "verdana";
        padding: 10px 10px 10px 10px;
    }
    .form div {
        padding: 0;
        display: block;
        margin: 10px 0 0 0;
    }
    .form label {
        text-align: left;
        margin: 0 0 3px 0;
        padding: 0;
        display: block;
        font-weight: bold;
    }
    .form input, textarea, select {
        box-sizing: border-box;
        border: 1px solid #BEBEBE;
        padding: 7px;
        margin: 0;
        outline: none;
    }
    .form .long {
        width: 100%;
    }
    .form .button {
        background: #2B798D;
        padding: 8px 15px 8px 15px;
        border: none;
        color: #fff;
    }
    .form button:hover {
        background-color: #4691A4;
    }
    .form .heading {
        background: #33A17f;
        font-weight: 300;
        text-align: left;
        padding: 20px;
        color: #fff;
        margin: 5px 0 30px 0;
        padding: 10px;
        min-width: 200px;
        max-width: 400px;
    }
</style>