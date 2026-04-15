import { useText } from "./useText"

export const GreetingCard = () => {
  const {text: text, setText, clear, toUpperCase, toLowerCase} = useText('Привет!')
 
  return (
    <div>
      <h2>💬 {text || "..."}</h2>
    <button onClick={toUpperCase}>ГРОМКО</button>
      <button onClick={toLowerCase}>тихо</button>  
      <button onClick={() => setText('Добро пожаловать!')}>Сказать 'Добро пожаловать!'</button>
        <button onClick={clear}>Молчать</button>
    </div>
  )
}