import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Tabs from "vue-tabs-component";
import Icon from "vue-awesome/components/Icon";
import "vue-awesome/icons";

Vue.use(Tabs);

Vue.component("icon", Icon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
