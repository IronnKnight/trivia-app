import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { AuthProvider } from "./context/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <AuthProvider>
  //     <App />
  //   </AuthProvider>
  // </React.StrictMode>

  <React.StrictMode>
    <App />
  </React.StrictMode>
);
