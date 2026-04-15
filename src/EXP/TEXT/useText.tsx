 import { useState } from "react"
 
 export function useText(initialText: string = "") {
  const [text, setText] = useState(initialText)

  const clear = () => setText('')
  const toUpperCase =() => setText(text.toUpperCase())
  const toLowerCase =() => setText(text.toLocaleLowerCase())
 
  return { text, setText, clear, toUpperCase, toLowerCase }
}