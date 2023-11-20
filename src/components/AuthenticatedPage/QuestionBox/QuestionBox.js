import styles from "./QuestionBox.module.css";
import ToggleSwitch from "../../UI/ToggleSwitch/ToggleSwitch";
import Navigation from "../Navigation/Navigation";
import Question from "../Question/Question";
import Timer from "../Timer/Timer";

export default function QuestionBox({
  activeQuestion,
  answered,
  dispatch,
  marked,
  questions,
  secondsRemaining,
}) {
  return (
    <div className={styles["question-container"]}>
      <div className={styles.question}>
        <p>{questions[activeQuestion].question}</p>
        <Question
          activeQuestion={activeQuestion}
          answered={answered}
          dispatch={dispatch}
          questions={questions}
        />
        <ToggleSwitch
          activeQuestion={activeQuestion}
          dispatch={dispatch}
          marked={marked}
        />
      </div>
      <div className={styles.controls}>
        <Navigation
          activeQuestion={activeQuestion}
          dispatch={dispatch}
          answered={answered}
          questions={questions}
        />
        <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
      </div>
    </div>
  );
}
