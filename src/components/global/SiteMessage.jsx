import React from 'react'

export const GlobalSiteMessage = props => {
  const ShouldRender = () => {
    if (props.message) {
      return (
        <span
          className={`global-site-message ${
            props.top ? 'global-site-message-top' : 'global-site-message-bottom'
          }`}
        >
          <p className='global-site-message__text'>{props.message}</p>
        </span>
      )
    } else {
      return null
    }
  }
  return <ShouldRender />
}
