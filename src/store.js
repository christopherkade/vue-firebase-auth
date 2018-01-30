import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.debug = true

export const store = new Vuex.Store({
    state: {
        number: 0
    }
});