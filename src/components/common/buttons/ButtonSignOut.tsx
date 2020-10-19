import React from 'react'

type Props = {
  onClick: () => void
}

export const ButtonSignOut: React.FCX<Props> = (props) => {
  const { onClick } = props
  return (
    <button onClick={onClick} type='button'>
      sign out!!!
    </button>
  )
}
