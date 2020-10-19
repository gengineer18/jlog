import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import firebaseConfig from '~/config/firebase.json'

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

export const initFirebase = firebase
export const auth = firebase.auth()
export const firestore = firebase.firestore()
