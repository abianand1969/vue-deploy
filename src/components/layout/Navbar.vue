<template>
  <div class="navbar-fixed">
    <nav class="teal">
      <div class="nav-wrapper">
        <a href="#!" style="margin-left: 30px" class="brand-logo">SpanTech</a>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"
          ><i class="material-icons">menu</i></a
        >
        <ul class="right hide-on-med-and-down">
          <li>
            <router-link to="/home"
              ><i style="color: orange" class="material-icons left">home</i
              >Home</router-link
            >
          </li>
          <li>
            <router-link to="/search"
              ><i style="color: orange" class="material-icons left">search</i
              >Search</router-link
            >
          </li>
          <li>
            <router-link to="/orderhistory"
              ><i style="color: orange" class="material-icons left">article</i
              >Your Orders</router-link
            >
          </li>
          <li v-if="!isLoggedIn">
            <router-link to="/login"
              ><i style="color: orange" class="material-icons left">login</i
              >Login</router-link
            >
          </li>
          <li v-if="!isLoggedIn">
            <router-link to="/signup"
              ><i style="color: orange" class="material-icons left"
                >person_add</i
              >Signup</router-link
            >
          </li>
          <li v-if="isLoggedIn">
            <router-link to="/profile"
              ><i style="color: orange" class="material-icons left">person</i
              >Profile</router-link
            >
          </li>
          <!-- <li v-if="isLoggedIn">
            <router-link to="/login"
              ><i style="color: orange" class="material-icons right">logout</i
              >Logout</router-link
            >
          </li> -->
          <li v-if="isLoggedIn">
            <a @click="logout">Logout <i  style="color: orange" class="material-icons left">logout</i></a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <ul style="color: orange" class="sidenav" id="mobile-demo">
    <li>
      <router-link to="/"
        ><i style="color: orange" class="material-icons left">home</i>Home</router-link
      >
    </li>
    <li>
      <router-link to="/search"
        ><i style="color: orange" class="material-icons left">search</i>Search</router-link
      >
    </li>
    <li>
      <router-link to="/orderhistory"
        ><i style="color: orange" class="material-icons left">article</i>Your Orders</router-link
      >
    </li>
    <li v-if="!isLoggedIn">
      <router-link to="/login"
        ><i style="color: orange" class="material-icons left">login</i>Login</router-link
      >
    </li>
    <li v-if="!isLoggedIn">
      <router-link to="/signup"
        ><i style="color: orange" class="material-icons left">person_add</i>Signup</router-link
      >
    </li>
    <li v-if="isLoggedIn">
      <router-link to="/signup"
        ><i style="color: orange" class="material-icons left">person_add</i>Profile</router-link
      >
    </li>
    <li v-if="isLoggedIn">
      <router-link to="/login" @click="logout"
        ><i style="color: orange" class="material-icons left">logout</i>Logout</router-link
      >
    </li>
  </ul>
</template>

<script>
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var options = {};
  var instances = M.Sidenav.init(elems, options);
});
export default {
  data() {
    return {
      // isLoggedin: false,
    };
  },
  mounted() {
    // this.isLoggedin = JSON.parse(localStorage.getItem("isLoggedin"));
    // console.log(this.isLoggedin);
    // console.log(this.$store.getters.getCount);
    // this.$store.dispatch("increment", 10);
    // console.log(this.$store.getters.getCount);
    // console.log(this.$store.getters.isLoggedIn);
  },
  created() {
    // this.isLoggedin = JSON.parse(localStorage.getItem("isLoggedin"));
    // this.isLoggedin = this.$store.getters.loggedIn;
    // console.log(this.$store.getters.loggedIn);
    // this.$store.dispatch("increment", 10);
    // console.log(this.$store.getters.getCount);
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  created() {
    this.$http.interceptors.response.use(undefined, (err) => {
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch(logout);
        }
        throw err;
      });
    });
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },
  },
};
</script>

<style>
.material-icons {
  color: white;
}
.iconcolor {
  color: orange;
}
</style>