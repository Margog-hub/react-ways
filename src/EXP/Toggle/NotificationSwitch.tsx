
import { useToggle } from './useToggle'

 export const NotificationSwitch = () => {
    const {value:isOn, toggle , reset,setTrue} = useToggle(false)
  return (
    <div>
      {isOn ?<h2>"🔔 Уведомления включены"</h2> :<h2>"🔕 Уведомления выключены"</h2> }


      <button onClick={toggle}>Переключить</button>
       <button onClick={setTrue}>Включить</button>
        <button onClick={reset}>Сбросить по умолчанию</button>
    </div>
  )
}

export default NotificationSwitch