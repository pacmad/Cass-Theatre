import React, { useState } from 'react'
import { IconRetract } from '../icons/Retract'
import { IconExpand } from '../icons/Expand'

export const GlobalSiteMessageLong = props => {
  let [isOpen, toggleIsOpen] = useState(false)

  if (props.snippet) {
    return (
      <>
        <span className="global-site-message-long-snippet">
          <p className="global-site-message-long-snippet__text">
            {props.snippet}
          </p>
          {isOpen ? (
            <IconRetract onClickName={() => toggleIsOpen(false)} />
          ) : (
            <IconExpand onClickName={() => toggleIsOpen(true)} />
          )}
        </span>
        <dialog className="global-site-message-long" open={isOpen}>
          <p className="global-site-message-long__paragraph">
            {props.paragraphOne}
          </p>
          <p className="global-site-message-long__paragraph">
            {props.paragraphTwo}
          </p>
          <p className="global-site-message-long__paragraph">
            {props.paragraphThree}
          </p>
          <section className="global-site-message-long__section">
            <button
              type="button"
              onClick={() => toggleIsOpen(false)}
              className="global-site-message-long__section--button"
            >
              Close
            </button>
          </section>
        </dialog>
      </>
    )
  } else {
    return null
  }
}
