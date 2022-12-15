import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createRouter, createWebHashHistory } from "vue-router";
import ListingPage from "./components/listing.vue";
import CreatePage from "./components/create-film.vue";
import UpdatePage from "./components/update-film.vue";
import loginPage from "./components/login.vue";
const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
});
app.use(vuetify);
const routes = [
  { path: "/listing", component: ListingPage },
  { path: "/create", component: CreatePage },
  { path: "/update", component: UpdatePage },
  { path: "/update/:id", component: UpdatePage },
  { path: "/login", component: loginPage },
  { path: "/", component: loginPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
app.use(router);
app.mount("#app");
