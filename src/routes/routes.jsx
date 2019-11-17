import React from 'react'
import Loadable from 'react-loadable'
import { isLoggedIn } from '../App'
import { PagePublicHome } from './pages/public/Home'
import { PagePrivateLogin } from './pages/private/Login'
import { PagePrivateSecureDashboard } from './pages/private/secure/Dashboard'

const ShouldRenderPagePrivateSecureDashboard = () => {
  if (isLoggedIn === true) {
    return <PagePrivateSecureDashboard />
  } else {
    window.location.href = '/'
  }
}

const routes = {
  '/': () => <PagePublicHome />,
  '/login': () => <PagePrivateLogin />,
  '/dashboard': () => <ShouldRenderPagePrivateSecureDashboard />
}

export default routes
