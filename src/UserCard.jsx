import styles from "./UserCard.module.scss";

function UserCard(props) {
  const { word, difficulty } = props;

  return (
    <div className={styles.container}>
      <div className={styles.wordCard}>
        <div>
          <h2>{word}</h2>
        </div>
        <h3>
          Word Difficulty:{" "}
          <span className={styles[difficulty]}>{difficulty}</span>
        </h3>
      </div>
    </div>
  );
}

export default UserCard;
