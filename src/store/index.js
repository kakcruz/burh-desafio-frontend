// src/store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import book from './modules/bookModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    book,
  },
});
