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
        heroTitle={props.playingTitle}
        heroDescription={props.playingDescription}
        heroImage={props.playingImage}
      />
      <Hero
        heroType="full-screen"
        heroTitle={props.startingTitle}
        heroDescription={props.startingDescription}
        heroImage={props.startingImage}
      />
      <Hero
        heroType="full-screen"
        heroTitle={props.comingTitle}
        heroDescription={props.comingDescription}
        heroImage={props.comingImage}
      />
      <Hero
        heroType="details"
        heroTitle="Times"
        heroDetail1={`Theatre opens: ${props.timeOpenTime}`}
        heroDetail2={`Showtime: ${props.timeShowtime}`}
        heroDetail3={`Open: ${props.timeDaysOpen}`}
        heroImageSvg="true"
      >
        <IconCalendar class="hero__content--image-section__image hero-details__content--image-section__image" />
      </Hero>
      <Hero
        heroType="details"
        heroTitle="Payment"
        heroDetail1={`Children: ${props.paymentChildrenCost}`}
        heroDetail2={`Teens & Adults: ${props.paymentTeensAdultsCost}`}
        heroDetail3={`${props.paymentExtraMessage}`}
        heroImageSvg="true"
      >
        <IconWalletMen class="hero__content--image-section__image hero-details__content--image-section__image" />
      </Hero>
      </div>
    </dialog>
  )
}