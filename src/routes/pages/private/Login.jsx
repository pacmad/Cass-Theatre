import React, { useState, lazy, Suspense } from 'react'
import { auth } from '../../../App'
const Form = lazy(() =>
  import('../../../components/form/Form').then(module => ({ default: module.Form }))
)
const FormFieldset = lazy(() =>
  import('../../../components/form/Fieldset').then(module => ({
    default: module.FormFieldset
  }))
)
const FormLabel = lazy(() =>
  import('../../../components/form/Label').then(module => ({
    default: module.FormLabel
  }))
)
const FormInput = lazy(() =>
  import('../../../components/form/Input').then(module => ({
    default: module.FormInput
  }))
)
const FormButton = lazy(() =>
  import('../../../components/form/Button').then(module => ({
    default: module.FormButton
  }))
)

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
    auth
      .signInWithEmailAndPassword(signInDataEmail, signInDataPassword)
      .then(() => {
        window.location.href = '/'
      })
      .catch(err => {
        window.location.href = '/'
      })
  }

  function setSignInDataPassword(e) {
    modifySignInDataPassword((signInDataPassword = e.target.value))
  }

  return (
    <div className="content">
      <Suspense fallback>
        <Form>
          <h1 className="form__title">Login</h1>
          <Suspense fallback>
            <FormFieldset>
              <Suspense fallback>
                <FormLabel forName={'login-password'} text={'Password'} />
              </Suspense>
              <Suspense fallback>
                <FormInput
                  typeName={'password'}
                  valueName={signInDataPassword}
                  onChangeName={setSignInDataPassword}
                  idName={'login-password'}
                  placeholderName={'Password'}
                />
              </Suspense>
            </FormFieldset>
          </Suspense>
          <Suspense fallback>
            <FormFieldset>
              <Suspense fallback>
                <FormButton
                  typeName={'submit'}
                  text={'Login'}
                  onClickName={signIn}
                />
              </Suspense>
            </FormFieldset>
          </Suspense>
        </Form>
      </Suspense>
    </div>
  )
}
