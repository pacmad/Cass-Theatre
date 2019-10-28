import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

Vue.use(firestorePlugin)

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

Vue.config.productionTip = false
Vue.config.performance = true

let app

auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})
