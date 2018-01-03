<template>
    <div id="list">
        <table>
            <thead>
                <tr>
                    <th>number</th>
                    <th>name</th>
                    <th>tel</th>
                    <th>address</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="contact in contacts">
                    <td>{{ contact.no }}</td>
                    <td>{{ contact.name }}</td>
                    <td>{{ contact.tel }}</td>
                    <td>{{ contact.address }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: "contact-list",
        computed: mapState({
            contacts: "contacts"
        })
    }
</script>

<style>
    #list {
        width: 600px; border: 1px solid black; border-collapse: collapse;
    }
    #list td, #list  th {
        border: 1px solid black; text-align: center; width: 150px;
    }
    #list > thead > tr {
        color: yellow; background: purple;
    }
</style>