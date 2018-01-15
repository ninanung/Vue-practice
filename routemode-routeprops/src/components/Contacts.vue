<template>
    <div>
        <h1>Tel</h1>
        <div class="wrapper">
            <div class="box" v-for="c in contacts" :key="c.no">
                <span class="box" @click="navigate(c.no)" style="cursor: pointer;">
                    [ {{ c.name }} ]
                </span>
            </div>
        </div>
        <router-view></router-view>
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
    },
    methods: {
        navigate: function(no) {
            this.$router.push({ name: 'contactbyno', params: { no: no }}, function() {
                console.log("/contacts/" + no + "move!");
            })
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