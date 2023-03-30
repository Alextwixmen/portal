import React from 'react';
import Mouse from './Mouse';

const cardStyle = {
  height: '100px',
  border: '1px solid black',
  margin: '5px',
};
export default (props) => {
  return (
    <Mouse
      render={({ x, y }) => (
        <div style={cardStyle}>
          <p>RENDER PROPS</p>
          {x} : {y}
        </div>
      )}
    />
  );
};
