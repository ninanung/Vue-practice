<template>
    <div>
        <h1>{{ route }}</h1>
        <h1> 404 Not Found!!!!!</h1>
        <img class="notfound" src="http://i1.ruliweb.com/img/17/07/29/15d8eb52ff3e7950.jpg"/>
    </div>
</template>

<script>
let NotFound = {
    name: 'notfound',
    data: function() {
        return {
            route: ""
        }
    },
    beforeRouteEnter(to, from, next) {
        next((NotFound) => {
            NotFound.route = to.path;
        })
    }
}

export default NotFound;
</script>


<style>
    .notfound {
        width: 800px; height: auto;
    }
</style>
