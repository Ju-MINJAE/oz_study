import React from 'react';
import { useState } from 'react';

const Count = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
    console.log('Rendering');
  };

  return (
    <div>
      <button onClick={handleCount}>state count : {count}</button>
    </div>
  );
};

export default Count;
