
import { useState } from 'react';

export function useToggle(initialValue: boolean  = false) {

  const [value, setValue] = useState<boolean>(initialValue);

   const toggle = () => setValue(v => !v)
  const  setTrue = () => setValue(true)
   const setFalse = () => setValue(false)
   const reset = () => setValue(initialValue)
  return { value, toggle, setTrue, setFalse,reset};
}

