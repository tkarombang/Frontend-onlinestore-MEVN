import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/app";
import VueLazyload from "vue3-lazyload";

const app = createApp(App)
app.use(VueLazyload)
app.use(router)
app.mount("#app");
