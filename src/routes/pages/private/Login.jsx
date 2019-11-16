import React from 'react'
import { Form } from '../../../components/form/Form'
import { FormFieldset } from '../../../components/form/Fieldset'
import { FormLabel } from '../../../components/form/Label'
import { FormInput } from '../../../components/form/Input'
import { FormButton } from '../../../components/form/Button'

export const PagePrivateLogin = () => {
  return (
    <div className="content">
      <Form>
        <h1 className="form__title">
          Login
        </h1>
        <FormFieldset>
        <FormLabel forName={'login-password'} text={'Password'} />
        <FormInput typeName={'password'} valueName={null} idName={'login-password'} placeholderName={'Password'} />
        </FormFieldset>
        <FormFieldset>
          <FormButton typeName={'submit'} text={'Login'} />
        </FormFieldset>
      </Form>
    </div>
  )
}