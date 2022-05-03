<template>
  <article class="item">
    <div class="item__bullet">◻️</div>
    <h2 class="item__title">{{ props.title }}</h2>
    <div class="item__empty"></div>
    <div class="item__description">
      <slot></slot>
    </div>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>

<style scoped lang="scss">
$base-length: $view-paragraph-font-size;

.item {
  align-items: center;
  display: grid;
  gap: 0.5 * $base-length;
  grid-auto-columns: min-content auto;
  grid-template-areas:
    "bullet title"
    "empty description";
  &__bullet {
    grid-area: bullet;
  }
  &__description {
    grid-area: description;
  }
  &__empty {
    grid-area: empty;
  }
  &__title {
    grid-area: title;
  }
}
</style>
