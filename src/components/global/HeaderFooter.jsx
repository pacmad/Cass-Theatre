import React, { useState, useEffect } from 'react'
import { isLoggedIn } from '../../App'
import { A } from 'hookrouter'
import { IconGear } from '../icons/Gear'

export const GlobalHeaderFooter = props => {
  let [headerScrollClass, setHeaderScrollClass] = useState('global-header-not-scrolling')

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY !== 0) {
        setHeaderScrollClass(headerScrollClass = 'global-header-scrolling')
      } else {
        setHeaderScrollClass(headerScrollClass = 'global-header-not-scrolling')
      }
    })
  }, [])

  const IsType = () => {
    if (props.type === 'header') {
      return (
        <header className={`global-header-footer global-header ${headerScrollClass} ${isLoggedIn && ('global-header-admin')}`}>
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
          {isLoggedIn && (
            <A href="/dashboard" className="global-header-admin__icon-gear--link">
            <IconGear />
            </A>
          )}
        </header>
      )
    } else if (props.type === 'footer') {
      return (
        <footer className="global-header-footer global-footer">
          <p
            className={`global-header-footer__title global-${props.type}__title`}
          >
            <A
              href="/"
              className={`global-header-footer__title--link global-${props.type}__title--link`}
            >
              Cass Theatre
            </A>
          </p>
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
