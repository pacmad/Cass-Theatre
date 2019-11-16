import React from 'react'

export const FormButton = props => {
  return (
    <button type={props.typeName} className='form__button' onClick={props.onClickName}>
      {props.text}
    </button>
  )
}
