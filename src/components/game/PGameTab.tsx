import React, { useContext } from 'react'
import { GameContext } from '@/components/game/CGame'
import { Tabs } from 'antd'
import { css } from '@emotion/core'
import { TGameContext } from '@/types/Game'
import { PGameForm } from './PGameForm'
import { PGameTimeLine } from './PGameTimeLine'

const stTab = css({
  width: `100%`,
  maxWidth: `800px`,
})

const stTabPane = css({
  flex: `auto`,
  flexDirection: `column`,
  fontSize: `0.5rem`,
  textAlign: `center`,
  width: `200px`,
  maxWidth: `20vw`,
})

const { TabPane } = Tabs

export const PGameTab: React.FCX = () => {
  const context: TGameContext = useContext(GameContext)
  const { home, away, other } = context
  return (
    <>
      <Tabs animated size='large' centered defaultActiveKey='1' tabPosition='top' type='card' css={stTab}>
        <TabPane
          tab={<div css={stTabPane}>Supporter</div>}
          key='1'
          css={css({ display: `flex`, flexDirection: `column`, justifyContent: `space-between`, height: `100%` })}
        >
          {home.messages ? <PGameTimeLine messages={home.messages} /> : <></>}
          <div css={css({ verticalAlign: `bottom` })}>
            <PGameForm handleSend={home.sendMessage} formValue={home.formValue} setFormValue={home.setFormValue} />
          </div>
        </TabPane>
        <TabPane tab={<div css={stTabPane}>Supporter</div>} key='2'>
          {away.messages ? <PGameTimeLine messages={away.messages} /> : <></>}
          <PGameForm handleSend={away.sendMessage} formValue={away.formValue} setFormValue={away.setFormValue} />
        </TabPane>
        <TabPane tab={<div css={stTabPane}>Gallery</div>} key='3'>
          {other.messages ? <PGameTimeLine messages={other.messages} /> : <></>}
          <PGameForm handleSend={other.sendMessage} formValue={other.formValue} setFormValue={other.setFormValue} />
        </TabPane>
      </Tabs>
    </>
  )
}
