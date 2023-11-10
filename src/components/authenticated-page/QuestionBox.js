import styles from "./QuestionBox.module.css";
import ToggleSwitch from "../ui/ToggleSwitch";
import Navigation from "./Navigation";
import Question from "./Question";

export default function QuestionBox({
  questions,
  activeQuestion,
  answered,
  marked,
  onSetActiveQuestion,
  onSetAnswered,
  onSetMarked,
  onSetStarted,
}) {
  return (
    <div className={styles["question-container"]}>
      <div className={styles.question}>
        <p>{questions[activeQuestion].question}</p>
        <Question
          questions={questions}
          activeQuestion={activeQuestion}
          answered={answered}
          onSetAnswered={onSetAnswered}
        />
        <ToggleSwitch
          activeQuestion={activeQuestion}
          marked={marked}
          onSetMarked={onSetMarked}
        />
      </div>
      <Navigation
        activeQuestion={activeQuestion}
        onSetActiveQuestion={onSetActiveQuestion}
        answered={answered}
        questions={questions}
        onSetStarted={onSetStarted}
      />
    </div>
  );
}
