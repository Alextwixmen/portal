import React from 'react';
import { forwardRef, useImperativeHandle, useState } from 'react';
const stylesForModal = {
  width: '300px',
  height: '300px',
  border: '1px solid black',
  marginTop: '20px',
};
const ModalImrepativeHandle = (props, ref) => {
  const [modalState, setModalState] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal: () => {
      setModalState(!modalState);
      console.log('m');
    },
  }));
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
    </div>
  );
};

export default forwardRef(ModalImrepativeHandle);
