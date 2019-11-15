import React from 'react'
import { Hero } from '../../../components/Hero'
import { IconCalendar } from '../../../components/icons/Calendar'
import { IconWalletMen } from '../../../components/icons/WalletMen'
import { IconMap } from '../../../components/icons/Map'

export const PagePublicHome = () => {
  const ShouldDisplayImageSection = () => {
    if (window.innerWidth >= 850) {
      return 'http://www.gstatic.com/tv/thumb/v22vodart/16762657/p16762657_v_v8_aa.jpg'
    } else if (window.innerWidth <= 849) {
      return null
    } else {
      return null
    }
  }

  return (
    <div className="content">
      <Hero
        heroType="full-screen"
        heroTitle="The Addams Family"
        heroDescription="Now playing"
        heroImage={ShouldDisplayImageSection()}
      />
      <Hero
        heroType="full-screen"
        heroTitle="Maleficent 2: Mistress of Evil"
        heroDescription="Starting: Friday Nov. 8"
        heroImage="https://specials-images.forbesimg.com/imageserve/5d68088b68cb0a0008c0cc44/960x0.jpg?fit=scale"
      />
      <Hero
        heroType="full-screen"
        heroTitle="Midway"
        heroDescription="Coming soon"
        heroImage="https://cdn.traileraddict.com/vidquad/lionsgate/midway-2019-poster/1.jpg"
      />
      <Hero
        heroType="details"
        heroTitle="Times"
        heroDetail1="Theatre opens: 7:00 PM"
        heroDetail2="Showtime: 7:30 PM"
        heroDetail3="Open: Wed-Sun"
        heroImageSvg="true"
      >
        <IconCalendar class="hero__content--image-section__image hero-details__content--image-section__image" />
      </Hero>
      <Hero
        heroType="details"
        heroTitle="Payment"
        heroDetail1="Children: $4.00"
        heroDetail2="Teens & Adults: $6.00"
        heroDetail3="No credit cards accepted"
        heroImageSvg="true"
      >
        <IconWalletMen class="hero__content--image-section__image hero-details__content--image-section__image" />
      </Hero>
      <Hero
        heroType="details"
        heroTitle="Address"
        heroDetail1="Cass City"
        heroDetail2="6464 Main Street (M-81)"
        heroDetail3="(989) 872-2252"
        heroImageSvg="true"
      >
        <IconMap class="hero__content--image-section__image hero-details__content--image-section__image" />
      </Hero>
    </div>
  )
}
