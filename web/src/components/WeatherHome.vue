<template>
  <section id="weatherHome">
    <input
      v-model="getWeatherQuery"
      placeholder="調べたい場所を入力してください"
    />
    <button @click="getWeather">天気を調べる</button>
    <div v-if="hasGetWeatherData">
      <p>地名:{{ getWeatherResult.name }}</p>
      <li v-for="weather in getWeatherResult.weather" :key="weather.id">
        天気: {{ weather.description }}
        <img :src="getWeatherImageUrl" />
      </li>
      <p>気温: {{ getWeatherResult.main.temp }}</p>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "WeatherHome",
  data() {
    return {
      getWeatherQuery: "",
      getWeatherResult: {},
      getWeatherInfo: {},
      getWeatherImageUrl: "",
      hasGetWeatherData: false,
    };
  },
  methods: {
    getWeather() {
      let apiURL = "https://community-open-weather-map.p.rapidapi.com/weather";
      axios
        .get(apiURL, {
          headers: {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": process.env.VUE_APP_OPEN_WEATHER_MAP_API_HOST,
            "x-rapidapi-key": process.env.VUE_APP_OPEN_WEATHER_MAP_API_KEY,
            useQueryString: true,
          },
          params: {
            id: "2172797",
            lang: "ja",
            units: "metric",
            q: this.getWeatherQuery,
          },
        })
        .then((response) => {
          this.getWeatherResult = response.data;
          this.getWeatherInfo = Object.assign(...this.getWeatherResult.weather);
          this.getWeatherImageUrl =
            "http://openweathermap.org/img/wn/" +
            this.getWeatherInfo.icon +
            ".png";
          this.hasGetWeatherData = true;
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
