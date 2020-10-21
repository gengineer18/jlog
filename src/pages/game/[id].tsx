import React from 'react'
import { NextPage } from 'next'
import { CGame } from '@/components/game/CGame'
import { LayoutDefault } from '@/components/common/layout/LayoutDefault'

const GamePage: NextPage = () => (
  <LayoutDefault>
    <CGame />
  </LayoutDefault>
)

export default GamePage
