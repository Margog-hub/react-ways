import { useToggle } from './useToggle';

export function LightSwitch() {
  // const [isOn, toggle] = useToggle(false);
    const { value: isOn, toggle } = useToggle(false);

  return (
    <div>
      <h2>Выключатель света</h2>
      <h3>{isOn ? "💡 Свет включен" : "🌙 Свет выключен"}</h3>
      <button onClick={toggle}>Переключить свет</button>
    </div>
  );
}