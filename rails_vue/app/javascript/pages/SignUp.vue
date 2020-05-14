<template>
  <div class="container">
    <h1>Sign up</h1>
    <div class="col">
    <p><input type="email" placeholder="Email" v-model="email" class="form"></p>
    <p><input type="password" placeholder="Password" v-model="password" class="form"></p>
    <button @click="signUp">Register</button>
    <p>Do you have an account?
      <router-link to="/signin">sign in now!!</router-link>
    </p>
    </div>
  </div>
</template>

<script>
import firebase from '../plugins/firebase'
export default {
  name: 'Signup',
  data() {
    return {
      email: '',
      password: '',
      user: null,
    }
  },
  methods: {
    signUp: function() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          alert("アカウントが作成できました。サインイン画面に遷移します")
          this.$router.push('/signin')
          // let newUser = {
          //   uid: user.user.uid,
          //   email: this.email
          // }
        })
        .catch(error => {
          alert(error.message)
        })
    }

  }
}
</script>

<style scoped>
.container {
  width: 1000px;
  margin: 0 auto;
  height: 100vh;
}
.col{
  text-align: center;
}
.form{
  font-size: 25px
}
h1{
  text-align: center;
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
p{
  font-size: 20px;
  color: white;
}
</style>