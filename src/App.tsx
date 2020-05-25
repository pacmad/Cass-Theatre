import React from 'react'
import './db/config'
import { AuthProvider } from './services/Auth'
import Header from './layout/Header'
import Footer from './layout/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Protected from './routes/Protected'

const LoadLogin = React.lazy(() => import('./pages/Login'))
const Login = () => (
  <React.Suspense fallback>
    <LoadLogin />
  </React.Suspense>
)

const LoadAdmin = React.lazy(() => import('./pages/Admin'))
const Admin = () => (
  <React.Suspense fallback>
    <LoadAdmin />
  </React.Suspense>
)

const App = () => (
  <div className="App">
    <AuthProvider>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Protected path="/edit" component={Admin} />
        </Switch>
      </Router>
      <Footer />
    </AuthProvider>
  </div>
)

export default App
