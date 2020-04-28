<template>
  <div class="container">
    <h1 class="#f3e5f5 purple lighten-5 center">[Rails+Vue.js]~musicshelf~</h1>

    <div v-for="music in musics">
      <span class="card-title" v-on:click="setMusicInfo(music.id)">{{ music.title }}</span>
    </div>

    <div class="row" v-show="musicInfoBool">
      タイトル【{{ musicInfo.title }}】
      アーティスト：{{ musicInfo.artist }}
      ジャンル：{{ musicInfo.genre }}
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'

  export default {
    name: 'musicHome',
    data: function() {
      return {
        musicInfo: {},
        musicInfoBool: false,
        musics: [],
      }
    },
    mounted: function() {
      this.fetchMusics();
    },
    methods: {
      fetchMusics() {
        axios.get('/api/musics')
        .then((res) => {
          for(var i = 0; i < res.data.musics.length; i++) {
            this.musics.push(res.data.musics[i]);
          }
        }, (error) => {
          console.log(error);
        });
      },
      setMusicInfo(id){
        axios.get(`api/musics/${id}.json`).then(res => {
          this.musicInfo = res.data;
          this.musicInfoBool = !this.musicInfoBool;
        });
      }
    }
  }
</script>

<style scoped></style>