<template>
  <div class="animal" :class="{marked: animal.marked}">
    <div class="actions">
      <h3 @click="showDetails = !showDetails">{{ animal.name }}</h3>
      <div class="icons">
        <span class="material-icons" @click="deleteAnimal"> delete </span>
        <router-link :to="{ name: 'Editanimal', params: { id: animal.id}}">
          <span class="material-icons">edit</span>
        </router-link>
        <span class="material-icons" @click="markAnimal"> done </span>
      </div>
    </div>
    <div class="details" v-if="showDetails">
      <p>{{ animal.note }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["animal"],
  data() {
    return {
      showDetails: false,
      uri: "http://localhost:3000/animals/" + this.animal.id,
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
    deleteAnimal() {
      fetch(this.uri, {
        method: "DELETE"
      }).then(() => {
          this.$emit('delete', this.animal.id)
      }).catch(err => {
          console.log(err)
      })
    },
    markAnimal(){
       fetch(this.uri, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({marked: !this.animal.marked}),
      })
        .then(() => {
          this.$emit('marked', this.animal.id);
        })
        .catch((err) => console.log(err));
    }
  },
  computed: {},
};
</script>

<style>
.animal {
  width: 600px;
  margin: 10px auto;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 10px;
  text-align: left;
  border-left: 10px solid red;
}
h3 {
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
.animal.marked {
  border-left: 10px solid green;
}
</style>