<template>
  <div id="app">
    <WeatherHome></WeatherHome>
  </div>
</template>

<script>
import WeatherHome from "./components/WeatherHome.vue";

export default {
  name: "App",
  components: {
    WeatherHome,
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
