<template>
    <div id="app">
        <layout>
            <h1 slot="header">Header Area</h1>
            <div slot="sidebar">
                <ul class="menu">
                    <li v-for="sidebar in sidebars">
                        <a v-bind:href="sidebar.link">{{ sidebar.menu }}</a>
                    </li>
                </ul>
            </div>
            <div slot="content">
                <h2>Content Area</h2>
                <p>A Premium Noteboo For University And Business. Wirebound Notebook.</p>
                <p>A Premium Noteboo For University And Business. Wirebound Notebook.</p>
                <p>A Premium Noteboo For University And Business. Wirebound Notebook.</p>
                <p>A Premium Noteboo For University And Business. Wirebound Notebook.</p>
            </div>
            <p slot="footer">Footer Area</p>
        </layout>
    </div>
</template>

<script>
    import Layout from "./NamedSlot.vue";

    export default {
        data: function() {
            return {
                sidebars: [
                    { menu: "hone", link: "#" },
                    { menu: "about", link: "#"},
                    { menu: "contact", link: "#"},
                    { menu: "Vue.js", link: "#"}
                ]
            }
        },
        components: { Layout }
    }
</script>

<style scoped>
    ul.menu {
        position: relative;
        padding: 5px 5px 5px 5px;
        list-style: none;
        font-style: italic;
    }
    ul.menu a {
        text-decoration: none;
    }
</style>