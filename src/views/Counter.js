import React from 'react';

function Counter({onIncrement, onDecrement, counter}) {
  return (
    <div>
      <div>
        <a href="/">Home</a>
      </div>
      <label>Nb clics: {counter}</label>&nbsp;
      <button onClick={onIncrement}>+1</button>&nbsp;
      <button onClick={onDecrement}>-1</button>
    </div>
  );
};

export default Counter;
