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
import GlobalHeader from '@/components/global/Header'
import GlobalFooter from '@/components/global/Footer'

export default {
  components: {
    GlobalHeader,
    GlobalFooter
  }
}
</script>
