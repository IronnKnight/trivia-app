import { useState } from "react";
import Button from "../../UI/Button/Button";
import styles from "./Navigation.module.css";
import Compliance from "../Compliance/Compliance";

export default function Navigation({
  activeQuestion,
  answered,
  dispatch,
  questions,
}) {
  const [showModal, setShowModal] = useState(false);
  const answeredLength = answered.length;
  const questionsLength = questions.length;

  function handleCompleteTest(value) {
    if (value) {
      dispatch({ type: "finishTest" });
      setShowModal(false);
    } else {
      setShowModal(false);
    }
  }

  function handleActiveQuesiton(type) {
    if (type === "dec" && activeQuestion > 0)
      dispatch({ type: "setActiveQuestion", payload: activeQuestion - 1 });
    if (type === "inc" && activeQuestion < questions.length - 1)
      dispatch({ type: "setActiveQuestion", payload: activeQuestion + 1 });
  }

  return (
    <div className={styles.navigate}>
      <span>
        <Button
          backgroundColor="#333"
          visibility={activeQuestion === 0 ? "hidden" : ""}
          padding="10px 20px"
          onClick={() => handleActiveQuesiton("dec")}
        >
          ←
        </Button>
        <Button
          backgroundColor="#333"
          visibility={activeQuestion === 9 ? "hidden" : ""}
          padding="10px 20px"
          onClick={() => handleActiveQuesiton("inc")}
        >
          →
        </Button>
      </span>
      {answeredLength !== questionsLength && (
        <Button padding="10px 60px" onClick={() => setShowModal(true)}>
          Complete
        </Button>
      )}
      {showModal && <Compliance onCompleteTest={handleCompleteTest} />}
    </div>
  );
}
