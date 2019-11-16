import React from 'react'
import { useRoutes } from 'hookrouter'
import Routes from './routes/routes'
import { GlobalHeaderFooter } from './components/global/HeaderFooter'
import { GlobalSiteMessage } from './components/global/SiteMessage'

const App = () => {
  return (
    <div className='app'>
      <GlobalSiteMessage message="" top={true} />
      <GlobalHeaderFooter type={'header'} />
        {useRoutes(Routes)}
        <GlobalSiteMessage message="Terminator is free next week!" top={false} />
      <GlobalHeaderFooter type={'footer'} />
    </div>
  )
}

export default App
