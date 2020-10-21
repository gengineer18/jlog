import React from 'react'
import { Typography } from 'antd'
import { css } from '@emotion/core'
// import { ButtonSignInWithTwitter } from '@/components/common/buttons/ButtonSignInWithTwitter'
import { ButtonSignInWithGoogle } from '@/components/common/buttons/ButtonSignInWithGoogle'
import { stWrap } from './style'

const { Title, Text } = Typography

const stSignInWrap = css([stWrap])

export const PEnterSignIn: React.FCX = () => (
  <div css={stSignInWrap}>
    <Title>Sign In</Title>
    <Text>
      新規登録、ログインのどちらも以下のリンクから行うことができます。利用規約、プライバシーポリシーに同意したうえでログインしてください。
    </Text>
    {/* <ButtonSignInWithTwitter /> */}
    <ButtonSignInWithGoogle />
  </div>
)
