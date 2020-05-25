import React from 'react'
import styled from 'styled-components'
import { auth } from '../../db/functions'

const LoginStyles = styled.form`
  .title {
    @media (max-width: 949px) {
      width: 95%;
    }
    @media (min-width: 950px) {
      width: 75%;
    }
    border-radius: 5px;
    box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.15);
    font-weight: 400;
    font-size: 2.05em;
    padding: 5px 10px;
    margin: 20px auto;
    text-align: center;
  }
  .fieldset {
    @media (max-width: 949px) {
      width: 95%;
    }
    @media (min-width: 950px) {
      width: 75%;
    }
    border-radius: 5px;
    padding: 10px 20px;
    border: 0;
    box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    .label {
      font-size: 1.65em;
      margin: 15px 0;
    }
    .input {
      border: 1.5px solid black;
      border-radius: 5px;
      font-size: 1.2em;
      padding: 5px 10px;
      width: 100%;
    }
    .button {
      background-color: white;
      cursor: pointer;
      border-radius: 5px;
      border: 1.5px solid black;
      font-size: 1.2em;
      margin: 20px 0;
      padding: 10px 20px;
      text-align: center;
      width: 100%;
    }
  }
`

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
    <LoginStyles>
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
    </LoginStyles>
  )
}

export default Login
