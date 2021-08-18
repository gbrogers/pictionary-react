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
      .get(`/api/getwords/?difficulty=${difficulty}`)
      .then((res) => {
        let words = [];
        console.log(res.data);
        // const rightWords = res.data.filter(
        //   (item) => item.difficulty === difficulty
        // );
        // rightWords.map((spot) => {
        //   words.push(spot.word);
        // });
        // setData(data);
      })
      .catch((error) => console.log(error));
  };

  // useEffect(() => {
  //   axios
  //     .get(`${baseURL}/words/?difficulty=${difficulty}`)
  //     .then((res) => {
  //       console.log(res.data);
  //       setData(data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

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
