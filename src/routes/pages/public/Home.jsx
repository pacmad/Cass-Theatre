import React from 'react'
import { Hero } from '../../../components/Hero/Hero'

export const PagePublicHome = () => {
  return (
    <div className="page-public-home">
      <Hero
        heroType="full-screen"
        heroTitle="The Addams Family"
        heroDescription="Now playing"
        heroImage="http://www.gstatic.com/tv/thumb/v22vodart/16762657/p16762657_v_v8_aa.jpg"
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
          heroDetail1="1"
          heroDetail2="2"
          heroDetail3="3"
          heroImage=""
        />
    </div>
  )
}
