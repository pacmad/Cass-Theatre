<template>
  <div>
    <GlobalHeader />
    <router-view />
    <GlobalFooter />
  </div>
</template>

<style lang="scss">
@import '@/styles/-variables';

*,
::before,
::after {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
  font-family: var(--font-system-ui);
}
html,
body {
  min-height: 100%;
  height: 100%;
}
body {
  background-color: var(--color-brand-3);
}

@import '@/styles/_forms';
@import '@/styles/_transitions';
</style>

<script>
export default {
  components: {
    GlobalHeader: () => import('@/components/global/Header'),
    GlobalFooter: () => import('@/components/global/Footer')
  }
}
</script>
