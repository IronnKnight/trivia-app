import styles from "./Sidebar.module.css";

export default function Sidebar({
  activeQuestion,
  answered,
  marked,
  numberOfQuestions,
  onSetActiveQuestion,
}) {
  function selectClass(i) {
    const green = answered.some((el) => el.id === i);
    const yellow = marked.some((el) => el === i);
    const dark = activeQuestion === i;

    return dark ? styles.active : yellow ? styles.checked : green ? styles.done : "";
  }

  return (
    <div className={styles["sidebar"]}>
      {Array.from({ length: numberOfQuestions }, (_, i) => (
        <p
          className={`${styles["question-number"]} ${selectClass(i)}`}
          key={i}
          onClick={() => onSetActiveQuestion(i)}
        >
          {i + 1}.
        </p>
      ))}
    </div>
  );
}
