import Vue from 'vue';
import Vuex from 'vuex';
import ls from 'localstorage-slim';
ls.config.encrypt = false;
ls.config.ttl = 7200;

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    setLocalStorage(state, payload) {
      ls.set(payload.key, JSON.stringify(payload.value));
      switch (payload.key) {
        case 'user':
          state.user = payload.value;
          break;

        default:
          break;
      }
    },
    removeLocalStorage(state, key) {
      ls.remove(key);
      switch (key) {
        case 'user':
          state.user = null;
          break;

        default:
          break;
      }
    },
  },
  getters: {
    localStorage: () => (key) => {
      return ls.get(key);
    },
    localStorages: () => {
      return ls.get();
    },
    user: (state) => {
      return state.user;
    },
  },
});

export default store;
