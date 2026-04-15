import { useState } from 'react'
import CounterCame from '../Game/CounterCame'
import ElephantGame from '../Game/ElephantGame'


const Game = () => {
  const [activePage, setActivePage] = useState('counter')

  const onFinish =() => {
    setActivePage('elephant')
  }
  const onStart =() => {
    setActivePage('counter')
  }
  return (
    <div>
      {activePage === 'counter' &&  <CounterCame onFinish={onFinish}/>}
      {activePage === 'elephant' && <ElephantGame onStart ={onStart}/>}
      
    </div>
  )
}

export default Game