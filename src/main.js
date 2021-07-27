import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueCodeHighlight from "vue-code-highlight";

createApp(App)
  .use(router)
  .use(VueCodeHighlight)
  .mount("#app");
