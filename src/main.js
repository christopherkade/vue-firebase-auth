// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
import firebase from 'firebase'

// For Bulma
require('./assets/sass/theme.sass')

Vue.config.productionTip = false

// Setup your Firebase config here
let app;
var config = {
  apiKey: "API-KEY",
  authDomain: "AUTH-DOMAIN",
  databaseURL: "DATABASE-URL",
  projectId: "PROJECT-ID",
  storageBucket: "",
  messagingSenderId: "MESSAGING-SENDER-ID"
};
firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      store,
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
