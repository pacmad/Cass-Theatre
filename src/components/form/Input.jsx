import React from 'react'

export const FormInput = props => {
  return <input type={props.typeName} value={props.valueName} placeholder={props.placeholderName} className="form__input" />
}