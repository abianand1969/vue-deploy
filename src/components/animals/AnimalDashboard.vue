<template>
  <FilterAnimal @filterChanged="selected = $event" :selected="selected"/>
  <div style="margin-top: 30px">
    <div v-for="animal in filterAnimals" :key="animal.id">
      <!-- <h1 class="animal">{{animal.name}}</h1> -->
      <Viewanimal
        :animal="animal"
        @delete="handleDelete"
        @marked="handleMarked"
      />
    </div>
  </div>
</template>

<script>
import Viewanimal from "./Viewanimal.vue";
import FilterAnimal from "./FilterAnimal.vue";

export default {
  props: ["id"],
  components: {
    Viewanimal,
    FilterAnimal,
  },
  data() {
    return {
      animals: [],
      uri: "https://dev-animals-api.herokuapp.com/animals",
      selected: 'all'
    };
  },
  methods: {
    handleDelete(id) {
      this.animals = this.animals.filter((animal) => {
        return animal.id !== id;
      });
    },
    handleMarked(id) {
      const a = this.animals.find((animal) => {
        return animal.id === id;
      });
      a.marked = !a.marked;
    },
  },
  mounted() {
    fetch(this.uri).then((res) =>
      res.json().then((data) => {
        console.log(data);
        this.animals = data;
      })
    );
  },

  computed: {
   filterAnimals() {
      if (this.selected === "vaccinated") {
        return this.animals.filter((animal) => animal.marked);
      } else if (this.selected === "scheduled") {
        return this.animals.filter((animal) => !animal.marked);
      } else {
        return this.animals.sort((x, y) => {
        let a = x.name.toUpperCase(),
          b = y.name.toUpperCase();
        return a == b ? 0 : a > b ? 1 : -1;
      });
      }
    }
  },
};
</script>

<style>
</style>