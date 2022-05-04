<template>
  <a class="item" :href="props.url"
    ><img class="item__logo" :alt="props.name" :src="props.image" />
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string;
  name: string;
  url: string;
}>();
</script>

<style scoped lang="scss">
$base-length: $view-paragraph-font-size;

.item {
  align-items: center;
  border-radius: 0.4 * $base-length;
  display: flex;
  height: 100%;
  padding: $base-length;
  transition: $big-link-background-color-transition;
  &:active,
  &:focus,
  &:hover {
    background-color: $big-link-background-color-hover;
  }
  &__logo {
    height: auto;
    width: 100%;
  }
}
</style>
