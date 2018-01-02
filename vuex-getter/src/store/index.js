import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
import constant from '../constant';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        currentRegion: "",
        countries: [
            { no: 1, name: "korea", region: "asia" },
            { no: 2, name: "jappen", region: "asia" },
            { no: 3, name: "british", region: "europe" },
            { no: 4, name: "canada", region: "america" },
            { no: 5, name: "us", region: "america" },
            { no: 6, name: "germen", region: "europe" },
            { no: 7, name: "spain", region: "europe" },
            { no: 8, name: "china", region: "asia" },
            { no: 9, name: "congo", region: "africa" },
            { no: 10, name: "jamaica", region: "africa" },
            { no: 11, name: "brazil", region: "america" },
            { no: 12, name: "vietnam", region: "asia" },
            { no: 13, name: "mexico", region: "america" },
            { no: 14, name: "france", region: "europe" },
            { no: 15, name: "taiwan", region: "asia" }
        ]
    }, 
    mutations: {
        [constant.CHANGE_REGION]: (state, payload) => {
            state.currentRegion = payload.region;
        }
    },
    getters: {
        countriesByRegion(state) {
            if(state.currentRegion == "all") {
                return state.countries;
            }
            else {
                return state.countries.filter((c) => {
                    return c.region == state.currentRegion;
                });
            }
        },
        regions(state) {
            let temp = state.countries.map((c) => {
                return c.region
            });
            temp = _.uniq(temp);
            temp.splice(0, 0, "all");
            return temp;
        },
        currentRegion(state) {
            return state.currentRegion;
        }
    } 
});

export default store;