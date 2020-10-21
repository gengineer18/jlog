import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { LayoutDefault } from '@/components/common/layout/LayoutDefault'
import { useAuthentication } from '@/hooks/common/useAuthentication'
import { useGetUserByIdQuery } from '@/generated/graphql'

const Index: NextPage = () => {
  const { user, isInitializing } = useAuthentication()
  const { loading, error, data } = useGetUserByIdQuery({
    variables: {
      uid: user?.uid || ``,
    },
  })

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
      {loading ? <p>loading...</p> : <p>{JSON.stringify(data?.user_by_pk)}</p>}
      {error && <p>{JSON.stringify(error)}</p>}
    </LayoutDefault>
  )
}
export default Index
