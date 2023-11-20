import Modal from "../../Modal";
import Button from "../../UI/Button/Button";
import styles from "./Compliance.module.css";

export default function Compliance({ onCompleteTest }) {
  return (
    <Modal>
      <p className={styles.text}>Are you sure you want to complete the test?</p>
      <div className={styles.compliance}>
        <Button
          onClick={() => onCompleteTest(true)}
          backgroundColor="#04AA6D"
          padding="10px 20px"
        >
          Yes
        </Button>
        <Button
          onClick={() => onCompleteTest(false)}
          backgroundColor="#ff4d4d"
          padding="10px 20px"
        >
          No
        </Button>
      </div>
    </Modal>
  );
}
