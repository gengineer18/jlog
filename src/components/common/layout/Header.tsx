import React from 'react'
import { Layout } from 'antd'
import Link from 'next/link'

const AntdHeader = Layout.Header

export const Header: React.FCX = () => (
  <AntdHeader className='text-center'>
    <Link href='/'>
      <a>
        <span className='text-white'>JLog</span>
      </a>
    </Link>
  </AntdHeader>
)
