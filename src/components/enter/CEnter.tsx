import React from 'react'
import { Row, Col } from 'antd'
import { PEnterAbout } from '@/components/enter/PEnterAbout'
import { PEnterSignIn } from '@/components/enter/PEnterSignIn'

export const CEnter: React.FCX = () => (
  <>
    <Row>
      <Col xs={24} sm={12}>
        <PEnterAbout />
      </Col>
      <Col xs={24} sm={12}>
        <PEnterSignIn />
      </Col>
    </Row>
  </>
)
