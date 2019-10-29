<template>
    <label :for="forName" class="form__label">{{title}}</label>
</template>

<script>
export default {
  name: 'FormLabel',
  props: ['forName', 'title']
}
</script>
