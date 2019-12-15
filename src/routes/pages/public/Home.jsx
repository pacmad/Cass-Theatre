import React, { useState, useEffect } from 'react'
import { db } from '../../../App'
import { Hero } from '../../../components/Hero'
import { IconCalendar } from '../../../components/icons/Calendar'
import { IconWalletMen } from '../../../components/icons/WalletMen'
import { IconMap } from '../../../components/icons/Map'

export const PagePublicHome = () => {
  let [items, getItems] = useState([])

  useEffect(() => {
    db.collection('data')
      .doc('data')
      .get()
      .then(doc => {
        const data = doc.data()
        getItems((items = data))
      })
  }, [])

  return (
    <div className="content">
      <Hero
        heroType="full-screen"
        heroTitle={items.playingTitle}
        heroDescription={items.playingDescription}
        heroImage={items.playingImage}
      />
      <Hero
        heroType="full-screen"
        heroTitle={items.startingTitle}
        heroDescription={items.startingDescription}
        heroImage={items.startingImage}
      />
      {items.comingTitle && (
        <Hero
          heroType="full-screen"
          heroTitle={items.comingTitle}
          heroDescription={items.comingDescription}
          heroImage={items.comingImage}
        />
      )}
      <Hero
        heroType="details"
        heroTitle="Times"
        heroDetail1={items.timeOpenTime}
        heroDetail2={items.timeShowtime}
        heroDetail3={items.timeDaysOpen}
        heroImageSvg="true"
      >
        <IconCalendar class="hero__content--image-section__image hero-details__content--image-section__image" />
      </Hero>
      <Hero
        heroType="details"
        heroTitle="Payment"
        heroDetail1={items.paymentChildrenCost}
        heroDetail2={items.paymentTeensAdultsCost}
        heroDetail3={items.paymentExtraMessage}
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
