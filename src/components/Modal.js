import styles from "./Modal.module.css";

export default function Modal({ children }) {
  return (
    <div className={styles["modal-container"]}>
      <div className={styles.modal}>
        {children}
      </div>
    </div>
  );
}
