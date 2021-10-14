<template>
  <Navbar />
  <!-- <div class="prog">
    <button @click="redirect">Redirect</button>
    <button @click="back">Go Back</button>
    <button @click="forward">GO Forward</button>
 </div> -->
  <router-view />
  <Footer />
</template>

<script>
import Navbar from "../src/components/layout/Navbar.vue";
import SideNav from "../src/components/layout/SideNav.vue";
import Footer from "../src/components/layout/Footer.vue";
import { inject } from "vue";

export default {
  inject: ["store"],
  components: {
    Navbar,
    SideNav,
    Footer,
  },
  data() {
    return {
      sharedState: this.store.state,
    };
  },
  mounted() {
    // console.log(this.$store.getters.getCount);
    // console.log(this.$store.getters.loggedIn);
  },
  
  methods: {
    back() {
      this.$router.go(-1);
    },
    redirect() {
      this.$router.push("/");
    },
    forward() {
      this.$router.go(1);
    },
  },
};
</script>
<style>
.prog {
  margin: 10px auto;
  text-align: center;
}
.prog button {
  margin-left: 10px;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
}
</style>
