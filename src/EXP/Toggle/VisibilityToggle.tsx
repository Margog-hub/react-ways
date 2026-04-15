import { useToggle } from './useToggle'

export const VisibilityToggle = () => {
  const { value: isOn, setTrue, setFalse } = useToggle(false);

  return (
    <div>
      <h2>Секретное сообщение</h2>
      {isOn && <h3>🎉 Это секретное сообщение!</h3>}
      <button onClick={setTrue}>Показать</button>
      <button onClick={setFalse}>Скрыть</button>
    </div>
  );
};