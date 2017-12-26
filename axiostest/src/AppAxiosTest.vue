<template>
    <div id="app">
        <div class="container">
            <div class="form-group">
                <button @click="fetchContacts">Show 1 page</button>
            </div>
            <div class="form-group">
                <input type="text" v-model="name" placeholder="insert name"/>
                <input type="text" v-model="tel" placeholder="insert phone number"/>
                <input type="text" v-model="address" placeholder="insert address"/>
                <button @click="addContact">Add 1 information</button>
            </div>
            <div class="form-group">
                <input type="text" v-model="no"/>
                <button @click="fetchContactOne">Show 1 information</button>
            </div>
            <div class="form-group">
                <input type="text" v-model="no"/>
                <input type="text" v-model="name" placeholder="insert name"/>
                <input type="text" v-model="tel" placeholder="insert phone number"/>
                <input type="text" v-model="address" placeholder="insert address"/>
                <button @click="updateContact">Update 1 information</button>
            </div>
            <div class="form-group">
                <input type="text" v-model="no"/>
                <button @click="deleteContact">Show 1 information</button>
            </div>
            <div class="form-group">
                <input type="text" v-model="no"/>
                <input type="file" ref="photofile" name="photo"/>
                <button @click="changePhoto">Change image</button>
            </div>
        </div>
        <span>Show JSON</span>
        <div id="result" class="container">
            <xmp>{{ result }}</xmp>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "app",
        data: function() {
            return {
                no: 0,
                name: "",
                tel: "",
                address: "",
                result: null
            }
        },
        methods: {
            fetchContacts: function() {
                axios({
                    method: "GET",
                    url: "/api/contacts",
                    params: { pageno: 1, pagesize: 5 }
                }).then((res) => {
                    console.log(res);
                    this.result = res.data;
                }).catch((ex) => {
                    console.log("error : " + ex);
                })
            },
            addContact: function() {
                axios.post("/api/contacts", {
                    name: this.name,
                    tel: this.tel,
                    address: this.address
                })
                .then((res) => {
                    console.log(res);
                    this.result = res.data;
                    this.no = res.data.no;
                })
                .catch((ex) => {
                    console.log("error : " + ex);
                })
            },
            fetchContactOne: function() {
                axios.get("/api/contacts/" + this.no)
                .then((res) => {
                    console.log(res);
                    this.result = res.data;
                })
                .catch((ex) => {
                    console.log("error : " + ex);
                })
            },
            updateContact: function() {
                axios.put("/api/contacts/" + this.no, {
                    name: this.name,
                    tel: this.tel,
                    address: this.address
                })
                .then((res) => {
                    console.log(res);
                    this.name = "";
                    this.tel = "";
                    this.address = "";
                    this.result = res.data;
                })
                .catch((ex) => {
                    console.log("error : " + ex);
                })
            },
            deleteContact: function() {
                axios.delete("/api/contacts/" + this.no)
                .then((res) => {
                    console.log(res);
                    this.no = 0;
                    this.result = res.data;
                })
                .catch((ex) => {
                    console.log("error : " + ex);
                })
            },
            changePhoto: function() {
                const data = new FormData();
                const file = this.$refs.photofile.file[0];
                data.append("photo", file);
                axios.post("/api/contacts/" + this.no + "/photo", data)
                .then((res) => {
                    console.log(res);
                    this.result = res.data;
                })
                .catch((ex) => {
                    console.log("error : " + ex);
                })
            }
        }
    }
</script>

<style>
    @import url("https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css");
    #app {
        font-family: "Avenir", Arial, Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    .container {
        border: solid 1px gray;
        padding: 10px;
        margin-bottom: 10px;
        text-align: centerl
    }
    #result {
        text-align: left;
        padding: 20px;
        border: solid 1px black;
    }
    .form-group {
        border: dashed 1px gray;
        padding: 5px 5px 5px 20px;
    }
</style>