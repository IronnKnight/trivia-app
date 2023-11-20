// import { useAuth } from '../context/auth-context';
import { useState } from "react";
import "./App.module.css";
import AuthenticationHome from "./AuthenticationPage/AuthenticationHome/AuthenticationHome";
import AuthenticatedHome from "./AuthenticatedPage/AuthenticatedHome/AuthenticatedHome";

function App() {
  // const { isLoggedIn} = useAuth();
  // return isLoggedIn ? <div>Authenticated</div> : <AuthenticationHome />
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleIsLoggedIn() {
    setIsLoggedIn((isLogged) => !isLogged);
  }

  return !isLoggedIn ? (
    <AuthenticationHome onSetIsLoggedIn={handleIsLoggedIn} />
  ) : (
    <AuthenticatedHome />
  );
}

export default App;
