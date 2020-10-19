import React, { useState, createContext, useEffect } from 'react'

export const WindowSizeContext = createContext({ width: 0, height: 0 })

export const WindowSizeProvider: React.FCX = ({ children }) => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const onResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    if (process.browser) {
      onResize()
    }
    window.addEventListener(`resize`, onResize)
    return () => window.removeEventListener(`resize`, onResize)
  }, [])

  return <WindowSizeContext.Provider value={{ width, height }}>{children}</WindowSizeContext.Provider>
}
