<template>
  <div id="weatherHome">
    <div id="weatherCard">
      <div class="weatherSearch">
        <input
          v-model.trim="search"
          placeholder="調べたい場所を入力してください"
        />
        <button @click="getData" class="weatherCardButton">天気を調べる</button>
      </div>
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
  </div>
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
  created: function() {
    this.getWeather("Tokyo");
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
#weatherHome {
  z-index: 9999;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.weatherSearch {
  margin: 5% auto auto auto;
  width: 70%;
  height: 10%;
}
#weatherCard {
  background-color: #eeeeee94;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.16);
  color: #212121;
  text-decoration: none;
  height: 400px;
  width: 400px;
  margin: 200px auto;
}
.weatherCardWeatherData {
  height: 50%;
  display: flex;
  align-items: center;
}
.weatherCardHeader {
  height: 10%;
  text-align: center;
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
  bottom: 20%;
  left: 70px;
}
.weatherCardHumidity {
  font-size: 150%;
  position: absolute;
  bottom: 20%;
  right: 70px;
}
.weatherCardButton {
  border: 2px solid transparent;
}
.weatherCardButton:hover {
  background: transparent;
  border-color: white;
}
</style>
