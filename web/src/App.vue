<template>
  <div id="app">
    <WeatherHome></WeatherHome>
    <WeatherAnime> </WeatherAnime>
  </div>
</template>

<script>
import WeatherHome from "./components/WeatherHome.vue";
import WeatherAnime from "./components/WeatherAnime.vue";

export default {
  name: "App",
  components: {
    WeatherHome,
    WeatherAnime,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+JP");
#app {
  font-family: "Noto Sans JP", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
