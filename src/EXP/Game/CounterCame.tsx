import{ useState } from 'react'

interface CounterCameProps {
  onFinish: () => void;
}
const CounterCame = ({onFinish} : CounterCameProps) => {
  const [value, setValue] = useState(1)
  
  const handlerFinish =() => {
    setValue(value + 1)
    if(value + 1 === 5 && onFinish){
      onFinish()
    }
  }


  return (
    <div>CounterCame <span onClick={handlerFinish}>+{value}</span></div>
  )
}

export default CounterCame