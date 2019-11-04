import React from 'react'

export const HeroCurrentMovie = props => {
  return (
    <div className="hero-current-movie">
      <section className="hero-current-movie__text-section">
        <h1 className="hero-current-movie__text-section--title">
          {props.movieTitle}
        </h1>
        <h2 className="hero-current-movie__text-section--description">
          {props.movieDescription}
        </h2>
      </section>
      <section className="hero-current-movie__image-section">
        <img
          src={props.movieImage}
          className="hero-current-movie__image-section--image"
          alt="Movie"
        />
      </section>
    </div>
  )
}
