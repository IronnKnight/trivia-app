import { useRef } from "react";
import Button from "../../UI/Button/Button";
import Header from "../Header/Header";
import History from "../History/History";
import QuestionBox from "../QuestionBox/QuestionBox";
import Select from "../../UI/Select/Select";
import Sidebar from "../Sidebar/Sidebar";
import { useQuestionReducer } from "../../../hooks/useQuestionReducer";
import styles from "./AuthenticatedHome.module.css";

export default function AuthenticatedHome() {
  const {
    state: {
      activeQuestion,
      answered,
      history,
      marked,
      questions,
      secondsRemaining,
      status,
    },
    dispatch,
  } = useQuestionReducer();
  const numberOfQuestions = questions.length;
  const difficulty = useRef(null);

  async function handleFetchQuestions() {
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=10&difficulty=easy"
      );
      const list = await response.json();
      const newList = list.results.map((l) => {
        l.answers = [...l.incorrect_answers, l.correct_answer];
        return l;
      });

      dispatch({ type: "setQuestions", payload: newList });
      dispatch({ type: "setActiveQuestion", payload: 0 });
      dispatch({ type: "setStatus", payload: "started" });
      dispatch({ type: "setSecondsRemaining", payload: 300 });
      console.log(difficulty.current.value);
    } catch (error) {
      console.log(error);
      // TODO
    }
  }

  return (
    <div className={styles["authenticated-home"]}>
      <Header dispatch={dispatch} />
      <div className={styles["main-content"]}>
        {numberOfQuestions > 0 && status === "started" ? (
          <>
            <Sidebar
              activeQuestion={activeQuestion}
              answered={answered}
              dispatch={dispatch}
              marked={marked}
              questions={questions}
            />
            <QuestionBox
              activeQuestion={activeQuestion}
              answered={answered}
              dispatch={dispatch}
              key={activeQuestion}
              marked={marked}
              questions={questions}
              secondsRemaining={secondsRemaining}
            />
          </>
        ) : status === "history" ? (
          <History />
        ) : (
          <>
            <Select
              options={["Easy", "Medium", "Hard"]}
              difficulty={difficulty}
            />
            <Button onClick={handleFetchQuestions}>Start new test</Button>
          </>
        )}
      </div>
    </div>
  );
}

// function shuffle (array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// };
