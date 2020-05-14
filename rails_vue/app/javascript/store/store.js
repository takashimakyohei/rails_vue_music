import Vue from "vue";
import Vuex from "vuex";
import router from "../router/router.js";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    musics: [],
    musicInfo: {},
    musicInfoBool: false,
  },
  mutations: {
    // 登録した音楽の要素数だけ、for文を回して一覧に表示させる
    fetchMusics(state) {
      state.musics = [];
      axios.get("/api/musics").then(
        (res) => {
          for (var i = 0; i < res.data.musics.length; i++) {
            state.musics.push(res.data.musics[i]);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
    setMusicInfo(state, { id }) {
      axios.get(`api/musics/${id}.json`).then((res) => {
        state.musicInfo = res.data;
        state.musicInfoBool = !state.musicInfoBool;
      });
    },
    deleteMusic(state, { id }) {
      if (confirm("Are you sure?")) {
        axios.delete(`/api/musics/${id}`).then((res) => {
          state.musicInfo = "";
          state.musicInfoBool = false;
        });
      }
    },
  },
});
