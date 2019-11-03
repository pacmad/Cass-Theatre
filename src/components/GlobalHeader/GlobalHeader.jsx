import React from 'react'
import { A } from 'hookrouter'

export const GlobalHeader = () => {
  return (
    <header className="global-header">
      <h1 className="global-header__title">
        <A href="/" className="global-header__title--link">
          Cass Theatre
        </A>
      </h1>
    </header>
  )
}
