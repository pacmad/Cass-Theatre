<template>
    <footer class="global__footer">
      <p class="global__footer__title">
        <router-link to="/">
          Cass Theatre
        </router-link>
      </p>
      <small class="global__footer__copyright">
        &copy; Cass Theatre {{year}}
      </small>
    </footer>
</template>

<script>
export default {
  name: 'GlobalFooter',
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>
