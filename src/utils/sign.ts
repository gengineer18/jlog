import firebase from 'firebase/app'
import { auth } from '@/utils/firebase'

export const signInWithGoogle = (): void => {
  const provider = new firebase.auth.GoogleAuthProvider()
  auth.signInWithPopup(provider)
}

export const signOut = (): void => {
  auth.signOut()
}
