<template>
  <div style="text-align: center; padding: 10px" v-if="product !== null">
    <div class="row">
      <div class="col m6 m3" style="border: 1px solid gray">
        <img :src="product.image" :alt="product.title" />
        <h4>{{ product.title }}</h4>
        <p>{{ product.description }}</p>
        <button class="btn primary" style="margin: 10px">Buy</button>
      </div>
      <div class="col m6 m3" style="border: 1px solid gray">
        <h5>Related Products</h5>
      </div>
    </div>
    <h5>From Manufacturer</h5>
    <div class="row">
      <div class="col s4 m3" v-for="detail in product.fromManufacturer" :key="product.fromManufacturer.feature">
        <div class="card large">
          <div class="card-image">
            <img :src="detail.image" alt="detail.feature" width="50" height="50" />
          </div>
          <div class="card-title">{{detail.feature}}</div>
          <div class="card-content">{{detail.description}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getProduct from "../../composables/getProduct";
export default {
  props: ["id"],
  setup(props) {
    const { product, error, load } = getProduct(props.id);

    load();

    return { product, error };
  },
};
</script>

<style scoped>
img {
  padding: 10px;
  width: 50%;
  height: auto;
}
</style>