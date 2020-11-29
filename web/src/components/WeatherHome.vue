<template>
  <section>
    <input
      v-model="getWeatherQuery"
      placeholder="調べたい場所を入力してください"
    />
    <button @click="getWeather">天気を調べる</button>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "WeatherHome",
  data() {
    return {
      getWeatherQuery: "",
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
            units: "%22metric%22 or %22imperial%22",
            q: this.getWeatherQuery,
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
