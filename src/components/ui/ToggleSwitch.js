import styles from "./ToggleSwitch.module.css";

export default function ToggleSwitch({ activeQuestion, marked, onSetMarked }) {
  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        className={styles.checkbox}
        onChange={(e) => onSetMarked()}
        checked={marked.some((el) => el === activeQuestion)}
      />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  );
}
