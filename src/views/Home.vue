<template>
  <FilterProduct @filterChanged="selected = $event" :select="selected" />
  <div v-if="error" style="color: red; padding: 20px; text-align: center">
    <h1>{{ error }}</h1>
  </div>

  <div style="padding: 40px; text-align: center" v-if="!products.length">
    <!-- <div class="preloader-wrapper big active">
      <div class="spinner-layer spinner-blue-only">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div> -->
    <Spinner />
  </div>
  <div class="row" v-else>
    <div
      class="col s4 m3"
      v-for="product in filteredProducts"
      :key="product.id"
    >
      <div class="card large" style="cursor: pointer">
        <router-link :to="{ name: 'Details', params: { id: product.id } }">
          <div style="padding: 10px" class="card-image">
            <img :src="product.image" />
          </div>
        </router-link>
        <div
          class="card-title"
          style="
            padding: 10px;
            color: crimson;
            font-weight: bold;
            font-size: 14px;
            text-align: center;
          "
        >
          {{ product.title }}
        </div>
        <div class="card-content">
          {{ product.description.substring(0, 50) }} ...
        </div>
        <div class="card-action">
          <button class="btn primary">Buy</button>
          <button style="margin-left: 10px" class="btn primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";

import FilterProduct from "../components/products/FilterProduct.vue";
// using composables
import getProducts from "../composables/getProducts";
import Spinner from "../components/layout/Spinner.vue";

export default {
  name: "Home",
  setup() {
    const selected = ref("All");
    const { products, error, filteredProducts, load } = getProducts(selected);

    load();

    return { products, error, selected, filteredProducts };
  },
  components: {
    FilterProduct,
    Spinner,
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
img {
  padding: 10px;
  width: 50%;
  height: auto;
}

</style>
