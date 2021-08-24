import react, { useState, useEffect } from "react";

export default function Timer(props) {
  const [seconds, setSeconds] = useState();
  const [countdown, setCountdown] = useState(false);
  const [startTimer, setStartTimer] = useState(false);

  useEffect(() => {
    console.log(" in useEffect");

    if (seconds > 0) {
      console.log("seconds greater than 0");
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else if (seconds === 0) {
      setSeconds("Times Up!");
      setCountdown(false);
    }
    setCountdown(true);
  }, [startTimer, seconds]);

  return (
    <div className="timer">
      {countdown && (
        <button
          onClick={() => {
            setSeconds(60);
            setStartTimer(true);
          }}
        >
          Start Timer
        </button>
      )}
      {countdown && <div>{seconds}</div>}
    </div>
  );
}
