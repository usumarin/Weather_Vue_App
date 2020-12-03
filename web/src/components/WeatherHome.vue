<template>
  <section id="weatherHome">
    <input
      v-model="getWeatherQuery"
      placeholder="調べたい場所を入力してください"
    />
    <button @click="getWeather">天気を調べる</button>
    <div v-if="hasGetWeatherData" id="weatherCard">
      <h1 class="weatherCardHeader">{{ getWeatherResult.name }}</h1>
      <div class="weatherCardDescription">
        {{ getWeatherInfo.description }}
      </div>
      <div class="weatherCardWeatherData">
        <img :src="getWeatherImageUrl" class="wetherCardImage" />
        <p class="weatherCardTemp">{{ getWeatherResult.main.temp }} ℃</p>
      </div>
      風速:{{ getWeatherResult.wind.speed }}
      }}
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
            "@2x.png";
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

<style>
#weatherCard {
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.16);
  color: #212121;
  text-decoration: none;
  width: 400px;
  margin: auto;
}
.weatherCardWeatherData {
  display: flex;
  align-items: center;
}
.weatherCardHeader {
  text-align: left;
  padding: 1%;
}
.weatherCardDescription {
  font-size: 110%;
  text-align: left;
  padding: 0.5% 1%;
}
.weatherCardImage {
  text-align: right;
}
.weatherCardTemp {
  text-align: left;
  margin: 0;
  padding: 1% 1%;
}
</style>
