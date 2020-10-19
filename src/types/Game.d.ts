export type TMessages = {
  uid: string
  text: string
  photoURL: string
  displayName: string
  createdAt: {
    seconds: number
    nanoseconds: number
  }
}

export type TGameHook = {
  messages: TMessages[] | undefined
  sendMessage: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
  formValue: string
  setFormValue: React.Dispatch<React.SetStateAction<string>>
}

export type TGameContext = {
  id: string
  home: TGameHook
  away: TGameHook
  other: TGameHook
}
