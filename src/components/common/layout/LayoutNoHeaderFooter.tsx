import React from 'react'
import { Layout } from 'antd'

const { Content } = Layout

export const LayoutNoHeaderFooter: React.FCX = ({ children }) => <Content>{children}</Content>
