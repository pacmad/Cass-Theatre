<template>
    <div
      class="hero__medium"
      :style="[{'background': 'linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(/img/' + img + '.svg)', 'background-repeat': 'no-repeat', 'background-position': 'center', 'background-size': 'auto', 'background-color': '#272d2d'}]"
    >
      <div class="hero__medium__content">
        <h1 class="hero__medium__content__title">{{title}}</h1>
        <section class="hero__medium__content__section">
          <p class="hero__medium__content__section__text">{{text1}}</p>
        </section>
        <section class="hero__medium__content__section">
          <p class="hero__medium__content__section__text">{{text2}}</p>
        </section>
        <section class="hero__medium__content__section">
          <p class="hero__medium__content__section__text">{{text3}}</p>
        </section>
        <img :src="['/img/' + img + '.svg']" :alt="img" class="hero__medium__content__img" />
      </div>
    </div>
</template>

<script>
export default {
  name: 'HeroMedium',
  props: ['title', 'text1', 'text2', 'text3', 'img']
}
</script>

<style lang="scss">
@import '@/styles/-media-queries';

.hero__medium {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-brand-2);
  & .hero__medium__content {
    background-color: var(--color-brand-2);
    padding: 10px 20px;
    border-radius: var(--border-radius);
    margin: 10px 20px;
    display: flex;
    flex-direction: column;
    @media (--viewport-mobile) {
      width: 100%;
    }
    @media (--viewport-desktop) {
      width: 50%;
    }
    & .hero__medium__content__title {
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
    & .hero__medium__content__section {
      display: flex;
      flex-direction: column;
      & .hero__medium__content__section__text {
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
    & .hero__medium__content__img {
      width: 100px;
      height: 100px;
      text-align: right;
      align-self: flex-end;
    }
  }
}
</style>
