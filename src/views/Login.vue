<template>
  <div class="login">
    <img alt="logo" src="../assets/logo.png" />
    <h3>Sign In</h3>
    <input type="text" placeholder="Email" v-model="email" /><br />
    <input type="password" placeholder="Password" v-model="pwd" /><br />
    <button @click="login">Connect</button>
    <p>
      Don't have an account? <router-link to="/sign-up">Sign Up!</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "login",
  data() {
    return {
      email: "",
      pwd: ""
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.pwd)
        .then(
          () => {
            alert("Successfully Logged In");
            this.$router.replace("home");
          },
          err => {
            alert("Oops! " + err.message);
          }
        );
      // this.$router.replace("home");
    }
  }
};
</script>

<style scoped>
.login {
  margin-top: 40px;
}

input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}

button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}

p {
  margin-top: 40px;
  font-size: 13px;
}

p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
