import React from 'react';
import { forwardRef, useImperativeHandle, useState } from 'react';
const stylesForModal = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
  opacity: '0.9',
};
const ModalImrepativeHandle = (props, ref) => {
  const [modalState, setModalState] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal: () => {
      setModalState(!modalState);
      console.log('m');
    },
  }));
  const handleClose = () => {
    setModalState(!modalState);
  };
  if (!modalState) return null;
  return (
    <div
      style={{
        ...stylesForModal,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        backgroundColor: 'black',
        flexDirection: 'column',
      }}
    >
      <span style={{ color: 'white' }}>POP-UP</span>
      <span style={{ color: 'white' }}>
        при этом не рендерим родительский компоненте APP
      </span>
      <button onClick={handleClose}>CLOSE</button>
    </div>
  );
};

export default forwardRef(ModalImrepativeHandle);
