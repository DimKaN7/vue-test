import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        timers: [],
    },
    getters: {
        TIMERS: state => {
            return state.timers;
        },
    },
    mutations: {
        ADD_TIMER: (state, payload) => {
            state.timers.push(payload);
        }
    },
    actions: {
        ADD_TIMER: (context, payload) => {
            context.commit('ADD_TIMER', payload);
        }
    },
});