import styles from './Header.module.css';

export default function Header() {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li className={styles["element-container"]}>
          <div className={styles["element-container"]}>
            <span className={styles["element"]}>Trivia App</span>
          </div>
          <div className={styles["element-container"]}>
            <span className={styles["element"]}>History</span>
          </div>
        </li>
        <li className={styles["element-container"]}>
          <span className={styles["element"]}>Log Out</span>
        </li>
      </ul>
    </nav>
  );
}
