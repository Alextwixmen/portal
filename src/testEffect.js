import React, { useCallback, useEffect, useMemo } from 'react';
import { useState } from 'react';
const styles = {
  width: '100px',
  height: '100px',
  border: '1px solid black',
  marginTop: '100px',
};
const TestEffect = (props) => {
  console.log('вызывали TestEffect');
  //const factorialNumber = factorial(props.factorialNumber); //если делать так, то на каждый ререндер этого компонента(допустим, по причине ререндера родителя) у нас будет вызываться снова тяжелая функция factorial и считать число, даже если оно не изменилось после этого вычисления

  const factorialNumber = useMemo(
    () => factorial(props.factorialNumber),
    [props.factorialNumber]
  );
  return (
    <>
      <div style={styles}>
        <span style={{ color: 'red' }}>factorial</span>
        <span>{factorialNumber}</span>
      </div>
    </>
  );
};

export default React.memo(TestEffect); //так делаем для того, чтоб предотвратить ререндер всего компонена целиком, в данном случае это бы тоже решило проблему с перевычислением факториала, но для примера через useMemo
// export default TestEffect;
function factorial(n) {
  console.log('вызвали факторил');
  if (n < 0) {
    console.error('factorial вызван с неверным значением n');
  } else if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
