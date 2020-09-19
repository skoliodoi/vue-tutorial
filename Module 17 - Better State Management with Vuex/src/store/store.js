import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter: state => {
      return state.counter * 2;
    },
    stringCounter: state => {
      return state.counter + ' clicks!';
    }
  },
  mutations: {
    increment: state => {
      state.counter += 2;
    },
    decrement: state => {
      state.counter -= 2;
    }
  },
  actions: {
    increment: context => {
      context.commit('increment');
    },
    decrement: context => {
      context.commit('decrement');
    },
    asyncIncrement: context => {
      setTimeout(() => {
        context.commit('increment')
      },1000);
    },
    asyncDecrement: context => {
      setTimeout(() => {
        context.commit('decrement')
      },1000);
    }
  }
});