import { useState } from 'react'

let interval

export const useShow = (maxIndex: number) => {
  const [index, setIndex] = useState(0)
  const [opacity, setOpacity] = useState(1)

  const handleHover = (flag: boolean) => {
    if (flag) {
      interval = setInterval(() => {
        setIndex(prevIndex => (prevIndex + 1) % 4)
        setOpacity(prevOpacity => {
          const newOpacity = prevOpacity - 0.25
          return newOpacity < 0 ? 1 : newOpacity
        })
      }, 500)
    } else {
      clearInterval(interval!)
    }
  }

  return { handleHover, index, opacity }
}