<template>
    <div id="app">
        <search placeholder="Write More Then Two Digit and Press Enter"></search>
        <contact-list></contact-list>
    </div>
</template>

<script>
    import ContactList from './components/ContactList.vue';
    import Search from './components/Search.vue';

    export default {
        name: "app",
        components: { Search, ContactList }
    }
</script>