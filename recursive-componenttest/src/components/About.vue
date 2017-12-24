<template>
    <div>
        <h1>About</h1>
        <h3>{{ (new Date()).toTimeString() }}</h3>
        <h4>Our Team</h4>
        <tree :subs="orgcharts"></tree>
    </div>
</template>

<script>
    import Tree from "./Tree.vue";
    export default {
        name: "about",
        components: { Tree },
        data: function() {
            return {
                orgcharts: [
                    { 
                        name: "Company 100", type: "company",
                        subs: [
                            { 
                                name: "Support", type: "division", 
                                subs: [
                                    { name: "Team 1", type: "team" },
                                    { name: "Team 2", type: "team" }
                                ]
                            },
                            {
                                name: "Develop", type: "division",
                                subs: [
                                    { name: "Team 1", type: "team" },
                                    { name: "Team 2", type: "team" }
                                ]
                            },
                            {
                                name: "Solution", type: "division",
                                subs: [
                                    { name: "Team 1", type: "team" },
                                    { name: "Team 2", type: "team" }
                                ]
                            },
                            {
                                name: "Marketing", type: "division",
                                subs: [
                                    { name: "Team 1", type: "team" },
                                    { name: "Team 2", type: "team" }
                                ]
                            },
                        ]
                    }
                ]
            }
        }
    }
</script>

<style>
    li.company {
        color: blue;
    }
    li.division {
        color: steelblue;
    }
    li.team {
        color: tomato;
    }
</style>