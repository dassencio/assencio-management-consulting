<template>
  <RouterLink class="logo" key="/" to="/" @click="onLogoClick"
    ><img class="logo__img" src="@/assets/assencio.gif"
  /></RouterLink>
</template>

<script setup lang="ts">
import { useStore } from "vuex";

const store = useStore();

function onLogoClick() {
  store.dispatch("collapseMobileNavBarMenu");
}
</script>

<style scoped lang="scss">
.logo {
  display: flex;
}
.logo__img {
  height: $mobile-nav-bar-height;
  padding: 0.1 * $mobile-nav-bar-height;
  transition: $nav-bar-background-color-transition;
  &:active,
  &:hover {
    background-color: $nav-bar-hover-background-color;
  }
  @media (min-width: $desktop-width-mode) {
    height: $desktop-nav-bar-height;
    padding: 0.1 * $desktop-nav-bar-height 0.12 * $desktop-nav-bar-height;
  }
}
</style>
