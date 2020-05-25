import React from 'react'
import { Route } from 'react-router-dom'
import { AuthContext } from '../services/Auth'
import Home from '../pages/Home'

const Protected = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = React.useContext(AuthContext)

  return (
    <Route
      {...rest}
      render={routeProps =>
        currentUser ? <RouteComponent {...routeProps} /> : <Home />
      }
    />
  )
}

export default Protected
