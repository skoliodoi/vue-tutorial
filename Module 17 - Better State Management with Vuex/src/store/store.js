import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0,
  },
  getters: {
    doubleCounter: state => {
      return state.counter*2;
    },
    clickCounter: state => {
      return state.counter + ' clicks!'
    }
  },
  mutations: {
    increment: (state, payload) => {
      state.counter += payload;
    },
    decrement: (state, payload) => {
      state.counter-= payload;
    }
  },
  actions: {
    increment: (context, payload) => {
      context.commit('increment', payload)
    },
    decrement: ({commit}, payload) => {
      commit('decrement', payload)
    },
    asyncIncrement: (context, payload) => {
      setTimeout(() => {
        context.commit('increment', payload.by)
      },payload.duration)
    },
    asyncDecrement: ({commit}, payload) => {
      setTimeout(() => {
        commit('decrement', payload.by)
      },payload.duration)
    }
  }
});