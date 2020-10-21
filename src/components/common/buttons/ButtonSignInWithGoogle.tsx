import React from 'react'
import { Button } from 'antd'
import { GoogleOutlined } from '@ant-design/icons'
import { css } from '@emotion/core'
import { signInWithGoogle } from '@/utils/sign'
import { useRouter } from 'next/router'
import { stButton } from './style'

const stGoogle = css({
  backgroundColor: `#db4437`,
  '&:hover': {
    backgroundColor: `#e1685f`,
  },
  '&:focus': {
    backgroundColor: `#e1685f`,
  },
})

export const ButtonSignInWithGoogle: React.FCX = () => {
  const router = useRouter()
  const handleClick = async () => {
    await signInWithGoogle()
    router.push(`/`)
  }
  return (
    <Button icon={<GoogleOutlined />} block onClick={handleClick} css={[stButton, stGoogle]}>
      Sign In with Google
    </Button>
  )
}
