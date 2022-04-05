<template>
  <header class="nav-bar-wrapper">
    <nav class="desktop-nav-bar">
      <NavBarLogo />
      <NavBarMenu />
    </nav>
    <nav class="mobile-nav-bar">
      <NavBarLogo class="mobile-nav-bar__logo" />
      <NavBarMenuIcon class="mobile-nav-bar__menu-icon" />
      <CollapseTransition
        v-show="store.getters.isMobileNavBarMenuExpanded"
        :duration="300"
        easing="ease-out"
      >
        <NavBarMenu class="mobile-nav-bar__menu" />
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
  border-bottom: $primary-line-width solid $primary-line-color;
  .desktop-nav-bar {
    display: none;
    height: $desktop-nav-bar-height;
    @media (min-width: $desktop-width-mode) {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin: auto;
      max-width: $max-page-width;
    }
  }
  .mobile-nav-bar {
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
