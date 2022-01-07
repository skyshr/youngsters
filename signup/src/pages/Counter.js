import React, { useState } from "react";

export default function Counter() {

  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1)
  }

  return (
  <>
    <p>일반 카운터</p>
    <button onClick={onClick}>{count}</button>
  </>
  )
}


