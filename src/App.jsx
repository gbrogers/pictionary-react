import "./App.css";
import axios from "axios";
import React, { useState } from "react";
import UserCard from "./UserCard";

function App() {
  const [difficulty, setDifficulty] = useState();
  const [word, setWord] = useState();

  const generateWords = (difficulty) => {
    console.log("in generateWords");
    axios
      .get(`/api/getwords/${difficulty}`)
      .then((res) => {
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
              onClick={() => generateWords(difficulty)}
            >
              Generate Words
            </button>
          </div>
        </div>

        <UserCard word={word} difficulty={difficulty} />
        <div className="nextContainer">
          <button className="newWord" onClick={() => generateWords(difficulty)}>
            New Word
          </button>
        </div>
      </body>
    </div>
  );
}

export default App;