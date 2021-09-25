<template>
  <form @submit.prevent="updateAnimal">
    <label>Animal Name:</label>
    <input type="text" id="text" v-model="name" required />
    <label>Note:</label>
    <textarea cols="30" rows="10" v-model="note"></textarea>
    <button>Update Animal</button>
  </form>
</template>

<script>
export default {
props: ['id'],
data(){
    return{
        name: '',
        note: '',
        marked: false,
        uri: 'http://localhost:3000/animals/' + this.id
    }
},

methods:{
    updateAnimal() {
        const editedAnimal = {
        name: this.name,
        note: this.note,
        marked: this.marked,
      };
      console.log(JSON.stringify(editedAnimal));
      fetch(this.uri, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editedAnimal),
      })
        .then(() => {
          this.$router.push("/");
        })
        .catch((err) => console.log(err));
    }
},

mounted(){
    fetch(this.uri, {
        method: "GET",
      }).then(res => res.json())
        .then(data => {
            this.name = data.name,
            this.note = data.note,
            this.marked = data.marked
        })
        .catch((err) => console.log(err));
}

};
</script>

<style>
</style>