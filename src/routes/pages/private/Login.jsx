import React, { useState, lazy, Suspense } from 'react'
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
