<template>
    <label :for="forName" class="form__label">{{title}}</label>
</template>

<script>
export default {
  name: 'FormLabel',
  props: ['forName', 'title']
}
</script>

<style lang="scss">
@import '@/styles/-media-queries';

.form__label {
  margin: 15.5px 0px;
  color: var(--color-text-light);
  @media (--viewport-mobile) {
    font-size: 1.25em;
  }
  @media (--viewport-desktop) {
    font-size: 1.65em;
  }
}
</style>
