import React from 'react'
import { Button, Input } from 'antd'
import { SendOutlined } from '@ant-design/icons'

const { TextArea } = Input

type Props = {
  handleSend: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
  formValue: string
  setFormValue: React.Dispatch<React.SetStateAction<string>>
}

export const PGameForm: React.FCX<Props> = (props) => {
  const { handleSend, formValue, setFormValue } = props
  return (
    <form onSubmit={handleSend}>
      <TextArea showCount rows={4} value={formValue} onChange={(e) => setFormValue(e.target.value)} maxLength={100} />
      <Button htmlType='submit' size='large' block type='primary' icon={<SendOutlined />}>
        ポスト
      </Button>
    </form>
  )
}
