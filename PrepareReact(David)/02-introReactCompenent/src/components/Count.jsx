import { React, useState } from "react";

export default function Counter() {
  const [count, setcount] = useState(0);

  function heandleCountPlus() {
    setcount(count + 1);
  }

  function heandleCountMin() {
    if (count == 0) return;
    setcount(count - 1);
  }
  return (
    <div className="count">
      <h2>{count}</h2>
      <button onClick={heandleCountPlus}>+</button>
      <button onClick={heandleCountMin}>-</button>
    </div>
  );
}
