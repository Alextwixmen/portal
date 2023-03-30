import { useCallback, useState } from 'react';
import styles from './app.module.css';
import Modal from './Modal';
import Mouse from './Mouse';
import Card from './Card';
import Square from './Square';
import TestEffect from './testEffect';
import ReducerCounter from './ReducerCounter';
export const App = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('Portal');
  const [factorialNumber, changeFactorialNumber] = useState(5);
  function withoutUseCallback() {
    console.log('zopa');
  }
  const withUseCallBack = useCallback(() => {
    return withoutUseCallback();
  }, []);
  return (
    <>
      <Card />
      <Card />
      {/* <Card /> */}
      <button onClick={() => setOpen(true)}>Открыть/Закрыть</button>
      <input value={text} onChange={(e) => setText(e.target.value)}></input>
      <Modal open={open} onClose={() => setOpen(false)} text={text}></Modal>
      {/* <Square /> */}
      <TestEffect
        factorialNumber={factorialNumber}
        myCallback={withUseCallBack}
      />
      <button onClick={() => changeFactorialNumber(6)}>
        Посчитай факториал для 6
      </button>
      <ReducerCounter />
    </>
  );
};

export default App;
