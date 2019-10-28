<template>
    <h1 class="form__title">{{title}}</h1>
</template>

<script>
export default {
  name: 'FormTitle',
  props: ['title']
}
</script>

<style lang="scss">
@import '@/styles/-media-queries';

.form__title {
  color: var(--color-text-light);
  font-weight: var(--font-weight);
  @media (--viewport-mobile) {
    font-size: 2em;
  }
  @media (--viewport-desktop) {
    font-size: 2.25em;
    text-align: center;
  }
}
</style>
