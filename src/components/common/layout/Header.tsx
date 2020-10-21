import React from 'react'
import { Layout } from 'antd'
import Link from 'next/link'
// import { useAuthState } from 'react-firebase-hooks/auth'
// import { auth } from '@/utils/firebase'
import { signOut } from '@/utils/sign'
import { css } from '@emotion/core'
import { useAuthentication } from '@/hooks/common/useAuthentication'

const AntdHeader = Layout.Header

export const Header: React.FCX = () => {
  const { user, isInitializing } = useAuthentication()
  return (
    <AntdHeader css={css({ display: `flex` })}>
      <Link href='/'>
        <a>
          <span className='text-white'>JLog</span>
        </a>
      </Link>
      {user && !isInitializing && (
        <button type='button' onClick={signOut}>
          ログアウト
        </button>
      )}
      {isInitializing && <p css={css({ color: `white` })}>loading...</p>}
    </AntdHeader>
  )
}
