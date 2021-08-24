import react, { useState, useEffect } from "react";

export default function Timer(props) {
  const [seconds, setSeconds] = useState();
  //   const [countdown, setCountdown] = useState(false);
  const [sendRequest, setSendRequest] = useState(false);
  const { countdown, setCountdown } = props;
  useEffect(() => {
    console.log(" in useEffect");
    console.log(seconds); //undefined
    if (seconds > 0) {
      console.log("seconds greater than 0");
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds("Times Up!");
      setCountdown(false);
    }
    setCountdown(true);
  }, setSeconds);

  return (
    <div>
      {countdown && (
        <button
          onClick={() => {
            setSeconds(60);
          }}
        >
          Start Timer
        </button>
      )}
      {countdown && <div>{seconds}</div>}
    </div>
  );
}
