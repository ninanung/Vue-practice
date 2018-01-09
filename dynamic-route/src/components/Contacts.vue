<template>
    <div>
        <h1>Tel</h1>
        <div class="wrapper">
            <div class="box" v-for="c in contacts" :key="c.no">
                <router-link :to="'/contacts/' + c.no">{{ c.name }}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import contactlist from '../contactlist.js';

export default {
    name: 'contacts',
    data: function() {
        return {
            contacts: contactlist.contacts
        }
    }
}
</script>

<style>
    .wrapper {
        background: #fff; clear: both; display: table;
    }
    .box {
        float: left; background: aqua; border-radius: 5px;
        padding: 10px; margin: 3px; text-align: center;
        font-size: 120%; width: 100px; font-weight: bold;
    }
    a:link, a:visited {
        text-align: center; text-decoration: none; display: inline-block;
    }
</style>