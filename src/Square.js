import React from 'react';
import Mouse from './Mouse';
const Square = (props) => {
  return (
    <Mouse
      render={({ x, y }) => {
        return (
          <div
            className='zopa'
            style={{
              //   width: '300px',
              height: '300px',
              border: '1px solid black',
              marginTop: '100px',
            }}
          >
            {x} : {y}
          </div>
        );
      }}
    />
    // <div
    //   style={{
    //     width: '300px',
    //     height: '300px',
    //     border: '1px solid black',
    //     marginTop: '100px',
    //   }}
    // ></div>
  );
};
export default Square;
