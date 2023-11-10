import { useState } from "react";

import Button from "../ui/Button";
import styles from "./AuthenticationHome.module.css";

export default function AuthenticationHome({ onSetIsLoggedIn }) {
  const [modal, setModal] = useState("");

  function handleSetModal(modal) {
    setModal(modal);
  }

  function handleForm(e) {
    e.preventDefault();
    onSetIsLoggedIn();
  }

  return (
    <div className={styles["authentication-home"]}>
      <Button onClick={() => handleSetModal("login")}>Login</Button>
      <Button
        onClick={() => handleSetModal("register")}
        backgroundColor="#008CBA"
      >
        Register
      </Button>
      {modal && (
        <div className={styles.modal}>
          <div className={styles["header"]}>
            <Button
              onClick={() => handleSetModal("")}
              backgroundColor="#555555"
              padding="7px 10px"
            >
              X
            </Button>
          </div>
          <form className={styles.form} onSubmit={(e) => handleForm(e)}>
            <div className={styles.row}>
              <label>Username:</label>
              <input type="text" />
            </div>
            <div className={styles.row}>
              <label>Password:</label>
              <input type="text" />
            </div>
            <Button backgroundColor="#008CBA">
              {modal === "login" ? "Login" : "Register"}
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}
