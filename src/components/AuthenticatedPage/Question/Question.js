import styles from "./Question.module.css";

export default function Question({
  activeQuestion,
  answered,
  dispatch,
  questions,
}) {
  function handleSetAnswered(userAnswer) {
    const { correct_answer, question } = questions[activeQuestion];
    const newQuestion = {
      id: activeQuestion,
      correctAnswer: correct_answer,
      question,
      userAnswer,
    };
    let exists = false;
    const modified = answered.map((questionObj) => {
      if (questionObj.id === activeQuestion) {
        exists = true;
        questionObj.userAnswer = userAnswer;
      }
      return questionObj;
    });

    dispatch({
      type: "setAnswered",
      payload: exists ? [...modified] : [...modified, newQuestion],
    });
  }

  const answerExists = answered.find(
    (el) => el.id === activeQuestion
  )?.userAnswer;

  return (
    <ul className={styles.answers}>
      {questions[activeQuestion].answers.map((userAnswer, i) => (
        <li key={i}>
          <label>{i + 1}.</label>
          <input
            type="radio"
            checked={answerExists === userAnswer}
            value={userAnswer}
            name="answers"
            onChange={() => handleSetAnswered(userAnswer)}
          />
          <label>{userAnswer}</label>
        </li>
      ))}
    </ul>
  );
}
