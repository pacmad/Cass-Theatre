<template>
  <div>
    <GlobalHeader />
    <router-view />
    <GlobalFooter />
  </div>
</template>

<style lang="postcss">
@import './styles/_styles.css';
</style>

<script>
export default {
  components: {
    GlobalHeader: () => import('@/components/global/Header'),
    GlobalFooter: () => import('@/components/global/Footer')
  }
}
</script>
