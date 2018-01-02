<template>
    <div>
        <button v-for="region in regions" class="region" :class="isSelected(region)" @click="changeRegion({ region: region })">{{ region }}</button>
    </div>
</template>

<script>
    import constant from "../constant.js";
    import _ from "lodash";
    import { mapGetters, mapMutations } from "vuex";

    export default {
        name: "RegionButtons",
        computed: mapGetters({
            regions: "regions", 
            currentRegion: "currentRegion"
        }),
        methods: _.extend(
            {
                isSelected(region) {
                    if(region == this.currentRegion) {
                        return { selected: true };
                    }
                    else {
                        return { selected: false };
                    }
                }
            },
            mapMutations([ constant.CHANGE_REGION ])
        )
    }
</script>

<style>
    button.region {
        text-align: center;
        width: 80px;
        margin: 2px;
        border: 1px solid gray;
    }
    button.selected {
        background: purple;
        color: aqua;
    }
</style>