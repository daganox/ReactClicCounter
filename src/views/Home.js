import React from 'react';

function Home({onIncrement, onDecrement, counter}) {
  return (
    <div>
      <label>Nb clics: {counter}</label>&nbsp;
      <button onClick={onIncrement}>+1</button>&nbsp;
      <button onClick={onDecrement}>-1</button>
    </div>
  );
};

export default Home;
