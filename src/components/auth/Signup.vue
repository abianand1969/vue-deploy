<template>
  <div class="signup container">
      <form class="card-panel" @submit.prevent="handleSubmit">
          <h3 class="center teal-text">Signup</h3>
          <div class="field">
              <label>First Name:</label>
              <input type="text" id="firstName" v-model="firstName">
          </div>
          <div class="field">
              <label>Last Name:</label>
              <input type="text" id="lastName" v-model="lastName">
          </div>
          <div class="field">
              <label>Email:</label>
              <input type="email" id="email" v-model="email">
          </div>
          <div class="field">
              <label>Password:</label>
              <input type="password" id="password" v-model="password">
          </div>
          <div class="center">
              <button class="btn">Create Account</button>
          </div>
      </form>
  </div>
</template>

<script>
export default {
 data() {
    return {
      firstName: "",
      lastName: "",
      email: null,
      password: null,
      uri: "http://localhost:3000/users",
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.firstName + "=====" + this.lastName);
      const newUser = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      };
      console.log(JSON.stringify(newUser));
      fetch(this.uri, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      })
        .then(() => {
          this.$router.push("/");
        })
        .catch((err) => console.log(err));
    },
  },
}
</script>

<style>
.signup{
    margin-top: 60px;
    width: 600px;
}
/* .signup button{
    margin-top: 10px;
    padding: 10px;
} */
</style>