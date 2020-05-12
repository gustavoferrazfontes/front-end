import Vuex from 'vuex'
import Vue from 'vue'
import store from "@/store/index"

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        store
    },
    strict: process.env.NODE_ENV !== "production"
})


