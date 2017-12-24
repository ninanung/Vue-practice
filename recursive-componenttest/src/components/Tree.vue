<template>
    <ul>
        <li v-for="s in subs" :class="s.type">
            {{ s.name }}
            <tree :subs="s.subs"></tree>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "tree",
        props: [ "subs" ]
    }
</script>
