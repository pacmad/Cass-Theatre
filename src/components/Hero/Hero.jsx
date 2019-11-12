import React from 'react'

export const Hero = props => {
  const IfHeroIs = () => {
    if (props.heroType === 'full-screen') {
      return (
        <h2
          className={`hero__content--text-section__description hero-${props.heroType}__content--text-section__description`}
        >
          {props.heroDescription}
        </h2>
      )
    } else if (props.heroType === 'details') {
      return (
        <>
          <h2
            className={`hero__content--text-section__description hero-${props.heroType}__content--text-section__description`}
          >
            {props.heroDetail1}
          </h2>
          <h2
            className={`hero__content--text-section__description hero-${props.heroType}__content--text-section__description`}
          >
            {props.heroDetail2}
          </h2>
          <h2
            className={`hero__content--text-section__description hero-${props.heroType}__content--text-section__description`}
          >
            {props.heroDetail3}
          </h2>
        </>
      )
    } else {
      return null
    }
  }
  return (
    <div className={`hero hero-${props.heroType}`}>
      <div className={`hero__content hero-${props.heroType}__content`}>
        <section
          className={`hero__content--text-section hero-${props.heroType}__content--text-section`}
        >
          <h1
            className={`hero__content--text-section__title hero-${props.heroType}__content--text-section__title`}
          >
            {props.heroTitle}
          </h1>
          <IfHeroIs />
        </section>
        {props.heroImage && (
          <section
            className={`hero__content--image-section hero-${props.heroType}__content--image-section`}
          >
            <img
              src={props.heroImage}
              className={`hero__content--image-section__image hero-${props.heroType}__content--image-section__image`}
              alt="img"
            />
          </section>
        )}
        {props.heroImageSvg && (
              <section
                className={`hero__content--image-section hero-${props.heroType}__content--image-section`}
              >
                {props.children}
              </section>
            )}
      </div>
    </div>
  )
}
