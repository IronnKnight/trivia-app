import styles from "./Sidebar.module.css";

export default function Sidebar({
  activeQuestion,
  answered,
  marked,
  dispatch,
  questions,
}) {
  function selectClass(i) {
    const green = answered.some((el) => el.id === i);
    const yellow = marked.some((el) => el === i);
    const dark = activeQuestion === i;

    return dark
      ? styles.active
      : yellow
      ? styles.checked
      : green
      ? styles.done
      : "";
  }

  function handleSetActiveQuestion(i) {
    if (i > questions.length || i < 0) return;
    dispatch({ type: "setActiveQuestion", payload: i });
  }

  return (
    <div className={styles["sidebar"]}>
      {Array.from({ length: questions.length }, (_, i) => (
        <p
          className={`${styles["question-number"]} ${selectClass(i)}`}
          key={i}
          onClick={() => handleSetActiveQuestion(i)}
        >
          {i + 1}.
        </p>
      ))}
    </div>
  );
}
