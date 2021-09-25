<template>
  
  <div class="center">
    <Carousel/>
    <h1 class="zoom">Home Page</h1>
    <h3>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eligendi
      aliquam provident labore reiciendis ipsam animi nihil suscipit eaque
      pariatur, nobis incidunt illum consequatur dicta harum, expedita debitis
      nemo atque voluptate, vitae est similique? Ea quaerat eligendi, corrupti
      beatae iste ut nulla laboriosam hic a pariatur est nam officia. Maiores
      optio labore, dolorum aliquam rem, totam dolores iusto quia repudiandae at
      nemo reiciendis delectus? Asperiores quia vero unde temporibus nobis
      eligendi a aperiam, voluptatum amet porro harum accusantium illum id fugit
      dolore officia totam voluptatibus libero delectus repellendus, non
      dolores? Est facilis facere, quas dolorum vero ea obcaecati nobis
      voluptas!
    </h3>
  </div>
</template>

<script>
import Carousel from  '../components/layout/Carousel.vue'
import { inject } from "vue";
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var options = { fullWidth: true};
    var instances = M.Carousel.init(elems, options);
  });

export default {
  name: "Home",
  inject: ["store"],
  // setup() {
  //   const store = inject("store");
  //   return {
  //     sharedState: store.state,
  //   };
  // },
  data(){
    return{
      sharedState: this.store.state
    }
  },
  components: {
    Carousel
  },
 mounted(){
    console.log(this.sharedState.isAuthenticated)
 }
};
</script>

<style scoped>
.zoom {
  font-size: 70px;
  margin-top: 10px;
}
</style>