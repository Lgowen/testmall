import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        count : 0,
    },
    mutations: {
        addCount(state){
            state.count++;
        },
        decreCount(state){
            state.count--;
        }
    },
    actions: {

    },
    getters: {

    },
    modules: {

    }
})

export default store