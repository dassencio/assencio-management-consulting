<template>
  <header class="nav-bar-wrapper">
    <nav class="nav-bar-desktop">
      <NavBarLogo />
      <NavBarMenu />
    </nav>
    <nav class="nav-bar-mobile">
      <NavBarLogo class="nav-bar-mobile__logo" />
      <NavBarMenuIcon class="nav-bar-mobile__menu-icon" />
      <CollapseTransition
        v-show="store.getters.isMobileNavBarMenuExpanded"
        :duration="300"
        easing="ease-out"
      >
        <NavBarMenu class="nav-bar-mobile__menu" />
      </CollapseTransition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import CollapseTransition from "@/contrib/CollapseTransition.vue";
import NavBarLogo from "./NavBarLogo.vue";
import NavBarMenu from "./NavBarMenu.vue";
import NavBarMenuIcon from "./NavBarMenuIcon.vue";

const store = useStore();
</script>

<style scoped lang="scss">
.nav-bar-wrapper {
  border-bottom: $nav-bar-line-width solid $nav-bar-line-color;
  .nav-bar-desktop {
    display: none;
    height: $nav-bar-height-desktop;
    @media (min-width: $desktop-width-mode) {
      display: flex;
      justify-content: space-between;
      margin: auto;
      max-width: 1.1 * $desktop-width-mode;
    }
  }
  .nav-bar-mobile {
    align-items: center;
    display: grid;
    grid-template-areas:
      "logo menu-icon"
      "menu menu";
    @media (min-width: $desktop-width-mode) {
      display: none;
    }
    &__logo {
      grid-area: logo;
    }
    &__menu-icon {
      grid-area: menu-icon;
      justify-self: end;
    }
    &__menu {
      grid-area: menu;
    }
  }
}
</style>
