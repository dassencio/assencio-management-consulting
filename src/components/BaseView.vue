<template>
  <main class="view">
    <slot></slot>
  </main>
</template>

<style scoped lang="scss">
$base-length: $view-paragraph-font-size;
.view {
  margin: 0 auto;
  padding: (0.5 * $base-length) 0;
  width: min(0.85 * $desktop-width-mode, 100% - 2 * $base-length);
  @media (min-width: $desktop-width-mode) {
    width: 0.9 * $desktop-width-mode;
  }
  :deep(section) {
    margin: (1.5 * $base-length) 0;
    @media (min-width: $desktop-width-mode) {
      margin: (2.5 * $base-length) 0;
    }
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
  }
  :deep(p) {
    color: $view-text-color-normal;
    font-size: $base-length;
    margin: $base-length 0;
    text-align: left;
    @media (min-width: $desktop-width-mode) {
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
