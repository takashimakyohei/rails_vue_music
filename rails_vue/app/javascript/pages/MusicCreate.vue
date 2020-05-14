<template>
  <div class="container">
    <h1>音楽の登録</h1>
    <form class="col">
      <p><input
        placeholder="Title"
        type="text"
        class="validate"
        v-model="music.title"
        required="required"
      /></p>

      <p><input
        placeholder="artist"
        type="text"
        class="validate"
        v-model="music.artist"
        required="required"
      /></p>

      <p><input
        placeholder="Genre"
        type="text"
        class="validate"
        v-model="music.genre"
        required="required"
      /></p>

      <button v-on:click="createMusic">音楽を登録</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      music: {
        title: "",
        artist: "",
        genre: ""
      }
    };
  },
  methods: {
    createMusic: function() {
      if (!this.music.title) return;
      axios.post("/api/musics", { music: this.music }).then(
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
h1{
  text-align: center;
  color: white;
}
.validate{
  font-size: 25px;
}

.col{
  text-align: center;
}
button{
  font-size: 20px;
  margin-bottom:20px;
    color: white;
  background-color: black;
    border: 3px;
  cursor: pointer;
}
button:hover {
  color: #cd008e;
}
</style>