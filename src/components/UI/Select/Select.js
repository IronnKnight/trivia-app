import styles from "./Select.module.css";

export default function Select({ options, difficulty }) {
  return (
    <select className={styles.difficulty} ref={difficulty}>
      {options.map((option) => (
        <option
          disabled={option === "Medium" || option === "Hard"}
          key={option}
          value={option}
        >
          {option}
        </option>
      ))}
      ;
    </select>
  );
}
