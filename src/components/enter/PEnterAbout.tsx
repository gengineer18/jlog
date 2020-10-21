import React from 'react'
import Link from 'next/link'
import { Typography } from 'antd'
import { css } from '@emotion/core'
import { stWrap } from './style'

const { Title, Text } = Typography

const stAboutWrap = css([
  {
    backgroundColor: `black`,
  },
  stWrap,
])

const stText = css({
  color: `white`,
})

const stLink = css({
  color: `red`,
  textDecoration: `underline`,
})

export const PEnterAbout: React.FCX = () => (
  <div css={stAboutWrap}>
    <Title>
      <span css={stText}>JLogとは</span>
    </Title>
    <Text>
      <span css={stText}>
        JLogは、スタジアムまで見に行ったJリーグの試合の記録をしたり、各試合のタイムラインでファン同士のリモート応援実況をしたり、試合のプレビュー・レビューをしたり、あなたのJリーグ観戦を記録・共有できるWebサイトです。
      </span>
    </Text>
    <Text strong>
      <Link href='/'>
        <a>
          <span css={[stLink]}>What is JLog?</span>
        </a>
      </Link>
    </Text>
  </div>
)
