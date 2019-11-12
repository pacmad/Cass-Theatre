import React from 'react'
import { useRoutes } from 'hookrouter'
import Routes from './routes/routes'
import { GlobalHeaderFooter } from './components/GlobalHeaderFooter/GlobalHeaderFooter'
import { GlobalSiteMessage } from './components/GlobalSiteMessage/GlobalSiteMessage'

const App = () => {
  return (
    <div className='app'>
      <GlobalHeaderFooter type={'header'} />
        {useRoutes(Routes)}
        <GlobalSiteMessage message="Terminator is free next week!" />
      <GlobalHeaderFooter type={'footer'} />
    </div>
  )
}

export default App
