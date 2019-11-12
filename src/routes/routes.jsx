import React, { useState } from 'react'
import { PagePublicHome } from './pages/public/Home'
import { PagePrivateSecureDashboard } from './pages/private/secure/Dashboard'

const ShouldRenderPagePrivateSecureDashboard = () => {
  let [isLoggedIn, toggleIsLoggedIn] = useState(true)

  if (isLoggedIn === true) {
    return <PagePrivateSecureDashboard />
  } else {
    window.location.href = '/'
  }
}

const routes = {
  '/': () => <PagePublicHome />,
  '/dashboard': () => <ShouldRenderPagePrivateSecureDashboard />
}

export default routes
