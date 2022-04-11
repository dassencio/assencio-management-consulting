<template>
  <NavBar />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");

html {
  background-color: white;
  font-family: "Open Sans", sans-serif;
  height: 100%;
}
a {
  text-decoration: none;
}
</style>
