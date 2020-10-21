import React from 'react'
import { NextPage } from 'next'
import { CEnter } from '@/components/enter/CEnter'
import { LayoutNoHeaderFooter } from '@/components/common/layout/LayoutNoHeaderFooter'

const SignInPage: NextPage = () => (
  <LayoutNoHeaderFooter>
    <CEnter />
  </LayoutNoHeaderFooter>
)

export default SignInPage
