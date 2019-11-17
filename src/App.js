import React, { useEffect, useState } from 'react'
import firebase from '@firebase/app'
import '@firebase/firestore'
import '@firebase/auth'
import ReactGA from 'react-ga'
import { useRoutes, navigate } from 'hookrouter'
import Routes from './routes/routes'
import { GlobalHeaderFooter } from './components/global/HeaderFooter'
import { GlobalSiteMessageLong } from './components/global/SiteMessageLong'
import { GlobalSiteMessage } from './components/global/SiteMessage'

const firebaseConfig = {
  apiKey: 'AIzaSyDop4rOOaZgR5G-Okyn5c4UBC5crNEMX-Y',
  authDomain: 'cass-theatre.firebaseapp.com',
  databaseURL: 'https://cass-theatre.firebaseio.com',
  projectId: 'cass-theatre',
  storageBucket: 'cass-theatre.appspot.com',
  messagingSenderId: '782184753036',
  appId: '1:782184753036:web:a9819cf344ea84bf0bd8a9',
  measurementId: 'G-CKSSHZLJJL'
}

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
export const auth = firebase.auth()

export let isLoggedIn = false
auth.onAuthStateChanged(user => {
  if (user) {
    isLoggedIn = true
  } else {
    isLoggedIn = false
  }
})

ReactGA.initialize('UA-150436937-1')
ReactGA.pageview('/')
ReactGA.pageview('/login')
ReactGA.pageview('/dashboard')

const App = () => {
  let [items, getItems] = useState([])

  useEffect(() => {
    db.collection('data')
      .doc('data')
      .get()
      .then(doc => {
        const data = doc.data()
        getItems((items = data))
      })
  }, [])

  return (
    <div className='app'>
      <GlobalSiteMessage message={items.globalTopMessage} top />
      <GlobalSiteMessageLong
        snippet={items.globalLongMessageSnippet}
        paragraphOne={
          items.globalLongMessageParagraphOne
        }
        paragraphTwo={items.globalLongMessageParagraphTwo}
        paragraphThree={items.globalLongMessageParagraphThree}
      />
      <GlobalHeaderFooter type={'header'} />
      {useRoutes(Routes) || navigate('/')}
      <GlobalSiteMessage message={items.globalBottomMessage} top={false} />
      <GlobalHeaderFooter type={'footer'} />
    </div>
  )
}

export default App
