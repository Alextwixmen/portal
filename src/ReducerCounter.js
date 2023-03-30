import React, { useReducer } from 'react';
const initialState = { count: 0 };
const ReducerStyles = {
  width: '300px',
  height: '300px',
  border: '1px solid black',
  marginTop: '100px',
};
// Пару правил:
// 1. В редьюсере не должно быть сайдЕффектов(например, наш редьюсер не должен менять какие-то внещние переменные, поля обектов, что угодно короче)
// 2. редьюсер - чистая функция. Изменения значений, возвращаемых им, зависит только от входящих в него параметров, то есть стейта и action
// 3. Редьюсер не изменяет старый state. Он возвращает новый стейт на основе старого. Объект стейта всегда новый.
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      console.log('increment');
      return {
        ...state,
        count: state.count + 1,
      };
    case 'decrement':
      console.log('decrement');

      return {
        ...state,
        count: state.count - 1,
      };
    default:
      throw new Error();
  }
}

const ReducerCounter = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div style={ReducerStyles}>{state.count + 'из редьюсера'}</div>
      <button onClick={() => dispatch({ type: 'decrement' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'increment' })}>Decrement</button>
    </>
  );
};
export default ReducerCounter;
