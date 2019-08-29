<template>
  <div class="sign_up">
    <p>Let's create a new account! Shall we?</p>
    <input type="text" placeholder="Email" v-model="email" /><br />
    <input type="password" placeholder="Password" v-model="pwd" /><br />
    <button @click="signup">Sign up</button>
    <span>or go back to <router-link to="login">login</router-link></span>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      pwd: ""
    };
  },
  methods: {
    signup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.pwd)
        .then(
          () => {
            alert("Your account has been created!");
          },
          err => {
            alert("Oops! " + err.message);
          }
        );
    }
  }
};
</script>

<style scoped>
.sign_up {
  margin-top: 40px;
}

input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}

button {
  margin-top: 10px;
  width: 10%;
  cursor: pointer;
}

span {
  display: block;
  margin-top: 20px;
  font-size: 13px;
}
</style>
