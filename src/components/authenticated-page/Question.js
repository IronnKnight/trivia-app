import styles from "./Question.module.css";

export default function Question({
  questions,
  activeQuestion,
  answered,
  onSetAnswered,
}) {
  const answerExists = answered.find(
    (el) => el.id === activeQuestion
  )?.userAnswer;

  return (
    <ul className={styles.answers}>
      {questions[activeQuestion].answers.map((e, i) => (
        <li key={i}>
          <label>{i + 1}.</label>
          <input
            type="radio"
            checked={answerExists === e}
            value={e}
            name="answers"
            onChange={() => onSetAnswered(e)}
          />
          <label>{e}</label>
        </li>
      ))}
    </ul>
  );
}
