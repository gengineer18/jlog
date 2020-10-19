import React, { useState } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { initFirebase, firestore, auth } from '@/utils/firebase'
import { TGameHook, TMessages } from '@/types/Game'

export const useGame = (
  gameId: string
): {
  home: TGameHook
  away: TGameHook
  other: TGameHook
} => {
  const gameRef = firestore.collection(`game`).doc(gameId)

  const [homeFormValue, setHomeFormValue] = useState(``)
  const homeRef = gameRef.collection(`home`)
  const homeQuery = homeRef.orderBy(`createdAt`, `desc`)
  const [homeMessages] = useCollectionData<TMessages>(homeQuery, { idField: `id` })
  const sendHomeMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!auth.currentUser || !homeFormValue) return
    const { uid, photoURL, displayName } = auth.currentUser
    await homeRef.add({
      text: homeFormValue,
      createdAt: initFirebase.firestore.FieldValue.serverTimestamp(),
      displayName,
      uid,
      photoURL,
    })

    setHomeFormValue(``)
  }

  const [awayFormValue, setAwayFormValue] = useState(``)
  const awayRef = gameRef.collection(`away`)
  const awayQuery = awayRef.orderBy(`createdAt`, `desc`)
  const [awayMessages] = useCollectionData<TMessages>(awayQuery, { idField: `id` })
  const sendAwayMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!auth.currentUser || !awayFormValue) return
    const { uid, photoURL, displayName } = auth.currentUser
    await awayRef.add({
      text: awayFormValue,
      createdAt: initFirebase.firestore.FieldValue.serverTimestamp(),
      displayName,
      uid,
      photoURL,
    })

    setAwayFormValue(``)
  }

  const [otherFormValue, setOtherFormValue] = useState(``)
  const otherRef = gameRef.collection(`other`)
  const otherQuery = otherRef.orderBy(`createdAt`, `desc`)
  const [otherMessages] = useCollectionData<TMessages>(otherQuery, { idField: `id` })
  const sendOtherMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!auth.currentUser || !otherFormValue) return
    const { uid, photoURL, displayName } = auth.currentUser
    await otherRef.add({
      text: otherFormValue,
      createdAt: initFirebase.firestore.FieldValue.serverTimestamp(),
      displayName,
      uid,
      photoURL,
    })

    setOtherFormValue(``)
  }

  const game = {
    home: {
      messages: homeMessages,
      sendMessage: sendHomeMessage,
      formValue: homeFormValue,
      setFormValue: setHomeFormValue,
    },
    away: {
      messages: awayMessages,
      sendMessage: sendAwayMessage,
      formValue: awayFormValue,
      setFormValue: setAwayFormValue,
    },
    other: {
      messages: otherMessages,
      sendMessage: sendOtherMessage,
      formValue: otherFormValue,
      setFormValue: setOtherFormValue,
    },
  }

  return game
}
