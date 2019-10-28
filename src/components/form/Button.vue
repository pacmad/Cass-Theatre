<template>
    <button :type="typeName" class="form__button">{{ text }}</button>
</template>

<script>
export default {
  name: 'FormButton',
  props: ['text', 'typeName']
}
</script>

<style lang="scss">
@import '@/styles/-media-queries';

.form__button {
  padding: var(--padding);
  border-radius: var(--border-radius);
  width: 100%;
  margin: 25.35px 0px;
  cursor: pointer;
  transition: 0.25s all;
  background-color: var(--color-brand-4);
  &:hover {
    background-color: var(--color-brand);
    color: var(--color-text-light);
  }
  @media (--viewport-mobile) {
    font-size: 1.25em;
  }
  @media (--viewport-desktop) {
    font-size: 1.35em;
  }
}
</style>
