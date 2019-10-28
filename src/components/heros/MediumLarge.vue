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

<style lang="scss">
@import '@/styles/-media-queries';

#flipped {
  @media (--viewport-desktop) {
    flex-direction: row-reverse;
  }
}

.hero__medium_large {
  display: flex;
  background-color: var(--color-brand-3);
  @media (--viewport-mobile) {
    flex-direction: column;
  }
  @media (--viewport-desktop) {
    flex-direction: row;
    align-items: center;
  }
  & .hero__medium_large__content {
    padding: var(--padding);
    background-color: var(--color-brand-2);
    border-radius: var(--border-radius);
    display: flex;
    flex-direction: column;
    @media (--viewport-mobile) {
      margin: 10px 0px;
    }
    @media (--viewport-desktop) {
      max-width: 50%;
      flex: 1;
      height: 100%;
      margin: 10px 20px;
    }
    & .hero__medium_large__content__title {
      font-weight: var(--font-weight);
      margin: 10px 0px;
      color: var(--color-text-light);
      @media (--viewport-mobile) {
        font-size: 2.1em;
      }
      @media (--viewport-desktop) {
        font-size: 2.45em;
      }
    }
    & .hero__medium_large__content__section {
      display: flex;
      flex-direction: column;
      & .hero__medium_large__content__section__text {
        line-height: 170%;
        margin: 10px 0px;
        color: var(--color-text-light);
        @media (--viewport-mobile) {
          font-size: 1.4em;
        }
        @media (--viewport-desktop) {
          font-size: 1.6em;
        }
      }
    }
  }
  & .hero__medium_large__img__wrapper {
    @media (--viewport-desktop) {
      min-width: 50%;
      width: 50%;
      max-width: 50%;
    }
    .hero__medium_large__img {
      width: 100%;
      @media (--viewport-mobile) {
        min-height: 50vh;
        height: 50vh;
        max-height: 50vh;
      }
      @media (--viewport-desktop) {
        border-radius: var(--border-radius);
      }
    }
  }
}
</style>
