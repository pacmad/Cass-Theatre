import React from 'react'

export const FormLabel = props => {
  return (
    <label className='form__label' htmlFor={props.forName}>
      {props.text}
    </label>
  )
}
