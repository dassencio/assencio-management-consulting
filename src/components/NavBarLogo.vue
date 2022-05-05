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
  transition: $big-link-transition;
  &:active,
  &:focus,
  &:hover {
    background-color: $big-link-background-color-hover;
  }
}
.logo__img {
  height: $nav-bar-height-mobile;
  padding: 0.1 * $nav-bar-height-mobile;
  @media (min-width: $desktop-width-mode) {
    height: $nav-bar-height-desktop;
    padding: 0.1 * $nav-bar-height-desktop 0.12 * $nav-bar-height-desktop;
  }
}
</style>
