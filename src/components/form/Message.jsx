import React from 'react'

export const FormMessage = props => {
  return (
    <>
      {props.text && (
        <p className={`form__message ${props.class}`}>{props.text}</p>
      )}
    </>
  )
}
