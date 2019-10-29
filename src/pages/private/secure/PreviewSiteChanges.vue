<template>
  <div class="preview_site_changes">
    <HeroCurrentMovieImage
      :backgroundImg="`${cmImage}`"
    />
    <HeroWhatIsPlaying :title="`${wipText} is now playing!`" />
    <HeroMediumLarge
      title="Starting Soon"
      :text1="`Starting: ${wissText1}`"
      :text2="`Movie: ${wissText2}`"
      :text3="`Description: ${wissText3}`"
      :img="wissImage"
    />
    <HeroMediumLarge
      title="Coming Soon"
      :text1="`Movie: ${wicsText1}`"
      :text2="`Description: ${wicsText2}`"
      :text3="`Coming: ${wicsText3}`"
      :img="wicsImage"
      idName="flipped"
    />
    <HeroMedium
      title="Times"
      :text1="`Theatre opens: ${tText1}`"
      :text2="`Showtime: ${tText2}`"
      :text3="`Open: ${tText3}`"
      img="calendar"
    />
    <HeroMedium
      title="Payment"
      :text1="`Children: ${pText1}`"
      :text2="`Teen/Adult: ${pText2}`"
      :text3="`${pText3}`"
      img="wallet"
    />
    <HeroMedium
      title="Features"
      :text1="`${fText1}`"
      :text2="`${fText2}`"
      :text3="`${fText3}`"
      img="list"
    />
    <HeroMedium
      title="Address"
      :text1="`${aText1}`"
      :text2="`${aText2}`"
      :text3="`${aText3}`"
      img="map"
    />
  </div>
</template>

<script>
export default {
  name: 'PreviewSiteChanges',
  props: [
    'cmImage',
    'wipText',
    'wissText1',
    'wissText2',
    'wissText3',
    'wissImage',
    'wicsText1',
    'wicsText2',
    'wicsText3',
    'wicsImage',
    'tText1',
    'tText2',
    'tText3',
    'pText1',
    'pText2',
    'pText3',
    'fText1',
    'fText2',
    'fText3',
    'aText1',
    'aText2',
    'aText3'
  ],
  components: {
    HeroCurrentMovieImage: () => import('@/components/heros/CurrentMovieImage'),
    HeroWhatIsPlaying: () => import('@/components/heros/WhatIsPlaying'),
    HeroMediumLarge: () => import('@/components/heros/MediumLarge'),
    HeroMedium: () => import('@/components/heros/Medium')
  }
}
</script>
