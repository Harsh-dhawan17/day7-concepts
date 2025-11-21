"use client";

import { useState } from "react";

export default function InteractivePage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Interactive Counter</h1>

      <div style={{
        background: "#eee",
        padding: 20,
        width: 200,
        textAlign: "center",
        borderRadius: 8
      }}>
        <h2>{count}</h2>

        <button onClick={() => setCount(count + 1)} style={{ padding: 10 }}>
          Increase
        </button>

        <button
          onClick={() => setCount(count - 1)}
          style={{ padding: 10, marginLeft: 10 }}
        >
          Decrease
        </button>
      </div>
    </>
  );
}
