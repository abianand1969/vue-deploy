<template>
  <div class="signup container">
    <!-- <form class="card-panel" @submit.prevent="handleSubmit">
      <h3 class="center teal-text">Login</h3>
      <div class="field">
        <label>Email:</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div class="field">
        <label>Password:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <div class="error" v-if="passworderror!==''">{{passworderror}}</div>
      <div class="field center">
        <button class="btn">Login</button>
      </div>
    </form> -->
    <h1>{{email}}</h1>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  inject: ["store"],
  setup(){

        email: 'subbiah.anandan@gmail.com';
        password: ref(null);
        uri: "http://localhost:3000";
        emailerror: '';
        passworderror: '';
        sharedState: this.store.state
 
        // return {
        // email,
        // password,
        // uri,
        // emailerror,
        // passworderror,
        // sharedState
        // };

 
  }
  
};
</script>

<style>
.signup {
  margin-top: 60px;
  width: 600px;
}
.signup button {
  margin-top: 10px;
}
.error{
    color: red;
    font-size: 12px;
    font-weight: bold;
}
</style>