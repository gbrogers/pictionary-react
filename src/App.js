import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h1>Welcome to Pictionary Word Generator</h1>
      </header>
      <fieldset>
        <legend>Set-Up</legend>
        <label htmlFor="category">Choose a Category</label>
        <select id="category" type="dropdown">
          <option value="">Any Category</option>
          <option value="animals">Animals</option>
          <option value="food">Food</option>
          <option value="picnic">Picnic</option>
          <option value="verbs">Verbs</option>
        </select>
        <label htmlFor="difficulty">Choose a Difficulty</label>
        <select id="difficulty" type="dropdown">
          <option value="">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <label htmlFor="time">Select a time limit for each question</label>
        <select id="time" type="dropdown">
          <option value="">Choose</option>
          <option value="30">0.5 min</option>
          <option value="60">1 min</option>
          <option value="90">1.5 min</option>
          <option value="120">2 min</option>
        </select>
      </fieldset>
    </div>
  );
}

export default App;
