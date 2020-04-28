<template>
  <div class="container">
    <h1 class="#f3e5f5 purple lighten-5 center">音楽の登録</h1>
    <form class="col">
      <div class="row">
        <div class="input-field">
          <input placeholder="Title" type="text" class="validate" v-model="music.title" required="required"></br>
        </div>
      </div>
      <div class="row">
        <div class="input-field">
          <input placeholder="artist" type="text" class="validate" v-model="music.artist" required="required">
        </div>
      </div>
      
      <div class="row">
        <div class="input-field">
          <input placeholder="Genre" type="text" class="validate" v-model="music.genre" required="required">
        </div>
      </div>
      <button v-on:click="createMusic">音楽を登録</button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data: function() {
      return {
        music: {
          title: '',
          artist: '',
          genre: ''
        }
      }
    },
    methods: {
      createMusic: function () {
        if (!this.music.title) return;
        axios.post('/api/musics', { music: this.music }).then((res) => {
          this.$router.push({ path: '/' });
        }, (error) => {
          console.log(error);
        });
      }
    }
  }
</script>

<style scoped></style>