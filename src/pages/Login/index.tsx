import React from 'react'
import './styles.scss'
import { auth } from '../../db/functions'

const Login = () => {
  let [password, setPassword] = React.useState<string>('')

  const signIn = (e: React.MouseEvent) => {
    e.preventDefault()
    auth()
      .signInWithEmailAndPassword('admin@cass-theatre.web.app', password)
      .then(() => {
        window.location.replace('/edit')
      })
      .catch((err: Error) => {
        console.error('An error occurred while logging in:', err)
        setTimeout(() => {
          window.location.replace('/')
        }, 1500) // Wait 1.5s
      })
  }

  return (
    <form className="lForm">
      <h1 className="title">Login</h1>
      <fieldset className="fieldset">
        <label className="label" htmlFor="passwordInput">
          Password
        </label>
        <input
          type="password"
          id="passwordInput"
          className="input"
          placeholder="Password"
          value={password}
          onChange={e => {
            setPassword(e.target.value)
          }}
        />
      </fieldset>
      <fieldset className="fieldset">
        <button className="button" onClick={signIn}>
          Login
        </button>
      </fieldset>
    </form>
  )
}

export default Login
