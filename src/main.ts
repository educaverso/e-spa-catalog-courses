import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./presentation/App.vue";
import router from "./router";

import "@/presentation/assets/css/style.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
