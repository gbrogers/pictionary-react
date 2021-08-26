import styles from "./App.module.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import Timer from "./Timer";

function App() {
  const [difficulty, setDifficulty] = useState();
  const [word, setWord] = useState();
  const [toggleDifficulty, setToggleDifficulty] = useState(false);
  const [hideStartTimer, setHideStartTimer] = useState(false);

  const [toggleTimer, setToggleTimer] = useState(false);

  const generateWords = (difficulty) => {
    console.log("in generateWords");
    axios
      .get(`/api/getwords/${difficulty}`)
      .then((res) => {
        setToggleDifficulty(true);
        console.log(res.data);
        setWord(res.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={styles.app}>
      <header>
        <h1>Pictionary Word Generator</h1>
      </header>

      <div className={styles.setup}>
        <div>
          <label htmlFor="difficulty">Choose a Difficulty:</label>
          <select
            onChange={(e) => setDifficulty(e.target.value)}
            id="difficulty"
            type="dropdown"
            value={difficulty}
          >
            <option value="">Select</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className={styles.nextContainer}>
          <button
            className={styles.generateWord}
            onClick={() => {
              generateWords(difficulty);
              setToggleTimer(true);
              setHideStartTimer(false);
            }}
          >
            Generate Words
          </button>
        </div>
      </div>

      {toggleDifficulty && <UserCard word={word} difficulty={difficulty} />}
      {toggleTimer && (
        <Timer
          setToggleTimer={setToggleTimer}
          toggleTimer={toggleTimer}
          setHideStartTimer={setHideStartTimer}
          hideStartTimer={hideStartTimer}
        />
      )}
      {toggleDifficulty && (
        <div className={styles.nextContainer}>
          <button
            className={styles.newWord}
            onClick={() => {
              generateWords(difficulty);
              setToggleTimer(true);
              setHideStartTimer(false);
            }}
          >
            New Word
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
