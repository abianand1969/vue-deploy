<template>
  <FilterProduct @filterChanged="selected = $event" :selected="selected" />
  <div v-if="error" style="color: red; padding: 20px; text-align: center">
    <h1>{{ error }}</h1>
  </div>

  <div style="padding: 40px; text-align: center;" v-if="!products.length">
    <div class="preloader-wrapper big active">
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
    </div>
  </div>
  <div style="margin-top: 10px" v-else>
    <div v-for="product in filteredProducts" :key="product.id">
      <ViewProduct
        :product="product"
        @delete="handleDelete"
        @marked="handleMarked"
      />
    </div>
    <div style="color: red; padding: 20px; text-align: center" v-if="!products.length">
      <h1>No Records Found</h1>
    </div>
  </div>
</template>

<script>
import ViewProduct from "./ViewProduct.vue";
import FilterProduct from "./FilterProduct.vue";
import getProducts from "../../composables/getProducts";
import { ref } from "@vue/reactivity";

export default {
  props: ["id"],
  components: {
    ViewProduct,
    FilterProduct,
  },

  setup() {
    const selected = ref("All");
    const loading = ref(false);
    const { products, error, filteredProducts, load } = getProducts(selected);

    load()

    const handleDelete = (id) => {
      products = products.value.filter((product) => {
        return product.id !== id;
      });
    };
    const handleMarked = (id) => {
      const a = filteredProducts.value.find((product) => {
        return product.id === id;
      });
      a.marked = !a.marked;
    };

    return {
      products,
      error,
      selected,
      filteredProducts,
      loading,
      handleDelete,
      handleMarked,
    };
  },

  // data() {
  //   return {
  //     products: [],
  //     uri: this.$store.getters.getUri + "/products",
  //     selected: "all",
  //   };
  // },
  // methods: {
  //   handleDelete(id) {
  //     this.products = this.products.filter((product) => {
  //       return product.id !== id;
  //     });
  //   },
  //   handleMarked(id) {
  //     const a = this.products.find((product) => {
  //       return product.id === id;
  //     });
  //     a.marked = !a.marked;
  //   },
  // },
  // mounted() {
  //   fetch(this.uri, { mode: "cors" })
  //     .then((res) => res.json())
  //     .then((data) => (this.products = data))
  //     .catch((err) => console.log(err));
  // },

  // computed: {
  //   filterProducts() {
  //     if (this.selected === "men's clothing") {
  //       return this.products.filter(
  //         (product) => product.category === "men's clothing"
  //       );
  //     } else if (this.selected === "women's clothing") {
  //       return this.products.filter(
  //         (product) => product.category === "women's clothing"
  //       );
  //     } else if (this.selected === "electronics") {
  //       return this.products.filter(
  //         (product) => product.category === "electronics"
  //       );
  //     } else {
  //       return this.products.sort((x, y) => {
  //         let a = x.title.toUpperCase(),
  //           b = y.title.toUpperCase();
  //         return a == b ? 0 : a > b ? 1 : -1;
  //       });
  //     }
  //   },
  // },
};
</script>

<style>

</style>