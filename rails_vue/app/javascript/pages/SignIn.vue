<template>
  <div class="container">
    <h1>Sign in</h1>
    <div class="col">
    <p><input type="email" placeholder="Email" v-model="email" class="form"></p>
    <p><input type="password" placeholder="Password" v-model="password" class="form"></p>
    <button @click="signIn">Signin</button>
    <p>You don't have an account? 
      <router-link to="/signup">create account now!!</router-link>
    </p>
    </div>
  </div>
</template>

<script>
import firebase from '../plugins/firebase'

export default {
  name: 'Signin',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        user => {
          alert('Success!')
          this.$router.push('/')
        },
        err => {
          alert(err.message)
        }
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 1000px;
  margin: 0 auto;
  height: 100vh;
}
.col{
  text-align: center;
}
h1{
  text-align: center;
  color: white;
}
.form {
  font-size: 25px;
}
p{
  color: white;
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