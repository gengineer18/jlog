import React from 'react'
import { Button } from 'antd'
import { TwitterOutlined } from '@ant-design/icons'
import { css } from '@emotion/core'
import { stButton } from './style'

type Props = {
  onClick?: () => void
}

const stTwitter = css({
  backgroundColor: `#00acee`,
  '&:hover': {
    backgroundColor: `#1ec3ff`,
  },
  '&:focus': {
    backgroundColor: `#1ec3ff`,
  },
})

export const ButtonSignInWithTwitter: React.FCX<Props> = ({ onClick }) => (
  <Button icon={<TwitterOutlined />} block onClick={onClick} css={[stButton, stTwitter]}>
    Sign In with Twitter
  </Button>
)
