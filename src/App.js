import React from 'react'
import { useRoutes } from 'hookrouter'
import Routes from './routes/routes'
import { GlobalHeaderFooter } from './components/global/HeaderFooter'
import { GlobalSiteMessage } from './components/global/SiteMessage'

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
