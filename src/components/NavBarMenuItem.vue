<template>
  <RouterLink class="item" :to="props.route.path" @click="onItemClick"
    ><li class="item__text">{{ props.route.name }}</li></RouterLink
  >
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import type { RouteRecordRaw } from "vue-router";

const props = defineProps<{
  route: RouteRecordRaw;
}>();
const store = useStore();

function onItemClick() {
  store.dispatch("collapseMobileNavBarMenu");
}
</script>

<style scoped lang="scss">
.item {
  color: $nav-bar-link-color-normal;
  &.router-link-active {
    color: $nav-bar-link-color-active;
  }
  &__text {
    display: flex;
    flex-direction: column;
    font-size: 1.125rem;
    height: 0.75 * $nav-bar-height-mobile;
    justify-content: space-around;
    padding-left: 0.25 * $nav-bar-height-mobile;
    transition: $nav-bar-link-background-color-transition;
    &:active,
    &:hover {
      background-color: $nav-bar-link-background-color-hover;
    }
    @media (min-width: $desktop-width-mode) {
      align-items: center;
      flex-direction: row;
      height: 100%;
      padding: 0;
      width: 1.2 * $nav-bar-height-desktop;
    }
  }
}
</style>
