import React from 'react'

type Props = {
  authMethod: () => void
}

export const ButtonSignIn: React.FCX<Props> = (props) => {
  const { authMethod } = props
  return (
    <button onClick={authMethod} type='button'>
      signin
    </button>
  )
}
