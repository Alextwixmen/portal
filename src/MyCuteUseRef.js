import React, { useEffect, useRef } from 'react';
const stylesForUseRef = {
  width: '300px',
  height: '300px',
  border: '1px solid black',
  marginTop: '100px',
};
const MyCuteUseRef = (props) => {
  const myRef = useRef();
  const handleClick = () => {
    console.log((myRef.current.style.color = 'blue'));
  };
  return (
    <>
      <div ref={myRef} style={stylesForUseRef}>
        <p>My cute useRef</p>
        <button onClick={handleClick}>Изменим цвет через реф</button>
      </div>
    </>
  );
};

export default MyCuteUseRef;
