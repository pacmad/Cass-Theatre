import React from 'react'
import { A } from 'hookrouter'

export const GlobalFooter = () => {
  return (
    <footer className="global-footer">
      <h1 className="global-footer__title">
        <A href="/" className="global-footer__title--link">
          Cass Theatre
        </A>
      </h1>
      <small className="global-footer__copyright">
        &copy; Cass Theatre {new Date().getFullYear()}
      </small>
    </footer>
  )
}
