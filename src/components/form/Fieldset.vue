<template>
    <fieldset class="form__fieldset">
      <slot />
    </fieldset>
</template>

<script>
export default {
  name: 'FormFieldset'
}
</script>

<style lang="scss">
.form__fieldset {
  display: flex;
  flex-direction: column;
  margin: 9.85px 0;
}
</style>
