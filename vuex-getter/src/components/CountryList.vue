<template>
    <div id="example">
        <table id="list">
            <thead>
                <tr>
                    <td>number</td>
                    <td>name</td>
                    <td>region</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="c in countries">
                    <td>{{ c.no }}</td>
                    <td>{{ c.name }}</td>
                    <td>{{ c.region }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import constant from "../constant.js";
    import { mapGetters } from "vuex";

    export default {
        name: "CountryList",
        computed: mapGetters({
            countries: "countriesByRegion"
        })
    }
</script>

<style>
    #list {
        width: 520px; border: 1px solid black; border-collapse: collapse;
    }
    #list td {
        border: 1px solid black; text-align: center;
    }
    #list td:nth-child(4n+1) {
        width: 150px;
    }
    #list td:nth-child(4n+2) {
        width: 220px;
    }
    #list td:nth-child(4n+3) {
        width: 150px;
    }
    #list > thead > tr {
        color: yellow; background: purple;
    }
</style>