import styles from "./Input.module.css";

export default function Input({ label, type }) {
  return (
    <div className={styles.row}>
      {label && <label>{label}</label>}
      <input type={type} />
    </div>
  );
}
