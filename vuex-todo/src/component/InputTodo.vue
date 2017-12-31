<template>
    <div>
        <input class="input" id="task" type="text" v-model.trim="todo" @keyup.enter="addTodo"/>
        <span class="addbutton" @click="addTodo">Add</span>
    </div>
</template>

<script type="text/javascript">
    import constant from '../constant.js';

    export default {
        name: "input-todo",
        data: function() {
            return { todo: "" }
        },
        methods: {
            addTodo: function() {
                this.$store.commit(constant.ADD_TODO, { todo: this.todo });
                this.todo = "";
            }
        }
    }
</script>

<style>
    * {
        box-sizing: border-box;
    }
    .input {
        border: none;
        width: 75%;
        height: 35px;
        padding: 10px;
    }
    .addbutton {
        padding: 10px;
        width: 25%;
        height: 35px;
        background: #d9d9d9;
        color: #555;
        float: left;
        text-align: center;
        font-size: 13px;
        cursor: pointer;
        transition: 0.3s;
    }
    .addbutton:hover {
        background: #bbb;
    }
</style>