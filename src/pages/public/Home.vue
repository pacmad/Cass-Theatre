<template>
  <div>
    <HeroCurrentMovieImage
      :backgroundImg="`${datas.cmImage}`"
    />
    <HeroWhatIsPlaying :title='`"${datas.wipText}" is now playing!`' />
    <HeroMediumLarge
      title="Starting Soon"
      :text1="`Starting: ${datas.wissText1}`"
      :text2="`Movie: ${datas.wissText2}`"
      :text3="`Description: ${datas.wissText3}`"
      :img="datas.wissImage"
    />
    <HeroMediumLarge
      title="Coming Soon"
      :text1="`Movie: ${datas.wicsText1}`"
      :text2="`Description: ${datas.wicsText2}`"
      :text3="`Coming: ${datas.wicsText3}`"
      :img="datas.wicsImage"
      idName="flipped"
    />
    <HeroMedium
      title="Times"
      :text1="`Theatre opens: ${datas.tText1}`"
      :text2="`Showtime: ${datas.tText2}`"
      :text3="`Open: ${datas.tText3}`"
      img="calendar"
    />
    <HeroMedium
      title="Payment"
      :text1="`Children: ${datas.pText1}`"
      :text2="`Teen/Adult: ${datas.pText2}`"
      :text3="`${datas.pText3}`"
      img="wallet"
    />
    <HeroMedium
      title="Features"
      :text1="`${datas.fText1}`"
      :text2="`${datas.fText2}`"
      :text3="`${datas.fText3}`"
      img="list"
    />
    <HeroMedium
      title="Address"
      :text1="`${datas.aText1}`"
      :text2="`${datas.aText2}`"
      :text3="`${datas.aText3}`"
      img="map"
    />
  </div>
</template>

<script>
import { db } from '@/main'

export default {
  name: 'PagePublicHome',
  components: {
    HeroCurrentMovieImage: () =>
      import('@/components/heros/CurrentMovieImage'),
    HeroWhatIsPlaying: () => import('@/components/heros/WhatIsPlaying'),
    HeroMediumLarge: () => import('@/components/heros/MediumLarge'),
    HeroMedium: () => import('@/components/heros/Medium')
  },
  data() {
    return {
      datas: []
    }
  },
  firestore() {
    return {
      datas: db.collection('data').doc('data')
    }
  }
}
</script>
