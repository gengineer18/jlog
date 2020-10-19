import React, { useState, useEffect, createContext } from 'react'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/utils/firebase'
import { signInWithGoogle } from '@/utils/sign'
import { ButtonSignIn } from '@/components/common/buttons/ButtonSignIn'
import { TGameContext } from '@/types/Game'
import { useGame } from '@/hooks/game/useGame'
import { PGameTab } from './PGameTab'

export const GameContext = createContext<TGameContext>({
  id: ``,
  home: {
    messages: [],
    sendMessage: async () => {},
    formValue: ``,
    setFormValue: () => {},
  },
  away: {
    messages: [],
    sendMessage: async () => {},
    formValue: ``,
    setFormValue: () => {},
  },
  other: {
    messages: [],
    sendMessage: async () => {},
    formValue: ``,
    setFormValue: () => {},
  },
})

export const CGame: React.FCX = () => {
  const [user] = useAuthState(auth)
  // id Firestoreの検索が空文字ではエラーになるので初期値は半角スペースにする
  const [id, setId] = useState<string>(` `)
  const router = useRouter()
  const game = useGame(id)

  useEffect(() => {
    if (router.asPath !== router.route) {
      setId(String(router.query.id))
    }
  }, [router])

  return (
    <GameContext.Provider
      value={{
        id,
        home: {
          messages: game.home.messages,
          sendMessage: game.home.sendMessage,
          formValue: game.home.formValue,
          setFormValue: game.home.setFormValue,
        },
        away: {
          messages: game.away.messages,
          sendMessage: game.away.sendMessage,
          formValue: game.away.formValue,
          setFormValue: game.away.setFormValue,
        },
        other: {
          messages: game.other.messages,
          sendMessage: game.other.sendMessage,
          formValue: game.other.formValue,
          setFormValue: game.other.setFormValue,
        },
      }}
    >
      {!user ? <ButtonSignIn authMethod={signInWithGoogle} /> : <>{game ? <PGameTab /> : <></>}</>}
    </GameContext.Provider>
  )
}
