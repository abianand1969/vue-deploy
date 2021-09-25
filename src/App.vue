<template>
  <Navbar />
 <div class="prog">
    <button>Redirect</button>
    <button @click="back">Go Back</button>
      <button>GO Forward</button>
 </div>
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
      sharedState: this.store.state
    };
  },
  mounted(){
    console.log(this.sharedState)
  },
  methods:{
    back(){
      this.$router.go(-1)
    }
  }
};
</script>
<style>
.prog{
  margin: 10px auto;
  text-align: center;
}
</style>
