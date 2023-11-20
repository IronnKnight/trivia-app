import styles from "./ToggleSwitch.module.css";

export default function ToggleSwitch({ activeQuestion, dispatch, marked }) {
  function handleSetMarked() {
    const found = marked.some((val) => val === activeQuestion);
    dispatch({
      type: "setMarked",
      payload: found
        ? [...marked.filter((val) => val !== activeQuestion)]
        : [...marked, activeQuestion],
    });
  }

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        className={styles.checkbox}
        onChange={() => handleSetMarked()}
        checked={marked.some((el) => el === activeQuestion)}
      />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  );
}
