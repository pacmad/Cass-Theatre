<template>
    <div class="hero__what_is_playing">
      <p class="hero__what_is_playing__title">{{title}}</p>
    </div>
</template>

<script>
export default {
  name: 'HeroWhatIsPlaying',
  props: ['title']
}
</script>

<style lang="scss">
@import '@/styles/-media-queries';

.hero__what_is_playing {
  width: 100%;
  background-color: var(--color-brand);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 6px 10px 0px #00000070;
  & .hero__what_is_playing__title {
    padding: var(--padding);
    line-height: 170%;
    color: var(--color-text-light);
    text-align: center;
    @media (--viewport-mobile) {
      font-size: 1.5em;
    }
    @media (--viewport-desktop) {
      font-size: 1.75em;
    }
  }
}
</style>
