<template>
  <div class="background">
    <div class="container">
        <h1>検索結果</h1>
      
      <!-- <img src="require('~/static/images/play.png')"> -->
      <!-- <img src="./static/images/play.png"/> -->
      <p>検索キーワード：{{$route.params.keyword}}</p>
      <div v-for="(song,i) in songs" v-bind:key="i">
        <div class="card-info">
          <img v-bind:src="song.artworkUrl100" />
          <p class="card-content">
            <a v-bind:href="song.previewUrl"><img src="/img/play.png" style="width:25px"></a>
          </p>
          <p class="card-content">{{song.artistName}}</p>
          <p class="card-content">{{song.trackName}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      songs: []
    };
  },
  created() {
    axios
      .get(
        `https://itunes.apple.com/search?term=${this.$route.params.keyword}&entity=song&country=JP`
      )
      .then(response => {
        console.log(response);
        this.songs = response.data.results;
      });
  }
};
</script>

<style scoped>
.background {
  width: 100%;
  height: auto;
  background: linear-gradient(to top, black, #cd008e);
  background-attachment: fixed;
}
.container {
  width: 1000px;
  margin: 0 auto;
  height: auto;
  color: white;
}

.card-info {
  display: flex;
  padding: 17px 0px;
}
.card-content {
  margin: 37px 5px 0px 5px;
}
a {
  font-size: 20px;
  text-decoration: none;
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
