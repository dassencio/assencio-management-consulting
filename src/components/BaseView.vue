<template>
  <main class="view">
    <slot></slot>
  </main>
</template>

<style scoped lang="scss">
$base-length: $view-paragraph-font-size;
.view {
  margin: 0 auto;
  max-width: $desktop-width-mode;
  padding: (0.25 * $base-length) $base-length;
  @media (min-width: $desktop-width-mode) {
    padding: $base-length (2 * $base-length);
  }
  :deep(.slogan) {
    color: $view-title-color;
    font-size: 2 * $base-length;
    margin: (2 * $base-length) auto;
    max-width: 0.7 * $desktop-width-mode;
    text-align: center;
  }
  :deep(.title) {
    color: $view-title-color;
    font-size: 1.5 * $base-length;
    margin: (2 * $base-length) 0 $base-length 0;
  }
  :deep(p) {
    color: $view-text-color-normal;
    font-size: $base-length;
    margin: $base-length 0;
    text-align: left;
    @media (min-width: $desktop-width-mode) {
      margin: $base-length 0;
      text-align: justify;
    }
  }
  :deep(a) {
    color: $view-link-color-normal;
    &:active,
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
