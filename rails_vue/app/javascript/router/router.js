import Vue from "vue";
import VueRouter from "vue-router";
import MusicHome from "../pages/MusicHome.vue";
import MusicCreate from "../pages/MusicCreate.vue";
import MusicEdit from "../pages/MusicEdit.vue";
import MusicSearch from "../pages/MusicSearch.vue";
import MusicSearchResult from "../pages/MusicSearchResult.vue";


Vue.use(VueRouter);
// Vue.use(VuePaginate);

const routes = [
  { path: "/", name: "MusicHome", component: MusicHome },
  { path: "/create", name: "MusicCreate", component: MusicCreate },
  { path: "/edit/:id", name: "MusicEdit", component: MusicEdit },
  { path: "/search", name: "MusicSearch", component: MusicSearch },  
  { path: "/result/:keyword", name: "MusicSearchResult", component: MusicSearchResult },


];

export default new VueRouter({ routes });
