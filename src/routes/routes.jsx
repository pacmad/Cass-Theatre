import React, { useState } from 'react'
import { PagePublicHome } from './pages/public/Home'
import { PagePrivateLogin } from './pages/private/Login'
import { PagePrivateSecureDashboard } from './pages/private/secure/Dashboard'

const ShouldRenderPagePrivateSecureDashboard = () => {
  let [isLoggedIn, toggleIsLoggedIn] = useState(true)

  if (isLoggedIn === true) {
    return <PagePrivateSecureDashboard />
  } else {
    window.location.href = '/'
  }
}

const ShouldRenderPagePrivateLogin = () => {
  let [isLoggedIn, toggleIsLoggedIn] = useState(false)

  if (isLoggedIn === true) {
    window.location.href = '/dashboard'
  } else {
    return <PagePrivateLogin />
  }
}

const routes = {
  '/': () => <PagePublicHome />,
  '/login': () => <ShouldRenderPagePrivateLogin />,
  '/dashboard': () => <ShouldRenderPagePrivateSecureDashboard />
}

export default routes
