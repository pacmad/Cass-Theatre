import React, { lazy, Suspense} from 'react'
import { isLoggedIn } from '../App'
import { PagePublicHome } from './pages/public/Home'
const PagePrivateLogin = lazy(
  () => import('./pages/private/Login').then(module => ({ default: module.PagePrivateLogin }))
);
const PagePrivateSecureDashboard = lazy(
  () => import('./pages/private/secure/Dashboard').then(module => ({ default: module.PagePrivateSecureDashboard }))
);

const ShouldRenderPagePrivateSecureDashboard = () => {
  if (isLoggedIn === true) {
    return <Suspense fallback><PagePrivateSecureDashboard /></Suspense>
  } else {
    window.location.href = '/'
  }
}

const routes = {
  '/': () => <PagePublicHome />,
  '/login': () => <Suspense fallback><PagePrivateLogin /></Suspense>,
  '/dashboard': () => <ShouldRenderPagePrivateSecureDashboard />
}

export default routes
