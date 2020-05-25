import React from 'react'
import { auth } from '../db/functions'

export const AuthContext = React.createContext(null)

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null)

  React.useEffect(() => {
    auth().onAuthStateChanged(user => {
      setCurrentUser(user)
    })
  })

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}
