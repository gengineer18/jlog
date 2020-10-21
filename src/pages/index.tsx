import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { LayoutDefault } from '@/components/common/layout/LayoutDefault'
import { useAuthentication } from '@/hooks/common/useAuthentication'

const Index: NextPage = () => {
  const { user, isInitializing } = useAuthentication()
  return (
    <LayoutDefault>
      <Link href='/game/test'>
        <a>game</a>
      </Link>
      {!isInitializing && !user && (
        <Link href='/enter'>
          <a>SingIn</a>
        </Link>
      )}
    </LayoutDefault>
  )
}
export default Index
