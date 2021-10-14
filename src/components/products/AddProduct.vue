<template>
  <form @submit.prevent="handleSubmit">
    <h4>Add New Product</h4>
    <label>Title</label>
    <input type="text" id="text" v-model="title" />
    <label>Description</label>
    <textarea cols="30" rows="10" v-model="description"></textarea>
    <label
      >Tags<span
        ><small style="color: orange">
          Type the tag and Press Enter to Add Tag to the list</small
        ></span
      ></label
    >
    <input type="text" id="text" v-model="tag" @keydown.enter="handleKeyDown" />

    <div
      style="margin-bottom: 20px"
      v-for="tag in tags"
      :key="tag"
      class="pill"
    >
      {{ tag }}
    </div>
    <div style="margin-bottom: 20px;text-align: center">
      <button class="btn primary">Submit</button>
    </div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const title = ref("");
    const description = ref("");
    const tag = ref("");
    const tags = ref([]);

    const handleKeyDown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/g, ""); // remove all whitespace
        tags.value.push(tag.value);
      }
      tag.value = "";
    };

    const handleSubmit = () => {
      const newProduct = {
        title: title.value,
        description: description.value,
        tags: tags.value,
      };
      console.log(newProduct);
    };

    return { title, description, tag, tags, handleKeyDown, handleSubmit };
  },
};
</script>

<style scoped>
form {
  max-width: 600px;
  margin: 10px auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 10px;
  position: relative;
  font-size: 20px;
}

button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
  margin-top: 10px;
}
.pill {
  display: inline-block;
  margin: 5px 5px 0 0;
  color: #444;
  background: rgb(243, 207, 141);
  padding: 5px 10px 5px 10px;
  border-radius: 10px;
  font-size: 14px;
}
</style>