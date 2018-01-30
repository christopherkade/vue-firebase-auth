<template>
  <div class="login">
        <img src="@/assets/logo.png">
        <h1 class="title">Sign In</h1>
        <input class="input" type="text" placeholde r="Email" v-model="email"/><br/>
        <input class="input" type="password" placeholder="Password" v-model="password"/><br/>
        <button class="button" type="submit" v-on:click="login()">Connection</button>
        <p>Don't have an account? You can <router-link to="/sign-up">create one</router-link>.</p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Login',
  data () {
      return {
          email: '',
          password: ''
      }
  },
  methods: {
      login () {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
            this.$router.replace('home')
        }, err => {
            alert(err.message)
        });
      }
  }
}
</script>

<style scoped>
.login {
    margin-top: 40px;
}

.input {    
    width: 20%;
    margin: 10px 0;
}

.button {
    margin-top: 20px;    
}

p {
    margin-top: 20px;
    font-size: 1em;
}

p a {
    cursor: pointer;
}

</style>


