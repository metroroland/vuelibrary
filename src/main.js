import { createApp } from "vue";
import VueOnsen from "vue-onsenui"; // This imports 'onsenui', so no need to import it separately
import App from "./App.vue";

//Vue.use(VueOnsen);

const app = createApp(App);

app.use(VueOnsen);
app.mount("#app");
