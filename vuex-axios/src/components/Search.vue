<template>
    <div>
        <p>name: <input type="text" v-model.trim="name" placeholder="Write Name" @keyup.enter="keyupEvent"/></p>
    </div>
</template>

<script>
    import constant from '../constant.js';

    export default {
        name: "search",
        data: function() {
            return {
                name: ""
            };
        },
        methods: {
            keyupEvent: function(e) {
                let val = this.name;
                if(val.length >= 2) {
                    this.$store.dispatch(constant.SEARCH_CONTACT, { name: val });
                    this.name = "";
                }
                else {
                    this.$store.dispatch(constant.SEARCH_CONTACT, { name: "" });
                }
            }
        }
    }
</script>