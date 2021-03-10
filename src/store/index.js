import { createStore } from "vuex";

export default createStore({
  state: {
    countries: [],
    darkMode: false,
  },
  mutations: {
    setDarkMode(state, payload) {
      state.darkMode = payload;
    },
    setCountries(state, payload) {
      state.countries = payload;
    },
  },
  actions: {
    async setCountries({ commit }) {
      const result = await fetch("https://restcountries.eu/rest/v2/all");
      const allCountries = await result.json();
      commit("setCountries", allCountries);
    },
  },
  getters: {
    getDarkMode: (state) => state.darkMode,
    getCountries: (state) => state.countries,
  },
});
