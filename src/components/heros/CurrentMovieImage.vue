<template>
  <div
    class="hero__current_movie_image"
    :style="[{'background': 'linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), url(' + backgroundImg + ')'}]"
  ></div>
</template>

<script>
export default {
  name: 'HeroCurrentMovieImage',
  props: ['backgroundImg']
}
</script>

<style lang="scss">
.hero__current_movie_image {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-color: var(--color-brand-2);
  /* Unfortunately, inline styling is severely broken so the !important
     modifier had to be used in order to keep the styling consistent
     when updating the image. */
  background-size: cover !important;
  background-repeat: no-repeat !important;
}
</style>
