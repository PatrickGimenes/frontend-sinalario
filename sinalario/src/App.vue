<template>
  <div id="app">
    <HomePage />

    <RouterView></RouterView>
  </div>
</template>

<script>
import HomePage from "./views/HomePage.vue";

export default {
  name: "App",
  components: {
    HomePage,
  },
};
</script>

<style></style>
