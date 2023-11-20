import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

export default function Modal({ children }) {
  return createPortal(
    <div className={styles["modal-container"]}>
      <div className={styles.modal}>{children}</div>
    </div>,
    document.body
  );
}
