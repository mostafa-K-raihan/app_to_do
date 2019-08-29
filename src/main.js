import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyBD0FMUGZG2PoyIB9qY4oAC3qz-EJ0SIbw",
  authDomain: "app-to-do-9b5f6.firebaseapp.com",
  databaseURL: "https://app-to-do-9b5f6.firebaseio.com",
  projectId: "app-to-do-9b5f6",
  storageBucket: "",
  messagingSenderId: "396465448155",
  appId: "1:396465448155:web:db8ec6aa588a0ef1"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(() => {
  new Vue({
    router,
    render: h => h(App)
  }).$mount("#app");
});
