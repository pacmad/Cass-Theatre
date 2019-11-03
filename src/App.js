import React from 'react'
import { useRoutes } from 'hookrouter'
import { GlobalHeader } from './components/GlobalHeader/GlobalHeader'
import Routes from './routes/routes'
import { GlobalFooter } from './components/GlobalFooter/GlobalFooter'

const App = () => {
  return (
    <div className='app'>
      <GlobalHeader />
        {useRoutes(Routes)}
      <GlobalFooter />
    </div>
  )
}

export default App
