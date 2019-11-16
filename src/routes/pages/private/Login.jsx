import React, { useState } from 'react'
import { auth } from '../../../App'
import { Form } from '../../../components/form/Form'
import { FormFieldset } from '../../../components/form/Fieldset'
import { FormLabel } from '../../../components/form/Label'
import { FormInput } from '../../../components/form/Input'
import { FormButton } from '../../../components/form/Button'

export const PagePrivateLogin = () => {
  auth.onAuthStateChanged(user => {
    if (user) {
      window.location.href = '/'
    }
  })

  const [signInDataEmail] = useState('admin@cass-theatre.web.app')
  let [signInDataPassword, modifySignInDataPassword] = useState('')

  function signIn(e) {
    e.preventDefault()
    auth.signInWithEmailAndPassword(signInDataEmail, signInDataPassword).then(() => {
      window.location.href = '/'
    }).catch(err => {
      window.location.href = '/'
    })
  }

  function setSignInDataPassword(e) {
    modifySignInDataPassword((signInDataPassword = e.target.value))
  }

  return (
    <div className="content">
      <Form>
        <h1 className="form__title">Login</h1>
        <FormFieldset>
          <FormLabel forName={'login-password'} text={'Password'} />
          <FormInput
            typeName={'password'}
            valueName={signInDataPassword}
            onChangeName={setSignInDataPassword}
            idName={'login-password'}
            placeholderName={'Password'}
          />
        </FormFieldset>
        <FormFieldset>
          <FormButton typeName={'submit'} text={'Login'} onClickName={signIn} />
        </FormFieldset>
      </Form>
    </div>
  )
}
