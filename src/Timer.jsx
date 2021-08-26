import react, { useState, useEffect } from "react";
import styles from "./Timer.module.scss";

export default function Timer(props) {
  const { toggleTimer, setToggleTimer, hideStartTimer, setHideStartTimer } =
    props;
  const [seconds, setSeconds] = useState();

  const [startTimer, setStartTimer] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    console.log(" in useEffect");
    if (isRunning) {
      if (seconds > 0) {
        console.log("seconds greater than 0");
        setTimeout(() => setSeconds(seconds - 1), 1000);
      } else if (seconds === 0) {
        setSeconds("Times Up!");
        // setCountdown(false);
      }
      // setStartTimer(true);
    }
  }, [startTimer, seconds]);

  return (
    <div className={styles.timer}>
      {toggleTimer && !hideStartTimer && (
        <button
          onClick={() => {
            setIsRunning(true);
            setSeconds(60);
            setStartTimer(true);
            setHideStartTimer(true);

            // setToggleTimer(false);
          }}
        >
          Start Timer
        </button>
      )}
      {startTimer && <div className={styles.counting}>{seconds}</div>}
      {startTimer && (
        <button
          onClick={() => {
            setIsRunning(false);
            setStartTimer(false);
            setHideStartTimer(false);
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
}
