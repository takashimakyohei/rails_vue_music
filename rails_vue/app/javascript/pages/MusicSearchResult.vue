<template>
  <div class="container">
    <h1>検索結果</h1>
    <p>検索キーワード：{{$route.params.keyword}}</p>

    <div class="card">
      <div v-for="(song,i) in songs" v-bind:key="i">
        {{song.artistName}}
        {{song.trackName}}
        <img v-bind:src="song.artworkUrl100">
        <a v-bind:href="song.previewUrl">再生</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return{
      songs:[],
    }
  },
  created(){
    axios.get(`https://itunes.apple.com/search?term=${this.$route.params.keyword}&entity=song&country=JP`)
    .then(response => {
      console.log(response)
      this.songs = response.data.results
    })
  }
};
</script>

<style scoped>
.container{
 
  width: 1000px;
  margin: 0 auto;
  height: 100%;
  color:white;
}
</style>
