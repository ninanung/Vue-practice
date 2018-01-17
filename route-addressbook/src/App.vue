<template>
    <div id="container">
        <div class="page-header">
            <h1 class="text-center">Address Book!</h1>
            <p> Vue-Router + Vuex + Axios </p>
            <div class="btn-group">
                <router-link to="/home" class="btn btn-info menu">Home</router-link> 
                <router-link to="/about" class="btn btn-info menu">About</router-link> 
                <router-link to="/contacts" class="btn btn-info menu">Contacts</router-link> 
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "app"
}
</script>

<style>
    @import url("https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css");
    #container {
        font-family: 'Avenir', Arial, Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center; color: #2c3e50;
        margin-top: 60px;
    }
    .menu {
        width: 100px;
    }
</style>
