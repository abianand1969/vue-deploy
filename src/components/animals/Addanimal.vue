<template>
  <form @submit.prevent="addNewAnimal">
    <label>Animal Name:</label>
    <input type="text" id="text" v-model="name" required />
    <label>Note:</label>
    <textarea cols="30" rows="10" v-model="note"></textarea>
    <button>Add Animal</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      note: "",
      marked: false,
      uri: "http://localhost:3000/animals",
    };
  },
  methods: {
    addNewAnimal() {
      console.log(this.name + "=====" + this.note);
      const newAnimal = {
        name: this.name,
        note: this.note,
        marked: this.marked,
      };
      console.log(JSON.stringify(newAnimal));
      fetch(this.uri, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newAnimal),
      })
        .then(() => {
          this.$router.push("/");
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
form {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 600px;
  margin: 20px auto;
  text-align: left;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid gray;
  width: 100%;
}

label {
  display: block;
  text-transform: uppercase;
  margin: 20px 0 10px 0;
  font-size: 14px;
  font-weight: bold;
}
textarea {
  border: 1px solid gray;
  padding: 10px;
  width: 100%;
  height: 100%;
}
form button {
  display: block;
  margin: 20px auto 0;
  border: 0;
  border-radius: 10px;
  padding: 10px;
  background: blue;
  color: white;
  font-size: 16px;
  font-weight: bold;
}
</style>