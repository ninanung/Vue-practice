<template>
    <div id="container">
        <div class="page-header">
            <h1 class="text-center">Address Book</h1>
            <p>Dynamic Component + Vuex + Axios</p>
        </div>
        <component :is="currentView"></component>
        <contactList></contactList>
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
    import ContactList from './components/ContactList.vue';
    import ContactForm from './components/ContactForm.vue';
    import UpdatePhoto from './components/UpdatePhoto.vue';
    import Paginate from 'vuejs-paginate';
    import config from './config.js';
    import constant from './constant.js';
    import _ from 'lodash';
    import { mapState } from 'vuex';

    export default {
        name: 'app',
        components: { ContactList, ContactForm, UpdatePhoto, Paginate },
        computed: _.extend({
            totalpage: function() {
              let total = this.contactlist.totalcount;
              let pagesize = this.contactlist.pagesize;
              return Math.floor((total - 1) / pagesize) + 1;
            }
          }, mapState([
            'contactlist', 'currentView'
          ])
        ),
        mounted: function() {
          this.$store.dispatch(constant.FETCH_CONTACTS);
        },
        methods: {
          pageChanged: function(page) {
            this.$store.dispatch(constant.FETCH_CONTACTS, { pageno: page });
          }
        },
        watch: {
          'this.contactlist.pageno': function(page) {
            this.$refs.pagebuttons.selected = page - 1;
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