<template>
  <nav class="navbar-fixed orange lighten-2">
    <button
      class="navbutton"
      @click="changeFilter('all')"
      :class="{ active: selected === 'all' }"
    >
      All
    </button>
    <button
      class="navbutton"
      @click="changeFilter('vaccinated')"
      :class="{ active: selected === 'vaccinated' }"
    >
      Vaccinated
    </button>
    <button
      class="navbutton"
      @click="changeFilter('scheduled')"
      :class="{ active: selected === 'scheduled' }"
    >
      Schduled
    </button>
  </nav>
</template>

<script>
export default {
  props: ["selected"],
  methods: {
    changeFilter(by) {
      this.$emit("filterChanged", by);
    },
  },
};
</script>

<style>
.filter-nav {
  position: fixed;
  width: 100%;
}

.navbutton {
  background: none;
  border: none;
  color:black;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  margin-left: 10px;
  margin-right: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}
.filter-nav button.active {
  color: #555;
}
</style>