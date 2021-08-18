import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
// import data from "./services/useRequest";
// import GenerateWords from "./GenerateWord";

function App() {
  const [difficulty, setDifficulty] = useState();
  const [data, setData] = useState();

  const generateWords = (difficulty) => {
    console.log("in generateWords");
    axios
      .get(`http://localhost:3001/api/getwords/?difficulty=${difficulty}`)
      .then((res) => {
        console.log(res.data);
        // setData(res.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <header>
        <h1>Pictionary Word Generator</h1>
      </header>

      <fieldset>
        <legend>Set-Up</legend>
        <label htmlFor="difficulty">Choose a Difficulty</label>
        <select
          onChange={(e) => setDifficulty(e.target.value)}
          id="difficulty"
          type="dropdown"
          value={difficulty}
        >
          <option value="">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <button onClick={() => generateWords(difficulty)}>
          Generate Words
        </button>
        {/* <button onClick={() => console.log(difficulty)}>Generate Words</button> */}
      </fieldset>
    </div>
  );
}

export default App;
