<template>
  <button class="icon" @click="onIconClick">
    <span :class="iconLineClasses"></span>
    <span :class="iconLineClasses"></span>
    <span :class="iconLineClasses"></span>
  </button>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";

const store = useStore();

function onIconClick() {
  store.dispatch("toggleMobileNavBarMenu");
}

const iconLineClasses = computed(() => ({
  icon__line: true,
  "icon__line--active": store.getters.isMobileNavBarMenuExpanded,
}));
</script>

<style scoped lang="scss">
$border-width: $primary-line-width;
$outer-size: 0.64 * $mobile-nav-bar-height;
$inner-size: $outer-size - 2 * $border-width;
$half-inner-size: 0.5 * $inner-size;
$inner-padding-y: 0.63 * $half-inner-size;
$line-height: 2 * $primary-line-width;
$half-line-height: 0.5 * $line-height;
$line-width: 0.57 * $inner-size;
$line-border-radius: $half-line-height;
$margin-right: 0.5 * ($mobile-nav-bar-height - $outer-size);
$line-translation: $half-inner-size - $inner-padding-y - $half-line-height;

.icon {
  align-items: center;
  border-radius: 10%;
  border: $border-width solid $primary-line-color;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: $outer-size;
  justify-content: space-between;
  margin-right: $margin-right;
  padding: $inner-padding-y 0;
  width: $outer-size;
  &:active,
  &:hover {
    filter: brightness(50%);
  }
  &__line {
    background: $primary-line-color;
    border-radius: $line-border-radius;
    height: $line-height;
    opacity: 1;
    transition: all 0.15s ease-out;
    width: $line-width;
    &--active {
      &:nth-of-type(1) {
        transform: translateY($line-translation) rotate(45deg) scaleX(1.1);
      }
      &:nth-of-type(2) {
        opacity: 0;
      }
      &:nth-of-type(3) {
        transform: translateY(-$line-translation) rotate(-45deg) scaleX(1.1);
      }
    }
  }
}
</style>
