import { useState, useEffect } from "react";

export default function App() {
  const [advice, setAdvice] = useState("Advice");
  const [count, setCount] = useState(0); 

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount(c => c + 1);
  }

  useEffect(function() {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <Message count={count} />
    </div>
  );
}

function Message({count}) {
  return <p>You have read <strong>{count} pieces of advice.</strong></p>;
}