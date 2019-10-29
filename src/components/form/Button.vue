<template>
    <button :type="typeName" class="form__button">{{ text }}</button>
</template>

<script>
export default {
  name: 'FormButton',
  props: ['text', 'typeName']
}
</script>
