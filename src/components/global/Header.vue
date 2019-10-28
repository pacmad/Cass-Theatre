<template>
  <header class="global__header">
    <h1 class="global__header__title">
      <router-link to="/">Cass Theatre</router-link>
    </h1>
  </header>
</template>

<script>
export default {
  name: 'GlobalHeader'
}
</script>

<style lang="scss">
@import '@/styles/-media-queries';

.global__header {
  background-color: var(--color-brand);
  box-shadow: 1px 1px 5px #0000009c;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: fixed;
  z-index: 1000;
  width: 100%;
  top: 0;
  & .global__header__title {
    color: var(--color-text-light);
    font-weight: var(--font-weight);
    @media (--viewport-mobile) {
      font-size: 2.15em;
    }
    @media (--viewport-desktop) {
      font-size: 2.65em;
    }
    & a {
      text-decoration: none;
      color: inherit;
    }
  }
}
</style>
