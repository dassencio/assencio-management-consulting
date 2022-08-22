<template>
  <NavBar />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
</script>

<style lang="scss">
@font-face {
  font-family: "Open Sans Regular";
  src: url("@/assets/opensans-regular.ttf") format("truetype");
}
@font-face {
  font-family: "Open Sans Medium";
  src: url("@/assets/opensans-medium.ttf") format("truetype");
}

html {
  background-color: white;
  font-family: "Open Sans Regular", sans-serif;
  height: 100%;
}
h1,
h2 {
  font-family: "Open Sans Medium", sans-serif;
  font-weight: normal;
}
a {
  text-decoration: none;
}
</style>
