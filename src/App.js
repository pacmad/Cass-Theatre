import React from 'react'
import { useRoutes } from 'hookrouter'
import Routes from './routes/routes'
import { GlobalHeaderFooter } from './components/GlobalHeaderFooter/GlobalHeaderFooter'

const App = () => {
  return (
    <div className='app'>
      <GlobalHeaderFooter type={'header'} />
        {useRoutes(Routes)}
      <GlobalHeaderFooter type={'footer'} />
    </div>
  )
}

export default App
