<template>
    <div>
        <div class="page-header">
            <h1 class="head-text">Route Login Practice</h1>
            <nav>
                <ul>
                    <li><router-link :to="{ name: 'home' }">Home</router-link></li>
                    <li v-if="!islogin"><router-link :to="{ name: 'login' }">Login</router-link></li>
                    <li v-if="!islogin"><router-link :to="{ name: 'signin' }">Signin</router-link></li>
                    <li><router-link :to="{ name: 'islogin' }">AmILogin?</router-link></li>
                    <li v-if="islogin"><a @click="logout()">Logout</a></li>
                </ul>
            </nav>
        </div>
        <div class="container">
            <router-view></router-view>
        </div>
    </div> 
</template>

<script>
import { mapState } from 'vuex'
import constant from './constant.js';

export default {
    name: 'app',
    computed: mapState([ 'islogin' ]),
    methods: {
        logout: function() {
            this.$store.dispatch(constant.LOGOUT);
            this.$router.push({ name: 'home' });
        }
    }
}
</script>

<style>
    @import url("https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css");
    .page-header {
        background: white; padding: 10px 0 0 0; color: black;
    }
    ul {
        list-style-type: none; margin: 0; padding: 0; 
        overflow: hidden; background: black;
    }
    li {
        float: left;
    }
    li a {
        display: block; color: white; text-align: center;
        padding: 14px 16px; text-decoration: none;
    }
    li a:hover {
        background: white; color: black; text-decoration: none;
    }
</style>
