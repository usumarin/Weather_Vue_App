import Vue from "vue";
import App from "./App.vue";
import store from "./store/store.js";
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";

Vue.config.productionTip = false;
Vue.component("v-icon", Icon);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
