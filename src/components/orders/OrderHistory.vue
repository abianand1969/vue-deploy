<template>
  <div>
    <filter-orders></filter-orders>
    <div class="row">
      <div class="col m6">
        <ul class="collection with-header">
          <li class="collection-header"><h4>Your Orders</h4></li>
          <li class="collection-item">
            <div>
              1 TB External HDD<a href="#!" class="secondary-content"
                ><i class="material-icons">send</i></a
              >
            </div>
          </li>
          <li class="collection-item">
            <div>
              21" Acer FHD Smart TV<a href="#!" class="secondary-content"
                ><i class="material-icons">send</i></a
              >
            </div>
          </li>
          <li class="collection-item">
            <div>
              Lenovo 14" Convertible Laptop<a href="#!" class="secondary-content"
                ><i class="material-icons">send</i></a
              >
            </div>
          </li>
          <li class="collection-item">
            <div>
              Lenovo Wireless Mouse<a href="#!" class="secondary-content"
                ><i class="material-icons">send</i></a
              >
            </div>
          </li>
        </ul>
      </div>
      <div class="col m6">
        <div class="card">
          <div class="card-title primary" style="padding: 10px; font-weight: bold; color: orange">Order Detail</div>
          <div class="card-content">
            <h5>Product: 1 TB External HDD</h5>
            <p>Date of Purchase: 20th Sep 2021</p>
            <p>Price: 24$</p>
            <br>
            <button class="btn primary">Buy Again</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FilterOrders from "./FilterOrders.vue";
export default {
  components: {
    FilterOrders,
  },
};
</script>

<style>
</style>