import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    apiKey: process.env.VUE_APP_OPEN_WEATHER_MAP_API_KEY,
    apiHost: "https://community-open-weather-map.p.rapidapi.com/weather",
    getWeatherQuery: "",
    getWeatherResult: {},
    hasGetWeatherData: false,
  },
  mutations: {
    setGetWeatherQuery(state, val) {
      state.getWeatherQuery = val;
    },
    setGetWeatherResult(state, data) {
      state.getWeatherResult = data;
    },
    setHasGetWeatherData(state, data) {
      state.hasGetWeatherData = data;
    },
  },
  getters: {
    getWeatherResult: (state) => {
      return String(state.getWeatherResult);
    },
    hasGetWeatherData: (state) => {
      return Boolean(state.hasGetWeatherData);
    },
  },
  actions: {
    async getWeather({ commit, state }, getWeatherQuery) {
      try {
        commit("setGetWeatherQuery", getWeatherQuery);

        const response = await axios.get(state.apiHost, {
          headers: {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": process.env.VUE_APP_OPEN_WEATHER_MAP_API_HOST,
            "x-rapidapi-key": process.env.VUE_APP_OPEN_WEATHER_MAP_API_KEY,
            useQueryString: true,
          },
          params: {
            lang: "ja",
            units: "metric",
            q: state.getWeatherQuery,
          },
        });

        const newWeatherData = {
          name: response.data.name,
          temp: response.data.main.temp,
          description: response.data.weather[0].description,
          icon: response.data.weather[0].icon,
          info: response.data.weather[0].main,
          wind: response.data.wind.speed,
          humidity: response.data.main.humidity,
        };

        commit("setGetWeatherResult", newWeatherData);
        commit("setHasGetWeatherData", true);
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export default store;
