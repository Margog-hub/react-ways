
import { LightSwitch } from '../Toggle/LightSwitch'
import NotificationSwitch from '../Toggle/NotificationSwitch';
import { VisibilityToggle } from '../Toggle/VisibilityToggle';

const  TogglePage=()=> {
 return (
    <div>
      <LightSwitch />
      <VisibilityToggle />
      <NotificationSwitch />
    </div>
  )
}
export default TogglePage