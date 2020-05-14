<template>
  <div class="container">
    <h1>[Rails+Vue.js]~好きな音楽を検索&メモできる~</h1>
    <router-link to="/signup" class="editbtn">サインアップ</router-link>
        <router-link to="/signin" class="editbtn">サインイン</router-link>
      <button @click="signOut">サインアウト</button>
<p>{{name}}さん、ようこそ</p>
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
import firebase from 'firebase'

export default {
  name: "musicHome",
  data(){
    return{
      name: firebase.auth().currentUser.email
    }
  },
  computed: {
    musics() {
      return this.$store.state.musics
    },
    musicInfo(){
      return this.$store.state.musicInfo
    },
    musicInfoBool(){
      return this.$store.state.musicInfoBool
    }
  },
  mounted: function() {
    this.$store.commit("fetchMusics")
  },
  methods: {
    // 曲の詳細を表示する、setMusicInfoをコミットする→vuexストアのsetMusicInfoが発火する
    setMusicInfo(id){
      this.$store.commit('setMusicInfo',{id})
    },
    deleteMusic(id){
      this.$store.commit('deleteMusic',{id})
      this.$store.commit('fetchMusics')
    },
    signOut: function () {
      firebase.auth().signOut().then(() => {
        this.$router.push('/signin')
      })
    },

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
.name{
  color:white;
}
p {
  text-align: center;
  font-size: 23px;
  color: white;
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
