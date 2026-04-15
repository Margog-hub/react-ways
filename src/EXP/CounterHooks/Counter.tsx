import  { useEffect, useState } from 'react'

// presetation -ui
const Counter = () => {
  
const {count, inc} = useCounter()

  return (
    <div>
      <button onClick={inc}>{count}</button>
    </div>
  )
}
export default Counter


 export const CounterForChildren = () => {
  
const {count, inc} = useCounter()

  return (
    <div>
      <button onClick={inc}>{count}</button>
    </div>
  )
}


//  bll -state
const useCounter =(startValue: number = 0) => {

  const [count, setCount] = useState(startValue)
 
  useEffect(() => {
setInterval(() => setCount(0), 3000);
  }, [])


    return {
      count, 
      inc: () => {setCount(count + 1)}
    }
  
}
