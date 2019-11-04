import React from 'react'
import { HeroCurrentMovie } from '../../../components/heros/CurrentMovie/CurrentMovie'

export const PagePublicHome = () => {
  return (
    <div className="page-public-home">
      <HeroCurrentMovie
        movieTitle="The Addams Family"
        movieDescription="The new animated PG comedy"
        movieImage="http://www.gstatic.com/tv/thumb/v22vodart/16762657/p16762657_v_v8_aa.jpg"
      />
    </div>
  )
}
