<template>
  <nav class="teal">
    <div class="nav-wrapper">
      <a href="#!" style="margin-left: 30px" class="brand-logo">SpanTech</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"
        ><i class="material-icons">menu</i></a
      >
      <ul class="right hide-on-med-and-down">
        <li>
          <router-link to="/"
            ><i class="material-icons left">home</i>Home</router-link
          >
        </li>
        <li>
          <router-link to="/search"
            ><i class="material-icons left">search</i>Search</router-link
          >
        </li>
        <li>
          <router-link to="/login" v-if="isLoggedin === false"
            ><i class="material-icons left">login</i>Login</router-link
          >
        </li>
        <li>
          <router-link to="/signup" v-if="isLoggedin === false"
            ><i class="material-icons left">person_add</i>Signup</router-link
          >
        </li>
        <li>
          <router-link to="/login" v-if="isLoggedin === true"
            ><i class="material-icons right">logout</i>Logout</router-link
          >
        </li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
    <li>
      <router-link to="/"
        ><i class="material-icons left">home</i>Home</router-link
      >
    </li>
    <li>
      <router-link to="/search"
        ><i class="material-icons left">search</i>Search</router-link
      >
    </li>
    <li>
      <router-link to="/login"
        ><i class="material-icons left">login</i>Login</router-link
      >
    </li>
    <li>
      <router-link to="/signup"
        ><i class="material-icons left">person_add</i>Signup</router-link
      >
    </li>
    <li>
      <router-link to="/login"
        ><i class="material-icons right">logout</i>Logout</router-link
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
      isLoggedin: false,
    };
  },
  mounted() {
    this.isLoggedin = JSON.parse(localStorage.getItem("isLoggedin"));
    console.log(this.isLoggedin);
  },
};
</script>

<style>
.material-icons {
  color: white;
}
</style>