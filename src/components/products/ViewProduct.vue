<template>
  <div class="product" :class="{ marked: product.marked }">
    <div class="actions">
      <img :src="product.image" alt="No-Image" width="50" height="50"/>
      <router-link :to="{name: 'Details', params: {id: product.id}}">
         <h5 @click="showDetails = !showDetails">{{ product.title }}</h5>
      </router-link>
     
      <div class="icons">
        <span class="material-icons" @click="deleteproduct"> delete </span>
        <router-link :to="{ name: 'EditProduct', params: { id: product.id } }">
          <span class="material-icons">edit</span>
        </router-link>
        <span class="material-icons" @click="markproduct"> done </span>
      </div>
    </div>
    <div class="details" v-if="showDetails">
      <p>{{ product.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {
      showDetails: false,
      uri: this.$store.getters.getUri + "/" + this.product.id,
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
    deleteproduct() {
      fetch(this.uri, {
        method: "DELETE",
      })
        .then(() => {
          this.$emit("delete", this.product.id);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    markproduct() {
      fetch(this.uri, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ marked: !this.product.marked }),
      })
        .then(() => {
          this.$emit("marked", this.product.id);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
.product {
  width: 1000px;
  margin: 10px auto;
  padding: 20px;
  border: 1px solid gray;
  border-radius: 10px;
  text-align: left;
  border-left: 10px solid red;
}
h5 {
  cursor: pointer;
}
.material-icons {
  font-size: 24px;
  margin-left: 5px;
  color: gray;
  cursor: pointer;
}
.material-icons:hover {
  color: blue;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product.marked {
  border-left: 10px solid green;
}
img{
  width:5%;
  height:auto;
}
</style>