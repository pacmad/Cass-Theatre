import React from 'react'
import { Form } from '../../../../components/form/Form'
import { FormButton } from '../../../../components/form/Button'
import { FormInput } from '../../../../components/form/Input'
import { FormFieldset } from '../../../../components/form/Fieldset'

export const PagePrivateSecureDashboard = () => {
  return (
    <div className="content">
      <Form>
        <h1 className="form__title">
          Edit
        </h1>
        <FormFieldset>
          <h2 className="form__fieldset--title">
            Now Playing
          </h2>
          <FormInput typeName={'text'} valueName={null} placeholderName={'Name of movie'} />
          <FormInput typeName={'url'} valueName={null} placeholderName={'Picture of movie'} />
        </FormFieldset>
      </Form>
    </div>
  )
}