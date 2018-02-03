<template>
    <div class="modal">
        <div class="form">
            <h1 class="inputhead">Please Login</h1>
            <hr>
            <div class="input">
                <label>ID</label>
                <input @keyup.esc="cancel" @keyup.enter="login" class="id" type="text" v-model="id" placeholder="ID" autofocus />
            </div>
            <div class="input">
                <label>Password</label>
                <input @keyup.esc="cancel" @keyup.enter="login" class="password" type="text" v-model="password" placeholder="Password" /> 
            </div>
            <div class="input">
                <button @click="login()">Login</button>
                <button @click="cancel()">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import constant from '../constant.js';
import contactapi from '../contactapi.js';

export default {
    name: "login",
    data: function() {
        return {
            id: "",
            password: "",
        }
    },
    computed: mapState([ "IDs" ]),
    methods: {
        login: function() {
            let words = "";
            let error;
            contactapi.login(this.id, this.password)
            .then((res) => {
                error = res.data.error;
                words = res.data.words;
                console.log(res.data);
            });
            if(error == "true") {
                this.$store.dispatch(constant.LOGIN, { id: this.id, password: this.password });
                this.id = "";
                this.password = "";
                return this.$router.push({ name: "home" });
            }
            else {
                return alert("Please check your ID and password");
            }
        },
        cancel: function() {
            this.$router.push({ name: 'home' });
        }
    }
}
</script>

<style scoped>
    .modal {
        display: block; position: fixed; width: 100%; height: 100%;
        left: 0; top: 0; overflow: auto; z-index: 1;
        background: rgb(0, 0, 0); background: rgba(0, 0, 0, 0.4);
    }
    .form {
        background-color: white; margin: 100px auto;
        max-width: 500px; min-width: 200px;
        font: 13px "verdana"; padding: 10px 10px 10px 10px;
    }
    button {
        width: 100px; height: 40px; background: white;
    }
    button:hover {
        background: black; color: white;
    }
    .form label {
        text-align: left; margin: 0 0 3px 0; padding: 0;
        display: black; font-weight: bold;
    }
    .form input {
        box-sizing: border-box; outline: none;
    }
    .inputhead {
        background: black; color: white; font-weight: bold;
        width: 400px; height: 40px; text-align: left;
    }
</style>
