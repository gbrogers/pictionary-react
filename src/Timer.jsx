import react, { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(60);
  const [countdown, setCountdown] = useState(false);
  const [sendRequest, setSendRequest] = useState(false);
  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds("Times Up!");
    }
    setCountdown(true);
  }, [1000]);

  return (
    <div>
      <button onClick={() => setSendRequest(true)}>Start Timer</button>
      {countdown && <div>{seconds}</div>}
    </div>
  );
}
