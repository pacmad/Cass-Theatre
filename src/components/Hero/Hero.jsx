import React, { useState, useEffect } from 'react'

export const Hero = props => {
  let [heroPriority, setHeroPriority] = useState(0)

  function setHeroHighPriority() {
    if (props.heroPriority === 'high') {
      setHeroPriority((heroPriority = 'hero-full-screen--high-priority'))
    } else {
      return setHeroPriority(heroPriority = '')
    }
  }

  useEffect(() => {
    setHeroHighPriority()
  })

  const IfHeroIs = () => {
    if (props.heroType === 'full-screen') {
      return (
        <h2 className={`hero-${props.heroType}__text-section--description`}>
          {props.heroDescription}
        </h2>
      )
    } else if (props.heroType === 'details') {
      return (
        <>
          <h2 className={`hero-${props.heroType}__text-section--detail`}>
            {props.heroDetail1}
          </h2>
          <h2 className={`hero-${props.heroType}__text-section--detail`}>
            {props.heroDetail2}
          </h2>
          <h2 className={`hero-${props.heroType}__text-section--detail`}>
            {props.heroDetail3}
          </h2>
        </>
      )
    } else {
      return null
    }
  }
  return (
    <div className={`hero-${props.heroType} ${heroPriority}`}>
      <section className={`hero-${props.heroType}__text-section`}>
        <h1 className={`hero-${props.heroType}__text-section--title`}>
          {props.heroTitle}
        </h1>
        <IfHeroIs />
      </section>
      <section className={`hero-${props.heroType}__image-section`}>
        <img
          src={props.heroImage}
          className={`hero-${props.heroType}__image-section--image`}
          alt="img"
        />
      </section>
    </div>
  )
}
