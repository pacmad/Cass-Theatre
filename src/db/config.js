import firebase from 'firebase/app'

const config = {
  apiKey: 'AIzaSyDop4rOOaZgR5G-Okyn5c4UBC5crNEMX-Y',
  authDomain: 'cass-theatre.firebaseapp.com',
  databaseURL: 'https://cass-theatre.firebaseio.com',
  projectId: 'cass-theatre',
  storageBucket: 'cass-theatre.appspot.com',
  messagingSenderId: '782184753036',
  appId: '1:782184753036:web:a9819cf344ea84bf0bd8a9',
  measurementId: 'G-CKSSHZLJJL'
}

firebase.initializeApp(config)