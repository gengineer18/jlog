import React from 'react'
import { Layout } from 'antd'
import { Header } from '@/components/common/layout/Header'
import { Footer } from '@/components/common/layout/Footer'
import { css } from '@emotion/core'

const { Content } = Layout

const layout = css({
  minHeight: `calc(100vh - 134px)`,
  maxWidth: `960px`,
  margin: `0 auto`,
  padding: `20px 12px`,
})

export const LayoutDefault: React.FCX = ({ children }) => (
  <>
    <Header />
    <Content css={layout}>{children}</Content>
    <Footer />
  </>
)
