import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import Timer from "./Timer";

function App() {
  const [difficulty, setDifficulty] = useState();
  const [word, setWord] = useState();
  const [toggleDifficulty, setToggleDifficulty] = useState(false);

  // const [sendRequest, setSendRequest] = useState(false);
  const [toggleTimer, setToggleTimer] = useState(false);

  // useEffect(() => {
  //   if (seconds > 0) {
  //     setTimeout(() => setSeconds(seconds - 1), 1000);
  //   } else {
  //     setSeconds("Times Up!");
  //   }
  // }, [sendRequest]);

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
    <div className="body">
      <header>
        <h1>Pictionary Word Generator</h1>
      </header>
      <body>
        <div className="setup">
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
          <div className="nextContainer">
            <button
              className="generateWord"
              onClick={() => {
                generateWords(difficulty);
                setToggleTimer(true);
              }}
            >
              Generate Words
            </button>
          </div>
        </div>

        {toggleDifficulty && <UserCard word={word} difficulty={difficulty} />}
        {toggleTimer && <Timer />}
        {toggleDifficulty && (
          <div className="nextContainer">
            <button
              className="newWord"
              onClick={() => {
                generateWords(difficulty);
              }}
            >
              New Word
            </button>
          </div>
        )}
      </body>
    </div>
  );
}

export default App;
