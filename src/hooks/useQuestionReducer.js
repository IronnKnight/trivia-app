import { useReducer } from "react";

const initialData = {
  questions: [],
  activeQuestion: null,
  answered: [],
  history: [],
  marked: [],
  status: null,
  secondsRemaining: null,
};

// function handleFinishTest(answered, numOfQuestions) {
//   let correct = 0;
//   answered.forEach((answer) => {
//     if (
//       answer.correctAnswer.toLowerCase() === answer.userAnswer.toLowerCase()
//     ) {
//       correct += 1;
//     }
//   });
//   let percentage = correct / numOfQuestions * 100;
//   console.log(percentage + "% ", 100 + "%");
// }

async function handleCreateAnswers(data) {
  const answered = {
    answers: data,
    userId: "nikola",
    time: Date.now(),
  };

  try {
    const results = await fetch("http://localhost:3001/answers", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(answered),
    });

    const result = await results.json();
    console.log(result);
  } catch (error) {
    console.log(error);
    // TODO
  }
}

async function handleGetHistory() {
  try {
    const results = await fetch("http://localhost:3001/answers");
    const data = await results.json();
    return data;
  } catch (error) {}
}

function reducer(state, action) {
  switch (action.type) {
    case "setQuestions":
      return { ...state, questions: action.payload };
    case "setActiveQuestion":
      return { ...state, activeQuestion: action.payload };
    case "setAnswered":
      return { ...state, answered: action.payload };
    case "setMarked":
      return { ...state, marked: action.payload };
    case "setStatus":
      return {
        ...state,
        status: action.payload,
        history: state.history?.length > 0 ? state.history : handleGetHistory(),
      };
    case "setSecondsRemaining":
      return { ...state, secondsRemaining: action.payload };
    case "finishTest":
      // handleFinishTest(state.answered, state.questions.length);
      handleCreateAnswers(state.answered);
      return { ...initialData };
    default:
      throw new Error("Unknown action type");
  }
}

export function useQuestionReducer() {
  const [state, dispatch] = useReducer(reducer, initialData);

  return {
    state,
    dispatch,
  };
}
