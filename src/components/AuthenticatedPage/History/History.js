import styles from "./History.module.css";

export default function History() {
  return (
    <div className={styles.history}>
      <div className={styles.attempt}>
        <div className={styles.row}>
          <div className="col">Attempt 1</div>
          <div className="col">20/11/2023 10:52</div>
          <div className="col">You scored: 5/10 (50%)</div>
        </div>
        <div className={styles.row}></div>
      </div>
      <div className={styles.attempt}>
        <div className={styles.row}>
          <div className="col">Attempt 1</div>
          <div className="col">20/11/2023 10:52</div>
          <div className="col">You scored: 5/10 (50%)</div>
        </div>
        <div className={styles.row}></div>
      </div>
    </div>
  );
}
