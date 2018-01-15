<template>
    <div>
        <div class="header">
            <h1 class="headerText">Munje company</h1>
            <nav>
                <ul>
                    <li><router-link :to="{ name: 'home' }">home</router-link></li>
                    <li><router-link :to="{ name: 'about' }">about</router-link></li>
                    <li><router-link :to="{ name: 'contacts' }">contacts</router-link></li>
                </ul>
            </nav>
        </div>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import NotFound from './components/NotFound.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Contacts from './components/Contacts.vue';
import ContactByNo from './components/ContactByNo.vue';
import VueRouter from 'vue-router';

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: "/", component: Home },
        { path: "/home", name: 'home', component: Home },
        { path: "/about", name: 'about', component: About },
        { path: "/contacts", name: 'contacts', component: Contacts,
        children: [
            { path: ":no", name: 'contactbyno', component: ContactByNo, props: true,
                beforeEnter: (to, from, next) => {
                    console.log("beforeEnter - " + from.path);
                    if(from.path.startsWith("/contacts")) {
                        next();
                    }
                    else next({ name: home });
                }
            }
        ] },
        { path: "*", component: NotFound }
    ]
});

router.beforeEach((to, from, next) => {
    console.log("beforeEach");
    next();
});

router.afterEach((to, from) => {
    console.log("afterEach");
});

export default {
    name: 'app',
    router
}
</script>

<style>
    @import url("https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css");
    .header {
        background: white; padding: 10px 0 0 0; color: black;
    }
    .headerText {
        padding: 0 20px 20px 20px; 
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
