<template>
  <div class="container">
    <h1>[Rails+Vue.js]~好きな音楽を検索&メモできる~</h1>
    <div class="card-title">
      <div class="music" v-for="music in musics" :key="music.id">
        <div v-on:click="setMusicInfo(music.id)">{{music.title}}</div>
      </div>
    </div>
    <transition>
      <div class="musicinfo" v-show="musicInfoBool">
        <p>【{{ musicInfo.title }}】</p>
        <p>アーティスト：{{musicInfo.artist}}</p>
        <p>ジャンル：{{ musicInfo.genre }}</p>
        <div class="link">
          <router-link :to="{ path: `/edit/${musicInfo.id}` }" class="editbtn">音楽の編集</router-link>
          <button v-on:click="deleteMusic(musicInfo.id)" class="deletebtn">削除</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";

export default {
  name: "musicHome",
  data: function() {
    return {
      musicInfo: {},
      musicInfoBool: false,
      musics: []
    };
  },
  mounted: function() {
    this.fetchMusics();
  },
  methods: {
    fetchMusics() {
      axios.get("/api/musics").then(
        res => {
          for (var i = 0; i < res.data.musics.length; i++) {
            this.musics.push(res.data.musics[i]);
          }
        },
        error => {
          console.log(error);
        }
      );
    },
    // 曲のタイトルをクリックしたら、詳細が表示される
    setMusicInfo(id) {
      axios.get(`api/musics/${id}.json`).then(res => {
        this.musicInfo = res.data;
        this.musicInfoBool = !this.musicInfoBool;
      });
    },
    deleteMusic(id) {
      if (confirm("Are you sure?")) {
        axios.delete(`/api/musics/${id}`).then(res => {
          this.musics = [];
          this.musicInfo = "";
          this.musicInfoBool = false;
          this.fetchMusics();
        });
      }
    }
  }
};
</script>

<style scoped>
.container {
  width: 1000px;
  margin: 0 auto;
  height: 100vh;
}
.container h1 {
  text-align: center;
  color: white;
}
.card-title {
  color: white;
  font-size: 20px;
  display: flex;
  /* justify-content: space-around; */
  flex-wrap: wrap;
}
.music {
  width: 30%;
  text-align: center;
  /* overflow-wrap: break-word; */
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 5px;
  border: 4px solid #cd008e;
  cursor: pointer;
}
.music:hover {
  background-color: #cd008e;
}
.musicinfo {
  color: white;
  border: 4px solid #cd008e;
  margin-top: 30px;
}

p {
  text-align: center;
  font-size: 23px;
}
.link {
  text-align: center;
}
.editbtn {
  margin: 0 23px;
  font-size: 21px;
  text-decoration: none;
  color: white;
}
.editbtn:hover {
  color: #cd008e;
}
button {
  color: white;
  background-color: black;
  font-size: 20px;
  border: 3px;
  cursor: pointer;
}
button:hover {
  color: #cd008e;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s;
}
.v-enter {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-leave {
  opacity: 1;
}
.v-leave-to {
  opacity: 0;
}
</style>
