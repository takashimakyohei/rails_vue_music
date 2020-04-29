<template>
  <body>
    <div class="nav">
      <router-link to="/" class="brand-logo">musicshelf</router-link>
      <router-link to="/create" class="music-create">曲の登録</router-link>
    </div>
  </body>
</template>

<script></script>
<style scoped>
body {
  width: 1000px;
  margin: 0 auto;
}
.nav {
  display: flex;
  justify-content: space-between;

}
.brand-logo {
  font-size: 30px;
  text-decoration: none;
  color: white;
}
.music-create {
  font-size: 20px;
  text-decoration: none;
  margin-right: 50px;
  margin-top: 5px;
  color: white;
}
.music-create:hover{
  color:#cd008e;
}
.brand-logo:hover {
  color:#cd008e;
}


</style>
