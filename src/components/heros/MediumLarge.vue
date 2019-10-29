<template>
  <div class="hero__medium_large" :id="idName">
    <div class="hero__medium_large__content">
      <h1 v-if="title" class="hero__medium_large__content__title">{{title}}</h1>
      <section class="hero__medium_large__content__section">
        <p v-if="text1" class="hero__medium_large__content__section__text">{{text1}}</p>
      </section>
      <section class="hero__medium_large__content__section">
        <p v-if="text2" class="hero__medium_large__content__section__text">{{text2}}</p>
      </section>
      <section class="hero__medium_large__content__section">
        <p v-if="text3" class="hero__medium_large__content__section__text">{{text3}}</p>
      </section>
    </div>
    <div class="hero__medium_large__img__wrapper">
      <img v-if="img" :src="img" class="hero__medium_large__img" :alt="getImgAltText" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroMediumLarge',
  props: ['title', 'text1', 'text2', 'text3', 'img', 'idName'],
  computed: {
    getImgAltText() {
      const imgFilename = this.img.substr(this.img.lastIndexOf('/') + 1)
      return imgFilename
    }
  }
}
</script>
