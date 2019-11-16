import React from 'react'
import { Hero } from '../../../../../components/Hero'
import { IconCalendar } from '../../../../../components/icons/Calendar'
import { IconWalletMen } from '../../../../../components/icons/WalletMen'

export const PagePrivateSecureComponentPreviewSiteChanges = props => {
  return (
    <dialog className="preview-site-changes" open={props.isOpen}>
      <div className="preview-site-changes__wrapper">
      <Hero
        heroType="full-screen"
        heroTitle="The Addams Family"
        heroDescription="Now playing"
        heroImage={null}
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
      </div>
    </dialog>
  )
}