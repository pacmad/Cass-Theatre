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

<style lang="scss">
@import '@/styles/-media-queries';

.global__footer {
  background-color: var(--color-brand);
  box-shadow: 1px 1px 5px #0000009c;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  width: 100%;
  & .global__footer__title {
    color: var(--color-text-light);
    font-weight: var(--font-weight);
    @media (--viewport-mobile) {
      font-size: 2.15em;
    }
    @media (--viewport-desktop) {
      font-size: 2.65em;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
  }
  & .global__footer__copyright {
    color: var(--color-text-light);
    margin: 10px 0px;
     @media (--viewport-mobile) {
      font-size: 1.15em;
    }
    @media (--viewport-desktop) {
      font-size: 1.65em;
    }
  }
}

</style>
