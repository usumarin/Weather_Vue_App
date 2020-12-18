<template>
  <div
    class="weather-anime"
    :class="[
      { 'weather-rain': getWeatherResult.info === 'Rain' },
      { 'weather-snow': getWeatherResult.info == 'Snow' },
      { 'weather-clear': getWeatherResult.info == 'Clear' },
      { 'weather-clouds': getWeatherResult.info == 'Clouds' },
    ]"
  ></div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["getWeatherResult"]),
  },
};
</script>

<style scoped>
.weather-anime {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.weather-rain {
  background-image: url("../assets/images/rain.jpg");
}
.weather-clouds {
  background-image: url("../assets/images/clouds.jpg");
}
.weather-clear {
  background-image: url("../assets/images/clear.jpg");
}
</style>
