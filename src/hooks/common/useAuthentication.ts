import { useEffect } from 'react'
import { auth } from '@/utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

type AuthState = {
  user: firebase.User | undefined
  isInitializing: boolean
  error: firebase.auth.Error | undefined
}

export const useAuthentication = (): AuthState => {
  const [user, isInitializing, error] = useAuthState(auth)

  useEffect(() => {
    if (!user) return
    if (error) {
      console.log(error)
    }
  }, [])

  return { user, isInitializing, error }
}
