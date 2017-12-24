<template>
    <div class="child">
        x : <input type="text" v-model="x"/>
        y : <input type="text" v-model="y"/>
        <slot name="type1" :cx="x" :cy="y"></slot>
        <slot name="type2" :cx="x" :cy="y"></slot>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                x: 4,
                y: 5
            }
        }
    }
</script>

<style scoped>
    .child {
        padding: 5px;
        border: solid 1px gray;
    }
</style>