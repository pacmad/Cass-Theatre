import React from 'react'
import { HeroCurrentMovie } from '../../../components/heros/CurrentMovie/CurrentMovie'

export const PagePublicHome = () => {
  return (
    <div className="page-public-home">
      <HeroCurrentMovie
        movieTitle="Joker"
        movieDescription=""
        movieImage="https://www.joblo.com/assets/images/joblo/posters/2019/08/joker-poster-main2.jpg"
      />
    </div>
  )
}
