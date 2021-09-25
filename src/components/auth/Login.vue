<template>
  <div class="signup container">
    <form class="card-panel" @submit.prevent="handleSubmit">
      <h3 class="center teal-text">Login</h3>
      <div class="field">
        <label>Email:</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <!-- <div class="error" v-if="emailerror!==''">{{emailerror}}</div> -->
      <div class="field">
        <label>Password:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <div class="error" v-if="passworderror!==''">{{passworderror}}</div>
      <div class="field center">
        <button class="btn">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  inject: ["store"],
  data() {
    return {
      email: null,
      password: null,
      uri: "http://localhost:3000",
      emailerror: '',
      passworderror: '',
      sharedState: this.store.state
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.email + "---" + this.password);
      fetch(`${this.uri}/users/?email=${this.email}&password=${this.password}`, {
        method: "GET",
      })
        .then((res) => {console.log(res) ; return res.json()})
        .then((data) => {
            console.log(data)
          if (data.length !== 0) {
            console.log("login success");
            this.store.setIsAuthenticated(true)
            this.$router.push("/dashboard");
            localStorage.setItem('isLoggedin', true)
          } else{
              console.log('login failed')
              this.emailerror = 'email not found'
              this.passworderror = 'Email or Password Not Matching, Try with Correct One'
              localStorage.setItem('isLoggedin', false)
              this.$router.push("/login");
          }
        })
        .catch((err) => console.log(err));
    },
  },
  mounted(){
    localStorage.setItem('isLoggedin', false)
    console.log(this.sharedState.isAuthenticated)
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