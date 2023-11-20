import Modal from "../../Modal";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import styles from "./AuthenticationForm.module.css";

export default function AuthenticationForm({
  handleForm,
  handleSetModal,
  modal,
}) {
  return (
    <Modal>
      <div className={styles.header}>
        <Button
          onClick={() => handleSetModal("")}
          backgroundColor="#ff4d4d"
          padding="7px 10px"
        >
          X
        </Button>
      </div>
      <form className={styles.form} onSubmit={(e) => handleForm(e)}>
        <Input label={"Username:"} type="text" />
        <Input label={"Password:"} type="password" />
        <Button backgroundColor={modal === "register" ? "#008CBA" : "#04AA6D"}>
          {modal === "login" ? "Login" : "Register"}
        </Button>
      </form>
    </Modal>
  );
}
