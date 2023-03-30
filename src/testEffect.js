import React, { useEffect } from 'react';
import { useState } from 'react';
const styles = {
  width: '100px',
  height: '100px',
  border: '1px solid black',
  marginTop: '100px',
};
function test() {
  return 'red';
}
const TestEffect = (props) => {
  console.log('вызывали тест еффект');
  const [color, changeColor] = useState(test());
  function changePls() {
    let myColor = color === 'red' ? 'blue' : 'red';
    changeColor(myColor);
  }
  useEffect(() => {
    console.log(color);
    return () => {
      console.log('willUnmount and color ===', color);
    };
  });

  return (
    <>
      <button onClick={() => changePls()}></button>
      <div style={{ ...styles }}>
        <span style={{ color: color }}>Test</span>
      </div>
    </>
  );
};

export default React.memo(TestEffect);
