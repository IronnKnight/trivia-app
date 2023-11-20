import { useEffect } from "react";
import styles from "./Timer.module.css";

export default function Timer({ dispatch, secondsRemaining }) {
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (secondsRemaining <= 0) {
        dispatch({ type: "finishTest" });
      } else {
        dispatch({
          type: "setSecondsRemaining",
          payload: secondsRemaining - 1,
        });
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [dispatch, secondsRemaining]);

  const min = Math.floor(secondsRemaining / 60);
  const sec = secondsRemaining % 60;

  return (
    <div
      style={{ backgroundColor: secondsRemaining < 120 ? "#ff4d4d" : "" }}
      className={styles.timer}
    >{`${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`}</div>
  );
}
