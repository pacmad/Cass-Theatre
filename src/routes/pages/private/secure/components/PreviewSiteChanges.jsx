import React, { lazy, Suspense } from 'react'
const Hero = lazy(() =>
  import('../../../../../components/Hero').then(module => ({
    default: module.Hero
  }))
)
const IconCalendar = lazy(() =>
  import('../../../../../components/icons/Calendar').then(module => ({
    default: module.IconCalendar
  }))
)
const IconWalletMen = lazy(() =>
  import('../../../../../components/icons/WalletMen').then(module => ({
    default: module.IconWalletMen
  }))
)

export const PagePrivateSecureComponentPreviewSiteChanges = props => {
  return (
    <dialog className="preview-site-changes" open={props.isOpen}>
      <div className="preview-site-changes__wrapper">
        <Suspense fallback>
          <Hero
            heroType="full-screen"
            heroTitle={props.playingTitle}
            heroDescription={props.playingDescription}
            heroImage={props.playingImage}
          />
        </Suspense>
        <Suspense fallback>
          <Hero
            heroType="full-screen"
            heroTitle={props.startingTitle}
            heroDescription={props.startingDescription}
            heroImage={props.startingImage}
          />
        </Suspense>
        <Suspense fallback>
          <Hero
            heroType="full-screen"
            heroTitle={props.comingTitle}
            heroDescription={props.comingDescription}
            heroImage={props.comingImage}
          />
        </Suspense>
        <Suspense fallback>
          <Hero
            heroType="details"
            heroTitle="Times"
            heroDetail1={props.timeOpenTime}
            heroDetail2={props.timeShowtime}
            heroDetail3={props.timeDaysOpen}
            heroImageSvg="true"
          >
            <Suspense fallback>
              <IconCalendar class="hero__content--image-section__image hero-details__content--image-section__image" />
            </Suspense>
          </Hero>
        </Suspense>
        <Suspense fallback>
          <Hero
            heroType="details"
            heroTitle="Payment"
            heroDetail1={props.paymentChildrenCost}
            heroDetail2={props.paymentTeensAdultsCost}
            heroDetail3={props.paymentExtraMessage}
            heroImageSvg="true"
          >
            <Suspense fallback>
              <IconWalletMen class="hero__content--image-section__image hero-details__content--image-section__image" />
            </Suspense>
          </Hero>
        </Suspense>
      </div>
    </dialog>
  )
}
