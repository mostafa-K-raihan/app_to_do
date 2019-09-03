<template>
  <div class="home">
    <button @click="logout">Logout</button>
    <div class="container">
      <div class="app_display"> <span class="title"><router-link to="/home/apps">All Apps</router-link></span> </div>
      <div class="app_new"><span class="title"><router-link to="/home/create">Create New</router-link></span> </div>
      
    </div>
    <router-view></router-view>
    
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from "firebase";
export default {
  name: "home",
  components: {},
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  }
};
</script>

<style scoped>


.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  /* width: 100vw; */
  
  height: 10vh;
  grid-gap: .5rem;
  /* margin: 1rem; */
}

.app_display, .app_new{
  /* height: 5%; */
  border: 1px solid #105b9f;
  display: grid;
  align-items: center;
  padding: 1rem;
}

.title {

  line-height: 1.1rem;
  letter-spacing: 1.2 rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;

  
}

</style>
