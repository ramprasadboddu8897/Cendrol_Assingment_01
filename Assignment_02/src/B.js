import { useState } from "react";

function B(props) {
  const [count, setCount] = useState(props.cendol);

  function increment() {
    setCount((prevCount) => prevCount + 10);
  }

  return (
    <div>
      <div>Count: {count}</div>
      <br />
      <button onClick={increment}>Increment by 10</button>
    </div>
  );
}

export default B;
