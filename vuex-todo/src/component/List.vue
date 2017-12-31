<template>
    <ul id="todolist">
        <li v-for="(a, index) in todolist" v-bind:class="checked(a.done)" @click="doneToggle(index)">
            <span>{{ a.todo }}</span>
            <span v-if="a.done">Complete</span>
            <span class="close" @click="deleteTodo(index)">&#x00D7;</span>
        </li>
    </ul>
</template>

<script type="text/javascript">
    import constant from '../constant.js';

    export default {
        name: "list",
        computed: {
            todolist() {
                return this.$store.state.todolist;
            }
        },
        methods: {
            checked: function(done) {
                if(done) return { checked: true };
                else return { checked: false };
            },
            deleteTodo: function(index) {
                this.$store.commit(constant.DELETE_TODO, { index: index });
            },
            doneToggle: function(index) {
                this.$store.commit(constant.DONE_TOGGLE, { index: index });
            }
        }
    }
</script>

<style>
    * {
        box-sizing: border-box;
    }
    ul {
        margin: 0;
        padding: 0;
    }
    ul li {
        cursor: pointer;
        position: relative;
        padding: 8px 8px 8px 40px;
        background: #eee;
        font-size: 14px;
        transition: 0.2s;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    ul li:hover {
        background: #ddd;
    }
    ul li.checked {
        background: #BBB;
        color: #fff;
        text-decoration: line-through;
    }
    ul li.checked::before {
        content: '';
        position: absolute;
        border-color: #fff;
        border-style: solid;
        border-width: 0px 1px 1px 0px;
        top: 10px;
        left: 16px;
        transform: rotate(45deg);
        height: 8px;
        width: 8px;
    }
    .close {
        position: absolute;
        right: 0;
        top: 0;
        padding: 8px 12px 8px 12px;
    }
    .close:hover {
        background:  #f44336;
        color: white;
    }
</style>