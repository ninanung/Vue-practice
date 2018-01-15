<template>
    <div>
        <hr class="divider">
        <div>
            <table class="detail table table-bordered">
                <tbody>
                    <tr class="active">
                        <td>no</td>
                        <td>{{ no }}</td>
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
    props: [ 'no' ],
    data: function() {
        return {
            contacts: contactlist.contacts
        }
    },
    computed: {
        contact: function() {
            let no = this.no;
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
    .divider {
        height: 3px; margin-left: auto; margin-right: auto;
        background: #FF0066; color: #FF0066; border: 0 none;
    }
</style>
