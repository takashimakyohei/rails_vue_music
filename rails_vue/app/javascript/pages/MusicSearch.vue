<template>
  <div class="container">
    <h1>音楽検索</h1>
    <form>
      <input type="text" class="form" placeholder="アーティスト名を入力してください" v-model="keyword" />
      <button v-on:click="search">検索</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: ""
    };
  },
  methods: {
    search() {
      this.$router.push(`/result/${this.keyword}`);
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
  color: white;
  text-align: center;
}
form {
  text-align: center;
  margin-top: 40px;
  margin-left: 40px;
}
.form {
  font-size: 25px;
}
button {
  font-size: 20px;
  margin-bottom: 20px;
  color: white;
  background-color: black;
  border: 3px;
  cursor: pointer;
}
button:hover {
  color: #cd008e;
}
</style>