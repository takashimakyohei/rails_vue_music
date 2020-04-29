import Vue from "vue";
import VueRouter from "vue-router";
import MusicHome from "../pages/MusicHome.vue";
import MusicCreate from "../pages/MusicCreate.vue";
import MusicEdit from "../pages/MusicEdit.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "MusicHome", component: MusicHome },
  { path: "/create", name: "MusicCreate", component: MusicCreate },
  { path: "/edit/:id", name: "MusicEdit", component: MusicEdit },
];

export default new VueRouter({ routes });
