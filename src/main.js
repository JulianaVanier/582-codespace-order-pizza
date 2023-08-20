import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import pinia from "./store/pinia";

createApp(App).use(store).use(router).use(pinia).mount("#app");
