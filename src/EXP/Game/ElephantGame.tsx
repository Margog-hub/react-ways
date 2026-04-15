import  { useState } from 'react'

interface ElephantGameProps {
  onStart: () => void; 
}
const ElephantGame = ({onStart}:ElephantGameProps ) => {
  const [value] = useState('🐘')

  const handleClick = () => {
    onStart();
  };

  return (
    
    <div style={{ fontSize: "100px" }}>ElephantGame <span onClick={handleClick}>+{value}</span> </div>
  )
}

export default ElephantGame