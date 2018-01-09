<template>
    <div>
        <h1>Contact Detail</h1>
        <contacts></contacts>
        <div>
            <table class="detail table table-bordered">
                <tbody>
                    <tr class="active">
                        <td>no</td>
                        <td>{{ contact.no }}</td>
                    </tr>
                    <tr class="actice">
                        <td>name</td>
                        <td>{{ contact.name }}</td>
                    </tr>
                    <tr class="active">
                        <td>tel</td>
                        <td>{{ contact.tel }}</td>
                    </tr>
                </tbody>
            </table> 
        </div>
    </div>
</template>

<script>
import contactlist from '../contactlist.js';
import Contacts from './Contacts.vue';

export default {
    name: 'contactbyno',
    components: { Contacts },
    data: function() {
        return {
            no: 0,
            contacts: contactlist.contacts
        }
    },
    computed: {
        contact: function() {
            let no = this.$route.params.no;
            let arr = this.contacts.filter(function(value, index) {
                return value.no == no;
            });
            if(arr.length == 1) return arr[0];
            else return {};
        }
    }
}
</script>

<style>
    table.detail {
        width: 400px;
    }
</style>
