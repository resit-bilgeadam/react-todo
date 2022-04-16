import React from "react";
import Button from "../Button";

function Counter() {
  const [count, setCount] = React.useState(0);

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3>Count: {count}</h3>
      <div>
        <Button handleClick={decrement}>- Decrement</Button>
        <Button handleClick={reset}>Reset</Button>
        <Button handleClick={increment}>+ Increment</Button>
      </div>
    </div>
  );
}

export default Counter;
