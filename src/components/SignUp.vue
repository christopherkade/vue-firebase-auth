<template>
  <div class="sign-up">
      <img src="@/assets/logo.png">
      <h1 class="title">Creating an account</h1>
      <input class="input" type="text" placeholder="Email" v-model="email"/> <br/>
      <input class="input" type="password" placeholder="Password" v-model="password"/> <br/>
      <button class="button" v-on:click="signUp()">Sign Up</button>
        <span>
          Or, you can 
          <router-link to="/login">go back to login.</router-link>
        </span>
  </div>
</template>

<script>
import firebase from 'firebase'

// UNUSED

export default {
  name: "SignUp",
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    signUp () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(() => {
        this.$router.replace('home')
      }, err => {
        alert(err.message);
      });
    }
  }
};
</script>

<style scoped>
.sign-up {
  margin-top: 40px;
}

.input {
  margin: 10px 0;
  width: 20%;
}

.button {
  margin-top: 20px;
}

span {
  display: block;
  margin-top: 20px;
  font-size: 1em;
}
</style>


