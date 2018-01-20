<template>
    <div class="modal">
        <div class="form" @keyup.esc="cancelEvent">
            <form method="post" enctype="multipart/form-data">
                <h3>:: Edit Photo</h3>
                <input type="hidden" name="no" class="long" disabled v-model="contact.no" />
                <div>
                    <label>Now</label>
                    <img class="thumb" :src="contact.photo" />
                </div> 
                <div>
                    <label>Select Photo</label>
                    <label>
                        <input ref="photofile" type="file" name="photo" class="long btn btn-default" />
                    </label>
                </div>
                <div>
                    <div>&nbsp;</div>
                    <input type="button" class="btn btn-primary" value="Edit" @click="photoSubmit()" />
                    <input type="button" class="btn btn-primary" value="Cancel" @click="cancelEvent()" />
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import constant from '../constant.js';
    import { mapState } from 'vuex';

    export default {
        name: "updatePhoto",
        props: [ 'no' ],
        computed: mapState([ 'contact', 'contactlist' ]),
        mounted: function() {
            this.$store.dispatch(constant.FETCH_CONTACT_CONE, { no: this.no });
        },
        methods: {
            cancelEvent: function() {
                this.$router.puah({ name: 'contacts', query: { page: this.contactlist.pageno } });
            },
            photoSubmit: function() {
                let file = this.$refs.photofile.files[0];
                this.$store.dispatch(constant.UPDATE_PHOTO, { no: this.contact.no, file: file });
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
    .form .heading {
        background: #33A17F;
        font-weight: 300;
        text-align: left;
        padding: 20px;
        color: #fff;
        margin: 5px 0 30px 0;
        padding: 10px;
        min-width: 200px;
        max-width: 400px;
    }
    img.thumb {
        width: 160px;
    }
</style>