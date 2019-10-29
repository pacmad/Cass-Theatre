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
