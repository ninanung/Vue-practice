<template>
    <div>
        <h1>{{ hello }}</h1>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'islogin',
    data: function() {
        return {
            hello: ""
        }
    },
    computed: mapState([ 'islogin', 'user' ]),
    mounted: function() {
        if(!this.islogin) {
            this.hello = "Pleas Login!";
        }
        else {
            this.hello = "hello! " + this.user.id;
        }
    }
}
</script>
