import { useState } from 'react';
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
  return (
    <>
      <Card />
      <Card />
      {/* <Card /> */}
      <button onClick={() => setOpen(true)}>Открыть/Закрыть</button>
      <input value={text} onChange={(e) => setText(e.target.value)}></input>
      <Modal open={open} onClose={() => setOpen(false)} text={text}></Modal>
      {/* <Square /> */}
      <TestEffect />
      <ReducerCounter />
    </>
  );
};

export default App;
