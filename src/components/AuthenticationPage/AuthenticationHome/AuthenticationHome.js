import { useState } from "react";
import Button from "../../UI/Button/Button";
import styles from "./AuthenticationHome.module.css";
import AuthenticationForm from "../AuthenticationForm/AuthenticationForm";

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
        <AuthenticationForm
          handleForm={handleForm}
          handleSetModal={handleSetModal}
          modal={modal}
        />
      )}
    </div>
  );
}
