import React from 'react'
import { Layout } from 'antd'
import { css } from '@emotion/core'

const AntdFooter = Layout.Footer

export const Footer: React.FCX = () => (
  <AntdFooter className='text-center' css={css({ textAlign: `center` })}>
    <span className='text-indigo-900'>Copyright © 2020 Woods At Web</span>
  </AntdFooter>
)
