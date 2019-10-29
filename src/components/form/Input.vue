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
