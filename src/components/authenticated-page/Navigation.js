import { useState } from "react";
import Button from "../ui/Button";
import styles from "./Navigation.module.css";
import Compliance from "./Compliance";

export default function Navigation({
  activeQuestion,
  answered,
  onSetActiveQuestion,
  onSetStarted,
  questions,
}) {
  const [showModal, setShowModal] = useState(false);
  const answeredLength = answered.length;
  const questionsLength = questions.length;

  function handleCompleteTest(value) {
    if (value) {
      onSetStarted(false);
      setShowModal(false);
    } else {
      setShowModal(false);
    }
  }

  return (
    <div className={styles.navigate}>
      <span>
        <Button
          backgroundColor="#333"
          visibility={activeQuestion === 0 ? "hidden" : ""}
          padding="10px 20px"
          onClick={() => onSetActiveQuestion((n) => n - 1)}
        >
          ←
        </Button>
        <Button
          backgroundColor="#333"
          visibility={activeQuestion === 9 ? "hidden" : ""}
          padding="10px 20px"
          onClick={() => onSetActiveQuestion((n) => n + 1)}
        >
          →
        </Button>
      </span>
      {answeredLength === questionsLength && (
        <Button padding="10px 60px" onClick={() => setShowModal(true)}>
          Complete
        </Button>
      )}
      {showModal && <Compliance onCompleteTest={handleCompleteTest} />}
    </div>
  );
}
