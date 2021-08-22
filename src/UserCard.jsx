import "./UserCard.css";

function UserCard(props) {
  const { word, difficulty } = props;

  return (
    <div className="container">
      <div className="wordCard">
        <div>
          <h2>{word}</h2>
        </div>
        <h3>
          Word Difficulty: <span className={difficulty}>{difficulty}</span>
        </h3>
      </div>
    </div>
  );
}

export default UserCard;
