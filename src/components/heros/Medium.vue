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
