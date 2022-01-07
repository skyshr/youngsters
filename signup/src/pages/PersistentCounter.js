// .jsx
import React, { useState, useEffect } from "react";

export default function PersistentCounter() {
  const [count, setCount] = useState(
    () => JSON.parse(window.localStorage.getItem("count")) || 0
  );

  useEffect(() => {
    window.localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return(
  <>
    <p>정보 저장되는 카운터</p>
    <button onClick={() => setCount(count + 1)}>{count}</button>
  </>
  )
}