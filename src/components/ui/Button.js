import styles from "./Button.module.css";

export default function Button({
  onClick = () => {},
  backgroundColor = "#04AA6D",
  color = "#fff",
  padding = "10px 15px",
  visibility = "visible",
  children,
}) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor, color, padding, visibility }}
      className={styles.button}
    >
      {children}
    </button>
  );
}
