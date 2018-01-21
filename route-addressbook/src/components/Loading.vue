<template>
    <div class="modal">
        <spinner class="spinner"
            :line-size="10" :size="100">
        </spinner>
    </div> 
</template>

<script>
import spinner from 'vue-simple-spinner'

export default {
    components: { spinner }
}
</script>

<style>
    .modal {
        width: 100%; height: 100%; left: 0; top: 0; overflow: auto;
        background: rgb(0, 0, 0); display: block; position: fixed;
        background: rgba(0, 0, 0, 0.4); z-index: 1;
    }
    .spinner {
        left: 50%; top: 50%; position: absolute;
        margin-top: -50px; margin-left: -50px;
    }
</style>
