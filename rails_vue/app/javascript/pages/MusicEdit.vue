<template>
  <div class="container">
    <h1 class="#f3e5f5 purple lighten-5 center">音楽の編集</h1>
    <form class="col">
      <p>
        <input
          placeholder="Title"
          type="text"
          class="validate"
          v-model="music.title"
          required="required"
        />
      </p>

      <p>
        <input
          placeholder="artist"
          type="text"
          class="validate"
          v-model="music.artist"
          required="required"
        />
      </p>

      <p>
        <input
          placeholder="Genre"
          type="text"
          class="validate"
          v-model="music.genre"
          required="required"
        />
      </p>

      <button v-on:click="updateMusic(music.id)">音楽の情報を変更</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MusicEdit",
  data: function() {
    return {
      id: this.$route.params.id,
      music: {
        id: "",
        title: "",
        artist: "",
        genre: ""
      }
    };
  },
  mounted: function() {
    this.setmusicEdit(this.id);
  },
  methods: {
    setmusicEdit(id) {
      axios.get(`api/musics/${id}.json`).then(res => {
        this.music.id = res.data.id;
        this.music.title = res.data.title;
        this.music.artist = res.data.artist;
        this.music.genre = res.data.genre;
      });
    },
    updateMusic(id) {
      if (!this.music.title) return;
      axios.put(`/api/musics/${id}`, { music: this.music }).then(
        res => {
          this.$router.push({ path: "/" });
        },
        error => {
          console.log(error);
        }
      );
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
h1 {
  text-align: center;
  color: white;
}
.col {
  text-align: center;
}
button {
  font-size: 20px;
  margin-bottom: 20px;
  border: 3px;
  cursor: pointer;
  color: white;
  background-color: black;
}
button:hover {
  color: #cd008e;
}
.validate {
  font-size: 25px;
}
</style>
