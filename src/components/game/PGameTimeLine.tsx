import React from 'react'
import { List, Avatar, Button } from 'antd'
import { TMessages } from '@/types/Game'
import dayjs from 'dayjs'
import { css } from '@emotion/core'
import { MoreOutlined } from '@ant-design/icons'

type Props = {
  messages: TMessages[] | undefined
}

const stList = css({
  overflow: `scroll`,
  height: `60vh`,
  flex: `auto`,
})

export const PGameTimeLine: React.FCX<Props> = (props) => {
  const { messages } = props
  return (
    <main>
      {messages && (
        <List
          css={stList}
          itemLayout='vertical'
          size='large'
          dataSource={messages}
          renderItem={(item: TMessages) => {
            const date = item.createdAt ? dayjs.unix(item.createdAt?.seconds) : ``
            const formattedDate = date ? date.format(`YYYY/MM/DD HH:mm`) : ``
            return (
              <List.Item
                actions={[
                  // <Button size='small' type='primary' icon={<ShareAltOutlined />}>
                  //   シェア
                  // </Button>,
                  <></>,
                ]}
                // extra={
                //   item.photoURL && (
                //     <>
                //       {/* <img width={100} height={50} alt='logo' src={item.photoURL} />
                //       <img width={100} height={50} alt='logo' src={item.photoURL} />
                //       <img width={100} height={50} alt='logo' src={item.photoURL} /> */}
                //     </>
                //   )
                // }
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.photoURL} size='large' />}
                  title={
                    <div css={css({ display: `flex`, justifyContent: `space-between` })}>
                      <span>{item.displayName}</span>
                      <span css={css({ fontWeight: `normal`, fontSize: `0.75rem` })}>{formattedDate || ``}</span>
                    </div>
                  }
                  description={
                    <div css={css({ display: `flex`, justifyContent: `space-between` })}>
                      <span>{item.text}</span>
                      {/* <span css={css({ fontWeight: `normal`, fontSize: `0.75rem` })}>{date || ``}</span> */}
                      <Button size='middle' shape='circle' type='default' icon={<MoreOutlined />} />
                    </div>
                  }
                />
                {item.photoURL && <>{/* <img width={100} height={50} alt='logo' src={item.photoURL} /> */}</>}
              </List.Item>
            )
          }}
        />
      )}
    </main>
  )
}
