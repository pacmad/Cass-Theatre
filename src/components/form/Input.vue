<template>
    <input
      :type="typeName"
      :placeholder="placeholderName"
      :id="idName"
      :value="valueName"
      @input="$emit('input', $event.target.value)"
      :required="isRequired"
      class="form__input"
      :autocomplete="autocompleteName"
    />
</template>

<script>
export default {
  name: 'FormInput',
  props: ['typeName', 'placeholderName', 'valueName', 'idName', 'isRequired', 'autocompleteName']
}
</script>

<style lang="scss">
@import '@/styles/-media-queries';

.form__input {
  padding: 10px 10px;
  border-radius: var(--border-radius);
  width: 100%;
  transition: 0.25s all;
  background-color: var(--color-text-light);
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
