import React from 'react'
import { A } from 'hookrouter'

export const GlobalHeaderFooter = props => {
  const IsType = () => {
    if (props.type === 'header') {
      return (
        <header className="global-header-footer global-header">
          <h1
            className={`global-header-footer__title global-${props.type}__title`}
          >
            <A
              href="/"
              className={`global-header-footer__title--link global-${props.type}__title--link`}
            >
              Cass Theatre
            </A>
          </h1>
        </header>
      )
    } else if (props.type === 'footer') {
      return (
        <footer className="global-header-footer global-footer">
          <h1
            className={`global-header-footer__title global-${props.type}__title`}
          >
            <A
              href="/"
              className={`global-header-footer__title--link global-${props.type}__title--link`}
            >
              Cass Theatre
            </A>
          </h1>
          <small className="global-footer__copyright">
            &copy; Cass Theatre {new Date().getFullYear()}
          </small>
        </footer>
      )
    } else {
      return null
    }
  }

  return <IsType />
}
