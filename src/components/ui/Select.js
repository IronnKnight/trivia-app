import styles from './Select.module.css';

export default function Selection() {
  return (
    <select className={styles.difficulty}>
      <option>Easy</option>
      <option disabled>Medium</option>
      <option disabled>Hard</option>
    </select>
  );
}
