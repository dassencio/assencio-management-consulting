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
  color: $normal-link-color;
  &.router-link-active {
    color: $active-link-color;
  }
  &__text {
    display: flex;
    flex-direction: column;
    height: 0.75 * $mobile-nav-bar-height;
    justify-content: space-around;
    padding-left: 0.25 * $mobile-nav-bar-height;
    transition: $nav-bar-background-color-transition;
    &:active,
    &:hover {
      background-color: $nav-bar-hover-background-color;
    }
    @media (min-width: $desktop-width-mode) {
      align-items: center;
      flex-direction: row;
      height: 100%;
      padding: 0;
      width: 1.2 * $desktop-nav-bar-height;
    }
  }
}
</style>
