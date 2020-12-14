<template>
  <section id="weatherHome">
    <input v-model.trim="search" placeholder="調べたい場所を入力してください" />
    <button @click="getData">天気を調べる</button>
    <div v-if="this.hasGetWeatherData" id="weatherCard">
      <h1 class="weatherCardHeader">
        {{ this.getWeatherResult.name }}
      </h1>
      <div class="weatherCardDescription">
        {{ this.getWeatherResult.description }}
      </div>
      <div class="weatherCardWeatherData">
        <img
          :src="
            `http://openweathermap.org/img/wn/${this.getWeatherResult.icon}@4x.png`
          "
          class="weatherCardImage"
        />
        <p class="weatherCardTemp">
          <v-icon name="thermometer-half" scale="2" />
          {{ this.getWeatherResult.temp }} ℃
        </p>
      </div>
      <div class="weatherCardWeatherOtherData">
        <div class="weatherCardWindSpeed">
          <v-icon name="wind" scale="2" />
          {{ this.getWeatherResult.wind + "m/s" }}
        </div>
        <div class="weatherCardHumidity">
          <v-icon name="tint" scale="2" />
          {{ this.getWeatherResult.humidity + "%" }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "WeatherHome",
  data() {
    return {
      search: "",
    };
  },
  computed: {
    weatherQuery: {
      get() {
        return this.$store.state.getWeatherQuery;
      },
      set(value) {
        this.$store.commit("setGetWeatherQuery", value);
      },
    },
    ...mapState(["getWeatherResult", "hasGetWeatherData"]),
  },
  methods: {
    ...mapActions(["getWeather"]),
    getData() {
      this.getWeather(this.search);
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
  height: 400px;
  width: 400px;
  margin: auto;
}
.weatherCardWeatherData {
  height: 50%;
  display: flex;
  align-items: center;
}
.weatherCardHeader {
  height: 10%;
  text-align: center;
  padding-top: 2%;
}
.weatherCardDescription {
  height: 5%;
  font-size: 150%;
  text-align: center;
  padding: 0.5% 1%;
}
.weatherCardImage {
  margin-left: auto;
}
.weatherCardTemp {
  font-size: 120%;
  margin-right: 15px;
  padding: 1% 1%;
}
.weatherCardWeatherOtherData {
  /* display: flex; */
  height: 15%;
  position: relative;
}
.weatherCardWindSpeed {
  font-size: 150%;
  position: absolute;
  bottom: 0;
  left: 70px;
}
.weatherCardHumidity {
  font-size: 150%;
  position: absolute;
  bottom: 0;
  right: 70px;
}
</style>
