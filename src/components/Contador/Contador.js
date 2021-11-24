

import React, { useState } from "react";
import "./Contador.css";

function Counter() {
  
  const [count, setCount] = useState(0);

  
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  return (
    <div>
      <div>
      <h2>Contador</h2>
        <button onClick={handleDecrement}>-</button>
        <h5>Resultado es {count}</h5>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;