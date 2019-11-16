import React from 'react'

export const FormInput = props => {
  return (
    <input
      type={props.typeName}
      value={props.valueName}
      onChange={props.onChangeName}
      placeholder={props.placeholderName}
      className='form__input'
      id={props.idName}
    />
  )
}
