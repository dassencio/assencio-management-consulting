<template>
  <a class="card" :href="props.url"
    ><img :alt="props.name" class="card__icon" :src="props.image"
  /></a>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string;
  name: string;
  url: string;
}>();
</script>

<style scoped lang="scss">
$base-width: $view-paragraph-font-size;

.card {
  display: flex;
  filter: opacity(75%);
  transition: $big-link-transition;
  &:active,
  &:focus,
  &:hover {
    filter: opacity(100%);
  }
  &__icon {
    border-radius: 0.5 * $base-width;
    width: 6 * $base-width;
  }
}
</style>
