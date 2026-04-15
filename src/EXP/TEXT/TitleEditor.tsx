import  { useText } from "./useText"

export const TitleEditor = () => {
  const {text: text, clear, toUpperCase, toLowerCase, setText}= useText("Заголовок статьи")

  return (
    <div>
      <h2>{text || "Пусто"}</h2>
      <button onClick={toUpperCase}> ВЕРХНИЙ РЕГИСТР</button>
      <button onClick={toLowerCase}>нижний регистр</button>
      
     <button onClick={() => setText('Новый заголовок')}>
        Изменить на 'Новый заголовок'
      </button>
      <button onClick={clear}>Очистить</button>
     
    </div>
  )
}