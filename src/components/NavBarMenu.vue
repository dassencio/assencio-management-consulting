<template>
  <ul class="menu">
    <NavBarMenuItem v-for="route in routes" :key="route.path" :route="route" />
  </ul>
</template>

<script setup lang="ts">
import { routes } from "@/router";
import NavBarMenuItem from "./NavBarMenuItem.vue";
</script>

<style scoped lang="scss">
.menu {
  display: flex;
  flex-direction: column;
  @media (min-width: $desktop-width-mode) {
    flex-direction: row;
    height: 100%;
  }
}
</style>
