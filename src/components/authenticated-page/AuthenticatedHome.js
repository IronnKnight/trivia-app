import { useState, useEffect } from "react";
import styles from "./AuthenticatedHome.module.css";
import Button from "../ui/Button";
import Select from "../ui/Select";
import Header from "./Header";
import QuestionBox from "./QuestionBox";
import Sidebar from "./Sidebar";

export default function AuthenticatedHome() {
  const [questions, setQuestions] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [answered, setAnswered] = useState([]);
  const [marked, setMarked] = useState([]);
  const [testStarted, setTestStarted] = useState(false);

  const numberOfQuestions = questions.length;

  // useEffect(() => {
  //   handleFetchQuestions();
  // }, []);

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

      setQuestions(newList);
      setActiveQuestion(0);
      setTestStarted(true);
    } catch (error) {
      console.log(error);
      // TODO
    }
  }

  function handleSetActiveQuestion(i) {
    if (i > questions.length || i < 0) return;
    setActiveQuestion(i);
  }

  function handleSetAnswered(userAnswer) {
    const { answers, correct_answer, question } = questions[activeQuestion];
    const newQuestion = {
      id: activeQuestion,
      answers,
      correctAnswer: correct_answer,
      question,
      userAnswer,
    };

    let exists = false;

    setAnswered((answered) => {
      const modified = answered.map((el) => {
        if (el.id === activeQuestion) {
          exists = true;
          el.userAnswer = userAnswer;
        }
        return el;
      });

      return exists ? [...modified] : [...modified, newQuestion];
    });
  }

  function handleSetMarked() {
    setMarked((marked) => {
      const found = marked.some((val) => val === activeQuestion);
      return found
        ? [...marked.filter((val) => val !== activeQuestion)]
        : [...marked, activeQuestion];
    });
  }

  return (
    <div className={styles["authenticated-home"]}>
      <Header />
      <div className={styles["main-content"]}>
        {numberOfQuestions > 0 && testStarted ? (
          <>
            <Sidebar
              numberOfQuestions={numberOfQuestions}
              activeQuestion={activeQuestion}
              answered={answered}
              marked={marked}
              onSetActiveQuestion={handleSetActiveQuestion}
            />
            <QuestionBox
              questions={questions}
              activeQuestion={activeQuestion}
              answered={answered}
              marked={marked}
              onSetActiveQuestion={setActiveQuestion}
              onSetAnswered={handleSetAnswered}
              onSetMarked={handleSetMarked}
              onSetStarted={setTestStarted}
              key={activeQuestion}
            />
          </>
        ) : (
          <>
            <Select />
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
