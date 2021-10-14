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
      <div class="error" v-if="passworderror !== ''">{{ passworderror }}</div>
      <div class="field center">
        <button class="btn">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  inject: ["store"],
  data() {
    return {
      email: null,
      password: null,
      uri: this.$store.getters.getUri,
      emailerror: "",
      passworderror: "",
    };
  },
  methods: {
    async handleSubmit() {
      console.log(this.email + "---" + this.password);
      // fetch(`${this.uri}/auth/login`, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email: this.email, password: this.password }),
      // })
      // axios({
      //   method: "post",
      //   url: this.$store.getters.getUri + "/auth/login",
      //   data: {
      //     email: this.email,
      //     password: this.password,
      //   },
      // })
      // .then((res) => {
      //   console.log(res)
      //   return res.json();
      // })
      // .then((res) => {
      //   console.log(res.data);
      //   if (res.length !== 0) {
      //     if (res.data.status === "passed") {
      //       console.log("login success");
      //       this.$router.push("/products");
      //       localStorage.setItem("isLoggedin", true);
      //     } else {
      //       console.log("login failed");
      //       this.emailerror = "email not found";
      //       this.passworderror =
      //         "Email or Password Not Matching, Try with Correct One";
      //       localStorage.setItem("isLoggedin", false);
      //       this.$router.push("/login");
      //     }
      //   } else {
      //     console.log("login failed");
      //     this.emailerror = "email not found";
      //     this.passworderror =
      //       "Email or Password Not Matching, Try with Correct One";
      //     localStorage.setItem("isLoggedin", false);
      //     this.$router.push("/login");
      //   }
      // })
      // .catch((err) => console.log(err));
      this.$store
        .dispatch("authenticate", {
          email: this.email,
          password: this.password,
        })
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err));
    },
  },
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
.error {
  color: red;
  font-size: 12px;
  font-weight: bold;
}
</style>