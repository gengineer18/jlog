import React, { useState, useRef } from 'react'
import { NextPage } from 'next'
import { List, Avatar } from 'antd'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import firebaseConfig from '../../config/firebase.json'

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

const auth = firebase.auth()
const firestore = firebase.firestore()

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }
  return <button onClick={signInWithGoogle}>signin</button>
}

function SignOut() {
  return (
    auth.currentUser && <button onClick={() => auth.signOut()}>sign out</button>
  )
}

function ChatRoom() {
  const messagesRef = firestore.collection('messages')
  const query = messagesRef.orderBy('createdAt', 'desc').limit(5)
  const ref = useRef<HTMLDivElement>(null)

  const [messages] = useCollectionData(query, { idField: 'id' })
  const [formValue, setFormValue] = useState('')

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!auth.currentUser) return
    const { uid, photoURL } = auth.currentUser
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    })

    setFormValue('')
    ref && ref.current && ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <main>
        {messages && (
          <List
            itemLayout="horizontal"
            dataSource={messages}
            renderItem={(item: any) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.photoURL} />}
                  title={<span>{item.text}</span>}
                  description={item.uid}
                />
              </List.Item>
            )}
          />
        )}
        <div ref={ref}></div>
        <SignOut />
      </main>
      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </>
  )
}

const Index: NextPage = () => {
  const [user] = useAuthState(auth)
  return <div>{user ? <ChatRoom /> : <SignIn />}</div>
}

export default Index
