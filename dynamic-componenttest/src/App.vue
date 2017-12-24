<template>
    <div>
        <div class="header">
            <h1 class="headerText">Company 100</h1>
            <nav>
                <ul>
                    <li>
                        <a href="#" @click="changeMenu('home')">Home</a>
                    </li>
                    <li>
                        <a href="#" @click="changeMenu('about')">About</a>
                    </li>
                    <li>
                        <a href="#" @click="changeMenu('contact')">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="container">
            <component :is="currentView"></component>
        </div>
    </div>
</template>

<script>
    import Home from "./components/Home.vue";
    import About from "./components/About.vue";
    import Contact from "./components/Contact.vue";

    export default {
        components: { Home, About, Contact },
        data: function() {
            return {
                currentView: "home"
            }
        },
        methods: {
            changeMenu: function(view) {
                this.currentView = view;
            }
        }
    }
</script>

<style scoped>
    .header {
        background: aqua;
        padding: 10px 0 0 0;
    }
    .headerText {
        padding: 0 20px 0 20px;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background: purple;
    }
    li {
        float: left;
    }
    li a {
        display: block;
        color: yellow;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }
    li a:hover {
        background: aqua;
        color: black;
    }
</style>